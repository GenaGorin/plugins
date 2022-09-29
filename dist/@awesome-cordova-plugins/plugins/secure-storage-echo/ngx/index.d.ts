import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface SecureStorageEchoOptions {
    android: {
        /**
         * See https://github.com/mibrito707/cordova-plugin-secure-storage-echo#sharing-data-android
         */
        packageName?: string;
        /**
         * Sets the duration of time (seconds) for which the Private Encryption Key is authorized to be used after the user is successfully authenticated.
         * See https://developer.android.com/reference/android/security/keystore/KeyGenParameterSpec.Builder.html#setUserAuthenticationValidityDurationSeconds(int)
         */
        userAuthenticationValidityDuration?: number;
        /**
         * Custom title for Confirm Credentials screen.
         * See https://developer.android.com/reference/android/app/KeyguardManager.html#createConfirmDeviceCredentialIntent(java.lang.CharSequence,%20java.lang.CharSequence)
         */
        unlockCredentialsTitle?: string;
        /**
         * Custom description for Confirm Credentials screen.
         */
        unlockCredentialsDescription?: string;
    };
}
/**
 * @hidden
 */
export declare class SecureStorageEchoObject {
    private _objectInstance;
    constructor(_objectInstance: any);
    /**
     * Gets a stored item
     *
     * @param key {string}
     * @returns {Promise<string>}
     */
    get(key: string): Promise<string>;
    /**
     * Stores a value
     *
     * @param key {string}
     * @param value {string}
     * @returns {Promise<any>}
     */
    set(key: string, value: string): Promise<any>;
    /**
     * Removes a single stored item
     *
     * @param key {string}
     * @returns {Promise<string>} returns a promise that resolves with the key that was removed
     */
    remove(key: string): Promise<string>;
    /**
     * Get all references from the storage.
     *
     * @returns {Promise<string[]>} returns a promise that resolves with array of keys storage
     */
    keys(): Promise<string[]>;
    /**
     * Clear all references from the storage.
     *
     * @returns {Promise<any>}
     */
    clear(): Promise<any>;
    /**
     * Brings up the screen-lock settings
     *
     * @returns {Promise<any>}
     */
    secureDevice(): Promise<any>;
}
/**
 * @name Secure Storage Echo
 * @description
 * This plugin gets, sets and removes key,value pairs from a device's secure storage.
 *
 * Requires Cordova plugin: `cordova-plugin-secure-storage-echo`. For more info, please see the [Cordova Secure Storage docs](https://github.com/mibrito707/cordova-plugin-secure-storage-echo).
 *
 * The browser platform is supported as a mock only. Key/values are stored unencrypted in localStorage.
 * @usage
 *
 * ```typescript
 * import { SecureStorageEcho, SecureStorageEchoObject } from '@awesome-cordova-plugins/secure-storage-echo/ngx';
 *
 * constructor(private secureStorageEcho: SecureStorageEcho) { }
 *
 * ...
 *
 * this.secureStorageEcho.create('my_store_name')
 *   .then((storage: SecureStorageEchoObject) => {
 *
 *      storage.get('key')
 *        .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.set('key', 'value')
 *        .then(
 *         data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *      storage.remove('key')
 *      .then(
 *          data => console.log(data),
 *          error => console.log(error)
 *      );
 *
 *   });
 *
 *
 * ```
 * @classes
 * SecureStorageEchoObject
 */
export declare class SecureStorageEcho extends AwesomeCordovaNativePlugin {
    /**
     * Creates a namespaced storage.
     *
     * @param store {string}
     * @param options
     * @returns {Promise<SecureStorageEchoObject>}
     */
    create(store: string, options?: SecureStorageEchoOptions): Promise<SecureStorageEchoObject>;
}
