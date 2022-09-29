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
var LocalBackupOriginal = /** @class */ (function (_super) {
    __extends(LocalBackupOriginal, _super);
    function LocalBackupOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackupOriginal.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackupOriginal.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackupOriginal.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackupOriginal.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackupOriginal.pluginName = "LocalBackup";
    LocalBackupOriginal.plugin = "cordova-plugin-local-backup";
    LocalBackupOriginal.pluginRef = "LocalBackup";
    LocalBackupOriginal.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackupOriginal.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackupOriginal.platforms = ["Android", "iOS"];
    return LocalBackupOriginal;
}(AwesomeCordovaNativePlugin));
var LocalBackup = new LocalBackupOriginal();
export { LocalBackup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtYmFja3VwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCM0QsK0JBQTBCOzs7O0lBRXpELDRCQUFNLGFBQUMsSUFBUztJQUtoQiwwQkFBSTtJQUtKLDRCQUFNO0lBS04sNEJBQU07Ozs7Ozs7c0JBakRSO0VBZ0NpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBMb2NhbEJhY2t1cFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gdG8gY3JlYXRlIGxvY2FsIGJhY2t1cFxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBMb2NhbEJhY2t1cCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9sb2NhbC1iYWNrdXAvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb2NhbEJhY2t1cDogTG9jYWxCYWNrdXApIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5sb2NhbEJhY2t1cC5jcmVhdGUoe2RhdGE6IHtrZXk6ICd2YWx1ZSd9fSlcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0xvY2FsQmFja3VwJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxyXG4gIHBsdWdpblJlZjogJ0xvY2FsQmFja3VwJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL01heGltQmVsb3YvY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWxvY2FsLWJhY2t1cCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIExvY2FsQmFja3VwIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjcmVhdGUoZGF0YTogYW55KTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgcmVhZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGV4aXN0cygpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICByZW1vdmUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==