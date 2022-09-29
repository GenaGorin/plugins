import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var Intercom = /** @class */ (function (_super) {
    __extends(Intercom, _super);
    function Intercom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intercom.prototype.registerIdentifiedUser = function (options) { return cordova(this, "registerIdentifiedUser", {}, arguments); };
    Intercom.prototype.registerUnidentifiedUser = function (options) { return cordova(this, "registerUnidentifiedUser", {}, arguments); };
    Intercom.prototype.reset = function () { return cordova(this, "reset", {}, arguments); };
    Intercom.prototype.logout = function () { return cordova(this, "logout", {}, arguments); };
    Intercom.prototype.setSecureMode = function (secureHash, secureData) { return cordova(this, "setSecureMode", {}, arguments); };
    Intercom.prototype.setUserHash = function (secureHash) { return cordova(this, "setUserHash", {}, arguments); };
    Intercom.prototype.updateUser = function (attributes) { return cordova(this, "updateUser", {}, arguments); };
    Intercom.prototype.logEvent = function (eventName, metaData) { return cordova(this, "logEvent", {}, arguments); };
    Intercom.prototype.displayMessenger = function () { return cordova(this, "displayMessenger", {}, arguments); };
    Intercom.prototype.displayMessageComposer = function () { return cordova(this, "displayMessageComposer", {}, arguments); };
    Intercom.prototype.displayMessageComposerWithInitialMessage = function (initialMessage) { return cordova(this, "displayMessageComposerWithInitialMessage", {}, arguments); };
    Intercom.prototype.displayConversationsList = function () { return cordova(this, "displayConversationsList", {}, arguments); };
    Intercom.prototype.displayHelpCenter = function () { return cordova(this, "displayHelpCenter", {}, arguments); };
    Intercom.prototype.unreadConversationCount = function () { return cordova(this, "unreadConversationCount", {}, arguments); };
    Intercom.prototype.setLauncherVisibility = function (visibility) { return cordova(this, "setLauncherVisibility", {}, arguments); };
    Intercom.prototype.setInAppMessageVisibility = function (visibility) { return cordova(this, "setInAppMessageVisibility", {}, arguments); };
    Intercom.prototype.hideMessenger = function () { return cordova(this, "hideMessenger", {}, arguments); };
    Intercom.prototype.registerForPush = function () { return cordova(this, "registerForPush", {}, arguments); };
    Intercom.prototype.sendPushTokenToIntercom = function (token) { return cordova(this, "sendPushTokenToIntercom", {}, arguments); };
    Intercom.prototype.displayCarousel = function (carouselId) { return cordova(this, "displayCarousel", {}, arguments); };
    Intercom.prototype.displayArticle = function (articleId) { return cordova(this, "displayArticle", {}, arguments); };
    Intercom.prototype.setBottomPadding = function (bottomPadding) { return cordova(this, "setBottomPadding", {}, arguments); };
    Intercom.prototype.displaySurvey = function (surveyId) { return cordova(this, "displaySurvey", {}, arguments); };
    Intercom.pluginName = "Intercom";
    Intercom.plugin = "cordova-plugin-intercom";
    Intercom.pluginRef = "intercom";
    Intercom.repo = "https://github.com/intercom/intercom-cordova";
    Intercom.platforms = ["Android", "iOS"];
    Intercom.decorators = [
        { type: Injectable }
    ];
    return Intercom;
}(AwesomeCordovaNativePlugin));
export { Intercom };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW50ZXJjb20vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7O0lBOEJiLDRCQUEwQjs7OztJQVF0RCx5Q0FBc0IsYUFBQyxPQUFZO0lBV25DLDJDQUF3QixhQUFDLE9BQVk7SUFVckMsd0JBQUs7SUFTTCx5QkFBTTtJQVlOLGdDQUFhLGFBQUMsVUFBa0IsRUFBRSxVQUFlO0lBVWpELDhCQUFXLGFBQUMsVUFBa0I7SUFVOUIsNkJBQVUsYUFBQyxVQUFlO0lBVzFCLDJCQUFRLGFBQUMsU0FBaUIsRUFBRSxRQUFhO0lBU3pDLG1DQUFnQjtJQVNoQix5Q0FBc0I7SUFVdEIsMkRBQXdDLGFBQUMsY0FBc0I7SUFTL0QsMkNBQXdCO0lBU3hCLG9DQUFpQjtJQVNqQiwwQ0FBdUI7SUFVdkIsd0NBQXFCLGFBQUMsVUFBa0I7SUFVeEMsNENBQXlCLGFBQUMsVUFBa0I7SUFTNUMsZ0NBQWE7SUFTYixrQ0FBZTtJQVVmLDBDQUF1QixhQUFDLEtBQWE7SUFVckMsa0NBQWUsYUFBQyxVQUFrQjtJQVVsQyxpQ0FBYyxhQUFDLFNBQWlCO0lBVWhDLG1DQUFnQixhQUFDLGFBQThCO0lBVS9DLGdDQUFhLGFBQUMsUUFBZ0I7Ozs7Ozs7Z0JBak8vQixVQUFVOzttQkE5Qlg7RUErQjhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEludGVyY29tXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIGlzIGEgcGx1Z2luIHRoYXQgYWxsb3dzIHlvdXIgSW9uaWMgYXBwIHRvIHVzZSBJbnRlcmNvbSBmb3IgaU9TIGFuZC9vciBJbnRlcmNvbSBmb3IgQW5kcm9pZC5cclxuICogRm9sbG93IHRoZSBvZmZpY2FsIGRvY3VtZW50YXRpb24gdG8gc2V0dXAgdGhpcyBwbHVnaW4gY29ycmVjdGx5OiBodHRwczovL2RldmVsb3BlcnMuaW50ZXJjb20uY29tL2RvY3MvY29yZG92YS1waG9uZWdhcC1jb25maWd1cmF0aW9uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEludGVyY29tIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ludGVyY29tL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW50ZXJjb206IEludGVyY29tKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuaW50ZXJjb20ucmVnaXN0ZXJVbmlkZW50aWZpZWRVc2VyKCk7XHJcbiAqIC4uLlxyXG4gKiB0aGlzLmludGVyY29tLnJlZ2lzdGVyRm9yUHVzaCgpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbnRlcmNvbScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW50ZXJjb20nLFxyXG4gIHBsdWdpblJlZjogJ2ludGVyY29tJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2ludGVyY29tL2ludGVyY29tLWNvcmRvdmEnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmNvbSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZWdpc3RlciBhIGlkZW50aWZpZWQgdXNlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge2FueX0gT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVySWRlbnRpZmllZFVzZXIob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGEgdW5pZGVudGlmaWVkIHVzZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHthbnl9IE9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3RlclVuaWRlbnRpZmllZFVzZXIob3B0aW9uczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgcmVzZXRzIHRoZSBJbnRlcmNvbSBpbnRlZ3JhdGlvbidzIGNhY2hlIG9mIHlvdXIgdXNlcidzIGlkZW50aXR5IGFuZCB3aXBlcyB0aGUgc2xhdGUgY2xlYW4uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXNldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsb2dvdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNlY3VyZUhhc2gge3N0cmluZ31cclxuICAgKiBAcGFyYW0gc2VjdXJlRGF0YSB7YW55fVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHNldFVzZXJIYXNoIGluc3RlYWQgYXMgb2YgSW50ZXJjb20gQ29yZG92YSA0LjAuMCBhbmQgaGlnaGVyIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRlcmNvbS9pbnRlcmNvbS1jb3Jkb3ZhL2Jsb2IvbWFzdGVyL0NIQU5HRUxPRy5tZCM0MDAtMjAxNy0wOC0yOVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRTZWN1cmVNb2RlKHNlY3VyZUhhc2g6IHN0cmluZywgc2VjdXJlRGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNlY3VyZUhhc2gge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRVc2VySGFzaChzZWN1cmVIYXNoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXR0cmlidXRlcyB7YW55fVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHVwZGF0ZVVzZXIoYXR0cmlidXRlczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGV2ZW50TmFtZSB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSBtZXRhRGF0YSB7YW55fVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvZ0V2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBtZXRhRGF0YTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzcGxheU1lc3NlbmdlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNwbGF5TWVzc2FnZUNvbXBvc2VyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpbml0aWFsTWVzc2FnZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc3BsYXlNZXNzYWdlQ29tcG9zZXJXaXRoSW5pdGlhbE1lc3NhZ2UoaW5pdGlhbE1lc3NhZ2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc3BsYXlDb252ZXJzYXRpb25zTGlzdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNwbGF5SGVscENlbnRlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bnJlYWRDb252ZXJzYXRpb25Db3VudCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmlzaWJpbGl0eSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldExhdW5jaGVyVmlzaWJpbGl0eSh2aXNpYmlsaXR5OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmlzaWJpbGl0eSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEluQXBwTWVzc2FnZVZpc2liaWxpdHkodmlzaWJpbGl0eTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGlkZU1lc3NlbmdlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3RlckZvclB1c2goKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRva2VuIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VuZFB1c2hUb2tlblRvSW50ZXJjb20odG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjYXJvdXNlbElkIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzcGxheUNhcm91c2VsKGNhcm91c2VsSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhcnRpY2xlSWQge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkaXNwbGF5QXJ0aWNsZShhcnRpY2xlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBib3R0b21QYWRkaW5nIHtzdHJpbmcgfCBudW1iZXJ9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0Qm90dG9tUGFkZGluZyhib3R0b21QYWRkaW5nOiBzdHJpbmcgfCBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJvZ3JhbW1hdGljYWxseSBkaXNwbGF5IGEgU3VydmV5XHJcbiAgICogQHBhcmFtIHN1cnZleUlkIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzcGxheVN1cnZleShzdXJ2ZXlJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19