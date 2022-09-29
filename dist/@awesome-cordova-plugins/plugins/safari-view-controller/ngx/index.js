import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var SafariViewController = /** @class */ (function (_super) {
    __extends(SafariViewController, _super);
    function SafariViewController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SafariViewController.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    SafariViewController.prototype.show = function (options) { return cordova(this, "show", { "successIndex": 1, "errorIndex": 2, "observable": true }, arguments); };
    SafariViewController.prototype.hide = function () { return cordova(this, "hide", {}, arguments); };
    SafariViewController.prototype.connectToService = function () { return cordova(this, "connectToService", {}, arguments); };
    SafariViewController.prototype.warmUp = function () { return cordova(this, "warmUp", {}, arguments); };
    SafariViewController.prototype.mayLaunchUrl = function (url) { return cordova(this, "mayLaunchUrl", {}, arguments); };
    SafariViewController.pluginName = "SafariViewController";
    SafariViewController.plugin = "cordova-plugin-safariviewcontroller";
    SafariViewController.pluginRef = "SafariViewController";
    SafariViewController.repo = "https://github.com/EddyVerbruggen/cordova-plugin-safariviewcontroller";
    SafariViewController.platforms = ["Android", "iOS"];
    SafariViewController.decorators = [
        { type: Injectable }
    ];
    return SafariViewController;
}(AwesomeCordovaNativePlugin));
export { SafariViewController };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2FmYXJpLXZpZXctY29udHJvbGxlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWtFUSx3Q0FBMEI7Ozs7SUFPbEUsMENBQVc7SUFlWCxtQ0FBSSxhQUFDLE9BQXFDO0lBUTFDLG1DQUFJO0lBVUosK0NBQWdCO0lBVWhCLHFDQUFNO0lBWU4sMkNBQVksYUFBQyxHQUFXOzs7Ozs7O2dCQS9EekIsVUFBVTs7K0JBbkVYO0VBb0UwQywwQkFBMEI7U0FBdkQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9ucyB7XHJcbiAgYW5pbWF0ZWQ/OiBib29sZWFuO1xyXG4gIGJhckNvbG9yPzogc3RyaW5nO1xyXG4gIGNvbnRyb2xUaW50Q29sb3I/OiBzdHJpbmc7XHJcbiAgZW50ZXJSZWFkZXJNb2RlSWZBdmFpbGFibGU/OiBib29sZWFuO1xyXG4gIGhpZGRlbj86IGJvb2xlYW47XHJcbiAgc2hvd0RlZmF1bHRTaGFyZU1lbnVJdGVtPzogYm9vbGVhbjtcclxuICB0aW50Q29sb3I/OiBzdHJpbmc7XHJcbiAgdG9vbGJhckNvbG9yPzogc3RyaW5nO1xyXG4gIHRyYW5zaXRpb24/OiBzdHJpbmc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU2FmYXJpIFZpZXcgQ29udHJvbGxlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogRm9yIGRpc3BsYXlpbmcgcmVhZC1vbmx5IHdlYiBjb250ZW50LlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NhZmFyaSBWaWV3IENvbnRyb2xsZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1zYWZhcml2aWV3Y29udHJvbGxlcikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNhZmFyaVZpZXdDb250cm9sbGVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NhZmFyaS12aWV3LWNvbnRyb2xsZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzYWZhcmlWaWV3Q29udHJvbGxlcjogU2FmYXJpVmlld0NvbnRyb2xsZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5zYWZhcmlWaWV3Q29udHJvbGxlci5pc0F2YWlsYWJsZSgpXHJcbiAqICAgLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xyXG4gKiAgICAgICBpZiAoYXZhaWxhYmxlKSB7XHJcbiAqXHJcbiAqICAgICAgICAgdGhpcy5zYWZhcmlWaWV3Q29udHJvbGxlci5zaG93KHtcclxuICogICAgICAgICAgIHVybDogJ2h0dHA6Ly9pb25pYy5pbycsXHJcbiAqICAgICAgICAgICBoaWRkZW46IGZhbHNlLFxyXG4gKiAgICAgICAgICAgYW5pbWF0ZWQ6IGZhbHNlLFxyXG4gKiAgICAgICAgICAgdHJhbnNpdGlvbjogJ2N1cmwnLFxyXG4gKiAgICAgICAgICAgZW50ZXJSZWFkZXJNb2RlSWZBdmFpbGFibGU6IHRydWUsXHJcbiAqICAgICAgICAgICB0aW50Q29sb3I6ICcjZmYwMDAwJ1xyXG4gKiAgICAgICAgIH0pXHJcbiAqICAgICAgICAgLnN1YnNjcmliZSgocmVzdWx0OiBhbnkpID0+IHtcclxuICogICAgICAgICAgICAgaWYocmVzdWx0LmV2ZW50ID09PSAnb3BlbmVkJykgY29uc29sZS5sb2coJ09wZW5lZCcpO1xyXG4gKiAgICAgICAgICAgICBlbHNlIGlmKHJlc3VsdC5ldmVudCA9PT0gJ2xvYWRlZCcpIGNvbnNvbGUubG9nKCdMb2FkZWQnKTtcclxuICogICAgICAgICAgICAgZWxzZSBpZihyZXN1bHQuZXZlbnQgPT09ICdjbG9zZWQnKSBjb25zb2xlLmxvZygnQ2xvc2VkJyk7XHJcbiAqICAgICAgICAgICB9LFxyXG4gKiAgICAgICAgICAgKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAqICAgICAgICAgKTtcclxuICpcclxuICogICAgICAgfSBlbHNlIHtcclxuICogICAgICAgICAvLyB1c2UgZmFsbGJhY2sgYnJvd3NlciwgZXhhbXBsZSBJbkFwcEJyb3dzZXJcclxuICogICAgICAgfVxyXG4gKiAgICAgfVxyXG4gKiAgICk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBTYWZhcmlWaWV3Q29udHJvbGxlck9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTYWZhcmlWaWV3Q29udHJvbGxlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2FmYXJpdmlld2NvbnRyb2xsZXInLFxyXG4gIHBsdWdpblJlZjogJ1NhZmFyaVZpZXdDb250cm9sbGVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLXNhZmFyaXZpZXdjb250cm9sbGVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2FmYXJpVmlld0NvbnRyb2xsZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIFNhZmFyaVZpZXdDb250cm9sbGVyIGlzIGF2YWlsYWJsZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvd3MgU2FmYXJpIFZpZXcgQ29udHJvbGxlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1NhZmFyaVZpZXdDb250cm9sbGVyT3B0aW9uc30gb3B0aW9uYWxcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdyhvcHRpb25zPzogU2FmYXJpVmlld0NvbnRyb2xsZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIFNhZmFyaSBWaWV3IENvbnRyb2xsZXJcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZXMgdG8gY29ubmVjdCB0byB0aGUgIENocm9tZSdzIGN1c3RvbSB0YWJzIHNlcnZpY2UuIHlvdSBtdXN0IGNhbGwgdGhpcyBtZXRob2QgYmVmb3JlIGNhbGxpbmcgYW55IG9mIHRoZSBvdGhlciBtZXRob2RzIGxpc3RlZCBiZWxvdy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvbm5lY3RUb1NlcnZpY2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGwgdGhpcyBtZXRob2Qgd2hlbmV2ZXIgdGhlcmUncyBhIGNoYW5jZSB0aGUgdXNlciB3aWxsIG9wZW4gYW4gZXh0ZXJuYWwgdXJsLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgd2FybVVwKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGb3IgZXZlbiBiZXR0ZXIgcGVyZm9ybWFuY2Ugb3B0aW1pemF0aW9uLCBjYWxsIHRoaXMgbWV0aG9kcyBpZiB0aGVyZSdzIG1vcmUgdGhhbiBhIDUwJSBjaGFuY2UgdGhlIHVzZXIgd2lsbCBvcGVuIGEgY2VydGFpbiBVUkwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJse3N0cmluZ31cclxuICAgKiBAcGFyYW0gdXJsXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbWF5TGF1bmNoVXJsKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19