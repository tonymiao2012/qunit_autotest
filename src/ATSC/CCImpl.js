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
function startSetControl(val) {
    model.closedcaption.setControl(val);
    if (model.closedcaption.getControl() == val)
        return true;
    else
        return false;
}
function setControl(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetControl(val);
        assert.ok(result, "setControl");
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
function startSetAnalogMode(val) {
    model.closedcaption.setControlAnalogMode(val);
    if (model.closedcaption.getControlAnalogMode() == val)
        return true;
    else
        return false;
}
function setAnalogMode(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetAnalogMode(val);
        assert.ok(result, "setAnalogMode");
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
function startSetDigitalMode(val) {
    model.closedcaption.setControlDigitalMode(val);
    if (model.closedcaption.getControlDigitalMode() == val)
        return true;
    else
        return false;
}
function setDigitalMode(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalMode(val);
        assert.ok(result, "setDigitalMode");
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
function startSetDigitalStyle(val) {
    model.closedcaption.setControlDigitalStyle(val);
    if (model.closedcaption.getControlDigitalStyle() == val)
        return true;
    else
        return false;
}
function setDigitalStyle(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalStyle(val);
        assert.ok(result, "setDigitalStyle");
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

function startSetDigitalSize(val) {
    model.closedcaption.setControlDigitalSize(val);
    if (model.closedcaption.getControlDigitalSize() == val)
        return true;
    else
        return false;
}
function setDigitalSize(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalSize(val);
        assert.ok(result, "setDigitalSize");
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

function startSetDigitalFont(val) {
    model.closedcaption.setControlDigitalFont(val);
    if (model.closedcaption.getControlDigitalFont() == val)
        return true;
    else
        return false;
}
function setDigitalFont(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalFont(val);
        assert.ok(result, "setDigitalFont");
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

function startSetDigitalcolor(colorType, val) {

    if (colorType == 0) {
        model.closedcaption.setControlDigitalTextcolor(val);
        if (model.closedcaption.getControlDigitalTextcolor() == val)
            return true;
    }
    else if (colorType == 1) {
        model.closedcaption.setControlDigitalBgcolor(val);
        if (model.closedcaption.getControlDigitalBgcolor() == val)
            return true;
    }
    else {
        model.closedcaption.setControlDigitalEdgecolor(val);
        if (model.closedcaption.getControlDigitalEdgecolor() == val)
            return true;
    }
    return false;
}
function setDigitalcolor(colorType, val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalcolor(colorType, val);
        assert.ok(result, "setDigitalcolor");
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

function startSetDigitalOpacity(opaType, val) {
    if (opaType == 0) {
        model.closedcaption.setControlDigitalTextopacity(val);
        if (model.closedcaption.getControlDigitalTextopacity() == val)
            return true;
    }
    else {
        model.closedcaption.setControlDigitalBgopacity(val);
        if (model.closedcaption.getControlDigitalBgopacity() == val)
            return true;
    }
    return false;
}
function setDigitalOpacity(opaType, val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalOpacity(opaType, val);
        assert.ok(result, "setDigitalOpacity");
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

function startSetDigitalEdgeeffect(val) {
    model.closedcaption.setControlDigitalEdgeeffect(val);
    if (model.closedcaption.getControlDigitalEdgeeffect() == val)
        return true;
    else
        return false;
}
function setDigitalEdgeeffect(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetDigitalEdgeeffect(val);
        assert.ok(result, "setDigitalEdgeeffect");
    });
}          