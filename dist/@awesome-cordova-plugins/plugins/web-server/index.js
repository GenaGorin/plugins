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
import { Observable } from 'rxjs';
var WebServerOriginal = /** @class */ (function (_super) {
    __extends(WebServerOriginal, _super);
    function WebServerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServerOriginal.prototype.start = function (port) { return cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServerOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebServerOriginal.prototype.onRequest = function () { return cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServerOriginal.prototype.sendResponse = function (requestId, responseObject) { return cordova(this, "sendResponse", {}, arguments); };
    WebServerOriginal.pluginName = "WebServer";
    WebServerOriginal.plugin = "cordova-plugin-webserver2";
    WebServerOriginal.pluginRef = "window.webserver";
    WebServerOriginal.repo = "https://github.com/nguyenthanh1995/cordova-plugin-webserver2.git";
    WebServerOriginal.platforms = ["Android", "iOS"];
    return WebServerOriginal;
}(AwesomeCordovaNativePlugin));
var WebServer = new WebServerOriginal();
export { WebServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNlcnZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQTZESCw2QkFBMEI7Ozs7SUFTdkQseUJBQUssYUFBQyxJQUFhO0lBUW5CLHdCQUFJO0lBY0osNkJBQVM7SUFZVCxnQ0FBWSxhQUFDLFNBQWlCLEVBQUUsY0FBd0I7Ozs7OztvQkExRzFEO0VBK0QrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbiAgYm9keT86IHN0cmluZztcclxuICBwYXRoPzogc3RyaW5nO1xyXG4gIGhlYWRlcnM6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdCB7XHJcbiAgcmVxdWVzdElkOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIGhlYWRlcnM6IHN0cmluZztcclxuICBtZXRob2Q6ICdQT1NUJyB8ICdHRVQnIHwgJ1BVVCcgfCAnUEFUQ0gnIHwgJ0RFTEVURSc7XHJcbiAgcGF0aDogc3RyaW5nO1xyXG4gIHF1ZXJ5OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBXZWIgU2VydmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN0YXJ0IGEgbG9jYWwgZHluYW1pYyBjb250ZW50IHdlYiBzZXJ2ZXIgZm9yIGFuZHJvaWQgYW5kIGlPUyBkZXZpY2VzLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBXZWJTZXJ2ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViLXNlcnZlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYlNlcnZlcjogV2ViU2VydmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMud2ViU2VydmVyLm9uUmVxdWVzdCgpLnN1YnNjcmliZShkYXRhID0+IHtcclxuICogICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICogICBjb25zdCByZXM6IFJlc3BvbnNlID0ge1xyXG4gKiAgICAgc3RhdHVzOiAyMDAsXHJcbiAqICAgICBib2R5OiAnJyxcclxuICogICAgIGhlYWRlcnM6IHtcclxuICogICAgICAgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L2h0bWwnXHJcbiAqICAgICB9XHJcbiAqICAgfTtcclxuICpcclxuICogICB0aGlzLndlYlNlcnZlci5zZW5kUmVzcG9uc2UoZGF0YS5yZXF1ZXN0SWQsIHJlcylcclxuICogICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy53ZWJTZXJ2ZXIuc3RhcnQoODApXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBSZXNwb25zZVxyXG4gKiBSZXF1ZXN0XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViU2VydmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzZXJ2ZXIyJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cud2Vic2VydmVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25ndXllbnRoYW5oMTk5NS9jb3Jkb3ZhLXBsdWdpbi13ZWJzZXJ2ZXIyLmdpdCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYlNlcnZlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIHN0YXJ0IHlvdXIgd2Vic2VydmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gUG9ydCBudW1iZXIgKGRlZmF1bHQgdG8gODA4MClcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzdGFydChwb3J0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHdpbGwgc3RvcCB5b3VyIHdlYnNlcnZlci5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgcmV0dXJucyBhbiBvYnNlcnZhYmxlIHRoYXQgc3RyZWFtcyBIVFRQIHJlcXVlc3RzIHRvIGFuIG9ic2VydmVyLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8UmVxdWVzdD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byByZXNvbHZlIGFzIGEgUmVxdWVzdCBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxyXG4gIH0pXHJcbiAgb25SZXF1ZXN0KCk6IE9ic2VydmFibGU8UmVxdWVzdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc2VuZHMgYSByZXNwb25zZSB0byBhIHJlcXVlc3QuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmVxdWVzdElkIHtzdHJpbmd9IFJlcXVlc3QgSUQgdG8gcmVzcG9uZCB0b1xyXG4gICAqIEBwYXJhbSByZXNwb25zZU9iamVjdCB7UmVzcG9uc2V9IFJlc3BvbnNlIG9iamVjdFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZW5kUmVzcG9uc2UocmVxdWVzdElkOiBzdHJpbmcsIHJlc3BvbnNlT2JqZWN0OiBSZXNwb25zZSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==