function ServiceModeModelDefines() {
}
{
    ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALLEVELS = "de.loewe.sl2.vint32.servicemode.tunerinfo.signallevels";
    ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALQUALITIES ="de.loewe.sl2.vint32.servicemode.tunerinfo.signalqualities";
    ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_ENABLE = "de.loewe.sl2.i32.servicemode.tunerinfo.enable";
    //--dbtag: pete 2016-10-26 add to map DTV-T bandwidth --start
    ServiceModeModelDefines.SL2_TVAPI_VSTR_SERVICEMODE_TUNERINFO_PARAMS_DVBT_BANDWIDTHS= "de.loewe.sl2.vstr.servicemode.tunerinfo.params.dvbt.bandwidths"
    //ServiceModeModelDefines.SL2_TVAPI_VSTR_SERVICEMODE_TUNERINFO_PARAMS_DVBT2_BANDWIDTHS= "de.loewe.sl2.vstr.servicemode.tunerinfo.params.dvbt2.bandwidths";
    //--dbtag :pete 2016-10-26 add to map DTV-T bandwidth --end
    ServiceModeModelDefines.SL2_TVAPI_STR_SERVICEMODE_VIDEOINFO_SOURCE= "de.loewe.sl2.str.servicemode.videoinfo.source";
    ServiceModeModelDefines.SL2_TVAPI_STR_SERVICEMODE_VIDEOINFO_ENCODING_TYPE= "de.loewe.sl2.str.servicemode.videoinfo.encodingtype";
}
function ServiceModeModel(e) {
    SubModel.call(this, e, ServiceModeModelDefines);
    this.registerSubObject = function () {
        this.registerIntegerVectorObject(ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALLEVELS, "getSignalMainLevels", "setSignalMainLevels", "onSignalMainLevelsChanged", null, null);
        this.registerIntegerVectorObject(ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_SIGNALQUALITIES, "getTunersignalinfoSignalqualities", "setTunersignalinfoSignalqualities", "onTunersignalinfoSignalqualitiesChaged", null, null);
        this.registerIntegerObject(
            ServiceModeModelDefines.SL2_TVAPI_VINT32_SERVICEMODE_TUNERSIGNALINFO_ENABLE,
            "getSignalMainEnable", "setSignalMainEnable", "onSignalMainEnableChanged",
            null, null );
        //--dbtag: pete 2016-10-26 add to map DTV-T bandwidth --start
        this.registerStringVectorObject(ServiceModeModelDefines.SL2_TVAPI_VSTR_SERVICEMODE_TUNERINFO_PARAMS_DVBT_BANDWIDTHS, "getTunerinfoParamsDvbtBandwidths", "setTunerinfoParamsDvbtBandwidths", "onTunerinfoParamsDvbtBandwidthsChaged",null, null )
        //this.registerStringVectorObject(ServiceModeModelDefines.SL2_TVAPI_VSTR_SERVICEMODE_TUNERINFO_PARAMS_DVBT2_BANDWIDTHS,"getTunerinfoParamsDvbt2Bandwidths", "setTunerinfoParamsDvbt2Bandwidths", "onTunerinfoParamsDvbt2BandwidthsChaged",null, null )
        //--dbtag :pete 2016-10-26 add to map DTV-T bandwidth --end
        this.registerStringObject(ServiceModeModelDefines.SL2_TVAPI_STR_SERVICEMODE_VIDEOINFO_SOURCE, "getSourceVideoInfo", "setSourceVideoInfo", "onSourceVideoInfoChanged",null, null );
        this.registerStringObject(ServiceModeModelDefines.SL2_TVAPI_STR_SERVICEMODE_VIDEOINFO_ENCODING_TYPE, "getVideoEncodingType", "setVideoEncodingType", "onVideoEncodingTypeChanged",null, null );
    }
}
ServiceModeModel.prototype = new SubModel;
ServiceModeModel.prototype.constructor = ServiceModeModel;
{
    SubModel.registerStaticConstants(ServiceModeModel, ServiceModeModelDefines, [])
}
