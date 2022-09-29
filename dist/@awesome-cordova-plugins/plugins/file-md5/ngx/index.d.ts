import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name File MD5
 * @description
 * This plugin reads large files in chunks and build the md5sum incrementally.
 * @usage
 * ```typescript
 * import { FileMD5 } from '@awesome-cordova-plugins/file-md5/nx';
 *
 *
 * constructor(private fileMD5: FileMD5) { }
 *
 * ...
 *
 *
 * this.fileMD5.file(fileEntry)
 *   .then((md5sum: string) => console.log(md5sum))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class FileMD5 extends AwesomeCordovaNativePlugin {
    /**
     * Get MD5 checksum from a file
     *
     * @param fileEntry {FileEntry} File entry is a org.apache.cordova.file.FileEntry
     * @returns {Promise<any>} Promise with md5sum
     */
    file(fileEntry: any): Promise<any>;
}
