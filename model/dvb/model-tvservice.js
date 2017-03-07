function TvserviceModelDefines() {
}
{
    TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_PLAY_MAIN = "de.loewe.sl2.vstr.tvservice.play.main";
    TvserviceModelDefines.TVAPI_ACTION_TVSERVICE_PLAY = "de.loewe.sl2.action.tvservice.play";
    TvserviceModelDefines.TVAPI_I32_TVSERVICE_NO_SIGNAL_MAIN = "de.loewe.sl2.i32.tvservice.nosignal.main";
    TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_UNLOCK_PLAY = "tvapi.action.tvservice.unlock.play";
    TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_VIDEO_FORMAT_INFO = "de.loewe.sl2.str.video.format.info";
    TvserviceModelDefines.SL2_TVAPI_STR_NETWORK_CHANGE_MSG = "de.loewe.sl2.str.network.change.msg";
    //TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUDIO_INFORMATION = "tvapi.str.tvservice.audio.information";
    //TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUDIO_INFORMATION = "de.loewe.sl2.tvservice.audio.table";//dbtag:20160820
    TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO = "tvapi.action.tvservice.get.pfinfo";
    TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO2 = "tvapi.action.tvservice.get.pfinfo2";
/***** DBTAG MARK 20161028 *****/
    TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_EIT_MAIN_NOW         = "de.loewe.sl2.vstr.tvservice.eit.main-now";
    TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_EIT_MAIN_NEXT        = "de.loewe.sl2.vstr.tvservice.eit.main-next";
/***** DBTAG MARK end *****/
    TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_SOURCE_VIDEO_FORMAT_INFO = "tvapi.str.tvservice.source.video.format.info";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAYED_SUCCESS_LIVETV = "de.loewe.sl2.i32.tvservice.played.success.livetv";
    //TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAY_FAV_CHANNEL_LIST = "tvapi.i32.tvservice.play.fav.channel.list";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_MESSAGE_CAM_INDEX= "tvapi.i32.tvservice.message.cam.index";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_UPDATE = "tvapi.i32.tvservice.list.update";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_NAME_UPDATE = "tvapi.i32.tvservice.list.name.update";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_SAVED = "tvapi.i32.tvservice.list.saved";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LOCK_STATUS = "tvapi.i32.tvservice.lock.status";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_SUBTITLE_EXIST = "de.loewe.sl2.i32.tvservice.subtitle.exist";
    TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_MAIN = "de.loewe.sl2.tvservice.uri.main";
    TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_PLAY_MAIN_LAST= "de.loewe.sl2.vstr.tvservice.play.main.last";//dbtag:20161216-Mandy
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAY_MAIN_PAUSE = "de.loewe.sl2.tvservice.play.main.pause";
    TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMEHEIGHT = "de.loewe.sl2.i32.servicemode.videoinfo.frameheight";
    TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMEWIDTH = "de.loewe.sl2.i32.servicemode.videoinfo.framewidth";
    TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMERATE = "de.loewe.sl2.i32.servicemode.videoinfo.framerate";
    TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_INTERLACED = "de.loewe.sl2.i32.servicemode.videoinfo.interlaced";
    TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMEASPECT = "de.loewe.sl2.str.servicemode.videoinfo.frameaspect";//dbtag:20161228-Wangxing-Maybeuseinthefuture

    TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ID  =  0;
    TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_NAME  =  1;
    TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_ISO639  =  2;
    TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_TYPE  =  3;
    TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_PURPOSE  =  4;
    TvserviceModelDefines.ENUM_TVSERVICE_AUDIO_FIELD_TRACK  =  5;

    TvserviceModelDefines.SL2_TVAPI_TVSERVICE_AUDIO_TABLE= "de.loewe.sl2.tvservice.audio.table";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_AUDIO_INDEX= "de.loewe.sl2.i32.tvservice.audio.index";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_AUDIO_LAST_INDEX= "de.loewe.sl2.i32.tvservice.audio.last.index";
    TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_AUDIO_EXIST = "de.loewe.sl2.i32.tvservice.audio.exist";
}
function TvserviceModel(e) {
    SubModel.call(this, e, TvserviceModelDefines);

    this.registerSubObject = function (loadType) {
        this.registerStringVectorObject(TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_PLAY_MAIN, "getMainPlay", null, "onMainPlayChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.TVAPI_I32_TVSERVICE_NO_SIGNAL_MAIN, "getNoSignalMain", "setNoSignalMain", "onNoSignalMainChanged", null, null);
        //this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAY_FAV_CHANNEL_LIST, "getPlayFavChannelList", "setPlayFavChannelList", "onPlayFavChannelListChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAYED_SUCCESS_LIVETV, "getPlaySuccessLiveTV", "setPlaySuccessLiveTV", "onPlaySuccessLiveTVChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LOCK_STATUS, "getLockStatus", "setLockStatus", "onLockStatusChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_SUBTITLE_EXIST, "getChannelSubtitleExist", "setChannelSubtitleExist", "onChannelSubtitleExist", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_SAVED, "getChannelListSaved", "setChannelListSaved", "onChannelListSavedChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMEWIDTH, "getVideoInfoFramewidth", "setVideoInfoFramewidth", "onVideoInfoFramewidthChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMEHEIGHT, "getVideoInfoFrameheight", "setVideoInfoFrameheight", "onVideoInfoFrameheightChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMERATE, "getVideoInfoFramerate", "setVideoInfoFramerate", "onVideoInfoFramerateChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_INTERLACED, "getVideoInfoInterlaced", "setVideoInfoInterlaced", "onVideoInfoInterlacedChanged", null, null)
        this.registerStringObject(
            TvserviceModelDefines.SL2_TVAPI_I32_SERVICEMODE_VIDEOINFO_FRAMEASPECT,
            "getVideoInfoFrameaspect", "setVideoInfoFrameaspect", "onVideoInfoFrameaspectChanged",
            null, null );
/*
        this.registerActionObject(TvserviceModelDefines.TVAPI_ACTION_TVSERVICE_PLAY, [{
            name: "playChannel",
            method: function (e, i, t, n, _) {
                return e.invoke(i, t, n, _)
            }
        }], "onPlayResult");
*/
        //dbtag:20160820
        this.registerActionObject(TvserviceModelDefines.TVAPI_ACTION_TVSERVICE_PLAY, [{
            name: "playChannel",
            method: function ( object, folderUuid, uuid, terminal, mediaType, channelNum) {
                terminal = (!terminal ? "0" : "1");
                return object.invoke(terminal, folderUuid, uuid, channelNum, mediaType, null, "", null, null, null, null, "-1" );
            }
        }], "onPlayResult");
        this.registerActionObject(TvserviceModelDefines.TVAPI_VSTR_TVSERVICE_UNLOCK_PLAY, [{
            name: "unLockPlayChannel",
            method: function (e, i) {
                return e.invoke(i)
            }
        }], "onPlayResult");

/***** DBTAG MARK 20161028 *****/
        // Eit Main Now
        this.registerStringVectorObject(
            TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_EIT_MAIN_NOW,
            "getEitMainNow", null, "onEitMainNowChanged",
            null, null );

        // Eit Main Next
        this.registerStringVectorObject(
            TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_EIT_MAIN_NEXT,
            "getEitMainNext", null, "onEitMainNextChanged",
            null, null );
        // AudioTable
        this.registerTableObject(
            TvserviceModelDefines.SL2_TVAPI_TVSERVICE_AUDIO_TABLE,
            "creatAudioTableIterator");
        // AudioIndex
        this.registerIntegerObject(
            TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_AUDIO_INDEX,
            "getAudioIndex", "setAudioIndex", "onAudioIndexChanged",
            null, null );
        // AudioLastIndex
        this.registerIntegerObject(
            TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_AUDIO_LAST_INDEX,
            "getAudioLastIndex", "setAudioLastIndex", "onAudioLastIndexChaged",
            null, null );
        // AudioExist
        this.registerIntegerObject(
            TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_AUDIO_EXIST,
            "getAudioExist", "setAudioExist", "onAudioExistChaged",
            null, null );
/***** DBTAG MARK end *****/
        this.registerActionObject(TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO, [{
            name: "getChannelNowPfInfo",
            method: function (e) {
                return e.invoke(0)
            }
        }], "getChannelNowPfInfoCallBack");
        this.registerActionObject(TvserviceModelDefines.SL2_TVAPI_ACTION_TVSERVICE_GET_PFINFO2, [{
            name: "getChannelNextPfInfo",
            method: function (e) {
                return e.invoke(1)
            }
        }], "getChannelNextPfInfoCallBack");
/***** DBTAG MARK 20161028 *****/
        this.registerStringObject(
            TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_MAIN,
            "getTvServiceMain", "setTvServiceMain", "onTvServiceMainChanged",
            null, null );
/***** DBTAG MARK end *****/
        //dbtag:20161216-Mandy
        this.registerStringVectorObject(
            TvserviceModelDefines.SL2_TVAPI_VSTR_TVSERVICE_PLAY_MAIN_LAST,
            "getPlayMainLast", "setPlayMainLast", "onPlayMainLastChaged",
            null, null );
        //dtv pause resume
        this.registerIntegerObject(
            TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_PLAY_MAIN_PAUSE,
            "getPlayMainPause", "setPlayMainPause", "onPlayMainPauseChanged",
            null, null );
        this.registerStringObject(TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_VIDEO_FORMAT_INFO, "getMainPlayVideoFormatInfo", null, "onMainPlayVideoFormatInfoChanged", null, null);
        this.registerStringObject(TvserviceModelDefines.SL2_TVAPI_STR_NETWORK_CHANGE_MSG, null, null, "onNetworkChangeMsgChanged", null, null);
        //this.registerStringObject(TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_AUDIO_INFORMATION, "getMainPlayAudioFormatInfo", null, "onMainPlayAudioFormatInfoChanged", null, null);
        this.registerStringObject(TvserviceModelDefines.SL2_TVAPI_STR_TVSERVICE_SOURCE_VIDEO_FORMAT_INFO, "getCurrentSourceVideoFormat", "setCurrentSourceVideoFormat", "onCurrentSourceVideoFormatChanged", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_UPDATE, "getChannelListUpdate", "setChannelListUpdate", "onChannelListUpdate", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_LIST_NAME_UPDATE, "getChannelListNameUpdate", "setChannelListNameUpdate", "onChannelListNameUpdate", null, null);
        this.registerIntegerObject(TvserviceModelDefines.SL2_TVAPI_I32_TVSERVICE_MESSAGE_CAM_INDEX, "getMessageCamIndex", "setMessageCamIndex", "onMessageCamIndexChaged", null, null );

    }
}
TvserviceModel.prototype = new SubModel;
TvserviceModel.prototype.constructor = TvserviceModel;
{
    SubModel.registerStaticConstants(TvserviceModel, TvserviceModelDefines, [{
        groupPrefix: "SL2_TVAPI_VSTR_TVSERVICE_PLAY_",
        stripPrefix: "SL2_TVAPI_VSTR_TVSERVICE_"
    }, {
        groupPrefix: "ENUM_TVSERVICE_EIT_FIELD_",
        stripPrefix: "ENUM_TVSERVICE_"
    }, {groupPrefix: "ENUM_TVSERVICE_AUDIO_", stripPrefix: "ENUM_TVSERVICE_"}])
}
