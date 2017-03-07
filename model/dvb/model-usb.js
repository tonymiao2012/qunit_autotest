function UsbModelDefines() {
}
{
    UsbModelDefines.SL2_TVAPI_USB_TABLE_MAIN = "tvapi.table.usb.main";
    UsbModelDefines.SL2_TVAPI_USB_ACTION_DELETE_PVR = "tvapi.action.usb.delete.pvr";
    UsbModelDefines.SL2_TVAPI_USB_VSTR_LATEST_EVENT = "tvapi.vstr.usb.latest.event";
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_PATH = 0;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_TYPE = 1;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_ISDIR = 2;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_SEARCH_KEYWORD = 3;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_FILE_TYPE = 4;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_FILE_SIZE = 5;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_FILE_MOD_TIME = 6;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_FILE_NAME = 7;
    UsbModelDefines.SL2_TVAPI_USB_TABLE_FIELD_FILE_URL = 8;

    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_NONE = 0;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PHOTO = 1;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_VIDEO = 2;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_MUSIC = 3;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_PVR = 4;
    UsbModelDefines.SL2_TVAPI_USB_FILE_TYPE_ALL = 5
}
function UsbModel(e) {
    SubModel.call(this, e, UsbModelDefines);
    this.registerSubObject = function (loadType) {

        this.registerTableObject(UsbModelDefines.SL2_TVAPI_USB_TABLE_MAIN, "creatUSBTableMainIterator");
        this.registerActionObject(UsbModelDefines.SL2_TVAPI_USB_ACTION_DELETE_PVR, [{
            name: "deletePVR",
            method: function (e, _) {
                return e.invoke(_)
            }
        }], "deletePVRHandler");
        this.registerStringVectorObject(UsbModelDefines.SL2_TVAPI_USB_VSTR_LATEST_EVENT, "getVstrLatestEvent", "setVstrLatestEvent", "onVstrLatestEventChaged", null, null)

    }
}
UsbModel.prototype = new SubModel;
UsbModel.prototype.constructor = UsbModel;
{
    SubModel.registerStaticConstants(UsbModel, UsbModelDefines, [])
}