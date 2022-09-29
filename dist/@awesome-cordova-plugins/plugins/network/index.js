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
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable, merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
export var Connection;
(function (Connection) {
    Connection["UNKNOWN"] = "unknown";
    Connection["ETHERNET"] = "ethernet";
    Connection["WIFI"] = "wifi";
    Connection["CELL_2G"] = "2g";
    Connection["CELL_3G"] = "3g";
    Connection["CELL_4G"] = "4g";
    Connection["CELL"] = "cellular";
    Connection["NONE"] = "none";
})(Connection || (Connection = {}));
var NetworkOriginal = /** @class */ (function (_super) {
    __extends(NetworkOriginal, _super);
    function NetworkOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constants for possible connection types
         */
        _this.Connection = {
            UNKNOWN: 'unknown',
            ETHERNET: 'ethernet',
            WIFI: 'wifi',
            CELL_2G: '2g',
            CELL_3G: '3g',
            CELL_4G: '4g',
            CELL: 'cellular',
            NONE: 'none',
        };
        return _this;
    }
    NetworkOriginal.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect().pipe(mapTo('connected')), _this.onDisconnect().pipe(mapTo('disconnected')));
            }
        })();
    };
    NetworkOriginal.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    NetworkOriginal.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(NetworkOriginal.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkOriginal.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    NetworkOriginal.pluginName = "Network";
    NetworkOriginal.plugin = "cordova-plugin-network-information";
    NetworkOriginal.pluginRef = "navigator.connection";
    NetworkOriginal.repo = "https://github.com/apache/cordova-plugin-network-information";
    NetworkOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    return NetworkOriginal;
}(AwesomeCordovaNativePlugin));
var Network = new NetworkOriginal();
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyxrR0FNTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl2QyxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLDJCQUFhLENBQUE7SUFDYiw0QkFBYyxDQUFBO0lBQ2QsNEJBQWMsQ0FBQTtJQUNkLDRCQUFjLENBQUE7SUFDZCwrQkFBaUIsQ0FBQTtJQUNqQiwyQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCOztJQW9ENEIsMkJBQTBCOzs7UUFDckQ7O1dBRUc7UUFDSCxnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7OztJQXNCRiwwQkFBUTs7O21EQUE2QztnQkFDbkQsT0FBTyxLQUFLLENBQ1YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDekMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQStCLENBQzlFLENBQUM7YUFDSDs7O0lBWUQsOEJBQVk7SUFjWiwyQkFBUzswQkE5Q1UseUJBQUk7Ozs7OzswQkFPSixnQ0FBVzs7Ozs7Ozs7Ozs7a0JBckdoQztFQTBFNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhQ2hlY2ssXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxyXG4gIFBsdWdpbixcclxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIG1lcmdlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IG1hcFRvIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBuYXZpZ2F0b3I6IGFueTtcclxuXHJcbmV4cG9ydCBlbnVtIENvbm5lY3Rpb24ge1xyXG4gIFVOS05PV04gPSAndW5rbm93bicsXHJcbiAgRVRIRVJORVQgPSAnZXRoZXJuZXQnLFxyXG4gIFdJRkkgPSAnd2lmaScsXHJcbiAgQ0VMTF8yRyA9ICcyZycsXHJcbiAgQ0VMTF8zRyA9ICczZycsXHJcbiAgQ0VMTF80RyA9ICc0ZycsXHJcbiAgQ0VMTCA9ICdjZWxsdWxhcicsXHJcbiAgTk9ORSA9ICdub25lJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE5ldHdvcmtcclxuICogQHByZW1pZXIgbmV0d29yay1pbmZvcm1hdGlvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24uIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtOZXR3b3JrIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24pLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBOZXR3b3JrIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25ldHdvcmsvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZXR3b3JrOiBOZXR3b3JrKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgZGlzY29ubmVjdGlvblxyXG4gKiBsZXQgZGlzY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkRpc2Nvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIHdhcyBkaXNjb25uZWN0ZWQgOi0oJyk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzdG9wIGRpc2Nvbm5lY3Qgd2F0Y2hcclxuICogZGlzY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKlxyXG4gKiAvLyB3YXRjaCBuZXR3b3JrIGZvciBhIGNvbm5lY3Rpb25cclxuICogbGV0IGNvbm5lY3RTdWJzY3JpcHRpb24gPSB0aGlzLm5ldHdvcmsub25Db25uZWN0KCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICogICBjb25zb2xlLmxvZygnbmV0d29yayBjb25uZWN0ZWQhJyk7XHJcbiAqICAgLy8gV2UganVzdCBnb3QgYSBjb25uZWN0aW9uIGJ1dCB3ZSBuZWVkIHRvIHdhaXQgYnJpZWZseVxyXG4gKiAgICAvLyBiZWZvcmUgd2UgZGV0ZXJtaW5lIHRoZSBjb25uZWN0aW9uIHR5cGUuIE1pZ2h0IG5lZWQgdG8gd2FpdC5cclxuICogICAvLyBwcmlvciB0byBkb2luZyBhbnkgYXBpIHJlcXVlc3RzIGFzIHdlbGwuXHJcbiAqICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAqICAgICBpZiAodGhpcy5uZXR3b3JrLnR5cGUgPT09ICd3aWZpJykge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnd2UgZ290IGEgd2lmaSBjb25uZWN0aW9uLCB3b29ob28hJyk7XHJcbiAqICAgICB9XHJcbiAqICAgfSwgMzAwMCk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzdG9wIGNvbm5lY3Qgd2F0Y2hcclxuICogY29ubmVjdFN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGFkdmFuY2VkXHJcbiAqIFRoZSBgdHlwZWAgcHJvcGVydHkgd2lsbCByZXR1cm4gb25lIG9mIHRoZSBmb2xsb3dpbmcgY29ubmVjdGlvbiB0eXBlczogYHVua25vd25gLCBgZXRoZXJuZXRgLCBgd2lmaWAsIGAyZ2AsIGAzZ2AsIGA0Z2AsIGBjZWxsdWxhcmAsIGBub25lYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05ldHdvcmsnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24nLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jb25uZWN0aW9uJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1uZXR3b3JrLWluZm9ybWF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW1hem9uIEZpcmUgT1MnLCAnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5ldHdvcmsgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnRzIGZvciBwb3NzaWJsZSBjb25uZWN0aW9uIHR5cGVzXHJcbiAgICovXHJcbiAgQ29ubmVjdGlvbiA9IHtcclxuICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICAgIEVUSEVSTkVUOiAnZXRoZXJuZXQnLFxyXG4gICAgV0lGSTogJ3dpZmknLFxyXG4gICAgQ0VMTF8yRzogJzJnJyxcclxuICAgIENFTExfM0c6ICczZycsXHJcbiAgICBDRUxMXzRHOiAnNGcnLFxyXG4gICAgQ0VMTDogJ2NlbGx1bGFyJyxcclxuICAgIE5PTkU6ICdub25lJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25uZWN0aW9uIHR5cGVcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHR5cGU6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRG93bmxpbmsgTWF4IFNwZWVkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb3dubGlua01heDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgdG8gd2F0Y2ggY29ubmVjdGlvbiBjaGFuZ2VzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTwnY29ubmVjdGVkJyB8ICdkaXNjb25uZWN0ZWQnPn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBvbkNoYW5nZSgpOiBPYnNlcnZhYmxlPCdjb25uZWN0ZWQnIHwgJ2Rpc2Nvbm5lY3RlZCc+IHtcclxuICAgIHJldHVybiBtZXJnZShcclxuICAgICAgdGhpcy5vbkNvbm5lY3QoKS5waXBlKG1hcFRvKCdjb25uZWN0ZWQnKSksXHJcbiAgICAgIHRoaXMub25EaXNjb25uZWN0KCkucGlwZShtYXBUbygnZGlzY29ubmVjdGVkJykpIGFzIE9ic2VydmFibGU8J2Rpc2Nvbm5lY3RlZCc+XHJcbiAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9mZmxpbmVcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ29mZmxpbmUnLFxyXG4gICAgZWxlbWVudDogZG9jdW1lbnQsXHJcbiAgfSlcclxuICBvbkRpc2Nvbm5lY3QoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBub3RpZmllZCB3aGVuIHRoZSBkZXZpY2UgZ29lcyBvbmxpbmVcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFJldHVybnMgYW4gb2JzZXJ2YWJsZS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ29ubGluZScsXHJcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcclxuICB9KVxyXG4gIG9uQ29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=