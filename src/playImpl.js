QUnit.config.reorder = false;

function eventRowsToChannels(rows) {
    var chnls = [];
    $("#total").html(rows.length);

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
    for (var i = 0; i < rows.length; i++) {
        var row = rows[i], chnl = {};
        chnl.name = row[0];
        chnl.frontEnd = row[1];
        chnl.majorNum = row[2];
        chnl.minorNum = row[3];
        chnl.attr = row[4];
        chnl.uuid = row[5];
        chnls.push(chnl);

        table += "<tr>";
        table += "<td>" + i + "</td>";
        table += "<td>" + row[0] + "</td>";
        table += "<td>" + row[1] + "</td>";
        table += "<td>" + row[2] + "</td>";
        table += "<td>" + row[3] + "</td>";
        table += "<td>" + row[4] + "</td>";
        table += "</tr>";
    }
    table += "</table>";

    if ($("#resultView table").length === 0) {
        $("#resultView").append(table);
    } else {
        $("#resultView table").append(table);
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

function checkServiceT(funcName) {
    QUnit.test(funcName, function (assert) {
        var flag;
        if (allChannels_T.length > 0)
            flag = true;
        else
            flag = false;
        assert.equal(flag, true, "getServiceT ");
    });
}
function checkServiceC(funcName) {
    QUnit.test(funcName, function (assert) {
        var flag;
        if (allChannels_C.length > 0)
            flag = true;
        else
            flag = false;
        assert.equal(flag, true, "getServiceC ");
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

function playInputedChannel(sourceType, chn, t_name) {
    QUnit.test(t_name, function (assert) {
        if (sourceType == 1) {
            model.tvservice.playChannel("0", allChannels_T[chn].uuid);
            $("#name").html(allChannels_T[chn].name);
        }
        else {
            model.tvservice.playChannel("0", allChannels_C[chn].uuid);
            $("#name").html(allChannels_C[chn].name);
        }
        assert.ok(true, "check playInputedChannel");
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
}
function onEitNextChanged(val) {
}
function onVideoFormatChanged(val) {
}
function onVideoFrameAspectChanged(val) {
}
function onVideoCcExistChanged(val) {
}
function onCurAudioIdentChaged(val) {
}
function onCurAudioExistChaged(val) {
    if (val == 1)
        readAudioTableInfo(ui_getAudioTableInfo);
}
function mainPlayChanged(val) {
    var pinRequest = model.parentlock.getPinRequest();
    if (pinRequest[0] != 0)
        return;
    var utcTime = model.timerfunc.getCurTime();
    var timeZoneSec = model.timerfunc.getDeviationFromUtc();
    var formatHour = model.timerfunc.getTimeFormat();
    model.video.onVideoFormatInfoChanged = onVideoFormatChanged;
    model.video.onVideoFrameAspectChanged = onVideoFrameAspectChanged;
    model.video.onCcExistChanged = onVideoCcExistChanged;
    model.tvservice.onAudioExistChaged = onCurAudioExistChaged;
    model.sound.onAudioIdentChaged = onCurAudioIdentChaged;
    readAudioTableInfo(ui_getAudioTableInfo);
    model.tvservice.onEitMainNowChanged = onEitNowChanged;
    model.tvservice.onEitMainNextChanged = onEitNextChanged;

}
function play(direction, sourceType) {
    console.log("............play.");
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
    model.tvservice.onMainPlayChanged = mainPlayChanged;

    return true;
}

function switchChannel(direction, sourceType, repeat, funcName) {
    console.log("............switchChannel.");
    QUnit.test(funcName, function (assert) {
        var i = 0;
        var times = repeat;
        var timer;
        play(direction, sourceType);
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
                        setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 1000) + 1000));
                }
            } catch (e) {
                console.log(e.message);
                for (var left = 0; left < times - i; left++) {
                    done();
                }
                //return;
            }

        }

        setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 1000) + 1000));

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
                else {
                    var left;
                    for (left = 0; left <= times - i; left++)
                        done();
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
function getServiceListT_done_up(repeat, funcName) {
    console.log("............................... getServiceListT_done_up  . ");
    if (allChannels_T.length > 0) {
        var direction = 1;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}

function getServiceListT_done_down(repeat, funcName) {
    console.log("............................... getServiceListT_done_down  . ");
    if (allChannels_T.length > 0) {
        var direction = 0;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}
function getServiceListT_done_random(repeat, funcName) {
    console.log("............................... getServiceListT_done_random  . ");
    if (allChannels_T.length > 0) {
        var direction = 2;
        var sourceType = 1;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}
function getServiceListC_done_up(repeat, funcName) {
    console.log("............................... getServiceListC_done_up  . ");
    if (allChannels_C.length > 0) {
        var direction = 1;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}

function getServiceListC_done_down(repeat, funcName) {
    console.log("............................... getServiceListC_done_down  . ");
    if (allChannels_C.length > 0) {
        var direction = 0;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}
function getServiceListC_done_random(repeat, funcName) {
    console.log("............................... getServiceListC_done_random . ");
    if (allChannels_C.length > 0) {
        var direction = 2;
        var sourceType = 0;
        switchChannel(direction, sourceType, repeat, funcName);
    }
}

function getServiceListT_done_getServiceListC(repeat, funcName) {
    getServiceListC();
    setTimeout(getServiceListC_done_random_T_C, 2000, repeat, funcName);
}
function getServiceListC_done_random_T_C(repeat, funcName) {
    if ((allChannels_T.length > 0) && (allChannels_C.length > 0)) {
        randomSwitchChannel(repeat, funcName);
    }
}

function getServiceListT_done_check(funcName) {
    console.log("............................... getServiceListT_done_check  . ");
    if (allChannels_T.length > 0) {
        QUnit.test(funcName, function (assert) {
            var flag = true;
            var serListPath = "serviceList.json";
            var serList = fileInput(serListPath);
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
            assert.equal(flag, true, "check serListT ");

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

function addToSkipListT(attr, flag, chNum, funcName) {
    console.log("...............................addToSkipListT  . ");
    modifyAttr(attr, flag, allChannels_T[chNum].uuid);
    getSkipListT();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(getSkipListDone, 2000, allChannels_T[chNum].uuid, funcName);

}

function addToSkipListC(attr, flag, chNum, funcName) {
    console.log("...............................addToSkipListC  . ");
    modifyAttr(attr, flag, allChannels_C[chNum].uuid);
    getSkipListC();
    //setTimeout("ServiceListAttrDone('"+attr+flag+chNum+"')",2000);
    setTimeout(getSkipListDone, 2000, allChannels_C[chNum].uuid, funcName);

}


function getSkipListCount(funcName) {
    $("#details").html(skipChannels_T.length);
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getSkipListAllT ");
    });
}
function getSkipListAllT(funcName) {
    getSkipListT();
    setTimeout(getSkipListCount, 2000, funcName);
}

function getSkipListAllC(funcName) {
    getSkipListC();
    setTimeout(getSkipListCount, 2000, funcName);
}


function getServicesT_attrT_timeout(chNum, funcName) {
    $("#details").html(allChannels_T[chNum].attr + ";fav:" + (((allChannels_T[chNum].attr & 0x80) != 0) ? 1 : 0)
        + ";skip:" + (((allChannels_T[chNum].attr & 0x20) != 0) ? 1 : 0) + ";block:" + (((allChannels_T[chNum].attr & 0x40) != 0) ? 1 : 0));
    QUnit.test(funcName, function (assert) {
        assert.ok(true, "getServicesAttrT ");
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
            assert.notEqual(val, null, "Test mainPlayChanged");
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
    return sig;
}
function getNoSignalMain(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetNoSignalMain();
        assert.ok(true, "Test getNoSignalMain");
        $("#details").html(val);
    });
}

function startGetSignalLevel() {
    var sig = model.tvservice.getSignalMainLevels();
    return sig;
}
function getSignalLevel(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetSignalLevel();
        assert.ok(true, "Test getSignalLevel");
        $("#details").html(val);
    });
}
function startGetSignalCn() {
    var sig = model.tvservice.getSignalMainCns();
    return sig;
}
function getSignalCn(funcName) {
    $("#details").html("");
    QUnit.test(funcName, function (assert) {
        var val = startGetSignalCn();
        assert.ok(true, "Test getSignalCn");
        $("#details").html(val);
    });
}
function listUpdateNotify() {
    listUpdate = true;
}
function checkChannelListUpdate(funcName) {
    QUnit.test(funcName, function (assert) {
        assert.ok(listUpdate, "onChannelListUpdate ");
    });
}
function onChannelListUpdate(funcName) {
    listUpdate = false;
    model.tvservice.onChannelListUpdate = listUpdateNotify;
    setTimeout(checkChannelListUpdate, 10000, funcName);
}

function playFirstChannelT() {
    model.tvservice.playChannel("0", allChannels_T[0].uuid);
}
