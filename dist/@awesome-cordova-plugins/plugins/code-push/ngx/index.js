import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * Defines the possible result statuses of the window.codePush.sync operation.
 */
export var SyncStatus;
(function (SyncStatus) {
    /**
     * The application is up to date.
     */
    SyncStatus[SyncStatus["UP_TO_DATE"] = 0] = "UP_TO_DATE";
    /**
     * An update is available, it has been downloaded, unzipped and copied to the deployment folder.
     * After the completion of the callback invoked with SyncStatus.UPDATE_INSTALLED, the application will be reloaded with the updated code and resources.
     */
    SyncStatus[SyncStatus["UPDATE_INSTALLED"] = 1] = "UPDATE_INSTALLED";
    /**
     * An optional update is available, but the user declined to install it. The update was not downloaded.
     */
    SyncStatus[SyncStatus["UPDATE_IGNORED"] = 2] = "UPDATE_IGNORED";
    /**
     * An error happened during the sync operation. This might be an error while communicating with the server, downloading or unziping the update.
     * The console logs should contain more information about what happened. No update has been applied in this case.
     */
    SyncStatus[SyncStatus["ERROR"] = 3] = "ERROR";
    /**
     * There is an ongoing sync in progress, so this attempt to sync has been aborted.
     */
    SyncStatus[SyncStatus["IN_PROGRESS"] = 4] = "IN_PROGRESS";
    /**
     * Intermediate status - the plugin is about to check for updates.
     */
    SyncStatus[SyncStatus["CHECKING_FOR_UPDATE"] = 5] = "CHECKING_FOR_UPDATE";
    /**
     * Intermediate status - a user dialog is about to be displayed. This status will be reported only if user interaction is enabled.
     */
    SyncStatus[SyncStatus["AWAITING_USER_ACTION"] = 6] = "AWAITING_USER_ACTION";
    /**
     * Intermediate status - the update package is about to be downloaded.
     */
    SyncStatus[SyncStatus["DOWNLOADING_PACKAGE"] = 7] = "DOWNLOADING_PACKAGE";
    /**
     * Intermediate status - the update package is about to be installed.
     */
    SyncStatus[SyncStatus["INSTALLING_UPDATE"] = 8] = "INSTALLING_UPDATE";
})(SyncStatus || (SyncStatus = {}));
/**
 * Defines the available install modes for updates.
 */
export var InstallMode;
(function (InstallMode) {
    /**
     * The update will be applied to the running application immediately. The application will be reloaded with the new content immediately.
     */
    InstallMode[InstallMode["IMMEDIATE"] = 0] = "IMMEDIATE";
    /**
     * The update is downloaded but not installed immediately. The new content will be available the next time the application is started.
     */
    InstallMode[InstallMode["ON_NEXT_RESTART"] = 1] = "ON_NEXT_RESTART";
    /**
     * The udpate is downloaded but not installed immediately. The new content will be available the next time the application is resumed or restarted, whichever event happends first.
     */
    InstallMode[InstallMode["ON_NEXT_RESUME"] = 2] = "ON_NEXT_RESUME";
})(InstallMode || (InstallMode = {}));
var CodePush = /** @class */ (function (_super) {
    __extends(CodePush, _super);
    function CodePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodePush.prototype.getCurrentPackage = function () { return cordova(this, "getCurrentPackage", {}, arguments); };
    CodePush.prototype.getPendingPackage = function () { return cordova(this, "getPendingPackage", {}, arguments); };
    CodePush.prototype.checkForUpdate = function (deploymentKey) { return cordova(this, "checkForUpdate", { "callbackOrder": "reverse" }, arguments); };
    CodePush.prototype.notifyApplicationReady = function () { return cordova(this, "notifyApplicationReady", {}, arguments); };
    CodePush.prototype.restartApplication = function () { return cordova(this, "restartApplication", {}, arguments); };
    CodePush.prototype.sync = function (syncOptions, downloadProgress) { return cordova(this, "sync", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    CodePush.pluginName = "CodePush";
    CodePush.plugin = "cordova-plugin-code-push";
    CodePush.pluginRef = "codePush";
    CodePush.repo = "https://github.com/Microsoft/cordova-plugin-code-push";
    CodePush.platforms = ["Android", "iOS"];
    CodePush.decorators = [
        { type: Injectable }
    ];
    return CodePush;
}(AwesomeCordovaNativePlugin));
export { CodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY29kZS1wdXNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFpUWxDOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksVUErQ1g7QUEvQ0QsV0FBWSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsdURBQVUsQ0FBQTtJQUVWOzs7T0FHRztJQUNILG1FQUFnQixDQUFBO0lBRWhCOztPQUVHO0lBQ0gsK0RBQWMsQ0FBQTtJQUVkOzs7T0FHRztJQUNILDZDQUFLLENBQUE7SUFFTDs7T0FFRztJQUNILHlEQUFXLENBQUE7SUFFWDs7T0FFRztJQUNILHlFQUFtQixDQUFBO0lBRW5COztPQUVHO0lBQ0gsMkVBQW9CLENBQUE7SUFFcEI7O09BRUc7SUFDSCx5RUFBbUIsQ0FBQTtJQUVuQjs7T0FFRztJQUNILHFFQUFpQixDQUFBO0FBQ25CLENBQUMsRUEvQ1csVUFBVSxLQUFWLFVBQVUsUUErQ3JCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxXQWVYO0FBZkQsV0FBWSxXQUFXO0lBQ3JCOztPQUVHO0lBQ0gsdURBQVMsQ0FBQTtJQUVUOztPQUVHO0lBQ0gsbUVBQWUsQ0FBQTtJQUVmOztPQUVHO0lBQ0gsaUVBQWMsQ0FBQTtBQUNoQixDQUFDLEVBZlcsV0FBVyxLQUFYLFdBQVcsUUFldEI7O0lBMEk2Qiw0QkFBMEI7Ozs7SUFPdEQsb0NBQWlCO0lBV2pCLG9DQUFpQjtJQWFqQixpQ0FBYyxhQUFDLGFBQXNCO0lBWXJDLHlDQUFzQjtJQVd0QixxQ0FBa0I7SUE0QmxCLHVCQUFJLGFBQUMsV0FBeUIsRUFBRSxnQkFBb0Q7Ozs7Ozs7Z0JBbkZyRixVQUFVOzttQkFsZFg7RUFtZDhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5uYW1lc3BhY2UgSHR0cCB7XHJcbiAgZXhwb3J0IGNvbnN0IGVudW0gVmVyYiB7XHJcbiAgICBHRVQsXHJcbiAgICBIRUFELFxyXG4gICAgUE9TVCxcclxuICAgIFBVVCxcclxuICAgIERFTEVURSxcclxuICAgIFRSQUNFLFxyXG4gICAgT1BUSU9OUyxcclxuICAgIENPTk5FQ1QsXHJcbiAgICBQQVRDSCxcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVzcG9uc2Uge1xyXG4gICAgc3RhdHVzQ29kZTogbnVtYmVyO1xyXG4gICAgYm9keT86IHN0cmluZztcclxuICB9XHJcblxyXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVxdWVzdGVyIHtcclxuICAgIHJlcXVlc3QodmVyYjogVmVyYiwgdXJsOiBzdHJpbmcsIGNhbGxiYWNrOiBDYWxsYmFjazxSZXNwb25zZT4pOiB2b2lkO1xyXG4gICAgcmVxdWVzdCh2ZXJiOiBWZXJiLCB1cmw6IHN0cmluZywgcmVxdWVzdEJvZHk6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrPFJlc3BvbnNlPik6IHZvaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIHBhY2thZ2UuIEFsbCBmaWVsZHMgYXJlIG5vbi1udWxsYWJsZSwgZXhjZXB0IHdoZW4gcmV0cmlldmluZyB0aGUgY3VycmVudGx5IHJ1bm5pbmcgcGFja2FnZSBvbiB0aGUgZmlyc3QgcnVuIG9mIHRoZSBhcHAsXHJcbiAqIGluIHdoaWNoIGNhc2Ugb25seSB0aGUgYXBwVmVyc2lvbiBpcyBjb21wdWxzb3J5LlxyXG4gKlxyXG4gKiAhISBUSElTIFRZUEUgSVMgUkVBRCBGUk9NIE5BVElWRSBDT0RFIEFTIFdFTEwuIEFOWSBDSEFOR0VTIFRPIFRISVMgSU5URVJGQUNFIE5FRURTIFRPIEJFIFVQREFURUQgSU4gTkFUSVZFIENPREUgISFcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVBhY2thZ2Uge1xyXG4gIGRlcGxveW1lbnRLZXk6IHN0cmluZztcclxuICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGxhYmVsOiBzdHJpbmc7XHJcbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xyXG4gIGlzTWFuZGF0b3J5OiBib29sZWFuO1xyXG4gIHBhY2thZ2VIYXNoOiBzdHJpbmc7XHJcbiAgcGFja2FnZVNpemU6IG51bWJlcjtcclxuICBmYWlsZWRJbnN0YWxsOiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIHJlbW90ZSBwYWNrYWdlLCB3aGljaCByZXByZXNlbnRzIGFuIHVwZGF0ZSBwYWNrYWdlIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElSZW1vdGVQYWNrYWdlIGV4dGVuZHMgSVBhY2thZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBVUkwgYXQgd2hpY2ggdGhlIHBhY2thZ2UgaXMgYXZhaWxhYmxlIGZvciBkb3dubG9hZC5cclxuICAgKi9cclxuICBkb3dubG9hZFVybDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEb3dubG9hZHMgdGhlIHBhY2thZ2UgdXBkYXRlIGZyb20gdGhlIENvZGVQdXNoIHNlcnZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFja30gZG93bmxvYWRTdWNjZXNzIENhbGxlZCB3aXRoIG9uZSBwYXJhbWV0ZXIsIHRoZSBkb3dubG9hZGVkIHBhY2thZ2UgaW5mb3JtYXRpb24sIG9uY2UgdGhlIGRvd25sb2FkIGNvbXBsZXRlZCBzdWNjZXNzZnVsbHkuXHJcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbZG93bmxvYWRFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+fSBbZG93bmxvYWRQcm9ncmVzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIEl0IGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHdpdGggb25lIERvd25sb2FkUHJvZ3Jlc3MgcGFyYW1ldGVyLlxyXG4gICAqL1xyXG4gIGRvd25sb2FkKFxyXG4gICAgZG93bmxvYWRTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SUxvY2FsUGFja2FnZT4sXHJcbiAgICBkb3dubG9hZEVycm9yPzogRXJyb3JDYWxsYmFjayxcclxuICAgIGRvd25sb2FkUHJvZ3Jlc3M/OiBTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz5cclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBBYm9ydHMgdGhlIGN1cnJlbnQgZG93bmxvYWQgc2Vzc2lvbiwgcHJldmlvdXNseSBzdGFydGVkIHdpdGggZG93bmxvYWQoKS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPHZvaWQ+fSBbYWJvcnRTdWNjZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGlmIHRoZSBhYm9ydCBvcGVyYXRpb24gc3VjY2VlZGVkLlxyXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2Fib3J0RXJyb3JdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaW4gY2FzZSBvZiBhbiBlcnJvci5cclxuICAgKi9cclxuICBhYm9ydERvd25sb2FkKGFib3J0U3VjY2Vzcz86IFN1Y2Nlc3NDYWxsYmFjazx2b2lkPiwgYWJvcnRFcnJvcj86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyBhIGxvY2FsIHBhY2thZ2UuXHJcbiAqXHJcbiAqICEhIFRISVMgVFlQRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJTG9jYWxQYWNrYWdlIGV4dGVuZHMgSVBhY2thZ2Uge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsb2NhbCBzdG9yYWdlIHBhdGggd2hlcmUgdGhpcyBwYWNrYWdlIGlzIGxvY2F0ZWQuXHJcbiAgICovXHJcbiAgbG9jYWxQYXRoOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgY3VycmVudCBhcHBsaWNhdGlvbiBydW4gaXMgdGhlIGZpcnN0IG9uZSBhZnRlciB0aGUgcGFja2FnZSB3YXMgYXBwbGllZC5cclxuICAgKi9cclxuICBpc0ZpcnN0UnVuOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBcHBsaWVzIHRoaXMgcGFja2FnZSB0byB0aGUgYXBwbGljYXRpb24uIFRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHJlbG9hZGVkIHdpdGggdGhpcyBwYWNrYWdlIGFuZCBvbiBldmVyeSBhcHBsaWNhdGlvbiBsYXVuY2ggdGhpcyBwYWNrYWdlIHdpbGwgYmUgbG9hZGVkLlxyXG4gICAqIE9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgdGhlIHVwZGF0ZSwgdGhlIGFwcGxpY2F0aW9uIHdpbGwgd2FpdCBmb3IgYSBjb2RlUHVzaC5ub3RpZnlBcHBsaWNhdGlvblJlYWR5KCkgY2FsbC4gT25jZSB0aGlzIGNhbGwgaXMgbWFkZSwgdGhlIGluc3RhbGwgb3BlcmF0aW9uIGlzIGNvbnNpZGVyZWQgYSBzdWNjZXNzLlxyXG4gICAqIE90aGVyd2lzZSwgdGhlIGluc3RhbGwgb3BlcmF0aW9uIHdpbGwgYmUgbWFya2VkIGFzIGZhaWxlZCwgYW5kIHRoZSBhcHBsaWNhdGlvbiBpcyByZXZlcnRlZCB0byBpdHMgcHJldmlvdXMgdmVyc2lvbiBvbiB0aGUgbmV4dCBydW4uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxJbnN0YWxsTW9kZT59IGluc3RhbGxTdWNjZXNzIENhbGxiYWNrIGludm9rZWQgaWYgdGhlIGluc3RhbGwgb3BlcmF0aW9uIHN1Y2NlZWRlZC5cclxuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFtpbnN0YWxsRXJyb3JdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaW4gY2FzZSBvZiBhbiBlcnJvci5cclxuICAgKiBAcGFyYW0ge0luc3RhbGxPcHRpb25zfSBbaW5zdGFsbE9wdGlvbnNdIE9wdGlvbmFsIHBhcmFtZXRlciB1c2VkIGZvciBjdXN0b21pemluZyB0aGUgaW5zdGFsbGF0aW9uIGJlaGF2aW9yLlxyXG4gICAqL1xyXG4gIGluc3RhbGwoXHJcbiAgICBpbnN0YWxsU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPEluc3RhbGxNb2RlPixcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrLFxyXG4gICAgaW5zdGFsbE9wdGlvbnM/OiBJbnN0YWxsT3B0aW9uc1xyXG4gICk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWNvbXBvc2VkIHN0YXRpYyBzaWRlIG9mIFJlbW90ZVBhY2thZ2UuXHJcbiAqIEZvciBDbGFzcyBEZWNvbXBvc2l0aW9uIGd1aWRlbGluZXMgc2VlIGh0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL0hhbmRib29rI3dyaXRpbmctZHRzLWZpbGVzLWd1aWRlbGluZXMtYW5kLXNwZWNpZmljc1xyXG4gKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmludGVyZmFjZSBSZW1vdGVQYWNrYWdlX1N0YXRpYyB7XHJcbiAgbmV3ICgpOiBJUmVtb3RlUGFja2FnZTtcclxufVxyXG5cclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5cclxuLyoqXHJcbiAqIERlY29tcG9zZWQgc3RhdGljIHNpZGUgb2YgTG9jYWxQYWNrYWdlLlxyXG4gKiBGb3IgQ2xhc3MgRGVjb21wb3NpdGlvbiBndWlkZWxpbmVzIHNlZSBodHRwOi8vd3d3LnR5cGVzY3JpcHRsYW5nLm9yZy9IYW5kYm9vayN3cml0aW5nLWR0cy1maWxlcy1ndWlkZWxpbmVzLWFuZC1zcGVjaWZpY3NcclxuICovXHJcblxyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG5pbnRlcmZhY2UgTG9jYWxQYWNrYWdlX1N0YXRpYyB7XHJcbiAgbmV3ICgpOiBJTG9jYWxQYWNrYWdlO1xyXG59XHJcblxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcblxyXG5kZWNsYXJlIGNvbnN0IFJlbW90ZVBhY2thZ2U6IFJlbW90ZVBhY2thZ2VfU3RhdGljO1xyXG5kZWNsYXJlIGNvbnN0IExvY2FsUGFja2FnZTogTG9jYWxQYWNrYWdlX1N0YXRpYztcclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBKU09OIGZvcm1hdCBvZiB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uIGZpbGUuXHJcbiAqIFRoaXMgZmlsZSBpcyBzdG9yZWQgaW4gdGhlIGxvY2FsIHN0b3JhZ2Ugb2YgdGhlIGRldmljZSBhbmQgcGVyc2lzdHMgYmV0d2VlbiBzdG9yZSB1cGRhdGVzIGFuZCBjb2RlLXB1c2ggdXBkYXRlcy5cclxuICpcclxuICogISEgVEhJUyBGSUxFIElTIFJFQUQgRlJPTSBOQVRJVkUgQ09ERSBBUyBXRUxMLiBBTlkgQ0hBTkdFUyBUTyBUSElTIElOVEVSRkFDRSBORUVEUyBUTyBCRSBVUERBVEVEIElOIE5BVElWRSBDT0RFICEhXHJcbiAqL1xyXG5pbnRlcmZhY2UgSVBhY2thZ2VJbmZvTWV0YWRhdGEgZXh0ZW5kcyBJTG9jYWxQYWNrYWdlIHtcclxuICBuYXRpdmVCdWlsZFRpbWU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE5hdGl2ZVVwZGF0ZU5vdGlmaWNhdGlvbiB7XHJcbiAgdXBkYXRlQXBwVmVyc2lvbjogYm9vbGVhbjsgLy8gQWx3YXlzIHRydWVcclxuICBhcHBWZXJzaW9uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENhbGxiYWNrPFQ+ID0gKGVycm9yOiBFcnJvciwgcGFyYW1ldGVyOiBUKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBTdWNjZXNzQ2FsbGJhY2s8VD4gPSAocmVzdWx0PzogVCkgPT4gdm9pZDtcclxuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjayA9IChlcnJvcj86IEVycm9yKSA9PiB2b2lkO1xyXG5cclxuaW50ZXJmYWNlIENvbmZpZ3VyYXRpb24ge1xyXG4gIGFwcFZlcnNpb246IHN0cmluZztcclxuICBjbGllbnRVbmlxdWVJZDogc3RyaW5nO1xyXG4gIGRlcGxveW1lbnRLZXk6IHN0cmluZztcclxuICBzZXJ2ZXJVcmw6IHN0cmluZztcclxuICBpZ25vcmVBcHBWZXJzaW9uPzogYm9vbGVhbjtcclxufVxyXG5cclxuZGVjbGFyZSBjbGFzcyBBY3F1aXNpdGlvblN0YXR1cyB7XHJcbiAgc3RhdGljIERlcGxveW1lbnRTdWNjZWVkZWQ6IHN0cmluZztcclxuICBzdGF0aWMgRGVwbG95bWVudEZhaWxlZDogc3RyaW5nO1xyXG59XHJcblxyXG5kZWNsYXJlIGNsYXNzIEFjcXVpc2l0aW9uTWFuYWdlciB7XHJcbiAgY29uc3RydWN0b3IoaHR0cFJlcXVlc3RlcjogSHR0cC5SZXF1ZXN0ZXIsIGNvbmZpZ3VyYXRpb246IENvbmZpZ3VyYXRpb24pO1xyXG4gIHF1ZXJ5VXBkYXRlV2l0aEN1cnJlbnRQYWNrYWdlKFxyXG4gICAgY3VycmVudFBhY2thZ2U6IElQYWNrYWdlLFxyXG4gICAgY2FsbGJhY2s/OiBDYWxsYmFjazxJUmVtb3RlUGFja2FnZSB8IE5hdGl2ZVVwZGF0ZU5vdGlmaWNhdGlvbj5cclxuICApOiB2b2lkO1xyXG4gIHJlcG9ydFN0YXR1c0RlcGxveShcclxuICAgIHBrZz86IElQYWNrYWdlLFxyXG4gICAgc3RhdHVzPzogc3RyaW5nLFxyXG4gICAgcHJldmlvdXNMYWJlbE9yQXBwVmVyc2lvbj86IHN0cmluZyxcclxuICAgIHByZXZpb3VzRGVwbG95bWVudEtleT86IHN0cmluZyxcclxuICAgIGNhbGxiYWNrPzogQ2FsbGJhY2s8dm9pZD5cclxuICApOiB2b2lkO1xyXG4gIHJlcG9ydFN0YXR1c0Rvd25sb2FkKHBrZzogSVBhY2thZ2UsIGNhbGxiYWNrPzogQ2FsbGJhY2s8dm9pZD4pOiB2b2lkO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ29kZVB1c2hDb3Jkb3ZhUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFja2FnZSBpbmZvcm1hdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwYWNrYWdlU3VjY2VzcyBDYWxsYmFjayBpbnZva2VkIHdpdGggdGhlIGN1cnJlbnRseSBkZXBsb3llZCBwYWNrYWdlIGluZm9ybWF0aW9uLlxyXG4gICAqIEBwYXJhbSBwYWNrYWdlRXJyb3IgT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIGdldEN1cnJlbnRQYWNrYWdlKHBhY2thZ2VTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SUxvY2FsUGFja2FnZT4sIHBhY2thZ2VFcnJvcj86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBHZXRzIHRoZSBwZW5kaW5nIHBhY2thZ2UgaW5mb3JtYXRpb24sIGlmIGFueS4gQSBwZW5kaW5nIHBhY2thZ2UgaXMgb25lIHRoYXQgaGFzIGJlZW4gaW5zdGFsbGVkIGJ1dCB0aGUgYXBwbGljYXRpb24gc3RpbGwgcnVucyB0aGUgb2xkIGNvZGUuXHJcbiAgICogVGhpcyBoYXBwZW5zIG9ubHkgYWZ0ZXIgYSBwYWNrYWdlIGhhcyBiZWVuIGluc3RhbGxlZCB1c2luZyBPTl9ORVhUX1JFU1RBUlQgb3IgT05fTkVYVF9SRVNVTUUgbW9kZSwgYnV0IHRoZSBhcHBsaWNhdGlvbiB3YXMgbm90IHJlc3RhcnRlZC9yZXN1bWVkIHlldC5cclxuICAgKi9cclxuICBnZXRQZW5kaW5nUGFja2FnZShwYWNrYWdlU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElMb2NhbFBhY2thZ2U+LCBwYWNrYWdlRXJyb3I/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdpdGggdGhlIENvZGVQdXNoIHNlcnZlciBpZiBhbiB1cGRhdGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8SVJlbW90ZVBhY2thZ2U+fSBxdWVyeVN1Y2Nlc3MgQ2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGEgc3VjY2Vzc2Z1bCByZXNwb25zZSBmcm9tIHRoZSBzZXJ2ZXIuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICBUaGUgY2FsbGJhY2sgdGFrZXMgb25lIFJlbW90ZVBhY2thZ2UgcGFyYW1ldGVyLiBBIG5vbi1udWxsIHBhY2thZ2UgaXMgYSB2YWxpZCB1cGRhdGUuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICBBIG51bGwgcGFja2FnZSBtZWFucyB0aGUgYXBwbGljYXRpb24gaXMgdXAgdG8gZGF0ZSBmb3IgdGhlIGN1cnJlbnQgbmF0aXZlIGFwcGxpY2F0aW9uIHZlcnNpb24uXHJcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbcXVlcnlFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZGVwbG95bWVudEtleV0gT3B0aW9uYWwgZGVwbG95bWVudCBrZXkgdGhhdCBvdmVycmlkZXMgdGhlIGNvbmZpZy54bWwgc2V0dGluZy5cclxuICAgKi9cclxuICBjaGVja0ZvclVwZGF0ZShcclxuICAgIHF1ZXJ5U3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPElSZW1vdGVQYWNrYWdlPixcclxuICAgIHF1ZXJ5RXJyb3I/OiBFcnJvckNhbGxiYWNrLFxyXG4gICAgZGVwbG95bWVudEtleT86IHN0cmluZ1xyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE5vdGlmaWVzIHRoZSBwbHVnaW4gdGhhdCB0aGUgdXBkYXRlIG9wZXJhdGlvbiBzdWNjZWVkZWQgYW5kIHRoYXQgdGhlIGFwcGxpY2F0aW9uIGlzIHJlYWR5LlxyXG4gICAqIENhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyByZXF1aXJlZCBvbiB0aGUgZmlyc3QgcnVuIGFmdGVyIGFuIHVwZGF0ZS4gT24gZXZlcnkgc3Vic2VxdWVudCBhcHBsaWNhdGlvbiBydW4sIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBhIG5vb3AuXHJcbiAgICogSWYgdXNpbmcgc3luYyBBUEksIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiBpcyBub3QgcmVxdWlyZWQgc2luY2Ugc3luYyBjYWxscyBpdCBpbnRlcm5hbGx5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8dm9pZD59IFtub3RpZnlTdWNjZWVkZWRdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaWYgdGhlIHBsdWdpbiB3YXMgc3VjY2Vzc2Z1bGx5IG5vdGlmaWVkLlxyXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW25vdGlmeUZhaWxlZF0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yIGR1cmluZyBub3RpZnlpbmcgdGhlIHBsdWdpbi5cclxuICAgKi9cclxuICBub3RpZnlBcHBsaWNhdGlvblJlYWR5KG5vdGlmeVN1Y2NlZWRlZD86IFN1Y2Nlc3NDYWxsYmFjazx2b2lkPiwgbm90aWZ5RmFpbGVkPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbG9hZHMgdGhlIGFwcGxpY2F0aW9uLiBJZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIHBhY2thZ2UgaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlcywgdGhlIHVwZGF0ZVxyXG4gICAqIHdpbGwgYmUgaW1tZWRpYXRlbHkgdmlzaWJsZSB0byB0aGUgdXNlci4gT3RoZXJ3aXNlLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmVsb2FkIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8dm9pZD59IGluc3RhbGxTdWNjZXNzXHJcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbZXJyb3JDYWxsYmFja11cclxuICAgKi9cclxuICByZXN0YXJ0QXBwbGljYXRpb24oaW5zdGFsbFN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazx2b2lkPiwgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGluc3RhbGxpbmcgdXBkYXRlcyBpbiBvbmUgbWV0aG9kIGNhbGwuXHJcbiAgICogVGhpcyBtZXRob2QgaXMgcHJvdmlkZWQgZm9yIHNpbXBsaWNpdHksIGFuZCBpdHMgYmVoYXZpb3IgY2FuIGJlIHJlcGxpY2F0ZWQgYnkgdXNpbmcgd2luZG93LmNvZGVQdXNoLmNoZWNrRm9yVXBkYXRlKCksIFJlbW90ZVBhY2thZ2UncyBkb3dubG9hZCgpIGFuZCBMb2NhbFBhY2thZ2UncyBpbnN0YWxsKCkgbWV0aG9kcy5cclxuICAgKlxyXG4gICAqIFRoZSBhbGdvcml0aG0gb2YgdGhpcyBtZXRob2QgaXMgdGhlIGZvbGxvd2luZzpcclxuICAgKiAtIENoZWNrcyBmb3IgYW4gdXBkYXRlIG9uIHRoZSBDb2RlUHVzaCBzZXJ2ZXIuXHJcbiAgICogLSBJZiBhbiB1cGRhdGUgaXMgYXZhaWxhYmxlXHJcbiAgICogICAgICAgICAtIElmIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5IGFuZCB0aGUgYWxlcnRNZXNzYWdlIGlzIHNldCBpbiBvcHRpb25zLCB0aGUgdXNlciB3aWxsIGJlIGluZm9ybWVkIHRoYXQgdGhlIGFwcGxpY2F0aW9uIHdpbGwgYmUgdXBkYXRlZCB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXHJcbiAgICogICAgICAgICAgIFRoZSB1cGRhdGUgcGFja2FnZSB3aWxsIHRoZW4gYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZC5cclxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBub3QgbWFuZGF0b3J5IGFuZCB0aGUgY29uZmlybU1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgYXNrZWQgaWYgdGhleSB3YW50IHRvIHVwZGF0ZSB0byB0aGUgbGF0ZXN0IHZlcnNpb24uXHJcbiAgICogICAgICAgICAgIElmIHRoZXkgZGVjbGluZSwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCBTeW5jU3RhdHVzLlVQREFURV9JR05PUkVELlxyXG4gICAqICAgICAgICAgLSBPdGhlcndpc2UsIHRoZSB1cGRhdGUgcGFja2FnZSB3aWxsIGJlIGRvd25sb2FkZWQgYW5kIGFwcGxpZWQgd2l0aCBubyB1c2VyIGludGVyYWN0aW9uLlxyXG4gICAqIC0gSWYgbm8gdXBkYXRlIGlzIGF2YWlsYWJsZSBvbiB0aGUgc2VydmVyLCBvciBpZiBhIHByZXZpb3VzbHkgcm9sbGVkIGJhY2sgdXBkYXRlIGlzIGF2YWlsYWJsZSBhbmQgdGhlIGlnbm9yZUZhaWxlZFVwZGF0ZXMgaXMgc2V0IHRvIHRydWUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuVVBfVE9fREFURS5cclxuICAgKiAtIElmIGFuIGVycm9yIG9jY3VycyBkdXJpbmcgY2hlY2tpbmcgZm9yIHVwZGF0ZSwgZG93bmxvYWRpbmcgb3IgaW5zdGFsbGluZyBpdCwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgU3luY1N0YXR1cy5FUlJPUi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPFN5bmNTdGF0dXM+fSBbc3luY0NhbGxiYWNrXSBPcHRpb25hbCBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2l0aCB0aGUgc3RhdHVzIG9mIHRoZSBzeW5jIG9wZXJhdGlvbi5cclxuICAgKiAgICAgICAgICAgICAgICAgICAgIFRoZSBjYWxsYmFjayB3aWxsIGJlIGNhbGxlZCBvbmx5IG9uY2UsIGFuZCB0aGUgcG9zc2libGUgc3RhdHVzZXMgYXJlIGRlZmluZWQgYnkgdGhlIFN5bmNTdGF0dXMgZW51bS5cclxuICAgKiBAcGFyYW0ge1N5bmNPcHRpb25zfSBbc3luY09wdGlvbnNdIE9wdGlvbmFsIFN5bmNPcHRpb25zIHBhcmFtZXRlciBjb25maWd1cmluZyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN5bmMgb3BlcmF0aW9uLlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+fSBbZG93bmxvYWRQcm9ncmVzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIEl0IGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHdpdGggb25lIERvd25sb2FkUHJvZ3Jlc3MgcGFyYW1ldGVyLlxyXG4gICAqL1xyXG4gIHN5bmMoXHJcbiAgICBzeW5jQ2FsbGJhY2s/OiBTdWNjZXNzQ2FsbGJhY2s8U3luY1N0YXR1cz4sXHJcbiAgICBzeW5jT3B0aW9ucz86IFN5bmNPcHRpb25zLFxyXG4gICAgZG93bmxvYWRQcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPlxyXG4gICk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBwb3NzaWJsZSByZXN1bHQgc3RhdHVzZXMgb2YgdGhlIHdpbmRvdy5jb2RlUHVzaC5zeW5jIG9wZXJhdGlvbi5cclxuICovXHJcbmV4cG9ydCBlbnVtIFN5bmNTdGF0dXMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBhcHBsaWNhdGlvbiBpcyB1cCB0byBkYXRlLlxyXG4gICAqL1xyXG4gIFVQX1RPX0RBVEUsXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIHVwZGF0ZSBpcyBhdmFpbGFibGUsIGl0IGhhcyBiZWVuIGRvd25sb2FkZWQsIHVuemlwcGVkIGFuZCBjb3BpZWQgdG8gdGhlIGRlcGxveW1lbnQgZm9sZGVyLlxyXG4gICAqIEFmdGVyIHRoZSBjb21wbGV0aW9uIG9mIHRoZSBjYWxsYmFjayBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSU5TVEFMTEVELCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSByZWxvYWRlZCB3aXRoIHRoZSB1cGRhdGVkIGNvZGUgYW5kIHJlc291cmNlcy5cclxuICAgKi9cclxuICBVUERBVEVfSU5TVEFMTEVELFxyXG5cclxuICAvKipcclxuICAgKiBBbiBvcHRpb25hbCB1cGRhdGUgaXMgYXZhaWxhYmxlLCBidXQgdGhlIHVzZXIgZGVjbGluZWQgdG8gaW5zdGFsbCBpdC4gVGhlIHVwZGF0ZSB3YXMgbm90IGRvd25sb2FkZWQuXHJcbiAgICovXHJcbiAgVVBEQVRFX0lHTk9SRUQsXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIGVycm9yIGhhcHBlbmVkIGR1cmluZyB0aGUgc3luYyBvcGVyYXRpb24uIFRoaXMgbWlnaHQgYmUgYW4gZXJyb3Igd2hpbGUgY29tbXVuaWNhdGluZyB3aXRoIHRoZSBzZXJ2ZXIsIGRvd25sb2FkaW5nIG9yIHVuemlwaW5nIHRoZSB1cGRhdGUuXHJcbiAgICogVGhlIGNvbnNvbGUgbG9ncyBzaG91bGQgY29udGFpbiBtb3JlIGluZm9ybWF0aW9uIGFib3V0IHdoYXQgaGFwcGVuZWQuIE5vIHVwZGF0ZSBoYXMgYmVlbiBhcHBsaWVkIGluIHRoaXMgY2FzZS5cclxuICAgKi9cclxuICBFUlJPUixcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlcmUgaXMgYW4gb25nb2luZyBzeW5jIGluIHByb2dyZXNzLCBzbyB0aGlzIGF0dGVtcHQgdG8gc3luYyBoYXMgYmVlbiBhYm9ydGVkLlxyXG4gICAqL1xyXG4gIElOX1BST0dSRVNTLFxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHBsdWdpbiBpcyBhYm91dCB0byBjaGVjayBmb3IgdXBkYXRlcy5cclxuICAgKi9cclxuICBDSEVDS0lOR19GT1JfVVBEQVRFLFxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gYSB1c2VyIGRpYWxvZyBpcyBhYm91dCB0byBiZSBkaXNwbGF5ZWQuIFRoaXMgc3RhdHVzIHdpbGwgYmUgcmVwb3J0ZWQgb25seSBpZiB1c2VyIGludGVyYWN0aW9uIGlzIGVuYWJsZWQuXHJcbiAgICovXHJcbiAgQVdBSVRJTkdfVVNFUl9BQ1RJT04sXHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSB0aGUgdXBkYXRlIHBhY2thZ2UgaXMgYWJvdXQgdG8gYmUgZG93bmxvYWRlZC5cclxuICAgKi9cclxuICBET1dOTE9BRElOR19QQUNLQUdFLFxyXG5cclxuICAvKipcclxuICAgKiBJbnRlcm1lZGlhdGUgc3RhdHVzIC0gdGhlIHVwZGF0ZSBwYWNrYWdlIGlzIGFib3V0IHRvIGJlIGluc3RhbGxlZC5cclxuICAgKi9cclxuICBJTlNUQUxMSU5HX1VQREFURSxcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIGF2YWlsYWJsZSBpbnN0YWxsIG1vZGVzIGZvciB1cGRhdGVzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gSW5zdGFsbE1vZGUge1xyXG4gIC8qKlxyXG4gICAqIFRoZSB1cGRhdGUgd2lsbCBiZSBhcHBsaWVkIHRvIHRoZSBydW5uaW5nIGFwcGxpY2F0aW9uIGltbWVkaWF0ZWx5LiBUaGUgYXBwbGljYXRpb24gd2lsbCBiZSByZWxvYWRlZCB3aXRoIHRoZSBuZXcgY29udGVudCBpbW1lZGlhdGVseS5cclxuICAgKi9cclxuICBJTU1FRElBVEUsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB1cGRhdGUgaXMgZG93bmxvYWRlZCBidXQgbm90IGluc3RhbGxlZCBpbW1lZGlhdGVseS4gVGhlIG5ldyBjb250ZW50IHdpbGwgYmUgYXZhaWxhYmxlIHRoZSBuZXh0IHRpbWUgdGhlIGFwcGxpY2F0aW9uIGlzIHN0YXJ0ZWQuXHJcbiAgICovXHJcbiAgT05fTkVYVF9SRVNUQVJULFxyXG5cclxuICAvKipcclxuICAgKiBUaGUgdWRwYXRlIGlzIGRvd25sb2FkZWQgYnV0IG5vdCBpbnN0YWxsZWQgaW1tZWRpYXRlbHkuIFRoZSBuZXcgY29udGVudCB3aWxsIGJlIGF2YWlsYWJsZSB0aGUgbmV4dCB0aW1lIHRoZSBhcHBsaWNhdGlvbiBpcyByZXN1bWVkIG9yIHJlc3RhcnRlZCwgd2hpY2hldmVyIGV2ZW50IGhhcHBlbmRzIGZpcnN0LlxyXG4gICAqL1xyXG4gIE9OX05FWFRfUkVTVU1FLFxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgaW5zdGFsbCBvcGVyYXRpb24gb3B0aW9ucy5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5zdGFsbE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gc3BlY2lmeSB0aGUgSW5zdGFsbE1vZGUgdXNlZCBmb3IgdGhlIGluc3RhbGwgb3BlcmF0aW9uLiBUaGlzIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBJbnN0YWxsTW9kZS5PTl9ORVhUX1JFU1RBUlQuXHJcbiAgICovXHJcbiAgaW5zdGFsbE1vZGU/OiBJbnN0YWxsTW9kZTtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgaW5zdGFsbE1vZGUgPT09IE9OX05FWFRfUkVTVU1FLCB0aGUgbWluaW11bSBhbW91bnQgb2YgdGltZSAoaW4gc2Vjb25kcykgd2hpY2ggbmVlZHMgdG8gcGFzcyB3aXRoIHRoZSBhcHAgaW4gdGhlIGJhY2tncm91bmQgYmVmb3JlIGFuIHVwZGF0ZSBpbnN0YWxsIG9jY3VycyB3aGVuIHRoZSBhcHAgaXMgcmVzdW1lZC5cclxuICAgKi9cclxuICBtaW5pbXVtQmFja2dyb3VuZER1cmF0aW9uPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIHNwZWNpZnkgdGhlIEluc3RhbGxNb2RlIHVzZWQgZm9yIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBpZiB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeS4gVGhpcyBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gSW5zdGFsbE1vZGUuSU1NRURJQVRFLlxyXG4gICAqL1xyXG4gIG1hbmRhdG9yeUluc3RhbGxNb2RlPzogSW5zdGFsbE1vZGU7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBzeW5jIG9wZXJhdGlvbiBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTeW5jT3B0aW9ucyBleHRlbmRzIEluc3RhbGxPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBPcHRpb25hbCBib29sZWFuIGZsYWcuIElmIHNldCwgcHJldmlvdXMgdXBkYXRlcyB3aGljaCB3ZXJlIHJvbGxlZCBiYWNrIHdpbGwgYmUgaWdub3JlZC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICAgKi9cclxuICBpZ25vcmVGYWlsZWRVcGRhdGVzPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBlbmFibGUsIGRpc2FibGUgb3IgY3VzdG9taXplIHRoZSB1c2VyIGludGVyYWN0aW9uIGR1cmluZyBzeW5jLlxyXG4gICAqIElmIHNldCB0byBmYWxzZSwgdXNlciBpbnRlcmFjdGlvbiB3aWxsIGJlIGRpc2FibGVkLiBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHVzZXIgd2lsbCBiZSBhbGVydGVkIG9yIGFza2VkIHRvIGNvbmZpcm0gbmV3IHVwZGF0ZXMsIGJhc2VkIG9uIHdoZXRoZXIgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkuXHJcbiAgICogVG8gY3VzdG9taXplIHRoZSB1c2VyIGRpYWxvZywgdGhpcyBvcHRpb24gY2FuIGJlIHNldCB0byBhIGN1c3RvbSBVcGRhdGVEaWFsb2dPcHRpb25zIGluc3RhbmNlLlxyXG4gICAqL1xyXG4gIHVwZGF0ZURpYWxvZz86IGJvb2xlYW4gfCBVcGRhdGVEaWFsb2dPcHRpb25zO1xyXG5cclxuICAvKipcclxuICAgKiBPdmVycmlkZXMgdGhlIGNvbmZpZy54bWwgZGVwbG95bWVudCBrZXkgd2hlbiBjaGVja2luZyBmb3IgdXBkYXRlcy5cclxuICAgKi9cclxuICBkZXBsb3ltZW50S2V5Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgY29uZmlndXJhdGlvbiBvcHRpb25zIGZvciB0aGUgYWxlcnQgb3IgY29uZmlybWF0aW9uIGRpYWxvZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBVcGRhdGVEaWFsb2dPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBJZiBhIG1hbmRhdG9yeSB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGlzIG9wdGlvbiBpcyBzZXQsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGluIGFuIGFsZXJ0IGRpYWxvZyBiZWZvcmUgZG93bmxvYWRpbmcgYW5kIGluc3RhbGxpbmcgdGhlIHVwZGF0ZS5cclxuICAgKiBUaGUgdXNlciB3aWxsIG5vdCBiZSBhYmxlIHRvIGNhbmNlbCB0aGUgb3BlcmF0aW9uLCBzaW5jZSB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeS5cclxuICAgKi9cclxuICBtYW5kYXRvcnlVcGRhdGVNZXNzYWdlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBhbiBvcHRpb25hbCB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGlzIG9wdGlvbiBpcyBzZXQsIHRoZSBtZXNzYWdlIHdpbGwgYmUgZGlzcGxheWVkIHRvIHRoZSB1c2VyIGluIGEgY29uZmlybWF0aW9uIGRpYWxvZy5cclxuICAgKiBJZiB0aGUgdXNlciBjb25maXJtcyB0aGUgdXBkYXRlLCBpdCB3aWxsIGJlIGRvd25sb2FkZWQgYW5kIGluc3RhbGxlZC4gT3RoZXJ3aXNlLCB0aGUgdXBkYXRlIHVwZGF0ZSBpcyBub3QgZG93bmxvYWRlZC5cclxuICAgKi9cclxuICBvcHRpb25hbFVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aXRsZSBvZiB0aGUgZGlhbG9nIGJveCB1c2VkIGZvciBpbnRlcmFjdGluZyB3aXRoIHRoZSB1c2VyIGluIGNhc2Ugb2YgYSBtYW5kYXRvcnkgb3Igb3B0aW9uYWwgdXBkYXRlLlxyXG4gICAqIFRoaXMgdGl0bGUgd2lsbCBvbmx5IGJlIHVzZWQgaWYgYXQgbGVhc3Qgb25lIG9mIG1hbmRhdG9yeVVwZGF0ZU1lc3NhZ2Ugb3Igb3B0aW9uYWxVcGRhdGVNZXNzYWdlIG9wdGlvbnMgYXJlIHNldC5cclxuICAgKi9cclxuICB1cGRhdGVUaXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBjb25maXJtYXRpb24gYnV0dG9uIGluIGNhc2Ugb2YgYW4gb3B0aW9uYWwgdXBkYXRlLlxyXG4gICAqL1xyXG4gIG9wdGlvbmFsSW5zdGFsbEJ1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGNhbmNlbCBidXR0b24gaW4gY2FzZSBvZiBhbiBvcHRpb25hbCB1cGRhdGUuXHJcbiAgICovXHJcbiAgb3B0aW9uYWxJZ25vcmVCdXR0b25MYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxhYmVsIG9mIHRoZSBjb250aW51ZSBidXR0b24gaW4gY2FzZSBvZiBhIG1hbmRhdG9yeSB1cGRhdGUuXHJcbiAgICovXHJcbiAgbWFuZGF0b3J5Q29udGludWVCdXR0b25MYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRmxhZyBpbmRpY2F0aW5nIGlmIHRoZSB1cGRhdGUgZGVzY3JpcHRpb24gcHJvdmlkZWQgYnkgdGhlIENvZGVQdXNoIHNlcnZlciBzaG91bGQgYmUgZGlzcGxheWVkIGluIHRoZSBkaWFsb2cgYm94IGFwcGVuZGVkIHRvIHRoZSB1cGRhdGUgbWVzc2FnZS5cclxuICAgKi9cclxuICBhcHBlbmRSZWxlYXNlRGVzY3JpcHRpb24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBPcHRpb25hbCBwcmVmaXggdG8gYWRkIHRvIHRoZSByZWxlYXNlIGRlc2NyaXB0aW9uLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uUHJlZml4Pzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgSlNPTiBmb3JtYXQgb2YgdGhlIHBhY2thZ2UgZGlmZiBtYW5pZmVzdCBmaWxlLlxyXG4gKi9cclxuaW50ZXJmYWNlIElEaWZmTWFuaWZlc3Qge1xyXG4gIGRlbGV0ZWRGaWxlczogc3RyaW5nW107XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBmb3JtYXQgb2YgdGhlIERvd25sb2FkUHJvZ3Jlc3Mgb2JqZWN0LCB1c2VkIHRvIHNlbmQgcGVyaW9kaWNhbCB1cGRhdGUgbm90aWZpY2F0aW9ucyBvbiB0aGUgcHJvZ3Jlc3Mgb2YgdGhlIHVwZGF0ZSBkb3dubG9hZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRQcm9ncmVzcyB7XHJcbiAgdG90YWxCeXRlczogbnVtYmVyO1xyXG4gIHJlY2VpdmVkQnl0ZXM6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIENvZGUgUHVzaFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29kZVB1c2ggcGx1Z2luIGZvciBDb3Jkb3ZhIGJ5IE1pY3Jvc29mdCB0aGF0IHN1cHBvcnRzIGlPUyBhbmQgQW5kcm9pZC5cclxuICpcclxuICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSBodHRwczovL2dpdGh1Yi5jb20vRGVsbG9zNy9leGFtcGxlLWNvcmRvdmEtY29kZS1wdXNoLXBsdWdpblxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDb2RlUHVzaCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb2RlLXB1c2gvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjb2RlUHVzaDogQ29kZVB1c2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gbm90ZSAtIG1vc3RseSBlcnJvciAmIGNvbXBsZXRlZCBtZXRob2RzIG9mIG9ic2VydmFibGUgd2lsbCBub3QgZmlyZVxyXG4gKiAvLyBhcyBzeW5jU3RhdHVzIHdpbGwgY29udGFpbiB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgdXBkYXRlXHJcbiAqIHRoaXMuY29kZVB1c2guc3luYygpLnN1YnNjcmliZSgoc3luY1N0YXR1cykgPT4gY29uc29sZS5sb2coc3luY1N0YXR1cykpO1xyXG4gKlxyXG4gKiBjb25zdCBkb3dubG9hZFByb2dyZXNzID0gKHByb2dyZXNzKSA9PiB7IGNvbnNvbGUubG9nKGBEb3dubG9hZGVkICR7cHJvZ3Jlc3MucmVjZWl2ZWRCeXRlc30gb2YgJHtwcm9ncmVzcy50b3RhbEJ5dGVzfWApOyB9XHJcbiAqIHRoaXMuY29kZVB1c2guc3luYyh7fSwgZG93bmxvYWRQcm9ncmVzcykuc3Vic2NyaWJlKChzeW5jU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzeW5jU3RhdHVzKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0NvZGVQdXNoJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jb2RlLXB1c2gnLFxyXG4gIHBsdWdpblJlZjogJ2NvZGVQdXNoJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01pY3Jvc29mdC9jb3Jkb3ZhLXBsdWdpbi1jb2RlLXB1c2gnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDb2RlUHVzaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcGFja2FnZSBpbmZvcm1hdGlvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElMb2NhbFBhY2thZ2U+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRDdXJyZW50UGFja2FnZSgpOiBQcm9taXNlPElMb2NhbFBhY2thZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHBlbmRpbmcgcGFja2FnZSBpbmZvcm1hdGlvbiwgaWYgYW55LiBBIHBlbmRpbmcgcGFja2FnZSBpcyBvbmUgdGhhdCBoYXMgYmVlbiBpbnN0YWxsZWQgYnV0IHRoZSBhcHBsaWNhdGlvbiBzdGlsbCBydW5zIHRoZSBvbGQgY29kZS5cclxuICAgKiBUaGlzIGhhcHBlbnMgb25seSBhZnRlciBhIHBhY2thZ2UgaGFzIGJlZW4gaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlLCBidXQgdGhlIGFwcGxpY2F0aW9uIHdhcyBub3QgcmVzdGFydGVkL3Jlc3VtZWQgeWV0LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsUGFja2FnZT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFBlbmRpbmdQYWNrYWdlKCk6IFByb21pc2U8SUxvY2FsUGFja2FnZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIHdpdGggdGhlIENvZGVQdXNoIHNlcnZlciBpZiBhbiB1cGRhdGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtkZXBsb3ltZW50S2V5XSBPcHRpb25hbCBkZXBsb3ltZW50IGtleSB0aGF0IG92ZXJyaWRlcyB0aGUgY29uZmlnLnhtbCBzZXR0aW5nLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPElSZW1vdGVQYWNrYWdlPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBjaGVja0ZvclVwZGF0ZShkZXBsb3ltZW50S2V5Pzogc3RyaW5nKTogUHJvbWlzZTxJUmVtb3RlUGFja2FnZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTm90aWZpZXMgdGhlIHBsdWdpbiB0aGF0IHRoZSB1cGRhdGUgb3BlcmF0aW9uIHN1Y2NlZWRlZCBhbmQgdGhhdCB0aGUgYXBwbGljYXRpb24gaXMgcmVhZHkuXHJcbiAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIG9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgYW4gdXBkYXRlLiBPbiBldmVyeSBzdWJzZXF1ZW50IGFwcGxpY2F0aW9uIHJ1biwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIGEgbm9vcC5cclxuICAgKiBJZiB1c2luZyBzeW5jIEFQSSwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIG5vdCByZXF1aXJlZCBzaW5jZSBzeW5jIGNhbGxzIGl0IGludGVybmFsbHkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbm90aWZ5QXBwbGljYXRpb25SZWFkeSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbG9hZHMgdGhlIGFwcGxpY2F0aW9uLiBJZiB0aGVyZSBpcyBhIHBlbmRpbmcgdXBkYXRlIHBhY2thZ2UgaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlcywgdGhlIHVwZGF0ZVxyXG4gICAqIHdpbGwgYmUgaW1tZWRpYXRlbHkgdmlzaWJsZSB0byB0aGUgdXNlci4gT3RoZXJ3aXNlLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gd2lsbCBzaW1wbHkgcmVsb2FkIHRoZSBjdXJyZW50IHZlcnNpb24gb2YgdGhlIGFwcGxpY2F0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlc3RhcnRBcHBsaWNhdGlvbigpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgaW5zdGFsbGluZyB1cGRhdGVzIGluIG9uZSBtZXRob2QgY2FsbC5cclxuICAgKiBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBmb3Igc2ltcGxpY2l0eSwgYW5kIGl0cyBiZWhhdmlvciBjYW4gYmUgcmVwbGljYXRlZCBieSB1c2luZyB3aW5kb3cuY29kZVB1c2guY2hlY2tGb3JVcGRhdGUoKSwgUmVtb3RlUGFja2FnZSdzIGRvd25sb2FkKCkgYW5kIExvY2FsUGFja2FnZSdzIGluc3RhbGwoKSBtZXRob2RzLlxyXG4gICAqXHJcbiAgICogVGhlIGFsZ29yaXRobSBvZiB0aGlzIG1ldGhvZCBpcyB0aGUgZm9sbG93aW5nOlxyXG4gICAqIC0gQ2hlY2tzIGZvciBhbiB1cGRhdGUgb24gdGhlIENvZGVQdXNoIHNlcnZlci5cclxuICAgKiAtIElmIGFuIHVwZGF0ZSBpcyBhdmFpbGFibGVcclxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkgYW5kIHRoZSBhbGVydE1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgaW5mb3JtZWQgdGhhdCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cclxuICAgKiAgICAgICAgICAgVGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgdGhlbiBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkLlxyXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG5vdCBtYW5kYXRvcnkgYW5kIHRoZSBjb25maXJtTWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBhc2tlZCBpZiB0aGV5IHdhbnQgdG8gdXBkYXRlIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cclxuICAgKiAgICAgICAgICAgSWYgdGhleSBkZWNsaW5lLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIFN5bmNTdGF0dXMuVVBEQVRFX0lHTk9SRUQuXHJcbiAgICogICAgICAgICAtIE90aGVyd2lzZSwgdGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZCB3aXRoIG5vIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICogLSBJZiBubyB1cGRhdGUgaXMgYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXIsIG9yIGlmIGEgcHJldmlvdXNseSByb2xsZWQgYmFjayB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGUgaWdub3JlRmFpbGVkVXBkYXRlcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgU3luY1N0YXR1cy5VUF9UT19EQVRFLlxyXG4gICAqIC0gSWYgYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBjaGVja2luZyBmb3IgdXBkYXRlLCBkb3dubG9hZGluZyBvciBpbnN0YWxsaW5nIGl0LCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLkVSUk9SLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTeW5jT3B0aW9uc30gW3N5bmNPcHRpb25zXSBPcHRpb25hbCBTeW5jT3B0aW9ucyBwYXJhbWV0ZXIgY29uZmlndXJpbmcgdGhlIGJlaGF2aW9yIG9mIHRoZSBzeW5jIG9wZXJhdGlvbi5cclxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPn0gW2Rvd25sb2FkUHJvZ3Jlc3NdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgZHVyaW5nIHRoZSBkb3dubG9hZCBwcm9jZXNzLiBJdCBpcyBjYWxsZWQgc2V2ZXJhbCB0aW1lcyB3aXRoIG9uZSBEb3dubG9hZFByb2dyZXNzIHBhcmFtZXRlci5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxTeW5jU3RhdHVzPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMywgLy8gd2UgZG9uJ3QgbmVlZCB0aGlzLCBzbyB3ZSBzZXQgaXQgdG8gYSB2YWx1ZSBoaWdoZXIgdGhhbiAjIG9mIGFyZ3NcclxuICB9KVxyXG4gIHN5bmMoc3luY09wdGlvbnM/OiBTeW5jT3B0aW9ucywgZG93bmxvYWRQcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPik6IE9ic2VydmFibGU8U3luY1N0YXR1cz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=