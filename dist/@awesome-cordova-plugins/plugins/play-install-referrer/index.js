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
var PlayInstallReferrerOriginal = /** @class */ (function (_super) {
    __extends(PlayInstallReferrerOriginal, _super);
    function PlayInstallReferrerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrerOriginal.prototype.getReferrer = function () { return cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrerOriginal.pluginName = "PlayInstallReferrer";
    PlayInstallReferrerOriginal.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrerOriginal.pluginRef = "installReferrer";
    PlayInstallReferrerOriginal.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrerOriginal.platforms = ["Android"];
    return PlayInstallReferrerOriginal;
}(AwesomeCordovaNativePlugin));
var PlayInstallReferrer = new PlayInstallReferrerOriginal();
export { PlayInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGxheS1pbnN0YWxsLXJlZmVycmVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVVuRCx1Q0FBMEI7Ozs7SUFFakUseUNBQVc7Ozs7Ozs4QkFiYjtFQVd5QywwQkFBMEI7U0FBdEQsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1BsYXlJbnN0YWxsUmVmZXJyZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBsYXktaW5zdGFsbHJlZmVycmVyJyxcclxuICBwbHVnaW5SZWY6ICdpbnN0YWxsUmVmZXJyZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc3dheWFuZ2ppdC9jb3Jkb3ZhLXBsdWdpbi1wbGF5LWluc3RhbGxyZWZlcnJlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUGxheUluc3RhbGxSZWZlcnJlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UmVmZXJyZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19