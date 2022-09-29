import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { fromEvent } from 'rxjs';
var Banner = /** @class */ (function () {
    function Banner() {
    }
    Banner.prototype.hide = function () { return cordova(this, "hide", { "otherPromise": true }, arguments); };
    Banner.prototype.show = function (opts) { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Banner.plugin = "cordova-admob-plus";
    Banner.pluginName = "AdMob";
    Banner.pluginRef = "admob.banner";
    Banner.repo = "https://github.com/admob-plus/admob-plus";
    Banner.platforms = ["Android", "iOS"];
    return Banner;
}());
export { Banner };
var Interstitial = /** @class */ (function () {
    function Interstitial() {
    }
    Interstitial.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    Interstitial.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    Interstitial.plugin = "cordova-admob-plus";
    Interstitial.pluginName = "AdMob";
    Interstitial.pluginRef = "admob.interstitial";
    return Interstitial;
}());
export { Interstitial };
var RewardVideo = /** @class */ (function () {
    function RewardVideo() {
    }
    RewardVideo.prototype.load = function (opts) { return cordova(this, "load", { "otherPromise": true }, arguments); };
    RewardVideo.prototype.show = function () { return cordova(this, "show", { "otherPromise": true }, arguments); };
    RewardVideo.plugin = "cordova-admob-plus";
    RewardVideo.pluginName = "AdMob";
    RewardVideo.pluginRef = "admob.rewardVideo";
    return RewardVideo;
}());
export { RewardVideo };
var AdMob = /** @class */ (function (_super) {
    __extends(AdMob, _super);
    function AdMob() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMob.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMob.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMob.prototype.setDevMode = function (value) { return cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMob.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMob.platforms = ["Android", "iOS"];
    AdMob.plugin = "cordova-admob-plus";
    AdMob.pluginName = "AdMob";
    AdMob.pluginRef = "admob";
    AdMob.repo = "https://github.com/admob-plus/admob-plus";
    AdMob.decorators = [
        { type: Injectable }
    ];
    return AdMob;
}(AwesomeCordovaNativePlugin));
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRtb2ItcGx1cy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBdUIzQyxxQkFBSTtJQUtKLHFCQUFJLGFBQUMsSUFBNkI7Ozs7OztpQkE5QnBDOztTQXVCYSxNQUFNOzs7O0lBbUJqQiwyQkFBSSxhQUFDLElBQTZCO0lBS2xDLDJCQUFJOzs7O3VCQS9DTjs7U0F3Q2EsWUFBWTs7OztJQW1CdkIsMEJBQUksYUFBQyxJQUE2QjtJQUtsQywwQkFBSTs7OztzQkFoRU47O1NBeURhLFdBQVc7O0lBb0JHLHlCQUEwQjs7O1FBQ25ELFlBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7OztJQUdoQywyQkFBVyxhQUFDLEtBQWM7SUFLMUIsNEJBQVksYUFBQyxLQUFhO0lBSzFCLDBCQUFVLGFBQUMsS0FBYztJQUl6QixrQkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7O2dCQXZCRixVQUFVOztnQkE1RVg7RUE2RTJCLDBCQUEwQjtTQUF4QyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIEFkVW5pdElET3B0aW9uID1cclxuICB8IHN0cmluZ1xyXG4gIHwge1xyXG4gICAgICBhbmRyb2lkOiBzdHJpbmc7XHJcbiAgICAgIGlvczogc3RyaW5nO1xyXG4gICAgfTtcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBZE1vYiBQbHVzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBZE1vYiBQbHVzIGlzIHRoZSBzdWNjZXNzb3Igb2YgY29yZG92YS1wbHVnaW4tYWRtb2ItZnJlZSwgd2hpY2ggcHJvdmlkZXMgYSBjbGVhbmVyIEFQSSBhbmQgYnVpbGQgd2l0aCBtb2Rlcm4gdG9vbHMuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2IuYmFubmVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkbW9iLXBsdXMvYWRtb2ItcGx1cycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBCYW5uZXIge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgaGlkZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KG9wdHM6IHsgaWQ/OiBBZFVuaXRJRE9wdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYi5pbnRlcnN0aXRpYWwnLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW50ZXJzdGl0aWFsIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2IucmV3YXJkVmlkZW8nLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmV3YXJkVmlkZW8ge1xyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgbG9hZChvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNob3coKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtYWRtb2ItcGx1cycsXHJcbiAgcGx1Z2luTmFtZTogJ0FkTW9iJyxcclxuICBwbHVnaW5SZWY6ICdhZG1vYicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZG1vYi1wbHVzL2FkbW9iLXBsdXMnLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZE1vYiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBiYW5uZXIgPSBuZXcgQmFubmVyKCk7XHJcbiAgaW50ZXJzdGl0aWFsID0gbmV3IEludGVyc3RpdGlhbCgpO1xyXG4gIHJld2FyZFZpZGVvID0gbmV3IFJld2FyZFZpZGVvKCk7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0QXBwTXV0ZWQodmFsdWU6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzZXRBcHBWb2x1bWUodmFsdWU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXREZXZNb2RlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgb24oZXZlbnQ6IHN0cmluZyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm4gZnJvbUV2ZW50KGRvY3VtZW50LCBldmVudCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==