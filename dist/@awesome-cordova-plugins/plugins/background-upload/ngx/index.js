import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var BackgroundUpload = /** @class */ (function (_super) {
    __extends(BackgroundUpload, _super);
    function BackgroundUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUpload.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUpload.pluginName = "BackgroundUpload";
    BackgroundUpload.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.pluginRef = "FileTransferManager";
    BackgroundUpload.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.platforms = ["Android", "iOS"];
    BackgroundUpload.decorators = [
        { type: Injectable }
    ];
    return BackgroundUpload;
}(AwesomeCordovaNativePlugin));
export { BackgroundUpload };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC11cGxvYWQvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sK0NBQXVELE1BQU0sK0JBQStCLENBQUM7QUFJcEcsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixvQ0FBcUIsQ0FBQTtJQUNyQixnQ0FBaUIsQ0FBQTtJQUNqQixzQ0FBdUIsQ0FBQTtJQUN2QiwwQ0FBMkIsQ0FBQTtBQUM3QixDQUFDLEVBTFcsV0FBVyxLQUFYLFdBQVcsUUFLdEI7O0lBd0NDLDZCQUFZLE9BQW1CO1FBQzdCLElBQUksQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRixDQUFDO0lBR0QseUNBQVcsYUFBQyxPQUEwQjtJQUt0QywwQ0FBWSxhQUFDLEVBQU87SUFLcEIsOENBQWdCLGFBQUMsRUFBVTtJQUszQixxQ0FBTzs4QkF0RVQ7Ozs7SUF3R3NDLG9DQUEwQjs7O1FBQzlELHlCQUFtQixHQUFHLG1CQUFtQixDQUFDOzs7SUFFMUMsK0JBQUksR0FBSixVQUFLLE9BQW1CO1FBQ3RCLE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7Ozs7OztnQkFORixVQUFVOzsyQkF2R1g7RUF3R3NDLDBCQUEwQjtTQUFuRCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YUluc3RhbmNlLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG5leHBvcnQgZW51bSBVcGxvYWRTdGF0ZSB7XHJcbiAgVVBMT0FERUQgPSAnVVBMT0FERUQnLFxyXG4gIEZBSUxFRCA9ICdGQUlMRUQnLFxyXG4gIFVQTE9BRElORyA9ICdVUExPQURJTkcnLFxyXG4gIElOSVRJQUxJWkVEID0gJ0lOSVRJQUxJWkVEJyxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgVXBsb2FkU3RhdGVUeXBlID0ga2V5b2YgdHlwZW9mIFVwbG9hZFN0YXRlO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVcGxvYWRFdmVudCB7XHJcbiAgaWQ/OiBzdHJpbmc7IC8vIGlkIG9mIHRoZSB1cGxvYWRcclxuICBzdGF0ZT86IFVwbG9hZFN0YXRlVHlwZTsgLy8gc3RhdGUgb2YgdGhlIHVwbG9hZCAoZWl0aGVyIFVQTE9BRElORywgVVBMT0FERUQgb3IgRkFJTEVEKVxyXG4gIHN0YXR1c0NvZGU/OiBudW1iZXI7IC8vIHJlc3BvbnNlIGNvZGUgcmV0dXJuZWQgYnkgc2VydmVyIGFmdGVyIHVwbG9hZCBpcyBjb21wbGV0ZWRcclxuICBzZXJ2ZXJSZXNwb25zZT86IGFueTsgLy8gc2VydmVyIHJlc3BvbnNlIHJlY2VpdmVkIGFmdGVyIHVwbG9hZCBpcyBjb21wbGV0ZWRcclxuICBlcnJvcj86IGFueTsgLy8gZXJyb3IgbWVzc2FnZSBpbiBjYXNlIG9mIGZhaWx1cmVcclxuICBlcnJvckNvZGU/OiBudW1iZXI7IC8vIGVycm9yIGNvZGUgZm9yIGFueSBleGNlcHRpb24gZW5jb3VudGVyZWRcclxuICBwcm9ncmVzcz86IGFueTsgLy8gcHJvZ3Jlc3MgZm9yIG9uZ29pbmcgdXBsb2FkXHJcbiAgZXZlbnRJZD86IHN0cmluZzsgLy8gaWQgb2YgdGhlIGV2ZW50XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRlRNUGF5bG9hZE9wdGlvbnMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgZmlsZVBhdGg6IHN0cmluZztcclxuICBmaWxlS2V5Pzogc3RyaW5nO1xyXG4gIHNlcnZlclVybDogc3RyaW5nO1xyXG4gIG5vdGlmaWNhdGlvblRpdGxlPzogc3RyaW5nO1xyXG4gIGhlYWRlcnM/OiB7XHJcbiAgICBbbmFtZTogc3RyaW5nXTogc3RyaW5nO1xyXG4gIH07XHJcbiAgcGFyYW1ldGVycz86IHtcclxuICAgIFtuYW1lOiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgfTtcclxuICBbcHJvcDogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZUTU9wdGlvbnMge1xyXG4gIGNhbGxCYWNrOiAoZXZlbnQ6IFVwbG9hZEV2ZW50KSA9PiBhbnk7XHJcbiAgY29uZmlnPzoge1xyXG4gICAgcGFyYWxsZWxVcGxvYWRzTGltaXQ/OiBudW1iZXI7XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZpbGVUcmFuc2Zlck1hbmFnZXIge1xyXG4gIHByaXZhdGUgX29iamVjdEluc3RhbmNlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnM6IEZUTU9wdGlvbnMpIHtcclxuICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gd2luZG93LkZpbGVUcmFuc2Zlck1hbmFnZXIuaW5pdChvcHRpb25zLmNvbmZpZywgb3B0aW9ucy5jYWxsQmFjayk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBzdGFydFVwbG9hZChwYXlsb2FkOiBGVE1QYXlsb2FkT3B0aW9ucyk6IHZvaWQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgcmVtb3ZlVXBsb2FkKGlkOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgYWNrbm93bGVkZ2VFdmVudChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIGRlc3Ryb3koKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCYWNrZ3JvdW5kVXBsb2FkXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBkb2VzIHNvbWV0aGluZ1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCYWNrZ3JvdW5kVXBsb2FkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhY2tncm91bmQtdXBsb2FkL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmFja2dyb3VuZFVwbG9hZDogQmFja2dyb3VuZFVwbG9hZCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJhY2tncm91bmRVcGxvYWQuaW5pdCh7fSlcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JhY2tncm91bmRVcGxvYWQnLFxyXG4gIHBsdWdpbjogJ0BzcG9vbmNvbnN1bHRpbmcvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxyXG4gIHBsdWdpblJlZjogJ0ZpbGVUcmFuc2Zlck1hbmFnZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc3Bvb25jb25zdWx0aW5nL2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtdXBsb2FkJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIEBzcG9vbmNvbnN1bHRpbmcvY29yZG92YS1wbHVnaW4tYmFja2dyb3VuZC11cGxvYWQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYWNrZ3JvdW5kVXBsb2FkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEZpbGVUcmFuc2Zlck1hbmFnZXIgPSBGaWxlVHJhbnNmZXJNYW5hZ2VyO1xyXG5cclxuICBpbml0KG9wdGlvbnM6IEZUTU9wdGlvbnMpOiBGaWxlVHJhbnNmZXJNYW5hZ2VyIHtcclxuICAgIHJldHVybiBuZXcgRmlsZVRyYW5zZmVyTWFuYWdlcihvcHRpb25zKTtcclxuICB9XHJcbn1cclxuIl19