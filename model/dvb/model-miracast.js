function MiracastModelDefines() {
}
{
    MiracastModelDefines.SL2_TVAPI_ACTION_MIRACAST_START    = "de.loewe.sl2.action.miracast.start";
    MiracastModelDefines.SL2_TVAPI_ACTION_MIRACAST_STOP     = "de.loewe.sl2.action.miracast.stop";
    MiracastModelDefines.SL2_TVAPI_I32_MIRACAST_STATUS      = "de.loewe.sl2.i32.miracast.status";
    MiracastModelDefines.SL2_TVAPI_STR_MIRACAST_PHONENAME   = "de.loewe.sl2.str.miracast.phonename";
    MiracastModelDefines.MIRACAST_LOCAL_NAME_LEN = 30
}
function MiracastModel(t) {
    SubModel.call(this, t, MiracastModelDefines);
    this.registerSubObject = function () {
        this.registerActionObject(MiracastModelDefines.SL2_TVAPI_ACTION_MIRACAST_START, [{
            name: "ActionStartApp",
            method: function (t) {
                return t.invoke()
            }
        }], "null");
        this.registerActionObject(MiracastModelDefines.SL2_TVAPI_ACTION_MIRACAST_STOP, [{
            name: "ActionStopApp",
            method: function (t, e) {
                return t.invoke(e)
            }
        }], "null");
        this.registerIntegerObject(MiracastModelDefines.SL2_TVAPI_I32_MIRACAST_STATUS, "getStatus", "setStatus", "onStatusChaged", null, null);
        this.registerStringObject(MiracastModelDefines.SL2_TVAPI_STR_MIRACAST_PHONENAME, "getPhonename", "setPhonename", "onPhonenameChaged", null, null)
    }

}
MiracastModel.prototype = new SubModel;
MiracastModel.prototype.constructor = MiracastModel;
{
    SubModel.registerStaticConstants(MiracastModel, MiracastModelDefines, [])
}