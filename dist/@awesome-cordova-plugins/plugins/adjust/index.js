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
var AdjustOriginal = /** @class */ (function (_super) {
    __extends(AdjustOriginal, _super);
    function AdjustOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AdjustOriginal.prototype.create = function (config) { return cordova(this, "create", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackEvent = function (event) { return cordova(this, "trackEvent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAppStoreSubscription = function (subscription) { return cordova(this, "trackAppStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackPlayStoreSubscription = function (subscription) { return cordova(this, "trackPlayStoreSubscription", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackThirdPartySharing = function (thirdPartySharing) { return cordova(this, "trackThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackAdRevenue = function (sourceOrAdRevenue, payload) { return cordova(this, "trackAdRevenue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.trackMeasurementConsent = function (measurementConsent) { return cordova(this, "trackMeasurementConsent", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setOfflineMode = function (enabled) { return cordova(this, "setOfflineMode", { "sync": true }, arguments); };
    AdjustOriginal.prototype.appWillOpenUrl = function (url) { return cordova(this, "appWillOpenUrl", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setEnabled = function (enabled) { return cordova(this, "setEnabled", { "sync": true }, arguments); };
    AdjustOriginal.prototype.setPushToken = function (pushToken) { return cordova(this, "setPushToken", { "sync": true }, arguments); };
    AdjustOriginal.prototype.isEnabled = function () { return cordova(this, "isEnabled", {}, arguments); };
    AdjustOriginal.prototype.gdprForgetMe = function () { return cordova(this, "gdprForgetMe", { "sync": true }, arguments); };
    AdjustOriginal.prototype.disableThirdPartySharing = function () { return cordova(this, "disableThirdPartySharing", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getGoogleAdId = function () { return cordova(this, "getGoogleAdId", {}, arguments); };
    AdjustOriginal.prototype.getAmazonAdId = function () { return cordova(this, "getAmazonAdId", {}, arguments); };
    AdjustOriginal.prototype.getIdfa = function () { return cordova(this, "getIdfa", {}, arguments); };
    AdjustOriginal.prototype.getAdid = function () { return cordova(this, "getAdid", {}, arguments); };
    AdjustOriginal.prototype.checkForNewAttStatus = function () { return cordova(this, "checkForNewAttStatus", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAttribution = function () { return cordova(this, "getAttribution", {}, arguments); };
    AdjustOriginal.prototype.getSdkVersion = function () { return cordova(this, "getSdkVersion", {}, arguments); };
    AdjustOriginal.prototype.addSessionCallbackParameter = function (key, value) { return cordova(this, "addSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionCallbackParameter = function (key) { return cordova(this, "removeSessionCallbackParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionCallbackParameters = function () { return cordova(this, "resetSessionCallbackParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.addSessionPartnerParameter = function (key, value) { return cordova(this, "addSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.removeSessionPartnerParameter = function (key) { return cordova(this, "removeSessionPartnerParameter", { "sync": true }, arguments); };
    AdjustOriginal.prototype.resetSessionPartnerParameters = function () { return cordova(this, "resetSessionPartnerParameters", { "sync": true }, arguments); };
    AdjustOriginal.prototype.sendFirstPackages = function () { return cordova(this, "sendFirstPackages", { "sync": true }, arguments); };
    AdjustOriginal.prototype.requestTrackingAuthorizationWithCompletionHandler = function () { return cordova(this, "requestTrackingAuthorizationWithCompletionHandler", {}, arguments); };
    AdjustOriginal.prototype.updateConversionValue = function (conversionValue) { return cordova(this, "updateConversionValue", { "sync": true }, arguments); };
    AdjustOriginal.prototype.getAppTrackingAuthorizationStatus = function () { return cordova(this, "getAppTrackingAuthorizationStatus", {}, arguments); };
    AdjustOriginal.pluginName = "Adjust";
    AdjustOriginal.plugin = "com.adjust.sdk";
    AdjustOriginal.pluginRef = "Adjust";
    AdjustOriginal.repo = "https://github.com/adjust/cordova_sdk";
    AdjustOriginal.platforms = ["Android", "iOS"];
    return AdjustOriginal;
}(AwesomeCordovaNativePlugin));
var Adjust = new AdjustOriginal();
export { Adjust };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWRqdXN0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVcxRixxQkFBWSxVQUFrQjtRQUh0Qix1QkFBa0IsR0FBYSxFQUFFLENBQUM7UUFDbEMsc0JBQWlCLEdBQWEsRUFBRSxDQUFDO1FBR3ZDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7SUFFRCxnQ0FBVSxHQUFWLFVBQVcsT0FBZSxFQUFFLFFBQWdCO1FBQzFDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDO0lBQzNCLENBQUM7SUFFRCwwQ0FBb0IsR0FBcEIsVUFBcUIsR0FBVyxFQUFFLEtBQWE7UUFDN0MsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCx5Q0FBbUIsR0FBbkIsVUFBb0IsR0FBVyxFQUFFLEtBQWE7UUFDNUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsYUFBcUI7UUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDckMsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxVQUFrQjtRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUMvQixDQUFD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LDZCQUFZLGFBQUMsU0FBaUI7SUFROUIsMEJBQVM7SUFTVCw2QkFBWTtJQU9aLHlDQUF3QjtJQVF4Qiw4QkFBYTtJQVViLDhCQUFhO0lBVWIsd0JBQU87SUFXUCx3QkFBTztJQVFQLHFDQUFvQjtJQVFwQiwrQkFBYztJQVVkLDhCQUFhO0lBV2IsNENBQTJCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFRdEQsK0NBQThCLGFBQUMsR0FBVztJQU0xQywrQ0FBOEI7SUFTOUIsMkNBQTBCLGFBQUMsR0FBVyxFQUFFLEtBQWE7SUFRckQsOENBQTZCLGFBQUMsR0FBVztJQU16Qyw4Q0FBNkI7SUFNN0Isa0NBQWlCO0lBU2pCLGtFQUFpRDtJQVVqRCxzQ0FBcUIsYUFBQyxlQUF1QjtJQVE3QyxrREFBaUM7Ozs7OztpQkF2eEJuQztFQXlnQjRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFkanVzdEV2ZW50IHtcclxuICBwcml2YXRlIGV2ZW50VG9rZW46IHN0cmluZztcclxuICBwcml2YXRlIHJldmVudWU6IG51bWJlcjtcclxuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYWxsYmFja0lkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoZXZlbnRUb2tlbjogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmV2ZW50VG9rZW4gPSBldmVudFRva2VuO1xyXG4gIH1cclxuXHJcbiAgc2V0UmV2ZW51ZShyZXZlbnVlOiBudW1iZXIsIGN1cnJlbmN5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucmV2ZW51ZSA9IHJldmVudWU7XHJcbiAgICB0aGlzLmN1cnJlbmN5ID0gY3VycmVuY3k7XHJcbiAgfVxyXG5cclxuICBhZGRDYWxsYmFja1BhcmFtZXRlcihrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaChrZXkpO1xyXG4gICAgdGhpcy5jYWxsYmFja1BhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBhZGRQYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnBhcnRuZXJQYXJhbWV0ZXJzLnB1c2goa2V5KTtcclxuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBzZXRUcmFuc2FjdGlvbklkKHRyYW5zYWN0aW9uSWQ6IHN0cmluZykge1xyXG4gICAgdGhpcy50cmFuc2FjdGlvbklkID0gdHJhbnNhY3Rpb25JZDtcclxuICB9XHJcblxyXG4gIHNldENhbGxiYWNrSWQoY2FsbGJhY2tJZDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmNhbGxiYWNrSWQgPSBjYWxsYmFja0lkO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEFkanVzdENvbmZpZyB7XHJcbiAgcHJpdmF0ZSBhcHBUb2tlbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgZW52aXJvbm1lbnQ6IEFkanVzdEVudmlyb25tZW50O1xyXG4gIHByaXZhdGUgc2RrUHJlZml4OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBkZWxheVN0YXJ0ID0gMC4wO1xyXG4gIHByaXZhdGUgbG9nTGV2ZWw6IEFkanVzdExvZ0xldmVsID0gbnVsbDtcclxuICBwcml2YXRlIGRlZmF1bHRUcmFja2VyOiBzdHJpbmcgPSBudWxsO1xyXG4gIHByaXZhdGUgdXJsU3RyYXRlZ3k6IEFkanVzdFVybFN0cmF0ZWd5ID0gbnVsbDtcclxuICBwcml2YXRlIGV4dGVybmFsRGV2aWNlSWQ6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzZW5kSW5CYWNrZ3JvdW5kOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIGV2ZW50QnVmZmVyaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7XHJcbiAgcHJpdmF0ZSB1c2VyQWdlbnQ6IHN0cmluZyA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpc0RldmljZUtub3duOiBib29sZWFuID0gbnVsbDtcclxuICBwcml2YXRlIG5lZWRzQ29zdDogYm9vbGVhbiA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzZWNyZXRJZDogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGluZm8xOiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgaW5mbzI6IG51bWJlciA9IG51bGw7XHJcbiAgcHJpdmF0ZSBpbmZvMzogbnVtYmVyID0gbnVsbDtcclxuICBwcml2YXRlIGluZm80OiBudW1iZXIgPSBudWxsO1xyXG4gIHByaXZhdGUgcHJvY2Vzc05hbWU6IHN0cmluZyA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxyXG4gIHByaXZhdGUgcHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxyXG4gIHByaXZhdGUgcHJlaW5zdGFsbEZpbGVQYXRoOiBzdHJpbmcgPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcclxuICBwcml2YXRlIG9haWRSZWFkaW5nRW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IC8vIEFuZHJvaWQgb25seVxyXG4gIHByaXZhdGUgYWxsb3dpQWRJbmZvUmVhZGluZzogYm9vbGVhbiA9IG51bGw7IC8vIGlPUyBvbmx5XHJcbiAgcHJpdmF0ZSBhbGxvd0lkZmFSZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcclxuICBwcml2YXRlIGFsbG93QWRTZXJ2aWNlc0luZm9SZWFkaW5nOiBib29sZWFuID0gbnVsbDsgLy8gaU9TIG9ubHlcclxuICBwcml2YXRlIGNvcHBhQ29tcGxpYW50RW5hYmxlZDogYm9vbGVhbiA9IG51bGw7IFxyXG4gIHByaXZhdGUgcGxheVN0b3JlS2lkc0FwcEVuYWJsZWQ6IGJvb2xlYW4gPSBudWxsOyAvLyBBbmRyb2lkIG9ubHlcclxuXHJcbiAgcHJpdmF0ZSBhdHRyaWJ1dGlvbkNhbGxiYWNrOiAoYXR0cmlidXRpb246IEFkanVzdEF0dHJpYnV0aW9uKSA9PiB2b2lkID0gbnVsbDtcclxuICBwcml2YXRlIGV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKGV2ZW50OiBBZGp1c3RFdmVudFN1Y2Nlc3MpID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50RmFpbHVyZSkgPT4gdm9pZCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25TdWNjZXNzKSA9PiB2b2lkID0gbnVsbDtcclxuICBwcml2YXRlIHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgZGVmZXJyZWREZWVwbGlua0NhbGxiYWNrOiAodXJpOiBzdHJpbmcpID0+IHZvaWQgPSBudWxsO1xyXG4gIHByaXZhdGUgY29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrOiAoY29udmVyc2lvblZhbHVlOiBudW1iZXIpID0+IHZvaWQgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3RvcihhcHBUb2tlbjogc3RyaW5nLCBlbnZpcm9ubWVudDogQWRqdXN0RW52aXJvbm1lbnQpIHtcclxuICAgIHRoaXMuYXBwVG9rZW4gPSBhcHBUb2tlbjtcclxuICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnZpcm9ubWVudDtcclxuICB9XHJcblxyXG4gIHNldEFwcFNlY3JldChzZWNyZXRJZDogbnVtYmVyLCBpbmZvMTogbnVtYmVyLCBpbmZvMjogbnVtYmVyLCBpbmZvMzogbnVtYmVyLCBpbmZvNDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlY3JldElkID0gc2VjcmV0SWQ7XHJcbiAgICB0aGlzLmluZm8xID0gaW5mbzE7XHJcbiAgICB0aGlzLmluZm8yID0gaW5mbzI7XHJcbiAgICB0aGlzLmluZm8zID0gaW5mbzM7XHJcbiAgICB0aGlzLmluZm80ID0gaW5mbzQ7XHJcbiAgfVxyXG5cclxuICBzZXREZWxheVN0YXJ0KGRlbGF5U3RhcnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5kZWxheVN0YXJ0ID0gZGVsYXlTdGFydDtcclxuICB9XHJcblxyXG4gIHNldExvZ0xldmVsKGxvZ0xldmVsOiBBZGp1c3RMb2dMZXZlbCkge1xyXG4gICAgdGhpcy5sb2dMZXZlbCA9IGxvZ0xldmVsO1xyXG4gIH1cclxuXHJcbiAgc2V0RGVmYXVsdFRyYWNrZXIoZGVmYXVsdFRyYWNrZXI6IHN0cmluZykge1xyXG4gICAgdGhpcy5kZWZhdWx0VHJhY2tlciA9IGRlZmF1bHRUcmFja2VyO1xyXG4gIH1cclxuXHJcbiAgc2V0RXh0ZXJuYWxEZXZpY2VJZChleHRlcm5hbERldmljZUlkOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuZXh0ZXJuYWxEZXZpY2VJZCA9IGV4dGVybmFsRGV2aWNlSWQ7XHJcbiAgfVxyXG5cclxuICBzZXRVcmxTdHJhdGVneSh1cmxTdHJhdGVneTogQWRqdXN0VXJsU3RyYXRlZ3kpIHtcclxuICAgIHRoaXMudXJsU3RyYXRlZ3kgPSB1cmxTdHJhdGVneTtcclxuICB9XHJcblxyXG4gIHNldFNlbmRJbkJhY2tncm91bmQoc2VuZEluQmFja2dyb3VuZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zZW5kSW5CYWNrZ3JvdW5kID0gc2VuZEluQmFja2dyb3VuZDtcclxuICB9XHJcblxyXG4gIHNldFNob3VsZExhdW5jaERlZXBsaW5rKHNob3VsZExhdW5jaERlZXBsaW5rOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLnNob3VsZExhdW5jaERlZXBsaW5rID0gc2hvdWxkTGF1bmNoRGVlcGxpbms7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudEJ1ZmZlcmluZ0VuYWJsZWQoZXZlbnRCdWZmZXJpbmdFbmFibGVkOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmV2ZW50QnVmZmVyaW5nRW5hYmxlZCA9IGV2ZW50QnVmZmVyaW5nRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNldENvcHBhQ29tcGxpYW50RW5hYmxlZChjb3BwYUNvbXBsaWFudEVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuY29wcGFDb21wbGlhbnRFbmFibGVkID0gY29wcGFDb21wbGlhbnRFbmFibGVkO1xyXG4gIH1cclxuXHJcbiAgc2V0UGxheVN0b3JlS2lkc0FwcEVuYWJsZWQocGxheVN0b3JlS2lkc0FwcEVuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMucGxheVN0b3JlS2lkc0FwcEVuYWJsZWQgPSBwbGF5U3RvcmVLaWRzQXBwRW5hYmxlZDtcclxuICB9XHJcblxyXG4gIHNldFVzZXJBZ2VudCh1c2VyQWdlbnQ6IHN0cmluZykge1xyXG4gICAgdGhpcy51c2VyQWdlbnQgPSB1c2VyQWdlbnQ7XHJcbiAgfVxyXG5cclxuICBzZXREZXZpY2VLbm93bihpc0RldmljZUtub3duOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmlzRGV2aWNlS25vd24gPSBpc0RldmljZUtub3duO1xyXG4gIH1cclxuXHJcbiAgc2V0TmVlZHNDb3N0KG5lZWRzQ29zdDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5uZWVkc0Nvc3QgPSBuZWVkc0Nvc3Q7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9jZXNzTmFtZShwcm9jZXNzTmFtZTogc3RyaW5nKSB7XHJcbiAgICB0aGlzLnByb2Nlc3NOYW1lID0gcHJvY2Vzc05hbWU7XHJcbiAgfVxyXG5cclxuICBzZXRQcmVpbnN0YWxsVHJhY2tpbmdFbmFibGVkKHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMucHJlaW5zdGFsbFRyYWNraW5nRW5hYmxlZCA9IHByZWluc3RhbGxUcmFja2luZ0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBzZXRQcmVpbnN0YWxsRmlsZVBhdGgocHJlaW5zdGFsbEZpbGVQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJlaW5zdGFsbEZpbGVQYXRoID0gcHJlaW5zdGFsbEZpbGVQYXRoO1xyXG4gIH1cclxuXHJcbiAgc2V0T2FpZFJlYWRpbmdFbmFibGVkKGVuYWJsZU9haWRSZWFkaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLm9haWRSZWFkaW5nRW5hYmxlZCA9IGVuYWJsZU9haWRSZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsb3dpQWRJbmZvUmVhZGluZyhhbGxvd2lBZEluZm9SZWFkaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFsbG93aUFkSW5mb1JlYWRpbmcgPSBhbGxvd2lBZEluZm9SZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsb3dJZGZhUmVhZGluZyhhbGxvd0lkZmFSZWFkaW5nOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmFsbG93SWRmYVJlYWRpbmcgPSBhbGxvd0lkZmFSZWFkaW5nO1xyXG4gIH1cclxuXHJcbiAgc2V0QWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcoYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmc6IGJvb2xlYW4pIHtcclxuICAgIHRoaXMuYWxsb3dBZFNlcnZpY2VzSW5mb1JlYWRpbmcgPSBhbGxvd0FkU2VydmljZXNJbmZvUmVhZGluZztcclxuICB9XHJcblxyXG4gIHNldEF0dHJpYnV0aW9uQ2FsbGJhY2tMaXN0ZW5lcihhdHRyaWJ1dGlvbkNhbGxiYWNrOiAoYXR0cmlidXRpb246IEFkanVzdEF0dHJpYnV0aW9uKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgPSBhdHRyaWJ1dGlvbkNhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgc2V0RXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoZXZlbnRUcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrOiAoZXZlbnQ6IEFkanVzdEV2ZW50U3VjY2VzcykgPT4gdm9pZCkge1xyXG4gICAgdGhpcy5ldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2sgPSBldmVudFRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBzZXRFdmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2tMaXN0ZW5lcihldmVudFRyYWNraW5nRmFpbGVkQ2FsbGJhY2s6IChldmVudDogQWRqdXN0RXZlbnRGYWlsdXJlKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjayA9IGV2ZW50VHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldFNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrTGlzdGVuZXIoXHJcbiAgICBzZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjazogKHNlc3Npb246IEFkanVzdFNlc3Npb25TdWNjZXNzKSA9PiB2b2lkXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrID0gc2Vzc2lvblRyYWNraW5nU3VjY2VlZGVkQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBzZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFja0xpc3RlbmVyKHNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrOiAoc2Vzc2lvbjogQWRqdXN0U2Vzc2lvbkZhaWx1cmUpID0+IHZvaWQpIHtcclxuICAgIHRoaXMuc2Vzc2lvblRyYWNraW5nRmFpbGVkQ2FsbGJhY2sgPSBzZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldERlZmVycmVkRGVlcGxpbmtDYWxsYmFja0xpc3RlbmVyKGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjazogKHVyaTogc3RyaW5nKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayA9IGRlZmVycmVkRGVlcGxpbmtDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHNldENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFja0xpc3RlbmVyKGNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjazogKGNvbnZlcnNpb25WYWx1ZTogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjayA9IGNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0QXR0cmlidXRpb25DYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0RXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTZXNzaW9uVHJhY2tpbmdGYWlsZWRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXREZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2soKSB7XHJcbiAgICByZXR1cm4gdGhpcy5kZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2s7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldENvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaygpIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnZlcnNpb25WYWx1ZVVwZGF0ZWRDYWxsYmFjaztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQXR0cmlidXRpb25MaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmF0dHJpYnV0aW9uQ2FsbGJhY2sgIT09IG51bGw7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhc0V2ZW50VHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmV2ZW50VHJhY2tpbmdTdWNjZWVkZWRDYWxsYmFjayAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzRXZlbnRUcmFja2luZ0ZhaWxlZExpc3RlbmVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuZXZlbnRUcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdTdWNjZWVkZWRMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ1N1Y2NlZWRlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNTZXNzaW9uVHJhY2tpbmdGYWlsZWRMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLnNlc3Npb25UcmFja2luZ0ZhaWxlZENhbGxiYWNrICE9PSBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYXNEZWZlcnJlZERlZXBsaW5rQ2FsbGJhY2tMaXN0ZW5lcigpIHtcclxuICAgIHJldHVybiB0aGlzLmRlZmVycmVkRGVlcGxpbmtDYWxsYmFjayAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFzQ29udmVyc2lvblZhbHVlVXBkYXRlZENhbGxiYWNrTGlzdGVuZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jb252ZXJzaW9uVmFsdWVVcGRhdGVkQ2FsbGJhY2sgIT09IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb24ge1xyXG4gIHByaXZhdGUgcHJpY2U6IHN0cmluZztcclxuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbklkOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZWNlaXB0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSB0cmFuc2FjdGlvbkRhdGU6IHN0cmluZztcclxuICBwcml2YXRlIHNhbGVzUmVnaW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgdHJhbnNhY3Rpb25JZDogc3RyaW5nLCByZWNlaXB0OiBzdHJpbmcpIHtcclxuICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICAgIHRoaXMudHJhbnNhY3Rpb25JZCA9IHRyYW5zYWN0aW9uSWQ7XHJcbiAgICB0aGlzLnJlY2VpcHQgPSByZWNlaXB0O1xyXG4gIH1cclxuXHJcbiAgc2V0VHJhbnNhY3Rpb25EYXRlKHRyYW5zYWN0aW9uRGF0ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnRyYW5zYWN0aW9uRGF0ZSA9IHRyYW5zYWN0aW9uRGF0ZTtcclxuICB9XHJcblxyXG4gIHNldFNhbGVzUmVnaW9uKHNhbGVzUmVnaW9uOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2FsZXNSZWdpb24gPSBzYWxlc1JlZ2lvbjtcclxuICB9XHJcblxyXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb24ge1xyXG4gIHByaXZhdGUgcHJpY2U6IHN0cmluZztcclxuICBwcml2YXRlIGN1cnJlbmN5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBza3U6IHN0cmluZztcclxuICBwcml2YXRlIG9yZGVySWQ6IHN0cmluZztcclxuICBwcml2YXRlIHNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIHByaXZhdGUgcHVyY2hhc2VUb2tlbjogc3RyaW5nO1xyXG4gIHByaXZhdGUgcHVyY2hhc2VUaW1lOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjYWxsYmFja1BhcmFtZXRlcnM6IHN0cmluZ1tdID0gW107XHJcbiAgcHJpdmF0ZSBwYXJ0bmVyUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpY2U6IHN0cmluZywgY3VycmVuY3k6IHN0cmluZywgc2t1OiBzdHJpbmcsIG9yZGVySWQ6IHN0cmluZywgc2lnbmF0dXJlOiBzdHJpbmcsIHB1cmNoYXNlVG9rZW46IHN0cmluZykge1xyXG4gICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgdGhpcy5jdXJyZW5jeSA9IGN1cnJlbmN5O1xyXG4gICAgdGhpcy5za3UgPSBza3U7XHJcbiAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xyXG4gICAgdGhpcy5zaWduYXR1cmUgPSBzaWduYXR1cmU7XHJcbiAgICB0aGlzLnB1cmNoYXNlVG9rZW4gPSBwdXJjaGFzZVRva2VuO1xyXG4gIH1cclxuXHJcbiAgc2V0UHVyY2hhc2VUaW1lKHB1cmNoYXNlVGltZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLnB1cmNoYXNlVGltZSA9IHB1cmNoYXNlVGltZTtcclxuICB9XHJcblxyXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGp1c3RUaGlyZFBhcnR5U2hhcmluZyB7XHJcbiAgcHJpdmF0ZSBpc0VuYWJsZWQ6IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBncmFudWxhck9wdGlvbnM6IHN0cmluZ1tdID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKGlzRW5hYmxlZDogYm9vbGVhbikge1xyXG4gICAgdGhpcy5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XHJcbiAgfVxyXG5cclxuICBhZGRHcmFudWxhck9wdGlvbihwYXJ0bmVyTmFtZTogc3RyaW5nLCBrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5ncmFudWxhck9wdGlvbnMucHVzaChwYXJ0bmVyTmFtZSk7XHJcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLmdyYW51bGFyT3B0aW9ucy5wdXNoKHZhbHVlKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBBZGp1c3RBZFJldmVudWUge1xyXG4gIHByaXZhdGUgc291cmNlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSByZXZlbnVlOiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBjdXJyZW5jeTogc3RyaW5nO1xyXG4gIHByaXZhdGUgYWRJbXByZXNzaW9uc0NvdW50OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBhZFJldmVudWVOZXR3b3JrOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhZFJldmVudWVVbml0OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBhZFJldmVudWVQbGFjZW1lbnQ6IHN0cmluZztcclxuICBwcml2YXRlIGNhbGxiYWNrUGFyYW1ldGVyczogc3RyaW5nW10gPSBbXTtcclxuICBwcml2YXRlIHBhcnRuZXJQYXJhbWV0ZXJzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihzb3VyY2U6IHN0cmluZykge1xyXG4gICAgdGhpcy5zb3VyY2UgPSBzb3VyY2U7XHJcbiAgfVxyXG5cclxuICBzZXRSZXZlbnVlKHJldmVudWU6IG51bWJlciwgY3VycmVuY3k6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5yZXZlbnVlID0gcmV2ZW51ZTtcclxuICAgIHRoaXMuY3VycmVuY3kgPSBjdXJyZW5jeTtcclxuICB9XHJcblxyXG4gIGFkZENhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKGtleSk7XHJcbiAgICB0aGlzLmNhbGxiYWNrUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIGFkZFBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMucGFydG5lclBhcmFtZXRlcnMucHVzaChrZXkpO1xyXG4gICAgdGhpcy5wYXJ0bmVyUGFyYW1ldGVycy5wdXNoKHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldEFkSW1wcmVzc2lvbnNDb3VudChhZEltcHJlc3Npb25zQ291bnQ6IG51bWJlcikge1xyXG4gICAgdGhpcy5hZEltcHJlc3Npb25zQ291bnQgPSBhZEltcHJlc3Npb25zQ291bnQ7XHJcbiAgfVxyXG5cclxuICBzZXRBZFJldmVudWVOZXR3b3JrKGFkUmV2ZW51ZU5ldHdvcms6IHN0cmluZykge1xyXG4gICAgdGhpcy5hZFJldmVudWVOZXR3b3JrID0gYWRSZXZlbnVlTmV0d29yaztcclxuICB9XHJcblxyXG4gIHNldEFkUmV2ZW51ZVVuaXQoYWRSZXZlbnVlVW5pdDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkUmV2ZW51ZVVuaXQgPSBhZFJldmVudWVVbml0O1xyXG4gIH1cclxuXHJcbiAgc2V0QWRSZXZlbnVlUGxhY2VtZW50KGFkUmV2ZW51ZVBsYWNlbWVudDogc3RyaW5nKSB7XHJcbiAgICB0aGlzLmFkUmV2ZW51ZVBsYWNlbWVudCA9IGFkUmV2ZW51ZVBsYWNlbWVudDtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0QXR0cmlidXRpb24ge1xyXG4gIHRyYWNrZXJUb2tlbjogc3RyaW5nO1xyXG4gIHRyYWNrZXJOYW1lOiBzdHJpbmc7XHJcbiAgbmV0d29yazogc3RyaW5nO1xyXG4gIGNhbXBhaWduOiBzdHJpbmc7XHJcbiAgYWRncm91cDogc3RyaW5nO1xyXG4gIGNyZWF0aXZlOiBzdHJpbmc7XHJcbiAgY2xpY2tMYWJlbDogc3RyaW5nO1xyXG4gIGFkaWQ6IHN0cmluZztcclxuICBjb3N0VHlwZTogc3RyaW5nO1xyXG4gIGNvc3RBbW91bnQ6IHN0cmluZztcclxuICBjb3N0Q3VycmVuY3k6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uU3VjY2VzcyB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nO1xyXG4gIGFkaWQ6IHN0cmluZztcclxuICBqc29uUmVzcG9uc2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZGp1c3RTZXNzaW9uRmFpbHVyZSB7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogc3RyaW5nO1xyXG4gIGFkaWQ6IHN0cmluZztcclxuICB3aWxsUmV0cnk6IGJvb2xlYW47XHJcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0RXZlbnRTdWNjZXNzIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIGV2ZW50VG9rZW46IHN0cmluZztcclxuICBjYWxsYmFja0lkOiBzdHJpbmc7XHJcbiAganNvblJlc3BvbnNlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWRqdXN0RXZlbnRGYWlsdXJlIHtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbiAgdGltZXN0YW1wOiBzdHJpbmc7XHJcbiAgYWRpZDogc3RyaW5nO1xyXG4gIGV2ZW50VG9rZW46IHN0cmluZztcclxuICB3aWxsUmV0cnk6IGJvb2xlYW47XHJcbiAgY2FsbGJhY2tJZDogc3RyaW5nO1xyXG4gIGpzb25SZXNwb25zZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBBZGp1c3RFbnZpcm9ubWVudCB7XHJcbiAgU2FuZGJveCA9ICdzYW5kYm94JyxcclxuICBQcm9kdWN0aW9uID0gJ3Byb2R1Y3Rpb24nLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBZGp1c3RMb2dMZXZlbCB7XHJcbiAgVmVyYm9zZSA9ICdWRVJCT1NFJyxcclxuICBEZWJ1ZyA9ICdERUJVRycsXHJcbiAgSW5mbyA9ICdJTkZPJyxcclxuICBXYXJuID0gJ1dBUk4nLFxyXG4gIEVycm9yID0gJ0VSUk9SJyxcclxuICBBc3NlcnQgPSAnQVNTRVJUJyxcclxuICBTdXBwcmVzcyA9ICdTVVBQUkVTUycsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEFkanVzdFVybFN0cmF0ZWd5IHtcclxuICBJbmRpYSA9ICdpbmRpYScsXHJcbiAgQ2hpbmEgPSAnY2hpbmEnLFxyXG4gIERhdGFSZXNpZGVuY3lFVSA9ICdkYXRhLXJlc2lkZW5jeS1ldScsXHJcbiAgRGF0YVJlc2lkZW5jeVRSID0gJ2RhdGEtcmVzaWRlbmN5LXRyJyxcclxuICBEYXRhUmVzaWRlbmN5VVMgPSAnZGF0YS1yZXNpZGVuY3ktdXMnLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBBZGp1c3RBZFJldmVudWVTb3VyY2Uge1xyXG4gIEFkUmV2ZW51ZVNvdXJjZUFwcExvdmluTUFYID0gJ2FwcGxvdmluX21heF9zZGsnLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZU1vcHViID0gJ21vcHViJyxcclxuICBBZFJldmVudWVTb3VyY2VBZE1vYiA9ICdhZG1vYl9zZGsnLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZUlyb25Tb3VyY2UgPSAnaXJvbnNvdXJjZV9zZGsnLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZUFkTW9zdCA9IFwiYWRtb3N0X3Nka1wiLFxyXG4gIEFkUmV2ZW51ZVNvdXJjZVVuaXR5ID0gXCJ1bml0eV9zZGtcIixcclxuICBBZFJldmVudWVTb3VyY2VIZWxpdW1DaGFydGJvb3N0ID0gXCJoZWxpdW1fY2hhcnRib29zdF9zZGtcIixcclxuICBBZFJldmVudWVTb3VyY2VQdWJsaXNoZXIgPSBcInB1Ymxpc2hlcl9zZGtcIixcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFkanVzdFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBpcyB0aGUgSW9uaWMgQ29yZG92YSBTREsgb2YgQWRqdXN04oSiLiBZb3UgY2FuIHJlYWQgbW9yZSBhYm91dCBBZGp1c3TihKIgYXQgYWRqdXN0LmNvbS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb20uYWRqdXN0LnNka2AuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBZGp1c3QgQ29yZG92YSBTREtdKGh0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGspXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICBpbXBvcnQgeyBBZGp1c3QsIEFkanVzdENvbmZpZywgQWRqdXN0RW52aXJvbm1lbnQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWRqdXN0L25neCc7XHJcbiAqXHJcbiAqICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFkanVzdDogQWRqdXN0KSB7IH1cclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiAgY29uc3QgY29uZmlnID0gbmV3IEFkanVzdENvbmZpZygnQVBQLVRPS0VOLUhFUkUnLCBBZGp1c3RFbnZpcm9ubWVudC5TYW5kYm94KTtcclxuICogIGNvbmZpZy5sb2dMZXZlbCA9IEFkanVzdExvZ0xldmVsLlZlcmJvc2U7XHJcbiAqICAvLyBTZXQgb3RoZXIgY29uZmlnIHByb3BlcnRpZXMuXHJcbiAqICBhZGp1c3QuY3JlYXRlKGNvbmZpZyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBBZGp1c3RBdHRyaWJ1dGlvblxyXG4gKiBBZGp1c3RTZXNzaW9uU3VjY2Vzc1xyXG4gKiBBZGp1c3RTZXNzaW9uRmFpbHVyZVxyXG4gKiBBZGp1c3RFdmVudFN1Y2Nlc3NcclxuICogQWRqdXN0RXZlbnRGYWlsdXJlXHJcbiAqIEBjbGFzc2VzXHJcbiAqIEFkanVzdEV2ZW50XHJcbiAqIEFkanVzdENvbmZpZ1xyXG4gKiBBZGp1c3RBcHBTdG9yZVN1YnNjcmlwdGlvblxyXG4gKiBBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb25cclxuICogQWRqdXN0VGhpcmRQYXJ0eVNoYXJpbmdcclxuICogQWRqdXN0QWRSZWVudWVcclxuICogQGVudW1zXHJcbiAqIEFkanVzdEVudmlyb25tZW50XHJcbiAqIEFkanVzdExvZ0xldmVsXHJcbiAqIEFkanVzdFVybFN0cmF0ZWd5XHJcbiAqIEFkanVzdEFkUmV2ZW51ZVNvdXJjZVxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FkanVzdCcsXHJcbiAgcGx1Z2luOiAnY29tLmFkanVzdC5zZGsnLFxyXG4gIHBsdWdpblJlZjogJ0FkanVzdCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hZGp1c3QvY29yZG92YV9zZGsnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBZGp1c3QgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIGluaXRpYWxpemVzIEFkanVzdCBTREtcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QWRqdXN0Q29uaWd9IGNvbmZpZyBBZGp1c3QgY29uZmlnIG9iamVjdCB1c2VkIGFzIHN0YXJ0aW5nIG9wdGlvbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjcmVhdGUoY29uZmlnOiBBZGp1c3RDb25maWcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhbiBldmVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBZGp1c3RFdmVudH0gZXZlbnQgQWRqdXN0IGV2ZW50IG9iamVjdCB0byBiZSB0cmFja2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdHJhY2tFdmVudChldmVudDogQWRqdXN0RXZlbnQpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBBcHAgU3RvcmUgc3Vic2NyaXB0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FkanVzdEFwcFN0b3JlU3Vic2NyaXB0aW9ufSBzdWJzY3JpcHRpb24gQWRqdXN0IEFwcCBTdG9yZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHRyYWNrZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0cmFja0FwcFN0b3JlU3Vic2NyaXB0aW9uKHN1YnNjcmlwdGlvbjogQWRqdXN0QXBwU3RvcmVTdWJzY3JpcHRpb24pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBQbGF5IFN0b3JlIHN1YnNjcmlwdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBZGp1c3RQbGF5U3RvcmVTdWJzY3JpcHRpb259IHN1YnNjcmlwdGlvbiBBZGp1c3QgUGxheSBTdG9yZSBzdWJzY3JpcHRpb24gb2JqZWN0IHRvIGJlIHRyYWNrZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0cmFja1BsYXlTdG9yZVN1YnNjcmlwdGlvbihzdWJzY3JpcHRpb246IEFkanVzdFBsYXlTdG9yZVN1YnNjcmlwdGlvbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgdHJhY2tzIHRoaXJkIHBhcnR5IHNoYXJpbmcgY2hvaWNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FkanVzdFRoaXJkUGFydHlTaGFyaW5nfSB0aGlyZFBhcnR5U2hhcmluZyBBZGp1c3QgdGhpcmQgcGFydHkgc2hhcmluZyBvYmplY3QgdG8gYmUgdHJhY2tlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrVGhpcmRQYXJ0eVNoYXJpbmcodGhpcmRQYXJ0eVNoYXJpbmc6IEFkanVzdFRoaXJkUGFydHlTaGFyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZCB0cmFja3MgYWQgcmV2ZW51ZSBkYXRhXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0FkanVzdEFkUmV2ZW51ZVNvdXJjZX0gc291cmNlIEFkIHJldmVudWUgc291cmNlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBheWxvYWQgQWQgcmV2ZW51ZSBKU09OIHN0cmluZyBwYXlsb2FkXHJcbiAgICovXHJcbiAgdHJhY2tBZFJldmVudWUoc291cmNlOiBBZGp1c3RBZFJldmVudWVTb3VyY2UsIHBheWxvYWQ6IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBhZCByZXZlbnVlIGRhdGFcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QWRqdXN0QWRSZXZlbnVlfSBhZFJldmVudWUgQWRqdXN0IGFkIHJldmVudWUgb2JqZWN0XHJcbiAgICovXHJcbiAgdHJhY2tBZFJldmVudWUoYWRSZXZlbnVlOiBBZGp1c3RBZFJldmVudWUpOiB2b2lkO1xyXG5cclxuICAvLyBBbmQgdHlwZXNjcmlwdCBoaWRlcyB0aGlzLCBzbyB0aGUgY2xpZW50IHdpbGwgYmUgYWJsZSBjYWxsIG9ubHkgbWV0aG9kcyBhYm92ZVxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrQWRSZXZlbnVlKHNvdXJjZU9yQWRSZXZlbnVlOiBhbnksIHBheWxvYWQ/OiBhbnkpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgbWV0aG9kIHRyYWNrcyBtZWFzdXJlbWVudCBjb25zZW50IGNob2ljZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBtZWFzdXJlbWVudENvbnNlbnQgc2V0IG1lYXN1cmVtZW50IGNvbnNlbnQgdG8gdHJ1ZSBvciBmYWxzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYWNrTWVhc3VyZW1lbnRDb25zZW50KG1lYXN1cmVtZW50Q29uc2VudDogYm9vbGVhbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2Qgc2V0cyBvZmZsaW5lIG1vZGUgb24gb3Igb2ZmXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIHRydWUgZm9yIG9mZmxpbmUgbW9kZSBvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldE9mZmxpbmVNb2RlKGVuYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJ5IG1ha2luZyB0aGlzIGNhbGwsIHRoZSBBZGp1c3QgU0RLIHdpbGwgdHJ5IHRvIGZpbmQgaWYgdGhlcmUgaXMgYW55IG5ldyBhdHRyaWJ1dGlvbiBpbmZvIGluc2lkZSBvZiB0aGUgZGVlcCBsaW5rIGFuZCBpZiBhbnksIGl0IHdpbGwgYmUgc2VudCB0byB0aGUgQWRqdXN0IGJhY2tlbmQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFVSTCBvZiB0aGUgZGVlcGxpbmtcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhcHBXaWxsT3BlblVybCh1cmw6IHN0cmluZyk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogWW91IGNhbiBkaXNhYmxlL2VuYWJsZSB0aGUgQWRqdXN0IFNESyBmcm9tIHRyYWNraW5nIGJ5IGludm9raW5nIHRoaXMgbWV0aG9kXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgc2V0IHRvIGZhbHNlIHRvIGRpc2FibGUgU0RLXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0RW5hYmxlZChlbmFibGVkOiBib29sZWFuKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUbyBzZW5kIHVzIHRoZSBwdXNoIG5vdGlmaWNhdGlvbiB0b2tlbiwgYWRkIHRoZSBmb2xsb3dpbmcgY2FsbCB0byBBZGp1c3Qgd2hlbmV2ZXIgeW91IGdldCB5b3VyIHRva2VuIGluIHRoZSBhcHAgb3Igd2hlbiBpdCBnZXRzIHVwZGF0ZWQuXHJcbiAgICogUHVzaCB0b2tlbnMgYXJlIHVzZWQgZm9yIEF1ZGllbmNlIEJ1aWxkZXIgYW5kIGNsaWVudCBjYWxsYmFja3MsIGFuZCB0aGV5IGFyZSByZXF1aXJlZCBmb3IgdGhlIHVwY29taW5nIHVuaW5zdGFsbCB0cmFja2luZyBmZWF0dXJlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHB1c2hUb2tlbiBwdXNoIHRva2VuIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0UHVzaFRva2VuKHB1c2hUb2tlbjogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgQWRqdXN0IFNESyBpcyBjdXJyZW50bHkgZW5hYmxlZCBieSBjYWxsaW5nIHRoaXMgZnVuY3Rpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0VuYWJsZWQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbiBhY2NvcmRhbmNlIHdpdGggYXJ0aWNsZSAxNyBvZiB0aGUgRVUncyBHZW5lcmFsIERhdGEgUHJvdGVjdGlvbiBSZWd1bGF0aW9uIChHRFBSKSwgeW91IGNhbiBub3RpZnkgQWRqdXN0IHdoZW4gYSB1c2VyIGhhcyBleGVyY2lzZWQgdGhlaXIgcmlnaHQgdG8gYmUgZm9yZ290dGVuLlxyXG4gICAqIENhbGxpbmcgdGhlIGZvbGxvd2luZyBtZXRob2Qgd2lsbCBpbnN0cnVjdCB0aGUgQWRqdXN0IFNESyB0byBjb21tdW5pY2F0ZSB0aGUgdXNlcidzIGNob2ljZSB0byBiZSBmb3Jnb3R0ZW4gdG8gdGhlIEFkanVzdCBiYWNrZW5kXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2RwckZvcmdldE1lKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogWW91IGNhbiBub3cgbm90aWZ5IEFkanVzdCB3aGVuIGEgdXNlciBoYXMgZXhlcmNpc2VkIHRoZWlyIHJpZ2h0IHRvIHN0b3Agc2hhcmluZyB0aGVpciBkYXRhIHdpdGggcGFydG5lcnMgZm9yIG1hcmtldGluZyBwdXJwb3NlcywgYnV0IGhhcyBhbGxvd2VkIGl0IHRvIGJlIHNoYXJlZCBmb3Igc3RhdGlzdGljcyBwdXJwb3Nlcy4gXHJcbiAgICogQ2FsbGluZyB0aGUgZm9sbG93aW5nIG1ldGhvZCB3aWxsIGluc3RydWN0IHRoZSBBZGp1c3QgU0RLIHRvIGNvbW11bmljYXRlIHRoZSB1c2VyJ3MgY2hvaWNlIHRvIGRpc2FibGUgZGF0YSBzaGFyaW5nIHRvIHRoZSBBZGp1c3QgYmFja2VuZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGRpc2FibGVUaGlyZFBhcnR5U2hhcmluZygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHVzZWQgdG8gZ2V0IEdvb2dsZSBBZElkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGdvb2dsZSBBZElkIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEdvb2dsZUFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHlvdSBuZWVkIHRvIG9idGFpbiB0aGUgQW1hem9uIEFkdmVydGlzaW5nIElELCB5b3UgY2FuIG1ha2UgYSBjYWxsIHRvIHRoaXMgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGFuYXppYiBhZHYuIElEXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFtYXpvbkFkSWQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRvIG9idGFpbiB0aGUgSURGQSwgY2FsbCB0aGlzIGZ1bmN0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIElERkEgc3RyaW5nIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldElkZmEoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZvciBldmVyeSBkZXZpY2Ugd2l0aCB5b3VyIGFwcCBpbnN0YWxsZWQgb24gaXQsIHRoZSBBZGp1c3QgYmFja2VuZCBnZW5lcmF0ZXMgYSB1bmlxdWUgQWRqdXN0IGRldmljZSBpZGVudGlmaWVyIChhZGlkKS5cclxuICAgKiBJbiBvcmRlciB0byBvYnRhaW4gdGhpcyBpZGVudGlmaWVyLCBjYWxsIHRoaXMgZnVuY3Rpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYWRpZCB2YWx1ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBZGlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbnN0cnVjdCB0byBBZGp1c3QgU0RLIHRvIGNoZWNrIGN1cnJlbnQgc3RhdGUgb2YgYXR0X3N0YXR1c1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNoZWNrRm9yTmV3QXR0U3RhdHVzKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgeW91IHdhbnQgdG8gYWNjZXNzIGluZm9ybWF0aW9uIGFib3V0IGEgdXNlcidzIGN1cnJlbnQgYXR0cmlidXRpb24gd2hlbmV2ZXIgeW91IG5lZWQgaXQsIHlvdSBjYW4gbWFrZSBhIGNhbGwgdG8gdGhpcyBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QWRqdXN0QXR0cmlidXRpb24+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIEFkanVzdEF0dHJpYnV0aW9uIG9iamVjdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBdHRyaWJ1dGlvbigpOiBQcm9taXNlPEFkanVzdEF0dHJpYnV0aW9uPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGluZm9ybWF0aW9uIGFib3V0IHZlcnNpb24gb2YgdGhlIFNESyB1c2VkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHNkayB2ZXJzaW9uIGluZm9ybWF0aW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFNka1ZlcnNpb24oKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1ldGhvZCB1c2VkIHRvIGFkZCBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBrZXkga2V5XHJcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYWRkU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBzcGVjaWZpYyBzZXNzaW9uIGNhbGxiYWNrIHBhcmFtZXRlciBieSBwYXNzaW5nIHRoZSBkZXNpcmluZyBrZXkgdG8gdGhpcyBtZXRob2RcclxuICAgKlxyXG4gICAqIEBwYXJhbSBrZXkga2V5XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVtb3ZlU2Vzc2lvbkNhbGxiYWNrUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gY2FsbGJhY2sgcGFyYW1ldGVycyBoYXZlIHRvIGJlIHJlbW92ZWQsIGNhbGwgdGhpcyBtZXRob2RcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICByZXNldFNlc3Npb25DYWxsYmFja1BhcmFtZXRlcnMoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBNZXRob2QgdXNlZCB0byBhZGQgc2Vzc2lvbiBwYXJ0bmVyIHBhcmFtZXRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBrZXkga2V5XHJcbiAgICogQHBhcmFtIHZhbHVlIHZhbHVlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYWRkU2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXIoa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBhIHNwZWNpZmljIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXIgYnkgcGFzc2luZyB0aGUgZGVzaXJpbmcga2V5IHRvIHRoaXMgbWV0aG9kXHJcbiAgICpcclxuICAgKiBAcGFyYW0ga2V5IGtleVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlbW92ZVNlc3Npb25QYXJ0bmVyUGFyYW1ldGVyKGtleTogc3RyaW5nKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJZiBhbGwga2V5cyBhbmQgdmFsdWVzIGZyb20gdGhlIHNlc3Npb24gcGFydG5lciBwYXJhbWV0ZXJzIGhhdmUgdG8gYmUgcmVtb3ZlZCwgY2FsbCB0aGlzIG1ldGhvZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlc2V0U2Vzc2lvblBhcnRuZXJQYXJhbWV0ZXJzKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2QgY2FsbCB3aWxsIG1ha2UgdGhlIEFkanVzdCBTREsgc2VuZCB0aGUgaW5pdGlhbCBpbnN0YWxsIHNlc3Npb24gYW5kIGFueSBldmVudHMgY3JlYXRlZCwgaWYgdGhleSB3ZXJlIG5vdCBzZW50IGFmdGVyIGRlbGF5IHN0YXJ0IHdhcyBzZXQgYW5kIGl0J3MgZGVsYXkgZXhwaXJlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZW5kRmlyc3RQYWNrYWdlcygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgQWRqdXN0IFNESyB0byBzaG93IHBvcCB1cCBkaWFsb2cgZm9yIGFza2luZyB1c2VyJ3MgY29uc2VudCB0byBiZSB0cmFja2VkLlxyXG4gICAqIEluIG9yZGVyIHRvIGRvIHRoaXMsIGNhbGwgdGhpcyBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB1c2VyJ3MgY29uc2VudCB2YWx1ZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXF1ZXN0VHJhY2tpbmdBdXRob3JpemF0aW9uV2l0aENvbXBsZXRpb25IYW5kbGVyKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgY2FuIHVwZGF0ZSBTS0FkTmV0d29yayBjb252ZXJzaW9uIHZhbHVlIHdpdGggY2FsbGluZyB0aGlzIG1ldGhvZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGNvbnZlcnNpb25WYWx1ZSBjb252ZXJzaW9uIHZhbHVlIGZvciB0aGUgdXNlclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHVwZGF0ZUNvbnZlcnNpb25WYWx1ZShjb252ZXJzaW9uVmFsdWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVG8gb2J0YWluIHRoZSBhcHAgdHJhY2tpbmcgYXV0aG9yaXphdGlvbiBzdGF0dXMgaW4gaU9TLCBjYWxsIHRoaXMgZnVuY3Rpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggYXBwIHRyYWNraW5nIGF1dGhvcml6YXRpb24gc3RhdHVzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEFwcFRyYWNraW5nQXV0aG9yaXphdGlvblN0YXR1cygpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufSJdfQ==