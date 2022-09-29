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
import { AwesomeCordovaNativePlugin, cordovaInstance } from '@awesome-cordova-plugins/core';
export var UploadState;
(function (UploadState) {
    UploadState["UPLOADED"] = "UPLOADED";
    UploadState["FAILED"] = "FAILED";
    UploadState["UPLOADING"] = "UPLOADING";
    UploadState["INITIALIZED"] = "INITIALIZED";
})(UploadState || (UploadState = {}));
var FileTransferManager = /** @class */ (function () {
    function FileTransferManager(options) {
        this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
    }
    FileTransferManager.prototype.startUpload = function (payload) { return cordovaInstance(this, "startUpload", {}, arguments); };
    FileTransferManager.prototype.removeUpload = function (id) { return cordovaInstance(this, "removeUpload", {}, arguments); };
    FileTransferManager.prototype.acknowledgeEvent = function (id) { return cordovaInstance(this, "acknowledgeEvent", {}, arguments); };
    FileTransferManager.prototype.destroy = function () { return cordovaInstance(this, "destroy", {}, arguments); };
    return FileTransferManager;
}());
export { FileTransferManager };
var BackgroundUploadOriginal = /** @class */ (function (_super) {
    __extends(BackgroundUploadOriginal, _super);
    function BackgroundUploadOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUploadOriginal.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUploadOriginal.pluginName = "BackgroundUpload";
    BackgroundUploadOriginal.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.pluginRef = "FileTransferManager";
    BackgroundUploadOriginal.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUploadOriginal.platforms = ["Android", "iOS"];
    return BackgroundUploadOriginal;
}(AwesomeCordovaNativePlugin));
var BackgroundUpload = new BackgroundUploadOriginal();
export { BackgroundUpload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sK0NBQXVELE1BQU0sK0JBQStCLENBQUM7QUFJcEcsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7O0lBd0NDLDZCQUFZLE9BQW1CO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBR0QseUNBQVcsYUFBQyxPQUEwQjtJQUt0QywwQ0FBWSxhQUFDLEVBQU87SUFLcEIsOENBQWdCLGFBQUMsRUFBVTtJQUszQixxQ0FBTzs4QkF0RVQ7Ozs7SUF3R3NDLG9DQUEwQjs7O1FBQzlELHlCQUFtQixHQUFHLG1CQUFtQixDQUFDOzs7SUFFMUMsK0JBQUksR0FBSixVQUFLLE9BQW1CO1FBQ3RCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7OzJCQTdHSDtFQXdHc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhSW5zdGFuY2UsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IGFueTtcclxuXHJcbmV4cG9ydCBlbnVtIFVwbG9hZFN0YXRlIHtcclxuICBVUExPQURFRCA9ICdVUExPQURFRCcsXHJcbiAgRkFJTEVEID0gJ0ZBSUxFRCcsXHJcbiAgVVBMT0FESU5HID0gJ1VQTE9BRElORycsXHJcbiAgSU5JVElBTElaRUQgPSAnSU5JVElBTElaRUQnLFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBVcGxvYWRTdGF0ZVR5cGUgPSBrZXlvZiB0eXBlb2YgVXBsb2FkU3RhdGU7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVwbG9hZEV2ZW50IHtcclxuICBpZD86IHN0cmluZzsgLy8gaWQgb2YgdGhlIHVwbG9hZFxyXG4gIHN0YXRlPzogVXBsb2FkU3RhdGVUeXBlOyAvLyBzdGF0ZSBvZiB0aGUgdXBsb2FkIChlaXRoZXIgVVBMT0FESU5HLCBVUExPQURFRCBvciBGQUlMRUQpXHJcbiAgc3RhdHVzQ29kZT86IG51bWJlcjsgLy8gcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSBzZXJ2ZXIgYWZ0ZXIgdXBsb2FkIGlzIGNvbXBsZXRlZFxyXG4gIHNlcnZlclJlc3BvbnNlPzogYW55OyAvLyBzZXJ2ZXIgcmVzcG9uc2UgcmVjZWl2ZWQgYWZ0ZXIgdXBsb2FkIGlzIGNvbXBsZXRlZFxyXG4gIGVycm9yPzogYW55OyAvLyBlcnJvciBtZXNzYWdlIGluIGNhc2Ugb2YgZmFpbHVyZVxyXG4gIGVycm9yQ29kZT86IG51bWJlcjsgLy8gZXJyb3IgY29kZSBmb3IgYW55IGV4Y2VwdGlvbiBlbmNvdW50ZXJlZFxyXG4gIHByb2dyZXNzPzogYW55OyAvLyBwcm9ncmVzcyBmb3Igb25nb2luZyB1cGxvYWRcclxuICBldmVudElkPzogc3RyaW5nOyAvLyBpZCBvZiB0aGUgZXZlbnRcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGVE1QYXlsb2FkT3B0aW9ucyB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBmaWxlUGF0aDogc3RyaW5nO1xyXG4gIGZpbGVLZXk/OiBzdHJpbmc7XHJcbiAgc2VydmVyVXJsOiBzdHJpbmc7XHJcbiAgbm90aWZpY2F0aW9uVGl0bGU/OiBzdHJpbmc7XHJcbiAgaGVhZGVycz86IHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgfTtcclxuICBwYXJhbWV0ZXJzPzoge1xyXG4gICAgW25hbWU6IHN0cmluZ106IHN0cmluZztcclxuICB9O1xyXG4gIFtwcm9wOiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRlRNT3B0aW9ucyB7XHJcbiAgY2FsbEJhY2s6IChldmVudDogVXBsb2FkRXZlbnQpID0+IGFueTtcclxuICBjb25maWc/OiB7XHJcbiAgICBwYXJhbGxlbFVwbG9hZHNMaW1pdD86IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyTWFuYWdlciB7XHJcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3Iob3B0aW9uczogRlRNT3B0aW9ucykge1xyXG4gICAgdGhpcy5fb2JqZWN0SW5zdGFuY2UgPSB3aW5kb3cuRmlsZVRyYW5zZmVyTWFuYWdlci5pbml0KG9wdGlvbnMuY29uZmlnLCBvcHRpb25zLmNhbGxCYWNrKTtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIHN0YXJ0VXBsb2FkKHBheWxvYWQ6IEZUTVBheWxvYWRPcHRpb25zKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICByZW1vdmVVcGxvYWQoaWQ6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBhY2tub3dsZWRnZUV2ZW50KGlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZGVzdHJveSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJhY2tncm91bmRVcGxvYWRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJhY2tncm91bmRVcGxvYWQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kVXBsb2FkOiBCYWNrZ3JvdW5kVXBsb2FkKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYmFja2dyb3VuZFVwbG9hZC5pbml0KHt9KVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmFja2dyb3VuZFVwbG9hZCcsXHJcbiAgcGx1Z2luOiAnQHNwb29uY29uc3VsdGluZy9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXHJcbiAgcGx1Z2luUmVmOiAnRmlsZVRyYW5zZmVyTWFuYWdlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zcG9vbmNvbnN1bHRpbmcvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxyXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgQHNwb29uY29uc3VsdGluZy9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLXVwbG9hZCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRVcGxvYWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgRmlsZVRyYW5zZmVyTWFuYWdlciA9IEZpbGVUcmFuc2Zlck1hbmFnZXI7XHJcblxyXG4gIGluaXQob3B0aW9uczogRlRNT3B0aW9ucyk6IEZpbGVUcmFuc2Zlck1hbmFnZXIge1xyXG4gICAgcmV0dXJuIG5ldyBGaWxlVHJhbnNmZXJNYW5hZ2VyKG9wdGlvbnMpO1xyXG4gIH1cclxufVxyXG4iXX0=