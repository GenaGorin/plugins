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
var InsomniaOriginal = /** @class */ (function (_super) {
    __extends(InsomniaOriginal, _super);
    function InsomniaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InsomniaOriginal.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    InsomniaOriginal.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    InsomniaOriginal.pluginName = "Insomnia";
    InsomniaOriginal.plugin = "cordova-plugin-insomnia";
    InsomniaOriginal.pluginRef = "plugins.insomnia";
    InsomniaOriginal.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    InsomniaOriginal.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    return InsomniaOriginal;
}(AwesomeCordovaNativePlugin));
var Insomnia = new InsomniaOriginal();
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zb21uaWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUM5RCw0QkFBMEI7Ozs7SUFPdEQsNEJBQVM7SUFVVCxrQ0FBZTs7Ozs7O21CQXJEakI7RUFvQzhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEluc29tbmlhXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQcmV2ZW50IHRoZSBzY3JlZW4gb2YgdGhlIG1vYmlsZSBkZXZpY2UgZnJvbSBmYWxsaW5nIGFzbGVlcC5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW5zb21uaWEgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW5zb21uaWEvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnNvbW5pYTogSW5zb21uaWEpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5pbnNvbW5pYS5rZWVwQXdha2UoKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcclxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAqICAgKTtcclxuICpcclxuICogdGhpcy5pbnNvbW5pYS5hbGxvd1NsZWVwQWdhaW4oKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ3N1Y2Nlc3MnKSxcclxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdlcnJvcicpXHJcbiAqICAgKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW5zb21uaWEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWluc29tbmlhJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmluc29tbmlhJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL0luc29tbmlhLVBob25lR2FwLVBsdWdpbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdGaXJlZm94IE9TJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbnNvbW5pYSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBLZWVwcyBhd2FrZSB0aGUgYXBwbGljYXRpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGtlZXBBd2FrZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHRoZSBhcHBsaWNhdGlvbiB0byBzbGVlcCBhZ2FpblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWxsb3dTbGVlcEFnYWluKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==