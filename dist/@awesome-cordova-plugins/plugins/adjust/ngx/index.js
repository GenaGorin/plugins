import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AdjustEvent = /** @class */ (function () {
    function AdjustEvent(eventToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.eventToken = eventToken;
    }
    AdjustEvent.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustEvent.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustEvent.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustEvent.prototype.setTransactionId = function (transactionId) {
        this.transactionId = transactionId;
    };
    AdjustEvent.prototype.setCallbackId = function (callbackId) {
        this.callbackId = callbackId;
    };
    return AdjustEvent;
}());
export { AdjustEvent };
var AdjustConfig = /** @class */ (function () {
    function AdjustConfig(appToken, environment) {
        this.delayStart = 0.0;
        this.logLevel = null;
        this.defaultTracker = null;
        this.urlStrategy = null;
        this.externalDeviceId = null;
        this.sendInBackground = null;
        this.shouldLaunchDeeplink = null;
        this.eventBufferingEnabled = null;
        this.userAgent = null;
        this.isDeviceKnown = null;
        this.needsCost = null;
        this.secretId = null;
        this.info1 = null;
        this.info2 = null;
        this.info3 = null;
        this.info4 = null;
        this.processName = null; // Android only
        this.preinstallTrackingEnabled = null; // Android only
        this.preinstallFilePath = null; // Android only
        this.oaidReadingEnabled = null; // Android only
        this.allowiAdInfoReading = null; // iOS only
        this.allowIdfaReading = null; // iOS only
        this.allowAdServicesInfoReading = null; // iOS only
        this.coppaCompliantEnabled = null;
        this.playStoreKidsAppEnabled = null; // Android only
        this.attributionCallback = null;
        this.eventTrackingSucceededCallback = null;
        this.eventTrackingFailedCallback = null;
        this.sessionTrackingSucceededCallback = null;
        this.sessionTrackingFailedCallback = null;
        this.deferredDeeplinkCallback = null;
        this.conversionValueUpdatedCallback = null;
        this.appToken = appToken;
        this.environment = environment;
    }
    AdjustConfig.prototype.setAppSecret = function (secretId, info1, info2, info3, info4) {
        this.secretId = secretId;
        this.info1 = info1;
        this.info2 = info2;
        this.info3 = info3;
        this.info4 = info4;
    };
    AdjustConfig.prototype.setDelayStart = function (delayStart) {
        this.delayStart = delayStart;
    };
    AdjustConfig.prototype.setLogLevel = function (logLevel) {
        this.logLevel = logLevel;
    };
    AdjustConfig.prototype.setDefaultTracker = function (defaultTracker) {
        this.defaultTracker = defaultTracker;
    };
    AdjustConfig.prototype.setExternalDeviceId = function (externalDeviceId) {
        this.externalDeviceId = externalDeviceId;
    };
    AdjustConfig.prototype.setUrlStrategy = function (urlStrategy) {
        this.urlStrategy = urlStrategy;
    };
    AdjustConfig.prototype.setSendInBackground = function (sendInBackground) {
        this.sendInBackground = sendInBackground;
    };
    AdjustConfig.prototype.setShouldLaunchDeeplink = function (shouldLaunchDeeplink) {
        this.shouldLaunchDeeplink = shouldLaunchDeeplink;
    };
    AdjustConfig.prototype.setEventBufferingEnabled = function (eventBufferingEnabled) {
        this.eventBufferingEnabled = eventBufferingEnabled;
    };
    AdjustConfig.prototype.setCoppaCompliantEnabled = function (coppaCompliantEnabled) {
        this.coppaCompliantEnabled = coppaCompliantEnabled;
    };
    AdjustConfig.prototype.setPlayStoreKidsAppEnabled = function (playStoreKidsAppEnabled) {
        this.playStoreKidsAppEnabled = playStoreKidsAppEnabled;
    };
    AdjustConfig.prototype.setUserAgent = function (userAgent) {
        this.userAgent = userAgent;
    };
    AdjustConfig.prototype.setDeviceKnown = function (isDeviceKnown) {
        this.isDeviceKnown = isDeviceKnown;
    };
    AdjustConfig.prototype.setNeedsCost = function (needsCost) {
        this.needsCost = needsCost;
    };
    AdjustConfig.prototype.setProcessName = function (processName) {
        this.processName = processName;
    };
    AdjustConfig.prototype.setPreinstallTrackingEnabled = function (preinstallTrackingEnabled) {
        this.preinstallTrackingEnabled = preinstallTrackingEnabled;
    };
    AdjustConfig.prototype.setPreinstallFilePath = function (preinstallFilePath) {
        this.preinstallFilePath = preinstallFilePath;
    };
    AdjustConfig.prototype.setOaidReadingEnabled = function (enableOaidReading) {
        this.oaidReadingEnabled = enableOaidReading;
    };
    AdjustConfig.prototype.setAllowiAdInfoReading = function (allowiAdInfoReading) {
        this.allowiAdInfoReading = allowiAdInfoReading;
    };
    AdjustConfig.prototype.setAllowIdfaReading = function (allowIdfaReading) {
        this.allowIdfaReading = allowIdfaReading;
    };
    AdjustConfig.prototype.setAllowAdServicesInfoReading = function (allowAdServicesInfoReading) {
        this.allowAdServicesInfoReading = allowAdServicesInfoReading;
    };
    AdjustConfig.prototype.setAttributionCallbackListener = function (attributionCallback) {
        this.attributionCallback = attributionCallback;
    };
    AdjustConfig.prototype.setEventTrackingSucceededCallbackListener = function (eventTrackingSucceededCallback) {
        this.eventTrackingSucceededCallback = eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setEventTrackingFailedCallbackListener = function (eventTrackingFailedCallback) {
        this.eventTrackingFailedCallback = eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.setSessionTrackingSucceededCallbackListener = function (sessionTrackingSucceededCallback) {
        this.sessionTrackingSucceededCallback = sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.setSessionTrackingFailedCallbackListener = function (sessionTrackingFailedCallback) {
        this.sessionTrackingFailedCallback = sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.setDeferredDeeplinkCallbackListener = function (deferredDeeplinkCallback) {
        this.deferredDeeplinkCallback = deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.setConversionValueUpdatedCallbackListener = function (conversionValueUpdatedCallback) {
        this.conversionValueUpdatedCallback = conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.getAttributionCallback = function () {
        return this.attributionCallback;
    };
    AdjustConfig.prototype.getEventTrackingSucceededCallback = function () {
        return this.eventTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getEventTrackingFailedCallback = function () {
        return this.eventTrackingFailedCallback;
    };
    AdjustConfig.prototype.getSessionTrackingSucceededCallback = function () {
        return this.sessionTrackingSucceededCallback;
    };
    AdjustConfig.prototype.getSessionTrackingFailedCallback = function () {
        return this.sessionTrackingFailedCallback;
    };
    AdjustConfig.prototype.getDeferredDeeplinkCallback = function () {
        return this.deferredDeeplinkCallback;
    };
    AdjustConfig.prototype.getConversionValueUpdatedCallback = function () {
        return this.conversionValueUpdatedCallback;
    };
    AdjustConfig.prototype.hasAttributionListener = function () {
        return this.attributionCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingSucceededListener = function () {
        return this.eventTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasEventTrackingFailedListener = function () {
        return this.eventTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingSucceededListener = function () {
        return this.sessionTrackingSucceededCallback !== null;
    };
    AdjustConfig.prototype.hasSessionTrackingFailedListener = function () {
        return this.sessionTrackingFailedCallback !== null;
    };
    AdjustConfig.prototype.hasDeferredDeeplinkCallbackListener = function () {
        return this.deferredDeeplinkCallback !== null;
    };
    AdjustConfig.prototype.hasConversionValueUpdatedCallbackListener = function () {
        return this.conversionValueUpdatedCallback !== null;
    };
    return AdjustConfig;
}());
export { AdjustConfig };
var AdjustAppStoreSubscription = /** @class */ (function () {
    function AdjustAppStoreSubscription(price, currency, transactionId, receipt) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.transactionId = transactionId;
        this.receipt = receipt;
    }
    AdjustAppStoreSubscription.prototype.setTransactionDate = function (transactionDate) {
        this.transactionDate = transactionDate;
    };
    AdjustAppStoreSubscription.prototype.setSalesRegion = function (salesRegion) {
        this.salesRegion = salesRegion;
    };
    AdjustAppStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAppStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustAppStoreSubscription;
}());
export { AdjustAppStoreSubscription };
var AdjustPlayStoreSubscription = /** @class */ (function () {
    function AdjustPlayStoreSubscription(price, currency, sku, orderId, signature, purchaseToken) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.price = price;
        this.currency = currency;
        this.sku = sku;
        this.orderId = orderId;
        this.signature = signature;
        this.purchaseToken = purchaseToken;
    }
    AdjustPlayStoreSubscription.prototype.setPurchaseTime = function (purchaseTime) {
        this.purchaseTime = purchaseTime;
    };
    AdjustPlayStoreSubscription.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustPlayStoreSubscription.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    return AdjustPlayStoreSubscription;
}());
export { AdjustPlayStoreSubscription };
var AdjustThirdPartySharing = /** @class */ (function () {
    function AdjustThirdPartySharing(isEnabled) {
        this.granularOptions = [];
        this.isEnabled = isEnabled;
    }
    AdjustThirdPartySharing.prototype.addGranularOption = function (partnerName, key, value) {
        this.granularOptions.push(partnerName);
        this.granularOptions.push(key);
        this.granularOptions.push(value);
    };
    return AdjustThirdPartySharing;
}());
export { AdjustThirdPartySharing };
var AdjustAdRevenue = /** @class */ (function () {
    function AdjustAdRevenue(source) {
        this.callbackParameters = [];
        this.partnerParameters = [];
        this.source = source;
    }
    AdjustAdRevenue.prototype.setRevenue = function (revenue, currency) {
        this.revenue = revenue;
        this.currency = currency;
    };
    AdjustAdRevenue.prototype.addCallbackParameter = function (key, value) {
        this.callbackParameters.push(key);
        this.callbackParameters.push(value);
    };
    AdjustAdRevenue.prototype.addPartnerParameter = function (key, value) {
        this.partnerParameters.push(key);
        this.partnerParameters.push(value);
    };
    AdjustAdRevenue.prototype.setAdImpressionsCount = function (adImpressionsCount) {
        this.adImpressionsCount = adImpressionsCount;
    };
    AdjustAdRevenue.prototype.setAdRevenueNetwork = function (adRevenueNetwork) {
        this.adRevenueNetwork = adRevenueNetwork;
    };
    AdjustAdRevenue.prototype.setAdRevenueUnit = function (adRevenueUnit) {
        this.adRevenueUnit = adRevenueUnit;
    };
    AdjustAdRevenue.prototype.setAdRevenuePlacement = function (adRevenuePlacement) {
        this.adRevenuePlacement = adRevenuePlacement;
    };
    return AdjustAdRevenue;
}());
export { AdjustAdRevenue };
export var AdjustEnvironment;
(function (AdjustEnvironment) {
    AdjustEnvironment["Sandbox"] = "sandbox";
    AdjustEnvironment["Production"] = "production";
})(AdjustEnvironment || (AdjustEnvironment = {}));
export var AdjustLogLevel;
(function (AdjustLogLevel) {
    AdjustLogLevel["Verbose"] = "VERBOSE";
    AdjustLogLevel["Debug"] = "DEBUG";
    AdjustLogLevel["Info"] = "INFO";
    AdjustLogLevel["Warn"] = "WARN";
    AdjustLogLevel["Error"] = "ERROR";
    AdjustLogLevel["Assert"] = "ASSERT";
    AdjustLogLevel["Suppress"] = "SUPPRESS";
})(AdjustLogLevel || (AdjustLogLevel = {}));
export var AdjustUrlStrategy;
(function (AdjustUrlStrategy) {
    AdjustUrlStrategy["India"] = "india";
    AdjustUrlStrategy["China"] = "china";
    AdjustUrlStrategy["DataResidencyEU"] = "data-residency-eu";
    AdjustUrlStrategy["DataResidencyTR"] = "data-residency-tr";
    AdjustUrlStrategy["DataResidencyUS"] = "data-residency-us";
})(AdjustUrlStrategy || (AdjustUrlStrategy = {}));
export var AdjustAdRevenueSource;
(function (AdjustAdRevenueSource) {
    AdjustAdRevenueSource["AdRevenueSourceAppLovinMAX"] = "applovin_max_sdk";
    AdjustAdRevenueSource["AdRevenueSourceMopub"] = "mopub";
    AdjustAdRevenueSource["AdRevenueSourceAdMob"] = "admob_sdk";
    AdjustAdRevenueSource["AdRevenueSourceIronSource"] = "ironsource_sdk";
    AdjustAdRevenueSource["AdRevenueSourceAdMost"] = "admost_sdk";
    AdjustAdRevenueSource["AdRevenueSourceUnity"] = "unity_sdk";
    AdjustAdRevenueSource["AdRevenueSourceHeliumChartboost"] = "helium_chartboost_sdk";
    AdjustAdRevenueSource["AdRevenueSourcePublisher"] = "publisher_sdk";
})(AdjustAdRevenueSource || (AdjustAdRevenueSource = {}));
var Adjust = /** @class */ (function (_super) {
    __extends(Adjust, _super);
    function Adjust() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Adjust.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    Adjust.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    Adjust.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    Adjust.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    Adjust.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    Adjust.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    Adjust.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    Adjust.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    Adjust.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    Adjust.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    Adjust.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    Adjust.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    Adjust.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    Adjust.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    Adjust.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    Adjust.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    Adjust.prototype.checkForNewAttStatus = function () { return cordova(this, "checkForNewAttStatus", { "sync": true }, arguments); };
    Adjust.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    Adjust.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    Adjust.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    Adjust.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    Adjust.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    Adjust.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    Adjust.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    Adjust.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    Adjust.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    Adjust.pluginName = "Adjust";
    Adjust.plugin = "com.adjust.sdk";
    Adjust.pluginRef = "Adjust";
    Adjust.repo = "https://github.com/adjust/cordova_sdk";
    Adjust.platforms = ["Android", "iOS"];
    Adjust.decorators = [
        { type: Injectable }
    ];
    return Adjust;
}(AwesomeCordovaNativePlugin));
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVcxRixxQkFBWSxVQUFrQjtRQUh0Qix1QkFBa0IsR0FBYSxFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBR3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLFFBQWdCO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBb0IsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBcUI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJ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QUMsR0FBVztJQVExQiwyQkFBVSxhQUFDLE9BQWdCO0lBUzNCLDZCQUFZLGFBQUMsU0FBaUI7SUFROUIsMEJBQVM7SUFTVCw2QkFBWTtJQU9aLHlDQUF3QjtJQVF4Qiw4QkFBYTtJQVViLDhCQUFhO0lBVWIsd0JBQU87SUFXUCx3QkFBTztJQVFQLHFDQUFvQjtJQVFwQiwrQkFBYztJQVVkLDhCQUFhO0lBV2IsNENBQTJCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFRdEQsK0NBQThCLGFBQUMsR0FBVztJQU0xQywrQ0FBOEI7SUFTOUIsMkNBQTBCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFRckQsOENBQTZCLGFBQUMsR0FBVztJQU16Qyw4Q0FBNkI7SUFNN0Isa0NBQWlCO0lBU2pCLGtFQUFpRDtJQVVqRCxzQ0FBcUIsYUFBQyxlQUF1QjtJQVE3QyxrREFBaUM7Ozs7Ozs7Z0JBL1FsQyxVQUFVOztpQkF4Z0JYO0VBeWdCNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQWRqdXN0RXZlbnQge1xyXG4gIHByaXZhdGUgZXZlbnRUb2tlbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgcmV2ZW51ZTogbnVtYmVyO1xyXG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcclxuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrSWQ6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihldmVudFRva2VuOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZXZlbnRUb2tlbiA9IGV2ZW50VG9rZW47XHJcbiAgfVxyXG5cclxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcclxuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICB9XHJcblxyXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldFRyYW5zYWN0aW9uSWQodHJhbnNhY3Rpb25JZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRyYW5zYWN0aW9uSWQgPSB0cmFuc2FjdGlvbklkO1xyXG4gIH1cclxuXHJcbiAgc2V0Q2FsbGJhY2tJZChjYWxsYmFja0lkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuY2FsbGJhY2tJZCA9IGNhbGxiYWNrSWQ7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRqdXN0Q29uZmlnIHtcclxuICBwcml2YXRlIGFwcFRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQ7XHJcbiAgcHJpdmF0ZSBzZGtQcmVmaXg6IHN0cmluZztcclxuICBwcml2YXRlIGRlbGF5U3RhcnQgPSAwLjA7XHJcbiAgcHJpdmF0ZSBsb2dMZXZlbDogQWRqdXN0TG9nTGV2ZWwgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmYXVsdFRyYWNrZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSB1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kgPSBudWxsO1xyXG4gIHByaXZhdGUgZXh0ZXJuYWxEZXZpY2VJZDogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIHNlbmRJbkJhY2tncm91bmQ6IGJvb2xlYW4gPSBudWxsO1xyXG4gIHByaXZhdGUgc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4gPSBudWxsO1xyXG4gIHByaXZhdGUgZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIHVzZXJBZ2VudDogc3RyaW5nID0gbnVsbDtcclxuICBwcml2YXRlIGlzRGV2aWNlS25vd246IGJvb2xlYW4gPSBudWxsO1xyXG4gIHByaXZhdGUgbmVlZHNDb3N0OiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIHNlY3JldElkOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5mbzE6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbmZvMjogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGluZm8zOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5mbzQ6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBwcm9jZXNzTmFtZTogc3RyaW5nID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XHJcbiAgcHJpdmF0ZSBwcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XHJcbiAgcHJpdmF0ZSBwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxyXG4gIHByaXZhdGUgb2FpZFJlYWRpbmdFbmFibGVkOiBib29sZWFuID0gbnVsbDsgLy8gQW5kcm9pZCBvbmx5XHJcbiAgcHJpdmF0ZSBhbGxvd2lBZEluZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcclxuICBwcml2YXRlIGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxyXG4gIHByaXZhdGUgYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4gPSBudWxsOyAvLyBpT1Mgb25seVxyXG4gIHByaXZhdGUgY29wcGFDb21wbGlhbnRFbmFibGVkOiBib29sZWFuID0gbnVsbDsgXHJcbiAgcHJpdmF0ZSBwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxyXG5cclxuICBwcml2YXRlIGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRGYWlsdXJlKSA9PiB2b2lkID0gbnVsbDtcclxuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s6ICh1cmk6IHN0cmluZykgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBjb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2s6IChjb252ZXJzaW9uVmFsdWU6IG51bWJlcikgPT4gdm9pZCA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGFwcFRva2VuOiBzdHJpbmcsIGVudmlyb25tZW50OiBBZGp1c3RFbnZpcm9ubWVudCkge1xyXG4gICAgdGhpcy5hcHBUb2tlbiA9IGFwcFRva2VuO1xyXG4gICAgdGhpcy5lbnZpcm9ubWVudCA9IGVudmlyb25tZW50O1xyXG4gIH1cclxuXHJcbiAgc2V0QXBwU2VjcmV0KHNlY3JldElkOiBudW1iZXIsIGluZm8xOiBudW1iZXIsIGluZm8yOiBudW1iZXIsIGluZm8zOiBudW1iZXIsIGluZm80OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VjcmV0SWQgPSBzZWNyZXRJZDtcclxuICAgIHRoaXMuaW5mbzEgPSBpbmZvMTtcclxuICAgIHRoaXMuaW5mbzIgPSBpbmZvMjtcclxuICAgIHRoaXMuaW5mbzMgPSBpbmZvMztcclxuICAgIHRoaXMuaW5mbzQgPSBpbmZvNDtcclxuICB9XHJcblxyXG4gIHNldERlbGF5U3RhcnQoZGVsYXlTdGFydDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmRlbGF5U3RhcnQgPSBkZWxheVN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgc2V0TG9nTGV2ZWwobG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsKSB7XHJcbiAgICB0aGlzLmxvZ0xldmVsID0gbG9nTGV2ZWw7XHJcbiAgfVxyXG5cclxuICBzZXREZWZhdWx0VHJhY2tlcihkZWZhdWx0VHJhY2tlcjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRUcmFja2VyID0gZGVmYXVsdFRyYWNrZXI7XHJcbiAgfVxyXG5cclxuICBzZXRFeHRlcm5hbERldmljZUlkKGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5leHRlcm5hbERldmljZUlkID0gZXh0ZXJuYWxEZXZpY2VJZDtcclxuICB9XHJcblxyXG4gIHNldFVybFN0cmF0ZWd5KHVybFN0cmF0ZWd5OiBBZGp1c3RVcmxTdHJhdGVneSkge1xyXG4gICAgdGhpcy51cmxTdHJhdGVneSA9IHVybFN0cmF0ZWd5O1xyXG4gIH1cclxuXHJcbiAgc2V0U2VuZEluQmFja2dyb3VuZChzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNlbmRJbkJhY2tncm91bmQgPSBzZW5kSW5CYWNrZ3JvdW5kO1xyXG4gIH1cclxuXHJcbiAgc2V0U2hvdWxkTGF1bmNoRGVlcGxpbmsoc2hvdWxkTGF1bmNoRGVlcGxpbms6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuc2hvdWxkTGF1bmNoRGVlcGxpbmsgPSBzaG91bGRMYXVuY2hEZWVwbGluaztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50QnVmZmVyaW5nRW5hYmxlZChldmVudEJ1ZmZlcmluZ0VuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuZXZlbnRCdWZmZXJpbmdFbmFibGVkID0gZXZlbnRCdWZmZXJpbmdFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29wcGFDb21wbGlhbnRFbmFibGVkKGNvcHBhQ29tcGxpYW50RW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5jb3BwYUNvbXBsaWFudEVuYWJsZWQgPSBjb3BwYUNvbXBsaWFudEVuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRQbGF5U3RvcmVLaWRzQXBwRW5hYmxlZChwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5wbGF5U3RvcmVLaWRzQXBwRW5hYmxlZCA9IHBsYXlTdG9yZUtpZHNBcHBFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0VXNlckFnZW50KHVzZXJBZ2VudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnVzZXJBZ2VudCA9IHVzZXJBZ2VudDtcclxuICB9XHJcblxyXG4gIHNldERldmljZUtub3duKGlzRGV2aWNlS25vd246IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuaXNEZXZpY2VLbm93biA9IGlzRGV2aWNlS25vd247XHJcbiAgfVxyXG5cclxuICBzZXROZWVkc0Nvc3QobmVlZHNDb3N0OiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm5lZWRzQ29zdCA9IG5lZWRzQ29zdDtcclxuICB9XHJcblxyXG4gIHNldFByb2Nlc3NOYW1lKHByb2Nlc3NOYW1lOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJvY2Vzc05hbWUgPSBwcm9jZXNzTmFtZTtcclxuICB9XHJcblxyXG4gIHNldFByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQocHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5wcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkID0gcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNldFByZWluc3RhbGxGaWxlUGF0aChwcmVpbnN0YWxsRmlsZVBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcmVpbnN0YWxsRmlsZVBhdGggPSBwcmVpbnN0YWxsRmlsZVBhdGg7XHJcbiAgfVxyXG5cclxuICBzZXRPYWlkUmVhZGluZ0VuYWJsZWQoZW5hYmxlT2FpZFJlYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMub2FpZFJlYWRpbmdFbmFibGVkID0gZW5hYmxlT2FpZFJlYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxvd2lBZEluZm9SZWFkaW5nKGFsbG93aUFkSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWxsb3dpQWRJbmZvUmVhZGluZyA9IGFsbG93aUFkSW5mb1JlYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxvd0lkZmFSZWFkaW5nKGFsbG93SWRmYVJlYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWxsb3dJZGZhUmVhZGluZyA9IGFsbG93SWRmYVJlYWRpbmc7XHJcbiAgfVxyXG5cclxuICBzZXRBbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZyhhbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZzogYm9vbGVhbikge1xyXG4gICAgdGhpcy5hbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZyA9IGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QXR0cmlidXRpb25DYWxsYmFja0xpc3RlbmVyKGF0dHJpYnV0aW9uQ2FsbGJhY2s6IChhdHRyaWJ1dGlvbjogQWRqdXN0QXR0cmlidXRpb24pID0+IHZvaWQpIHtcclxuICAgIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayA9IGF0dHJpYnV0aW9uQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRTdWNjZXNzKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldEV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudEZhaWx1cmUpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrID0gZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgc2V0U2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2tMaXN0ZW5lcihcclxuICAgIHNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvblN1Y2Nlc3MpID0+IHZvaWRcclxuICApIHtcclxuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrTGlzdGVuZXIoc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChzZXNzaW9uOiBBZGp1c3RTZXNzaW9uRmFpbHVyZSkgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5zZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmZXJyZWREZWVwbGlua0NhbGxiYWNrTGlzdGVuZXIoZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrID0gZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgc2V0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrOiAoY29udmVyc2lvblZhbHVlOiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrID0gY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRBdHRyaWJ1dGlvbkNhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldERlZmVycmVkRGVlcGxpbmtDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNBdHRyaWJ1dGlvbkxpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuYXR0cmlidXRpb25DYWxsYmFjayAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ1N1Y2NlZWRlZExpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNFdmVudFRyYWNraW5nRmFpbGVkTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5ldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc1Nlc3Npb25UcmFja2luZ1N1Y2NlZWRlZExpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc1Nlc3Npb25UcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0RlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNDb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2tMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjayAhPT0gbnVsbDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbiB7XHJcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcclxuICBwcml2YXRlIHRyYW5zYWN0aW9uSWQ6IHN0cmluZztcclxuICBwcml2YXRlIHJlY2VpcHQ6IHN0cmluZztcclxuICBwcml2YXRlIHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2FsZXNSZWdpb246IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCB0cmFuc2FjdGlvbklkOiBzdHJpbmcsIHJlY2VpcHQ6IHN0cmluZykge1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcclxuICAgIHRoaXMucmVjZWlwdCA9IHJlY2VpcHQ7XHJcbiAgfVxyXG5cclxuICBzZXRUcmFuc2FjdGlvbkRhdGUodHJhbnNhY3Rpb25EYXRlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMudHJhbnNhY3Rpb25EYXRlID0gdHJhbnNhY3Rpb25EYXRlO1xyXG4gIH1cclxuXHJcbiAgc2V0U2FsZXNSZWdpb24oc2FsZXNSZWdpb246IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5zYWxlc1JlZ2lvbiA9IHNhbGVzUmVnaW9uO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbiB7XHJcbiAgcHJpdmF0ZSBwcmljZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgY3VycmVuY3k6IHN0cmluZztcclxuICBwcml2YXRlIHNrdTogc3RyaW5nO1xyXG4gIHByaXZhdGUgb3JkZXJJZDogc3RyaW5nO1xyXG4gIHByaXZhdGUgc2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwdXJjaGFzZVRpbWU6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwcmljZTogc3RyaW5nLCBjdXJyZW5jeTogc3RyaW5nLCBza3U6IHN0cmluZywgb3JkZXJJZDogc3RyaW5nLCBzaWduYXR1cmU6IHN0cmluZywgcHVyY2hhc2VUb2tlbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XHJcbiAgICB0aGlzLnNrdSA9IHNrdTtcclxuICAgIHRoaXMub3JkZXJJZCA9IG9yZGVySWQ7XHJcbiAgICB0aGlzLnNpZ25hdHVyZSA9IHNpZ25hdHVyZTtcclxuICAgIHRoaXMucHVyY2hhc2VUb2tlbiA9IHB1cmNoYXNlVG9rZW47XHJcbiAgfVxyXG5cclxuICBzZXRQdXJjaGFzZVRpbWUocHVyY2hhc2VUaW1lOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucHVyY2hhc2VUaW1lID0gcHVyY2hhc2VUaW1lO1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkanVzdFRoaXJkUGFydHlTaGFyaW5nIHtcclxuICBwcml2YXRlIGlzRW5hYmxlZDogYm9vbGVhbjtcclxuICBwcml2YXRlIGdyYW51bGFyT3B0aW9uczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoaXNFbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRW5hYmxlZCA9IGlzRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIGFkZEdyYW51bGFyT3B0aW9uKHBhcnRuZXJOYW1lOiBzdHJpbmcsIGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKHBhcnRuZXJOYW1lKTtcclxuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2goa2V5KTtcclxuICAgIHRoaXMuZ3JhbnVsYXJPcHRpb25zLnB1c2godmFsdWUpO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkanVzdEFkUmV2ZW51ZSB7XHJcbiAgcHJpdmF0ZSBzb3VyY2U6IHN0cmluZztcclxuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcclxuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhZEltcHJlc3Npb25zQ291bnQ6IG51bWJlcjtcclxuICBwcml2YXRlIGFkUmV2ZW51ZU5ldHdvcms6IHN0cmluZztcclxuICBwcml2YXRlIGFkUmV2ZW51ZVVuaXQ6IHN0cmluZztcclxuICBwcml2YXRlIGFkUmV2ZW51ZVBsYWNlbWVudDogc3RyaW5nO1xyXG4gIHByaXZhdGUgY2FsbGJhY2tQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG4gIHByaXZhdGUgcGFydG5lclBhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKHNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnNvdXJjZSA9IHNvdXJjZTtcclxuICB9XHJcblxyXG4gIHNldFJldmVudWUocmV2ZW51ZTogbnVtYmVyLCBjdXJyZW5jeTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnJldmVudWUgPSByZXZlbnVlO1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gIH1cclxuXHJcbiAgYWRkQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2goa2V5KTtcclxuICAgIHRoaXMuY2FsbGJhY2tQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgYWRkUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2godmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0QWRJbXByZXNzaW9uc0NvdW50KGFkSW1wcmVzc2lvbnNDb3VudDogbnVtYmVyKSB7XHJcbiAgICB0aGlzLmFkSW1wcmVzc2lvbnNDb3VudCA9IGFkSW1wcmVzc2lvbnNDb3VudDtcclxuICB9XHJcblxyXG4gIHNldEFkUmV2ZW51ZU5ldHdvcmsoYWRSZXZlbnVlTmV0d29yazogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkUmV2ZW51ZU5ldHdvcmsgPSBhZFJldmVudWVOZXR3b3JrO1xyXG4gIH1cclxuXHJcbiAgc2V0QWRSZXZlbnVlVW5pdChhZFJldmVudWVVbml0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRSZXZlbnVlVW5pdCA9IGFkUmV2ZW51ZVVuaXQ7XHJcbiAgfVxyXG5cclxuICBzZXRBZFJldmVudWVQbGFjZW1lbnQoYWRSZXZlbnVlUGxhY2VtZW50OiBzdHJpbmcpIHtcclxuICAgIHRoaXMuYWRSZXZlbnVlUGxhY2VtZW50ID0gYWRSZXZlbnVlUGxhY2VtZW50O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RBdHRyaWJ1dGlvbiB7XHJcbiAgdHJhY2tlclRva2VuOiBzdHJpbmc7XHJcbiAgdHJhY2tlck5hbWU6IHN0cmluZztcclxuICBuZXR3b3JrOiBzdHJpbmc7XHJcbiAgY2FtcGFpZ246IHN0cmluZztcclxuICBhZGdyb3VwOiBzdHJpbmc7XHJcbiAgY3JlYXRpdmU6IHN0cmluZztcclxuICBjbGlja0xhYmVsOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIGNvc3RUeXBlOiBzdHJpbmc7XHJcbiAgY29zdEFtb3VudDogc3RyaW5nO1xyXG4gIGNvc3RDdXJyZW5jeTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25TdWNjZXNzIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkanVzdFNlc3Npb25GYWlsdXJlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcclxuICBqc29uUmVzcG9uc2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudFN1Y2Nlc3Mge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBhZGlkOiBzdHJpbmc7XHJcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xyXG4gIGNhbGxiYWNrSWQ6IHN0cmluZztcclxuICBqc29uUmVzcG9uc2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RFdmVudEZhaWx1cmUge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICB0aW1lc3RhbXA6IHN0cmluZztcclxuICBhZGlkOiBzdHJpbmc7XHJcbiAgZXZlbnRUb2tlbjogc3RyaW5nO1xyXG4gIHdpbGxSZXRyeTogYm9vbGVhbjtcclxuICBjYWxsYmFja0lkOiBzdHJpbmc7XHJcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFkanVzdEVudmlyb25tZW50IHtcclxuICBTYW5kYm94ID0gJ3NhbmRib3gnLFxyXG4gIFByb2R1Y3Rpb24gPSAncHJvZHVjdGlvbicsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFkanVzdExvZ0xldmVsIHtcclxuICBWZXJib3NlID0gJ1ZFUkJPU0UnLFxyXG4gIERlYnVnID0gJ0RFQlVHJyxcclxuICBJbmZvID0gJ0lORk8nLFxyXG4gIFdhcm4gPSAnV0FSTicsXHJcbiAgRXJyb3IgPSAnRVJST1InLFxyXG4gIEFzc2VydCA9ICdBU1NFUlQnLFxyXG4gIFN1cHByZXNzID0gJ1NVUFBSRVNTJyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQWRqdXN0VXJsU3RyYXRlZ3kge1xyXG4gIEluZGlhID0gJ2luZGlhJyxcclxuICBDaGluYSA9ICdjaGluYScsXHJcbiAgRGF0YVJlc2lkZW5jeUVVID0gJ2RhdGEtcmVzaWRlbmN5LWV1JyxcclxuICBEYXRhUmVzaWRlbmN5VFIgPSAnZGF0YS1yZXNpZGVuY3ktdHInLFxyXG4gIERhdGFSZXNpZGVuY3lVUyA9ICdkYXRhLXJlc2lkZW5jeS11cycsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFkanVzdEFkUmV2ZW51ZVNvdXJjZSB7XHJcbiAgQWRSZXZlbnVlU291cmNlQXBwTG92aW5NQVggPSAnYXBwbG92aW5fbWF4X3NkaycsXHJcbiAgQWRSZXZlbnVlU291cmNlTW9wdWIgPSAnbW9wdWInLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZUFkTW9iID0gJ2FkbW9iX3NkaycsXHJcbiAgQWRSZXZlbnVlU291cmNlSXJvblNvdXJjZSA9ICdpcm9uc291cmNlX3NkaycsXHJcbiAgQWRSZXZlbnVlU291cmNlQWRNb3N0ID0gXCJhZG1vc3Rfc2RrXCIsXHJcbiAgQWRSZXZlbnVlU291cmNlVW5pdHkgPSBcInVuaXR5X3Nka1wiLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZUhlbGl1bUNoYXJ0Ym9vc3QgPSBcImhlbGl1bV9jaGFydGJvb3N0X3Nka1wiLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZVB1Ymxpc2hlciA9IFwicHVibGlzaGVyX3Nka1wiLFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQWRqdXN0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIGlzIHRoZSBJb25pYyBDb3Jkb3ZhIFNESyBvZiBBZGp1c3TihKIuIFlvdSBjYW4gcmVhZCBtb3JlIGFib3V0IEFkanVzdOKEoiBhdCBhZGp1c3QuY29tLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvbS5hZGp1c3Quc2RrYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0FkanVzdCBDb3Jkb3ZhIFNES10oaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaylcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIGltcG9ydCB7IEFkanVzdCwgQWRqdXN0Q29uZmlnLCBBZGp1c3RFbnZpcm9ubWVudCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hZGp1c3Qvbmd4JztcclxuICpcclxuICogIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRqdXN0OiBBZGp1c3QpIHsgfVxyXG4gKlxyXG4gKiAgLi4uXHJcbiAqXHJcbiAqICBjb25zdCBjb25maWcgPSBuZXcgQWRqdXN0Q29uZmlnKCdBUFAtVE9LRU4tSEVSRScsIEFkanVzdEVudmlyb25tZW50LlNhbmRib3gpO1xyXG4gKiAgY29uZmlnLmxvZ0xldmVsID0gQWRqdXN0TG9nTGV2ZWwuVmVyYm9zZTtcclxuICogIC8vIFNldCBvdGhlciBjb25maWcgcHJvcGVydGllcy5cclxuICogIGFkanVzdC5jcmVhdGUoY29uZmlnKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEFkanVzdEF0dHJpYnV0aW9uXHJcbiAqIEFkanVzdFNlc3Npb25TdWNjZXNzXHJcbiAqIEFkanVzdFNlc3Npb25GYWlsdXJlXHJcbiAqIEFkanVzdEV2ZW50U3VjY2Vzc1xyXG4gKiBBZGp1c3RFdmVudEZhaWx1cmVcclxuICogQGNsYXNzZXNcclxuICogQWRqdXN0RXZlbnRcclxuICogQWRqdXN0Q29uZmlnXHJcbiAqIEFkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9uXHJcbiAqIEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvblxyXG4gKiBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZ1xyXG4gKiBBZGp1c3RBZFJlZW51ZVxyXG4gKiBAZW51bXNcclxuICogQWRqdXN0RW52aXJvbm1lbnRcclxuICogQWRqdXN0TG9nTGV2ZWxcclxuICogQWRqdXN0VXJsU3RyYXRlZ3lcclxuICogQWRqdXN0QWRSZXZlbnVlU291cmNlXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQWRqdXN0JyxcclxuICBwbHVnaW46ICdjb20uYWRqdXN0LnNkaycsXHJcbiAgcGx1Z2luUmVmOiAnQWRqdXN0JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FkanVzdC9jb3Jkb3ZhX3NkaycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFkanVzdCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgaW5pdGlhbGl6ZXMgQWRqdXN0IFNES1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBZGp1c3RDb25pZ30gY29uZmlnIEFkanVzdCBjb25maWcgb2JqZWN0IHVzZWQgYXMgc3RhcnRpbmcgb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNyZWF0ZShjb25maWc6IEFkanVzdENvbmZpZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFuIGV2ZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FkanVzdEV2ZW50fSBldmVudCBBZGp1c3QgZXZlbnQgb2JqZWN0IHRvIGJlIHRyYWNrZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0cmFja0V2ZW50KGV2ZW50OiBBZGp1c3RFdmVudCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIEFwcCBTdG9yZSBzdWJzY3JpcHRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgQXBwIFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrQXBwU3RvcmVTdWJzY3JpcHRpb24oc3Vic2NyaXB0aW9uOiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIFBsYXkgU3RvcmUgc3Vic2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbn0gc3Vic2NyaXB0aW9uIEFkanVzdCBQbGF5IFN0b3JlIHN1YnNjcmlwdGlvbiBvYmplY3QgdG8gYmUgdHJhY2tlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrUGxheVN0b3JlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogQWRqdXN0UGxheVN0b3JlU3Vic2NyaXB0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgdGhpcmQgcGFydHkgc2hhcmluZyBjaG9pY2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmd9IHRoaXJkUGFydHlTaGFyaW5nIEFkanVzdCB0aGlyZCBwYXJ0eSBzaGFyaW5nIG9iamVjdCB0byBiZSB0cmFja2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tUaGlyZFBhcnR5U2hhcmluZyh0aGlyZFBhcnR5U2hhcmluZzogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhZCByZXZlbnVlIGRhdGFcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlU291cmNlfSBzb3VyY2UgQWQgcmV2ZW51ZSBzb3VyY2VcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF5bG9hZCBBZCByZXZlbnVlIEpTT04gc3RyaW5nIHBheWxvYWRcclxuICAgKi9cclxuICB0cmFja0FkUmV2ZW51ZShzb3VyY2U6IEFkanVzdEFkUmV2ZW51ZVNvdXJjZSwgcGF5bG9hZDogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIGFkIHJldmVudWUgZGF0YVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBZGp1c3RBZFJldmVudWV9IGFkUmV2ZW51ZSBBZGp1c3QgYWQgcmV2ZW51ZSBvYmplY3RcclxuICAgKi9cclxuICB0cmFja0FkUmV2ZW51ZShhZFJldmVudWU6IEFkanVzdEFkUmV2ZW51ZSk6IHZvaWQ7XHJcblxyXG4gIC8vIEFuZCB0eXBlc2NyaXB0IGhpZGVzIHRoaXMsIHNvIHRoZSBjbGllbnQgd2lsbCBiZSBhYmxlIGNhbGwgb25seSBtZXRob2RzIGFib3ZlXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tBZFJldmVudWUoc291cmNlT3JBZFJldmVudWU6IGFueSwgcGF5bG9hZD86IGFueSk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIG1lYXN1cmVtZW50IGNvbnNlbnQgY2hvaWNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG1lYXN1cmVtZW50Q29uc2VudCBzZXQgbWVhc3VyZW1lbnQgY29uc2VudCB0byB0cnVlIG9yIGZhbHNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tNZWFzdXJlbWVudENvbnNlbnQobWVhc3VyZW1lbnRDb25zZW50OiBib29sZWFuKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBzZXRzIG9mZmxpbmUgbW9kZSBvbiBvciBvZmZcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gdHJ1ZSBmb3Igb2ZmbGluZSBtb2RlIG9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0T2ZmbGluZU1vZGUoZW5hYmxlZDogYm9vbGVhbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQnkgbWFraW5nIHRoaXMgY2FsbCwgdGhlIEFkanVzdCBTREsgd2lsbCB0cnkgdG8gZmluZCBpZiB0aGVyZSBpcyBhbnkgbmV3IGF0dHJpYnV0aW9uIGluZm8gaW5zaWRlIG9mIHRoZSBkZWVwIGxpbmsgYW5kIGlmIGFueSwgaXQgd2lsbCBiZSBzZW50IHRvIHRoZSBBZGp1c3QgYmFja2VuZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmwgVVJMIG9mIHRoZSBkZWVwbGlua1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGFwcFdpbGxPcGVuVXJsKHVybDogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgY2FuIGRpc2FibGUvZW5hYmxlIHRoZSBBZGp1c3QgU0RLIGZyb20gdHJhY2tpbmcgYnkgaW52b2tpbmcgdGhpcyBtZXRob2RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZW5hYmxlZCBzZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBTREtcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRFbmFibGVkKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIHNlbmQgdXMgdGhlIHB1c2ggbm90aWZpY2F0aW9uIHRva2VuLCBhZGQgdGhlIGZvbGxvd2luZyBjYWxsIHRvIEFkanVzdCB3aGVuZXZlciB5b3UgZ2V0IHlvdXIgdG9rZW4gaW4gdGhlIGFwcCBvciB3aGVuIGl0IGdldHMgdXBkYXRlZC5cclxuICAgKiBQdXNoIHRva2VucyBhcmUgdXNlZCBmb3IgQXVkaWVuY2UgQnVpbGRlciBhbmQgY2xpZW50IGNhbGxiYWNrcywgYW5kIHRoZXkgYXJlIHJlcXVpcmVkIGZvciB0aGUgdXBjb21pbmcgdW5pbnN0YWxsIHRyYWNraW5nIGZlYXR1cmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcHVzaFRva2VuIHB1c2ggdG9rZW4gdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRQdXNoVG9rZW4ocHVzaFRva2VuOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHRoZSBBZGp1c3QgU0RLIGlzIGN1cnJlbnRseSBlbmFibGVkIGJ5IGNhbGxpbmcgdGhpcyBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzRW5hYmxlZCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluIGFjY29yZGFuY2Ugd2l0aCBhcnRpY2xlIDE3IG9mIHRoZSBFVSdzIEdlbmVyYWwgRGF0YSBQcm90ZWN0aW9uIFJlZ3VsYXRpb24gKEdEUFIpLCB5b3UgY2FuIG5vdGlmeSBBZGp1c3Qgd2hlbiBhIHVzZXIgaGFzIGV4ZXJjaXNlZCB0aGVpciByaWdodCB0byBiZSBmb3Jnb3R0ZW4uXHJcbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGJlIGZvcmdvdHRlbiB0byB0aGUgQWRqdXN0IGJhY2tlbmRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBnZHByRm9yZ2V0TWUoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgY2FuIG5vdyBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gc3RvcCBzaGFyaW5nIHRoZWlyIGRhdGEgd2l0aCBwYXJ0bmVycyBmb3IgbWFya2V0aW5nIHB1cnBvc2VzLCBidXQgaGFzIGFsbG93ZWQgaXQgdG8gYmUgc2hhcmVkIGZvciBzdGF0aXN0aWNzIHB1cnBvc2VzLiBcclxuICAgKiBDYWxsaW5nIHRoZSBmb2xsb3dpbmcgbWV0aG9kIHdpbGwgaW5zdHJ1Y3QgdGhlIEFkanVzdCBTREsgdG8gY29tbXVuaWNhdGUgdGhlIHVzZXIncyBjaG9pY2UgdG8gZGlzYWJsZSBkYXRhIHNoYXJpbmcgdG8gdGhlIEFkanVzdCBiYWNrZW5kXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGlzYWJsZVRoaXJkUGFydHlTaGFyaW5nKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdXNlZCB0byBnZXQgR29vZ2xlIEFkSWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggZ29vZ2xlIEFkSWQgdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0R29vZ2xlQWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgeW91IG5lZWQgdG8gb2J0YWluIHRoZSBBbWF6b24gQWR2ZXJ0aXNpbmcgSUQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYW5hemliIGFkdi4gSURcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QW1hem9uQWRJZCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gb2J0YWluIHRoZSBJREZBLCBjYWxsIHRoaXMgZnVuY3Rpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggSURGQSBzdHJpbmcgdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SWRmYSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRm9yIGV2ZXJ5IGRldmljZSB3aXRoIHlvdXIgYXBwIGluc3RhbGxlZCBvbiBpdCwgdGhlIEFkanVzdCBiYWNrZW5kIGdlbmVyYXRlcyBhIHVuaXF1ZSBBZGp1c3QgZGV2aWNlIGlkZW50aWZpZXIgKGFkaWQpLlxyXG4gICAqIEluIG9yZGVyIHRvIG9idGFpbiB0aGlzIGlkZW50aWZpZXIsIGNhbGwgdGhpcyBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhZGlkIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFkaWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluc3RydWN0IHRvIEFkanVzdCBTREsgdG8gY2hlY2sgY3VycmVudCBzdGF0ZSBvZiBhdHRfc3RhdHVzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2hlY2tGb3JOZXdBdHRTdGF0dXMoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJZiB5b3Ugd2FudCB0byBhY2Nlc3MgaW5mb3JtYXRpb24gYWJvdXQgYSB1c2VyJ3MgY3VycmVudCBhdHRyaWJ1dGlvbiB3aGVuZXZlciB5b3UgbmVlZCBpdCwgeW91IGNhbiBtYWtlIGEgY2FsbCB0byB0aGlzIGZ1bmN0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxBZGp1c3RBdHRyaWJ1dGlvbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggQWRqdXN0QXR0cmlidXRpb24gb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEF0dHJpYnV0aW9uKCk6IFByb21pc2U8QWRqdXN0QXR0cmlidXRpb24+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgdmVyc2lvbiBvZiB0aGUgU0RLIHVzZWRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggc2RrIHZlcnNpb24gaW5mb3JtYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0U2RrVmVyc2lvbigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWV0aG9kIHVzZWQgdG8gYWRkIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGtleSBrZXlcclxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhZGRTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVyIGJ5IHBhc3NpbmcgdGhlIGRlc2lyaW5nIGtleSB0byB0aGlzIG1ldGhvZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGtleSBrZXlcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICByZW1vdmVTZXNzaW9uQ2FsbGJhY2tQYXJhbWV0ZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGFsbCBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgc2Vzc2lvbiBjYWxsYmFjayBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlc2V0U2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVycygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCB1c2VkIHRvIGFkZCBzZXNzaW9uIHBhcnRuZXIgcGFyYW1ldGVyc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGtleSBrZXlcclxuICAgKiBAcGFyYW0gdmFsdWUgdmFsdWVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhZGRTZXNzaW9uUGFydG5lclBhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgc3BlY2lmaWMgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBrZXkga2V5XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVtb3ZlU2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGFsbCBrZXlzIGFuZCB2YWx1ZXMgZnJvbSB0aGUgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlcnMgaGF2ZSB0byBiZSByZW1vdmVkLCBjYWxsIHRoaXMgbWV0aG9kXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVzZXRTZXNzaW9uUGFydG5lclBhcmFtZXRlcnMoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCBjYWxsIHdpbGwgbWFrZSB0aGUgQWRqdXN0IFNESyBzZW5kIHRoZSBpbml0aWFsIGluc3RhbGwgc2Vzc2lvbiBhbmQgYW55IGV2ZW50cyBjcmVhdGVkLCBpZiB0aGV5IHdlcmUgbm90IHNlbnQgYWZ0ZXIgZGVsYXkgc3RhcnQgd2FzIHNldCBhbmQgaXQncyBkZWxheSBleHBpcmVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNlbmRGaXJzdFBhY2thZ2VzKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCBBZGp1c3QgU0RLIHRvIHNob3cgcG9wIHVwIGRpYWxvZyBmb3IgYXNraW5nIHVzZXIncyBjb25zZW50IHRvIGJlIHRyYWNrZWQuXHJcbiAgICogSW4gb3JkZXIgdG8gZG8gdGhpcywgY2FsbCB0aGlzIGZ1bmN0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHVzZXIncyBjb25zZW50IHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RUcmFja2luZ0F1dGhvcml6YXRpb25XaXRoQ29tcGxldGlvbkhhbmRsZXIoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFlvdSBjYW4gdXBkYXRlIFNLQWROZXR3b3JrIGNvbnZlcnNpb24gdmFsdWUgd2l0aCBjYWxsaW5nIHRoaXMgbWV0aG9kXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gY29udmVyc2lvblZhbHVlIGNvbnZlcnNpb24gdmFsdWUgZm9yIHRoZSB1c2VyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdXBkYXRlQ29udmVyc2lvblZhbHVlKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUbyBvYnRhaW4gdGhlIGFwcCB0cmFja2luZyBhdXRob3JpemF0aW9uIHN0YXR1cyBpbiBpT1MsIGNhbGwgdGhpcyBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QXBwVHJhY2tpbmdBdXRob3JpemF0aW9uU3RhdHVzKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59Il19