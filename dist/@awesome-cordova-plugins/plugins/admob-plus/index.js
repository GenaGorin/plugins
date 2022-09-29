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
var AdMobOriginal = /** @class */ (function (_super) {
    __extends(AdMobOriginal, _super);
    function AdMobOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.banner = new Banner();
        _this.interstitial = new Interstitial();
        _this.rewardVideo = new RewardVideo();
        return _this;
    }
    AdMobOriginal.prototype.setAppMuted = function (value) { return cordova(this, "setAppMuted", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setAppVolume = function (value) { return cordova(this, "setAppVolume", { "otherPromise": true }, arguments); };
    AdMobOriginal.prototype.setDevMode = function (value) { return cordova(this, "setDevMode", { "sync": true }, arguments); };
    AdMobOriginal.prototype.on = function (event) {
        return fromEvent(document, event);
    };
    AdMobOriginal.platforms = ["Android", "iOS"];
    AdMobOriginal.plugin = "cordova-admob-plus";
    AdMobOriginal.pluginName = "AdMob";
    AdMobOriginal.pluginRef = "admob";
    AdMobOriginal.repo = "https://github.com/admob-plus/admob-plus";
    return AdMobOriginal;
}(AwesomeCordovaNativePlugin));
var AdMob = new AdMobOriginal();
export { AdMob };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRtb2ItcGx1cy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQWMsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBdUIzQyxxQkFBSTtJQUtKLHFCQUFJLGFBQUMsSUFBNkI7Ozs7OztpQkE5QnBDOztTQXVCYSxNQUFNOzs7O0lBbUJqQiwyQkFBSSxhQUFDLElBQTZCO0lBS2xDLDJCQUFJOzs7O3VCQS9DTjs7U0F3Q2EsWUFBWTs7OztJQW1CdkIsMEJBQUksYUFBQyxJQUE2QjtJQUtsQywwQkFBSTs7OztzQkFoRU47O1NBeURhLFdBQVc7O0lBb0JHLHlCQUEwQjs7O1FBQ25ELFlBQU0sR0FBRyxJQUFJLE1BQU0sRUFBRSxDQUFDO1FBQ3RCLGtCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNsQyxpQkFBVyxHQUFHLElBQUksV0FBVyxFQUFFLENBQUM7OztJQUdoQywyQkFBVyxhQUFDLEtBQWM7SUFLMUIsNEJBQVksYUFBQyxLQUFhO0lBSzFCLDBCQUFVLGFBQUMsS0FBYztJQUl6QixrQkFBRSxHQUFGLFVBQUcsS0FBYTtRQUNkLE9BQU8sU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDOzs7Ozs7Z0JBbkdIO0VBNkUyQiwwQkFBMEI7U0FBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgdHlwZSBBZFVuaXRJRE9wdGlvbiA9XHJcbiAgfCBzdHJpbmdcclxuICB8IHtcclxuICAgICAgYW5kcm9pZDogc3RyaW5nO1xyXG4gICAgICBpb3M6IHN0cmluZztcclxuICAgIH07XHJcblxyXG4vKipcclxuICogQG5hbWUgQWRNb2IgUGx1c1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWRNb2IgUGx1cyBpcyB0aGUgc3VjY2Vzc29yIG9mIGNvcmRvdmEtcGx1Z2luLWFkbW9iLWZyZWUsIHdoaWNoIHByb3ZpZGVzIGEgY2xlYW5lciBBUEkgYW5kIGJ1aWxkIHdpdGggbW9kZXJuIHRvb2xzLlxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcclxuICBwbHVnaW5OYW1lOiAnQWRNb2InLFxyXG4gIHBsdWdpblJlZjogJ2FkbW9iLmJhbm5lcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZG1vYi1wbHVzL2FkbW9iLXBsdXMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQmFubmVyIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGhpZGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdyhvcHRzOiB7IGlkPzogQWRVbml0SURPcHRpb24gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2IuaW50ZXJzdGl0aWFsJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIEludGVyc3RpdGlhbCB7XHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2FkKG9wdHM6IHsgaWQ/OiBBZFVuaXRJRE9wdGlvbiB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2hvdygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luOiAnY29yZG92YS1hZG1vYi1wbHVzJyxcclxuICBwbHVnaW5OYW1lOiAnQWRNb2InLFxyXG4gIHBsdWdpblJlZjogJ2FkbW9iLnJld2FyZFZpZGVvJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJld2FyZFZpZGVvIHtcclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIGxvYWQob3B0czogeyBpZD86IEFkVW5pdElET3B0aW9uIH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBzaG93KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5AUGx1Z2luKHtcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLWFkbW9iLXBsdXMnLFxyXG4gIHBsdWdpbk5hbWU6ICdBZE1vYicsXHJcbiAgcGx1Z2luUmVmOiAnYWRtb2InLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWRtb2ItcGx1cy9hZG1vYi1wbHVzJyxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQWRNb2IgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgYmFubmVyID0gbmV3IEJhbm5lcigpO1xyXG4gIGludGVyc3RpdGlhbCA9IG5ldyBJbnRlcnN0aXRpYWwoKTtcclxuICByZXdhcmRWaWRlbyA9IG5ldyBSZXdhcmRWaWRlbygpO1xyXG5cclxuICBAQ29yZG92YSh7IG90aGVyUHJvbWlzZTogdHJ1ZSB9KVxyXG4gIHNldEFwcE11dGVkKHZhbHVlOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgb3RoZXJQcm9taXNlOiB0cnVlIH0pXHJcbiAgc2V0QXBwVm9sdW1lKHZhbHVlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0RGV2TW9kZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIG9uKGV2ZW50OiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuIGZyb21FdmVudChkb2N1bWVudCwgZXZlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=