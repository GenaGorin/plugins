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
var LocationAccuracyOriginal = /** @class */ (function (_super) {
    __extends(LocationAccuracyOriginal, _super);
    function LocationAccuracyOriginal() {
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
    LocationAccuracyOriginal.prototype.canRequest = function () { return cordova(this, "canRequest", {}, arguments); };
    LocationAccuracyOriginal.prototype.isRequesting = function () { return cordova(this, "isRequesting", {}, arguments); };
    LocationAccuracyOriginal.prototype.request = function (accuracy) { return cordova(this, "request", { "callbackOrder": "reverse" }, arguments); };
    LocationAccuracyOriginal.pluginName = "LocationAccuracy";
    LocationAccuracyOriginal.plugin = "cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.pluginRef = "cordova.plugins.locationAccuracy";
    LocationAccuracyOriginal.repo = "https://github.com/dpa99c/cordova-plugin-request-location-accuracy";
    LocationAccuracyOriginal.platforms = ["Android", "iOS"];
    return LocationAccuracyOriginal;
}(AwesomeCordovaNativePlugin));
var LocationAccuracy = new LocationAccuracyOriginal();
export { LocationAccuracy };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYXRpb24tYWNjdXJhY3kvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBb0N0RCxvQ0FBMEI7OztRQUM5RDs7OztXQUlHO1FBQ0gsK0JBQXlCLEdBQUcsQ0FBQyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNILDhDQUF3QyxHQUFHLENBQUMsQ0FBQztRQUM3Qzs7OztXQUlHO1FBQ0gsb0NBQThCLEdBQUcsQ0FBQyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLENBQUM7UUFDL0I7Ozs7V0FJRztRQUNILHlCQUFtQixHQUFHLENBQUMsQ0FBQztRQUN4Qjs7OztXQUlHO1FBQ0gsOEJBQXdCLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUI7Ozs7V0FJRztRQUNILDBCQUFvQixHQUFHLENBQUMsQ0FBQztRQUN6Qjs7OztXQUlHO1FBQ0gsNEJBQXNCLEdBQUcsQ0FBQyxDQUFDO1FBQzNCOzs7O1dBSUc7UUFDSCxxQkFBZSxHQUFHLENBQUMsQ0FBQztRQUNwQjs7OztXQUlHO1FBQ0gsa0NBQTRCLEdBQUcsQ0FBQyxDQUFDO1FBQ2pDOzs7O1dBSUc7UUFDSCwwQkFBb0IsR0FBRyxDQUFDLENBQUM7UUFDekI7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsQ0FBQzs7O0lBUXZDLHFDQUFVO0lBVVYsdUNBQVk7SUFXWixrQ0FBTyxhQUFDLFFBQWdCOzs7Ozs7MkJBaEoxQjtFQXFDc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBMb2NhdGlvbiBBY2N1cmFjeVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBDb3Jkb3ZhL1Bob25lZ2FwIHBsdWdpbiBmb3IgQW5kcm9pZCBhbmQgaU9TIHRvIHJlcXVlc3QgZW5hYmxpbmcvY2hhbmdpbmcgb2YgTG9jYXRpb24gU2VydmljZXMgYnkgdHJpZ2dlcmluZyBhIG5hdGl2ZSBkaWFsb2cgZnJvbSB3aXRoaW4gdGhlIGFwcCwgYXZvaWRpbmcgdGhlIG5lZWQgZm9yIHRoZSB1c2VyIHRvIGxlYXZlIHlvdXIgYXBwIHRvIGNoYW5nZSBsb2NhdGlvbiBzZXR0aW5ncyBtYW51YWxseS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTG9jYXRpb25BY2N1cmFjeSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9sb2NhdGlvbi1hY2N1cmFjeS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2F0aW9uQWNjdXJhY3k6IExvY2F0aW9uQWNjdXJhY3kpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5sb2NhdGlvbkFjY3VyYWN5LmNhblJlcXVlc3QoKS50aGVuKChjYW5SZXF1ZXN0OiBib29sZWFuKSA9PiB7XHJcbiAqXHJcbiAqICAgaWYoY2FuUmVxdWVzdCkge1xyXG4gKiAgICAgLy8gdGhlIGFjY3VyYWN5IG9wdGlvbiB3aWxsIGJlIGlnbm9yZWQgYnkgaU9TXHJcbiAqICAgICB0aGlzLmxvY2F0aW9uQWNjdXJhY3kucmVxdWVzdCh0aGlzLmxvY2F0aW9uQWNjdXJhY3kuUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZKS50aGVuKFxyXG4gKiAgICAgICAoKSA9PiBjb25zb2xlLmxvZygnUmVxdWVzdCBzdWNjZXNzZnVsJyksXHJcbiAqICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKCdFcnJvciByZXF1ZXN0aW5nIGxvY2F0aW9uIHBlcm1pc3Npb25zJywgZXJyb3IpXHJcbiAqICAgICApO1xyXG4gKiAgIH1cclxuICpcclxuICogfSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0xvY2F0aW9uQWNjdXJhY3knLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXJlcXVlc3QtbG9jYXRpb24tYWNjdXJhY3knLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5sb2NhdGlvbkFjY3VyYWN5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2RwYTk5Yy9jb3Jkb3ZhLXBsdWdpbi1yZXF1ZXN0LWxvY2F0aW9uLWFjY3VyYWN5JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYXRpb25BY2N1cmFjeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX05PX1BPV0VSID0gMDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBSRVFVRVNUX1BSSU9SSVRZX0xPV19QT1dFUiA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgUkVRVUVTVF9QUklPUklUWV9CQUxBTkNFRF9QT1dFUl9BQ0NVUkFDWSA9IDI7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgUkVRVUVTVF9QUklPUklUWV9ISUdIX0FDQ1VSQUNZID0gMztcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBTVUNDRVNTX1NFVFRJTkdTX1NBVElTRklFRCA9IDA7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgU1VDQ0VTU19VU0VSX0FHUkVFRCA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfQUxSRUFEWV9SRVFVRVNUSU5HID0gLTE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfSU5WQUxJRF9BQ1RJT04gPSAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0lOVkFMSURfQUNDVVJBQ1kgPSAxO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0VYQ0VQVElPTiA9IDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfQ0FOTk9UX0NIQU5HRV9BQ0NVUkFDWSA9IDM7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgRVJST1JfVVNFUl9ESVNBR1JFRUQgPSA0O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEVSUk9SX0dPT0dMRV9BUElfQ09OTkVDVElPTl9GQUlMRUQgPSA0O1xyXG5cclxuICAvKipcclxuICAgKiBJbmRpY2F0ZXMgaWYgeW91IGNhbiByZXF1ZXN0IGFjY3VyYXRlIGxvY2F0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvdmxlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB5b3UgY2FuIHJlcXVlc3QgYWNjdXJhdGUgbG9jYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2FuUmVxdWVzdCgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiBhIHJlcXVlc3QgaXMgY3VycmVudGx5IGluIHByb2dyZXNzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzUmVxdWVzdGluZygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3RzIGFjY3VyYXRlIGxvY2F0aW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYWNjdXJhY3kge251bWJlcn0gQWNjdXJhY3ksIGZyb20gMCB0byA0LiBZb3UgY2FuIHVzZSB0aGUgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhpcyBjbGFzcyB0aGF0IHN0YXJ0IHdpdGggUkVRVUVTVF9QUklPUklUWV9cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIG9uIHN1Y2Nlc3MgYW5kIHJlamVjdHMgaWYgYW4gZXJyb3Igb2NjdXJyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyB9KVxyXG4gIHJlcXVlc3QoYWNjdXJhY3k6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==