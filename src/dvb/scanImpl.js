function startSetSource(sourceType) {
    model.channelSearch.setSource(sourceType); //DTV-T means #15.
    if (model.channelSearch.getSource() == sourceType)
        return true;
    else
        return false;
}

function startGetSource() {
    var sourceType = model.channelSearch.getSource(); //DTV-T means #15.
    $("#details").html(sourceType);
    return sourceType;
}
function setSource(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var result = startSetSource(sourceType);
        assert.equal(result, true, "Test setSource");
    });
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


function manualSearch(fre, sourceType, t_name) {
    QUnit.test(t_name, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                assert.equal(isSearched, 1, "check service");
                done();
            }
        };
        startManualScan(fre, sourceType);
    });

}
function ScanStop(sourceType, t_name) {
    QUnit.test(t_name, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.equal(isSearched, 1, "check stop");
                    done();
                }
            }
            else if (value == 11) {
                assert.equal(isSearched, 1, "check stop");
                done();
            }
        };
        model.channelSearch.onProgressChaged = function (value) {
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
        var done = assert.async(times);
        var curServiceNumDtv=0;
        var curServiceNumAtv=0;
        model.channelSearch.onStateChaged = function (value) {
            var serviceNumDtv = 0;
            var serviceNumAtv = 0;
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    {
                        assert.equal(curServiceNumDtv + curServiceNumAtv, expectNum, "check serives");
                        console.log(".curServiceNumDtv++ curServiceNumAtv " + serviceNumDtv);
                        $("#total").html(curServiceNumDtv + curServiceNumAtv);
                        if (curServiceNumDtv + curServiceNumAtv == expectNum)
                            flag = 1;
                        else
                            flag = 1;//0;

                        if ((i < times)&& (flag == 1)) {
                            isSearched = 0;
                            flag = 0;
                            serviceNumDtv=0;
                            serviceNumAtv=0;
                            curServiceNumDtv=0;
                            curServiceNumAtv=0;
                            setTimeout(startAutoScan, 3000, sourceType);
                            i++;
                            $("#times").html(i);
                            done();
                        }
                        else {
                            for (left = 0; left <= times - i; left++)
                                done();
                            model.channelSearch.onProgressChaged = null;
                            model.channelSearch.onStateChaged = null;
                            model.channelSearch.onFoundDigitServicesChaged =null;
                            model.channelSearch.onFoundAnalogServicesChaged=null;
                        }
                    }
                }
            }
        };
        model.channelSearch.onProgressChaged = function (value) {
            $("#progress").html(value);
        }
        model.channelSearch.onFoundDigitServicesChaged = function (value) {
        	console.log("..onFoundDigitServicesChaged= " + value);
        		serviceNumDtv=value+model.channelSearch.getFoundRadioServices();
        		if(curServiceNumDtv<serviceNumDtv){curServiceNumDtv=serviceNumDtv;}	
        		$("#total").html(curServiceNumDtv);
        }
        model.channelSearch.onFoundAnalogServicesChaged = function (value) {
        		serviceNumAtv=value;
        		if(curServiceNumAtv<serviceNumAtv){curServiceNumAtv=serviceNumAtv;}
        		$("#total").html(curServiceNumAtv+curServiceNumDtv);
        }        
        
    model.channelSearch.NetworkSet(11,-1,20);
    model.channelSearch.setSearchMode(0);
    model.channelSearch.setScramble(0);
    model.channelSearch.setDvbtScanMode(0);
            
        startAutoScan(sourceType);
        i++;
        $("#times").html(i);
    });
}

function ScanOnce(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.equal(isSearched, 1, "check started");
                    done();
                }
            }
            else if (value == 11) {
                assert.equal(isSearched, 1, "check started");
                done();
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
function ScanProgress(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1)
                    done();
            }
            else if (value == 11)
                done();
        };

        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
            if (value == 100)
                assert.ok(true, "check progress");
        }
        startAutoScan(sourceType);
    });
}

function autoGetServices(sourceType, testName) {
    QUnit.test(testName, function (assert) {
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
                    }
                    else if ((sourceType == 17) || (sourceType == 18)) {
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        $("#total").html(serviceNumAtv);
                    }
                    assert.ok(true, "get serives");
                    done();
                }

            }
        };
        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
        }
        startAutoScan(sourceType);
    });
}
function manualGetServices(fre, sourceType, testName) {
    QUnit.test(testName, function (assert) {
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
                    }
                    else if ((sourceType == 17) || (sourceType == 18)) {
                        serviceNumAtv = model.channelSearch.getFoundAnalogServices();
                        $("#total").html(serviceNumAtv);
                    }
                    assert.ok(true, "get serives");
                    done();
                }

            }
        };
        startManualScan(fre, sourceType);
    });
}
function scanComplete(sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(true, "check scanComplete");
                    done();
                }
            }
            else if (value == 11) {
                assert.ok(false, "check scanComplete");
                done();
            }
        };

        model.channelSearch.onSearchingProgressChaged = function (value) {
            $("#progress").html(value);
        }
        startAutoScan(sourceType);
    });
}
function manualScanComplete(fre, sourceType, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var isSearched = 0;
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(true, "check manualScanComplete");
                    done();
                }
            }
            else if (value == 11) {
                assert.ok(false, "check manualScanComplete");
                done();
            }
        };
        startManualScan(fre, sourceType);
    });
}

function autoScanCancel(sourceType, t_name) {
    QUnit.test(t_name, function (assert) {
        var isSearched = 0;
        var done = assert.async(1);
        model.channelSearch.onSearchStateChaged = function (value) {
            if (value == 1) {
                isSearched = 1;
            }
            else if (value == 0) {
                if (isSearched == 1) {
                    assert.ok(false, "check autoScanCancel");
                    done();
                }
            }
            else if (value == 11) {
                assert.ok(true, "check autoScanCancel");
                done();
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

function manualScanSetFre(fre, t_name) {
    QUnit.test(t_name, function (assert) {
        var result = setFrequency(fre);
        assert.equal(result, true, "Test manualScanSetFre");
    });
}
function getRunningState() {
    if (model.channelSearch.getRunning() == 1)
        return true;
    else
        return false;
}

function isRunning(t_name) {
    QUnit.test(t_name, function (assert) {
        var result = getRunningState();
        assert.equal(result, false, "Test isRunning");
    });
}