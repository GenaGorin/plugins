import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Ge Tui Sdk Plugin
 * @description
 * This plugin does something
 * @usage
 * ```typescript
 * import { GeTuiSdkPlugin } from '@awesome-cordova-plugins/ge-tui-sdk-plugin';
 *
 *
 * constructor(private geTuiSdkPlugin: GeTuiSdkPlugin) { }
 *
 *  this.geTuiSdkPlugin.callback_init((res) => { console.log(res)});
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *  this.geTuiSdkPlugin.initialize();
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *  this.geTuiSdkPlugin.getClientId();
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *  this.geTuiSdkPlugin.getVersion();
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class GeTuiSdkPlugin extends AwesomeCordovaNativePlugin {
    callback_init(callback: Function): Promise<any>;
    initialize(): void;
    getClientId(): Promise<string>;
    getVersion(): Promise<string>;
}
