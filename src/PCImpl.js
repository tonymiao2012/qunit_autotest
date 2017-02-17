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
        assert.ok(result, "Test getPin");
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


function getMovieRating() {
    return model.parentlock.getUsMovieRating()
}
function setMovieRating(ratingValue) {
    QUnit.test("setUsMovieRating test", function (assert) {
        model.parentlock.setUsMovieRating(ratingValue);
        assert.equal(getMovieRating(), ratingValue, "check setUsMovieRating ");
    });
}
