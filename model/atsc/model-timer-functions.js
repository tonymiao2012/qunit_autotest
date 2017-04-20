function Timer_functionsModelDefines() {
}
{
    
    //Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_MODE = "tvapi.i32.timerfunctions.standby.mode";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_MODE = "de.loewe.sl2.i32.timerfunctions.switch.off.mode";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_ONCE= "de.loewe.sl2.i32.timerfunctions.standby.once";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_DAILY= "de.loewe.sl2.i32.timerfunctions.standby.daily";
    Timer_functionsModelDefines.SL2_TVAPI_VINT32_TIMER_FUNCTIONS_STANDBY_WEEKLY = "tvapi.vint32.timerfunctions.standby.weekly";
    Timer_functionsModelDefines.SL2_TVAPI_ACTION_TIMER_FUNCTIONS_START_STANDBY = "tvapi.action.timerfunctions.start.standby";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_MODE = "de.loewe.sl2.i32.timerfunctions.wake.up.mode";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_ONCE= "de.loewe.sl2.i32.timerfunctions.alarm.once";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_DAILY= "de.loewe.sl2.i32.timerfunctions.alarm.daily";
//    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_WEEKDAY= "de.loewe.sl2.i32.timerfunctions.alarm.weekday";
//    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SATURDAY= "de.loewe.sl2.i32.timerfunctions.alarm.saturday";
//    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SUNDAY= "de.loewe.sl2.i32.timerfunctions.alarm.sunday";
    Timer_functionsModelDefines.SL2_TVAPI_VINT32_TIMER_FUNCTIONS_ALARM_WEEKLY = "tvapi.vint32.timerfunctions.alarm.weekly";
    Timer_functionsModelDefines.SL2_TVAPI_ACTION_TIMER_FUNCTIONS_START_ALARM = "tvapi.action.timerfunctions.start.alarm";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_SLEEP_TIMER = "de.loewe.sl2.i32.timerfunctions.hotelmode.sleep.timer";  //dbtag:20161209
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_SETTINGS_NOTIFICATION_TIME = "de.loewe.sl2.i32.timerfunctions.settings.notification.time";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ECO_TIMER = "de.loewe.sl2.i32.timerfunctions.eco.timer";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ECO_TIMER_MAX = 4 * 60 * 60;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_DELAY = "de.loewe.sl2.i32.timerfunctions.standby.delay";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_TIME_INIT = 5 * 60;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_TIME_MAX = 24 * 60 * 60;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_TIME_UNDEFINED = -1;
//    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_WEEKDAY = "de.loewe.sl2.i32.timerfunctions.alarm.weekday";
//    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SATURDAY = "de.loewe.sl2.i32.timerfunctions.alarm.saturday";
//    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SUNDAY = "de.loewe.sl2.i32.timerfunctions.alarm.sunday";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_VOLUME = "de.loewe.sl2.i32.timerfunctions.alarm.volume";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_VOLUME_INIT = 30;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_VOLUME_MIN = 10;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_VOLUME_MAX = 59;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SOUND_EXIST = "de.loewe.sl2.i32.timerfunctions.alarm.sound.exist";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_DEVICE = "de.loewe.sl2.i32.timerfunctions.alarm.device";
    Timer_functionsModelDefines.SL2_TVAPI_TIMER_FUNCTIONS_ALARM_DEVICE_TV = 1;
    Timer_functionsModelDefines.SL2_TVAPI_TIMER_FUNCTIONS_ALARM_DEVICE_RADIO = 2;
    Timer_functionsModelDefines.SL2_TVAPI_TIMER_FUNCTIONS_ALARM_DEVICE_URL = 3;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SOURCE = "de.loewe.sl2.i32.timerfunctions.alarm.source";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_NONE = 0;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_STANDBY_DELAY = 1 << 0;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_STANDBY_ONCE = 1 << 1;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_STANDBY_DAILY = 1 << 2;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_ALARM_DELAY = 1 << 7;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_ALARM_ONCE = 1 << 8;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_ALARM_DAILY = 1 << 9;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_ALARM_WEEKDAY = 1 << 10;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_ALARM_SATURDAY = 1 << 11;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_FLAG_ALARM_SUNDAY = 1 << 12;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_SUPPRESS_KEY_GLOBAL_ACTION = "de.loewe.sl2.i32.timerfunctions.suppress.key.global.action";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_SUPPRESS_KEY_GLOBAL_ACTION_YES = 1;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_SUPPRESS_KEY_GLOBAL_ACTION_NO = 0;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SOUND_DISABLE = "de.loewe.sl2.i32.timerfunctions.alarm.sound.disable";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS__SLEEP_TIMER_MIN = 0;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS__SLEEP_TIMER_MAX = 120;
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_HOTELMODE_SLEEP_TIME_COUNTER = "de.loewe.sl2.i32.timerfunctions.hotelmode.sleep.time.counter";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_AUTO_SLEEP_SWITCH = "de.loewe.sl2.i32.timerfunctions.auto.sleep";
    Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_POWER_OFF_NOTIFY ="de.loewe.sl2.i32.timerfunctions.switch.off.notify";

    //dbtag:20161025 --RICK --START
    Timer_functionsModelDefines.SL2_TVAPI_TABLE_TIMER_LIST_TABLE = "de.loewe.sl2.timer.list.table";
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_ENTRY_UUID = 0;
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_ENTRY_TITLE = 1;
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_CHANNEL_UUID = 2;
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_START_TIME_UTC = 4;
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_END_TIME_UTC = 5;
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_RECORDING_TYPE = 7;
    Timer_functionsModelDefines.SL2_TVAPI_ENUM_TIMER_LIST_TABLE_FIELD_SOURCE_CHANNEL_NAME = 14;
    //dbtag:20161025 --RICK --END
}
function Timer_functionsModel(e) {
    SubModel.call(this, e, Timer_functionsModelDefines);
    this.registerSubObject = function () {


        this.registerIntegerObject(Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_MODE, "getStandbyMode", "setStandbyMode", "onStandbyModeChaged", null, null);
        // StandbyOnce
        this.registerIntegerObject(
            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_ONCE,
            "getStandbyOnce", "setStandbyOnce", "onStandbyOnceChaged",
            null, null );

        // StandbyDaily
        this.registerIntegerObject(
            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_STANDBY_DAILY,
            "getStandbyDaily", "setStandbyDaily", "onStandbyDailyChaged",
            null, null );


        this.registerIntegerObject(Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_MODE, "getAlarmMode", "setAlarmMode", "onAlarmModeChaged", null, null);
      //  this.registerIntegerObject(Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_TIME, "getAlarmTime", "setAlarmTime", "onAlarmTimeChaged", null, null);
        // AlarmOnce
        this.registerIntegerObject(
            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_ONCE,
            "getAlarmOnce", "setAlarmOnce", "onAlarmOnceChaged",
            null, null );
        // getAlarmDaily
        this.registerIntegerObject(
            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_DAILY,
            "getAlarmDaily", "setAlarmDaily", "onAlarmDailyChaged",
            null, null );
        // AlarmWeekday

//        this.registerIntegerObject(
//            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_WEEKDAY,
//            "getAlarmWeekday", "setAlarmWeekday", "onAlarmWeekdayChaged",
//            null, null );
//
//        // AlarmSaturday
//        this.registerIntegerObject(
//            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SATURDAY,
//            "getAlarmSaturday", "setAlarmSaturday", "onAlarmSaturdayChaged",
//            null, null );
//
//        // AlarmSunday
//        this.registerIntegerObject(
//            Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_ALARM_SUNDAY,
//            "getAlarmSunday", "setAlarmSunday", "onAlarmSundayChaged",
//            null, null );

        this.registerIntegerObject(Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_SLEEP_TIMER, "getHotelmodeSleepTimer", "setHotelmodeSleepTimer", "onHotelmodeSleepTimerChaged", null, null);
        this.registerIntegerObject(Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_AUTO_SLEEP_SWITCH, "getAutoSleepSwitch", "setAutoSleepSwitch", "onAutoSleepSwitchchanged", null, null);
        this.registerIntegerObject(Timer_functionsModelDefines.SL2_TVAPI_I32_TIMER_FUNCTIONS_POWER_OFF_NOTIFY, "getPowerOffflag", "setPowerOffflag", "onPowerOffflagchanged", null, null);
        this.registerTableObject(Timer_functionsModelDefines.SL2_TVAPI_TABLE_TIMER_LIST_TABLE,"createScheduleListIterator");
    }

}
Timer_functionsModel.prototype = new SubModel;
Timer_functionsModel.prototype.constructor = Timer_functionsModel;
{
    SubModel.registerStaticConstants(Timer_functionsModel, Timer_functionsModelDefines, [])
}