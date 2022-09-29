import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface AnylineOptions {
    licenseKey: string;
    config: any;
}
/**
 * @name Anyline
 * @description
 * Anyline provides an easy-to-use SDK for applications to enable Optical Character Recognition (OCR) on mobile devices.
 * @usage
 * ```typescript
 * import { Anyline } from '@awesome-cordova-plugins/anyline/ngx';
 *
 *
 * constructor(private anyline: Anyline) { }
 *
 * ...
 *
 *
 * this.anyline.scan(options)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class AnylineOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Scan
     *
     * @param options {AnylineOptions} Scanning options
     * @returns {Promise<any>} Returns a promise that resolves when Code is captured
     */
    scan(options: AnylineOptions): Promise<any>;
}

export declare const Anyline: AnylineOriginal;