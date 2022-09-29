import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @name Lets Cooee
 * @description
 * AI driven Personalised Notifications for Better Customer Engagement
 *
 * @usage
 * ```typescript
 * import { Cooee } from '@awesome-cordova-plugins/lets-cooee/nx';
 *
 *
 * constructor(private cooee: Cooee) { }
 *
 * ...
 *
 *
 * this.cooee.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class CooeeOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Send the given user data and user properties to the server.
     * @return {Promise<any>} Returns a promise so user can be notified.
     * @param eventName {string} Name of the event
     * @param eventProperties {Record<string, any>} Properties of the event
     */
    sendEvent(eventName: string, eventProperties: Record<string, any>): Promise<any>;
    /**
     * Send the given user data and user properties to the server.
     * @return {Promise<any>} Returns a promise so user can be notified.
     * @param userProfile {Record<string, any>} User data to send to the server
     */
    updateUserProfile(userProfile: Record<string, any>): Promise<any>;
    /**
     * Send the given screen name with every event.
     * @return {Promise<any>} Returns a promise so user can be notified.
     * @param screenName {string} Screen name to send to the server
     */
    setCurrentScreen(screenName: string): Promise<any>;
    /**
     * Provide Cooee's userID assigned to the current user.
     * @return {Promise<any>} Returns a promise with userId.
     */
    getUserID(): Promise<any>;
    /**
     * Provides callback for the onCooeeCTAListener event.
     * @return {Observable<Any>} Returns an observable record.
     */
    addCooeeCTAListener(): Observable<any>;
}

export declare const Cooee: CooeeOriginal;