import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Market = /** @class */ (function (_super) {
    __extends(Market, _super);
    function Market() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Market.prototype.open = function (appId) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    Market.prototype.search = function (keyword) { return cordova(this, "search", { "callbackStyle": "object", "successName": "success", "errorName": "failure", "platforms": ["Android"] }, arguments); };
    Market.pluginName = "Market";
    Market.plugin = "cordova-plugin-market";
    Market.pluginRef = "cordova.plugins.market";
    Market.repo = "https://github.com/xmartlabs/cordova-plugin-market";
    Market.platforms = ["Android", "iOS"];
    Market.decorators = [
        { type: Injectable }
    ];
    return Market;
}(AwesomeCordovaNativePlugin));
export { Market };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWFya2V0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTBCaEUsMEJBQTBCOzs7O0lBV3BELHFCQUFJLGFBQUMsS0FBYTtJQWVsQix1QkFBTSxhQUFDLE9BQWU7Ozs7Ozs7Z0JBM0J2QixVQUFVOztpQkExQlg7RUEyQjRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG4vKipcclxuICogQG5hbWUgTWFya2V0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBPcGVucyBhbiBhcHAncyBwYWdlIGluIHRoZSBtYXJrZXQgcGxhY2UgKEdvb2dsZSBQbGF5LCBBcHAgU3RvcmUpXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE1hcmtldCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tYXJrZXQvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtYXJrZXQ6IE1hcmtldCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLm1hcmtldC5vcGVuKCd5b3VyLnBhY2thZ2UubmFtZScpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdNYXJrZXQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1hcmtldCcsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm1hcmtldCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94bWFydGxhYnMvY29yZG92YS1wbHVnaW4tbWFya2V0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTWFya2V0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIE9wZW5zIGFuIGFwcCBpbiBHb29nbGUgUGxheSAvIEFwcCBTdG9yZVxyXG4gICAqIEBwYXJhbSBhcHBJZCB7c3RyaW5nfSBQYWNrYWdlIG5hbWVcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXHJcbiAgfSlcclxuICBvcGVuKGFwcElkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VhcmNoIGFwcHMgYnkga2V5d29yZFxyXG4gICAqIEBwYXJhbSBrZXl3b3JkIHtzdHJpbmd9IEtleXdvcmRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZmFpbHVyZScsXHJcbiAgICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG4gIH0pXHJcbiAgc2VhcmNoKGtleXdvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==