import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name File Path
 * @premier filesystem
 * @description
 *
 * This plugin allows you to resolve the native filesystem path for Android content URIs and is based on code in the aFileChooser library.
 * @usage
 * ```typescript
 * import { FilePath } from '@awesome-cordova-plugins/file-path/ngx';
 *
 * constructor(private filePath: FilePath) { }
 *
 * ...
 *
 * this.filePath.resolveNativePath(path)
 *   .then(filePath => console.log(filePath))
 *   .catch(err => console.log(err));
 *
 * ```
 */
export declare class FilePath extends AwesomeCordovaNativePlugin {
    /**
     * Resolve native path for given content URL/path.
     *
     * @param {string} path  Content URL/path.
     * @returns {Promise<string>}
     */
    resolveNativePath(path: string): Promise<string>;
}
