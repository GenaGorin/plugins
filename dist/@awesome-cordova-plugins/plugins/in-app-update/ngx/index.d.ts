import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
declare enum UpdateType {
    FLEXIBLE = 0,
    IMMEDIATE = 1
}
declare enum InstallStatus {
    CANCELED = 0,
    DOWNLOADED = 1,
    DOWNLOADING = 2,
    FAILED = 3,
    INSTALLED = 4,
    INSTALLING = 5,
    PENDING = 6,
    UNKNOWN = 7
}
declare enum UpdateAvailability {
    DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS = 0,
    UNKNOWN = 1,
    UPDATE_AVAILABLE = 2,
    UPDATE_NOT_AVAILABLE = 3
}
declare class AppUpdateInfo {
    updateType: UpdateType;
    installStatus: InstallStatus;
    availableVersionCode: number;
    bytesDownloaded: number;
    totalBytesToDownload: number;
    clientVersionStalenessDays: number;
    packageName: string;
    updateAvailability: UpdateAvailability;
    installErrorCode: string;
}
/**
 * @name In App Update
 * @description
 * This pluging enabels In app update For cordova.
 */
export declare class InAppUpdate extends AwesomeCordovaNativePlugin {
    /**
     * If you want the user to be prompted about new version information before initiating the update, you can use `check` to retrive the new app version information.
     *
     * @returns {Promise<AppUpdateInfo>} Returns a promise that resolves with new app version update details
     */
    check(): Promise<AppUpdateInfo>;
    /**
     * Initiate Update Flow with "FLEXIBLE" | "IMMEDIATE" updateType
     *
     * @param config
     * @param config.updateType
     * @returns {Observable<AppUpdateInfo>} Returns a Observable can be subscribed to get update install state
     */
    update(config: {
        updateType: 'FLEXIBLE' | 'IMMEDIATE';
    }): Observable<AppUpdateInfo>;
    /**
     * Flexible updates provide background download. Once flexible update completes the download in background, completion of upgrade can be initiated by calling `completeFlexibleUpdate`.
     *
     * @returns Returns empty response, fire and forget
     */
    completeFlexibleUpdate(): Promise<any>;
}
export {};
