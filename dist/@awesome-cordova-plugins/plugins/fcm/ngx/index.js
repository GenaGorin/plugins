import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
var FCM = /** @class */ (function (_super) {
    __extends(FCM, _super);
    function FCM() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FCM.prototype.getAPNSToken = function () { return cordova(this, "getAPNSToken", {}, arguments); };
    FCM.prototype.getToken = function () { return cordova(this, "getToken", {}, arguments); };
    FCM.prototype.onTokenRefresh = function () { return cordova(this, "onTokenRefresh", { "observable": true }, arguments); };
    FCM.prototype.subscribeToTopic = function (topic) { return cordova(this, "subscribeToTopic", {}, arguments); };
    FCM.prototype.unsubscribeFromTopic = function (topic) { return cordova(this, "unsubscribeFromTopic", {}, arguments); };
    FCM.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    FCM.prototype.onNotification = function () { return cordova(this, "onNotification", { "observable": true, "successIndex": 0, "errorIndex": 2 }, arguments); };
    FCM.prototype.clearAllNotifications = function () { return cordova(this, "clearAllNotifications", {}, arguments); };
    FCM.prototype.requestPushPermissionIOS = function (options) { return cordova(this, "requestPushPermissionIOS", {}, arguments); };
    FCM.prototype.createNotificationChannelAndroid = function (channelConfig) { return cordova(this, "createNotificationChannelAndroid", {}, arguments); };
    FCM.pluginName = "FCM";
    FCM.plugin = "cordova-plugin-fcm-with-dependecy-updated";
    FCM.pluginRef = "FCMPlugin";
    FCM.repo = "https://github.com/andrehtissot/cordova-plugin-fcm-with-dependecy-updated";
    FCM.platforms = ["Android", "iOS"];
    FCM.decorators = [
        { type: Injectable }
    ];
    return FCM;
}(AwesomeCordovaNativePlugin));
export { FCM };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmNtL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBNkhULHVCQUEwQjs7OztJQU9qRCwwQkFBWTtJQVVaLHNCQUFRO0lBWVIsNEJBQWM7SUFXZCw4QkFBZ0IsYUFBQyxLQUFhO0lBVzlCLGtDQUFvQixhQUFDLEtBQWE7SUFhbEMsMkJBQWE7SUFjYiw0QkFBYztJQVVkLG1DQUFxQjtJQVdyQixzQ0FBd0IsYUFBQyxPQUEwQztJQWVuRSw4Q0FBZ0MsYUFBQyxhQUFvQzs7Ozs7OztnQkFuSHRFLFVBQVU7O2NBOUhYO0VBK0h5QiwwQkFBMEI7U0FBdEMsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOb3RpZmljYXRpb25EYXRhIHtcclxuICAvKipcclxuICAgKiBEZXRlcm1pbmVzIHdoZXRoZXIgdGhlIG5vdGlmaWNhdGlvbiB3YXMgcHJlc3NlZCBvciBub3RcclxuICAgKi9cclxuXHJcbiAgd2FzVGFwcGVkOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBOb3RpZmljYXRpb24gZGF0YSBoYXNoIGl0ZW1cclxuICAgKi9cclxuXHJcbiAgW25hbWU6IHN0cmluZ106IGFueTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVxdWVzdFB1c2hQZXJtaXNzaW9uSU9TT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogT3B0aW9ucyBleGNsdXNpdmUgZm9yIGlPUyA5IHN1cHBvcnRcclxuICAgKi9cclxuICBpb3M5U3VwcG9ydD86IHtcclxuICAgIC8qKlxyXG4gICAgICogSG93IGxvbmcgaXQgd2lsbCB3YWl0IGZvciBhIGRlY2lzaW9uIGZyb20gdGhlIHVzZXIgYmVmb3JlIHJldHVybmluZyBgZmFsc2VgLCBkZWZhdWx0cyB0byAxMFxyXG4gICAgICovXHJcbiAgICB0aW1lb3V0PzogbnVtYmVyO1xyXG4gICAgLyoqXHJcbiAgICAgKiBIb3cgbG9uZyBiZXR3ZWVuIGVhY2ggcGVybWlzc2lvbiB2ZXJpZmljYXRpb24sIGRlZmF1bHRzIHRvIDAuM1xyXG4gICAgICovXHJcbiAgICBpbnRlcnZhbD86IG51bWJlcjtcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElDaGFubmVsQ29uZmlndXJhdGlvbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hhbm5lbCBpZCwgdXNlZCBpbiB0aGUgYW5kcm9pZF9jaGFubmVsX2lkIHB1c2ggcGF5bG9hZCBrZXlcclxuICAgKi9cclxuICBpZDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIENoYW5uZWwgbmFtZSwgdmlzaWJsZSBmb3IgdGhlIHVzZXJcclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQ2hhbm5lbCBkZXNjcmlwdGlvbiwgdmlzaWJsZSBmb3IgdGhlIHVzZXJcclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBJbXBvcnRhbmNlIGZvciBub3RpZmljYXRpb25zIG9mIHRoaXMgY2hhbm5lbFxyXG4gICAqIGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2d1aWRlL3RvcGljcy91aS9ub3RpZmllcnMvbm90aWZpY2F0aW9ucyNpbXBvcnRhbmNlXHJcbiAgICovXHJcbiAgaW1wb3J0YW5jZT86ICdub25lJyB8ICdtaW4nIHwgJ2xvdycgfCAnZGVmYXVsdCcgfCAnaGlnaCc7XHJcbiAgLyoqXHJcbiAgICogVmlzaWJpbGl0eSBmb3Igbm90aWZpY2F0aW9ucyBvZiB0aGlzIGNoYW5uZWxcclxuICAgKiBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS90cmFpbmluZy9ub3RpZnktdXNlci9idWlsZC1ub3RpZmljYXRpb24jbG9ja3NjcmVlbk5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIHZpc2liaWxpdHk/OiAncHVibGljJyB8ICdwcml2YXRlJyB8ICdzZWNyZXQnO1xyXG4gIC8qKlxyXG4gICAqIERlZmF1bHQgc291bmQgcmVzb3VyY2UgZm9yIG5vdGlmaWNhdGlvbnMgb2YgdGhpcyBjaGFubmVsXHJcbiAgICogVGhlIGZpbGUgc2hvdWxkIGxvY2F0ZWQgYXMgcmVzb3VyY2VzL3Jhdy9bcmVzb3VyY2UgbmFtZV0ubXAzXHJcbiAgICovXHJcbiAgc291bmQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIGxpZ2h0cyBmb3Igbm90aWZpY2F0aW9ucyBvZiB0aGlzIGNoYW5uZWxcclxuICAgKi9cclxuICBsaWdodHM/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSB2aWJyYXRpb24gZm9yIG5vdGlmaWNhdGlvbnMgb2YgdGhpcyBjaGFubmVsXHJcbiAgICovXHJcbiAgdmlicmF0aW9uPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZDTVxyXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFByb3ZpZGVzIGJhc2ljIGZ1bmN0aW9uYWxpdHkgZm9yIEZpcmViYXNlIENsb3VkIE1lc3NhZ2luZ1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGQ00gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmNtL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmNtOiBGQ00pIHt9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZjbS5zdWJzY3JpYmVUb1RvcGljKCdtYXJrZXRpbmcnKTtcclxuICpcclxuICogdGhpcy5mY20uZ2V0VG9rZW4oKS50aGVuKHRva2VuID0+IHtcclxuICogICBiYWNrZW5kLnJlZ2lzdGVyVG9rZW4odG9rZW4pO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5mY20ub25Ob3RpZmljYXRpb24oKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAqICAgaWYoZGF0YS53YXNUYXBwZWQpe1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJSZWNlaXZlZCBpbiBiYWNrZ3JvdW5kXCIpO1xyXG4gKiAgIH0gZWxzZSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGluIGZvcmVncm91bmRcIik7XHJcbiAqICAgfTtcclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZmNtLm9uVG9rZW5SZWZyZXNoKCkuc3Vic2NyaWJlKHRva2VuID0+IHtcclxuICogICBiYWNrZW5kLnJlZ2lzdGVyVG9rZW4odG9rZW4pO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5mY20uaGFzUGVybWlzc2lvbigpLnRoZW4oaGFzUGVybWlzc2lvbiA9PiB7XHJcbiAqICAgaWYgKGhhc1Blcm1pc3Npb24pIHtcclxuICogICAgIGNvbnNvbGUubG9nKFwiSGFzIHBlcm1pc3Npb24hXCIpO1xyXG4gKiAgIH1cclxuICogfSlcclxuICpcclxuICogdGhpcy5mY20uY2xlYXJBbGxOb3RpZmljYXRpb25zKCk7XHJcbiAqXHJcbiAqIHRoaXMuZmNtLnVuc3Vic2NyaWJlRnJvbVRvcGljKCdtYXJrZXRpbmcnKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIE5vdGlmaWNhdGlvbkRhdGFcclxuICogSVJlcXVlc3RQdXNoUGVybWlzc2lvbklPU09wdGlvbnNcclxuICogSUNoYW5uZWxDb25maWd1cmF0aW9uXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRkNNJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mY20td2l0aC1kZXBlbmRlY3ktdXBkYXRlZCcsXHJcbiAgcGx1Z2luUmVmOiAnRkNNUGx1Z2luJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FuZHJlaHRpc3NvdC9jb3Jkb3ZhLXBsdWdpbi1mY20td2l0aC1kZXBlbmRlY3ktdXBkYXRlZCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZDTSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXRzIGlvcyBkZXZpY2UncyBjdXJyZW50IEFQTlMgdG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgQVBOUyB0b2tlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBUE5TVG9rZW4oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgZGV2aWNlJ3MgY3VycmVudCByZWdpc3RyYXRpb24gaWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVnaXN0cmF0aW9uIGlkIHRva2VuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFRva2VuKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFdmVudCBmaXJpbmcgb24gdGhlIHRva2VuIHJlZnJlc2hcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPHN0cmluZz59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHdpdGggdGhlIGNoYW5nZSBvZiBkZXZpY2UncyByZWdpc3RyYXRpb24gaWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb25Ub2tlblJlZnJlc2goKTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZXMgeW91IHRvIGEgW3RvcGljXShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9ub3RpZmljYXRpb25zL2FuZHJvaWQvY29uc29sZS10b3BpY3MpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgc3Vic2NyaWJlZCB0b1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHJlc29sdmluZyBpbiByZXN1bHQgb2Ygc3Vic2NyaWJpbmcgdG8gYSB0b3BpY1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdWJzY3JpYmVUb1RvcGljKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5zdWJzY3JpYmVzIHlvdSBmcm9tIGEgW3RvcGljXShodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy9ub3RpZmljYXRpb25zL2FuZHJvaWQvY29uc29sZS10b3BpY3MpXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdG9waWMgVG9waWMgdG8gYmUgdW5zdWJzY3JpYmVkIGZyb21cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSByZXNvbHZpbmcgaW4gcmVzdWx0IG9mIHVuc3Vic2NyaWJpbmcgZnJvbSBhIHRvcGljXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHVuc3Vic2NyaWJlRnJvbVRvcGljKHRvcGljOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tpbmcgZm9yIHBlcm1pc3Npb25zIG9uIGlPUy4gT24gYW5kcm9pZCwgaXQgYWx3YXlzIHJldHVybnMgYHRydWVgLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbiB8IG51bGw+fSBSZXR1cm5zIGEgUHJvbWlzZTpcclxuICAgKiAtIHRydWU6IHB1c2ggd2FzIGFsbG93ZWQgKG9yIHBsYXRmb3JtIGlzIGFuZHJvaWQpXHJcbiAgICogLSBmYWxzZTogcHVzaCB3aWxsIG5vdCBiZSBhdmFpbGFibGVcclxuICAgKiAtIG51bGw6IHN0aWxsIG5vdCBhbnN3ZXJlZCwgcmVjb21tZW5kZWQgY2hlY2tpbmcgYWdhaW4gbGF0ZXIuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuIHwgbnVsbD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggZm9yIGluY29taW5nIG5vdGlmaWNhdGlvbnNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IHJldHVybnMgYW4gb2JqZWN0IHdpdGggZGF0YSBmcm9tIHRoZSBub3RpZmljYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIG9uTm90aWZpY2F0aW9uKCk6IE9ic2VydmFibGU8Tm90aWZpY2F0aW9uRGF0YT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBleGlzdGluZyBwdXNoIG5vdGlmaWNhdGlvbnMgZnJvbSB0aGUgbm90aWZpY2F0aW9ucyBjZW50ZXJcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbGVhckFsbE5vdGlmaWNhdGlvbnMoKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0IHB1c2ggbm90aWZpY2F0aW9uIHBlcm1pc3Npb24sIGFsZXJ0aW5nIHRoZSB1c2VyIGlmIGl0IG5vdCBoYXZlIHlldCBkZWNpZGVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0lSZXF1ZXN0UHVzaFBlcm1pc3Npb25JT1NPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHB1c2ggcmVxdWVzdFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHBlcm1pc3Npb24gc3RhdHVzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RQdXNoUGVybWlzc2lvbklPUyhvcHRpb25zPzogSVJlcXVlc3RQdXNoUGVybWlzc2lvbklPU09wdGlvbnMpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBBbmRyb2lkLCBzb21lIG5vdGlmaWNhdGlvbiBwcm9wZXJ0aWVzIGFyZSBvbmx5IGRlZmluZWQgcHJvZ3JhbW1hdGljYWxseS5cclxuICAgKlxyXG4gICAqIENoYW5uZWwgY2FuIGRlZmluZSB0aGUgZGVmYXVsdCBiZWhhdmlvciBmb3Igbm90aWZpY2F0aW9ucyBvbiBBbmRyb2lkIDguMCsuXHJcbiAgICpcclxuICAgKiBPbmNlIGEgY2hhbm5lbCBpcyBjcmVhdGVkLCBpdCBzdGF5cyB1bmNoYW5nZWFibGUgdW50aWwgdGhlIHVzZXIgdW5pbnN0YWxscyB0aGUgYXBwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNoYW5uZWxDb25maWdcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY3JlYXRlTm90aWZpY2F0aW9uQ2hhbm5lbEFuZHJvaWQoY2hhbm5lbENvbmZpZzogSUNoYW5uZWxDb25maWd1cmF0aW9uKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==