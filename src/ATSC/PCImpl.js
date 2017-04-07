var inputPin = null;
function startGetPin() {
    var val = model.parentlock.getPin();
    $("#details").html(val);
    if (val.length != 0)
        return true;
    else
        return false;
}
function getPin(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetPin();
        assert.ok(result, "getPin");
    });
}
function startSetPin(pinValue) {
    model.parentlock.setPin(pinValue);
    if (model.parentlock.getPin() == pinValue)
        return true;
    else
        return false;
}
function setPin(pinValue, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetPin(pinValue);
        assert.ok(result, "Test setPin");
    });
}
function startGetSModel() {
    var val = model.parentlock.getSModel();
    $("#details").html(val);
    if ((val == 0) || (val == 1))
        return true;
    else
        return false;
}
function getSModel(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetSModel();
        assert.ok(result, "Test getSModel");
    });
}
function startSetSModel(flag) {
    model.parentlock.setSModel(flag);
    if (model.parentlock.getSModel() == flag)
        return true;
    else
        return false;
}
function setSModel(flag, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetSModel(flag);
        assert.ok(result, "Test setSModel");
    });
}
function startPCReset() {
    var val = model.parentlock.Reset();
    return true;
}
function PCReset(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startPCReset();
        assert.ok(result, "Test PCReset");
    });
}
function startGetPinRequest() {
    var val = model.parentlock.getPinRequest();
    $("#details").html(val[0]);
    if (val.length != 0)
        return true;
    else
        return false;
}
function getPinRequest(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetPinRequest();
        assert.ok(result, "Test getPinRequest");
    });
}


function startGetStartTime() {
    var val = model.parentlock.getStart();
    $("#details").html(val);
    if ((val >= 0) && (val <= 86340))
        return true;
    else
        return false;
}
function getStartTime(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetStartTime();
        assert.ok(result, "Test getStartTime");
    });
}
function startSetStartTime(startTime) {
    model.parentlock.setStart(startTime);
    if (model.parentlock.getStart() == startTime)
        return true;
    else
        return false;
}
function setStartTime(startTime, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetStartTime(startTime);
        assert.ok(result, "Test setStartTime");
    });
}
function startGetEndTime() {
    var val = model.parentlock.getEnd();
    $("#details").html(val);
    if ((val >= 0) && (val <= 86340))
        return true;
    else
        return false;
}
function getEndTime(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetEndTime();
        assert.ok(result, "Test getEndTime");
    });
}
function startSetEndTime(endTime) {
    model.parentlock.setEnd(endTime);
    if (model.parentlock.getEnd() == endTime)
        return true;
    else
        return false;
}
function setEndTime(endTime, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetEndTime(endTime);
        assert.ok(result, "Test setEndTime");
    });
}
function startGetEndWeekly() {
    var val = model.parentlock.getEndWeekly();
    $("#details").html(val);
    return true;
}
function getEndWeekly(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetEndWeekly();
        assert.ok(result, "Test getEndWeekly");
    });
}
function startSetEndWeekly(weekly) {
    model.parentlock.setEndWeekly(weekly);
    if (model.parentlock.getEndWeekly() == weekly)
        return true;
    else
        return false;
}
function setEndWeekly(weekly, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetEndWeekly(weekly);
        assert.ok(result, "Test setEndWeekly");
    });
}

function startGetBlockUnrated() {
    var val = model.parentlock.getBlockUnrated();
    $("#details").html(val);
    if ((val == 0) && (val == 1))
        return true;
    else
        return false;
}
function getBlockUnrated(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetBlockUnrated();
        assert.ok(result, "Test getBlockUnrated");
    });
}
function startSetBlockUnrated(ratingValue) {
    model.parentlock.setBlockUnrated(ratingValue);
    if (model.parentlock.getBlockUnrated() == ratingValue)
        return true;
    else
        return false;
}
function setBlockUnrated(ratingValue, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetBlockUnrated(ratingValue);
        assert.ok(result, "Test setBlockUnrated");
    });
}
function startGetUsTvRating() {
    var val = model.parentlock.getUsTvRating();
    $("#details").html(val);
    if (val.length == 7)
        return true;
    else
        return false;
}
function getUsTvRating(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetUsTvRating();
        assert.ok(result, "Test getUsTvRating");
    });
}
function checkSetUsTvRating(flag, ratingValue, val) {
    var result;
    var RATING_MASK_ALL = 0x01;
    var RATING_MASK_D = 0x02;
    var RATING_MASK_L = 0x04;
    var RATING_MASK_S = 0x08;
    var RATING_MASK_V = 0x10;
    var RATING_MASK_FV = 0x20;

    switch (ratingValue) {
        case 0:
            result = (flag == 1) ? (val[1] & RATING_MASK_ALL) != 0 : (val[1] & RATING_MASK_ALL) == 0;
            break;
        case 1:
            result = (flag == 1) ? (val[2] & RATING_MASK_ALL) != 0 : (val[2] & RATING_MASK_ALL) == 0;
            break;
        case 2:
            result = (flag == 1) ? (val[2] & RATING_MASK_FV) != 0 : (val[2] & RATING_MASK_FV) == 0;
            break;
        case 3:
            result = (flag == 1) ? (val[3] & RATING_MASK_ALL) != 0 : (val[3] & RATING_MASK_ALL) == 0;
            break;
        case 4:
            result = (flag == 1) ? (val[4] & RATING_MASK_ALL) != 0 : (val[4] & RATING_MASK_ALL) == 0;
            break;
        case 5:
            result = (flag == 1) ? (val[4] & RATING_MASK_D) != 0 : (val[4] & RATING_MASK_D) == 0;
            break;
        case 6:
            result = (flag == 1) ? (val[4] & RATING_MASK_L) != 0 : (val[4] & RATING_MASK_L) == 0;
            break;
        case 7:
            result = (flag == 1) ? (val[4] & RATING_MASK_S) != 0 : (val[4] & RATING_MASK_S) == 0;
            break;
        case 8:
            result = (flag == 1) ? (val[4] & RATING_MASK_V) != 0 : (val[4] & RATING_MASK_V) == 0;
            break;
        case 9:
            result = (flag == 1) ? (val[5] & RATING_MASK_ALL) != 0 : (val[5] & RATING_MASK_ALL) == 0;
            break;
        case 10:
            result = (flag == 1) ? (val[5] & RATING_MASK_D) != 0 : (val[5] & RATING_MASK_D) == 0;
            break;
        case 11:
            result = (flag == 1) ? (val[5] & RATING_MASK_L) != 0 : (val[5] & RATING_MASK_L) == 0;
            break;
        case 12:
            result = (flag == 1) ? (val[5] & RATING_MASK_S) != 0 : (val[5] & RATING_MASK_S) == 0;
            break;
        case 13:
            result = (flag == 1) ? (val[5] & RATING_MASK_V) != 0 : (val[5] & RATING_MASK_V) == 0;
            break;
        case 14:
            result = (flag == 1) ? (val[6] & RATING_MASK_ALL) != 0 : (val[6] & RATING_MASK_ALL) == 0;
            break;
        case 15:
            result = (flag == 1) ? (val[6] & RATING_MASK_L) != 0 : (val[6] & RATING_MASK_L) == 0;
            break;
        case 16:
            result = (flag == 1) ? (val[6] & RATING_MASK_S) != 0 : (val[6] & RATING_MASK_S) == 0;
            break;
        case 17:
            result = (flag == 1) ? (val[6] & RATING_MASK_V) != 0 : (val[6] & RATING_MASK_V) == 0;
            break;
    }
    return result;
}
function startSetUsTvRating(flag, ratingValue) {
    model.parentlock.ActionSetUsTvRating(ratingValue, flag);
    var val = model.parentlock.getUsTvRating();
    return checkSetUsTvRating(flag, ratingValue, val);
}
function setUsTvRating(flag, ratingValue, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetUsTvRating(flag, ratingValue);
        assert.ok(result, "Test setUsTvRating");
    });
}


function startGetUsMovieRating() {
    var val = model.parentlock.getUsMovieRating();
    $("#details").html(val);
    if ((val >= 2) && (val <= 8))
        return true;
    else
        return false;
}
function getUsMovieRating(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetUsMovieRating();
        assert.ok(result, "Test getUsMovieRating");
    });
}
function startSetUsMovieRating(ratingValue) {
    model.parentlock.setUsMovieRating(ratingValue);
    if (model.parentlock.getUsMovieRating() == ratingValue)
        return true;
    else
        return false;
}
function setUsMovieRating(ratingValue, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetUsMovieRating(ratingValue);
        assert.ok(result, "Test setUsMovieRating");
    });
}

function startGetCanEnglishRating() {
    var val = model.parentlock.getCanEnglishRating();
    $("#details").html(val);
    if ((val >= 1) && (val <= 7))
        return true;
    else
        return false;
}
function getCanEnglishRating(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetCanEnglishRating();
        assert.ok(result, "Test getCanEnglishRating");
    });
}
function startSetCanEnglishRating(ratingValue) {
    model.parentlock.setCanEnglishRating(ratingValue);
    if (model.parentlock.getCanEnglishRating() == ratingValue)
        return true;
    else
        return false;
}
function setCanEnglishRating(ratingValue, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetCanEnglishRating(ratingValue);
        assert.ok(result, "Test setCanEnglishRating");
    });
}

function startGetCanFrenchRating() {
    var val = model.parentlock.getCanFrenchRating();
    $("#details").html(val);
    if ((val >= 1) && (val <= 6))
        return true;
    else
        return false;
}
function getCanFrenchRating(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startGetCanFrenchRating();
        assert.ok(result, "Test getCanFrenchRating");
    });
}
function startSetCanFrenchRating(ratingValue) {
    model.parentlock.setCanFrenchRating(ratingValue);
    if (model.parentlock.getCanFrenchRating() == ratingValue)
        return true;
    else
        return false;
}
function setCanFrenchRating(ratingValue, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetCanFrenchRating(ratingValue);
        assert.ok(result, "Test setCanFrenchRating");
    });
}
function blockChannelDtvT_1() {
    model.parentlock.setStart(0);
    model.parentlock.setEnd(86340);
    model.parentlock.setEndWeekly("Mon,Tue,Wed,Thu,Fri,Sat,Sun,");
    modifyAttr(2, 1, allChannels_T[0].uuid);
    model.tvservice.playChannel("0", allChannels_T[0].uuid);
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
        model.parentlock.PinRequestConfirm(1, val);
        setTimeout(checkPinRequestConfirm, 1000);
    });
}


function startOpenVchipRegionPage() {
    var val = model.parentlock.openVchipRegionPage();
    if (val.datalist.length > 0) {
        for (var i in val.datalist)
            $("#details").html(i + ";");
        return true;
    }
    else
        return false;
}
function openVchipRegionPage(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startOpenVchipRegionPage();
        assert.ok(result, "Test openVchipRegionPage");
    });
}
function startOpenVchipDimensionPage() {
    var val = model.parentlock.openVchipDimensionPage(0);
    if (val.datalist.length > 0) {
        for (var i in val.datalist)
            $("#details").html(i + ";");
        return true;
    }
    else
        return false;
}
function openVchipDimensionPage(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startOpenVchipDimensionPage();
        assert.ok(result, "Test openVchipDimensionPage");
    });
}
function startOpenVchipRatingValuePage() {
    var val = model.parentlock.openVchipRatingValuePage(0, 0);
    if (val.datalist.length > 0) {
        for (var i = 0; i < val.datalist.length; i++)
            $("#details").html(val.datalist[i] + "-" + val.selectlist[i] + ";");
        return true;
    }
    else
        return false;
}
function openVchipRatingValuePage(funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startOpenVchipRatingValuePage();
        assert.ok(result, "Test openVchipRatingValuePage");
    });
}
function startSetLevelPage(flag) {
    var val = model.parentlock.setLevelPage(0, 0, 0, flag);
    if (val[0] == flag)
        return true;
    else
        return false;
}
function setLevelPage(flag, funcName) {
    QUnit.test(funcName, function (assert) {
        var result = startSetLevelPage(flag);
        assert.ok(result, "Test setLevelPage");
    });
}