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
var AppCenterOriginal = /** @class */ (function (_super) {
    __extends(AppCenterOriginal, _super);
    function AppCenterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterOriginal.prototype.getInstallId = function () { return cordova(this, "getInstallId", {}, arguments); };
    AppCenterOriginal.prototype.setUserId = function (userId) { return cordova(this, "setUserId", {}, arguments); };
    AppCenterOriginal.pluginName = "AppCenter";
    AppCenterOriginal.plugin = "cordova-plugin-appcenter-shared";
    AppCenterOriginal.pluginRef = "AppCenter";
    AppCenterOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared";
    AppCenterOriginal.platforms = ["Android", "iOS"];
    return AppCenterOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenter = new AppCenterOriginal();
export { AppCenter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1zaGFyZWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBc0M3RCw2QkFBMEI7Ozs7SUFRdkQsZ0NBQVk7SUFZWiw2QkFBUyxhQUFDLE1BQWM7Ozs7OztvQkEzRDFCO0VBdUMrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBcHAgQ2VudGVyIFNoYXJlZFxyXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEV4cG9zZXMgYWRkaXRpb25hbCBzaGFyZWQgQVBJcyBmb3IgQXBwIENlbnRlci5cclxuICpcclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL290aGVyLWFwaXMvY29yZG92YVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBDZW50ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1zaGFyZWQvbmd4JztcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ2VudGVyU2hhcmVkOiBBcHBDZW50ZXIpIHsgfVxyXG4gKlxyXG4gKiBhc3luYyBnZXRJbnN0YWxsSWQoKSB7XHJcbiAqICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmFwcENlbnRlci5nZXRJbnN0YWxsSWQoKTtcclxuICogfVxyXG4gKlxyXG4gKiBhc3luYyBzZXRVc2VySWQoKSB7XHJcbiAqICAgdHJ5e1xyXG4gKiAgICAgYXdhaXQgdGhpcy5hcHBDZW50ZXIuc2V0VXNlcklkKCdpLWFtLWpvaG4nKTtcclxuICogICB9IGNhdGNoIChlKXtcclxuICogICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBcHBDZW50ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1zaGFyZWQnLFxyXG4gIHBsdWdpblJlZjogJ0FwcENlbnRlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1zaGFyZWQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBDZW50ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBBcHBDZW50ZXIgVVVJRC5cclxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy9hcHBjZW50ZXIvc2RrL290aGVyLWFwaXMvY29yZG92YSNpZGVudGlmeS1pbnN0YWxsYXRpb25zXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBJbnN0YWxsIElEXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEluc3RhbGxJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGEgdXNlciBJRCB0aGF0J3MgdXNlZCB0byBhdWdtZW50IGNyYXNoIHJlcG9ydHMuXHJcbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZTogaHR0cHM6Ly9kb2NzLm1pY3Jvc29mdC5jb20vZW4tdXMvYXBwY2VudGVyL3Nkay9vdGhlci1hcGlzL2NvcmRvdmEjaWRlbnRpZnktdXNlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWQgRXguIFwieW91ci11c2VyLWlkXCJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==