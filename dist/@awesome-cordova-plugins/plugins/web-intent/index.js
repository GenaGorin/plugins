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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var WebIntentOriginal = /** @class */ (function (_super) {
    __extends(WebIntentOriginal, _super);
    function WebIntentOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebIntentOriginal.prototype.startActivity = function (options) { return cordova(this, "startActivity", {}, arguments); };
    WebIntentOriginal.prototype.startActivityForResult = function (options) { return cordova(this, "startActivityForResult", {}, arguments); };
    WebIntentOriginal.prototype.hasExtra = function (extra) { return cordova(this, "hasExtra", {}, arguments); };
    WebIntentOriginal.prototype.getExtra = function (extra) { return cordova(this, "getExtra", {}, arguments); };
    WebIntentOriginal.prototype.getUri = function () { return cordova(this, "getUri", {}, arguments); };
    WebIntentOriginal.prototype.onIntent = function () { return cordova(this, "onIntent", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.sendBroadcast = function (options) { return cordova(this, "sendBroadcast", {}, arguments); };
    WebIntentOriginal.prototype.startService = function (options) { return cordova(this, "startService", {}, arguments); };
    WebIntentOriginal.prototype.registerBroadcastReceiver = function (filters) { return cordova(this, "registerBroadcastReceiver", { "observable": true }, arguments); };
    WebIntentOriginal.prototype.unregisterBroadcastReceiver = function () { return cordova(this, "unregisterBroadcastReceiver", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.onActivityResult = function () { return cordova(this, "onActivityResult", { "sync": true }, arguments); };
    WebIntentOriginal.prototype.getIntent = function () { return cordova(this, "getIntent", {}, arguments); };
    WebIntentOriginal.prototype.sendResult = function (_a) {
        var _b = _a.extras;
        return cordova(this, "sendResult", {}, arguments);
    };
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SEND", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SEND"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SEND", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_VIEW", {
        get: function () { return cordovaPropertyGet(this, "ACTION_VIEW"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_VIEW", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_TEXT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_TEXT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_TEXT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_SUBJECT", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_SUBJECT"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_SUBJECT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_STREAM", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_STREAM"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_STREAM", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "EXTRA_EMAIL", {
        get: function () { return cordovaPropertyGet(this, "EXTRA_EMAIL"); },
        set: function (value) { cordovaPropertySet(this, "EXTRA_EMAIL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_CALL", {
        get: function () { return cordovaPropertyGet(this, "ACTION_CALL"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_CALL", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_SENDTO", {
        get: function () { return cordovaPropertyGet(this, "ACTION_SENDTO"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_SENDTO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_GET_CONTENT", {
        get: function () { return cordovaPropertyGet(this, "ACTION_GET_CONTENT"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_GET_CONTENT", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_PICK", {
        get: function () { return cordovaPropertyGet(this, "ACTION_PICK"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_PICK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_INSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_INSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_INSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WebIntentOriginal.prototype, "ACTION_UNINSTALL_PACKAGE", {
        get: function () { return cordovaPropertyGet(this, "ACTION_UNINSTALL_PACKAGE"); },
        set: function (value) { cordovaPropertySet(this, "ACTION_UNINSTALL_PACKAGE", value); },
        enumerable: false,
        configurable: true
    });
    WebIntentOriginal.pluginName = "WebIntent";
    WebIntentOriginal.plugin = "com-darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.pluginRef = "plugins.intentShim";
    WebIntentOriginal.repo = "https://github.com/darryncampbell/darryncampbell-cordova-plugin-intent";
    WebIntentOriginal.platforms = ["Android"];
    return WebIntentOriginal;
}(AwesomeCordovaNativePlugin));
var WebIntent = new WebIntentOriginal();
export { WebIntent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLWludGVudC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQUM3RyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXVFSCw2QkFBMEI7Ozs7SUF3R3ZELGlDQUFhLGFBQUMsT0FBc0I7SUFXcEMsMENBQXNCLGFBQUMsT0FBc0I7SUFXN0MsNEJBQVEsYUFBQyxLQUFhO0lBV3RCLDRCQUFRLGFBQUMsS0FBYTtJQVV0QiwwQkFBTTtJQVlOLDRCQUFRO0lBV1IsaUNBQWEsYUFBQyxPQUFzQjtJQVdwQyxnQ0FBWSxhQUFDLE9BQXNCO0lBYW5DLDZDQUF5QixhQUFDLE9BQXlDO0lBUW5FLCtDQUEyQjtJQU0zQixvQ0FBZ0I7SUFNaEIsNkJBQVM7SUFhVCw4QkFBVSxhQUFDLEVBQWM7WUFBWixjQUFVOzs7MEJBNU52QixrQ0FBVzs7Ozs7OzBCQVFYLGtDQUFXOzs7Ozs7MEJBUVgsaUNBQVU7Ozs7OzswQkFRVixvQ0FBYTs7Ozs7OzBCQVFiLG1DQUFZOzs7Ozs7MEJBUVosa0NBQVc7Ozs7OzswQkFRWCxrQ0FBVzs7Ozs7OzBCQVFYLG9DQUFhOzs7Ozs7MEJBUWIseUNBQWtCOzs7Ozs7MEJBUWxCLGtDQUFXOzs7Ozs7MEJBUVgsNkNBQXNCOzs7Ozs7MEJBUXRCLCtDQUF3Qjs7Ozs7Ozs7Ozs7b0JBeEsxQjtFQXlFK0IsMEJBQTBCO1NBQTVDLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRDbGlwSXRlbSB7XHJcbiAgdXJpOiBzdHJpbmc7XHJcbiAgdHlwZT86IHN0cmluZztcclxuICBleHRlbnNpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZW50IHtcclxuICBhY3Rpb246IHN0cmluZztcclxuICBjbGlwSXRlbXM6IEludGVudENsaXBJdGVtW107XHJcbiAgY29tcG9uZW50OiBzdHJpbmc7XHJcbiAgZXh0cmFzOiBvYmplY3Q7XHJcbiAgZmxhZ3M6IG51bWJlcjtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVnaXN0ZXJCcm9hZGNhc3RSZWNlaXZlck9wdGlvbnMge1xyXG4gIGZpbHRlckFjdGlvbnM/OiBzdHJpbmdbXTtcclxuICBmaWx0ZXJDYXRlZ29yaWVzPzogc3RyaW5nW107XHJcbiAgZmlsdGVyRGF0YVNjaGVtZXM/OiBzdHJpbmdbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbnRlbnRPcHRpb25zIHtcclxuICByZXF1ZXN0Q29kZT86IG51bWJlcjtcclxuICB0eXBlPzogc3RyaW5nO1xyXG4gIHBhY2thZ2U/OiBzdHJpbmc7XHJcbiAgdXJsPzogc3RyaW5nO1xyXG4gIGV4dHJhcz86IG9iamVjdDtcclxuICBhY3Rpb24/OiBzdHJpbmc7XHJcbiAgY29tcG9uZW50Pzoge1xyXG4gICAgcGFja2FnZTogc3RyaW5nO1xyXG4gICAgY2xhc3M6IHN0cmluZztcclxuICB9O1xyXG4gIGZsYWdzPzogbnVtYmVyW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBXZWIgSW50ZW50XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIFBsdWdpbiBwcm92aWRlcyBhIGdlbmVyYWwgcHVycG9zZSBzaGltIGxheWVyIGZvciB0aGUgQW5kcm9pZCBpbnRlbnQgbWVjaGFuaXNtLCBleHBvc2luZyB2YXJpb3VzIHdheXMgdG8gaGFuZGxlIHNlbmRpbmcgYW5kIHJlY2VpdmluZyBpbnRlbnRzLlxyXG4gKiBAdXNhZ2VcclxuICogRm9yIHVzYWdlIGluZm9ybWF0aW9uIHBsZWFzZSByZWZlciB0byB0aGUgcGx1Z2luJ3MgR2l0aHViIHJlcG8uXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgV2ViSW50ZW50IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3dlYi1pbnRlbnQvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJJbnRlbnQ6IFdlYkludGVudCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCBvcHRpb25zID0ge1xyXG4gKiAgIGFjdGlvbjogdGhpcy53ZWJJbnRlbnQuQUNUSU9OX1ZJRVcsXHJcbiAqICAgdXJsOiAncGF0aC90by9maWxlJyxcclxuICogICB0eXBlOiAnYXBwbGljYXRpb24vdm5kLmFuZHJvaWQucGFja2FnZS1hcmNoaXZlJ1xyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMud2ViSW50ZW50LnN0YXJ0QWN0aXZpdHkob3B0aW9ucykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogSW50ZW50T3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYkludGVudCcsXHJcbiAgcGx1Z2luOiAnY29tLWRhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5pbnRlbnRTaGltJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RhcnJ5bmNhbXBiZWxsL2RhcnJ5bmNhbXBiZWxsLWNvcmRvdmEtcGx1Z2luLWludGVudCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViSW50ZW50IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9TRU5EOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9WSUVXOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBleHRyYXNcclxuICAgKlxyXG4gICAqIEB0eXBlIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVhUUkFfVEVYVDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgZXh0cmFzXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVYVFJBX1NVQkpFQ1Q6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFWFRSQV9TVFJFQU06IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnQgZm9yIGV4dHJhc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFWFRSQV9FTUFJTDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fQ0FMTDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fU0VORFRPOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9HRVRfQ09OVEVOVDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fUElDSzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudCBmb3IgYWN0aW9uc1xyXG4gICAqXHJcbiAgICogQHR5cGUge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBQ1RJT05fSU5TVEFMTF9QQUNLQUdFOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50IGZvciBhY3Rpb25zXHJcbiAgICpcclxuICAgKiBAdHlwZSB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFDVElPTl9VTklOU1RBTExfUEFDS0FHRTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMYXVuY2hlcyBhbiBBbmRyb2lkIGludGVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRBY3Rpdml0eShvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBhIG5ldyBhY3Rpdml0eSBhbmQgcmV0dXJuIHRoZSByZXN1bHQgdG8gdGhlIGFwcGxpY2F0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7SW50ZW50T3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydEFjdGl2aXR5Rm9yUmVzdWx0KG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIHRoaXMgYXBwIHdhcyBpbnZva2VkIHdpdGggc3BlY2lmaWVkIGV4dHJhXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZXh0cmEge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNFeHRyYShleHRyYTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIGV4dHJhIHRoYXQgdGhpcyBhcHAgd2FzIGludm9rZWQgd2l0aFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGV4dHJhIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0RXh0cmEoZXh0cmE6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBVcmkgdGhlIGFwcCB3YXMgaW52b2tlZCB3aXRoXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVcmkoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGNvbnRlbnQgb2YgdGhlIGludGVudCB1c2VkIHdoZW5ldmVyIHRoZSBhcHBsaWNhdGlvbiBhY3Rpdml0eSBpcyBsYXVuY2hlZFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8SW50ZW50Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb25JbnRlbnQoKTogT2JzZXJ2YWJsZTxJbnRlbnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmRzIGEgY3VzdG9tIGludGVudCBwYXNzaW5nIG9wdGlvbmFsIGV4dHJhc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VuZEJyb2FkY2FzdChvcHRpb25zOiBJbnRlbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgdGhhdCBhIGdpdmVuIGFwcGxpY2F0aW9uIHNlcnZpY2UgYmUgc3RhcnRlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0ludGVudE9wdGlvbnN9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRTZXJ2aWNlKG9wdGlvbnM6IEludGVudE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGEgYnJvYWRjYXN0IHJlY2VpdmVyIGZvciB0aGUgc3BlY2lmaWVkIGZpbHRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWx0ZXJzIHtSZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyT3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICByZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKGZpbHRlcnM6IFJlZ2lzdGVyQnJvYWRjYXN0UmVjZWl2ZXJPcHRpb25zKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVucmVnaXN0ZXJzIGEgYnJvYWRjYXN0IHJlY2VpdmVyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdW5yZWdpc3RlckJyb2FkY2FzdFJlY2VpdmVyKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvbkFjdGl2aXR5UmVzdWx0KCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SW50ZW50KCk6IFByb21pc2U8SW50ZW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIGEgcmVzdWx0IGJhY2sgdG8gdGhlIEludGVudCB0aGF0IHN0YXJ0ZWQgdGhpcyBBY3Rpdml0eS5cclxuICAgKiBUaGUgZGF0YSBjYW4gYmUgcGFzc2VkIHVzaW5nICdleHRyYXMnLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJvb3QwXHJcbiAgICogQHBhcmFtIHJvb3QwLmV4dHJhc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNlbmRSZXN1bHQoeyBleHRyYXM6IHt9IH0pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=