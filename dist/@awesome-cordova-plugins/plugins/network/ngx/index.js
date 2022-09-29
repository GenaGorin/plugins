import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Network = /** @class */ (function (_super) {
    __extends(Network, _super);
    function Network() {
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
    Network.prototype.onChange = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return merge(_this.onConnect().pipe(mapTo('connected')), _this.onDisconnect().pipe(mapTo('disconnected')));
            }
        })();
    };
    Network.prototype.onDisconnect = function () { return cordova(this, "onDisconnect", { "eventObservable": true, "event": "offline", "element": "document" }, arguments); };
    Network.prototype.onConnect = function () { return cordova(this, "onConnect", { "eventObservable": true, "event": "online", "element": "document" }, arguments); };
    Object.defineProperty(Network.prototype, "type", {
        get: function () { return cordovaPropertyGet(this, "type"); },
        set: function (value) { cordovaPropertySet(this, "type", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Network.prototype, "downlinkMax", {
        get: function () { return cordovaPropertyGet(this, "downlinkMax"); },
        set: function (value) { cordovaPropertySet(this, "downlinkMax", value); },
        enumerable: false,
        configurable: true
    });
    Network.pluginName = "Network";
    Network.plugin = "cordova-plugin-network-information";
    Network.pluginRef = "navigator.connection";
    Network.repo = "https://github.com/apache/cordova-plugin-network-information";
    Network.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Network.decorators = [
        { type: Injectable }
    ];
    return Network;
}(AwesomeCordovaNativePlugin));
export { Network };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmV0d29yay9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxrR0FNTixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUl2QyxNQUFNLENBQU4sSUFBWSxVQVNYO0FBVEQsV0FBWSxVQUFVO0lBQ3BCLGlDQUFtQixDQUFBO0lBQ25CLG1DQUFxQixDQUFBO0lBQ3JCLDJCQUFhLENBQUE7SUFDYiw0QkFBYyxDQUFBO0lBQ2QsNEJBQWMsQ0FBQTtJQUNkLDRCQUFjLENBQUE7SUFDZCwrQkFBaUIsQ0FBQTtJQUNqQiwyQkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQVRXLFVBQVUsS0FBVixVQUFVLFFBU3JCOztJQW9ENEIsMkJBQTBCOzs7UUFDckQ7O1dBRUc7UUFDSCxnQkFBVSxHQUFHO1lBQ1gsT0FBTyxFQUFFLFNBQVM7WUFDbEIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsSUFBSSxFQUFFLE1BQU07WUFDWixPQUFPLEVBQUUsSUFBSTtZQUNiLE9BQU8sRUFBRSxJQUFJO1lBQ2IsT0FBTyxFQUFFLElBQUk7WUFDYixJQUFJLEVBQUUsVUFBVTtZQUNoQixJQUFJLEVBQUUsTUFBTTtTQUNiLENBQUM7OztJQXNCRiwwQkFBUTs7O21EQUE2QztnQkFDbkQsT0FBTyxLQUFLLENBQ1YsS0FBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsRUFDekMsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLENBQStCLENBQzlFLENBQUM7YUFDSDs7O0lBWUQsOEJBQVk7SUFjWiwyQkFBUzswQkE5Q1UseUJBQUk7Ozs7OzswQkFPSixnQ0FBVzs7Ozs7Ozs7Ozs7O2dCQTVCL0IsVUFBVTs7a0JBekVYO0VBMEU2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDb3Jkb3ZhLFxyXG4gIENvcmRvdmFDaGVjayxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbiAgUGx1Z2luLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgbWVyZ2UgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwVG8gfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IG5hdmlnYXRvcjogYW55O1xyXG5cclxuZXhwb3J0IGVudW0gQ29ubmVjdGlvbiB7XHJcbiAgVU5LTk9XTiA9ICd1bmtub3duJyxcclxuICBFVEhFUk5FVCA9ICdldGhlcm5ldCcsXHJcbiAgV0lGSSA9ICd3aWZpJyxcclxuICBDRUxMXzJHID0gJzJnJyxcclxuICBDRUxMXzNHID0gJzNnJyxcclxuICBDRUxMXzRHID0gJzRnJyxcclxuICBDRUxMID0gJ2NlbGx1bGFyJyxcclxuICBOT05FID0gJ25vbmUnLFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgTmV0d29ya1xyXG4gKiBAcHJlbWllciBuZXR3b3JrLWluZm9ybWF0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbi4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW05ldHdvcmsgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5ldHdvcmsgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbmV0d29yay9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5ldHdvcms6IE5ldHdvcmspIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gd2F0Y2ggbmV0d29yayBmb3IgYSBkaXNjb25uZWN0aW9uXHJcbiAqIGxldCBkaXNjb25uZWN0U3Vic2NyaXB0aW9uID0gdGhpcy5uZXR3b3JrLm9uRGlzY29ubmVjdCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAqICAgY29uc29sZS5sb2coJ25ldHdvcmsgd2FzIGRpc2Nvbm5lY3RlZCA6LSgnKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIHN0b3AgZGlzY29ubmVjdCB3YXRjaFxyXG4gKiBkaXNjb25uZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAqXHJcbiAqXHJcbiAqIC8vIHdhdGNoIG5ldHdvcmsgZm9yIGEgY29ubmVjdGlvblxyXG4gKiBsZXQgY29ubmVjdFN1YnNjcmlwdGlvbiA9IHRoaXMubmV0d29yay5vbkNvbm5lY3QoKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKCduZXR3b3JrIGNvbm5lY3RlZCEnKTtcclxuICogICAvLyBXZSBqdXN0IGdvdCBhIGNvbm5lY3Rpb24gYnV0IHdlIG5lZWQgdG8gd2FpdCBicmllZmx5XHJcbiAqICAgIC8vIGJlZm9yZSB3ZSBkZXRlcm1pbmUgdGhlIGNvbm5lY3Rpb24gdHlwZS4gTWlnaHQgbmVlZCB0byB3YWl0LlxyXG4gKiAgIC8vIHByaW9yIHRvIGRvaW5nIGFueSBhcGkgcmVxdWVzdHMgYXMgd2VsbC5cclxuICogICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICogICAgIGlmICh0aGlzLm5ldHdvcmsudHlwZSA9PT0gJ3dpZmknKSB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKCd3ZSBnb3QgYSB3aWZpIGNvbm5lY3Rpb24sIHdvb2hvbyEnKTtcclxuICogICAgIH1cclxuICogICB9LCAzMDAwKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIHN0b3AgY29ubmVjdCB3YXRjaFxyXG4gKiBjb25uZWN0U3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAYWR2YW5jZWRcclxuICogVGhlIGB0eXBlYCBwcm9wZXJ0eSB3aWxsIHJldHVybiBvbmUgb2YgdGhlIGZvbGxvd2luZyBjb25uZWN0aW9uIHR5cGVzOiBgdW5rbm93bmAsIGBldGhlcm5ldGAsIGB3aWZpYCwgYDJnYCwgYDNnYCwgYDRnYCwgYGNlbGx1bGFyYCwgYG5vbmVgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTmV0d29yaycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmV0d29yay1pbmZvcm1hdGlvbicsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNvbm5lY3Rpb24nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLW5ldHdvcmstaW5mb3JtYXRpb24nLFxyXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmV0d29yayBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25zdGFudHMgZm9yIHBvc3NpYmxlIGNvbm5lY3Rpb24gdHlwZXNcclxuICAgKi9cclxuICBDb25uZWN0aW9uID0ge1xyXG4gICAgVU5LTk9XTjogJ3Vua25vd24nLFxyXG4gICAgRVRIRVJORVQ6ICdldGhlcm5ldCcsXHJcbiAgICBXSUZJOiAnd2lmaScsXHJcbiAgICBDRUxMXzJHOiAnMmcnLFxyXG4gICAgQ0VMTF8zRzogJzNnJyxcclxuICAgIENFTExfNEc6ICc0ZycsXHJcbiAgICBDRUxMOiAnY2VsbHVsYXInLFxyXG4gICAgTk9ORTogJ25vbmUnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbm5lY3Rpb24gdHlwZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEb3dubGluayBNYXggU3BlZWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRvd25saW5rTWF4OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0byB3YXRjaCBjb25uZWN0aW9uIGNoYW5nZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPCdjb25uZWN0ZWQnIHwgJ2Rpc2Nvbm5lY3RlZCc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIG9uQ2hhbmdlKCk6IE9ic2VydmFibGU8J2Nvbm5lY3RlZCcgfCAnZGlzY29ubmVjdGVkJz4ge1xyXG4gICAgcmV0dXJuIG1lcmdlKFxyXG4gICAgICB0aGlzLm9uQ29ubmVjdCgpLnBpcGUobWFwVG8oJ2Nvbm5lY3RlZCcpKSxcclxuICAgICAgdGhpcy5vbkRpc2Nvbm5lY3QoKS5waXBlKG1hcFRvKCdkaXNjb25uZWN0ZWQnKSkgYXMgT2JzZXJ2YWJsZTwnZGlzY29ubmVjdGVkJz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbm90aWZpZWQgd2hlbiB0aGUgZGV2aWNlIGdvZXMgb2ZmbGluZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnb2ZmbGluZScsXHJcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcclxuICB9KVxyXG4gIG9uRGlzY29ubmVjdCgpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IG5vdGlmaWVkIHdoZW4gdGhlIGRldmljZSBnb2VzIG9ubGluZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGV2ZW50T2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGV2ZW50OiAnb25saW5lJyxcclxuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxyXG4gIH0pXHJcbiAgb25Db25uZWN0KCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==