import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class AdjustEvent {
    private eventToken;
    private revenue;
    private currency;
    private transactionId;
    private callbackId;
    private callbackParameters;
    private partnerParameters;
    constructor(eventToken: string);
    setRevenue(revenue: number, currency: string): void;
    addCallbackParameter(key: string, value: string): void;
    addPartnerParameter(key: string, value: string): void;
    setTransactionId(transactionId: string): void;
    setCallbackId(callbackId: string): void;
}
export declare class AdjustConfig {
    private appToken;
    private environment;
    private sdkPrefix;
    private delayStart;
    private logLevel;
    private defaultTracker;
    private urlStrategy;
    private externalDeviceId;
    private sendInBackground;
    private shouldLaunchDeeplink;
    private eventBufferingEnabled;
    private userAgent;
    private isDeviceKnown;
    private needsCost;
    private secretId;
    private info1;
    private info2;
    private info3;
    private info4;
    private processName;
    private preinstallTrackingEnabled;
    private preinstallFilePath;
    private oaidReadingEnabled;
    private allowiAdInfoReading;
    private allowIdfaReading;
    private allowAdServicesInfoReading;
    private coppaCompliantEnabled;
    private playStoreKidsAppEnabled;
    private attributionCallback;
    private eventTrackingSucceededCallback;
    private eventTrackingFailedCallback;
    private sessionTrackingSucceededCallback;
    private sessionTrackingFailedCallback;
    private deferredDeeplinkCallback;
    private conversionValueUpdatedCallback;
    constructor(appToken: string, environment: AdjustEnvironment);
    setAppSecret(secretId: number, info1: number, info2: number, info3: number, info4: number): void;
    setDelayStart(delayStart: number): void;
    setLogLevel(logLevel: AdjustLogLevel): void;
    setDefaultTracker(defaultTracker: string): void;
    setExternalDeviceId(externalDeviceId: string): void;
    setUrlStrategy(urlStrategy: AdjustUrlStrategy): void;
    setSendInBackground(sendInBackground: boolean): void;
    setShouldLaunchDeeplink(shouldLaunchDeeplink: boolean): void;
    setEventBufferingEnabled(eventBufferingEnabled: boolean): void;
    setCoppaCompliantEnabled(coppaCompliantEnabled: boolean): void;
    setPlayStoreKidsAppEnabled(playStoreKidsAppEnabled: boolean): void;
    setUserAgent(userAgent: string): void;
    setDeviceKnown(isDeviceKnown: boolean): void;
    setNeedsCost(needsCost: boolean): void;
    setProcessName(processName: string): void;
    setPreinstallTrackingEnabled(preinstallTrackingEnabled: boolean): void;
    setPreinstallFilePath(preinstallFilePath: string): void;
    setOaidReadingEnabled(enableOaidReading: boolean): void;
    setAllowiAdInfoReading(allowiAdInfoReading: boolean): void;
    setAllowIdfaReading(allowIdfaReading: boolean): void;
    setAllowAdServicesInfoReading(allowAdServicesInfoReading: boolean): void;
    setAttributionCallbackListener(attributionCallback: (attribution: AdjustAttribution) => void): void;
    setEventTrackingSucceededCallbackListener(eventTrackingSucceededCallback: (event: AdjustEventSuccess) => void): void;
    setEventTrackingFailedCallbackListener(eventTrackingFailedCallback: (event: AdjustEventFailure) => void): void;
    setSessionTrackingSucceededCallbackListener(sessionTrackingSucceededCallback: (session: AdjustSessionSuccess) => void): void;
    setSessionTrackingFailedCallbackListener(sessionTrackingFailedCallback: (session: AdjustSessionFailure) => void): void;
    setDeferredDeeplinkCallbackListener(deferredDeeplinkCallback: (uri: string) => void): void;
    setConversionValueUpdatedCallbackListener(conversionValueUpdatedCallback: (conversionValue: number) => void): void;
    private getAttributionCallback;
    private getEventTrackingSucceededCallback;
    private getEventTrackingFailedCallback;
    private getSessionTrackingSucceededCallback;
    private getSessionTrackingFailedCallback;
    private getDeferredDeeplinkCallback;
    private getConversionValueUpdatedCallback;
    private hasAttributionListener;
    private hasEventTrackingSucceededListener;
    private hasEventTrackingFailedListener;
    private hasSessionTrackingSucceededListener;
    private hasSessionTrackingFailedListener;
    private hasDeferredDeeplinkCallbackListener;
    private hasConversionValueUpdatedCallbackListener;
}
export declare class AdjustAppStoreSubscription {
    private price;
    private currency;
    private transactionId;
    private receipt;
    private transactionDate;
    private salesRegion;
    private callbackParameters;
    private partnerParameters;
    constructor(price: string, currency: string, transactionId: string, receipt: string);
    setTransactionDate(transactionDate: string): void;
    setSalesRegion(salesRegion: string): void;
    addCallbackParameter(key: string, value: string): void;
    addPartnerParameter(key: string, value: string): void;
}
export declare class AdjustPlayStoreSubscription {
    private price;
    private currency;
    private sku;
    private orderId;
    private signature;
    private purchaseToken;
    private purchaseTime;
    private callbackParameters;
    private partnerParameters;
    constructor(price: string, currency: string, sku: string, orderId: string, signature: string, purchaseToken: string);
    setPurchaseTime(purchaseTime: string): void;
    addCallbackParameter(key: string, value: string): void;
    addPartnerParameter(key: string, value: string): void;
}
export declare class AdjustThirdPartySharing {
    private isEnabled;
    private granularOptions;
    constructor(isEnabled: boolean);
    addGranularOption(partnerName: string, key: string, value: string): void;
}
export declare class AdjustAdRevenue {
    private source;
    private revenue;
    private currency;
    private adImpressionsCount;
    private adRevenueNetwork;
    private adRevenueUnit;
    private adRevenuePlacement;
    private callbackParameters;
    private partnerParameters;
    constructor(source: string);
    setRevenue(revenue: number, currency: string): void;
    addCallbackParameter(key: string, value: string): void;
    addPartnerParameter(key: string, value: string): void;
    setAdImpressionsCount(adImpressionsCount: number): void;
    setAdRevenueNetwork(adRevenueNetwork: string): void;
    setAdRevenueUnit(adRevenueUnit: string): void;
    setAdRevenuePlacement(adRevenuePlacement: string): void;
}
export interface AdjustAttribution {
    trackerToken: string;
    trackerName: string;
    network: string;
    campaign: string;
    adgroup: string;
    creative: string;
    clickLabel: string;
    adid: string;
    costType: string;
    costAmount: string;
    costCurrency: string;
}
export interface AdjustSessionSuccess {
    message: string;
    timestamp: string;
    adid: string;
    jsonResponse: string;
}
export interface AdjustSessionFailure {
    message: string;
    timestamp: string;
    adid: string;
    willRetry: boolean;
    jsonResponse: string;
}
export interface AdjustEventSuccess {
    message: string;
    timestamp: string;
    adid: string;
    eventToken: string;
    callbackId: string;
    jsonResponse: string;
}
export interface AdjustEventFailure {
    message: string;
    timestamp: string;
    adid: string;
    eventToken: string;
    willRetry: boolean;
    callbackId: string;
    jsonResponse: string;
}
export declare enum AdjustEnvironment {
    Sandbox = "sandbox",
    Production = "production"
}
export declare enum AdjustLogLevel {
    Verbose = "VERBOSE",
    Debug = "DEBUG",
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Assert = "ASSERT",
    Suppress = "SUPPRESS"
}
export declare enum AdjustUrlStrategy {
    India = "india",
    China = "china",
    DataResidencyEU = "data-residency-eu",
    DataResidencyTR = "data-residency-tr",
    DataResidencyUS = "data-residency-us"
}
export declare enum AdjustAdRevenueSource {
    AdRevenueSourceAppLovinMAX = "applovin_max_sdk",
    AdRevenueSourceMopub = "mopub",
    AdRevenueSourceAdMob = "admob_sdk",
    AdRevenueSourceIronSource = "ironsource_sdk",
    AdRevenueSourceAdMost = "admost_sdk",
    AdRevenueSourceUnity = "unity_sdk",
    AdRevenueSourceHeliumChartboost = "helium_chartboost_sdk",
    AdRevenueSourcePublisher = "publisher_sdk"
}
/**
 * @name Adjust
 * @description
 * This is the Ionic Cordova SDK of Adjust™. You can read more about Adjust™ at adjust.com.
 *
 * Requires Cordova plugin: `com.adjust.sdk`. For more info, please see the [Adjust Cordova SDK](https://github.com/adjust/cordova_sdk)
 *
 * @usage
 * ```typescript
 *  import { Adjust, AdjustConfig, AdjustEnvironment } from '@awesome-cordova-plugins/adjust/ngx';
 *
 *  constructor(private adjust: Adjust) { }
 *
 *  ...
 *
 *  const config = new AdjustConfig('APP-TOKEN-HERE', AdjustEnvironment.Sandbox);
 *  config.logLevel = AdjustLogLevel.Verbose;
 *  // Set other config properties.
 *  adjust.create(config);
 *
 * ```
 * @interfaces
 * AdjustAttribution
 * AdjustSessionSuccess
 * AdjustSessionFailure
 * AdjustEventSuccess
 * AdjustEventFailure
 * @classes
 * AdjustEvent
 * AdjustConfig
 * AdjustAppStoreSubscription
 * AdjustPlayStoreSubscription
 * AdjustThirdPartySharing
 * AdjustAdReenue
 * @enums
 * AdjustEnvironment
 * AdjustLogLevel
 * AdjustUrlStrategy
 * AdjustAdRevenueSource
 */
export declare class Adjust extends AwesomeCordovaNativePlugin {
    /**
     * This method initializes Adjust SDK
     *
     * @param {AdjustConig} config Adjust config object used as starting options
     */
    create(config: AdjustConfig): void;
    /**
     * This method tracks an event
     *
     * @param {AdjustEvent} event Adjust event object to be tracked
     */
    trackEvent(event: AdjustEvent): void;
    /**
     * This method tracks App Store subscription
     *
     * @param {AdjustAppStoreSubscription} subscription Adjust App Store subscription object to be tracked
     */
    trackAppStoreSubscription(subscription: AdjustAppStoreSubscription): void;
    /**
     * This method tracks Play Store subscription
     *
     * @param {AdjustPlayStoreSubscription} subscription Adjust Play Store subscription object to be tracked
     */
    trackPlayStoreSubscription(subscription: AdjustPlayStoreSubscription): void;
    /**
     * This method tracks third party sharing choice
     *
     * @param {AdjustThirdPartySharing} thirdPartySharing Adjust third party sharing object to be tracked
     */
    trackThirdPartySharing(thirdPartySharing: AdjustThirdPartySharing): void;
    /**
     * This method tracks ad revenue data
     *
     * @param {AdjustAdRevenueSource} source Ad revenue source
     * @param {string} payload Ad revenue JSON string payload
     */
    trackAdRevenue(source: AdjustAdRevenueSource, payload: string): void;
    /**
     * This method tracks ad revenue data
     *
     * @param {AdjustAdRevenue} adRevenue Adjust ad revenue object
     */
    trackAdRevenue(adRevenue: AdjustAdRevenue): void;
    /**
     * This method tracks measurement consent choice
     *
     * @param {boolean} measurementConsent set measurement consent to true or false
     */
    trackMeasurementConsent(measurementConsent: boolean): void;
    /**
     * This method sets offline mode on or off
     *
     * @param {boolean} enabled set to true for offline mode on
     */
    setOfflineMode(enabled: boolean): void;
    /**
     * By making this call, the Adjust SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Adjust backend.
     *
     * @param {string} url URL of the deeplink
     */
    appWillOpenUrl(url: string): void;
    /**
     * You can disable/enable the Adjust SDK from tracking by invoking this method
     *
     * @param {boolean} enabled set to false to disable SDK
     */
    setEnabled(enabled: boolean): void;
    /**
     * To send us the push notification token, add the following call to Adjust whenever you get your token in the app or when it gets updated.
     * Push tokens are used for Audience Builder and client callbacks, and they are required for the upcoming uninstall tracking feature.
     *
     * @param {string} pushToken push token value
     */
    setPushToken(pushToken: string): void;
    /**
     * Check if the Adjust SDK is currently enabled by calling this function
     *
     * @returns {Promise<boolean>}
     */
    isEnabled(): Promise<boolean>;
    /**
     * In accordance with article 17 of the EU's General Data Protection Regulation (GDPR), you can notify Adjust when a user has exercised their right to be forgotten.
     * Calling the following method will instruct the Adjust SDK to communicate the user's choice to be forgotten to the Adjust backend
     */
    gdprForgetMe(): void;
    /**
     * You can now notify Adjust when a user has exercised their right to stop sharing their data with partners for marketing purposes, but has allowed it to be shared for statistics purposes.
     * Calling the following method will instruct the Adjust SDK to communicate the user's choice to disable data sharing to the Adjust backend
     */
    disableThirdPartySharing(): void;
    /**
     * Function used to get Google AdId
     *
     * @returns {Promise<string>} Returns a promise with google AdId value
     */
    getGoogleAdId(): Promise<string>;
    /**
     * If you need to obtain the Amazon Advertising ID, you can make a call to this function.
     *
     * @returns {Promise<string>} Returns a promise with anazib adv. ID
     */
    getAmazonAdId(): Promise<string>;
    /**
     * To obtain the IDFA, call this function
     *
     * @returns {Promise<string>} Returns a promise with IDFA string value
     */
    getIdfa(): Promise<string>;
    /**
     * For every device with your app installed on it, the Adjust backend generates a unique Adjust device identifier (adid).
     * In order to obtain this identifier, call this function
     *
     * @returns {Promise<string>} Returns a promise with adid value
     */
    getAdid(): Promise<string>;
    /**
     * Instruct to Adjust SDK to check current state of att_status
     */
    checkForNewAttStatus(): void;
    /**
     * If you want to access information about a user's current attribution whenever you need it, you can make a call to this function
     *
     * @returns {Promise<AdjustAttribution>} Returns a promise with AdjustAttribution object
     */
    getAttribution(): Promise<AdjustAttribution>;
    /**
     * Get the information about version of the SDK used
     *
     * @returns {Promise<string>} Returns a promise with sdk version information
     */
    getSdkVersion(): Promise<string>;
    /**
     * Method used to add session callback parameters
     *
     * @param key key
     * @param value value
     */
    addSessionCallbackParameter(key: string, value: string): void;
    /**
     * Remove a specific session callback parameter by passing the desiring key to this method
     *
     * @param key key
     */
    removeSessionCallbackParameter(key: string): void;
    /**
     * If all keys and values from the session callback parameters have to be removed, call this method
     */
    resetSessionCallbackParameters(): void;
    /**
     * Method used to add session partner parameters
     *
     * @param key key
     * @param value value
     */
    addSessionPartnerParameter(key: string, value: string): void;
    /**
     * Remove a specific session partner parameter by passing the desiring key to this method
     *
     * @param key key
     */
    removeSessionPartnerParameter(key: string): void;
    /**
     * If all keys and values from the session partner parameters have to be removed, call this method
     */
    resetSessionPartnerParameters(): void;
    /**
     * This method call will make the Adjust SDK send the initial install session and any events created, if they were not sent after delay start was set and it's delay expired.
     */
    sendFirstPackages(): void;
    /**
     * Request Adjust SDK to show pop up dialog for asking user's consent to be tracked.
     * In order to do this, call this function
     *
     * @returns {Promise<number>} Returns a promise with user's consent value
     */
    requestTrackingAuthorizationWithCompletionHandler(): Promise<number>;
    /**
     * You can update SKAdNetwork conversion value with calling this method
     *
     * @param {number} conversionValue conversion value for the user
     */
    updateConversionValue(conversionValue: number): void;
    /**
     * To obtain the app tracking authorization status in iOS, call this function
     *
     * @returns {Promise<number>} Returns a promise with app tracking authorization status
     */
    getAppTrackingAuthorizationStatus(): Promise<number>;
}
