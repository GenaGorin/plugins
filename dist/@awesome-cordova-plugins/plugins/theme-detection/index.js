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
var ThemeDetectionOriginal = /** @class */ (function (_super) {
    __extends(ThemeDetectionOriginal, _super);
    function ThemeDetectionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThemeDetectionOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThemeDetectionOriginal.prototype.isDarkModeEnabled = function () { return cordova(this, "isDarkModeEnabled", {}, arguments); };
    ThemeDetectionOriginal.pluginName = "ThemeDetection";
    ThemeDetectionOriginal.plugin = "cordova-plugin-theme-detection";
    ThemeDetectionOriginal.pluginRef = "cordova.plugins.ThemeDetection";
    ThemeDetectionOriginal.repo = "https://github.com/mariusbackes/cordova-plugin-theme-detection";
    ThemeDetectionOriginal.install = "cordova plugin add cordova-plugin-theme-detection";
    ThemeDetectionOriginal.installVariables = [];
    ThemeDetectionOriginal.platforms = ["iOS", "Android"];
    return ThemeDetectionOriginal;
}(AwesomeCordovaNativePlugin));
var ThemeDetection = new ThemeDetectionOriginal();
export { ThemeDetection };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGhlbWUtZGV0ZWN0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStDeEQsa0NBQTBCOzs7O0lBTzVELG9DQUFXO0lBVVgsMENBQWlCOzs7Ozs7Ozt5QkFqRW5CO0VBZ0RvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGhlbWVEZXRlY3Rpb25SZXNwb25zZSB7XHJcbiAgLy8gQm9vbGVhbiB2YWx1ZSBhYm91dCB0aGUgc3RhdHVzIG9mIHRoZSByZXF1ZXN0XHJcbiAgdmFsdWU6IGJvb2xlYW47XHJcblxyXG4gIC8vIE1lc3NhZ2UgZm9yIHJlYWRhYmxlIHVzYWdlXHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQGJldGFcclxuICogQG5hbWUgVGhlbWUgRGV0ZWN0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBkZXRlY3Qgd2hldGhlciBkYXJrIG1vZGUgaXMgZW5hYmxlZCBvciBub3RcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVGhlbWVEZXRlY3Rpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdGhlbWUtZGV0ZWN0aW9uJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB0aGVtZURldGVjdGlvbjogVGhlbWVEZXRlY3Rpb24pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy50aGVtZURldGVjdGlvbi5pc0F2YWlsYWJsZSgpXHJcbiAqICAgLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gKiAgICAgIGlmKHJlcy52YWx1ZSkge1xyXG4gKiAgICAgICAgdGhpcy50aGVtZURldGVjdGlvbi5pc0RhcmtNb2RlRW5hYmxlZCgpLnRoZW4oKHJlczogVGhlbWVEZXRlY3Rpb25SZXNwb25zZSkgPT4ge1xyXG4gKiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gKiAgICAgICAgfSlcclxuICogICAgICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKiAgICAgIH1cclxuICogICB9KVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUaGVtZURldGVjdGlvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tdGhlbWUtZGV0ZWN0aW9uJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuVGhlbWVEZXRlY3Rpb24nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWFyaXVzYmFja2VzL2NvcmRvdmEtcGx1Z2luLXRoZW1lLWRldGVjdGlvbicsXHJcbiAgaW5zdGFsbDogJ2NvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi10aGVtZS1kZXRlY3Rpb24nLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUaGVtZURldGVjdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+fVxyXG4gICAqICBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuIG9iamVjdCB0aGF0IGhhcyBhIGJvb2xlYW4gcHJvcGVydHkgd2hpY2ggZ2l2ZXMgaW5mb3JtYXRpb24gaWYgdGhlIGRldGVjdGlvbiBpcyBhdmFpbGFibGUgb3Igbm90XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8VGhlbWVEZXRlY3Rpb25SZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxUaGVtZURldGVjdGlvblJlc3BvbnNlPn1cclxuICAgKiAgUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhbiBvYmplY3QgdGhhdCBoYXMgYSBib29sZWFuIHByb3BlcnR5IHdoaWNoIGdpdmVzIGluZm9ybWF0aW9uIGlmIGRhcmsgbW9kZSBpcyBlbmFibGVkIG9yIG5vdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0RhcmtNb2RlRW5hYmxlZCgpOiBQcm9taXNlPFRoZW1lRGV0ZWN0aW9uUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19