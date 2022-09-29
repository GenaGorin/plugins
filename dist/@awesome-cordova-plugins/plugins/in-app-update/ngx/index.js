import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["FLEXIBLE"] = 0] = "FLEXIBLE";
    UpdateType[UpdateType["IMMEDIATE"] = 1] = "IMMEDIATE";
})(UpdateType || (UpdateType = {}));
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["CANCELED"] = 0] = "CANCELED";
    InstallStatus[InstallStatus["DOWNLOADED"] = 1] = "DOWNLOADED";
    InstallStatus[InstallStatus["DOWNLOADING"] = 2] = "DOWNLOADING";
    InstallStatus[InstallStatus["FAILED"] = 3] = "FAILED";
    InstallStatus[InstallStatus["INSTALLED"] = 4] = "INSTALLED";
    InstallStatus[InstallStatus["INSTALLING"] = 5] = "INSTALLING";
    InstallStatus[InstallStatus["PENDING"] = 6] = "PENDING";
    InstallStatus[InstallStatus["UNKNOWN"] = 7] = "UNKNOWN";
})(InstallStatus || (InstallStatus = {}));
var UpdateAvailability;
(function (UpdateAvailability) {
    UpdateAvailability[UpdateAvailability["DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS"] = 0] = "DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS";
    UpdateAvailability[UpdateAvailability["UNKNOWN"] = 1] = "UNKNOWN";
    UpdateAvailability[UpdateAvailability["UPDATE_AVAILABLE"] = 2] = "UPDATE_AVAILABLE";
    UpdateAvailability[UpdateAvailability["UPDATE_NOT_AVAILABLE"] = 3] = "UPDATE_NOT_AVAILABLE";
})(UpdateAvailability || (UpdateAvailability = {}));
var AppUpdateInfo = /** @class */ (function () {
    function AppUpdateInfo() {
    }
    return AppUpdateInfo;
}());
export { AppUpdateInfo };
var InAppUpdate = /** @class */ (function (_super) {
    __extends(InAppUpdate, _super);
    function InAppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppUpdate.prototype.check = function () { return cordova(this, "check", {}, arguments); };
    InAppUpdate.prototype.update = function (config) { return cordova(this, "update", { "observable": true }, arguments); };
    InAppUpdate.prototype.completeFlexibleUpdate = function () { return cordova(this, "completeFlexibleUpdate", {}, arguments); };
    InAppUpdate.pluginName = "InAppUpdate";
    InAppUpdate.plugin = "cordova-in-app-update";
    InAppUpdate.pluginRef = "window.plugins.InAppUpdate";
    InAppUpdate.repo = "https://github.com/itsLucario/cordova-app-update-plugin";
    InAppUpdate.platforms = ["Android"];
    InAppUpdate.decorators = [
        { type: Injectable }
    ];
    return InAppUpdate;
}(AwesomeCordovaNativePlugin));
export { InAppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXVwZGF0ZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ2IsbURBQVEsQ0FBQTtJQUNSLHFEQUFTLENBQUE7QUFDWCxDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUVELElBQUssYUFTSjtBQVRELFdBQUssYUFBYTtJQUNoQix5REFBUSxDQUFBO0lBQ1IsNkRBQVUsQ0FBQTtJQUNWLCtEQUFXLENBQUE7SUFDWCxxREFBTSxDQUFBO0lBQ04sMkRBQVMsQ0FBQTtJQUNULDZEQUFVLENBQUE7SUFDVix1REFBTyxDQUFBO0lBQ1AsdURBQU8sQ0FBQTtBQUNULENBQUMsRUFUSSxhQUFhLEtBQWIsYUFBYSxRQVNqQjtBQUVELElBQUssa0JBS0o7QUFMRCxXQUFLLGtCQUFrQjtJQUNyQiwrSEFBc0MsQ0FBQTtJQUN0QyxpRUFBTyxDQUFBO0lBQ1AsbUZBQWdCLENBQUE7SUFDaEIsMkZBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQUxJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLdEI7Ozs7d0JBaENEOzs7O0lBMkRpQywrQkFBMEI7Ozs7SUFPekQsMkJBQUs7SUFZTCw0QkFBTSxhQUFDLE1BQWdEO0lBVXZELDRDQUFzQjs7Ozs7OztnQkE5QnZCLFVBQVU7O3NCQTFEWDtFQTJEaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgUGx1Z2luLFxyXG4gIENvcmRvdmEsXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZW51bSBVcGRhdGVUeXBlIHtcclxuICBGTEVYSUJMRSxcclxuICBJTU1FRElBVEUsXHJcbn1cclxuXHJcbmVudW0gSW5zdGFsbFN0YXR1cyB7XHJcbiAgQ0FOQ0VMRUQsXHJcbiAgRE9XTkxPQURFRCxcclxuICBET1dOTE9BRElORyxcclxuICBGQUlMRUQsXHJcbiAgSU5TVEFMTEVELFxyXG4gIElOU1RBTExJTkcsXHJcbiAgUEVORElORyxcclxuICBVTktOT1dOLFxyXG59XHJcblxyXG5lbnVtIFVwZGF0ZUF2YWlsYWJpbGl0eSB7XHJcbiAgREVWRUxPUEVSX1RSSUdHRVJFRF9VUERBVEVfSU5fUFJPR1JFU1MsXHJcbiAgVU5LTk9XTixcclxuICBVUERBVEVfQVZBSUxBQkxFLFxyXG4gIFVQREFURV9OT1RfQVZBSUxBQkxFLFxyXG59XHJcblxyXG5jbGFzcyBBcHBVcGRhdGVJbmZvIHtcclxuICB1cGRhdGVUeXBlOiBVcGRhdGVUeXBlO1xyXG4gIGluc3RhbGxTdGF0dXM6IEluc3RhbGxTdGF0dXM7XHJcbiAgYXZhaWxhYmxlVmVyc2lvbkNvZGU6IG51bWJlcjtcclxuICBieXRlc0Rvd25sb2FkZWQ6IG51bWJlcjtcclxuICB0b3RhbEJ5dGVzVG9Eb3dubG9hZDogbnVtYmVyO1xyXG4gIGNsaWVudFZlcnNpb25TdGFsZW5lc3NEYXlzOiBudW1iZXI7XHJcbiAgcGFja2FnZU5hbWU6IHN0cmluZztcclxuICB1cGRhdGVBdmFpbGFiaWxpdHk6IFVwZGF0ZUF2YWlsYWJpbGl0eTtcclxuICBpbnN0YWxsRXJyb3JDb2RlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBJbiBBcHAgVXBkYXRlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbmcgZW5hYmVscyBJbiBhcHAgdXBkYXRlIEZvciBjb3Jkb3ZhLlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0luQXBwVXBkYXRlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWluLWFwcC11cGRhdGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cucGx1Z2lucy5JbkFwcFVwZGF0ZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2l0c0x1Y2FyaW8vY29yZG92YS1hcHAtdXBkYXRlLXBsdWdpbicsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW5BcHBVcGRhdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSWYgeW91IHdhbnQgdGhlIHVzZXIgdG8gYmUgcHJvbXB0ZWQgYWJvdXQgbmV3IHZlcnNpb24gaW5mb3JtYXRpb24gYmVmb3JlIGluaXRpYXRpbmcgdGhlIHVwZGF0ZSwgeW91IGNhbiB1c2UgYGNoZWNrYCB0byByZXRyaXZlIHRoZSBuZXcgYXBwIHZlcnNpb24gaW5mb3JtYXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBcHBVcGRhdGVJbmZvPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIG5ldyBhcHAgdmVyc2lvbiB1cGRhdGUgZGV0YWlsc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjaGVjaygpOiBQcm9taXNlPEFwcFVwZGF0ZUluZm8+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYXRlIFVwZGF0ZSBGbG93IHdpdGggXCJGTEVYSUJMRVwiIHwgXCJJTU1FRElBVEVcIiB1cGRhdGVUeXBlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICogQHBhcmFtIGNvbmZpZy51cGRhdGVUeXBlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QXBwVXBkYXRlSW5mbz59IFJldHVybnMgYSBPYnNlcnZhYmxlIGNhbiBiZSBzdWJzY3JpYmVkIHRvIGdldCB1cGRhdGUgaW5zdGFsbCBzdGF0ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgb2JzZXJ2YWJsZTogdHJ1ZSB9KVxyXG4gIHVwZGF0ZShjb25maWc6IHsgdXBkYXRlVHlwZTogJ0ZMRVhJQkxFJyB8ICdJTU1FRElBVEUnIH0pOiBPYnNlcnZhYmxlPEFwcFVwZGF0ZUluZm8+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZsZXhpYmxlIHVwZGF0ZXMgcHJvdmlkZSBiYWNrZ3JvdW5kIGRvd25sb2FkLiBPbmNlIGZsZXhpYmxlIHVwZGF0ZSBjb21wbGV0ZXMgdGhlIGRvd25sb2FkIGluIGJhY2tncm91bmQsIGNvbXBsZXRpb24gb2YgdXBncmFkZSBjYW4gYmUgaW5pdGlhdGVkIGJ5IGNhbGxpbmcgYGNvbXBsZXRlRmxleGlibGVVcGRhdGVgLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMgUmV0dXJucyBlbXB0eSByZXNwb25zZSwgZmlyZSBhbmQgZm9yZ2V0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvbXBsZXRlRmxleGlibGVVcGRhdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19