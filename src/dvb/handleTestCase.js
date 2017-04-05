function handleRepeatTestCase(toolbarArray, funcName) {
    var repeat = toolbarArray[0].value;
    switch (funcName) {
        case "1001_autoScanT":
            var expectNum = toolbarArray[1].value;
            var chan_mode = parseInt(toolbarArray[2].value);
            var scan_mode = parseInt(toolbarArray[3].value);
            var search_mode = parseInt(toolbarArray[4].value);
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
            var expectNum = toolbarArray[1].value;
            var chan_mode = parseInt(toolbarArray[2].value);
            var scan_mode = parseInt(toolbarArray[3].value);
            var search_mode = parseInt(toolbarArray[4].value);
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
            getServiceListT();
            setTimeout(channelUpT, 4000, repeat, funcName);
            break;
        case "1004_channelDownT":
            getServiceListT();
            setTimeout(channelDownT, 4000, repeat, funcName);
            break;
        case "1005_channelRandomT":
            getServiceListT();
            setTimeout(channelRandomT, 4000, repeat, funcName);
            break;
        case "1006_channelUpC":
            getServiceListC();
            setTimeout(channelUpC, 4000, repeat, funcName);
            break;
        case "1007_channelDownC":
            getServiceListC();
            setTimeout(channelDownC, 4000, repeat, funcName);
            break;
        case "1008_channelRandomC":
            getServiceListC();
            setTimeout(channelRandomC, 4000, repeat, funcName);
            break;
        case "1009_channelSwitchT_C":
            getServiceListT();
            setTimeout(channelSwitchT_C_step1, 4000, repeat, funcName);
            break;
    }
}
function handlePlayTestCase(toolbarArray, funcName) {
    var chn = toolbarArray[0].value;
    switch (funcName) {
        case "3001_playChannelT":
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!")
            break;
        case "3002_playChannelC":
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC  again!")
            break;
    }
}
function handleServiceListTestCase(toolbarArray, funcName) {
    var expectNum = toolbarArray[0].value;
    switch (funcName) {
        case "4001_getServicelistT":
            $("#total").html("");
            getServiceListT();
            setTimeout(checkServiceT, 4000, expectNum, funcName);
            break;
        case "4002_getServicelistC":
            $("#total").html("");
            getServiceListC();
            setTimeout(checkServiceC, 4000, expectNum, funcName);
            break;
        case "4003_getServicelistS":
            $("#total").html("");
            getServiceListS();
            setTimeout(checkServiceS, 10000, expectNum, funcName);
            break;
    }
}