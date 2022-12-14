import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Zip
 * @description
 * A Cordova plugin to unzip files in Android and iOS.
 * @usage
 * ```typescript
 * import { Zip } from '@awesome-cordova-plugins/zip/nx'
 * ...
 *
 * const result = await Zip.unzip('path/to/source.zip', 'path/to/dest', (progress) =>
 *     console.log('Unzipping, ' + Math.round((progress.loaded / progress.total) * 100) + '%')
 * );
 *
 * if(result === 0) console.log('SUCCESS');
 * if(result === -1) console.log('FAILED');
 *
 * ```
 */
export declare class ZipOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Extracts files from a ZIP archive
     * @param {string} sourceZip  Source ZIP file
     * @param {string} destFolder Destination folder
     * @param {Function} onProgress  optional callback to be called on progress update
     * @returns {Promise<number>} returns a promise that resolves with a number. 0 is success, -1 is error
     */
    unzip(sourceZip: string, destFolder: string, onProgress?: Function): Promise<number>;
}

export declare const Zip: ZipOriginal;