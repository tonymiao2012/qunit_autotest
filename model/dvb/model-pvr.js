/**
 * Created by yangcheng3 on 2016-5-6.
 *
 * Pvr-Model-Defines  class.
 * Contains all defined constants from values-pvr.h
 */
function PvrModelDefines() {
}
{
/***** DBTAG MARK 20161028 *****/
    PvrModelDefines.SL2_TVAPI_VSTR_PVR_IS_REGISTERED = "de.loewe.sl2.hdr.is.recorder.medium.registered";
    //PvrModelDefines.SL2_TVAPI_ACTION_PVR_SPEED_TEST = "tvapi.action.pvr.speed.test"; 
    PvrModelDefines.SL2_TVAPI_VSTR_PVR_PAR_INFO = "de.loewe.sl2.hdr.user.registered.recorder.medium.path";
    PvrModelDefines.SL2_TVAPI_ACTION_PVR_START_RECORD = "de.loewe.sl2.timer.list.entry.add";
    PvrModelDefines.SL2_TVAPI_ACTION_PVR_STOP_RECORD = "de.loewe.sl2.hdr.player.stop";
    PvrModelDefines.SL2_TVAPI_I32_PVR_LEAD_TIME = "de.loewe.sl2.timer.control.recorder.lead.time";
    PvrModelDefines.SL2_TVAPI_I32_PVR_TRAILING_TIME = "de.loewe.sl2.timer.control.recorder.trailing.time";
    PvrModelDefines.SL2_TVAPI_I32_PVR_RECORD_STATE = "de.loewe.sl2.hdr.recorder.states";
    PvrModelDefines.SL2_TVAPI_I32_PVR_PAR_AVAILABLE = "de.loewe.sl2.hdr.recorder.media.available";
    //PvrModelDefines.SL2_TVAPI_I32_PVR_IS_RUNNING = "de.loewe.sl2.hdr.main.is.archive.recording";
    //PvrModelDefines.SL2_TVAPI_VSTR_PVR_SCHEDULE_ITEM = "tvapi.vstr.pvr.schedule.item";
    PvrModelDefines.SL2_TVAPI_I32_PVR_FREE_MEM_THRESHOLD = "de.loewe.sl2.hdr.recorder.medium.freespace";
    PvrModelDefines.SL2_TVAPI_ACTION_PVR_SCHEDULE_ADD = "de.loewe.sl2.timer.list.entry.add";
    PvrModelDefines.SL2_TVAPI_ACTION_PVR_SCHEDULE_EDIT = "de.loewe.sl2.timer.list.entry.edit";
    PvrModelDefines.SL2_TVAPI_ACTION_PVR_SCHEDULE_REMOVE = "de.loewe.sl2.timer.list.entry.remove";
    //PvrModelDefines.SL2_TVAPI_VSTR_PVR_ALL_SCHEDULE_ITEMS = "de.loewe.sl2.timer.list.table";
    //PvrModelDefines.SL2_TVAPI_I32_PVR_RUNNING_STATUS = "tvapi.i32.pvr.running.status";
    //PvrModelDefines.SL2_TVAPI_I32_PVR_RECORD_STANDBY = "tvapi.i32.pvr.record.standby";
    PvrModelDefines.SL2_TVAPI_ACTION_HDR_PLAYER_PLAY = "de.loewe.sl2.hdr.player.play";
    PvrModelDefines.SL2_TVAPI_I32_PVR_PLAY_STATE= "de.loewe.sl2.hdr.player.state";
    PvrModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO = "de.loewe.sl2.timer.list.entry.add.memo";
    PvrModelDefines.SL2_TVAPI_HDR_VSTR_DELETE_RECORDER_FILES = "de.loewe.sl2.hdr.action.archive.remove";

    PvrModelDefines.SL2_TVAPI_STR_PVR_RECORDER_FILES_UUID = "de.loewe.sl2.volume.recorder.files.uuid";
    PvrModelDefines.SL2_TVAPI_VSTR_PVR_SPACE_SIZE = "de.loewe.sl2.volume.recorder.files.totalspace";
    PvrModelDefines.SL2_TVAPI_VSTR_PVR_FREE_SPACE_SIZE = "de.loewe.sl2.volume.recorder.files.freespace";
    PvrModelDefines.SL2_TVAPI_I32_PVR_MANUAL_STOP_ENDTIME = "de.loewe.sl2.hdr.rec.manual.stop.endtime";

/***** DBTAG MARK 20161028 *****/

    // enum
    //ENUM_PVR_IS_REGISTERED
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_RECORD_NOT_REGISTERED = 0;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_RECORD_REGISTERED = 1;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_RECORD_SPEED_LOW = 2;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_RECORD_SPACE_LOW = 3;
    //ENUM_PVR_RECORD_STATE
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_UNKNOWN = 0;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_RECORDING = 1;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_STATE_RECORDING_ARCHIVE = 2;
    //ENUM_PVR_PAR
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_NO_DEVICE  =  0;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_INSETTED  =  1;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_REMOVED  =  2;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_FORMATED  =  3;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_SELECTED  =  4;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_AVAIL  =  5;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_CHG_ANOTHER_AVAIL  =  6;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_READY  =  7;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_FULL  =  8;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_TOO_SMALL  =  9;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_PAR_DEVICE_READ_ONLY  =  10;
    //ENUM_I32_PVR_RUNNING_STATUS
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_NOT_RUNNING_STATUS = 0;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_RUNNING_REMOTE_POWER_STATUS = 1;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_RUNNING_PANEL_POWER_STATUS = 2;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_CEC_WAKEUP_STATUS = 3;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_WAKEUP_BY_BTN_MENU_STATUS = 4;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_WAKEUP_BY_POWER_KEY_STATUS = 5;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_WAKEUP_BY_OTHER_KEYS_STATUS = 6;
    //ENUM_I32_PVR_RECORD_STANDBY
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_STANDBY_RECORD = 0;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_STANDBY_STOP = 1;
    PvrModelDefines.ENUM_SL2_TVAPI_PVR_UI_IS_READY = 2;

    //ENUM self defined
    PvrModelDefines.ENUM_PVR_REMOVE_MEDIA_AVAILABLE = 0;
    PvrModelDefines.ENUM_PVR_MEDIA_IS_AVAILABLE = 1;
    PvrModelDefines.ENUM_PVR_LOWPARTIP = 1;
    PvrModelDefines.ENUM_PVR_LOWPARSTOP = 2;
    //constants
    PvrModelDefines.CONSTRAINT_PVR_LOWPARTIP_SIZE = 15*60;     //15min
    PvrModelDefines.CONSTRAINT_PVR_LOWPARSTOP_SIZE = 2*60;     // 2min
    PvrModelDefines.CONSTRAINT_PVR_LOWSPEED_LIMITE = 1536;  // 1.5*1024KB/s
    PvrModelDefines.CONSTRAINT_PVR_SCHEDULE_MAXLIMITE = 35;
    PvrModelDefines.CONSTRAINT_PVR_RECORD_RATE = 1.6; // 1.6MB/s
    //repeat type
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_EVERYDAY = 0;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_SUN = 1;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_MON = 2;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_TUE = 4;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_WED = 8;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_THU = 16;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_FRI = 32;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_SAT = 64;
    PvrModelDefines.CONSTRAINT_PVR_REPEAT_ONCE = 128;
    //book type
    PvrModelDefines.ENUM_PVR_BOOK_REMINDER = 1;
    PvrModelDefines.ENUM_PVR_BOOK_PVR = 2;

}
/**
 * PvrModel class derived from SubModel.
 */
function PvrModel(parentModel) {
    SubModel.call(this, parentModel, PvrModelDefines);
    this.registerSubObject = function (loadType) {
        // registerd
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_VSTR_PVR_IS_REGISTERED,
            "getIsRegisterd", "null", "onChangeRegisterd",
            null, null);
        //speed test
        //this.registerActionObject(
        //    PvrModelDefines.SL2_TVAPI_ACTION_PVR_SPEED_TEST,
        //    [
        //        {
        //            name: "speedTest", method: function (e,p) {
        //            return e.invoke(p);
        //        }
        //        }
        //    ], "onSpeedTested");
        //set  medium uuid
        this.registerStringObject(
            PvrModelDefines.SL2_TVAPI_VSTR_PVR_PAR_INFO,
            "getParInfo", "setParInfo", "onParInfo",
            null, null);
        //start record

/***** DBTAG MARK 20161028 *****/
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_ACTION_PVR_START_RECORD,
            [
                {
                    name: "startRecord", method: function (e,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22) {
                    return e.invoke(p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22);
                }
                }
            ], "onStarted","onAddRecordError");
/*
        p0: '',
        p1: program.title,
        p2: program.channelUid,
        p3: program.destination,
        p4: program.beginTime,
        p5: program.endTime,
        p6: program.descrambleTime,
        p7: repeatMode,
        p8: CRID,
        p9: lockPin,
        p10: programPin,
        p11: attribute,
        p12: listUid,
        p13: channelUri,
        p14: channelName,
        p15: locater,
        p16: recordUri,
        p17: volumeId,
        p18: eventId
        p19:
        p20:
        p21:
        p22: channelNum,
*/
/***** DBTAG MARK end *****/
        //stop record
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_ACTION_PVR_STOP_RECORD,
            [
                {
                    name: "stopRecord", method: function (e) {
                    return e.invoke();
                }
                }
            ], "onStopped");
        //lead time
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_LEAD_TIME,
            "getLeadTime", "setLeadTime", "null",
            null, null);
        //Trailing time
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_TRAILING_TIME,
            "getTrailingTime", "setTrailingTime", "null",
            null, null);
        //par available RecorderMediaAvailable
       this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_PAR_AVAILABLE,
            "getRecorderMediaAvailable", "setRecorderMediaAvailable", "onParStateChanged",
            null, null);
        //pvr is running
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_IS_RUNNING,
            "getPvrIsRunning", "null", "null",
            null, null);
        //schedule event
        //this.registerStringVectorObject(
        //    PvrModelDefines.SL2_TVAPI_VSTR_PVR_SCHEDULE_ITEM,
        //    "null", "null", "onScheduleNotify",
        //    null, null);

        //free space medium
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_FREE_MEM_THRESHOLD,
            "getRecorderMediumFreespace", "setRecorderMediumFreespace", "onFreeMemThresholdNotify",
            null, null);
        //add schedule
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_ACTION_PVR_SCHEDULE_ADD,
            [
                {
                    name: "addSchedule", method: function (e,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22) {
                    return e.invoke(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18,p19,p20,p21,p22);
                }
                }
            ], "onScheduleAdded","onScheduleAddERR");
        //edit schedule
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_ACTION_PVR_SCHEDULE_EDIT,
            [
                {
                    name: "editSchedule",
                    method: function (e,p0,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22) {
                        return e.invoke(p0, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15, p16, p17, p18,p19,p20,p21,p22);
                    }
                }
            ], "onScheduleEdited","onEditRecordEror");
        //remove schedule
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_ACTION_PVR_SCHEDULE_REMOVE,
            [
                {
                    name: "removeSchedule",
                    method: function (e, i) {
                        return eval("e.invoke("+i+");");
                    }
                }
            ], "onScheduleRemoved","onScheduleRemovERR");
        //schedule items
        //this.registerTableObject(
        //    PvrModelDefines.SL2_TVAPI_VSTR_PVR_ALL_SCHEDULE_ITEMS,
        //    "getScheduleItems", "setScheduleItems", "null", /***** DBTAG MARK 20161028 *****/
        //    null, null);
        // running status
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_RUNNING_STATUS,
            "getPvrRunningStatus", "setPvrRunningStatus", "onRunningStatusChanged",
            null, null);
        // standby
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_RECORD_STANDBY,
            "null", "setRecordStandby", "null",
            null, null);
        //pvr state
/***** DBTAG MARK 20161028 *****/
        this.registerIntegerVectorObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_RECORD_STATE,
            "getRecordState", "setRecordState", "onRecordStateChanged",
            null, null);

        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_ACTION_HDR_PLAYER_PLAY,
            [
                {
                    name: "playPvr",
                    method: function (object, uid) {
                        if (!!uid) {
                            return object.invoke(uid);
                        }
                        else {
                            return object.invoke();
                        }
                    }
                }
            ],"onPlayerPlayed");
        //预约观看
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_TIMER_LIST_ENTRY_ADD_MEMO,
            [
                { name: "addRemindTimer", method: function(e, p1, p2, p3, p4, p5, p6, p7, p8, p9,p10) {
                    return e.invoke( p1, p2, p3, p4, p5, p6, p7, p8 ,p9,p10
                    );
                } }
            ],
            "onAddRemindTimerResult");
        /*
        * p1.title,
        * p2.channelUid,
        * p3.channelUri,
        * p4.channelName,
        * p5.begin,
        * p6.end,
        * p7.eventId,
        * p8.listUid
        * p9.repeat_type
        * p10.channel_number
        * */

        //删除预约文件
        this.registerActionObject(
            PvrModelDefines.SL2_TVAPI_HDR_VSTR_DELETE_RECORDER_FILES,
            [
                {name: "deletePVR", method: function (object, uuid) {
                    return object.invoke(uuid);
                }}
            ], "deletePVRHandler","deletePVRHandlerERR");
        //获取播放状态
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_PLAY_STATE,
            "getPVRPlayState", "setPVRPlayState", "onPVRPlayStateChaged",
            null, null );
/***** DBTAG MARK end *****/

/*   read  space size*/
        this.registerStringObject(
            PvrModelDefines.SL2_TVAPI_STR_PVR_RECORDER_FILES_UUID,
            null, "setFilesUUID", null,
            null, null);
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_VSTR_PVR_SPACE_SIZE,
            "getRecordMediumTotalSpace", "setRecordMediumTotalSpace", "onRecordMediumTotalSpace",
            null, null);
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_VSTR_PVR_FREE_SPACE_SIZE,
            "getRecordMediumFreeSpace", "setRecordMediumFreeSpace", "onRecordMediumFreeSpace",
            null, null);
        this.registerIntegerObject(
            PvrModelDefines.SL2_TVAPI_I32_PVR_MANUAL_STOP_ENDTIME,
            "null", "null", "onManualStopTimeChanged",
            null, null);


      }
}
PvrModel.prototype = new SubModel;
PvrModel.prototype.constructor = PvrModel;
{
    SubModel.registerStaticConstants(PvrModel, PvrModelDefines,[]);
}
