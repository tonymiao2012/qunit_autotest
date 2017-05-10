/**
 * Created by miaozixiong on 2017/5/10.
 */
function startGetSModel(){
    var val = model.parentlock.getSModel();
    $("#details").html(val);

    if(val == 0 || val == 1)
        return true;
    else
        return false;
}

function getSModel(funcName){
    QUnit.test(funcName, function (assert) {
        var result = startGetSModel();
        assert.ok(result, "Test getSModel");
    });
}

function setSModel(){

}

function startGetPin(){
    var val = model.parentlock.getPin();
    $("#details").html(val);
    if(val.length != 0)
        return true;
    else
        return false;
}

function getPin(funcName){
    QUnit.test(funcName, function(assert){
        var result = startGetPin();
        assert.ok(result, "getPin");
    });
}

function startSetPin(pin){
    model.parentlock.setPin(pin);
    if(model.parentlock.getPin() == pin){
        return true;
    }else{
        return false;
    }
}

function setPin(pinValue, funcName){
    QUnit.test(funcName, function(assert){
        if(pinValue <= 9999 && pinValue >= 1000){
            var pin;
            pin = pinValue.toString();

            var result = startSetPin(pin);
            assert.ok(result, "Test setPin");
        }else{
            assert.ok(false, "setPin");
            $("#details").html(" Pin length is not 4");
        }
    });
}