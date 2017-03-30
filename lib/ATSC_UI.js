//--------------------------------Global---------------------------------------------
var SUBLIST_INDEX = 0;
var visiableNum = 10;
var QUNIT_TEST_ARRAY_INDEX = -1;
var QUNIT_TASK_QUEUE_INDEX = -1;
var QUNIT_TOOLBAR_INPUT_INDEX = 0;
var locate = new Array("onMenu", "onToolbar", "onResult", "onTaskQueue");
var locate_INDEX = 0;
var scrollBase = 0;
var preID = "";
var eraseQunitTests = 0;
var taskQueueHasFocus = false;
//-------------------------------------------------------------------------------------


//----------------------------------------------Initialization-------------------------------------------------------------
var guiService = guijs.createService();
var guiListener = guiService.addEventListener("key", keyproc);      //Initialize key service.
guiService.listen(1);
console.log("...................................Loading.......................................\n" +
    ".......................................................\n" +
    ".......................................................\n" +
    ".......................................................\n");
function init() {
    console.log("Start loading test cases.");
    //Iterate files in src folder according to different platform
    var temp = readJSONFileArrayByIndex("config/mainConfig.json", 0);
    var testImpls = temp.testImpl;
    var len = testImpls.length;

    for (var i = 0; i < len; i++) {
        var element = document.createElement("script");
        element.src = "src/" + temp.platform + "/" + testImpls[i];
        document.body.appendChild(element);
    }
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

function fileHandler() {
    this.fileInput = function (path) {
        if (path === undefined || path === "")    return;

        var request = new XMLHttpRequest();
        request.open("GET", "" + path, false);
        request.send(null);
        var response = JSON.parse(request.responseText);
        return response;
    };

    this.fileArray = function (path, index) {
        if (path === undefined || path === "")   return;

        var request = new XMLHttpRequest();
        request.open("GET", "" + path, false);
        request.send(null);
        var response = JSON.parse(request.responseText);
        return response[index];
    }
};

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
            case CONST.KEY.VK_STOP:
                interruptTest();
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

function changeInputArea(index) {
    if (index == null || index == undefined || index == NaN)    return;

    //Erase last values.
    $("#toolbarArea1").find("input").val("1");
    $("#toolbarArea2").find("input").val("0");
    $("#toolbarArea3").find("input").val("0");

    switch (index) {
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
    } else if (locate[locate_INDEX] === "onTaskQueue") {
        onTaskQueueMoveRight();
    }
}

function onTaskQueueMoveRight() {
    var tq = new taskQueueArray();
    tq.find("td.onFocus").eq(0).removeClass("onFocus");

    statusTable.paginate("right");

    tq.eq(1).find("td").eq(0).addClass("onFocus");
    QUNIT_TASK_QUEUE_INDEX = 1;
}

function onQunitDivMoveRight() {
    var toolbarArray = new toolbarInputArray();

    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX].blur();
    if (QUNIT_TOOLBAR_INPUT_INDEX === toolbarArray.length - 1) {
        QUNIT_TOOLBAR_INPUT_INDEX = -1;
    }
    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX + 1].focus();

    QUNIT_TOOLBAR_INPUT_INDEX++;
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

    qunitToolBar.updateInputArea();
}

function keyMoveLeft() {
    if (locate[locate_INDEX] === "onToolbar") {
        onQunitDivMoveLeft();
    } else if (locate[locate_INDEX] === "onMenu") {
        onMenuDivMoveLeft();
    } else if (locate[locate_INDEX] === "onTaskQueue") {
        onTaskQueueMoveLeft();
    }
}

function onTaskQueueMoveLeft() {
    var tq = new taskQueueArray();
    tq.find("td.onFocus").eq(0).removeClass("onFocus");

    statusTable.paginate("left");

    tq.eq(1).find("td").eq(0).addClass("onFocus");
    QUNIT_TASK_QUEUE_INDEX = 1;
}

function onQunitDivMoveLeft() {
    var toolbarArray = new toolbarInputArray();

    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX].blur();
    if (QUNIT_TOOLBAR_INPUT_INDEX === 0) {
        QUNIT_TOOLBAR_INPUT_INDEX = toolbarArray.length;
    }
    toolbarArray[QUNIT_TOOLBAR_INPUT_INDEX - 1].focus();

    QUNIT_TOOLBAR_INPUT_INDEX--;
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
    //index means each digits in on focus test case number.
    var index = $(".onFocus").find("span").html()[0];
    if (index == "2") {
        index += $(".onFocus").find("span").html()[1];
    }
    //changeInputArea(index);
    $("#input0").focus();
    locate_INDEX = 1;    //Toolbar area.
}
function clearBar() {
    $("#name").html("");
    //$("#resultView table").html("");
    //$("#resultView").html("");
    $("#details").html("");
    $("#progress").html("");
    $("#total").html("");
    $("#times").html("");
}
function onMenuKeyEnter() {
    var funcName = $("#menu").find(".onFocus span").html();
    var testType = funcName[0];
    var toolbarArray = $("#test1").children("span").children("input");
    $(":focus").blur();    //Have to go back and get focus again.

    var input0, input1, input2;
    if(toolbarArray[0] !== undefined)
        input0 = parseInt(toolbarArray[0].value) || 1;
    if(toolbarArray[1] !== undefined)
        input1 = parseInt(toolbarArray[1].value) || 0;
    if(toolbarArray[2] !== undefined)
        input2 = parseInt(toolbarArray[2].value) || 0;

    //Update 2017-03-21: Because the input area was changed, should check how many inputs in toolbar.
    if(toolbarArray.length === 1){
        input2 = input0;
    }
    if(toolbarArray.length === 2 && testType != '1'){
        input2 = input1;
        input1 = input0;
    }

    //Set Qunit test case runnable here.
    QUnit.config.interrupt = false;
    //Erase all intermediate results.
    clearBar();
    switch (testType) {
        case '1':
            scanOthers = toolbarArray[2].value || null;
            handleRepeatTestCase(input0, input1, funcName);
            break;
        case '2':
            handleScanTestCase(input1, input2, funcName);
            break;
        case '3':
            handlePlayTestCase(input2, funcName);
            break;
        case '4':
            handleServiceListTestCase(input1, input2, funcName);
            break;
        case '5':
            inputPin = toolbarArray[2].value || null;
            handlePCTestCase(input1, input2, funcName);
            break;
        case '6':
            handleCCTestCase(input1, input2, funcName);
            break;
        case '7':
            handleInfoBarTestCase(input1, input2, funcName);
            break;
    }
    //Control pagination in test status table.
    if (statusTable.$data.tableList.length % statusTable.$data.pagination == 1) {
        statusTable.paginate("right");
    }
}

function onKeyEnter() {    //Have to control flow of inputs. Classify different requirements.
    var currFocus = $(".onFocus");

    if (currFocus.parent().hasClass("level2") && locate_INDEX === 0) {
        redirectToToolbarFromMenu(currFocus);
    } else if (locate_INDEX === 1) {
        onMenuKeyEnter();
    } else if (locate_INDEX === 3) {
        filterResult();
    }
}

//Key down behavior control method
function onKeyDown() {
    if (locate[locate_INDEX] === "onToolbar") {
        redirectToResultFromToolbar();
    } else if (locate[locate_INDEX] === "onMenu") {
        onMenuKeyDown();
    } else if (locate[locate_INDEX] === "onResult") {
        onQunitTestsKeyDown();
    } else if (locate[locate_INDEX] === "onTaskQueue") {
        onTaskQueueKeyDown();
    }
}

function onMenuKeyDown() {
    var crntFocus = $("#menu").find(".onFocus");
    var array = crntFocus.parent().children("li");
    if (array === undefined)    return;

    SUBLIST_INDEX = crntFocus.index();
    if (SUBLIST_INDEX === array.length - 1) return;

    if ((SUBLIST_INDEX + 1 >= visiableNum / 2) && (SUBLIST_INDEX + 1 < array.length - visiableNum / 2)) {
        $(array[SUBLIST_INDEX + 1 - visiableNum / 2]).attr("style", "display: none");
        $(array[SUBLIST_INDEX + 1 + visiableNum / 2]).attr("style", "display: block");
    }
    $(array[SUBLIST_INDEX]).removeClass("onFocus");
    $(array[SUBLIST_INDEX + 1]).addClass("onFocus");

    SUBLIST_INDEX++;

    qunitToolBar.updateInputArea();
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
    if (QUNIT_TASK_QUEUE_INDEX === queue.length - 1) {
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
    } else if (locate[locate_INDEX] === "onResult") {
        onQunitTestsKeyUp();
    } else if (locate[locate_INDEX] === "onTaskQueue") {
        onTaskQueueKeyUp();
    }
}

function onMenuKeyUp() {
    var crntFocus = $("#menu").find(".onFocus");
    var array = crntFocus.parent().children("li");
    if (array === undefined)    return;

    SUBLIST_INDEX = crntFocus.index();
    if (SUBLIST_INDEX === 0) return;
    /*
     if (SUBLIST_INDEX + 1 > visiableNum) {
     $(array[SUBLIST_INDEX]).attr("style", "display: none");
     $(array[SUBLIST_INDEX - visiableNum]).attr("style", "display: block");
     }*/
    if (SUBLIST_INDEX + 1 >= visiableNum / 2 && SUBLIST_INDEX + 1 < array.length - visiableNum / 2) {
        $(array[SUBLIST_INDEX + 1 - visiableNum / 2]).attr("style", "display: block");
        $(array[SUBLIST_INDEX + 1 + visiableNum / 2]).attr("style", "display: none");
    }

    $(array[SUBLIST_INDEX]).removeClass("onFocus");
    $(array[SUBLIST_INDEX - 1]).addClass("onFocus");

    SUBLIST_INDEX--;

    qunitToolBar.updateInputArea();
}

function redirectToToolbarFromResult() {
    var array = new qunitTestsArray();
    $(array[QUNIT_TEST_ARRAY_INDEX]).addClass("qunit-collapsed");

    $("#input0").focus();
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
    if (QUNIT_TASK_QUEUE_INDEX === 1) {
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
    if (locate_INDEX == 3) {
        var taskQueue = new taskQueueArray();
        taskQueue.find("td.onFocus").eq(0).removeClass("onFocus");
        taskQueueHasFocus = false;

        $("#input0").focus();

        if (eraseQunitTests === 1) {
            $("#qunit-tests").find("li").css("display", "block");
            eraseQunitTests = 0;
        }
        if(preID)
            $("li#" + preID).css("display", "none");

        locate_INDEX = 1;
    } else {
        var currFocus = $(".onFocus");
        $(":focus").blur();
        currFocus.parent().css("display", "block");
        locate_INDEX = 0;
    }
}

function redirectToTaskQueue() {
    var taskQueue = new taskQueueArray();
    if (taskQueue.length <= 1)
        return;

    $(":focus").blur();
    if (!taskQueueHasFocus) {
        taskQueue.eq(1).find("td").eq(0).addClass("onFocus");   //first one in queue.
        taskQueueHasFocus = true;
        QUNIT_TASK_QUEUE_INDEX = 1;
    }
    locate_INDEX = 3;
    /*
     //2017-02-08: Trigger an Ajax post here for test.
     console.log("Trigger click");
     //$('#sendResult').trigger('click');
     var data = {
     "key1": "value1",
     "key2": "value2",
     "key3": "value3",
     "key4": "value4",
     "key5": [
     "a",
     "b",
     "c",
     "d",
     "e"
     ]
     };
     var url = 'http://172.16.188.91:3000';
     sendHTTPRequest(url, data);
     */
}

function interruptTest() {
    $("#details").html("An interruption.");
    QUnit.config.interrupt = true;
}

function filterResult() {
    var id = $("td.onFocus").parent().attr("id");
    if (eraseQunitTests === 0) {
        $("#qunit-tests").find("li").css("display", "none");
        eraseQunitTests = 1;
    }
    if (preID === "") preID = id;
    var digits = id.split("-")[3];
    var preDigits = preID.split("-")[3];

    var id1 = "li#" + id;
    var preId1 = "li#" + preID;
    var id2 = "#qunit-test-output-" + digits;
    var preId2 = "#qunit-test-output-" + preDigits;

    $(preId1).css("display", "none");
    $(preId2).css("display", "none");
    $(id1).css("display", "block");
    $(id2).css("display", "block");

    preID = id;
}
//Send button listener
$("#sendResult").on('click', function () {
    //Generate a test JSON data.
    var data = {
        "key1": "value1",
        "key2": "value2",
        "key3": "value3",
        "key4": "value4",
        "key5": [
            "a",
            "b",
            "c",
            "d",
            "e"
        ]
    };
    var url = 'http://172.16.188.91:3000';

    sendHTTPRequest(url, data);
});

function sendHTTPRequest(url, data) {
    console.log("Data: " + data);
    console.log("Url: " + url);

    $.post(url, data)
        .done(function (ret) {
            console.log("Success!!");
        });
}

//-----------------------------------------------------------------------------------------------------------------------

//----------------------------------------Analyse------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------