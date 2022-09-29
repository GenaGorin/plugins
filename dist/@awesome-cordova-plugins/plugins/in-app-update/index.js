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
var InAppUpdateOriginal = /** @class */ (function (_super) {
    __extends(InAppUpdateOriginal, _super);
    function InAppUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppUpdateOriginal.prototype.check = function () { return cordova(this, "check", {}, arguments); };
    InAppUpdateOriginal.prototype.update = function (config) { return cordova(this, "update", { "observable": true }, arguments); };
    InAppUpdateOriginal.prototype.completeFlexibleUpdate = function () { return cordova(this, "completeFlexibleUpdate", {}, arguments); };
    InAppUpdateOriginal.pluginName = "InAppUpdate";
    InAppUpdateOriginal.plugin = "cordova-in-app-update";
    InAppUpdateOriginal.pluginRef = "window.plugins.InAppUpdate";
    InAppUpdateOriginal.repo = "https://github.com/itsLucario/cordova-app-update-plugin";
    InAppUpdateOriginal.platforms = ["Android"];
    return InAppUpdateOriginal;
}(AwesomeCordovaNativePlugin));
var InAppUpdate = new InAppUpdateOriginal();
export { InAppUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXVwZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFbEMsSUFBSyxVQUdKO0FBSEQsV0FBSyxVQUFVO0lBQ2IsbURBQVEsQ0FBQTtJQUNSLHFEQUFTLENBQUE7QUFDWCxDQUFDLEVBSEksVUFBVSxLQUFWLFVBQVUsUUFHZDtBQUVELElBQUssYUFTSjtBQVRELFdBQUssYUFBYTtJQUNoQix5REFBUSxDQUFBO0lBQ1IsNkRBQVUsQ0FBQTtJQUNWLCtEQUFXLENBQUE7SUFDWCxxREFBTSxDQUFBO0lBQ04sMkRBQVMsQ0FBQTtJQUNULDZEQUFVLENBQUE7SUFDVix1REFBTyxDQUFBO0lBQ1AsdURBQU8sQ0FBQTtBQUNULENBQUMsRUFUSSxhQUFhLEtBQWIsYUFBYSxRQVNqQjtBQUVELElBQUssa0JBS0o7QUFMRCxXQUFLLGtCQUFrQjtJQUNyQiwrSEFBc0MsQ0FBQTtJQUN0QyxpRUFBTyxDQUFBO0lBQ1AsbUZBQWdCLENBQUE7SUFDaEIsMkZBQW9CLENBQUE7QUFDdEIsQ0FBQyxFQUxJLGtCQUFrQixLQUFsQixrQkFBa0IsUUFLdEI7Ozs7d0JBaENEOzs7O0lBMkRpQywrQkFBMEI7Ozs7SUFPekQsMkJBQUs7SUFZTCw0QkFBTSxhQUFDLE1BQWdEO0lBVXZELDRDQUFzQjs7Ozs7O3NCQXhGeEI7RUEyRGlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFBsdWdpbixcclxuICBDb3Jkb3ZhLFxyXG4gIENvcmRvdmFQcm9wZXJ0eSxcclxuICBDb3Jkb3ZhSW5zdGFuY2UsXHJcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcclxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmVudW0gVXBkYXRlVHlwZSB7XHJcbiAgRkxFWElCTEUsXHJcbiAgSU1NRURJQVRFLFxyXG59XHJcblxyXG5lbnVtIEluc3RhbGxTdGF0dXMge1xyXG4gIENBTkNFTEVELFxyXG4gIERPV05MT0FERUQsXHJcbiAgRE9XTkxPQURJTkcsXHJcbiAgRkFJTEVELFxyXG4gIElOU1RBTExFRCxcclxuICBJTlNUQUxMSU5HLFxyXG4gIFBFTkRJTkcsXHJcbiAgVU5LTk9XTixcclxufVxyXG5cclxuZW51bSBVcGRhdGVBdmFpbGFiaWxpdHkge1xyXG4gIERFVkVMT1BFUl9UUklHR0VSRURfVVBEQVRFX0lOX1BST0dSRVNTLFxyXG4gIFVOS05PV04sXHJcbiAgVVBEQVRFX0FWQUlMQUJMRSxcclxuICBVUERBVEVfTk9UX0FWQUlMQUJMRSxcclxufVxyXG5cclxuY2xhc3MgQXBwVXBkYXRlSW5mbyB7XHJcbiAgdXBkYXRlVHlwZTogVXBkYXRlVHlwZTtcclxuICBpbnN0YWxsU3RhdHVzOiBJbnN0YWxsU3RhdHVzO1xyXG4gIGF2YWlsYWJsZVZlcnNpb25Db2RlOiBudW1iZXI7XHJcbiAgYnl0ZXNEb3dubG9hZGVkOiBudW1iZXI7XHJcbiAgdG90YWxCeXRlc1RvRG93bmxvYWQ6IG51bWJlcjtcclxuICBjbGllbnRWZXJzaW9uU3RhbGVuZXNzRGF5czogbnVtYmVyO1xyXG4gIHBhY2thZ2VOYW1lOiBzdHJpbmc7XHJcbiAgdXBkYXRlQXZhaWxhYmlsaXR5OiBVcGRhdGVBdmFpbGFiaWxpdHk7XHJcbiAgaW5zdGFsbEVycm9yQ29kZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgSW4gQXBwIFVwZGF0ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW5nIGVuYWJlbHMgSW4gYXBwIHVwZGF0ZSBGb3IgY29yZG92YS5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbkFwcFVwZGF0ZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1pbi1hcHAtdXBkYXRlJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuSW5BcHBVcGRhdGUnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pdHNMdWNhcmlvL2NvcmRvdmEtYXBwLXVwZGF0ZS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluQXBwVXBkYXRlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIElmIHlvdSB3YW50IHRoZSB1c2VyIHRvIGJlIHByb21wdGVkIGFib3V0IG5ldyB2ZXJzaW9uIGluZm9ybWF0aW9uIGJlZm9yZSBpbml0aWF0aW5nIHRoZSB1cGRhdGUsIHlvdSBjYW4gdXNlIGBjaGVja2AgdG8gcmV0cml2ZSB0aGUgbmV3IGFwcCB2ZXJzaW9uIGluZm9ybWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QXBwVXBkYXRlSW5mbz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBuZXcgYXBwIHZlcnNpb24gdXBkYXRlIGRldGFpbHNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hlY2soKTogUHJvbWlzZTxBcHBVcGRhdGVJbmZvPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBVcGRhdGUgRmxvdyB3aXRoIFwiRkxFWElCTEVcIiB8IFwiSU1NRURJQVRFXCIgdXBkYXRlVHlwZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSBjb25maWcudXBkYXRlVHlwZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPEFwcFVwZGF0ZUluZm8+fSBSZXR1cm5zIGEgT2JzZXJ2YWJsZSBjYW4gYmUgc3Vic2NyaWJlZCB0byBnZXQgdXBkYXRlIGluc3RhbGwgc3RhdGVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IG9ic2VydmFibGU6IHRydWUgfSlcclxuICB1cGRhdGUoY29uZmlnOiB7IHVwZGF0ZVR5cGU6ICdGTEVYSUJMRScgfCAnSU1NRURJQVRFJyB9KTogT2JzZXJ2YWJsZTxBcHBVcGRhdGVJbmZvPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGbGV4aWJsZSB1cGRhdGVzIHByb3ZpZGUgYmFja2dyb3VuZCBkb3dubG9hZC4gT25jZSBmbGV4aWJsZSB1cGRhdGUgY29tcGxldGVzIHRoZSBkb3dubG9hZCBpbiBiYWNrZ3JvdW5kLCBjb21wbGV0aW9uIG9mIHVwZ3JhZGUgY2FuIGJlIGluaXRpYXRlZCBieSBjYWxsaW5nIGBjb21wbGV0ZUZsZXhpYmxlVXBkYXRlYC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIFJldHVybnMgZW1wdHkgcmVzcG9uc2UsIGZpcmUgYW5kIGZvcmdldFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjb21wbGV0ZUZsZXhpYmxlVXBkYXRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==