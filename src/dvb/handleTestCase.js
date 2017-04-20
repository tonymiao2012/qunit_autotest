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
function handleAutoTestCase(inputArray, funcName) {
    switch (funcName) {
        case "8001_autoTest1":
            var repeat = inputArray[0];
            if ((repeat < 1) || isNaN(repeat))
                repeat = 1;
            var i = 0, j = 0;
            var serListPath = "config/autoTestDVB_1.json";
            var serList = readJSONFileArray(serListPath);
            for (j = 0; j < repeat; j++) {
                for (i = 0; i < serList.length; i++) {
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
            }
            break;
    }
} 