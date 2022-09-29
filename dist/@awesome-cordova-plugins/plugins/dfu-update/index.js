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
var DfuUpdateOriginal = /** @class */ (function (_super) {
    __extends(DfuUpdateOriginal, _super);
    function DfuUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdateOriginal.prototype.updateFirmware = function (options) { return cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdateOriginal.pluginName = "DfuUpdate";
    DfuUpdateOriginal.plugin = "cordova-plugin-dfu-update";
    DfuUpdateOriginal.pluginRef = "window.DfuUpdate";
    DfuUpdateOriginal.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdateOriginal.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdateOriginal.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdateOriginal.platforms = ["Android", "iOS"];
    return DfuUpdateOriginal;
}(AwesomeCordovaNativePlugin));
var DfuUpdate = new DfuUpdateOriginal();
export { DfuUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGZ1LXVwZGF0ZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWlESCw2QkFBMEI7Ozs7SUFXdkQsa0NBQWMsYUFBQyxPQUFzQjs7Ozs7Ozs7b0JBOUR2QztFQW1EK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXBkYXRlT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgdGhhdCBjb250YWlucyB0aGUgaWRlbnRpZmllciBmb3IgdGhlIEJsdWV0b290aCBMRSBkZXZpY2UgdG8gdXBkYXRlLiBJdCB3aWxsIGVpdGhlciBiZSBhIE1BQyBhZGRyZXNzIChvbiBBbmRyb2lkKSBvciBhIFVVSUQgKG9uIGlPUykuXHJcbiAgICovXHJcbiAgZGV2aWNlSWQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgdGhhdCBpcyB0aGUgcGF0aCB0byB0aGUgZmlsZSB0byB1c2UgaW4gdGhlIHVwZGF0ZS4gSXQgY2FuIGJlIGVpdGhlciBpbiBlaXRoZXIgYGNkdmZpbGU6Ly9gIG9yIGBmaWxlOi8vYCBmb3JtYXQuXHJcbiAgICovXHJcbiAgZmlsZVVybDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgUGFja2V0UmVjZWlwdE5vdGlmaWNhdGlvbnNWYWx1ZSAoRGVmYXVsdCB0byAxMClcclxuICAgKi9cclxuICBwYWNrZXRSZWNlaXB0Tm90aWZpY2F0aW9uc1ZhbHVlPzogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRGZ1IFVwZGF0ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gaXMgYSBXcmFwcGVyIHRvIHVzZSBOb3JkaWMgU2VtaWNvbmR1Y3RvcidzIERldmljZSBGaXJtd2FyZSBVcGRhdGUgKERGVSkgc2VydmljZSB0byB1cGRhdGUgYSBCbHVldG9vdGggTEUgZGV2aWNlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBEZnVVcGRhdGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZGZ1LXVwZGF0ZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRmdVVwZGF0ZTogRGZ1VXBkYXRlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZGZ1VXBkYXRlLnVwZGF0ZUZpcm13YXJlKCdmaWxlVVJMJywgJ2RldmljZUlkZW50aWZpZXInKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRGZ1VXBkYXRlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZnUtdXBkYXRlJyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cuRGZ1VXBkYXRlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VpbmZhY2hIYW5zL2NvcmRvdmEtcGx1Z2luLWRmdS11cGRhdGUnLFxyXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tZGZ1LXVwZGF0ZSAtLXZhcmlhYmxlIEFORFJPSURfTk9SRElDX1ZFUlNJT049XCIxLjExLjBcIicsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX05PUkRJQ19WRVJTSU9OJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERmdVVwZGF0ZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTdGFydCB0aGUgRmlybXdhcmUtVXBkYXRlLVByb2Nlc3NcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIC0gT3B0aW9ucyBmb3IgdGhlIHByb2Nlc3NcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGEgT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgdXBkYXRlRmlybXdhcmUob3B0aW9uczogVXBkYXRlT3B0aW9ucyk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==