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
var IosASWebauthenticationSessionOriginal = /** @class */ (function (_super) {
    __extends(IosASWebauthenticationSessionOriginal, _super);
    function IosASWebauthenticationSessionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IosASWebauthenticationSessionOriginal.prototype.start = function (callbackUrl, authorizeURL) { return cordova(this, "start", {}, arguments); };
    IosASWebauthenticationSessionOriginal.pluginName = "IosASWebauthenticationSession";
    IosASWebauthenticationSessionOriginal.plugin = "cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.pluginRef = "plugins.ASWebAuthSession";
    IosASWebauthenticationSessionOriginal.repo = "https://github.com/jwelker110/cordova-plugin-ios-aswebauthenticationsession-api";
    IosASWebauthenticationSessionOriginal.platforms = ["iOS"];
    return IosASWebauthenticationSessionOriginal;
}(AwesomeCordovaNativePlugin));
var IosASWebauthenticationSession = new IosASWebauthenticationSessionOriginal();
export { IosASWebauthenticationSession };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUErQnpDLGlEQUEwQjs7OztJQVMzRSw2Q0FBSyxhQUFDLFdBQW1CLEVBQUUsWUFBb0I7Ozs7Ozt3Q0F6Q2pEO0VBZ0NtRCwwQkFBMEI7U0FBaEUsNkJBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGlcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBsdWdpbiBmb3IgaU9TIDEyIEFTV2ViQXV0aGVudGljYXRpb25TZXNzaW9uIEFQSVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pb3MtYXN3ZWJhdXRoZW50aWNhdGlvbnNlc3Npb24tYXBpL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgSW9zQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb246IGlvcy1hc3dlYmF1dGhlbnRpY2F0aW9uc2Vzc2lvbi1hcGkpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5Jb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbi5zdGFydChjYWxsYmFja1VybCwgYXV0aG9yaXplVVJMKVxyXG4gKiAgIC50aGVuKChyZWRpcmVjdFVybDogc3RyaW5nKSA9PiBjb25zb2xlLmxvZyhyZWRpcmVjdFVybCkpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaScsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5BU1dlYkF1dGhTZXNzaW9uJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2p3ZWxrZXIxMTAvY29yZG92YS1wbHVnaW4taW9zLWFzd2ViYXV0aGVudGljYXRpb25zZXNzaW9uLWFwaScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJb3NBU1dlYmF1dGhlbnRpY2F0aW9uU2Vzc2lvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0IGFuIGF1dGhlbnRpY2F0aW9uIGZsb3cgaW4gQVNXZWJhdXRoZW50aWNhdGlvblNlc3Npb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1VybCB7c3RyaW5nfSBDYWxsYmFjayBVUkwgb2YgeW91ciBBcHBcclxuICAgKiBAcGFyYW0gYXV0aG9yaXplVVJMIHtudW1iZXJ9IEF1dGhvcml6YXRpb24gVVJMXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyBhIHN0cmluZyBjb250YWluaW5nIHRoZSByZWRpcmVjdCBVUkwgYWZ0ZXIgZmluaXNoaW5nIEFTV2ViYXV0aGVudGljYXRpb25TZXNzaW9uXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHN0YXJ0KGNhbGxiYWNrVXJsOiBzdHJpbmcsIGF1dGhvcml6ZVVSTDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19