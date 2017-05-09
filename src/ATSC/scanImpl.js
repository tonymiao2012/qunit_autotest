var fh = new fileHandler();
var workroot = 1;


function setSource(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);

        function setSourceTimeout() {
            var result = model.channelSearch.getSource();
            assert.equal(result, sourceType, "Test setSource");
            done();
            if (result != true) {
                var path = "hisenseUI/" + testName.trim() + ".txt";
                var content = "Test setSource failed on " + getLocalTime() + ". Assert result: " + result;
                fh.appendStrToFile(path, content, workroot);
            }
        }

        model.channelSearch.setSource(sourceType);
        setTimeout(setSourceTimeout, 1000);
    });
}

function startGetSource() {
    var sourceType = model.channelSearch.getSource(); //DTV-T means #15.
    $("#details").html(sourceType);
    return sourceType;
}
function getSource(sourceType, testName) {
    $("#details").html("");
    QUnit.test(testName, function (assert) {
        var result = startGetSource();
        assert.equal(result, sourceType, "Test getSource");

        if (result != sourceType) {
            var path = "hisenseUI/" + testName.trim() + ".txt";
            var content = "Test getSource failed on " + getLocalTime() + ". Assert result: " + result;
            fh.appendStrToFile(path, content, workroot);
        }
    });
}

function startAutoScan(sourceType) {
    if (model.channelSearch.getRunning() == 1) {
        model.channelSearch.Stop();
    }
    model.channelSearch.setSource(sourceType); //T means #15.
    model.channelSearch.Start(0);
    return true;
}

function startManualScan(fre_index, sourceType) {
    if (model.channelSearch.getRunning() == 1) {
        model.channelSearch.Stop();
    }
    model.channelSearch.setSource(sourceType); //T means #15.
    model.channelSearch.setSearchFrequency(fre_index);
    model.channelSearch.Start(1);
    return true;
}


function manualScanStart(fre, sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(true, "manual start");
                    //if((sourceType==17)||(sourceType==18))
                    //model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
                    done();
                }
            }
        };
        startManualScan(fre, sourceType);
    });
}
function autoScanStop(sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 11) {
                assert.ok(true, 1, "scan stop");
                done();
                model.channelSearch.onSearchingProgressChaged = null;
                model.channelSearch.onSearchStateChaged = null;
            }
        };
        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);

            var serviceNumDtv = model.channelSearch.getFoundDigitServices();
            var serviceNumAtv = model.channelSearch.getFoundAnalogServices();
            $("#total").html(serviceNumDtv + serviceNumAtv);

            if (value >= 30)
                model.channelSearch.Stop();
        }
        startAutoScan(sourceType);
    });
}

function autoSearch(repeat, expectNum, sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var flag = 1;
        var i = 0;
        var times = repeat;
        var isSearched = 0;
        var left = 0;
        var scanOrder = 1;
        var curSource;
        var serviceNumDtvT = 0;
        var serviceNumAtvT = 0;
        var serviceNumDtvC = 0;
        var serviceNumAtvC = 0;
        var serviceTotal = 0;
        var done = assert.async(times);
        model.channelSearch.onSearchStateChaged = function (value) {
            console.log("autoSearch  value:" + value);
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    if (scanOrder < 4) {
                        scanOrder++;
                        isSearched = 0;
                        if (curSource == 15) {
                            serviceNumDtvT = model.channelSearch.getFoundDigitServices();
                            curSource += 2;
                        }
                        if (curSource == 16) {
                            serviceNumDtvC = model.channelSearch.getFoundDigitServices();
                            curSource += 2;
                        }
                        else if (curSource == 17) {
                            serviceNumAtvT = model.channelSearch.getFoundAnalogServices();
                            curSource -= 1;
                        }
                        else if (curSource == 18) {
                            serviceNumAtvC = model.channelSearch.getFoundAnalogServices();
                            curSource -= 3;
                        }
                        startAutoScan(curSource);
                    }
                    else {
                        serviceTotal = serviceNumDtvT + serviceNumDtvC + serviceNumAtvT + serviceNumAtvC;
                        assert.equal(serviceTotal, expectNum, "check services");
                        $("#total").html(serviceTotal);
                        if (serviceTotal == expectNum)
                            flag = 1;
                        else {
                            flag = 1;//0;
                            var path = "hisenseUI/" + testName.trim() + ".txt";
                            var content = "Test failed on " + getLocalTime() + ". Assert result: " + serviceTotal + ", expect number: " + expectNum + ". Running times: " + i;
                            fh.appendStrToFile(path, content, workroot);
                        }
                        model.channelSearch.setSource(sourceType);
                        model.channelSearch.Finish();
                        if ((i < times) && (flag == 1)) {
                            isSearched = 0;
                            flag = 0;
                            scanOrder = 1;
                            curSource = sourceType;
                            setTimeout(startAutoScan, 3000, sourceType);
                            i++;
                            $("#times").html(i);
                            done();
                        }
                        else {
                            for (left = 0; left <= times - i; left++)
                                done();
                            model.channelSearch.onSearchingProgressChaged = null;
                            model.channelSearch.onSearchStateChaged = null;
                        }
                    }
                }
            }
            else {
                for (left = 0; left <= times - i; left++)
                    done();
                model.channelSearch.onSearchingProgressChaged = null;
                model.channelSearch.onSearchStateChaged = null;
            }
        };
        model.channelSearch.onSearchingProgressChaged = function (value) {
            var newValue = 0;
            if (scanOrder == 1) {
                newValue = Math.ceil(value / 4);
            }
            else if (scanOrder == 2) {
                newValue = 25 + Math.ceil(value / 4);
            }
            else if (scanOrder == 3) {
                newValue = 50 + Math.ceil(value / 4);
            }
            else {
                newValue = 75 + Math.ceil(value / 4);
            }
            $("#progress").html(newValue);
        }
        startAutoScan(sourceType);
        curSource = sourceType;
        i++;
        $("#times").html(i);
    });
    /*
     QUnit.testDone(QunitTestCallBack(details, testName, workroot, fh));
     */
}

function autoScanStart(sourceType, testName) {
    var path = "hisenseUI/" + testName.trim() + ".txt";
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            console.log("autoScanStart  value:" + value);
            if (value == 1) {
                isSearched = 1;
            }
            else if ((value == 11) && ((sourceType == 15) || (sourceType == 16))) {
                assert.equal(isSearched, 1, "scan started dtv");

                if (isSearched != 1) {
                    var content = "Scan DTV start failed on " + getLocalTime() + ". Assert result: " + isSearched;
                    fh.appendStrToFile(path, content, workroot);
                }

                //model.channelSearch.Finish();
                model.channelSearch.onSearchStateChaged = null;
                model.channelSearch.onSearchingProgressChaged = null;
                done();
            }
            else if ((value == 0) && ((sourceType == 17) || (sourceType == 18))) {
                if (isSearched == 1) {
                    assert.ok(true, "scan started atv");
                    // model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
                    done();
                }
            }
        };

        if ((sourceType == 15) || (sourceType == 16)) {
            model.channelSearch.onSearchingProgressChaged = function (value) {
                $("#progress").html(value);
                if (value >= 5)
                    model.channelSearch.Stop();
            };
        }
        startAutoScan(sourceType);
    });
}

function autoScanProgress(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    done();
                    //model.channelSearch.Finish();
                    model.channelSearch.onSearchingProgressChaged = null;
                    model.channelSearch.onSearchStateChaged = null;
                }
            }
        };

        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
            if (value == 100)
                assert.ok(true, "check progress");
        }
        startAutoScan(sourceType);
    });
}

function autoScanServices(expectNum, sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            var serviceNumDtv = 0;
            var serviceNumAtv = 0;
            console.log("...state=", value);
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    if ((sourceType == 15) || (sourceType == 16)) {
                        console.log("...end1=");
                        serviceNumDtv = model.channelSearch.getFoundDigitServices();
                        $("#total").html(serviceNumDtv);
                        assert.equal(serviceNumDtv, expectNum, "get services");

                        if (serviceNumDtv != expectNum) {
                            var path = "hisenseUI/" + funcName.trim() + ".txt";
                            var content = "Test failed on " + getLocalTime() + ". Service number DTV: " + serviceNumDtv + ", expect number: " + expectNum;
                            fh.appendStrToFile(path, content, workroot);
                        }

                        model.channelSearch.onFoundDigitServicesChaged = null;
                    }
                    else if ((sourceType == 17) || (sourceType == 18)) {
                        console.log("...end2=");
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        $("#total").html(serviceNumAtv);
                        assert.equal(serviceNumAtv, expectNum, "get services");

                        if (serviceNumAtv != expectNum) {
                            var path = "hisenseUI/" + funcName.trim() + ".txt";
                            var content = "Test failed on " + getLocalTime() + ". Service number ATV: " + serviceNumAtv + ", expect number: " + expectNum;
                            fh.appendStrToFile(path, content, workroot);
                        }

                        model.channelSearch.onFoundAnalogServicesChaged = null;
                        //model.channelSearch.Finish();
                    }
                    model.channelSearch.onSearchStateChaged = null;
                    done();
                }

            }
        };
        if ((sourceType == 15) || (sourceType == 16)) {
            model.channelSearch.onFoundDigitServicesChaged = function (value) {
                $("#total").html(value);
            }
        }
        if ((sourceType == 17) || (sourceType == 18)) {
            model.channelSearch.onFoundAnalogServicesChaged = function (value) {
                $("#total").html(value);
            }
        }
        startAutoScan(sourceType);
    });
}
function manualScanServices(expectNum, fre, sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            var serviceNumDtv = 0;
            var serviceNumAtv = 0;
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    if ((sourceType == 15) || (sourceType == 16)) {
                        serviceNumDtv = model.channelSearch.getFoundDigitServices();
                        $("#total").html(serviceNumDtv);
                        assert.equal(serviceNumDtv, expectNum, "get services");

                        if (serviceNumDtv != expectNum) {
                            var path = "hisenseUI/" + funcName.trim() + ".txt";
                            var content = "Test failed on " + getLocalTime() + ". Service number DTV: " + serviceNumDtv + ", expect number: " + expectNum;
                            fh.appendStrToFile(path, content, workroot);
                        }

                        model.channelSearch.onFoundDigitServicesChaged = null;
                    }
                    else if ((sourceType == 17) || (sourceType == 18)) {
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        $("#total").html(serviceNumAtv);
                        assert.equal(serviceNumAtv, expectNum, "get services");

                        if (serviceNumAtv != expectNum) {
                            var path = "hisenseUI/" + funcName.trim() + ".txt";
                            var content = "Test failed on " + getLocalTime() + ". Service number ATV: " + serviceNumAtv + ", expect number: " + expectNum;
                            fh.appendStrToFile(path, content, workroot);
                        }

                        model.channelSearch.onFoundAnalogServicesChaged = null;
                        //model.channelSearch.Finish();
                    }
                    model.channelSearch.onSearchStateChaged = null;
                    done();
                }

            }
        };
        if ((sourceType == 15) || (sourceType == 16)) {
            model.channelSearch.onFoundDigitServicesChaged = function (value) {
                $("#total").html(value);
            }
        }
        if ((sourceType == 17) || (sourceType == 18)) {
            model.channelSearch.onFoundAnalogServicesChaged = function (value) {
                $("#total").html(value);
            }
        }
        startManualScan(fre, sourceType);
    });
}
function autoScanCompleteState(sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(true, " Complete state");
                    //if((sourceType==17)||(sourceType==18))
                    //model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
                    done();
                }
            }
            else if (value == 11) {
                assert.ok(false, "cancel state");
                //if((sourceType==17)||(sourceType==18))
                //model.channelSearch.Finish();
                model.channelSearch.onSearchStateChaged = null;
                done();
            }
        };
        startAutoScan(sourceType);
    });
}
function manualScanCompleteState(fre, sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(true, " Complete state");
                    //if((sourceType==17)||(sourceType==18))
                    //model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
                    done();
                }
            }
            else if (value == 11) {
                assert.ok(false, "cancel state ");
                //if((sourceType==17)||(sourceType==18))
                //model.channelSearch.Finish();
                model.channelSearch.onSearchStateChaged = null;
                done();
            }
        };
        startManualScan(fre, sourceType);
    });
}

function autoScanCancelState(sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(false, " complete state ");
                    done();
                    model.channelSearch.onSearchingProgressChaged = null;
                    model.channelSearch.onSearchStateChaged = null;
                }
            }
            else if (value == 11) {
                assert.ok(true, "cancel state");
                done();
                model.channelSearch.onSearchingProgressChaged = null;
                model.channelSearch.onSearchStateChaged = null;
            }
        };
        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
            if (value >= 10)
                model.channelSearch.Stop();
        }
        startAutoScan(sourceType);
    });
}

function setFrequency(fre) {
    model.channelSearch.setSearchFrequency(fre);
    if (model.channelSearch.getSearchFrequency() == fre)
        return true;
    else
        return false;
}

function manualScanSetFrequency(fre, sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        model.channelSearch.setSource(sourceType);
        var result = setFrequency(fre);
        assert.ok(result, "manualScanSetFrequency");

        if (result !== true) {
            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + getLocalTime() + ". Assert result: " + result;
            fh.appendStrToFile(path, content, workroot);
        }
    });
}
function getRunningState() {
    if (model.channelSearch.getRunning() == 1)
        return true;
    else
        return false;
}

function ScanIsRunning(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = getRunningState();
        assert.equal(result, false, "ScanIsRunning");

        if (result !== false) {
            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + getLocalTime() + ". Assert result: " + result;
            fh.appendStrToFile(path, content, workroot);
        }
    });
}
function ScanFinish(sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 11) {
                model.channelSearch.Finish();
                setTimeout(checkRunning, 1000);
                model.channelSearch.onSearchingProgressChaged = null;
                model.channelSearch.onSearchStateChaged = null;
            }
        };
        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
            if (value >= 5)
                model.channelSearch.Stop();
        }
        function checkRunning() {
            var running = model.channelSearch.getRunning();
            assert.equal(running, 0, "finish state");

            if (running != 0) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + getLocalTime() + ". Assert result: " + running;
                fh.appendStrToFile(path, content, workroot);
            }

            done();
        }

        startAutoScan(sourceType);
    });
}

function finishScan(funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function finishTimeout() {
            var result = model.channelSearch.getRunning();
            assert.equal(result, false, "Test finishScan");
            done();
            if (result == true) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test finishScan failed on " + getLocalTime() + ". Assert result: " + result;
                fh.appendStrToFile(path, content, workroot);
            }
        }

        model.channelSearch.Finish();
        setTimeout(finishTimeout, 1000);
    });
}