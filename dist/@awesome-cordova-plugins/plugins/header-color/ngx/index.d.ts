import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Header Color
 * @description
 * Cordova plugin to change color of header in Android Multitask View
 * @usage
 * ```typescript
 * import { HeaderColor } from '@awesome-cordova-plugins/header-color/ngx';
 *
 * constructor(private headerColor: HeaderColor) { }
 *
 * ...
 *
 * this.headerColor.tint('#becb29');
 * ```
 */
export declare class HeaderColor extends AwesomeCordovaNativePlugin {
    /**
     * Set a color to the task header
     *
     * @param color {string} The hex value of the color
     * @returns {Promise<any>}
     */
    tint(color: string): Promise<any>;
}
