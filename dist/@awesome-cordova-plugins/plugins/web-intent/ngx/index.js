import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var WebIntent = /** @class */ (function (_super) {
    __extends(WebIntent, _super);
    function WebIntent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntent.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntent.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntent.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntent.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntent.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntent.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntent.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntent.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntent.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntent.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntent.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntent.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntent.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntent.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntent.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    WebIntent.pluginName = "WebIntent";
    WebIntent.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntent.pluginRef = "plugins.intentShim";
    WebIntent.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntent.platforms = ["Android"];
    WebIntent.decorators = [
        { type: Injectable }
    ];
    return WebIntent;
}(AwesomeCordovaNativePlugin));
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLWludGVudC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXVFSCw2QkFBMEI7Ozs7SUF3R3ZELGlDQUFhLGFBQUMsT0FBc0I7SUFXcEMsMENBQXNCLGFBQUMsT0FBc0I7SUFXN0MsNEJBQVEsYUFBQyxLQUFhO0lBV3RCLDRCQUFRLGFBQUMsS0FBYTtJQVV0QiwwQkFBTTtJQVlOLDRCQUFRO0lBV1IsaUNBQWEsYUFBQyxPQUFzQjtJQVdwQyxnQ0FBWSxhQUFDLE9BQXNCO0lBYW5DLDZDQUF5QixhQUFDLE9BQXlDO0lBUW5FLCtDQUEyQjtJQU0zQixvQ0FBZ0I7SUFNaEIsNkJBQVM7SUFhVCw4QkFBVSxhQUFDLEVBQWM7WUFBWixjQUFVOzs7MEJBNU52QixrQ0FBVzs7Ozs7OzBCQVFYLGtDQUFXOzs7Ozs7MEJBUVgsaUNBQVU7Ozs7OzswQkFRVixvQ0FBYTs7Ozs7OzBCQVFiLG1DQUFZOzs7Ozs7MEJBUVosa0NBQVc7Ozs7OzswQkFRWCxrQ0FBVzs7Ozs7OzBCQVFYLG9DQUFhOzs7Ozs7MEJBUWIseUNBQWtCOzs7Ozs7MEJBUWxCLGtDQUFXOzs7Ozs7MEJBUVgsNkNBQXNCOzs7Ozs7MEJBUXRCLCtDQUF3Qjs7Ozs7Ozs7Ozs7O2dCQWhHekIsVUFBVTs7b0JBeEVYO0VBeUUrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVudENsaXBJdGVtIHtcclxuICB1cmk6IHN0cmluZztcclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIGV4dGVuc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnQge1xyXG4gIGFjdGlvbjogc3RyaW5nO1xyXG4gIGNsaXBJdGVtczogSW50ZW50Q2xpcEl0ZW1bXTtcclxuICBjb21wb25lbnQ6IHN0cmluZztcclxuICBleHRyYXM6IG9iamVjdDtcclxuICBmbGFnczogbnVtYmVyO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9ucyB7XHJcbiAgZmlsdGVyQWN0aW9ucz86IHN0cmluZ1tdO1xyXG4gIGZpbHRlckNhdGVnb3JpZXM/OiBzdHJpbmdbXTtcclxuICBmaWx0ZXJEYXRhU2NoZW1lcz86IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEludGVudE9wdGlvbnMge1xyXG4gIHJlcXVlc3RDb2RlPzogbnVtYmVyO1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbiAgcGFja2FnZT86IHN0cmluZztcclxuICB1cmw/OiBzdHJpbmc7XHJcbiAgZXh0cmFzPzogb2JqZWN0O1xyXG4gIGFjdGlvbj86IHN0cmluZztcclxuICBjb21wb25lbnQ/OiB7XHJcbiAgICBwYWNrYWdlOiBzdHJpbmc7XHJcbiAgICBjbGFzczogc3RyaW5nO1xyXG4gIH07XHJcbiAgZmxhZ3M/OiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFdlYiBJbnRlbnRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgUGx1Z2luIHByb3ZpZGVzIGEgZ2VuZXJhbCBwdXJwb3NlIHNoaW0gbGF5ZXIgZm9yIHRoZSBBbmRyb2lkIGludGVudCBtZWNoYW5pc20sIGV4cG9zaW5nIHZhcmlvdXMgd2F5cyB0byBoYW5kbGUgc2VuZGluZyBhbmQgcmVjZWl2aW5nIGludGVudHMuXHJcbiAqIEB1c2FnZVxyXG4gKiBGb3IgdXNhZ2UgaW5mb3JtYXRpb24gcGxlYXNlIHJlZmVyIHRvIHRoZSBwbHVnaW4ncyBHaXRodWIgcmVwby5cclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBXZWJJbnRlbnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViLWludGVudC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdlYkludGVudDogV2ViSW50ZW50KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAqICAgYWN0aW9uOiB0aGlzLndlYkludGVudC5BQ1RJT05fVklFVyxcclxuICogICB1cmw6ICdwYXRoL3RvL2ZpbGUnLFxyXG4gKiAgIHR5cGU6ICdhcHBsaWNhdGlvbi92bmQuYW5kcm9pZC5wYWNrYWdlLWFyY2hpdmUnXHJcbiAqIH1cclxuICpcclxuICogdGhpcy53ZWJJbnRlbnQuc3RhcnRBY3Rpdml0eShvcHRpb25zKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBJbnRlbnRPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViSW50ZW50JyxcclxuICBwbHVnaW46ICdjb20tZGFycnluY2FtcGJlbGwtY29yZG92YS1wbHVnaW4taW50ZW50JyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmludGVudFNoaW0nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZGFycnluY2FtcGJlbGwvZGFycnluY2FtcGJlbGwtY29yZG92YS1wbHVnaW4taW50ZW50JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJJbnRlbnQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX1NFTkQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX1ZJRVc6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFWFRSQV9URVhUOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVhUUkFfU1VCSkVDVDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVYVFJBX1NUUkVBTTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVYVFJBX0VNQUlMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9DQUxMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9TRU5EVE86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX0dFVF9DT05URU5UOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9QSUNLOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9JTlNUQUxMX1BBQ0tBR0U6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGFjdGlvbnNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQUNUSU9OX1VOSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExhdW5jaGVzIGFuIEFuZHJvaWQgaW50ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydEFjdGl2aXR5KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIGEgbmV3IGFjdGl2aXR5IGFuZCByZXR1cm4gdGhlIHJlc3VsdCB0byB0aGUgYXBwbGljYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtJbnRlbnRPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0QWN0aXZpdHlGb3JSZXN1bHQob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aCBzcGVjaWZpZWQgZXh0cmFcclxuICAgKlxyXG4gICAqIEBwYXJhbSBleHRyYSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc0V4dHJhKGV4dHJhOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgZXh0cmEgdGhhdCB0aGlzIGFwcCB3YXMgaW52b2tlZCB3aXRoXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXh0cmEge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIFVyaSB0aGUgYXBwIHdhcyBpbnZva2VkIHdpdGhcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFVyaSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY29udGVudCBvZiB0aGUgaW50ZW50IHVzZWQgd2hlbmV2ZXIgdGhlIGFwcGxpY2F0aW9uIGFjdGl2aXR5IGlzIGxhdW5jaGVkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxJbnRlbnQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBvbkludGVudCgpOiBPYnNlcnZhYmxlPEludGVudD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZHMgYSBjdXN0b20gaW50ZW50IHBhc3Npbmcgb3B0aW9uYWwgZXh0cmFzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZW5kQnJvYWRjYXN0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCB0aGF0IGEgZ2l2ZW4gYXBwbGljYXRpb24gc2VydmljZSBiZSBzdGFydGVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydFNlcnZpY2Uob3B0aW9uczogSW50ZW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXIgZm9yIHRoZSBzcGVjaWZpZWQgZmlsdGVyc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbHRlcnMge1JlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXIoZmlsdGVyczogUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5yZWdpc3RlcnMgYSBicm9hZGNhc3QgcmVjZWl2ZXJcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB1bnJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXIoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG9uQWN0aXZpdHlSZXN1bHQoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRJbnRlbnQoKTogUHJvbWlzZTxJbnRlbnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgYSByZXN1bHQgYmFjayB0byB0aGUgSW50ZW50IHRoYXQgc3RhcnRlZCB0aGlzIEFjdGl2aXR5LlxyXG4gICAqIFRoZSBkYXRhIGNhbiBiZSBwYXNzZWQgdXNpbmcgJ2V4dHJhcycuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcm9vdDBcclxuICAgKiBAcGFyYW0gcm9vdDAuZXh0cmFzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VuZFJlc3VsdCh7IGV4dHJhczoge30gfSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==