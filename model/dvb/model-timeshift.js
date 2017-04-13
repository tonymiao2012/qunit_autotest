/**
 * Created by yangcheng3 on 2016-4-25.
 *
 * Timeshift-Model-Defines  class.
 * Contains all defined constants from values-timeshift.h
 */

function TimeshiftModelDefines() {
}
{
    TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SET_PAR = "de.loewe.sl2.hdr.user.registered.recorder.medium.path";
    TimeshiftModelDefines.SL2_TVAPI_VSTR_TSHIFT_IS_REGISTERED = "de.loewe.sl2.hdr.is.recorder.medium.registered"

    //TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAR_INFO = "de.loewe.sl2.vstr.tshift.par.info";
    TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_BEGIN_SHIFT = "de.loewe.sl2.hdr.player.play";
    TimeshiftModelDefines.SL2_TVAPI_HDR_ACTION_PLAYER_SET_SPEED = "de.loewe.sl2.hdr.player.set.speed";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_PLAYER_SPEED = "de.loewe.sl2.hdr.player.speed";
    //TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PLAY = "de.loewe.sl2.action.tshift.play";
    //TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAUSE = "de.loewe.sl2.action.tshift.pause";
    TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_STOP= "de.loewe.sl2.hdr.player.stop";
    TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PLAY_STATE= "de.loewe.sl2.hdr.player.state";
    TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PAR_AVAILABLE = "de.loewe.sl2.hdr.recorder.media.available";
    //TimeshiftModelDefines.SL2_TVAPI_VSTR_TSHIFT_RECORD_TIMES_INFO = "de.loewe.sl2.vstr.tshift.record.times.info";
    //TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SEEK_POSITION = "de.loewe.sl2.action.tshift.seek.position";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_CURSOR_TIME = "de.loewe.sl2.hdr.cursor.time";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_BAR_BEGIN_TIME = "de.loewe.sl2.hdr.bar.begin.time";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_BAR_END_TIME = "de.loewe.sl2.hdr.bar.end.time";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_BAR_BEGIN_POSITION = "de.loewe.sl2.hdr.bar.begin.position";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_BAR_END_POSITION = "de.loewe.sl2.hdr.bar.end.position";
    TimeshiftModelDefines.SL2_TVAPI_HDR_I32_CURSOR_POSITION = "de.loewe.sl2.hdr.cursor.position";
    TimeshiftModelDefines.SL2_TVAPI_HDR_ACTION_PLAYER_FORWARD_SKIP = "de.loewe.sl2.hdr.player.forward.skip";
    TimeshiftModelDefines.SL2_TVAPI_HDR_ACTION_PLAYER_BACKWARD_SKIP=  "de.loewe.sl2.hdr.player.backward.skip";

    // enum
    //ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_START_REG_FAIL  =  -1;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_START_REG_OK  =  0;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_START_REG_REGISTERED  =  1;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_ANALYSIS_BEGIN  =  2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_ANALYSIS_PROGRESS  =  3;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_ANALYSIS_OK  =  4;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_ANALYSIS_FAIL  =  5;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_CREATE_FILE_BEGIN  =  6;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_CREATE_FILE_PROGRESS  =  7;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_CREATE_FILE_OK  =  8;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_CREATE_FILE_FAIL  =  9;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_SPEED_TEST_BEGIN  =  10;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_SPEED_TEST_PROGRESS  =  11;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_SPEED_TEST_LOW  =  12;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_SPEED_TEST_OK  =  13;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_SPEED_TEST_FAIL  =  14;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REG_DEV_STATE_REG_FINISHED  =  15;

    //ENUM_SL2_TVAPI_TSHIFT_ACTION_STATE
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_ACTION_STATE_UNKNOWN = -4;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_ACTION_STATE_START_FAIL = -3;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_ACTION_STATE_STOP_FAIL = -2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_ACTION_STATE_START_OK = 2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_ACTION_STATE_STOP_OK = 3;

    //ENUM_SL2_TVAPI_TSHIFT_PAR_INFO
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_INFO_MEM_INDEX  =  0;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_INFO_FREE_MEM_INDEX  =  1;

    //ENUM_SL2_TVAPI_TSHIFT_TRIPLE_PLAY
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_1X   =  1;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_2X   =  2;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_4X   =  4;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_8X   =  8;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_16X  =  16;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FF_32X  =  32;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_1X   = -1;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_2X   =  -2;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_4X   =  -4;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_8X   =  -8;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_16X  =  -16;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_TRIPLE_FB_32X  =  -32;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_PAUSE = 0;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_FAST_MAX = 1;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_FAST_HIGH = 2;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_FAST_MEDIUM = 3;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_PLAY = 4;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_SLOW_MAX = 5;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_SLOW_HIGH = 6;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_SLOW_MEDIUM = 7;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_FORW_SLOW = 8;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_FAST_MAX = 10;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_FAST_HIGH = 11;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_FAST_MEDIUM = 12;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK = 13;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_SLOW_MAX = 14;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_SLOW_HIGH = 15;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_SLOW_MEDIUM = 16;
    TimeshiftModelDefines.SL2_TVAPI_HDR_PLAYER_SPEED_BACK_SLOW = 17;

    //ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FF_1X    =  1;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FF_2X    =  2;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FF_4X    =  4;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FF_8X    =  8;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FF_16X   =  16;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FF_32X   =  32;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FB_1X    =  -1;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FB_2X    =  -2;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FB_4X    =  -4;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FB_8X    =  -8;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FB_16X   =  -16;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_FB_32X   =  -32;
    //TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_PAUSED   =  33;


    //Player State
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PLAY_STATE_STOPPED  =  0; //PLAYER_STATE_IDLE
    TimeshiftModelDefines.ENUM_SL2_TVAPI_HDR_PLAYER_STATE_PLAYBACK=1;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_HDR_PLAYER_STATE_TIMESHIFT_PLAYBACK=2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_HDR_PLAYER_STATE_MEDIA_PREPARE=3;

    //ENUM_SL2_TVAPI_TSHIFT_PAR
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_REMOVE_MEDIA_AVAILABLE =  0;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_INSETTED  =  1;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_REMOVED  =  2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_FORMATED  =  3;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_SELECTED  =  4;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_AVAIL  =  5;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_CHG_ANOTHER_AVAIL  =  6;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_READY  =  7;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_FULL  =  8;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_TOO_SMALL  =  9;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_PAR_DEVICE_READ_ONLY  =  10;

    //
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_TEST_BEGIN  =  0;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_IS_REGED  =  1;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_TEST_OK  =  2;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_INVALID_PARAM  =  3;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_SPEED_LOW  =  4;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_TEST_FAILED  =  5;
    TimeshiftModelDefines.ENUM_SL2_TVAPI_TSHIFT_SETPAR_OTHER_PARAM  =  100;


}
/**
 * TimeshiftModel class derived from SubModel.
 */
function TimeshiftModel(parentModel) {
    SubModel.call(this, parentModel, TimeshiftModelDefines);
    this.registerSubObject = function (loadType) {
        // set  medium uuid
        this.registerStringObject(
            TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SET_PAR,
            "null", "SetPar", "onSetPar",
            null, null);

        // is regist
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_VSTR_TSHIFT_IS_REGISTERED,
            "getIsRegisterd", "null", "onChangeRegisterd",
            null, null);

        // ParInfo
        this.registerStringVectorObject(
            TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAR_INFO,
            "null", "getParInfo", "onParInfoCallback",
            null, null);

        // BeginShift
        this.registerActionObject(
            TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_BEGIN_SHIFT,
            [
                {name: "BeginShift", method: function (object, uid) {
                    if (!!uid) {
                        return object.invoke(uid);
                    }
                    else {
                        return object.invoke();
                    }
                }}
            ], 'beginShiftCallBack');

        // PLAYER SET SPEED
        this.registerActionObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_ACTION_PLAYER_SET_SPEED,
            [
                {
                    name: "TriplePlay", method: function (e, speed) {
                    return e.invoke(speed);
                }
                }
            ], "onTriplePlaySpeedChaged");
        // Player Speed
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_I32_PLAYER_SPEED,
            "getPlayerSpeed", "setPlayerSpeed", "onPlayerSpeedChaged",
            null, null);

        // Play
        //this.registerActionObject(
        //    TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PLAY,
        //    [
        //        {
        //            name: "Play", method: function (e) {
        //            return e.invoke();
        //        }
        //        }
        //    ], "null");

        // Pause
        //this.registerActionObject(
        //    TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_PAUSE,
        //    [
        //        {
        //            name: "Pause", method: function (e) {
        //            return e.invoke();
        //        }
        //        }
        //    ], "null");

        // Stop
        this.registerActionObject(
            TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_STOP,
            [
                {
                    name: "Stop", method: function (e) {
                    return e.invoke();
                }
                }
            ], "stopCallback");

        // PlayState
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PLAY_STATE,
            "getPlayState", "setPlayerState", "onPlayerStateChaged",
            null, null);

        //PAR AVAILABLE
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_I32_TSHIFT_PAR_AVAILABLE,
            "getParAvailableChaged", "null", "onParAvailableChaged",
            null, null);

        //RECORD TIMES INFO
        this.registerStringVectorObject(
            TimeshiftModelDefines.SL2_TVAPI_VSTR_TSHIFT_RECORD_TIMES_INFO,
            "getRecordTimesInfo", "null", "onRecordTimesInfoChanged",
            null, null);
        // Seek Position
        this.registerActionObject(
            TimeshiftModelDefines.SL2_TVAPI_ACTION_TSHIFT_SEEK_POSITION,
            [
                {
                    name: "seek", method: function (e,p) {
                    return e.invoke(p);
                }
                }
            ], "onSeeked");
        //the playback current time
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_I32_CURSOR_TIME,
            "getCursorTime", "setCursorTime", "onCursorTimeChaged",
            null, null);
        // BarBeginTime
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_I32_BAR_BEGIN_TIME,
            "getBarBeginTime", "setBarBeginTime", "onBarBeginTimeChaged",
            null, null);
        // BarEndTime
        this.registerIntegerObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_I32_BAR_END_TIME,
            "getBarEndTime", "setBarEndTime", "onBarEndTimeChaged",
            null, null);
        //¿ì½ø
        this.registerActionObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_ACTION_PLAYER_FORWARD_SKIP,
            [
                {name: "PlayerForwardSkip", method: function (object) {
                    return object.invoke();
                }}
            ], null
        );
        // PlayerBackwardSkip
        this.registerActionObject(
            TimeshiftModelDefines.SL2_TVAPI_HDR_ACTION_PLAYER_BACKWARD_SKIP,
            [
                {name: "PlayerBackwardSkip", method: function (object) {
                    return object.invoke();
                }}
            ], null
        );

    }
}
TimeshiftModel.prototype = new SubModel;
TimeshiftModel.prototype.constructor = TimeshiftModel;
{
    SubModel.registerStaticConstants(TimeshiftModel, TimeshiftModelDefines,[]);
}
