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
var workroot = 1;
var localTime = new Date();
QUnit.config.reorder = false;
var fh = new fileHandler();


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
function write2File(sourceType, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#total").html("");
        function checkServiceTimeout() {
            var list;
            if (sourceType == 0)
                list = allChannels_T;
            else
                list = allChannels_C;
            var content = "[\n";
            for (var i = 0; i < list.length; i++) {
                content = content + "{\"name\":\"" + list[i].name + "\"," + "\"majorNum\":\"" + list[i].majorNum + "\"," + "\"minorNum\":\"" + list[i].minorNum + "\"}";
                if (i < list.length - 1) {
                    content = content + ",\n";
                }
            }
            content = content + "]";
            var result = fh.writeFileToNative(path, content, workRoot);
            assert.ok(true, "writeToFile ");
            done();
        };
        if (sourceType == 0)
            getServiceListT();
        else
            getServiceListC();
        timerFlag = setTimeout(checkServiceTimeout, 5000);
    });
}

function checkServiceT(expectNum, flag, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#total").html("");
        function checkServiceTTimeout() {
            if ((allChannels_T.length > 0) && (flag == 1)) {
                sourceType = 1;
                showServiceList(sourceType);
            }
            assert.equal(allChannels_T.length, expectNum, "getServiceT ");

            if (allChannels_T.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". All channelsT length: " + allChannels_T.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getServiceListT();
        timerFlag = setTimeout(checkServiceTTimeout, 2000);
    });
}
function checkServiceC(expectNum, flag, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#total").html("");
        function checkServiceCTimeout() {
            if ((allChannels_C.length > 0) && (flag == 1)) {
                sourceType = 0;
                showServiceList(sourceType);
            }
            assert.equal(allChannels_C.length, expectNum, "getServiceC ");

            if (allChannels_C.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". All channelsC length: " + allChannels_C.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getServiceListC();
        timerFlag = setTimeout(checkServiceCTimeout, 2000);
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
        if (((sourceType == 1) && (chn < allChannels_T.length)) || ((sourceType == 0) && (chn < allChannels_C.length))) {
            var done = assert.async(1);
            var timerFlag;
            var format = "";
            var curTime = 0;
            var aspect = "";
            var starttimeNow = 0;
            var stoptimeNow = 0;
            var flag = false;
            var channelChanged = false;
            var videoMainAvailable = false;
            var info = "";

            function playInputedChannelTimeout() {
                model.tvservice.onMainPlayChanged = null;
                model.video.onVideoFormatInfoChanged = null;
                model.video.onVideoFrameAspectChanged = null;
                model.tvservice.onEitMainNowChanged = null;
                model.tvservice.onMainPlayChanged = null;
                model.video.onAvailableModeChaged = null;
                if ((videoMainAvailable == 1) && (format.length != 0) && (aspect.length != 0) && (channelChanged == true) && (starttimeNow > 0) && (stoptimeNow > 0))
                    flag = true;
                assert.ok(flag, "playInputedChannel:" + chn);

                if (flag === false) {
                    var path = "hisenseUI/" + func_name.trim() + ".txt";
                    var content = "Test failed on " + localTime;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            model.tvservice.onMainPlayChanged = function (val) {
                channelChanged = true;
            }
            model.video.onAvailableModeChaged = function (val) {
                videoMainAvailable = val;
            }
            model.video.onVideoFormatInfoChanged = function (val) {
                format = val;
                if (val.length != 0) {
                    info = info + " |" + val;
                    $("#details").html(info);
                }
            }
            model.video.onVideoFrameAspectChanged = function (val) {
                aspect = val;
                if (val.length != 0) {
                    info = info + " |" + val;
                    $("#details").html(info);
                }
            }
            model.tvservice.onEitMainNowChanged = function (val) {
                var pfResultNow = val;
                if (pfResultNow.length == 12) {
                    starttimeNow = pfResultNow[2];
                    stoptimeNow = pfResultNow[3];
                    var start_now = new Date(pfResultNow[2] * 1000);
                    var stop_now = new Date(pfResultNow[3] * 1000);
                    info = info + "|" + pfResultNow[1] + "|" + start_now.toLocaleString() + "|" + stop_now.toLocaleString() + "|" + pfResultNow[8];
                    $("#details").html(info);
                }
            }

            if (sourceType == 1) {
                model.tvservice.playChannel("0", allChannels_T[chn].uuid);
                $("#name").html(allChannels_T[chn].name);
            }
            else {
                model.tvservice.playChannel("0", allChannels_C[chn].uuid);
                $("#name").html(allChannels_C[chn].name);
            }
            timerFlag = setTimeout(playInputedChannelTimeout, 4000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + func_name.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT  or 4002_getServicelistC at first!");
        }
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
        if (((sourceType == 1) && (allChannels_T.length == 0)) || ((sourceType == 0) && (allChannels_C.length == 0))) {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT  or 4002_getServicelistC at first!");
        }
        else {
            var done = assert.async(times);

            function playTimeout() {
                try {
                    if (QUnit.config.interrupt === true) {
                        throw new Error("Interrupt test case in switchChannel.");
                    }
                    if (i < times) {
                        var result = play(direction, sourceType);
                        assert.equal(result, true, "check play ");

                        if (result != true) {
                            var path = "hisenseUI/" + funcName.trim() + ".txt";
                            var content = "Test failed on " + localTime + ". Assert result: " + result + ", running times: " + i;
                            fh.writeFileToNative(path, content, workroot);
                        }

                        i++;
                        $("#times").html(i);
                        done();
                        if (i < times)
                            setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 1000) + 1000));
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

            setTimeout(playTimeout, Math.ceil(Math.random() * (10000 - 1000) + 1000));
        }
    });
}

function randomSwitchChannel(repeat, funcName) {
    QUnit.test(funcName, function (assert) {
        var i = 0;
        var times = repeat;
        var timer;
        if ((allChannels_T.length > 0) && (allChannels_C.length > 0)) {
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
                        var result = switch_T_C(i)
                        assert.equal(result, true, "check play ");

                        if (result != true) {
                            var path = "hisenseUI/" + funcName.trim() + ".txt";
                            var content = "Test failed on " + localTime + ". Assert result: " + result + ", running times: " + i;
                            fh.writeFileToNative(path, content, workroot);
                        }

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
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT  and 4002_getServicelistC at first!");
        }
    });
}
function channelUpT(repeat, funcName) {
    console.log("............................... channelUpT. ");
    $("#resultView table").html("");
    var direction = 1;
    var sourceType = 1;
    switchChannel(direction, sourceType, repeat, funcName);
}


function channelDownT(repeat, funcName) {
    console.log("............................... channelDownT. ");
    var direction = 0;
    var sourceType = 1;
    switchChannel(direction, sourceType, repeat, funcName);
}
function channelRandomT(repeat, funcName) {
    console.log("............................... channelRandomT. ");
    var direction = 2;
    var sourceType = 1;
    switchChannel(direction, sourceType, repeat, funcName);
}
function channelUpC(repeat, funcName) {
    console.log("............................... channelUpC. ");
    var direction = 1;
    var sourceType = 0;
    switchChannel(direction, sourceType, repeat, funcName);
}

function channelDownC(repeat, funcName) {
    console.log("............................... channelDownC. ");
    var direction = 0;
    var sourceType = 0;
    switchChannel(direction, sourceType, repeat, funcName);
}
function channelRandomC(repeat, funcName) {
    console.log("............................... channelRandomC. ");
    var direction = 2;
    var sourceType = 0;
    switchChannel(direction, sourceType, repeat, funcName);
}

function checkServiceListTByFile(funcName) {
    console.log("............................... checkServiceListTByFile  . ");
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);

        function compare() {
            var flag = true;
            var serListPath = "config/serviceListATSC_T.json";
            var serList = new readJSONFileArray(serListPath);
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
            return flag;
        }

        function serviceToCompare() {
            var result = compare();
            assert.ok(result, "checkServiceListTByFile ");

            if (result === false) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        }

        getServiceListT();
        timerFlag = setTimeout(serviceToCompare, 2000);
    });
}

function checkServiceListCByFile(funcName) {
    console.log("............................... checkServiceListCByFile  . ");
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);

        function compare() {
            var flag = true;
            var serListPath = "config/serviceListATSC_C.json";
            var serList = new readJSONFileArray(serListPath);
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
            return flag;
        }

        function serviceToCompare() {
            var result = compare();
            assert.ok(result, "checkServiceListCByFile ");

            if (result === false) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        }

        getServiceListC();
        timerFlag = setTimeout(serviceToCompare, 2000);
    });
}

function modifyAttr(attr, flag, uuid) {
    model.servicelist.SetServiceAttribute(attr, flag, uuid);
}

//getSkipListAllT
function getSkipListAllT(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#details").html("");
        function checkServiceSkipTTimeout() {
            $("#details").html(skipChannels_T.length);
            assert.equal(skipChannels_T.length, expectNum, "getSkipListAllT ");

            if (skipChannels_T.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". Skip channelsT length: " + skipChannels_T.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getSkipListT();
        timerFlag = setTimeout(checkServiceSkipTTimeout, 2000);
    });
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


function modifySkipListT(attr, flag, chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_T.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function modifySkipTTimeout() {
                $("#details").html(skipChannels_T.length);
                var val = inSkipListT(allChannels_T[chNum].uuid);
                assert.equal(val, flag, "modifySkipListT ");

                if (val != flag) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime + ". Assert value: " + val + ", expect value: " + flag;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            modifyAttr(attr, flag, allChannels_T[chNum].uuid);
            getSkipListT();
            timerFlag = setTimeout(modifySkipTTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT   at first!");
        }
    });
}
function inSkipListT(uuid) {
    var i;
    var flag = 0;
    for (i = 0; i < skipChannels_T.length; i++) {
        if (uuid == skipChannels_T[i].uuid) {
            flag = 1;
            break;
        }
    }
    return flag;
}

//getSkipListAllT

//getSkipListAllC
function getSkipListAllC(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#details").html("");
        function checkServiceSkipCTimeout() {
            $("#details").html(skipChannels_C.length);
            assert.equal(skipChannels_C.length, expectNum, "getSkipListAllC ");

            if (skipChannels_C.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". Skip channelsC length: " + skipChannels_C.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getSkipListC();
        timerFlag = setTimeout(checkServiceSkipCTimeout, 2000);
    });
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

function modifySkipListC(attr, flag, chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_C.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function modifySkipCTimeout() {
                $("#details").html(skipChannels_C.length);
                var val = inSkipListC(allChannels_C[chNum].uuid);
                assert.equal(val, flag, "modifySkipListC ");

                if (val != flag) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime + ". Assert value: " + val + ", expect value: " + flag;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            modifyAttr(attr, flag, allChannels_C[chNum].uuid);
            getSkipListC();
            timerFlag = setTimeout(modifySkipCTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click  4002_getServicelistC at first!");
        }
    });
}
function inSkipListC(uuid) {
    var i;
    var flag = 0;
    for (i = 0; i < skipChannels_C.length; i++) {
        if (uuid == skipChannels_C[i].uuid) {
            flag = 1;
            break;
        }
    }
    return flag;
}

//getSkipListAllC

//getBlockListAllT

function getBlockListAllT(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#details").html("");
        function checkServiceBlockTTimeout() {
            $("#details").html(blockChannels_T.length);
            assert.equal(blockChannels_T.length, expectNum, "getBlockListAllT ");

            if (blockChannels_T.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". Block channelsT length: " + blockChannels_T.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getBlockListT();
        timerFlag = setTimeout(checkServiceBlockTTimeout, 2000);
    });
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
function modifyBlockListT(attr, flag, chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_T.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function modifyBlockTTimeout() {
                $("#details").html(blockChannels_T.length);
                var val = inBlockListT(allChannels_T[chNum].uuid);
                assert.equal(val, flag, "modifyBlockListT ");

                if (val != flag) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime + ". Assert value: " + val + ", expect value: " + flag;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            modifyAttr(attr, flag, allChannels_T[chNum].uuid);
            getBlockListT();
            timerFlag = setTimeout(modifyBlockTTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT    at first!");
        }
    });
}
function inBlockListT(uuid) {
    var i;
    var flag = 0;
    for (i = 0; i < blockChannels_T.length; i++) {
        if (uuid == blockChannels_T[i].uuid) {
            flag = 1;
            break;
        }
    }
    return flag;
}

//getBlockListAllT


//getBlockListAllC
function getBlockListAllC(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#details").html("");
        function checkServiceBlockCTimeout() {
            $("#details").html(blockChannels_C.length);
            assert.equal(blockChannels_C.length, expectNum, "getBlockListAllC ");

            if (blockChannels_C.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". Block channelsC length: " + blockChannels_C.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getBlockListC();
        timerFlag = setTimeout(checkServiceBlockCTimeout, 2000);
    });
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
function modifyBlockListC(attr, flag, chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_C.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function modifyBlockCTimeout() {
                $("#details").html(blockChannels_C.length);
                var val = inBlockListC(allChannels_C[chNum].uuid);
                assert.equal(val, flag, "modifyBlockListC ");

                if (val != flag) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime + ". Assert value: " + val + ", expect value: " + flag;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            modifyAttr(attr, flag, allChannels_C[chNum].uuid);
            getBlockListC();
            timerFlag = setTimeout(modifyBlockCTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click  4002_getServicelistC at first!");
        }
    });
}
function inBlockListC(uuid) {
    var i;
    var flag = 0;
    for (i = 0; i < blockChannels_C.length; i++) {
        if (uuid == blockChannels_C[i].uuid) {
            flag = 1;
            break;
        }
    }
    return flag;
}
//getBlockListAllC

function getServicesAttrT(chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_T.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function getAttrT() {
                if (chNum < allChannels_T.length) {
                    $("#details").html(allChannels_T[chNum].attr + ";fav:" + (((allChannels_T[chNum].attr & 0x80) != 0) ? 1 : 0)
                        + ";skip:" + (((allChannels_T[chNum].attr & 0x20) != 0) ? 1 : 0) + ";block:" + (((allChannels_T[chNum].attr & 0x40) != 0) ? 1 : 0));
                    return true;
                }
                else
                    return false;
            }

            function getServicesAttrTTimeout() {
                var val = getAttrT();
                assert.ok(val, "getServicesAttrT ");

                if (val === false) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            getServiceListT();
            timerFlag = setTimeout(getServicesAttrTTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}
function getServicesAttrC(chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_C.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function getAttrC() {
                if (chNum < allChannels_C.length) {
                    $("#details").html(allChannels_C[chNum].attr + ";fav:" + (((allChannels_C[chNum].attr & 0x80) != 0) ? 1 : 0)
                        + ";skip:" + (((allChannels_C[chNum].attr & 0x20) != 0) ? 1 : 0) + ";block:" + (((allChannels_C[chNum].attr & 0x40) != 0) ? 1 : 0));
                    return true;
                }
                else
                    return false;
            }

            function getServicesAttrCTimeout() {
                var val = getAttrC();
                assert.ok(val, "getServicesAttrC ");

                if (val === false) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            getServiceListC();
            timerFlag = setTimeout(getServicesAttrCTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click  4002_getServicelistC at first!");
        }
    });
}

function startGetMainPlay() {
    var info = model.tvservice.getMainPlay();
    return info;
}
function getMainPlay(funcName) {
    QUnit.test(funcName, function (assert) {
        $("#details").html("");
        var val = startGetMainPlay();
        assert.notEqual(val, null, "Test getMainPlay");
        if (val != null)
            $("#details").html("listUid:" + val[0] + ";uid:" + val[1] + ";number:" + val[2] + ";name:" + val[5] + ";attr:" + val[8]);
        else {
            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime;
            fh.writeFileToNative(path, content, workroot);
        }
    });
}
function mainPlayChanged(sourceType, chn, testName) {
    QUnit.test(testName, function (assert) {
        if (((sourceType == 1) && (chn < allChannels_T.length)) || ((sourceType == 0) && (chn < allChannels_C.length))) {
            var done = assert.async(1);
            var timerFlag;

            function getMainPlayChangedTimeout() {
                model.tvservice.onMainPlayChanged = null;
                assert.ok(false, "mainPlayChanged timeout");

                var path = "hisenseUI/" + testName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". mainPlayChanged timeout.";
                fh.writeFileToNative(path, content, workroot);

                done();
            };

            model.tvservice.onMainPlayChanged = function (val) {
                clearTimeout(timerFlag);
                model.tvservice.onMainPlayChanged = null;
                assert.notEqual(val, null, "mainPlayChanged");
                done();
                if (val != null)
                    $("#details").html("listUid:" + val[0] + ";uid:" + val[1] + ";number:" + val[2] + ";name:" + val[5] + ";attr:" + val[8]);
                else {
                    var path = "hisenseUI/" + testName.trim() + ".txt";
                    var content = "Test failed on " + localTime;
                    fh.writeFileToNative(path, content, workroot);
                }
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
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + testName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT  or 4002_getServicelistC at first!");
        }
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
    QUnit.test(funcName, function (assert) {
        $("#details").html("");
        var result = startGetNoSignalMain();
        assert.ok(result, "getNoSignalMain");

        if (result === false) {
            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime;
            fh.writeFileToNative(path, content, workroot);
        }

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
    QUnit.test(funcName, function (assert) {
        $("#details").html("");
        var timerFlag;
        var done = assert.async(1);

        function getSignalLevelTimeout() {
            var result = startGetSignalLevel();
            assert.ok(result, "getSignalLevel");

            if (result === false) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };

        enableTunerInfo();
        timerFlag = setTimeout(getSignalLevelTimeout, 2000);
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
    QUnit.test(funcName, function (assert) {
        $("#details").html("");
        var timerFlag;
        var done = assert.async(1);

        function getSignalCnTimeout() {
            var result = startGetSignalCn();
            assert.ok(result, "getSignalLevel");

            if (result === false) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };

        enableTunerInfo();
        timerFlag = setTimeout(getSignalCnTimeout, 2000);
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

            if (listUpdate === false) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime;
                fh.writeFileToNative(path, content, workroot);
            }

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

function getFavListAllT(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#details").html("");
        function checkServiceFavTTimeout() {
            $("#details").html(favChannels_T.length);
            assert.equal(favChannels_T.length, expectNum, "getFavListAllT ");

            if (favChannels_T.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". Fav channelsT length: " + favChannels_T.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getFavListT();
        timerFlag = setTimeout(checkServiceFavTTimeout, 2000);
    });
}

function modifyFavListT(attr, flag, chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_T.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function modifyFavTTimeout() {
                $("#details").html(favChannels_T.length);
                var val = inFavListT(allChannels_T[chNum].uuid);
                assert.equal(val, flag, "modifyFavListT ");

                if (val != flag) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            modifyAttr(attr, flag, allChannels_T[chNum].uuid);
            getFavListT();
            timerFlag = setTimeout(modifyFavTTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");

            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ". Channel length is 0.";
            fh.writeFileToNative(path, content, workroot);

            $("#details").html(" Click 4001_getServicelistT  at first!");
        }
    });
}
function inFavListT(uuid) {
    var i;
    var flag = 0;
    for (i = 0; i < favChannels_T.length; i++) {
        if (uuid == favChannels_T[i].uuid) {
            flag = 1;
            break;
        }
    }
    return flag;
}

//getFavListAllT


//getFavListAllC


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
function getFavListAllC(expectNum, funcName) {
    QUnit.test(funcName, function (assert) {
        var timerFlag;
        var done = assert.async(1);
        $("#details").html("");
        function checkServiceFavCTimeout() {
            $("#details").html(favChannels_C.length);
            assert.equal(favChannels_C.length, expectNum, "getFavListAllC ");

            if (favChannels_C.length != expectNum) {
                var path = "hisenseUI/" + funcName.trim() + ".txt";
                var content = "Test failed on " + localTime + ". Fav channelsC length: " + favChannels_C.length + ", expect number: " + expectNum;
                fh.writeFileToNative(path, content, workroot);
            }

            done();
        };
        getFavListC();
        timerFlag = setTimeout(checkServiceFavCTimeout, 2000);
    });
}


function modifyFavListC(attr, flag, chNum, funcName) {
    QUnit.test(funcName, function (assert) {
        if (chNum < allChannels_C.length) {
            var timerFlag;
            var done = assert.async(1);
            $("#details").html("");
            function modifyFavCTimeout() {
                $("#details").html(favChannels_C.length);
                var val = inFavListC(allChannels_C[chNum].uuid);
                assert.equal(val, flag, "modifyFavListC ");

                if (val != flag) {
                    var path = "hisenseUI/" + funcName.trim() + ".txt";
                    var content = "Test failed on " + localTime;
                    fh.writeFileToNative(path, content, workroot);
                }

                done();
            };
            modifyAttr(attr, flag, allChannels_C[chNum].uuid);
            getFavListC();
            timerFlag = setTimeout(modifyFavCTimeout, 2000);
        }
        else {
            assert.ok(false, "channel length is 0");
            var path = "hisenseUI/" + funcName.trim() + ".txt";
            var content = "Test failed on " + localTime + ", channel length is 0.";
            fh.writeFileToNative(path, content, workroot);
            $("#details").html(" Click  4002_getServicelistC at first!");
        }
    });
}
function inFavListC(uuid) {
    var i;
    var flag = 0;
    for (i = 0; i < favChannels_C.length; i++) {
        if (uuid == favChannels_C[i].uuid) {
            flag = 1;
            break;
        }
    }
    return flag;
}

//getFavListAllC