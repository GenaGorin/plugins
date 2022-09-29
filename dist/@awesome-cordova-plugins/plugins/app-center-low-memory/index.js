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
var LowMemoryOriginal = /** @class */ (function (_super) {
    __extends(LowMemoryOriginal, _super);
    function LowMemoryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemoryOriginal.prototype.generateLowMemory = function () { return cordova(this, "generateLowMemory", {}, arguments); };
    LowMemoryOriginal.pluginName = "LowMemory";
    LowMemoryOriginal.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.pluginRef = "LowMemory";
    LowMemoryOriginal.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemoryOriginal.platforms = ["Android", "iOS"];
    return LowMemoryOriginal;
}(AwesomeCordovaNativePlugin));
var LowMemory = new LowMemoryOriginal();
export { LowMemory };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCN0QsNkJBQTBCOzs7O0lBUXZELHFDQUFpQjs7Ozs7O29CQXJDbkI7RUE2QitCLDBCQUEwQjtTQUE1QyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFwcCBDZW50ZXIgTG93IE1lbW9yeVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogR2VuZXJhdGVzIGEgbG93IG1lbW9yeSB3YXJuaW5nLlxyXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBMb3dNZW1vcnkgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYXBwLWNlbnRlci1sb3ctbWVtb3J5L25neCc7XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvd01lbW9yeTogTG93TWVtb3J5KSB7IH1cclxuICpcclxuICogYXN5bmMgd2FybmluZygpIHtcclxuICogICBhd2FpdCB0aGlzLmxvd01lbW9yeS5nZW5lcmF0ZUxvd01lbW9yeSgpO1xyXG4gKiB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0xvd01lbW9yeScsXHJcbiAgcGx1Z2luOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9hcHBjZW50ZXItc2RrLWNvcmRvdmEvdHJlZS9tYXN0ZXIvY29yZG92YS1wbHVnaW4tYXBwY2VudGVyLWdlbmVyYXRlLWxvdy1tZW1vcnknLFxyXG4gIHBsdWdpblJlZjogJ0xvd01lbW9yeScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9NaWNyb3NvZnQvYXBwY2VudGVyLXNkay1jb3Jkb3ZhL3RyZWUvbWFzdGVyL2NvcmRvdmEtcGx1Z2luLWFwcGNlbnRlci1nZW5lcmF0ZS1sb3ctbWVtb3J5JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG93TWVtb3J5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEdlbmVyYXRlcyBhIGxvdyBtZW1vcnkgd2FybmluZy5cclxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2FwcGNlbnRlci1zZGstY29yZG92YS90cmVlL21hc3Rlci9jb3Jkb3ZhLXBsdWdpbi1hcHBjZW50ZXItZ2VuZXJhdGUtbG93LW1lbW9yeVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdlbmVyYXRlTG93TWVtb3J5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=