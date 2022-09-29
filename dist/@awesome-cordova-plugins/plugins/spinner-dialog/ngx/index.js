import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var SpinnerDialog = /** @class */ (function (_super) {
    __extends(SpinnerDialog, _super);
    function SpinnerDialog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpinnerDialog.prototype.show = function (title, message, cancelCallback, iOSOptions) { return cordova(this, "show", { "sync": true }, arguments); };
    SpinnerDialog.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    SpinnerDialog.pluginName = "SpinnerDialog";
    SpinnerDialog.plugin = "cordova-plugin-native-spinner";
    SpinnerDialog.pluginRef = "SpinnerDialog";
    SpinnerDialog.repo = "https://github.com/greybax/cordova-plugin-native-spinner";
    SpinnerDialog.platforms = ["Android", "iOS", "Windows Phone 8", "Windows"];
    SpinnerDialog.decorators = [
        { type: Injectable }
    ];
    return SpinnerDialog;
}(AwesomeCordovaNativePlugin));
export { SpinnerDialog };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Bpbm5lci1kaWFsb2cvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBcUR6RCxpQ0FBMEI7Ozs7SUFZM0QsNEJBQUksYUFBQyxLQUFjLEVBQUUsT0FBZ0IsRUFBRSxjQUFvQixFQUFFLFVBQW9DO0lBUWpHLDRCQUFJOzs7Ozs7O2dCQXJCTCxVQUFVOzt3QkFyRFg7RUFzRG1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGlubmVyRGlhbG9nSU9TT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogT3BhY2l0eSBvZiB0aGUgb3ZlcmxheSwgYmV0d2VlbiAwICh0cmFuc3BhcmVudCkgYW5kIDEgKG9wYXF1ZSkuIERlZmF1bHQ6IDAuMzVcclxuICAgKi9cclxuICBvdmVybGF5T3BhY2l0eT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVkIGNvbXBvbmVudCBvZiB0aGUgdGV4dCBjb2xvciwgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0OiAxXHJcbiAgICovXHJcbiAgdGV4dENvbG9yUmVkPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBHcmVlbiBjb21wb25lbnQgb2YgdGhlIHRleHQgY29sb3IsIGJldHdlZW4gMCBhbmQgMS4gRGVmYXVsdDogMVxyXG4gICAqL1xyXG4gIHRleHRDb2xvckdyZWVuPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBCbHVlIGNvbXBvbmVudCBvZiB0aGUgdGV4dCBjb2xvciwgYmV0d2VlbiAwIGFuZCAxLiBEZWZhdWx0OiAxXHJcbiAgICovXHJcbiAgdGV4dENvbG9yQmx1ZT86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNwaW5uZXIgRGlhbG9nXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3Igc2hvd2luZyBhIG5hdGl2ZSBzcGlubmVyIGJhc2VkIG9uIFBhbGRvbS9TcGlubmVyRGlhbG9nLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1NwaW5uZXIgRGlhbG9nIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vZ3JleWJheC9jb3Jkb3ZhLXBsdWdpbi1uYXRpdmUtc3Bpbm5lcikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNwaW5uZXJEaWFsb2cgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc3Bpbm5lci1kaWFsb2cvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzcGlubmVyRGlhbG9nOiBTcGlubmVyRGlhbG9nKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3Bpbm5lckRpYWxvZy5zaG93KCk7XHJcbiAqXHJcbiAqIHRoaXMuc3Bpbm5lckRpYWxvZy5oaWRlKCk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBTcGlubmVyRGlhbG9nSU9TT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NwaW5uZXJEaWFsb2cnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZS1zcGlubmVyJyxcclxuICBwbHVnaW5SZWY6ICdTcGlubmVyRGlhbG9nJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2dyZXliYXgvY29yZG92YS1wbHVnaW4tbmF0aXZlLXNwaW5uZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTcGlubmVyRGlhbG9nIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNob3dzIHRoZSBzcGlubmVyIGRpYWxvZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHRpdGxlIHtzdHJpbmd9IFNwaW5uZXIgdGl0bGUgKHNob3dzIG9uIEFuZHJvaWQgb25seSlcclxuICAgKiBAcGFyYW0gbWVzc2FnZSB7c3RyaW5nfSBTcGlubmVyIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gY2FuY2VsQ2FsbGJhY2sge2Jvb2xlYW58ZnVuY3Rpb259IFNldCB0byB0cnVlIHRvIHNldCBzcGlubmVyIG5vdCBjYW5jZWxhYmxlLiBPciBwcm92aWRlIGEgZnVuY3Rpb24gdG8gY2FsbCB3aGVuIHRoZSB1c2VyIGNhbmNlbHMgdGhlIHNwaW5uZXIuXHJcbiAgICogQHBhcmFtIGlPU09wdGlvbnMge29iamVjdH0gT3B0aW9ucyBmb3IgaU9TIG9ubHlcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdyh0aXRsZT86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZywgY2FuY2VsQ2FsbGJhY2s/OiBhbnksIGlPU09wdGlvbnM/OiBTcGlubmVyRGlhbG9nSU9TT3B0aW9ucyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZXMgdGhlIHNwaW5uZXIgZGlhbG9nIGlmIHZpc2libGVcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgaGlkZSgpOiB2b2lkIHt9XHJcbn1cclxuIl19