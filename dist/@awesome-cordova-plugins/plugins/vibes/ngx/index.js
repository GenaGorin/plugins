import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var Vibes = /** @class */ (function (_super) {
    __extends(Vibes, _super);
    function Vibes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Vibes.prototype.registerDevice = function () { return cordova(this, "registerDevice", {}, arguments); };
    Vibes.prototype.unregisterDevice = function () { return cordova(this, "unregisterDevice", {}, arguments); };
    Vibes.prototype.associatePerson = function (externalPersonId) { return cordova(this, "associatePerson", {}, arguments); };
    Vibes.prototype.registerPush = function () { return cordova(this, "registerPush", {}, arguments); };
    Vibes.prototype.unregisterPush = function () { return cordova(this, "unregisterPush", {}, arguments); };
    Vibes.prototype.getVibesDeviceInfo = function () { return cordova(this, "getVibesDeviceInfo", {}, arguments); };
    Vibes.prototype.getPerson = function () { return cordova(this, "getPerson", {}, arguments); };
    Vibes.prototype.onNotificationOpened = function () { return cordova(this, "onNotificationOpened", { "observable": true }, arguments); };
    Vibes.prototype.fetchInboxMessages = function () { return cordova(this, "fetchInboxMessages", {}, arguments); };
    Vibes.prototype.fetchInboxMessage = function (message_uid) { return cordova(this, "fetchInboxMessage", {}, arguments); };
    Vibes.prototype.expireInboxMessage = function (message_uid, date) { return cordova(this, "expireInboxMessage", {}, arguments); };
    Vibes.prototype.markInboxMessageAsRead = function (message_uid) { return cordova(this, "markInboxMessageAsRead", {}, arguments); };
    Vibes.prototype.onInboxMessageOpen = function (inbox_message_stringified) { return cordova(this, "onInboxMessageOpen", {}, arguments); };
    Vibes.pluginName = "Vibes";
    Vibes.plugin = "vibes-cordova";
    Vibes.pluginRef = "Vibes";
    Vibes.repo = "https://github.com/vibes/vibes-cordova.git";
    Vibes.install = "ionic cordova plugin add vibes-cordova --variable VIBES_APP_ID=MY_APP_ID --variable VIBES_API_URL=MY_ENVIRONMENT_URL";
    Vibes.installVariables = ["VIBES_APP_ID", "VIBES_API_URL"];
    Vibes.platforms = ["Android", "iOS"];
    Vibes.decorators = [
        { type: Injectable }
    ];
    return Vibes;
}(AwesomeCordovaNativePlugin));
export { Vibes };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmliZXMvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF1RVAseUJBQTBCOzs7O0lBT25ELDhCQUFjO0lBVWQsZ0NBQWdCO0lBV2hCLCtCQUFlLGFBQUMsZ0JBQXdCO0lBVXhDLDRCQUFZO0lBVVosOEJBQWM7SUFTZCxrQ0FBa0I7SUFVbEIseUJBQVM7SUFZVCxvQ0FBb0I7SUFVcEIsa0NBQWtCO0lBV2xCLGlDQUFpQixhQUFDLFdBQW1CO0lBYXJDLGtDQUFrQixhQUFDLFdBQW1CLEVBQUUsSUFBWTtJQVdwRCxzQ0FBc0IsYUFBQyxXQUFtQjtJQVcxQyxrQ0FBa0IsYUFBQyx5QkFBaUM7Ozs7Ozs7OztnQkF4SXJELFVBQVU7O2dCQXhFWDtFQXlFMkIsMEJBQTBCO1NBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGV2aWNlUmVzcG9uc2Uge1xyXG4gIGRldmljZV9pZD86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZXZpY2VJbmZvUmVzcG9uc2UgZXh0ZW5kcyBEZXZpY2VSZXNwb25zZSB7XHJcbiAgcHVzaF90b2tlbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQZXJzb25SZXNwb25zZSB7XHJcbiAgcGVyc29uX2tleT86IHN0cmluZztcclxuICBtZG4/OiBzdHJpbmc7XHJcbiAgZXh0ZXJuYWxfcGVyc29uX2lkPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluYm94TWVzc2FnZSB7XHJcbiAgY29udGVudD86IHN0cmluZztcclxuICBjcmVhdGVkX2F0Pzogc3RyaW5nO1xyXG4gIGV4cGlyZXNfYXQ/OiBzdHJpbmc7XHJcbiAgbWVzc2FnZV91aWQ/OiBzdHJpbmc7XHJcbiAgcmVhZD86IGJvb2xlYW47XHJcbiAgc3ViamVjdD86IHN0cmluZztcclxuICBkZXRhaWw/OiBzdHJpbmc7XHJcbiAgY29sbGFwc2Vfa2V5Pzogc3RyaW5nO1xyXG4gIGFwcHJlZmRhdGE/OiBhbnk7XHJcbiAgaW1hZ2VzPzogYW55O1xyXG4gIGluYm94X2N1c3RvbV9kYXRhOiBhbnk7XHJcbn1cclxuLyoqXHJcbiAqIEBuYW1lIFZpYmVzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBlbmFibGVzIGludGVncmF0aW9uIHdpdGggdGhlIFZpYmVzIFB1c2ggU0RLIHRvIHlvdXIgQ29yZG92YSBwcm9qZWN0IHdpdGggQW5kcm9pZCBhbmQgaU9TIHN1cHBvcnRlZC5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgVmliZXMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvdmliZXMvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWJlczogVmliZXMpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy52aWJlcy5yZWdpc3RlckRldmljZSgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhgZGV2aWNlIHJlZ2lzdHJhdGlvbiBzdWNjZXNzOiAke3Jlc31gKSkgLy8gcmV0cmlldmUgYW5kIHNhdmUgdGhlIGRldmljZV9pZCBmcm9tIGByZXNgIEpTT04gb2JqZWN0XHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciByZWdpc3RlcmluZyBkZXZpY2UnLCBlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLnZpYmVzLnJlZ2lzdGVyUHVzaCgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcignRXJyb3IgcmVnaXN0ZXJpbmcgcHVzaCcsIGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMudmliZXMuZ2V0VmliZXNEZXZpY2VJbmZvKClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpIC8vIHJldHJpZXZlIHRoZSBgZGV2aWNlX2lkYCBhbmQgYHB1c2hfdG9rZW5gIGZyb20gdGhlIEpTT04gb2JqZWN0XHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciByZXRyaWV2aW5nIGRldmljZWluZm8nLCBlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLnZpYmVzLmZldGNoSW5ib3hNZXNzYWdlcygpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKSAvLyBmZXRjaGVzIGluYm94IG1lc3NhZ2VzIGZvciB0aGlzIHBlcnNvbi5cclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIGluYm94IG1lc3NhZ2VzIGZvciB0aGlzIHBlcnNvbicsIGVycm9yKSk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1ZpYmVzJyxcclxuICBwbHVnaW46ICd2aWJlcy1jb3Jkb3ZhJyxcclxuICBwbHVnaW5SZWY6ICdWaWJlcycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS92aWJlcy92aWJlcy1jb3Jkb3ZhLmdpdCcsXHJcbiAgaW5zdGFsbDpcclxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgdmliZXMtY29yZG92YSAtLXZhcmlhYmxlIFZJQkVTX0FQUF9JRD1NWV9BUFBfSUQgLS12YXJpYWJsZSBWSUJFU19BUElfVVJMPU1ZX0VOVklST05NRU5UX1VSTCcsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydWSUJFU19BUFBfSUQnLCAnVklCRVNfQVBJX1VSTCddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBWaWJlcyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZWdpc3RlciB0aGlzIGRldmljZSB3aXRoIHRoZSBWaWJlcyBwbGF0Zm9ybVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGV2aWNlUmVzcG9uc2U+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3RlckRldmljZSgpOiBQcm9taXNlPERldmljZVJlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnJlZ2lzdGVyIHRoaXMgZGV2aWNlIHdpdGggdGhlIFZpYmVzIHBsYXRmb3JtXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgdW5yZWdpc3RlckRldmljZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzc29jaWF0ZSBhbiBleHRlcm5hbCBJRCB3aXRoIHRoZSBjdXJyZW50IHBlcnNvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBleHRlcm5hbFBlcnNvbklkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFzc29jaWF0ZVBlcnNvbihleHRlcm5hbFBlcnNvbklkOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHRoaXMgZGV2aWNlIHRvIHJlY2VpdmUgcHVzaCBub3RpZmljYXRpb25zXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVnaXN0ZXJQdXNoKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5yZWdpc3RlciB0aGUgZGV2aWNlIGZyb20gcmVjZWl2aW5nIHB1c2ggbm90aWZpY2F0aW9uc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHVucmVnaXN0ZXJQdXNoKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGEgRGV2aWNlSW5mb1Jlc3BvbnNlIHdpdGggZGV0YWlscyBhYm91dCB0aGUgVmliZXMgRGV2aWNlIElEIGFuZCBQdXNoIFRva2VuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEZXZpY2VJbmZvUmVzcG9uc2U+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWaWJlc0RldmljZUluZm8oKTogUHJvbWlzZTxEZXZpY2VJbmZvUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgdGhlIFBlcnNvblJlc3BvbnNlIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRldmljZSBjdXJyZW50bHlcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBlcnNvblJlc3BvbnNlPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UGVyc29uKCk6IFByb21pc2U8UGVyc29uUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBub3RpZmllZCB3aGVuIHRoZSB1c2VyIG9wZW5zIGEgbm90aWZpY2F0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgb25Ob3RpZmljYXRpb25PcGVuZWQoKTogT2JzZXJ2YWJsZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGFuIGFycmF5IG9mIGluYm94IG1lc3NhZ2VzIGZvciB0aGUgcGVyc29uIGFzc29jaWF0ZWQgd2l0aCB0aGlzIGRldmljZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEluYm94TWVzc2FnZVtdPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hJbmJveE1lc3NhZ2VzKCk6IFByb21pc2U8SW5ib3hNZXNzYWdlW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgYSBzaW5nbGUgaW5ib3ggbWVzc2FnZSBieSBpdCdzIGlkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VfdWlkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SW5ib3hNZXNzYWdlPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hJbmJveE1lc3NhZ2UobWVzc2FnZV91aWQ6IHN0cmluZyk6IFByb21pc2U8SW5ib3hNZXNzYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNYXJrcyBhbiBpbmJveCBtZXNzYWdlIGFzIGV4cGlyZWQgdXNpbmcgbWVzc2FnZV91aWQgYW5kIHRoZSBleHBpcnkgZGF0ZSBzdXBwbGllZC4gVXNlcyBjdXJyZW50IGRhdGUgaWYgbnVsbCBvciBpbnZhbGlkIGRhdGUgaXMgc3VwcGxpZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWVzc2FnZV91aWRcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gQW4gSVNPLTg2MDEgZm9ybWF0dGVkIGRhdGUgc3RyaW5nLlxyXG4gICAqIEBwYXJhbSBkYXRlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SW5ib3hNZXNzYWdlPn0gYW4gdXBkYXRlZCB2ZXJzaW9uIG9mIHRoZSBJbmJveE1lc3NhZ2Ugd2l0aCBleHBpcmVzX2F0IGRhdGUgdXBkYXRlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBleHBpcmVJbmJveE1lc3NhZ2UobWVzc2FnZV91aWQ6IHN0cmluZywgZGF0ZTogc3RyaW5nKTogUHJvbWlzZTxJbmJveE1lc3NhZ2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hcmtzIGFuIGluYm94IG1lc3NhZ2UgYXMgcmVhZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlX3VpZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEluYm94TWVzc2FnZT59IGFuIHVwZGF0ZWQgdmVyc2lvbiBvZiB0aGUgSW5ib3hNZXNzYWdlIHdpdGggcmVhZCBmaWVsZCB1cGRhdGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG1hcmtJbmJveE1lc3NhZ2VBc1JlYWQobWVzc2FnZV91aWQ6IHN0cmluZyk6IFByb21pc2U8SW5ib3hNZXNzYWdlPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWNvcmRzIGFuIGV2ZW50IGZvciB3aGVuIHRoZSB1c2VyIG9wZW5zIGFuIGluYm94IG1lc3NhZ2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW5ib3hfbWVzc2FnZV9zdHJpbmdpZmllZCBzdHJpbmdpZmllZCB2ZXJzaW9uIG9mIHRoZSBJbmJveE1lc3NhZ2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb25JbmJveE1lc3NhZ2VPcGVuKGluYm94X21lc3NhZ2Vfc3RyaW5naWZpZWQ6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=