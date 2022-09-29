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
var WebengageOriginal = /** @class */ (function (_super) {
    __extends(WebengageOriginal, _super);
    function WebengageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageOriginal.prototype.engage = function (config) { return cordova(this, "engage", {}, arguments); };
    WebengageOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageOriginal.prototype.track = function (eventName, attributes) { return cordova(this, "track", {}, arguments); };
    WebengageOriginal.prototype.screen = function (screenName, screenData) { return cordova(this, "screen", {}, arguments); };
    WebengageOriginal.pluginName = "Webengage";
    WebengageOriginal.plugin = "cordova-plugin-webengage";
    WebengageOriginal.pluginRef = "webengage";
    WebengageOriginal.repo = "https://github.com/WebEngage/cordova-plugin";
    WebengageOriginal.platforms = ["Android", "iOS"];
    return WebengageOriginal;
}(AwesomeCordovaNativePlugin));
var Webengage = new WebengageOriginal();
export { Webengage };
var WebengageUserOriginal = /** @class */ (function (_super) {
    __extends(WebengageUserOriginal, _super);
    function WebengageUserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUserOriginal.prototype.login = function (userId) { return cordova(this, "login", {}, arguments); };
    WebengageUserOriginal.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    WebengageUserOriginal.prototype.setAttribute = function (key, value) { return cordova(this, "setAttribute", {}, arguments); };
    WebengageUserOriginal.pluginName = "Webengage";
    WebengageUserOriginal.plugin = "cordova-plugin-webengage";
    WebengageUserOriginal.pluginRef = "webengage.user";
    return WebengageUserOriginal;
}(AwesomeCordovaNativePlugin));
var WebengageUser = new WebengageUserOriginal();
export { WebengageUser };
var WebengagePushOriginal = /** @class */ (function (_super) {
    __extends(WebengagePushOriginal, _super);
    function WebengagePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePushOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengagePushOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengagePushOriginal.pluginName = "Webengage";
    WebengagePushOriginal.plugin = "cordova-plugin-webengage";
    WebengagePushOriginal.pluginRef = "webengage.push";
    return WebengagePushOriginal;
}(AwesomeCordovaNativePlugin));
var WebengagePush = new WebengagePushOriginal();
export { WebengagePush };
var WebengageNotificationOriginal = /** @class */ (function (_super) {
    __extends(WebengageNotificationOriginal, _super);
    function WebengageNotificationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotificationOriginal.prototype.onShown = function (callback) { return cordova(this, "onShown", {}, arguments); };
    WebengageNotificationOriginal.prototype.onClick = function (callback) { return cordova(this, "onClick", {}, arguments); };
    WebengageNotificationOriginal.prototype.onDismiss = function (callback) { return cordova(this, "onDismiss", {}, arguments); };
    WebengageNotificationOriginal.prototype.options = function (key, value) { return cordova(this, "options", {}, arguments); };
    WebengageNotificationOriginal.pluginName = "Webengage";
    WebengageNotificationOriginal.plugin = "cordova-plugin-webengage";
    WebengageNotificationOriginal.pluginRef = "webengage.notification";
    return WebengageNotificationOriginal;
}(AwesomeCordovaNativePlugin));
var WebengageNotification = new WebengageNotificationOriginal();
export { WebengageNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViZW5nYWdlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTBCN0QsNkJBQTBCOzs7O0lBUXZELDBCQUFNLGFBQUMsTUFBWTtJQVluQiwyQkFBTyxhQUFDLEdBQVcsRUFBRSxLQUFVO0lBWS9CLHlCQUFLLGFBQUMsU0FBaUIsRUFBRSxVQUFnQjtJQWF6QywwQkFBTSxhQUFDLFVBQWtCLEVBQUUsVUFBZ0I7Ozs7OztvQkF4RTdDO0VBMkIrQiwwQkFBMEI7U0FBNUMsU0FBUzs7SUEyRGEsaUNBQTBCOzs7O0lBUTNELDZCQUFLLGFBQUMsTUFBYztJQVVwQiw4QkFBTTtJQVlOLG9DQUFZLGFBQUMsR0FBVyxFQUFFLEtBQVU7Ozs7d0JBcEh0QztFQXNGbUMsMEJBQTBCO1NBQWhELGFBQWE7O0lBNENTLGlDQUEwQjs7OztJQVEzRCwrQkFBTyxhQUFDLFFBQWE7SUFZckIsK0JBQU8sYUFBQyxHQUFXLEVBQUUsS0FBVTs7Ozt3QkF0SmpDO0VBa0ltQywwQkFBMEI7U0FBaEQsYUFBYTs7SUFrQ2lCLHlDQUEwQjs7OztJQVFuRSx1Q0FBTyxhQUFDLFFBQWE7SUFXckIsdUNBQU8sYUFBQyxRQUFhO0lBV3JCLHlDQUFTLGFBQUMsUUFBYTtJQVl2Qix1Q0FBTyxhQUFDLEdBQVcsRUFBRSxLQUFVOzs7O2dDQTlNakM7RUFvSzJDLDBCQUEwQjtTQUF4RCxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgV2ViZW5nYWdlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBd2Vzb21lIENvcmRvdmEgUGx1Z2lucyB3cmFwcGVyIHRoYXQgd3JhcHMgV2ViZW5nYWdlIENvcmRvdmEgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1NcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgV2ViZW5nYWdlLCBXZWJlbmdhZ2VVc2VyLCBXZWJlbmdhZ2VQdXNoLCBXZWJlbmdhZ2VOb3RpZmljYXRpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViZW5nYWdlL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgd2ViZW5nYWdlOiBXZWJlbmdhZ2UsIHByaXZhdGUgd2ViZW5nYWdlVXNlcjogV2ViZW5nYWdlVXNlciwgcHJpdmF0ZSB3ZWJlbmdhZ2VQdXNoOiBXZWJlbmdhZ2VQdXNoLCBwcml2YXRlIHdlYmVuZ2FnZU5vdGlmaWNhdGlvbjogV2ViZW5nYWdlTm90aWZpY2F0aW9uICkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLndlYmVuZ2FnZS5lbmdhZ2UoKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxyXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9XZWJFbmdhZ2UvY29yZG92YS1wbHVnaW4nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogSW5pdGlhbGl6ZXMgV2ViRW5nYWdlIFNES1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9IFtjb25maWddXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5nYWdlKGNvbmZpZz86IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIFdlYkVuZ2FnZSBTREsgY29uZmlndXJhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJhY2tzIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnROYW1lXHJcbiAgICogQHBhcmFtIHthbnl9IFthdHRyaWJ1dGVzXVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHRyYWNrKGV2ZW50TmFtZTogc3RyaW5nLCBhdHRyaWJ1dGVzPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyYWNrcyBzY3JlZW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVcclxuICAgKiBAcGFyYW0gc2NyZWVuTmFtZVxyXG4gICAqIEBwYXJhbSB7YW55fSBbc2NyZWVuRGF0YV1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nLCBzY3JlZW5EYXRhPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxyXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZS51c2VyJyxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViZW5nYWdlVXNlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBMb2dzIHVzZXIgaW5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VySWRcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dpbih1c2VySWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2dzIHVzZXIgb3V0XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdXNlciBhdHRyaWJ1dGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRBdHRyaWJ1dGUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdXZWJlbmdhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXdlYmVuZ2FnZScsXHJcbiAgcGx1Z2luUmVmOiAnd2ViZW5nYWdlLnB1c2gnLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIHB1c2ggbm90aWZpY2F0aW9uIGlzIGNsaWNrZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7YW55fSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uQ2xpY2soY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIHB1c2ggbm90aWZpY2F0aW9uIGNvbmZpZ3VyYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgKiBAcGFyYW0ge2FueX0gdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvcHRpb25zKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViZW5nYWdlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJlbmdhZ2UnLFxyXG4gIHBsdWdpblJlZjogJ3dlYmVuZ2FnZS5ub3RpZmljYXRpb24nLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBXZWJlbmdhZ2VOb3RpZmljYXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2FsbGJhY2sgZnVuY3Rpb24gaXMgaW52b2tlZCB3aGVuIGEgaW4tYXBwIG5vdGlmaWNhdGlvbiBpcyBzaG93blxyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb25TaG93bihjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgY2xpY2tlZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHthbnl9IGNhbGxiYWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb25DbGljayhjYWxsYmFjazogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbGxiYWNrIGZ1bmN0aW9uIGlzIGludm9rZWQgd2hlbiBhIGluLWFwcCBub3RpZmljYXRpb24gaXMgZGlzbWlzc2VkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2FueX0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvbkRpc21pc3MoY2FsbGJhY2s6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGluLWFwcCBub3RpZmljYXRpb24gY29uZmlndXJhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxyXG4gICAqIEBwYXJhbSB7YW55fSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9wdGlvbnMoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=