import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Android Notch
 * @description
 * This plugin enables developers to get the cutout and android devices inset sizes
 * It is based on the cordova plugin developed by @tobspr: https://github.com/tobspr/cordova-plugin-android-notch
 * This plugin works on all android versions, but we can only detect notches starting from Android 9.
 * @usage
 * ```typescript
 * import { AndroidNotch } from '@awesome-cordova-plugins/android-notch/ngx';
 *
 *
 * constructor(private androidNotch: AndroidNotch) { }
 *
 * ...
 *
 *
 * this.androidNotch.hasCutout()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetTop()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetRight()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetBottom()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * this.androidNotch.getInsetLeft()
 *    .then((px: number) => console.log('Inset size: '), px)
 *    .catch((error: any) => console.log('Error: ', error))
 *
 * ```
 */
export declare class AndroidNotchOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Returns true if the android device has cutout
     *
     * @returns {Promise<boolean>}
     */
    hasCutout(): Promise<boolean>;
    /**
     * Returns the heigth of the top inset
     *
     * @returns {Promise<number>}
     */
    getInsetTop(): Promise<number>;
    /**
     * Returns the heigth of the right inset
     *
     * @returns {Promise<number>}
     */
    getInsetRight(): Promise<number>;
    /**
     * Returns the heigth of the bottom inset
     *
     * @returns {Promise<number>}
     */
    getInsetBottom(): Promise<number>;
    /**
     * Returns the heigth of the left inset
     *
     * @returns {Promise<number>}
     */
    getInsetLeft(): Promise<number>;
}

export declare const AndroidNotch: AndroidNotchOriginal;