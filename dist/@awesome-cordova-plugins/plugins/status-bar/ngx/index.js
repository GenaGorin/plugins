import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var StatusBar = /** @class */ (function (_super) {
    __extends(StatusBar, _super);
    function StatusBar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBar.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBar.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBar.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBar.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBar.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBar.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    StatusBar.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBar.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBar.pluginName = "StatusBar";
    StatusBar.plugin = "cordova-plugin-statusbar";
    StatusBar.pluginRef = "StatusBar";
    StatusBar.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBar.platforms = ["Android", "iOS", "Windows"];
    StatusBar.decorators = [
        { type: Injectable }
    ];
    return StatusBar;
}(AwesomeCordovaNativePlugin));
export { StatusBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3RhdHVzLWJhci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzlFLDZCQUEwQjs7OztJQWdCdkQsbUNBQWUsYUFBQyxXQUFvQjtJQVFwQyxnQ0FBWTtJQVFaLHFDQUFpQjtJQVFqQix5Q0FBcUI7SUFRckIsb0NBQWdCO0lBYWhCLHlDQUFxQixhQUFDLFNBQWlCO0lBWXZDLDhDQUEwQixhQUFDLFNBQWlCO0lBUTVDLHdCQUFJO0lBUUosd0JBQUk7MEJBcEZKLGdDQUFTOzs7Ozs7Ozs7Ozs7Z0JBTlYsVUFBVTs7b0JBakNYO0VBa0MrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN0YXR1cyBCYXJcclxuICogQHByZW1pZXIgc3RhdHVzYmFyXHJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTWFuYWdlIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXRpdmUgc3RhdHVzIGJhci5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXJgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU3RhdHVzQmFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zdGF0dXMtYmFyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RhdHVzQmFyOiBTdGF0dXNCYXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gbGV0IHN0YXR1cyBiYXIgb3ZlcmxheSB3ZWJ2aWV3XHJcbiAqIHRoaXMuc3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyh0cnVlKTtcclxuICpcclxuICogLy8gc2V0IHN0YXR1cyBiYXIgdG8gd2hpdGVcclxuICogdGhpcy5zdGF0dXNCYXIuYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoJyNmZmZmZmYnKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3RhdHVzQmFyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXInLFxyXG4gIHBsdWdpblJlZjogJ1N0YXR1c0JhcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogV2hldGhlciB0aGUgU3RhdHVzQmFyIGlzIGN1cnJlbnRseSB2aXNpYmxlIG9yIG5vdC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB3aGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LiBUaGUgZGVmYXVsdFxyXG4gICAqIGlzIHRydWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRvZXNPdmVybGF5ICBXaGV0aGVyIHRoZSBzdGF0dXMgYmFyIG92ZXJsYXlzIHRoZSBtYWluIGFwcCB2aWV3LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBvdmVybGF5c1dlYlZpZXcoZG9lc092ZXJsYXk6IGJvb2xlYW4pIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGUgZGVmYXVsdCBzdGF0dXNiYXIgKGRhcmsgdGV4dCwgZm9yIGxpZ2h0IGJhY2tncm91bmRzKS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3R5bGVEZWZhdWx0KCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoZSBsaWdodENvbnRlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHN0eWxlTGlnaHRDb250ZW50KCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoZSBibGFja1RyYW5zbHVjZW50IHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzdHlsZUJsYWNrVHJhbnNsdWNlbnQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhlIGJsYWNrT3BhcXVlIHN0YXR1c2JhciAobGlnaHQgdGV4dCwgZm9yIGRhcmsgYmFja2dyb3VuZHMpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzdHlsZUJsYWNrT3BhcXVlKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgbmFtZWQgY29sb3IuIFZhbGlkIG9wdGlvbnM6XHJcbiAgICogYmxhY2ssIGRhcmtHcmF5LCBsaWdodEdyYXksIHdoaXRlLCBncmF5LCByZWQsIGdyZWVuLCBibHVlLCBjeWFuLCB5ZWxsb3csIG1hZ2VudGEsIG9yYW5nZSwgcHVycGxlLCBicm93bi5cclxuICAgKlxyXG4gICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBjb2xvck5hbWUgIFRoZSBuYW1lIG9mIHRoZSBjb2xvciAoZnJvbSBhYm92ZSlcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgYmFja2dyb3VuZENvbG9yQnlOYW1lKGNvbG9yTmFtZTogc3RyaW5nKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHN0YXR1cyBiYXIgdG8gYSBzcGVjaWZpYyBoZXggY29sb3IgKENTUyBzaG9ydGhhbmQgc3VwcG9ydGVkISkuXHJcbiAgICpcclxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGV4U3RyaW5nICBUaGUgaGV4IHZhbHVlIG9mIHRoZSBjb2xvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoaGV4U3RyaW5nOiBzdHJpbmcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgdGhlIFN0YXR1c0JhclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBoaWRlKCkge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyB0aGUgU3RhdHVzQmFyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHNob3coKSB7fVxyXG59XHJcbiJdfQ==