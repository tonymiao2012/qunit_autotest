function TtsModelDefines() {
}
{
    TtsModelDefines.TVAPI_TTS_I32_SWITCH_STATUS = "tvapi.i32.tts.switch.status";
    TtsModelDefines.TVAPI_TTS_I32_LANG_IDX = "tvapi.i32.tts.lang.idx";
    TtsModelDefines.TVAPI_TTS_I32_VOICE_TYPE = "tvapi.i32.tts.voice.type";
    TtsModelDefines.TVAPI_TTS_I32_VOLUME = "tvapi.i32.tts.volume";
    TtsModelDefines.TVAPI_TTS_I32_PITCH = "tvapi.i32.tts.pitch";
    TtsModelDefines.TVAPI_TTS_I32_SPEED = "tvapi.i32.tts.speed";
    TtsModelDefines.TVAPI_TTS_I32_FOCUS_SPEECH_AUDIO = "tvapi.i32.tts.focus.speech.audio";
    TtsModelDefines.TVAPI_TTS_STR_PLAY = "tvapi.str.tts.play";
    TtsModelDefines.TVAPI_TTS_ACTION_CMD = "tvapi.action.tts.cmd";
    TtsModelDefines.TVAPI_TTS_SWITCH_OFF = 0;
    TtsModelDefines.TVAPI_TTS_SWITCH_ON = 1;
    TtsModelDefines.TVAPI_TTS_SWITCH_COUNT = 2;
    TtsModelDefines.TVAPI_TTS_LANG_ENG = 0;
    TtsModelDefines.TVAPI_TTS_LANG_SPA = 1;
    TtsModelDefines.TVAPI_TTS_LANG_COUNT = 4;
    TtsModelDefines.TVAPI_TTS_VOICE_ANITA_USA = 0;
    TtsModelDefines.TVAPI_TTS_VOICE_MOLLY_SPA = 1;
    TtsModelDefines.TVAPI_TTS_VOICE_TYPE_COUNT = 2;
    TtsModelDefines.TVAPI_TTS_VOL_MIN = 0;
    TtsModelDefines.TVAPI_TTS_VOL_DEF = 20;
    TtsModelDefines.TVAPI_TTS_VOL_MAX = 100;
    TtsModelDefines.TVAPI_TTS_PITCH_MIN = 0;
    TtsModelDefines.TVAPI_TTS_PITCH_DEF = 33;
    TtsModelDefines.TVAPI_TTS_PITCH_MAX = 100;
    TtsModelDefines.TVAPI_TTS_SPEED_VERY_SLOW = 0;
    TtsModelDefines.TVAPI_TTS_SPEED_SLOW = 1;
    TtsModelDefines.TVAPI_TTS_SPEED_NORMAL = 2;
    TtsModelDefines.TVAPI_TTS_SPEED_FAST = 3;
    TtsModelDefines.TVAPI_TTS_SPEED_VERY_FAST = 4;
    TtsModelDefines.TVAPI_TTS_SPEED_COUN = 5;
    TtsModelDefines.TVAPI_TTS_FOCUS_SPEECH_AUDIO_OFF = 0;
    TtsModelDefines.TVAPI_TTS_FOCUS_SPEECH_AUDIO_ON = 1;
    TtsModelDefines.TVAPI_TTS_FOCUS_SPEECH_AUDIO_COUNT = 5;
    TtsModelDefines.ENUM_TVAPI_TTS_ACTION_CMD_INIT = 0;
    TtsModelDefines.ENUM_TVAPI_TTS_ACTION_CMD_PLAY_STRING = 1;
    TtsModelDefines.ENUM_TVAPI_TTS_ACTION_CMD_PLAY_STRING_TIMER = 2;
    TtsModelDefines.ENUM_TVAPI_TTS_ACTION_CMD_STOP = 3
}
function TtsModel(e) {
    SubModel.call(this, e, TtsModelDefines);
    this.registerSubObject = function (loadType) {
        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_SWITCH_STATUS, "getI32SwitchStatus", "setI32SwitchStatus", "onI32SwitchStatusChaged", null, null);

        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_LANG_IDX, "getI32LangIdx", "setI32LangIdx", "onI32LangIdxChaged", null, null);
        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_VOICE_TYPE, "getI32VoiceType", "setI32VoiceType", "onI32VoiceTypeChaged", null, null);
        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_VOLUME, "getI32Volume", "setI32Volume", "onI32VolumeChaged", null, null);
        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_PITCH, "getI32Pitch", "setI32Pitch", "onI32PitchChaged", null, null);
        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_SPEED, "getI32Speed", "setI32Speed", "onI32SpeedChaged", null, null);
        this.registerIntegerObject(TtsModelDefines.TVAPI_TTS_I32_FOCUS_SPEECH_AUDIO, "getI32FocusSpeechAudio", "setI32FocusSpeechAudio", "onI32FocusSpeechAudioChaged", null, null);
        this.registerStringObject(TtsModelDefines.TVAPI_TTS_STR_PLAY, "getStrPlay", "setStrPlay", "onStrPlayChaged", null, null);
        this.registerActionObject(TtsModelDefines.TVAPI_TTS_ACTION_CMD, [{
            name: "ActionCmd", method: function (e, T, t, _) {
                DBG_INFO("ActionCmd::" + T + t + _, DebugLevel.ALWAYS);
                return e.invoke(T, t, _)
            }
        }], "null")

    }
}
TtsModel.prototype = new SubModel;
TtsModel.prototype.constructor = TtsModel;
{
    SubModel.registerStaticConstants(TtsModel, TtsModelDefines, [])
}