var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CodePushOriginal = /** @class */ (function (_super) {
    __extends(CodePushOriginal, _super);
    function CodePushOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CodePushOriginal.prototype.getCurrentPackage = function () { return cordova(this, "getCurrentPackage", {}, arguments); };
    CodePushOriginal.prototype.getPendingPackage = function () { return cordova(this, "getPendingPackage", {}, arguments); };
    CodePushOriginal.prototype.checkForUpdate = function (deploymentKey) { return cordova(this, "checkForUpdate", { "callbackOrder": "reverse" }, arguments); };
    CodePushOriginal.prototype.notifyApplicationReady = function () { return cordova(this, "notifyApplicationReady", {}, arguments); };
    CodePushOriginal.prototype.restartApplication = function () { return cordova(this, "restartApplication", {}, arguments); };
    CodePushOriginal.prototype.sync = function (syncOptions, downloadProgress) { return cordova(this, "sync", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    CodePushOriginal.pluginName = "CodePush";
    CodePushOriginal.plugin = "cordova-plugin-code-push";
    CodePushOriginal.pluginRef = "codePush";
    CodePushOriginal.repo = "https://github.com/Microsoft/cordova-plugin-code-push";
    CodePushOriginal.platforms = ["Android", "iOS"];
    return CodePushOriginal;
}(AwesomeCordovaNativePlugin));
var CodePush = new CodePushOriginal();
export { CodePush };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY29kZS1wdXNoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFpUWxDOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksVUErQ1g7QUEvQ0QsV0FBWSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsdURBQVUsQ0FBQTtJQUVWOzs7T0FHRztJQUNILG1FQUFnQixDQUFBO0lBRWhCOztPQUVHO0lBQ0gsK0RBQWMsQ0FBQTtJQUVkOzs7T0FHRztJQUNILDZDQUFLLENBQUE7SUFFTDs7T0FFRztJQUNILHlEQUFXLENBQUE7SUFFWDs7T0FFRztJQUNILHlFQUFtQixDQUFBO0lBRW5COztPQUVHO0lBQ0gsMkVBQW9CLENBQUE7SUFFcEI7O09BRUc7SUFDSCx5RUFBbUIsQ0FBQTtJQUVuQjs7T0FFRztJQUNILHFFQUFpQixDQUFBO0FBQ25CLENBQUMsRUEvQ1csVUFBVSxLQUFWLFVBQVUsUUErQ3JCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxXQWVYO0FBZkQsV0FBWSxXQUFXO0lBQ3JCOztPQUVHO0lBQ0gsdURBQVMsQ0FBQTtJQUVUOztPQUVHO0lBQ0gsbUVBQWUsQ0FBQTtJQUVmOztPQUVHO0lBQ0gsaUVBQWMsQ0FBQTtBQUNoQixDQUFDLEVBZlcsV0FBVyxLQUFYLFdBQVcsUUFldEI7O0lBMEk2Qiw0QkFBMEI7Ozs7SUFPdEQsb0NBQWlCO0lBV2pCLG9DQUFpQjtJQWFqQixpQ0FBYyxhQUFDLGFBQXNCO0lBWXJDLHlDQUFzQjtJQVd0QixxQ0FBa0I7SUE0QmxCLHVCQUFJLGFBQUMsV0FBeUIsRUFBRSxnQkFBb0Q7Ozs7OzttQkFyaUJ0RjtFQW1kOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbm5hbWVzcGFjZSBIdHRwIHtcclxuICBleHBvcnQgY29uc3QgZW51bSBWZXJiIHtcclxuICAgIEdFVCxcclxuICAgIEhFQUQsXHJcbiAgICBQT1NULFxyXG4gICAgUFVULFxyXG4gICAgREVMRVRFLFxyXG4gICAgVFJBQ0UsXHJcbiAgICBPUFRJT05TLFxyXG4gICAgQ09OTkVDVCxcclxuICAgIFBBVENILFxyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBSZXNwb25zZSB7XHJcbiAgICBzdGF0dXNDb2RlOiBudW1iZXI7XHJcbiAgICBib2R5Pzogc3RyaW5nO1xyXG4gIH1cclxuXHJcbiAgZXhwb3J0IGludGVyZmFjZSBSZXF1ZXN0ZXIge1xyXG4gICAgcmVxdWVzdCh2ZXJiOiBWZXJiLCB1cmw6IHN0cmluZywgY2FsbGJhY2s6IENhbGxiYWNrPFJlc3BvbnNlPik6IHZvaWQ7XHJcbiAgICByZXF1ZXN0KHZlcmI6IFZlcmIsIHVybDogc3RyaW5nLCByZXF1ZXN0Qm9keTogc3RyaW5nLCBjYWxsYmFjazogQ2FsbGJhY2s8UmVzcG9uc2U+KTogdm9pZDtcclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgcGFja2FnZS4gQWxsIGZpZWxkcyBhcmUgbm9uLW51bGxhYmxlLCBleGNlcHQgd2hlbiByZXRyaWV2aW5nIHRoZSBjdXJyZW50bHkgcnVubmluZyBwYWNrYWdlIG9uIHRoZSBmaXJzdCBydW4gb2YgdGhlIGFwcCxcclxuICogaW4gd2hpY2ggY2FzZSBvbmx5IHRoZSBhcHBWZXJzaW9uIGlzIGNvbXB1bHNvcnkuXHJcbiAqXHJcbiAqICEhIFRISVMgVFlQRSBJUyBSRUFEIEZST00gTkFUSVZFIENPREUgQVMgV0VMTC4gQU5ZIENIQU5HRVMgVE8gVEhJUyBJTlRFUkZBQ0UgTkVFRFMgVE8gQkUgVVBEQVRFRCBJTiBOQVRJVkUgQ09ERSAhIVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJUGFja2FnZSB7XHJcbiAgZGVwbG95bWVudEtleTogc3RyaW5nO1xyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxuICBhcHBWZXJzaW9uOiBzdHJpbmc7XHJcbiAgaXNNYW5kYXRvcnk6IGJvb2xlYW47XHJcbiAgcGFja2FnZUhhc2g6IHN0cmluZztcclxuICBwYWNrYWdlU2l6ZTogbnVtYmVyO1xyXG4gIGZhaWxlZEluc3RhbGw6IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgcmVtb3RlIHBhY2thZ2UsIHdoaWNoIHJlcHJlc2VudHMgYW4gdXBkYXRlIHBhY2thZ2UgYXZhaWxhYmxlIGZvciBkb3dubG9hZC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgSVJlbW90ZVBhY2thZ2UgZXh0ZW5kcyBJUGFja2FnZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIFVSTCBhdCB3aGljaCB0aGUgcGFja2FnZSBpcyBhdmFpbGFibGUgZm9yIGRvd25sb2FkLlxyXG4gICAqL1xyXG4gIGRvd25sb2FkVXJsOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERvd25sb2FkcyB0aGUgcGFja2FnZSB1cGRhdGUgZnJvbSB0aGUgQ29kZVB1c2ggc2VydmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrfSBkb3dubG9hZFN1Y2Nlc3MgQ2FsbGVkIHdpdGggb25lIHBhcmFtZXRlciwgdGhlIGRvd25sb2FkZWQgcGFja2FnZSBpbmZvcm1hdGlvbiwgb25jZSB0aGUgZG93bmxvYWQgY29tcGxldGVkIHN1Y2Nlc3NmdWxseS5cclxuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFtkb3dubG9hZEVycm9yXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz59IFtkb3dubG9hZFByb2dyZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gSXQgaXMgY2FsbGVkIHNldmVyYWwgdGltZXMgd2l0aCBvbmUgRG93bmxvYWRQcm9ncmVzcyBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgZG93bmxvYWQoXHJcbiAgICBkb3dubG9hZFN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJTG9jYWxQYWNrYWdlPixcclxuICAgIGRvd25sb2FkRXJyb3I/OiBFcnJvckNhbGxiYWNrLFxyXG4gICAgZG93bmxvYWRQcm9ncmVzcz86IFN1Y2Nlc3NDYWxsYmFjazxEb3dubG9hZFByb2dyZXNzPlxyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFib3J0cyB0aGUgY3VycmVudCBkb3dubG9hZCBzZXNzaW9uLCBwcmV2aW91c2x5IHN0YXJ0ZWQgd2l0aCBkb3dubG9hZCgpLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8dm9pZD59IFthYm9ydFN1Y2Nlc3NdIE9wdGlvbmFsIGNhbGxiYWNrIGludm9rZWQgaWYgdGhlIGFib3J0IG9wZXJhdGlvbiBzdWNjZWVkZWQuXHJcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbYWJvcnRFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIGFib3J0RG93bmxvYWQoYWJvcnRTdWNjZXNzPzogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LCBhYm9ydEVycm9yPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIGEgbG9jYWwgcGFja2FnZS5cclxuICpcclxuICogISEgVEhJUyBUWVBFIElTIFJFQUQgRlJPTSBOQVRJVkUgQ09ERSBBUyBXRUxMLiBBTlkgQ0hBTkdFUyBUTyBUSElTIElOVEVSRkFDRSBORUVEUyBUTyBCRSBVUERBVEVEIElOIE5BVElWRSBDT0RFICEhXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2NhbFBhY2thZ2UgZXh0ZW5kcyBJUGFja2FnZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxvY2FsIHN0b3JhZ2UgcGF0aCB3aGVyZSB0aGlzIHBhY2thZ2UgaXMgbG9jYXRlZC5cclxuICAgKi9cclxuICBsb2NhbFBhdGg6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBjdXJyZW50IGFwcGxpY2F0aW9uIHJ1biBpcyB0aGUgZmlyc3Qgb25lIGFmdGVyIHRoZSBwYWNrYWdlIHdhcyBhcHBsaWVkLlxyXG4gICAqL1xyXG4gIGlzRmlyc3RSdW46IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFwcGxpZXMgdGhpcyBwYWNrYWdlIHRvIHRoZSBhcHBsaWNhdGlvbi4gVGhlIGFwcGxpY2F0aW9uIHdpbGwgYmUgcmVsb2FkZWQgd2l0aCB0aGlzIHBhY2thZ2UgYW5kIG9uIGV2ZXJ5IGFwcGxpY2F0aW9uIGxhdW5jaCB0aGlzIHBhY2thZ2Ugd2lsbCBiZSBsb2FkZWQuXHJcbiAgICogT24gdGhlIGZpcnN0IHJ1biBhZnRlciB0aGUgdXBkYXRlLCB0aGUgYXBwbGljYXRpb24gd2lsbCB3YWl0IGZvciBhIGNvZGVQdXNoLm5vdGlmeUFwcGxpY2F0aW9uUmVhZHkoKSBjYWxsLiBPbmNlIHRoaXMgY2FsbCBpcyBtYWRlLCB0aGUgaW5zdGFsbCBvcGVyYXRpb24gaXMgY29uc2lkZXJlZCBhIHN1Y2Nlc3MuXHJcbiAgICogT3RoZXJ3aXNlLCB0aGUgaW5zdGFsbCBvcGVyYXRpb24gd2lsbCBiZSBtYXJrZWQgYXMgZmFpbGVkLCBhbmQgdGhlIGFwcGxpY2F0aW9uIGlzIHJldmVydGVkIHRvIGl0cyBwcmV2aW91cyB2ZXJzaW9uIG9uIHRoZSBuZXh0IHJ1bi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPEluc3RhbGxNb2RlPn0gaW5zdGFsbFN1Y2Nlc3MgQ2FsbGJhY2sgaW52b2tlZCBpZiB0aGUgaW5zdGFsbCBvcGVyYXRpb24gc3VjY2VlZGVkLlxyXG4gICAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gW2luc3RhbGxFcnJvcl0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpbiBjYXNlIG9mIGFuIGVycm9yLlxyXG4gICAqIEBwYXJhbSB7SW5zdGFsbE9wdGlvbnN9IFtpbnN0YWxsT3B0aW9uc10gT3B0aW9uYWwgcGFyYW1ldGVyIHVzZWQgZm9yIGN1c3RvbWl6aW5nIHRoZSBpbnN0YWxsYXRpb24gYmVoYXZpb3IuXHJcbiAgICovXHJcbiAgaW5zdGFsbChcclxuICAgIGluc3RhbGxTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SW5zdGFsbE1vZGU+LFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2ssXHJcbiAgICBpbnN0YWxsT3B0aW9ucz86IEluc3RhbGxPcHRpb25zXHJcbiAgKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlY29tcG9zZWQgc3RhdGljIHNpZGUgb2YgUmVtb3RlUGFja2FnZS5cclxuICogRm9yIENsYXNzIERlY29tcG9zaXRpb24gZ3VpZGVsaW5lcyBzZWUgaHR0cDovL3d3dy50eXBlc2NyaXB0bGFuZy5vcmcvSGFuZGJvb2sjd3JpdGluZy1kdHMtZmlsZXMtZ3VpZGVsaW5lcy1hbmQtc3BlY2lmaWNzXHJcbiAqL1xyXG5cclxuLyogdHNsaW50OmRpc2FibGUgKi9cclxuaW50ZXJmYWNlIFJlbW90ZVBhY2thZ2VfU3RhdGljIHtcclxuICBuZXcgKCk6IElSZW1vdGVQYWNrYWdlO1xyXG59XHJcblxyXG4vKiB0c2xpbnQ6ZW5hYmxlICovXHJcblxyXG4vKipcclxuICogRGVjb21wb3NlZCBzdGF0aWMgc2lkZSBvZiBMb2NhbFBhY2thZ2UuXHJcbiAqIEZvciBDbGFzcyBEZWNvbXBvc2l0aW9uIGd1aWRlbGluZXMgc2VlIGh0dHA6Ly93d3cudHlwZXNjcmlwdGxhbmcub3JnL0hhbmRib29rI3dyaXRpbmctZHRzLWZpbGVzLWd1aWRlbGluZXMtYW5kLXNwZWNpZmljc1xyXG4gKi9cclxuXHJcbi8qIHRzbGludDpkaXNhYmxlICovXHJcbmludGVyZmFjZSBMb2NhbFBhY2thZ2VfU3RhdGljIHtcclxuICBuZXcgKCk6IElMb2NhbFBhY2thZ2U7XHJcbn1cclxuXHJcbi8qIHRzbGludDplbmFibGUgKi9cclxuXHJcbmRlY2xhcmUgY29uc3QgUmVtb3RlUGFja2FnZTogUmVtb3RlUGFja2FnZV9TdGF0aWM7XHJcbmRlY2xhcmUgY29uc3QgTG9jYWxQYWNrYWdlOiBMb2NhbFBhY2thZ2VfU3RhdGljO1xyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIEpTT04gZm9ybWF0IG9mIHRoZSBjdXJyZW50IHBhY2thZ2UgaW5mb3JtYXRpb24gZmlsZS5cclxuICogVGhpcyBmaWxlIGlzIHN0b3JlZCBpbiB0aGUgbG9jYWwgc3RvcmFnZSBvZiB0aGUgZGV2aWNlIGFuZCBwZXJzaXN0cyBiZXR3ZWVuIHN0b3JlIHVwZGF0ZXMgYW5kIGNvZGUtcHVzaCB1cGRhdGVzLlxyXG4gKlxyXG4gKiAhISBUSElTIEZJTEUgSVMgUkVBRCBGUk9NIE5BVElWRSBDT0RFIEFTIFdFTEwuIEFOWSBDSEFOR0VTIFRPIFRISVMgSU5URVJGQUNFIE5FRURTIFRPIEJFIFVQREFURUQgSU4gTkFUSVZFIENPREUgISFcclxuICovXHJcbmludGVyZmFjZSBJUGFja2FnZUluZm9NZXRhZGF0YSBleHRlbmRzIElMb2NhbFBhY2thZ2Uge1xyXG4gIG5hdGl2ZUJ1aWxkVGltZTogc3RyaW5nO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgTmF0aXZlVXBkYXRlTm90aWZpY2F0aW9uIHtcclxuICB1cGRhdGVBcHBWZXJzaW9uOiBib29sZWFuOyAvLyBBbHdheXMgdHJ1ZVxyXG4gIGFwcFZlcnNpb246IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQ2FsbGJhY2s8VD4gPSAoZXJyb3I6IEVycm9yLCBwYXJhbWV0ZXI6IFQpID0+IHZvaWQ7XHJcbmV4cG9ydCB0eXBlIFN1Y2Nlc3NDYWxsYmFjazxUPiA9IChyZXN1bHQ/OiBUKSA9PiB2b2lkO1xyXG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrID0gKGVycm9yPzogRXJyb3IpID0+IHZvaWQ7XHJcblxyXG5pbnRlcmZhY2UgQ29uZmlndXJhdGlvbiB7XHJcbiAgYXBwVmVyc2lvbjogc3RyaW5nO1xyXG4gIGNsaWVudFVuaXF1ZUlkOiBzdHJpbmc7XHJcbiAgZGVwbG95bWVudEtleTogc3RyaW5nO1xyXG4gIHNlcnZlclVybDogc3RyaW5nO1xyXG4gIGlnbm9yZUFwcFZlcnNpb24/OiBib29sZWFuO1xyXG59XHJcblxyXG5kZWNsYXJlIGNsYXNzIEFjcXVpc2l0aW9uU3RhdHVzIHtcclxuICBzdGF0aWMgRGVwbG95bWVudFN1Y2NlZWRlZDogc3RyaW5nO1xyXG4gIHN0YXRpYyBEZXBsb3ltZW50RmFpbGVkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmRlY2xhcmUgY2xhc3MgQWNxdWlzaXRpb25NYW5hZ2VyIHtcclxuICBjb25zdHJ1Y3RvcihodHRwUmVxdWVzdGVyOiBIdHRwLlJlcXVlc3RlciwgY29uZmlndXJhdGlvbjogQ29uZmlndXJhdGlvbik7XHJcbiAgcXVlcnlVcGRhdGVXaXRoQ3VycmVudFBhY2thZ2UoXHJcbiAgICBjdXJyZW50UGFja2FnZTogSVBhY2thZ2UsXHJcbiAgICBjYWxsYmFjaz86IENhbGxiYWNrPElSZW1vdGVQYWNrYWdlIHwgTmF0aXZlVXBkYXRlTm90aWZpY2F0aW9uPlxyXG4gICk6IHZvaWQ7XHJcbiAgcmVwb3J0U3RhdHVzRGVwbG95KFxyXG4gICAgcGtnPzogSVBhY2thZ2UsXHJcbiAgICBzdGF0dXM/OiBzdHJpbmcsXHJcbiAgICBwcmV2aW91c0xhYmVsT3JBcHBWZXJzaW9uPzogc3RyaW5nLFxyXG4gICAgcHJldmlvdXNEZXBsb3ltZW50S2V5Pzogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s/OiBDYWxsYmFjazx2b2lkPlxyXG4gICk6IHZvaWQ7XHJcbiAgcmVwb3J0U3RhdHVzRG93bmxvYWQocGtnOiBJUGFja2FnZSwgY2FsbGJhY2s/OiBDYWxsYmFjazx2b2lkPik6IHZvaWQ7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDb2RlUHVzaENvcmRvdmFQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhY2thZ2VTdWNjZXNzIENhbGxiYWNrIGludm9rZWQgd2l0aCB0aGUgY3VycmVudGx5IGRlcGxveWVkIHBhY2thZ2UgaW5mb3JtYXRpb24uXHJcbiAgICogQHBhcmFtIHBhY2thZ2VFcnJvciBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgZ2V0Q3VycmVudFBhY2thZ2UocGFja2FnZVN1Y2Nlc3M6IFN1Y2Nlc3NDYWxsYmFjazxJTG9jYWxQYWNrYWdlPiwgcGFja2FnZUVycm9yPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgdGhlIHBlbmRpbmcgcGFja2FnZSBpbmZvcm1hdGlvbiwgaWYgYW55LiBBIHBlbmRpbmcgcGFja2FnZSBpcyBvbmUgdGhhdCBoYXMgYmVlbiBpbnN0YWxsZWQgYnV0IHRoZSBhcHBsaWNhdGlvbiBzdGlsbCBydW5zIHRoZSBvbGQgY29kZS5cclxuICAgKiBUaGlzIGhhcHBlbnMgb25seSBhZnRlciBhIHBhY2thZ2UgaGFzIGJlZW4gaW5zdGFsbGVkIHVzaW5nIE9OX05FWFRfUkVTVEFSVCBvciBPTl9ORVhUX1JFU1VNRSBtb2RlLCBidXQgdGhlIGFwcGxpY2F0aW9uIHdhcyBub3QgcmVzdGFydGVkL3Jlc3VtZWQgeWV0LlxyXG4gICAqL1xyXG4gIGdldFBlbmRpbmdQYWNrYWdlKHBhY2thZ2VTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SUxvY2FsUGFja2FnZT4sIHBhY2thZ2VFcnJvcj86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2l0aCB0aGUgQ29kZVB1c2ggc2VydmVyIGlmIGFuIHVwZGF0ZSBwYWNrYWdlIGlzIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazxJUmVtb3RlUGFja2FnZT59IHF1ZXJ5U3VjY2VzcyBDYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYSBzdWNjZXNzZnVsIHJlc3BvbnNlIGZyb20gdGhlIHNlcnZlci5cclxuICAgKiAgICAgICAgICAgICAgICAgICAgIFRoZSBjYWxsYmFjayB0YWtlcyBvbmUgUmVtb3RlUGFja2FnZSBwYXJhbWV0ZXIuIEEgbm9uLW51bGwgcGFja2FnZSBpcyBhIHZhbGlkIHVwZGF0ZS5cclxuICAgKiAgICAgICAgICAgICAgICAgICAgIEEgbnVsbCBwYWNrYWdlIG1lYW5zIHRoZSBhcHBsaWNhdGlvbiBpcyB1cCB0byBkYXRlIGZvciB0aGUgY3VycmVudCBuYXRpdmUgYXBwbGljYXRpb24gdmVyc2lvbi5cclxuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFtxdWVyeUVycm9yXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtkZXBsb3ltZW50S2V5XSBPcHRpb25hbCBkZXBsb3ltZW50IGtleSB0aGF0IG92ZXJyaWRlcyB0aGUgY29uZmlnLnhtbCBzZXR0aW5nLlxyXG4gICAqL1xyXG4gIGNoZWNrRm9yVXBkYXRlKFxyXG4gICAgcXVlcnlTdWNjZXNzOiBTdWNjZXNzQ2FsbGJhY2s8SVJlbW90ZVBhY2thZ2U+LFxyXG4gICAgcXVlcnlFcnJvcj86IEVycm9yQ2FsbGJhY2ssXHJcbiAgICBkZXBsb3ltZW50S2V5Pzogc3RyaW5nXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogTm90aWZpZXMgdGhlIHBsdWdpbiB0aGF0IHRoZSB1cGRhdGUgb3BlcmF0aW9uIHN1Y2NlZWRlZCBhbmQgdGhhdCB0aGUgYXBwbGljYXRpb24gaXMgcmVhZHkuXHJcbiAgICogQ2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIHJlcXVpcmVkIG9uIHRoZSBmaXJzdCBydW4gYWZ0ZXIgYW4gdXBkYXRlLiBPbiBldmVyeSBzdWJzZXF1ZW50IGFwcGxpY2F0aW9uIHJ1biwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIGEgbm9vcC5cclxuICAgKiBJZiB1c2luZyBzeW5jIEFQSSwgY2FsbGluZyB0aGlzIGZ1bmN0aW9uIGlzIG5vdCByZXF1aXJlZCBzaW5jZSBzeW5jIGNhbGxzIGl0IGludGVybmFsbHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gW25vdGlmeVN1Y2NlZWRlZF0gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBpZiB0aGUgcGx1Z2luIHdhcyBzdWNjZXNzZnVsbHkgbm90aWZpZWQuXHJcbiAgICogQHBhcmFtIHtFcnJvckNhbGxiYWNrfSBbbm90aWZ5RmFpbGVkXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGluIGNhc2Ugb2YgYW4gZXJyb3IgZHVyaW5nIG5vdGlmeWluZyB0aGUgcGx1Z2luLlxyXG4gICAqL1xyXG4gIG5vdGlmeUFwcGxpY2F0aW9uUmVhZHkobm90aWZ5U3VjY2VlZGVkPzogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LCBub3RpZnlGYWlsZWQ/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVsb2FkcyB0aGUgYXBwbGljYXRpb24uIElmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgcGFja2FnZSBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGVzLCB0aGUgdXBkYXRlXHJcbiAgICogd2lsbCBiZSBpbW1lZGlhdGVseSB2aXNpYmxlIHRvIHRoZSB1c2VyLiBPdGhlcndpc2UsIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHNpbXBseSByZWxvYWQgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N1Y2Nlc3NDYWxsYmFjazx2b2lkPn0gaW5zdGFsbFN1Y2Nlc3NcclxuICAgKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IFtlcnJvckNhbGxiYWNrXVxyXG4gICAqL1xyXG4gIHJlc3RhcnRBcHBsaWNhdGlvbihpbnN0YWxsU3VjY2VzczogU3VjY2Vzc0NhbGxiYWNrPHZvaWQ+LCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIG1ldGhvZCBmb3IgaW5zdGFsbGluZyB1cGRhdGVzIGluIG9uZSBtZXRob2QgY2FsbC5cclxuICAgKiBUaGlzIG1ldGhvZCBpcyBwcm92aWRlZCBmb3Igc2ltcGxpY2l0eSwgYW5kIGl0cyBiZWhhdmlvciBjYW4gYmUgcmVwbGljYXRlZCBieSB1c2luZyB3aW5kb3cuY29kZVB1c2guY2hlY2tGb3JVcGRhdGUoKSwgUmVtb3RlUGFja2FnZSdzIGRvd25sb2FkKCkgYW5kIExvY2FsUGFja2FnZSdzIGluc3RhbGwoKSBtZXRob2RzLlxyXG4gICAqXHJcbiAgICogVGhlIGFsZ29yaXRobSBvZiB0aGlzIG1ldGhvZCBpcyB0aGUgZm9sbG93aW5nOlxyXG4gICAqIC0gQ2hlY2tzIGZvciBhbiB1cGRhdGUgb24gdGhlIENvZGVQdXNoIHNlcnZlci5cclxuICAgKiAtIElmIGFuIHVwZGF0ZSBpcyBhdmFpbGFibGVcclxuICAgKiAgICAgICAgIC0gSWYgdGhlIHVwZGF0ZSBpcyBtYW5kYXRvcnkgYW5kIHRoZSBhbGVydE1lc3NhZ2UgaXMgc2V0IGluIG9wdGlvbnMsIHRoZSB1c2VyIHdpbGwgYmUgaW5mb3JtZWQgdGhhdCB0aGUgYXBwbGljYXRpb24gd2lsbCBiZSB1cGRhdGVkIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cclxuICAgKiAgICAgICAgICAgVGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgdGhlbiBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkLlxyXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG5vdCBtYW5kYXRvcnkgYW5kIHRoZSBjb25maXJtTWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBhc2tlZCBpZiB0aGV5IHdhbnQgdG8gdXBkYXRlIHRvIHRoZSBsYXRlc3QgdmVyc2lvbi5cclxuICAgKiAgICAgICAgICAgSWYgdGhleSBkZWNsaW5lLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIFN5bmNTdGF0dXMuVVBEQVRFX0lHTk9SRUQuXHJcbiAgICogICAgICAgICAtIE90aGVyd2lzZSwgdGhlIHVwZGF0ZSBwYWNrYWdlIHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgYXBwbGllZCB3aXRoIG5vIHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICogLSBJZiBubyB1cGRhdGUgaXMgYXZhaWxhYmxlIG9uIHRoZSBzZXJ2ZXIsIG9yIGlmIGEgcHJldmlvdXNseSByb2xsZWQgYmFjayB1cGRhdGUgaXMgYXZhaWxhYmxlIGFuZCB0aGUgaWdub3JlRmFpbGVkVXBkYXRlcyBpcyBzZXQgdG8gdHJ1ZSwgdGhlIHN5bmNDYWxsYmFjayB3aWxsIGJlIGludm9rZWQgd2l0aCB0aGUgU3luY1N0YXR1cy5VUF9UT19EQVRFLlxyXG4gICAqIC0gSWYgYW4gZXJyb3Igb2NjdXJzIGR1cmluZyBjaGVja2luZyBmb3IgdXBkYXRlLCBkb3dubG9hZGluZyBvciBpbnN0YWxsaW5nIGl0LCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLkVSUk9SLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8U3luY1N0YXR1cz59IFtzeW5jQ2FsbGJhY2tdIE9wdGlvbmFsIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aXRoIHRoZSBzdGF0dXMgb2YgdGhlIHN5bmMgb3BlcmF0aW9uLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgVGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZSwgYW5kIHRoZSBwb3NzaWJsZSBzdGF0dXNlcyBhcmUgZGVmaW5lZCBieSB0aGUgU3luY1N0YXR1cyBlbnVtLlxyXG4gICAqIEBwYXJhbSB7U3luY09wdGlvbnN9IFtzeW5jT3B0aW9uc10gT3B0aW9uYWwgU3luY09wdGlvbnMgcGFyYW1ldGVyIGNvbmZpZ3VyaW5nIHRoZSBiZWhhdmlvciBvZiB0aGUgc3luYyBvcGVyYXRpb24uXHJcbiAgICogQHBhcmFtIHtTdWNjZXNzQ2FsbGJhY2s8RG93bmxvYWRQcm9ncmVzcz59IFtkb3dubG9hZFByb2dyZXNzXSBPcHRpb25hbCBjYWxsYmFjayBpbnZva2VkIGR1cmluZyB0aGUgZG93bmxvYWQgcHJvY2Vzcy4gSXQgaXMgY2FsbGVkIHNldmVyYWwgdGltZXMgd2l0aCBvbmUgRG93bmxvYWRQcm9ncmVzcyBwYXJhbWV0ZXIuXHJcbiAgICovXHJcbiAgc3luYyhcclxuICAgIHN5bmNDYWxsYmFjaz86IFN1Y2Nlc3NDYWxsYmFjazxTeW5jU3RhdHVzPixcclxuICAgIHN5bmNPcHRpb25zPzogU3luY09wdGlvbnMsXHJcbiAgICBkb3dubG9hZFByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+XHJcbiAgKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHBvc3NpYmxlIHJlc3VsdCBzdGF0dXNlcyBvZiB0aGUgd2luZG93LmNvZGVQdXNoLnN5bmMgb3BlcmF0aW9uLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gU3luY1N0YXR1cyB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGFwcGxpY2F0aW9uIGlzIHVwIHRvIGRhdGUuXHJcbiAgICovXHJcbiAgVVBfVE9fREFURSxcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gdXBkYXRlIGlzIGF2YWlsYWJsZSwgaXQgaGFzIGJlZW4gZG93bmxvYWRlZCwgdW56aXBwZWQgYW5kIGNvcGllZCB0byB0aGUgZGVwbG95bWVudCBmb2xkZXIuXHJcbiAgICogQWZ0ZXIgdGhlIGNvbXBsZXRpb24gb2YgdGhlIGNhbGxiYWNrIGludm9rZWQgd2l0aCBTeW5jU3RhdHVzLlVQREFURV9JTlNUQUxMRUQsIHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHJlbG9hZGVkIHdpdGggdGhlIHVwZGF0ZWQgY29kZSBhbmQgcmVzb3VyY2VzLlxyXG4gICAqL1xyXG4gIFVQREFURV9JTlNUQUxMRUQsXHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIG9wdGlvbmFsIHVwZGF0ZSBpcyBhdmFpbGFibGUsIGJ1dCB0aGUgdXNlciBkZWNsaW5lZCB0byBpbnN0YWxsIGl0LiBUaGUgdXBkYXRlIHdhcyBub3QgZG93bmxvYWRlZC5cclxuICAgKi9cclxuICBVUERBVEVfSUdOT1JFRCxcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gZXJyb3IgaGFwcGVuZWQgZHVyaW5nIHRoZSBzeW5jIG9wZXJhdGlvbi4gVGhpcyBtaWdodCBiZSBhbiBlcnJvciB3aGlsZSBjb21tdW5pY2F0aW5nIHdpdGggdGhlIHNlcnZlciwgZG93bmxvYWRpbmcgb3IgdW56aXBpbmcgdGhlIHVwZGF0ZS5cclxuICAgKiBUaGUgY29uc29sZSBsb2dzIHNob3VsZCBjb250YWluIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBoYXBwZW5lZC4gTm8gdXBkYXRlIGhhcyBiZWVuIGFwcGxpZWQgaW4gdGhpcyBjYXNlLlxyXG4gICAqL1xyXG4gIEVSUk9SLFxyXG5cclxuICAvKipcclxuICAgKiBUaGVyZSBpcyBhbiBvbmdvaW5nIHN5bmMgaW4gcHJvZ3Jlc3MsIHNvIHRoaXMgYXR0ZW1wdCB0byBzeW5jIGhhcyBiZWVuIGFib3J0ZWQuXHJcbiAgICovXHJcbiAgSU5fUFJPR1JFU1MsXHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSB0aGUgcGx1Z2luIGlzIGFib3V0IHRvIGNoZWNrIGZvciB1cGRhdGVzLlxyXG4gICAqL1xyXG4gIENIRUNLSU5HX0ZPUl9VUERBVEUsXHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSBhIHVzZXIgZGlhbG9nIGlzIGFib3V0IHRvIGJlIGRpc3BsYXllZC4gVGhpcyBzdGF0dXMgd2lsbCBiZSByZXBvcnRlZCBvbmx5IGlmIHVzZXIgaW50ZXJhY3Rpb24gaXMgZW5hYmxlZC5cclxuICAgKi9cclxuICBBV0FJVElOR19VU0VSX0FDVElPTixcclxuXHJcbiAgLyoqXHJcbiAgICogSW50ZXJtZWRpYXRlIHN0YXR1cyAtIHRoZSB1cGRhdGUgcGFja2FnZSBpcyBhYm91dCB0byBiZSBkb3dubG9hZGVkLlxyXG4gICAqL1xyXG4gIERPV05MT0FESU5HX1BBQ0tBR0UsXHJcblxyXG4gIC8qKlxyXG4gICAqIEludGVybWVkaWF0ZSBzdGF0dXMgLSB0aGUgdXBkYXRlIHBhY2thZ2UgaXMgYWJvdXQgdG8gYmUgaW5zdGFsbGVkLlxyXG4gICAqL1xyXG4gIElOU1RBTExJTkdfVVBEQVRFLFxyXG59XHJcblxyXG4vKipcclxuICogRGVmaW5lcyB0aGUgYXZhaWxhYmxlIGluc3RhbGwgbW9kZXMgZm9yIHVwZGF0ZXMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBJbnN0YWxsTW9kZSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIHVwZGF0ZSB3aWxsIGJlIGFwcGxpZWQgdG8gdGhlIHJ1bm5pbmcgYXBwbGljYXRpb24gaW1tZWRpYXRlbHkuIFRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHJlbG9hZGVkIHdpdGggdGhlIG5ldyBjb250ZW50IGltbWVkaWF0ZWx5LlxyXG4gICAqL1xyXG4gIElNTUVESUFURSxcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHVwZGF0ZSBpcyBkb3dubG9hZGVkIGJ1dCBub3QgaW5zdGFsbGVkIGltbWVkaWF0ZWx5LiBUaGUgbmV3IGNvbnRlbnQgd2lsbCBiZSBhdmFpbGFibGUgdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gaXMgc3RhcnRlZC5cclxuICAgKi9cclxuICBPTl9ORVhUX1JFU1RBUlQsXHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB1ZHBhdGUgaXMgZG93bmxvYWRlZCBidXQgbm90IGluc3RhbGxlZCBpbW1lZGlhdGVseS4gVGhlIG5ldyBjb250ZW50IHdpbGwgYmUgYXZhaWxhYmxlIHRoZSBuZXh0IHRpbWUgdGhlIGFwcGxpY2F0aW9uIGlzIHJlc3VtZWQgb3IgcmVzdGFydGVkLCB3aGljaGV2ZXIgZXZlbnQgaGFwcGVuZHMgZmlyc3QuXHJcbiAgICovXHJcbiAgT05fTkVYVF9SRVNVTUUsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBpbnN0YWxsIG9wZXJhdGlvbiBvcHRpb25zLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBJbnN0YWxsT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBzcGVjaWZ5IHRoZSBJbnN0YWxsTW9kZSB1c2VkIGZvciB0aGUgaW5zdGFsbCBvcGVyYXRpb24uIFRoaXMgaXMgb3B0aW9uYWwgYW5kIGRlZmF1bHRzIHRvIEluc3RhbGxNb2RlLk9OX05FWFRfUkVTVEFSVC5cclxuICAgKi9cclxuICBpbnN0YWxsTW9kZT86IEluc3RhbGxNb2RlO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBpbnN0YWxsTW9kZSA9PT0gT05fTkVYVF9SRVNVTUUsIHRoZSBtaW5pbXVtIGFtb3VudCBvZiB0aW1lIChpbiBzZWNvbmRzKSB3aGljaCBuZWVkcyB0byBwYXNzIHdpdGggdGhlIGFwcCBpbiB0aGUgYmFja2dyb3VuZCBiZWZvcmUgYW4gdXBkYXRlIGluc3RhbGwgb2NjdXJzIHdoZW4gdGhlIGFwcCBpcyByZXN1bWVkLlxyXG4gICAqL1xyXG4gIG1pbmltdW1CYWNrZ3JvdW5kRHVyYXRpb24/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gc3BlY2lmeSB0aGUgSW5zdGFsbE1vZGUgdXNlZCBmb3IgdGhlIGluc3RhbGwgb3BlcmF0aW9uIGlmIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5LiBUaGlzIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBJbnN0YWxsTW9kZS5JTU1FRElBVEUuXHJcbiAgICovXHJcbiAgbWFuZGF0b3J5SW5zdGFsbE1vZGU/OiBJbnN0YWxsTW9kZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIHN5bmMgb3BlcmF0aW9uIG9wdGlvbnMuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN5bmNPcHRpb25zIGV4dGVuZHMgSW5zdGFsbE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIGJvb2xlYW4gZmxhZy4gSWYgc2V0LCBwcmV2aW91cyB1cGRhdGVzIHdoaWNoIHdlcmUgcm9sbGVkIGJhY2sgd2lsbCBiZSBpZ25vcmVkLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAqL1xyXG4gIGlnbm9yZUZhaWxlZFVwZGF0ZXM/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIGVuYWJsZSwgZGlzYWJsZSBvciBjdXN0b21pemUgdGhlIHVzZXIgaW50ZXJhY3Rpb24gZHVyaW5nIHN5bmMuXHJcbiAgICogSWYgc2V0IHRvIGZhbHNlLCB1c2VyIGludGVyYWN0aW9uIHdpbGwgYmUgZGlzYWJsZWQuIElmIHNldCB0byB0cnVlLCB0aGUgdXNlciB3aWxsIGJlIGFsZXJ0ZWQgb3IgYXNrZWQgdG8gY29uZmlybSBuZXcgdXBkYXRlcywgYmFzZWQgb24gd2hldGhlciB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeS5cclxuICAgKiBUbyBjdXN0b21pemUgdGhlIHVzZXIgZGlhbG9nLCB0aGlzIG9wdGlvbiBjYW4gYmUgc2V0IHRvIGEgY3VzdG9tIFVwZGF0ZURpYWxvZ09wdGlvbnMgaW5zdGFuY2UuXHJcbiAgICovXHJcbiAgdXBkYXRlRGlhbG9nPzogYm9vbGVhbiB8IFVwZGF0ZURpYWxvZ09wdGlvbnM7XHJcblxyXG4gIC8qKlxyXG4gICAqIE92ZXJyaWRlcyB0aGUgY29uZmlnLnhtbCBkZXBsb3ltZW50IGtleSB3aGVuIGNoZWNraW5nIGZvciB1cGRhdGVzLlxyXG4gICAqL1xyXG4gIGRlcGxveW1lbnRLZXk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBjb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBhbGVydCBvciBjb25maXJtYXRpb24gZGlhbG9nXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFVwZGF0ZURpYWxvZ09wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIElmIGEgbWFuZGF0b3J5IHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoaXMgb3B0aW9uIGlzIHNldCwgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgaW4gYW4gYWxlcnQgZGlhbG9nIGJlZm9yZSBkb3dubG9hZGluZyBhbmQgaW5zdGFsbGluZyB0aGUgdXBkYXRlLlxyXG4gICAqIFRoZSB1c2VyIHdpbGwgbm90IGJlIGFibGUgdG8gY2FuY2VsIHRoZSBvcGVyYXRpb24sIHNpbmNlIHRoZSB1cGRhdGUgaXMgbWFuZGF0b3J5LlxyXG4gICAqL1xyXG4gIG1hbmRhdG9yeVVwZGF0ZU1lc3NhZ2U/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGFuIG9wdGlvbmFsIHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoaXMgb3B0aW9uIGlzIHNldCwgdGhlIG1lc3NhZ2Ugd2lsbCBiZSBkaXNwbGF5ZWQgdG8gdGhlIHVzZXIgaW4gYSBjb25maXJtYXRpb24gZGlhbG9nLlxyXG4gICAqIElmIHRoZSB1c2VyIGNvbmZpcm1zIHRoZSB1cGRhdGUsIGl0IHdpbGwgYmUgZG93bmxvYWRlZCBhbmQgaW5zdGFsbGVkLiBPdGhlcndpc2UsIHRoZSB1cGRhdGUgdXBkYXRlIGlzIG5vdCBkb3dubG9hZGVkLlxyXG4gICAqL1xyXG4gIG9wdGlvbmFsVXBkYXRlTWVzc2FnZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlIG9mIHRoZSBkaWFsb2cgYm94IHVzZWQgZm9yIGludGVyYWN0aW5nIHdpdGggdGhlIHVzZXIgaW4gY2FzZSBvZiBhIG1hbmRhdG9yeSBvciBvcHRpb25hbCB1cGRhdGUuXHJcbiAgICogVGhpcyB0aXRsZSB3aWxsIG9ubHkgYmUgdXNlZCBpZiBhdCBsZWFzdCBvbmUgb2YgbWFuZGF0b3J5VXBkYXRlTWVzc2FnZSBvciBvcHRpb25hbFVwZGF0ZU1lc3NhZ2Ugb3B0aW9ucyBhcmUgc2V0LlxyXG4gICAqL1xyXG4gIHVwZGF0ZVRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGNvbmZpcm1hdGlvbiBidXR0b24gaW4gY2FzZSBvZiBhbiBvcHRpb25hbCB1cGRhdGUuXHJcbiAgICovXHJcbiAgb3B0aW9uYWxJbnN0YWxsQnV0dG9uTGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsYWJlbCBvZiB0aGUgY2FuY2VsIGJ1dHRvbiBpbiBjYXNlIG9mIGFuIG9wdGlvbmFsIHVwZGF0ZS5cclxuICAgKi9cclxuICBvcHRpb25hbElnbm9yZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbGFiZWwgb2YgdGhlIGNvbnRpbnVlIGJ1dHRvbiBpbiBjYXNlIG9mIGEgbWFuZGF0b3J5IHVwZGF0ZS5cclxuICAgKi9cclxuICBtYW5kYXRvcnlDb250aW51ZUJ1dHRvbkxhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBGbGFnIGluZGljYXRpbmcgaWYgdGhlIHVwZGF0ZSBkZXNjcmlwdGlvbiBwcm92aWRlZCBieSB0aGUgQ29kZVB1c2ggc2VydmVyIHNob3VsZCBiZSBkaXNwbGF5ZWQgaW4gdGhlIGRpYWxvZyBib3ggYXBwZW5kZWQgdG8gdGhlIHVwZGF0ZSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGFwcGVuZFJlbGVhc2VEZXNjcmlwdGlvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHByZWZpeCB0byBhZGQgdG8gdGhlIHJlbGVhc2UgZGVzY3JpcHRpb24uXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb25QcmVmaXg/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBEZWZpbmVzIHRoZSBKU09OIGZvcm1hdCBvZiB0aGUgcGFja2FnZSBkaWZmIG1hbmlmZXN0IGZpbGUuXHJcbiAqL1xyXG5pbnRlcmZhY2UgSURpZmZNYW5pZmVzdCB7XHJcbiAgZGVsZXRlZEZpbGVzOiBzdHJpbmdbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERlZmluZXMgdGhlIGZvcm1hdCBvZiB0aGUgRG93bmxvYWRQcm9ncmVzcyBvYmplY3QsIHVzZWQgdG8gc2VuZCBwZXJpb2RpY2FsIHVwZGF0ZSBub3RpZmljYXRpb25zIG9uIHRoZSBwcm9ncmVzcyBvZiB0aGUgdXBkYXRlIGRvd25sb2FkLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZFByb2dyZXNzIHtcclxuICB0b3RhbEJ5dGVzOiBudW1iZXI7XHJcbiAgcmVjZWl2ZWRCeXRlczogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQ29kZSBQdXNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb2RlUHVzaCBwbHVnaW4gZm9yIENvcmRvdmEgYnkgTWljcm9zb2Z0IHRoYXQgc3VwcG9ydHMgaU9TIGFuZCBBbmRyb2lkLlxyXG4gKlxyXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9EZWxsb3M3L2V4YW1wbGUtY29yZG92YS1jb2RlLXB1c2gtcGx1Z2luXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENvZGVQdXNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvZGUtcHVzaC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvZGVQdXNoOiBDb2RlUHVzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiAvLyBub3RlIC0gbW9zdGx5IGVycm9yICYgY29tcGxldGVkIG1ldGhvZHMgb2Ygb2JzZXJ2YWJsZSB3aWxsIG5vdCBmaXJlXHJcbiAqIC8vIGFzIHN5bmNTdGF0dXMgd2lsbCBjb250YWluIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSB1cGRhdGVcclxuICogdGhpcy5jb2RlUHVzaC5zeW5jKCkuc3Vic2NyaWJlKChzeW5jU3RhdHVzKSA9PiBjb25zb2xlLmxvZyhzeW5jU3RhdHVzKSk7XHJcbiAqXHJcbiAqIGNvbnN0IGRvd25sb2FkUHJvZ3Jlc3MgPSAocHJvZ3Jlc3MpID0+IHsgY29uc29sZS5sb2coYERvd25sb2FkZWQgJHtwcm9ncmVzcy5yZWNlaXZlZEJ5dGVzfSBvZiAke3Byb2dyZXNzLnRvdGFsQnl0ZXN9YCk7IH1cclxuICogdGhpcy5jb2RlUHVzaC5zeW5jKHt9LCBkb3dubG9hZFByb2dyZXNzKS5zdWJzY3JpYmUoKHN5bmNTdGF0dXMpID0+IGNvbnNvbGUubG9nKHN5bmNTdGF0dXMpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ29kZVB1c2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNvZGUtcHVzaCcsXHJcbiAgcGx1Z2luUmVmOiAnY29kZVB1c2gnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L2NvcmRvdmEtcGx1Z2luLWNvZGUtcHVzaCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvZGVQdXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgY3VycmVudCBwYWNrYWdlIGluZm9ybWF0aW9uLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SUxvY2FsUGFja2FnZT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEN1cnJlbnRQYWNrYWdlKCk6IFByb21pc2U8SUxvY2FsUGFja2FnZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyB0aGUgcGVuZGluZyBwYWNrYWdlIGluZm9ybWF0aW9uLCBpZiBhbnkuIEEgcGVuZGluZyBwYWNrYWdlIGlzIG9uZSB0aGF0IGhhcyBiZWVuIGluc3RhbGxlZCBidXQgdGhlIGFwcGxpY2F0aW9uIHN0aWxsIHJ1bnMgdGhlIG9sZCBjb2RlLlxyXG4gICAqIFRoaXMgaGFwcGVucyBvbmx5IGFmdGVyIGEgcGFja2FnZSBoYXMgYmVlbiBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGUsIGJ1dCB0aGUgYXBwbGljYXRpb24gd2FzIG5vdCByZXN0YXJ0ZWQvcmVzdW1lZCB5ZXQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxJTG9jYWxQYWNrYWdlPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UGVuZGluZ1BhY2thZ2UoKTogUHJvbWlzZTxJTG9jYWxQYWNrYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3Mgd2l0aCB0aGUgQ29kZVB1c2ggc2VydmVyIGlmIGFuIHVwZGF0ZSBwYWNrYWdlIGlzIGF2YWlsYWJsZSBmb3IgZG93bmxvYWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2RlcGxveW1lbnRLZXldIE9wdGlvbmFsIGRlcGxveW1lbnQga2V5IHRoYXQgb3ZlcnJpZGVzIHRoZSBjb25maWcueG1sIHNldHRpbmcuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SVJlbW90ZVBhY2thZ2U+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGNoZWNrRm9yVXBkYXRlKGRlcGxveW1lbnRLZXk/OiBzdHJpbmcpOiBQcm9taXNlPElSZW1vdGVQYWNrYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBOb3RpZmllcyB0aGUgcGx1Z2luIHRoYXQgdGhlIHVwZGF0ZSBvcGVyYXRpb24gc3VjY2VlZGVkIGFuZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiBpcyByZWFkeS5cclxuICAgKiBDYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgcmVxdWlyZWQgb24gdGhlIGZpcnN0IHJ1biBhZnRlciBhbiB1cGRhdGUuIE9uIGV2ZXJ5IHN1YnNlcXVlbnQgYXBwbGljYXRpb24gcnVuLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgYSBub29wLlxyXG4gICAqIElmIHVzaW5nIHN5bmMgQVBJLCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gaXMgbm90IHJlcXVpcmVkIHNpbmNlIHN5bmMgY2FsbHMgaXQgaW50ZXJuYWxseS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBub3RpZnlBcHBsaWNhdGlvblJlYWR5KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVsb2FkcyB0aGUgYXBwbGljYXRpb24uIElmIHRoZXJlIGlzIGEgcGVuZGluZyB1cGRhdGUgcGFja2FnZSBpbnN0YWxsZWQgdXNpbmcgT05fTkVYVF9SRVNUQVJUIG9yIE9OX05FWFRfUkVTVU1FIG1vZGVzLCB0aGUgdXBkYXRlXHJcbiAgICogd2lsbCBiZSBpbW1lZGlhdGVseSB2aXNpYmxlIHRvIHRoZSB1c2VyLiBPdGhlcndpc2UsIGNhbGxpbmcgdGhpcyBmdW5jdGlvbiB3aWxsIHNpbXBseSByZWxvYWQgdGhlIGN1cnJlbnQgdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb24uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzdGFydEFwcGxpY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBpbnN0YWxsaW5nIHVwZGF0ZXMgaW4gb25lIG1ldGhvZCBjYWxsLlxyXG4gICAqIFRoaXMgbWV0aG9kIGlzIHByb3ZpZGVkIGZvciBzaW1wbGljaXR5LCBhbmQgaXRzIGJlaGF2aW9yIGNhbiBiZSByZXBsaWNhdGVkIGJ5IHVzaW5nIHdpbmRvdy5jb2RlUHVzaC5jaGVja0ZvclVwZGF0ZSgpLCBSZW1vdGVQYWNrYWdlJ3MgZG93bmxvYWQoKSBhbmQgTG9jYWxQYWNrYWdlJ3MgaW5zdGFsbCgpIG1ldGhvZHMuXHJcbiAgICpcclxuICAgKiBUaGUgYWxnb3JpdGhtIG9mIHRoaXMgbWV0aG9kIGlzIHRoZSBmb2xsb3dpbmc6XHJcbiAgICogLSBDaGVja3MgZm9yIGFuIHVwZGF0ZSBvbiB0aGUgQ29kZVB1c2ggc2VydmVyLlxyXG4gICAqIC0gSWYgYW4gdXBkYXRlIGlzIGF2YWlsYWJsZVxyXG4gICAqICAgICAgICAgLSBJZiB0aGUgdXBkYXRlIGlzIG1hbmRhdG9yeSBhbmQgdGhlIGFsZXJ0TWVzc2FnZSBpcyBzZXQgaW4gb3B0aW9ucywgdGhlIHVzZXIgd2lsbCBiZSBpbmZvcm1lZCB0aGF0IHRoZSBhcHBsaWNhdGlvbiB3aWxsIGJlIHVwZGF0ZWQgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxyXG4gICAqICAgICAgICAgICBUaGUgdXBkYXRlIHBhY2thZ2Ugd2lsbCB0aGVuIGJlIGRvd25sb2FkZWQgYW5kIGFwcGxpZWQuXHJcbiAgICogICAgICAgICAtIElmIHRoZSB1cGRhdGUgaXMgbm90IG1hbmRhdG9yeSBhbmQgdGhlIGNvbmZpcm1NZXNzYWdlIGlzIHNldCBpbiBvcHRpb25zLCB0aGUgdXNlciB3aWxsIGJlIGFza2VkIGlmIHRoZXkgd2FudCB0byB1cGRhdGUgdG8gdGhlIGxhdGVzdCB2ZXJzaW9uLlxyXG4gICAqICAgICAgICAgICBJZiB0aGV5IGRlY2xpbmUsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggU3luY1N0YXR1cy5VUERBVEVfSUdOT1JFRC5cclxuICAgKiAgICAgICAgIC0gT3RoZXJ3aXNlLCB0aGUgdXBkYXRlIHBhY2thZ2Ugd2lsbCBiZSBkb3dubG9hZGVkIGFuZCBhcHBsaWVkIHdpdGggbm8gdXNlciBpbnRlcmFjdGlvbi5cclxuICAgKiAtIElmIG5vIHVwZGF0ZSBpcyBhdmFpbGFibGUgb24gdGhlIHNlcnZlciwgb3IgaWYgYSBwcmV2aW91c2x5IHJvbGxlZCBiYWNrIHVwZGF0ZSBpcyBhdmFpbGFibGUgYW5kIHRoZSBpZ25vcmVGYWlsZWRVcGRhdGVzIGlzIHNldCB0byB0cnVlLCB0aGUgc3luY0NhbGxiYWNrIHdpbGwgYmUgaW52b2tlZCB3aXRoIHRoZSBTeW5jU3RhdHVzLlVQX1RPX0RBVEUuXHJcbiAgICogLSBJZiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIGNoZWNraW5nIGZvciB1cGRhdGUsIGRvd25sb2FkaW5nIG9yIGluc3RhbGxpbmcgaXQsIHRoZSBzeW5jQ2FsbGJhY2sgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIFN5bmNTdGF0dXMuRVJST1IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge1N5bmNPcHRpb25zfSBbc3luY09wdGlvbnNdIE9wdGlvbmFsIFN5bmNPcHRpb25zIHBhcmFtZXRlciBjb25maWd1cmluZyB0aGUgYmVoYXZpb3Igb2YgdGhlIHN5bmMgb3BlcmF0aW9uLlxyXG4gICAqIEBwYXJhbSB7U3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+fSBbZG93bmxvYWRQcm9ncmVzc10gT3B0aW9uYWwgY2FsbGJhY2sgaW52b2tlZCBkdXJpbmcgdGhlIGRvd25sb2FkIHByb2Nlc3MuIEl0IGlzIGNhbGxlZCBzZXZlcmFsIHRpbWVzIHdpdGggb25lIERvd25sb2FkUHJvZ3Jlc3MgcGFyYW1ldGVyLlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFN5bmNTdGF0dXM+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLCAvLyB3ZSBkb24ndCBuZWVkIHRoaXMsIHNvIHdlIHNldCBpdCB0byBhIHZhbHVlIGhpZ2hlciB0aGFuICMgb2YgYXJnc1xyXG4gIH0pXHJcbiAgc3luYyhzeW5jT3B0aW9ucz86IFN5bmNPcHRpb25zLCBkb3dubG9hZFByb2dyZXNzPzogU3VjY2Vzc0NhbGxiYWNrPERvd25sb2FkUHJvZ3Jlc3M+KTogT2JzZXJ2YWJsZTxTeW5jU3RhdHVzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==