import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Insomnia = /** @class */ (function (_super) {
    __extends(Insomnia, _super);
    function Insomnia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Insomnia.prototype.keepAwake = function () { return cordova(this, "keepAwake", {}, arguments); };
    Insomnia.prototype.allowSleepAgain = function () { return cordova(this, "allowSleepAgain", {}, arguments); };
    Insomnia.pluginName = "Insomnia";
    Insomnia.plugin = "cordova-plugin-insomnia";
    Insomnia.pluginRef = "plugins.insomnia";
    Insomnia.repo = "https://github.com/EddyVerbruggen/Insomnia-PhoneGap-Plugin";
    Insomnia.platforms = ["Android", "Browser", "Firefox OS", "iOS", "Windows", "Windows Phone 8"];
    Insomnia.decorators = [
        { type: Injectable }
    ];
    return Insomnia;
}(AwesomeCordovaNativePlugin));
export { Insomnia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW5zb21uaWEvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUM5RCw0QkFBMEI7Ozs7SUFPdEQsNEJBQVM7SUFVVCxrQ0FBZTs7Ozs7OztnQkFsQmhCLFVBQVU7O21CQW5DWDtFQW9DOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgSW5zb21uaWFcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFByZXZlbnQgdGhlIHNjcmVlbiBvZiB0aGUgbW9iaWxlIGRldmljZSBmcm9tIGZhbGxpbmcgYXNsZWVwLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbnNvbW5pYSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbnNvbW5pYS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGluc29tbmlhOiBJbnNvbW5pYSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmluc29tbmlhLmtlZXBBd2FrZSgpXHJcbiAqICAgLnRoZW4oXHJcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxyXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ2Vycm9yJylcclxuICogICApO1xyXG4gKlxyXG4gKiB0aGlzLmluc29tbmlhLmFsbG93U2xlZXBBZ2FpbigpXHJcbiAqICAgLnRoZW4oXHJcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnc3VjY2VzcycpLFxyXG4gKiAgICAgKCkgPT4gY29uc29sZS5sb2coJ2Vycm9yJylcclxuICogICApO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdJbnNvbW5pYScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4taW5zb21uaWEnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuaW5zb21uaWEnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vSW5zb21uaWEtUGhvbmVHYXAtUGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ0ZpcmVmb3ggT1MnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluc29tbmlhIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEtlZXBzIGF3YWtlIHRoZSBhcHBsaWNhdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAga2VlcEF3YWtlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgdGhlIGFwcGxpY2F0aW9uIHRvIHNsZWVwIGFnYWluXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhbGxvd1NsZWVwQWdhaW4oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19