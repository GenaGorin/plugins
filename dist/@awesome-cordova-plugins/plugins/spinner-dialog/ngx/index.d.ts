import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface SpinnerDialogIOSOptions {
    /**
     * Opacity of the overlay, between 0 (transparent) and 1 (opaque). Default: 0.35
     */
    overlayOpacity?: number;
    /**
     * Red component of the text color, between 0 and 1. Default: 1
     */
    textColorRed?: number;
    /**
     * Green component of the text color, between 0 and 1. Default: 1
     */
    textColorGreen?: number;
    /**
     * Blue component of the text color, between 0 and 1. Default: 1
     */
    textColorBlue?: number;
}
/**
 * @name Spinner Dialog
 * @description
 * Cordova plugin for showing a native spinner based on Paldom/SpinnerDialog.
 *
 * Requires Cordova plugin: `cordova-plugin-native-spinner`. For more info, please see the [Spinner Dialog plugin docs](https://github.com/greybax/cordova-plugin-native-spinner).
 * @usage
 * ```typescript
 * import { SpinnerDialog } from '@awesome-cordova-plugins/spinner-dialog/ngx';
 *
 * constructor(private spinnerDialog: SpinnerDialog) { }
 *
 * ...
 *
 * this.spinnerDialog.show();
 *
 * this.spinnerDialog.hide();
 * ```
 * @interfaces
 * SpinnerDialogIOSOptions
 */
export declare class SpinnerDialog extends AwesomeCordovaNativePlugin {
    /**
     * Shows the spinner dialog
     *
     * @param title {string} Spinner title (shows on Android only)
     * @param message {string} Spinner message
     * @param cancelCallback {boolean|function} Set to true to set spinner not cancelable. Or provide a function to call when the user cancels the spinner.
     * @param iOSOptions {object} Options for iOS only
     */
    show(title?: string, message?: string, cancelCallback?: any, iOSOptions?: SpinnerDialogIOSOptions): void;
    /**
     * Hides the spinner dialog if visible
     */
    hide(): void;
}
