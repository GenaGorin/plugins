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
var ZBarOriginal = /** @class */ (function (_super) {
    __extends(ZBarOriginal, _super);
    function ZBarOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZBarOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    ZBarOriginal.pluginName = "ZBar";
    ZBarOriginal.plugin = "cordova-plugin-cszbar";
    ZBarOriginal.pluginRef = "cloudSky.zBar";
    ZBarOriginal.repo = "https://github.com/tjwoon/csZBar";
    ZBarOriginal.platforms = ["Android", "iOS"];
    return ZBarOriginal;
}(AwesomeCordovaNativePlugin));
var ZBar = new ZBarOriginal();
export { ZBar };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemJhci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUEyRWxFLHdCQUEwQjs7OztJQVFsRCxtQkFBSSxhQUFDLE9BQW9COzs7Ozs7ZUFwRjNCO0VBNEUwQiwwQkFBMEI7U0FBdkMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWkJhck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIEEgc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgdGl0bGUgdGV4dCAoQW5kcm9pZCBvbmx5KS5cclxuICAgKiBEZWZhdWx0OiBcIlNjYW4gUVIgQ29kZVwiXHJcbiAgICovXHJcbiAgdGV4dF90aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgcmVwcmVzZW50aW5nIHRoZSBpbnN0cnVjdGlvbiB0ZXh0IChBbmRyb2lkIG9ubHkpLlxyXG4gICAqIERlZmF1bHQ6IFwiUGxlYXNlIHBvaW50IHlvdXIgY2FtZXJhIGF0IHRoZSBRUiBjb2RlLlwiXHJcbiAgICovXHJcbiAgdGV4dF9pbnN0cnVjdGlvbnM/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3RyaW5nIGRlZmluaW5nIHRoZSBhY3RpdmUgY2FtZXJhIHdoZW4gb3BlbmluZyB0aGUgc2Nhbm5lci5cclxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IFwiZnJvbnRcIiwgXCJiYWNrXCJcclxuICAgKiBEZWZhdWx0OiBcImJhY2tcIlxyXG4gICAqL1xyXG4gIGNhbWVyYT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgZGVmaW5pbmcgdGhlIHN0YXRlIG9mIHRoZSBmbGFzaC5cclxuICAgKiBQb3NzaWJsZSB2YWx1ZXM6IFwib25cIiwgXCJvZmZcIiwgXCJhdXRvXCJcclxuICAgKiBEZWZhdWx0OiBcImF1dG9cIlxyXG4gICAqL1xyXG4gIGZsYXNoPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBIGJvb2xlYW4gdG8gc2hvdyBvciBoaWRlIGEgbGluZSBpbiB0aGUgY2VudGVyIG9mIHRoZSBzY2FubmVyLlxyXG4gICAqIERlZmF1bHQ6IHRydWVcclxuICAgKi9cclxuICBkcmF3U2lnaHQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgWkJhclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIFpCYXIgU2Nhbm5lciBQbHVnaW4gYWxsb3dzIHlvdSB0byBzY2FuIDJkIGJhcmNvZGVzLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNzemJhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFt6QmFyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vdGp3b29uL2NzWkJhcikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFpCYXIsIFpCYXJPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3piYXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB6YmFyOiBaQmFyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBvcHRpb25zOiBaQmFyT3B0aW9ucyA9IHtcclxuICogICAgICAgZmxhc2g6ICdvZmYnLFxyXG4gKiAgICAgICBkcmF3U2lnaHQ6IGZhbHNlXHJcbiAqICAgICB9XHJcbiAqXHJcbiAqIHRoaXMuemJhci5zY2FuKG9wdGlvbnMpXHJcbiAqICAgIC50aGVuKHJlc3VsdCA9PiB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7IC8vIFNjYW5uZWQgY29kZVxyXG4gKiAgICB9KVxyXG4gKiAgICAuY2F0Y2goZXJyb3IgPT4ge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7IC8vIEVycm9yIG1lc3NhZ2VcclxuICogICAgfSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBaQmFyT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1pCYXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNzemJhcicsXHJcbiAgcGx1Z2luUmVmOiAnY2xvdWRTa3kuekJhcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90andvb24vY3NaQmFyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWkJhciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVuIHRoZSBzY2FubmVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7IFpCYXJPcHRpb25zIH0gU2NhbiBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBzY2FubmVkIHN0cmluZywgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzY2FuKG9wdGlvbnM6IFpCYXJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19