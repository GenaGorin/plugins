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
var TapticEngineOriginal = /** @class */ (function (_super) {
    __extends(TapticEngineOriginal, _super);
    function TapticEngineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngineOriginal.prototype.selection = function () { return cordova(this, "selection", {}, arguments); };
    TapticEngineOriginal.prototype.notification = function (options) { return cordova(this, "notification", {}, arguments); };
    TapticEngineOriginal.prototype.impact = function (options) { return cordova(this, "impact", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionStart = function () { return cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionChanged = function () { return cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngineOriginal.prototype.gestureSelectionEnd = function () { return cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngineOriginal.pluginName = "TapticEngine";
    TapticEngineOriginal.plugin = "cordova-plugin-taptic-engine";
    TapticEngineOriginal.pluginRef = "TapticEngine";
    TapticEngineOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngineOriginal.platforms = ["iOS"];
    return TapticEngineOriginal;
}(AwesomeCordovaNativePlugin));
var TapticEngine = new TapticEngineOriginal();
export { TapticEngine };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGFwdGljLWVuZ2luZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzFELGdDQUEwQjs7OztJQU8xRCxnQ0FBUztJQVlULG1DQUFZLGFBQUMsT0FBa0Q7SUFhL0QsNkJBQU0sYUFBQyxPQUFnRDtJQVV2RCw0Q0FBcUI7SUFVckIsOENBQXVCO0lBVXZCLDBDQUFtQjs7Ozs7O3VCQS9GckI7RUFpQ2tDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFRhcHRpYyBFbmdpbmVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFuIElvbmljIHBsdWdpbiB0byB1c2UgVGFwdGljIEVuZ2luZSBBUEkgb24gaVBob25lIDcsIDcgUGx1cyBvciBuZXdlci5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVGFwdGljRW5naW5lIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RhcHRpYy1lbmdpbmUvbmd4JztcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGFwdGljOiBUYXB0aWNFbmdpbmUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy50YXB0aWMuc2VsZWN0aW9uKCk7XHJcbiAqXHJcbiAqIHRoaXMudGFwdGljLm5vdGlmaWNhdGlvbigpO1xyXG4gKlxyXG4gKiB0aGlzLnRhcHRpYy5pbXBhY3QoKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVGFwdGljRW5naW5lJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10YXB0aWMtZW5naW5lJyxcclxuICBwbHVnaW5SZWY6ICdUYXB0aWNFbmdpbmUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tdGFwdGljLWVuZ2luZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUYXB0aWNFbmdpbmUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVXNlIHNlbGVjdGlvbiBmZWVkYmFjayBnZW5lcmF0b3JzIHRvIGluZGljYXRlIGEgY2hhbmdlIGluIHNlbGVjdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBvbiBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZWxlY3Rpb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIHRvIGluZGljYXRlIHN1Y2Nlc3MvZmFpbHVyZS93YXJuaW5nIHRvIHRoZSB1c2VyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge09iamVjdH0gc2hvdWxkIGJlIG9mIHRoZSB0eXBlIHsgdHlwZTogJ3N1Y2Nlc3MnIH0gKG9yICd3YXJuaW5nJy8nZXJyb3InKVxyXG4gICAqIEBwYXJhbSB7J3N1Y2Nlc3MnIHwgJ3dhcm5pbmcnIHwgJ2Vycm9yJ30gb3B0aW9ucy50eXBlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBvbiBzdWNjZXNzIGFuZCByZWplY3RzIG9uIGVycm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG5vdGlmaWNhdGlvbihvcHRpb25zOiB7IHR5cGU6ICdzdWNjZXNzJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2UgdGhpcyB0byBpbmRpY2F0ZSBzdWNjZXNzL2ZhaWx1cmUvd2FybmluZyB0byB0aGUgdXNlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPYmplY3R9IHNob3VsZCBiZSBvZiB0aGUgdHlwZSB7IHN0eWxlOiAnbGlnaHQnIH0gKG9yICdtZWRpdW0nLydoZWF2eScpXHJcbiAgICogQHBhcmFtIHsnbGlnaHQnIHwgJ21lZGl1bScgfCAnaGVhdnknfSBvcHRpb25zLnR5cGVcclxuICAgKiBAcGFyYW0gb3B0aW9ucy5zdHlsZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBvbiBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbXBhY3Qob3B0aW9uczogeyBzdHlsZTogJ2xpZ2h0JyB8ICdtZWRpdW0nIHwgJ2hlYXZ5JyB9KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlbGwgdGhlIHRhcHRpYyBlbmdpbmUgdGhhdCBhIGdlc3R1cmUgZm9yIGEgc2VsZWN0aW9uIGNoYW5nZSBpcyBzdGFydGluZy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlc3R1cmVTZWxlY3Rpb25TdGFydCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGVsbCB0aGUgdGFwdGljIGVuZ2luZSB0aGF0IGEgc2VsZWN0aW9uIGNoYW5nZWQgZHVyaW5nIGEgZ2VzdHVyZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlc3R1cmVTZWxlY3Rpb25DaGFuZ2VkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUZWxsIHRoZSB0YXB0aWMgZW5naW5lIHdlIGFyZSBkb25lIHdpdGggYSBnZXN0dXJlLiBUaGlzIG5lZWRzIHRvIGJlIGNhbGxlZCBsZXN0IHJlc291cmNlcyBhcmUgbm90IHByb3Blcmx5IHJlY3ljbGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2VzdHVyZVNlbGVjdGlvbkVuZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=