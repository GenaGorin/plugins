import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class MetrixConfig {
    private appId;
    private secretId;
    private info1;
    private info2;
    private info3;
    private info4;
    private defaultTrackerToken;
    private shouldLaunchDeeplink;
    private firebaseAppId;
    private firebaseProjectId;
    private firebaseApiKey;
    private isLocationListeningEnable;
    private eventUploadThreshold;
    private eventUploadMaxBatchSize;
    private eventMaxCount;
    private eventUploadPeriodMillis;
    private sessionTimeoutMillis;
    private store;
    private userIdListener;
    private sessionIdListener;
    private attributionChangeListener;
    private deeplinkResponseListener;
    constructor(appId: string);
    setDefaultTracker(defaultTrackerToken: string): void;
    setFirebaseId(firebaseAppId: string, firebaseProjectId: string, firebaseApiKey: string): void;
    setAppSecret(secretId: number, info1: number, info2: number, info3: number, info4: number): void;
    setShouldLaunchDeeplink(shouldLaunchDeeplink: boolean): void;
    setOnAttributionChangeListener(attributionChangeListener: (attribution: MetrixAttribution) => void): void;
    setOnDeeplinkResponseListener(deeplinkResponseListener: (uri: string) => void): void;
    setOnReceiveUserIdListener(userIdListener: (userId: string) => void): void;
    setOnSessionIdListener(sessionIdListener: (sessionId: string) => void): void;
    setLocationListening(isLocationListeningEnable: boolean): void;
    setEventUploadThreshold(threshold: number): void;
    setEventUploadMaxBatchSize(size: number): void;
    setEventMaxCount(count: number): void;
    setEventUploadPeriodMillis(period: number): void;
    setSessionTimeoutMillis(timeout: number): void;
    setStore(store: string): void;
    private getAttributionChangeListener;
    private getDeeplinkResponseListener;
    private getOnReceiveUserIdListener;
    private getOnSessionIdListener;
    private hasAttributionChangeListener;
    private hasDeeplinkResponseListener;
    private hasUserIdListener;
    private hasSessionIdListener;
}
export interface MetrixAttribution {
    acquisitionAd: string;
    acquisitionAdSet: string;
    acquisitionCampaign: string;
    acquisitionSource: string;
    attributionStatus: MetrixAttributionStatus;
}
export declare enum MetrixAttributionStatus {
    Attributed = "ATTRIBUTED",
    NotAttributedYet = "NOT_ATTRIBUTED_YET",
    AttributionNotNeeded = "ATTRIBUTION_NOT_NEEDED",
    Unknown = "UNKNOWN"
}
/**
 * @name Metrix
 * @description
 * This is the Ionic Cordova SDK of Metrix™. You can read more about Metrix™ at metrix.ir.
 *
 * Requires Cordova plugin: `ir.metrix.sdk`. For more info, please see the [Metrix Cordova SDK](https://github.com/metrixorg/MetrixSDK-CordovaPlugin)
 * @usage
 * ```typescript
 *  import { Metrix, MetrixConfig } from '@awesome-cordova-plugins/metrix';
 *
 *  constructor(private metrix: Metrix) { }
 *
 *  ...
 *
 *  const config = new MetrixConfig('APP-ID-HERE');
 *  // Set other config properties.
 *  metrix.create(config);
 *
 * ```
 * @interfaces
 * MetrixAttribution
 * @classes
 * MetrixConfig
 * @enums
 * MetrixAttributionStatus
 */
export declare class MetrixOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This method initializes Metrix SDK
     *
     * @param {MetrixConfig} config MetrixConfig object used as starting options
     */
    create(config: MetrixConfig): void;
    /**
     * Function used to get Session Number
     *
     * @returns {Promise<number>} Returns a promise with session number value
     */
    getSessionNum(): Promise<number>;
    /**
     * This method tracks an event
     *
     * @param {string} slug the slug of the event to be tracked
     * @param {Map<string, string> | object} attributes optional attributes of the event to be tracked
     */
    newEvent(slug: string, attributes?: Map<string, string> | object): void;
    /**
     * This method adds the provided attributes to all metrix events
     *
     * @param {Map<string, string> | object} attributes the attributes to be added to all future events
     */
    addUserAttributes(attributes: Map<string, string> | object): void;
    /**
     * This method tracks a revenue
     *
     * @param {string} slug the slug of the event to be tracked
     * @param {number} amount the amount of money gained by the revenue
     * @param {number} currency (OPTIONAL) currency of the amount
     * @param {string} orderId (OPTIONAL) id of the revenue
     */
    newRevenue(slug: string, amount: number, currency?: number, orderId?: string): void;
    /**
     * By making this call, the Metrix SDK will try to find if there is any new attribution info inside of the deep link and if any, it will be sent to the Metrix backend.
     *
     * @param {string} url URL of the deeplink
     */
    appWillOpenUrl(url: string): void;
}

export declare const Metrix: MetrixOriginal;