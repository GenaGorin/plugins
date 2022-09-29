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
var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
export { DefaultMessageStorage };
var CustomMessageStorage = /** @class */ (function () {
    function CustomMessageStorage() {
    }
    CustomMessageStorage.prototype.save = function (messages) { return cordova(this, "save", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.find = function (messageId, callback) { return cordova(this, "find", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.findAll = function (callback) { return cordova(this, "findAll", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.start = function () { return cordova(this, "start", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.stop = function () { return cordova(this, "stop", { "sync": true }, arguments); };
    return CustomMessageStorage;
}());
export { CustomMessageStorage };
var MobileMessagingOriginal = /** @class */ (function (_super) {
    __extends(MobileMessagingOriginal, _super);
    function MobileMessagingOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessagingOriginal.prototype.init = function (config, onInitError) { return cordova(this, "init", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.register = function (event) { return cordova(this, "register", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.on = function (event) { return cordova(this, "on", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.unregister = function (event) { return cordova(this, "unregister", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.off = function (event) { return cordova(this, "off", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEvent = function (event) { return cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.submitEventImmediately = function (event) { return cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessagingOriginal.prototype.saveUser = function (userData) { return cordova(this, "saveUser", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchUser = function () { return cordova(this, "fetchUser", {}, arguments); };
    MobileMessagingOriginal.prototype.getUser = function () { return cordova(this, "getUser", {}, arguments); };
    MobileMessagingOriginal.prototype.saveInstallation = function (installation) { return cordova(this, "saveInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.fetchInstallation = function () { return cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.getInstallation = function () { return cordova(this, "getInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessagingOriginal.prototype.personalize = function (context) { return cordova(this, "personalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalize = function () { return cordova(this, "depersonalize", {}, arguments); };
    MobileMessagingOriginal.prototype.depersonalizeInstallation = function (pushRegistrationId) { return cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessagingOriginal.prototype.markMessagesSeen = function (messageIds) { return cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessagingOriginal.prototype.showDialogForError = function (errorCode) { return cordova(this, "showDialogForError", {}, arguments); };
    MobileMessagingOriginal.prototype.defaultMessageStorage = function () { return cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.showChat = function (config) { return cordova(this, "showChat", {}, arguments); };
    MobileMessagingOriginal.prototype.setupiOSChatSettings = function (settings) { return cordova(this, "setupiOSChatSettings", {}, arguments); };
    MobileMessagingOriginal.prototype.getMessageCounter = function (onResult) { return cordova(this, "getMessageCounter", { "sync": true }, arguments); };
    MobileMessagingOriginal.prototype.resetMessageCounter = function () { return cordova(this, "resetMessageCounter", {}, arguments); };
    MobileMessagingOriginal.pluginName = "MobileMessaging";
    MobileMessagingOriginal.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessagingOriginal.pluginRef = "MobileMessaging";
    MobileMessagingOriginal.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessagingOriginal.platforms = ["Android", "iOS"];
    return MobileMessagingOriginal;
}(AwesomeCordovaNativePlugin));
var MobileMessaging = new MobileMessagingOriginal();
export { MobileMessaging };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbW9iaWxlLW1lc3NhZ2luZy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7O0lBdUxoQyxvQ0FBSSxhQUFDLFNBQWlCLEVBQUUsUUFBb0M7SUFLNUQsdUNBQU8sYUFBQyxRQUF1QztJQUsvQyxzQ0FBTSxhQUFDLFNBQWlCLEVBQUUsUUFBb0I7SUFLOUMseUNBQVMsYUFBQyxRQUFvQjtnQ0F4TWhDOzs7Ozs7SUFvTkUsbUNBQUksYUFBQyxRQUFtQjtJQVV4QixtQ0FBSSxhQUFDLFNBQWlCLEVBQUUsUUFBb0M7SUFVNUQsc0NBQU8sYUFBQyxRQUF1QztJQVEvQyxvQ0FBSztJQVFMLG1DQUFJOytCQXhQTjs7OztJQW9UcUMsbUNBQTBCOzs7O0lBVzdELDhCQUFJLGFBQUMsTUFBcUIsRUFBRSxXQUFtRDtJQWEvRSxrQ0FBUSxhQUFDLEtBQVk7SUFPckIsNEJBQUUsYUFBQyxLQUFZO0lBZWYsb0NBQVUsYUFBQyxLQUFZO0lBT3ZCLDZCQUFHLGFBQUMsS0FBWTtJQXVCaEIscUNBQVcsYUFBQyxLQUFrQjtJQXlCOUIsZ0RBQXNCLGFBQUMsS0FBa0I7SUFZekMsa0NBQVEsYUFBQyxRQUFrQjtJQVUzQixtQ0FBUztJQVVULGlDQUFPO0lBWVAsMENBQWdCLGFBQUMsWUFBMEI7SUFVM0MsMkNBQWlCO0lBVWpCLHlDQUFlO0lBWWYsa0RBQXdCLGFBQUMsa0JBQTBCLEVBQUUsT0FBZ0I7SUFZckUscUNBQVcsYUFBQyxPQUEyQjtJQVV2Qyx1Q0FBYTtJQVViLG1EQUF5QixhQUFDLGtCQUEwQjtJQVdwRCwwQ0FBZ0IsYUFBQyxVQUFvQjtJQVdyQyw0Q0FBa0IsYUFBQyxTQUFpQjtJQUtwQywrQ0FBcUI7SUFZckIsa0NBQVEsYUFBQyxNQUFtQjtJQVU1Qiw4Q0FBb0IsYUFBQyxRQUF5QjtJQVU5QywyQ0FBaUIsYUFBQyxRQUFtQztJQVNyRCw2Q0FBbUI7Ozs7OzswQkF6a0JyQjtFQW9UcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCB0eXBlIE9TID0gJ0FuZHJvaWQnIHwgJ2lPUyc7XHJcbmV4cG9ydCB0eXBlIEdlbmRlciA9ICdNYWxlJyB8ICdGZW1hbGUnO1xyXG5leHBvcnQgdHlwZSBFdmVudCA9XHJcbiAgfCAnbWVzc2FnZVJlY2VpdmVkJ1xyXG4gIHwgJ25vdGlmaWNhdGlvblRhcHBlZCdcclxuICB8ICd0b2tlblJlY2VpdmVkJ1xyXG4gIHwgJ3JlZ2lzdHJhdGlvblVwZGF0ZWQnXHJcbiAgfCAnZ2VvZmVuY2VFbnRlcmVkJ1xyXG4gIHwgJ2FjdGlvblRhcHBlZCdcclxuICB8ICdpbnN0YWxsYXRpb25VcGRhdGVkJ1xyXG4gIHwgJ3VzZXJVcGRhdGVkJ1xyXG4gIHwgJ3BlcnNvbmFsaXplZCdcclxuICB8ICdkZXBlcnNvbmFsaXplZCdcclxuICB8ICdpbkFwcENoYXQuYXZhaWxhYmlsaXR5VXBkYXRlZCdcclxuICB8ICdpbkFwcENoYXQudW5yZWFkTWVzc2FnZUNvdW50ZXJVcGRhdGVkJ1xyXG4gIHwgJ2RlZXBsaW5rJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tRXZlbnQge1xyXG4gIGRlZmluaXRpb25JZDogc3RyaW5nO1xyXG4gIHByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4+O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhcHBsaWNhdGlvbiBjb2RlIG9mIHlvdXIgQXBwbGljYXRpb24gZnJvbSBQdXNoIFBvcnRhbCB3ZWJzaXRlXHJcbiAgICovXHJcbiAgYXBwbGljYXRpb25Db2RlOiBzdHJpbmc7XHJcbiAgZ2VvZmVuY2luZ0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIGluQXBwQ2hhdEVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE1lc3NhZ2Ugc3RvcmFnZSBzYXZlIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgbWVzc2FnZVN0b3JhZ2U/OiBDdXN0b21NZXNzYWdlU3RvcmFnZTtcclxuICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U/OiBib29sZWFuO1xyXG4gIGlvcz86IHtcclxuICAgIG5vdGlmaWNhdGlvblR5cGVzPzogc3RyaW5nW107IC8vIFsnYWxlcnQnLCAnYmFkZ2UnLCAnc291bmQnXVxyXG4gICAgZm9yY2VDbGVhbnVwPzogYm9vbGVhbjtcclxuICAgIGxvZ2dpbmc/OiBib29sZWFuO1xyXG4gIH07XHJcbiAgYW5kcm9pZD86IHtcclxuICAgIG5vdGlmaWNhdGlvbkljb24/OiBzdHJpbmc7IC8vIGEgcmVzb3VyY2UgbmFtZSBmb3IgYSBzdGF0dXMgYmFyIGljb24gKHdpdGhvdXQgZXh0ZW5zaW9uKSwgbG9jYXRlZCBpbiAnL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9yZXMvbWlwbWFwJ1xyXG4gICAgbXVsdGlwbGVOb3RpZmljYXRpb25zPzogYm9vbGVhbjsgLy8gc2V0IHRvICd0cnVlJyB0byBlbmFibGUgbXVsdGlwbGUgbm90aWZpY2F0aW9uc1xyXG4gICAgbm90aWZpY2F0aW9uQWNjZW50Q29sb3I/OiBzdHJpbmc7IC8vIHNldCB0byBoZXggY29sb3IgdmFsdWUgaW4gZm9ybWF0ICcjUlJHR0JCJyBvciAnI0FBUlJHR0JCJ1xyXG4gICAgZmlyZWJhc2VPcHRpb25zPzoge1xyXG4gICAgICBhcGlLZXk6IHN0cmluZztcclxuICAgICAgYXBwbGljYXRpb25JZDogc3RyaW5nO1xyXG4gICAgICBkYXRhYmFzZVVybD86IHN0cmluZztcclxuICAgICAgZ2FUcmFja2luZ0lkPzogc3RyaW5nO1xyXG4gICAgICBnY21TZW5kZXJJZD86IHN0cmluZztcclxuICAgICAgc3RvcmFnZUJ1Y2tldD86IHN0cmluZztcclxuICAgICAgcHJvamVjdElkOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgcHJpdmFjeVNldHRpbmdzPzoge1xyXG4gICAgYXBwbGljYXRpb25Db2RlUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIHVzZXJEYXRhUGVyc2lzdGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIGNhcnJpZXJJbmZvU2VuZGluZ0Rpc2FibGVkPzogYm9vbGVhbjtcclxuICAgIHN5c3RlbUluZm9TZW5kaW5nRGlzYWJsZWQ/OiBib29sZWFuO1xyXG4gIH07XHJcbiAgbm90aWZpY2F0aW9uQ2F0ZWdvcmllcz86IFtcclxuICAgIHtcclxuICAgICAgaWRlbnRpZmllcjogc3RyaW5nO1xyXG4gICAgICBhY3Rpb25zPzogW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkZW50aWZpZXI6IHN0cmluZztcclxuICAgICAgICAgIHRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgICAgZm9yZWdyb3VuZD86IGJvb2xlYW47XHJcbiAgICAgICAgICBhdXRoZW50aWNhdGlvblJlcXVpcmVkPzogYm9vbGVhbjtcclxuICAgICAgICAgIG1vUmVxdWlyZWQ/OiBib29sZWFuO1xyXG4gICAgICAgICAgZGVzdHJ1Y3RpdmU/OiBib29sZWFuO1xyXG4gICAgICAgICAgaWNvbj86IHN0cmluZztcclxuICAgICAgICAgIHRleHRJbnB1dEFjdGlvbkJ1dHRvblRpdGxlPzogc3RyaW5nO1xyXG4gICAgICAgICAgdGV4dElucHV0UGxhY2Vob2xkZXI/OiBzdHJpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICBdO1xyXG4gICAgfVxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlckRhdGEge1xyXG4gIGV4dGVybmFsVXNlcklkPzogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZT86IHN0cmluZztcclxuICBsYXN0TmFtZT86IHN0cmluZztcclxuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xyXG4gIGdlbmRlcj86IEdlbmRlcjtcclxuICBiaXJ0aGRheT86IHN0cmluZztcclxuICBwaG9uZXM/OiBzdHJpbmdbXTtcclxuICBlbWFpbHM/OiBzdHJpbmdbXTtcclxuICB0YWdzPzogc3RyaW5nW107XHJcbiAgY3VzdG9tQXR0cmlidXRlcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4gfCBhbnlbXT47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbGF0aW9uIHtcclxuICBpc1ByaW1hcnlEZXZpY2U/OiBib29sZWFuO1xyXG4gIGlzUHVzaFJlZ2lzdHJhdGlvbkVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIG5vdGlmaWNhdGlvbnNFbmFibGVkPzogYm9vbGVhbjtcclxuICBnZW9FbmFibGVkPzogYm9vbGVhbjtcclxuICBzZGtWZXJzaW9uPzogc3RyaW5nO1xyXG4gIGFwcFZlcnNpb24/OiBzdHJpbmc7XHJcbiAgb3M/OiBPUztcclxuICBvc1ZlcnNpb24/OiBzdHJpbmc7XHJcbiAgZGV2aWNlTWFudWZhY3R1cmVyPzogc3RyaW5nO1xyXG4gIGRldmljZU1vZGVsPzogc3RyaW5nO1xyXG4gIGRldmljZVNlY3VyZT86IGJvb2xlYW47XHJcbiAgbGFuZ3VhZ2U/OiBzdHJpbmc7XHJcbiAgZGV2aWNlVGltZXpvbmVJZD86IHN0cmluZztcclxuICBhcHBsaWNhdGlvblVzZXJJZD86IHN0cmluZztcclxuICBkZXZpY2VOYW1lPzogc3RyaW5nO1xyXG4gIGN1c3RvbUF0dHJpYnV0ZXM/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudW1iZXIgfCBib29sZWFuPjtcclxufVxyXG5cclxuLyoqXHJcbiAqIFVzZXIncyB1bmlxdWUgSUQuIE9uZSBVc2VySWRlbnRpdHkgcGFyYW1ldGVyIG11c3QgYmUgcHJvdmlkZWQgaWYgdXNlZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNlcklkZW50aXR5IHtcclxuICBwaG9uZXM/OiBzdHJpbmdbXTtcclxuICBlbWFpbHM/OiBzdHJpbmdbXTtcclxuICBleHRlcm5hbFVzZXJJZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25hbGl6ZUNvbnRleHQge1xyXG4gIHVzZXJJZGVudGl0eTogVXNlcklkZW50aXR5O1xyXG4gIHVzZXJBdHRyaWJ1dGVzPzogUmVjb3JkPHN0cmluZywgc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueVtdPjtcclxuICBmb3JjZURlcGVyc29uYWxpemU/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlb0RhdGEge1xyXG4gIGFyZWE6IEdlb0FyZWE7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VvQXJlYSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBjZW50ZXI6IEdlb0NlbnRlcjtcclxuICByYWRpdXM6IG51bWJlcjtcclxuICB0aXRsZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlb0NlbnRlciB7XHJcbiAgbGF0OiBudW1iZXI7XHJcbiAgbG9uOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgbWVzc2FnZUlkOiBzdHJpbmc7XHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcbiAgYm9keT86IHN0cmluZztcclxuICBzb3VuZD86IHN0cmluZztcclxuICBzaWxlbnQ/OiBib29sZWFuO1xyXG4gIGN1c3RvbVBheWxvYWQ/OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+O1xyXG4gIGludGVybmFsRGF0YT86IHN0cmluZztcclxuICByZWNlaXZlZFRpbWVzdGFtcD86IG51bWJlcjtcclxuICBzZWVuRGF0ZT86IG51bWJlcjtcclxuICBjb250ZW50VXJsPzogc3RyaW5nO1xyXG4gIHNlZW4/OiBib29sZWFuO1xyXG4gIGdlbz86IGJvb2xlYW47XHJcbiAgb3JpZ2luYWxQYXlsb2FkPzogUmVjb3JkPHN0cmluZywgc3RyaW5nPjsgLy8gaU9TIG9ubHlcclxuICB2aWJyYXRlPzogYm9vbGVhbjsgLy8gQW5kcm9pZCBvbmx5XHJcbiAgaWNvbj86IHN0cmluZzsgLy8gQW5kcm9pZCBvbmx5XHJcbiAgY2F0ZWdvcnk/OiBzdHJpbmc7IC8vIEFuZHJvaWQgb25seVxyXG4gIGNoYXQ/OiBzdHJpbmc7XHJcbiAgYnJvd3NlclVybD86IHN0cmluZztcclxuICBkZWVwbGluaz86IHN0cmluZztcclxuICB3ZWJWaWV3VXJsPzogc3RyaW5nO1xyXG4gIGluQXBwT3BlblRpdGxlPzogc3RyaW5nIHwgdW5kZWZpbmVkO1xyXG4gIGluQXBwRGlzbWlzc1RpdGxlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vYmlsZU1lc3NhZ2luZ0Vycm9yIHtcclxuICBjb2RlOiBzdHJpbmc7XHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICBkb21haW4/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdENvbmZpZyB7XHJcbiAgaW9zPzoge1xyXG4gICAgc2hvd01vZGFsbHk6IGJvb2xlYW47XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERlZmF1bHRNZXNzYWdlU3RvcmFnZSB7XHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZmluZChtZXNzYWdlSWQ6IHN0cmluZywgY2FsbGJhY2s6IChtZXNzYWdlOiBNZXNzYWdlKSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBmaW5kQWxsKGNhbGxiYWNrOiAobWVzc2FnZXM6IE1lc3NhZ2VbXSkgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGVsZXRlKG1lc3NhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogKCkgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGVsZXRlQWxsKGNhbGxiYWNrOiAoKSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tTWVzc2FnZVN0b3JhZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBwbHVnaW4gd2hlbiBtZXNzYWdlcyBhcmUgcmVjZWl2ZWQgYW5kIGl0J3MgdGltZSB0byBzYXZlIHRoZW0gdG8gdGhlIHN0b3JhZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhcnJheSBvZiBtZXNzYWdlIG9iamVjdHMgdG8gc2F2ZSB0byBzdG9yYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2F2ZShtZXNzYWdlczogTWVzc2FnZVtdKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgcGx1Z2luIHRvIGZpbmQgYSBtZXNzYWdlIGJ5IG1lc3NhZ2UgaWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayBoYXMgdG8gYmUgY2FsbGVkIG9uIGNvbXBsZXRpb24gd2l0aCBvbmUgcGFyYW1ldGVyIC0gZm91bmQgbWVzc2FnZSBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBmaW5kKG1lc3NhZ2VJZDogc3RyaW5nLCBjYWxsYmFjazogKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHZvaWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBwbHVnaW4gdG8gZmluZCBhbGwgbWVzc2FnZXMgaW4gdGhlIHN0b3JhZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjYWxsYmFjayBoYXMgdG8gYmUgY2FsbGVkIG9uIGNvbXBsZXRpb24gd2l0aCBvbmUgcGFyYW1ldGVyIC0gYW4gYXJyYXkgb2YgYXZhaWxhYmxlIG1lc3NhZ2VzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZmluZEFsbChjYWxsYmFjazogKG1lc3NhZ2VzOiBNZXNzYWdlW10pID0+IHZvaWQpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdpbGwgYmUgY2FsbGVkIGJ5IHRoZSBwbHVnaW4gd2hlbiBpdHMgdGltZSB0byBpbml0aWFsaXplIHRoZSBzdG9yYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RhcnQoKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXaWxsIGJlIGNhbGxlZCBieSB0aGUgcGx1Z2luIHdoZW4gaXRzIHRpbWUgdG8gZGVpbml0aWFsaXplIHRoZSBzdG9yYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RvcCgpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hhdFNldHRpbmdzSU9TIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHNlbmRCdXR0b25Db2xvcjogc3RyaW5nO1xyXG4gIG5hdmlnYXRpb25CYXJJdGVtc0NvbG9yOiBzdHJpbmc7XHJcbiAgbmF2aWdhdGlvbkJhckNvbG9yOiBzdHJpbmc7XHJcbiAgbmF2aWdhdGlvbkJhclRpdGxlQ29sb3I6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE1vYmlsZSBNZXNzYWdpbmdcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIE1vYmlsZSBNZXNzYWdpbmcgU0RLIGlzIGRlc2lnbmVkIGFuZCBkZXZlbG9wZWQgdG8gZWFzaWx5IGVuYWJsZSBwdXNoIG5vdGlmaWNhdGlvbiBjaGFubmVsIGluIHlvdXIgbW9iaWxlIGFwcGxpY2F0aW9uLlxyXG4gKiBJbiBhbG1vc3Qgbm8gdGltZSBvZiBpbXBsZW1lbnRhdGlvbiB5b3UgZ2V0IHB1c2ggbm90aWZpY2F0aW9uIGluIHlvdXIgYXBwbGljYXRpb24gYW5kIGFjY2VzcyB0byB0aGUgZmVhdHVyZXMgb2YgW0luZm9iaXAgSVAgTWVzc2FnaW5nIFBsYXRmb3JtXShodHRwczovL3BvcnRhbC5pbmZvYmlwLmNvbS9wdXNoLykuXHJcbiAqIFRoaXMgZG9jdW1lbnQgZGVzY3JpYmVzIGxpYnJhcnkgaW50ZWdyYXRpb24gc3RlcHMgZm9yIHlvdXIgQ29yZG92YSBwcm9qZWN0LlxyXG4gKlxyXG4gKiBGb3IgbW9yZSBpbmZvIHNlZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2luZm9iaXAvbW9iaWxlLW1lc3NhZ2luZy1jb3Jkb3ZhLXBsdWdpbilcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTW9iaWxlTWVzc2FnaW5nIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21vYmlsZS1tZXNzYWdpbmcvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtb2JpbGVNZXNzYWdpbmc6IE1vYmlsZU1lc3NhZ2luZykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAgdGhpcy5tb2JpbGVNZXNzYWdpbmcuaW5pdCh7XHJcbiAqICAgIGFwcGxpY2F0aW9uQ29kZTogJzx5b3VyX2FwcGxpY2F0aW9uX2NvZGU+JyxcclxuICogICAgZ2VvZmVuY2luZ0VuYWJsZWQ6ICc8dHJ1ZS9mYWxzZT4nLFxyXG4gKiAgICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2U6ICc8dHJ1ZS9mYWxzZT4nLFxyXG4gKiAgICBpb3M6IHtcclxuICogICAgICBub3RpZmljYXRpb25UeXBlczogWydhbGVydCcsICdiYWRnZScsICdzb3VuZCddXHJcbiAqICAgIH0sXHJcbiAqICAgIGFuZHJvaWQ6IHtcclxuICogICAgICBub3RpZmljYXRpb25JY29uOiA8U3RyaW5nOyBhIHJlc291cmNlIG5hbWUgZm9yIGEgc3RhdHVzIGJhciBpY29uICh3aXRob3V0IGV4dGVuc2lvbiksIGxvY2F0ZWQgaW4gJy9wbGF0Zm9ybXMvYW5kcm9pZC9hcHAvc3JjL21haW4vcmVzL21pcG1hcCc+LFxyXG4gKiAgICAgIG11bHRpcGxlTm90aWZpY2F0aW9uczogPEJvb2xlYW47IHNldCB0byAndHJ1ZScgdG8gZW5hYmxlIG11bHRpcGxlIG5vdGlmaWNhdGlvbnM+LFxyXG4gKiAgICAgIG5vdGlmaWNhdGlvbkFjY2VudENvbG9yOiA8U3RyaW5nOyBzZXQgdG8gaGV4IGNvbG9yIHZhbHVlIGluIGZvcm1hdCAnI1JSR0dCQicgb3IgJyNBQVJSR0dCQic+XHJcbiAqICAgICB9fSwgKGVycikgPT4ge1xyXG4gKiAgICAgIC4uLlxyXG4gKiAgICB9KTtcclxuICpcclxuICogIHRoaXMubW9iaWxlTWVzc2FnaW5nLnJlZ2lzdGVyKCdtZXNzYWdlUmVjZWl2ZWQnKS5zdWJzY3JpYmUoKG1lc3NhZ2U6IE1lc3NhZ2UpID0+IHtcclxuICogICAgLi4uXHJcbiAqICB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTW9iaWxlTWVzc2FnaW5nJyxcclxuICBwbHVnaW46ICdjb20taW5mb2JpcC1wbHVnaW5zLW1vYmlsZW1lc3NhZ2luZycsXHJcbiAgcGx1Z2luUmVmOiAnTW9iaWxlTWVzc2FnaW5nJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2luZm9iaXAvbW9iaWxlLW1lc3NhZ2luZy1jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1vYmlsZU1lc3NhZ2luZyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTdGFydHMgYSBuZXcgTW9iaWxlIE1lc3NhZ2luZyBzZXNzaW9uLlxyXG4gICAqXHJcbiAgICogQG5hbWUgaW5pdFxyXG4gICAqIEBwYXJhbSBjb25maWcuIENvbmZpZ3VyYXRpb24gZm9yIE1vYmlsZSBNZXNzYWdpbmdcclxuICAgKiBAcGFyYW0gY29uZmlnXHJcbiAgICogQHBhcmFtIG9uSW5pdEVycm9yXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Jbml0RXJyb3IuIEVycm9yIGNhbGxiYWNrXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgaW5pdChjb25maWc6IENvbmZpZ3VyYXRpb24sIG9uSW5pdEVycm9yPzogKGVycm9yOiBNb2JpbGVNZXNzYWdpbmdFcnJvcikgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXIgdG8gZXZlbnQgY29taW5nIGZyb20gTW9iaWxlTWVzc2FnaW5nIGxpYnJhcnkuXHJcbiAgICpcclxuICAgKiBAbmFtZSByZWdpc3RlclxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICByZWdpc3RlcihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBvbihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuIHJlZ2lzdGVyIGZyb20gTW9iaWxlTWVzc2FnaW5nIGxpYnJhcnkgZXZlbnQuXHJcbiAgICpcclxuICAgKiBAbmFtZSB1bnJlZ2lzdGVyXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgd2lsbCBiZSB1bnJlZ2lzdGVyZWQgZnJvbSBldmVudFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICB1bnJlZ2lzdGVyKGV2ZW50OiBFdmVudCk6IE9ic2VydmFibGU8TWVzc2FnZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIG9mZihldmVudDogRXZlbnQpOiBPYnNlcnZhYmxlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmRzIGFuIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgZXZlbnR1YWxseSwgaGFuZGxlcyBwb3NzaWJsZSBlcnJvcnMgYW5kIGRvIHJldHJpZXMgZm9yIHlvdS5cclxuICAgKlxyXG4gICAqIEBuYW1lIHN1Ym1pdEV2ZW50XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGV2ZW50RGF0YS4gQW4gb2JqZWN0IGNvbnRhaW5pbmcgZXZlbnQgZGF0YVxyXG4gICAqIHtcclxuICAgKiAgIGRlZmluaXRpb25JZDogXCJldmVudERlZmluaXRpb25JZFwiXHJcbiAgICogICBwcm9wZXJ0aWVzOiB7XHJcbiAgICogICAgIFwic3RyaW5nQXR0cmlidXRlXCI6IFwic3RyaW5nXCIsXHJcbiAgICogICAgIFwibnVtYmVyQXR0cmlidXRlXCI6IDEsXHJcbiAgICogICAgIFwiZGF0ZUF0dHJpYnV0ZVwiOiBcIjIwMjAtMDItMjZUMDk6NDE6NTdaXCIsXHJcbiAgICogICAgIFwiYm9vbGVhbkF0dHJpYnV0ZVwiOiB0cnVlXHJcbiAgICogICB9XHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzdWJtaXRFdmVudChldmVudDogQ3VzdG9tRXZlbnQpOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmRzIGFuIGV2ZW50IHRvIHRoZSBzZXJ2ZXIgaW1tZWRpYXRlbHkuXHJcbiAgICogWW91IGhhdmUgdG8gaGFuZGxlIHBvc3NpYmxlIGNvbm5lY3Rpb24gb3Igc2VydmVyIGVycm9ycywgZG8gcmV0cmllcyB5b3Vyc2VsZi5cclxuICAgKlxyXG4gICAqIEBuYW1lIHN1Ym1pdEV2ZW50SW1tZWRpYXRlbHlcclxuICAgKiBAcGFyYW0ge09iamVjdH0gZXZlbnREYXRhLiBBbiBvYmplY3QgY29udGFpbmluZyBldmVudCBkYXRhXHJcbiAgICoge1xyXG4gICAqICAgZGVmaW5pdGlvbklkOiBcImV2ZW50RGVmaW5pdGlvbklkXCJcclxuICAgKiAgIHByb3BlcnRpZXM6IHtcclxuICAgKiAgICAgXCJzdHJpbmdBdHRyaWJ1dGVcIjogXCJzdHJpbmdcIixcclxuICAgKiAgICAgXCJudW1iZXJBdHRyaWJ1dGVcIjogMSxcclxuICAgKiAgICAgXCJkYXRlQXR0cmlidXRlXCI6IFwiMjAyMC0wMi0yNlQwOTo0MTo1N1pcIixcclxuICAgKiAgICAgXCJib29sZWFuQXR0cmlidXRlXCI6IHRydWVcclxuICAgKiAgIH1cclxuICAgKiB9XHJcbiAgICogQHBhcmFtIGV2ZW50XHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgb24gcmVzdWx0LCB5b3UgaGF2ZSB0byBoYW5kbGUgZXJyb3IgYW5kIGRvIHJldHJpZXMgeW91cnNlbGZcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3VibWl0RXZlbnRJbW1lZGlhdGVseShldmVudDogQ3VzdG9tRXZlbnQpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNhdmVzIHVzZXIgZGF0YSB0byB0aGUgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQG5hbWUgc2F2ZVVzZXJcclxuICAgKiBAcGFyYW0gdXNlckRhdGFcclxuICAgKiBAcGFyYW0ge09iamVjdH0gdXNlckRhdGEuIEFuIG9iamVjdCBjb250YWluaW5nIHVzZXIgZGF0YVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzYXZlVXNlcih1c2VyRGF0YTogVXNlckRhdGEpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2ggdXNlciBkYXRhIGZyb20gdGhlIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEBuYW1lIGZldGNoVXNlclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBmZXRjaFVzZXIoKTogUHJvbWlzZTxVc2VyRGF0YT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB1c2VyIGRhdGEgZnJvbSB0aGUgbG9jYWxseSBzdG9yZWQgY2FjaGUuXHJcbiAgICpcclxuICAgKiBAbmFtZSBnZXRVc2VyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFVzZXIoKTogUHJvbWlzZTxVc2VyRGF0YT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2F2ZXMgaW5zdGFsbGF0aW9uIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBAbmFtZSBzYXZlSW5zdGFsbGF0aW9uXHJcbiAgICogQHBhcmFtIGluc3RhbGxhdGlvblxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpbnN0YWxsYXRpb24uIEFuIG9iamVjdCBjb250YWluaW5nIGluc3RhbGxhdGlvbiBkYXRhXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNhdmVJbnN0YWxsYXRpb24oaW5zdGFsbGF0aW9uOiBJbnN0YWxsYXRpb24pOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBpbnN0YWxsYXRpb24gZnJvbSB0aGUgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQG5hbWUgZmV0Y2hJbnN0YWxsYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hJbnN0YWxsYXRpb24oKTogUHJvbWlzZTxJbnN0YWxsYXRpb24+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgbG9jYWxseSBjYWNoZWQgaW5zdGFsbGF0aW9uLlxyXG4gICAqXHJcbiAgICogQG5hbWUgZ2V0SW5zdGFsbGF0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEluc3RhbGxhdGlvbigpOiBQcm9taXNlPEluc3RhbGxhdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhbnkgaW5zdGFsbGF0aW9uIGFzIHByaW1hcnkgZm9yIHRoaXMgdXNlci5cclxuICAgKlxyXG4gICAqIEBuYW1lIHNldEluc3RhbGxhdGlvbkFzUHJpbWFyeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwdXNoUmVnaXN0cmF0aW9uSWQgb2YgYW4gaW5zdGFsbGF0aW9uXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBwcmltYXJ5IG9yIG5vdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRJbnN0YWxsYXRpb25Bc1ByaW1hcnkocHVzaFJlZ2lzdHJhdGlvbklkOiBzdHJpbmcsIHByaW1hcnk6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGVyZm9ybXMgcGVyc29uYWxpemF0aW9uIG9mIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBvbiB0aGUgcGxhdGZvcm0uXHJcbiAgICpcclxuICAgKiBAbmFtZSBwZXJzb25hbGl6ZVxyXG4gICAqIEBwYXJhbSBjb250ZXh0XHJcbiAgICogQHBhcmFtIHtPYmplY3R9IGNvbnRleHQuIEFuIG9iamVjdCBjb250YWluaW5nIHVzZXIgaWRlbnRpdHkgaW5mb3JtYXRpb24gYXMgd2VsbCBhcyBhZGRpdGlvbmFsIHVzZXIgYXR0cmlidXRlcy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGVyc29uYWxpemUoY29udGV4dDogUGVyc29uYWxpemVDb250ZXh0KTogUHJvbWlzZTxQZXJzb25hbGl6ZUNvbnRleHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm1zIGRlcGVyc29uYWxpemF0aW9uIG9mIHRoZSBjdXJyZW50IGluc3RhbGxhdGlvbiBvbiB0aGUgcGxhdGZvcm0uXHJcbiAgICpcclxuICAgKiBAbmFtZSBkZXBlcnNvbmFsaXplXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRlcGVyc29uYWxpemUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBlcmZvcm1zIGRlcGVyc29uYWxpemF0aW9uIG9mIHRoZSBpbnN0YWxsYXRpb24gcmVmZXJlbmNlZCBieSBwdXNoUmVnaXN0cmF0aW9uSWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFJlZ2lzdHJhdGlvbklkIG9mIHRoZSByZW1vdGUgaW5zdGFsbGF0aW9uIHRvIGRlcGVyc29uYWxpemVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGVwZXJzb25hbGl6ZUluc3RhbGxhdGlvbihwdXNoUmVnaXN0cmF0aW9uSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrIG1lc3NhZ2VzIGFzIHNlZW5cclxuICAgKlxyXG4gICAqIEBuYW1lIG1hcmtNZXNzYWdlc1NlZW5cclxuICAgKiBAcGFyYW0ge0FycmF5fSBtZXNzYWdlSWRzIG9mIGlkZW50aWZpZXJzIG9mIG1lc3NhZ2UgdG8gbWFyayBhcyBzZWVuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG1hcmtNZXNzYWdlc1NlZW4obWVzc2FnZUlkczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgYnVpbHQtaW4gZXJyb3IgZGlhbG9nIHNvIHRoYXQgdXNlciBjYW4gcmVzb2x2ZSBlcnJvcnMgZHVyaW5nIHNkayBpbml0aWFsaXphdGlvbi5cclxuICAgKlxyXG4gICAqIEBuYW1lIHNob3dEaWFsb2dGb3JFcnJvclxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBlcnJvckNvZGUgdG8gZGlzcGxheSBkaWFsb2cgZm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3dEaWFsb2dGb3JFcnJvcihlcnJvckNvZGU6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBkZWZhdWx0TWVzc2FnZVN0b3JhZ2UoKTogRGVmYXVsdE1lc3NhZ2VTdG9yYWdlIHwgdW5kZWZpbmVkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIGNoYXQgdmlldy5cclxuICAgKlxyXG4gICAqIEBuYW1lIHNob3dDaGF0XHJcbiAgICogQHBhcmFtIGNvbmZpZ1xyXG4gICAqIEBwYXJhbSB7Q2hhdENvbmZpZ30gY2hhdCBjb25maWdcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd0NoYXQoY29uZmlnPzogQ2hhdENvbmZpZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXR1cCBjaGF0IHNldHRpbmdzIGZvciBpT1Mgb25seVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNldHRpbmdzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldHVwaU9TQ2hhdFNldHRpbmdzKHNldHRpbmdzOiBDaGF0U2V0dGluZ3NJT1MpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB1bnJlYWQgaW4tYXBwIGNoYXQgcHVzaCBtZXNzYWdlcyBjb3VudGVyLlxyXG4gICAqIFRoZSBjb3VudGVyIGluY3JlbWVudHMgZWFjaCB0aW1lIHRoZSBhcHBsaWNhdGlvbiByZWNlaXZlcyBpbi1hcHAgY2hhdCBwdXNoIG1lc3NhZ2VcclxuICAgKiAodGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiBjaGF0IHNjcmVlbiBpcyBpbmFjdGl2ZSBvciB0aGUgYXBwbGljYXRpb24gaXMgaW4gYmFja2dyb3VuZC90ZXJtaW5hdGVkIHN0YXRlKS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBnZXRNZXNzYWdlQ291bnRlcihvblJlc3VsdDogKGNvdW50ZXI6IG51bWJlcikgPT4gdm9pZCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW9iaWxlTWVzc2FnaW5nIHBsdWdpbiBhdXRvbWF0aWNhbGx5IHJlc2V0cyB0aGUgY291bnRlciB0byAwIHdoZW5ldmVyIHVzZXIgb3BlbnMgdGhlIGluLWFwcCBjaGF0IHNjcmVlbi5cclxuICAgKiBIb3dldmVyLCB1c2UgdGhlIGZvbGxvd2luZyBBUEkgaW4gY2FzZSB5b3UgbmVlZCB0byBtYW51YWxseSByZXNldCB0aGUgY291bnRlci5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzZXRNZXNzYWdlQ291bnRlcigpIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19