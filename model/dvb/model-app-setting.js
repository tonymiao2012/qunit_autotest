function App_settingModelDefines() {
}
{
    App_settingModelDefines.SL2_TVAPI_STR_APP_SETTING_ESN = "de.loewe.sl2.str.app.setting.esn";
    App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_NETFLIX_DEACTIVE = "de.loewe.sl2.action.app.setting.netflix.deactive";
    App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_VUDU_DEACTIVE = "de.loewe.sl2.action.app.setting.vudu.deactive"
}
function App_settingModel(e) {
    SubModel.call(this, e, App_settingModelDefines);
    this.registerSubObject = function () {
        this.registerStringObject(App_settingModelDefines.SL2_TVAPI_STR_APP_SETTING_ESN, "getEsn", "setEsn", "onEsnChaged", null, null);
        this.registerActionObject(App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_NETFLIX_DEACTIVE, [{
            name: "NetflixDeactive",
            method: function (e) {
                return e.invoke()
            }
        }], "null");
        this.registerActionObject(App_settingModelDefines.SL2_TVAPI_ACTION_APP_SETTING_VUDU_DEACTIVE, [{
            name: "VuduDeactive",
            method: function (e) {
                return e.invoke()
            }
        }], "null")
    }
}
App_settingModel.prototype = new SubModel;
App_settingModel.prototype.constructor = App_settingModel;
{
    SubModel.registerStaticConstants(App_settingModel, App_settingModelDefines, [])
}