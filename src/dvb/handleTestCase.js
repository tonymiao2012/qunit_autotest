function handleRepeatTestCase(inputArray, funcName) {
    var repeat = inputArray[0];
    if ((repeat < 1) || isNaN(repeat)) {
        $("#details").html(" At least 1 time!");
        return;
    }
    switch (funcName) {
        case "1001_autoScanT":
            var expectNum = inputArray[1];
            if (isNaN(expectNum))
                expectNum = 0;
            var chan_mode = inputArray[2];
            if (isNaN(chan_mode))
                chan_mode = 0;
            var scan_mode = inputArray[3];
            if (isNaN(scan_mode))
                scan_mode = 0;
            var search_mode = inputArray[4];
            if (isNaN(search_mode))
                search_mode = 0;
            if (((chan_mode >= 0) && (chan_mode <= 1)) && ((scan_mode >= 0) && (scan_mode <= 2)) && ((search_mode >= 0) && (search_mode <= 1))) {
                var sourceType;
                if (scan_mode == 0)
                    sourceType = 10;
                else
                    sourceType = 11;
                autoSearch(repeat, expectNum, sourceType, chan_mode, scan_mode, search_mode, funcName);
            }
            else
                $("#details").html("Channel Mode or Scan Mode or Search Mode error. Please check your input again.");
            break;
        case "1002_autoScanC":
            var expectNum = inputArray[1];
            if (isNaN(expectNum))
                expectNum = 0;
            var chan_mode = inputArray[2];
            if (isNaN(chan_mode))
                chan_mode = 0;
            var scan_mode = inputArray[3];
            if (isNaN(scan_mode))
                scan_mode = 0;
            var search_mode = inputArray[4];
            if (isNaN(search_mode))
                search_mode = 0;
            if (((chan_mode >= 0) && (chan_mode <= 1)) && ((scan_mode >= 0) && (scan_mode <= 2)) && ((search_mode >= 0) && (search_mode <= 2))) {
                var sourceType;
                if (scan_mode == 0)
                    sourceType = 10;
                else
                    sourceType = 12;
                autoSearch(repeat, expectNum, sourceType, chan_mode, scan_mode, search_mode, funcName);
            }
            else
                break;
        case "1003_channelUpT":
            if (allChannels_T.length > 0)
                channelUpT(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT at first!")
            break;
        case "1004_channelDownT":
            if (allChannels_T.length > 0)
                channelDownT(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT at first!")
            break;
        case "1005_channelRandomT":
            if (allChannels_T.length > 0)
                channelRandomT(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT at first!")
            break;
        case "1006_channelUpC":
            if (allChannels_C.length > 0)
                channelUpC(repeat, funcName);
            else
                $("#details").html(" Click 4002_getServicelistC at first!")
            break;
        case "1007_channelDownC":
            if (allChannels_C.length > 0)
                channelDownC(repeat, funcName);
            else
                $("#details").html(" Click 4002_getServicelistC at first!")
            break;
        case "1008_channelRandomC":
            if (allChannels_C.length > 0)
                channelRandomC(repeat, funcName);
            else
                $("#details").html(" Click 4002_getServicelistC at first!")
            break;
        case "1009_channelSwitchT_C":
            if ((allChannels_T.length > 0) && (allChannels_C.length > 0))
                randomSwitchChannel(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT and 4002_getServicelistC at first!")
            break;
    }
}
function handleScanTestCase(inputArray, funcName) {
    switch (funcName) {
        case "2001_getSource":
            var val = inputArray[0];
            getSource(val, funcName);
            break;
        case "2002_setSourceATV":
            var sourceType = 10;
            setSource(sourceType, funcName);
            break;
        case "2003_setSourceT":
            var sourceType = 11;
            setSource(sourceType, funcName);
            break;
        case "2004_setSourceC":
            var sourceType = 12;
            setSource(sourceType, funcName);
            break;
        case "2005_setSourceS":
            var sourceType = 13;
            setSource(sourceType, funcName);
            break;
        case "2006_getScramble":
            var val = inputArray[0];
            getScramble(val, funcName);
            break;
        case "2007_setScrambleFree":
            var scram = 0;
            setScramble(scram, funcName);
            break;
        case "2008_setScrambleAll":
            var scram = 1;
            setScramble(scram, funcName);
            break;
        case "2009_getDvbtScanMode":
            var val = inputArray[0];
            getDvbtScanMode(val, funcName);
            break;
        case "2010_setDvbtScanMode":
            var scan = inputArray[0];
            setDvbtScanMode(scan, funcName);
            break;
        case "2011_getDvbcScanMode":
            var val = inputArray[0];
            getDvbcScanMode(val, funcName);
            break;
        case "2012_setDvbcScanMode":
            var scan = inputArray[0];
            setDvbcScanMode(scan, funcName);
            break;
    }
}
function handlePlayTestCase(inputArray, funcName) {
    switch (funcName) {
        case "3001_playChannelT":
            var sourceType = 1; //1 for T
            var chn = inputArray[0];
            if (chn < allChannels_T.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!")
            break;
        case "3002_playChannelC":
            var chn = inputArray[0];
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC  at first!")
            break;
    }
}
function handleServiceListTestCase(inputArray, funcName) {
    switch (funcName) {
        case "4001_getServicelistT":
            var expectNum = inputArray[0];
            if (isNaN(expectNum))
                expectNum = 0;
            var flag = inputArray[1];
            if (isNaN(flag))
                flag = 0;
            checkServiceT(expectNum, flag, funcName);
            break;
        case "4002_getServicelistC":
            var expectNum = inputArray[0];
            if (isNaN(expectNum))
                expectNum = 0;
            var flag = inputArray[1];
            if (isNaN(flag))
                flag = 0;
            checkServiceC(expectNum, flag, funcName);
            break;
        case "4003_getServicelistS":
            var expectNum = inputArray[0];
            if (isNaN(expectNum))
                expectNum = 0;
            checkServiceS(expectNum, funcName);
            break;
        case "4004_checkChannelListT":
            checkServiceListTByFile(funcName);
            break;
        case "4005_checkChannelListC":
            checkServiceListCByFile(funcName);
            break;
        case "4006_checkChannelListS":
            checkServiceListSByFile(funcName);
            break;
        case "4007_writeT2File":
            var sourceType = 0;
            write2File(sourceType, funcName);
            break;
        case "4008_writeC2File":
            var sourceType = 1;
            write2File(sourceType, funcName);
            break;
        case "4009_writeS2File":
            var sourceType = 2;
            write2File(sourceType, funcName);
            break;
    }
}

function handlePCTestCase(inputArray, funcName) {
    require.config({
        paths: {
            "PC_Prototype": "./src/COMMON/PC_Prototype"
        }
    });

    require(["PC_Prototype"], function (PC_COMMON) {
        switch (funcName) {
            case "5001_getPin":
                PC_COMMON.getPin(funcName);
                break;
            case "5002_setPin":
                var pinValue = inputArray[0];
                PC_COMMON.setPin(pinValue, funcName);
                break;
            case "5003_getSModel":
                PC_COMMON.getSModel(funcName);
                break;
            case "5004_setSModel":
                var flag = inputArray[0];
                if (flag == 0 || flag == 1) {
                    PC_COMMON.setSModel(flag, funcName);
                } else {
                    $("#details").html("SModel is 0 or 1");
                }
                break;
            case "5005_getStartTime":
                PC_COMMON.getStartTime(funcName);
                break;
            case "5006_setStartTime":
                var startTime = inputArray[0];
                if (startTime >= 0 && startTime <= 86340) {
                    startTime = (startTime / 60) * 60;
                    PC_COMMON.setStartTime(startTime, funcName);
                } else
                    $("#details").html("The range of startTime is 0 to 86340");
                break;
            case "5007_getEndTime":
                PC_COMMON.getEndTime(funcName);
                break;
            case "5008_setEndTime":
                var endTime = inputArray[0];
                if (endTime >= 0 && endTime <= 86340) {
                    endTime = (endTime / 60) * 60;
                    PC_COMMON.setEndTime(endTime, funcName);
                } else
                    $("#details").html("The range of endTime is 0 to 86340");
                break;
            case "5009_getEndWeekly":
                PC_COMMON.getEndWeekly(funcName);
                break;
            case "5010_setEndWeekly":
                var temp1 = inputArray[0];
                if (temp1 > 0) {
                    var weekly = "";
                    var day;

                    do
                    {
                        day = temp1 % 10;
                        temp1 = parseInt(temp1 / 10);
                        if ((day == 1) && (weekly.indexOf("Mon") == -1))
                            weekly += "Mon,";
                        else if ((day == 2) && (weekly.indexOf("Tue") == -1))
                            weekly += "Tue,";
                        else if ((day == 3) && (weekly.indexOf("Wed") == -1))
                            weekly += "Wed,";
                        else if ((day == 4) && (weekly.indexOf("Thu") == -1))
                            weekly += "Thu,";
                        else if ((day == 5) && (weekly.indexOf("Fri") == -1))
                            weekly += "Fri,";
                        else if ((day == 6) && (weekly.indexOf("Sat") == -1))
                            weekly += "Sat,";
                        else if ((day == 7) && (weekly.indexOf("Sun") == -1))
                            weekly += "Sun,";
                    } while (temp1 != 0)
                    PC_COMMON.setEndWeekly(weekly, funcName);
                } else
                    $("#details").html("please input a string of numbers, number is 1-7");
                break;
            case "5011_getPinRequest":
                break;
        }
    });
}

function parseParam(i, serList) {
    var paramArray = new Array();
    if (serList[i].param0 != null)
        paramArray[0] = parseInt(serList[i].param0);
    if (serList[i].param1 != null)
        paramArray[1] = parseInt(serList[i].param1);
    if (serList[i].param2 != null)
        paramArray[2] = parseInt(serList[i].param2);
    if (serList[i].param3 != null)
        paramArray[3] = parseInt(serList[i].param3);
    if (serList[i].param4 != null)
        paramArray[4] = parseInt(serList[i].param4);

    var testType = serList[i].name[0];
    switch (testType) {
        case '1':
            handleRepeatTestCase(paramArray, serList[i].name);
            break;
        case '2':
            handleScanTestCase(paramArray, serList[i].name);
            break;
        case '3':
            handlePlayTestCase(paramArray, serList[i].name);
            break;
        case '4':
            handleServiceListTestCase(paramArray, serList[i].name);
            break;
        case '5':
            handlePCTestCase(paramArray, serList[i].name);
            break;
        case '6':
            handleCCTestCase(paramArray, serList[i].name);
            break;
        case '7':
            handleInfoBarTestCase(paramArray, serList[i].name);
            break;
    }
}

function handleAutoTestCase(inputArray, funcName) {
    var serListPath;
    switch (funcName) {
        case "8001_autoTest1":
            serListPath = "config/autoTestDVB_1.json";
            break;
    }

    var repeat = inputArray[0];
    if ((repeat < 1) || isNaN(repeat))
        repeat = 1;
    var i = 0, j = 1;
    var serList = new readJSONFileArray(serListPath);
    parseParam(0, serList);

    for (j = 1; j < repeat; j++) {
        for (i = serList.length - 1; i >= 0; i--) {
            parseParam(i, serList);
        }
    }

    for (i = serList.length - 1; i > 0; i--) {
        parseParam(i, serList);
    }
} 