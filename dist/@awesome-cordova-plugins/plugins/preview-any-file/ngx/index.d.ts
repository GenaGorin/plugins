import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @name PreviewAnyFile
 * @description
 * Whatever the file is PDF document, Word document, Excel, office document,zip archive file, image, text, html or anything else, you can perform a preview by this cordova Plugin to preview any file in native mode by providing the local or external URL.
 *
 *  Requires Cordova plugin: `cordova-plugin-preview-any-file`. For more info, please see the [previewAnyFile plugin docs](https://github.com/mostafa-mansour1/previewAnyFile).
 * @usage
 * ```typescript
 * import { PreviewAnyFile } from '@awesome-cordova-plugins/preview-any-file/ngx';
 *
 *
 * constructor(private previewAnyFile: PreviewAnyFile) { }
 *
 * ...
 *
 *
 * this.previewAnyFile.previewPath('file://path/to/file.xls')
 *   .subscribe(res => console.log(res),error => console.error(error))
 *
 * //if the file in the url has no extension, you must define the name or mimetype in the options
 * this.previewAnyFile.previewPath('https://domain.com/file/pdfFile',{name:file.pdf})
 *   .subscribe(res => console.log(res),error => console.error(error))
 *
 * // view file from local folder in the app
 * this.previewAnyFile.previewAsset('/assets/localFile.doc')
 *   .subscribe(res => console.log(res),error => console.error(error))
 *
 * this.previewAnyFile.previewBase64('data:image/gif;base64,R0lGODlhP.....')
 *   .subscribe(res => console.log(res),error => console.error(error))
 *
 * //if the mime type not exist in the base64, you must define the name or mimetype in the options
 * this.previewAnyFile.previewBase64('JVBERi0xLjMKJcTl8uXr.....',{mimeType:'application/pdf'})
 *   .subscribe(res => console.log(res),error => console.error(error))
 *
 * ```
 */
export interface PreviewOptions {
    name?: string;
    mimeType?: string;
}
export declare type PreviewResponse = 'CLOSING' | 'SUCCESS' | 'NO_APP';
export declare class PreviewAnyFile extends AwesomeCordovaNativePlugin {
    /**
     * @deprecated Use the previewPath,previewBase64 or previewAsset. they have more options
     * @param url {String} full absolute URL -> file://, content://, http://, https, ... etc
     * @returns {Promise<PreviewResponse>} Returns a promise that resolves if the file opened reject if not;
     * @author Mostafa Mansour <mostafa@outlook.kr>
     */
    preview(url: string): Promise<PreviewResponse>;
    /**
     * previewPath function will return SUCCESS,NO_APP or CLOSING in Observable Callback , if the content is base64 you have to use previewBase64 method
     *
     * @param path {String} full absolute URL -> file://, content://, http://, https, ... etc, if extension not exist, you must define it in the opt param
     * @param opt {PreviewOptions} define the name of the file with extension or it's mimeType, if the correct extension not exist in the path
     * @returns {Observable<PreviewResponse>} Returns an Observable that resolves if the file opened, closed or not opened , it will reject if any error;
     * @author Mostafa Mansour <mostafa@outlook.kr>
     */
    previewPath(path: string, opt?: PreviewOptions): Observable<PreviewResponse>;
    /**
     * previewBase64 function will return SUCCESS,NO_APP or CLOSING in Observable Callback , if the content is url or path you have to use previewPath method
     *
     * @param path {String} full absolute URL -> file://, content://, http://, https, ... etc, if extension not exist, you must define it in the opt param
     * @param base64
     * @param opt {PreviewOptions} define the name of the file with extension or it's mimeType, if the mimetype not exist in the base64 string
     * @returns {Observable<PreviewResponse>} Returns an Observable that resolves if the file opened, closed or not opened , it will reject if any error;
     * @author Mostafa Mansour <mostafa@outlook.kr>
     */
    previewBase64(base64: string, opt?: PreviewOptions): Observable<PreviewResponse>;
    /**
     * Use previewAsset function to open a file from assets folder, it will return SUCCESS,NO_APP or CLOSING in Observable Callback ,
     *
     * @param path {String} relative path of the file from assets folder "/assets/file.pdf" , if extension not exist, you must define it in the opt param
     * @param opt {PreviewOptions} define the name of the file with extension or it's mimeType, if the correct extension not exist in the path
     * @returns {Observable<PreviewResponse>} Returns an Observable that resolves if the file opened, closed or not opened , it will reject if any error;
     * @author Mostafa Mansour <mostafa@outlook.kr>
     */
    previewAsset(path: string, opt?: PreviewOptions): Observable<PreviewResponse>;
}
