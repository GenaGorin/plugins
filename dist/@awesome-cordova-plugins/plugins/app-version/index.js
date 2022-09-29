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
var AppVersionOriginal = /** @class */ (function (_super) {
    __extends(AppVersionOriginal, _super);
    function AppVersionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppVersionOriginal.prototype.getAppName = function () { return cordova(this, "getAppName", {}, arguments); };
    AppVersionOriginal.prototype.getPackageName = function () { return cordova(this, "getPackageName", {}, arguments); };
    AppVersionOriginal.prototype.getVersionCode = function () { return cordova(this, "getVersionCode", {}, arguments); };
    AppVersionOriginal.prototype.getVersionNumber = function () { return cordova(this, "getVersionNumber", {}, arguments); };
    AppVersionOriginal.pluginName = "AppVersion";
    AppVersionOriginal.plugin = "cordova-plugin-app-version";
    AppVersionOriginal.pluginRef = "cordova.getAppVersion";
    AppVersionOriginal.repo = "https://github.com/whiteoctober/cordova-plugin-app-version";
    AppVersionOriginal.platforms = ["Android", "iOS", "Windows"];
    return AppVersionOriginal;
}(AwesomeCordovaNativePlugin));
var AppVersion = new AppVersionOriginal();
export { AppVersion };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLXZlcnNpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUM1RCw4QkFBMEI7Ozs7SUFPeEQsK0JBQVU7SUFVVixtQ0FBYztJQVlkLG1DQUFjO0lBVWQscUNBQWdCOzs7Ozs7cUJBekVsQjtFQWtDZ0MsMEJBQTBCO1NBQTdDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQXBwIFZlcnNpb25cclxuICogQHByZW1pZXIgYXBwLXZlcnNpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFJlYWRzIHRoZSB2ZXJzaW9uIG9mIHlvdXIgYXBwIGZyb20gdGhlIHRhcmdldCBidWlsZCBzZXR0aW5ncy5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1hcHAtdmVyc2lvbmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIEFwcCBWZXJzaW9uIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS93aGl0ZW9jdG9iZXIvY29yZG92YS1wbHVnaW4tYXBwLXZlcnNpb24pLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBcHBWZXJzaW9uIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC12ZXJzaW9uL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVmVyc2lvbjogQXBwVmVyc2lvbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0QXBwTmFtZSgpO1xyXG4gKiB0aGlzLmFwcFZlcnNpb24uZ2V0UGFja2FnZU5hbWUoKTtcclxuICogdGhpcy5hcHBWZXJzaW9uLmdldFZlcnNpb25Db2RlKCk7XHJcbiAqIHRoaXMuYXBwVmVyc2lvbi5nZXRWZXJzaW9uTnVtYmVyKCk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FwcFZlcnNpb24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLmdldEFwcFZlcnNpb24nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vd2hpdGVvY3RvYmVyL2NvcmRvdmEtcGx1Z2luLWFwcC12ZXJzaW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBWZXJzaW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIG5hbWUgb2YgdGhlIGFwcCwgZS5nLjogXCJNeSBBd2Vzb21lIEFwcFwiXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRBcHBOYW1lKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBwYWNrYWdlIG5hbWUgb2YgdGhlIGFwcCwgZS5nLjogXCJjb20uZXhhbXBsZS5teWF3ZXNvbWVhcHBcIlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0UGFja2FnZU5hbWUoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGJ1aWxkIGlkZW50aWZpZXIgb2YgdGhlIGFwcC5cclxuICAgKiBJbiBpT1MgYSBzdHJpbmcgd2l0aCB0aGUgYnVpbGQgdmVyc2lvbiBsaWtlIFwiMS42MDk1XCJcclxuICAgKiBJbiBBbmRyb2lkIGEgbnVtYmVyIGdlbmVyYXRlZCBmcm9tIHRoZSB2ZXJzaW9uIHN0cmluZywgbGlrZSAxMDIwMyBmb3IgdmVyc2lvbiBcIjEuMi4zXCJcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZyB8IG51bWJlcj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldFZlcnNpb25Db2RlKCk6IFByb21pc2U8c3RyaW5nIHwgbnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSB2ZXJzaW9uIG9mIHRoZSBhcHAsIGUuZy46IFwiMS4yLjNcIlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0VmVyc2lvbk51bWJlcigpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=