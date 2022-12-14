import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * Specific data for Android implementation
 */
export interface AndroidData {
    extras: object;
    flags: number;
    category: string;
}
/**
 * Possibly Event Data types
 */
export declare type EventData = object | AndroidData | null;
/**
 * @name Broadcaster
 * @description
 * This plugin adds exchanging events between native code and your app.
 * @usage
 * ```typescript
 * import { Broadcaster } from '@awesome-cordova-plugins/broadcaster/ngx';
 *
 * constructor(private broadcaster: Broadcaster) { }
 *
 * ...
 *
 * // Listen to events from Native
 * this.broadcaster.addEventListener('eventName').subscribe((event) => console.log(event));
 *
 * // Send event to Native
 * this.broadcaster.fireNativeEvent('eventName', {}).then(() => console.log('success'));
 *
 * ```
 */
export declare class BroadcasterOriginal extends AwesomeCordovaNativePlugin {
    /**
     * This function listen to an event sent from the native code
     *
     * @param {string} eventName
     * @param {boolean} isGlobal Valid only for Android. It allows to listen for global messages(i.e. intents)
     * @returns {Observable<any>} Returns an observable to watch when an event is received
     */
    addEventListener(eventName: string, isGlobal?: boolean): Observable<any>;
    /**
     * This function sends data to the native code
     *
     * @param {string} eventName
     * @param {boolean} isGlobalOrEventData means that message is global (valid only on Android)
     * @param {AndroidData} isGlobalOrEventData allows to specify 'flags` and 'category' (valid only on Android)
     * @param {object} isGlobalOrEventData allows to specify a generic object containing custom event data (all platform)
     * @param {AndroidData} [data] if isGlobal is set, allows to specify 'flags` and 'category' if isGlobal is set (valid only on Android)
     * @param {object} [data] if isGlobal is set, allows to specify a generic object containing custom event data (all platform)
     * @returns {Promise<any>} Returns a promise that resolves when an event is successfully fired
     */
    fireNativeEvent(eventName: string, isGlobalOrEventData: boolean | EventData, data?: EventData): Promise<any>;
}

export declare const Broadcaster: BroadcasterOriginal;