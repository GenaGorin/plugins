import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare enum Connection {
    UNKNOWN = "unknown",
    ETHERNET = "ethernet",
    WIFI = "wifi",
    CELL_2G = "2g",
    CELL_3G = "3g",
    CELL_4G = "4g",
    CELL = "cellular",
    NONE = "none"
}
/**
 * @name Network
 * @premier network-information
 * @description
 * Requires Cordova plugin: cordova-plugin-network-information. For more info, please see the [Network plugin docs](https://github.com/apache/cordova-plugin-network-information).
 * @usage
 * ```typescript
 * import { Network } from '@awesome-cordova-plugins/network/ngx';
 *
 * constructor(private network: Network) { }
 *
 * ...
 *
 * // watch network for a disconnection
 * let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
 *   console.log('network was disconnected :-(');
 * });
 *
 * // stop disconnect watch
 * disconnectSubscription.unsubscribe();
 *
 *
 * // watch network for a connection
 * let connectSubscription = this.network.onConnect().subscribe(() => {
 *   console.log('network connected!');
 *   // We just got a connection but we need to wait briefly
 *    // before we determine the connection type. Might need to wait.
 *   // prior to doing any api requests as well.
 *   setTimeout(() => {
 *     if (this.network.type === 'wifi') {
 *       console.log('we got a wifi connection, woohoo!');
 *     }
 *   }, 3000);
 * });
 *
 * // stop connect watch
 * connectSubscription.unsubscribe();
 *
 * ```
 * @advanced
 * The `type` property will return one of the following connection types: `unknown`, `ethernet`, `wifi`, `2g`, `3g`, `4g`, `cellular`, `none`
 */
export declare class NetworkOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Constants for possible connection types
     */
    Connection: {
        UNKNOWN: string;
        ETHERNET: string;
        WIFI: string;
        CELL_2G: string;
        CELL_3G: string;
        CELL_4G: string;
        CELL: string;
        NONE: string;
    };
    /**
     * Connection type
     *
     * @returns {string}
     */
    type: string;
    /**
     * Downlink Max Speed
     *
     * @returns {string}
     */
    downlinkMax: string;
    /**
     * Returns an observable to watch connection changes
     *
     * @returns {Observable<'connected' | 'disconnected'>}
     */
    onChange(): Observable<'connected' | 'disconnected'>;
    /**
     * Get notified when the device goes offline
     *
     * @returns {Observable<any>} Returns an observable.
     */
    onDisconnect(): Observable<any>;
    /**
     * Get notified when the device goes online
     *
     * @returns {Observable<any>} Returns an observable.
     */
    onConnect(): Observable<any>;
}

export declare const Network: NetworkOriginal;