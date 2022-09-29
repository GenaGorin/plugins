import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var LineLogin = /** @class */ (function (_super) {
    __extends(LineLogin, _super);
    function LineLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLogin.prototype.initialize = function (param) { return cordova(this, "initialize", {}, arguments); };
    LineLogin.prototype.login = function () { return cordova(this, "login", {}, arguments); };
    LineLogin.prototype.loginWeb = function () { return cordova(this, "loginWeb", {}, arguments); };
    LineLogin.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    LineLogin.prototype.getAccessToken = function () { return cordova(this, "getAccessToken", {}, arguments); };
    LineLogin.prototype.verifyAccessToken = function () { return cordova(this, "verifyAccessToken", {}, arguments); };
    LineLogin.prototype.refreshAccessToken = function () { return cordova(this, "refreshAccessToken", {}, arguments); };
    LineLogin.pluginName = "LineLogin";
    LineLogin.plugin = "cordova-line-login-plugin";
    LineLogin.pluginRef = "lineLogin";
    LineLogin.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLogin.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLogin.installVariables = ["LINE_CHANNEL_ID"];
    LineLogin.platforms = ["Android", "iOS"];
    LineLogin.decorators = [
        { type: Injectable }
    ];
    return LineLogin;
}(AwesomeCordovaNativePlugin));
export { LineLogin };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGluZS1sb2dpbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRjdELDZCQUEwQjs7OztJQVF2RCw4QkFBVSxhQUFDLEtBQXNCO0lBVWpDLHlCQUFLO0lBV0wsNEJBQVE7SUFVUiwwQkFBTTtJQVVOLGtDQUFjO0lBVWQscUNBQWlCO0lBVWpCLHNDQUFrQjs7Ozs7Ozs7O2dCQXRFbkIsVUFBVTs7b0JBaEZYO0VBaUYrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luUGFyYW1zIHtcclxuICAvKipcclxuICAgKiBMaW5lIENoYW5uZWwgSURcclxuICAgKi9cclxuICBjaGFubmVsX2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGluZUxvZ2luUHJvZmlsZSB7XHJcbiAgLyoqXHJcbiAgICogTGluZSBVc2VyIElEXHJcbiAgICovXHJcbiAgdXNlcklEOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbmUgUHJvZmlsZSBJbWFnZSBVUkxcclxuICAgKi9cclxuICBwaWN0dXJlVVJMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbmUgUHJvZmlsZSBOYW1lXHJcbiAgICovXHJcbiAgZGlzcGxheU5hbWU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWxcclxuICAgKi9cclxuICBlbWFpbD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMaW5lTG9naW5BY2Nlc3NUb2tlbiB7XHJcbiAgLyoqXHJcbiAgICogTGluZSBBY2Nlc3MgVG9rZW5cclxuICAgKi9cclxuICBhY2Nlc3NUb2tlbjogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMaW5lIEFjY2VzcyBUb2tlbiBFeHBpcmUgVGltZVxyXG4gICAqL1xyXG4gIGV4cGlyZVRpbWU6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExpbmUgTG9naW5cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBmdW5jdGlvbiBsb2dpbiwgbG9ncyBvdXQsIGFjcXVpcmVzLCB2ZXJpZmllcywgYW5kIHJlZnJlc2hlcyB0aGUgYWNjZXNzIHRva2VuLiBUaGUgdmVyc2lvbiBvZiBMaW5lU0RLIHlvdSBhcmUgdXNpbmcgaXMgYXMgZm9sbG93cy5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTGluZUxvZ2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xpbmUtbG9naW4vbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsaW5lTG9naW46IExpbmVMb2dpbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmxpbmVMb2dpbi5pbml0aWFsaXplKHsgY2hhbm5lbF9pZDogXCJ4eHh4eHh4eHh4XCIgfSlcclxuICpcclxuICogdGhpcy5saW5lTG9naW4ubG9naW4oKVxyXG4gKiAgIC50aGVuKHJlc3VsdCA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBMaW5lTG9naW5QYXJhbXNcclxuICogTGluZUxvZ2luUHJvZmlsZVxyXG4gKiBMaW5lTG9naW5BY2Nlc3NUb2tlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0xpbmVMb2dpbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbicsXHJcbiAgcGx1Z2luUmVmOiAnbGluZUxvZ2luJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25yaWtpamkvY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbicsXHJcbiAgaW5zdGFsbDpcclxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgaHR0cHM6Ly9naXRodWIuY29tL25yaWtpamkvY29yZG92YS1saW5lLWxvZ2luLXBsdWdpbi5naXQgLS12YXJpYWJsZSBMSU5FX0NIQU5ORUxfSUQ9XCJ5b3VyX2xpbmVfY2hhbm5lbF9pZFwiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0xJTkVfQ0hBTk5FTF9JRCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMaW5lTG9naW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhcmFtIExpbmVMb2dpblBhcmFtc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXRpYWxpemUocGFyYW06IExpbmVMb2dpblBhcmFtcyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dpblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8TGluZUxvZ2luUHJvZmlsZT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luKCk6IFByb21pc2U8TGluZUxvZ2luUHJvZmlsZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9naW4gd2l0aCBXZWJcclxuICAgKiAoaU9TIG9ubHkpXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9naW5XZWIoKTogUHJvbWlzZTxMaW5lTG9naW5Qcm9maWxlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dvdXRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IEFjY2VzcyBUb2tlblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8TGluZUxvZ2luQWNjZXNzVG9rZW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBY2Nlc3NUb2tlbigpOiBQcm9taXNlPExpbmVMb2dpbkFjY2Vzc1Rva2VuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZnkgQWNjZXNzVG9rZW5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHZlcmlmeUFjY2Vzc1Rva2VuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWZyZXNoIEFjY2VzcyBUb2tlblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVmcmVzaEFjY2Vzc1Rva2VuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==