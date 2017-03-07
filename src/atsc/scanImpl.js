function startSetSource(sourceType) {
    model.channelSearch.setSource(sourceType); //DTV-T means #15.
    if (model.channelSearch.getSource() == sourceType)
        return true;
    else
        return false;
}

function setSource(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var result = startSetSource(sourceType);
        assert.equal(result, true, "Test setSource");
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
                    done();
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
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
                model.channelSearch.Finish();
                model.channelSearch.onSearchingProgressChaged = null;
                model.channelSearch.onSearchStateChaged = null;
            }
        };
        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
            if (value >= 5)
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
        var isAtv = 0;
        var done = assert.async(times);
        model.channelSearch.onSearchStateChaged = function (value) {
            var serviceNumDtv = 0;
            var serviceNumAtv = 0;
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    if (isAtv == 0) {
                        isAtv = 1;
                        isSearched = 0;
                        startAutoScan(sourceType + 2);
                    }
                    else {
                        serviceNumDtv = model.channelSearch.getFoundDigitServices();
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        assert.equal(serviceNumDtv + serviceNumAtv, expectNum, "check serives");
                        $("#total").html(serviceNumDtv + serviceNumAtv);
                        if (serviceNumDtv + serviceNumAtv == expectNum)
                            flag = 1;
                        else
                            flag = 1;//0;
                        model.channelSearch.Finish();
                        if ((i < times) && (flag == 1)) {
                            isSearched = 0;
                            flag = 0;
                            isAtv = 0;
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
            if (isAtv == 0) {
                newValue = Math.ceil(value / 2);
            }
            else {
                newValue = 50 + Math.ceil(value / 2);
            }
            $("#progress").html(newValue);
        }
        startAutoScan(sourceType);
        i++;
        $("#times").html(i);
    });
}

function autoScanStart(sourceType, testName) {
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
                done();
                model.channelSearch.Finish();
                model.channelSearch.onSearchStateChaged = null;
                model.channelSearch.onSearchingProgressChaged = null;
            }
            else if ((value == 0) && ((sourceType == 17) || (sourceType == 18))) {
                if (isSearched == 1) {
                    assert.ok(true, "scan started atv");
                    done();
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
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

function ScanCancel(repeat, expectNum, sourceType) {
    QUnit.test("ScanCancel test", function (assert) {
            modeljs.dbgprint("...............................Going to auto scan. ", 1);
            var flag = 1;
            var i = 0;
            var times = repeat;
            var isSearched = 0;
            var left = 0;
            var done = assert.async(times);
            model.channelSearch.onSearchStateChaged = function (value) {
                var serviceNum = 0;
                if (value == 1) {
                    isSearched = 1;
                }
                else if (value == 11) {
                    if ((sourceType == 15) || (sourceType == 16))
                        serviceNum = model.channelSearch.getFoundDigitServices();
                    else
                        serviceNum = model.channelSearch.getFoundAnalogServices();

                    assert.equal(serviceNum, expectNum, "check serives");

                    if (serviceNum == expectNum)
                        flag = 1;
                    else
                        flag = 1;//0;

                    if ((i < times) && (isSearched == 1) && (flag == 1)) {
                        isSearched = 0;
                        flag = 0;
                        if ((sourceType == 15) || (sourceType == 16))
                            startAutoScan(sourceType);
                        else

                            setTimeout(startAutoScan(sourceType), 4000);
                        i++;
                        done();
                    }
                    else {
                        for (left = 0; left <= times - i; left++)
                            done();
                    }
                }
            };

            model.channelSearch.onSearchingProgressChaged = function (value) {
                modeljs.dbgprint("......................................Current value:" + value, 1);
                $("#progress").html(value);
                if (value >= 20)
                    model.channelSearch.Stop();

            }

            startAutoScan(sourceType);
            i++;
        }
    );
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
                    model.channelSearch.Finish();
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
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    if ((sourceType == 15) || (sourceType == 16)) {
                        serviceNumDtv = model.channelSearch.getFoundDigitServices();
                        $("#total").html(serviceNumDtv);
                        assert.equal(serviceNumDtv, expectNum, "get serives");
                        model.channelSearch.onFoundDigitServicesChaged = null;
                    }
                    else if ((sourceType == 17) || (sourceType == 18)) {
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        $("#total").html(serviceNumAtv);
                        assert.equal(serviceNumAtv, expectNum, "get serives");
                        model.channelSearch.onFoundAnalogServicesChaged = null;
                    }
                    done();
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
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
                        assert.equal(serviceNumDtv, expectNum, "get serives");
                        model.channelSearch.onFoundDigitServicesChaged = null;
                    }
                    else if ((sourceType == 17) || (sourceType == 18)) {
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        $("#total").html(serviceNumAtv);
                        assert.equal(serviceNumAtv, expectNum, "get serives");
                        model.channelSearch.onFoundAnalogServicesChaged = null;
                    }
                    done();
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
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
                    done();
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
                }
            }
            else if (value == 11) {
                assert.ok(false, "cancel state");
                done();
                model.channelSearch.Finish();
                model.channelSearch.onSearchStateChaged = null;
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
                    done();
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchStateChaged = null;
                }
            }
            else if (value == 11) {
                assert.ok(false, "cancel state ");
                done();
                model.channelSearch.Finish();
                model.channelSearch.onSearchStateChaged = null;
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
                    model.channelSearch.Finish();
                    model.channelSearch.onSearchingProgressChaged = null;
                    model.channelSearch.onSearchStateChaged = null;
                }
            }
            else if (value == 11) {
                assert.ok(true, "cancel state");
                done();
                model.channelSearch.Finish();
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
    model.channelSearch.setSource(sourceType);
    QUnit.test(funcName, function (assert) {
        var result = setFrequency(fre);
        assert.ok(result, "manualScanSetFrequency");
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
            done();
        }

        startAutoScan(sourceType);
    });
}