'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var BluetoothClassicSerialPort = /** @class */ (function (_super) {
    tslib.__extends(BluetoothClassicSerialPort, _super);
    function BluetoothClassicSerialPort() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothClassicSerialPort.prototype.connect = function (deviceId, interfaceId) { return core.cordova(this, "connect", { "platforms": ["Android", "iOS"], "observable": true }, arguments); };
    BluetoothClassicSerialPort.prototype.connectIos = function (deviceId, interfaceArray) { return core.cordova(this, "connect", { "platforms": ["iOS"], "methodName": "connect" }, arguments); };
    BluetoothClassicSerialPort.prototype.connectInsecure = function (deviceId, interfaceArray) { return core.cordova(this, "connectInsecure", { "platforms": ["Android"], "observable": true }, arguments); };
    BluetoothClassicSerialPort.prototype.disconnect = function (interfaceId) { return core.cordova(this, "disconnect", {}, arguments); };
    BluetoothClassicSerialPort.prototype.disconnectAll = function () { return core.cordova(this, "connect", { "methodName": "connect" }, arguments); };
    BluetoothClassicSerialPort.prototype.write = function (interfaceId, data) { return core.cordova(this, "write", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.available = function (interfaceId) { return core.cordova(this, "available", { "platforms": ["Android", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.read = function (interfaceId) { return core.cordova(this, "read", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.readUntil = function (interfaceId, delimiter) { return core.cordova(this, "readUntil", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.subscribe = function (interfaceId, delimiter) { return core.cordova(this, "subscribe", { "platforms": ["Android", "iOS", "Browser"], "observable": true }, arguments); };
    BluetoothClassicSerialPort.prototype.unsubscribe = function (interfaceId) { return core.cordova(this, "unsubscribe", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.subscribeRawData = function (interfaceId) { return core.cordova(this, "subscribeRawData", { "platforms": ["Android", "iOS", "Browser"], "observable": true }, arguments); };
    BluetoothClassicSerialPort.prototype.unsubscribeRawData = function (interfaceId) { return core.cordova(this, "unsubscribeRawData", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.clear = function (interfaceId) { return core.cordova(this, "clear", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.list = function () { return core.cordova(this, "list", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.isConnected = function (interfaceId) { return core.cordova(this, "isConnected", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.showBluetoothSettings = function () { return core.cordova(this, "showBluetoothSettings", { "platforms": ["Android"] }, arguments); };
    BluetoothClassicSerialPort.prototype.enable = function () { return core.cordova(this, "enable", { "platforms": ["Android", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.discoverUnpaired = function () { return core.cordova(this, "discoverUnpaired", { "platforms": ["Android", "iOS", "Browser"] }, arguments); };
    BluetoothClassicSerialPort.prototype.setDeviceDiscoveredListener = function () { return core.cordova(this, "setDeviceDiscoveredListener", { "platforms": ["Android", "iOS", "Browser"], "observable": true, "clearFunction": "clearDeviceDiscoveredListener" }, arguments); };
    BluetoothClassicSerialPort.prototype.clearDeviceDiscoveredListener = function () { return core.cordova(this, "clearDeviceDiscoveredListener", { "platforms": ["Android", "iOS", "Browser"], "sync": true }, arguments); };
    BluetoothClassicSerialPort.pluginName = "BluetoothClassicSerialPort";
    BluetoothClassicSerialPort.repo = "https://github.com/MaximBelov/cordova-plugin-bluetooth-classic-serial-port";
    BluetoothClassicSerialPort.plugin = "cordova-plugin-bluetooth-classic-serial-port";
    BluetoothClassicSerialPort.pluginRef = "bluetoothClassicSerial";
    BluetoothClassicSerialPort.platforms = ["Android", "iOS", "Browser"];
    BluetoothClassicSerialPort.decorators = [
        { type: core$1.Injectable }
    ];
    return BluetoothClassicSerialPort;
}(core.AwesomeCordovaNativePlugin));

exports.BluetoothClassicSerialPort = BluetoothClassicSerialPort;
