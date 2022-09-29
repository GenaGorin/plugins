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
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var DeviceOriginal = /** @class */ (function (_super) {
    __extends(DeviceOriginal, _super);
    function DeviceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(DeviceOriginal.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DeviceOriginal.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: false,
        configurable: true
    });
    DeviceOriginal.pluginName = "Device";
    DeviceOriginal.plugin = "cordova-plugin-device";
    DeviceOriginal.pluginRef = "device";
    DeviceOriginal.repo = "https://github.com/apache/cordova-plugin-device";
    DeviceOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return DeviceOriginal;
}(AwesomeCordovaNativePlugin));
var Device = new DeviceOriginal();
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHNFQUF1RCxNQUFNLCtCQUErQixDQUFDOztJQTRCeEUsMEJBQTBCOzs7OzBCQUdwRCwyQkFBTzs7Ozs7OzBCQU9QLHlCQUFLOzs7Ozs7MEJBSUwsNEJBQVE7Ozs7OzswQkFJUix3QkFBSTs7Ozs7OzBCQUlKLDJCQUFPOzs7Ozs7MEJBSVAsZ0NBQVk7Ozs7OzswQkFJWiw2QkFBUzs7Ozs7OzBCQUlULDBCQUFNOzs7Ozs7Ozs7OztpQkEvRFI7RUE2QjRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IHdpbmRvdzogYW55O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIERldmljZVxyXG4gKiBAcHJlbWllciBkZXZpY2VcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFjY2VzcyBpbmZvcm1hdGlvbiBhYm91dCB0aGUgdW5kZXJseWluZyBkZXZpY2UgYW5kIHBsYXRmb3JtLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBEZXZpY2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGV2aWNlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGV2aWNlOiBEZXZpY2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc29sZS5sb2coJ0RldmljZSBVVUlEIGlzOiAnICsgdGhpcy5kZXZpY2UudXVpZCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0RldmljZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcclxuICBwbHVnaW5SZWY6ICdkZXZpY2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRldmljZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEZXZpY2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqIEdldCB0aGUgdmVyc2lvbiBvZiBDb3Jkb3ZhIHJ1bm5pbmcgb24gdGhlIGRldmljZS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBjb3Jkb3ZhOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBkZXZpY2UubW9kZWwgcmV0dXJucyB0aGUgbmFtZSBvZiB0aGUgZGV2aWNlJ3MgbW9kZWwgb3IgcHJvZHVjdC4gVGhlIHZhbHVlIGlzIHNldFxyXG4gICAqIGJ5IHRoZSBkZXZpY2UgbWFudWZhY3R1cmVyIGFuZCBtYXkgYmUgZGlmZmVyZW50IGFjcm9zcyB2ZXJzaW9ucyBvZiB0aGUgc2FtZSBwcm9kdWN0LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIG1vZGVsOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG9wZXJhdGluZyBzeXN0ZW0gbmFtZS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBwbGF0Zm9ybTogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBVbml2ZXJzYWxseSBVbmlxdWUgSWRlbnRpZmllciAoVVVJRCkuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdXVpZDogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBvcGVyYXRpbmcgc3lzdGVtIHZlcnNpb24uICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdmVyc2lvbjogc3RyaW5nO1xyXG5cclxuICAvKiogR2V0IHRoZSBkZXZpY2UncyBtYW51ZmFjdHVyZXIuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgbWFudWZhY3R1cmVyOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBXaGV0aGVyIHRoZSBkZXZpY2UgaXMgcnVubmluZyBvbiBhIHNpbXVsYXRvci4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBpc1ZpcnR1YWw6IGJvb2xlYW47XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSBoYXJkd2FyZSBzZXJpYWwgbnVtYmVyLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHNlcmlhbDogc3RyaW5nO1xyXG59XHJcbiJdfQ==