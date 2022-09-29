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
var SystemAlertWindowPermissionOriginal = /** @class */ (function (_super) {
    __extends(SystemAlertWindowPermissionOriginal, _super);
    function SystemAlertWindowPermissionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermissionOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermissionOriginal.prototype.openNotificationSettings = function () { return cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermissionOriginal.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermissionOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermissionOriginal.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermissionOriginal.platforms = ["Android"];
    return SystemAlertWindowPermissionOriginal;
}(AwesomeCordovaNativePlugin));
var SystemAlertWindowPermission = new SystemAlertWindowPermissionOriginal();
export { SystemAlertWindowPermission };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW9DM0MsK0NBQTBCOzs7O0lBT3pFLG1EQUFhO0lBVWIsdURBQWlCO0lBVWpCLDhEQUF3Qjs7Ozs7OztzQ0FoRTFCO0VBcUNpRCwwQkFBMEI7U0FBOUQsMkJBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN5c3RlbSBBbGVydCBXaW5kb3cgUGVybWlzc2lvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBzb21ldGhpbmdcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N5c3RlbS1hbGVydC13aW5kb3ctcGVybWlzc2lvbi9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbjogU3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uLmhhc1Blcm1pc3Npb24oKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5zeXN0ZW1BbGVydFdpbmRvd1Blcm1pc3Npb24ucmVxdWVzdFBlcm1pc3Npb24oKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1N5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cuc3lzdGVtQWxlcnRXaW5kb3dQZXJtaXNzaW9uJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tc3lzdGVtLWFsZXJ0LXdpbmRvdy1wZXJtaXNzaW9uLmdpdCcsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1zeXN0ZW0tYWxlcnQtd2luZG93LXBlcm1pc3Npb24nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN5c3RlbUFsZXJ0V2luZG93UGVybWlzc2lvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVjayBwZXJtaXNzaW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm4gMCB3aGVuIGRvbnQgaGF2ZSBTWVNURU1fQUxFUlRfV0lORE9XIHBlcm1pc3Npb24sIDEgd2hlbiBoYXZlIFNZU1RFTV9BTEVSVF9XSU5ET1cgcGVybWlzc2lvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0IHBlcm1pc3Npb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXF1ZXN0UGVybWlzc2lvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBub3RpZmljYXRpb24gU2V0dGluZ3NcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvcGVuTm90aWZpY2F0aW9uU2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19