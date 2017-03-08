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
function startSetCurLocalTime() {
    var val = model.datetime.getCurLocalTime();
    model.datetime.setCurLocalTime(val + 60);
    if (model.datetime.getCurLocalTime() == (val + 60))
        return true;
    else
        return false;
}
function setCurLocalTime(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = startSetCurLocalTime();
        assert.ok(result, "Test setCurLocalTime");
    });

}

function startGetTimeZone() {
    var val = model.datetime.getTimeZone();
    return val;
}
function getTimeZone(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = startGetTimeZone();
        assert.ok(true, "Test getTimeZone");
        $("#details").html(result);
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
        assert.equal(result, true, "Test setTimeZone");
    });
}

function startGetTimeFormat() {
    var val = model.datetime.getTimeFormat();
    return val;
}
function getTimeFormat(funcName) {
    QUnit.test(funcName, function (assert) {
        var result;
        result = startGetTimeFormat();
        assert.ok(true, "Test getTimeFormat");
        $("#details").html(result);
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
        assert.equal(result, true, "Test setTimeFormat");
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
        assert.equal(pfResultNow.length, 12, "Test getEitMainNow");
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
        assert.equal(pfResultNext.length, 12, "Test getEitMainNext");
        if (pfResultNext.length == 12) {
            var startime = new Date(pfResultNext[2] * 1000);
            var stoptime = new Date(pfResultNext[3] * 1000);
            $("#details").html("window:" + pfResultNow[0] + ";type:" + pfResultNow[1] + ";start:" + startime.toLocaleString() + ";end:" + stoptime.toLocaleString()
                + ";title:" + pfResultNow[4] + ";shortDes:" + pfResultNow[5] + ";longDes:" + pfResultNow[6] + ";flag:" + pfResultNow[7]
                + ";rating:" + pfResultNow[8] + ";eventID:" + pfResultNow[9] + ";themes:" + pfResultNow[10] + ";linkage:" + pfResultNow[11]);
        }
    });

}
function playFirstChannelTForEitMainNowTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onEitMainNowChanngedTimeout() {
            assert.ok(false, "onEitMainNowChanngedTimeout timeout");
            done();
        };

        model.tvservice.onEitMainNowChanged = function (val) {
            clearTimeout(timerFlag);
            model.tvservice.onEitMainNowChanged = null;
            assert.ok(true, "onEitMainNowChanged");
            done();
        }
        model.tvservice.playChannel("0", allChannels_T[chn].uuid);
        $("#name").html(allChannels_T[chn].name);
        timerFlag = setTimeout(onEitMainNowChanngedTimeout, 5000);
    });
}
function playFirstChannelTForEitMainNextTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onEitMainNextChanngedTimeout() {
            assert.ok(false, "onEitMainNextChanngedTimeout timeout");
            done();
        };

        model.tvservice.onEitMainNextChanged = function (val) {
            clearTimeout(timerFlag);
            model.tvservice.onEitMainNextChanged = null;
            assert.ok(true, "onEitMainNextChanged");
            done();
        }
        model.tvservice.playChannel("0", allChannels_T[chn].uuid);
        $("#name").html(allChannels_T[chn].name);
        timerFlag = setTimeout(onEitMainNextChanngedTimeout, 5000);
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
function playFirstChannelTForFormatTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;
        var result = model.video.getVideoFormatInfo();

        function onVideoFormatChanngedTimeout() {
            var result = model.video.getVideoFormatInfo();
            assert.ok(false, "onVideoFormatChanngedTimeout timeout");
            done();
        };

        model.video.onVideoFormatInfoChanged = function (val) {
            clearTimeout(timerFlag);
            model.video.onVideoFormatInfoChanged = null;
            assert.ok(true, "onVideoFormatInfoChanged");
            done();
        }
        model.tvservice.playChannel("0", allChannels_T[chn].uuid);
        $("#name").html(allChannels_T[chn].name);
        timerFlag = setTimeout(onVideoFormatChanngedTimeout, 5000);
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
function playFirstChannelTForAspectTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onVideoAspectChanngedTimeout() {
            assert.ok(false, "onVideoAspectChanngedTimeout timeout");
            done();
        };

        model.video.onVideoFrameAspectChanged = function (val) {
            clearTimeout(timerFlag);
            model.video.onVideoFrameAspectChanged = null;
            assert.ok(true, "onVideoFrameAspectChanged");
            done();
        }
        model.tvservice.playChannel("0", allChannels_T[chn].uuid);
        $("#name").html(allChannels_T[chn].name);
        timerFlag = setTimeout(onVideoAspectChanngedTimeout, 5000);
    });
}

function startGetCcExist() {
    var result = model.video.getCcExist();
    return result;
}
function getCcExist(funcName) {
    QUnit.test(funcName, function (assert) {
        var cc;
        cc = startGetCcExist();
        assert.notEqual(cc.length, 0, "Test getCcExist");
        if (cc.length > 0)
            $("#details").html(cc);
    });
}
function playFirstChannelTForCcTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onCcExistChanngedTimeout() {
            assert.ok(false, "onCcExistChanngedTimeout timeout");
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
    });
}
function getAudioIndexImpl() {
    var result = model.tvservice.getAudioIndex();
    return result;
}

function getAudioIndex(funcName) {
    QUnit.test(funcName, function (assert) {
        var audioIndex;
        audioIndex = getAudioIndexImpl();
        assert.notEqual(audioIndex, 0x7fffffff, "Test getAudioIndex");
        $("#details").html(audioIndex);
    });
}

function getAudioTable(funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onGetAudioTableTimeout() {
            assert.ok(false, "onGetAudioTableTimeout timeout");
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
function playFirstChannelTForAudioExistTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onAudioExistChanngedTimeout() {
            assert.ok(false, "onAudioExistChanngedTimeout timeout");
            done();
        };

        model.tvservice.onAudioExistChanged = function (val) {
            clearTimeout(timerFlag);
            model.tvservice.onAudioExistChanged = null;
            assert.ok(true, "onAudioExistChanged");
            done();
        }
        model.tvservice.playChannel("0", allChannels_T[chn].uuid);
        $("#name").html(allChannels_T[chn].name);
        timerFlag = setTimeout(onAudioExistChanngedTimeout, 5000);
    });
}
function getAudioIdentImpl() {
    var result = model.sound.getAudioIdent();
    return result;
}

function getAudioIdent(funcName) {
    QUnit.test(funcName, function (assert) {
        var audioIdent;
        audioIdent = getAudioIdentImpl();
        assert.notEqual(audioIdent, 0, "Test getAudioIdent");
        $("#details").html(audioIdent);
    });
}
function playFirstChannelTForAudioIdentTimeout(funcName, chn) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function onAudioIdentChanngedTimeout() {
            assert.ok(false, "onAudioIdentChanngedTimeout timeout");
            done();
        };

        model.sound.onAudioIdentChaged = function (val) {
            clearTimeout(timerFlag);
            model.sound.onAudioIdentChaged = null;
            assert.ok(true, "onAudioIdentChaged");
            done();
        }
        model.tvservice.playChannel("0", allChannels_T[chn].uuid);
        $("#name").html(allChannels_T[chn].name);
        timerFlag = setTimeout(onAudioIdentChanngedTimeout, 5000);
    });
}