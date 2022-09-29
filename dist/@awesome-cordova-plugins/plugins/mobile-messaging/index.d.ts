import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare type OS = 'Android' | 'iOS';
export declare type Gender = 'Male' | 'Female';
export declare type Event = 'messageReceived' | 'notificationTapped' | 'tokenReceived' | 'registrationUpdated' | 'geofenceEntered' | 'actionTapped' | 'installationUpdated' | 'userUpdated' | 'personalized' | 'depersonalized' | 'inAppChat.availabilityUpdated' | 'inAppChat.unreadMessageCounterUpdated' | 'deeplink';
export interface CustomEvent {
    definitionId: string;
    properties: Record<string, string | number | boolean>;
}
export interface Configuration {
    /**
     * The application code of your Application from Push Portal website
     */
    applicationCode: string;
    geofencingEnabled?: boolean;
    inAppChatEnabled?: boolean;
    /**
     * Message storage save callback
     */
    messageStorage?: CustomMessageStorage;
    defaultMessageStorage?: boolean;
    ios?: {
        notificationTypes?: string[];
        forceCleanup?: boolean;
        logging?: boolean;
    };
    android?: {
        notificationIcon?: string;
        multipleNotifications?: boolean;
        notificationAccentColor?: string;
        firebaseOptions?: {
            apiKey: string;
            applicationId: string;
            databaseUrl?: string;
            gaTrackingId?: string;
            gcmSenderId?: string;
            storageBucket?: string;
            projectId: string;
        };
    };
    privacySettings?: {
        applicationCodePersistingDisabled?: boolean;
        userDataPersistingDisabled?: boolean;
        carrierInfoSendingDisabled?: boolean;
        systemInfoSendingDisabled?: boolean;
    };
    notificationCategories?: [
        {
            identifier: string;
            actions?: [
                {
                    identifier: string;
                    title?: string;
                    foreground?: boolean;
                    authenticationRequired?: boolean;
                    moRequired?: boolean;
                    destructive?: boolean;
                    icon?: string;
                    textInputActionButtonTitle?: string;
                    textInputPlaceholder?: string;
                }
            ];
        }
    ];
}
export interface UserData {
    externalUserId?: string;
    firstName?: string;
    lastName?: string;
    middleName?: string;
    gender?: Gender;
    birthday?: string;
    phones?: string[];
    emails?: string[];
    tags?: string[];
    customAttributes?: Record<string, string | number | boolean | any[]>;
}
export interface Installation {
    isPrimaryDevice?: boolean;
    isPushRegistrationEnabled?: boolean;
    notificationsEnabled?: boolean;
    geoEnabled?: boolean;
    sdkVersion?: string;
    appVersion?: string;
    os?: OS;
    osVersion?: string;
    deviceManufacturer?: string;
    deviceModel?: string;
    deviceSecure?: boolean;
    language?: string;
    deviceTimezoneId?: string;
    applicationUserId?: string;
    deviceName?: string;
    customAttributes?: Record<string, string | number | boolean>;
}
/**
 * User's unique ID. One UserIdentity parameter must be provided if used.
 */
export interface UserIdentity {
    phones?: string[];
    emails?: string[];
    externalUserId?: string;
}
export interface PersonalizeContext {
    userIdentity: UserIdentity;
    userAttributes?: Record<string, string | number | boolean | any[]>;
    forceDepersonalize?: boolean;
}
export interface GeoData {
    area: GeoArea;
}
export interface GeoArea {
    id: string;
    center: GeoCenter;
    radius: number;
    title: string;
}
export interface GeoCenter {
    lat: number;
    lon: number;
}
export interface Message {
    messageId: string;
    title?: string;
    body?: string;
    sound?: string;
    silent?: boolean;
    customPayload?: Record<string, string>;
    internalData?: string;
    receivedTimestamp?: number;
    seenDate?: number;
    contentUrl?: string;
    seen?: boolean;
    geo?: boolean;
    originalPayload?: Record<string, string>;
    vibrate?: boolean;
    icon?: string;
    category?: string;
    chat?: string;
    browserUrl?: string;
    deeplink?: string;
    webViewUrl?: string;
    inAppOpenTitle?: string | undefined;
    inAppDismissTitle?: string;
}
export interface MobileMessagingError {
    code: string;
    description: string;
    domain?: string;
}
export interface ChatConfig {
    ios?: {
        showModally: boolean;
    };
}
export declare class DefaultMessageStorage {
    find(messageId: string, callback: (message: Message) => void): void;
    findAll(callback: (messages: Message[]) => void): void;
    delete(messageId: string, callback: () => void): void;
    deleteAll(callback: () => void): void;
}
export declare class CustomMessageStorage {
    /**
     * Will be called by the plugin when messages are received and it's time to save them to the storage
     *
     * @param array of message objects to save to storage
     */
    save(messages: Message[]): void;
    /**
     * Will be called by the plugin to find a message by message id
     *
     * @param callback has to be called on completion with one parameter - found message object
     */
    find(messageId: string, callback: (message: Message) => void): void;
    /**
     * Will be called by the plugin to find all messages in the storage
     *
     * @param callback has to be called on completion with one parameter - an array of available messages
     */
    findAll(callback: (messages: Message[]) => void): void;
    /**
     * Will be called by the plugin when its time to initialize the storage
     */
    start(): void;
    /**
     * Will be called by the plugin when its time to deinitialize the storage
     */
    stop(): void;
}
export interface ChatSettingsIOS {
    title: string;
    sendButtonColor: string;
    navigationBarItemsColor: string;
    navigationBarColor: string;
    navigationBarTitleColor: string;
}
/**
 * @name Mobile Messaging
 * @description
 * Mobile Messaging SDK is designed and developed to easily enable push notification channel in your mobile application.
 * In almost no time of implementation you get push notification in your application and access to the features of [Infobip IP Messaging Platform](https://portal.infobip.com/push/).
 * This document describes library integration steps for your Cordova project.
 *
 * For more info see [Cordova plugin docs](https://github.com/infobip/mobile-messaging-cordova-plugin)
 * @usage
 * ```typescript
 * import { MobileMessaging } from '@awesome-cordova-plugins/mobile-messaging/ngx';
 *
 *
 * constructor(private mobileMessaging: MobileMessaging) { }
 *
 * ...
 *
 *
 *  this.mobileMessaging.init({
 *    applicationCode: '<your_application_code>',
 *    geofencingEnabled: '<true/false>',
 *    defaultMessageStorage: '<true/false>',
 *    ios: {
 *      notificationTypes: ['alert', 'badge', 'sound']
 *    },
 *    android: {
 *      notificationIcon: <String; a resource name for a status bar icon (without extension), located in '/platforms/android/app/src/main/res/mipmap'>,
 *      multipleNotifications: <Boolean; set to 'true' to enable multiple notifications>,
 *      notificationAccentColor: <String; set to hex color value in format '#RRGGBB' or '#AARRGGBB'>
 *     }}, (err) => {
 *      ...
 *    });
 *
 *  this.mobileMessaging.register('messageReceived').subscribe((message: Message) => {
 *    ...
 *  });
 *
 * ```
 */
export declare class MobileMessagingOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Starts a new Mobile Messaging session.
     *
     * @name init
     * @param config. Configuration for Mobile Messaging
     * @param config
     * @param onInitError
     * @param {Function} onInitError. Error callback
     */
    init(config: Configuration, onInitError?: (error: MobileMessagingError) => void): void;
    /**
     * Register to event coming from MobileMessaging library.
     *
     * @name register
     * @param event
     */
    register(event: Event): Observable<Message>;
    on(event: Event): Observable<Message>;
    /**
     * Un register from MobileMessaging library event.
     *
     * @name unregister
     * @param {string} eventName
     * @param event
     * @param {Function} handler will be unregistered from event
     */
    unregister(event: Event): Observable<Message>;
    off(event: Event): Observable<Message>;
    /**
     * Sends an event to the server eventually, handles possible errors and do retries for you.
     *
     * @name submitEvent
     * @param {Object} eventData. An object containing event data
     * {
     *   definitionId: "eventDefinitionId"
     *   properties: {
     *     "stringAttribute": "string",
     *     "numberAttribute": 1,
     *     "dateAttribute": "2020-02-26T09:41:57Z",
     *     "booleanAttribute": true
     *   }
     * @param event
     * }
     */
    submitEvent(event: CustomEvent): void;
    /**
     * Sends an event to the server immediately.
     * You have to handle possible connection or server errors, do retries yourself.
     *
     * @name submitEventImmediately
     * @param {Object} eventData. An object containing event data
     * {
     *   definitionId: "eventDefinitionId"
     *   properties: {
     *     "stringAttribute": "string",
     *     "numberAttribute": 1,
     *     "dateAttribute": "2020-02-26T09:41:57Z",
     *     "booleanAttribute": true
     *   }
     * }
     * @param event
     * @param {Function} callback will be called on result, you have to handle error and do retries yourself
     */
    submitEventImmediately(event: CustomEvent): Promise<void>;
    /**
     * Saves user data to the server.
     *
     * @name saveUser
     * @param userData
     * @param {Object} userData. An object containing user data
     */
    saveUser(userData: UserData): Promise<any>;
    /**
     * Fetch user data from the server.
     *
     * @name fetchUser
     */
    fetchUser(): Promise<UserData>;
    /**
     * Gets user data from the locally stored cache.
     *
     * @name getUser
     */
    getUser(): Promise<UserData>;
    /**
     * Saves installation to the server.
     *
     * @name saveInstallation
     * @param installation
     * @param {Object} installation. An object containing installation data
     */
    saveInstallation(installation: Installation): Promise<Installation>;
    /**
     * Fetches installation from the server.
     *
     * @name fetchInstallation
     */
    fetchInstallation(): Promise<Installation>;
    /**
     * Gets locally cached installation.
     *
     * @name getInstallation
     */
    getInstallation(): Promise<Installation>;
    /**
     * Sets any installation as primary for this user.
     *
     * @name setInstallationAsPrimary
     * @param {string} pushRegistrationId of an installation
     * @param {boolean} primary or not
     */
    setInstallationAsPrimary(pushRegistrationId: string, primary: boolean): Promise<any>;
    /**
     * Performs personalization of the current installation on the platform.
     *
     * @name personalize
     * @param context
     * @param {Object} context. An object containing user identity information as well as additional user attributes.
     */
    personalize(context: PersonalizeContext): Promise<PersonalizeContext>;
    /**
     * Performs depersonalization of the current installation on the platform.
     *
     * @name depersonalize
     */
    depersonalize(): Promise<any>;
    /**
     * Performs depersonalization of the installation referenced by pushRegistrationId.
     *
     * @param {string} pushRegistrationId of the remote installation to depersonalize
     */
    depersonalizeInstallation(pushRegistrationId: string): Promise<any>;
    /**
     * Mark messages as seen
     *
     * @name markMessagesSeen
     * @param {Array} messageIds of identifiers of message to mark as seen
     */
    markMessagesSeen(messageIds: string[]): Promise<any>;
    /**
     * Displays built-in error dialog so that user can resolve errors during sdk initialization.
     *
     * @name showDialogForError
     * @param {number} errorCode to display dialog for
     */
    showDialogForError(errorCode: number): Promise<any>;
    defaultMessageStorage(): DefaultMessageStorage | undefined;
    /**
     * Displays chat view.
     *
     * @name showChat
     * @param config
     * @param {ChatConfig} chat config
     */
    showChat(config?: ChatConfig): Promise<any>;
    /**
     * Setup chat settings for iOS only
     *
     * @param settings
     */
    setupiOSChatSettings(settings: ChatSettingsIOS): Promise<any>;
    /**
     * Returns unread in-app chat push messages counter.
     * The counter increments each time the application receives in-app chat push message
     * (this usually happens when chat screen is inactive or the application is in background/terminated state).
     */
    getMessageCounter(onResult: (counter: number) => void): void;
    /**
     * MobileMessaging plugin automatically resets the counter to 0 whenever user opens the in-app chat screen.
     * However, use the following API in case you need to manually reset the counter.
     */
    resetMessageCounter(): void;
}

export declare const MobileMessaging: MobileMessagingOriginal;