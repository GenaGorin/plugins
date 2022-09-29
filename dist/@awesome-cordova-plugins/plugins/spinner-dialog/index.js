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
var SpinnerDialogOriginal = /** @class */ (function (_super) {
    __extends(SpinnerDialogOriginal, _super);
    function SpinnerDialogOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialogOriginal.prototype.show = function (title, message, cancelCallback, iOSOptions) { return cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialogOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialogOriginal.pluginName = "SpinnerDialog";
    SpinnerDialogOriginal.plugin = "cordova-plugin-native-spinner";
    SpinnerDialogOriginal.pluginRef = "SpinnerDialog";
    SpinnerDialogOriginal.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialogOriginal.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    return SpinnerDialogOriginal;
}(AwesomeCordovaNativePlugin));
var SpinnerDialog = new SpinnerDialogOriginal();
export { SpinnerDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Bpbm5lci1kaWFsb2cvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBcUR6RCxpQ0FBMEI7Ozs7SUFZM0QsNEJBQUksYUFBQyxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxjQUFvQixFQUFFLFVBQW9DO0lBUWpHLDRCQUFJOzs7Ozs7d0JBMUVOO0VBc0RtQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIE9wYWNpdHkgb2YgdGhlIG92ZXJsYXksIGJldHdlZW4gMCAodHJhbnNwYXJlbnQpIGFuZCAxIChvcGFxdWUpLiBEZWZhdWx0OiAwLjM1XHJcbiAgICovXHJcbiAgb3ZlcmxheU9wYWNpdHk/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZCBjb21wb25lbnQgb2YgdGhlIHRleHQgY29sb3IsIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdDogMVxyXG4gICAqL1xyXG4gIHRleHRDb2xvclJlZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogR3JlZW4gY29tcG9uZW50IG9mIHRoZSB0ZXh0IGNvbG9yLCBiZXR3ZWVuIDAgYW5kIDEuIERlZmF1bHQ6IDFcclxuICAgKi9cclxuICB0ZXh0Q29sb3JHcmVlbj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQmx1ZSBjb21wb25lbnQgb2YgdGhlIHRleHQgY29sb3IsIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdDogMVxyXG4gICAqL1xyXG4gIHRleHRDb2xvckJsdWU/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcGlubmVyIERpYWxvZ1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBwbHVnaW4gZm9yIHNob3dpbmcgYSBuYXRpdmUgc3Bpbm5lciBiYXNlZCBvbiBQYWxkb20vU3Bpbm5lckRpYWxvZy5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTcGlubmVyIERpYWxvZyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2dyZXliYXgvY29yZG92YS1wbHVnaW4tbmF0aXZlLXNwaW5uZXIpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTcGlubmVyRGlhbG9nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NwaW5uZXItZGlhbG9nL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3Bpbm5lckRpYWxvZzogU3Bpbm5lckRpYWxvZykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnNwaW5uZXJEaWFsb2cuc2hvdygpO1xyXG4gKlxyXG4gKiB0aGlzLnNwaW5uZXJEaWFsb2cuaGlkZSgpO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTcGlubmVyRGlhbG9nJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcicsXHJcbiAgcGx1Z2luUmVmOiAnU3Bpbm5lckRpYWxvZycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ncmV5YmF4L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyBQaG9uZSA4JywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3Bpbm5lckRpYWxvZyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaG93cyB0aGUgc3Bpbm5lciBkaWFsb2dcclxuICAgKlxyXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfSBTcGlubmVyIHRpdGxlIChzaG93cyBvbiBBbmRyb2lkIG9ubHkpXHJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge3N0cmluZ30gU3Bpbm5lciBtZXNzYWdlXHJcbiAgICogQHBhcmFtIGNhbmNlbENhbGxiYWNrIHtib29sZWFufGZ1bmN0aW9ufSBTZXQgdG8gdHJ1ZSB0byBzZXQgc3Bpbm5lciBub3QgY2FuY2VsYWJsZS4gT3IgcHJvdmlkZSBhIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiB0aGUgdXNlciBjYW5jZWxzIHRoZSBzcGlubmVyLlxyXG4gICAqIEBwYXJhbSBpT1NPcHRpb25zIHtvYmplY3R9IE9wdGlvbnMgZm9yIGlPUyBvbmx5XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNob3codGl0bGU/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcsIGNhbmNlbENhbGxiYWNrPzogYW55LCBpT1NPcHRpb25zPzogU3Bpbm5lckRpYWxvZ0lPU09wdGlvbnMpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIHRoZSBzcGlubmVyIGRpYWxvZyBpZiB2aXNpYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGhpZGUoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==