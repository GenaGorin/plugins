import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var LocalBackup = /** @class */ (function (_super) {
    __extends(LocalBackup, _super);
    function LocalBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackup.prototype.create = function (data) { return cordova(this, "create", {}, arguments); };
    LocalBackup.prototype.read = function () { return cordova(this, "read", {}, arguments); };
    LocalBackup.prototype.exists = function () { return cordova(this, "exists", {}, arguments); };
    LocalBackup.prototype.remove = function () { return cordova(this, "remove", {}, arguments); };
    LocalBackup.pluginName = "LocalBackup";
    LocalBackup.plugin = "cordova-plugin-local-backup";
    LocalBackup.pluginRef = "LocalBackup";
    LocalBackup.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackup.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackup.platforms = ["Android", "iOS"];
    LocalBackup.decorators = [
        { type: Injectable }
    ];
    return LocalBackup;
}(AwesomeCordovaNativePlugin));
export { LocalBackup };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG9jYWwtYmFja3VwL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCM0QsK0JBQTBCOzs7O0lBRXpELDRCQUFNLGFBQUMsSUFBUztJQUtoQiwwQkFBSTtJQUtKLDRCQUFNO0lBS04sNEJBQU07Ozs7Ozs7O2dCQWxCUCxVQUFVOztzQkEvQlg7RUFnQ2lDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExvY2FsQmFja3VwXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiB0byBjcmVhdGUgbG9jYWwgYmFja3VwXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IExvY2FsQmFja3VwIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2xvY2FsLWJhY2t1cC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvY2FsQmFja3VwOiBMb2NhbEJhY2t1cCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmxvY2FsQmFja3VwLmNyZWF0ZSh7ZGF0YToge2tleTogJ3ZhbHVlJ319KVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTG9jYWxCYWNrdXAnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxvY2FsLWJhY2t1cCcsXHJcbiAgcGx1Z2luUmVmOiAnTG9jYWxCYWNrdXAnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTWF4aW1CZWxvdi9jb3Jkb3ZhLXBsdWdpbi1sb2NhbC1iYWNrdXAnLFxyXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tbG9jYWwtYmFja3VwJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG9jYWxCYWNrdXAgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGNyZWF0ZShkYXRhOiBhbnkpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICByZWFkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZXhpc3RzKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlbW92ZSgpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19