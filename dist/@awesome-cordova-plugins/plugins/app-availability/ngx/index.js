import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AppAvailability = /** @class */ (function (_super) {
    __extends(AppAvailability, _super);
    function AppAvailability() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailability.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailability.pluginName = "AppAvailability";
    AppAvailability.plugin = "cordova-plugin-appavailability";
    AppAvailability.pluginRef = "appAvailability";
    AppAvailability.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailability.platforms = ["Android", "iOS"];
    AppAvailability.decorators = [
        { type: Injectable }
    ];
    return AppAvailability;
}(AwesomeCordovaNativePlugin));
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWF2YWlsYWJpbGl0eS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF3Q3ZELG1DQUEwQjs7OztJQVE3RCwrQkFBSyxhQUFDLEdBQVc7Ozs7Ozs7Z0JBVGxCLFVBQVU7OzBCQXhDWDtFQXlDcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIEF2YWlsYWJpbGl0eVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBjaGVjayBpZiBhbiBhcHAgaXMgaW5zdGFsbGVkIG9uIHRoZSB1c2VyJ3MgZGV2aWNlLiBJdCByZXF1aXJlcyBhbiBVUkkgU2NoZW1lIChlLmcuIHR3aXR0ZXI6Ly8pIG9uIGlPUyBvciBhIFBhY2thZ2UgTmFtZSAoZS5nIGNvbS50d2l0dGVyLmFuZHJvaWQpIG9uIEFuZHJvaWQuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1hcHBhdmFpbGFiaWxpdHkuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtBcHBBdmFpbGFiaWxpdHkgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9vaGgyYWhoL0FwcEF2YWlsYWJpbGl0eSkuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFwcEF2YWlsYWJpbGl0eSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hcHAtYXZhaWxhYmlsaXR5L25neCc7XHJcbiAqIGltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnaW9uaWMtYW5ndWxhcic7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwQXZhaWxhYmlsaXR5OiBBcHBBdmFpbGFiaWxpdHksIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGxldCBhcHA7XHJcbiAqXHJcbiAqIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdpb3MnKSkge1xyXG4gKiAgIGFwcCA9ICd0d2l0dGVyOi8vJztcclxuICogfSBlbHNlIGlmICh0aGlzLnBsYXRmb3JtLmlzKCdhbmRyb2lkJykpIHtcclxuICogICBhcHAgPSAnY29tLnR3aXR0ZXIuYW5kcm9pZCc7XHJcbiAqIH1cclxuICpcclxuICogdGhpcy5hcHBBdmFpbGFiaWxpdHkuY2hlY2soYXBwKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgKHllczogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXBwICsgJyBpcyBhdmFpbGFibGUnKSxcclxuICogICAgIChubzogYm9vbGVhbikgPT4gY29uc29sZS5sb2coYXBwICsgJyBpcyBOT1QgYXZhaWxhYmxlJylcclxuICogICApO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBcHBBdmFpbGFiaWxpdHknLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcGF2YWlsYWJpbGl0eScsXHJcbiAgcGx1Z2luUmVmOiAnYXBwQXZhaWxhYmlsaXR5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL29oaDJhaGgvQXBwQXZhaWxhYmlsaXR5JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQXBwQXZhaWxhYmlsaXR5IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiBhbiBhcHAgaXMgYXZhaWxhYmxlIG9uIGRldmljZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGFwcCBQYWNrYWdlIG5hbWUgb24gYW5kcm9pZCwgb3IgVVJJIHNjaGVtZSBvbiBpT1NcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hlY2soYXBwOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19