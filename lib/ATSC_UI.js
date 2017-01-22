﻿//--------------------------------Global---------------------------------------------
var SUBLIST_INDEX = 0;
var allChannels_T = [];
var allChannels_C = [];
var skipChannels_T = [];
var skipChannels_C = [];
var channelIterator = null;
var currentIndex = 0;
var visiableNum = 10;
var QUNIT_TEST_ARRAY_INDEX = -1;
var QUNIT_TASK_QUEUE_INDEX = -1;
var QUNIT_TOOLBAR_INPUT_INDEX = 0;
var locate = new Array("onMenu", "onToolbar", "onResult","onTaskQueue");
var locate_INDEX = 0;
var scrollBase = 0;
var preID = "";
var eraseQunitTests = 0;
//-------------------------------------------------------------------------------------


//----------------------------------------------Initialization-------------------------------------------------------------
var guiService = guijs.createService();
var guiListener = guiService.addEventListener("key", keyproc);      //Initialize key service.
guiService.listen(1);
console.log("...................................Loading.......................................\n" +
    ".......................................................\n" +
    ".......................................................\n" +
    ".......................................................\n");
function initModel() {
    console.log("...............................Model preload initialization finished.........................................");
    console.log("...............................Start remain load.......................................");
    createModel(remain, MDLOADTYPE.REMAIN);
}
function remain() {
    console.log("...............................Model remaining initialization finished........................................");
}
//---------------------------------------------------On Page-----------------------------------------------------
function hide(element) {
    element.style.display = "none";
}

function show(element) {
    element.style.display = "block";
}

function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}

function addClass(obj, cls) {
    if (!this.hasClass(obj, cls)) obj.className += " " + cls;
}

function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

var fileInput = function (filePath) {
    if (filePath === undefined || filePath === "")    return;
    var request = new XMLHttpRequest();
    request.open("GET", "" + filePath, false);
    request.send(null);
    var response = JSON.parse(request.responseText);
    return response;
    // console.log(JSON.parse(response));
    // fileOutput("file/test1.json",JSON.parse(response));
    // return JSON.parse(response);
}

var fileOutput = function (filePath, data) {
    if (filePath === undefined || filePath === "")    return;
    var jsonObj = JSON.stringify(data);
    console.log(jsonObj);

    var request = new XMLHttpRequest();
    request.open("POST", "" + filePath, false);
    request.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    request.send(jsonObj);
}
var fileNotFound = function () {
    console.log("Status 404 not found");
}
//---------------------------------------------------------------------------------------------------------

//-----------------------------------------------------User Input------------------------------------------
function keyproc(key) {
    var keyCode;
    var keyFrom;
    //  console.log("....................................Curent key.state is " + key.state);
    //  console.log("....................................Curent key.command is " + key.command);
    //  console.log("....................................Curent key.alphakey is " + key.alphakey);
    //  console.log("....................................Curent key.scancode is " + key.scancode);
    if (typeof (CONST.KEYCODE_MAP) != "undefined") {
        //     console.log("......................................Curent  CONST.KEYCODE_MAP length is " + CONST.KEYCODE_MAP.length);
    }
    else {
        //     console.log("......................................Curent  CONST.KEYCODE_MAP is undefined. ");
    }

    if (key.command in CONST.KEYCODE_MAP) {
        keyCode = CONST.KEYCODE_MAP[key.command];
        keyFrom = "Remote";
    }
    else if (key.alphakey in CONST.KEYBOARD_KEYCODE_MAP) {
        keyCode = CONST.KEYBOARD_KEYCODE_MAP[key.alphakey];
        keyFrom = "Keyboard";
    }
    else if (key.scancode in CONST.KEYBOARD_KEYCODE_MAP_SP) {
        keyCode = CONST.KEYBOARD_KEYCODE_MAP[key.scancode];
        keyFrom = "KeyboardSp";
    }
    //  console.log("........................................Before curent key code is " + keyCode);

    if (1 == key.state) {
        key.sendResult(true);
        console.log("..........................................Curent key code is " + keyCode);
        switch (keyCode) {
            case CONST.KEY.VK_CHANNEL_DOWN:
                onQunitTestsScrollDown();
                break;
            case CONST.KEY.VK_CHANNEL_UP:
                onQunitTestsScrollUp();
                break;
            case CONST.KEY.VK_ENTER:
                onKeyEnter();
                break;
            case CONST.KEY.VK_RIGHT:
                keyMoveRight();
                break;
            case CONST.KEY.VK_LEFT:
                keyMoveLeft();
                break;
            case CONST.KEY.VK_DOWN:
                onKeyDown();
                break;
            case CONST.KEY.VK_UP:
                onKeyUp();
                break;
            case CONST.KEY.VK_0:
                numberInputHandler(0);
                break;
            case CONST.KEY.VK_1:
                numberInputHandler(1);
                break;
            case CONST.KEY.VK_2:
                numberInputHandler(2);
                break;
            case CONST.KEY.VK_3:
                numberInputHandler(3);
                break;
            case CONST.KEY.VK_4:
                numberInputHandler(4);
                break;
            case CONST.KEY.VK_5:
                numberInputHandler(5);
                break;
            case CONST.KEY.VK_6:
                numberInputHandler(6);
                break;
            case CONST.KEY.VK_7:
                numberInputHandler(7);
                break;
            case CONST.KEY.VK_8:
                numberInputHandler(8);
                break;
            case CONST.KEY.VK_9:
                numberInputHandler(9);
                break;
            case CONST.KEY.VK_RED:
                numberDeleteHandler();
                break;
            case CONST.KEY.VK_BACKSPACE:
                onKeyBack();
                break;
            case CONST.KEY.VK_GREEN:
                redirectToTaskQueue();
                break;
            default:
                break;
        }
    }
    else {
        key.sendResult(true);
        console.log("..............................................Warning key state is " + key.state);
    }
}

function numberInputHandler(num) {
    //Get input:focus class. then input number.
    var inputFocus = $(":focus");
    var val = inputFocus.val();
    inputFocus.val(val + num);
}

function numberDeleteHandler() {
    var inputFocus = $(":focus");
    var val = inputFocus.val();
    if (val === "")    return;

    val = val.substring(0, val.length - 1);
    inputFocus.val(val);
}

function changeInputArea(index){
    if(index == null || index == undefined || index == NaN)    return;

    //Erase last values.
    $("#toolbarArea1").find("input").val("1");
    $("#toolbarArea2").find("input").val("0");
    $("#toolbarArea3").find("input").val("0");

    switch(index){
        case "1":
            $("#toolbarArea1").attr("style", "display: block");
            $("#toolbarArea2").attr("style", "display: block");
            $("#toolbarArea3").attr("style", "display: block");
            break;
        case "20":
            $("#toolbarArea1").attr("style", "display: block");
            $("#toolbarArea2").attr("style", "display: block");
            $("#toolbarArea3").attr("style", "display: none");
            break;
        case "21":
        case "3":
            $("#toolbarArea1").attr("style", "display: block");
            $("#toolbarArea2").attr("style", "display: none");
            $("#toolbarArea3").attr("style", "display: none");
            break;
        default:
            $("#toolbarArea1").attr("style", "display: none");
            $("#toolbarArea2").attr("style", "display: none");
            $("#toolbarArea3").attr("style", "display: none");
            break;
    }
}

function keyMoveRight() {
    if (locate[locate_INDEX] === "onToolbar") {
        onQunitDivMoveRight();
    } else if (locate[locate_INDEX] === "onMenu") {
        onMenuDivMoveRight();
    }
}

function onQunitDivMoveRight() {
    var toolbarArray = new toolbarInputArray();

    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX].blur();
    if(QUNIT_TOOLBAR_INPUT_INDEX === toolbarArray.length - 1){
        QUNIT_TOOLBAR_INPUT_INDEX = -1;
    }
    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX + 1].focus();

    QUNIT_TOOLBAR_INPUT_INDEX++;
    /*
    var index = 0;
    for (var i = 0; i < toolbarArray.length; i++) {
        if ($(toolbarArray[i]).is(":focus")) {
            index = i;
            return;
        }
    }

    if (index === toolbarArray.length - 1)    index = -1;

    toolbarArray[index + 1].focus();
    */
}

function onMenuDivMoveRight() {
    var crntFocus = $("#menu").find(".onFocus");
    var rightFirstElem = crntFocus.find("ul");
    if (rightFirstElem === undefined || rightFirstElem.length === 0) return;

    rightFirstElem.css("display", "block");
    rightFirstElem.addClass("subListOnDisplay");
    var array = $("#menu").find(".subListOnDisplay").children("li");
    var len = Math.min(array.length, visiableNum);
    for (var i = 0; i < len; i++) {
        $(array[i]).attr("style", "display: block");    //Show 4 or less items on screen
    }

    var length = $(array[0]).offset().top + array.length * $(array[0]).height();
    if (length > $("div#menu").height())    //lift sublist.
        rightFirstElem.offset({top: 100});

    if (crntFocus.hasClass("back-Anchor")) {    //debug
        crntFocus.removeClass("back-Anchor");
    }
    crntFocus.removeClass("onFocus");
    array.eq(0).addClass("onFocus");
    array.eq(0).parent().removeClass("subListOnDisplay");
}

function keyMoveLeft() {
    if (locate[locate_INDEX] === "onToolbar") {
        onQunitDivMoveLeft();
    } else if (locate[locate_INDEX] === "onMenu") {
        onMenuDivMoveLeft();
    }
}

function onQunitDivMoveLeft() {
    var toolbarArray = new toolbarInputArray();

    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX].blur();
    if(QUNIT_TOOLBAR_INPUT_INDEX === 0){
        QUNIT_TOOLBAR_INPUT_INDEX = toolbarArray.length;
    }
    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX - 1].focus();

    QUNIT_TOOLBAR_INPUT_INDEX--;
    /*
    var toolbarArray = $("#test1").children("span").children("input");

    var index = 0;
    for (var i = 0; i < toolbarArray.length; i++) {
        if ($(toolbarArray[i]).is(":focus")){
            index = i;
            return;
        }
    }

    if (index === 0)    index = toolbarArray.length;
    toolbarArray[index - 1].focus();
    */
}

function onMenuDivMoveLeft() {
    //Find position and upper level menu
    var crntFocus = $("#menu").find(".onFocus");
    var leftElem = crntFocus.parent().parent();
    if (leftElem[0] == $("#menu")[0]) return;

    leftElem.addClass("back-Anchor");
    //Remove focus and hide block
    crntFocus.parent().css("display", "none");
    crntFocus.removeClass("onFocus");
    $("#menu").find(".back-Anchor").addClass("onFocus");
    $("#menu").find(".onFocus").removeClass("back-Anchor");
    $("#menu ul li ul li").attr("style", "display: none");    //Hide all lvl2 sublist items.
}

function redirectToToolbarFromMenu(currFocus) {
    currFocus.parent().css("display", "none");

    var index = $(".onFocus").find("span").html()[0];
    if(index == "2"){
        index += $(".onFocus").find("span").html()[1];
    }
    //changeInputArea(index);

    $("#input1").focus();
    locate_INDEX = 1;    //Toolbar area.
}

function onMenuKeyEnter() {
    var funcName = $("#menu").find(".onFocus span").html();
    var toolbarArray = $("#test1").children("span").children("input");
    $(":focus").blur();    //Have to go back and get focus again.

    var repeat = parseInt(toolbarArray[0].value) || 1;
    var expectNum = parseInt(toolbarArray[1].value) || 0;
    var otherValue = parseInt(toolbarArray[2].value) || 0;

    switch (funcName) {
        /*--------------------------SCAN-------------------------*/
        case "1101_AutoScanT":
            var sourceType = 15;
            autoSearch(repeat, expectNum, sourceType, funcName);
            break;
        case "1102_AutoScanC":
            var sourceType = 16;
            autoSearch(repeat, expectNum, sourceType, funcName);
            break;

        case "1001_setSourceDtvT":
            var sourceType = 15;
            setSource(sourceType, funcName);
            break;
        case "1002_setSourceAtvT":
            var sourceType = 17;
            setSource(sourceType, funcName);
            break;
        case "1003_setSourceDtvC":
            var sourceType = 16;
            setSource(sourceType, funcName);
            break;
        case "1004_setSourceAtvC":
            var sourceType = 18;
            setSource(sourceType, funcName);
            break;

        case "1005_getSourceDtvT":
            var sourceType = 15;
            model.channelSearch.setSource(sourceType);
            getSource(funcName);
            break;
        
        case "1006_getSourceAtvT":
            var sourceType = 17;
            model.channelSearch.setSource(sourceType);
            getSource(funcName);
            break;
            
        case "1007_getSourceDtvC":
            var sourceType = 16;
            model.channelSearch.setSource(sourceType);
            getSource(funcName);
            break;
        
        case "1008_getSourceAtvC":
            var sourceType = 18;
            model.channelSearch.setSource(sourceType);
            getSource(funcName);
            break;
              
        case "1009_autoScanStartDtvT":
            var sourceType = 15;
            ScanOnce(sourceType, funcName);
            break;
        case "1010_autoScanStartAtvT":
            var sourceType = 17;
            ScanOnce(sourceType, funcName);
            break;
        case "1011_autoScanStartDtvC":
            var sourceType = 16;
            ScanOnce(sourceType, funcName);
            break;
        case "1012_autoScanStartAtvC":
            var sourceType = 18;
            ScanOnce(sourceType, funcName);
            break;

        case "1013_manualScanStartDtvT":
            var sourceType = 15;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualSearch(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "1014_manualScanStartAtvT":
            var sourceType = 17;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualSearch(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "1015_manualScanStartDtvC":
            var sourceType = 16;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualSearch(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;
        case "1016_manualScanStartAtvC":
            var sourceType = 18;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualSearch(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;

        case "1017_autoScanStopDtvT":
            var sourceType = 15;
            ScanStop(sourceType, funcName);
            break;
        case "1018_autoScanStopAtvT":
            var sourceType = 17;
            ScanStop(sourceType, funcName);
            break;
        case "1019_autoScanStopDtvC":
            var sourceType = 16;
            ScanStop(sourceType, funcName);
            break;
        case "1020_autoScanStopAtvC":
            var sourceType = 18;
            ScanStop(sourceType, funcName);
            break;

        case "1021_autoScanProgressDtvT":
            var sourceType = 15;
            ScanProgress(sourceType, funcName);
            break;

        case "1022_autoScanProgressAtvT":
            var sourceType = 17;
            ScanProgress(sourceType, funcName);
            break;

        case "1023_autoScanProgressDtvC":
            var sourceType = 16;
            ScanProgress(sourceType, funcName);
            break;
        case "1024_autoScanProgressAtvC":
            var sourceType = 18;
            ScanProgress(sourceType, funcName);
            break;

        case "1025_autoScanDigitServicesDtvT":
            var sourceType = 15;
            autoGetServices(sourceType, funcName);
            break;

        case "1026_autoScanAnalogServicesAtvT":
            var sourceType = 17;
            autoGetServices(sourceType, funcName);
            break;

        case "1027_autoScanDigitServicesDtvC":
            var sourceType = 16;
            autoGetServices(sourceType, funcName);
            break;

        case "1028_autoScanAnalogServicesAtvC":
            var sourceType = 18;
            autoGetServices(sourceType, funcName);
            break;

        case "1029_manualScanDigitServicesDtvT":
            var sourceType = 15;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualGetServices(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1030_manualScanAnalogServicesAtvT":
            var sourceType = 17;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualGetServices(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1031_manualScanDigitServicesDtvC":
            var sourceType = 16;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualGetServices(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1032_manualScanAnalogServicesAtvC":
            var sourceType = 18;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualGetServices(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1033_autoScanStateCompleteDtvT":
            var sourceType = 15;
            scanComplete(sourceType, funcName);
            break;

        case "1034_autoScanStateCompleteAtvT":
            var sourceType = 17;
            scanComplete(sourceType, funcName);
            break;

        case "1035_autoScanStateCompleteDtvC":
            var sourceType = 16;
            scanComplete(sourceType, funcName);
            break;

        case "1036_autoScanStateCompleteAtvC":
            var sourceType = 18;
            scanComplete(sourceType, funcName);
            break;

        case "1037_autoScanStateCancelDtvT":
            var sourceType = 15;
            autoScanCancel(sourceType, funcName);
            break;

        case "1038_autoScanStateCancelAtvT":
            var sourceType = 17;
            autoScanCancel(sourceType, funcName);
            break;

        case "1039_autoScanStateCancelDtvC":
            var sourceType = 16;
            autoScanCancel(sourceType, funcName);
            break;

        case "1040_autoScanStateCancelAtvC":
            var sourceType = 18;
            autoScanCancel(sourceType, funcName);
            break;

        case "1041_manualScanStateCompleteDtvT":
            var sourceType = 15;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanComplete(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1042_manualScanStateCompleteAtvT":
            var sourceType = 17;
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanComplete(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1043_manualScanStateCompleteDtvC":
            var sourceType = 16;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanComplete(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1044_manualScanStateCompleteAtvC":
            var sourceType = 18;
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanComplete(fre, sourceType, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;

        case "1045_manualScanSetFrequencyT":
            var fre = otherValue;
            if ((fre >= 2) && (fre <= 69))
                manualScanSetFre(fre, funcName);
            else
                $("#details").html("Please enter 2-69");
            break;
        case "1046_manualScanSetFrequencyC":
            var fre = otherValue;
            if ((fre >= 1) && (fre <= 135))
                manualScanSetFre(fre, funcName);
            else
                $("#details").html("Please enter 1-135");
            break;

        case "1047_ScanIsRunning":
            isRunning(funcName);
            break;
        /*--------------------------PLAY-------------------------*/
        case "2101_upT":
            console.log("...............................to getServiceListT for AutoUpT. ");
            getServiceListT();
            setTimeout(getServiceListT_done_up, 2000, repeat, funcName);
            break;
        case "2102_downT":
            console.log("...............................to getServiceListT for AutoDownT.");
            curItemName = funcName;
            getServiceListT();
            setTimeout(getServiceListT_done_down, 2000, repeat, funcName);
            break;
        case "2103_randomT":
            console.log("...............................to getServiceListT for RandomT.");
            getServiceListT();
            setTimeout(getServiceListT_done_random, 2000, repeat, funcName);
            break;
        case "2104_upC":
            console.log("...............................to getServiceListC for AutoUpC. ");
            getServiceListC();
            setTimeout(getServiceListC_done_up, 2000, repeat, funcName);
            break;
        case "2105_downC":
            console.log("...............................to getServiceListC for AutoDownC.");
            getServiceListC();
            setTimeout(getServiceListC_done_down, 2000, repeat, funcName);
            break;
        case "2106_randomC":
            console.log("...............................to getServiceListC for RandomC.");
            getServiceListC();
            setTimeout(getServiceListC_done_random, 2000, repeat, funcName);
            break;
        case "2107_randomT_C":
            console.log("...............................to getServiceListT for Random_T_C.");
            getServiceListT();
            setTimeout(getServiceListT_done_getServiceListC, 2000, repeat, funcName);
            break;
        case "2001_playChannelT":
            var chn = otherValue;
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!")
            break;
        case "2002_playChannelC":
            var chn = otherValue;
            var sourceType = 0; //0 for C
            if (chn < allChannels_C.length)
                playInputedChannel(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of C is error or click 3002_getServicelistC again!")
            break;
        case "2003_getMainPlay":
            getMainPlay(funcName);
            break;
        case "2004_mainPlayChangedDvbT":
            var chn = otherValue;
            var sourceType = 1; //1 for T
            if (chn < allChannels_T.length)
                mainPlayChanged(sourceType, chn, funcName);
            else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
            break;
        case "2005_mainPlayChangedDvbC":
        			var chn = otherValue;
        			var sourceType =0; //0 for C
              if(chn<allChannels_C.length)
        				mainPlayChanged(sourceType,chn,funcName);	
        			else
        				$("#details").html(" The channel number of T is error or click 3001_getServicelistC again!");		
        			break; 	        
        case "2006_getNoSignalMain":
            getNoSignalMain(funcName);
            break;
        /*-------------------------------SERVICELIST-------------------------------*/

        case "3001_getServicelistT":
            console.log("...............................Going to get service list T. ");
            $("#total").html("");
            getServiceListT();
            setTimeout(checkServiceT, 2000, funcName);
            break;
        case "3002_getServicelistC":
            console.log("...............................Going to get service list C. ");
              $("#total").html("");
              getServiceListC();
              setTimeout(checkServiceC,2000,funcName);
              break;
        case "3003_getFavListT":
              console.log("...............................Going to get Favlist T. ");
              $("#total").html("");
              getFavListAllT(funcName);
              break;	     
        case "3004_getFavListC":
              console.log("...............................Going to get Favlist C. ");
              $("#total").html("");
              getFavListAllC(funcName);
              break;    
              
       case "3005_addToFavListT":
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToSkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
            
            break;
            
        case "3006_addToFavListC":
            var attr = 0; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToSkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 3001_getServicelistT again!");
        
            break;
        
        case "3007_delFromFavListT":
          console.log("...............................Going to get Favlist T. ");
              $("#total").html("");
              var attr =0; // 0:fav; 1:skip; 2:block
              var chNum = otherValue;
              var flag = 0; //0:unset; 1:set
              if(chNum<allChannels_T.length)
              addToSkipListT(attr,flag,chNum,funcName);
              getServiceListT();
              setTimeout(checkServiceT,2000,funcName);
              break;	
            
        case "3008_delFromFavListC":
              console.log("...............................Going to get Favlist C. ");
              $("#total").html("");
              var attr =0; // 0:fav; 1:skip; 2:block
              var chNum = otherValue;
              var flag = 0; //0:unset; 1:set
              if(chNum<allChannels_C.length)
              addToSkipListC(attr,flag,chNum,funcName);
              getServiceListC();
              setTimeout(checkServiceC,2000,funcName);
              break; 
                       
        case "3009_getSkipListT":
              console.log("...............................Going to get Skiplist T. ");
              $("#details").html("");
              getSkipListAllT(funcName);
              break; 
                
        case "3010_getSkipListC":
              console.log("...............................Going to get Skiplist C. ");
              $("#details").html("");
              getSkipListAllC(funcName);
              break;     
                       
        case "3011_addToSkipListT":
              console.log("...............................Going to add Skiplist T. ");
              $("#details").html("");
              var attr = 1; // 0:fav; 1:skip; 2:block
              var chNum = otherValue;
              var flag = 1; //0:unset; 1:set
              if (chNum < allChannels_T.length)
                addToSkipListT(attr, flag, chNum, funcName);
              else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
              //getSkipListAllT(funcName);
              break;
            
        case "3012_addToSkipListC":
              console.log("...............................Going to add Skiplist C. ");
              $("#details").html("");
              var attr = 1; // 0:fav; 1:skip; 2:block
              var chNum = otherValue;
              var flag = 1; //0:unset; 1:set
              if (chNum < allChannels_C.length)
                addToSkipListC(attr, flag, chNum, funcName);
              else
                $("#details").html(" The channel number of T is error or click 3002_getServicelistC again!");
              //getSkipListAllC(funcName);
              break;
        case "3013_delFromSkipListT":
              console.log("...............................Going to del from Skiplist T. ");
              $("#details").html("");
              var attr = 1; // 0:fav; 1:skip; 2:block
              var chNum = otherValue;
              var flag = 0; //0:unset; 1:set
              if (chNum < allChannels_T.length)
                delFromSkipListT(attr, flag, chNum, funcName);
              else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
              //getSkipListAllT(funcName);
              break;
          
        case "3014_delFromSkipListC":
              console.log("...............................Going to del from Skiplist C. ");
              $("#details").html("");
              var attr = 1; // 0:fav; 1:skip; 2:block
              var chNum = otherValue;
              var flag = 0; //0:unset; 1:set
              if (chNum < allChannels_C.length)
                delFromSkipListC(attr, flag, chNum, funcName);
              else
                $("#details").html(" The channel number of T is error or click 3002_getServicelistC again!");
              //getSkipListAllC(funcName);
              break;
         case "3015_getBlockListT":
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToSkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
            break;    
        
         case "3016_getBlockListC":
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToSkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 3001_getServicelistT again!");
            break;  
                
        case "3017_addToBlockListT":
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToSkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 3001_getServicelistT again!");
            break;  
        
        case "3018_addToBlockListC":
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 1; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToSkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 3001_getServicelistT again!");
            break; 
         
         case "3019_delFromBlockListT":
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_T.length)
                addToSkipListT(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of T is error or click 3001_getServicelistT again!");
            break;  
        
        case "3020_delFromBlockListC":
            var attr = 2; // 0:fav; 1:skip; 2:block
            var chNum = otherValue;
            var flag = 0; //0:unset; 1:set
            if (chNum < allChannels_C.length)
                addToSkipListC(attr, flag, chNum, funcName);
            else
                $("#details").html(" The channel number of C is error or click 3001_getServicelistT again!");
            break; 
           
        case "3021_getServicesAttrT":
            $("#details").html("");
            var chNum = otherValue;
            getServiceListT();
            setTimeout(getServicesT_attrT_timeout, 2000, chNum, funcName);
            break;
            
        case "3022_getServicesAttrC":
            $("#details").html("");
            var chNum = otherValue;
            getServiceListC();
            setTimeout(getServicesC_attrC_timeout, 2000, chNum, funcName);
            break;
        case "3025_checkChannelListT":
            getServiceListT();
            setTimeout(getServiceListT_done_check, 2000);
            break;

        case "3026_checkChannelListC":
            getServiceListC();
            setTimeout(getServiceListC_done_check, 2000);
            break;

        /*-------------------------------PC-------------------------------*/
        case "4002_setPin":
            var pinValue = otherValue.toString();
            if (pinValue.length == 4)
                setPin(pinValue);
            else
                $("#details").html("Pin length is 4!");
            break;

        case "4020_setUsMovieRating":
            var ratingValue = otherValue;//2-8
            if ((ratingValue >= 2) && (ratingValue <= 8))
                setMovieRating(ratingValue);
            else
                $("#details").html("Please enter 2-8");
            break;
        /*-------------------------------CC-------------------------------*/

        case "5002_setControl":
            var val = otherValue; //0-2
            if (val <= 2)
                setStateMode(val);
            else
                $("#details").html("Please enter 0-2");
            break;

        case "5004_setAnalogMode":
            var val = otherValue; //0-8
            if (val <= 8)
                setAnalogMode(val);
            else
                $("#details").html("Please enter 0-8");
            break;

        case "5010_setDigitalSize":
            var val = otherValue; //0-2
            if (val <= 2)
                setFontSize(val);
            else
                $("#details").html("Please enter 0-2");
            break;

        /*-------------------------------TVSERVICE-------------------------------*/

        case "6001_getEitMainNow":
            getEitMainNow();
            break;
        case "6003_getEitMainNext":
            getEitMainNext();
            break;
        /*-------------------------------TIME-------------------------------*/

        case "7006_getCurTime":
            getCurrentTime();
            break;

        /*-------------------------------AUDIO-------------------------------*/
        case "8003_audioIndex":
            getAudioIndex();
            break;

        /*-------------------------------VIDEO-------------------------------*/
        case "9001_getVideoFormat":
            getVideoFormat();
            break;

        default:
            break;
    }
}

function onKeyEnter() {    //Have to control flow of inputs. Classify different requirements.
    var currFocus = $(".onFocus");

    if (currFocus.parent().hasClass("level2") && locate_INDEX === 0) {
        redirectToToolbarFromMenu(currFocus);
    } else if(locate_INDEX === 1){
        onMenuKeyEnter();
    }else if(locate_INDEX === 3){
        filterResult();
    }
}

//Key down behavior control method
function onKeyDown() {
    if (locate[locate_INDEX] === "onToolbar") {
        redirectToResultFromToolbar();
    } else if (locate[locate_INDEX] === "onMenu") {
        onMenuKeyDown();
    } else if(locate[locate_INDEX] === "onResult"){
        onQunitTestsKeyDown();
    }else if(locate[locate_INDEX] === "onTaskQueue"){
        onTaskQueueKeyDown();
    }
}

function onMenuKeyDown() {
    var crntFocus = $("#menu").find(".onFocus");
    var array = crntFocus.parent().children("li");
    if (array === undefined)    return;

    //Could manage 8 visiable elements here.

    SUBLIST_INDEX = crntFocus.index();
    if (SUBLIST_INDEX === array.length - 1) return;
    $(array[SUBLIST_INDEX]).removeClass("onFocus");
    $(array[SUBLIST_INDEX + 1]).addClass("onFocus");

    if (SUBLIST_INDEX + 1 >= visiableNum) {
        $(array[SUBLIST_INDEX + 1]).attr("style", "display: block");
        $(array[SUBLIST_INDEX + 1 - visiableNum]).attr("style", "display: none");
    }

    SUBLIST_INDEX++;
}

function redirectToResultFromToolbar() {
    var array = new qunitTestsArray();
    var focus = $(":focus");

    focus.blur();
    QUNIT_TEST_ARRAY_INDEX = 0;
    if (!$(array[QUNIT_TEST_ARRAY_INDEX]).hasClass("qunit-collapsed") && QUNIT_TEST_ARRAY_INDEX + 1 < array.length) {
        //Open second elem.
        $(array[QUNIT_TEST_ARRAY_INDEX + 1]).removeClass("qunit-collapsed");
        $(array[QUNIT_TEST_ARRAY_INDEX]).addClass("qunit-collapsed");
        QUNIT_TEST_ARRAY_INDEX++;
    } else {
        $(array[QUNIT_TEST_ARRAY_INDEX]).removeClass("qunit-collapsed");
    }
    locate_INDEX = 2;
}

function onQunitTestsKeyDown() {
    var array = new qunitTestsArray();
    //Use global index to control the behavior.
    $(array[QUNIT_TEST_ARRAY_INDEX]).addClass("qunit-collapsed");
    if (QUNIT_TEST_ARRAY_INDEX === array.length - 1)
        QUNIT_TEST_ARRAY_INDEX = -1;
    $(array[QUNIT_TEST_ARRAY_INDEX + 1]).removeClass("qunit-collapsed");

    QUNIT_TEST_ARRAY_INDEX++;
}

function onTaskQueueKeyDown() {
    var queue = new taskQueueArray();
    queue.eq(QUNIT_TASK_QUEUE_INDEX).find("td").eq(0).removeClass("onFocus");
    if(QUNIT_TASK_QUEUE_INDEX === queue.length - 1){
        QUNIT_TASK_QUEUE_INDEX = 0;
    }
    queue.eq(QUNIT_TASK_QUEUE_INDEX + 1).find("td").eq(0).addClass("onFocus");

    QUNIT_TASK_QUEUE_INDEX++;
}

function onKeyUp() {
    if (locate[locate_INDEX] === "onResult" && QUNIT_TEST_ARRAY_INDEX === 0) {
        redirectToToolbarFromResult();
    } else if (locate[locate_INDEX] === "onMenu") {
        onMenuKeyUp();
    } else if(locate[locate_INDEX] === "onResult"){
        onQunitTestsKeyUp();
    }else if(locate[locate_INDEX] === "onTaskQueue"){
        onTaskQueueKeyUp();
    }
}

function onMenuKeyUp() {
    console.log("..........................................In onKeyUp");
    var crntFocus = $("#menu").find(".onFocus");
    var array = crntFocus.parent().children("li");
    if (array === undefined)    return;

    SUBLIST_INDEX = crntFocus.index();
    if (SUBLIST_INDEX === 0) return;
    $(array[SUBLIST_INDEX]).removeClass("onFocus");
    $(array[SUBLIST_INDEX - 1]).addClass("onFocus");

    if (SUBLIST_INDEX + 1 > visiableNum) {
        $(array[SUBLIST_INDEX]).attr("style", "display: none");
        $(array[SUBLIST_INDEX - visiableNum]).attr("style", "display: block");
    }

    SUBLIST_INDEX--;
}

function redirectToToolbarFromResult() {
    var array = new qunitTestsArray();
    $(array[QUNIT_TEST_ARRAY_INDEX]).addClass("qunit-collapsed");

    $("#input1").focus();
    QUNIT_TEST_ARRAY_INDEX = -1;
    locate_INDEX = 1;
}

function onQunitTestsKeyUp() {
    var array = new qunitTestsArray();
    $(array[QUNIT_TEST_ARRAY_INDEX]).addClass("qunit-collapsed");
    $(array[QUNIT_TEST_ARRAY_INDEX - 1]).removeClass("qunit-collapsed");

    QUNIT_TEST_ARRAY_INDEX--;
}

function onTaskQueueKeyUp() {
    var queue = new taskQueueArray();

    queue.eq(QUNIT_TASK_QUEUE_INDEX).find("td").eq(0).removeClass("onFocus");
    if(QUNIT_TASK_QUEUE_INDEX === 1){
        QUNIT_TASK_QUEUE_INDEX = 2;
    }
    queue.eq(QUNIT_TASK_QUEUE_INDEX - 1).find("td").eq(0).addClass("onFocus");

    QUNIT_TASK_QUEUE_INDEX--;
}

function onQunitTestsScrollDown() {
    var scrollHeight = $("div#qunit").prop("scrollHeight");
    scrollBase += 100;
    if (scrollBase + $("div#menu").height() > scrollHeight) {
        scrollBase -= 100;
        if (scrollBase + $("div#menu").height() === scrollHeight)
            return;
        var remain = scrollHeight - (scrollBase + $("div#menu").height());
        scrollBase += remain;    //To bottom of the page.
    }
    $("div#qunit").scrollTop(scrollBase);
}

function onQunitTestsScrollUp() {
    scrollBase -= 100;
    if (scrollBase < 0)
        scrollBase = 0;
    $("div#qunit").scrollTop(scrollBase);
}

function onKeyBack() {
    if(locate_INDEX == 3){
        var taskQueue = new taskQueueArray();
        taskQueue.find("td.onFocus").eq(0).removeClass("onFocus");
        $("#input1").focus();

        if(eraseQunitTests === 1){
            $("#qunit-tests").find("li").css("display", "block");
            eraseQunitTests = 0;
        }
        $("li#" + preID).css("display","none");

        locate_INDEX = 1;
    }else {
        var currFocus = $(".onFocus");
        $(":focus").blur();
        currFocus.parent().css("display", "block");
        locate_INDEX = 0;
    }
}

function redirectToTaskQueue() {
    var taskQueue = new taskQueueArray();
    if(taskQueue.length <= 1)
        return;

    $(":focus").blur();
    taskQueue.eq(1).find("td").eq(0).addClass("onFocus");
    QUNIT_TASK_QUEUE_INDEX = 1;
    locate_INDEX = 3;
}

function filterResult() {
    var id = $("td.onFocus").parent().attr("id");
    if(eraseQunitTests === 0){
        $("#qunit-tests").find("li").css("display","none");
        eraseQunitTests = 1;
    }
    if(preID === "") preID = id;
    var digits = id.split("-")[3];
    var preDigits = preID.split("-")[3];

    var id1 = "li#" + id;
    var preId1 = "li#" + preID;
    var id2 = "#qunit-test-output-" + digits;
    var preId2 = "#qunit-test-output-" + preDigits;

    $(preId1).css("display","none");
    $(preId2).css("display", "none");
    $(id1).css("display","block");
    $(id2).css("display","block");

    preID = id;
}
//-----------------------------------------------------------------------------------------------------------------------

//----------------------------------------Analyse------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------