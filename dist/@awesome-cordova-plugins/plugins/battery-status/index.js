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
import { Observable } from 'rxjs';
var BatteryStatusOriginal = /** @class */ (function (_super) {
    __extends(BatteryStatusOriginal, _super);
    function BatteryStatusOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatusOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatusOriginal.prototype.onLow = function () { return cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatusOriginal.prototype.onCritical = function () { return cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatusOriginal.pluginName = "BatteryStatus";
    BatteryStatusOriginal.plugin = "cordova-plugin-battery-status";
    BatteryStatusOriginal.pluginRef = "navigator.battery";
    BatteryStatusOriginal.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatusOriginal.platforms = ["iOS", "Android", "Windows", "Browser"];
    return BatteryStatusOriginal;
}(AwesomeCordovaNativePlugin));
var BatteryStatus = new BatteryStatusOriginal();
export { BatteryStatus };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmF0dGVyeS1zdGF0dXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUErQ0MsaUNBQTBCOzs7O0lBVTNELGdDQUFRO0lBYVIsNkJBQUs7SUFhTCxrQ0FBVTs7Ozs7O3dCQXJGWjtFQWlEbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmF0dGVyeVN0YXR1c1Jlc3BvbnNlIHtcclxuICAvKipcclxuICAgKiBUaGUgYmF0dGVyeSBjaGFyZ2UgcGVyY2VudGFnZVxyXG4gICAqL1xyXG4gIGxldmVsOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgcGx1Z2dlZCBpblxyXG4gICAqL1xyXG4gIGlzUGx1Z2dlZDogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJhdHRlcnkgU3RhdHVzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tYmF0dGVyeXN0YXR1cy4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhdHRlcnlTdGF0dXMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCYXR0ZXJ5U3RhdHVzIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhdHRlcnktc3RhdHVzL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmF0dGVyeVN0YXR1czogQmF0dGVyeVN0YXR1cykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAvLyB3YXRjaCBjaGFuZ2UgaW4gYmF0dGVyeSBzdGF0dXNcclxuICogY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy5iYXR0ZXJ5U3RhdHVzLm9uQ2hhbmdlKCkuc3Vic2NyaWJlKHN0YXR1cyA9PiB7XHJcbiAqICAgIGNvbnNvbGUubG9nKHN0YXR1cy5sZXZlbCwgc3RhdHVzLmlzUGx1Z2dlZCk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzdG9wIHdhdGNoXHJcbiAqIHN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQmF0dGVyeVN0YXR1c1Jlc3BvbnNlXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmF0dGVyeVN0YXR1cycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmF0dGVyeS1zdGF0dXMnLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5iYXR0ZXJ5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1iYXR0ZXJ5LXN0YXR1cycsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnLCAnQnJvd3NlciddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U3RhdHVzIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFdhdGNoIHRoZSBjaGFuZ2UgaW4gYmF0dGVyeSBsZXZlbFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnYmF0dGVyeXN0YXR1cycsXHJcbiAgfSlcclxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggd2hlbiB0aGUgYmF0dGVyeSBsZXZlbCBnb2VzIGxvd1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8QmF0dGVyeVN0YXR1c1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgcHVzaGVzIGEgc3RhdHVzIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnYmF0dGVyeWxvdycsXHJcbiAgfSlcclxuICBvbkxvdygpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggd2hlbiB0aGUgYmF0dGVyeSBsZXZlbCBnb2VzIHRvIGNyaXRpY2FsXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxCYXR0ZXJ5U3RhdHVzUmVzcG9uc2U+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBwdXNoZXMgYSBzdGF0dXMgb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdiYXR0ZXJ5Y3JpdGljYWwnLFxyXG4gIH0pXHJcbiAgb25Dcml0aWNhbCgpOiBPYnNlcnZhYmxlPEJhdHRlcnlTdGF0dXNSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=