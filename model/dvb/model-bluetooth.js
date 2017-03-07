function BluetoothModelDefines() {
}
{
    BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_ENABLE = "tvapi.i32.bluetooth.devices.enable";
    BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_ENABLE_RESULT = "tvapi.i32.bluetooth.enable.result";
    BluetoothModelDefines.SL2_TVAPI_ACTION_BLUETOOTH_DEVICES_SEARCH = "de.loewe.sl2.action.bluetooth.devices.search";
    BluetoothModelDefines.SL2_TVAPI_VSTR_BT_GET_PARIED_DEVICES = "tvapi.vstr.bt_get_paired_devices";
    BluetoothModelDefines.SL2_TVAPI_VSTR_BLUETOOTH_DEVICES_SEARCH = "tvapi.vstr.bluetooth.devices.search";
    BluetoothModelDefines.SL2_TVAPI_VSTR_BLUETOOTH_DEVICES_UNPAIRED = "tvapi.vstr.bluetooth.devices.unpaired";
    BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_BIND = "tvapi.i32.bluetooth.devices.bind";
    BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_UNBIND = "tvapi.i32.bluetooth.devices.unbind";
    BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_CONNECT = "de.loewe.i32.bluetooth.devices.connect";
    BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_DISCONNECT = "tvapi.i32.bluetooth.devices.disconnect";
    BluetoothModelDefines.SL2_TVAPI_STR_BLUETOOTH_DEVICES_PASSWD = "tvapi.str.bluetooth.devices.passwd";
    BluetoothModelDefines.SL2_TVAPI_ACTION_BLUETOOTH_KEY_PRESS = "tvapi.action.bluetooth.key.press";
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_CONNECT_SUCCESS = 0;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_CONNECT_FAILED = 1;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_BIND_SUCCESS = 2;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_BIND_FAILED = 3;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_UNBIND_SUCCESS = 4;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_RESULT_UNBIND_FAILED = 5;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_CMD_ENABLE = 0;
    BluetoothModelDefines.SL2_TVAPI_BLUETOOTH_CMD_DISABLE = 1
}
function BluetoothModel(e) {
    SubModel.call(this, e, BluetoothModelDefines);
    this.registerSubObject = function () {
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_ENABLE, "getDevicesEnable", "setDevicesEnable", "onDevicesEnableChaged", null, null);
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_ENABLE_RESULT, "getEnableResult", "setEnableResult", "onEnableResultChaged", null, null);
        this.registerActionObject(BluetoothModelDefines.SL2_TVAPI_ACTION_BLUETOOTH_DEVICES_SEARCH, [{
            name: "DevicesSearchAction",
            method: function (e) {
                return e.invoke()
            }
        }], "DevicesSearchResult");
        this.registerStringVectorObject(BluetoothModelDefines.SL2_TVAPI_VSTR_BT_GET_PARIED_DEVICES, "getPairedDevice", "setPairedDevice", "onChagedPairedDevice", null, null);
        this.registerStringVectorObject(BluetoothModelDefines.SL2_TVAPI_VSTR_BLUETOOTH_DEVICES_SEARCH, "getDevicesSearch", "setDevicesSearch", "onDevicesSearchChaged", null, null);
        this.registerStringVectorObject(BluetoothModelDefines.SL2_TVAPI_VSTR_BLUETOOTH_DEVICES_UNPAIRED, "getDevicesUnpaired", "setDevicesUnpaired", "onDevicesUnpairedChaged", null, null);
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_BIND, "getDevicesBind", "setDevicesBind", "onDevicesBindChaged", null, null);
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_UNBIND, "getDevicesUnbind", "setDevicesUnbind", "onDevicesUnbindChaged", null, null);
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_CONNECT, "getDevicesConnect", "setDevicesConnect", "onDevicesConnectChaged", null, null);
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_I32_BLUETOOTH_DEVICES_DISCONNECT, "getDevicesDisconnect", "setDevicesDisconnect", "onDevicesDisconnectChaged", null, null);
        this.registerIntegerObject(BluetoothModelDefines.SL2_TVAPI_STR_BLUETOOTH_DEVICES_PASSWD, "getDevicesPassWd", "setDevicesPassWd", "onDevicesPassWdChaged", null, null);
        this.registerActionObject(BluetoothModelDefines.SL2_TVAPI_ACTION_BLUETOOTH_KEY_PRESS, [{
            name: "sendKeyToBluetooth",
            method: function (e,key) {
                return e.invoke(key)
            }
        }], "null");

    }
}
BluetoothModel.prototype = new SubModel;
BluetoothModel.prototype.constructor = BluetoothModel;
{
    SubModel.registerStaticConstants(BluetoothModel, BluetoothModelDefines, [])
}