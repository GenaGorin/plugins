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
var DeviceAccountsOriginal = /** @class */ (function (_super) {
    __extends(DeviceAccountsOriginal, _super);
    function DeviceAccountsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccountsOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    DeviceAccountsOriginal.prototype.getByType = function (type) { return cordova(this, "getByType", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmails = function () { return cordova(this, "getEmails", {}, arguments); };
    DeviceAccountsOriginal.prototype.getEmail = function () { return cordova(this, "getEmail", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissions = function () { return cordova(this, "getPermissions", {}, arguments); };
    DeviceAccountsOriginal.prototype.getPermissionsByType = function (type) { return cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccountsOriginal.pluginName = "DeviceAccounts";
    DeviceAccountsOriginal.plugin = "cordova-device-accounts-v2";
    DeviceAccountsOriginal.pluginRef = "DeviceAccounts";
    DeviceAccountsOriginal.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccountsOriginal.platforms = ["Android"];
    return DeviceAccountsOriginal;
}(AwesomeCordovaNativePlugin));
var DeviceAccounts = new DeviceAccountsOriginal();
export { DeviceAccounts };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlLWFjY291bnRzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlDeEQsa0NBQTBCOzs7O0lBTzVELDRCQUFHO0lBV0gsa0NBQVMsYUFBQyxJQUFZO0lBVXRCLGtDQUFTO0lBVVQsaUNBQVE7SUFVUix1Q0FBYztJQVdkLDZDQUFvQixhQUFDLElBQVk7Ozs7Ozt5QkFyR25DO0VBMENvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQW5kcm9pZEFjY291bnQge1xyXG4gIC8qKiBBY2NvdW50IGNyZWF0b3IgKi9cclxuICBDUkVBVE9SOiBBbmRyb2lkQWNjb3VudDtcclxuXHJcbiAgLyoqIEFjY291bnQgbmFtZSAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqIEFjY291bnQgdHlwZSAqL1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIERldmljZSBBY2NvdW50c1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogR2V0cyB0aGUgR29vZ2xlIGFjY291bnRzIGFzc29jaWF0ZWQgd2l0aCB0aGUgQW5kcm9pZCBkZXZpY2VcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRGV2aWNlQWNjb3VudHMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGV2aWNlLWFjY291bnRzL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlQWNjb3VudHM6IERldmljZUFjY291bnRzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZGV2aWNlQWNjb3VudHMuZ2V0KClcclxuICogICAudGhlbihhY2NvdW50cyA9PiBjb25zb2xlLmxvZyhhY2NvdW50cykpXHJcbiAqICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEFuZHJvaWRBY2NvdW50XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRGV2aWNlQWNjb3VudHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcclxuICBwbHVnaW5SZWY6ICdEZXZpY2VBY2NvdW50cycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94VW5ob2x5L2NvcmRvdmEtZGV2aWNlLWFjY291bnRzLXYyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2VBY2NvdW50cyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiAgR2V0cyBhbGwgYWNjb3VudHMgcmVnaXN0ZXJlZCBvbiB0aGUgQW5kcm9pZCBEZXZpY2VcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFuZHJvaWRBY2NvdW50W10+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXQoKTogUHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgR2V0IGFsbCBhY2NvdW50cyByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIGZvciByZXF1ZXN0ZWQgdHlwZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBbmRyb2lkQWNjb3VudFtdPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QnlUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8QW5kcm9pZEFjY291bnRbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIEdldCBhbGwgZW1haWxzIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgKGFjY291bnRzIHdpdGggJ2NvbS5nb29nbGUnIHR5cGUpXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEVtYWlscygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiAgR2V0IHRoZSBmaXJzdCBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRFbWFpbCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogIEdldCBwZXJtaXNzaW9ucyBmb3IgYWNjZXNzIHRvIGVtYWlsIHJlZ2lzdGVyZWQgb24gQW5kcm9pZCBkZXZpY2UgOC4wK1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UGVybWlzc2lvbnMoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqICBHZXQgcGVybWlzc2lvbnMgZm9yIGFjY2VzcyB0byBlbWFpbCByZWdpc3RlcmVkIG9uIEFuZHJvaWQgZGV2aWNlIDguMCsgZm9yIHJlcXVlc3RlZCB0eXBlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFBlcm1pc3Npb25zQnlUeXBlKHR5cGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==