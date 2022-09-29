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
var InstagramOriginal = /** @class */ (function (_super) {
    __extends(InstagramOriginal, _super);
    function InstagramOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InstagramOriginal.prototype.isInstalled = function () { return cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.share = function (canvasIdOrDataUrl, caption) { return cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    InstagramOriginal.prototype.shareAsset = function (assetLocalIdentifier) { return cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    InstagramOriginal.pluginName = "Instagram";
    InstagramOriginal.plugin = "cordova-instagram-plugin";
    InstagramOriginal.pluginRef = "Instagram";
    InstagramOriginal.repo = "https://github.com/vstirbu/InstagramPlugin";
    InstagramOriginal.platforms = ["Android", "iOS"];
    return InstagramOriginal;
}(AwesomeCordovaNativePlugin));
var Instagram = new InstagramOriginal();
export { Instagram };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zdGFncmFtL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTJCN0QsNkJBQTBCOzs7O0lBU3ZELCtCQUFXO0lBZVgseUJBQUssYUFBQyxpQkFBeUIsRUFBRSxPQUFnQjtJQWFqRCw4QkFBVSxhQUFDLG9CQUE0Qjs7Ozs7O29CQWpFekM7RUE0QitCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEluc3RhZ3JhbVxyXG4gKiBAZGVzY3JpcHRpb24gU2hhcmUgYSBwaG90byB3aXRoIHRoZSBpbnN0YWdyYW0gYXBwXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEluc3RhZ3JhbSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbnN0YWdyYW0vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbnN0YWdyYW06IEluc3RhZ3JhbSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmluc3RhZ3JhbS5zaGFyZSgnZGF0YTppbWFnZS9wbmc7dWhkdWhmM2hmaWYzMycsICdDYXB0aW9uJylcclxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnU2hhcmVkIScpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbnN0YWdyYW0nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtaW5zdGFncmFtLXBsdWdpbicsXHJcbiAgcGx1Z2luUmVmOiAnSW5zdGFncmFtJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3ZzdGlyYnUvSW5zdGFncmFtUGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW5zdGFncmFtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIERldGVjdCBpZiB0aGUgSW5zdGFncmFtIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZCBvbiB0aGUgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbnxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybnMgYSBib29sZWFuIHZhbHVlIGlmIGluc3RhbGxlZCwgb3IgdGhlIGFwcCB2ZXJzaW9uIG9uIGFuZHJvaWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXHJcbiAgfSlcclxuICBpc0luc3RhbGxlZCgpOiBQcm9taXNlPGJvb2xlYW4gfCBzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNoYXJlIGFuIGltYWdlIG9uIEluc3RhZ3JhbVxyXG4gICAqIE5vdGU6IEluc3RhZ3JhbSBhcHAgc3RvcHBlZCBhY2NlcHRpbmcgcHJlLWZpbGxlZCBjYXB0aW9ucyBvbiBib3RoIGlPUyBhbmQgQW5kcm9pZC4gQXMgYSB3b3JrLWFyb3VuZCwgdGhlIGNhcHRpb24gaXMgY29waWVkIHRvIHRoZSBjbGlwYm9hcmQuIFlvdSBoYXZlIHRvIGluZm9ybSB5b3VyIHVzZXJzIHRvIHBhc3RlIHRoZSBjYXB0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNhbnZhc0lkT3JEYXRhVXJsIFRoZSBjYW52YXMgZWxlbWVudCBpZCBvciB0aGUgZGF0YVVSTCBvZiB0aGUgaW1hZ2UgdG8gc2hhcmVcclxuICAgKiBAcGFyYW0gY2FwdGlvbiBUaGUgY2FwdGlvbiBvZiB0aGUgaW1hZ2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBpbWFnZSB3YXMgc2hhcmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxyXG4gIH0pXHJcbiAgc2hhcmUoY2FudmFzSWRPckRhdGFVcmw6IHN0cmluZywgY2FwdGlvbj86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaGFyZSBhIGxpYnJhcnkgYXNzZXQgb3IgdmlkZW9cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhc3NldExvY2FsSWRlbnRpZmllciBBIGxvY2FsIGZpbGVVUklcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBpbWFnZSB3YXMgc2hhcmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgc2hhcmVBc3NldChhc3NldExvY2FsSWRlbnRpZmllcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19