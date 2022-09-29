import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare enum Collectors {
    AppData = "AppData",
    Connectivity = "Connectivity",
    DeviceData = "DeviceData",
    Lifecycle = "Lifecycle"
}
export declare enum Dispatchers {
    Collect = "Collect",
    TagManagement = "TagManagement",
    RemoteCommands = "RemoteCommands"
}
export declare enum Expiry {
    forever = "forever",
    untilRestart = "untilRestart",
    session = "session"
}
export declare enum ConsentPolicy {
    ccpa = "ccpa",
    gdpr = "gdpr"
}
export interface TealiumDispatch {
    dataLayer: Map<string, any>;
    type: string;
    toJson(): string;
}
export declare class TealiumView implements TealiumDispatch {
    viewName: string;
    dataLayer: Map<string, any>;
    type: string;
    constructor(viewName: string, dataLayer: Map<string, any>);
    toJson(): string;
}
export declare class TealiumEvent implements TealiumDispatch {
    eventName: string;
    dataLayer: Map<string, any>;
    type: string;
    constructor(eventName: string, dataLayer: Map<string, any>);
    toJson(): string;
}
export declare class ConsentExpiry {
    time: number;
    unit: TimeUnit;
    constructor(time: number, unit: TimeUnit);
}
export declare enum TimeUnit {
    minutes = "minutes",
    hours = "hours",
    days = "days",
    months = "months"
}
export declare enum ConsentStatus {
    consented = "consented",
    notConsented = "notConsented",
    unknown = "unknown"
}
export declare enum LogLevel {
    dev = "dev",
    qa = "qa",
    prod = "prod",
    silent = "silent"
}
export declare enum TealiumEnvironment {
    dev = "dev",
    qa = "qa",
    prod = "prod"
}
export declare enum ConsentCategories {
    analytics = "analytics",
    affiliates = "affiliates",
    displayAds = "display_ads",
    email = "email",
    personalization = "personalization",
    search = "search",
    social = "social",
    bigData = "big_data",
    mobile = "mobile",
    engagement = "engagement",
    monitoring = "monitoring",
    crm = "crm",
    cdp = "cdp",
    cookieMatch = "cookiematch",
    misc = "misc"
}
export interface TealiumConfig {
    account: string;
    profile: string;
    environment: TealiumEnvironment;
    dataSource?: string;
    collectors: Collectors[];
    dispatchers: Dispatchers[];
    customVisitorId?: string;
    memoryReportingEnabled?: boolean;
    overrideCollectURL?: string;
    overrideCollectBatchURL?: string;
    overrideCollectDomain?: string;
    overrideLibrarySettingsURL?: string;
    overrideTagManagementURL?: string;
    deepLinkTrackingEnabled?: boolean;
    qrTraceEnabled?: boolean;
    loglevel?: LogLevel;
    consentLoggingEnabled?: boolean;
    consentPolicy?: ConsentPolicy;
    consentExpiry?: ConsentExpiry;
    lifecycleAutotrackingEnabled?: boolean;
    useRemoteLibrarySettings?: boolean;
    visitorServiceEnabled?: boolean;
    visitorServiceRefreshInterval?: string;
}
/**
 * @name Tealium
 * @description
 * This plugin does provides a wrapper around the Tealium Cordova Plugin for Ionic Native.
 *
 * For full documentation, see [https://docs.tealium.com/platforms/cordova/](https://docs.tealium.com/platforms/cordova/)
 *
 * @usage
 * ```typescript
 * import { Tealium } from '@awesome-cordova-plugins/tealium/ngx';
 *
 *
 * constructor(private tealium: Tealium) { }
 *
 * ...
 *
 * let config: TealiumConfig = {
 *			account: <your_tealium_account>,
 *			profile: <your_tealium_profile>,
 *			environment: TealiumEnvironment.dev,
 *			dispatchers: [Dispatchers.Collect, Dispatchers.RemoteCommands, Dispatchers.TagManagement],
 *			collectors: [Collectors.AppData, Collectors.DeviceData, Collectors.Lifecycle, Collectors.Connectivity],
 *			consentLoggingEnabled: true,
 *			consentPolicy: ConsentPolicy.gdpr,
 *			visitorServiceEnabled: true,
 *			// visitorServiceRefreshInterval: '1',
 *			consentExpiry: new ConsentExpiry(3, TimeUnit.minutes),
 *		};
 *
 * Tealium.initialize(config);
 *
 * ```
 */
export declare class Tealium extends AwesomeCordovaNativePlugin {
    /**
     * This function initializes the Tealium Cordova Plugin
     * @param config {TealiumConfig}
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    initialize(config: TealiumConfig, callback?: Function): Promise<any>;
    /**
     * This function tracks an event
     * @param dispatch {TealiumDispatch} Dispatch containing event data
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    track(dispatch: TealiumDispatch): Promise<any>;
    /**
     * This function terminatest the Tealium instance
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    terminateInstance(): Promise<any>;
    /**
     * Adds data to data layer
     * @param data A map containing the key-value pairs to be added to data layer
     * @param expiry When the data should expire. Choose `Expiry.session` if unsure.
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    addData(data: Map<string, any>, expiry: string): Promise<any>;
    /**
     *
     * @param key The key of the data to retrieve from the data layer
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getData(key: string, callback?: Function): Promise<any>;
    /**
     * Removes data from the data layer
     * @param keys The keys of the data to be removed
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    removeData(keys: string[]): Promise<any>;
    /**
     * Retrieves the user's consent status
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getConsentStatus(callback?: Function): Promise<any>;
    /**
     * Sets the user's consent status
     * @param consentStatus
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setConsentStatus(consentStatus: ConsentStatus): Promise<any>;
    /**
     * Retrieves the user's consent categories
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getConsentCategories(callback?: Function): Promise<any>;
    /**
     * Sets the user's consent categories
     * @param categories
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setConsentCategories(categories: ConsentCategories[]): Promise<any>;
    /**
     * Joins a trace session weith the specified Trace ID
     * @param id Trace ID
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    joinTrace(id: string): Promise<any>;
    /**
     * Leaves a trace session
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    leaveTrace(): Promise<any>;
    /**
     * Retrieves the Tealium Visitor ID
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    getVisitorId(callback?: Function): Promise<any>;
    /**
     * Sets a listener to be called when the AudienceStream visitor profile is updated
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setVisitorServiceListener(callback?: Function): Promise<any>;
    /**
     * Sets a listener to be called when the consent has expired
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    setConsentExpiryListener(callback?: Function): Promise<any>;
    /**
     * Adds a remote command for later execution
     * @param id The ID used to invoke the remote command
     * @param callback
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    addRemoteCommand(id: string, callback?: Function): Promise<any>;
    /**
     * Removes a previously-added remote command
     * @param id The ID of remote command to be removed
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    removeRemoteCommand(id: string): Promise<any>;
    /**
     * Removes all listeners
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    removeListeners(): Promise<any>;
}
