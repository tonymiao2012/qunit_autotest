/**
 * Created by miaozixiong on 2016/12/23.
 */
var qunitTestsArray = function(){
    this.array = $("#qunit-tests").children().find("ol");
    return this.array;
}

qunitTestsArray.prototype.getElemByIndex = function(i){
    if(i < 0 || i > this.array.length)
        return;

    return this.array[i];
};

var taskQueueArray = function () {
    this.taskQueue = $("#infoQueue").find("tr");
    return this.taskQueue;
};

taskQueueArray.prototype.getTdElemByIndex = function (i) {
    if(i < 0 || i > this.taskQueue.length)
        return;

    var elem = $(this.taskQueue[i]).find("td").eq(0);
    return elem;
};

var toolbarInputArray = function () {
    this.toolbarInput = $("#test1").children("span").children("input");
    return this.toolbarInput;
}

var readMenuArray  = function(path){
    var array = fileInput(path);
    return array;
}
