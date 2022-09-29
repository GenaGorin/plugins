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
var DNSOriginal = /** @class */ (function (_super) {
    __extends(DNSOriginal, _super);
    function DNSOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNSOriginal.prototype.resolve = function (hostname) { return cordova(this, "resolve", {}, arguments); };
    DNSOriginal.pluginName = "DNS";
    DNSOriginal.plugin = "cordova-plugin-dns";
    DNSOriginal.pluginRef = "cordova.plugins.dns";
    DNSOriginal.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNSOriginal.platforms = ["Android"];
    return DNSOriginal;
}(AwesomeCordovaNativePlugin));
var DNS = new DNSOriginal();
export { DNS };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG5zL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCbkUsdUJBQTBCOzs7O0lBUWpELHFCQUFPLGFBQUMsUUFBZ0I7Ozs7OztjQXRDMUI7RUE4QnlCLDBCQUEwQjtTQUF0QyxHQUFHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEROU1xyXG4gKiBAZGVzY3JpcHRpb24gQSBwbHVnaW4gZm9yIEFwYWNoZSBDb3Jkb3ZhIHRoYXQgZW5hYmxlcyBhcHBsaWNhdGlvbnMgdG8gbWFudWFsbHkgcmVzb2x2ZSBob3N0bmFtZXMgaW50byBhbiB1bmRlcmx5aW5nIG5ldHdvcmsgYWRkcmVzcy4gVGhpcyBpcyBtb3N0bHkgdXNlZnVsIGZvciBkZXRlcm1pbmluZyB3aGV0aGVyIHRoZXJlIGlzIGEgcHJvYmxlbSB3aXRoIHRoZSBkZXZpY2UncyBETlMgc2VydmVyIGNvbmZpZ3VyYXRpb24uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEROUyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kbnMvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkbnM6IEROUykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKiB0aGlzLmRucy5yZXNvbHZlKGhvc3RuYW1lKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgYWRkcmVzcyA9PiBjb25zb2xlLmxvZygnUmVzb2x2ZWQgJyArIGhvc3RuYW1lICsgJyB0byAnICsgYWRkcmVzcyksXHJcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmxvZygnRmFpbGVkIHRvIHJlc29sdmUgJyArIGhvc3RuYW1lICsgJzogJyArIGVycm9yKVxyXG4gKiAgICk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ROUycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZG5zJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZG5zJyxcclxuICByZXBvOiAnaHR0cHM6Ly9iaXRidWNrZXQub3JnL3plZ2ViYS9jb3Jkb3ZhLXBsdWdpbi1kbnMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEROUyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZXNvbHZlIGhvc3RuYW1lcyBpbnRvIGFuIHVuZGVybHlpbmcgbmV0d29yayBhZGRyZXNzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGhvc3RuYW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSByZXNvbHV0aW9uLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXNvbHZlKGhvc3RuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=