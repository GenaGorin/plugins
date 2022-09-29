import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var LocationAccuracy = /** @class */ (function (_super) {
    __extends(LocationAccuracy, _super);
    function LocationAccuracy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_NO_POWER = 0;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_LOW_POWER = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_BALANCED_POWER_ACCURACY = 2;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.REQUEST_PRIORITY_HIGH_ACCURACY = 3;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.SUCCESS_SETTINGS_SATISFIED = 0;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.SUCCESS_USER_AGREED = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_ALREADY_REQUESTING = -1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_INVALID_ACTION = 0;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_INVALID_ACCURACY = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_EXCEPTION = 1;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_CANNOT_CHANGE_ACCURACY = 3;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_USER_DISAGREED = 4;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.ERROR_GOOGLE_API_CONNECTION_FAILED = 4;
        return _this;
    }
    LocationAccuracy.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracy.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracy.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracy.pluginName = "LocationAccuracy";
    LocationAccuracy.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracy.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracy.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracy.platforms = ["Android", "iOS"];
    LocationAccuracy.decorators = [
        { type: Injectable }
    ];
    return LocationAccuracy;
}(AwesomeCordovaNativePlugin));
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYXRpb24tYWNjdXJhY3kvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBb0N0RCxvQ0FBMEI7OztRQUM5RDs7OztXQUlHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNILDhDQUF3QyxHQUFHLENBQUMsQ0FBQztRQUM3Qzs7OztXQUlHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNILHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qjs7OztXQUlHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7Ozs7V0FJRztRQUNILDBCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qjs7OztXQUlHO1FBQ0gsNEJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCOzs7O1dBSUc7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7OztXQUlHO1FBQ0gsa0NBQTRCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDOzs7O1dBSUc7UUFDSCwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekI7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBUXZDLHFDQUFVO0lBVVYsdUNBQVk7SUFXWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7O2dCQTVHekIsVUFBVTs7MkJBcENYO0VBcUNzQywwQkFBMEI7U0FBbkQsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExvY2F0aW9uIEFjY3VyYWN5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIENvcmRvdmEvUGhvbmVnYXAgcGx1Z2luIGZvciBBbmRyb2lkIGFuZCBpT1MgdG8gcmVxdWVzdCBlbmFibGluZy9jaGFuZ2luZyBvZiBMb2NhdGlvbiBTZXJ2aWNlcyBieSB0cmlnZ2VyaW5nIGEgbmF0aXZlIGRpYWxvZyBmcm9tIHdpdGhpbiB0aGUgYXBwLCBhdm9pZGluZyB0aGUgbmVlZCBmb3IgdGhlIHVzZXIgdG8gbGVhdmUgeW91ciBhcHAgdG8gY2hhbmdlIGxvY2F0aW9uIHNldHRpbmdzIG1hbnVhbGx5LlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBMb2NhdGlvbkFjY3VyYWN5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2F0aW9uLWFjY3VyYWN5L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbG9jYXRpb25BY2N1cmFjeTogTG9jYXRpb25BY2N1cmFjeSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmxvY2F0aW9uQWNjdXJhY3kuY2FuUmVxdWVzdCgpLnRoZW4oKGNhblJlcXVlc3Q6IGJvb2xlYW4pID0+IHtcclxuICpcclxuICogICBpZihjYW5SZXF1ZXN0KSB7XHJcbiAqICAgICAvLyB0aGUgYWNjdXJhY3kgb3B0aW9uIHdpbGwgYmUgaWdub3JlZCBieSBpT1NcclxuICogICAgIHRoaXMubG9jYXRpb25BY2N1cmFjeS5yZXF1ZXN0KHRoaXMubG9jYXRpb25BY2N1cmFjeS5SRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1kpLnRoZW4oXHJcbiAqICAgICAgICgpID0+IGNvbnNvbGUubG9nKCdSZXF1ZXN0IHN1Y2Nlc3NmdWwnKSxcclxuICogICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIHJlcXVlc3RpbmcgbG9jYXRpb24gcGVybWlzc2lvbnMnLCBlcnJvcilcclxuICogICAgICk7XHJcbiAqICAgfVxyXG4gKlxyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTG9jYXRpb25BY2N1cmFjeScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tcmVxdWVzdC1sb2NhdGlvbi1hY2N1cmFjeScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmxvY2F0aW9uQWNjdXJhY3knLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZHBhOTljL2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb2NhdGlvbkFjY3VyYWN5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIFJFUVVFU1RfUFJJT1JJVFlfTk9fUE9XRVIgPSAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIFJFUVVFU1RfUFJJT1JJVFlfTE9XX1BPV0VSID0gMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX0JBTEFOQ0VEX1BPV0VSX0FDQ1VSQUNZID0gMjtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX0hJR0hfQUNDVVJBQ1kgPSAzO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIFNVQ0NFU1NfU0VUVElOR1NfU0FUSVNGSUVEID0gMDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBTVUNDRVNTX1VTRVJfQUdSRUVEID0gMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9BTFJFQURZX1JFUVVFU1RJTkcgPSAtMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9JTlZBTElEX0FDVElPTiA9IDA7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfSU5WQUxJRF9BQ0NVUkFDWSA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfRVhDRVBUSU9OID0gMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9DQU5OT1RfQ0hBTkdFX0FDQ1VSQUNZID0gMztcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBFUlJPUl9VU0VSX0RJU0FHUkVFRCA9IDQ7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfR09PR0xFX0FQSV9DT05ORUNUSU9OX0ZBSUxFRCA9IDQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB5b3UgY2FuIHJlcXVlc3QgYWNjdXJhdGUgbG9jYXRpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc292bGVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHlvdSBjYW4gcmVxdWVzdCBhY2N1cmF0ZSBsb2NhdGlvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjYW5SZXF1ZXN0KCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIGEgcmVxdWVzdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3NcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIGEgcmVxdWVzdCBpcyBjdXJyZW50bHkgaW4gcHJvZ3Jlc3NcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNSZXF1ZXN0aW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdHMgYWNjdXJhdGUgbG9jYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSBhY2N1cmFjeSB7bnVtYmVyfSBBY2N1cmFjeSwgZnJvbSAwIHRvIDQuIFlvdSBjYW4gdXNlIHRoZSBzdGF0aWMgcHJvcGVydGllcyBvZiB0aGlzIGNsYXNzIHRoYXQgc3RhcnQgd2l0aCBSRVFVRVNUX1BSSU9SSVRZX1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgb24gc3VjY2VzcyBhbmQgcmVqZWN0cyBpZiBhbiBlcnJvciBvY2N1cnJlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnIH0pXHJcbiAgcmVxdWVzdChhY2N1cmFjeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19