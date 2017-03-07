function MiracastModelDefines() {
}
{
    MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_APP = "tvapi.action.miracast.start.app";
    MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_STOP_APP = "tvapi.action.miracast.stop.app";
    MiracastModelDefines.SL2_TVAPI_STR_MIRACAST_STATUS = "tvapi.str.miracast.status";
    MiracastModelDefines.MIRACAST_LOCAL_NAME_LEN = 30
}
function MiracastModel(t) {
    SubModel.call(this, t, MiracastModelDefines);
    this.registerSubObject = function () {
        this.registerActionObject(MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_START_APP, [{
            name: "ActionStartApp",
            method: function (t) {
                return t.invoke()
            }
        }], "null");
        this.registerActionObject(MiracastModelDefines.SL2_TVAPI_MIRACAST_ACTION_STOP_APP, [{
            name: "ActionStopApp",
            method: function (t, e) {
                return t.invoke(e)
            }
        }], "null");
        this.registerStringObject(MiracastModelDefines.SL2_TVAPI_STR_MIRACAST_STATUS, "getStatus", "setStatus", "onStatusChaged", null, null)
    }

}
MiracastModel.prototype = new SubModel;
MiracastModel.prototype.constructor = MiracastModel;
{
    SubModel.registerStaticConstants(MiracastModel, MiracastModelDefines, [])
}