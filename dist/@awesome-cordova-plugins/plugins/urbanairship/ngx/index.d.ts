import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * Interface for UAirship Tag Editor
 */
export interface TagGroupEditor {
    addTags(tagGroup: string, tags: string[]): TagGroupEditor;
    removeTags(tagGroup: string, tags: string[]): TagGroupEditor;
    apply(success: () => void, failure: (message: string) => void): TagGroupEditor;
}
/**
 * Interface for UAirship Attributes Editor
 */
export interface AttributesEditor {
    setAttribute(name: string, value: string | number | boolean | Date): AttributesEditor;
    removeAttribute(name: string): AttributesEditor;
    apply(success: () => void, failure: (message: string) => void): AttributesEditor;
}
/**
 * Interface for UAirship ChannelSubscriptionList Editor
 */
export interface ChannelSubscriptionListEditor {
    subscribe(subscriptionListID: string): ChannelSubscriptionListEditor;
    unsubscribe(subscriptionListID: string): ChannelSubscriptionListEditor;
    apply(success: () => void, failure: (message: string) => void): ChannelSubscriptionListEditor;
}
export declare type ContactSubscriptionScope = 'app' | 'email' | 'push' | 'sms';
/**
 * Interface for UAirship ContactSubscriptionList Editor
 */
export interface ContactSubscriptionListEditor {
    subscribe(subscriptionListID: string, contactScope: ContactSubscriptionScope): ContactSubscriptionListEditor;
    unsubscribe(subscriptionListID: string, contactScope: ContactSubscriptionScope): ContactSubscriptionListEditor;
    apply(success: () => void, failure: (message: string) => void): ContactSubscriptionListEditor;
}
/**
 * Enum for notification types.
 *
 * @readonly
 * @enum {number}
 */
export declare enum NotificationType {
    none = 0,
    badge = 1,
    sound = 2,
    alert = 4
}
/**
 * Enum for presentation options.
 *
 * @readonly
 * @enum {number}
 */
export declare enum PresentationOptions {
    none = 0,
    badge = 1,
    sound = 2,
    alert = 4
}
/**
 * @name UrbanAirShip
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { UrbanAirShip } from '@awesome-cordova-plugins/urbanairship/ngx';
 *
 *
 * constructor(private urbanAirShip: UrbanAirShip) { }
 *
 * ...
 *
 *
 * this.urbanAirShip.takeOff(config)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class UrbanAirShip extends AwesomeCordovaNativePlugin {
    /**
     * Event fired when a new deep link is received.
     *
     * @event deep_link
     * @type {object}
     * @param {string} [deepLink] The deep link.
     */
    onDeepLink(): Observable<any>;
    /**
     * Event fired when a channel registration occurs.
     *
     * @event registration
     * @type {object}
     * @param {string} [channelID] The channel ID.
     * @param {string} [registrationToken] The deviceToken on iOS, and the FCM/ADM token on Android.
     * @param {string} [error] Error message if an error occurred.
     */
    onRegistration(): Observable<any>;
    /**
     * Event fired when the inbox is updated.
     *
     * @event inbox_updated
     */
    onInboxUpdated(): Observable<any>;
    /**
     * Event fired when the inbox needs to be displayed. This event is only emitted if auto
     * launch message center is disabled.
     *
     * @event show_inbox
     * @type {object}
     * @param {string} [messageId] The optional message ID.
     */
    onShowInbox(): Observable<any>;
    /**
     * Event fired when a push is received.
     *
     * @event push
     * @type {object}
     * @param {string} message The push alert message.
     * @param {string} title The push title.
     * @param {string} subtitle The push subtitle.
     * @param {object} extras Any push extras.
     * @param {object} aps The raw aps dictionary (iOS only)
     * @param {number} [notification_id] The Android notification ID. Deprecated in favor of notificationId.
     * @param {string} [notificationId] The notification ID.
     */
    onPushReceived(): Observable<any>;
    /**
     * Event fired when notification opened.
     *
     * @event notification_opened
     * @type {object}
     * @param {string} message The push alert message.
     * @param {object} extras Any push extras.
     * @param {number} [notification_id] The Android notification ID. Deprecated in favor of notificationId.
     * @param {string} [notificationId] The notification ID.
     * @param {string} [actionID] The ID of the notification action button if available.
     * @param {boolean} isForeground Will always be true if the user taps the main notification. Otherwise its defined by the notification action button.
     */
    onNotificationOpened(): Observable<any>;
    /**
     * Event fired when the user notification opt-in status changes.
     *
     * @event notification_opt_in_status
     * @type {object}
     * @param {boolean} optIn If the user is opted in or not to user notifications.
     * @param {object} [authorizedNotificationSettings] iOS only. A map of authorized settings.
     * @param {boolean} authorizedNotificationSettings.alert If alerts are authorized.
     * @param {boolean} authorizedNotificationSettings.sound If sounds are authorized.
     * @param {boolean} authorizedNotificationSettings.badge If badges are authorized.
     * @param {boolean} authorizedNotificationSettings.carPlay If car play is authorized.
     * @param {boolean} authorizedNotificationSettings.lockScreen If the lock screen is authorized.
     * @param {boolean} authorizedNotificationSettings.notificationCenter If the notification center is authorized.
     */
    onNotificationOptInStatus(): Observable<any>;
    /**
     * Re-attaches document event listeners in this webview
     */
    reattach(): void;
    /**
     * Initailizes Urban Airship.
     *
     * The plugin will automatically call takeOff during the next app init in
     * order to properly handle incoming push. If takeOff is called multiple times
     * in a session, or if the config is different than the previous sesssion, the
     * new config will not be used until the next app start.
     *
     * @param {object}  config The Urban Airship config.
     * @param {string}  config.site Sets the cloud site, must be either EU or US.
     * @param {object}  config.development The Urban Airship development config.
     * @param {string}  config.development.appKey The development appKey.
     * @param {string}  config.development.appSecret The development appSecret.
     * @param {object}  config.production The Urban Airship production config.
     * @param {string}  config.production.appKey The production appKey.
     * @param {string}  config.production.appSecret The production appSecret.
     */
    takeOff(config: any): Promise<any>;
    /**
     * Sets the Android notification config. Values not set will fallback to any values set in the config.xml.
     *
     * @param {object}  config The notification config.
     * @param {string}  [config.icon] The name of the drawable resource to use as the notification icon.
     * @param {string}  [config.largeIcon] The name of the drawable resource to use as the notification large icon.
     * @param {string}  [config.accentColor] The notification accent color. Format is #AARRGGBB.
     */
    setAndroidNotificationConfig(config: any): Promise<any>;
    /**
     * Sets the default behavior when the message center is launched from a push
     * notification. If set to false the message center must be manually launched.
     *
     * @param {boolean} enabled true to automatically launch the default message center, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAutoLaunchDefaultMessageCenter(enabled: boolean): Promise<any>;
    /**
     * Enables or disables user notifications.
     *
     * @param {boolean} enabled true to enable notifications, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setUserNotificationsEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if user notifications are enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if user notifications is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isUserNotificationsEnabled(): Promise<any>;
    /**
     * Checks if app notifications are enabled or not. Its possible to have `userNotificationsEnabled`
     * but app notifications being disabled if the user opted out of notifications.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if app notifications is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isAppNotificationsEnabled(): Promise<any>;
    /**
     * Returns the channel ID.
     *
     * @param {function(ID)} success The function to call on success.
     * @param {string} success.ID The channel ID string
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getChannelID(): Promise<any>;
    /**
     * Returns the last notification that launched the application.
     *
     * @param {boolean} clear true to clear the notification.
     * @param {function(push)} success The function to call on success.
     * @param {object} success.push The push message object containing data associated with a push notification.
     * @param {string} success.push.message The push alert message.
     * @param {object} success.push.extras Any push extras.
     * @param {number} [success.push.notification_id] The Android notification ID.
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getLaunchNotification(clear: boolean): Promise<any>;
    /**
     * Returns the last received deep link.
     *
     * @param {boolean} clear true to clear the deep link.
     * @param {function(push)} success The function to call on success.
     * @param {string} success.deepLink The deep link.
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getDeepLink(clear: boolean): Promise<any>;
    /**
     * Returns the tags as an array.
     *
     * @param {function(tags)} success The function to call on success.
     * @param {Array} success.tags The tags as an array.
     * @param {failureCallback} [failure] The function to call on failure.
     * @param {string} failure.message The error message.
     */
    getTags(): Promise<any>;
    /**
     * Sets the tags.
     *
     * @param {Array} tags an array of strings.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setTags(tags: string[]): Promise<any>;
    /**
     * Returns the alias.
     *
     * @deprecated Deprecated since 6.7.0 - to be removed in a future version of the plugin - please use getNamedUser
     * @param {function(currentAlias)} success The function to call on success.
     * @param {string} success.currentAlias The alias as a string.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getAlias(): Promise<any>;
    /**
     * Sets the alias.
     *
     * @deprecated Deprecated since 6.7.0  - to be removed in a future version of the plugin - please use setNamedUser
     * @param {string} alias string
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAlias(alias: string): Promise<any>;
    /**
     * Checks if quiet time is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if quiet time is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isQuietTimeEnabled(): Promise<any>;
    /**
     * Enables or disables quiet time.
     *
     * @param {boolean} enabled true to enable quiet time, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setQuietTimeEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if the device is currently in quiet time.
     *
     * @param {function(inQuietTime)} success Success callback.
     * @param {boolean} success.inQuietTime Flag indicating if quiet time is currently in effect.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isInQuietTime(): Promise<any>;
    /**
     * Returns the quiet time as an object with the following:
     * "startHour": Number,
     * "startMinute": Number,
     * "endHour": Number,
     * "endMinute": Number
     *
     * @param {function(quietTime)} success The function to call on success.
     * @param {object} success.quietTime The quietTime object represents a timespan during
     *        which notifications should be silenced.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getQuietTime(): Promise<any>;
    /**
     * Sets the quiet time.
     *
     * @param {number} startHour for quiet time.
     * @param {number} startMinute for quiet time.
     * @param {number} endHour for quiet time.
     * @param {number} endMinute for quiet time.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setQuietTime(startHour: number, startMinute: number, endHour: number, endMinute: number): Promise<any>;
    /**
     * Enables or disables analytics.
     *
     * Disabling analytics will delete any locally stored events
     * and prevent any events from uploading. Features that depend on analytics being
     * enabled may not work properly if it's disabled (reports, region triggers,
     * location segmentation, push to local time).
     *
     * @param {boolean} enabled true to enable analytics, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAnalyticsEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if analytics is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if analytics is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isAnalyticsEnabled(): Promise<any>;
    /**
     * Returns the named user ID.
     *
     * @param {function(namedUser)} success The function to call on success.
     * @param {string} success.namedUser The named user ID as a string.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getNamedUser(): Promise<string>;
    /**
     * Sets the named user ID.
     *
     * @param {string} namedUser identifier string.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setNamedUser(namedUser: string): Promise<any>;
    /**
     * Runs an Urban Airship action.
     *
     * @param {string} actionName action as a string.
     * @param {*} actionValue
     * @param {function(result)} [success] The function to call on success.
     * @param {object} success.result The result's value.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    runAction(actionName: string, actionValue: any): Promise<any>;
    /**
     * Creates an editor to modify the named user tag groups.
     */
    editNamedUserTagGroups(): TagGroupEditor;
    /**
     * Creates an editor to modify the channel tag groups.
     */
    editChannelTagGroups(): TagGroupEditor;
    /**
     * Creates an editor to modify the channel attributes.
     */
    editChannelAttributes(): AttributesEditor;
    /**
     * Creates an editor to modify the named user attributes.
     */
    editNamedUserAttributes(): AttributesEditor;
    /**
     * Creates an editor to modify the channel subscription lists.
     *
     * @returns {ChannelSubscriptionListEditor} A subscription list editor instance.
     * @since 13.3.0
     */
    editChannelSubscriptionLists(): ChannelSubscriptionListEditor;
    /**
     * Creates an editor to modify the contact subscription lists.
     *
     * @returns {ContactSubscriptionListEditor} A subscription list editor instance.
     * @since 13.3.0
     */
    editContactSubscriptionLists(): ContactSubscriptionListEditor;
    /**
     * Returns the current set of subscription lists for the current channel,
     * optionally applying pending subscription list changes that will be applied during the next channel update.
     * An empty set indicates that this contact is not subscribed to any lists.
     *
     * @param {Function} [success] Success callback.
     * @param {string} failure.message The error message.
     */
    getChannelSubscriptionLists(): Promise<string[]>;
    /**
     * Returns the current set of subscription lists for the current contact,
     * optionally applying pending subscription list changes that will be applied during the next contact update.
     * An empty set indicates that this contact is not subscribed to any lists.
     *
     * @param {Function} [success] Success callback.
     * @param {string} failure.message The error message.
     */
    getContactSubscriptionLists(): Promise<string[]>;
    /**
     * Sets an associated identifier for the Connect data stream.
     *
     * @param key Custom key for identifier.
     * @param identifier The identifier value.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAssociatedIdentifier(key: string, identifier: string): Promise<void>;
    /**
     * Enables or disables Urban Airship location services.
     *
     * @param {boolean} enabled true to enable location, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setLocationEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if location is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if location is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @deprecated removed in version 8.0
     */
    isLocationEnabled(): Promise<any>;
    /**
     * Enables or disables background location.
     *
     * @param {boolean} enabled true to enable background location, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @deprecated removed in version 8.0
     */
    setBackgroundLocationEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if background location is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if background location updates are enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @deprecated removed in version 8.0
     */
    isBackgroundLocationEnabled(): Promise<any>;
    /**
     * Displays the message center.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    displayMessageCenter(): Promise<any>;
    /**
     * Dismiss the message center.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    dismissMessageCenter(): Promise<any>;
    /**
     * Dismiss the inbox message.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    dismissInboxMessage(): Promise<any>;
    /**
     * Dismiss the inbox message in the overlay.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @deprecated removed in version 10.0
     */
    dismissOverlayInboxMessage(): Promise<any>;
    /**
     * Gets the array of inbox messages. Each message will have the following properties:
     * "id": string - The messages ID. Needed to display, mark as read, or delete the message.
     * "title": string - The message title.
     * "sentDate": number - The message sent date in milliseconds.
     * "listIconUrl": string, optional - The icon url for the message.
     * "isRead": boolean - The unread/read status of the message.
     * "extras": object - String to String map of any message extras.
     *
     * @param {function(messages)} success The function to call on success.
     * @param {Array} success.messages The array of inbox messages.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getInboxMessages(): Promise<any>;
    /**
     * Marks an inbox message read.
     *
     * @param {string} messageId The ID of the message to mark as read.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    markInboxMessageRead(messageId: string): Promise<any>;
    /**
     * Deletes an inbox message.
     *
     * @param {string} messageId The ID of the message to delete.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    deleteInboxMessage(messageId: string): Promise<any>;
    /**
     * Displays the inbox message using a full screen view.
     *
     * @param {string} messageId The ID of the message to display.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    displayInboxMessage(messageId: string): Promise<any>;
    /**
     * Forces the inbox to refresh. This is normally not needed as the inbox
     * will automatically refresh on foreground or when a push arrives thats
     * associated with a message, but it can be useful when providing a refresh
     * button for the message listing.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    refreshInbox(): Promise<any>;
    /**
     * Displays the inbox message using an overlay display.
     *
     * @param {string} messageId The ID of the message to display.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @deprecated removed in version 10.0
     */
    overlayInboxMessage(messageId: string): Promise<any>;
    /**
     * Clears a notification by identifier.
     *
     * @param {string} identifier The notification identifier.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     */
    clearNotification(identifier: string): Promise<any>;
    /**
     * Clears all notifications posted by the application.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    clearNotifications(): Promise<any>;
    /**
     * Gets currently active notifications.
     *
     * Note: On Android this functionality is only supported on Android M or higher.
     *
     * @param {function(messages)} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     */
    getActiveNotifications(): Promise<any>;
    /**
     * Enables or disables auto badge. Defaults to `NO`.
     *
     * @param {boolean} enabled true to enable auto badge, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setAutobadgeEnabled(enabled: boolean): Promise<any>;
    /**
     * Sets the badge number.
     *
     * @param count number specified badge to set.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setBadgeNumber(count: number): Promise<any>;
    /**
     * Returns the current badge number.
     *
     * @param {function(badgeNumber)} success The function to call on success.
     * @param {int} success.badgeNumber The current application badge number.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    getBadgeNumber(): Promise<any>;
    /**
     * Clears the badge.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    resetBadge(): Promise<any>;
    /**
     * Sets the iOS notification types. Specify the combination of
     * badges, sound and alerts that are desired.
     *
     * @param types specified notification types.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setNotificationTypes(types: NotificationType): Promise<any>;
    /**
     * Sets the iOS presentation options. Specify the combination of
     * badges, sound and alerts that are desired.
     *
     * @param options types specified presentation options.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setPresentationOptions(options: PresentationOptions): Promise<any>;
    /**
     * Checks if notification sound is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if sound is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isSoundEnabled(): Promise<any>;
    /**
     * Enables or disables notification sound.
     *
     * @param {boolean} enabled true to enable sound, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setSoundEnabled(enabled: boolean): Promise<any>;
    /**
     * Checks if notification vibration is enabled or not.
     *
     * @param {function(enabled)} success Success callback.
     * @param {boolean} success.enabled Flag indicating if vibration is enabled or not.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    isVibrateEnabled(): Promise<any>;
    /**
     * Enables or disables notification vibration.
     *
     * @param {boolean} enabled true to enable vibration, false to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    setVibrateEnabled(enabled: boolean): Promise<any>;
    /**
     * Adds a custom event.
     *
     * @param {object} event The custom event object.
     * @param {string} event.name The event's name.
     * @param {number} [event.value] The event's value.
     * @param {string} [event.transactionId] The event's transaction ID.
     * @param {object} [event.properties] The event's properties. Only numbers, booleans, strings, and array of strings are supported.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     */
    addCustomEvent(event: object): Promise<any>;
    /**
     * Initiates screen tracking for a specific app screen, must be called once per tracked screen.
     *
     * @param {string} screen The screen's string identifier.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 11.0.0
     */
    trackScreen(screen: string): Promise<any>;
    /**
     * Enables features, adding them to the set of currently enabled features.
     *
     * @param {Array<string>} features The features to enable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.0.0
     */
    enableFeature(features: string[]): Promise<any>;
    /**
     * Disables features, removing them from the set of currently enabled features.
     *
     * @param {Array<string>} features The features to disable.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.0.0
     */
    disableFeature(features: string[]): Promise<any>;
    /**
     * Sets the current enabled features, replacing any currently enabled features with the given set.
     *
     * @param {Array<string>} features The features to set as enabled.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.0.0
     */
    setEnabledFeatures(features: string[]): Promise<any>;
    /**
     * Gets the current enabled features.
     *
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.0.0
     */
    getEnabledFeatures(): Promise<any>;
    /**
     * Checks if all of the given features are enabled.
     *
     * @param {Array<string>} features The features to check.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.0.0
     */
    isFeatureEnabled(features: string[]): Promise<any>;
    /**
     * Returns the configuration of the Preference Center with the given ID trough a callback method.
     *
     * @param {string} preferenceCenterId The preference center ID.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.3.0
     */
    getPreferenceCenterConfig(preferenceCenterId: string): Promise<any>;
    /**
     * Opens the Preference Center with the given preferenceCenterId.
     *
     * @param {string} prenferenceCenterId The preference center ID.
     * @param {Function} [success] Success callback.
     * @param {function(message)} [failure] Failure callback.
     * @param {string} failure.message The error message.
     * @since 13.0.0
     */
    openPreferenceCenter(prenferenceCenterId: string): Promise<any>;
}
