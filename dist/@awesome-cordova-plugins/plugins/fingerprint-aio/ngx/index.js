import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var FingerprintAIO = /** @class */ (function (_super) {
    __extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_UNKNOWN_ERROR = -100;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_UNAVAILABLE = -101;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_AUTHENTICATION_FAILED = -102;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_SDK_NOT_SUPPORTED = -103;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_HARDWARE_NOT_SUPPORTED = -104;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_PERMISSION_NOT_GRANTED = -105;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_NOT_ENROLLED = -106;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_INTERNAL_PLUGIN_ERROR = -107;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_DISMISSED = -108;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_PIN_OR_PATTERN_DISMISSED = -109;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_SCREEN_GUARD_UNSECURED = -110;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT = -111;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_LOCKED_OUT_PERMANENT = -112;
        /**
         * Convenience constant
         *
         * @type {number}
         */
        _this.BIOMETRIC_SECRET_NOT_FOUND = -113;
        return _this;
    }
    FingerprintAIO.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO.decorators = [
        { type: Injectable }
    ];
    return FingerprintAIO;
}(AwesomeCordovaNativePlugin));
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlIeEQsa0NBQTBCOzs7UUFDNUQ7Ozs7V0FJRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7O1dBSUc7UUFDSCwyQkFBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM3Qjs7OztXQUlHO1FBQ0gscUNBQStCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdkM7Ozs7V0FJRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsc0NBQWdDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDeEM7Ozs7V0FJRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxxQ0FBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2Qzs7OztXQUlHO1FBQ0gseUJBQW1CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0I7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDNUI7Ozs7V0FJRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7O0lBUWxDLG9DQUFXO0lBV1gsZ0RBQXVCLGFBQUMsT0FBaUM7SUFXekQsNENBQW1CLGFBQUMsT0FBMkI7SUFXL0MsNkJBQUksYUFBQyxPQUEyQjs7Ozs7OztnQkE5SGpDLFVBQVU7O3lCQXpIWDtFQTBIb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogVGl0bGUgaW4gYmlvbWV0cmljIHByb21wdCAoYW5kcm9pZCBvbmx5KVxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQge0FQUF9OQU1FfSBCaW9tZXRyaWMgU2lnbiBPblxyXG4gICAqL1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTdWJ0aXRsZSBpbiBiaW9tZXRyaWMgUHJvbXB0IChhbmRyb2lkIG9ubHkpXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICovXHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlc2NyaXB0aW9uIGluIGJpb21ldHJpYyBQcm9tcHRcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IG51bGxcclxuICAgKi9cclxuICBkZXNjcmlwdGlvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgb2YgZmFsbGJhY2sgYnV0dG9uLlxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgXCJVc2UgUGluXCJcclxuICAgKi9cclxuICBmYWxsYmFja0J1dHRvblRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaXRsZSBmb3IgY2FuY2VsIGJ1dHRvbiBvbiBBbmRyb2lkXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBcIkNhbmNlbFwiXHJcbiAgICovXHJcbiAgY2FuY2VsQnV0dG9uVGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgJ3VzZSBiYWNrdXAnIG9wdGlvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgZGlzYWJsZUJhY2t1cD86IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zIGV4dGVuZHMgRmluZ2VycHJpbnRPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBTdHJpbmcgc2VjcmV0IHRvIGVuY3J5cHQgYW5kIHNhdmUsIHVzZSBzaW1wbGUgc3RyaW5ncyBtYXRjaGluZyB0aGUgcmVnZXggW2EtekEtWjAtOVxcLV0rXHJcbiAgICovXHJcbiAgc2VjcmV0OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIGB0cnVlYCBzZWNyZXQgd2lsbCBiZSBkZWxldGVkIHdoZW4gYmlvbWV0cnkgaXRlbXMgYXJlIGRlbGV0ZWQgb3IgZW5yb2xsZWRcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IGZhbHNlXHJcbiAgICovXHJcbiAgaW52YWxpZGF0ZU9uRW5yb2xsbWVudD86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaW5nZXJwcmludCBBSU9cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFVzZSBzaW1wbGUgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gb24gQW5kcm9pZCBhbmQgaU9TLlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvLiBGb3IgbW9yZSBpbmZvIGFib3V0IHBsdWdpbiwgdmlzdDogaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZpbmdlcnByaW50QUlPIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhaW86IEZpbmdlcnByaW50QUlPKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5zaG93KCkudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiAgT1Igd2l0aCBvcHRpb25zLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5zaG93KHtcclxuICogICAgIHRpdGxlOiAnQmlvbWV0cmljIEF1dGhlbnRpY2F0aW9uJywgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IERlZmF1bHQ6IFwiPEFQUF9OQU1FPiBCaW9tZXRyaWMgU2lnbiBPblwiXHJcbiAqICAgICBzdWJ0aXRsZTogJ0Nvb2xlc3QgUGx1Z2luIGV2ZXInIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICBkZXNjcmlwdGlvbjogJ1BsZWFzZSBhdXRoZW50aWNhdGUnIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxyXG4gKiAgICAgZmFsbGJhY2tCdXR0b25UaXRsZTogJ1VzZSBCYWNrdXAnLCAvLyBvcHRpb25hbCB8IFdoZW4gZGlzYWJsZUJhY2t1cCBpcyBmYWxzZSBkZWZhdWx0cyB0byBcIlVzZSBQaW5cIi5cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gV2hlbiBkaXNhYmxlQmFja3VwIGlzIHRydWUgZGVmYXVsdHMgdG8gXCJDYW5jZWxcIlxyXG4gKiAgICAgZGlzYWJsZUJhY2t1cDp0cnVlLCAgLy8gb3B0aW9uYWwgfCBkZWZhdWx0OiBmYWxzZVxyXG4gKiB9KVxyXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmFpby5yZWdpc3RlckJpb21ldHJpY1NlY3JldCh7XHJcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICAgc2VjcmV0OiBcIm15LXN1cGVyLXNlY3JldFwiLCAvLyBtYW5kYXRvcnlcclxuICogICAgICBpbnZhbGlkYXRlT25FbnJvbGxtZW50OiB0cnVlLCAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IGZhbHNlXHJcbiAqICAgICAgZGlzYWJsZUJhY2t1cDogdHJ1ZSwgLy8gKEFuZHJvaWQgT25seSkgfCBvcHRpb25hbCB8IGFsd2F5cyBgdHJ1ZWAgb24gQW5kcm9pZFxyXG4gKiB9KVxyXG4gKiAudGhlbigocmVzdWx0OiBhbnkpID0+IGNvbnNvbGUubG9nKHJlc3VsdCkpXHJcbiAqIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZhaW8ubG9hZEJpb21ldHJpY1NlY3JldCh7XHJcbiAqICAgICAgZGVzY3JpcHRpb246IFwiU29tZSBiaW9tZXRyaWMgZGVzY3JpcHRpb25cIiwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBudWxsXHJcbiAqICAgICAgZGlzYWJsZUJhY2t1cDogdHJ1ZSwgLy8gYWx3YXlzIGRpc2FibGVkIG9uIEFuZHJvaWRcclxuICogfSlcclxuICogLnRoZW4oKHJlc3VsdDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBGaW5nZXJwcmludE9wdGlvbnNcclxuICogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmluZ2VycHJpbnRBSU8nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpbycsXHJcbiAgcGx1Z2luUmVmOiAnRmluZ2VycHJpbnQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaW5nZXJwcmludEFJTyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfVU5LTk9XTl9FUlJPUiA9IC0xMDA7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1VOQVZBSUxBQkxFID0gLTEwMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfQVVUSEVOVElDQVRJT05fRkFJTEVEID0gLTEwMjtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfU0RLX05PVF9TVVBQT1JURUQgPSAtMTAzO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19IQVJEV0FSRV9OT1RfU1VQUE9SVEVEID0gLTEwNDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IC0xMDU7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX05PVF9FTlJPTExFRCA9IC0xMDY7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0lOVEVSTkFMX1BMVUdJTl9FUlJPUiA9IC0xMDc7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0RJU01JU1NFRCA9IC0xMDg7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1BJTl9PUl9QQVRURVJOX0RJU01JU1NFRCA9IC0xMDk7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1NDUkVFTl9HVUFSRF9VTlNFQ1VSRUQgPSAtMTEwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19MT0NLRURfT1VUID0gLTExMTtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfTE9DS0VEX09VVF9QRVJNQU5FTlQgPSAtMTEyO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19TRUNSRVRfTk9UX0ZPVU5EID0gLTExMztcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgZmluZ2VycHJpbnQgYXV0aGVudGljYXRpb24gaXMgYXZhaWxhYmxlXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHJlc3VsdFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0F2YWlsYWJsZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZSBhbmQgcmVnaXN0ZXIgc2VjcmV0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50U2VjcmV0T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRTZWNyZXRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIGxvYWQgc2VjcmV0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0ZpbmdlcnByaW50T3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBwbGF0Zm9ybSBzcGVjaWZpYyBmaW5nZXJwcmludCBBUElcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYXV0aGVudGljYXRpb24gd2FzIHN1Y2Nlc3NmdWxcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9hZEJpb21ldHJpY1NlY3JldChvcHRpb25zOiBGaW5nZXJwcmludE9wdGlvbnMpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBhdXRoZW50aWNhdGlvbiBkaWFsb2d1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3cob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19