var allChannels_T = [];
var allChannels_C = [];
var skipChannels_T = [];
var skipChannels_C = [];
var favChannels_T = [];
var favChannels_C = [];
var blockChannels_T = [];
var blockChannels_C = [];
var channelIterator = null;
var currentIndex = 0;
QUnit.config.reorder = false;
function eventRowsToChannels(rows) {
    var chnls = [];
    $("#total").html(rows.length);

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i], chnl = {};
        chnl.name = row[0];
        chnl.frontEnd = row[1];
        chnl.majorNum = row[2];
        chnl.minorNum = row[3];
        chnl.attr = row[4];
        chnl.uuid = row[5];
        chnls.push(chnl);
    }
    return chnls;
}

function getServiceListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 6}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetChannels_T.bind(this)
    );
}
function onGetChannels_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        allChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetChannels_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}
function getSkipListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 32},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 6}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetSkip_T.bind(this)
    );
}

function onGetSkip_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        skipChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetSkip_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}
function getServiceListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 7}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetChannels_C.bind(this)
    );
}

function onGetChannels_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        allChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetChannels_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}
function showServiceList(sourceType) {
    var list;
    //Insert a channel list to right side.
    $("#resultView table").html("");
    //Draw a form header.
    var table = "<table class='table'>";
    table += "<tr>" +
        "<th>Index</th>" +
        "<th>Name</th>" +
        "<th>Source</th>" +
        "<th>MajorNumber</th>" +
        "<th>MinorNumber</th>" +
        "<th>Attribute</th>" +
        "</tr>"
    if (sourceType == 1)
        list = allChannels_T;
    else
        list = allChannels_C;
    for (var i = 0; i < list.length; i++) {
        table += "<tr>";
        table += "<td>" + i + "</td>";
        table += "<td>" + list[i].name + "</td>";
        table += "<td>" + list[i].frontEnd + "</td>";
        table += "<td>" + list[i].majorNum + "</td>";
        table += "<td>" + list[i].minorNum + "</td>";
        table += "<td>" + list[i].attr + "</td>";
        table += "</tr>";
    }
    table += "</table>";

    if ($("#resultView table").length === 0) {
        $("#resultView").append(table);
    } else {
        $("#resultView table").append(table);
    }

}

function checkServiceT(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (allChannels_T.length > 0) {
            sourceType = 1;
            showServiceList(sourceType);
        }
        assert.equal(allChannels_T.length, expectNum, "getServiceT ");
    });
}
function checkServiceC(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (allChannels_C.length > 0) {
            sourceType = 0;
            showServiceList(sourceType);
        }
        assert.equal(allChannels_C.length, expectNum, "getServiceC ");
    });
}

function previousChannel_T() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allChannels_T.length - 1;
    }
    if (allChannels_T.length > 0) {
        model.tvservice.playChannel("0", allChannels_T[currentIndex].uuid);
        $("#name").html(allChannels_T[currentIndex].name);
    }
}

function nextChannel_T() {
    currentIndex++;
    if (currentIndex >= allChannels_T.length) {
        currentIndex = 0;
    }
    if (allChannels_T.length > 0) {
        model.tvservice.playChannel("0", allChannels_T[currentIndex].uuid);
        $("#name").html(allChannels_T[currentIndex].name);
    }
}

function randomChannel_T() {
    currentIndex = Math.ceil(Math.random() * ((allChannels_T.length - 1) - 0) + 0);
    if (allChannels_T.length > 0) {
        model.tvservice.playChannel("0", allChannels_T[currentIndex].uuid);
        $("#name").html(allChannels_T[currentIndex].name);
    }
}

function previousChannel_C() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = allChannels_C.length - 1;
    }
    if (allChannels_C.length > 0) {
        model.tvservice.playChannel("0", allChannels_C[currentIndex].uuid);
        $("#name").html(allChannels_C[currentIndex].name);
    }
}

function nextChannel_C() {
    currentIndex++;
    if (currentIndex >= allChannels_C.length) {
        currentIndex = 0;
    }
    if (allChannels_C.length > 0) {
        model.tvservice.playChannel("0", allChannels_C[currentIndex].uuid);
        $("#name").html(allChannels_C[currentIndex].name);
    }
}

function randomChannel_C() {
    currentIndex = Math.ceil(Math.random() * ((allChannels_C.length - 1) - 0) + 0);
    if (allChannels_C.length > 0) {
        model.tvservice.playChannel("0", allChannels_C[currentIndex].uuid);
        $("#name").html(allChannels_C[currentIndex].name);
    }
}

function playInputedChannel(sourceType, chn, func_name) {
    QUnit.test(func_name, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function playInputedChannelTimeout() {
            assert.ok(false, "playInputedChannel timeout");
            done();
        };
        model.tvservice.onMainPlayChanged = function (value) {
            clearTimeout(timerFlag);
            model.tvservice.onMainPlayChanged = null;
            assert.ok(true, "playInputedChannel");
            done();
        }
        if (sourceType == 1) {
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
        }
        else {
            model.tvservice.playChannel("0", allChannels_C[chn].uuid);
            $("#name").html(allChannels_C[chn].name);
        }
        timerFlag = setTimeout(playInputedChannelTimeout, 5000);
    });
}

function ui_getAudioTableInfo(event) {

    if (event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        if (event.rows.length > 0) {
            var Array;
            var audioIndex = model.tvservice.getAudioIndex();
            for (var i = 0; i < event.rows.length; i++) {
                if (audioIndex == event.rows[i][0]) {
                    Array = event.rows[i];
                    var audioIdent = model.sound.getAudioIdent();

                }
            }
        }
    }
}


function readAudioTableInfo(onReadAudioTableInfo) {
    var m_audioTrackIterator;
    if (m_audioTrackIterator != null)
        m_audioTrackIterator.disconnect();
    m_audioTrackIterator = model.tvservice.creatAudioTableIterator(
        true,
        [],
        [
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ID,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_NAME,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ISO639,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_TYPE,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_PURPOSE,
            TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_TRACK
        ],
        [
            {field: TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ID, direction: 1}
        ],
        onReadAudioTableInfo
    );
    m_audioTrackIterator.readNextRows(999);
}

function onEitNowChanged(val) {
    var pfResultNow = val;
    if (pfResultNow.length == 12) {
        var startimeNow = new Date(pfResultNow[2] * 1000);
        var stoptimeNow = new Date(pfResultNow[3] * 1000);
        infoBar = infoBar + "/EITNow->" + ";type:" + pfResultNow[1] + ";start:" + startimeNow.toLocaleString() + ";end:" + stoptimeNow.toLocaleString() + ";PC:" + pfResultNow[8];
        $("#details").html(infoBar);
    }
}
function onEitNextChanged(val) {
    var pfResultNext = val;
    if (pfResultNext.length == 12) {
        var startimeNext = new Date(pfResultNext[2] * 1000);
        var stoptimeNext = new Date(pfResultNext[3] * 1000);
        infoBar = infoBar + "/EITNext->" + ";type:" + pfResultNext[1] + ";start:" + startimeNext.toLocaleString() + ";end:" + stoptimeNext.toLocaleString();
        $("#details").html(infoBar);
    }
}
function onVideoFormatChanged(val) {
    if (val.length != 0) {
        infoBar = infoBar + " /videoFormat=" + val;
        $("#details").html(infoBar);
    }
}
function onVideoFrameAspectChanged(val) {
    if (val.length != 0) {
        infoBar = infoBar + " /Aspect=" + val;
        $("#details").html(infoBar);
    }
}
function onVideoCcExistChanged(val) {
    if (val == 1) {
        infoBar = infoBar + " /CC=" + val;
        $("#details").html(infoBar);
    }
}
function onCurAudioIdentChaged(val) {
    infoBar = infoBar + " /AudioIdent=" + val;
    $("#details").html(infoBar);
}

function onMainPlayChanged(val) {
    var pinRequest = model.parentlock.getPinRequest();
    if (pinRequest[0] != 0)
        return;
    var utcTime = model.datetime.getCurLocalTime();
    var date = new Date(utcTime * 1000);
    infoBar = date.toLocaleString();
    $("#details").html(infoBar);
    model.video.onVideoFormatInfoChanged = onVideoFormatChanged;
    model.video.onVideoFrameAspectChanged = onVideoFrameAspectChanged;
    model.video.onCcExistChanged = onVideoCcExistChanged;
    model.sound.onAudioIdentChaged = onCurAudioIdentChaged;
    model.tvservice.onEitMainNowChanged = onEitNowChanged;
    model.tvservice.onEitMainNextChanged = onEitNextChanged;

}
function disableMainPlayChangedCallback() {
    model.tvservice.onMainPlayChanged = null;
    model.video.onVideoFormatInfoChanged = null;
    model.video.onVideoFrameAspectChanged = null;
    model.video.onCcExistChanged = null;
    model.sound.onAudioIdentChaged = null;
    model.tvservice.onEitMainNowChanged = null;
    model.tvservice.onEitMainNextChanged = null;
}

function play(direction, sourceType) {
    console.log("............play.");
    $("#details").html("");
    if (direction == 1) {
        if (sourceType == 1)
            nextChannel_T();
        else
            nextChannel_C();
    }
    else if (direction == 0) {
        if (sourceType == 1)
            previousChannel_T();
        else
            previousChannel_C();
    }
    else {
        if (sourceType == 1)
            randomChannel_T();
        else
            randomChannel_C();
    }
    model.tvservice.onMainPlayChanged = onMainPlayChanged;

    return true;
}

function switchChannel(direction, sourceType, repeat, funcName) {
    console.log("............switchChannel.");
    QUnit.test(funcName, function (assert) {
        var i = 0;
        var times = repeat;
        var timer;
        //play(direction, sourceType);
        var done = assert.async(times);

        function playTimeout() {
            try {
                if (QUnit.config.interrupt === true) {
                    throw new Error("Interrupt test case in switchChannel.");
                }
                if (i < times) {
                    assert.equal(play(direction, sourceType), true, "check play ");
                    i++;
                    $("#times").html(i);
                    done();
                    if (i < times)
                        setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 8000) + 8000));
                    else
                        disableMainPlayChangedCallback();
                }
            } catch (e) {
                console.log(e.message);
                for (var left = 0; left < times - i; left++) {
                    done();
                    disableMainPlayChangedCallback();
                }
                //return;
            }
        }

        setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 8000) + 8000));
    });
}

function randomSwitchChannel(repeat, funcName) {
    QUnit.test(funcName, function (assert) {
        var i = 0;
        var times = repeat;
        var timer;
        var currentIndexT = Math.ceil(Math.random() * ((allChannels_T.length - 1) - 0) + 0);
        var currentIndexC = Math.ceil(Math.random() * ((allChannels_C.length - 1) - 0) + 0);

        function switch_T_C(val) {
            if (val % 2 == 0) {
                model.tvservice.playChannel("0", allChannels_T[currentIndexT].uuid);
                $("#name").html(allChannels_T[currentIndexT].name);
            }
            else {
                model.tvservice.playChannel("0", allChannels_C[currentIndexC].uuid);
                $("#name").html(allChannels_C[currentIndexC].name);
            }
            return true;
        }

        var done = assert.async(times);
        var interval = Math.ceil(Math.random() * (10000 - 1000) + 1000);

        try {
            timer = setInterval(function () {
                if (QUnit.config.interrupt == true) {
                    throw new Error("Interrupt test in randomSwitchChannle.");
                }
                console.log("......the time is  %d", i);
                if (i < times) {
                    assert.equal(switch_T_C(i), true, "check play ");
                    i++;
                    $("#times").html(i);
                    done();
                    if (i == times)
                        clearInterval(timer);
                }
            }, interval);
        } catch (ex) {
            console.log("Interrupt randow switch channel.");
            console.log(ex.message);
            return;
        }
    });
}
function channelUpT(repeat, funcName) {
    console.log("............................... channelUpT. ");
    $("#resultView table").html("");
    if (allChannels_T.length > 0) {
        var direction = 1;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}

function channelDownT(repeat, funcName) {
    console.log("............................... channelDownT. ");
    if (allChannels_T.length > 0) {
        var direction = 0;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}
function channelRandomT(repeat, funcName) {
    console.log("............................... channelRandomT. ");
    if (allChannels_T.length > 0) {
        var direction = 2;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}
function channelUpC(repeat, funcName) {
    console.log("............................... channelUpC. ");
    if (allChannels_C.length > 0) {
        var direction = 1;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}

function channelDownC(repeat, funcName) {
    console.log("............................... channelDownC. ");
    if (allChannels_C.length > 0) {
        var direction = 0;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}
function channelRandomC(repeat, funcName) {
    console.log("............................... channelRandomC. ");
    if (allChannels_C.length > 0) {
        var direction = 2;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}

function channelSwitchT_C_step1(repeat, funcName) {
    getServiceListC();
    setTimeout(channelSwitchT_C_step2, 2000, repeat, funcName);
}
function channelSwitchT_C_step2(repeat, funcName) {
    if ((allChannels_T.length > 0) && (allChannels_C.length > 0)) {
        randomSwitchChannel(repeat, funcName);
    }
}

function getServiceListT_done_check(funcName) {
    console.log("............................... getServiceListT_done_check  . ");
    if (allChannels_T.length > 0) {
        QUnit.test(funcName, function (assert) {
            var flag = true;
            var serListPath = "config/serviceListT.json";
            var serList = readJSONFileArray(serListPath);
            if (serList.length == allChannels_T.length) {
                var i;
                for (i = 0; i < allChannels_T.length; i++) {
                    if ((serList[i].name == allChannels_T[i].name) && (serList[i].majorNum == allChannels_T[i].majorNum)
                        && (serList[i].minorNum == allChannels_T[i].minorNum))
                        i++;
                    else
                        break;
                }
                if (i != allChannels_T.length) {
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            assert.ok(flag, "checkChannelListT ");
        });
    }
}

function getServiceListC_done_check(funcName) {
    console.log("............................... getServiceListC_done_check  . ");
    if (allChannels_C.length > 0) {
        QUnit.test(funcName, function (assert) {
            var flag = true;
            var serListPath = "config/serviceListC.json";
            var serList = readJSONFileArray(serListPath);
            if (serList.length == allChannels_C.length) {
                var i;
                for (i = 0; i < allChannels_C.length; i++) {
                    if ((serList[i].name == allChannels_C[i].name) && (serList[i].majorNum == allChannels_C[i].majorNum)
                        && (serList[i].minorNum == allChannels_C[i].minorNum))
                        i++;
                    else
                        break;
                }
                if (i != allChannels_C.length) {
                    flag = false;
                }
            }
            else {
                flag = false;
            }
            assert.ok(flag, "checkChannelListC ");
        });
    }
}


function checkAttr(attr, flag, chNum) {
    var result = false;
    if (attr == 0) {
        if (((flag == 1) && ((allChannels_T[chNum - 1].attr & 0x80) != 0)) ||
            ((flag == 0) && ((allChannels_T[chNum - 1].attr & 0x80) == 0)))
            result = true;
    }
    else if (attr == 1) {
        if (((flag == 1) && ((allChannels_T[chNum - 1].attr & 0x20) != 0)) || ((flag == 0) && ((allChannels_T[chNum - 1].attr & 0x20) == 0)))
            result = true;
    }
    else if (attr == 2) {
        if (((flag == 1) && ((allChannels_T[chNum - 1].attr & 0x40) != 0)) ||
            ((flag == 0) && ((allChannels_T[chNum - 1].attr & 0x40) == 0)))
            result = true;
    }
    return result;
}
function ServiceListAttrDone(attr, flag, chNum) {
    QUnit.test("checkSerListAttrT test", function (assert) {
        assert.equal(checkAttr(parseInt(attr), parseInt(flag), parseInt(chNum)), true, "check serListAttr ");
    });
}

function getSkipListDone(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.equal(flag, true, "check addToSkipListT ");
    });
}
function modifyAttr(attr, flag, uuid) {
    model.servicelist.SetServiceAttribute(attr, flag, uuid);
}

//getSkipListAllT

function getSkipListAllT(expectNum, funcName) {
    getSkipListT();
    setTimeout(getSkipListCountT, 2000, expectNum, funcName);
}

function getSkipListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 32},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 6}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetSkip_T.bind(this)
    );
}

function onGetSkip_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        skipChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetSkip_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}

function getSkipListCountT(expectNum, funcName) {
    $("#details").html(skipChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.equal(skipChannels_T.length, expectNum, "getSkipListAllT ");
    });
}

function addToSkipListT(attr, flag, chNum, funcName) {
    console.log("...............................addToSkipListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getSkipListT();
    setTimeout(addSkipListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function addSkipListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.ok(flag, "addToSkipListT ");
    });
}


function delFromSkipListT(attr, flag, chNum, funcName) {
    console.log("...............................delFromSkipListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getSkipListT();
    setTimeout(delSkipListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function delSkipListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.notOk(flag, "delFromSkipListT ");
    });
}


//getSkipListAllT


//getSkipListAllC


function getSkipListAllC(expectNum, funcName) {
    getSkipListC();
    setTimeout(getSkipListCountC, 2000, expectNum, funcName);
}

function getSkipListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 32},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 7}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetSkip_C.bind(this)
    );
}

function onGetSkip_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        skipChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetSkip_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}

function getSkipListCountC(expectNum, funcName) {
    $("#details").html(skipChannels_C.length);
    QUnit.test(funcName, function (assert) {
        assert.equal(skipChannels_C.length, expectNum, "getSkipListAllC ");
    });
}

function addToSkipListC(attr, flag, chNum, funcName) {
    console.log("...............................addToSkipListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getSkipListC();
    setTimeout(addSkipListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function addSkipListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_C.length; i++) {
        if (uuid == skipChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.ok(flag, "addToSkipListC ");
    });
}


function delFromSkipListC(attr, flag, chNum, funcName) {
    console.log("...............................delFromSkipListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getSkipListC();
    setTimeout(delSkipListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function delSkipListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < skipChannels_C.length; i++) {
        if (uuid == skipChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.notOk(flag, "delFromSkipListC ");
    });
}


//getSkipListAllC

//getBlockListAllT

function getBlockListAllT(expectNum, funcName) {
    getBlockListT();
    setTimeout(getBlockListCountT, 2000, expectNum, funcName);
}

function getBlockListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 64},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 6}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetBlock_T.bind(this)
    );
}

function onGetBlock_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        blockChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetBlock_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}

function getBlockListCountT(expectNum, funcName) {
    $("#details").html(blockChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.equal(blockChannels_T.length, expectNum, "getBlockListAllT ");
    });
}

function addToBlockListT(attr, flag, chNum, funcName) {
    console.log("...............................addToBlockListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getBlockListT();
    setTimeout(addBlockListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function addBlockListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_T.length; i++) {
        if (uuid == blockChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.ok(flag, "addToBlockListT ");
    });
}

function delFromBlockListT(attr, flag, chNum, funcName) {
    console.log("...............................delFromBlockListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getBlockListT();
    setTimeout(delBlockListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function delBlockListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_T.length; i++) {
        if (uuid == blockChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.notOk(flag, "delFromBlockListT ");
    });
}


//getBlockListAllT


//getBlockListAllC

function getBlockListAllC(expectNum, funcName) {
    getBlockListC();
    setTimeout(getBlockListCountC, 2000, expectNum, funcName);
}

function getBlockListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 64},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 7}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetBlock_C.bind(this)
    );
}

function onGetBlock_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        blockChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetBlock_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getBlockListCountC(expectNum, funcName) {
    $("#details").html(blockChannels_C.length);
    QUnit.test(funcName, function (assert) {
        assert.equal(blockChannels_C.length, expectNum, "getBlockListAllC ");
    });
}

function addToBlockListC(attr, flag, chNum, funcName) {
    console.log("...............................addToBlockListC . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getBlockListC();
    setTimeout(addBlockListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function addBlockListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_C.length; i++) {
        if (uuid == blockChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.ok(flag, "addToBlockListC ");
    });
}


function delFromBlockListC(attr, flag, chNum, funcName) {
    console.log("...............................delFromBlockListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getBlockListC();
    setTimeout(delBlockListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function delBlockListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < blockChannels_C.length; i++) {
        if (uuid == blockChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.notOk(flag, "delFromBlockListC ");
    });
}

//getBlockListAllC

function getServicesAttrT(chNum, funcName) {
    $("#details").html(allChannels_T[chNum].attr + ";fav:" + (((allChannels_T[chNum].attr & 0x80) != 0) ? 1 : 0)
        + ";skip:" + (((allChannels_T[chNum].attr & 0x20) != 0) ? 1 : 0) + ";block:" + (((allChannels_T[chNum].attr & 0x40) != 0) ? 1 : 0));
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getServicesAttrT ");
    });
}
function getServicesAttrC(chNum, funcName) {
    $("#details").html(allChannels_C[chNum].attr + ";fav:" + (((allChannels_C[chNum].attr & 0x80) != 0) ? 1 : 0)
        + ";skip:" + (((allChannels_C[chNum].attr & 0x20) != 0) ? 1 : 0) + ";block:" + (((allChannels_C[chNum].attr & 0x40) != 0) ? 1 : 0));
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getServicesAttrC ");
    });
}

function startGetMainPlay() {
    var info = model.tvservice.getMainPlay();
    return info;
}
function getMainPlay(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetMainPlay();
        assert.notEqual(val, null, "Test getMainPlay");
        if (val != null)
            $("#details").html("listUid:" + val[0] + ";uid:" + val[1] + ";number:" + val[2] + ";name:" + val[5] + ";attr:" + val[8]);
    });
}
function mainPlayChanged(sourceType, chn, testName) {
    QUnit.test(testName, function (assert) {
        var done = assert.async(1);
        var timerFlag;

        function getMainPlayChangedTimeout() {
            assert.ok(false, "mainPlayChanged timeout");
            done();
        };

        model.tvservice.onMainPlayChanged = function (val) {
            clearTimeout(timerFlag);
            model.tvservice.onMainPlayChanged = null;
            assert.notEqual(val, null, "mainPlayChanged");
            done();
            if (val != null)
                $("#details").html("listUid:" + val[0] + ";uid:" + val[1] + ";number:" + val[2] + ";name:" + val[5] + ";attr:" + val[8]);
        }
        if (sourceType == 1) {
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
        }
        else {
            model.tvservice.playChannel("0", allChannels_C[chn].uuid);
            $("#name").html(allChannels_C[chn].name);
        }
        timerFlag = setTimeout(getMainPlayChangedTimeout, 5000);
    });
}
function startGetNoSignalMain() {
    var sig = model.tvservice.getNoSignalMain();
    $("#details").html(sig);
    if ((sig == 0) || (sig == 1))
        return true;
    else
        return false;
}
function getNoSignalMain(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var result = startGetNoSignalMain();
        assert.ok(result, "getNoSignalMain");
    });
}

function startGetSignalLevel() {
    var val = model.tvservice.getSignalMainLevels();
    if (val.length == 3) {
        $("#details").html("percentage:" + val[0] + ";poor:" + val[1] + ";fair:" + val[2]);
        return true;
    }
    else
        return false;
}

function enableTunerInfo() {
    model.servicemode.setSignalMainEnable(1);

}
function getSignalLevel(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var result = startGetSignalLevel();
        assert.ok(result, "getSignalLevel");
    });
}
function startGetSignalCn() {
    var val = model.tvservice.getSignalMainCns();
    if (val.length == 3) {
        $("#details").html("percentage:" + val[0] + ";poor:" + val[1] + ";fair:" + val[2]);
        return true;
    }
    else
        return false;
}
function getSignalCn(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var result = startGetSignalCn();
        assert.ok(result, "getSignalCn");

    });
}

function onChannelListUpdate(funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);
        listUpdate = false;
        function listUpdateNotify() {
            listUpdate = true;
        }

        function checkChannelListUpdate() {
            model.tvservice.onChannelListUpdate = null;
            assert.ok(listUpdate, "onChannelListUpdate ");
            done();
        }

        model.tvservice.onChannelListUpdate = listUpdateNotify;
        setTimeout(checkChannelListUpdate, 10000);
    });
}

function playFirstChannelT() {
    model.tvservice.playChannel("0", allChannels_T[0].uuid);
}
//getFavListAllT

function getFavListAllT(expectNum, funcName) {
    getFavListT();
    setTimeout(getFavListCountT, 2000, expectNum, funcName);
}

function getFavListT() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 128},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 6}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetFav_T.bind(this)
    );
}

function onGetFav_T(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        favChannels_T = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetFav_T({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}


function getFavListCountT(expectNum, funcName) {
    $("#details").html(favChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.equal(favChannels_T.length, expectNum, "getFavListAllT ");
    });
}

function addToFavListT(attr, flag, chNum, funcName) {
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getFavListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(addFavListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function addFavListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_T.length; i++) {
        if (uuid == favChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.ok(flag, "check addToFavListT ");
    });
}


function delFromFavListT(attr, flag, chNum, funcName) {
    console.log("...............................delFromFavListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getFavListT();
    setTimeout(delFavListDoneT, 2000, allChannels_T[chNum].uuid, funcName);

}
function delFavListDoneT(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_T.length; i++) {
        if (uuid == favChannels_T[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.notOk(flag, "check delFromFavListT ");
    });
}

//getFavListAllT


//getFavListAllC

function getFavListAllC(expectNum, funcName) {
    getFavListC();
    setTimeout(getFavListCountC, 2000, expectNum, funcName);
}

function getFavListC() {
    channelIterator = model.servicelist.createServicelistIterator(
        true,
        [
            {field: ServicelistModel.SERVICELIST_FIELD_ATTR, condition: Model.FIELD_COND_ALL_BITS_SET, value: 128},
            {field: ServicelistModel.SERVICELIST_FIELD_FRONTEND, condition: Model.FIELD_COND_EQUAL, value: 7}
        ],
        [
            ServicelistModel.SERVICELIST_FIELD_NAME,
            ServicelistModel.SERVICELIST_FIELD_FRONTEND,
            ServicelistModel.SERVICELIST_FIELD_MAJOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_MINOR_CHANNEL_NUMBER,
            ServicelistModel.SERVICELIST_FIELD_ATTR,
            ServicelistModel.SERVICELIST_FIELD_GCN/*uuid*/
        ],
        [
            {field: ServicelistModel.SERVICELIST_FIELD_NO, direction: 1}
        ],
        onGetFav_C.bind(this)
    );
}

function onGetFav_C(m_event) {

    if (m_event.type == TableIterator.EVENT_TYPE_ROWS_READ) {
        favChannels_C = eventRowsToChannels(m_event.rows);

    }
    else if (m_event.type == TableIterator.EVENT_TYPE_TOTAL_COUNT) {

        modeljs.dbgprint("total channels  is " + m_event.totalCount, 1);
        if (m_event.totalCount == 0) {
            onGetFav_C({type: TableIterator.EVENT_TYPE_ROWS_READ, rows: []});
        }
        else {
            channelIterator.readNextRows(m_event.totalCount);
        }
    }
}

function getFavListCountC(expectNum, funcName) {
    $("#details").html(favChannels_C.length);
    QUnit.test(funcName, function (assert) {
        assert.equal(favChannels_C.length, expectNum, "getFavListAllC ");
    });
}

function addToFavListC(attr, flag, chNum, funcName) {
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getFavListC();
    setTimeout(addFavListDoneC, 2000, allChannels_C[chNum].uuid, funcName);

}
function addFavListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_C.length; i++) {
        if (uuid == favChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.ok(flag, "addToFavListC ");
    });
}

function delFromFavListC(attr, flag, chNum, funcName) {
    console.log("...............................delFromFavListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getFavListC();
    setTimeout(delFavListDoneC, 2000, allChannels_C[chNum].uuid, funcName);
}
function delFavListDoneC(uuid, funcName) {
    var i;
    var flag = false;
    for (i = 0; i < favChannels_C.length; i++) {
        if (uuid == favChannels_C[i].uuid) {
            flag = true;
            break;
        }
    }
    QUnit.test(funcName, function (assert) {
        assert.notOk(flag, "check delFromFavListT ");
    });
}

//getFavListAllC