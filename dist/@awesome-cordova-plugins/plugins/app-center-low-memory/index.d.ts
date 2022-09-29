import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name App Center Low Memory
 * @description
 * Generates a low memory warning.
 * For more info, please see: https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory
 * @usage
 * ```typescript
 * import { LowMemory } from '@awesome-cordova-plugins/app-center-low-memory/ngx';
 *
 * ...
 *
 * constructor(private lowMemory: LowMemory) { }
 *
 * async warning() {
 *   await this.lowMemory.generateLowMemory();
 * }
 * ```
 */
export declare class LowMemoryOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Generates a low memory warning.
     * For more info, please see: https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory
     *
     * @returns {Promise<void>}
     */
    generateLowMemory(): Promise<void>;
}

export declare const LowMemory: LowMemoryOriginal;