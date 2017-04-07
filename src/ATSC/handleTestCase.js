function handleRepeatTestCase(toolbarArray, funcName) {
    var repeat = toolbarArray[0].value;
    var expectNum = 0;
    if (toolbarArray.length > 1) {
        expectNum = toolbarArray[1].value;
    }
    switch (funcName) {
        case "1001_autoScanT":
            var sourceType = 15;
            autoSearch(repeat, expectNum, sourceType, funcName);
            break;
        case "1002_autoScanC":
            var sourceType = 16;
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
function handleScanTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "2001_setSourceDtvT":
            var sourceType = 15;
            setSource(sourceType, funcName);
            break;
        case "2002_getSourceDtvT":
            var sourceType = 15;
            getSource(sourceType, funcName);
            break;
        case "2003_setSourceAtvT":
            var sourceType = 17;
            setSource(sourceType, funcName);
            break;
        case "2004_getSourceAtvT":
            var sourceType = 17;
            getSource(sourceType, funcName);
            break;
        case "2005_setSourceDtvC":
            var sourceType = 16;
            setSource(sourceType, funcName);
            break;
        case "2006_getSourceDtvC":
            var sourceType = 16;
            getSource(sourceType, funcName);
            break;
        case "2007_setSourceAtvC":
            var sourceType = 18;
            setSource(sourceType, funcName);
            break;
        case "2008_getSourceAtvC":
            var sourceType = 18;
            getSource(sourceType, funcName);
            break;
        case "2009_autoScanStartDtvT":
            var sourceType = 15;
            autoScanStart(sourceType, funcName);
            break;
        case "2010_autoScanStartAtvT":
            var sourceType = 17;
            autoScanStart(sourceType, funcName);
            break;
        case "2011_autoScanStartDtvC":
            var sourceType = 16;
            autoScanStart(sourceType, funcName);
            break;
        case "2012_autoScanStartAtvC":
            var sourceType = 18;
            autoScanStart(sourceType, funcName);
            break;
        case "2013_manualScanStartDtvT":
            var sourceType = 15;
            var fre = toolbarArray[0].value;
            if ((fre >= 2) && (fre <= 69))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2014_manualScanStartAtvT":
            var sourceType = 17;
            var fre = toolbarArray[0].value;
            if ((fre >= 2) && (fre <= 69))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2015_manualScanStartDtvC":
            var sourceType = 16;
            var fre = toolbarArray[0].value;
            if ((fre >= 1) && (fre <= 135))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2016_manualScanStartAtvC":
            var sourceType = 18;
            var fre = toolbarArray[0].value;
            if ((fre >= 1) && (fre <= 135))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2017_autoScanStopDtvT":
            var sourceType = 15;
            autoScanStop(sourceType, funcName);
            break;
        case "2018_autoScanStopDtvC":
            var sourceType = 16;
            autoScanStop(sourceType, funcName);
            break;
        case "2019_autoScanProgressDtvT":
            var sourceType = 15;
            autoScanProgress(sourceType, funcName);
            break;
        case "2020_autoScanProgressDtvC":
            var sourceType = 16;
            autoScanProgress(sourceType, funcName);
            break;
        case "2021_autoScanProgressAtvT":
            var sourceType = 17;
            autoScanProgress(sourceType, funcName);
            break;
        case "2022_autoScanProgressAtvC":
            var sourceType = 18;
            autoScanProgress(sourceType, funcName);
            break;
        case "2023_autoScanDigitServicesDtvT":
            var sourceType = 15;
            var expectNum = toolbarArray[0].value;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2024_autoScanAnalogServicesAtvT":
            var sourceType = 17;
            var expectNum = toolbarArray[0].value;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2025_autoScanDigitServicesDtvC":
            var sourceType = 16;
            var expectNum = toolbarArray[0].value;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2026_autoScanAnalogServicesAtvC":
            var sourceType = 18;
            var expectNum = toolbarArray[0].value;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2027_manualScanDigitServicesDtvT":
            var sourceType = 15;
            var expectNum = toolbarArray[0].value;
            var fre = toolbarArray[1].value;
            $("#total").html("");
            if ((fre >= 2) && (fre <= 69))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2028_manualScanAnalogServicesAtvT":
            var sourceType = 17;
            var expectNum = toolbarArray[0].value;
            var fre = toolbarArray[1].value;
            $("#total").html("");
            if ((fre >= 2) && (fre <= 69))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2029_manualScanDigitServicesDtvC":
            var sourceType = 16;
            var expectNum = toolbarArray[0].value;
            var fre = toolbarArray[1].value;
            $("#total").html("");
            if ((fre >= 1) && (fre <= 135))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2030_manualScanAnalogServicesAtvC":
            var sourceType = 18;
            var expectNum = toolbarArray[0].value;
            var fre = toolbarArray[1].value;
            $("#total").html("");
            if ((fre >= 1) && (fre <= 135))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2031_autoScanCompleteStateDtvT":
            var sourceType = 15;
            autoScanCompleteState(sourceType, funcName);
            break;
        case "2032_autoScanCompleteStateAtvT":
            var sourceType = 17;
            autoScanCompleteState(sourceType, funcName);
            break;
        case "2033_autoScanCompleteStateDtvC":
            var sourceType = 16;
            autoScanCompleteState(sourceType, funcName);
            break;
        case "2034_autoScanCompleteStateAtvC":
            var sourceType = 18;
            autoScanCompleteState(sourceType, funcName);
            break;
        case "2035_autoScanCancelStateDtvT":
            var sourceType = 15;
            autoScanCancelState(sourceType, funcName);
            break;
        case "2036_autoScanCancelStateDtvC":
            var sourceType = 16;
            autoScanCancelState(sourceType, funcName);
            break;
        case "2037_manualScanCompleteStateDtvT":
            var sourceType = 15;
            var fre = toolbarArray[0].value;
            if ((fre >= 2) && (fre <= 69))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2038_manualScanCompleteStateAtvT":
            var sourceType = 17;
            var fre = toolbarArray[0].value;
            if ((fre >= 2) && (fre <= 69))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2039_manualScanCompleteStateDtvC":
            var sourceType = 16;
            var fre = toolbarArray[0].value;
            if ((fre >= 1) && (fre <= 135))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2040_manualScanCompleteStateAtvC":
            var sourceType = 18;
            var fre = toolbarArray[0].value;
            if ((fre >= 1) && (fre <= 135))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2041_manualScanSetFrequencyT":
            var sourceType = 15;
            var fre = toolbarArray[0].value;
            if ((fre >= 2) && (fre <= 69))
                manualScanSetFrequency(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2042_manualScanSetFrequencyC":
            var sourceType = 16;
            var fre = toolbarArray[0].value;
            if ((fre >= 1) && (fre <= 135))
                manualScanSetFrequency(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2043_ScanIsRunning":
            ScanIsRunning(funcName);
            break;
        case "2044_ScanFinishDtvT":
            var sourceType = 15;
            ScanFinish(sourceType, funcName);
            break;
        case "2045_ScanFinishDtvC":
            var sourceType = 16;
            ScanFinish(sourceType, funcName);
            break;
    }
}
function handlePlayTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "3001_playChannelT":
            var chn = toolbarArray[0].value;
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!")
            break;
        case "3002_playChannelC":
            var chn = toolbarArray[0].value;
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC  again!")
            break;
        case "3003_getMainPlay":
            getMainPlay(funcName);
            break;
        case "3004_mainPlayChangedDvbT":
            var chn = toolbarArray[0].value;
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                mainPlayChanged(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "3005_mainPlayChangedDvbC":
            var chn = toolbarArray[0].value;
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                mainPlayChanged(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4002_getServicelistC again!");
            break;
        case "3006_getNoSignalMain":
            getNoSignalMain(funcName);
            break;
        case "3007_getSignalLevel":
            enableTunerInfo();
            setTimeout(getSignalLevel, 2000, funcName);
            break;
        case "3008_getSignalCn":
            enableTunerInfo();
            setTimeout(getSignalCn, 2000, funcName);
            break;
    }
}
function handleServiceListTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "4001_getServicelistT":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getServiceListT();
            setTimeout(checkServiceT, 2000, expectNum, funcName);
            break;
        case "4002_getServicelistC":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getServiceListC();
            setTimeout(checkServiceC, 2000, expectNum, funcName);
            break;
        case "4003_getFavListT":
            var expectNum = toolbarArray[0].value;
            getFavListAllT(expectNum, funcName);
            break;
        case "4004_getFavListC":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getFavListAllC(expectNum, funcName);
            break;
        case "4005_addToFavListT":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToFavListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4006_addToFavListC":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToFavListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4007_delFromFavListT":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                delFromFavListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4008_delFromFavListC":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                delFromFavListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4009_getSkipListT":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getSkipListAllT(expectNum, funcName);
            break;
        case "4010_getSkipListC":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getSkipListAllC(expectNum, funcName);
            break;
        case "4011_addToSkipListT":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToSkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4012_addToSkipListC":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToSkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4013_delFromSkipListT":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                delFromSkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4014_delFromSkipListC":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                delFromSkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4015_getBlockListT":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getBlockListAllT(expectNum, funcName);
            break;
        case "4016_getBlockListC":
            $("#total").html("");
            var expectNum = toolbarArray[0].value;
            getBlockListAllC(expectNum, funcName);
            break;
        case "4017_addToBlockListT":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToBlockListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4018_addToBlockListC":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToBlockListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4019_delFromBlockListT":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                delFromBlockListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4020_delFromBlockListC":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = toolbarArray[0].value;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                delFromBlockListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4021_getServicesAttrT":
            $("#details").html("");
            var chNum = toolbarArray[0].value;
            if (chNum < allChannels_T.length) {
                getServiceListT();
                setTimeout(getServicesAttrT, 2000, chNum, funcName);
            }
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            break;
        case "4022_getServicesAttrC":
            $("#details").html("");
            var chNum = toolbarArray[0].value;
            if (chNum < allChannels_C.length) {
                getServiceListC();
                setTimeout(getServicesAttrC, 2000, chNum, funcName);
            }
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC again!");
            break;
        case "4023_onChannelListUpdate":
            onChannelListUpdate(funcName);
            break
        case "4024_checkChannelListT":
            getServiceListT();
            setTimeout(getServiceListT_done_check, 2000, funcName);
            break;
        case "4025_checkChannelListC":
            getServiceListC();
            setTimeout(getServiceListC_done_check, 2000, funcName);
            break;
    }
}

function handlePCTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "5001_getPin":
            getPin(funcName);
            break;
        case "5002_setPin":
            var pinValue = toolbarArray[0].value;
            if (pinValue.length == 4)
                setPin(pinValue, funcName);
            else
                $("#details").html("Pin length is 4!");
            break;
        case "5003_getSModel":
            getSModel(funcName);
            break;
        case "5004_setSModel":
            var flag = toolbarArray[0].value;
            if ((flag == 0) || (flag == 1))
                setSModel(flag, funcName);
            else
                $("#details").html("SModel is 0 or 1");
            break;
        case "5005_reset":
            PCReset(funcName);
            break;
        case "5006_getPinRequest":
            getPinRequest(funcName);
            break;
        case "5007_getStart":
            getStartTime(funcName);
            break;
        case "5008_setStart":
            var startTime = toolbarArray[0].value;
            if ((startTime >= 0) && (startTime <= 86340)) {
                startTime = (startTime / 60) * 60;
                setStartTime(startTime, funcName);
            }
            else
                $("#details").html("startTime is 0 - 86340");
            break;
        case "5009_getEnd":
            getEndTime(funcName);
            break;
        case "5010_setEnd":
            var endTime = toolbarArray[0].value;
            if ((endTime >= 0) && (endTime <= 86340)) {
                endTime = (endTime / 60) * 60;
                setEndTime(endTime, funcName);
            }
            else
                $("#details").html("endTime is 0 - 86340");
            break;
        case "5011_getEndWeekly":
            getEndWeekly(funcName);
            break;
        case "5012_setEndWeekly":
            var temp1 = toolbarArray[0].value;
            if (temp1 > 0) {
                var weekly = "";
                var day;
                var temp2;
                do
                {
                    day = temp1 % 10;
                    temp1 = parseInt(temp1 / 10);
                    if ((day == 1) && (weekly.indexOf("Mon") == -1))
                        weekly += "Mon,";
                    else if (day == 2)
                        weekly += "Tue,";
                    else if (day == 3)
                        weekly += "Wed,";
                    else if (day == 4)
                        weekly += "Thu,";
                    else if (day == 5)
                        weekly += "Fri,";
                    else if (day == 6)
                        weekly += "Sat,";
                    else if (day == 7)
                        weekly += "Sun,";
                } while (temp1 != 0)
                setEndWeekly(weekly, funcName);
            }
            else
                $("#details").html("please input a string of  numbers ,  number is 1-7");
            break;
        case "5013_getBlockUnrated":
            getBlockUnrated(funcName);
            break;
        case "5014_setBlockUnrated":
            var ratingValue = toolbarArray[0].value;//0,1
            if ((ratingValue == 0) || (ratingValue == 1))
                setBlockUnrated(ratingValue, funcName);
            else
                $("#details").html("Please enter 0 or 1");
            break;
        case "5015_getUsTvRating":
            getUsTvRating(funcName);
            break;
        case "5016_actionSetUsTvRating":
            var ratingValue = toolbarArray[0].value;//0-17
            var flag = toolbarArray[1].value; //0,1
            if ((flag == 0) || (flag == 1)) {
                if ((ratingValue >= 0) && (ratingValue <= 17))
                    setUsTvRating(flag, ratingValue, funcName);
                else
                    $("#details").html("Please enter 0-17");
            }
            else
                $("#details").html("Please enter 0 or 1");
            break;
        case "5017_getUsMovieRating":
            getUsMovieRating(funcName);
            break;
        case "5018_setUsMovieRating":
            var ratingValue = toolbarArray[0].value;//2-8
            if ((ratingValue >= 2) && (ratingValue <= 8))
                setUsMovieRating(ratingValue, funcName);
            else
                $("#details").html("Please enter 2-8");
            break;
        case "5019_getCanEnglishRating":
            getCanEnglishRating(funcName);
            break;
        case "5020_setCanEnglishRating":
            var ratingValue = toolbarArray[0].value;//1-7
            if ((ratingValue >= 1) && (ratingValue <= 7))
                setCanEnglishRating(ratingValue, funcName);
            else
                $("#details").html("Please enter 1-7");
            break;
        case "5021_getCanFrenchRating":
            getCanFrenchRating(funcName);
            break;
        case "5022_setCanFrenchRating":
            var ratingValue = toolbarArray[0].value;//1-6
            if ((ratingValue >= 1) && (ratingValue <= 6))
                setCanFrenchRating(ratingValue, funcName);
            else
                $("#details").html("Please enter 1-6");
            break;
        case "5023_pinRequestConfirm":
            if (allChannels_T.length != 0) {
                blockChannelDtvT_1();
                setTimeout(pinRequestConfirm, 10000, funcName);
            }
            else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
            break;
        case "5024_openVchipRegionPage":
            openVchipRegionPage(funcName);
            break;
        case "5025_openVchipDimensionPage":
            openVchipDimensionPage(funcName);
            break;
        case "5026_openVchipRatingValuePage":
            openVchipRatingValuePage(funcName);
            break;
        case "5027_setLevelPage":
            var flag = toolbarArray[0].value; //0,1
            if ((flag == 0) || (flag == 1))
                setLevelPage(flag, funcName);
            else
                $("#details").html("Please enter 0 or 1");
            break;
    }
}

function handleCCTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "6001_getControl":
            getControl(funcName);
            break;
        case "6002_setControl":
            var val = toolbarArray[0].value; //0-2
            if (val <= 2)
                setControl(val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6003_getAnalogMode":
            getAnalogMode(funcName);
            break;
        case "6004_setAnalogMode":
            var val = toolbarArray[0].value; //0-8
            if (val <= 8)
                setAnalogMode(val, funcName);
            else
                $("#details").html("Please enter 0-8");
            break;
        case "6005_getDigitalMode":
            getDigitalMode(funcName);
            break;
        case "6006_setDigitalMode":
            var val = toolbarArray[0].value; //0-6
            if (val <= 6)
                setDigitalMode(val, funcName);
            else
                $("#details").html("Please enter 0-6");
            break;
        case "6007_getDigitalStyle":
            getDigitalStyle(funcName);
            break;
        case "6008_setDigitalStyle":
            var val = toolbarArray[0].value; //0-1
            if (val <= 1)
                setDigitalStyle(val, funcName);
            else
                $("#details").html("Please enter 0-1");
            break;
        case "6009_getDigitalSize":
            getDigitalSize(funcName);
            break;
        case "6010_setDigitalSize":
            var val = toolbarArray[0].value; //0-2
            if (val <= 2)
                setDigitalSize(val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6011_getDigitalFont":
            getDigitalFont(funcName);
            break;
        case "6012_setDigitalFont":
            var val = toolbarArray[0].value; //0-6
            if (val <= 6)
                setDigitalFont(val, funcName);
            else
                $("#details").html("Please enter 0-6");
            break;
        case "6013_getDigitalTextcolor":
            var colorType = 0;
            getDigitalcolor(colorType, funcName);
            break;
        case "6014_setDigitalTextcolor":
            var colorType = 0;
            var val = toolbarArray[0].value; //0-7
            if (val <= 7)
                setDigitalcolor(colorType, val, funcName);
            else
                $("#details").html("Please enter 0-7");
            break;
        case "6015_getDigitalBgcolor":
            var colorType = 1;
            getDigitalcolor(colorType, funcName);
            break;
        case "6016_setDigitalBgcolor":
            var colorType = 1;
            var val = toolbarArray[0].value; //0-7
            if (val <= 7)
                setDigitalcolor(colorType, val, funcName);
            else
                $("#details").html("Please enter 0-7");
            break;
        case "6017_getDigitalEdgecolor":
            var colorType = 2;
            getDigitalcolor(colorType, funcName);
            break;
        case "6018_setDigitalEdgecolor":
            var colorType = 2;
            var val = toolbarArray[0].value; //0-7
            if (val <= 7)
                setDigitalcolor(colorType, val, funcName);
            else
                $("#details").html("Please enter 0-7");
            break;
        case "6019_getDigitalTextopacity":
            var opaType = 0;
            getDigitalOpacity(opaType, funcName);
            break;
        case "6020_setDigitalTextopacity":
            var val = toolbarArray[0].value; //0-2
            var opaType = 0;
            if (val <= 2)
                setDigitalOpacity(opaType, val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6021_getDigitalBgopacity":
            var opaType = 1;
            getDigitalOpacity(opaType, funcName);
            break;
        case "6022_setDigitalBgopacity":
            var opaType = 1;
            var val = toolbarArray[0].value; //0-2
            if (val <= 2)
                setDigitalOpacity(opaType, val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6023_getDigitalEdgeeffect":
            getDigitalEdgeeffect(funcName);
            break;
        case "6024_setDigitalEdgeeffect":
            var val = toolbarArray[0].value; //0-5
            if (val <= 5)
                setDigitalEdgeeffect(val, funcName);
            else
                $("#details").html("Please enter 0-5");
            break;
    }
}

function handleInfoBarTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "7001_getEitMainNow":
            getEitMainNow(funcName);
            break;
        case "7002_EitMainNowChanged":
            var chn = toolbarArray[0].value;
            if ((chn > 0) && (chn < allChannels_T.length)) {
                playFirstChannelT();
                setTimeout(playFirstChannelTForEitMainNowTimeout, 3000, funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            }
            break;
        case "7003_getEitMainNext":
            getEitMainNext(funcName);
            break;
        case "7004_EitMainNextChanged":
            var chn = toolbarArray[0].value;
            if ((chn > 0) && (chn < allChannels_T.length)) {
                playFirstChannelT();
                setTimeout(playFirstChannelTForEitMainNextTimeout, 3000, funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            }
            break;
        case "7005_getTimeZone":
            getTimeZone(funcName);
            break;
        case "7006_setTimeZone":
            var zone = toolbarArray[0].value;
            if ((zone >= 0) && (zone <= 7)) {
                setTimeZone(zone, funcName);
            }
            else {
                $("#details").html("The Zone value is 0-7");
            }
            break;
        case "7007_getTimeFormat":
            getTimeFormat(funcName);
            break;
        case "7008_setTimeFormat":
            var format = toolbarArray[0].value;
            if ((format == 0) || (format == 1)) {
                setTimeFormat(format, funcName);
            }
            else {
                $("#details").html("The format value is 0 or 1");
            }
            break;
        case "7009_getCurLocalTime":
            getCurLocalTime(funcName);
            break;
        case "7010_audioTable":
            getAudioTable(funcName);
            break;
        case "7011_audioIndex":
            getAudioIndex(funcName);
            break;
        case "7012_getAudioIdent":
            getAudioIdent(funcName);
            break;
        case "7013_audioIdentChanged":
            var chn = toolbarArray[0].value;
            if ((chn > 0) && (chn < allChannels_T.length)) {
                playFirstChannelT();
                setTimeout(playFirstChannelTForAudioIdentTimeout, 3000, funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            }
            break;
        case "7014_getVideoFormat":
            getVideoFormat(funcName);
            break;
        case "7015_videoFormatChanged":
            var chn = toolbarArray[0].value;
            if ((chn > 0) && (chn < allChannels_T.length)) {
                playFirstChannelT();
                setTimeout(playFirstChannelTForFormatTimeout, 3000, funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            }
            break;
        case "7016_getFrameAspect":
            getFrameAspect(funcName);
            break;
        case "7017_frameAspectChanged":
            var chn = toolbarArray[0].value;
            if ((chn > 0) && (chn < allChannels_T.length)) {
                playFirstChannelT();
                setTimeout(playFirstChannelTForAspectTimeout, 3000, funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            }
            break;
        case "7018_getCcExist":
            getCcExist(funcName);
            break;
        case "7019_ccExistChanged":
            var chn = toolbarArray[0].value;
            if ((chn > 0) && (chn < allChannels_T.length)) {
                playFirstChannelT();
                setTimeout(playFirstChannelTForCcTimeout, 3000, funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!");
            }
            break;
    }
}   