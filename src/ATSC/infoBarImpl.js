function startGetCurLocalTime() {
    var val = model.datetime.getCurLocalTime();
    return val;
}
function getCurLocalTime(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = startGetCurLocalTime();
        assert.notEqual(result, 0, "Test getCurLocalTime");
        var date = new Date(result * 1000);
        $("#details").html(date.toLocaleString());
    });

}

function startGetTimeZone() {
    var val = model.datetime.getTimeZone();
    $("#details").html(val);
    if ((val >= 0) && (val <= 7))
        return true;
    else
        return false;
}
function getTimeZone(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = startGetTimeZone();
        assert.ok(result, "getTimeZone");
    });
}

function startSetTimeZone(zone) {
    model.datetime.setTimeZone(zone);
    if (model.datetime.getTimeZone() == zone)
        return true;
    else
        return false;
}
function setTimeZone(zone, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetTimeZone(zone);
        assert.equal(result, true, "setTimeZone");
    });
}

function startGetTimeFormat() {
    var val = model.datetime.getTimeFormat();
    $("#details").html(val);
    if ((val == 0) || (val == 1))
        return true;
    else
        return false;
}
function getTimeFormat(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = startGetTimeFormat();
        assert.ok(result, "getTimeFormat");
    });
}

function startSetTimeFromat(format) {
    model.datetime.setTimeFormat(format);
    if (model.datetime.getTimeFormat() == format)
        return true;
    else
        return false;
}
function setTimeFormat(format, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetTimeFromat(format);
        assert.ok(result, "setTimeFormat");
    });
}


function getEitNow() {
    var result = model.tvservice.getEitMainNow();
    return result;
}
function getEitMainNow(funcName) {
    QUnit.test(funcName, function (assert) {
        var pfResultNow;
        pfResultNow = getEitNow();
        assert.equal(pfResultNow.length, 12, " getEitMainNow");
        if (pfResultNow.length == 12) {
            var startime = new Date(pfResultNow[2] * 1000);
            var stoptime = new Date(pfResultNow[3] * 1000);
            $("#details").html("window:" + pfResultNow[0] + ";type:" + pfResultNow[1] + ";start:" + startime.toLocaleString() + ";end:" + stoptime.toLocaleString()
                + ";title:" + pfResultNow[4] + ";shortDes:" + pfResultNow[5] + ";longDes:" + pfResultNow[6] + ";flag:" + pfResultNow[7]
                + ";rating:" + pfResultNow[8] + ";eventID:" + pfResultNow[9] + ";themes:" + pfResultNow[10] + ";linkage:" + pfResultNow[11]);
        }
    });

}

function getEitNext() {
    var result = model.tvservice.getEitMainNext();
    return result;
}
function getEitMainNext(funcName) {
    QUnit.test(funcName, function (assert) {
        var pfResultNext;
        pfResultNext = getEitNext();
        assert.equal(pfResultNext.length, 12, " getEitMainNext");
        if (pfResultNext.length == 12) {
            var startime = new Date(pfResultNext[2] * 1000);
            var stoptime = new Date(pfResultNext[3] * 1000);
            $("#details").html("window:" + pfResultNext[0] + ";type:" + pfResultNext[1] + ";start:" + startime.toLocaleString() + ";end:" + stoptime.toLocaleString()
                + ";title:" + pfResultNext[4] + ";shortDes:" + pfResultNext[5] + ";longDes:" + pfResultNext[6] + ";flag:" + pfResultNext[7]
                + ";rating:" + pfResultNext[8] + ";eventID:" + pfResultNext[9] + ";themes:" + pfResultNext[10] + ";linkage:" + pfResultNext[11]);
        }
    });

}
function checkEitMainNowChanged(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        if (chn < allChannels_T.length) {
            var done = assert.async(1);
            var timerFlag;

            function onEitMainNowChanngedTimeout() {
                model.tvservice.onEitMainNowChanged = null;
                assert.ok(false, "checkEitMainNowChanged fail");
                done();
            };

            model.tvservice.onEitMainNowChanged = function (val) {
                clearTimeout(timerFlag);
                model.tvservice.onEitMainNowChanged = null;
                assert.ok(true, "checkEitMainNowChanged");
                done();
            }
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
            timerFlag = setTimeout(onEitMainNowChanngedTimeout, 5000);
        }
        else {
            assert.ok(false, "channel length is 0");
            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}
function checkEitMainNextChanged(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        if (chn < allChannels_T.length) {
            var done = assert.async(1);
            var timerFlag;

            function onEitMainNextChanngedTimeout() {
                model.tvservice.onEitMainNextChanged = null;
                assert.ok(false, "checkEitMainNextChanged fail");
                done();
            };

            model.tvservice.onEitMainNextChanged = function (val) {
                clearTimeout(timerFlag);
                model.tvservice.onEitMainNextChanged = null;
                assert.ok(true, "checkEitMainNextChanged");
                done();
            }
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
            timerFlag = setTimeout(onEitMainNextChanngedTimeout, 5000);
        }
        else {
            assert.ok(false, "channel length is 0");
            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}
function startGetVideoFormat() {
    var result = model.video.getVideoFormatInfo();
    return result;
}
function getVideoFormat(funcName) {
    QUnit.test(funcName, function (assert) {
        var format;
        format = startGetVideoFormat();
        assert.notEqual(format.length, 0, "Test getVideoFormat");
        if (format.length > 0)
            $("#details").html(format);
    });
}
function checkVideoFormatChanged(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        if (chn < allChannels_T.length) {
            var done = assert.async(1);
            var timerFlag;

            function onVideoFormatChanngedTimeout() {
                model.video.onVideoFormatInfoChanged = null;
                assert.ok(false, "checkVideoFormatChanged fail");
                done();
            };

            model.video.onVideoFormatInfoChanged = function (val) {
                clearTimeout(timerFlag);
                model.video.onVideoFormatInfoChanged = null;
                assert.ok(true, "checkVideoFormatChanged");
                done();
            }
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
            timerFlag = setTimeout(onVideoFormatChanngedTimeout, 5000);
        }
        else {
            assert.ok(false, "channel length is 0");
            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}

function startGetFrameAspect() {
    var result = model.video.getVideoFrameAspect();
    return result;
}
function getFrameAspect(funcName) {
    QUnit.test(funcName, function (assert) {
        var aspect;
        aspect = startGetFrameAspect();
        assert.notEqual(aspect.length, 0, "Test getFrameAspect");
        if (aspect.length > 0)
            $("#details").html(aspect);
    });
}
function checkFrameAspectChanged(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        if (chn < allChannels_T.length) {
            var done = assert.async(1);
            var timerFlag;

            function onVideoAspectChanngedTimeout() {
                model.video.onVideoFrameAspectChanged = null;
                assert.ok(false, "checkFrameAspectChanged fail");
                done();
            };

            model.video.onVideoFrameAspectChanged = function (val) {
                clearTimeout(timerFlag);
                model.video.onVideoFrameAspectChanged = null;
                assert.ok(true, "checkFrameAspectChanged");
                done();
            }
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
            timerFlag = setTimeout(onVideoAspectChanngedTimeout, 5000);
        }
        else {
            assert.ok(false, "channel length is 0");
            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}

function startGetCcExist() {
    var val = model.video.getCcExist();
    $("#details").html(val);
    if ((val == 0) || (val == 1))
        return true;
    else
        return false;
}
function getCcExist(funcName) {
    QUnit.test(funcName, function (assert) {
        var cc;
        cc = startGetCcExist();
        assert.ok(cc, "getCcExist");
    });
}
function checkCcExistChanged(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        if (chn < allChannels_T.length) {
            var done = assert.async(1);
            var timerFlag;

            function onCcExistChanngedTimeout() {
                model.video.onCcExistChanged = null;
                assert.ok(false, "onCcExistChanngedTimeout");
                done();
            };
            model.video.onCcExistChanged = function (val) {
                clearTimeout(timerFlag);
                model.video.onCcExistChanged = null;
                assert.ok(true, "onCcExistChanged");
                done();
            }
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
            timerFlag = setTimeout(onCcExistChanngedTimeout, 5000);
        }
        else {
            assert.ok(false, "channel length is 0");
            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}
function getAudioIndexImpl() {
    var val = model.tvservice.getAudioIndex();
    $("#details").html(val);
    if ((val >= 0) && (val <= 0x7fffffff))
        return true;
    else
        return false;
}

function getAudioIndex(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = getAudioIndexImpl();
        assert.ok(result, "getAudioIndex");
    });
}

function getAudioTable(funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onGetAudioTableTimeout() {
            assert.ok(false, "onGetAudioTableTimeout");
            done();
        };
        function onGetAudioTable(event) {
            if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
                clearTimeout(timerFlag);
                assert.ok(true, "onGetAudioTable");
                done();
            }
        }

        readAudioTableInfo(onGetAudioTable);
        timerFlag = setTimeout(onGetAudioTableTimeout, 3000);
    });
}

function getAudioIdentImpl() {
    var val = model.sound.getAudioIdent();
    $("#details").html(val);
    if ((val >= 0) && (val < 110))
        return true;
    else
        return false;
}

function getAudioIdent(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = getAudioIdentImpl();
        assert.ok(result, "Test getAudioIdent");
    });
}
function checkAudioIdentChanged(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        if (chn < allChannels_T.length) {
            var done = assert.async(1);
            var timerFlag;

            function onAudioIdentChanngedTimeout() {
                model.sound.onAudioIdentChaged = null;
                assert.ok(false, "checkAudioIdentChanged  fail");
                done();
            };

            model.sound.onAudioIdentChaged = function (val) {
                clearTimeout(timerFlag);
                model.sound.onAudioIdentChaged = null;
                assert.ok(true, "checkAudioIdentChanged");
                done();
            }
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
            timerFlag = setTimeout(onAudioIdentChanngedTimeout, 5000);
        }
        else {
            assert.ok(false, "channel length is 0");
            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}
function getAvailableMode(flag, funcName) {
    QUnit.test(funcName, function (assert) {
        $("#details").html("");
        var newMode = model.video.getAvailableMode();
        assert.equal(newMode, flag, "getAvailableMode");
        $("#details").html(newMode);
    });
}