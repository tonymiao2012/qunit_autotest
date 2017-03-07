function MpCtrlModelDefines() {
}
{
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PREPARE_MEDIA = "de.loewe.sl2.mpctrl.action.prepare.media";
    //MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PLAY_MEDIA = "de.loewe.sl2.mpctrl.action.start.ctrl";  //only start,no parameter
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PLAY_MEDIA = "de.loewe.sl2.mpctrl.action.state.ctrl"; //dbtag:modified --20160718
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PVR_UNLOCK = "tvapi.action.videoplayer.pvrunlock";
    //MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_STATE = "de.loewe.sl2.mpctrl.i32.state";//interface same
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_STATE = "de.loewe.sl2.mpctrl.vstr.state";//interface same
    MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_STOP = "de.loewe.sl2.action.videoplayer.stop";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_ENUM_SPEED = "de.loewe.sl2.i32.videoplayer.enum.speed";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_TOTAL = "de.loewe.sl2.mpctrl.i32.playtime.total";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_CURRENT = "de.loewe.sl2.mpctrl.i32.playtime.current";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_GUI_RENDER = "de.loewe.sl2.mpctrl.i32.gui.render";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA = "de.loewe.sl2.mpctrl.vstr.metadata";
    MpCtrlModelDefines.SL2_TVAPI_I32_REQACTION = "tvapi.i32.mpctrl.reqaction";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS = "de.loewe.sl2.i32.videoplayer.flag.status";//"tvapi.i32.videoplayer.flag.status";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT = "de.loewe.sl2.i32.videoplayer.enum.repeat";//"tvapi.i32.videoplayer.enum.repeat";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT = "de.loewe.sl2.i32.videoplayer.enum.format";//"tvapi.i32.videoplayer.enum.format";
    MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_VIDEO_URL = "de.loewe.sl2.str.videoplayer.video.url";//"tvapi.str.videoplayer.video.url";
    MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_THUMBNAIL_URL = "de.loewe.sl2.str.videoplayer.thumbnail.url";//"tvapi.str.videoplayer.thumbnail.url";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_JUMP_DISTANCE = "de.loewe.sl2.i32.videoplayer.jump.distance";//"tvapi.i32.videoplayer.jump.distance"; // 2
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_SMART_JUMP = "de.loewe.sl2.i32.videoplayer.smartjump";//"tvapi.i32.videoplayer.smartjump";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT = "de.loewe.sl2.i32.videoplayer.enum.sort";//"tvapi.i32.videoplayer.enum.sort";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_PLAYLIST_INDEX = "de.loewe.sl2.i32.videoplayer.playlist.index";//"tvapi.i32.videoplayer.playlist.index";
    MpCtrlModelDefines.SL2_TVAPI_VSTR_MPCTRL_INFO = "de.loewe.sl2.vstr.videoplayer.info";//"tvapi.vstr.videoplayer.info";  //no impl zhy0714
    MpCtrlModelDefines.SL2_TVAPI_ACTION_MPCTRL_SKIP_BACK = "de.loewe.sl2.action.videoplayer.skip.back";//"tvapi.action.videoplayer.skip.back";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_MPCTRL_SKIP_FORW = "de.loewe.sl2.action.videoplayer.skip.forward";//"tvapi.action.videoplayer.skip.forward";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_SPEED = "de.loewe.sl2.mpctrl.action.speed";
    MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_FORMAT_INFO = "tvapi.str.videoplayer.format.info";
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_PLAYER_ERROR =  "de.loewe.sl2.mpctrl.i32.player.error";//"tvapi.i32.mpctrl.player.error";
    MpCtrlModelDefines.SL2_TVAPI_STR_VIDEOPLAYER_MUSIC_COVER = "tvapi.i32.videoplayer.music.cover";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_CAN_SEEK = "tvapi.i32.videoplayer.can.seek";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_TOTAL_NUM = "tvapi.i32.videoplayer.vd.subtitle.total.num";
    //dbtag:20160812--add subtitle
    //MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_NO = "tvapi.i32.videoplayer.vd.subtitle.no";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_NO = "de.loewe.sl2.mpctrl.int32.selected.subtitle";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_STR_EXTERNAL_SUBTITLE_URI = "de.loewe.sl2.mpctrl.str.external.subtitle.uri";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_HAS_SUBTITLE = "de.loewe.sl2.mpctrl.int32.has.subtitle";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_TABLE_SUBTITLE = "de.loewe.sl2.mpctrl.table.subtitle";
    //dbtag:20160812--add over
    //dbtag:20161024--add audio track
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_TABLE_AUDIO_STREAM = "de.loewe.sl2.mpctrl.table.audio.stream";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_TABLE_VIDEO_STREAM = "de.loewe.sl2.mpctrl.table.video.stream";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_SELECTED_AUDIO_STREAM = "de.loewe.sl2.mpctrl.int32.selected.audio.stream";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_SELECTED_VIDEO_STREAM = "de.loewe.sl2.mpctrl.int32.selected.video.stream";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_HAS_AUDIO_STREAMS = "de.loewe.sl2.mpctrl.int32.has.audio.streams";

    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_TOTAL_NUM = "tvapi.i32.videoplayer.pvrvd.subtitle.total.num";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_NO = "tvapi.i32.videoplayer.pvrvd.subtitle.no";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_ENCODE = "tvapi.i32.videoplayer.vd.subtitle.encode";
    MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_MUSIC_FIND_LYRIC = "tvapi.action.videoplayer.music.find.lyric";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_TEXT_SIZE = "de.loewe.sl2.mpctrl.i32.subtitle.font.size";
    MpCtrlModelDefines.SL2_TVAPI_VINT_VIDEOPLAYER_MUSIC_SUBTITLE_POSITION = "de.loewe.sl2.mpctrl.vi32.subtitle.position";
    MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_LINE_NUM = "de.loewe.sl2.mpctrl.i32.subtitle.line.number";
    MpCtrlModelDefines.SL2_TVAPI_VI32_VIDEOPLAYER_MUSIC_SUBTITLE_COLOR = "de.loewe.sl2.mpctrl.vi32.subtitle.font.color";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_ROTATE_PICTURE = "de.loewe.sl2.mpctrl.action.rotate.picture";//dbtag:20160801
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VI32_SCREEN_POSITION = "de.loewe.sl2.mpctrl.vi32.screen.position";
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_FORMAT = 4;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_VIDEO_FORMAT = 5;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_ENUM_PLAYER_ERROR_UNSUPPORT_AUDIO_FORMAT = 6;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_IDLE = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARING = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARED = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAYING = 3;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PAUSE = 4;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_STOP = 5;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_RELEASING = 7;//6;dbtag: changed value --20160720
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PREPARE_DONE = 8;//7;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_AUTO_STOP = 6;//8;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PLAY_DONE = 9;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_REPLAY = 10;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SEEK_DONE = 2009;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PVR_CHANNEL_LOCK = 21;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_PVR_RATING_LOCK = 22;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_BUFFUR_UNDERFLOW = 23;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_BUFFUR_READY = 24;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_UNKNOWN = 200;//1201;//dbtag: get error from biz --20160722
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_INVALID_ARG = 1202;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_INITIALIZED = 1203;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PARSER_ERROR = 1204;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_MEMORY_NOT_ENOUGH = 1205;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_ENGINE_START_FAIL = 1206;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_DECODING_ERROR = 1207;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_INVALID_DRMDATA = 1208;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_AUDIO_UNPLAYABLE = 1301;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_VIDEO_UNPLAYABLE = 1302;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FRAME_RATE = 1303;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_RESOLUTION = 1304;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_VIDEO_CODEC = 1305;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_AUDIO_CODEC = 1306;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE = 1307;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NO_VIDEO = 1308;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NO_AUDIO = 1309;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PHOTO_UNPLAYABLE = 1401;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_PHOTO_CODEC = 1402;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PHOTO_PRELOAD_ERROR = 1403;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_PHOTO_NEXTPLAY_ERROR = 1404;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_SERVER_DISCONNECTED = 1501;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_READ_DATA_ERROR = 1502;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NOT_SUPPORT_FILE_SEEK = 1503;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_OPEN_FILE_FAIL = 1504;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_NETWORK_ERROR = 1505;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_MEDIA_LOST = 1506;
    MpCtrlModelDefines.HS_PLAYER_PLAY_ERROR_FILE_EXPIRED = 1601;
    MpCtrlModelDefines.HS_PLAYER_PLAY_SEEK_DONE = 2009;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_STATE_ERROR = 200;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_BUFFERING = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_CAN_SEEK = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_CAN_SET_SPEED = 4;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_CAN_PAUSE = 8;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_FLAG_STATUS_FAVOURITE = 16;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_PAUSE = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_PLAY = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_SLOW = 200;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_MEDIUM = 201;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_HIGH = 202;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_FORW_MAX = 250;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_SLOW = 300;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_MEDIUM = 301;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_HIGH = 302;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SPEED_BACK_MAX = 350;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT_OFF = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT_SINGLE = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_REPEAT_ALL = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_FULLSCREEN = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_WINDOW = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_WINDOW_RELATIVE = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_FORMAT_WINDOW_TOP_60 = 3;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_URL_MAX_LENGTH = 2048;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_PLAYTIME_MAX = 100 * 3600;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_JUMP_DISTANCE_MIN = 60;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_JUMP_DISTANCE_MAX = 960;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_A_Z = 0;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_Z_A = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_SIZE = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_DATE_ASCENDING = 3;
    MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_ENUM_SORT_DATE_DESCENDING = 4;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_PLAYLIST_INDEX_MIN = 0;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_PLAYLIST_INDEX_MAX = 99;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INFO_MAX = 24;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_CAPTION = 0;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_TYPE = 1;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_SUBTYPE = 2;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_LOCATOR = 3;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_UUID = 4;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_THUMBURL = 5;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_STATION_NAME = 6;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_STATION_DESCRIPTION = 7;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_TITLE = 8;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_DESCRIPTION = 9;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_COMMENT = 10;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_GENRE = 11;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_DATE = 12;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_ARTIST = 13;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_ALBUM = 14;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_TRACK_NUMBER = 15;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_USER_INDEX = 16;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_YEAR = 17;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_BITRATE = 18;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_ACTOR = 19;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_DIRECTOR = 20;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_VOLUME_ID = 21;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_COUNT = 22;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_INDEX_URL = 23;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA_INDEX_FILE_SIZE = 24;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA_INDEX_VIDEO_WIDTH = 26;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA_INDEX_VIDEO_HEIGHT = 27;
    MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA_INDEX_VIDEO_FORMAT = 28;
    MpCtrlModelDefines.SL2_TVAPI_I32_MEDIA_STATE_CHANGE_PLAY = 1;
    MpCtrlModelDefines.SL2_TVAPI_I32_MEDIA_STATE_CHANGE_PAUSE = 2;
    MpCtrlModelDefines.SL2_TVAPI_I32_MEDIA_STATE_CHANGE_STOP = 3;
    MpCtrlModelDefines.SL2_TVAPI_I32_MEDIA_STATE_SEEK_START = 8;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_PLAY = 1;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_PAUSE = 2;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_STOP = 3;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_RELEASE = 4;

    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_VI32_SCREEN_WIDTH = 3840;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_VI32_SCREEN_HEIGHT = 2160;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_VI32_SCREEN_MODE_NORMAL = 1;

    //dbtag:20160812--add title
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_TABLE_STREAMS_PROGRAM_ID            = 0;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_TABLE_STREAMS_STREAM_ID             = 1;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_TABLE_STREAMS_STREAM_NAME           = 2;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_TABLE_STREAMS_STREAM_LANGUAGE_CODE  = 3;
    MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_TABLE_STREAMS_STREAM_ATTRIBUTES     = 4
    //dbtag:20160812--add over
}
function MpCtrlModel(_) {
    SubModel.call(this, _, MpCtrlModelDefines);
    this.registerSubObject = function (loadType) {
/*
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_MUSIC_FIND_LYRIC, [{
            name: "findLyric",
            method: function (_, e) {
                return _.invoke(e)
            }
        }], "onFindLyricResult");*/
    //dbtag:20160801: add rotate with one parameter
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_ROTATE_PICTURE, [{
            name: "rotate",
            method: function (_, e) {
                return _.invoke(e)
            }
        }], "onStartResult");
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PREPARE_MEDIA, [{
            name: "PlayMovie",
            method: function (_, e) {
                //return _.invoke(e, "video")
                return _.invoke(e, null,null,null,null,null,4,null,null,null)
            }
        }, {
            name: "PlayMusic", method: function (_, e) {
                //return _.invoke(e, "music")
                return _.invoke(e, null,null,null,null,null,8,null,null,null)
            }
        },{  //dbtag--20160728 add api for pic play
            name: "PlayPic", method: function (_, e) {
                //return _.invoke(e, "music")
                return _.invoke(e, null,null,null,null,null,16,null,null,null)
            }
        }], "onStartResult");
        //dbtag: set start/pause/stop/release in a Func --20160718
        /*this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PLAY_MEDIA, [{
            name: "PlayNow",
            method: function (_) {
                return _.invoke()
            }
        }], "onStartResult");*/
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PLAY_MEDIA,
        [
            { name: "MpCtrlPlay", method: function (_, e) {
                return _.invoke(MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_PLAY);
            }},
            { name: "MpCtrlPause", method: function (_, e) {
                return _.invoke(MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_PAUSE);
            } },
            { name: "MpCtrlStop", method: function (_, e) {
                return _.invoke(MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_STOP);
            }},
            { name: "MpCtrlRelease", method: function (_, e) {
                return _.invoke(MpCtrlModelDefines.ENUM_SL2_TVAPI_MPCTRL_ACTION_STATE_RELEASE);
            }}
        ],
        "onStartResult");
/*
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_PVR_UNLOCK, [{
            name: "UnlockPvr",
            method: function (_) {
                return _.invoke()
            }
        }], "onUnlockPvrResult");*/
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_ACTION_VIDEOPLAYER_STOP, [{
            name: "StopMpctrl",
            method: function (_, e) {
                return _.invoke(e)
            }
        }], "onStartResult");
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_NO, "getMpCtrlSubtitleNo", "setMpCtrlSubtitleNo", "onMpCtrlSubtitleNochanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_TOTAL_NUM, "getMpCtrlSubtitleTotalNo", "setMpCtrlSubtitleTotalNo", "onMpCtrlSubtitleTotalNochanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_NO, "getMpCtrlPvrSubtitleNo", "setMpCtrlPvrSubtitleNo", "onMpCtrlPvrSubtitleNochanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_PVRVIDEO_SUBTITLE_TOTAL_NUM, "getMpCtrlPvrSubtitleTotalNo", "setMpCtrlPvrSubtitleTotalNo", "onMpCtrlPvrSubtitleTotalNochanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_VIDEO_SUBTITLE_ENCODE, "getMpCtrlSubtitleEncode", "setMpCtrlSubtitleEncode", "onMpCtrlSubtitleEncodechanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_MUSIC_SUBTITLE_LINE_NUM, "getMusicSubtitleLineNum", "setMusicSubtitleLineNum", "onMusicSubtitleLineNumchanged", null, null);
        this.registerIntegerVectorObject(MpCtrlModelDefines.SL2_TVAPI_VINT_VIDEOPLAYER_MUSIC_SUBTITLE_POSITION, "getMusicSubtitlePosition", "setMusicSubtitlePosition", "onMusicSubtitlePositionChaged", null, null);
        this.registerActionObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_ACTION_SPEED, [{
            name: "setMpctrlFlag",
            method: function (_, e) {
                return _.invoke(e)
            }
        }], "onStartResult");
        //dbtag: change the type of return
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_STATE, "getMpCtrlStat", "setMapCtrlStat", "onMpCtrlStatchanged", null, null);
        this.registerStringVectorObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_STATE, "getMpCtrlStat", "setMapCtrlStat", "onMpCtrlStatchanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_MPCTRL_PLAYER_ERROR, "getMpCtrlPlayerError", "setMpCtrlPlayerError", "onMpCtrlPlayerErrorchanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_CAN_SEEK, "getVideoPlayerCanSeek", "setVideoPlayerCanSeek", "onVideoPlayerCanSeekchanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_STR_VIDEOPLAYER_MUSIC_COVER, "getMpCtrlMusicCover", "setMpCtrlMusicCover", "onMpCtrlMusicCoverchanged", null, null);
        this.registerStringVectorObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VSTR_METADATA, "getMetadata", "setMetadata", "onMetadataChanged", null, null);
        //this.registerStringObject(MpCtrlModelDefines.SL2_TVAPI_STR_MPCTRL_FORMAT_INFO, "getFormatInfo", "setFormatInfo", "onFormatInfoChanged", null, null);
        this.registerStringVectorObject(MpCtrlModelDefines.SL2_TVAPI_VSTR_MPCTRL_INFO, "getMpctrlInfo", "setMpctrlInfo", "onMpctrlInfoChanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_TOTAL, "getMpCtrlPlaytimeTotal", "setMapCtrlPlaytimeTotal", "onMpCtrlPlaytimeTotalchanged", null, null);
        //this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_REQACTION, "getMpCtrlReqation", "setMpCtrlReqation", "onMpCtrlReqationchanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_I32_VIDEOPLAYER_ENUM_SPEED, "getMpCtrlSpeed", "setMpCtrlSpeed", "onMpCtrlMpCtrlSpeedchanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_PLAYTIME_CURRENT, "getMpCtrlPlaytimeCurrent", "setMpCtrlPlaytimeCurrent", "onMpCtrlPlaytimeCurrentchanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_GUI_RENDER, "getMpCtrlRender", "setMpCtrlRender", "onMpCtrlRenderchanged", null, null);
        this.registerIntegerVectorObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_VI32_SCREEN_POSITION, "getScreenPosition", "setScreenPosition", "onScreenPositionChaged", null, null);
        this.registerIntegerVectorObject(MpCtrlModelDefines.SL2_TVAPI_VI32_VIDEOPLAYER_MUSIC_SUBTITLE_COLOR, "getSubtitleColor", "setSubtitleColor", "onSubtitleColorChaged", null, null);

        //dbtag:20160812--add title
        this.registerStringObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_STR_EXTERNAL_SUBTITLE_URI, "getExternalTitleUri", "setExternalTitleUri", "onExternalTitleUriChanged", null, null);
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_HAS_SUBTITLE, "getHasSubtitle", "setHasSubtitle", "onMpCtrlHasSubtitlechanged", null, null);
        this.registerTableObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_TABLE_SUBTITLE, "createSubtitleIterator");
        //dbtag:20160812--add over
        //dbtag:20161024--add audio track
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_SELECTED_AUDIO_STREAM, "getAudioTrack", "setAudioTrack", "onMpCtrlAudiochanged", null, null);
        this.registerTableObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_TABLE_AUDIO_STREAM, "createAudiotrackIterator");
        this.registerIntegerObject(MpCtrlModelDefines.SL2_TVAPI_MPCTRL_I32_HAS_AUDIO_STREAMS, "getHasAudioStreams", "setHasAudioStreams", "onMpCtrlHasAudioStreamschanged", null, null);
    }

}
MpCtrlModel.prototype = new SubModel;
MpCtrlModel.prototype.constructor = MpCtrlModel;
{
    SubModel.registerStaticConstants(MpCtrlModel, MpCtrlModelDefines, [])
}
