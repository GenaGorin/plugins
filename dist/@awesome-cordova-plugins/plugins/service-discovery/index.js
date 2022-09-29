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
var ServiceDiscoveryOriginal = /** @class */ (function (_super) {
    __extends(ServiceDiscoveryOriginal, _super);
    function ServiceDiscoveryOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscoveryOriginal.prototype.getNetworkServices = function (service) { return cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscoveryOriginal.pluginName = "ServiceDiscovery";
    ServiceDiscoveryOriginal.plugin = "cordova-plugin-discovery";
    ServiceDiscoveryOriginal.pluginRef = "serviceDiscovery";
    ServiceDiscoveryOriginal.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscoveryOriginal.platforms = ["Android", "iOS"];
    return ServiceDiscoveryOriginal;
}(AwesomeCordovaNativePlugin));
var ServiceDiscovery = new ServiceDiscoveryOriginal();
export { ServiceDiscovery };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VydmljZS1kaXNjb3ZlcnkvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEJ0RCxvQ0FBMEI7Ozs7SUFROUQsNkNBQWtCLGFBQUMsT0FBZTs7Ozs7OzJCQXZDcEM7RUErQnNDLDBCQUEwQjtTQUFuRCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgU2VydmljZURpc2NvdmVyeVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogU2ltcGxlIHBsdWdpbiB0byBnZXQgYW55IFNTRFAgLyBVUG5QIC8gRExOQSBzZXJ2aWNlIG9uIGEgbG9jYWwgbmV0d29ya1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTZXJ2aWNlRGlzY292ZXJ5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NlcnZpY2UtZGlzY292ZXJ5JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlRGlzY292ZXJ5OiBTZXJ2aWNlRGlzY292ZXJ5KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuc2VydmljZURpc2NvdmVyeS5nZXROZXR3b3JrU2VydmljZXMoJ3NzZHA6YWxsJylcclxuICogICAudGhlbihkZXZpY2VzID0+IGNvbnNvbGUubG9nKGRldmljZXMpKVxyXG4gKiAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NlcnZpY2VEaXNjb3ZlcnknLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRpc2NvdmVyeScsXHJcbiAgcGx1Z2luUmVmOiAnc2VydmljZURpc2NvdmVyeScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zY290dGRlcm1vdHQvY29yZG92YS1wbHVnaW4tZGlzY292ZXJ5JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2VydmljZURpc2NvdmVyeSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBGaW5kcyBhbmQgcmV0dXJucyBtZXRhZGF0YSBhYm91dCBkZXZpY2VzIGRpc2NvdmVyZWQgb24gdGhlIG5ldHdvcmsgdmlhIFNTRFAgLyBVUG5QIC8gRExOQVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNlcnZpY2Uge3N0cmluZ30gVGhlIHNlcnZpY2UgbmFtZSB0byBkaXNjb3ZlclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXROZXR3b3JrU2VydmljZXMoc2VydmljZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19