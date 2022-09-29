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
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var ScreenOrientationOriginal = /** @class */ (function (_super) {
    __extends(ScreenOrientationOriginal, _super);
    function ScreenOrientationOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience enum for possible orientations
         */
        _this.ORIENTATIONS = {
            PORTRAIT_PRIMARY: 'portrait-primary',
            PORTRAIT_SECONDARY: 'portrait-secondary',
            LANDSCAPE_PRIMARY: 'landscape-primary',
            LANDSCAPE_SECONDARY: 'landscape-secondary',
            PORTRAIT: 'portrait',
            LANDSCAPE: 'landscape',
            ANY: 'any',
        };
        return _this;
    }
    ScreenOrientationOriginal.prototype.onChange = function () { return cordova(this, "onChange", { "eventObservable": true, "event": "orientationchange", "element": "window" }, arguments); };
    ScreenOrientationOriginal.prototype.lock = function (orientation) { return cordova(this, "lock", { "otherPromise": true }, arguments); };
    ScreenOrientationOriginal.prototype.unlock = function () { return cordova(this, "unlock", { "sync": true }, arguments); };
    Object.defineProperty(ScreenOrientationOriginal.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    ScreenOrientationOriginal.pluginName = "ScreenOrientation";
    ScreenOrientationOriginal.plugin = "cordova-plugin-screen-orientation";
    ScreenOrientationOriginal.pluginRef = "screen.orientation";
    ScreenOrientationOriginal.repo = "https://github.com/apache/cordova-plugin-screen-orientation";
    ScreenOrientationOriginal.platforms = ["Android", "iOS", "Windows"];
    return ScreenOrientationOriginal;
}(AwesomeCordovaNativePlugin));
var ScreenOrientation = new ScreenOrientationOriginal();
export { ScreenOrientation };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2NyZWVuLW9yaWVudGF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBd0RLLHFDQUEwQjs7O1FBQy9EOztXQUVHO1FBQ0gsa0JBQVksR0FBRztZQUNiLGdCQUFnQixFQUFFLGtCQUFrQjtZQUNwQyxrQkFBa0IsRUFBRSxvQkFBb0I7WUFDeEMsaUJBQWlCLEVBQUUsbUJBQW1CO1lBQ3RDLG1CQUFtQixFQUFFLHFCQUFxQjtZQUMxQyxRQUFRLEVBQUUsVUFBVTtZQUNwQixTQUFTLEVBQUUsV0FBVztZQUN0QixHQUFHLEVBQUUsS0FBSztTQUNYLENBQUM7OztJQVdGLG9DQUFRO0lBWVIsZ0NBQUksYUFBQyxXQUFtQjtJQVF4QixrQ0FBTTswQkFNTixtQ0FBSTs7Ozs7Ozs7Ozs7NEJBM0dOO0VBMER1QywwQkFBMEI7U0FBcEQsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTY3JlZW4gT3JpZW50YXRpb25cclxuICogQHByZW1pZXIgc2NyZWVuLW9yaWVudGF0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBzZXQvbG9jayB0aGUgc2NyZWVuIG9yaWVudGF0aW9uIGluIGEgY29tbW9uIHdheS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb25gLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbU2NyZWVuIE9yaWVudGF0aW9uIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNjcmVlbi1vcmllbnRhdGlvbikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNjcmVlbk9yaWVudGF0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NjcmVlbi1vcmllbnRhdGlvbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNjcmVlbk9yaWVudGF0aW9uOiBTY3JlZW5PcmllbnRhdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAvLyBnZXQgY3VycmVudFxyXG4gKiBjb25zb2xlLmxvZyh0aGlzLnNjcmVlbk9yaWVudGF0aW9uLnR5cGUpOyAvLyBsb2dzIHRoZSBjdXJyZW50IG9yaWVudGF0aW9uLCBleGFtcGxlOiAnbGFuZHNjYXBlJ1xyXG4gKlxyXG4gKiAvLyBzZXQgdG8gbGFuZHNjYXBlXHJcbiAqIHRoaXMuc2NyZWVuT3JpZW50YXRpb24ubG9jayh0aGlzLnNjcmVlbk9yaWVudGF0aW9uLk9SSUVOVEFUSU9OUy5MQU5EU0NBUEUpO1xyXG4gKlxyXG4gKiAvLyBhbGxvdyB1c2VyIHJvdGF0ZVxyXG4gKiB0aGlzLnNjcmVlbk9yaWVudGF0aW9uLnVubG9jaygpO1xyXG4gKlxyXG4gKiAvLyBkZXRlY3Qgb3JpZW50YXRpb24gY2hhbmdlc1xyXG4gKiB0aGlzLnNjcmVlbk9yaWVudGF0aW9uLm9uQ2hhbmdlKCkuc3Vic2NyaWJlKFxyXG4gKiAgICAoKSA9PiB7XHJcbiAqICAgICAgICBjb25zb2xlLmxvZyhcIk9yaWVudGF0aW9uIENoYW5nZWRcIik7XHJcbiAqICAgIH1cclxuICogKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBhZHZhbmNlZFxyXG4gKlxyXG4gKiBBY2NlcHRlZCBvcmllbnRhdGlvbiB2YWx1ZXM6XHJcbiAqXHJcbiAqIHwgVmFsdWUgICAgICAgICAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxyXG4gKiB8IHBvcnRyYWl0LXByaW1hcnkgICAgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBwcmltYXJ5IHBvcnRyYWl0IG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgcG9ydHJhaXQtc2Vjb25kYXJ5ICAgICAgICAgICAgfCBUaGUgb3JpZW50YXRpb24gaXMgaW4gdGhlIHNlY29uZGFyeSBwb3J0cmFpdCBtb2RlLiAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogfCBsYW5kc2NhcGUtcHJpbWFyeSAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBpbiB0aGUgcHJpbWFyeSBsYW5kc2NhcGUgbW9kZS4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiB8IGxhbmRzY2FwZS1zZWNvbmRhcnkgICAgICAgICAgIHwgVGhlIG9yaWVudGF0aW9uIGlzIGluIHRoZSBzZWNvbmRhcnkgbGFuZHNjYXBlIG1vZGUuICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqIHwgcG9ydHJhaXQgICAgICAgICAgICAgICAgICAgICAgfCBUaGUgb3JpZW50YXRpb24gaXMgZWl0aGVyIHBvcnRyYWl0LXByaW1hcnkgb3IgcG9ydHJhaXQtc2Vjb25kYXJ5IChzZW5zb3IpLiAgIHxcclxuICogfCBsYW5kc2NhcGUgICAgICAgICAgICAgICAgICAgICB8IFRoZSBvcmllbnRhdGlvbiBpcyBlaXRoZXIgbGFuZHNjYXBlLXByaW1hcnkgb3IgbGFuZHNjYXBlLXNlY29uZGFyeSAoc2Vuc29yKS4gfFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NjcmVlbk9yaWVudGF0aW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zY3JlZW4tb3JpZW50YXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ3NjcmVlbi5vcmllbnRhdGlvbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc2NyZWVuLW9yaWVudGF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTY3JlZW5PcmllbnRhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBlbnVtIGZvciBwb3NzaWJsZSBvcmllbnRhdGlvbnNcclxuICAgKi9cclxuICBPUklFTlRBVElPTlMgPSB7XHJcbiAgICBQT1JUUkFJVF9QUklNQVJZOiAncG9ydHJhaXQtcHJpbWFyeScsXHJcbiAgICBQT1JUUkFJVF9TRUNPTkRBUlk6ICdwb3J0cmFpdC1zZWNvbmRhcnknLFxyXG4gICAgTEFORFNDQVBFX1BSSU1BUlk6ICdsYW5kc2NhcGUtcHJpbWFyeScsXHJcbiAgICBMQU5EU0NBUEVfU0VDT05EQVJZOiAnbGFuZHNjYXBlLXNlY29uZGFyeScsXHJcbiAgICBQT1JUUkFJVDogJ3BvcnRyYWl0JyxcclxuICAgIExBTkRTQ0FQRTogJ2xhbmRzY2FwZScsXHJcbiAgICBBTlk6ICdhbnknLFxyXG4gIH07XHJcbiAgLyoqXHJcbiAgICogTGlzdGVuIHRvIG9yaWVudGF0aW9uIGNoYW5nZSBldmVudFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdvcmllbnRhdGlvbmNoYW5nZScsXHJcbiAgICBlbGVtZW50OiAnd2luZG93JyxcclxuICB9KVxyXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTG9jayB0aGUgb3JpZW50YXRpb24gdG8gdGhlIHBhc3NlZCB2YWx1ZS5cclxuICAgKiBTZWUgYmVsb3cgZm9yIGFjY2VwdGVkIHZhbHVlc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIG9yaWVudGF0aW9uIHtzdHJpbmd9IFRoZSBvcmllbnRhdGlvbiB3aGljaCBzaG91bGQgYmUgbG9ja2VkLiBBY2NlcHRlZCB2YWx1ZXMgc2VlIHRhYmxlIGFib3ZlLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvdGhlclByb21pc2U6IHRydWUgfSlcclxuICBsb2NrKG9yaWVudGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5sb2NrIGFuZCBhbGxvdyBhbGwgb3JpZW50YXRpb25zLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHVubG9jaygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBvcmllbnRhdGlvbiBvZiB0aGUgZGV2aWNlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG4iXX0=