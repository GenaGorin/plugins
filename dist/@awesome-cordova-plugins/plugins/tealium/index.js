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
export var Collectors;
(function (Collectors) {
    Collectors["AppData"] = "AppData";
    Collectors["Connectivity"] = "Connectivity";
    Collectors["DeviceData"] = "DeviceData";
    Collectors["Lifecycle"] = "Lifecycle";
})(Collectors || (Collectors = {}));
export var Dispatchers;
(function (Dispatchers) {
    Dispatchers["Collect"] = "Collect";
    Dispatchers["TagManagement"] = "TagManagement";
    Dispatchers["RemoteCommands"] = "RemoteCommands";
})(Dispatchers || (Dispatchers = {}));
export var Expiry;
(function (Expiry) {
    Expiry["forever"] = "forever";
    Expiry["untilRestart"] = "untilRestart";
    Expiry["session"] = "session";
})(Expiry || (Expiry = {}));
export var ConsentPolicy;
(function (ConsentPolicy) {
    ConsentPolicy["ccpa"] = "ccpa";
    ConsentPolicy["gdpr"] = "gdpr";
})(ConsentPolicy || (ConsentPolicy = {}));
var TealiumView = /** @class */ (function () {
    function TealiumView(viewName, dataLayer) {
        this.viewName = viewName;
        this.dataLayer = dataLayer;
        this.type = 'view';
    }
    TealiumView.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['viewName'] = this.viewName;
        return JSON.stringify(dictionary);
    };
    return TealiumView;
}());
export { TealiumView };
var TealiumEvent = /** @class */ (function () {
    function TealiumEvent(eventName, dataLayer) {
        this.eventName = eventName;
        this.dataLayer = dataLayer;
        this.type = 'event';
    }
    TealiumEvent.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['eventName'] = this.eventName;
        return JSON.stringify(dictionary);
    };
    return TealiumEvent;
}());
export { TealiumEvent };
var ConsentExpiry = /** @class */ (function () {
    function ConsentExpiry(time, unit) {
        this.time = time;
        this.unit = unit;
    }
    return ConsentExpiry;
}());
export { ConsentExpiry };
export var TimeUnit;
(function (TimeUnit) {
    TimeUnit["minutes"] = "minutes";
    TimeUnit["hours"] = "hours";
    TimeUnit["days"] = "days";
    TimeUnit["months"] = "months";
})(TimeUnit || (TimeUnit = {}));
export var ConsentStatus;
(function (ConsentStatus) {
    ConsentStatus["consented"] = "consented";
    ConsentStatus["notConsented"] = "notConsented";
    ConsentStatus["unknown"] = "unknown";
})(ConsentStatus || (ConsentStatus = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["dev"] = "dev";
    LogLevel["qa"] = "qa";
    LogLevel["prod"] = "prod";
    LogLevel["silent"] = "silent";
})(LogLevel || (LogLevel = {}));
export var TealiumEnvironment;
(function (TealiumEnvironment) {
    TealiumEnvironment["dev"] = "dev";
    TealiumEnvironment["qa"] = "qa";
    TealiumEnvironment["prod"] = "prod";
})(TealiumEnvironment || (TealiumEnvironment = {}));
export var ConsentCategories;
(function (ConsentCategories) {
    ConsentCategories["analytics"] = "analytics";
    ConsentCategories["affiliates"] = "affiliates";
    ConsentCategories["displayAds"] = "display_ads";
    ConsentCategories["email"] = "email";
    ConsentCategories["personalization"] = "personalization";
    ConsentCategories["search"] = "search";
    ConsentCategories["social"] = "social";
    ConsentCategories["bigData"] = "big_data";
    ConsentCategories["mobile"] = "mobile";
    ConsentCategories["engagement"] = "engagement";
    ConsentCategories["monitoring"] = "monitoring";
    ConsentCategories["crm"] = "crm";
    ConsentCategories["cdp"] = "cdp";
    ConsentCategories["cookieMatch"] = "cookiematch";
    ConsentCategories["misc"] = "misc";
})(ConsentCategories || (ConsentCategories = {}));
var TealiumOriginal = /** @class */ (function (_super) {
    __extends(TealiumOriginal, _super);
    function TealiumOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumOriginal.prototype.initialize = function (config, callback) { return cordova(this, "initialize", {}, arguments); };
    TealiumOriginal.prototype.track = function (dispatch) { return cordova(this, "track", {}, arguments); };
    TealiumOriginal.prototype.terminateInstance = function () { return cordova(this, "terminateInstance", {}, arguments); };
    TealiumOriginal.prototype.addData = function (data, expiry) { return cordova(this, "addData", {}, arguments); };
    TealiumOriginal.prototype.getData = function (key, callback) { return cordova(this, "getData", {}, arguments); };
    TealiumOriginal.prototype.removeData = function (keys) { return cordova(this, "removeData", {}, arguments); };
    TealiumOriginal.prototype.getConsentStatus = function (callback) { return cordova(this, "getConsentStatus", {}, arguments); };
    TealiumOriginal.prototype.setConsentStatus = function (consentStatus) { return cordova(this, "setConsentStatus", {}, arguments); };
    TealiumOriginal.prototype.getConsentCategories = function (callback) { return cordova(this, "getConsentCategories", {}, arguments); };
    TealiumOriginal.prototype.setConsentCategories = function (categories) { return cordova(this, "setConsentCategories", {}, arguments); };
    TealiumOriginal.prototype.joinTrace = function (id) { return cordova(this, "joinTrace", {}, arguments); };
    TealiumOriginal.prototype.leaveTrace = function () { return cordova(this, "leaveTrace", {}, arguments); };
    TealiumOriginal.prototype.getVisitorId = function (callback) { return cordova(this, "getVisitorId", {}, arguments); };
    TealiumOriginal.prototype.setVisitorServiceListener = function (callback) { return cordova(this, "setVisitorServiceListener", {}, arguments); };
    TealiumOriginal.prototype.setConsentExpiryListener = function (callback) { return cordova(this, "setConsentExpiryListener", {}, arguments); };
    TealiumOriginal.prototype.addRemoteCommand = function (id, callback) { return cordova(this, "addRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.removeRemoteCommand = function (id) { return cordova(this, "removeRemoteCommand", {}, arguments); };
    TealiumOriginal.prototype.removeListeners = function () { return cordova(this, "removeListeners", {}, arguments); };
    TealiumOriginal.pluginName = "Tealium";
    TealiumOriginal.plugin = "tealium-cordova-plugin";
    TealiumOriginal.pluginRef = "tealium";
    TealiumOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumOriginal.install = "";
    TealiumOriginal.installVariables = [];
    TealiumOriginal.platforms = ["Android", "iOS"];
    return TealiumOriginal;
}(AwesomeCordovaNativePlugin));
var Tealium = new TealiumOriginal();
export { Tealium };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FPTixNQUFNLCtCQUErQixDQUFDO0FBR3ZDLE1BQU0sQ0FBTixJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsaUNBQW1CLENBQUE7SUFDbkIsMkNBQTZCLENBQUE7SUFDN0IsdUNBQXlCLENBQUE7SUFDekIscUNBQXVCLENBQUE7QUFDekIsQ0FBQyxFQUxXLFVBQVUsS0FBVixVQUFVLFFBS3JCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FJWDtBQUpELFdBQVksV0FBVztJQUNyQixrQ0FBbUIsQ0FBQTtJQUNuQiw4Q0FBK0IsQ0FBQTtJQUMvQixnREFBaUMsQ0FBQTtBQUNuQyxDQUFDLEVBSlcsV0FBVyxLQUFYLFdBQVcsUUFJdEI7QUFFRCxNQUFNLENBQU4sSUFBWSxNQUlYO0FBSkQsV0FBWSxNQUFNO0lBQ2hCLDZCQUFtQixDQUFBO0lBQ25CLHVDQUE2QixDQUFBO0lBQzdCLDZCQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFKVyxNQUFNLEtBQU4sTUFBTSxRQUlqQjtBQUVELE1BQU0sQ0FBTixJQUFZLGFBR1g7QUFIRCxXQUFZLGFBQWE7SUFDdkIsOEJBQWEsQ0FBQTtJQUNiLDhCQUFhLENBQUE7QUFDZixDQUFDLEVBSFcsYUFBYSxLQUFiLGFBQWEsUUFHeEI7O0lBVUMscUJBQW1CLFFBQWdCLEVBQVMsU0FBMkI7UUFBcEQsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQWtCO1FBRGhFLFNBQUksR0FBRyxNQUFNLENBQUM7SUFDcUQsQ0FBQztJQUMzRSw0QkFBTSxHQUFOO1FBQ0UsSUFBTSxVQUFVLEdBQVEsRUFBRSxDQUFDO1FBQzNCLFVBQVUsQ0FBQyxN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QUF5QixDQUFBO0lBQ3pCLDhDQUF5QixDQUFBO0lBQ3pCLGdDQUFXLENBQUE7SUFDWCxnQ0FBVyxDQUFBO0lBQ1gsZ0RBQTJCLENBQUE7SUFDM0Isa0NBQWEsQ0FBQTtBQUNmLENBQUMsRUFoQlcsaUJBQWlCLEtBQWpCLGlCQUFpQixRQWdCNUI7O0lBdUU0QiwyQkFBMEI7Ozs7SUFRckQsNEJBQVUsYUFBQyxNQUFxQixFQUFFLFFBQW1CO0lBVXJELHVCQUFLLGFBQUMsUUFBeUI7SUFTL0IsbUNBQWlCO0lBV2pCLHlCQUFPLGFBQUMsSUFBc0IsRUFBRSxNQUFjO0lBVzlDLHlCQUFPLGFBQUMsR0FBVyxFQUFFLFFBQW1CO0lBVXhDLDRCQUFVLGFBQUMsSUFBYztJQVV6QixrQ0FBZ0IsYUFBQyxRQUFtQjtJQVVwQyxrQ0FBZ0IsYUFBQyxhQUE0QjtJQVU3QyxzQ0FBb0IsYUFBQyxRQUFtQjtJQVV4QyxzQ0FBb0IsYUFBQyxVQUErQjtJQVVwRCwyQkFBUyxhQUFDLEVBQVU7SUFTcEIsNEJBQVU7SUFVViw4QkFBWSxhQUFDLFFBQW1CO0lBVWhDLDJDQUF5QixhQUFDLFFBQW1CO0lBVTdDLDBDQUF3QixhQUFDLFFBQW1CO0lBVzVDLGtDQUFnQixhQUFDLEVBQVUsRUFBRSxRQUFtQjtJQVVoRCxxQ0FBbUIsYUFBQyxFQUFVO0lBUzlCLGlDQUFlOzs7Ozs7OztrQkFoWGpCO0VBOEw2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBQbHVnaW4sXHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgZW51bSBDb2xsZWN0b3JzIHtcclxuICBBcHBEYXRhID0gJ0FwcERhdGEnLFxyXG4gIENvbm5lY3Rpdml0eSA9ICdDb25uZWN0aXZpdHknLFxyXG4gIERldmljZURhdGEgPSAnRGV2aWNlRGF0YScsXHJcbiAgTGlmZWN5Y2xlID0gJ0xpZmVjeWNsZScsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpc3BhdGNoZXJzIHtcclxuICBDb2xsZWN0ID0gJ0NvbGxlY3QnLFxyXG4gIFRhZ01hbmFnZW1lbnQgPSAnVGFnTWFuYWdlbWVudCcsXHJcbiAgUmVtb3RlQ29tbWFuZHMgPSAnUmVtb3RlQ29tbWFuZHMnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFeHBpcnkge1xyXG4gIGZvcmV2ZXIgPSAnZm9yZXZlcicsXHJcbiAgdW50aWxSZXN0YXJ0ID0gJ3VudGlsUmVzdGFydCcsXHJcbiAgc2Vzc2lvbiA9ICdzZXNzaW9uJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29uc2VudFBvbGljeSB7XHJcbiAgY2NwYSA9ICdjY3BhJyxcclxuICBnZHByID0gJ2dkcHInLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlYWxpdW1EaXNwYXRjaCB7XHJcbiAgZGF0YUxheWVyOiBNYXA8c3RyaW5nLCBhbnk+O1xyXG4gIHR5cGU6IHN0cmluZztcclxuICB0b0pzb24oKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGVhbGl1bVZpZXcgaW1wbGVtZW50cyBUZWFsaXVtRGlzcGF0Y2gge1xyXG4gIHB1YmxpYyB0eXBlID0gJ3ZpZXcnO1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyB2aWV3TmFtZTogc3RyaW5nLCBwdWJsaWMgZGF0YUxheWVyOiBNYXA8c3RyaW5nLCBhbnk+KSB7fVxyXG4gIHRvSnNvbigpIHtcclxuICAgIGNvbnN0IGRpY3Rpb25hcnk6IGFueSA9IHt9O1xyXG4gICAgZGljdGlvbmFyeVsndHlwZSddID0gdGhpcy50eXBlO1xyXG4gICAgZGljdGlvbmFyeVsnZGF0YUxheWVyJ10gPSB7fTtcclxuICAgIHRoaXMuZGF0YUxheWVyLmZvckVhY2goKGssIHYpID0+IHtcclxuICAgICAgZGljdGlvbmFyeVsnZGF0YUxheWVyJ11ba10gPSB2O1xyXG4gICAgfSk7XHJcbiAgICBkaWN0aW9uYXJ5Wyd0eXBlJ10gPSB0aGlzLnR5cGU7XHJcbiAgICBkaWN0aW9uYXJ5Wyd2aWV3TmFtZSddID0gdGhpcy52aWV3TmFtZTtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShkaWN0aW9uYXJ5KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZWFsaXVtRXZlbnQgaW1wbGVtZW50cyBUZWFsaXVtRGlzcGF0Y2gge1xyXG4gIHB1YmxpYyB0eXBlID0gJ2V2ZW50JztcclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZXZlbnROYW1lOiBzdHJpbmcsIHB1YmxpYyBkYXRhTGF5ZXI6IE1hcDxzdHJpbmcsIGFueT4pIHt9XHJcbiAgdG9Kc29uKCkge1xyXG4gICAgY29uc3QgZGljdGlvbmFyeTogYW55ID0ge307XHJcbiAgICBkaWN0aW9uYXJ5Wyd0eXBlJ10gPSB0aGlzLnR5cGU7XHJcbiAgICBkaWN0aW9uYXJ5WydkYXRhTGF5ZXInXSA9IHt9O1xyXG4gICAgdGhpcy5kYXRhTGF5ZXIuZm9yRWFjaCgoaywgdikgPT4ge1xyXG4gICAgICBkaWN0aW9uYXJ5WydkYXRhTGF5ZXInXVtrXSA9IHY7XHJcbiAgICB9KTtcclxuICAgIGRpY3Rpb25hcnlbJ3R5cGUnXSA9IHRoaXMudHlwZTtcclxuICAgIGRpY3Rpb25hcnlbJ2V2ZW50TmFtZSddID0gdGhpcy5ldmVudE5hbWU7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGljdGlvbmFyeSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQ29uc2VudEV4cGlyeSB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIHRpbWU6IG51bWJlciwgcHVibGljIHVuaXQ6IFRpbWVVbml0KSB7fVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUaW1lVW5pdCB7XHJcbiAgbWludXRlcyA9ICdtaW51dGVzJyxcclxuICBob3VycyA9ICdob3VycycsXHJcbiAgZGF5cyA9ICdkYXlzJyxcclxuICBtb250aHMgPSAnbW9udGhzJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29uc2VudFN0YXR1cyB7XHJcbiAgY29uc2VudGVkID0gJ2NvbnNlbnRlZCcsXHJcbiAgbm90Q29uc2VudGVkID0gJ25vdENvbnNlbnRlZCcsXHJcbiAgdW5rbm93biA9ICd1bmtub3duJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gIGRldiA9ICdkZXYnLFxyXG4gIHFhID0gJ3FhJyxcclxuICBwcm9kID0gJ3Byb2QnLFxyXG4gIHNpbGVudCA9ICdzaWxlbnQnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBUZWFsaXVtRW52aXJvbm1lbnQge1xyXG4gIGRldiA9ICdkZXYnLFxyXG4gIHFhID0gJ3FhJyxcclxuICBwcm9kID0gJ3Byb2QnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBDb25zZW50Q2F0ZWdvcmllcyB7XHJcbiAgYW5hbHl0aWNzID0gJ2FuYWx5dGljcycsXHJcbiAgYWZmaWxpYXRlcyA9ICdhZmZpbGlhdGVzJyxcclxuICBkaXNwbGF5QWRzID0gJ2Rpc3BsYXlfYWRzJyxcclxuICBlbWFpbCA9ICdlbWFpbCcsXHJcbiAgcGVyc29uYWxpemF0aW9uID0gJ3BlcnNvbmFsaXphdGlvbicsXHJcbiAgc2VhcmNoID0gJ3NlYXJjaCcsXHJcbiAgc29jaWFsID0gJ3NvY2lhbCcsXHJcbiAgYmlnRGF0YSA9ICdiaWdfZGF0YScsXHJcbiAgbW9iaWxlID0gJ21vYmlsZScsXHJcbiAgZW5nYWdlbWVudCA9ICdlbmdhZ2VtZW50JyxcclxuICBtb25pdG9yaW5nID0gJ21vbml0b3JpbmcnLFxyXG4gIGNybSA9ICdjcm0nLFxyXG4gIGNkcCA9ICdjZHAnLFxyXG4gIGNvb2tpZU1hdGNoID0gJ2Nvb2tpZW1hdGNoJyxcclxuICBtaXNjID0gJ21pc2MnLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRlYWxpdW1Db25maWcge1xyXG4gIGFjY291bnQ6IHN0cmluZztcclxuICBwcm9maWxlOiBzdHJpbmc7XHJcbiAgZW52aXJvbm1lbnQ6IFRlYWxpdW1FbnZpcm9ubWVudDtcclxuICBkYXRhU291cmNlPzogc3RyaW5nO1xyXG4gIGNvbGxlY3RvcnM6IENvbGxlY3RvcnNbXTtcclxuICBkaXNwYXRjaGVyczogRGlzcGF0Y2hlcnNbXTtcclxuICBjdXN0b21WaXNpdG9ySWQ/OiBzdHJpbmc7XHJcbiAgbWVtb3J5UmVwb3J0aW5nRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgb3ZlcnJpZGVDb2xsZWN0VVJMPzogc3RyaW5nO1xyXG4gIG92ZXJyaWRlQ29sbGVjdEJhdGNoVVJMPzogc3RyaW5nO1xyXG4gIG92ZXJyaWRlQ29sbGVjdERvbWFpbj86IHN0cmluZztcclxuICBvdmVycmlkZUxpYnJhcnlTZXR0aW5nc1VSTD86IHN0cmluZztcclxuICBvdmVycmlkZVRhZ01hbmFnZW1lbnRVUkw/OiBzdHJpbmc7XHJcbiAgZGVlcExpbmtUcmFja2luZ0VuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHFyVHJhY2VFbmFibGVkPzogYm9vbGVhbjtcclxuICBsb2dsZXZlbD86IExvZ0xldmVsO1xyXG4gIGNvbnNlbnRMb2dnaW5nRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgY29uc2VudFBvbGljeT86IENvbnNlbnRQb2xpY3k7XHJcbiAgY29uc2VudEV4cGlyeT86IENvbnNlbnRFeHBpcnk7XHJcbiAgbGlmZWN5Y2xlQXV0b3RyYWNraW5nRW5hYmxlZD86IGJvb2xlYW47XHJcbiAgdXNlUmVtb3RlTGlicmFyeVNldHRpbmdzPzogYm9vbGVhbjtcclxuICB2aXNpdG9yU2VydmljZUVuYWJsZWQ/OiBib29sZWFuO1xyXG4gIHZpc2l0b3JTZXJ2aWNlUmVmcmVzaEludGVydmFsPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgVGVhbGl1bVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyBwcm92aWRlcyBhIHdyYXBwZXIgYXJvdW5kIHRoZSBUZWFsaXVtIENvcmRvdmEgUGx1Z2luIGZvciBJb25pYyBOYXRpdmUuXHJcbiAqXHJcbiAqIEZvciBmdWxsIGRvY3VtZW50YXRpb24sIHNlZSBbaHR0cHM6Ly9kb2NzLnRlYWxpdW0uY29tL3BsYXRmb3Jtcy9jb3Jkb3ZhL10oaHR0cHM6Ly9kb2NzLnRlYWxpdW0uY29tL3BsYXRmb3Jtcy9jb3Jkb3ZhLylcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVGVhbGl1bSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy90ZWFsaXVtL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdGVhbGl1bTogVGVhbGl1bSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBsZXQgY29uZmlnOiBUZWFsaXVtQ29uZmlnID0ge1xyXG4gKlx0XHRcdGFjY291bnQ6IDx5b3VyX3RlYWxpdW1fYWNjb3VudD4sXHJcbiAqXHRcdFx0cHJvZmlsZTogPHlvdXJfdGVhbGl1bV9wcm9maWxlPixcclxuICpcdFx0XHRlbnZpcm9ubWVudDogVGVhbGl1bUVudmlyb25tZW50LmRldixcclxuICpcdFx0XHRkaXNwYXRjaGVyczogW0Rpc3BhdGNoZXJzLkNvbGxlY3QsIERpc3BhdGNoZXJzLlJlbW90ZUNvbW1hbmRzLCBEaXNwYXRjaGVycy5UYWdNYW5hZ2VtZW50XSxcclxuICpcdFx0XHRjb2xsZWN0b3JzOiBbQ29sbGVjdG9ycy5BcHBEYXRhLCBDb2xsZWN0b3JzLkRldmljZURhdGEsIENvbGxlY3RvcnMuTGlmZWN5Y2xlLCBDb2xsZWN0b3JzLkNvbm5lY3Rpdml0eV0sXHJcbiAqXHRcdFx0Y29uc2VudExvZ2dpbmdFbmFibGVkOiB0cnVlLFxyXG4gKlx0XHRcdGNvbnNlbnRQb2xpY3k6IENvbnNlbnRQb2xpY3kuZ2RwcixcclxuICpcdFx0XHR2aXNpdG9yU2VydmljZUVuYWJsZWQ6IHRydWUsXHJcbiAqXHRcdFx0Ly8gdmlzaXRvclNlcnZpY2VSZWZyZXNoSW50ZXJ2YWw6ICcxJyxcclxuICpcdFx0XHRjb25zZW50RXhwaXJ5OiBuZXcgQ29uc2VudEV4cGlyeSgzLCBUaW1lVW5pdC5taW51dGVzKSxcclxuICpcdFx0fTtcclxuICpcclxuICogVGVhbGl1bS5pbml0aWFsaXplKGNvbmZpZyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW0nLFxyXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1wbHVnaW4nLCAvLyBucG0gcGFja2FnZSBuYW1lXHJcbiAgcGx1Z2luUmVmOiAndGVhbGl1bScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIGluc3RhbGw6ICcnLCAvLyBPUFRJT05BTCBpbnN0YWxsIGNvbW1hbmQsIGluIGNhc2UgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSwgLy8gT1BUSU9OQUwgdGhlIHBsdWdpbiByZXF1aXJlcyB2YXJpYWJsZXNcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWFsaXVtIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIFRlYWxpdW0gQ29yZG92YSBQbHVnaW5cclxuICAgKiBAcGFyYW0gY29uZmlnIHtUZWFsaXVtQ29uZmlnfVxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXRpYWxpemUoY29uZmlnOiBUZWFsaXVtQ29uZmlnLCBjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHRyYWNrcyBhbiBldmVudFxyXG4gICAqIEBwYXJhbSBkaXNwYXRjaCB7VGVhbGl1bURpc3BhdGNofSBEaXNwYXRjaCBjb250YWluaW5nIGV2ZW50IGRhdGFcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0cmFjayhkaXNwYXRjaDogVGVhbGl1bURpc3BhdGNoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gdGVybWluYXRlc3QgdGhlIFRlYWxpdW0gaW5zdGFuY2VcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB0ZXJtaW5hdGVJbnN0YW5jZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBkYXRhIHRvIGRhdGEgbGF5ZXJcclxuICAgKiBAcGFyYW0gZGF0YSBBIG1hcCBjb250YWluaW5nIHRoZSBrZXktdmFsdWUgcGFpcnMgdG8gYmUgYWRkZWQgdG8gZGF0YSBsYXllclxyXG4gICAqIEBwYXJhbSBleHBpcnkgV2hlbiB0aGUgZGF0YSBzaG91bGQgZXhwaXJlLiBDaG9vc2UgYEV4cGlyeS5zZXNzaW9uYCBpZiB1bnN1cmUuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWRkRGF0YShkYXRhOiBNYXA8c3RyaW5nLCBhbnk+LCBleHBpcnk6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBrZXkgVGhlIGtleSBvZiB0aGUgZGF0YSB0byByZXRyaWV2ZSBmcm9tIHRoZSBkYXRhIGxheWVyXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0RGF0YShrZXk6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGRhdGEgZnJvbSB0aGUgZGF0YSBsYXllclxyXG4gICAqIEBwYXJhbSBrZXlzIFRoZSBrZXlzIG9mIHRoZSBkYXRhIHRvIGJlIHJlbW92ZWRcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW1vdmVEYXRhKGtleXM6IHN0cmluZ1tdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlcyB0aGUgdXNlcidzIGNvbnNlbnQgc3RhdHVzXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0Q29uc2VudFN0YXR1cyhjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIHVzZXIncyBjb25zZW50IHN0YXR1c1xyXG4gICAqIEBwYXJhbSBjb25zZW50U3RhdHVzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0Q29uc2VudFN0YXR1cyhjb25zZW50U3RhdHVzOiBDb25zZW50U3RhdHVzKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHJpZXZlcyB0aGUgdXNlcidzIGNvbnNlbnQgY2F0ZWdvcmllc1xyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldENvbnNlbnRDYXRlZ29yaWVzKGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgdXNlcidzIGNvbnNlbnQgY2F0ZWdvcmllc1xyXG4gICAqIEBwYXJhbSBjYXRlZ29yaWVzXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0Q29uc2VudENhdGVnb3JpZXMoY2F0ZWdvcmllczogQ29uc2VudENhdGVnb3JpZXNbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBKb2lucyBhIHRyYWNlIHNlc3Npb24gd2VpdGggdGhlIHNwZWNpZmllZCBUcmFjZSBJRFxyXG4gICAqIEBwYXJhbSBpZCBUcmFjZSBJRFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGpvaW5UcmFjZShpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExlYXZlcyBhIHRyYWNlIHNlc3Npb25cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsZWF2ZVRyYWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2ZXMgdGhlIFRlYWxpdW0gVmlzaXRvciBJRFxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFZpc2l0b3JJZChjYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgYSBsaXN0ZW5lciB0byBiZSBjYWxsZWQgd2hlbiB0aGUgQXVkaWVuY2VTdHJlYW0gdmlzaXRvciBwcm9maWxlIGlzIHVwZGF0ZWRcclxuICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRWaXNpdG9yU2VydmljZUxpc3RlbmVyKGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBhIGxpc3RlbmVyIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBjb25zZW50IGhhcyBleHBpcmVkXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0Q29uc2VudEV4cGlyeUxpc3RlbmVyKGNhbGxiYWNrPzogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIHJlbW90ZSBjb21tYW5kIGZvciBsYXRlciBleGVjdXRpb25cclxuICAgKiBAcGFyYW0gaWQgVGhlIElEIHVzZWQgdG8gaW52b2tlIHRoZSByZW1vdGUgY29tbWFuZFxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZFJlbW90ZUNvbW1hbmQoaWQ6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgcHJldmlvdXNseS1hZGRlZCByZW1vdGUgY29tbWFuZFxyXG4gICAqIEBwYXJhbSBpZCBUaGUgSUQgb2YgcmVtb3RlIGNvbW1hbmQgdG8gYmUgcmVtb3ZlZFxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlbW92ZVJlbW90ZUNvbW1hbmQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBsaXN0ZW5lcnNcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZW1vdmVMaXN0ZW5lcnMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19