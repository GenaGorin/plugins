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
var SMSOriginal = /** @class */ (function (_super) {
    __extends(SMSOriginal, _super);
    function SMSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SMSOriginal.prototype.send = function (phoneNumber, message, options) { return cordova(this, "send", { "successIndex": 3, "errorIndex": 4 }, arguments); };
    SMSOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "platforms": ["Android"] }, arguments); };
    SMSOriginal.pluginName = "SMS";
    SMSOriginal.plugin = "cordova-sms-plugin";
    SMSOriginal.pluginRef = "sms";
    SMSOriginal.repo = "https://github.com/cordova-sms/cordova-sms-plugin";
    SMSOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return SMSOriginal;
}(AwesomeCordovaNativePlugin));
var SMS = new SMSOriginal();
export { SMS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW1EbkUsdUJBQTBCOzs7O0lBYWpELGtCQUFJLGFBQUMsV0FBOEIsRUFBRSxPQUFlLEVBQUUsT0FBb0I7SUFZMUUsMkJBQWE7Ozs7OztjQTdFZjtFQW9EeUIsMEJBQTBCO1NBQXRDLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogT3B0aW9ucyBmb3Igc2VuZGluZyBhbiBTTVNcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgU21zT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gcmVwbGFjZSBcXG4gYnkgYSBuZXcgbGluZS4gRGVmYXVsdDogZmFsc2VcclxuICAgKi9cclxuICByZXBsYWNlTGluZUJyZWFrcz86IGJvb2xlYW47XHJcblxyXG4gIGFuZHJvaWQ/OiBTbXNPcHRpb25zQW5kcm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbXNPcHRpb25zQW5kcm9pZCB7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIFwiSU5URU5UXCIgdG8gc2VuZCBTTVMgd2l0aCB0aGUgbmF0aXZlIGFuZHJvaWQgU01TIG1lc3NhZ2luZy4gTGVhdmluZyBpdCBlbXB0eSB3aWxsIHNlbmQgdGhlIFNNUyB3aXRob3V0IG9wZW5pbmcgYW55IGFwcC5cclxuICAgKi9cclxuICBpbnRlbnQ/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTTVNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXNtcy1wbHVnaW4uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTTVMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9jb3Jkb3ZhLXNtcy9jb3Jkb3ZhLXNtcy1wbHVnaW4pLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTTVMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc21zL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc21zOiBTTVMpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcclxuICogdGhpcy5zbXMuc2VuZCgnNDE2MTIzNDU2JywgJ0hlbGxvIHdvcmxkIScpO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU21zT3B0aW9uc1xyXG4gKiBTbXNPcHRpb25zQW5kcm9pZFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NNUycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1zbXMtcGx1Z2luJyxcclxuICBwbHVnaW5SZWY6ICdzbXMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY29yZG92YS1zbXMvY29yZG92YS1zbXMtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU01TIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNlbmRzIHNtcyB0byBhIG51bWJlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBob25lTnVtYmVyIHtzdHJpbmd8c3RyaW5nW119IFBob25lIG51bWJlclxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2VcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7U21zT3B0aW9uc30gT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgU01TIGhhcyBiZWVuIHNlbnRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDMsXHJcbiAgICBlcnJvckluZGV4OiA0LFxyXG4gIH0pXHJcbiAgc2VuZChwaG9uZU51bWJlcjogc3RyaW5nIHwgc3RyaW5nW10sIG1lc3NhZ2U6IHN0cmluZywgb3B0aW9ucz86IFNtc09wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBsZXRzIHlvdSBrbm93IGlmIHRoZSBhcHAgaGFzIHBlcm1pc3Npb24gdG8gc2VuZCBTTVNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHdlIGhhdmUgcGVybWlzc2lvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbiAgfSlcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=