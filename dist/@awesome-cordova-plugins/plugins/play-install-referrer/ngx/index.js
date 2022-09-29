import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var PlayInstallReferrer = /** @class */ (function (_super) {
    __extends(PlayInstallReferrer, _super);
    function PlayInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrer.prototype.getReferrer = function () { return cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrer.pluginName = "PlayInstallReferrer";
    PlayInstallReferrer.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrer.pluginRef = "installReferrer";
    PlayInstallReferrer.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrer.platforms = ["Android"];
    PlayInstallReferrer.decorators = [
        { type: Injectable }
    ];
    return PlayInstallReferrer;
}(AwesomeCordovaNativePlugin));
export { PlayInstallReferrer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGxheS1pbnN0YWxsLXJlZmVycmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQVVuRCx1Q0FBMEI7Ozs7SUFFakUseUNBQVc7Ozs7Ozs7Z0JBSFosVUFBVTs7OEJBVlg7RUFXeUMsMEJBQTBCO1NBQXRELG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQbGF5SW5zdGFsbFJlZmVycmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wbGF5LWluc3RhbGxyZWZlcnJlcicsXHJcbiAgcGx1Z2luUmVmOiAnaW5zdGFsbFJlZmVycmVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3N3YXlhbmdqaXQvY29yZG92YS1wbHVnaW4tcGxheS1pbnN0YWxscmVmZXJyZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBsYXlJbnN0YWxsUmVmZXJyZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFJlZmVycmVyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==