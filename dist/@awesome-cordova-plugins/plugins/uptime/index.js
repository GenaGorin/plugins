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
var UptimeOriginal = /** @class */ (function (_super) {
    __extends(UptimeOriginal, _super);
    function UptimeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UptimeOriginal.prototype.getUptime = function (includeDeepSleep) { return cordova(this, "getUptime", {}, arguments); };
    UptimeOriginal.pluginName = "Uptime";
    UptimeOriginal.plugin = "cordova-plugin-uptime";
    UptimeOriginal.pluginRef = "Uptime";
    UptimeOriginal.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    UptimeOriginal.platforms = ["Android", "iOS"];
    return UptimeOriginal;
}(AwesomeCordovaNativePlugin));
var Uptime = new UptimeOriginal();
export { Uptime };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdXB0aW1lL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCaEUsMEJBQTBCOzs7O0lBUXBELDBCQUFTLGFBQUMsZ0JBQXlCOzs7Ozs7aUJBckNyQztFQTZCNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgVXB0aW1lXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyB0aGUgdGltZSBzcGVudCBpbiBtaWxsaXNlY29uZHMgc2luY2UgYm9vdCAodXB0aW1lKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVXB0aW1lIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3VwdGltZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHVwdGltZTogVXB0aW1lKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMudXB0aW1lLmdldFVwdGltZShpbmNsdWRlRGVlcFNsZWVwKVxyXG4gKiAgIC50aGVuKHVwdGltZSA9PiBjb25zb2xlLmxvZyh1cHRpbWUpKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdVcHRpbWUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXVwdGltZScsXHJcbiAgcGx1Z2luUmVmOiAnVXB0aW1lJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3MxbHZpdS9jb3Jkb3ZhLXBsdWdpbi11cHRpbWUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVcHRpbWUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiByZXR1cm4gc3lzdGVtIHVwdGltZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBpbmNsdWRlRGVlcFNsZWVwIFNldCB0byB0cnVlIHRvIGluY2x1ZGUgc3lzdGVtIGRlZXAgc2xlZXBcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJldHVybiB0aGUgdXB0aW1lIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVcHRpbWUoaW5jbHVkZURlZXBTbGVlcDogYm9vbGVhbik6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==