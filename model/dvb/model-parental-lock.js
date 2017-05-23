function Parental_lockModelDefines() {
}
{
    Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_PIN = "de.loewe.sl2.str.parental.lock.pin"; //dbtag:20161020 -  set/unset pin to system
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_SWITCH_MODE = "de.loewe.sl2.i32.parental.lock.switch.mode";
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_RESET = "de.loewe.sl2.action.parental.lock.reset"; //dbtag:20161101 - solve the restore function of parental lock
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_CHECK_REQUEST = "de.loewe.sl2.action.parental.lock.pin.check";
    Parental_lockModelDefines.SL2_TVAPI_VSTR_PARENTAL_LOCK_PIN_REQUEST = "de.loewe.sl2.vstr.parental.lock.pin.request"; //dbtag:20161027 - fix the bug of rebooting playchannel when channel block setted
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_REQUEST_CONFIRM = "de.loewe.sl2.action.parental.lock.pin.request.confirm"; //dbtag:20161025 - unlock all the blocks in parental settings temporary

//    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_PIN_MEMORISED = "tvapi.i32.parental.lock.pin.memorised";
    Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_FALLBACK_PIN = "de.loewe.sl2.str.parental.lock.fallback.pin";
    //dbtag:20161020 - solve the block time issue of parent lock start
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_ALL_DAILY = "de.loewe.sl2.i32.parental.lock.all.daily";
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_START = "de.loewe.sl2.i32.parental.lock.daily.start";
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_END = "de.loewe.sl2.i32.parental.lock.daily.end";
    //dbtag:20161020 - solve the block time issue of parent lock end
    Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_WEEKLY = "de.loewe.sl2.str.parental.lock.weekly"; //dbtag:20161103 - intergtate the weekly settings of parental lcok

    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_BLOCK_UNRATED = "de.loewe.sl2.i32.parental.lock.block.unrated";
    Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_INPUT_SOURCE = "de.loewe.sl2.str.parental.lock.inputSource"; //dbtag:20161028 - solve the input block
    Parental_lockModelDefines.SL2_TVAPI_VI32_PARENTAL_LOCK_US_TV = "de.loewe.sl2.vi32.parental.lock.us.tv";
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_US_TV = "de.loewe.sl2.action.parental.lock.us.tv";
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_US_MOVIE_RATING = "de.loewe.sl2.i32.parental.lock.us.movie.rating";
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_CA_ENGLISH_RATING = "de.loewe.sl2.i32.parental.lock.ca.english.rating";
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_CA_FRENCH_RATING = "de.loewe.sl2.i32.parental.lock.ca.french.rating";
    Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_OPEN_VCHIP = "de.loewe.sl2.str.parental.lock.open.vchip";

    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_AGE_RELATED_ALWAYS_EXIST = "de.loewe.sl2.i32.parental.lock.age-related.always.exist";
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_AGE = "de.loewe.sl2.i32.parental.lock.age"; //dbtag:20161021 - solve the program block in parental lock issues
    Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_AGE_RELATED= "de.loewe.sl2.i32.parental.lock.age-related";  //dbtag:20161021 - active/inactive program lock
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_LENGTH = 4;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_MODE_OFF = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_MODE_ON = 1;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_MODE_WEEKLY = 2;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_TIME_MIN = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_TIME_MAX = 86340;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME_ARG_INPUT_UID = 0;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_SYSTEM_INPUT_RENAME_ARG_LOCK_FLAG = 1;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_US_TV_RATING_ARG_ROW_INDEX = 0;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_US_TV_RATING_ARG_COLUME_INDEX = 1;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_US_TV_RATING_ARG_LOCK_FLAG = 2;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_OPENVCHIP_PAGE_TYPE = 0;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_OPENVCHIP_PAGE_INDEX1 = 1;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_OPENVCHIP_PAGE_INDEX2 = 2;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_OPENVCHIP_PAGE_INDEX3 = 3;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_LEVEL_PAGE_SELECT_INDEX1 = 1;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_LEVEL_PAGE_SELECT_INDEX2 = 2;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_SET_LEVEL_PAGE_INDEX1 = 1;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_SET_LEVEL_PAGE_INDEX2 = 2;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_SET_LEVEL_PAGE_INDEX3 = 3;
    Parental_lockModelDefines.ENUM_SL2_TVAPI_ACTION_PARENTAL_LOCK_SET_LEVEL_PAGE_LOCKFLAG = 4;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_AGE_RELATED_NO = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_AGE_RELATED_YES = 1;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_AGE_RELATED_ALWAYS = 2;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_AGE_MIN = 3;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_AGE_MAX = 18;
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_CHECK_REQUEST_PARAM_RESTRICTION_MESSAGE = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_INDEX_ID = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_INDEX_OPTIONS = 1;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_INDEX_HINT = 2;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_SIZE = 3;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_PIN_REQUEST_ID_NONE = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_PIN_REQUEST_ID_STANDARD = 1;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_PIN_REQUEST_ID_CIPLUS = 2;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_OPTION_UNDEF = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_OPTION_CONFIRM = 1;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_OPTION_CANCEL = 2;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_OPTION_ESCAPE = 4;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_LOCK_PIN_REQUEST_OPTION_PROG_CHANGE = 8;
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_REQUEST_PARAM_STATUS = 0;
    Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_REQUEST_PARAM_PIN = 1;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_PIN_REQUEST_STATUS_CANCELLED = 0;
    Parental_lockModelDefines.SL2_TVAPI_PARENTAL_PIN_REQUEST_STATUS_CONFIRMED = 1
}
function Parental_lockModel(_) {
    SubModel.call(this, _, Parental_lockModelDefines);
    this.registerSubObject = function () {
        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_SWITCH_MODE, "getSModel", "setSModel", "onSModelChaged", null, null);


//        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_PIN_MEMORISED, "getPinMemorised", "setPinMemorised", "onPinMemorisedChaged", null, null);
        this.registerStringObject(Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_PIN, "getPin", "setPin", "onPinChaged", null, null);
        this.registerStringObject(Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_FALLBACK_PIN, "getFallbackPin", null, null, null, null);
        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_ALL_DAILY, "getAllDaily", "setAllDaily", "onAllDailyChaged", null, null );
        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_START, "getStart", "setStart", "onStartChaged", null, null);
        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_END, "getEnd", "setEnd", "onEndChaged", null, null);
        this.registerStringObject(Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_WEEKLY, "getEndWeekly", "setEndWeekly", "onEndWeeklyChaged", null, null); //dbtag:20161107 - intergrate with the weekly interface
        this.registerStringObject(Parental_lockModelDefines.SL2_TVAPI_STR_PARENTAL_LOCK_INPUT_SOURCE, "getInputSourceLock", "setInputSourceLock", "onInputSourceLockChaged", null, null); //dbtag:20161028 - solve the input block issues
        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_AGE, "getAge", "setAge", "onAgeChaged", null, null );
        this.registerIntegerObject(Parental_lockModelDefines.SL2_TVAPI_I32_PARENTAL_LOCK_AGE_RELATED, "getAge_related", "setAge_related", "onAge_relatedChaged", null, null );
        this.registerActionObject(Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_RESET, [{
            name: "Reset",
            method: function (_) {
                return _.invoke()
            }
        }], "Resethandler");
        this.registerActionObject(Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_CHECK_REQUEST, [{
            name: "PinCheck",
            method: function (_) {
                return _.invoke()
            }
        }], "null");
        this.registerStringVectorObject(Parental_lockModelDefines.SL2_TVAPI_VSTR_PARENTAL_LOCK_PIN_REQUEST, "getPinRequest", "setPinRequest", "onPinRequestChaged", null, null);
        //dbtag:20161025 - unlock all the blocks in parental control temporarily start
        this.registerActionObject(Parental_lockModelDefines.SL2_TVAPI_ACTION_PARENTAL_LOCK_PIN_REQUEST_CONFIRM, [{
            name:"PinRequestConfirm",
            method:function(object,password) {
                    return object.invoke(1,password);
                    }}
            ],"pinRequestConfirmCallback")
        //dbtag:20161025 - unlock all the blocks in parental control temporarily end
            

    }

}
Parental_lockModel.prototype = new SubModel;
Parental_lockModel.prototype.constructor = Parental_lockModel;
{
    SubModel.registerStaticConstants(Parental_lockModel, Parental_lockModelDefines, [])
}
