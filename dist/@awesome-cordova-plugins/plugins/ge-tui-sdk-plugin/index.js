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
var GeTuiSdkPluginOriginal = /** @class */ (function (_super) {
    __extends(GeTuiSdkPluginOriginal, _super);
    function GeTuiSdkPluginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPluginOriginal.prototype.callback_init = function (callback) { return cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.initialize = function () { return cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPluginOriginal.prototype.getClientId = function () { return cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPluginOriginal.prototype.getVersion = function () { return cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPluginOriginal.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPluginOriginal.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPluginOriginal.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPluginOriginal.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPluginOriginal.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPluginOriginal.platforms = ["Android", "iOS"];
    return GeTuiSdkPluginOriginal;
}(AwesomeCordovaNativePlugin));
var GeTuiSdkPlugin = new GeTuiSdkPluginOriginal();
export { GeTuiSdkPlugin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2UtdHVpLXNkay1wbHVnaW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBdUN4RCxrQ0FBMEI7Ozs7SUFFNUQsc0NBQWEsYUFBQyxRQUFrQjtJQU9oQyxtQ0FBVTtJQUtWLG9DQUFXO0lBS1gsbUNBQVU7Ozs7Ozs7O3lCQTNEWjtFQXdDb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgR2UgVHVpIFNkayBQbHVnaW5cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGRvZXMgc29tZXRoaW5nXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEdlVHVpU2RrUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2dlLXR1aS1zZGstcGx1Z2luJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBnZVR1aVNka1BsdWdpbjogR2VUdWlTZGtQbHVnaW4pIHsgfVxyXG4gKlxyXG4gKiAgdGhpcy5nZVR1aVNka1BsdWdpbi5jYWxsYmFja19pbml0KChyZXMpID0+IHsgY29uc29sZS5sb2cocmVzKX0pO1xyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uaW5pdGlhbGl6ZSgpO1xyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogIHRoaXMuZ2VUdWlTZGtQbHVnaW4uZ2V0Q2xpZW50SWQoKTtcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqICB0aGlzLmdlVHVpU2RrUGx1Z2luLmdldFZlcnNpb24oKTtcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0dlVHVpU2RrUGx1Z2luJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkaycsXHJcbiAgcGx1Z2luUmVmOiAnR2VUdWlTZGtQbHVnaW4nLFxyXG4gIHJlcG86ICdnaXRAZ2l0aHViLmNvbTpHZXR1aUxhYm9yYXRvcnkvY29yZG92YS1wbHVnaW4tZ2V0dWlzZGsuZ2l0JyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nZXR1aXNkayAtLXZhcmlhYmxlIFBVU0hfQVBQSUQ9eW91ciBhcHBpZCAtLXZhcmlhYmxlIFBVU0hfQVBQS0VZPXlvdXIgYXBwa2V5IC0tdmFyaWFibGUgUFVTSF9BUFBTRUNSRVQ9eW91ciBhcHBzZWNyZXQnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnUFVTSF9BUFBJRCcsICdQVVNIX0FQUEtFWScsICdQVVNIX0FQUFNFQ1JFVCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHZVR1aVNka1BsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgY2FsbGJhY2tfaW5pdChjYWxsYmFjazogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGluaXRpYWxpemUoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0Q2xpZW50SWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWZXJzaW9uKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==