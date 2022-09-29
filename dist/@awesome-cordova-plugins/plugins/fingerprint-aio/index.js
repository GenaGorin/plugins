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
var FingerprintAIOOriginal = /** @class */ (function (_super) {
    __extends(FingerprintAIOOriginal, _super);
    function FingerprintAIOOriginal() {
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
    FingerprintAIOOriginal.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    FingerprintAIOOriginal.prototype.registerBiometricSecret = function (options) { return cordova(this, "registerBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.loadBiometricSecret = function (options) { return cordova(this, "loadBiometricSecret", {}, arguments); };
    FingerprintAIOOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    FingerprintAIOOriginal.pluginName = "FingerprintAIO";
    FingerprintAIOOriginal.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.pluginRef = "Fingerprint";
    FingerprintAIOOriginal.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIOOriginal.platforms = ["Android", "iOS"];
    return FingerprintAIOOriginal;
}(AwesomeCordovaNativePlugin));
var FingerprintAIO = new FingerprintAIOOriginal();
export { FingerprintAIO };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmluZ2VycHJpbnQtYWlvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlIeEQsa0NBQTBCOzs7UUFDNUQ7Ozs7V0FJRztRQUNILDZCQUF1QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQy9COzs7O1dBSUc7UUFDSCwyQkFBcUIsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUM3Qjs7OztXQUlHO1FBQ0gscUNBQStCLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDdkM7Ozs7V0FJRztRQUNILGlDQUEyQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ25DOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsc0NBQWdDLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDeEM7Ozs7V0FJRztRQUNILDRCQUFzQixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzlCOzs7O1dBSUc7UUFDSCxxQ0FBK0IsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN2Qzs7OztXQUlHO1FBQ0gseUJBQW1CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDM0I7Ozs7V0FJRztRQUNILHdDQUFrQyxHQUFHLENBQUMsR0FBRyxDQUFDO1FBQzFDOzs7O1dBSUc7UUFDSCxzQ0FBZ0MsR0FBRyxDQUFDLEdBQUcsQ0FBQztRQUN4Qzs7OztXQUlHO1FBQ0gsMEJBQW9CLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDNUI7Ozs7V0FJRztRQUNILG9DQUE4QixHQUFHLENBQUMsR0FBRyxDQUFDO1FBQ3RDOzs7O1dBSUc7UUFDSCxnQ0FBMEIsR0FBRyxDQUFDLEdBQUcsQ0FBQzs7O0lBUWxDLG9DQUFXO0lBV1gsZ0RBQXVCLGFBQUMsT0FBaUM7SUFXekQsNENBQW1CLGFBQUMsT0FBMkI7SUFXL0MsNkJBQUksYUFBQyxPQUEyQjs7Ozs7O3lCQXZQbEM7RUEwSG9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGaW5nZXJwcmludE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRpdGxlIGluIGJpb21ldHJpYyBwcm9tcHQgKGFuZHJvaWQgb25seSlcclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IHtBUFBfTkFNRX0gQmlvbWV0cmljIFNpZ24gT25cclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU3VidGl0bGUgaW4gYmlvbWV0cmljIFByb21wdCAoYW5kcm9pZCBvbmx5KVxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgbnVsbFxyXG4gICAqL1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZXNjcmlwdGlvbiBpbiBiaW9tZXRyaWMgUHJvbXB0XHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBudWxsXHJcbiAgICovXHJcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpdGxlIG9mIGZhbGxiYWNrIGJ1dHRvbi5cclxuICAgKlxyXG4gICAqIEBkZWZhdWx0IFwiVXNlIFBpblwiXHJcbiAgICovXHJcbiAgZmFsbGJhY2tCdXR0b25UaXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGl0bGUgZm9yIGNhbmNlbCBidXR0b24gb24gQW5kcm9pZFxyXG4gICAqXHJcbiAgICogQGRlZmF1bHQgXCJDYW5jZWxcIlxyXG4gICAqL1xyXG4gIGNhbmNlbEJ1dHRvblRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlICd1c2UgYmFja3VwJyBvcHRpb24uXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGRpc2FibGVCYWNrdXA/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyBleHRlbmRzIEZpbmdlcnByaW50T3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogU3RyaW5nIHNlY3JldCB0byBlbmNyeXB0IGFuZCBzYXZlLCB1c2Ugc2ltcGxlIHN0cmluZ3MgbWF0Y2hpbmcgdGhlIHJlZ2V4IFthLXpBLVowLTlcXC1dK1xyXG4gICAqL1xyXG4gIHNlY3JldDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJZiBgdHJ1ZWAgc2VjcmV0IHdpbGwgYmUgZGVsZXRlZCB3aGVuIGJpb21ldHJ5IGl0ZW1zIGFyZSBkZWxldGVkIG9yIGVucm9sbGVkXHJcbiAgICpcclxuICAgKiBAZGVmYXVsdCBmYWxzZVxyXG4gICAqL1xyXG4gIGludmFsaWRhdGVPbkVucm9sbG1lbnQ/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRmluZ2VycHJpbnQgQUlPXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBVc2Ugc2ltcGxlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIG9uIEFuZHJvaWQgYW5kIGlPUy5cclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpby4gRm9yIG1vcmUgaW5mbyBhYm91dCBwbHVnaW4sIHZpc3Q6IGh0dHBzOi8vZ2l0aHViLmNvbS9OaWtsYXNNZXJ6L2NvcmRvdmEtcGx1Z2luLWZpbmdlcnByaW50LWFpb1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaW5nZXJwcmludEFJTyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maW5nZXJwcmludC1haW8vbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmYWlvOiBGaW5nZXJwcmludEFJTykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZhaW8uc2hvdygpLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKS5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coZXJyb3IpKTtcclxuICpcclxuICogIE9SIHdpdGggb3B0aW9ucy4uLlxyXG4gKlxyXG4gKiB0aGlzLmZhaW8uc2hvdyh7XHJcbiAqICAgICB0aXRsZTogJ0Jpb21ldHJpYyBBdXRoZW50aWNhdGlvbicsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBEZWZhdWx0OiBcIjxBUFBfTkFNRT4gQmlvbWV0cmljIFNpZ24gT25cIlxyXG4gKiAgICAgc3VidGl0bGU6ICdDb29sZXN0IFBsdWdpbiBldmVyJyAvLyAoQW5kcm9pZCBPbmx5KSB8IG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxyXG4gKiAgICAgZGVzY3JpcHRpb246ICdQbGVhc2UgYXV0aGVudGljYXRlJyAvLyBvcHRpb25hbCB8IERlZmF1bHQ6IG51bGxcclxuICogICAgIGZhbGxiYWNrQnV0dG9uVGl0bGU6ICdVc2UgQmFja3VwJywgLy8gb3B0aW9uYWwgfCBXaGVuIGRpc2FibGVCYWNrdXAgaXMgZmFsc2UgZGVmYXVsdHMgdG8gXCJVc2UgUGluXCIuXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdoZW4gZGlzYWJsZUJhY2t1cCBpcyB0cnVlIGRlZmF1bHRzIHRvIFwiQ2FuY2VsXCJcclxuICogICAgIGRpc2FibGVCYWNrdXA6dHJ1ZSwgIC8vIG9wdGlvbmFsIHwgZGVmYXVsdDogZmFsc2VcclxuICogfSlcclxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZhaW8ucmVnaXN0ZXJCaW9tZXRyaWNTZWNyZXQoe1xyXG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxyXG4gKiAgICAgIHNlY3JldDogXCJteS1zdXBlci1zZWNyZXRcIiwgLy8gbWFuZGF0b3J5XHJcbiAqICAgICAgaW52YWxpZGF0ZU9uRW5yb2xsbWVudDogdHJ1ZSwgLy8gb3B0aW9uYWwgfCBEZWZhdWx0OiBmYWxzZVxyXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIChBbmRyb2lkIE9ubHkpIHwgb3B0aW9uYWwgfCBhbHdheXMgYHRydWVgIG9uIEFuZHJvaWRcclxuICogfSlcclxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxyXG4gKiAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKGVycm9yKSk7XHJcbiAqXHJcbiAqICAuLi5cclxuICpcclxuICogdGhpcy5mYWlvLmxvYWRCaW9tZXRyaWNTZWNyZXQoe1xyXG4gKiAgICAgIGRlc2NyaXB0aW9uOiBcIlNvbWUgYmlvbWV0cmljIGRlc2NyaXB0aW9uXCIsIC8vIG9wdGlvbmFsIHwgRGVmYXVsdDogbnVsbFxyXG4gKiAgICAgIGRpc2FibGVCYWNrdXA6IHRydWUsIC8vIGFsd2F5cyBkaXNhYmxlZCBvbiBBbmRyb2lkXHJcbiAqIH0pXHJcbiAqIC50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzdWx0KSlcclxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogRmluZ2VycHJpbnRPcHRpb25zXHJcbiAqIEZpbmdlcnByaW50U2VjcmV0T3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpbmdlcnByaW50QUlPJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8nLFxyXG4gIHBsdWdpblJlZjogJ0ZpbmdlcnByaW50JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmluZ2VycHJpbnRBSU8gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1VOS05PV05fRVJST1IgPSAtMTAwO1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19VTkFWQUlMQUJMRSA9IC0xMDE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0FVVEhFTlRJQ0FUSU9OX0ZBSUxFRCA9IC0xMDI7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1NES19OT1RfU1VQUE9SVEVEID0gLTEwMztcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfSEFSRFdBUkVfTk9UX1NVUFBPUlRFRCA9IC0xMDQ7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX1BFUk1JU1NJT05fTk9UX0dSQU5URUQgPSAtMTA1O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19OT1RfRU5ST0xMRUQgPSAtMTA2O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19JTlRFUk5BTF9QTFVHSU5fRVJST1IgPSAtMTA3O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19ESVNNSVNTRUQgPSAtMTA4O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19QSU5fT1JfUEFUVEVSTl9ESVNNSVNTRUQgPSAtMTA5O1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICpcclxuICAgKiBAdHlwZSB7bnVtYmVyfVxyXG4gICAqL1xyXG4gIEJJT01FVFJJQ19TQ1JFRU5fR1VBUkRfVU5TRUNVUkVEID0gLTExMDtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfTE9DS0VEX09VVCA9IC0xMTE7XHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKlxyXG4gICAqIEB0eXBlIHtudW1iZXJ9XHJcbiAgICovXHJcbiAgQklPTUVUUklDX0xPQ0tFRF9PVVRfUEVSTUFORU5UID0gLTExMjtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqXHJcbiAgICogQHR5cGUge251bWJlcn1cclxuICAgKi9cclxuICBCSU9NRVRSSUNfU0VDUkVUX05PVF9GT1VORCA9IC0xMTM7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCByZXN1bHRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWUgYW5kIHJlZ2lzdGVyIHNlY3JldFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludFNlY3JldE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlZ2lzdGVyQmlvbWV0cmljU2VjcmV0KG9wdGlvbnM6IEZpbmdlcnByaW50U2VjcmV0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IGF1dGhlbnRpY2F0aW9uIGRpYWxvZ3VlIGFuZCBsb2FkIHNlY3JldFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGxvYWRCaW9tZXRyaWNTZWNyZXQob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RmluZ2VycHJpbnRPcHRpb25zfSBvcHRpb25zIE9wdGlvbnMgZm9yIHBsYXRmb3JtIHNwZWNpZmljIGZpbmdlcnByaW50IEFQSVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBhdXRoZW50aWNhdGlvbiB3YXMgc3VjY2Vzc2Z1bFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaG93KG9wdGlvbnM6IEZpbmdlcnByaW50T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==