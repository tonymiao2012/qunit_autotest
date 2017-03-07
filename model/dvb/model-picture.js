function PictureModelDefines() {
}
{
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLIDESHOW_SPEED = "de.loewe.sl2.picture.slideshow.speed";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_CROSSOVER = "de.loewe.sl2.picture.crossover";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_AUTOROTATE = "de.loewe.sl2.picture.autorotate";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_MODE = "de.loewe.sl2.picture.mode";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SORT = "de.loewe.sl2.picture.sort";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_RUNNING = "de.loewe.sl2.picture.running";//"tvapi.i32.picture.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_RUNNING = "de.loewe.sl2.picture.action.set.running";//"tvapi.action.picture.set.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT1 = "de.loewe.sl2.picture.vstr.slot1";//"tvapi.vstr.picture.slot1";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT2 = "de.loewe.sl2.picture.vstr.slot2";//"tvapi.vstr.picture.slot2";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_HTML5_PLAY = "de.loewe.sl2.picture.vstr.html5.play";//"tvapi.vstr.picture.html5.play";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_ERROR_CODE = "de.loewe.sl2.picture.slot.error.code";//"tvapi.i32.picture.slot.error.code";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_STATE = "de.loewe.sl2.picture.slot.state";//"tvapi.i32.picture.slot.state";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT1_PROGRESS = "de.loewe.sl2.picture.i32.slot1.progress";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT2_PROGRESS = "de.loewe.sl2.picture.i32.slot2.progress";
    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_COMMAND = "de.loewe.sl2.picture.action.command";;//"tvapi.action.picture.command";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_DISPLAY_SIZE = "de.loewe.sl2.picture.display.size";
    PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_HTML5_PLAY = "de.loewe.sl2.picture.vstr.html5.play";
    PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_I32_RUNNING = "de.loewe.sl2.picture.dlna.running";//"tvapi.i32.picture.dlna.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_CLOSE = "tvapi.i32.picture.slot.close";
    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_THUMBNAIL_RUNNING = "tvapi.action.picture.set.thumbnail.running";
    PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_THUMBNAIL_COMMAND = "tvapi.action.picture.thumbnail.command";
    PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_STATE_RELEASE = 0;
    PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_STATE_RUNNING = 1;
    PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_STATE_STOP = 2
}
function PictureModel(e) {
    SubModel.call(this, e, PictureModelDefines);
    this.registerSubObject = function (loadType) {
        this.registerStringVectorObject(PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_HTML5_PLAY, "getVstrHTML5Play", "setVstrHTML5Play", "onVstrHTML5PlayChaged", null, null);
        this.registerStringVectorObject(PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT2, "getSlot2", "setSlot2", "onSlot2Changed", null, null);
        this.registerStringVectorObject(PictureModelDefines.SL2_TVAPI_PICTURE_VSTR_SLOT1, "getSlot1", "setSlot1", "onSlot1Changed", null, null);
        this.registerIntegerObject(PictureModelDefines.SL2_TVAPI_PICTURE_I32_RUNNING, "getPictureRunning", "setPictureRunning", "onPictureRunningchanged", null, null);
        this.registerIntegerObject(PictureModelDefines.SL2_TVAPI_PICTURE_I32_DISPLAY_SIZE, "getPictureSize", "setPictureSize", "onPictureSizechanged", null, null);
        this.registerIntegerObject(PictureModelDefines.SL2_TVAPI_PICTURE_DLNA_I32_RUNNING, "getDLNAPictureRunning", "setDLNAPictureRunning", "onDLNAPictureRunningchanged", null, null);
        this.registerIntegerObject(PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT1_PROGRESS, "getSLOT1Progress", "setSLOT1Progress", "onSLOT1Progresschanged", null, null);
        this.registerIntegerObject(PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT2_PROGRESS, "getSLOT2Progress", "setSLOT2Progress", "onSLOT2Progresschanged", null, null);
        this.registerIntegerObject(PictureModelDefines.SL2_TVAPI_PICTURE_I32_SLOT_CLOSE, "getSLOTClose", "setSLOTClose", "onSLOTClosechanged", null, null);
        this.registerActionObject(PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_RUNNING, [{
            name: "startPic",
            method: function (e) {
                return e.invoke("1")
            }
        }, {
            name: "stopPic", method: function (e) {
                return e.invoke("0")
            }
        }, {
            name: "decodePic", method: function (e) {
                return e.invoke("2")
            }
        }], "onPicRuningResult");
        this.registerActionObject(PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_COMMAND, [{
            name: "setPicUrl1",
            method: function (e, t) {
                return e.invoke(1, "0", t)
            }
        }, {
            name: "setPicUrl2", method: function (e, t) {
                return e.invoke(1, "1", t)
            }
        }, {
            name: "playSlot1", method: function (e) {
                return e.invoke(4, "0")
            }
        }, {
            name: "playSlot2", method: function (e) {
                return e.invoke(4, "1")
            }
        }, {
            name: "rotateSlot1", method: function (e, t) {
                return e.invoke(3, "0", t)
            }
        }, {
            name: "rotateSlot2", method: function (e, t) {
                return e.invoke(3, "1", t)
            }
        }], "onPicResult");
        this.registerActionObject(PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_SET_THUMBNAIL_RUNNING, [{
            name: "startThumbnail",
            method: function (e) {
                return e.invoke("1")
            }
        }, {
            name: "stopThumbnail", method: function (e) {
                return e.invoke("0")
            }
        }], "onThumbnailRuningResult");
        this.registerActionObject(PictureModelDefines.SL2_TVAPI_PICTURE_ACTION_THUMBNAIL_COMMAND, [{
            name: "setThumbnailUrl",
            method: function (e, t, i, n) {
                return e.invoke(t, i, n)
            }
        }], "onThumbnailResult")
    }

}
PictureModel.prototype = new SubModel;
PictureModel.prototype.constructor = PictureModel;
{
    SubModel.registerStaticConstants(PictureModel, PictureModelDefines, [])
}