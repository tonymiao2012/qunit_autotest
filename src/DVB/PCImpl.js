/**
 * Created by miaozixiong on 2017/5/10.
 * Description: Create DVB PC module here
 * Dependency: Qunit module, model module
 */
define(function () {
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

    return {
        getAge_related: getAge_related,
        setAge_related: setAge_related,
        getAge: getAge,
        setAge: setAge
    }
});