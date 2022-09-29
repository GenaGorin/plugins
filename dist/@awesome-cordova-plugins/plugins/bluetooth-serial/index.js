var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var BluetoothSerialOriginal = /** @class */ (function (_super) {
    __extends(BluetoothSerialOriginal, _super);
    function BluetoothSerialOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BluetoothSerialOriginal.prototype.connect = function (macAddress_or_uuid) { return cordova(this, "connect", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "disconnect" }, arguments); };
    BluetoothSerialOriginal.prototype.connectInsecure = function (macAddress) { return cordova(this, "connectInsecure", { "platforms": ["Android"], "observable": true, "clearFunction": "disconnect" }, arguments); };
    BluetoothSerialOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    BluetoothSerialOriginal.prototype.write = function (data) { return cordova(this, "write", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.available = function () { return cordova(this, "available", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.read = function () { return cordova(this, "read", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.readUntil = function (delimiter) { return cordova(this, "readUntil", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.subscribe = function (delimiter) { return cordova(this, "subscribe", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    BluetoothSerialOriginal.prototype.subscribeRawData = function () { return cordova(this, "subscribeRawData", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "unsubscribeRawData" }, arguments); };
    BluetoothSerialOriginal.prototype.clear = function () { return cordova(this, "clear", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.list = function () { return cordova(this, "list", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.isConnected = function () { return cordova(this, "isConnected", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.readRSSI = function () { return cordova(this, "readRSSI", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.showBluetoothSettings = function () { return cordova(this, "showBluetoothSettings", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.enable = function () { return cordova(this, "enable", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.discoverUnpaired = function () { return cordova(this, "discoverUnpaired", { "platforms": ["Android", "iOS", "Windows Phone"] }, arguments); };
    BluetoothSerialOriginal.prototype.setDeviceDiscoveredListener = function () { return cordova(this, "setDeviceDiscoveredListener", { "platforms": ["Android", "iOS", "Windows Phone"], "observable": true, "clearFunction": "clearDeviceDiscoveredListener" }, arguments); };
    BluetoothSerialOriginal.prototype.setName = function (newName) { return cordova(this, "setName", { "platforms": ["Android"], "sync": true }, arguments); };
    BluetoothSerialOriginal.prototype.setDiscoverable = function (discoverableDuration) { return cordova(this, "setDiscoverable", { "platforms": ["Android"], "sync": true }, arguments); };
    BluetoothSerialOriginal.pluginName = "BluetoothSerial";
    BluetoothSerialOriginal.repo = "https://github.com/don/BluetoothSerial";
    BluetoothSerialOriginal.plugin = "cordova-plugin-bluetooth-serial";
    BluetoothSerialOriginal.pluginRef = "bluetoothSerial";
    BluetoothSerialOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return BluetoothSerialOriginal;
}(AwesomeCordovaNativePlugin));
var BluetoothSerial = new BluetoothSerialOriginal();
export { BluetoothSerial };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmx1ZXRvb3RoLXNlcmlhbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXNDRyxtQ0FBMEI7Ozs7SUFZN0QsaUNBQU8sYUFBQyxrQkFBMEI7SUFlbEMseUNBQWUsYUFBQyxVQUFrQjtJQVVsQyxvQ0FBVTtJQWFWLCtCQUFLLGFBQUMsSUFBUztJQVlmLG1DQUFTO0lBWVQsOEJBQUk7SUFhSixtQ0FBUyxhQUFDLFNBQWlCO0lBZTNCLG1DQUFTLGFBQUMsU0FBaUI7SUFjM0IsMENBQWdCO0lBWWhCLCtCQUFLO0lBWUwsOEJBQUk7SUFZSixtQ0FBUztJQVlULHFDQUFXO0lBWVgsa0NBQVE7SUFZUiwrQ0FBcUI7SUFZckIsZ0NBQU07SUFZTiwwQ0FBZ0I7SUFjaEIscURBQTJCO0lBYTNCLGlDQUFPLGFBQUMsT0FBZTtJQVd2Qix5Q0FBZSxhQUFDLG9CQUE0Qjs7Ozs7OzBCQWxTOUM7RUF3Q3FDLDBCQUEwQjtTQUFsRCxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQmx1ZXRvb3RoIFNlcmlhbFxyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZW5hYmxlcyBzZXJpYWwgY29tbXVuaWNhdGlvbiBvdmVyIEJsdWV0b290aC4gSXQgd2FzIHdyaXR0ZW4gZm9yIGNvbW11bmljYXRpbmcgYmV0d2VlbiBBbmRyb2lkIG9yIGlPUyBhbmQgYW4gQXJkdWlubyAobm90IEFuZHJvaWQgdG8gQW5kcm9pZCBvciBpT1MgdG8gaU9TKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmx1ZXRvb3RoU2VyaWFsIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JsdWV0b290aC1zZXJpYWwvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibHVldG9vdGhTZXJpYWw6IEJsdWV0b290aFNlcmlhbCkgeyB9XHJcbiAqXHJcbiAqXHJcbiAqIC8vIFdyaXRlIGEgc3RyaW5nXHJcbiAqIHRoaXMuYmx1ZXRvb3RoU2VyaWFsLndyaXRlKCdoZWxsbyB3b3JsZCcpLnRoZW4oc3VjY2VzcywgZmFpbHVyZSk7XHJcbiAqXHJcbiAqIC8vIEFycmF5IG9mIGludCBvciBieXRlc1xyXG4gKiB0aGlzLmJsdWV0b290aFNlcmlhbC53cml0ZShbMTg2LCAyMjAsIDIyMl0pLnRoZW4oc3VjY2VzcywgZmFpbHVyZSk7XHJcbiAqXHJcbiAqIC8vIFR5cGVkIEFycmF5XHJcbiAqIHZhciBkYXRhID0gbmV3IFVpbnQ4QXJyYXkoNCk7XHJcbiAqIGRhdGFbMF0gPSAweDQxO1xyXG4gKiBkYXRhWzFdID0gMHg0MjtcclxuICogZGF0YVsyXSA9IDB4NDM7XHJcbiAqIGRhdGFbM10gPSAweDQ0O1xyXG4gKiB0aGlzLmJsdWV0b290aFNlcmlhbC53cml0ZShkYXRhKS50aGVuKHN1Y2Nlc3MsIGZhaWx1cmUpO1xyXG4gKlxyXG4gKiAvLyBBcnJheSBCdWZmZXJcclxuICogdGhpcy5ibHVldG9vdGhTZXJpYWwud3JpdGUoZGF0YS5idWZmZXIpLnRoZW4oc3VjY2VzcywgZmFpbHVyZSk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JsdWV0b290aFNlcmlhbCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9kb24vQmx1ZXRvb3RoU2VyaWFsJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1ibHVldG9vdGgtc2VyaWFsJyxcclxuICBwbHVnaW5SZWY6ICdibHVldG9vdGhTZXJpYWwnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmx1ZXRvb3RoU2VyaWFsIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbm5lY3QgdG8gYSBCbHVldG9vdGggZGV2aWNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWFjQWRkcmVzc19vcl91dWlkIElkZW50aWZpZXIgb2YgdGhlIHJlbW90ZSBkZXZpY2VcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBTdWJzY3JpYmUgdG8gY29ubmVjdCwgdW5zdWJzY3JpYmUgdG8gZGlzY29ubmVjdC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNjb25uZWN0JyxcclxuICB9KVxyXG4gIGNvbm5lY3QobWFjQWRkcmVzc19vcl91dWlkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29ubmVjdCBpbnNlY3VyZWx5IHRvIGEgQmx1ZXRvb3RoIGRldmljZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hY0FkZHJlc3MgSWRlbnRpZmllciBvZiB0aGUgcmVtb3RlIGRldmljZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFN1YnNjcmliZSB0byBjb25uZWN0LCB1bnN1YnNjcmliZSB0byBkaXNjb25uZWN0LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ2Rpc2Nvbm5lY3QnLFxyXG4gIH0pXHJcbiAgY29ubmVjdEluc2VjdXJlKG1hY0FkZHJlc3M6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNjb25uZWN0IGZyb20gdGhlIGNvbm5lY3RlZCBkZXZpY2VcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlcyBkYXRhIHRvIHRoZSBzZXJpYWwgcG9ydFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9IGRhdGEgQXJyYXlCdWZmZXIgb2YgZGF0YVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHdoZW4gZGF0YSBoYXMgYmVlbiB3cml0dGVuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICB9KVxyXG4gIHdyaXRlKGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBudW1iZXIgb2YgYnl0ZXMgb2YgZGF0YSBhdmFpbGFibGVcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgY29udGFpbnMgdGhlIGF2YWlsYWJsZSBieXRlc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXHJcbiAgfSlcclxuICBhdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWRzIGRhdGEgZnJvbSB0aGUgYnVmZmVyXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGRhdGEgZnJvbSB0aGUgYnVmZmVyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICB9KVxyXG4gIHJlYWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWRzIGRhdGEgZnJvbSB0aGUgYnVmZmVyIHVudGlsIGl0IHJlYWNoZXMgYSBkZWxpbWl0ZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgc3RyaW5nIHRoYXQgeW91IHdhbnQgdG8gc2VhcmNoIHVudGlsXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxyXG4gIH0pXHJcbiAgcmVhZFVudGlsKGRlbGltaXRlcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byBiZSBub3RpZmllZCB3aGVuIGRhdGEgaXMgcmVjZWl2ZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkZWxpbWl0ZXIgdGhlIHN0cmluZyB5b3Ugd2FudCB0byB3YXRjaCBmb3JcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGFuIG9ic2VydmFibGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmUnLFxyXG4gIH0pXHJcbiAgc3Vic2NyaWJlKGRlbGltaXRlcjogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byBiZSBub3RpZmllZCB3aGVuIGRhdGEgaXMgcmVjZWl2ZWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3Vuc3Vic2NyaWJlUmF3RGF0YScsXHJcbiAgfSlcclxuICBzdWJzY3JpYmVSYXdEYXRhKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgZGF0YSBpbiBidWZmZXJcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlIHdoZW4gY29tcGxldGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICB9KVxyXG4gIGNsZWFyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMaXN0cyBib25kZWQgZGV2aWNlc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxyXG4gIH0pXHJcbiAgbGlzdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVwb3J0cyBpZiBibHVldG9vdGggaXMgZW5hYmxlZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxyXG4gIH0pXHJcbiAgaXNFbmFibGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXBvcnRzIHRoZSBjb25uZWN0aW9uIHN0YXR1c1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gcmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSddLFxyXG4gIH0pXHJcbiAgaXNDb25uZWN0ZWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWRzIHRoZSBSU1NJIGZyb20gdGhlIGNvbm5lY3RlZCBwZXJpcGhlcmFsXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXHJcbiAgfSlcclxuICByZWFkUlNTSSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgQmx1ZXRvb3RoIHNldHRpbmdzIG9uIHRoZSBkZXZpY2VcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICB9KVxyXG4gIHNob3dCbHVldG9vdGhTZXR0aW5ncygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIEJsdWV0b290aCBvbiB0aGUgZGV2aWNlXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lJ10sXHJcbiAgfSlcclxuICBlbmFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2NvdmVyIHVucGFpcmVkIGRldmljZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IHJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICB9KVxyXG4gIGRpc2NvdmVyVW5wYWlyZWQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byBiZSBub3RpZmllZCBvbiBCbHVldG9vdGggZGV2aWNlIGRpc2NvdmVyeS4gRGlzY292ZXJ5IHByb2Nlc3MgbXVzdCBiZSBpbml0aWF0ZWQgd2l0aCB0aGUgYGRpc2NvdmVyVW5wYWlyZWRgIGZ1bmN0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MgUGhvbmUnXSxcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnY2xlYXJEZXZpY2VEaXNjb3ZlcmVkTGlzdGVuZXInLFxyXG4gIH0pXHJcbiAgc2V0RGV2aWNlRGlzY292ZXJlZExpc3RlbmVyKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSBodW1hbiByZWFkYWJsZSBkZXZpY2UgbmFtZSB0aGF0IGlzIGJyb2FkY2FzdGVkIHRvIG90aGVyIGRldmljZXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdOYW1lIERlc2lyZWQgbmFtZSBvZiBkZXZpY2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNldE5hbWUobmV3TmFtZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBNYWtlcyB0aGUgZGV2aWNlIGRpc2NvdmVyYWJsZSBieSBvdGhlciBkZXZpY2VzXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGlzY292ZXJhYmxlRHVyYXRpb24gRGVzaXJlZCBudW1iZXIgb2Ygc2Vjb25kcyBkZXZpY2Ugc2hvdWxkIGJlIGRpc2NvdmVyYWJsZSBmb3JcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNldERpc2NvdmVyYWJsZShkaXNjb3ZlcmFibGVEdXJhdGlvbjogbnVtYmVyKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==