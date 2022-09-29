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
export var EnumResolution;
(function (EnumResolution) {
    EnumResolution[EnumResolution["RESOLUTION_AUTO"] = 0] = "RESOLUTION_AUTO";
    EnumResolution[EnumResolution["RESOLUTION_480P"] = 1] = "RESOLUTION_480P";
    EnumResolution[EnumResolution["RESOLUTION_720P"] = 2] = "RESOLUTION_720P";
    EnumResolution[EnumResolution["RESOLUTION_1080P"] = 3] = "RESOLUTION_1080P";
    EnumResolution[EnumResolution["RESOLUTION_2K"] = 4] = "RESOLUTION_2K";
    EnumResolution[EnumResolution["RESOLUTION_4K"] = 5] = "RESOLUTION_4K";
})(EnumResolution || (EnumResolution = {}));
var BarcodeScannerOriginal = /** @class */ (function (_super) {
    __extends(BarcodeScannerOriginal, _super);
    function BarcodeScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BarcodeScannerOriginal.prototype.init = function (license) { return cordova(this, "init", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.initRuntimeSettingsWithString = function (settings) { return cordova(this, "initRuntimeSettingsWithString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.outputSettingsToString = function () { return cordova(this, "outputSettingsToString", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.destroy = function () { return cordova(this, "destroy", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.startScanning = function (options) { return cordova(this, "startScanning", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    BarcodeScannerOriginal.prototype.stopScanning = function () { return cordova(this, "stopScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.resumeScanning = function () { return cordova(this, "resumeScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.pauseScanning = function () { return cordova(this, "pauseScanning", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.getResolution = function () { return cordova(this, "getResolution", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.switchTorch = function (desiredStatus) { return cordova(this, "switchTorch", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.setZoom = function (factor) { return cordova(this, "setZoom", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.prototype.setFocus = function (point) { return cordova(this, "setFocus", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    BarcodeScannerOriginal.pluginName = "dynamsoft-barcode-scanner";
    BarcodeScannerOriginal.plugin = "cordova-plugin-dynamsoft-barcode-reader";
    BarcodeScannerOriginal.pluginRef = "cordova.plugins.DBR";
    BarcodeScannerOriginal.repo = "https://github.com/xulihang/cordova-plugin-dynamsoft-barcode-reader";
    BarcodeScannerOriginal.install = "";
    BarcodeScannerOriginal.installVariables = [];
    BarcodeScannerOriginal.platforms = ["Android", "iOS"];
    return BarcodeScannerOriginal;
}(AwesomeCordovaNativePlugin));
var BarcodeScanner = new BarcodeScannerOriginal();
export { BarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFrQ2xDLE1BQU0sQ0FBTixJQUFZLGNBT1g7QUFQRCxXQUFZLGNBQWM7SUFDeEIseUVBQW1CLENBQUE7SUFDbkIseUVBQW1CLENBQUE7SUFDbkIseUVBQW1CLENBQUE7SUFDbkIsMkVBQW9CLENBQUE7SUFDcEIscUVBQWlCLENBQUE7SUFDakIscUVBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQVBXLGNBQWMsS0FBZCxjQUFjLFFBT3pCOztJQWtDbUMsa0NBQTBCOzs7O0lBVTVELDZCQUFJLGFBQUMsT0FBZTtJQWFwQixzREFBNkIsYUFBQyxRQUFpQjtJQVMvQywrQ0FBc0I7SUFTdEIsZ0NBQU87SUFjUCxzQ0FBYSxhQUFDLE9BQXFCO0lBU25DLHFDQUFZO0lBU1osdUNBQWM7SUFTZCxzQ0FBYTtJQVNiLHNDQUFhO0lBVWIsb0NBQVcsYUFBQyxhQUFxQjtJQVVqQyxnQ0FBTyxhQUFDLE1BQWM7SUFVdEIsaUNBQVEsYUFBQyxLQUErQjs7Ozs7Ozs7eUJBN00xQztFQW9Gb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgUGx1Z2luLFxyXG4gIENvcmRvdmEsXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIGRjZUxpY2Vuc2U6IExpY2Vuc2Ugb2YgRHluYW1zb2Z0IENhbWVyYSBFbmhhbmNlclxyXG4gKiByZXNvbHV0aW9uOiB1c2UgRW51bVJlc29sdXRpb25cclxuICogcm90YXRlOiBjb252ZXJ0IGZyYW1lIHRvIGJpdG1hcCBhbmQgcm90YXRlIGl0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5PcHRpb25zIHtcclxuICBkY2VMaWNlbnNlPzogc3RyaW5nO1xyXG4gIHJlc29sdXRpb24/OiBudW1iZXI7XHJcbiAgcm90YXRlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGcmFtZVJlc3VsdCB7XHJcbiAgZnJhbWVXaWR0aDogbnVtYmVyO1xyXG4gIGZyYW1lSGVpZ2h0OiBudW1iZXI7XHJcbiAgZnJhbWVSb3RhdGlvbjogbnVtYmVyO1xyXG4gIHJlc3VsdHM6IEJhcmNvZGVSZXN1bHRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVzdWx0IHtcclxuICBiYXJjb2RlVGV4dDogc3RyaW5nO1xyXG4gIGJhcmNvZGVGb3JtYXQ6IHN0cmluZztcclxuICBiYXJjb2RlQnl0ZXNCYXNlNjQ/OiBzdHJpbmc7XHJcbiAgeDE6IG51bWJlcjtcclxuICB4MjogbnVtYmVyO1xyXG4gIHgzOiBudW1iZXI7XHJcbiAgeDQ6IG51bWJlcjtcclxuICB5MTogbnVtYmVyO1xyXG4gIHkyOiBudW1iZXI7XHJcbiAgeTM6IG51bWJlcjtcclxuICB5NDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBFbnVtUmVzb2x1dGlvbiB7XHJcbiAgUkVTT0xVVElPTl9BVVRPID0gMCxcclxuICBSRVNPTFVUSU9OXzQ4MFAgPSAxLFxyXG4gIFJFU09MVVRJT05fNzIwUCA9IDIsXHJcbiAgUkVTT0xVVElPTl8xMDgwUCA9IDMsXHJcbiAgUkVTT0xVVElPTl8ySyA9IDQsXHJcbiAgUkVTT0xVVElPTl80SyA9IDUsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBkeW5hbXNvZnQtYmFyY29kZS1zY2FubmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBzY2FucyBiYXJjb2RlcyB1c2luZyBEeW5hbXNvZnQgQmFyY29kZSBSZWFkZXJcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9keW5hbXNvZnQtYmFyY29kZS1zY2FubmVyJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkeW5hbXNvZnQtYmFyY29kZS1zY2FubmVyOiBkeW5hbXNvZnQtYmFyY29kZS1zY2FubmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGF3YWl0IHRoaXMuZHluYW1zb2Z0LWJhcmNvZGUtc2Nhbm5lci5pbml0KFwibGljZW5zZVwiKTtcclxuICogdGhpcy5keW5hbXNvZnQtYmFyY29kZS1zY2FubmVyLnN0YXJ0U2Nhbm5pbmcoXCJsaWNlbnNlXCIpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcbiAgIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdkeW5hbXNvZnQtYmFyY29kZS1zY2FubmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1keW5hbXNvZnQtYmFyY29kZS1yZWFkZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5EQlInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veHVsaWhhbmcvY29yZG92YS1wbHVnaW4tZHluYW1zb2Z0LWJhcmNvZGUtcmVhZGVyJyxcclxuICBpbnN0YWxsOiAnJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZSBEeW5hbXNvZnQgQmFyY29kZSBSZWFkZXJcclxuICAgKiBAcGFyYW0gbGljZW5zZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSBpbml0aWFsaXphdGlvbiBpcyBkb25lXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIGluaXQobGljZW5zZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB1cCBydW50aW1lIHNldHRpbmdzXHJcbiAgICogQHBhcmFtIHNldHRpbmdzIHtzdHJpbmd9IHJ1bnRpbWUgc2V0dGluZ3MgdGVtcGxhdGUgaW4gSlNPTlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgaW5pdFJ1bnRpbWVTZXR0aW5nc1dpdGhTdHJpbmcoc2V0dGluZ3M/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3V0cHV0IHJ1bnRpbWUgc2V0dGluZ3MgdG8gSlNPTiBzdHJpbmdcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPFN0cmluZz59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzdWNjZXNzSW5kZXg6IDEsIGVycm9ySW5kZXg6IDIgfSlcclxuICBvdXRwdXRTZXR0aW5nc1RvU3RyaW5nKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBkZXN0cm95IER5bmFtc29mdCBCYXJjb2RlIFJlYWRlclxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMSwgZXJyb3JJbmRleDogMiB9KVxyXG4gIGRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHN0YXJ0IHRoZSBjYW1lcmEgdG8gc2NhbiBiYXJjb2Rlc1xyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTY2FuT3B0aW9uc31cclxuICAgKiBAcmV0dXJuIHtPYnNlcnZhYmxlPEZyYW1lUmVzdWx0Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHN0YXJ0U2Nhbm5pbmcob3B0aW9ucz86IFNjYW5PcHRpb25zKTogT2JzZXJ2YWJsZTxGcmFtZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc3RvcCBzY2FubmluZ1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN1Y2Nlc3NJbmRleDogMSwgZXJyb3JJbmRleDogMiB9KVxyXG4gIHN0b3BTY2FubmluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcmVzdW1lIHNjYW5uaW5nXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAxLCBlcnJvckluZGV4OiAyIH0pXHJcbiAgcmVzdW1lU2Nhbm5pbmcoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHBhdXNlIHNjYW5uaW5nXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAxLCBlcnJvckluZGV4OiAyIH0pXHJcbiAgcGF1c2VTY2FubmluZygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZ2V0IHJlc29sdXRpb24gbGlrZTogMTI4MHg3MjBcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzdWNjZXNzSW5kZXg6IDEsIGVycm9ySW5kZXg6IDIgfSlcclxuICBnZXRSZXNvbHV0aW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzd2l0Y2ggdG9yY2hcclxuICAgKiBAcGFyYW0gZGVzaXJlZFN0YXR1cyB7c3RyaW5nfSBvbiBvciBvZmZcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzdWNjZXNzSW5kZXg6IDEsIGVycm9ySW5kZXg6IDIgfSlcclxuICBzd2l0Y2hUb3JjaChkZXNpcmVkU3RhdHVzOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0IHpvb21cclxuICAgKiBAcGFyYW0gZmFjdG9yIHtudW1iZXJ9IHpvb20gZmFjdG9yXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3VjY2Vzc0luZGV4OiAxLCBlcnJvckluZGV4OiAyIH0pXHJcbiAgc2V0Wm9vbShmYWN0b3I6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZXQgZm9jdXNcclxuICAgKiBAcGFyYW0gcG9pbnQgZm9jdXMgcG9pbnRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzdWNjZXNzSW5kZXg6IDEsIGVycm9ySW5kZXg6IDIgfSlcclxuICBzZXRGb2N1cyhwb2ludDogeyB4OiBudW1iZXI7IHk6IG51bWJlciB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19