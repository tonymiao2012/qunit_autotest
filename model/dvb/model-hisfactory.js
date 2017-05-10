function His_factoryModelDefines() {
}
{
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_STATE_OPEN = "de.loewe.sl2.i32.hisfactory.state.open";
    His_factoryModelDefines.SL2_TVAPI_HIS_FACTORY_STATE_OFF = 0;
    His_factoryModelDefines.SL2_TVAPI_HIS_FACTORY_STATE_ON = 1;
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_TO_FACTORY_OPITION = "de.loewe.sl2.i32.hisfactory.tofactory.opition";
    His_factoryModelDefines.SL2_TVAPI_TO_FACTORY_OPITION_M = 0;
    His_factoryModelDefines.SL2_TVAPI_TO_FACTORY_OPITION_U = 1;
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_AGING = "de.loewe.sl2.i32.hisfactory.aging";
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_CURRENT_SOURCE = "de.loewe.sl2.i32.hisfactory.current.source";
    His_factoryModelDefines.SL2_TVAPI_I32_FACTORY_AREA_INDEX = "de.loewe.sl2.i32.hisfactory.area.index";
    His_factoryModelDefines.SL2_TVAPI_STR_SYSTEM_PRODUC_TYPE = "de.loewe.sl2.str.hisfactory.production.type";
    His_factoryModelDefines.SL2_TVAPI_STR_SYSTEM_SERVICE_NO = "de.loewe.sl2.str.hisfactory.materiel.serial";
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_COUNTRY = "de.loewe.sl2.i32.hisfactory.country";
    His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_LANGUAGE = "de.loewe.sl2.i32.hisfactory.language";
    His_factoryModelDefines.SL2_TVAPI_STR_HIS_FACTORY_SOFTWARE_VERSION = "de.loewe.sl2.str.hisfactory.software.version";
    His_factoryModelDefines.SL2_TVAPI_STR_HIS_FACTORY_DATA_VERSION = "de.loewe.sl2.str.hisfactory.data.version";
    His_factoryModelDefines.SL2_TVAPI_STR_HIS_FACTORY_HSSO = "de.loewe.sl2.str.hisfactory.hsso";

}
function His_factoryModel(e) {
    SubModel.call(this, e, His_factoryModelDefines);

    this.registerSubObject = function () {

        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_STATE_OPEN, "getStateOpen", "setStateOpen", "onStateOpenChaged", null, null);
        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_TO_FACTORY_OPITION, "getTofactoryOpition", "setTofactoryOpition", "onTofactoryOpitionChaged", null, null);
        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_AGING, "getFactoryAging", "setFactoryAging", "onFactoryAgingChaged", null, null);
        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_CURRENT_SOURCE, "getFactoryCurrentSource", "setFactoryCurrentSource", "onFactoryCurrentSourceChaged", null, null);
        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_FACTORY_AREA_INDEX, "getNewAreaIndex", "setNewAreaIndex", "onNewAreaIndexChaged", null, null)
        this.registerStringObject(His_factoryModelDefines.SL2_TVAPI_STR_SYSTEM_PRODUC_TYPE, "getProductType", "setProductType", "onProductTypeChaged", null, null);
        this.registerStringObject(His_factoryModelDefines.SL2_TVAPI_STR_SYSTEM_SERVICE_NO, "getServiceNo", "setServiceNo", "onServiceNoChaged", null, null);
        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_COUNTRY, "getHisFactoryCountry", "setHisFactoryCountry", "onHisFactoryCountryChaged", null, null)  ;
        this.registerIntegerObject(His_factoryModelDefines.SL2_TVAPI_I32_HIS_FACTORY_LANGUAGE, "getHisFactoryLanguage", "setHisFactoryLanguage", "onHisFactoryLanguageChaged", null, null);
        this.registerStringObject(His_factoryModelDefines.SL2_TVAPI_STR_HIS_FACTORY_SOFTWARE_VERSION, "getSoftwareVersion", null, null, null, null);
        this.registerStringObject(His_factoryModelDefines.SL2_TVAPI_STR_HIS_FACTORY_DATA_VERSION, "getDataVersion", null, null, null, null);
        this.registerStringObject(His_factoryModelDefines.SL2_TVAPI_STR_HIS_FACTORY_HSSO, "getHsso", null, null, null, null);

    }
}
His_factoryModel.prototype = new SubModel;
His_factoryModel.prototype.constructor = His_factoryModel;
{
    SubModel.registerStaticConstants(His_factoryModel, His_factoryModelDefines, [])
}