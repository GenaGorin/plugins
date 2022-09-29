import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name System Alert Window Permission
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { SystemAlertWindowPermission } from '@awesome-cordova-plugins/system-alert-window-permission/ngx';
 *
 *
 * constructor(private systemAlertWindowPermission: SystemAlertWindowPermission) { }
 *
 * ...
 *
 *
 * this.systemAlertWindowPermission.hasPermission()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * this.systemAlertWindowPermission.requestPermission()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class SystemAlertWindowPermissionOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Check permission
     *
     * @returns {Promise<any>} return 0 when dont have SYSTEM_ALERT_WINDOW permission, 1 when have SYSTEM_ALERT_WINDOW permission
     */
    hasPermission(): Promise<any>;
    /**
     * Request permission
     *
     * @returns {Promise<any>} Returns a promise that resolves when something happens
     */
    requestPermission(): Promise<any>;
    /**
     * Open notification Settings
     *
     * @returns {Promise<any>} Returns a promise that resolves when something happens
     */
    openNotificationSettings(): Promise<any>;
}

export declare const SystemAlertWindowPermission: SystemAlertWindowPermissionOriginal;