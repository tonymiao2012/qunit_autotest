var workroot = 1;
var localTime = Math.round(new Date().getTime() / 1000);
var fh = new fileHandler();

function logWhenAssertOk(funcName) {
    var path = "hisenseUI/" + funcName.trim() + ".txt";
    var content = "Test failed. Time stamp: " + localTime;
    fh.appendStrToFile(path, content, workroot);
}

function logWhenAssertEqual(funcName, newVal, val) {
    var path = "hisenseUI/" + funcName.trim() + ".txt";
    var content = "Test failed. Time stamp: " + localTime + " Result value: " + newVal + ", expect value: " + val;
    fh.appendStrToFile(path, content, workroot);
}

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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}
function checkSetControl(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControl();
        assert.equal(newVal, val, "setControl");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setControl(val, funcName) {
    model.closedcaption.setControl(val);
    setTimeout(checkSetControl, 1000, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}
function checkSetAnalogMode(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControlAnalogMode();
        assert.equal(newVal, val, "setAnalogMode");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setAnalogMode(val, funcName) {
    model.closedcaption.setControlAnalogMode(val);
    setTimeout(checkSetAnalogMode, 1000, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalMode(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControlDigitalMode();
        assert.equal(newVal, val, "setDigitalMode");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalMode(val, funcName) {
    model.closedcaption.setControlDigitalMode(val);
    setTimeout(checkSetDigitalMode, 1000, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalStyle(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControlDigitalStyle();
        assert.equal(newVal, val, "setDigitalStyle");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalStyle(val, funcName) {
    model.closedcaption.setControlDigitalStyle(val);
    setTimeout(checkSetDigitalStyle, 1000, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalSize(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControlDigitalSize();
        assert.equal(newVal, val, "setDigitalSize");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalSize(val, funcName) {
    model.closedcaption.setControlDigitalSize(val);
    setTimeout(checkSetDigitalSize, 1000, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalFont(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControlDigitalFont();
        assert.equal(newVal, val, "setDigitalFont");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalFont(val, funcName) {
    model.closedcaption.setControlDigitalFont(val);
    setTimeout(checkSetDigitalFont, 1000, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalcolor(colorType, val, funcName) {
    QUnit.test(funcName, function (assert) {
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

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalcolor(colorType, val, funcName) {
    if (colorType == 0) {
        model.closedcaption.setControlDigitalTextcolor(val);
    }
    else if (colorType == 1) {
        model.closedcaption.setControlDigitalBgcolor(val);
    }
    else {
        model.closedcaption.setControlDigitalEdgecolor(val);
    }
    setTimeout(checkSetDigitalcolor, 1000, colorType, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalOpacity(opaType, val, funcName) {
    QUnit.test(funcName, function (assert) {
        if (opaType == 0) {
            var newVal = model.closedcaption.getControlDigitalTextopacity();
        }
        else {
            var newVal = model.closedcaption.getControlDigitalBgopacity();
        }
        assert.equal(newVal, val, "setDigitalOpacity");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalOpacity(opaType, val, funcName) {
    if (opaType == 0) {
        model.closedcaption.setControlDigitalTextopacity(val);
    }
    else {
        model.closedcaption.setControlDigitalBgopacity(val);
    }
    setTimeout(checkSetDigitalOpacity, 1000, opaType, val, funcName);
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

        if (result != true) {
            logWhenAssertOk(funcName);
        }
    });
}

function checkSetDigitalEdgeeffect(val, funcName) {
    QUnit.test(funcName, function (assert) {
        var newVal = model.closedcaption.getControlDigitalEdgeeffect();
        assert.equal(newVal, val, "setDigitalEdgeeffect");

        if (newVal !== val) {
            logWhenAssertEqual(funcName, newVal, val);
        }
    });
}
function setDigitalEdgeeffect(val, funcName) {
    model.closedcaption.setControlDigitalEdgeeffect(val);
    setTimeout(checkSetDigitalEdgeeffect, 1000, val, funcName);
}          