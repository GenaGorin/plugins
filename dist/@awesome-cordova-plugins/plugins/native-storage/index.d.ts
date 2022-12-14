import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Native Storage
 * @premier nativestorage
 * @description Native storage of variables in Android and iOS
 * @usage
 * ```typescript
 * import { NativeStorage } from '@awesome-cordova-plugins/native-storage/ngx';
 *
 * constructor(private nativeStorage: NativeStorage) { }
 *
 * ...
 *
 * this.nativeStorage.setItem('myitem', {property: 'value', anotherProperty: 'anotherValue'})
 *   .then(
 *     () => console.log('Stored item!'),
 *     error => console.error('Error storing item', error)
 *   );
 *
 * this.nativeStorage.getItem('myitem')
 *   .then(
 *     data => console.log(data),
 *     error => console.error(error)
 *   );
 * ```
 */
export declare class NativeStorageOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Initialises shared storage with the suite name when using app groups in iOS
     *
     * @param reference {string}
     * @returns {Promise<void>}
     */
    initWithSuiteName(reference: string): Promise<void>;
    /**
     * Stores a value
     *
     * @param reference {string}
     * @param value
     * @returns {Promise<any>}
     */
    setItem(reference: string, value: any): Promise<any>;
    /**
     * Gets a stored item
     *
     * @param reference {string}
     * @returns {Promise<any>}
     */
    getItem(reference: string): Promise<any>;
    /**
     * Retrieving all keys
     *
     * @returns {Promise<any>}
     */
    keys(): Promise<any>;
    /**
     * Removes a single stored item
     *
     * @param reference {string}
     * @returns {Promise<any>}
     */
    remove(reference: string): Promise<any>;
    /**
     * Removes all stored values.
     *
     * @returns {Promise<any>}
     */
    clear(): Promise<any>;
}

export declare const NativeStorage: NativeStorageOriginal;