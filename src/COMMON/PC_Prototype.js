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

    return {
        getPin: getPinVal,
        setPin: setPinVal,
        getSModel: getSModelTest,
        setSModel: setSModelTest
    }
});

