import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Vibration
 * @premier vibration
 * @description Vibrates the device
 * @usage
 * ```typescript
 * import { Vibration } from '@awesome-cordova-plugins/vibration/ngx';
 *
 * constructor(private vibration: Vibration) { }
 *
 * ...
 *
 * // Vibrate the device for a second
 * // Duration is ignored on iOS.
 * this.vibration.vibrate(1000);
 *
 * // Vibrate 2 seconds
 * // Pause for 1 second
 * // Vibrate for 2 seconds
 * // Patterns work on Android and Windows only
 * this.vibration.vibrate([2000,1000,2000]);
 *
 * // Stop any current vibrations immediately
 * // Works on Android and Windows only
 * this.vibration.vibrate(0);
 * ```
 */
export declare class Vibration extends AwesomeCordovaNativePlugin {
    /**
     * Vibrates the device for given amount of time.
     *
     * @param time {number|number[]} Milliseconds to vibrate the device. If passed an array of numbers, it will define a vibration pattern. Pass 0 to stop any vibration immediately.
     */
    vibrate(time: number | number[]): void;
}
