import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @paid
 * @name TealiumAdIdentifier
 * @description
 * This module depends on the [Tealium Cordova Plugin](https://github.com/tealium/cordova-plugin). Without it, this module will not do anything.
 * Makes the IDFA and Google Ad Identifier available in the Tealium data layer.
 * @usage
 * ```
 * import { TealiumAdIdentifier } from '@awesome-cordova-plugins/tealium-adidentifier/ngx';
 *
 *
 * constructor(private adIdentifier: TealiumAdIdentifier) { }
 *
 * ...
 *
 *
 * this.adIdentifier.setPersistent("main");
 * this.adIdentifier.setVolatile("main");
 *
 * ```
 */
export declare class TealiumAdIdentifier extends AwesomeCordovaNativePlugin {
    /**
     * This function stores the ad identifier information as persistent data
     *
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @returns {Promise<any>} Returns a promise that resolves when something happens
     */
    setPersistent(instanceName: string): Promise<any>;
    /**
     * This function stores the ad identifier information as volatile data
     *
     * @param instanceName {string} Your arbitrary Tealium instance name provided at init time
     * @returns {Promise<any>} Returns a promise that resolves when something happens
     */
    setVolatile(instanceName: string): Promise<any>;
}
