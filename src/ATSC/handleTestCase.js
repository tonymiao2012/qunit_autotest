function handleRepeatTestCase(toolbarArray, funcName) {
    var repeat = parseInt(toolbarArray[0].value);
    if((repeat <1)||isNaN(repeat))
    	{
    		$("#details").html(" At least 1 time!") ;
    		return;
    	} 
    var expectNum = 0;
    if (toolbarArray.length > 1) {
        expectNum = parseInt(toolbarArray[1].value);
        if(isNaN(expectNum))
        		expectNum=0;
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
            if(allChannels_T.length>0)
            		channelUpT(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT at first!")            	
            break;
        case "1004_channelDownT":
            if(allChannels_T.length>0)
            		channelDownT(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT at first!")            	
            break;
        case "1005_channelRandomT":
            if(allChannels_T.length>0)
            		channelRandomT(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT at first!")            	
            break;
        case "1006_channelUpC":
            if(allChannels_C.length>0)
            		channelUpC(repeat, funcName);
            else
                $("#details").html(" Click 4002_getServicelistC at first!")            	
            break;
        case "1007_channelDownC":
            if(allChannels_C.length>0)
            		channelDownC(repeat, funcName);
            else
                $("#details").html(" Click 4002_getServicelistC at first!")            	
            break;
        case "1008_channelRandomC":
            if(allChannels_C.length>0)
            		channelRandomC(repeat, funcName);
            else
                $("#details").html(" Click 4002_getServicelistC at first!")            	
            break;
        case "1009_channelSwitchT_C":
            if((allChannels_T.length>0)&&(allChannels_C.length>0))
            		randomSwitchChannel(repeat, funcName);
            else
                $("#details").html(" Click 4001_getServicelistT and 4002_getServicelistC at first!")            	
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
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 2) && (fre <= 69))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2014_manualScanStartAtvT":
            var sourceType = 17;
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 2) && (fre <= 69))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2015_manualScanStartDtvC":
            var sourceType = 16;
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 1) && (fre <= 135))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2016_manualScanStartAtvC":
            var sourceType = 18;
            var fre = parseInt(toolbarArray[0].value);
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
            if(isNaN(expectNum))
        			expectNum=0;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2024_autoScanAnalogServicesAtvT":
            var sourceType = 17;
            var expectNum = toolbarArray[0].value;
        		if(isNaN(expectNum))
        			expectNum=0;            
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2025_autoScanDigitServicesDtvC":
            var sourceType = 16;
            var expectNum = toolbarArray[0].value;
            if(isNaN(expectNum))
        			expectNum=0;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2026_autoScanAnalogServicesAtvC":
            var sourceType = 18;
            var expectNum = toolbarArray[0].value;
            if(isNaN(expectNum))
        			expectNum=0;
            $("#total").html("");
            autoScanServices(expectNum, sourceType, funcName);
            break;
        case "2027_manualScanDigitServicesDtvT":
            var sourceType = 15;
            var expectNum = toolbarArray[0].value;
            var fre = parseInt(toolbarArray[1].value);
            $("#total").html("");
            if ((fre >= 2) && (fre <= 69))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2028_manualScanAnalogServicesAtvT":
            var sourceType = 17;
            var expectNum = toolbarArray[0].value;
            var fre = parseInt(toolbarArray[1].value);
            $("#total").html("");
            if ((fre >= 2) && (fre <= 69))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2029_manualScanDigitServicesDtvC":
            var sourceType = 16;
            var expectNum = toolbarArray[0].value;
            var fre = parseInt(toolbarArray[1].value);
            $("#total").html("");
            if ((fre >= 1) && (fre <= 135))
                manualScanServices(expectNum, fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2030_manualScanAnalogServicesAtvC":
            var sourceType = 18;
            var expectNum = toolbarArray[0].value;
            var fre = parseInt(toolbarArray[1].value);
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
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 2) && (fre <= 69))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2038_manualScanCompleteStateAtvT":
            var sourceType = 17;
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 2) && (fre <= 69))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2039_manualScanCompleteStateDtvC":
            var sourceType = 16;
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 1) && (fre <= 135))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2040_manualScanCompleteStateAtvC":
            var sourceType = 18;
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 1) && (fre <= 135))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "2041_manualScanSetFrequencyT":
            var sourceType = 15;
            var fre = parseInt(toolbarArray[0].value);
            if ((fre >= 2) && (fre <= 69))
                manualScanSetFrequency(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "2042_manualScanSetFrequencyC":
            var sourceType = 16;
            var fre = parseInt(toolbarArray[0].value);
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
            var chn = parseInt(toolbarArray[0].value);
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!")
            break;
        case "3002_playChannelC":
            var chn = parseInt(toolbarArray[0].value);
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC  at first!")
            break;
        case "3003_getMainPlay":
            getMainPlay(funcName);
            break;
        case "3004_mainPlayChangedDvbT":
            var chn = parseInt(toolbarArray[0].value);
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                mainPlayChanged(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "3005_mainPlayChangedDvbC":
            var chn = parseInt(toolbarArray[0].value);
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                mainPlayChanged(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4002_getServicelistC at first!");
            break;
        case "3006_getNoSignalMain":
            getNoSignalMain(funcName);
            break;
        case "3007_getSignalLevel":
            getSignalLevel(funcName);
            break;
        case "3008_getSignalCn":
            getSignalCn(funcName);
            break;
    }
}
function handleServiceListTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "4001_getServicelistT":
            var expectNum = toolbarArray[0].value;
            if(isNaN(expectNum))
            		expectNum=0;
            checkServiceT(expectNum, funcName);
            break;
        case "4002_getServicelistC":
            var expectNum = toolbarArray[0].value;
            if(isNaN(expectNum))
            		expectNum=0;
            checkServiceC(expectNum, funcName);
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
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                modifyFavListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4006_addToFavListC":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                modifyFavListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
            break;
        case "4007_delFromFavListT":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                modifyFavListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4008_delFromFavListC":
            $("#details").html("");
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                modifyFavListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
            break;
        case "4009_getSkipListT":
            var expectNum = toolbarArray[0].value;
            getSkipListAllT(expectNum, funcName);
            break;
        case "4010_getSkipListC":
            var expectNum = toolbarArray[0].value;
            getSkipListAllC(expectNum, funcName);
            break;
        case "4011_addToSkipListT":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                modifySkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4012_addToSkipListC":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                modifySkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
            break;
        case "4013_delFromSkipListT":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                modifySkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4014_delFromSkipListC":
            $("#details").html("");
            var attr = 1; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                modifySkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
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
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                modifyBlockListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4018_addToBlockListC":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                modifyBlockListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
            break;
        case "4019_delFromBlockListT":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                modifyBlockListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4020_delFromBlockListC":
            $("#details").html("");
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = parseInt(toolbarArray[0].value);
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                modifyBlockListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
            break;
        case "4021_getServicesAttrT":
            var chNum = parseInt(toolbarArray[0].value);
            if (chNum < allChannels_T.length) {
                getServicesAttrT(chNum, funcName);
            }
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            break;
        case "4022_getServicesAttrC":
            var chNum = parseInt(toolbarArray[0].value);
            if (chNum < allChannels_C.length) {
                getServicesAttrC(chNum, funcName);
            }
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC at first!");
            break;
        case "4023_onChannelListUpdate":
            onChannelListUpdate(funcName);
            break
        case "4024_checkChannelListT":
            checkServiceListTByFile(funcName);
            break;
        case "4025_checkChannelListC":
						checkServiceListCByFile(funcName);
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
            var flag = parseInt(toolbarArray[0].value);
            if ((flag == 0) || (flag == 1))
                setSModel(flag, funcName);
            else
                $("#details").html("SModel is 0 or 1");
            break;
        case "5005_reset":
            PCReset(funcName);
            break;
        case "5006_getPinRequest":
            var expect = toolbarArray[0].value;
            getPinRequest(expect,funcName);
            break;
        case "5007_getStart":
            getStartTime(funcName);
            break;
        case "5008_setStart":
            var startTime = parseInt(toolbarArray[0].value);
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
            var endTime = parseInt(toolbarArray[0].value);
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
            var temp1 = parseInt(toolbarArray[0].value);
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
                    else if ((day == 2)&&(weekly.indexOf("Tue")==-1))
                        weekly += "Tue,";
                    else if ((day == 3)&&(weekly.indexOf("Wed")==-1))
                        weekly += "Wed,";
                    else if ((day == 4)&&(weekly.indexOf("Thu")==-1))
                        weekly += "Thu,";
                    else if ((day == 5)&&(weekly.indexOf("Fri")==-1))
                        weekly += "Fri,";
                    else if ((day == 6)&&(weekly.indexOf("Sat")==-1))
                        weekly += "Sat,";
                    else if ((day == 7)&&(weekly.indexOf("Sun")==-1))
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
            var ratingValue = parseInt(toolbarArray[0].value);//0,1
            if ((ratingValue == 0) || (ratingValue == 1))
                setBlockUnrated(ratingValue, funcName);
            else
                $("#details").html("Please enter 0 or 1");
            break;
        case "5015_getUsTvRating":
            getUsTvRating(funcName);
            break;
        case "5016_actionSetUsTvRating":
            var ratingValue = parseInt(toolbarArray[0].value);//0-17
            var flag = parseInt(toolbarArray[1].value); //0,1
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
            var ratingValue = parseInt(toolbarArray[0].value);//2-8
            if ((ratingValue >= 2) && (ratingValue <= 8))
                setUsMovieRating(ratingValue, funcName);
            else
                $("#details").html("Please enter 2-8");
            break;
        case "5019_getCanEnglishRating":
            getCanEnglishRating(funcName);
            break;
        case "5020_setCanEnglishRating":
            var ratingValue = parseInt(toolbarArray[0].value);//1-7
            if ((ratingValue >= 1) && (ratingValue <= 7))
                setCanEnglishRating(ratingValue, funcName);
            else
                $("#details").html("Please enter 1-7");
            break;
        case "5021_getCanFrenchRating":
            getCanFrenchRating(funcName);
            break;
        case "5022_setCanFrenchRating":
            var ratingValue = parseInt(toolbarArray[0].value);//1-6
            if ((ratingValue >= 1) && (ratingValue <= 6))
                setCanFrenchRating(ratingValue, funcName);
            else
                $("#details").html("Please enter 1-6");
            break;
        case "5023_pinRequestConfirm":
            pinRequestConfirm(funcName);
            break;
        case "5024_openVchipRegionPage":
            openVchipRegionPage(funcName);
            break;
        case "5025_openVchipDimensionPage":
            openVchipDimensionPage(funcName);
            break;
        case "5026_openVchipRatingValuePage":
            var region=parseInt(toolbarArray[0].value);
            var dimen=parseInt(toolbarArray[1].value);
            if((region<=regionPageNumber)&&(dimen<=dimensionPageNumber))
            		openVchipRatingValuePage(region,dimen,funcName);
            else
            		$("#details").html(" The  number is error ");
            break;
        case "5027_setLevelPage":
            var region=parseInt(toolbarArray[0].value);
            var dimen=parseInt(toolbarArray[1].value);
            var selectlist = parseInt(toolbarArray[2].value); 
            var flag = parseInt(toolbarArray[3].value)
            if ((selectlist<=selectlistNumber)&&(region<=regionPageNumber)&&(dimen<=dimensionPageNumber)&&((flag==0)||(flag==1)))
                setLevelPage(region,dimen,selectlist,flag,funcName);
            else
                $("#details").html("input error");
            break;          
    }
}

function handleCCTestCase(toolbarArray, funcName) {
    switch (funcName) {
        case "6001_getControl":
            getControl(funcName);
            break;
        case "6002_setControl":
            var val = parseInt(toolbarArray[0].value); //0-2
            if (val <= 2)
                setControl(val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6003_getAnalogMode":
            getAnalogMode(funcName);
            break;
        case "6004_setAnalogMode":
            var val = parseInt(toolbarArray[0].value); //0-8
            if (val <= 8)
                setAnalogMode(val, funcName);
            else
                $("#details").html("Please enter 0-8");
            break;
        case "6005_getDigitalMode":
            getDigitalMode(funcName);
            break;
        case "6006_setDigitalMode":
            var val = parseInt(toolbarArray[0].value); //0-6
            if (val <= 6)
                setDigitalMode(val, funcName);
            else
                $("#details").html("Please enter 0-6");
            break;
        case "6007_getDigitalStyle":
            getDigitalStyle(funcName);
            break;
        case "6008_setDigitalStyle":
            var val = parseInt(toolbarArray[0].value); //0-1
            if (val <= 1)
                setDigitalStyle(val, funcName);
            else
                $("#details").html("Please enter 0-1");
            break;
        case "6009_getDigitalSize":
            getDigitalSize(funcName);
            break;
        case "6010_setDigitalSize":
            var val = parseInt(toolbarArray[0].value); //0-2
            if (val <= 2)
                setDigitalSize(val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6011_getDigitalFont":
            getDigitalFont(funcName);
            break;
        case "6012_setDigitalFont":
            var val = parseInt(toolbarArray[0].value); //0-6
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
            var val = parseInt(toolbarArray[0].value); //0-7
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
            var val = parseInt(toolbarArray[0].value); //0-7
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
            var val = parseInt(toolbarArray[0].value); //0-7
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
            var val = parseInt(toolbarArray[0].value); //0-2
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
            var val = parseInt(toolbarArray[0].value); //0-2
            if (val <= 2)
                setDigitalOpacity(opaType, val, funcName);
            else
                $("#details").html("Please enter 0-2");
            break;
        case "6023_getDigitalEdgeeffect":
            getDigitalEdgeeffect(funcName);
            break;
        case "6024_setDigitalEdgeeffect":
            var val = parseInt(toolbarArray[0].value); //0-5
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
            var chn = parseInt(toolbarArray[0].value);
            if (chn < allChannels_T.length){
                checkEitMainNowChanged(funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            }
            break;
        case "7003_getEitMainNext":
            getEitMainNext(funcName);
            break;
        case "7004_EitMainNextChanged":
            var chn = parseInt(toolbarArray[0].value);
            if(chn < allChannels_T.length) {
                checkEitMainNextChanged(funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            }
            break;
        case "7005_getTimeZone":
            getTimeZone(funcName);
            break;
        case "7006_setTimeZone":
            var zone = parseInt(toolbarArray[0].value);
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
            var format = parseInt(toolbarArray[0].value);
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
            var chn = parseInt(toolbarArray[0].value);
            if(chn < allChannels_T.length) {
                checkAudioIdentChanged(funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            }
            break;
        case "7014_getVideoFormat":
            getVideoFormat(funcName);
            break;
        case "7015_videoFormatChanged":
            var chn = parseInt(toolbarArray[0].value);
            if(chn < allChannels_T.length) {
                checkVideoFormatChanged(funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            }
            break;
        case "7016_getFrameAspect":
            getFrameAspect(funcName);
            break;
        case "7017_frameAspectChanged":
            var chn = parseInt(toolbarArray[0].value);
            if(chn < allChannels_T.length){
                checkFrameAspectChanged(funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            }
            break;
        case "7018_getCcExist":
            getCcExist(funcName);
            break;
        case "7019_ccExistChanged":
            var chn = parseInt(toolbarArray[0].value);
            if(chn < allChannels_T.length) {
                checkCcExistChanged(funcName, chn);
            }
            else {
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT at first!");
            }
            break;
    }
}   
function handleAutoTestCase(toolbarArray,funcName) {
    switch (funcName) {
        case "8001_autoTest1":
           // handleScanTestCase(1, 1, "2019_autoScanProgressDtvT");
            handleServiceListTestCase(1, 1, "4001_getServicelistT") 
            handleScanTestCase(1, 1, "2002_getSourceDtvT");
            break;
    }
} 