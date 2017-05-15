/**
 * Created by miaozixiong on 2017/5/11.
 * Description: Create a PC prototype module here.
 * Dependency: Qunit module, model module
 */
define(function () {
    //Implementations here.
    function startGetPin() {
        var val = model.parentlock.getPin();
        $("#details").html(val);
        if (val.length != 0)
            return true;
        else
            return false;
    }

    function getPinVal(funcName) {
        QUnit.test(funcName, function (assert) {
            var result = startGetPin();
            assert.ok(result, "getPin");
        });
    }

    function startSetPin(pin) {
        model.parentlock.setPin(pin);
        if (model.parentlock.getPin() == pin) {
            return true;
        } else {
            return false;
        }
    }

    function setPinVal(pinValue, funcName) {
        QUnit.test(funcName, function (assert) {
            if (pinValue <= 9999 && pinValue >= 1000) {
                var pin;
                pin = pinValue.toString();

                var result = startSetPin(pin);
                assert.ok(result, "Test setPin");
            } else {
                assert.ok(false, "setPin");
                $("#details").html(" Pin length is not 4");
            }
        });
    }

    function startGetSModel() {
        var val = model.parentlock.getSModel();
        $("#details").html(val);

        if (val == 0 || val == 1)
            return true;
        else
            return false;
    }

    function getSModelTest(funcName) {
        QUnit.test(funcName, function (assert) {
            var result = startGetSModel();
            assert.ok(result, "Test getSModel");
        });
    }

    function setSModelTest(flag, funcName) {
        QUnit.test(funcName, function (assert) {
            var done = assert.async(1);

            function setSModelTimeout() {
                var result;
                if (model.parentlock.getSModel() == flag)
                    result = true;
                else
                    result = false;
                assert.ok(result, "setSModel");

                if (result != true) {
                    logWhenAssertOk(funcName);
                }

                done();
            };
            model.parentlock.setSModel(flag);
            setTimeout(setSModelTimeout, 1000);
        });
    }
    function getAllDaily(){

    }

    function setAllDaily(){

    }

    function startGetStartTime(){
        var val = model.parentlock.getStart();
        $("#details").html(val);
        if((val >= 0) && (val <= 86340))
            return true;
        else
            return false;
    }

    function getStartTime(funcName){
        QUnit.test(funcName, function(assert){
            var result = startGetStartTime();
            assert.ok(result, "Test getStartTime");
        });
    }

    function startSetStartTime(startTime){
        model.parentlock.setStart(startTime);
        if(model.parentlock.getStart() == startTime)
            return true;
        else
            return false;
    }

    function setStartTime(startTime, funcName){
        QUnit.test(funcName, function(assert){
            var result = startSetStartTime(startTime);
            assert.ok(result, "Test setStartTime");
        });
    }

    function startGetEndTime(){
        var val = model.parentlock.getEnd();
        $("#details").html(val);
        if(val >= 0 && val <= 86340)
            return true;
        else
            return false;
    }

    function getEndTime(funcName){
        QUnit.test(funcName, function(assert){
            var result = startGetEndTime();
            assert.ok(result, "Test getEndTime");
        });
    }

    function startSetEndTime(endTime) {
        model.parentlock.setEnd(endTime);
        if(model.parentlock.getEnd() == endTime)
            return true;
        else
            return false;
    }

    function setEndTime(endTime, funcName){
        QUnit.test(funcName, function(assert){
            var result = startSetEndTime(endTime);
            assert.ok(result, "Test setEndTime");
        });
    }

    function startGetEndWeekly(){
        var val = model.parentlock.getEndWeekly();
        $("#details").html(val);
        return true;
    }

    function getEndWeekly(funcName){
        QUnit.test(funcName, function(assert){
            var result = startGetEndWeekly();
            assert.ok(result, "Test getEndWeekly");
        });
    }

    function startSetEndWeekly(weekly){
        model.parentlock.setEndWeekly(weekly);
        if(model.parentlock.getEndWeekly() == weekly)
            return true
        else
            return false;
    }

    function setEndWeekly(weekly, funcName){
        QUnit.test(funcName, function(assert){
            var result = startSetEndWeekly(weekly);
            assert.ok(result, "Test setEndWeekly");
        });
    }

    function startGetPinRequest(expect){
        var val = model.parentlock.getPinRequest();
        $("#details").html(val[0]);
        if(val[0] == expect)
            return true;
        else
            return false;
    }

    function getPinRequest(expect, funcName){
        QUnit.test(funcName, function(assert){
            var result = startGetPinRequest(expect);
            assert.ok(result, "Test getPinRequest");
        });
    }

    return {
        getPin: getPinVal,
        setPin: setPinVal,
        getSModel: getSModelTest,
        setSModel: setSModelTest,
        getStartTime: getStartTime,
        setStartTime: setStartTime,
        getEndTime: getEndTime,
        setEndTIme: setEndTime,
        getEndWeekly: getEndWeekly,
        setEndWeekly: setEndWeekly,
        getPinRequest: getPinRequest
    }
});

