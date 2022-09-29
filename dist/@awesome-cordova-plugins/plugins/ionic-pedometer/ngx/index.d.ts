import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Ionic Pedometer
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { IonicPedometer } from '@awesome-cordova-plugins/ionic-pedometer';
 *
 *
 * constructor(private ionicPedometer: IonicPedometer) { }
 *
 * ...
 *
 *
 * this.ionicPedometer.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class IonicPedometer extends AwesomeCordovaNativePlugin {
    /**
     * This function does something
     * @param arg1 {string} Some param to configure something
     * @param arg2 {number} Another param to configure something
     * @return {Promise<any>} Returns a promise that resolves when something happens
     */
    isStepCountingAvailable(successCallback: Function, failureCallback: Function): Promise<any>;
    startPedometerUpdates(successHandler: Function, onError: Function): Promise<any>;
}
