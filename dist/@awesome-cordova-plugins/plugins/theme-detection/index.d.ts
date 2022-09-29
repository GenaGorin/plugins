import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface ThemeDetectionResponse {
    value: boolean;
    message: string;
}
/**
 * @beta
 * @name Theme Detection
 * @description
 * Cordova plugin to detect whether dark mode is enabled or not
 * @usage
 * ```typescript
 * import { ThemeDetection } from '@awesome-cordova-plugins/theme-detection';
 *
 *
 * constructor(private themeDetection: ThemeDetection) { }
 *
 * ...
 *
 * this.themeDetection.isAvailable()
 *   .then((res: ThemeDetectionResponse) => {
 *      if(res.value) {
 *        this.themeDetection.isDarkModeEnabled().then((res: ThemeDetectionResponse) => {
 *          console.log(res);
 *        })
 *        .catch((error: any) => console.error(error));
 *      }
 *   })
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class ThemeDetectionOriginal extends AwesomeCordovaNativePlugin {
    /**
     *
     * @returns {Promise<ThemeDetectionResponse>}
     *  Returns a promise with an object that has a boolean property which gives information if the detection is available or not
     */
    isAvailable(): Promise<ThemeDetectionResponse>;
    /**
     *
     * @returns {Promise<ThemeDetectionResponse>}
     *  Returns a promise with an object that has a boolean property which gives information if dark mode is enabled or not
     */
    isDarkModeEnabled(): Promise<ThemeDetectionResponse>;
}

export declare const ThemeDetection: ThemeDetectionOriginal;