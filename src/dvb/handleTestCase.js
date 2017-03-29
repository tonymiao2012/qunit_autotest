function handleRepeatTestCase(repeat, expectNum, funcName) {
    switch (funcName) {
        case "1001_autoScanT":
            if(scanOthers.length==3)
            {
            	 var chan_mode=parseInt(scanOthers[0]);
            	 var scan_mode=parseInt(scanOthers[1]);
            	 var search_mode=parseInt(scanOthers[2]);
            	 if(((chan_mode>=0)&&(chan_mode<=1))&&((scan_mode>=0)&&(scan_mode<=2))&&((search_mode>=0)&&(search_mode<=1)))
            	 	 { 
            	 	 	var sourceType;
            	 	 	if(scan_mode==0)
            	 	 	   sourceType= 10;
            	 	 	else
            	 	 		 sourceType= 11;  
            	    autoSearch(repeat, expectNum, sourceType, chan_mode, scan_mode, search_mode, funcName);
            	   }
               else
                  $("#details").html(" mode has error in other bar");            	  
            }
            else
                $("#details").html("please enter a three-digit number in other bar");
            break;
        case "1002_autoScanC":
            if(scanOthers.length==3)
            {
            	 var chan_mode=parseInt(scanOthers[0]);
            	 var scan_mode=parseInt(scanOthers[1]);
            	 var search_mode=parseInt(scanOthers[2]);
            	 if(((chan_mode>=0)&&(chan_mode<=1))&&((scan_mode>=0)&&(scan_mode<=2))&&((search_mode>=0)&&(search_mode<=2)))
            	 	 { 
            	 	 	var sourceType;
            	 	 	if(scan_mode==0)
            	 	 	   sourceType= 10;
            	 	 	else
            	 	 		 sourceType= 12; 
            	    autoSearch(repeat, expectNum, sourceType, chan_mode, scan_mode, search_mode, funcName);
            	   }
               else
                  $("#details").html(" mode has error in other bar");            	  
            }
            else
                $("#details").html("please enter a three-digit number in other bar");
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
function handlePlayTestCase(otherValue, funcName) {
    switch (funcName) {
        case "3001_playChannelT":
            var chn = otherValue;
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 4001_getServicelistT again!")
            break;
        case "3002_playChannelC":
            var chn = otherValue;
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of C is error or click 4002_getServicelistC  again!")
            break;
    }
}
function handleServiceListTestCase(expectNum, otherValue, funcName) {
    switch (funcName) {
        case "4001_getServicelistT":
            $("#total").html("");
            getServiceListT();
            setTimeout(checkServiceT, 2000, expectNum, funcName);
            break;
        case "4002_getServicelistC":
            $("#total").html("");
            getServiceListC();
            setTimeout(checkServiceC, 2000, expectNum, funcName);
            break;
    }
}