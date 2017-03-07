function SourceModelDefines() {
}
{
    SourceModelDefines.SL2_TVAPI_VSTR_SYSTEM_INPUT_NAME = "de.loewe.sl2.vstr.source.input.name";
    //SourceModelDefines.SL2_TVAPI_VSTR_SYSTEM_INPUT_NAME = "de.loewe.sl2.vstr.tvservice.source.list";//dbtag:20160902 no match
    SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME ="de.loewe.sl2.action.source.input.rename";
    SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_SET = "tvapi.action.source.input.set";
    SourceModelDefines.SL2_TVAPI_STR_SYSTEM_INPUT_GET_CURRENT_SOURCE = "de.loewe.sl2.str.source.input.current";
    SourceModelDefines.SL2_TVAPI_I32_SOURCE_MHL_AVAILABLE = "tvapi.i32.source.input.mhl.available";
    SourceModelDefines.SL2_TVAPI_ACTION_SOURCE_MHL_KEY_PRESS = "tvapi.action.source.input.mhl.key.press";
    SourceModelDefines.SL2_TVAPI_I32_SYSTEM_INPUT_CURRENT_IN_LOCK = "tvapi.i32.system.input.current.inLock";
    SourceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_UNLOCK_INPUT = "tvapi.action.tvservice.unlock.input";
    SourceModelDefines.SL2_TVAPI_I32_SYSTEM_CURRENT_TIME_IN_LOCK = "tvapi.i32.parental.lock.current.time.inLock";
    SourceModelDefines.SL2_TVAPI_VSTR_SOURCE_DETECT_INFO = "tvapi.vstr.source.detect.info";
    SourceModelDefines.SL2_TVAPI_VI32_SOURCE_DECTION_SOURCE_STATUS = "de.loewe.sl2.str.sourcedection.sourcestatus";//dbtag:20161020
    SourceModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME_ARG_INPUT_UID = 0;
    SourceModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME_ARG_NEW_NAME = 1;
    SourceModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_SET_ARG_INPUT_UID = 0
}
function SourceModel(e) {
    SubModel.call(this, e, SourceModelDefines);
    this.registerSubObject = function () {
        this.registerStringVectorObject(SourceModelDefines.SL2_TVAPI_VSTR_SYSTEM_INPUT_NAME, "getInputName", "setInputName", "onInputNameChaged", null, null);
        this.registerStringObject(SourceModelDefines.SL2_TVAPI_STR_SYSTEM_INPUT_GET_CURRENT_SOURCE, "getCurrentSource", "setCurrentSource", "onCurrentSourceChaged", null, null);
        this.registerIntegerObject(SourceModelDefines.SL2_TVAPI_I32_SYSTEM_INPUT_CURRENT_IN_LOCK, "getInputCurrentInLock", "setInputCurrentInLock", "onInputCurrentInLockChaged", null, null);
        this.registerIntegerObject(SourceModelDefines.SL2_TVAPI_I32_SYSTEM_CURRENT_TIME_IN_LOCK, "getCurrentTimeInLock", "setCurrentTimeInLock", "onCurrentTimeInLockChaged", null, null)
        this.registerIntegerObject(SourceModelDefines.SL2_TVAPI_I32_SOURCE_MHL_AVAILABLE, "getInputMhlAvailable", "setInputMhlAvailable", "onInputMhlAvailableChaged", null, null);
        this.registerIntegerVectorObject(SourceModelDefines.SL2_TVAPI_VI32_SOURCE_DECTION_SOURCE_STATUS, "getSourceStatus", "setSourceStatus", "onSourceStatusChaged", null, null);//dbtag:20161020


        this.registerStringObject(SourceModelDefines.SL2_TVAPI_VSTR_SOURCE_DETECT_INFO, "getSRCDetectInfo", "setSRCDetectInfo", "onSRCDetectInfoChanged", null, null);
        this.registerActionObject(SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME, [{
            name: "InputRename",
            method: function (e, source, rename) {
                return e.invoke(source, rename)
            }
        }], "onInputRenameCallback");
        this.registerActionObject(SourceModelDefines.SL2_TVAPI_ACTION_SYSTEM_INPUT_SET, [{
            name: "InputSet",
            method: function (e, _) {
                return e.invoke(_)
            }
        }], "null");
        this.registerActionObject(SourceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_UNLOCK_INPUT, [{
            name: "unlockInput",
            method: function (e, _) {
                return e.invoke(_)
            }
        }], "null");
    }
}
SourceModel.prototype = new SubModel;
SourceModel.prototype.constructor = SourceModel;
{
    SubModel.registerStaticConstants(SourceModel, SourceModelDefines, [])
}
