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
var VibrationOriginal = /** @class */ (function (_super) {
    __extends(VibrationOriginal, _super);
    function VibrationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VibrationOriginal.prototype.vibrate = function (time) { return cordova(this, "vibrate", { "sync": true }, arguments); };
    VibrationOriginal.pluginName = "Vibration";
    VibrationOriginal.plugin = "cordova-plugin-vibration";
    VibrationOriginal.pluginRef = "navigator";
    VibrationOriginal.repo = "https://github.com/apache/cordova-plugin-vibration";
    VibrationOriginal.platforms = ["Android", "iOS", "Windows"];
    return VibrationOriginal;
}(AwesomeCordovaNativePlugin));
var Vibration = new VibrationOriginal();
export { Vibration };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlicmF0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXFDN0QsNkJBQTBCOzs7O0lBU3ZELDJCQUFPLGFBQUMsSUFBdUI7Ozs7OztvQkEvQ2pDO0VBc0MrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBWaWJyYXRpb25cclxuICogQHByZW1pZXIgdmlicmF0aW9uXHJcbiAqIEBkZXNjcmlwdGlvbiBWaWJyYXRlcyB0aGUgZGV2aWNlXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFZpYnJhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy92aWJyYXRpb24vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJyYXRpb246IFZpYnJhdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBWaWJyYXRlIHRoZSBkZXZpY2UgZm9yIGEgc2Vjb25kXHJcbiAqIC8vIER1cmF0aW9uIGlzIGlnbm9yZWQgb24gaU9TLlxyXG4gKiB0aGlzLnZpYnJhdGlvbi52aWJyYXRlKDEwMDApO1xyXG4gKlxyXG4gKiAvLyBWaWJyYXRlIDIgc2Vjb25kc1xyXG4gKiAvLyBQYXVzZSBmb3IgMSBzZWNvbmRcclxuICogLy8gVmlicmF0ZSBmb3IgMiBzZWNvbmRzXHJcbiAqIC8vIFBhdHRlcm5zIHdvcmsgb24gQW5kcm9pZCBhbmQgV2luZG93cyBvbmx5XHJcbiAqIHRoaXMudmlicmF0aW9uLnZpYnJhdGUoWzIwMDAsMTAwMCwyMDAwXSk7XHJcbiAqXHJcbiAqIC8vIFN0b3AgYW55IGN1cnJlbnQgdmlicmF0aW9ucyBpbW1lZGlhdGVseVxyXG4gKiAvLyBXb3JrcyBvbiBBbmRyb2lkIGFuZCBXaW5kb3dzIG9ubHlcclxuICogdGhpcy52aWJyYXRpb24udmlicmF0ZSgwKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVmlicmF0aW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi12aWJyYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tdmlicmF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWaWJyYXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVmlicmF0ZXMgdGhlIGRldmljZSBmb3IgZ2l2ZW4gYW1vdW50IG9mIHRpbWUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGltZSB7bnVtYmVyfG51bWJlcltdfSBNaWxsaXNlY29uZHMgdG8gdmlicmF0ZSB0aGUgZGV2aWNlLiBJZiBwYXNzZWQgYW4gYXJyYXkgb2YgbnVtYmVycywgaXQgd2lsbCBkZWZpbmUgYSB2aWJyYXRpb24gcGF0dGVybi4gUGFzcyAwIHRvIHN0b3AgYW55IHZpYnJhdGlvbiBpbW1lZGlhdGVseS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgdmlicmF0ZSh0aW1lOiBudW1iZXIgfCBudW1iZXJbXSkge31cclxufVxyXG4iXX0=