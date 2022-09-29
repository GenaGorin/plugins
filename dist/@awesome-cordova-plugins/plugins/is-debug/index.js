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
var IsDebugOriginal = /** @class */ (function (_super) {
    __extends(IsDebugOriginal, _super);
    function IsDebugOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebugOriginal.prototype.getIsDebug = function () { return cordova(this, "getIsDebug", {}, arguments); };
    IsDebugOriginal.pluginName = "IsDebug";
    IsDebugOriginal.plugin = "cordova-plugin-is-debug";
    IsDebugOriginal.pluginRef = "cordova.plugins.IsDebug";
    IsDebugOriginal.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebugOriginal.platforms = ["Android", "iOS"];
    return IsDebugOriginal;
}(AwesomeCordovaNativePlugin));
var IsDebug = new IsDebugOriginal();
export { IsDebug };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaXMtZGVidWcvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBNkIvRCwyQkFBMEI7Ozs7SUFPckQsNEJBQVU7Ozs7OztrQkFyQ1o7RUE4QjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIElzIERlYnVnXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBEZXRlY3QgaWYgdGhlIGFwcCBpcyBydW5uaW5nIGluIGRlYnVnIG1vZGUgb3Igbm90LlxyXG4gKiBEZWJ1ZyBtb2RlIGlzIHdoZW4gdGhlIGFwcCBpcyBidWlsdCBhbmQgaW5zdGFsbGVkIGxvY2FsbHkgdmlhIHhjb2RlIC8gZWNsaXBzZSAvIHRoZSBjb3Jkb3ZhIGNsaSBldGMsIGNvbXBhcmVkIHRvIHJlbGVhc2UgbW9kZSB3aGVuIHRoZSBhcHAgd2FzIGRvd25sb2FkZWQgZnJvbSB0aGUgYXBwIC8gcGxheSBzdG9yZSB2aWEgYW4gZW5kIHVzZXIuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IElzRGVidWcgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaXMtZGVidWcvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpc0RlYnVnOiBJc0RlYnVnKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuaXNEZWJ1Zy5nZXRJc0RlYnVnKClcclxuICogICAudGhlbihpc0RlYnVnID0+IGNvbnNvbGUubG9nKCdJcyBkZWJ1ZzonLCBpc0RlYnVnKSlcclxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0lzRGVidWcnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlzLWRlYnVnJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuSXNEZWJ1ZycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tYXR0bGV3aXM5Mi9jb3Jkb3ZhLXBsdWdpbi1pcy1kZWJ1ZycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIElzRGVidWcgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRGV0ZXJtaW5lIGlmIGFuIGFwcCB3YXMgaW5zdGFsbGVkIHZpYSB4Y29kZSAvIGVjbGlwc2UgLyB0aGUgaW9uaWMgQ0xJIGV0Y1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0cnVlIGlmIHRoZSBhcHAgd2FzIGluc3RhbGxlZCB2aWEgeGNvZGUgLyBlY2xpcHNlIC8gdGhlIGlvbmljIENMSSBldGMuIEl0IHdpbGwgcmVzb2x2ZSB0byBmYWxzZSBpZiB0aGUgYXBwIHdhcyBkb3dubG9hZGVkIGZyb20gdGhlIGFwcCAvIHBsYXkgc3RvcmUgYnkgdGhlIGVuZCB1c2VyLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRJc0RlYnVnKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=