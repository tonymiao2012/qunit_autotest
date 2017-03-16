function DatetimeModelDefines() {
}
{
    DatetimeModelDefines.SL2_TVAPI_STR_DATETIME_TIME_ZONE = "de.loewe.sl2.datetime.timezone";
    DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_TIME_FORMAT = "de.loewe.sl2.i32.datetime.format";
    DatetimeModelDefines.SL2_TVAPI_I64_DATETIME_BROADCAST_TIME = "de.loewe.sl2.i64.datetime.time.dtv";
    DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_AUTOTIME = "de.loewe.sl2.i32.datetime.autotime";
    DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_NEW_AREA_TIME_ZONE = "de.loewe.sl2.i32.datetime.deviation.timezone";
    DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_DAYLIGHT_SAVINGS = "de.loewe.sl2.i32.datetime.daylight.saving.time";
    DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_DEVIATION_FROM_UTC = "de.loewe.sl2.i32.datetime.deviation.fromutc";
    DatetimeModelDefines.SL2_TVAPI_I64_TIMER_FUNCTIONS_CUR_LOCAL_TIME = "de.loewe.sl2.i64.datetime.local.time";
    DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_TIMEZONE_SYNC_ENABLE = "de.loewe.sl2.i32.datetime.timezone.sync.enable";


    // DatetimeModelDefines.SL2_TVAPI_I64_TIMER_FUNCTIONS_CUR_TIME = "de.loewe.sl2.i64.datetime.current.time";
    // DatetimeModelDefines.SL2_TVAPI_I64_DATETIME_TIME_UPTIMEOFFSET = "de.loewe.sl2.i64.datetime.time.uptimeoffset";
    // DatetimeModelDefines.SL2_TVAPI_I64_TIMER_FUNCTIONS_CUR_LOCAL_TIME = "de.loewe.sl2.i64.datetime.cur.local.time";
}
function DatetimeModel(e) {
    SubModel.call(this, e, DatetimeModelDefines);
    this.registerSubObject = function () {
        this.registerStringObject(
            DatetimeModelDefines.SL2_TVAPI_STR_DATETIME_TIME_ZONE,
            "getTimeZone",
            "setTimeZone",
            "onTimeZoneChaged",
            null, null);

        this.registerIntegerObject(
            DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_TIME_FORMAT,
            "getTimeFormat",
            "setTimeFormat",
            "onTimeFormatChaged",
            null, null);

        this.registerIntegerObject(
            DatetimeModelDefines.SL2_TVAPI_I64_DATETIME_BROADCAST_TIME,
            "getBroadcastTime",
            "setBroadcastTime",
            "onBroadcastTimeChanged",
            null, null);

        this.registerIntegerObject(
            DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_AUTOTIME,
            "getSyncMode",
            "setSyncMode",
            "onSyncModeChaged",
            null, null);

        this.registerIntegerObject(
            DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_NEW_AREA_TIME_ZONE,
            "getNewAreaTimeZone",
            "setNewAreaTimeZone",
            "onNewAreaTimeZoneChaged",
            null, null);

        this.registerIntegerObject(
            DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_DAYLIGHT_SAVINGS,
            "getDaylightSavings",
            "setDaylightSavings",
            "onDaylightSavingsChaged",
            null, null);

        this.registerIntegerObject(
            DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_DEVIATION_FROM_UTC,
            "getDeviationFromutc",
            "setDeviationFromutc",
            "onDeviationFromutcChaged",
            null, null);

         this.registerIntegerObject(DatetimeModelDefines.SL2_TVAPI_I64_TIMER_FUNCTIONS_CUR_LOCAL_TIME, "getCurLocalTime", "setCurLocalTime", "CurLocalTimeOnChaged", null, null);//dbtag:20161020 change type
         this.registerIntegerObject(DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_TIMEZONE_SYNC_ENABLE, "getTimeZoneSyncFlag", "setTimeZoneSyncFlag", null, null, null);//dbtag:20161020 change type

//         this.registerIntegerObject(DatetimeModelDefines.SL2_TVAPI_I32_DATETIME_DEVIATION_TIMEZONE,
//             "getTimeZoneDev",
//             "setTimeZoneDev",
//             "onTimeZoneIdxChaged",
//             null, null);

        // this.registerIntegerObject(
        //     DatetimeModelDefines.SL2_TVAPI_I64_DATETIME_TIME_UPTIMEOFFSET,//
        //     "getTimeUptimeoffset", "setTimeUptimeoffset", "onTimeUptimeoffsetChaged",
        //     null, null);
    }
}
DatetimeModel.prototype = new SubModel;
DatetimeModel.prototype.constructor = DatetimeModel;
{
    SubModel.registerStaticConstants(DatetimeModel, DatetimeModelDefines, [])
}