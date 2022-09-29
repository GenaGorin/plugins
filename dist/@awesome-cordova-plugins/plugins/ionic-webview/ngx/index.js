import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var WebView = /** @class */ (function (_super) {
    __extends(WebView, _super);
    function WebView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(WebView.prototype, "convertFileSrc", {
        get: function () { return cordovaPropertyGet(this, "convertFileSrc"); },
        set: function (value) { cordovaPropertySet(this, "convertFileSrc", value); },
        enumerable: false,
        configurable: true
    });
    WebView.pluginName = "WebView";
    WebView.plugin = "cordova-plugin-ionic-webview";
    WebView.pluginRef = "window.Ionic.WebView";
    WebView.repo = "https://github.com/ionic-team/cordova-plugin-ionic-webview";
    WebView.platforms = ["Android", "iOS"];
    WebView.install = "ionic cordova plugin add cordova-plugin-ionic-webview";
    WebView.decorators = [
        { type: Injectable }
    ];
    return WebView;
}(AwesomeCordovaNativePlugin));
export { WebView };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW9uaWMtd2Vidmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxzRUFBdUQsTUFBTSwrQkFBK0IsQ0FBQzs7SUErQnZFLDJCQUEwQjs7OzswQkFLckQsbUNBQWM7Ozs7Ozs7Ozs7Ozs7Z0JBTmYsVUFBVTs7a0JBL0JYO0VBZ0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIElvbmljIFdlYnZpZXdcclxuICogQGNhcGFjaXRvcmluY29tcGF0aWJsZSB0cnVlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBY2Nlc3MgV2ViIFZpZXcgdXRpbGl0aWVzLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyB0aGUgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3YCA+IDIuMC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0lvbmljIFdlYiBWaWV3XShodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9jb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3KSByZXBvc2l0b3J5LlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBXZWJWaWV3IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2lvbmljLXdlYnZpZXcvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJ2aWV3OiBXZWJWaWV3KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGltZyA9IHRoaXMud2Vidmlldy5jb252ZXJ0RmlsZVNyYygnZmlsZTovLy9Vc2Vycy9kYW4vY2FtZXJhLWltYWdlLTEyMzQ1LnBuZycpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYlZpZXcnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWlvbmljLXdlYnZpZXcnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5Jb25pYy5XZWJWaWV3JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vY29yZG92YS1wbHVnaW4taW9uaWMtd2VidmlldycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1pb25pYy13ZWJ2aWV3JyxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViVmlldyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZXJ0IGEgYGZpbGU6Ly9gIFVSTCB0byBhIFVSTCB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCB0aGUgbG9jYWwgd2ViIHNlcnZlciBpbiB0aGUgV2ViIFZpZXcgcGx1Z2luLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGNvbnZlcnRGaWxlU3JjOiAodXJsOiBzdHJpbmcpID0+IHN0cmluZztcclxufVxyXG4iXX0=