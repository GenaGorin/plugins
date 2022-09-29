import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SplashScreen = /** @class */ (function (_super) {
    __extends(SplashScreen, _super);
    function SplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreen.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreen.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreen.pluginName = "SplashScreen";
    SplashScreen.plugin = "cordova-plugin-splashscreen";
    SplashScreen.pluginRef = "navigator.splashscreen";
    SplashScreen.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreen.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    SplashScreen.decorators = [
        { type: Injectable }
    ];
    return SplashScreen;
}(AwesomeCordovaNativePlugin));
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE0QjFELGdDQUEwQjs7OztJQU8xRCwyQkFBSTtJQVFKLDJCQUFJOzs7Ozs7O2dCQWhCTCxVQUFVOzt1QkE1Qlg7RUE2QmtDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwbGFzaCBTY3JlZW5cclxuICogQHByZW1pZXIgc3BsYXNoc2NyZWVuXHJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxyXG4gKiBAZGVzY3JpcHRpb24gVGhpcyBwbHVnaW4gZGlzcGxheXMgYW5kIGhpZGVzIGEgc3BsYXNoIHNjcmVlbiBkdXJpbmcgYXBwbGljYXRpb24gbGF1bmNoLiBUaGUgbWV0aG9kcyBiZWxvdyBhbGxvd3Mgc2hvd2luZyBhbmQgaGlkaW5nIHRoZSBzcGxhc2hzY3JlZW4gYWZ0ZXIgdGhlIGFwcCBoYXMgbG9hZGVkLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTcGxhc2hTY3JlZW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3BsYXNoLXNjcmVlbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNwbGFzaFNjcmVlbjogU3BsYXNoU2NyZWVuKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLnNob3coKTtcclxuICpcclxuICogdGhpcy5zcGxhc2hTY3JlZW4uaGlkZSgpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTcGxhc2hTY3JlZW4nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLnNwbGFzaHNjcmVlbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3BsYXNoc2NyZWVuJyxcclxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGxhc2hTY3JlZW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU2hvd3MgdGhlIHNwbGFzaHNjcmVlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzaG93KCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZXMgdGhlIHNwbGFzaHNjcmVlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBoaWRlKCk6IHZvaWQge31cclxufVxyXG4iXX0=