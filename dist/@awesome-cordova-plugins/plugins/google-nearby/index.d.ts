import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @name Google Nearby
 * @description
 * This plugin adds support for the Google Nearby Messages API.
 * @usage
 * ```typescript
 * import { GoogleNearby } from '@awesome-cordova-plugins/google-nearby/ngx';
 *
 *
 * constructor(private googleNearby: GoogleNearby) { }
 *
 * this.googleNearby.publish('Hello')
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.googleNearby.subscribe()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 */
export declare class GoogleNearbyOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Publish a message
     *
     * @param message {string} Message to publish
     * @returns {Promise<any>} Returns a promise that resolves when the message got published
     */
    publish(message: string): Promise<any>;
    /**
     * Subscribe to receive messages
     *
     * @returns {Observable<any>} Returns an observable that emits received messages
     */
    subscribe(): Observable<any>;
}

export declare const GoogleNearby: GoogleNearbyOriginal;