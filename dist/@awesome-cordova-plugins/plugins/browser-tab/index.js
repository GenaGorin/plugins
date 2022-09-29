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
var BrowserTabOriginal = /** @class */ (function (_super) {
    __extends(BrowserTabOriginal, _super);
    function BrowserTabOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BrowserTabOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    BrowserTabOriginal.prototype.openUrl = function (url) { return cordova(this, "openUrl", {}, arguments); };
    BrowserTabOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    BrowserTabOriginal.pluginName = "BrowserTab";
    BrowserTabOriginal.plugin = "cordova-plugin-browsertab";
    BrowserTabOriginal.pluginRef = "cordova.plugins.browsertab";
    BrowserTabOriginal.repo = "https://github.com/google/cordova-plugin-browsertab";
    BrowserTabOriginal.platforms = ["Android", "iOS"];
    return BrowserTabOriginal;
}(AwesomeCordovaNativePlugin));
var BrowserTab = new BrowserTabOriginal();
export { BrowserTab };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYnJvd3Nlci10YWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUM1RCw4QkFBMEI7Ozs7SUFNdEQsZ0NBQVc7SUFVWCw0QkFBTyxhQUFDLEdBQVc7SUFTbkIsMEJBQUs7Ozs7OztxQkEzRFQ7RUFrQ2dDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJyb3dzZXIgVGFiXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyBhbiBpbnRlcmZhY2UgdG8gaW4tYXBwIGJyb3dzZXIgdGFicyB0aGF0IGV4aXN0IG9uIHNvbWUgbW9iaWxlIHBsYXRmb3Jtcywgc3BlY2lmaWNhbGx5IFtDdXN0b20gVGFic10oaHR0cDovL2RldmVsb3Blci5hbmRyb2lkLmNvbS90b29scy9zdXBwb3J0LWxpYnJhcnkvZmVhdHVyZXMuaHRtbCNjdXN0b20tdGFicykgb24gQW5kcm9pZCAoaW5jbHVkaW5nIHRoZSBbQ2hyb21lIEN1c3RvbSBUYWJzXShodHRwczovL2RldmVsb3Blci5jaHJvbWUuY29tL211bHRpZGV2aWNlL2FuZHJvaWQvY3VzdG9tdGFicykgaW1wbGVtZW50YXRpb24pLCBhbmQgW1NGU2FmYXJpVmlld0NvbnRyb2xsZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9saWJyYXJ5L2lvcy9kb2N1bWVudGF0aW9uL1NhZmFyaVNlcnZpY2VzL1JlZmVyZW5jZS9TRlNhZmFyaVZpZXdDb250cm9sbGVyX1JlZi8pIG9uIGlPUy5cclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQnJvd3NlclRhYiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9icm93c2VyLXRhYi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJyb3dzZXJUYWI6IEJyb3dzZXJUYWIpIHtcclxuICpcclxuICogICBicm93c2VyVGFiLmlzQXZhaWxhYmxlKClcclxuICogICAgIC50aGVuKGlzQXZhaWxhYmxlID0+IHtcclxuICogICAgICAgaWYgKGlzQXZhaWxhYmxlKSB7XHJcbiAqICAgICAgICAgYnJvd3NlclRhYi5vcGVuVXJsKCdodHRwczovL2lvbmljLmlvJyk7XHJcbiAqICAgICAgIH0gZWxzZSB7XHJcbiAqICAgICAgICAgLy8gb3BlbiBVUkwgd2l0aCBJbkFwcEJyb3dzZXIgaW5zdGVhZCBvciBTYWZhcmlWaWV3Q29udHJvbGxlclxyXG4gKiAgICAgICB9XHJcbiAqICAgICB9KTtcclxuICogfVxyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gICAgcGx1Z2luTmFtZTogJ0Jyb3dzZXJUYWInLFxyXG4gICAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYnJvd3NlcnRhYicsXHJcbiAgICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYnJvd3NlcnRhYicsXHJcbiAgICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jb3Jkb3ZhLXBsdWdpbi1icm93c2VydGFiJyxcclxuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCcm93c2VyVGFiIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBDaGVjayBpZiBCcm93c2VyVGFiIG9wdGlvbiBpcyBhdmFpbGFibGVcclxuICAgICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGNoZWNrIGlzIHN1Y2Nlc3NmdWwgYW5kIHJldHVybnMgdHJ1ZSBvciBmYWxzZVxyXG4gICAgICovXHJcbiAgICBAQ29yZG92YSgpXHJcbiAgICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIE9wZW5zIHRoZSBwcm92aWRlZCBVUkwgdXNpbmcgYSBicm93c2VyIHRhYlxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCAgVGhlIFVSTCB5b3Ugd2FudCB0byBvcGVuXHJcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBjaGVjayBvcGVuIHdhcyBzdWNjZXNzZnVsXHJcbiAgICAgKi9cclxuICAgIEBDb3Jkb3ZhKClcclxuICAgIG9wZW5VcmwodXJsOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIENsb3NlcyBicm93c2VyIHRhYlxyXG4gICAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gY2xvc2Ugd2FzIGZpbmlzaGVkXHJcbiAgICAgKi9cclxuICAgIEBDb3Jkb3ZhKClcclxuICAgIGNsb3NlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==