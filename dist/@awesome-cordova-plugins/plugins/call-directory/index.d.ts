import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface CallDirectoryItem {
    label: string;
    number: string;
}
export interface CallDirectoryLog {
    plugin: string[];
    extension: string[];
}
/**
 * @name Call Directory
 * @description
 * This plugin can add phone numbers to an Callkit call directory extension. Call `reloadExtension` after using `addIdentification` and `removeIdentification`
 * to process the changes in the call directory extension.
 * @usage
 * ```typescript
 * import { CallDirectory } from '@awesome-cordova-plugins/call-directory/ngx';
 *
 *
 * constructor(private callDirectory: CallDirectory) { }
 *
 *
 * let items = [{label: "Hello", number: "123"}];
 * this.callDirectory.addIdentification(items)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.callDirectory.reloadExtension()
 *   .then(res: string) => console.log(res))
 *   .catch((error: any) => console.error(error));
 * ```
 * @Interfaces
 * CallDirectoryItem
 * CallDirectoryLog
 */
export declare class CallDirectoryOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Check if the call directory extension is available and enabled
     *
     * @returns {Promise<boolean>} Returns a promise with result
     */
    isAvailable(): Promise<boolean>;
    /**
     * Add identification numbers
     *
     * @param {CallDirectoryItem[]} items Set of numbers with labels
     * @returns {Promise<any>} Returns a promise that resolves when numbers are added
     */
    addIdentification(items: CallDirectoryItem[]): Promise<any>;
    /**
     * Remove identification numbers
     *
     * @param {CallDirectoryItem[]} items Set of numbers with arbitrary label
     * @returns {Promise<any>} Returns a promise that resolves when numbers are removed
     */
    removeIdentification(items: CallDirectoryItem[]): Promise<any>;
    /**
     * Remove all items from call directory. Refreshes immediately.
     *
     * @returns {Promise<any>} Returns a promise after refresh with message
     */
    removeAllIdentification(): Promise<any>;
    /**
     * Get all numbers and labels in call directory
     *
     * @returns {CallDirectoryItem[]} Returns a promise that resolves with an array of all items
     */
    getAllItems(): Promise<CallDirectoryItem[]>;
    /**
     * Reload extension to process queued changes
     *
     * @returns {Promise<string>} Returns a promise after refresh with message
     */
    reloadExtension(): Promise<string>;
    /**
     * Get log from plugin and call directory extension
     *
     * @returns {Promise<CallDirectoryLog>} Returns a promise with an object of log messages
     */
    getLog(): Promise<CallDirectoryLog>;
}

export declare const CallDirectory: CallDirectoryOriginal;