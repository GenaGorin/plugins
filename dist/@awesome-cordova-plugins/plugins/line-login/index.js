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
var LineLoginOriginal = /** @class */ (function (_super) {
    __extends(LineLoginOriginal, _super);
    function LineLoginOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLoginOriginal.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLoginOriginal.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLoginOriginal.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLoginOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLoginOriginal.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLoginOriginal.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLoginOriginal.pluginName = "LineLogin";
    LineLoginOriginal.plugin = "cordova-line-login-plugin";
    LineLoginOriginal.pluginRef = "lineLogin";
    LineLoginOriginal.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLoginOriginal.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLoginOriginal.installVariables = ["LINE_CHANNEL_ID"];
    LineLoginOriginal.platforms = ["Android", "iOS"];
    return LineLoginOriginal;
}(AwesomeCordovaNativePlugin));
var LineLogin = new LineLoginOriginal();
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGluZS1sb2dpbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRjdELDZCQUEwQjs7OztJQVF2RCw4QkFBVSxhQUFDLEtBQXNCO0lBVWpDLHlCQUFLO0lBV0wsNEJBQVE7SUFVUiwwQkFBTTtJQVVOLGtDQUFjO0lBVWQscUNBQWlCO0lBVWpCLHNDQUFrQjs7Ozs7Ozs7b0JBdEpwQjtFQWlGK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblBhcmFtcyB7XHJcbiAgLyoqXHJcbiAgICogTGluZSBDaGFubmVsIElEXHJcbiAgICovXHJcbiAgY2hhbm5lbF9pZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpbmVMb2dpblByb2ZpbGUge1xyXG4gIC8qKlxyXG4gICAqIExpbmUgVXNlciBJRFxyXG4gICAqL1xyXG4gIHVzZXJJRDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMaW5lIFByb2ZpbGUgSW1hZ2UgVVJMXHJcbiAgICovXHJcbiAgcGljdHVyZVVSTDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMaW5lIFByb2ZpbGUgTmFtZVxyXG4gICAqL1xyXG4gIGRpc3BsYXlOYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtYWlsXHJcbiAgICovXHJcbiAgZW1haWw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luQWNjZXNzVG9rZW4ge1xyXG4gIC8qKlxyXG4gICAqIExpbmUgQWNjZXNzIFRva2VuXHJcbiAgICovXHJcbiAgYWNjZXNzVG9rZW46IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogTGluZSBBY2Nlc3MgVG9rZW4gRXhwaXJlIFRpbWVcclxuICAgKi9cclxuICBleHBpcmVUaW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBMaW5lIExvZ2luXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgZnVuY3Rpb24gbG9naW4sIGxvZ3Mgb3V0LCBhY3F1aXJlcywgdmVyaWZpZXMsIGFuZCByZWZyZXNoZXMgdGhlIGFjY2VzcyB0b2tlbi4gVGhlIHZlcnNpb24gb2YgTGluZVNESyB5b3UgYXJlIHVzaW5nIGlzIGFzIGZvbGxvd3MuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IExpbmVMb2dpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9saW5lLWxvZ2luL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbGluZUxvZ2luOiBMaW5lTG9naW4pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5saW5lTG9naW4uaW5pdGlhbGl6ZSh7IGNoYW5uZWxfaWQ6IFwieHh4eHh4eHh4eFwiIH0pXHJcbiAqXHJcbiAqIHRoaXMubGluZUxvZ2luLmxvZ2luKClcclxuICogICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICogICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogTGluZUxvZ2luUGFyYW1zXHJcbiAqIExpbmVMb2dpblByb2ZpbGVcclxuICogTGluZUxvZ2luQWNjZXNzVG9rZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdMaW5lTG9naW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxyXG4gIHBsdWdpblJlZjogJ2xpbmVMb2dpbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4nLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGh0dHBzOi8vZ2l0aHViLmNvbS9ucmlraWppL2NvcmRvdmEtbGluZS1sb2dpbi1wbHVnaW4uZ2l0IC0tdmFyaWFibGUgTElORV9DSEFOTkVMX0lEPVwieW91cl9saW5lX2NoYW5uZWxfaWRcIicsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydMSU5FX0NIQU5ORUxfSUQnXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTGluZUxvZ2luIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpemVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYXJhbSBMaW5lTG9naW5QYXJhbXNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0aWFsaXplKHBhcmFtOiBMaW5lTG9naW5QYXJhbXMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9naW5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dpbigpOiBQcm9taXNlPExpbmVMb2dpblByb2ZpbGU+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ2luIHdpdGggV2ViXHJcbiAgICogKGlPUyBvbmx5KVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luV2ViKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9nb3V0XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBBY2Nlc3MgVG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QWNjZXNzVG9rZW4oKTogUHJvbWlzZTxMaW5lTG9naW5BY2Nlc3NUb2tlbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZ5IEFjY2Vzc1Rva2VuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB2ZXJpZnlBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVmcmVzaCBBY2Nlc3MgVG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZnJlc2hBY2Nlc3NUb2tlbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=