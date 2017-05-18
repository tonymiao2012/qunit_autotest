/**
 * Created by miaozixiong on 2017/5/10.
 * Description: Create DVB PC module here
 * Dependency: Qunit module, model module
 */
define(function () {
    var inputSource = ["tv", "avs", "hdmi1", "hdmi2", "hdmi3", "component"];

    function getAge_related(funcName) {
        QUnit.test(funcName, function (assert) {
            var ret = model.parentlock.getAge_related();
            $("#details").html(ret);
            var result = "";

            if (ret == 0 || ret == 1)
                result = true;
            else
                result = false;

            assert.ok(result, "Test getAge_related");
        });
    }

    function setAge_related(ageBlock_trigger, funcName) {
        QUnit.test(funcName, function (assert) {
            var done = assert.async(1);

            function setAgeRelatedTimeout() {
                var result;
                if (model.parentlock.getAge_related() == ageBlock_trigger)
                    result = true;
                else
                    result = false;

                assert.ok(result, "Test setAge_related");
                done();
            }

            model.parentlock.setAge_related(ageBlock_trigger);
            setTimeout(setAgeRelatedTimeout, 1000);
        });
    }

    function getAge(funcName) {
        QUnit.test(funcName, function (assert) {
            var age = model.parentlock.getAge();
            $("#details").html(age);
            var result;

            if (age <= 18 && age >= 3)
                result = true;
            else
                result = false;

            assert.ok(result, "Test getAge");
        });
    }

    function setAge(age, funcName) {
        QUnit.test(funcName, function (assert) {
            var done = assert.async(1);

            function setAgeTimeout() {
                var result;
                if (model.parentlock.getAge() == age)
                    result = true;
                else
                    result = false;
                assert.ok(result, "Test setAge");
                done();
            }

            model.parentlock.setAge(age);
            setTimeout(setAgeTimeout, 1000);
        });
    }

    function getAllDaily(funcName) {
        QUnit.test(funcName, function (assert) {
            var ret = model.parentlock.getAllDaily();
            $("#details").html(ret);
            var result;
            if (ret == 0 || ret == 1)
                result = true;
            else
                result = false;

            assert.ok(result, "Test getAllDaily");
        });
    }

    function setAllDaily(val, funcName) {
        QUnit.test(funcName, function (assert) {
            var done = assert.async(1);

            function setAllDailyTimeout() {
                var result;
                if (model.parentlock.getAllDaily() == val)
                    result = true;
                else
                    result = false;
                assert.ok(result, "Test setAllDaily");
                done();
            }

            model.parentlock.setAllDaily(val);
            setTimeout(setAllDailyTimeout, 1000);
        });
    }

    function getAll(funcName){
        QUnit.test(funcName, function(assert){
            var ret = model.parentlock.getAll();
            $("#details").html(ret);
            var result;
            if(ret == 0 || ret == 1)
                result = true;
            else
                result = false;

            assert.ok(result, "Test getAll");
        });
    }

    function setAll(val, funcName){
        QUnit.test(funcName, function(assert){
            var done = assert.async(1);

            function setAllTimeout(){
                var result;
                if(model.parentlock.getAll() == val)
                    result = true;
                else
                    result = false;
                assert.ok(result, "Test setAll");
                done();
            }

            model.parentlock.setAll(val);
            setTimeout(setAllTimeout, 1000);
        });
    }

    function pinRequestConfirm(funcName) {
        QUnit.test(funcName, function (assert) {
            var done = assert.async(1);

            function checkPinRequestConfirm() {
                var val = model.parentlock.getPinRequest();
                assert.equal(val[0], 0, "pinRequestConfirm");
                done();
            };

            var val = model.parentlock.getPin();
            model.parentlock.PinRequestConfirm(val);
            setTimeout(checkPinRequestConfirm, 1000);
        });
    }

    function getPinMemorised(funcName){
        QUnit.test(funcName, function(assert){
            var ret = model.parentlock.getPinMemorised();
            $("#details").html(ret);
            var result;
            if(ret == 0 || ret == 1)
                result = true;
            else
                result = false;

            assert.ok(result, "Test getPinMemorised");
        });
    }

    function setPinMemorised(val, funcName){
        QUnit.test(funcName, function(assert){
            var done = assert.async(1);

            function setPinMemorisedTimeout(){
                var result;
                if(model.parentlock.getPinMemorised() == val)
                    result = true;
                else
                    result = false;

                assert.ok(result, "Test setPinMemorised");
                done();
            }

            model.parentlock.setPinMemorised(val);
            setTimeout(setPinMemorisedTimeout, 1000);
        });
    }

    function getInputSource(funcName){
        QUnit.test(funcName, function(assert){
            var source = model.parentlock.getInputSource();
            $("#details").html(source);
            var temp = inputSource.indexOf(source);
            var result;

            if(temp == -1)
                result = false;
            else
                result = true;

            assert.ok(result, "Test getInputSource");
        });
    }

    function setInputSource(sourceInt, funcName){
        QUnit.test(funcName, function(assert){
            var done = assert.async(1);
            var sourceStr;
            if(sourceInt >= 0 && sourceInt < inputSource.length){
                sourceStr = inputSource[sourceInt];
            }

            function setInputSourceTimeout(){
                var result;
                if(model.parentlock.getInputSource() == sourceStr)
                    result = true;
                else
                    result = false;

                assert.ok(result, "Test setInputSource");
                done();
            }

            model.parentlock.setInputSource(sourceStr);
            setTimeout(setInputSourceTimeout, 1000);
        });
    }

    function getFallbackPin(funcName){
        QUnit.test(funcName, function(assert){
            var fallBackPin = model.parentlock.getFallbackPin();
            $("#details").html(fallBackPin);
            var result;

            if(fallBackPin.length == 4 && typeof(fallBackPin) === "string")
                result = true;
            else
                result = false;

            assert.ok(result, "Test getFallbackPin");
        });
    }

    function setFallbackPin(fallbackPin, funcName){
        QUnit.test(funcName, function(assert){
            var done = assert.async(1);
            function setFallbackPinTimeout(){
                var result;
                if(model.parentlock.setFallbackPin() == fallbackPin)
                    result = true;
                else
                    result = false;

                assert.ok(result, "Test setFallbackPin");
                done();
            }

            model.parentlock.setFallbackPin(fallbackPin);
            setTimeout(setFallbackPinTimeout, 1000);
        });
    }

    return {
        getAge_related: getAge_related,
        setAge_related: setAge_related,
        getAge: getAge,
        setAge: setAge,
        getAllDaily: getAllDaily,
        setAllDaily: setAllDaily,
        getAll: getAll,
        setAll: setAll,
        pinRequestConfirm: pinRequestConfirm,
        getPinMemorised: getPinMemorised,
        setPinMemorised: setPinMemorised,
        getInputSource: getInputSource,
        setInputSource: setInputSource,
        getFallbackPin: getFallbackPin,
        setFallbackPin: setFallbackPin
    }
});