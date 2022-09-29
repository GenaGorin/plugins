import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Sms Retriever
 * @description
 * This plugin retrives the SMS which arrive without requiring READ permissions.
 * @usage
 * ```typescript
 * import { SmsRetriever } from '@awesome-cordova-plugins/sms-retriever/ngx';
 *
 *
 * constructor(private smsRetriever: SmsRetriever) { }
 *
 * ...
 *
 *
 * this.smsRetriever.getAppHash()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * this.smsRetriever.startWatching()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SmsRetriever extends AwesomeCordovaNativePlugin {
    /**
     * This function start wathching message arrive event and retrive message text.
     *
     * @returns {Promise<string>} Returns a promise that resolves when retrives SMS text or TIMEOUT after 5 min.
     */
    startWatching(): Promise<string>;
    /**
     * This function is to get hash string of APP.
     *
     * @returns {Promise<string>} Returns a promise that resolves when successfully generate hash of APP.
     */
    getAppHash(): Promise<string>;
}
