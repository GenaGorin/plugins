import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
export var ConnectionType;
(function (ConnectionType) {
    /**
     * Clear-text connection for the protocol.
     */
    ConnectionType["Clear"] = "Clear";
    /**
     * Starts with clear-text connection at the beginning, then switch to encrypted connection using TLS/SSL.
     */
    ConnectionType["StartTLS"] = "StartTLS";
    /**
     * Encrypted connection using TLS/SSL.
     */
    ConnectionType["TLSSSL"] = "TLS/SSL";
})(ConnectionType || (ConnectionType = {}));
export var Comparison;
(function (Comparison) {
    /**
     * Android ONLY
     * The less than or equal to operator.
     */
    Comparison["LE"] = "LE";
    /**
     * The less than operator.
     */
    Comparison["LT"] = "LT";
    /**
     * The equality operator.
     */
    Comparison["EQ"] = "EQ";
    /**
     * The not equal to operator.
     */
    Comparison["NE"] = "NE";
    /**
     * Android ONLY
     * The greater than operator.
     */
    Comparison["GT"] = "GT";
    /**
     * The greater than or equal to operator.
     */
    Comparison["GE"] = "GE";
})(Comparison || (Comparison = {}));
/**
 * All available message flags. Set or remove flag using "setFlag()".
 */
export var FlagEnum;
(function (FlagEnum) {
    /**
     * "ANSWERED" message flag
     */
    FlagEnum["ANSWERED"] = "ANSWERED";
    /**
     * "DRAFT" message flag
     */
    FlagEnum["DRAFT"] = "DRAFT";
    /**
     * "FLAGGED" message flag
     */
    FlagEnum["FLAGGED"] = "FLAGGED";
    /**
     * Android ONLY
     * "RECENT" message flag
     */
    FlagEnum["RECENT"] = "RECENT";
    /**
     * "SEEN" message flag
     */
    FlagEnum["SEEN"] = "SEEN";
    /**
     * Android ONLY
     * "USER" message flag
     */
    FlagEnum["USER"] = "USER";
    /**
     * "DELETED" message flag. Note: Add this flag to delete the message from the mailbox
     */
    FlagEnum["DELETED"] = "DELETED";
    /**
     * iOS ONLY
     * "SENT" message flag.
     */
    FlagEnum["SENT"] = "Sent";
    /**
     * iOS ONLY
     * "FORWARDED" message flag.
     */
    FlagEnum["FORWARDED"] = "Forwarded";
    /**
     * iOS ONLY
     * "SubmitPending" message flag.
     */
    FlagEnum["SubmitPending"] = "SubmitPending";
    /**
     * iOS ONLY
     * "SUBMITTED" message flag.
     */
    FlagEnum["SUBMITTED"] = "Submitted";
})(FlagEnum || (FlagEnum = {}));
var Imap = /** @class */ (function (_super) {
    __extends(Imap, _super);
    function Imap() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Imap.prototype.connect = function (clientData) { return cordova(this, "connect", {}, arguments); };
    Imap.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    Imap.prototype.isConnected = function () { return cordova(this, "isConnected", {}, arguments); };
    Imap.prototype.listMailFolders = function (pattern) { return cordova(this, "listMailFolders", {}, arguments); };
    Imap.prototype.getMessageCountByFolderName = function (folderName) { return cordova(this, "getMessageCountByFolderName", {}, arguments); };
    Imap.prototype.searchMessagesByDatePeriod = function (folderName, dateInMilliseconds, comparison) { return cordova(this, "searchMessagesByDatePeriod", {}, arguments); };
    Imap.prototype.listMessagesHeadersByConsecutiveNumber = function (folderName, start, end) { return cordova(this, "listMessagesHeadersByConsecutiveNumber", {}, arguments); };
    Imap.prototype.listMessagesHeadersByDate = function (folderName, dateInMilliseconds, comparison) { return cordova(this, "listMessagesHeadersByDate", {}, arguments); };
    Imap.prototype.getFullMessageData = function (folderName, messageNumber) { return cordova(this, "getFullMessageData", {}, arguments); };
    Imap.prototype.getFullMessageDataOnNewSession = function (clientData, folderName, messageNumber) { return cordova(this, "getFullMessageDataOnNewSession", {}, arguments); };
    Imap.prototype.copyToFolder = function (sourceFolder, destinationFolder, messageNums) { return cordova(this, "copyToFolder", {}, arguments); };
    Imap.prototype.setFlag = function (folderName, messageNums, flag, status) { return cordova(this, "setFlag", {}, arguments); };
    Imap.pluginName = "Imap";
    Imap.plugin = "cordova-plugin-imap";
    Imap.pluginRef = "imap";
    Imap.repo = "https://github.com/aleksandar888/cordova-plugin-imap.git";
    Imap.platforms = ["Android", "iOS"];
    Imap.decorators = [
        { type: Injectable }
    ];
    return Imap;
}(AwesomeCordovaNativePlugin));
export { Imap };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW1hcC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQW9ONUYsTUFBTSxDQUFOLElBQVksY0FhWDtBQWJELFdBQVksY0FBYztJQUN4Qjs7T0FFRztJQUNILGlDQUFlLENBQUE7SUFDZjs7T0FFRztJQUNILHVDQUFxQixDQUFBO0lBQ3JCOztPQUVHO0lBQ0gsb0NBQWtCLENBQUE7QUFDcEIsQ0FBQyxFQWJXLGNBQWMsS0FBZCxjQUFjLFFBYXpCO0FBRUQsTUFBTSxDQUFOLElBQVksVUEyQlg7QUEzQkQsV0FBWSxVQUFVO0lBQ3BCOzs7T0FHRztJQUNILHVCQUFTLENBQUE7SUFDVDs7T0FFRztJQUNILHVCQUFTLENBQUE7SUFDVDs7T0FFRztJQUNILHVCQUFTLENBQUE7SUFDVDs7T0FFRztJQUNILHVCQUFTLENBQUE7SUFDVDs7O09BR0c7SUFDSCx1QkFBUyxDQUFBO0lBQ1Q7O09BRUc7SUFDSCx1QkFBUyxDQUFBO0FBQ1gsQ0FBQyxFQTNCVyxVQUFVLEtBQVYsVUFBVSxRQTJCckI7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFFBbURYO0FBbkRELFdBQVksUUFBUTtJQUNsQjs7T0FFRztJQUNILGlDQUFxQixDQUFBO0lBQ3JCOztPQUVHO0lBQ0gsMkJBQWUsQ0FBQTtJQUNmOztPQUVHO0lBQ0gsK0JBQW1CLENBQUE7SUFDbkI7OztPQUdHO0lBQ0gsNkJBQWlCLENBQUE7SUFDakI7O09BRUc7SUFDSCx5QkFBYSxDQUFBO0lBQ2I7OztPQUdHO0lBQ0gseUJBQWEsQ0FBQTtJQUNiOztPQUVHO0lBQ0gsK0JBQW1CLENBQUE7SUFDbkI7OztPQUdHO0lBQ0gseUJBQWEsQ0FBQTtJQUNiOzs7T0FHRztJQUNILG1DQUF1QixDQUFBO0lBQ3ZCOzs7T0FHRztJQUNILDJDQUErQixDQUFBO0lBQy9COzs7T0FHRztJQUNILG1DQUF1QixDQUFBO0FBQ3pCLENBQUMsRUFuRFcsUUFBUSxLQUFSLFFBQVEsUUFtRG5COztJQTJKeUIsd0JBQTBCOzs7O0lBT2xELHNCQUFPLGFBQUMsVUFBa0I7SUFTMUIseUJBQVU7SUFTViwwQkFBVztJQW9CWCw4QkFBZSxhQUFDLE9BQWU7SUFVL0IsMENBQTJCLGFBQUMsVUFBa0I7SUFZOUMseUNBQTBCLGFBQ3hCLFVBQWtCLEVBQ2xCLGtCQUEwQixFQUMxQixVQUFzQjtJQWF4QixxREFBc0MsYUFBQyxVQUFrQixFQUFFLEtBQWEsRUFBRSxHQUFXO0lBWXJGLHdDQUF5QixhQUN2QixVQUFrQixFQUNsQixrQkFBMEIsRUFDMUIsVUFBc0I7SUFZeEIsaUNBQWtCLGFBQUMsVUFBa0IsRUFBRSxhQUFxQjtJQWU1RCw2Q0FBOEIsYUFBQyxVQUFrQixFQUFFLFVBQWtCLEVBQUUsYUFBcUI7SUFZNUYsMkJBQVksYUFBQyxZQUFvQixFQUFFLGlCQUF5QixFQUFFLFdBQXFCO0lBYW5GLHNCQUFPLGFBQUMsVUFBa0IsRUFBRSxXQUFxQixFQUFFLElBQWMsRUFBRSxNQUFlOzs7Ozs7O2dCQXZKbkYsVUFBVTs7ZUFqZFg7RUFrZDBCLDBCQUEwQjtTQUF2QyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xyXG4gIC8qKlxyXG4gICAqIEhvc3RuYW1lIG9yIElQIGFkZHJlc3Mgb2YgdGhlIElNQVAgc2VydmljZSwgZm9yIGV4YW1wbGU6IGltYXAuZ21haWwuY29tLCBpbWFwLW1haWwub3V0bG9vay5jb20uLi4uXHJcbiAgICovXHJcbiAgaG9zdDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHBhcmFtZXRlci4gUG9ydCBvZiB0aGUgSU1BUCBzZXJ2ZXIgdG8gY29ubmVjdC5cclxuICAgKiBEZWZhdWx0IHNldCB0bzogOTkzXHJcbiAgICovXHJcbiAgcG9ydD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBpT1MgT05MWVxyXG4gICAqIE9wdGlvbmFsIHBhcmFtZXRlci4gRW5jcnlwdGlvbiB0eXBlIHRvIHVzZS5cclxuICAgKiBEZWZhdWx0IHNldCB0bzogVExTL1NTTFxyXG4gICAqL1xyXG4gIGNvbm5lY3Rpb25UeXBlPzogQ29ubmVjdGlvblR5cGU7XHJcbiAgLyoqXHJcbiAgICogVXNlcm5hbWUgb3IgZW1haWwgYWRkcmVzcyBmb3IgYXV0aGVudGljYXRpb24uXHJcbiAgICovXHJcbiAgdXNlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFBhc3N3b3JkIGZvciBhdXRoZW50aWNhdGlvbi5cclxuICAgKi9cclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbm5lY3Rpb24ge1xyXG4gIC8qKlxyXG4gICAqIENvbm5lY3Rpb24gU3RhdHVzOiB0cnVlIG9yIGZhbHNlLCBcInRydWVcIiBtZWFucyBjb25uZWN0ZWQgc3VjY2Vzc2Z1bGx5OyBcImZhbHNlXCIgbWVhbnMgZmFpbGVkIHRvIGNvbm5lY3QuXHJcbiAgICovXHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHBhcmFtZXRlci4gQSBjb25uZWN0aW9uIHN0cmluZywgcmV0dXJuZWQgYXMgYSBjb25maXJtYXRpb24gZm9yIHN1Y2Nlc3NmdWwgY29ubmVjdGlvbi5cclxuICAgKi9cclxuICBjb25uZWN0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsIHBhcmFtZXRlci4gRXJyb3IsIHJldHVybmVkIGlmIHRoZSBjb25uZWN0aW5nIHByb2Nlc3MgaGFzIGZhaWxlZC5cclxuICAgKi9cclxuICBleGNlcHRpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUhlYWRlcnMge1xyXG4gIC8qKlxyXG4gICAqIE1lc3NhZ2UgY29uc2VjdXRpdmUgbnVtYmVyLlxyXG4gICAqL1xyXG4gIG1lc3NhZ2VOdW1iZXI6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9sZGVyIHdoZXJlIHRoZSBtZXNzYWdlIGlzIGNvbnRhaW5lZC5cclxuICAgKi9cclxuICBmb2xkZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBTZW5kZXIncyBkYXRhLlxyXG4gICAqL1xyXG4gIGZyb206IEFkZHJlc3NbXTtcclxuICAvKipcclxuICAgKiBUTyByZWNpcGllbnRzIGRhdGEuXHJcbiAgICovXHJcbiAgdG9SZWNpcGllbnRzOiBBZGRyZXNzW107XHJcbiAgLyoqXHJcbiAgICogQ0MgcmVjaXBpZW50cyBkYXRhLlxyXG4gICAqL1xyXG4gIGNjUmVjaXBpZW50czogQWRkcmVzc1tdO1xyXG4gIC8qKlxyXG4gICAqIEJDQyByZWNpcGllbnRzIGRhdGEuXHJcbiAgICovXHJcbiAgYmNjUmVjaXBpZW50czogQWRkcmVzc1tdO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBkYXRlIHdoZW4gdGhlIG1lc3NhZ2Ugd2FzIHJlY2VpdmVkLlxyXG4gICAqL1xyXG4gIHJlY2VpdmVkRGF0ZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE1lc3NhZ2UncyBzdWJqZWN0IGhlYWRlci5cclxuICAgKi9cclxuICBzdWJqZWN0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTWVzc2FnZSdzIGFjdGl2ZSBmbGFncy5cclxuICAgKi9cclxuICBmbGFnczogc3RyaW5nW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZSB7XHJcbiAgLyoqXHJcbiAgICogTWVzc2FnZSBjb25zZWN1dGl2ZSBudW1iZXIuXHJcbiAgICovXHJcbiAgbWVzc2FnZU51bWJlcjogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBmb2xkZXIgd2hlcmUgdGhlIG1lc3NhZ2UgaXMgY29udGFpbmVkLlxyXG4gICAqL1xyXG4gIGZvbGRlcjogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFNlbmRlcidzIGRhdGEuXHJcbiAgICovXHJcbiAgZnJvbTogQWRkcmVzc1tdO1xyXG4gIC8qKlxyXG4gICAqIEFsbCByZWNpcGllbnRzIGRhdGEuXHJcbiAgICovXHJcbiAgYWxsUmVjaXBpZW50czogQWRkcmVzc1tdO1xyXG4gIC8qKlxyXG4gICAqIFRPIHJlY2lwaWVudHMgZGF0YS5cclxuICAgKi9cclxuICB0b1JlY2lwaWVudHM6IEFkZHJlc3NbXTtcclxuICAvKipcclxuICAgKiBDQyByZWNpcGllbnRzIGRhdGEuXHJcbiAgICovXHJcbiAgY2NSZWNpcGllbnRzOiBBZGRyZXNzW107XHJcbiAgLyoqXHJcbiAgICogQkNDIHJlY2lwaWVudHMgZGF0YS5cclxuICAgKi9cclxuICBiY2NSZWNpcGllbnRzOiBBZGRyZXNzW107XHJcbiAgLyoqXHJcbiAgICogUmVwbHkgZGF0YS5cclxuICAgKi9cclxuICByZXBseVRvOiBBZGRyZXNzW107XHJcbiAgLyoqXHJcbiAgICogRGF0ZSB3aGVuIHRoZSBtZXNzYWdlIHdhcyBzZW50LlxyXG4gICAqL1xyXG4gIHNlbnREYXRlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGRhdGUgd2hlbiB0aGUgbWVzc2FnZSB3YXMgcmVjZWl2ZWQuXHJcbiAgICovXHJcbiAgcmVjZWl2ZWREYXRlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTWVzc2FnZSdzIHN1YmplY3QgaGVhZGVyLlxyXG4gICAqL1xyXG4gIHN1YmplY3Q6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbmRyb2lkIE9OTFlcclxuICAgKiBPcHRpb25hbC4gU2hvcnQgZGVzY3JpcHRpb24gZm9yIHRoZSBtZXNzYWdlLlxyXG4gICAqL1xyXG4gIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqXHJcbiAgICovXHJcbiAgZmlsZU5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBbmRyb2lkIE9OTFlcclxuICAgKiBPcHRpb25hbC5cclxuICAgKi9cclxuICBkaXNwb3NpdGlvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBNZXNzYWdlJ3MgYWN0aXZlIGZsYWdzLlxyXG4gICAqL1xyXG4gIGZsYWdzOiBzdHJpbmdbXTtcclxuICAvKipcclxuICAgKiBBbmRyb2lkIE9OTFlcclxuICAgKiBPcHRpb25hbC5cclxuICAgKi9cclxuICBsaW5lQ291bnQ/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZCBPTkxZXHJcbiAgICogT3B0aW9uYWwuIEFsbCBIZWFkZXJzIGF2YWlsYWJsZSBvbiBhIG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgYWxsTWVzc2FnZUhlYWRlcnM/OiBvYmplY3Q7XHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZCBPTkxZXHJcbiAgICogT3B0aW9uYWwuIFR5cGUgb2YgbWVzc2FnZSdzIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgY29udGVudFR5cGU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTWVzc2FnZSdzIGJvZHkgd2l0aCBpdHMgY29udGVudCBhbmQgYXR0YWNobWVudHMuXHJcbiAgICovXHJcbiAgYm9keUNvbnRlbnQ6IENvbnRlbnRbXTtcclxuICAvKipcclxuICAgKiBNZXNzYWdlJ3MgbWVtb3J5IHNpemUuXHJcbiAgICovXHJcbiAgc2l6ZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xyXG4gIC8qKlxyXG4gICAqIEVtYWlsIGFkZHJlc3MuXHJcbiAgICovXHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIE9wdGlvbmFsLiBOYW1lIG9mIHRoZSBlbWFpbCBhZGRyZXNzJ3Mgb3duZXIuXHJcbiAgICovXHJcbiAgcGVyc29uYWw/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZCBPTkxZXHJcbiAgICogT3B0aW9uYWwuIERhdGEgdHlwZS5cclxuICAgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbnRlbnQge1xyXG4gIC8qKlxyXG4gICAqIENvbnRlbnQgZGF0YSB0eXBlLlxyXG4gICAqL1xyXG4gIHR5cGU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBPcHRpb25hbC4gVGhlIG5hbWUgb2YgdGhlIGZpbGUuXHJcbiAgICovXHJcbiAgZmlsZU5hbWU/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTWVzc2FnZSdzIGNvbnRlbnQuXHJcbiAgICovXHJcbiAgY29udGVudDogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vZGlmaWNhdGlvblJlc3VsdCB7XHJcbiAgLyoqXHJcbiAgICogU3RhdHVzIG9mIHRoZSBhcHBsaWVkIGNoYW5nZXMuIFwiVHJ1ZVwiIHN1Y2Nlc3M7IFwiRmFsc2VcIiBmYWlsdXJlXHJcbiAgICovXHJcbiAgc3RhdHVzOiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIEFycmF5IHdpdGggY29uc2VjdXRpdmUgbnVtYmVycyBvZiBtb2RpZmllZCBtZXNzYWdlcy5cclxuICAgKi9cclxuICBtb2RpZmllZE1lc3NhZ2VzOiBudW1iZXJbXTtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQ29ubmVjdGlvblR5cGUge1xyXG4gIC8qKlxyXG4gICAqIENsZWFyLXRleHQgY29ubmVjdGlvbiBmb3IgdGhlIHByb3RvY29sLlxyXG4gICAqL1xyXG4gIENsZWFyID0gJ0NsZWFyJyxcclxuICAvKipcclxuICAgKiBTdGFydHMgd2l0aCBjbGVhci10ZXh0IGNvbm5lY3Rpb24gYXQgdGhlIGJlZ2lubmluZywgdGhlbiBzd2l0Y2ggdG8gZW5jcnlwdGVkIGNvbm5lY3Rpb24gdXNpbmcgVExTL1NTTC5cclxuICAgKi9cclxuICBTdGFydFRMUyA9ICdTdGFydFRMUycsXHJcbiAgLyoqXHJcbiAgICogRW5jcnlwdGVkIGNvbm5lY3Rpb24gdXNpbmcgVExTL1NTTC5cclxuICAgKi9cclxuICBUTFNTU0wgPSAnVExTL1NTTCcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIENvbXBhcmlzb24ge1xyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQgT05MWVxyXG4gICAqIFRoZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gb3BlcmF0b3IuXHJcbiAgICovXHJcbiAgTEUgPSAnTEUnLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBsZXNzIHRoYW4gb3BlcmF0b3IuXHJcbiAgICovXHJcbiAgTFQgPSAnTFQnLFxyXG4gIC8qKlxyXG4gICAqIFRoZSBlcXVhbGl0eSBvcGVyYXRvci5cclxuICAgKi9cclxuICBFUSA9ICdFUScsXHJcbiAgLyoqXHJcbiAgICogVGhlIG5vdCBlcXVhbCB0byBvcGVyYXRvci5cclxuICAgKi9cclxuICBORSA9ICdORScsXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZCBPTkxZXHJcbiAgICogVGhlIGdyZWF0ZXIgdGhhbiBvcGVyYXRvci5cclxuICAgKi9cclxuICBHVCA9ICdHVCcsXHJcbiAgLyoqXHJcbiAgICogVGhlIGdyZWF0ZXIgdGhhbiBvciBlcXVhbCB0byBvcGVyYXRvci5cclxuICAgKi9cclxuICBHRSA9ICdHRScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGwgYXZhaWxhYmxlIG1lc3NhZ2UgZmxhZ3MuIFNldCBvciByZW1vdmUgZmxhZyB1c2luZyBcInNldEZsYWcoKVwiLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRmxhZ0VudW0ge1xyXG4gIC8qKlxyXG4gICAqIFwiQU5TV0VSRURcIiBtZXNzYWdlIGZsYWdcclxuICAgKi9cclxuICBBTlNXRVJFRCA9ICdBTlNXRVJFRCcsXHJcbiAgLyoqXHJcbiAgICogXCJEUkFGVFwiIG1lc3NhZ2UgZmxhZ1xyXG4gICAqL1xyXG4gIERSQUZUID0gJ0RSQUZUJyxcclxuICAvKipcclxuICAgKiBcIkZMQUdHRURcIiBtZXNzYWdlIGZsYWdcclxuICAgKi9cclxuICBGTEFHR0VEID0gJ0ZMQUdHRUQnLFxyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQgT05MWVxyXG4gICAqIFwiUkVDRU5UXCIgbWVzc2FnZSBmbGFnXHJcbiAgICovXHJcbiAgUkVDRU5UID0gJ1JFQ0VOVCcsXHJcbiAgLyoqXHJcbiAgICogXCJTRUVOXCIgbWVzc2FnZSBmbGFnXHJcbiAgICovXHJcbiAgU0VFTiA9ICdTRUVOJyxcclxuICAvKipcclxuICAgKiBBbmRyb2lkIE9OTFlcclxuICAgKiBcIlVTRVJcIiBtZXNzYWdlIGZsYWdcclxuICAgKi9cclxuICBVU0VSID0gJ1VTRVInLFxyXG4gIC8qKlxyXG4gICAqIFwiREVMRVRFRFwiIG1lc3NhZ2UgZmxhZy4gTm90ZTogQWRkIHRoaXMgZmxhZyB0byBkZWxldGUgdGhlIG1lc3NhZ2UgZnJvbSB0aGUgbWFpbGJveFxyXG4gICAqL1xyXG4gIERFTEVURUQgPSAnREVMRVRFRCcsXHJcbiAgLyoqXHJcbiAgICogaU9TIE9OTFlcclxuICAgKiBcIlNFTlRcIiBtZXNzYWdlIGZsYWcuXHJcbiAgICovXHJcbiAgU0VOVCA9ICdTZW50JyxcclxuICAvKipcclxuICAgKiBpT1MgT05MWVxyXG4gICAqIFwiRk9SV0FSREVEXCIgbWVzc2FnZSBmbGFnLlxyXG4gICAqL1xyXG4gIEZPUldBUkRFRCA9ICdGb3J3YXJkZWQnLFxyXG4gIC8qKlxyXG4gICAqIGlPUyBPTkxZXHJcbiAgICogXCJTdWJtaXRQZW5kaW5nXCIgbWVzc2FnZSBmbGFnLlxyXG4gICAqL1xyXG4gIFN1Ym1pdFBlbmRpbmcgPSAnU3VibWl0UGVuZGluZycsXHJcbiAgLyoqXHJcbiAgICogaU9TIE9OTFlcclxuICAgKiBcIlNVQk1JVFRFRFwiIG1lc3NhZ2UgZmxhZy5cclxuICAgKi9cclxuICBTVUJNSVRURUQgPSAnU3VibWl0dGVkJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEltYXBcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHdpbGwgZW5hYmxlIGEgQ29yZG92YSBhcHBsaWNhdGlvbiB0byB1c2UgdGhlIElNQVAgKEludGVybmV0IE1lc3NhZ2UgQWNjZXNzIFByb3RvY29sKSBmZWF0dXJlc1xyXG4gKiBUaGUgcGx1Z2luIG9mZmVycyBzdXBwb3J0IGZvciBBbmRyb2lkIGFuZCBpT1MuXHJcbiAqIFRvIGVuYWJsZSB0aGUgSU1BUCBmZWF0dXJlcyBvbiBBbmRyb2lkLCB0aGlzIHBsdWdpbiB1c2VzIHRoZSBmcmFtZXdvcmsgW0phdmEgTWFpbCBBUEldKGh0dHBzOi8vamF2YWVlLmdpdGh1Yi5pby9qYXZhbWFpbC8pIGFuZCBmb3IgaU9TLCBpdCB1c2VzIHRoZSBbTWFpbENvcmUgMl0oaHR0cDovL2xpYm1haWxjb3JlLmNvbS8pIGxpYnJhcnkuXHJcbiAqXHJcbiAqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEltYXAgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW1hcC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGltYXA6IEltYXApIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5pbWFwLmNvbm5lY3Qoe1xyXG4gKiAgaG9zdDogJ2ltYXAuZ21haWwuY29tJyxcclxuICogIHBvcnQ6IDk5MyxcclxuICogIGNvbm5lY3Rpb25UeXBlOiBDb25uZWN0aW9uVHlwZS5UTFNTU0wgIC8vIChpT1MgT05MWSkgRW5jcnlwdGlvbiB0eXBlIHRvIHVzZS4gRGVmYXVsdCBzZXQgdG86IFRMUy9TU0xcclxuICogIHVzZXI6ICdteV9lbWFpbEBnbWFpbC5jb20nLFxyXG4gKiAgcGFzc3dvcmQ6ICdteS1wYXNzJ1xyXG4gKiB9KVxyXG4gKiAgIC50aGVuKChyZXM6IENvbm5lY3Rpb24pID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKiAgdGhpcy5pbWFwLmRpc2Nvbm5lY3QoKVxyXG4gKiAgIC50aGVuKChyZXM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuaW1hcC5pc0Nvbm5lY3RlZCgpXHJcbiAqICAgLnRoZW4oKHJlczogYm9vbGVhbikgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogLy8gTm90ZTogQ29ubmVjdGVkIHRvIGFuIElNQVAgc2VydmljZSBpcyBSRVFVSVJFRCB0byBiZSBhYmxlIHRvIGdldCBkYXRhIGZyb20gdGhlIGJlbG93IGZ1bmN0aW9ucy5cclxuICpcclxuICpcclxuICogLy8gbGlzdE1haWxGb2xkZXJzKCcqJykgdXNpbmcgYSAnKicgcGF0dGVybiB3aWxsIHJldHVybiBhbGwgZm9sZGVyIG5hbWVzXHJcbiAqIC8vIGxpc3RNYWlsRm9sZGVycygnSU5CT1gqJykgdXNpbmcgYSBwYXR0ZXJuIHdpdGggYSBmb2xkZXIgbmFtZSB3aWxsIGxpc3QgYWxsIHRoZSBzdWJmb2xkZXIgbmFtZXMgb2YgdGhhdCBmb2xkZXIgdGhhdCBtYXRjaCB0aGUgcGF0dGVyblxyXG4gKlxyXG4gKiAgIHRoaXMuaW1hcC5saXN0TWFpbEZvbGRlcnMoJyonKVxyXG4gKiAgIC50aGVuKChyZXM6IGJvb2xlYW4pID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqXHJcbiAqICAgdGhpcy5pbWFwLmdldE1lc3NhZ2VDb3VudEJ5Rm9sZGVyTmFtZSgnSU5CT1gnKVxyXG4gKiAgIC50aGVuKChyZXM6IG51bWJlcikgPT4ge1xyXG4gKiAgIC8vIFJldHVybnMgdGhlIGNvdW50IG9mIHRoZSBtZXNzYWdlcyBpbiB0aGUgZm9sZGVyIGFzIGEgcmVzdWx0XHJcbiAqICAgIGNvbnNvbGUubG9nKHJlcylcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gKiAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICogICB9KTtcclxuICpcclxuICpcclxuICpcclxuICogICB0aGlzLmltYXAuc2VhcmNoTWVzc2FnZXNCeURhdGVQZXJpb2QoJ0lOQk9YJywgMTYwMTUwMzIwMDAwMCwgQ29tcGFyaXNvbi5HRSlcclxuICogICAudGhlbigocmVzOiBudW1iZXJbXSkgPT4ge1xyXG4gKiAgIC8vIFJldHVybnMgYXJyYXkgd2l0aCBtZXNzYWdlcycgY29uc2VjdXRpdmUgbnVtYmVyc1xyXG4gKiAgIC8vIGV4LiBbMTIwNywgMTIwOCwgMTIwOV1cclxuICogICAgY29uc29sZS5sb2cocmVzKVxyXG4gKiAgIH0pXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgIH0pO1xyXG4gKlxyXG4gKlxyXG4gKiAgIHRoaXMuaW1hcC5saXN0TWVzc2FnZXNIZWFkZXJzQnlDb25zZWN1dGl2ZU51bWJlcignSU5CT1gnLCAxMjAwLCAxMjgwKVxyXG4gKiAgIC50aGVuKChyZXM6IE1lc3NhZ2VIZWFkZXJzW10pID0+IHtcclxuICogICAvLyAgUmV0dXJucyBhcnJheSB3aXRoIG1lc3NhZ2VzJyBoZWFkZXJzIGRhdGFcclxuICogICAgY29uc29sZS5sb2cocmVzKVxyXG4gKiAgIH0pXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgIH0pO1xyXG4gKlxyXG4gKlxyXG4gKiAgIHRoaXMuaW1hcC5saXN0TWVzc2FnZXNIZWFkZXJzQnlEYXRlKCdJTkJPWCcsIDE2MDE1MDMyMDAwMDAsIENvbXBhcmlzb24uR0UpXHJcbiAqICAgLnRoZW4oKHJlczogTWVzc2FnZUhlYWRlcnNbXSkgPT4ge1xyXG4gKiAgIC8vIFJldHVybnMgYXJyYXkgd2l0aCBtZXNzYWdlcycgaGVhZGVycyBkYXRhXHJcbiAqICAgIGNvbnNvbGUubG9nKHJlcylcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gKiAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICogICB9KTtcclxuICpcclxuICpcclxuICogICB0aGlzLmltYXAuZ2V0RnVsbE1lc3NhZ2VEYXRhKCdJTkJPWCcsIDEyMDUpXHJcbiAqICAgLnRoZW4oKHJlczogTWVzc2FnZSkgPT4ge1xyXG4gKiAgIC8vIFJldHVybnMgXCJNZXNzYWdlXCIgb2JqZWN0IHdpdGggdGhlIGZ1bGwgbWVzc2FnZSBkYXRhIGluY2x1ZGluZyBhdHRhY2htZW50cy5cclxuICogICAgY29uc29sZS5sb2cocmVzKVxyXG4gKiAgIH0pXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAqICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgIH0pO1xyXG4gKlxyXG4gKlxyXG4gKiAgdGhpcy5pbWFwLmdldEZ1bGxNZXNzYWdlRGF0YU9uTmV3U2Vzc2lvbih7XHJcbiAqICAgICAgaG9zdDogJ2ltYXAuZ21haWwuY29tJyxcclxuICogICAgICBwb3J0OiA5OTMsXHJcbiAqICAgICAgY29ubmVjdGlvblR5cGU6IENvbm5lY3Rpb25UeXBlLlRMU1NTTCAgLy8gKGlPUyBPTkxZKSBFbmNyeXB0aW9uIHR5cGUgdG8gdXNlLiBEZWZhdWx0IHNldCB0bzogVExTL1NTTFxyXG4gKiAgICAgIHVzZXI6ICdteV9lbWFpbEBnbWFpbC5jb20nLFxyXG4gKiAgICAgIHBhc3N3b3JkOiAnbXktcGFzcydcclxuICogICAgfSwgJ0lOQk9YJywgMTIwNSlcclxuICogICAudGhlbigocmVzOiBNZXNzYWdlKSA9PiB7XHJcbiAqICAgLy8gUmV0dXJucyBcIk1lc3NhZ2VcIiBvYmplY3Qgd2l0aCB0aGUgZnVsbCBtZXNzYWdlIGRhdGEgaW5jbHVkaW5nIGF0dGFjaG1lbnRzLlxyXG4gKiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAqICAgfSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqXHJcbiAqICAgdGhpcy5pbWFwLmNvcHlUb0ZvbGRlcignSU5CT1gnLCAnU3BhbScsIFsxMjA0LCAxMjA1LCAxMjA2LCAxMjA3XSlcclxuICogICAudGhlbigocmVzOiBib29sZWFuKSA9PiB7XHJcbiAqICAgLy8gUmV0dXJucyBcInRydWVcIiBpZiB0aGUgcHJvY2VzcyBpcyBzdWNjZXNzZnVsLCBlbHNlIHJldHVybnMgXCJmYWxzZVwiLlxyXG4gKiAgICBjb25zb2xlLmxvZyhyZXMpXHJcbiAqICAgfSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqXHJcbiAqICAgKiBTZXRzIGEgZmxhZyBvbiBhIG1lc3NhZ2VcclxuICogICAqIFwic2V0RmxhZygpXCIgY2FuIGJlIHVzZWQgZm9yIGRlbGV0aW5nIG1lc3NhZ2VzIHNldHRpbmcgdGhlIERlbGV0ZSBmbGFnIHRvIFwiRmxhZ0VudW0uREVMRVRFRFwiXHJcbiAqICAgdGhpcy5pbWFwLnNldEZsYWcoJ0lOQk9YJywgWzEyMDYsIDEyMDUsIDEyMDRdLCBGbGFnRW51bS5TRUVOLCB0cnVlKVxyXG4gKiAgIC50aGVuKChyZXM6IE1vZGlmaWNhdGlvblJlc3VsdCkgPT4ge1xyXG4gKlxyXG4gKiAgICAvLyByZXMuc3RhdHVzIC0gcmV0dXJuIHRydWUgb3IgZmFsc2UgYmFzZWQgb24gdGhlIGRlbGV0aW9uIHN1Y2Nlc3NcclxuICpcclxuICogICAvL3Jlcy5tb2RpZmllZE1lc3NhZ2VzIC0gZm9yIGV4LlsxMjA2LCAxMjA1LCAxMjA0XTtcclxuICpcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4ge1xyXG4gKiAgICAgY29uc29sZS5lcnJvcihlcnJvcilcclxuICogICB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW1hcCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW1hcCcsXHJcbiAgcGx1Z2luUmVmOiAnaW1hcCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hbGVrc2FuZGFyODg4L2NvcmRvdmEtcGx1Z2luLWltYXAuZ2l0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW1hcCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIFwiY29ubmVjdChjbGllbnREYXRhOiBDb25maWcpXCIgdHJpZXMgdG8gY29ubmVjdCBhbmQgYXV0aGVudGljYXRlIHdpdGggdGhlIElNQVAgc2VydmVyLlxyXG4gICAqIEBwYXJhbSBjbGllbnREYXRhIHtDb25maWd9IENvbm5lY3Rpb24gY29uZmlndXJhdGlvblxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Q29ubmVjdGlvbj59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGNvbm5lY3Rpb24gZGF0YVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjb25uZWN0KGNsaWVudERhdGE6IENvbmZpZyk6IFByb21pc2U8Q29ubmVjdGlvbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXCJkaXNjb25uZWN0KClcIiBDbG9zZXMgdGhlIGNvbm5lY3Rpb24gd2l0aCB0aGUgc2VydmVyLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBwcm9taXNlIHN0YXR1cy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFwiaXNDb25uZWN0ZWQoKVwiIENoZWNrcyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgY29ubmVjdGlvbi5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIGNvbm5lY3Rpb24gc3RhdHVzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzQ29ubmVjdGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqICBOb3RlOiBDb25uZWN0ZWQgdG8gYW4gSU1BUCBzZXJ2aWNlIGlzIFJFUVVJUkVEIHRvIGJlIGFibGUgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgYmVsb3cgZnVuY3Rpb25zLiAgKi9cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBhcnJheSBvZiBGb2xkZXIgbmFtZXMgYmFzZWQgb24gYSByZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybi5cclxuICAgKlxyXG4gICAqIEV4YW1wbGU6XHJcbiAgICpcclxuICAgKiBsaXN0TWFpbEZvbGRlcnMoJyonKSB1c2luZyBhICcqJyBwYXR0ZXJuIHdpbGwgcmV0dXJuIGFsbCBmb2xkZXIgbmFtZXNcclxuICAgKiBsaXN0TWFpbEZvbGRlcnMoJ0lOQk9YKicpIHVzaW5nIGEgcGF0dGVybiB3aXRoIGEgZm9sZGVyIG5hbWUgd2lsbCBsaXN0IGFsbCB0aGUgc3ViZm9sZGVyIG5hbWVzIHRoYXQgbWF0Y2ggdGhlIHBhdHRlcm5cclxuICAgKlxyXG4gICAqXHJcbiAgICogXCJsaXN0TWFpbEZvbGRlcnMocGF0dGVybjogc3RyaW5nKVwiIExpc3RzIHRoZSBuYW1lIG9mIG1haWwgZm9sZGVycyBpbiB0aGUgbWFpbGJveC5cclxuICAgKiBAcGFyYW0gcGF0dGVybiB7c3RyaW5nfSBSZWd1bGFyIGV4cHJlc3Npb24gcGF0dGVybi5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPHN0cmluZ1tdPn0gUmV0dXJucyBhcnJheSBvZiBmb2xkZXIgbmFtZXMgbWF0Y2hpbmcgdGhlIHBhdHRlcm4uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxpc3RNYWlsRm9sZGVycyhwYXR0ZXJuOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcImdldE1lc3NhZ2VDb3VudEJ5Rm9sZGVyTmFtZShmb2xkZXJOYW1lOiBzdHJpbmcpXCIgR2V0cyB0aGUgY291bnQgb2YgdGhlIG1lc3NhZ2VzIGluIHRoZSBmb2xkZXIuXHJcbiAgICogQHBhcmFtIGZvbGRlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGRlc2lyZWQgZm9sZGVyLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8bnVtYmVyPn0gUmV0dXJucyB0aGUgY29uc2VjdXRpdmUgbnVtYmVyIG9mIHRoZSBsYXN0IG1lc3NhZ2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldE1lc3NhZ2VDb3VudEJ5Rm9sZGVyTmFtZShmb2xkZXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXCJzZWFyY2hNZXNzYWdlc0J5RGF0ZVBlcmlvZChmb2xkZXJOYW1lOiBzdHJpbmcsIGRhdGVJbk1pbGxpc2Vjb25kczogbnVtYmVyLCBjb21wYXJpc29uOiBDb21wYXJpc29uKVwiIFJldHVybnMgdGhlIG1lc3NhZ2VzJyBjb25zZWN1dGl2ZSBudW1iZXIuXHJcbiAgICogQHBhcmFtIGZvbGRlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgb2YgdGhlIGRlc2lyZWQgZm9sZGVyXHJcbiAgICogQHBhcmFtIGRhdGVJbk1pbGxpc2Vjb25kcyB7bnVtYmVyfSBEYXRlIGluIG1pbGxpc2Vjb25kc1xyXG4gICAqIEBwYXJhbSBjb21wYXJpc29uIHtDb21wYXJpc29ufSBBIGNvbXBhcmlzb24gb3BlcmF0b3JcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPG51bWJlcltdPn0gUmV0dXJucyBhcnJheSB3aXRoIHRoZSBtZXNzYWdlcycgY29uc2VjdXRpdmUgbnVtYmVycy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VhcmNoTWVzc2FnZXNCeURhdGVQZXJpb2QoXHJcbiAgICBmb2xkZXJOYW1lOiBzdHJpbmcsXHJcbiAgICBkYXRlSW5NaWxsaXNlY29uZHM6IG51bWJlcixcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25cclxuICApOiBQcm9taXNlPG51bWJlcltdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcImxpc3RNZXNzYWdlc0hlYWRlcnNCeUNvbnNlY3V0aXZlTnVtYmVyKGZvbGRlck5hbWU6IHN0cmluZywgc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpXCIgUmV0dXJucyBtZXNzYWdlcycgaGVhZGVycyBkYXRhIGJhc2VkIG9uIGEgXCJzdGFydFwiIGFuZCBcImVuZFwiIG1lc3NhZ2UgY29uc2VjdXRpdmUgbnVtYmVyLlxyXG4gICAqIEBwYXJhbSBmb2xkZXJOYW1lIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBkZXNpcmVkIGZvbGRlclxyXG4gICAqIEBwYXJhbSBzdGFydCB7bnVtYmVyfSBDb25zZWN1dGl2ZSBudW1iZXIgb2YgdGhlIGZpcnN0IG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIGVuZCB7bnVtYmVyfSBDb25zZWN1dGl2ZSBudW1iZXIgb2YgdGhlIGxhc3QgbWVzc2FnZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZUhlYWRlcnNbXT59IFJldHVybnMgYXJyYXkgd2l0aCB0aGUgbWVzc2FnZXMnIGhlYWRlcnMgZGF0YS5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbGlzdE1lc3NhZ2VzSGVhZGVyc0J5Q29uc2VjdXRpdmVOdW1iZXIoZm9sZGVyTmFtZTogc3RyaW5nLCBzdGFydDogbnVtYmVyLCBlbmQ6IG51bWJlcik6IFByb21pc2U8TWVzc2FnZUhlYWRlcnNbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogXCJsaXN0TWVzc2FnZXNIZWFkZXJzQnlEYXRlKGZvbGRlck5hbWU6IHN0cmluZywgZGF0ZUluTWlsbGlzZWNvbmRzOiBudW1iZXIsIGNvbXBhcmlzb246IENvbXBhcmlzb24pXCIgUmV0dXJucyBtZXNzYWdlcycgaGVhZGVycyBkYXRhIGJhc2VkIG9uIGEgZGF0ZS5cclxuICAgKiBAcGFyYW0gZm9sZGVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZGVzaXJlZCBmb2xkZXJcclxuICAgKiBAcGFyYW0gZGF0ZUluTWlsbGlzZWNvbmRzIHtudW1iZXJ9IERhdGUgaW4gbWlsbGlzZWNvbmRzLlxyXG4gICAqIEBwYXJhbSBjb21wYXJpc29uIHtDb21wYXJpc29ufSBBIGNvbXBhcmlzb24gb3BlcmF0b3JcclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2VIZWFkZXJzW10+fSBSZXR1cm5zIGFycmF5IG1lc3NhZ2VzJyBoZWFkZXJzIGRhdGEuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxpc3RNZXNzYWdlc0hlYWRlcnNCeURhdGUoXHJcbiAgICBmb2xkZXJOYW1lOiBzdHJpbmcsXHJcbiAgICBkYXRlSW5NaWxsaXNlY29uZHM6IG51bWJlcixcclxuICAgIGNvbXBhcmlzb246IENvbXBhcmlzb25cclxuICApOiBQcm9taXNlPE1lc3NhZ2VIZWFkZXJzW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFwiZ2V0RnVsbE1lc3NhZ2VEYXRhKGZvbGRlck5hbWU6IHN0cmluZywgbWVzc2FnZU51bWJlcjogbnVtYmVyKVwiIFJldHVybnMgdGhlIGZ1bGwgbWVzc2FnZSBkYXRhIGluY2x1ZGluZyBpdHMgYXR0YWNobWVudHMuXHJcbiAgICogQHBhcmFtIGZvbGRlck5hbWUge3N0cmluZ30gVGhlIG5hbWUgdGhlIG1lc3NhZ2UncyBmb2xkZXIuXHJcbiAgICogQHBhcmFtIG1lc3NhZ2VOdW1iZXIge251bWJlcn0gTWVzc2FnZSdzIGNvbnNlY3V0aXZlIG51bWJlci5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPE1lc3NhZ2U+fSBSZXR1cm5zIFwiTWVzc2FnZVwiIG9iamVjdCB3aXRoIGZ1bGwgbWVzc2FnZSBkYXRhLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRGdWxsTWVzc2FnZURhdGEoZm9sZGVyTmFtZTogc3RyaW5nLCBtZXNzYWdlTnVtYmVyOiBudW1iZXIpOiBQcm9taXNlPE1lc3NhZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBcImdldEZ1bGxNZXNzYWdlRGF0YU9uTmV3U2Vzc2lvbihjbGllbnREYXRhOiBDb25maWcsIGZvbGRlck5hbWU6IHN0cmluZywgbWVzc2FnZU51bWJlcjogbnVtYmVyKVwiIGRvd25sb2FkcyB0aGUgZnVsbCBtZXNzYWdlIGRhdGEgdXNpbmcgYVxyXG4gICAqIHNlcGFyYXRlIHNlc3Npb24gd2l0aCB0aGUgc2VydmVyLiBJdCBpcyBzdWl0YWJsZSBmb3IgZG93bmxvYWRpbmcgbWVzc2FnZSBkYXRhIHdoaWxlIHRoZSBhcHAgaXMgYWxyZWFkeSBjb25uZWN0ZWQgdG8gYSB0aGlyZCBzZXJ2ZXIuXHJcbiAgICogXCJnZXRGdWxsTWVzc2FnZURhdGFPbk5ld1Nlc3Npb24oY2xpZW50RGF0YTogQ29uZmlnLCBmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1iZXI6IG51bWJlcilcIiBSZXR1cm5zIHRoZSBmdWxsIG1lc3NhZ2UgZGF0YSBpbmNsdWRpbmcgaXRzIGF0dGFjaG1lbnRzLlxyXG4gICAqIEBwYXJhbSBjbGllbnREYXRhIHtDb25maWd9IENvbm5lY3Rpb24gY29uZmlndXJhdGlvbi5cclxuICAgKiBAcGFyYW0gZm9sZGVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSB0aGUgbWVzc2FnZSdzIGZvbGRlci5cclxuICAgKiBAcGFyYW0gbWVzc2FnZU51bWJlciB7bnVtYmVyfSBNZXNzYWdlJ3MgY29uc2VjdXRpdmUgbnVtYmVyLlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TWVzc2FnZT59IFJldHVybnMgXCJNZXNzYWdlXCIgb2JqZWN0IHdpdGggZnVsbCBtZXNzYWdlIGRhdGEuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEZ1bGxNZXNzYWdlRGF0YU9uTmV3U2Vzc2lvbihjbGllbnREYXRhOiBDb25maWcsIGZvbGRlck5hbWU6IHN0cmluZywgbWVzc2FnZU51bWJlcjogbnVtYmVyKTogUHJvbWlzZTxNZXNzYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBcImNvcHlUb0ZvbGRlcihzb3VyY2VGb2xkZXI6IHN0cmluZywgZGVzdGluYXRpb25Gb2xkZXI6IHN0cmluZywgbWVzc2FnZU51bXM6IG51bWJlcltdKVwiIENvcHkgbWVzc2FnZXMgdG8gYSBkZXNpcmVkIGZvbGRlci5cclxuICAgKiBAcGFyYW0gc291cmNlRm9sZGVyIHtzdHJpbmd9IFRoZSBuYW1lIG9mIHRoZSBzb3VyY2UgZm9sZGVyLlxyXG4gICAqIEBwYXJhbSBkZXN0aW5hdGlvbkZvbGRlciB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgZGVzdGluYXRpb24gZm9sZGVyLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlTnVtcyB7bnVtYmVyW119IEFycmF5IHdpdGggbWVzc2FnZXMnIGNvbnNlY3V0aXZlIG51bWJlcnMgb3IgYXJyYXkgd2l0aCBzaW5nbGUgbWVzc2FnZSBjb25zZWN1dGl2ZSBudW1iZXIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxNZXNzYWdlPn0gUmV0dXJucyBib29sZWFuIHN0YXR1cyBvZiB0aGUgcHJvY2Vzcy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY29weVRvRm9sZGVyKHNvdXJjZUZvbGRlcjogc3RyaW5nLCBkZXN0aW5hdGlvbkZvbGRlcjogc3RyaW5nLCBtZXNzYWdlTnVtczogbnVtYmVyW10pOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFwic2V0RmxhZyhmb2xkZXJOYW1lOiBzdHJpbmcsIG1lc3NhZ2VOdW1zOiBudW1iZXJbXSwgZmxhZzogRmxhZ0VudW0sIHN0YXR1czogYm9vbGVhbilcIiBTZXQgb3IgcmVtb3ZlIGZsYWcgZnJvbSBhIG1lc3NhZ2VcclxuICAgKiBAcGFyYW0gZm9sZGVyTmFtZSB7c3RyaW5nfSBUaGUgbmFtZSBvZiB0aGUgc291cmNlIGZvbGRlciB3aGVyZSB0aGUgbWVzc2FnZXMgYXJlIGNvbnRhaW5lZC5cclxuICAgKiBAcGFyYW0gbWVzc2FnZU51bXMge251bWJlcltdfSBBcnJheSB3aXRoIG1lc3NhZ2VzJyBjb25zZWN1dGl2ZSBudW1iZXJzIG9yIGFycmF5IHdpdGggc2luZ2xlIG1lc3NhZ2UgY29uc2VjdXRpdmUgbnVtYmVyXHJcbiAgICogQHBhcmFtIGZsYWcge0ZsYWdFbnVtfSBEZXNpcmVkIG1lc3NhZ2UgZmxhZy5cclxuICAgKiBAcGFyYW0gc3RhdHVzIHtib29sZWFufSBTZXQgc3RhdHVzIHRvIFwidHJ1ZVwiIHRvIHNldCB0aGUgZmxhZyBvbiBhIG1lc3NhZ2U7IG9yIHRvIFwiZmFsc2VcIiB0byByZW1vdmUgdGhlIGZsYWcgZnJvbSB0aGUgbWVzc2FnZVxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8TW9kaWZpY2F0aW9uUmVzdWx0Pn0gUmV0dXJucyBvYmplY3Qgd2l0aCBzdGF0dXMgYW5kIGFycmF5IHdpdGggbWVzc2FnZXMnIGNvbnNlY3V0aXZlIG51bWJlcnMgb2YgdGhlIG1vZGlmaWVkIG1lc3NhZ2VzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEZsYWcoZm9sZGVyTmFtZTogc3RyaW5nLCBtZXNzYWdlTnVtczogbnVtYmVyW10sIGZsYWc6IEZsYWdFbnVtLCBzdGF0dXM6IGJvb2xlYW4pOiBQcm9taXNlPE1vZGlmaWNhdGlvblJlc3VsdD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=