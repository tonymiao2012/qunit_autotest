function startGetControl() {
    var val = model.closedcaption.getControl();
    $("#details").html(val);
    if ((val >= 0) && (val <= 2))
        return true;
    else
        return false;
}

function getControl(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetControl();
        assert.ok(result, "getControl");
    });
}

function setControl(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetControl() {
            var result;
            if (model.closedcaption.getControl() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setControl");
            done();
        };
        model.closedcaption.setControl(val);
        setTimeout(checkSetControl, 1000);
    });
}
function startGetAnalogMode() {
    var val = model.closedcaption.getControlAnalogMode();
    $("#details").html(val);
    if ((val >= 0) && (val <= 8))
        return true;
    else
        return false;
}

function getAnalogMode(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetAnalogMode();
        assert.ok(result, "getAnalogMode");
    });
}

function setAnalogMode(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetAnalogMode() {
            var result;
            if (model.closedcaption.getControlAnalogMode() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setAnalogMode");
            done();
        };
        model.closedcaption.setControlAnalogMode(val);
        setTimeout(checkSetAnalogMode, 1000);
    });
}


function startGetDigitalMode() {
    var val = model.closedcaption.getControlDigitalMode();
    $("#details").html(val);
    if ((val >= 0) && (val <= 6))
        return true;
    else
        return false;
}
function getDigitalMode(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalMode();
        assert.ok(result, "getDigitalMode");
    });
}

function setDigitalMode(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalMode() {
            var result;
            if (model.closedcaption.getControlDigitalMode() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setDigitalMode");
            done();
        };
        model.closedcaption.setControlDigitalMode(val);
        setTimeout(checkSetDigitalMode, 1000);
    });
}

function startGetDigitalStyle() {
    var val = model.closedcaption.getControlDigitalStyle();
    $("#details").html(val);
    if ((val >= 0) && (val <= 1))
        return true;
    else
        return false;
}
function getDigitalStyle(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalStyle();
        assert.ok(result, "getDigitalStyle");
    });
}

function setDigitalStyle(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalStyle() {
            var result;
            if (model.closedcaption.getControlDigitalStyle() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setDigitalStyle");
            done();
        };
        model.closedcaption.setControlDigitalStyle(val);
        setTimeout(checkSetDigitalStyle, 1000);
    });
}

function startGetDigitalSize() {
    var val = model.closedcaption.getControlDigitalSize();
    $("#details").html(val);
    if ((val >= 0) && (val <= 2))
        return true;
    else
        return false;
}
function getDigitalSize(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalSize();
        assert.ok(result, "getDigitalSize");
    });
}

function setDigitalSize(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalSize() {
            var result;
            if (model.closedcaption.getControlDigitalSize() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setDigitalSize");
            done();
        };
        model.closedcaption.setControlDigitalSize(val);
        setTimeout(checkSetDigitalSize, 1000);
    });
}

function startGetDigitalFont() {
    var val = model.closedcaption.getControlDigitalFont();
    $("#details").html(val);
    if ((val >= 0) && (val <= 6))
        return true;
    else
        return false;
}
function getDigitalFont(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalFont();
        assert.ok(result, "getDigitalFont");
    });
}

function setDigitalFont(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalFont() {
            var result;
            if (model.closedcaption.getControlDigitalFont() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setDigitalFont");
            done();
        };
        model.closedcaption.setControlDigitalFont(val);
        setTimeout(checkSetDigitalFont, 1000);
    });
}

function startGetDigitalcolor(colorType) {
    var val;
    if (colorType == 0)
        val = model.closedcaption.getControlDigitalTextcolor();
    else if (colorType == 1)
        val = model.closedcaption.getControlDigitalBgcolor();
    else
        val = model.closedcaption.getControlDigitalEdgecolor();
    $("#details").html(val);
    if ((val >= 0) && (val <= 7))
        return true;
    else
        return false;
}
function getDigitalcolor(colorType, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalcolor(colorType);
        assert.ok(result, "getDigitalcolor");
    });
}

function setDigitalcolor(colorType, val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalcolor() {
            if (colorType == 0) {
                var newVal = model.closedcaption.getControlDigitalTextcolor();
            }
            else if (colorType == 1) {
                var newVal = model.closedcaption.getControlDigitalBgcolor();
            }
            else {
                var newVal = model.closedcaption.getControlDigitalEdgecolor();
            }
            assert.equal(newVal, val, "setDigitalcolor");
            done();
        }

        if (colorType == 0) {
            model.closedcaption.setControlDigitalTextcolor(val);
        }
        else if (colorType == 1) {
            model.closedcaption.setControlDigitalBgcolor(val);
        }
        else {
            model.closedcaption.setControlDigitalEdgecolor(val);
        }
        setTimeout(checkSetDigitalcolor, 1000);
    });
}

function startGetDigitalOpacity(opaType) {
    var val;
    if (opaType == 0)
        val = model.closedcaption.getControlDigitalTextopacity();
    else
        val = model.closedcaption.getControlDigitalBgopacity();
    $("#details").html(val);
    if ((val >= 0) && (val <= 2))
        return true;
    else
        return false;
}
function getDigitalOpacity(opaType, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalOpacity(opaType);
        assert.ok(result, "getDigitalOpacity");
    });
}

function setDigitalOpacity(opaType, val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalOpacity() {
            if (opaType == 0) {
                var newVal = model.closedcaption.getControlDigitalTextopacity();
            }
            else {
                var newVal = model.closedcaption.getControlDigitalBgopacity();
            }
            assert.equal(newVal, val, "setDigitalOpacity");
            done();
        }

        if (opaType == 0) {
            model.closedcaption.setControlDigitalTextopacity(val);
        }
        else {
            model.closedcaption.setControlDigitalBgopacity(val);
        }
        setTimeout(checkSetDigitalOpacity, 1000);
    });
}
function startGetDigitalEdgeeffect() {
    var val = model.closedcaption.getControlDigitalEdgeeffect();
    $("#details").html(val);
    if ((val >= 0) && (val <= 5))
        return true;
    else
        return false;
}
function getDigitalEdgeeffect(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetDigitalEdgeeffect();
        assert.ok(result, "getDigitalEdgeeffect");
    });
}

function setDigitalEdgeeffect(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var done = assert.async(1);

        function checkSetDigitalEdgeeffect() {
            var result;
            if (model.closedcaption.getControlDigitalEdgeeffect() == val)
                result = true;
            else
                result = false;
            assert.ok(result, "setDigitalEdgeeffect");
            done();
        };
        model.closedcaption.setControlDigitalEdgeeffect(val);
        setTimeout(checkSetDigitalEdgeeffect, 1000);
    });
}          