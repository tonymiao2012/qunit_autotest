/**
 * Created by miaozixiong on 2016/12/23.
 */
var qunitTestsArray = function () {
    this.array = $("#qunit-tests").children().find("ol");
    return this.array;
}

qunitTestsArray.prototype.getElemByIndex = function (i) {
    if (i < 0 || i > this.array.length)
        return;

    return this.array[i];
};

var taskQueueArray = function () {
    this.taskQueue = $("#infoQueue").find("tr");
    return this.taskQueue;
};

taskQueueArray.prototype.getTdElemByIndex = function (i) {
    if (i < 0 || i > this.taskQueue.length)
        return;

    var elem = $(this.taskQueue[i]).find("td").eq(0);
    return elem;
};

var toolbarInputArray = function () {
    this.toolbarInput = $("#test1").children("span").children("input");
    return this.toolbarInput;
}

var readJSONFileArray = function (path) {
    var fh = new fileHandler();
    this.array = fh.fileInput(path);
    return this.array;
}

var readJSONFileArrayByIndex = function (path, index) {
    var fh = new fileHandler("config/mainConfig.json", 0);
    this.platform = fh.fileArray(path, index);
    return this.platform;
}

var inputAreaArray = function(array){
    var crntFocus = $('.onFocus');
    var hasLevel2 = crntFocus.parent().hasClass('level2');
    var renderThis = '';

    if (hasLevel2) {
        //return realtime input array.
        var lvlOneIndex = crntFocus.find("span").html()[0];
        var lvlTwoIndex = crntFocus.index();
        renderThis = array[lvlOneIndex]['testcase'][lvlTwoIndex].input;
    } else {
        //return default input array.
        renderThis = ["Repeat", "Expect Number", "Other", "Test"];
    }

    return renderThis;
}