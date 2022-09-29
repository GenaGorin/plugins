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
var MarketOriginal = /** @class */ (function (_super) {
    __extends(MarketOriginal, _super);
    function MarketOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MarketOriginal.prototype.open = function (appId) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    MarketOriginal.prototype.search = function (keyword) { return cordova(this, "search", { "callbackStyle": "object", "successName": "success", "errorName": "failure", "platforms": ["Android"] }, arguments); };
    MarketOriginal.pluginName = "Market";
    MarketOriginal.plugin = "cordova-plugin-market";
    MarketOriginal.pluginRef = "cordova.plugins.market";
    MarketOriginal.repo = "https://github.com/xmartlabs/cordova-plugin-market";
    MarketOriginal.platforms = ["Android", "iOS"];
    return MarketOriginal;
}(AwesomeCordovaNativePlugin));
var Market = new MarketOriginal();
export { Market };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWFya2V0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTBCaEUsMEJBQTBCOzs7O0lBV3BELHFCQUFJLGFBQUMsS0FBYTtJQWVsQix1QkFBTSxhQUFDLE9BQWU7Ozs7OztpQkFyRHhCO0VBMkI0QiwwQkFBMEI7U0FBekMsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIE1hcmtldFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogT3BlbnMgYW4gYXBwJ3MgcGFnZSBpbiB0aGUgbWFya2V0IHBsYWNlIChHb29nbGUgUGxheSwgQXBwIFN0b3JlKVxyXG4gKlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBNYXJrZXQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbWFya2V0L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWFya2V0OiBNYXJrZXQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5tYXJrZXQub3BlbigneW91ci5wYWNrYWdlLm5hbWUnKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTWFya2V0JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1tYXJrZXQnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5tYXJrZXQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20veG1hcnRsYWJzL2NvcmRvdmEtcGx1Z2luLW1hcmtldCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1hcmtldCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVucyBhbiBhcHAgaW4gR29vZ2xlIFBsYXkgLyBBcHAgU3RvcmVcclxuICAgKiBAcGFyYW0gYXBwSWQge3N0cmluZ30gUGFja2FnZSBuYW1lXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxyXG4gIH0pXHJcbiAgb3BlbihhcHBJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlYXJjaCBhcHBzIGJ5IGtleXdvcmRcclxuICAgKiBAcGFyYW0ga2V5d29yZCB7c3RyaW5nfSBLZXl3b3JkXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxyXG4gICAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxuICB9KVxyXG4gIHNlYXJjaChrZXl3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=