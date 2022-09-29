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
var AppCenterAnalyticsOriginal = /** @class */ (function (_super) {
    __extends(AppCenterAnalyticsOriginal, _super);
    function AppCenterAnalyticsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterAnalyticsOriginal.prototype.trackEvent = function (eventName, properties) { return cordova(this, "trackEvent", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.prototype.setEnabled = function (shouldEnable) { return cordova(this, "setEnabled", {}, arguments); };
    AppCenterAnalyticsOriginal.pluginName = "AppCenterAnalytics";
    AppCenterAnalyticsOriginal.plugin = "cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.pluginRef = "AppCenter.Analytics";
    AppCenterAnalyticsOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-analytics";
    AppCenterAnalyticsOriginal.platforms = ["Android", "iOS"];
    return AppCenterAnalyticsOriginal;
}(AwesomeCordovaNativePlugin));
var AppCenterAnalytics = new AppCenterAnalyticsOriginal();
export { AppCenterAnalytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1hbmFseXRpY3MvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBMENwRCxzQ0FBMEI7Ozs7SUFXaEUsdUNBQVUsYUFBQyxTQUFpQixFQUFFLFVBQXFCO0lBVW5ELHNDQUFTO0lBV1QsdUNBQVUsYUFBQyxZQUFxQjs7Ozs7OzZCQTNFbEM7RUEyQ3dDLDBCQUEwQjtTQUFyRCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmluZ01hcCB7XHJcbiAgW3M6IHN0cmluZ106IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFwcCBDZW50ZXIgQW5hbHl0aWNzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBcHAgQ2VudGVyIEFuYWx5dGljcyBoZWxwcyB5b3UgdW5kZXJzdGFuZCB1c2VyIGJlaGF2aW9yIGFuZCBjdXN0b21lciBlbmdhZ2VtZW50IHRvIGltcHJvdmUgeW91ciBhcHAuXHJcbiAqIFRoZSBTREsgYXV0b21hdGljYWxseSBjYXB0dXJlcyBzZXNzaW9uIGNvdW50IGFuZCBkZXZpY2UgcHJvcGVydGllcyBsaWtlIG1vZGVsLCBPUyB2ZXJzaW9uLCBldGMuXHJcbiAqIFlvdSBjYW4gZGVmaW5lIHlvdXIgb3duIGN1c3RvbSBldmVudHMgdG8gbWVhc3VyZSB0aGluZ3MgdGhhdCBtYXR0ZXIgdG8geW91LlxyXG4gKiBBbGwgdGhlIGluZm9ybWF0aW9uIGNhcHR1cmVkIGlzIGF2YWlsYWJsZSBpbiB0aGUgQXBwIENlbnRlciBwb3J0YWwgZm9yIHlvdSB0byBhbmFseXplIHRoZSBkYXRhLlxyXG4gKlxyXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZG9jcy5taWNyb3NvZnQuY29tL2VuLXVzL2FwcGNlbnRlci9zZGsvYW5hbHl0aWNzL2NvcmRvdmFcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQXBwQ2VudGVyQW5hbHl0aWNzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC1jZW50ZXItYW5hbHl0aWNzL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQ2VudGVyQW5hbHl0aWNzOiBBcHBDZW50ZXJBbmFseXRpY3MpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5hcHBDZW50ZXJBbmFseXRpY3Muc2V0RW5hYmxlZCh0cnVlKS50aGVuKCgpID0+IHtcclxuICogICAgdGhpcy5hcHBDZW50ZXJBbmFseXRpY3MudHJhY2tFdmVudCgnTXkgRXZlbnQnLCB7IFRFU1Q6ICdIRUxMT19XT1JMRCcgfSkudGhlbigoKSA9PiB7XHJcbiAqICAgICAgICBjb25zb2xlLmxvZygnQ3VzdG9tIGV2ZW50IHRyYWNrZWQnKTtcclxuICogICAgfSk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU3RyaW5nTWFwXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQXBwQ2VudGVyQW5hbHl0aWNzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItYW5hbHl0aWNzJyxcclxuICBwbHVnaW5SZWY6ICdBcHBDZW50ZXIuQW5hbHl0aWNzJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWFuYWx5dGljcycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwcENlbnRlckFuYWx5dGljcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUcmFja3MgYW4gY3VzdG9tIGV2ZW50LlxyXG4gICAqIFlvdSBjYW4gc2VuZCB1cCB0byAyMDAgZGlzdGluY3QgZXZlbnQgbmFtZXMuIEFsc28sIHRoZXJlIGlzIGEgbWF4aW11bSBsaW1pdCBvZiAyNTYgY2hhcmFjdGVycyBwZXIgZXZlbnQgbmFtZVxyXG4gICAqIGFuZCA2NCBjaGFyYWN0ZXJzIHBlciBldmVudCBwcm9wZXJ0eSBuYW1lIGFuZCBldmVudCBwcm9wZXJ0eSB2YWx1ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSAge3N0cmluZ30gZXZlbnROYW1lIEV2ZW50IG5hbWVcclxuICAgKiBAcGFyYW0gIHtTdHJpbmdNYXB9IHByb3BlcnRpZXMgRXZlbnQgcHJvcGVydGllc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0cmFja0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBwcm9wZXJ0aWVzOiBTdHJpbmdNYXApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIEFwcCBDZW50ZXIgQW5hbHl0aWNzIGlzIGVuYWJsZWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgb3IgZGlzYWJsZSBBcHAgQ2VudGVyIEFuYWx5dGljcyBhdCBydW50aW1lXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtib29sZWFufSBzaG91bGRFbmFibGUgU2V0IHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEVuYWJsZWQoc2hvdWxkRW5hYmxlOiBib29sZWFuKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==