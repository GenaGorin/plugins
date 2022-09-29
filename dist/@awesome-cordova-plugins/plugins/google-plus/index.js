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
var GooglePlusOriginal = /** @class */ (function (_super) {
    __extends(GooglePlusOriginal, _super);
    function GooglePlusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GooglePlusOriginal.prototype.login = function (options) { return cordova(this, "login", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    GooglePlusOriginal.prototype.trySilentLogin = function (options) { return cordova(this, "trySilentLogin", {}, arguments); };
    GooglePlusOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    GooglePlusOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    GooglePlusOriginal.prototype.getSigningCertificateFingerprint = function () { return cordova(this, "getSigningCertificateFingerprint", {}, arguments); };
    GooglePlusOriginal.pluginName = "GooglePlus";
    GooglePlusOriginal.plugin = "cordova-plugin-googleplus";
    GooglePlusOriginal.pluginRef = "window.plugins.googleplus";
    GooglePlusOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-googleplus";
    GooglePlusOriginal.install = "ionic cordova plugin add cordova-plugin-googleplus --variable REVERSED_CLIENT_ID=myreversedclientid";
    GooglePlusOriginal.installVariables = ["REVERSED_CLIENT_ID"];
    GooglePlusOriginal.platforms = ["Android", "iOS"];
    return GooglePlusOriginal;
}(AwesomeCordovaNativePlugin));
var GooglePlus = new GooglePlusOriginal();
export { GooglePlus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLXBsdXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNkI1RCw4QkFBMEI7Ozs7SUFXeEQsMEJBQUssYUFBQyxPQUFZO0lBV2xCLG1DQUFjLGFBQUMsT0FBYTtJQVU1QiwyQkFBTTtJQVVOLCtCQUFVO0lBVVYscURBQWdDOzs7Ozs7OztxQkFsRmxDO0VBOEJnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBHb29nbGUgUGx1c1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgR29vZ2xlUGx1cyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nb29nbGUtcGx1cy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGdvb2dsZVBsdXM6IEdvb2dsZVBsdXMpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5nb29nbGVQbHVzLmxvZ2luKHt9KVxyXG4gKiAgIC50aGVuKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5lcnJvcihlcnIpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnR29vZ2xlUGx1cycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZ29vZ2xlcGx1cycsXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnBsdWdpbnMuZ29vZ2xlcGx1cycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1nb29nbGVwbHVzJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdvb2dsZXBsdXMgLS12YXJpYWJsZSBSRVZFUlNFRF9DTElFTlRfSUQ9bXlyZXZlcnNlZGNsaWVudGlkJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1JFVkVSU0VEX0NMSUVOVF9JRCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVQbHVzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2dpbiBmdW5jdGlvbiB3YWxrcyB0aGUgdXNlciB0aHJvdWdoIHRoZSBHb29nbGUgQXV0aCBwcm9jZXNzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICBsb2dpbihvcHRpb25zOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogWW91IGNhbiBjYWxsIHRyeVNpbGVudExvZ2luIHRvIGNoZWNrIGlmIHRoZXkncmUgYWxyZWFkeSBzaWduZWQgaW4gdG8gdGhlIGFwcCBhbmQgc2lnbiB0aGVtIGluIHNpbGVudGx5IGlmIHRoZXkgYXJlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0cnlTaWxlbnRMb2dpbihvcHRpb25zPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgd2lsbCBjbGVhciB0aGUgT0F1dGgyIHRva2VuLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9nb3V0KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIHdpbGwgY2xlYXIgdGhlIE9BdXRoMiB0b2tlbiwgZm9yZ2V0IHdoaWNoIGFjY291bnQgd2FzIHVzZWQgdG8gbG9naW4sIGFuZCBkaXNjb25uZWN0IHRoYXQgYWNjb3VudCBmcm9tIHRoZSBhcHAuIFRoaXMgd2lsbCByZXF1aXJlIHRoZSB1c2VyIHRvIGFsbG93IHRoZSBhcHAgYWNjZXNzIGFnYWluIG5leHQgdGltZSB0aGV5IHNpZ24gaW4uIEJlIGF3YXJlIHRoYXQgdGhpcyBlZmZlY3QgaXMgbm90IGFsd2F5cyBpbnN0YW50YW5lb3VzLiBJdCBjYW4gdGFrZSB0aW1lIHRvIGNvbXBsZXRlbHkgZGlzY29ubmVjdC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgd2lsbCByZXRyaWV2ZSB0aGUgQW5kcm9pZCBzaWduaW5nIGNlcnRpZmljYXRlIGZpbmdlcnByaW50IHdoaWNoIGlzIHJlcXVpcmVkIGluIHRoZSBHb29nbGUgRGV2ZWxvcGVyIENvbnNvbGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRTaWduaW5nQ2VydGlmaWNhdGVGaW5nZXJwcmludCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=