import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Google Analytics
 * @description
 * This plugin connects to Google's native Universal Analytics SDK
 * Prerequisites:
 * - A Cordova 3.0+ project for iOS and/or Android
 * - A Mobile App property through the Google Analytics Admin Console
 * - (Android) Google Play Services SDK installed via [Android SDK Manager](https://developer.android.com/sdk/installing/adding-packages.html)
 * @usage
 * ```typescript
 * import { GoogleAnalytics } from '@awesome-cordova-plugins/google-analytics/ngx';
 *
 * constructor(private ga: GoogleAnalytics) { }
 *
 * ...
 *
 * this.ga.startTrackerWithId('YOUR_TRACKER_ID')
 *    .then(() => {
 *      console.log('Google analytics is ready now');
 *       this.ga.trackView('test');
 *      // Tracker is ready
 *      // You can now track pages or set additional information such as AppVersion or UserId
 *    })
 *    .catch(e => console.log('Error starting GoogleAnalytics', e));
 *
 *
 * ```
 */
export declare class GoogleAnalytics extends AwesomeCordovaNativePlugin {
    /**
     * In your 'deviceready' handler, set up your Analytics tracker.
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/
     *
     * @param {string}  id  Your Google Analytics Mobile App property
     * @param {number} interval Optional dispatch period in seconds. Defaults to 30.
     * @returns {Promise<any>}
     */
    startTrackerWithId(id: string, interval?: number): Promise<any>;
    /**
     * Enabling Advertising Features in Google Analytics allows you to take advantage of Remarketing, Demographics & Interests reports, and more
     *
     * @param allow {boolean}
     * @returns {Promise<any>}
     */
    setAllowIDFACollection(allow: boolean): Promise<any>;
    /**
     * Set a UserId
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/user-id
     *
     * @param {string} id User ID
     * @returns {Promise<any>}
     */
    setUserId(id: string): Promise<any>;
    /**
     * Set a anonymize Ip address
     *
     * @param anonymize {boolean} Set to true to anonymize the IP Address
     * @returns {Promise<any>}
     */
    setAnonymizeIp(anonymize: boolean): Promise<any>;
    /**
     * Set the app version
     *
     * @param appVersion {string} App version
     * @returns {Promise<any>}
     */
    setAppVersion(appVersion: string): Promise<any>;
    /**
     * Get a variable
     *
     * @param key {string} Variable
     * @returns {Promise<any>}
     */
    getVar(key: string): Promise<any>;
    /**
     * Set a variable
     *
     * @param key {string} Variable
     * @param value {string} Parameter
     * @returns {Promise<any>}
     */
    setVar(key: string, value: string): Promise<any>;
    /**
     * Set OptOut
     *
     * @param optout {boolean}
     * @returns {Promise<any>}
     */
    setOptOut(optout: boolean): Promise<any>;
    /**
     * Enable verbose logging
     *
     * @returns {Promise<any>}
     */
    debugMode(): Promise<any>;
    /**
     * Track custom metric
     *
     * @param key {number}
     * @param value {any}
     * @returns {Promise<any>}
     */
    trackMetric(key: number, value?: number): Promise<any>;
    /**
     * Track a screen
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/screens
     *
     * @param title {string} Screen title
     * @param campaignUrl {string} Campaign url for measuring referrals
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    trackView(title: string, campaignUrl?: string, newSession?: boolean): Promise<any>;
    /**
     * Add a Custom Dimension
     * https://developers.google.com/analytics/devguides/platform/customdimsmets
     *
     * @param key {number}
     * @param value {string}
     * @returns {Promise<any>}
     */
    addCustomDimension(key: number, value: string): Promise<any>;
    /**
     * Track an event
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/events
     *
     * @param category {string}
     * @param action {string}
     * @param label {string}
     * @param value {number}
     * @param newSession {boolean} Set to true to create a new session
     * @returns {Promise<any>}
     */
    trackEvent(category: string, action: string, label?: string, value?: number, newSession?: boolean): Promise<any>;
    /**
     * Track an exception
     *
     * @param description {string}
     * @param fatal {boolean}
     * @returns {Promise<any>}
     */
    trackException(description: string, fatal: boolean): Promise<any>;
    /**
     * Track User Timing (App Speed)
     *
     * @param category {string}
     * @param intervalInMilliseconds {number}
     * @param variable {string}
     * @param label {string}
     * @returns {Promise<any>}
     */
    trackTiming(category: string, intervalInMilliseconds: number, variable: string, label: string): Promise<any>;
    /**
     * Add a Transaction (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addTrans
     *
     * @param id {string}
     * @param affiliation {string}
     * @param revenue {number}
     * @param tax {number}
     * @param shipping {number}
     * @param currencyCode {string}
     * @returns {Promise<any>}
     */
    addTransaction(id: string, affiliation: string, revenue: number, tax: number, shipping: number, currencyCode: string): Promise<any>;
    /**
     * Add a Transaction Item (Ecommerce)
     * https://developers.google.com/analytics/devguides/collection/analyticsjs/ecommerce#addItem
     *
     * @param {string}  id
     * @param {string}  name
     * @param {string}  sku
     * @param {string}  category
     * @param {number}  price
     * @param {number}  quantity
     * @param {string}  currencyCode
     * @returns {Promise<any>}
     */
    addTransactionItem(id: string, name: string, sku: string, category: string, price: number, quantity: number, currencyCode: string): Promise<any>;
    /**
     * Enable/disable automatic reporting of uncaught exceptions
     *
     * @param shouldEnable {boolean}
     * @returns {Promise<any>}
     */
    enableUncaughtExceptionReporting(shouldEnable: boolean): Promise<any>;
    /**
     * Manually dispatch any data
     *
     * @returns {Promise<any>}
     * @platform
     */
    dispatch(): Promise<any>;
}
