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
var FlashlightOriginal = /** @class */ (function (_super) {
    __extends(FlashlightOriginal, _super);
    function FlashlightOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FlashlightOriginal.prototype.available = function () { return cordova(this, "available", {}, arguments); };
    FlashlightOriginal.prototype.switchOn = function () { return cordova(this, "switchOn", {}, arguments); };
    FlashlightOriginal.prototype.switchOff = function () { return cordova(this, "switchOff", {}, arguments); };
    FlashlightOriginal.prototype.toggle = function () { return cordova(this, "toggle", {}, arguments); };
    FlashlightOriginal.prototype.isSwitchedOn = function () { return cordova(this, "isSwitchedOn", { "sync": true }, arguments); };
    FlashlightOriginal.pluginName = "Flashlight";
    FlashlightOriginal.plugin = "cordova-plugin-flashlight";
    FlashlightOriginal.pluginRef = "window.plugins.flashlight";
    FlashlightOriginal.repo = "https://github.com/EddyVerbruggen/Flashlight-PhoneGap-Plugin";
    FlashlightOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return FlashlightOriginal;
}(AwesomeCordovaNativePlugin));
var Flashlight = new FlashlightOriginal();
export { Flashlight };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmxhc2hsaWdodC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUEyQjVELDhCQUEwQjs7OztJQU94RCw4QkFBUztJQVVULDZCQUFRO0lBVVIsOEJBQVM7SUFVVCwyQkFBTTtJQVlOLGlDQUFZOzs7Ozs7cUJBN0VkO0VBNEJnQywwQkFBMEI7U0FBN0MsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGbGFzaGxpZ2h0XHJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN3aXRjaCB0aGUgZmxhc2hsaWdodCAvIHRvcmNoIG9mIHRoZSBkZXZpY2Ugb24gYW5kIG9mZi5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1mbGFzaGxpZ2h0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0ZsYXNobGlnaHQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9GbGFzaGxpZ2h0LVBob25lR2FwLVBsdWdpbikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZsYXNobGlnaHQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmxhc2hsaWdodC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZsYXNobGlnaHQ6IEZsYXNobGlnaHQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5mbGFzaGxpZ2h0LnN3aXRjaE9uKCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZsYXNobGlnaHQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZsYXNobGlnaHQnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5wbHVnaW5zLmZsYXNobGlnaHQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vRmxhc2hsaWdodC1QaG9uZUdhcC1QbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmxhc2hsaWdodCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGZsYXNobGlnaHQgaXMgYXZhaWxhYmxlXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiBzdGF0aW5nIGlmIHRoZSBmbGFzaGxpZ2h0IGlzIGF2YWlsYWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3dpdGNoZXMgdGhlIGZsYXNobGlnaHQgb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzd2l0Y2hPbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN3aXRjaGVzIHRoZSBmbGFzaGxpZ2h0IG9mZlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN3aXRjaE9mZigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvZ2dsZXMgdGhlIGZsYXNobGlnaHRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRvZ2dsZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoZSBmbGFzaGxpZ2h0IGlzIHR1cm5lZCBvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBpc1N3aXRjaGVkT24oKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==