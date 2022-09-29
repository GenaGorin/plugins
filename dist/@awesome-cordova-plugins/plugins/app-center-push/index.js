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
var AppCenterPushOriginal = /** @class */ (function (_super) {
    __extends(AppCenterPushOriginal, _super);
    function AppCenterPushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPushOriginal.prototype.addEventListener = function (eventName) { return cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPushOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterPushOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterPushOriginal.pluginName = "AppCenterPush";
    AppCenterPushOriginal.plugin = "cordova-plugin-appcenter-push";
    AppCenterPushOriginal.pluginRef = "AppCenter.Push";
    AppCenterPushOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPushOriginal.platforms = ["Android", "iOS"];
    return AppCenterPushOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenterPush = new AppCenterPushOriginal();
export { AppCenterPush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0NDLGlDQUEwQjs7OztJQVczRCx3Q0FBZ0IsYUFBQyxTQUFpQjtJQVNsQyxpQ0FBUztJQVdULGtDQUFVLGFBQUMsWUFBcUI7Ozs7Ozt3QkFqRWxDO0VBa0NtQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFwcCBDZW50ZXIgUHVzaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL3B1c2gvY29yZG92YVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBDZW50ZXJQdXNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC1jZW50ZXItcHVzaC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFwcENlbnRlclB1c2g6IEFwcENlbnRlclB1c2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5hcHBDZW50ZXJQdXNoLnNldEVuYWJsZWQodHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAqICAgIHRoaXMuYXBwQ2VudGVyUHVzaC5hZGRFdmVudExpc3RlbmVyKCdNeSBFdmVudCcpLnN1YnNjcmliZShwdXNoTm90aWZpY2F0aW9uID0+IHtcclxuICogICAgICAgIGNvbnNvbGUubG9nKCdSZWNpdmVkIHB1c2ggbm90aWZpY2F0aW9uJywgcHVzaE5vdGlmaWNhdGlvbik7XHJcbiAqICAgIH0pO1xyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyUHVzaCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXB1c2gnLFxyXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlci5QdXNoJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLXB1c2gnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXJQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7c3RyaW5nfSBldmVudE5hbWUgRXZlbnQgbmFtZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVFdmVudExpc3RlbmVyJyxcclxuICB9KVxyXG4gIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnROYW1lOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBBcHAgQ2VudGVyIFB1c2ggaXMgZW5hYmxlZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBvciBkaXNhYmxlIEFwcCBDZW50ZXIgUHVzaCBhdCBydW50aW1lXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==