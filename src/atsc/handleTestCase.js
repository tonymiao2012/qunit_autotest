function handleRepeatTestCase(repeat,expectNum,funcName)
{
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
function handleScanTestCase(expectNum,otherValue,funcName)
{
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
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;                       
        case "2014_manualScanStartAtvT":
            var sourceType = 17;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break; 
         case "2015_manualScanStartDtvC":
            var sourceType = 16;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanStart(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;            
         case "2016_manualScanStartAtvC":
            var sourceType = 18;
            var fre = otherValue;
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
            $("#total").html("");
            autoScanServices(expectNum,sourceType, funcName);
            break;            
        case "2024_autoScanAnalogServicesAtvT":
            var sourceType = 17;
            $("#total").html("");
            autoScanServices(expectNum,sourceType, funcName);
            break;             
        case "2025_autoScanDigitServicesDtvC":
            var sourceType = 16;
            $("#total").html("");
            autoScanServices(expectNum,sourceType, funcName);
            break;            
        case "2026_autoScanAnalogServicesAtvC":
            var sourceType = 18;
            $("#total").html("");
            autoScanServices(expectNum,sourceType, funcName);
            break;     
        case "2027_manualScanDigitServicesDtvT":
            var sourceType = 15;
            var fre = otherValue;
            $("#total").html("");            
            if ((fre >= 2) && (fre <= 69))
                manualScanServices(expectNum,fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;            
        case "2028_manualScanAnalogServicesAtvT":
            var sourceType = 17;
            var fre = otherValue;
            $("#total").html("");            
            if ((fre >= 2) && (fre <= 69))
                manualScanServices(expectNum,fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;             
        case "2029_manualScanDigitServicesDtvC":
            var sourceType = 16;
            var fre = otherValue;
            $("#total").html("");            
            if ((fre >= 1) && (fre <= 135))
                manualScanServices(expectNum,fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;             
        case "2030_manualScanAnalogServicesAtvC":
            var sourceType = 18;
            var fre = otherValue;
            $("#total").html("");            
            if ((fre >= 1) && (fre <= 135))
                manualScanServices(expectNum,fre, sourceType, funcName);
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
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;            
        case "2038_manualScanCompleteStateAtvT":
            var sourceType = 17;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;              
        case "2039_manualScanCompleteStateDtvC":
            var sourceType = 16;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;  
        case "2040_manualScanCompleteStateAtvC":
            var sourceType = 18;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanCompleteState(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;  
        case "2041_manualScanSetFrequencyT":
            var sourceType = 15;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanSetFrequency(fre,sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;                       
        case "2042_manualScanSetFrequencyC":
            var sourceType = 16;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanSetFrequency(fre,sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break; 
        case "2043_ScanIsRunning":
            ScanIsRunning(funcName);
            break;   
        case "2044_ScanFinishDtvT":
        		var sourceType = 15;
            ScanFinish(sourceType,funcName);
            break; 
        case "2045_ScanFinishDtvC":
        		var sourceType = 16;
            ScanFinish(sourceType,funcName);
            break;                                                                                                     		
    }
}        