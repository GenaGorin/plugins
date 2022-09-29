import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var PowerOptimization = /** @class */ (function (_super) {
    __extends(PowerOptimization, _super);
    function PowerOptimization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerOptimization.prototype.IsIgnoringBatteryOptimizations = function () { return cordova(this, "IsIgnoringBatteryOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizations = function () { return cordova(this, "RequestOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizationsMenu = function () { return cordova(this, "RequestOptimizationsMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.IsIgnoringDataSaver = function () { return cordova(this, "IsIgnoringDataSaver", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestDataSaverMenu = function () { return cordova(this, "RequestDataSaverMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.HaveProtectedAppsCheck = function () { return cordova(this, "HaveProtectedAppsCheck", { "sync": true }, arguments); };
    PowerOptimization.prototype.ProtectedAppCheck = function () { return cordova(this, "ProtectedAppCheck", { "sync": true }, arguments); };
    PowerOptimization.pluginName = "PowerOptimization";
    PowerOptimization.plugin = "cordova-plugin-power-optimization";
    PowerOptimization.pluginRef = "cordova.plugins.PowerOptimization";
    PowerOptimization.repo = "https://github.com/snt1017/cordova-plugin-power-optimization";
    PowerOptimization.platforms = ["Android"];
    PowerOptimization.decorators = [
        { type: Injectable }
    ];
    return PowerOptimization;
}(AwesomeCordovaNativePlugin));
export { PowerOptimization };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcG93ZXItb3B0aW1pemF0aW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQTRCckQscUNBQTBCOzs7O0lBUS9ELDBEQUE4QjtJQVU5QixnREFBb0I7SUFVcEIsb0RBQXdCO0lBVXhCLCtDQUFtQjtJQVVuQixnREFBb0I7SUFVcEIsa0RBQXNCO0lBVXRCLDZDQUFpQjs7Ozs7OztnQkFyRWxCLFVBQVU7OzRCQTVCWDtFQTZCdUMsMEJBQTBCO1NBQXBELGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIFBvd2VyIE9wdGltaXphdGlvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQW5kcm9pZCBDdXN0b20gUm9tcyBtYWRlIHNvbWV0aW1lcyB5b3VyIGFwcHMgdW5mdW5jdGlvbmFsIGR1ZSB0byBiZWluZyBraWxsZWQgaW4gdGhlIGJhY2tncm91bmQsIG5vdGlmaWNhdGlvbiBtZXNzYWdlcyBkbyBub3QgYXBwZWFyaW5nIG9yIHlvdXIgc2VydmljZXMgYmVpbmcga2lsbGVkIGJ5IGFncmVzc2l2ZSBwb3dlciBzYXZpbmcgbW9kZS5cclxuICogVGhlIFBvd2VyIE9wdGltaXphdGlvbiBwbHVnaW4gZ2l2ZSB5b3UgYW5kcm9pZCBQb3dlck1hbmFnZXIgbWV0aG9kcyB3aXRoIGNvcmRvdmEuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFBvd2VyT3B0aW1pemF0aW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3Bvd2VyLW9wdGltaXphdGlvbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvd2VyT3B0aW1pemF0aW9uOiBQb3dlck9wdGltaXphdGlvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnBvd2VyT3B0aW1pemF0aW9uLklzSWdub3JpbmdCYXR0ZXJ5T3B0aW1pemF0aW9ucygpXHJcbiAqICAgLnRoZW4ob25TdWNjZXNzKVxyXG4gKiAgIC5jYXRjaChvbkVycm9yKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUG93ZXJPcHRpbWl6YXRpb24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXBvd2VyLW9wdGltaXphdGlvbicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlBvd2VyT3B0aW1pemF0aW9uJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQb3dlck9wdGltaXphdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVjayBpZiB0aGUgYmF0dGVyeSBvcHRpbWl6YXRpb24gaXMgaWdub3JpbmdcclxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIElzSWdub3JpbmdCYXR0ZXJ5T3B0aW1pemF0aW9ucygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZXF1ZXN0IHBlcm1pc3NvbiB0byBpZ25vcmUgb3B0aW1pemF0aW9uczpcclxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIFJlcXVlc3RPcHRpbWl6YXRpb25zKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdvIHRvIGJhdHRlcnkgb3B0aW1pemF0aW9ucyBjb25maWd1cmF0aW9ucyBtZW51OlxyXG4gICAqIEZvciBtb3JlIGluZm8sIHBsZWFzZSBjaGVjayBodHRwczovL2dpdGh1Yi5jb20vc250MTAxNy9jb3Jkb3ZhLXBsdWdpbi1wb3dlci1vcHRpbWl6YXRpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgUmVxdWVzdE9wdGltaXphdGlvbnNNZW51KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGhhdmUgYW55IGRhdGEgcmVzdHJpY3Rpb25zIGluIGJhY2tncm91bmQ6XHJcbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIGNoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9zbnQxMDE3L2NvcmRvdmEtcGx1Z2luLXBvd2VyLW9wdGltaXphdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBJc0lnbm9yaW5nRGF0YVNhdmVyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEdvIHRvIGRhdGEgcmVzdHJpY3Rpb25zIGluIGJhY2tncm91bmQgY29uZmlndXJhdGlvbnMgbWVudTpcclxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIFJlcXVlc3REYXRhU2F2ZXJNZW51KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGhhdmUgYW5vdGhlciBiYXR0ZXJ5IHJlc3RyaWN0aW9uIGlzIHByZXNlbnQgaW50byBwaG9uZSAobGlrZSBodWF3ZWksIHhpYW9taSwgZXRjKTpcclxuICAgKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2UgY2hlY2sgaHR0cHM6Ly9naXRodWIuY29tL3NudDEwMTcvY29yZG92YS1wbHVnaW4tcG93ZXItb3B0aW1pemF0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIEhhdmVQcm90ZWN0ZWRBcHBzQ2hlY2soKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogR28gdG8gY29uZmlndXJhdGlvbnMgbWVudSBpZiBhbm90aGVyIGJhdHRlcnkgcmVzdHJpY3Rpb24gaXMgcHJlc2VudCBpbnRvIHBob25lIChsaWtlIGh1YXdlaSwgeGlhb21pLCBldGMpLiBZb3UgY2FuIHNlbmQgdHJ1ZSBpbnRvIHBhcmFtcyBpZiB5b3Ugd2FudCB0byBmb3JjZSBzaG93IHRoZSBtZW51IChpcyBvbmx5IHNob3cgdGhlIGZpc3QgdGltZSB3aXRob3V0IHBhcmFtcyk6XHJcbiAgICogRm9yIG1vcmUgaW5mbywgcGxlYXNlIGNoZWNrIGh0dHBzOi8vZ2l0aHViLmNvbS9zbnQxMDE3L2NvcmRvdmEtcGx1Z2luLXBvd2VyLW9wdGltaXphdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBQcm90ZWN0ZWRBcHBDaGVjaygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=