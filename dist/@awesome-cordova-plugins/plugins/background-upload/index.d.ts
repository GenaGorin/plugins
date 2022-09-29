import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare enum UploadState {
    UPLOADED = "UPLOADED",
    FAILED = "FAILED",
    UPLOADING = "UPLOADING",
    INITIALIZED = "INITIALIZED"
}
export declare type UploadStateType = keyof typeof UploadState;
export interface UploadEvent {
    id?: string;
    state?: UploadStateType;
    statusCode?: number;
    serverResponse?: any;
    error?: any;
    errorCode?: number;
    progress?: any;
    eventId?: string;
}
export interface FTMPayloadOptions {
    id: string;
    filePath: string;
    fileKey?: string;
    serverUrl: string;
    notificationTitle?: string;
    headers?: {
        [name: string]: string;
    };
    parameters?: {
        [name: string]: string;
    };
    [prop: string]: any;
}
export interface FTMOptions {
    callBack: (event: UploadEvent) => any;
    config?: {
        parallelUploadsLimit?: number;
    };
}
export declare class FileTransferManager {
    private _objectInstance;
    constructor(options: FTMOptions);
    startUpload(payload: FTMPayloadOptions): void;
    removeUpload(id: any): Promise<any>;
    acknowledgeEvent(id: string): Promise<any>;
    destroy(): Promise<any>;
}
/**
 * @name BackgroundUpload
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { BackgroundUpload } from '@awesome-cordova-plugins/background-upload/ngx';
 *
 *
 * constructor(private backgroundUpload: BackgroundUpload) { }
 *
 * ...
 *
 *
 * this.backgroundUpload.init({})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class BackgroundUploadOriginal extends AwesomeCordovaNativePlugin {
    FileTransferManager: typeof FileTransferManager;
    init(options: FTMOptions): FileTransferManager;
}

export declare const BackgroundUpload: BackgroundUploadOriginal;