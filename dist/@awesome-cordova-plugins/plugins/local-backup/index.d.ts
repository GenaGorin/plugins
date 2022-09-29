import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name LocalBackup
 * @description
 * This plugin to create local backup
 * @usage
 * ```typescript
 * import { LocalBackup } from '@awesome-cordova-plugins/local-backup/ngx';
 *
 *
 * constructor(private localBackup: LocalBackup) { }
 *
 * ...
 *
 *
 * this.localBackup.create({data: {key: 'value'}})
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class LocalBackupOriginal extends AwesomeCordovaNativePlugin {
    create(data: any): Promise<boolean>;
    read(): Promise<any>;
    exists(): Promise<boolean>;
    remove(): Promise<boolean>;
}

export declare const LocalBackup: LocalBackupOriginal;