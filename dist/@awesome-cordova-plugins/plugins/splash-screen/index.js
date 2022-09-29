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
var SplashScreenOriginal = /** @class */ (function (_super) {
    __extends(SplashScreenOriginal, _super);
    function SplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SplashScreenOriginal.prototype.show = function () { return cordova(this, "show", { "sync": true }, arguments); };
    SplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SplashScreenOriginal.pluginName = "SplashScreen";
    SplashScreenOriginal.plugin = "cordova-plugin-splashscreen";
    SplashScreenOriginal.pluginRef = "navigator.splashscreen";
    SplashScreenOriginal.repo = "https://github.com/apache/cordova-plugin-splashscreen";
    SplashScreenOriginal.platforms = ["Amazon Fire OS", "Android", "iOS", "Windows"];
    return SplashScreenOriginal;
}(AwesomeCordovaNativePlugin));
var SplashScreen = new SplashScreenOriginal();
export { SplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3BsYXNoLXNjcmVlbi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE0QjFELGdDQUEwQjs7OztJQU8xRCwyQkFBSTtJQVFKLDJCQUFJOzs7Ozs7dUJBNUNOO0VBNkJrQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTcGxhc2ggU2NyZWVuXHJcbiAqIEBwcmVtaWVyIHNwbGFzaHNjcmVlblxyXG4gKiBAY2FwYWNpdG9yaW5jb21wYXRpYmxlIHRydWVcclxuICogQGRlc2NyaXB0aW9uIFRoaXMgcGx1Z2luIGRpc3BsYXlzIGFuZCBoaWRlcyBhIHNwbGFzaCBzY3JlZW4gZHVyaW5nIGFwcGxpY2F0aW9uIGxhdW5jaC4gVGhlIG1ldGhvZHMgYmVsb3cgYWxsb3dzIHNob3dpbmcgYW5kIGhpZGluZyB0aGUgc3BsYXNoc2NyZWVuIGFmdGVyIHRoZSBhcHAgaGFzIGxvYWRlZC5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU3BsYXNoU2NyZWVuIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NwbGFzaC1zY3JlZW4vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGxhc2hTY3JlZW46IFNwbGFzaFNjcmVlbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnNwbGFzaFNjcmVlbi5zaG93KCk7XHJcbiAqXHJcbiAqIHRoaXMuc3BsYXNoU2NyZWVuLmhpZGUoKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3BsYXNoU2NyZWVuJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zcGxhc2hzY3JlZW4nLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5zcGxhc2hzY3JlZW4nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLXNwbGFzaHNjcmVlbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU3BsYXNoU2NyZWVuIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSBzcGxhc2hzY3JlZW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGVzIHRoZSBzcGxhc2hzY3JlZW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgaGlkZSgpOiB2b2lkIHt9XHJcbn1cclxuIl19