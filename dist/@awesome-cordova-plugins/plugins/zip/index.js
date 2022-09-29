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
var ZipOriginal = /** @class */ (function (_super) {
    __extends(ZipOriginal, _super);
    function ZipOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZipOriginal.prototype.unzip = function (sourceZip, destFolder, onProgress) { return cordova(this, "unzip", {}, arguments); };
    ZipOriginal.pluginName = "Zip";
    ZipOriginal.plugin = "cordova-plugin-zip";
    ZipOriginal.pluginRef = "zip";
    ZipOriginal.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    ZipOriginal.platforms = ["Android", "iOS"];
    return ZipOriginal;
}(AwesomeCordovaNativePlugin));
var Zip = new ZipOriginal();
export { Zip };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemlwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCbkUsdUJBQTBCOzs7O0lBU2pELG1CQUFLLGFBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLFVBQXFCOzs7Ozs7Y0F2Q3BFO0VBOEJ5QiwwQkFBMEI7U0FBdEMsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBDb3Jkb3ZhLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgWmlwXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBBIENvcmRvdmEgcGx1Z2luIHRvIHVuemlwIGZpbGVzIGluIEFuZHJvaWQgYW5kIGlPUy5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgWmlwIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3ppcC9ueCdcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IHJlc3VsdCA9IGF3YWl0IFppcC51bnppcCgncGF0aC90by9zb3VyY2UuemlwJywgJ3BhdGgvdG8vZGVzdCcsIChwcm9ncmVzcykgPT5cclxuICogICAgIGNvbnNvbGUubG9nKCdVbnppcHBpbmcsICcgKyBNYXRoLnJvdW5kKChwcm9ncmVzcy5sb2FkZWQgLyBwcm9ncmVzcy50b3RhbCkgKiAxMDApICsgJyUnKVxyXG4gKiApO1xyXG4gKlxyXG4gKiBpZihyZXN1bHQgPT09IDApIGNvbnNvbGUubG9nKCdTVUNDRVNTJyk7XHJcbiAqIGlmKHJlc3VsdCA9PT0gLTEpIGNvbnNvbGUubG9nKCdGQUlMRUQnKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnWmlwJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi16aXAnLFxyXG4gIHBsdWdpblJlZjogJ3ppcCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9Nb2JpbGVDaHJvbWVBcHBzL2NvcmRvdmEtcGx1Z2luLXppcCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFppcCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBFeHRyYWN0cyBmaWxlcyBmcm9tIGEgWklQIGFyY2hpdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlWmlwICBTb3VyY2UgWklQIGZpbGVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGVzdEZvbGRlciBEZXN0aW5hdGlvbiBmb2xkZXJcclxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblByb2dyZXNzICBvcHRpb25hbCBjYWxsYmFjayB0byBiZSBjYWxsZWQgb24gcHJvZ3Jlc3MgdXBkYXRlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgbnVtYmVyLiAwIGlzIHN1Y2Nlc3MsIC0xIGlzIGVycm9yXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHVuemlwKHNvdXJjZVppcDogc3RyaW5nLCBkZXN0Rm9sZGVyOiBzdHJpbmcsIG9uUHJvZ3Jlc3M/OiBGdW5jdGlvbik6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==