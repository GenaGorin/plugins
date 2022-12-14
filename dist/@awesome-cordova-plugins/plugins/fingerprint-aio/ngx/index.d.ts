import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface FingerprintOptions {
    /**
     * Title in biometric prompt (android only)
     *
     * @default {APP_NAME} Biometric Sign On
     */
    title?: string;
    /**
     * Subtitle in biometric Prompt (android only)
     *
     * @default null
     */
    subtitle?: string;
    /**
     * Description in biometric Prompt
     *
     * @default null
     */
    description?: string;
    /**
     * Title of fallback button.
     *
     * @default "Use Pin"
     */
    fallbackButtonTitle?: string;
    /**
     * Title for cancel button on Android
     *
     * @default "Cancel"
     */
    cancelButtonTitle?: string;
    /**
     * Disable 'use backup' option.
     *
     * @default false
     */
    disableBackup?: boolean;
}
export interface FingerprintSecretOptions extends FingerprintOptions {
    /**
     * String secret to encrypt and save, use simple strings matching the regex [a-zA-Z0-9\-]+
     */
    secret: string;
    /**
     * If `true` secret will be deleted when biometry items are deleted or enrolled
     *
     * @default false
     */
    invalidateOnEnrollment?: boolean;
}
/**
 * @name Fingerprint AIO
 * @description
 * Use simple fingerprint authentication on Android and iOS.
 * Requires Cordova plugin: cordova-plugin-fingerprint-aio. For more info about plugin, vist: https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio
 * @usage
 * ```typescript
 * import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio/ngx';
 *
 * constructor(private faio: FingerprintAIO) { }
 *
 * ...
 *
 * this.faio.show().then((result: any) => console.log(result)).catch((error: any) => console.log(error));
 *
 *  OR with options...
 *
 * this.faio.show({
 *     title: 'Biometric Authentication', // (Android Only) | optional | Default: "<APP_NAME> Biometric Sign On"
 *     subtitle: 'Coolest Plugin ever' // (Android Only) | optional | Default: null
 *     description: 'Please authenticate' // optional | Default: null
 *     fallbackButtonTitle: 'Use Backup', // optional | When disableBackup is false defaults to "Use Pin".
 *                                        // When disableBackup is true defaults to "Cancel"
 *     disableBackup:true,  // optional | default: false
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ...
 *
 * this.faio.registerBiometricSecret({
 *      description: "Some biometric description", // optional | Default: null
 *      secret: "my-super-secret", // mandatory
 *      invalidateOnEnrollment: true, // optional | Default: false
 *      disableBackup: true, // (Android Only) | optional | always `true` on Android
 * })
 * .then((result: any) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 *  ...
 *
 * this.faio.loadBiometricSecret({
 *      description: "Some biometric description", // optional | Default: null
 *      disableBackup: true, // always disabled on Android
 * })
 * .then((result: string) => console.log(result))
 * .catch((error: any) => console.log(error));
 *
 * ```
 * @interfaces
 * FingerprintOptions
 * FingerprintSecretOptions
 */
export declare class FingerprintAIO extends AwesomeCordovaNativePlugin {
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_UNKNOWN_ERROR: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_UNAVAILABLE: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_AUTHENTICATION_FAILED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_SDK_NOT_SUPPORTED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_HARDWARE_NOT_SUPPORTED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_PERMISSION_NOT_GRANTED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_NOT_ENROLLED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_INTERNAL_PLUGIN_ERROR: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_DISMISSED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_PIN_OR_PATTERN_DISMISSED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_SCREEN_GUARD_UNSECURED: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_LOCKED_OUT: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_LOCKED_OUT_PERMANENT: number;
    /**
     * Convenience constant
     *
     * @type {number}
     */
    BIOMETRIC_SECRET_NOT_FOUND: number;
    /**
     * Check if fingerprint authentication is available
     *
     * @returns {Promise<any>} Returns a promise with result
     */
    isAvailable(): Promise<any>;
    /**
     * Show authentication dialogue and register secret
     *
     * @param {FingerprintSecretOptions} options Options for platform specific fingerprint API
     * @returns {Promise<any>} Returns a promise that resolves when authentication was successful
     */
    registerBiometricSecret(options: FingerprintSecretOptions): Promise<any>;
    /**
     * Show authentication dialogue and load secret
     *
     * @param {FingerprintOptions} options Options for platform specific fingerprint API
     * @returns {Promise<any>} Returns a promise that resolves when authentication was successful
     */
    loadBiometricSecret(options: FingerprintOptions): Promise<string>;
    /**
     * Show authentication dialogue
     *
     * @param {FingerprintOptions} options Options for platform specific fingerprint API
     * @returns {Promise<any>} Returns a promise that resolves when authentication was successful
     */
    show(options: FingerprintOptions): Promise<any>;
}
