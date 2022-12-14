import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Browser Tab
 * @description
 * This plugin provides an interface to in-app browser tabs that exist on some mobile platforms, specifically [Custom Tabs](http://developer.android.com/tools/support-library/features.html#custom-tabs) on Android (including the [Chrome Custom Tabs](https://developer.chrome.com/multidevice/android/customtabs) implementation), and [SFSafariViewController](https://developer.apple.com/library/ios/documentation/SafariServices/Reference/SFSafariViewController_Ref/) on iOS.
 *
 * @usage
 * ```typescript
 * import { BrowserTab } from '@awesome-cordova-plugins/browser-tab/ngx';
 *
 * constructor(private browserTab: BrowserTab) {
 *
 *   browserTab.isAvailable()
 *     .then(isAvailable => {
 *       if (isAvailable) {
 *         browserTab.openUrl('https://ionic.io');
 *       } else {
 *         // open URL with InAppBrowser instead or SafariViewController
 *       }
 *     });
 * }
 *
 * ```
 */
export declare class BrowserTab extends AwesomeCordovaNativePlugin {
    /**
     * Check if BrowserTab option is available
     * @return {Promise<any>} Returns a promise that resolves when check is successful and returns true or false
     */
    isAvailable(): Promise<any>;
    /**
     * Opens the provided URL using a browser tab
     * @param {string} url  The URL you want to open
     * @return {Promise<any>} Returns a promise that resolves when check open was successful
     */
    openUrl(url: string): Promise<any>;
    /**
     * Closes browser tab
     * @return {Promise<any>} Returns a promise that resolves when close was finished
     */
    close(): Promise<any>;
}
