import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Is Debug
 * @description
 * Detect if the app is running in debug mode or not.
 * Debug mode is when the app is built and installed locally via xcode / eclipse / the cordova cli etc, compared to release mode when the app was downloaded from the app / play store via an end user.
 * @usage
 * ```typescript
 * import { IsDebug } from '@awesome-cordova-plugins/is-debug/ngx';
 *
 * constructor(private isDebug: IsDebug) { }
 *
 * ...
 *
 * this.isDebug.getIsDebug()
 *   .then(isDebug => console.log('Is debug:', isDebug))
 *   .catch(err => console.error(err));
 *
 * ```
 */
export declare class IsDebug extends AwesomeCordovaNativePlugin {
    /**
     * Determine if an app was installed via xcode / eclipse / the ionic CLI etc
     *
     * @returns {Promise<boolean>} Returns a promise that resolves with true if the app was installed via xcode / eclipse / the ionic CLI etc. It will resolve to false if the app was downloaded from the app / play store by the end user.
     */
    getIsDebug(): Promise<boolean>;
}
