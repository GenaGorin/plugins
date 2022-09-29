import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Webengage = /** @class */ (function (_super) {
    __extends(Webengage, _super);
    function Webengage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webengage.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    Webengage.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    Webengage.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    Webengage.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    Webengage.pluginName = "Webengage";
    Webengage.plugin = "cordova-plugin-webengage";
    Webengage.pluginRef = "webengage";
    Webengage.repo = "https://github.com/WebEngage/cordova-plugin";
    Webengage.platforms = ["Android", "iOS"];
    Webengage.decorators = [
        { type: Injectable }
    ];
    return Webengage;
}(AwesomeCordovaNativePlugin));
export { Webengage };
var WebengageUser = /** @class */ (function (_super) {
    __extends(WebengageUser, _super);
    function WebengageUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUser.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUser.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUser.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUser.pluginName = "Webengage";
    WebengageUser.plugin = "cordova-plugin-webengage";
    WebengageUser.pluginRef = "webengage.user";
    WebengageUser.decorators = [
        { type: Injectable }
    ];
    return WebengageUser;
}(AwesomeCordovaNativePlugin));
export { WebengageUser };
var WebengagePush = /** @class */ (function (_super) {
    __extends(WebengagePush, _super);
    function WebengagePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePush.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePush.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePush.pluginName = "Webengage";
    WebengagePush.plugin = "cordova-plugin-webengage";
    WebengagePush.pluginRef = "webengage.push";
    WebengagePush.decorators = [
        { type: Injectable }
    ];
    return WebengagePush;
}(AwesomeCordovaNativePlugin));
export { WebengagePush };
var WebengageNotification = /** @class */ (function (_super) {
    __extends(WebengageNotification, _super);
    function WebengageNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotification.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotification.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotification.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotification.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotification.pluginName = "Webengage";
    WebengageNotification.plugin = "cordova-plugin-webengage";
    WebengageNotification.pluginRef = "webengage.notification";
    WebengageNotification.decorators = [
        { type: Injectable }
    ];
    return WebengageNotification;
}(AwesomeCordovaNativePlugin));
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViZW5nYWdlL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTBCN0QsNkJBQTBCOzs7O0lBUXZELDBCQUFNLGFBQUMsTUFBWTtJQVluQiwyQkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFVO0lBWS9CLHlCQUFLLGFBQUMsU0FBaUIsRUFBRSxVQUFnQjtJQWF6QywwQkFBTSxhQUFDLFVBQWtCLEVBQUUsVUFBZ0I7Ozs7Ozs7Z0JBOUM1QyxVQUFVOztvQkExQlg7RUEyQitCLDBCQUEwQjtTQUE1QyxTQUFTOztJQTJEYSxpQ0FBMEI7Ozs7SUFRM0QsNkJBQUssYUFBQyxNQUFjO0lBVXBCLDhCQUFNO0lBWU4sb0NBQVksYUFBQyxHQUFXLEVBQUUsS0FBVTs7Ozs7Z0JBL0JyQyxVQUFVOzt3QkFyRlg7RUFzRm1DLDBCQUEwQjtTQUFoRCxhQUFhOztJQTRDUyxpQ0FBMEI7Ozs7SUFRM0QsK0JBQU8sYUFBQyxRQUFhO0lBWXJCLCtCQUFPLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7O2dCQXJCaEMsVUFBVTs7d0JBaklYO0VBa0ltQywwQkFBMEI7U0FBaEQsYUFBYTs7SUFrQ2lCLHlDQUEwQjs7OztJQVFuRSx1Q0FBTyxhQUFDLFFBQWE7SUFXckIsdUNBQU8sYUFBQyxRQUFhO0lBV3JCLHlDQUFTLGFBQUMsUUFBYTtJQVl2Qix1Q0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7OztnQkEzQ2hDLFVBQVU7O2dDQW5LWDtFQW9LMkMsMEJBQTBCO1NBQXhELHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBXZWJlbmdhZ2VcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEF3ZXNvbWUgQ29yZG92YSBQbHVnaW5zIHdyYXBwZXIgdGhhdCB3cmFwcyBXZWJlbmdhZ2UgQ29yZG92YSBwbHVnaW4gZm9yIEFuZHJvaWQgYW5kIGlPU1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBXZWJlbmdhZ2UsIFdlYmVuZ2FnZVVzZXIsIFdlYmVuZ2FnZVB1c2gsIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy93ZWJlbmdhZ2Uvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB3ZWJlbmdhZ2U6IFdlYmVuZ2FnZSwgcHJpdmF0ZSB3ZWJlbmdhZ2VVc2VyOiBXZWJlbmdhZ2VVc2VyLCBwcml2YXRlIHdlYmVuZ2FnZVB1c2g6IFdlYmVuZ2FnZVB1c2gsIHByaXZhdGUgd2ViZW5nYWdlTm90aWZpY2F0aW9uOiBXZWJlbmdhZ2VOb3RpZmljYXRpb24gKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMud2ViZW5nYWdlLmVuZ2FnZSgpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXHJcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1dlYkVuZ2FnZS9jb3Jkb3ZhLXBsdWdpbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXplcyBXZWJFbmdhZ2UgU0RLXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gW2NvbmZpZ11cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlbmdhZ2UoY29uZmlnPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgV2ViRW5nYWdlIFNESyBjb25maWd1cmF0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUcmFja3MgZXZlbnRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgKiBAcGFyYW0ge2FueX0gW2F0dHJpYnV0ZXNdXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdHJhY2soZXZlbnROYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2tzIHNjcmVlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZVxyXG4gICAqIEBwYXJhbSBzY3JlZW5OYW1lXHJcbiAgICogQHBhcmFtIHthbnl9IFtzY3JlZW5EYXRhXVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNjcmVlbihzY3JlZW5OYW1lOiBzdHJpbmcsIHNjcmVlbkRhdGE/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXHJcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnVzZXInLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VVc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIExvZ3MgdXNlciBpblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVzZXJJZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ2luKHVzZXJJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvZ3MgdXNlciBvdXRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ291dCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB1c2VyIGF0dHJpYnV0ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEF0dHJpYnV0ZShrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1dlYmVuZ2FnZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4td2ViZW5nYWdlJyxcclxuICBwbHVnaW5SZWY6ICd3ZWJlbmdhZ2UucHVzaCcsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZVB1c2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgcHVzaCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgcHVzaCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXHJcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLm5vdGlmaWNhdGlvbicsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFdlYmVuZ2FnZU5vdGlmaWNhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDYWxsYmFjayBmdW5jdGlvbiBpcyBpbnZva2VkIHdoZW4gYSBpbi1hcHAgbm90aWZpY2F0aW9uIGlzIHNob3duXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvblNob3duKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBjbGlja2VkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvbkNsaWNrKGNhbGxiYWNrOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBkaXNtaXNzZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uRGlzbWlzcyhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgaW4tYXBwIG5vdGlmaWNhdGlvbiBjb25maWd1cmF0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICogQHBhcmFtIHthbnl9IHZhbHVlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3B0aW9ucyhrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==