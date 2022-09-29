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
var NetworkInterfaceOriginal = /** @class */ (function (_super) {
    __extends(NetworkInterfaceOriginal, _super);
    function NetworkInterfaceOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NetworkInterfaceOriginal.prototype.getWiFiIPAddress = function () { return cordova(this, "getWiFiIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getCarrierIPAddress = function () { return cordova(this, "getCarrierIPAddress", {}, arguments); };
    NetworkInterfaceOriginal.prototype.getHttpProxyInformation = function (url) { return cordova(this, "getHttpProxyInformation", {}, arguments); };
    NetworkInterfaceOriginal.pluginName = "NetworkInterface";
    NetworkInterfaceOriginal.plugin = "cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.pluginRef = "networkinterface";
    NetworkInterfaceOriginal.repo = "https://github.com/salbahra/cordova-plugin-networkinterface";
    NetworkInterfaceOriginal.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows", "Windows Phone"];
    return NetworkInterfaceOriginal;
}(AwesomeCordovaNativePlugin));
var NetworkInterface = new NetworkInterfaceOriginal();
export { NetworkInterface };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay1pbnRlcmZhY2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUN0RCxvQ0FBMEI7Ozs7SUFPOUQsMkNBQWdCO0lBVWhCLDhDQUFtQjtJQVluQixrREFBdUIsYUFBQyxHQUFXOzs7Ozs7MkJBakVyQztFQW9Dc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBOZXR3b3JrIEludGVyZmFjZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTmV0d29yayBpbnRlcmZhY2UgaW5mb3JtYXRpb24gcGx1Z2luIGZvciBDb3Jkb3ZhL1Bob25lR2FwIHRoYXQgc3VwcG9ydHMgQW5kcm9pZCwgQmxhY2tiZXJyeSAxMCwgQnJvd3NlciwgaU9TLCBhbmQgV2luZG93cyBQaG9uZSA4LlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBOZXR3b3JrSW50ZXJmYWNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25ldHdvcmstaW50ZXJmYWNlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKCBwcml2YXRlIG5ldHdvcmtJbnRlcmZhY2U6IE5ldHdvcmtJbnRlcmZhY2UgKSB7XHJcbiAqXHJcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldFdpRmlJUEFkZHJlc3MoKVxyXG4gKiAgICAgLnRoZW4oYWRkcmVzcyA9PiBjb25zb2xlLmluZm8oYElQOiAke2FkZHJlc3MuaXB9LCBTdWJuZXQ6ICR7YWRkcmVzcy5zdWJuZXR9YCkpXHJcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XHJcbiAqXHJcbiAqICAgdGhpcy5uZXR3b3JrSW50ZXJmYWNlLmdldENhcnJpZXJJUEFkZHJlc3MoKVxyXG4gKiAgICAgLnRoZW4oYWRkcmVzcyA9PiBjb25zb2xlLmluZm8oYElQOiAke2FkZHJlc3MuaXB9LCBTdWJuZXQ6ICR7YWRkcmVzcy5zdWJuZXR9YCkpXHJcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBJUDogJHtlcnJvcn1gKSk7XHJcbiAqXHJcbiAqICAgY29uc3QgdXJsID0gJ3d3dy5naXRodWIuY29tJztcclxuICogICB0aGlzLm5ldHdvcmtJbnRlcmZhY2UuZ2V0SHR0cFByb3h5SW5mb3JtYXRpb24odXJsKVxyXG4gKiAgICAgLnRoZW4ocHJveHkgPT4gY29uc29sZS5pbmZvKGBUeXBlOiAke3Byb3h5LnR5cGV9LCBIb3N0OiAke3Byb3h5Lmhvc3R9LCBQb3J0OiAke3Byb3h5LnBvcnR9YCkpXHJcbiAqICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihgVW5hYmxlIHRvIGdldCBwcm94eSBpbmZvOiAke2Vycm9yfWApKTtcclxuICogfVxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdOZXR3b3JrSW50ZXJmYWNlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1uZXR3b3JraW50ZXJmYWNlJyxcclxuICBwbHVnaW5SZWY6ICduZXR3b3JraW50ZXJmYWNlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NhbGJhaHJhL2NvcmRvdmEtcGx1Z2luLW5ldHdvcmtpbnRlcmZhY2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0JsYWNrQmVycnkgMTAnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmtJbnRlcmZhY2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgV2lGaSBJUCBhZGRyZXNzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIElQIGFkZHJlc3MgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFdpRmlJUEFkZHJlc3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHdpcmVsZXNzIGNhcnJpZXIgSVAgYWRkcmVzc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBJUCBhZGRyZXNzIGluZm9ybWF0aW9uLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRDYXJyaWVySVBBZGRyZXNzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSByZWxldmFudCBwcm94aWVzIGZvciB0aGUgcGFzc2VkIFVSTCBpbiBvcmRlciBvZiBhcHBsaWNhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHt1cmx9IG1lc3NhZ2UgIFRoZSBtZXNzYWdlIHRvIGRpc3BsYXkuXHJcbiAgICogQHBhcmFtIHVybFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcHJveHkgaW5mb3JtYXRpb24uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEh0dHBQcm94eUluZm9ybWF0aW9uKHVybDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19