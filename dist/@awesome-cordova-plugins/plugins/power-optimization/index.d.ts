import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Power Optimization
 * @description
 * Android Custom Roms made sometimes your apps unfunctional due to being killed in the background, notification messages do not appearing or your services being killed by agressive power saving mode.
 * The Power Optimization plugin give you android PowerManager methods with cordova.
 * @usage
 * ```typescript
 * import { PowerOptimization } from '@awesome-cordova-plugins/power-optimization/ngx';
 *
 * constructor(private powerOptimization: PowerOptimization) { }
 *
 * ...
 *
 * this.powerOptimization.IsIgnoringBatteryOptimizations()
 *   .then(onSuccess)
 *   .catch(onError);
 *
 * ```
 */
export declare class PowerOptimizationOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Check if the battery optimization is ignoring
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    IsIgnoringBatteryOptimizations(): Promise<any>;
    /**
     * Request permisson to ignore optimizations:
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    RequestOptimizations(): Promise<any>;
    /**
     * Go to battery optimizations configurations menu:
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    RequestOptimizationsMenu(): Promise<any>;
    /**
     * Check if have any data restrictions in background:
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    IsIgnoringDataSaver(): Promise<any>;
    /**
     * Go to data restrictions in background configurations menu:
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    RequestDataSaverMenu(): Promise<any>;
    /**
     * Check if have another battery restriction is present into phone (like huawei, xiaomi, etc):
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    HaveProtectedAppsCheck(): Promise<any>;
    /**
     * Go to configurations menu if another battery restriction is present into phone (like huawei, xiaomi, etc). You can send true into params if you want to force show the menu (is only show the fist time without params):
     * For more info, please check https://github.com/snt1017/cordova-plugin-power-optimization
     *
     * @returns {Promise<any>}
     */
    ProtectedAppCheck(): Promise<any>;
}

export declare const PowerOptimization: PowerOptimizationOriginal;