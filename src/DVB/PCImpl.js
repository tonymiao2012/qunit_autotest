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