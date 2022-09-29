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
var TealiumInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(TealiumInstallReferrerOriginal, _super);
    function TealiumInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrerOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrerOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrerOriginal.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrerOriginal.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrerOriginal.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrerOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrerOriginal.platforms = ["Android"];
    TealiumInstallReferrerOriginal.install = "";
    return TealiumInstallReferrerOriginal;
}(AwesomeCordovaNativePlugin));
var TealiumInstallReferrer = new TealiumInstallReferrerOriginal();
export { TealiumInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS1pbnN0YWxscmVmZXJyZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0NoRCwwQ0FBMEI7Ozs7SUFRcEUsOENBQWEsYUFBQyxZQUFvQjtJQVdsQyw0Q0FBVyxhQUFDLFlBQW9COzs7Ozs7O2lDQXJEbEM7RUFrQzRDLDBCQUEwQjtTQUF6RCxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHBhaWRcclxuICogQG5hbWUgVGVhbGl1bUluc3RhbGxSZWZlcnJlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgW1RlYWxpdW0gQ29yZG92YSBQbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFsaXVtL2NvcmRvdmEtcGx1Z2luKS4gV2l0aG91dCBpdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgZG8gYW55dGhpbmcuXHJcbiAqIEltcGxlbWVudHMgYSBCcm9hZGNhc3QgUmVjZWl2ZXIgZm9yIHRoZSBJTlNUQUxMX1JFRkVSUkVSIGludGVudC5cclxuICogQHVzYWdlXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBUZWFsaXVtSW5zdGFsbFJlZmVycmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RlYWxpdW0taW5zdGFsbHJlZmVycmVyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5zdGFsbFJlZmVycmVyOiBUZWFsaXVtSW5zdGFsbFJlZmVycmVyKSB7IH1cclxuICpcclxuICpcclxuICogdGhpcy5pbnN0YWxsUmVmZXJyZXIuc2V0UGVyc2lzdGVudChcIm1haW5cIik7XHJcbiAqIHRoaXMuaW5zdGFsbFJlZmVycmVyLnNldFZvbGF0aWxlKFwibWFpblwiKTtcclxuICpcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1RlYWxpdW1JbnN0YWxsUmVmZXJyZXInLFxyXG4gIHBsdWdpbjogJ3RlYWxpdW0tY29yZG92YS1pbnN0YWxscmVmZXJyZXInLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cudGVhbGl1bUluc3RhbGxSZWZlcnJlcicsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL1RlYWxpdW0vY29yZG92YS1wbHVnaW4nLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZWFsaXVtSW5zdGFsbFJlZmVycmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc3RvcmVzIHRoZSBpbnN0YWxsIHJlZmVycmVyIGluZm9ybWF0aW9uIGFzIHBlcnNpc3RlbnQgZGF0YVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldFBlcnNpc3RlbnQoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGluc3RhbGwgcmVmZXJyZXIgaW5mb3JtYXRpb24gYXMgdm9sYXRpbGUgZGF0YVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGluc3RhbmNlTmFtZSB7c3RyaW5nfSBZb3VyIGFyYml0cmFyeSBUZWFsaXVtIGluc3RhbmNlIG5hbWUgcHJvdmlkZWQgYXQgaW5pdCB0aW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldFZvbGF0aWxlKGluc3RhbmNlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19