import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaInstance, cordova, checkAvailability } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var PushapePush = /** @class */ (function (_super) {
    __extends(PushapePush, _super);
    function PushapePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     *
     * @param options {PushapeOptions}
     * @returns {PushObject}
     */
    PushapePush.prototype.init = function (options) {
        return new PushObject(options);
    };
    PushapePush.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    PushapePush.prototype.createChannel = function (channel) { return cordova(this, "createChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePush.prototype.deleteChannel = function (id) { return cordova(this, "deleteChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePush.prototype.listChannels = function () { return cordova(this, "listChannels", {}, arguments); };
    PushapePush.pluginName = "PushapePush";
    PushapePush.plugin = "pushape-cordova-push";
    PushapePush.pluginRef = "PushNotification";
    PushapePush.repo = "https://github.com/gluelabs/pushape-cordova-push";
    PushapePush.install = "ionic cordova plugin add pushape-cordova-push";
    PushapePush.platforms = ["Android", "Browser", "iOS"];
    PushapePush.decorators = [
        { type: Injectable }
    ];
    return PushapePush;
}(AwesomeCordovaNativePlugin));
export { PushapePush };
var PushObject = /** @class */ (function () {
    function PushObject(options) {
        if (checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            if (typeof window !== 'undefined') {
                this._objectInstance = window.PushNotification.init(options);
            }
        }
    }
    PushObject.prototype.on = function (event) { return cordovaInstance(this, "on", { "observable": true, "clearFunction": "off", "clearWithArgs": true }, arguments); };
    PushObject.prototype.unregister = function () { return cordovaInstance(this, "unregister", {}, arguments); };
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return cordovaInstance(this, "setApplicationIconBadgeNumber", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return cordovaInstance(this, "getApplicationIconBadgeNumber", {}, arguments); };
    PushObject.prototype.finish = function (id) { return cordovaInstance(this, "finish", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.clearAllNotifications = function () { return cordovaInstance(this, "clearAllNotifications", {}, arguments); };
    PushObject.prototype.subscribe = function (topic) { return cordovaInstance(this, "subscribe", {}, arguments); };
    PushObject.prototype.unsubscribe = function (topic) { return cordovaInstance(this, "unsubscribe", {}, arguments); };
    PushObject.pluginName = "PushapePush";
    PushObject.plugin = "pushape-cordova-push";
    PushObject.pluginRef = "PushNotification";
    return PushObject;
}());
export { PushObject };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcHVzaGFwZS1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHdEQUtMLGlCQUFpQixFQUNsQixNQUFNLCtCQUErQixDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBMFNELCtCQUEwQjs7OztJQUN6RDs7Ozs7T0FLRztJQUNILDBCQUFJLEdBQUosVUFBSyxPQUF1QjtRQUMxQixPQUFPLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFRRCxtQ0FBYTtJQVliLG1DQUFhLGFBQUMsT0FBaUI7SUFZL0IsbUNBQWEsYUFBQyxFQUFXO0lBVXpCLGtDQUFZOzs7Ozs7OztnQkFwRGIsVUFBVTs7c0JBalRYO0VBa1RpQywwQkFBMEI7U0FBOUMsV0FBVzs7SUFtRXRCLG9CQUFZLE9BQXVCO1FBQ2pDLElBQUksaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixDQUFDLEtBQUssSUFBSSxFQUFFO1lBQzlFLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUQ7U0FDRjtJQUNILENBQUM7SUFhRCx1QkFBRSxhQUFDLEtBQWdCO0lBVW5CLCtCQUFVO0lBZ0JWLGtEQUE2QixhQUFDLEtBQWM7SUFRNUMsa0RBQTZCO0lBYzdCLDJCQUFNLGFBQUMsRUFBVztJQVFsQiwwQ0FBcUI7SUFXckIsOEJBQVMsYUFBQyxLQUFhO0lBV3ZCLGdDQUFXLGFBQUMsS0FBYTs7OztxQkF0ZDNCOztTQWtYYSxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFBsdWdpbixcclxuICBDb3Jkb3ZhLFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxuICBjaGVja0F2YWlsYWJpbGl0eSxcclxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG5leHBvcnQgdHlwZSBFdmVudFJlc3BvbnNlID0gUHVzaGFwZVJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2UgJlxyXG4gIFJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2UgJlxyXG4gIE5vdGlmaWNhdGlvbkV2ZW50UmVzcG9uc2UgJlxyXG4gIEVycm9yO1xyXG5cclxuaW50ZXJmYWNlIFJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSByZWdpc3RyYXRpb24gSUQgcHJvdmlkZWQgYnkgdGhlIDNyZCBwYXJ0eSByZW1vdGUgcHVzaCBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIHJlZ2lzdHJhdGlvbklkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTm90aWZpY2F0aW9uRXZlbnRSZXNwb25zZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHRleHQgb2YgdGhlIHB1c2ggbWVzc2FnZSBzZW50IGZyb20gdGhlIDNyZCBwYXJ0eSBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgb3B0aW9uYWwgdGl0bGUgb2YgdGhlIHB1c2ggbWVzc2FnZSBzZW50IGZyb20gdGhlIDNyZCBwYXJ0eSBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgbWVzc2FnZXMgdG8gYmUgZGlzcGxheWVkIGluIHRoZSBiYWRnZSBpT1Mgb3IgbWVzc2FnZSBjb3VudCBpbiB0aGUgbm90aWZpY2F0aW9uIHNoYWRlIGluIEFuZHJvaWQuXHJcbiAgICogRm9yIHdpbmRvd3MsIGl0IHJlcHJlc2VudHMgdGhlIHZhbHVlIGluIHRoZSBiYWRnZSBub3RpZmljYXRpb24gd2hpY2ggY291bGQgYmUgYSBudW1iZXIgb3IgYSBzdGF0dXMgZ2x5cGguXHJcbiAgICovXHJcbiAgY291bnQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgc291bmQgZmlsZSB0byBiZSBwbGF5ZWQgdXBvbiByZWNlaXB0IG9mIHRoZSBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgc291bmQ6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgcGF0aCBvZiB0aGUgaW1hZ2UgZmlsZSB0byBiZSBkaXNwbGF5ZWQgaW4gdGhlIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEFuIG9wdGlvbmFsIGNvbGxlY3Rpb24gb2YgZGF0YSBzZW50IGJ5IHRoZSAzcmQgcGFydHkgcHVzaCBzZXJ2aWNlIHRoYXQgZG9lcyBub3QgZml0IGluIHRoZSBhYm92ZSBwcm9wZXJ0aWVzLlxyXG4gICAqL1xyXG4gIGFkZGl0aW9uYWxEYXRhOiBOb3RpZmljYXRpb25FdmVudEFkZGl0aW9uYWxEYXRhICYgYW55O1xyXG59XHJcblxyXG4vKipcclxuICogTG9vc2VuZWQgdXAgd2l0aCBhIGRpY3Rpb25hcnkgbm90YXRpb24sIGJ1dCBhbGwgbm9uLWRlZmluZWQgcHJvcGVydGllcyBuZWVkIHRvIHVzZSAobWFwWydwcm9wJ10pIG5vdGF0aW9uXHJcbiAqXHJcbiAqIElkZWFsbHkgdGhlIGRldmVsb3BlciB3b3VsZCBvdmVybG9hZCAobWVyZ2VkIGRlY2xhcmF0aW9uKSB0aGlzIG9yIGNyZWF0ZSBhIG5ldyBpbnRlcmZhY2UgdGhhdCB3b3VsZCBleHRlbmQgdGhpcyBvbmVcclxuICogc28gdGhhdCBoZSBjb3VsZCBzcGVjaWZ5IGFueSBjdXN0b20gY29kZSB3aXRob3V0IGhhdmluZyB0byB1c2UgYXJyYXkgbm90YXRpb24gKG1hcFsncHJvcCddKSBmb3IgYWxsIG9mIHRoZW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5vdGlmaWNhdGlvbkV2ZW50QWRkaXRpb25hbERhdGEge1xyXG4gIC8qKlxyXG4gICAqIFdoZXRoZXIgdGhlIG5vdGlmaWNhdGlvbiB3YXMgcmVjZWl2ZWQgd2hpbGUgdGhlIGFwcCB3YXMgaW4gdGhlIGZvcmVncm91bmRcclxuICAgKi9cclxuICBmb3JlZ3JvdW5kPzogYm9vbGVhbjtcclxuICBjb2xsYXBzZV9rZXk/OiBzdHJpbmc7XHJcbiAgY29sZHN0YXJ0PzogYm9vbGVhbjtcclxuICBmcm9tPzogc3RyaW5nO1xyXG4gIG5vdElkPzogc3RyaW5nO1xyXG5cclxuICBbbmFtZTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElPU1B1c2hPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBXaGV0aGVyIHRvIHVzZSBwcm9kIG9yIHNhbmRib3ggR0NNIHNldHRpbmcuXHJcbiAgICovXHJcbiAgZmNtU2FuZGJveD86IGJvb2xlYW4gfCBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRydWUgdGhlIGRldmljZSBzaG93cyBhbiBhbGVydCBvbiByZWNlaXB0IG9mIG5vdGlmaWNhdGlvbi5cclxuICAgKiBOb3RlKio6IHRoZSB2YWx1ZSB5b3Ugc2V0IHRoaXMgb3B0aW9uIHRvIHRoZSBmaXJzdCB0aW1lIHlvdSBjYWxsIHRoZSBpbml0XHJcbiAgICogbWV0aG9kIHdpbGwgYmUgaG93IHRoZSBhcHBsaWNhdGlvbiBhbHdheXMgYWN0cy4gT25jZSB0aGlzIGlzIHNldFxyXG4gICAqIHByb2dyYW1tYXRpY2FsbHkgaW4gdGhlIGluaXQgbWV0aG9kIGl0IGNhbiBvbmx5IGJlIGNoYW5nZWQgbWFudWFsbHkgYnkgdGhlXHJcbiAgICogdXNlciBpbiBTZXR0aW5ncz5Ob3RpZmljYXRpb25zPkFwcCBOYW1lLiBUaGlzIGlzIG5vcm1hbCBpT1MgYmVoYXZpb3VyLlxyXG4gICAqL1xyXG4gIGFsZXJ0PzogYm9vbGVhbiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSB0aGUgZGV2aWNlIHNldHMgdGhlIGJhZGdlIG51bWJlciBvbiByZWNlaXB0IG9mIG5vdGlmaWNhdGlvbi5cclxuICAgKiBOb3RlKio6IHRoZSB2YWx1ZSB5b3Ugc2V0IHRoaXMgb3B0aW9uIHRvIHRoZSBmaXJzdCB0aW1lIHlvdSBjYWxsIHRoZSBpbml0XHJcbiAgICogbWV0aG9kIHdpbGwgYmUgaG93IHRoZSBhcHBsaWNhdGlvbiBhbHdheXMgYWN0cy4gT25jZSB0aGlzIGlzIHNldFxyXG4gICAqIHByb2dyYW1tYXRpY2FsbHkgaW4gdGhlIGluaXQgbWV0aG9kIGl0IGNhbiBvbmx5IGJlIGNoYW5nZWQgbWFudWFsbHkgYnkgdGhlXHJcbiAgICogdXNlciBpbiBTZXR0aW5ncz5Ob3RpZmljYXRpb25zPkFwcCBOYW1lLiBUaGlzIGlzIG5vcm1hbCBpT1MgYmVoYXZpb3VyLlxyXG4gICAqL1xyXG4gIGJhZGdlPzogYm9vbGVhbiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSB0aGUgZGV2aWNlIHBsYXlzIGEgc291bmQgb24gcmVjZWlwdCBvZiBub3RpZmljYXRpb24uXHJcbiAgICogTm90ZSoqOiB0aGUgdmFsdWUgeW91IHNldCB0aGlzIG9wdGlvbiB0byB0aGUgZmlyc3QgdGltZSB5b3UgY2FsbCB0aGUgaW5pdFxyXG4gICAqIG1ldGhvZCB3aWxsIGJlIGhvdyB0aGUgYXBwbGljYXRpb24gYWx3YXlzIGFjdHMuIE9uY2UgdGhpcyBpcyBzZXRcclxuICAgKiBwcm9ncmFtbWF0aWNhbGx5IGluIHRoZSBpbml0IG1ldGhvZCBpdCBjYW4gb25seSBiZSBjaGFuZ2VkIG1hbnVhbGx5IGJ5IHRoZVxyXG4gICAqIHVzZXIgaW4gU2V0dGluZ3M+Tm90aWZpY2F0aW9ucz5BcHAgTmFtZS4gVGhpcyBpcyBub3JtYWwgaU9TIGJlaGF2aW91ci5cclxuICAgKi9cclxuICBzb3VuZD86IGJvb2xlYW4gfCBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRydWUgdGhlIGJhZGdlIHdpbGwgYmUgY2xlYXJlZCBvbiBhcHAgc3RhcnR1cC5cclxuICAgKi9cclxuICBjbGVhckJhZGdlPzogYm9vbGVhbiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGFycmF5IGNvbnRhaW5zIG9uZSBvciBtb3JlIHN0cmluZ3MgZWFjaCBzdHJpbmcgd2lsbCBiZSB1c2VkIHRvXHJcbiAgICogc3Vic2NyaWJlIHRvIGEgR2NtUHViU3ViIHRvcGljLlxyXG4gICAqIE5vdGUqKjogb25seSB1c2FibGUgaW4gY29uanVuY3Rpb24gd2l0aCBgc2VuZGVySURgLlxyXG4gICAqL1xyXG4gIHRvcGljcz86IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgZGF0YSByZXF1aXJlZCBpbiBvcmRlciB0byBlbmFibGUgQWN0aW9uIEJ1dHRvbnMgZm9yIGlPUy5cclxuICAgKiBBY3Rpb24gQnV0dG9ucyBvbiBpT1MgLSBodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLXB1c2gvYmxvYi9tYXN0ZXIvZG9jcy9QQVlMT0FELm1kI2FjdGlvbi1idXR0b25zLTFcclxuICAgKi9cclxuICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlBcnJheTtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSB0aGUgZGV2aWNlIHdpbGwgYmUgc2V0IHVwIHRvIHJlY2VpdmUgVm9JUCBQdXNoIG5vdGlmaWNhdGlvbnMgYW5kIHRoZVxyXG4gICAqIG90aGVyIG9wdGlvbnMgd2lsbCBiZSBpZ25vcmVkIHNpbmNlIFZvSVAgbm90aWZpY2F0aW9ucyBhcmUgc2lsZW50XHJcbiAgICogbm90aWZpY2F0aW9ucyB0aGF0IHNob3VsZCBiZSBoYW5kbGVkIGluIHRoZSBcIm5vdGlmaWNhdGlvblwiIGV2ZW50LlxyXG4gICAqL1xyXG4gIHZvaXA/OiBib29sZWFuIHwgc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5QXJyYXkge1xyXG4gIFtuYW1lOiBzdHJpbmddOiBDYXRlZ29yeUFjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUFjdGlvbiB7XHJcbiAgeWVzPzogQ2F0ZWdvcnlBY3Rpb25EYXRhO1xyXG4gIG5vPzogQ2F0ZWdvcnlBY3Rpb25EYXRhO1xyXG4gIG1heWJlPzogQ2F0ZWdvcnlBY3Rpb25EYXRhO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5QWN0aW9uRGF0YSB7XHJcbiAgY2FsbGJhY2s6IHN0cmluZztcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIGZvcmVncm91bmQ6IGJvb2xlYW47XHJcbiAgZGVzdHJ1Y3RpdmU6IGJvb2xlYW47XHJcbiAgaW5saW5lPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBbmRyb2lkUHVzaE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIE1hcHMgdG8gdGhlIHByb2plY3QgbnVtYmVyIGluIHRoZSBHb29nbGUgRGV2ZWxvcGVyIENvbnNvbGUuXHJcbiAgICovXHJcbiAgc2VuZGVySUQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIGEgZHJhd2FibGUgcmVzb3VyY2UgdG8gdXNlIGFzIHRoZSBzbWFsbC1pY29uLiBUaGUgbmFtZSBzaG91bGRcclxuICAgKiBub3QgaW5jbHVkZSB0aGUgZXh0ZW5zaW9uLlxyXG4gICAqL1xyXG4gIGljb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGJhY2tncm91bmQgY29sb3Igb2YgdGhlIHNtYWxsIGljb24gb24gQW5kcm9pZCA1LjAgYW5kIGdyZWF0ZXIuXHJcbiAgICogW1N1cHBvcnRlZCBGb3JtYXRzXShodHRwOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2ludGwvcnUvcmVmZXJlbmNlL2FuZHJvaWQvZ3JhcGhpY3MvQ29sb3IuaHRtbCNwYXJzZUNvbG9yKGphdmEubGFuZy5TdHJpbmcpKVxyXG4gICAqL1xyXG4gIGljb25Db2xvcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSBpdCBwbGF5cyB0aGUgc291bmQgc3BlY2lmaWVkIGluIHRoZSBwdXNoIGRhdGEgb3IgdGhlIGRlZmF1bHQgc3lzdGVtXHJcbiAgICogc291bmQuXHJcbiAgICovXHJcbiAgc291bmQ/OiBib29sZWFuIHwgc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB0cnVlIHRoZSBkZXZpY2UgdmlicmF0ZXMgb24gcmVjZWlwdCBvZiBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgdmlicmF0ZT86IGJvb2xlYW4gfCBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRydWUgdGhlIGljb24gYmFkZ2Ugd2lsbCBiZSBjbGVhcmVkIG9uIGluaXQgYW5kIGJlZm9yZSBwdXNoIG1lc3NhZ2VzIGFyZSBwcm9jZXNzZWQuXHJcbiAgICovXHJcbiAgY2xlYXJCYWRnZT86IGJvb2xlYW4gfCBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRydWUgdGhlIGFwcCBjbGVhcnMgYWxsIHBlbmRpbmcgbm90aWZpY2F0aW9ucyB3aGVuIGl0IGlzIGNsb3NlZC5cclxuICAgKi9cclxuICBjbGVhck5vdGlmaWNhdGlvbnM/OiBib29sZWFuIHwgc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB0cnVlIHdpbGwgYWx3YXlzIHNob3cgYSBub3RpZmljYXRpb24sIGV2ZW4gd2hlbiB0aGUgYXBwIGlzIG9uIHRoZVxyXG4gICAqIGZvcmVncm91bmQuXHJcbiAgICovXHJcbiAgZm9yY2VTaG93PzogYm9vbGVhbiB8IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgdGhlIGFycmF5IGNvbnRhaW5zIG9uZSBvciBtb3JlIHN0cmluZ3MgZWFjaCBzdHJpbmcgd2lsbCBiZSB1c2VkIHRvXHJcbiAgICogc3Vic2NyaWJlIHRvIGEgR2NtUHViU3ViIHRvcGljLlxyXG4gICAqL1xyXG4gIHRvcGljcz86IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUga2V5IHRvIHNlYXJjaCBmb3IgdGV4dCBvZiBub3RpZmljYXRpb24uXHJcbiAgICovXHJcbiAgbWVzc2FnZUtleT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGtleSB0byBzZWFyY2ggZm9yIHRpdGxlIG9mIG5vdGlmaWNhdGlvbi5cclxuICAgKi9cclxuICB0aXRsZUtleT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCcm93c2VyUHVzaE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsLiBZb3VyIEdDTSBBUEkga2V5IGlmIHlvdSBhcmUgdXNpbmcgVkFQSUQga2V5cy5cclxuICAgKi9cclxuICBhcHBsaWNhdGlvblNlcnZlcktleT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVVJMIGZvciB0aGUgcHVzaCBzZXJ2ZXIgeW91IHdhbnQgdG8gdXNlLlxyXG4gICAqIERlZmF1bHQ6IGh0dHA6Ly9wdXNoLmFwaS5waG9uZWdhcC5jb20vdjEvcHVzaCAgT3B0aW9uYWwuXHJcbiAgICovXHJcbiAgcHVzaFNlcnZpY2VVUkw/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBQdXNoT3B0aW9ucyB7XHJcbiAgaW9zPzogSU9TUHVzaE9wdGlvbnM7XHJcbiAgYW5kcm9pZD86IEFuZHJvaWRQdXNoT3B0aW9ucztcclxuICB3aW5kb3dzPzogYW55O1xyXG4gIGJyb3dzZXI/OiBCcm93c2VyUHVzaE9wdGlvbnM7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFByaW9yaXR5ID0gMSB8IDIgfCAzIHwgNCB8IDU7XHJcbmV4cG9ydCB0eXBlIFZpc2liaWxpdHkgPSAwIHwgMSB8IC0xO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGFubmVsIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgaW1wb3J0YW5jZTogUHJpb3JpdHk7XHJcbiAgc291bmQ/OiBzdHJpbmc7XHJcbiAgdmlicmF0aW9uPzogYm9vbGVhbiB8IG51bWJlcltdO1xyXG4gIHZpc2liaWxpdHk/OiBWaXNpYmlsaXR5O1xyXG4gIGJhZGdlPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHVzaEV2ZW50ID0gJ3JlZ2lzdHJhdGlvbicgfCAnbm90aWZpY2F0aW9uJyB8ICdlcnJvcic7XHJcblxyXG4vKiogRXh0ZW5kZWQgUHVzaGFwZSB0eXBlcyAqL1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQdXNoYXBlUHVzaE9wdGlvbnMge1xyXG4gIGlkX2FwcDogc3RyaW5nO1xyXG4gIHBsYXRmb3JtOiBzdHJpbmc7XHJcbiAgdXVpZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFB1c2hhcGVPcHRpb25zIGV4dGVuZHMgUHVzaE9wdGlvbnMge1xyXG4gIGVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHB1c2hhcGU6IFB1c2hhcGVQdXNoT3B0aW9ucztcclxuICBpZF91c2VyOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHVzaGFwZVJlZ2lzdHJhdGlvbkV2ZW50UmVzcG9uc2UgZXh0ZW5kcyBSZWdpc3RyYXRpb25FdmVudFJlc3BvbnNlIHtcclxuICBwdXNoX2lkOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBQdXNoYXBlUHVzaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUmVnaXN0ZXIgYW5kIHJlY2VpdmUgcHVzaCBub3RpZmljYXRpb25zLlxyXG4gKiBUaGlzIHBsdWdpbiBleHRlbmRzIGZ1bmN0aW9uYWxpdGllcyBvZiBQdXNoIG5hdGl2ZSBwbHVnaW4gaW4gb3JkZXIgdG8gdXNlIGl0IHdpdGggUHVzaGFwZSBzZXJ2aWNlLlxyXG4gKlxyXG4gKiBQdXNoYXBlIHNlcnZpY2U6IEBsaW5rIGh0dHBzOi8vZ2x1ZS1sYWJzLmNvbS9wdXNoYXBlLWludmlvLW5vdGlmaWNoZS1wdXNoLWlvcy1hbmRyb2lkLWFwaS1zZGtcclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBwdXNoYXBlLWNvcmRvdmEtcHVzaGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtQdXNoYXBlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vZ2x1ZWxhYnMvcHVzaGFwZS1jb3Jkb3ZhLXB1c2gpLlxyXG4gKlxyXG4gKiBGb3IgVHlwZVNjcmlwdCB1c2Vycywgc2VlIHRoZSBbUHVzaGFwZSBwbHVnaW4gZG9jcyBhYm91dCB1c2luZyBUeXBlU2NyaXB0IGZvciBjdXN0b20gbm90aWZpY2F0aW9uc10oaHR0cHM6Ly9naXRodWIuY29tL2dsdWVsYWJzL3B1c2hhcGUtY29yZG92YS1wdXNoL2Jsb2IvbWFzdGVyL2RvY3MvUFVTSEFQRV9UWVBFU0NSSVBULm1kKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUHVzaGFwZVB1c2ggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvcHVzaGFwZS1wdXNoL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgcHVzaGFwZVB1c2g6IFB1c2hhcGVQdXNoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBQdXNoYXBlUmVnaXN0cmF0aW9uRXZlbnRSZXNwb25zZVxyXG4gKiBOb3RpZmljYXRpb25FdmVudFJlc3BvbnNlXHJcbiAqIE5vdGlmaWNhdGlvbkV2ZW50QWRkaXRpb25hbERhdGFcclxuICogSU9TUHVzaE9wdGlvbnNcclxuICogQW5kcm9pZFB1c2hPcHRpb25zXHJcbiAqIEJyb3dzZXJQdXNoT3B0aW9uc1xyXG4gKiBQdXNoYXBlUHVzaE9wdGlvbnNcclxuICogUHVzaGFwZU9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQdXNoYXBlUHVzaCcsXHJcbiAgcGx1Z2luOiAncHVzaGFwZS1jb3Jkb3ZhLXB1c2gnLFxyXG4gIHBsdWdpblJlZjogJ1B1c2hOb3RpZmljYXRpb24nLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9nbHVlbGFicy9wdXNoYXBlLWNvcmRvdmEtcHVzaCcsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBwdXNoYXBlLWNvcmRvdmEtcHVzaCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHVzaGFwZVB1c2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSW5pdCBwdXNoIG5vdGlmaWNhdGlvbnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQdXNoYXBlT3B0aW9uc31cclxuICAgKiBAcmV0dXJucyB7UHVzaE9iamVjdH1cclxuICAgKi9cclxuICBpbml0KG9wdGlvbnM6IFB1c2hhcGVPcHRpb25zKTogUHVzaE9iamVjdCB7XHJcbiAgICByZXR1cm4gbmV3IFB1c2hPYmplY3Qob3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayB3aGV0aGVyIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiBwZXJtaXNzaW9uIGhhcyBiZWVuIGdyYW50ZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx7aXNFbmFibGVkOiBib29sZWFufT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBvYmplY3Qgd2l0aCBvbmUgcHJvcGVydHk6IGlzRW5hYmxlZCwgYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHBlcm1pc3Npb24gaGFzIGJlZW4gZ3JhbnRlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPHsgaXNFbmFibGVkOiBib29sZWFuIH0+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBub3RpZmljYXRpb24gY2hhbm5lbCBmb3IgQW5kcm9pZCBPIGFuZCBhYm92ZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjaGFubmVsIHtDaGFubmVsfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGNyZWF0ZUNoYW5uZWwoY2hhbm5lbD86IENoYW5uZWwpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIGEgbm90aWZpY2F0aW9uIGNoYW5uZWwgZm9yIEFuZHJvaWQgTyBhbmQgYWJvdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWQge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBkZWxldGVDaGFubmVsKGlkPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIGN1cnJlbnRseSBjb25maWd1cmVkIGNoYW5uZWxzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Q2hhbm5lbFtdPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbGlzdENoYW5uZWxzKCk6IFByb21pc2U8Q2hhbm5lbFtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1B1c2hhcGVQdXNoJyxcclxuICBwbHVnaW46ICdwdXNoYXBlLWNvcmRvdmEtcHVzaCcsXHJcbiAgcGx1Z2luUmVmOiAnUHVzaE5vdGlmaWNhdGlvbicsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQdXNoT2JqZWN0IHtcclxuICBwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBQdXNoYXBlT3B0aW9ucykge1xyXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KCdQdXNoTm90aWZpY2F0aW9uJywgJ2luaXQnLCAnUHVzaE5vdGlmaWNhdGlvbicpID09PSB0cnVlKSB7XHJcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMuX29iamVjdEluc3RhbmNlID0gd2luZG93LlB1c2hOb3RpZmljYXRpb24uaW5pdChvcHRpb25zKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhbiBldmVudCBsaXN0ZW5lclxyXG4gICAqXHJcbiAgICogQHBhcmFtIGV2ZW50IHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8RXZlbnRSZXNwb25zZT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ29mZicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgb24oZXZlbnQ6IFB1c2hFdmVudCk6IE9ic2VydmFibGU8RXZlbnRSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHVucmVnaXN0ZXIgbWV0aG9kIGlzIHVzZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gbm8gbG9uZ2VyIHdhbnRzIHRvIHJlY2VpdmUgcHVzaCBub3RpZmljYXRpb25zLlxyXG4gICAqIEJld2FyZSB0aGF0IHRoaXMgY2xlYW5zIHVwIGFsbCBldmVudCBoYW5kbGVycyBwcmV2aW91c2x5IHJlZ2lzdGVyZWQsXHJcbiAgICogc28geW91IHdpbGwgbmVlZCB0byByZS1yZWdpc3RlciB0aGVtIGlmIHlvdSB3YW50IHRoZW0gdG8gZnVuY3Rpb24gYWdhaW4gd2l0aG91dCBhbiBhcHBsaWNhdGlvbiByZWxvYWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgdW5yZWdpc3RlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBiYWRnZSBjb3VudCB2aXNpYmxlIHdoZW4gdGhlIGFwcCBpcyBub3QgcnVubmluZ1xyXG4gICAqXHJcbiAgICogVGhlIGNvdW50IGlzIGFuIGludGVnZXIgaW5kaWNhdGluZyB3aGF0IG51bWJlciBzaG91bGQgc2hvdyB1cCBpbiB0aGUgYmFkZ2UuXHJcbiAgICogUGFzc2luZyAwIHdpbGwgY2xlYXIgdGhlIGJhZGdlLlxyXG4gICAqIEVhY2ggbm90aWZpY2F0aW9uIGV2ZW50IGNvbnRhaW5zIGEgZGF0YS5jb3VudCB2YWx1ZSB3aGljaCBjYW4gYmUgdXNlZCB0byBzZXQgdGhlIGJhZGdlIHRvIGNvcnJlY3QgbnVtYmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvdW50XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzZXRBcHBsaWNhdGlvbkljb25CYWRnZU51bWJlcihjb3VudD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBiYWRnZSBjb3VudCB2aXNpYmxlIHdoZW4gdGhlIGFwcCBpcyBub3QgcnVubmluZ1xyXG4gICAqIHN1Y2Nlc3NIYW5kbGVyIGdldHMgY2FsbGVkIHdpdGggYW4gaW50ZWdlciB3aGljaCBpcyB0aGUgY3VycmVudCBiYWRnZSBjb3VudFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIGdldEFwcGxpY2F0aW9uSWNvbkJhZGdlTnVtYmVyKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBpT1Mgb25seVxyXG4gICAqIFRlbGxzIHRoZSBPUyB0aGF0IHlvdSBhcmUgZG9uZSBwcm9jZXNzaW5nIGEgYmFja2dyb3VuZCBwdXNoIG5vdGlmaWNhdGlvbi5cclxuICAgKiBzdWNjZXNzSGFuZGxlciBnZXRzIGNhbGxlZCB3aGVuIGJhY2tncm91bmQgcHVzaCBwcm9jZXNzaW5nIGlzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gW2lkXVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZmluaXNoKGlkPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRlbGxzIHRoZSBPUyB0byBjbGVhciBhbGwgbm90aWZpY2F0aW9ucyBmcm9tIHRoZSBOb3RpZmljYXRpb24gQ2VudGVyXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgY2xlYXJBbGxOb3RpZmljYXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgc3Vic2NyaWJlIG1ldGhvZCBpcyB1c2VkIHdoZW4gdGhlIGFwcGxpY2F0aW9uIHdhbnRzIHRvIHN1YnNjcmliZSBhIG5ldyB0b3BpYyB0byByZWNlaXZlIHB1c2ggbm90aWZpY2F0aW9ucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB0b3BpYyB7c3RyaW5nfSBUb3BpYyB0byBzdWJzY3JpYmUgdG8uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBzdWJzY3JpYmUodG9waWM6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGUgdW5zdWJzY3JpYmUgbWV0aG9kIGlzIHVzZWQgd2hlbiB0aGUgYXBwbGljYXRpb24gbm8gbG9uZ2VyIHdhbnRzIHRvIHJlY2VpdmUgcHVzaCBub3RpZmljYXRpb25zIGZyb20gYSBzcGVjaWZpYyB0b3BpYyBidXQgY29udGludWUgdG8gcmVjZWl2ZSBvdGhlciBwdXNoIG1lc3NhZ2VzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRvcGljIHtzdHJpbmd9IFRvcGljIHRvIHVuc3Vic2NyaWJlIGZyb20uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICB1bnN1YnNjcmliZSh0b3BpYzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19