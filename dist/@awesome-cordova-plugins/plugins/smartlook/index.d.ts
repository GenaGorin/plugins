import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class SmartlookSetupConfigBuilder {
    private readonly _smartlookSetupConfig;
    constructor(smartlookAPIKey: string);
    fps(fps: number): SmartlookSetupConfigBuilder;
    renderingMode(renderingMode: SmartlookRenderingMode): SmartlookSetupConfigBuilder;
    startNewSession(startNewSession: boolean): SmartlookSetupConfigBuilder;
    startNewSessionAndUser(startNewSessionAndUser: boolean): SmartlookSetupConfigBuilder;
    eventTrackingModes(eventTrackingModes: SmartlookEventTrackingModes): SmartlookSetupConfigBuilder;
    build(): SmartlookSetupConfig;
}
export declare class SmartlookSetupConfig {
    private smartlookAPIKey;
    fps: number;
    renderingMode: string;
    startNewSession: boolean;
    startNewSessionAndUser: boolean;
    eventTrackingModes: string[];
    constructor(smartlookAPIKey: string);
}
export declare class SmartlookResetSession {
    private resetUser;
    constructor(resetUser: boolean);
}
export declare class SmartlookUserIdentifier {
    private identifier;
    private sessionProperties;
    constructor(identifier: string, sessionProperties?: {});
}
export declare class SmartlookEventTrackingMode {
    private eventTrackingMode;
    static FULL_TRACKING(): SmartlookEventTrackingMode;
    static IGNORE_USER_INTERACTION(): SmartlookEventTrackingMode;
    static IGNORE_NAVIGATION_INTERACTION(): SmartlookEventTrackingMode;
    static IGNORE_RAGE_CLICKS(): SmartlookEventTrackingMode;
    static NO_TRACKING(): SmartlookEventTrackingMode;
    getEventTrackingModeString(): string;
    constructor(eventTrackingMode: string);
}
export declare class SmartlookEventTrackingModes {
    private eventTrackingModes;
    constructor(eventTrackingModes: SmartlookEventTrackingMode[]);
    getEventTrackingModeStringArray(): string[];
}
export declare class SmartlookViewState {
    static START: string;
    static STOP: string;
}
export declare class SmartlookNavigationEvent {
    private name;
    private viewState;
    constructor(name: string, viewState?: string);
}
export declare class SmartlookCustomEvent {
    private name;
    private eventProperties;
    constructor(name: string, eventProperties?: {});
}
export declare class SmartlookTimedCustomEventStart {
    private name;
    private eventProperties;
    constructor(name: string, eventProperties?: {});
}
export declare class SmartlookTimedCustomEventStop {
    private eventId;
    private eventProperties;
    constructor(eventId: string, eventProperties?: {});
}
export declare class SmartlookTimedCustomEventCancel {
    private eventId;
    private reason;
    private eventProperties;
    constructor(eventId: string, reason: string, eventProperties?: {});
}
export declare class SmartlookGlobalEventProperties {
    private globalEventProperties;
    private immutable;
    constructor(globalEventProperties: {}, immutable: boolean);
}
export declare class SmartlookGlobalEventProperty {
    private key;
    private value;
    private immutable;
    constructor(key: string, value: string, immutable: boolean);
}
export declare class SmartlookGlobalEventPropertyKey {
    private key;
    constructor(key: string);
}
export declare class SmartlookReferrer {
    private referrer;
    private source;
    constructor(referrer: string, source: string);
}
export declare class SmartlookDashboardSessionUrl {
    private withCurrentTimestamp;
    constructor(withCurrentTimestamp: boolean);
}
export interface SmartlookIntegrationListener {
    onSessionReady: (dashboardSessionUrl: string) => any;
    onVisitorReady: (dashboardVisitorUrl: string) => any;
}
export declare class SmartlookRenderingMode {
    private renderingMode;
    static NO_RENDERING(): SmartlookRenderingMode;
    static NATIVE(): SmartlookRenderingMode;
    getRenderingModeString(): string;
    constructor(renderingMode: string);
}
/**
 * @name Smartlook
 * @description
 * Official Smartlook SDK plugin.
 * Full documentation can be found here: https://smartlook.github.io/docs/sdk/ionic/
 * @usage
 * ```typescript
 * import { Smartlook, SmartlookSetupConfig } from '@awesome-cordova-plugins/smartlook/ngx';
 *
 * ...
 *
 * @Component( ... )
 * export class AppComponent {
 *     constructor(private smartlook: Smartlook) {
 *        this.platform.ready().then(() => {
 *            this.smartlook.setupAndStartRecording(new SmartlookSetupConfig("YOUR API KEY"));
 *        }
 *     }
 * }
 * ```
 * @classes
 * SmartlookSetupConfigBuilder
 * SmartlookSetupConfig
 * SmartlookResetSession
 * SmartlookUserIdentifier
 * SmartlookEventTrackingMode
 * SmartlookNavigationEvent
 * SmartlookViewState
 * SmartlookCustomEvent
 * SmartlookTimedCustomEventStart
 * SmartlookTimedCustomEventStop
 * SmartlookTimedCustomEventCancel
 * SmartlookGlobalEventProperties
 * SmartlookGlobalEventProperty
 * SmartlookGlobalEventPropertyKey
 * SmartlookReferrer
 * SmartlookDashboardSessionUrl
 * SmartlookRenderingMode
 * SmartlookEventTrackingMode
 * SmartlookEventTrackingModes
 */
export declare class SmartlookOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Setup and start Smartlook SDK recording.
     *
     * @param config SmartlookSetupConfig object.
     * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
     * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
     * @param options.renderingMode (optional) Mode defining the video output of recording.
     * @param options.startNewSession (optional) If true new session is going to be created
     * @param options.startNewSessionAndUser (optional) If true new session and visitor is going to be created
     */
    setupAndStartRecording(config: SmartlookSetupConfig): void;
    /**
     * Setup/initialize Smartlook SDK. This method DOESN'T start the recording (@see start())
     *
     * @param config SmartlookSetupConfig object.
     * @param config.smartlookAPIKey (required) Smartlook API key (you can obtain it in your dashboard).
     * @param config.fps (optional) recorded video framerate (allowed values 2-10 fps).
     * @param options.renderingMode (optional) Mode defining the video output of recording.
     * @param options.startNewSession (optional) If true new session is going to be created
     * @param options.startNewSessionAndUser (optional) If true new session and visitor is going to be created
     */
    setup(config: SmartlookSetupConfig): void;
    /**
     * Start SDK recording.
     */
    startRecording(): void;
    /**
     * Stop SDK recording. Recording will start again when you call start().
     */
    stopRecording(): void;
    /**
     * Check if SDK is currently recording.
     *
     * @returns {Promise<boolean>} Returns a promise with isRecording boolean.
     */
    isRecording(): Promise<boolean>;
    /**
     * Resets current session and new session in dashboard is created.
     *
     * @param resetSession SmartlookResetSession object.
     * @param resetSession.resetUser If set to TRUE new visitor is created in the dashboard.
     */
    resetSession(resetSession: SmartlookResetSession): void;
    /**
     * When you start sensitive mode SDK records blank videos (single color) but SDK still sends analytic events.
     */
    startFullscreenSensitiveMode(): void;
    /**
     * Stop sensitive mode -> SDK records video.
     */
    stopFullscreenSensitiveMode(): void;
    /**
     * Check if fullscreen sensitive mode is active.
     *
     * @returns {Promise<boolean>} Returns a promise with isFullscreenSensitiveModeActive boolean.
     */
    isFullscreenSensitiveModeActive(): Promise<boolean>;
    /**
     * Identify user.
     *
     * @param identifier SmartlookUserIdentifier object.
     * @param identifier.idenfier (required) id that can be used to identify user and his records.
     *                            You will see this Id in Smartlook dashboard so you can pair records with concrete user.
     * @param identifier.sessionProperties (optional) custom session properties object.
     */
    setUserIdentifier(identifier: SmartlookUserIdentifier): void;
    /**
     * You can configure which events are being tracked by setting eventTrackingMode.
     *
     * @param eventTrackingMode Can be on of:
     *                          - EventTrackingMode.FULL_TRACKING ... track everything
     *                          - EventTrackingMode.IGNORE_USER_INTERACTION ... will not track touches
     *                            focus, keyboard, selector events
     *                          - EventTrackingMode.IGNORE_NAVIGATION_INTERACTION ... will not track screen names
     *                          - EventTrackingMode.IGNORE_RAGE_CLICKS ... will not track rage clicks
     *                          - EventTrackingMode.NO_TRACKING ... not gonna track any events
     */
    setEventTrackingMode(eventTrackingMode: SmartlookEventTrackingMode): void;
    /**
     * You can configure which events are being tracked by setting eventTrackingMode.
     *
     * @param eventTrackingModes Array of EventTrackingModes.
     */
    setEventTrackingModes(eventTrackingModes: SmartlookEventTrackingModes): void;
    /**
     * Track custom navigation event.
     *
     * @param navigationEvent SmartlookNavigationEvent object.
     * @param navigationEvent.name Controler/Activity/Page name.
     * @param navigationEvent.viewState One of SmartlookViewState.START or SmartlookViewState.STOP.
     */
    trackNavigationEvent(navigationEvent: SmartlookNavigationEvent): void;
    /**
     * Track custom event.
     *
     * @param timedEvent SmartlookTimedCustomEventStart object.
     * @param timedEvent.name (required) string used to identify event in dashboard.
     * @param timedEvent.eventProperties (optional) timed event properties object. These properties
     *                                    are going to be merged with properties passed in stop/cancel.
     * @returns {Promise<string>} Returns a promise with eventId string (@see stopTimedCustomEvent(), @see cancelTimedCustomEvent()).
     */
    startTimedCustomEvent(timedEvent: SmartlookTimedCustomEventStart): Promise<string>;
    /**
     * Stops timed event. Duration from according start is calculated and send with the event.
     *
     * @param timedEvent SmartlookTimedCustomEventStop object.
     * @param timedEvent.eventId (required) Unique event id that is used to identify this event.
     * @param timedEvent.eventProperties (optional) timed event properties object. These properties
     *                                    are going to be merged with properties passed in start.
     */
    stopTimedCustomEvent(timedEvent: SmartlookTimedCustomEventStop): void;
    /**
     * Cancels timed event. It calculates event duration and notes that this event has failed.
     *
     * @param timedEvent SmartlookTimedCustomEventCancel object.
     * @param timedEvent.eventId (required) Unique event id that is used to identify this event.
     * @param timedEvent.reason (required) Short string description explaining why the event was canceled.
     * @param timedEvent.eventProperties (optional) timed event properties object. These properties
     *                                    are going to be merged with properties passed in start.
     */
    cancelTimedCustomEvent(timedEvent: SmartlookTimedCustomEventCancel): void;
    /**
     * Track custom event.
     *
     * @param event SmartlookCustomEvent object.
     * @param event.name (required) string used to identify event.
     * @param event.eventProperties (optional) event properties object.
     */
    trackCustomEvent(event: SmartlookCustomEvent): void;
    /**
     * Set global event properties that will be added to every tracked event.
     *
     * @param properties SmartlookGlobalEventProperties object.
     * @param properties.globalEventProperties (required) global event properties object.
     * @param properties.immutable (required) If set to TRUE these properties have higher priority
     *                              than mutable ones and also they cannot be changed (only removed).
     */
    setGlobalEventProperties(properties: SmartlookGlobalEventProperties): void;
    /**
     * Check if SDK is currently recording.
     *
     * @param property SmartlookGlobalEventProperty object.
     * @param property.key (required) global property key.
     * @param property.value (required) global property value.
     * @param property.immutable (required) If set to TRUE these properties have higher priority
     *                           than mutable ones and also they cannot be changed (only removed).
     */
    setGlobalEventProperty(property: SmartlookGlobalEventProperty): void;
    /**
     * Remove property from global event properties.
     *
     * @param property SmartlookGlobalEventPropertyKey object.
     * @param property.key (required) Global property key.
     */
    removeGlobalEventProperty(property: SmartlookGlobalEventPropertyKey): void;
    /**
     * Remove all properties from global event properties.
     */
    removeAllGlobalEventProperties(): void;
    /**
     * Possibility to manually set referrer and source of the installation visible in dashboard
     * and accessible via filters.
     *
     * @param referrer SmartlookReferrer object.
     * @param referrer.referrer (required) Desired referrer value.
     * @param referrer.source (required) Desired source, i.e. com.android.vending or com.amazon.venezia.
     */
    setReferrer(referrer: SmartlookReferrer): void;
    /**
     * Obtain session URL leading to our dashboard.
     *
     * @param smartlookDashboardSessionUrl SmartlookDashboardSessionUrl object.
     * @param smartlookDashboardSessionUrl.withCurrentTimestamp If set to TRUE record will start at current timestamp.
     * @returns {Promise<string>} Returns a promise with dashboard session URL string.
     */
    getDashboardSessionUrl(smartlookDashboardSessionUrl: SmartlookDashboardSessionUrl): Promise<string>;
    /**
     * Obtain visitor URL leading to our dashboard.
     *
     * @returns {Promise<string>} Returns a promise with dashboard visitor URL string.
     */
    getDashboardVisitorUrl(): Promise<string>;
    /**
     * Integration listener can be used to obtain dashboard URL for current session and visitor.
     * These URLs can be propagated to various analytic tools/SDKs.
     *
     * @param integrationListener SmartlookIntegrationListener object.
     * @param integrationListener.onSessionReady Called when dashboard session URL is ready. Note that this URL can be accesed only by user
     * that has access to Smartlook dashboard (it is not public share link).
     * @param integrationListener.onVisitorReady Called when dashboard visitor URL is ready. Note that this URL can be accesed only by user
     * that has access to Smartlook dashboard (it is not public share link).
     */
    registerIntegrationListener(integrationListener: SmartlookIntegrationListener): void;
    /**
     * By changing rendering mode you can adjust the way we render the application for recordings.
     *
     * @param options.renderingMode Mode defining the video output of recording. Curently only
     *                              SmartlookRenderingMode.NO_RENDERING() and SmartlookRenderingMode.NATIVE() available.
     * @param renderingMode
     */
    setRenderingMode(renderingMode: SmartlookRenderingMode): void;
    /**
     * Unregister Integration listener (@see registerIntegrationListener())
     */
    unregisterIntegrationListener(): void;
}

export declare const Smartlook: SmartlookOriginal;