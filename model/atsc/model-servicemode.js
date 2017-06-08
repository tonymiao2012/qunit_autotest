function ServiceModeModelDefines() {
}
{
    ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALLEVELS = "de.loewe.sl2.vint32.servicemode.tunersignalinfo.signallevels";
    ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALQUALITIES = "de.loewe.sl2.vint32.servicemode.tunersignalinfo.signalqualities";
    ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_ENABLE = "de.loewe.sl2.i32.servicemode.tunerinfo.enable"

    ServiceModeModelDefines.SL2_TVAPI_STR_SERVICEMODE_VIDEOINFO_SOURCE = "de.loewe.sl2.str.servicemode.videoinfo.source";
}
function ServiceModeModel(e) {
    SubModel.call(this, e, ServiceModeModelDefines);
    this.registerSubObject = function () {
        this.registerIntegerVectorObject(
            ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALLEVELS,
            "getSignalMainLevels", "setSignalMainLevels", "onSignalMainLevelsChanged",
            null, null);
        this.registerIntegerVectorObject(
            ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALQUALITIES,
            "getTunersignalinfoSignalqualities", "setTunersignalinfoSignalqualities", "onTunersignalinfoSignalqualitiesChaged",
            null, null);
        this.registerIntegerObject(
            ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_ENABLE,
            "getSignalMainEnable", "setSignalMainEnable", "onSignalMainEnableChanged",
            null, null);
        this.registerStringObject(ServiceModeModelDefines.SL2_TVAPI_STR_SERVICEMODE_VIDEOINFO_SOURCE, "getSourceVideoInfo", "setSourceVideoInfo", "onSourceVideoInfoChanged", null, null)
    }
}
ServiceModeModel.prototype = new SubModel;
ServiceModeModel.prototype.constructor = ServiceModeModel;
{
    SubModel.registerStaticConstants(ServiceModeModel, ServiceModeModelDefines, [])
}
