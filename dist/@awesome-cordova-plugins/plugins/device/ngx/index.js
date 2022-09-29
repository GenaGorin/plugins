import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var Device = /** @class */ (function (_super) {
    __extends(Device, _super);
    function Device() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Device.prototype, "cordova", {
        get: function () { return cordovaPropertyGet(this, "cordova"); },
        set: function (value) { cordovaPropertySet(this, "cordova", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "model", {
        get: function () { return cordovaPropertyGet(this, "model"); },
        set: function (value) { cordovaPropertySet(this, "model", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "platform", {
        get: function () { return cordovaPropertyGet(this, "platform"); },
        set: function (value) { cordovaPropertySet(this, "platform", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "uuid", {
        get: function () { return cordovaPropertyGet(this, "uuid"); },
        set: function (value) { cordovaPropertySet(this, "uuid", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "version", {
        get: function () { return cordovaPropertyGet(this, "version"); },
        set: function (value) { cordovaPropertySet(this, "version", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "manufacturer", {
        get: function () { return cordovaPropertyGet(this, "manufacturer"); },
        set: function (value) { cordovaPropertySet(this, "manufacturer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "isVirtual", {
        get: function () { return cordovaPropertyGet(this, "isVirtual"); },
        set: function (value) { cordovaPropertySet(this, "isVirtual", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Device.prototype, "serial", {
        get: function () { return cordovaPropertyGet(this, "serial"); },
        set: function (value) { cordovaPropertySet(this, "serial", value); },
        enumerable: false,
        configurable: true
    });
    Device.pluginName = "Device";
    Device.plugin = "cordova-plugin-device";
    Device.pluginRef = "device";
    Device.repo = "https://github.com/apache/cordova-plugin-device";
    Device.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    Device.decorators = [
        { type: Injectable }
    ];
    return Device;
}(AwesomeCordovaNativePlugin));
export { Device };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGV2aWNlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHNFQUF1RCxNQUFNLCtCQUErQixDQUFDOztJQTRCeEUsMEJBQTBCOzs7OzBCQUdwRCwyQkFBTzs7Ozs7OzBCQU9QLHlCQUFLOzs7Ozs7MEJBSUwsNEJBQVE7Ozs7OzswQkFJUix3QkFBSTs7Ozs7OzBCQUlKLDJCQUFPOzs7Ozs7MEJBSVAsZ0NBQVk7Ozs7OzswQkFJWiw2QkFBUzs7Ozs7OzBCQUlULDBCQUFNOzs7Ozs7Ozs7Ozs7Z0JBbkNQLFVBQVU7O2lCQTVCWDtFQTZCNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG4vKipcclxuICogQG5hbWUgRGV2aWNlXHJcbiAqIEBwcmVtaWVyIGRldmljZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IHRoZSB1bmRlcmx5aW5nIGRldmljZSBhbmQgcGxhdGZvcm0uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IERldmljZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kZXZpY2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkZXZpY2U6IERldmljZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zb2xlLmxvZygnRGV2aWNlIFVVSUQgaXM6ICcgKyB0aGlzLmRldmljZS51dWlkKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRGV2aWNlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kZXZpY2UnLFxyXG4gIHBsdWdpblJlZjogJ2RldmljZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZGV2aWNlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIERldmljZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKiogR2V0IHRoZSB2ZXJzaW9uIG9mIENvcmRvdmEgcnVubmluZyBvbiB0aGUgZGV2aWNlLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGNvcmRvdmE6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRldmljZS5tb2RlbCByZXR1cm5zIHRoZSBuYW1lIG9mIHRoZSBkZXZpY2UncyBtb2RlbCBvciBwcm9kdWN0LiBUaGUgdmFsdWUgaXMgc2V0XHJcbiAgICogYnkgdGhlIGRldmljZSBtYW51ZmFjdHVyZXIgYW5kIG1heSBiZSBkaWZmZXJlbnQgYWNyb3NzIHZlcnNpb25zIG9mIHRoZSBzYW1lIHByb2R1Y3QuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgbW9kZWw6IHN0cmluZztcclxuXHJcbiAgLyoqIEdldCB0aGUgZGV2aWNlJ3Mgb3BlcmF0aW5nIHN5c3RlbSBuYW1lLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHBsYXRmb3JtOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIFVuaXZlcnNhbGx5IFVuaXF1ZSBJZGVudGlmaWVyIChVVUlEKS4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB1dWlkOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIG9wZXJhdGluZyBzeXN0ZW0gdmVyc2lvbi4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB2ZXJzaW9uOiBzdHJpbmc7XHJcblxyXG4gIC8qKiBHZXQgdGhlIGRldmljZSdzIG1hbnVmYWN0dXJlci4gKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBtYW51ZmFjdHVyZXI6IHN0cmluZztcclxuXHJcbiAgLyoqIFdoZXRoZXIgdGhlIGRldmljZSBpcyBydW5uaW5nIG9uIGEgc2ltdWxhdG9yLiAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGlzVmlydHVhbDogYm9vbGVhbjtcclxuXHJcbiAgLyoqIEdldCB0aGUgZGV2aWNlIGhhcmR3YXJlIHNlcmlhbCBudW1iZXIuICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgc2VyaWFsOiBzdHJpbmc7XHJcbn1cclxuIl19