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
var FirebaseAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(FirebaseAnalyticsOriginal, _super);
    function FirebaseAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAnalyticsOriginal.prototype.logEvent = function (name, params) { return cordova(this, "logEvent", { "sync": true }, arguments); };
    FirebaseAnalyticsOriginal.prototype.setUserId = function (id) { return cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseAnalyticsOriginal.prototype.setUserProperty = function (name, value) { return cordova(this, "setUserProperty", { "sync": true }, arguments); };
    FirebaseAnalyticsOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    FirebaseAnalyticsOriginal.prototype.setCurrentScreen = function (name) { return cordova(this, "setCurrentScreen", { "sync": true }, arguments); };
    FirebaseAnalyticsOriginal.prototype.resetAnalyticsData = function () { return cordova(this, "resetAnalyticsData", { "sync": true }, arguments); };
    FirebaseAnalyticsOriginal.pluginName = "FirebaseAnalytics";
    FirebaseAnalyticsOriginal.plugin = "cordova-plugin-firebase-analytics";
    FirebaseAnalyticsOriginal.pluginRef = "cordova.plugins.firebase.analytics";
    FirebaseAnalyticsOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-analytics";
    FirebaseAnalyticsOriginal.platforms = ["Android", "iOS"];
    return FirebaseAnalyticsOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseAnalytics = new FirebaseAnalyticsOriginal();
export { FirebaseAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtYW5hbHl0aWNzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWtEckQscUNBQTBCOzs7O0lBVS9ELG9DQUFRLGFBQUMsSUFBWSxFQUFFLE1BQVc7SUFZbEMscUNBQVMsYUFBQyxFQUFVO0lBYXBCLDJDQUFlLGFBQUMsSUFBWSxFQUFFLEtBQWE7SUFXM0Msc0NBQVUsYUFBQyxPQUFnQjtJQVkzQiw0Q0FBZ0IsYUFBQyxJQUFZO0lBVTdCLDhDQUFrQjs7Ozs7OzRCQXZIcEI7RUFtRHVDLDBCQUEwQjtTQUFwRCxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQGJldGFcclxuICogQG5hbWUgRmlyZWJhc2UgQW5hbHl0aWNzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgQW5hbHl0aWNzXHJcbiAqXHJcbiAqIEdvIHRvIGZpcmViYXNlIGNvbnNvbGUgYW5kIGV4cG9ydCBnb29nbGUtc2VydmljZXMuanNvbiBhbmQgR29vZ2xlU2VydmljZS1JbmZvLnBsaXN0LiBQdXQgdGhvc2UgZmlsZXMgaW50byB0aGUgcm9vdCBvZiB5b3VyIGNvcmRvdmEgYXBwIGZvbGRlci5cclxuICpcclxuICogTk9URTogb24gaU9TIGluIG9yZGVyIHRvIGNvbGxlY3QgZGVtb2dyYXBoaWMsIGFnZSwgZ2VuZGVyIGRhdGEgZXRjLiB5b3Ugc2hvdWxkIGFkZGl0aW9uYWxseSBpbmNsdWRlIEFkU3VwcG9ydC5mcmFtZXdvcmsgaW50byB5b3VyIHByb2plY3QuXHJcbiAqXHJcbiAqICMjIFVzaW5nIGNhcGFjaXRvcj9cclxuICogRm9yIEFuZHJvaWQgeW91J2xsIGhhdmUgdG8gYWRkIGluIF9fYW5kcm9pZC9hcHAvc3JjL21haW4vQW5kcm9pZE1hbmlmZXN0LnhtbF9fIHVuZGVyIGA8YXBwbGljYXRpb24+YFxyXG4gKiBgYGBcclxuICogPG1ldGEtZGF0YVxyXG4gKiAgICAgIHRvb2xzOnJlcGxhY2U9XCJhbmRyb2lkOnZhbHVlXCJcclxuICogICAgICBhbmRyb2lkOm5hbWU9XCJmaXJlYmFzZV9hbmFseXRpY3NfY29sbGVjdGlvbl9lbmFibGVkXCJcclxuICogICAgICBhbmRyb2lkOnZhbHVlPVwidHJ1ZVwiLz5cclxuICpcclxuICogPG1ldGEtZGF0YVxyXG4gKiAgICAgIHRvb2xzOnJlcGxhY2U9XCJhbmRyb2lkOnZhbHVlXCJcclxuICogICAgICBhbmRyb2lkOm5hbWU9XCJnb29nbGVfYW5hbHl0aWNzX2F1dG9tYXRpY19zY3JlZW5fcmVwb3J0aW5nX2VuYWJsZWRcIlxyXG4gKiAgICAgIGFuZHJvaWQ6dmFsdWU9XCJmYWxzZVwiLz5cclxuICogYGBgXHJcbiAqXHJcbiAqIEFuZCBpbiB0aGUgc2FtZSBmaWxlLCB5b3UnbGwgaGF2ZSB0byBhZGQgYHhtbG5zOnRvb2xzPVwiaHR0cDovL3NjaGVtYXMuYW5kcm9pZC5jb20vdG9vbHNcImAgdG8geW91ciBfbWFuaWZlc3RfIHRhZy5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmlyZWJhc2VBbmFseXRpY3MgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlyZWJhc2UtYW5hbHl0aWNzL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VBbmFseXRpY3M6IEZpcmViYXNlQW5hbHl0aWNzKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlyZWJhc2VBbmFseXRpY3MubG9nRXZlbnQoJ3BhZ2VfdmlldycsIHtwYWdlOiBcImRhc2hib2FyZFwifSlcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQW5hbHl0aWNzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hbmFseXRpY3MnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5maXJlYmFzZS5hbmFseXRpY3MnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hlbWVyaXN1ay9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1hbmFseXRpY3MnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaXJlYmFzZUFuYWx5dGljcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBMb2dzIGFuIGFwcCBldmVudC5cclxuICAgKiBCZSBhd2FyZSBvZiBhdXRvbWF0aWNhbGx5IGNvbGxlY3RlZCBldmVudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgKiBAcGFyYW0ge2FueX0gcGFyYW1zIFNvbWUgcGFyYW0gdG8gY29uZmlndXJlIHNvbWV0aGluZ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgbG9nRXZlbnQobmFtZTogc3RyaW5nLCBwYXJhbXM6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHRoZSB1c2VyIElEIHByb3BlcnR5LlxyXG4gICAqIFRoaXMgZmVhdHVyZSBtdXN0IGJlIHVzZWQgaW4gYWNjb3JkYW5jZSB3aXRoIEdvb2dsZSdzIFByaXZhY3kgUG9saWN5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGlkIFRoZSB1c2VyIElEXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRVc2VySWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZlYXR1cmUgbXVzdCBiZSB1c2VkIGluIGFjY29yZGFuY2Ugd2l0aCBHb29nbGUncyBQcml2YWN5IFBvbGljeS5cclxuICAgKiBCZSBhd2FyZSBvZiBhdXRvbWF0aWNhbGx5IGNvbGxlY3RlZCB1c2VyIHByb3BlcnRpZXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgcHJvcGVydHkgbmFtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBUaGUgcHJvcGVydHkgdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldFVzZXJQcm9wZXJ0eShuYW1lOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB3aGV0aGVyIGFuYWx5dGljcyBjb2xsZWN0aW9uIGlzIGVuYWJsZWQgZm9yIHRoaXMgYXBwIG9uIHRoaXMgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBlbmFibGVkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgY3VycmVudCBzY3JlZW4gbmFtZSwgd2hpY2ggc3BlY2lmaWVzIHRoZSBjdXJyZW50IHZpc3VhbCBjb250ZXh0IGluIHlvdXIgYXBwLlxyXG4gICAqIFRoaXMgaGVscHMgaWRlbnRpZnkgdGhlIGFyZWFzIGluIHlvdXIgYXBwIHdoZXJlIHVzZXJzIHNwZW5kIHRoZWlyIHRpbWUgYW5kIGhvdyB0aGV5IGludGVyYWN0IHdpdGggeW91ciBhcHAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgbmFtZSBvZiB0aGUgc2NyZWVuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRDdXJyZW50U2NyZWVuKG5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbGVhcnMgYWxsIGFuYWx5dGljcyBkYXRhIGZvciB0aGlzIGluc3RhbmNlIGZyb20gdGhlIGRldmljZSBhbmQgcmVzZXRzIHRoZSBhcHAgaW5zdGFuY2UgSURcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlc2V0QW5hbHl0aWNzRGF0YSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19