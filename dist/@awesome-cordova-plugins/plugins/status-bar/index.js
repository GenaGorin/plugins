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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var StatusBarOriginal = /** @class */ (function (_super) {
    __extends(StatusBarOriginal, _super);
    function StatusBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatusBarOriginal.prototype.overlaysWebView = function (doesOverlay) { return cordova(this, "overlaysWebView", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleDefault = function () { return cordova(this, "styleDefault", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleLightContent = function () { return cordova(this, "styleLightContent", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleBlackTranslucent = function () { return cordova(this, "styleBlackTranslucent", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.styleBlackOpaque = function () { return cordova(this, "styleBlackOpaque", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.backgroundColorByName = function (colorName) { return cordova(this, "backgroundColorByName", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.backgroundColorByHexString = function (hexString) { return cordova(this, "backgroundColorByHexString", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    StatusBarOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    Object.defineProperty(StatusBarOriginal.prototype, "isVisible", {
        get: function () { return cordovaPropertyGet(this, "isVisible"); },
        set: function (value) { cordovaPropertySet(this, "isVisible", value); },
        enumerable: false,
        configurable: true
    });
    StatusBarOriginal.pluginName = "StatusBar";
    StatusBarOriginal.plugin = "cordova-plugin-statusbar";
    StatusBarOriginal.pluginRef = "StatusBar";
    StatusBarOriginal.repo = "https://github.com/apache/cordova-plugin-statusbar";
    StatusBarOriginal.platforms = ["Android", "iOS", "Windows"];
    return StatusBarOriginal;
}(AwesomeCordovaNativePlugin));
var StatusBar = new StatusBarOriginal();
export { StatusBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3RhdHVzLWJhci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzlFLDZCQUEwQjs7OztJQWdCdkQsbUNBQWUsYUFBQyxXQUFvQjtJQVFwQyxnQ0FBWTtJQVFaLHFDQUFpQjtJQVFqQix5Q0FBcUI7SUFRckIsb0NBQWdCO0lBYWhCLHlDQUFxQixhQUFDLFNBQWlCO0lBWXZDLDhDQUEwQixhQUFDLFNBQWlCO0lBUTVDLHdCQUFJO0lBUUosd0JBQUk7MEJBcEZKLGdDQUFTOzs7Ozs7Ozs7OztvQkF2Q1g7RUFrQytCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgU3RhdHVzIEJhclxyXG4gKiBAcHJlbWllciBzdGF0dXNiYXJcclxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBNYW5hZ2UgdGhlIGFwcGVhcmFuY2Ugb2YgdGhlIG5hdGl2ZSBzdGF0dXMgYmFyLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTdGF0dXNCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3RhdHVzQmFyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N0YXR1cy1iYXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0dXNCYXI6IFN0YXR1c0JhcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBsZXQgc3RhdHVzIGJhciBvdmVybGF5IHdlYnZpZXdcclxuICogdGhpcy5zdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KHRydWUpO1xyXG4gKlxyXG4gKiAvLyBzZXQgc3RhdHVzIGJhciB0byB3aGl0ZVxyXG4gKiB0aGlzLnN0YXR1c0Jhci5iYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZygnI2ZmZmZmZicpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTdGF0dXNCYXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcicsXHJcbiAgcGx1Z2luUmVmOiAnU3RhdHVzQmFyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1zdGF0dXNiYXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXR1c0JhciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRoZSBTdGF0dXNCYXIgaXMgY3VycmVudGx5IHZpc2libGUgb3Igbm90LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuIFRoZSBkZWZhdWx0XHJcbiAgICogaXMgdHJ1ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9lc092ZXJsYXkgIFdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIG92ZXJsYXlzV2ViVmlldyhkb2VzT3ZlcmxheTogYm9vbGVhbikge31cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlIHRoZSBkZWZhdWx0IHN0YXR1c2JhciAoZGFyayB0ZXh0LCBmb3IgbGlnaHQgYmFja2dyb3VuZHMpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzdHlsZURlZmF1bHQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhlIGxpZ2h0Q29udGVudCBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3R5bGVMaWdodENvbnRlbnQoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhlIGJsYWNrVHJhbnNsdWNlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHN0eWxlQmxhY2tUcmFuc2x1Y2VudCgpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGUgYmxhY2tPcGFxdWUgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIHN0eWxlQmxhY2tPcGFxdWUoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHN0YXR1cyBiYXIgdG8gYSBzcGVjaWZpYyBuYW1lZCBjb2xvci4gVmFsaWQgb3B0aW9uczpcclxuICAgKiBibGFjaywgZGFya0dyYXksIGxpZ2h0R3JheSwgd2hpdGUsIGdyYXksIHJlZCwgZ3JlZW4sIGJsdWUsIGN5YW4sIHllbGxvdywgbWFnZW50YSwgb3JhbmdlLCBwdXJwbGUsIGJyb3duLlxyXG4gICAqXHJcbiAgICogaU9TIG5vdGU6IHlvdSBtdXN0IGNhbGwgU3RhdHVzQmFyLm92ZXJsYXlzV2ViVmlldyhmYWxzZSkgdG8gZW5hYmxlIGNvbG9yIGNoYW5naW5nLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGNvbG9yIChmcm9tIGFib3ZlKVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBiYWNrZ3JvdW5kQ29sb3JCeU5hbWUoY29sb3JOYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgc3RhdHVzIGJhciB0byBhIHNwZWNpZmljIGhleCBjb2xvciAoQ1NTIHNob3J0aGFuZCBzdXBwb3J0ZWQhKS5cclxuICAgKlxyXG4gICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHJpbmcgIFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBiYWNrZ3JvdW5kQ29sb3JCeUhleFN0cmluZyhoZXhTdHJpbmc6IHN0cmluZykge31cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZSB0aGUgU3RhdHVzQmFyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGhpZGUoKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IHRoZSBTdGF0dXNCYXJcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdygpIHt9XHJcbn1cclxuIl19