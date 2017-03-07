function handleRepeatTestCase(repeat,expectNum,funcName)
{
    switch (funcName) {
        case "1001_autoScanT":
            var sourceType = 11;
            autoSearch(repeat, expectNum, sourceType, funcName);
            break;
        case "1002_autoScanC":
            var sourceType = 12;
            autoSearch(repeat, expectNum, sourceType, funcName);
            break;
        case "1003_channelUpT":
            getServiceListT();
            setTimeout(channelUpT, 2000, repeat, funcName);
            break;
        case "1004_channelDownT":
            getServiceListT();
            setTimeout(channelDownT, 2000, repeat, funcName);
            break;
        case "1005_channelRandomT":
            getServiceListT();
            setTimeout(channelRandomT, 2000, repeat, funcName);
            break;
        case "1006_channelUpC":
            getServiceListC();
            setTimeout(channelUpC, 2000, repeat, funcName);
            break;
        case "1007_channelDownC":
            getServiceListC();
            setTimeout(channelDownC, 2000, repeat, funcName);
            break;
        case "1008_channelRandomC":
            getServiceListC();
            setTimeout(channelRandomC, 2000, repeat, funcName);
            break;
        case "1009_channelSwitchT_C":
            getServiceListT();
            setTimeout(channelSwitchT_C_step1, 2000, repeat, funcName);
            break;            
    }	
}