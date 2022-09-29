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
var SafariViewControllerOriginal = /** @class */ (function (_super) {
    __extends(SafariViewControllerOriginal, _super);
    function SafariViewControllerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewControllerOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    SafariViewControllerOriginal.prototype.show = function (options) { return cordova(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewControllerOriginal.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    SafariViewControllerOriginal.prototype.connectToService = function () { return cordova(this, "connectToService", {}, arguments); };
    SafariViewControllerOriginal.prototype.warmUp = function () { return cordova(this, "warmUp", {}, arguments); };
    SafariViewControllerOriginal.prototype.mayLaunchUrl = function (url) { return cordova(this, "mayLaunchUrl", {}, arguments); };
    SafariViewControllerOriginal.pluginName = "SafariViewController";
    SafariViewControllerOriginal.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewControllerOriginal.pluginRef = "SafariViewController";
    SafariViewControllerOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewControllerOriginal.platforms = ["Android", "iOS"];
    return SafariViewControllerOriginal;
}(AwesomeCordovaNativePlugin));
var SafariViewController = new SafariViewControllerOriginal();
export { SafariViewController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2FmYXJpLXZpZXctY29udHJvbGxlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtFUSx3Q0FBMEI7Ozs7SUFPbEUsMENBQVc7SUFlWCxtQ0FBSSxhQUFDLE9BQXFDO0lBUTFDLG1DQUFJO0lBVUosK0NBQWdCO0lBVWhCLHFDQUFNO0lBWU4sMkNBQVksYUFBQyxHQUFXOzs7Ozs7K0JBbEkxQjtFQW9FMEMsMEJBQTBCO1NBQXZELG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnMge1xyXG4gIGFuaW1hdGVkPzogYm9vbGVhbjtcclxuICBiYXJDb2xvcj86IHN0cmluZztcclxuICBjb250cm9sVGludENvbG9yPzogc3RyaW5nO1xyXG4gIGVudGVyUmVhZGVyTW9kZUlmQXZhaWxhYmxlPzogYm9vbGVhbjtcclxuICBoaWRkZW4/OiBib29sZWFuO1xyXG4gIHNob3dEZWZhdWx0U2hhcmVNZW51SXRlbT86IGJvb2xlYW47XHJcbiAgdGludENvbG9yPzogc3RyaW5nO1xyXG4gIHRvb2xiYXJDb2xvcj86IHN0cmluZztcclxuICB0cmFuc2l0aW9uPzogc3RyaW5nO1xyXG4gIHVybD86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNhZmFyaSBWaWV3IENvbnRyb2xsZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEZvciBkaXNwbGF5aW5nIHJlYWQtb25seSB3ZWIgY29udGVudC5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTYWZhcmkgVmlldyBDb250cm9sbGVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXIpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTYWZhcmlWaWV3Q29udHJvbGxlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zYWZhcmktdmlldy1jb250cm9sbGVyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc2FmYXJpVmlld0NvbnRyb2xsZXI6IFNhZmFyaVZpZXdDb250cm9sbGVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc2FmYXJpVmlld0NvbnRyb2xsZXIuaXNBdmFpbGFibGUoKVxyXG4gKiAgIC50aGVuKChhdmFpbGFibGU6IGJvb2xlYW4pID0+IHtcclxuICogICAgICAgaWYgKGF2YWlsYWJsZSkge1xyXG4gKlxyXG4gKiAgICAgICAgIHRoaXMuc2FmYXJpVmlld0NvbnRyb2xsZXIuc2hvdyh7XHJcbiAqICAgICAgICAgICB1cmw6ICdodHRwOi8vaW9uaWMuaW8nLFxyXG4gKiAgICAgICAgICAgaGlkZGVuOiBmYWxzZSxcclxuICogICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZSxcclxuICogICAgICAgICAgIHRyYW5zaXRpb246ICdjdXJsJyxcclxuICogICAgICAgICAgIGVudGVyUmVhZGVyTW9kZUlmQXZhaWxhYmxlOiB0cnVlLFxyXG4gKiAgICAgICAgICAgdGludENvbG9yOiAnI2ZmMDAwMCdcclxuICogICAgICAgICB9KVxyXG4gKiAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3VsdDogYW55KSA9PiB7XHJcbiAqICAgICAgICAgICAgIGlmKHJlc3VsdC5ldmVudCA9PT0gJ29wZW5lZCcpIGNvbnNvbGUubG9nKCdPcGVuZWQnKTtcclxuICogICAgICAgICAgICAgZWxzZSBpZihyZXN1bHQuZXZlbnQgPT09ICdsb2FkZWQnKSBjb25zb2xlLmxvZygnTG9hZGVkJyk7XHJcbiAqICAgICAgICAgICAgIGVsc2UgaWYocmVzdWx0LmV2ZW50ID09PSAnY2xvc2VkJykgY29uc29sZS5sb2coJ0Nsb3NlZCcpO1xyXG4gKiAgICAgICAgICAgfSxcclxuICogICAgICAgICAgIChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgICAgICAgICk7XHJcbiAqXHJcbiAqICAgICAgIH0gZWxzZSB7XHJcbiAqICAgICAgICAgLy8gdXNlIGZhbGxiYWNrIGJyb3dzZXIsIGV4YW1wbGUgSW5BcHBCcm93c2VyXHJcbiAqICAgICAgIH1cclxuICogICAgIH1cclxuICogICApO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU2FmYXJpVmlld0NvbnRyb2xsZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU2FmYXJpVmlld0NvbnRyb2xsZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyJyxcclxuICBwbHVnaW5SZWY6ICdTYWZhcmlWaWV3Q29udHJvbGxlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNhZmFyaVZpZXdDb250cm9sbGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBTYWZhcmlWaWV3Q29udHJvbGxlciBpcyBhdmFpbGFibGVcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3dzIFNhZmFyaSBWaWV3IENvbnRyb2xsZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnN9IG9wdGlvbmFsXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHNob3cob3B0aW9ucz86IFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlcyBTYWZhcmkgVmlldyBDb250cm9sbGVyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIGNvbm5lY3QgdG8gdGhlICBDaHJvbWUncyBjdXN0b20gdGFicyBzZXJ2aWNlLiB5b3UgbXVzdCBjYWxsIHRoaXMgbWV0aG9kIGJlZm9yZSBjYWxsaW5nIGFueSBvZiB0aGUgb3RoZXIgbWV0aG9kcyBsaXN0ZWQgYmVsb3cuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjb25uZWN0VG9TZXJ2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDYWxsIHRoaXMgbWV0aG9kIHdoZW5ldmVyIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHVzZXIgd2lsbCBvcGVuIGFuIGV4dGVybmFsIHVybC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHdhcm1VcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGV2ZW4gYmV0dGVyIHBlcmZvcm1hbmNlIG9wdGltaXphdGlvbiwgY2FsbCB0aGlzIG1ldGhvZHMgaWYgdGhlcmUncyBtb3JlIHRoYW4gYSA1MCUgY2hhbmNlIHRoZSB1c2VyIHdpbGwgb3BlbiBhIGNlcnRhaW4gVVJMLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybHtzdHJpbmd9XHJcbiAgICogQHBhcmFtIHVybFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG1heUxhdW5jaFVybCh1cmw6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==