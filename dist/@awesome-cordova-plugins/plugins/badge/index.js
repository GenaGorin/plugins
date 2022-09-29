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
var BadgeOriginal = /** @class */ (function (_super) {
    __extends(BadgeOriginal, _super);
    function BadgeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BadgeOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    BadgeOriginal.prototype.set = function (badgeNumber) { return cordova(this, "set", {}, arguments); };
    BadgeOriginal.prototype.get = function () { return cordova(this, "get", {}, arguments); };
    BadgeOriginal.prototype.increase = function (increaseBy) { return cordova(this, "increase", {}, arguments); };
    BadgeOriginal.prototype.decrease = function (decreaseBy) { return cordova(this, "decrease", {}, arguments); };
    BadgeOriginal.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    BadgeOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", {}, arguments); };
    BadgeOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", {}, arguments); };
    BadgeOriginal.pluginName = "Badge";
    BadgeOriginal.plugin = "cordova-plugin-badge";
    BadgeOriginal.pluginRef = "cordova.plugins.notification.badge";
    BadgeOriginal.repo = "https://github.com/katzer/cordova-plugin-badge";
    BadgeOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return BadgeOriginal;
}(AwesomeCordovaNativePlugin));
var Badge = new BadgeOriginal();
export { Badge };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFkZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0NqRSx5QkFBMEI7Ozs7SUFPbkQscUJBQUs7SUFXTCxtQkFBRyxhQUFDLFdBQW1CO0lBVXZCLG1CQUFHO0lBV0gsd0JBQVEsYUFBQyxVQUFrQjtJQVczQix3QkFBUSxhQUFDLFVBQWtCO0lBVTNCLDJCQUFXO0lBVVgsNkJBQWE7SUFVYixpQ0FBaUI7Ozs7OztnQkFqSG5CO0VBaUMyQiwwQkFBMEI7U0FBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCYWRnZVxyXG4gKiBAcHJlbWllciBiYWRnZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIGVzc2VudGlhbCBwdXJwb3NlIG9mIGJhZGdlIG51bWJlcnMgaXMgdG8gZW5hYmxlIGFuIGFwcGxpY2F0aW9uIHRvIGluZm9ybSBpdHMgdXNlcnMgdGhhdCBpdCBoYXMgc29tZXRoaW5nIGZvciB0aGVtIOKAlCBmb3IgZXhhbXBsZSwgdW5yZWFkIG1lc3NhZ2VzIOKAlCB3aGVuIHRoZSBhcHBsaWNhdGlvbiBpc27igJl0IHJ1bm5pbmcgaW4gdGhlIGZvcmVncm91bmQuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1iYWRnZS4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0JhZGdlIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20va2F0emVyL2NvcmRvdmEtcGx1Z2luLWJhZGdlKS5cclxuICpcclxuICogQW5kcm9pZCBOb3RlOiBCYWRnZXMgaGF2ZSBoaXN0b3JpY2FsbHkgb25seSBiZWVuIGEgZmVhdHVyZSBpbXBsZW1lbnRlZCBieSB0aGlyZCBwYXJ0eSBsYXVuY2hlcnMgYW5kIG5vdCB2aXNpYmxlIHVubGVzcyBvbmUgb2YgdGhvc2UgbGF1bmNoZXJzIHdhcyBiZWluZyB1c2VkIChFLkcuIFNhbXN1bmcgb3IgTm92YSBMYXVuY2hlcikgYW5kIGlmIGVuYWJsZWQgYnkgdGhlIHVzZXIuIEFzIG9mIEFuZHJvaWQgOCAoT3JlbyksIFtub3RpZmljYXRpb24gYmFkZ2VzXShodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS90cmFpbmluZy9ub3RpZnktdXNlci9iYWRnZXMpIHdlcmUgaW50cm9kdWNlZCBvZmZpY2lhbGx5IHRvIHJlZmxlY3QgdW5yZWFkIG5vdGlmaWNhdGlvbnMuIFRoaXMgcGx1Z2luIGlzIHVubGlrZWx5IHRvIHdvcmsgYXMgZXhwZWN0ZWQgb24gZGV2aWNlcyBydW5uaW5nIEFuZHJvaWQgOCBvciBuZXdlci4gUGxlYXNlIHNlZSB0aGUgW2xvY2FsIG5vdGlmaWNhdGlvbnMgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tbG9jYWwtbm90aWZpY2F0aW9ucykgZm9yIG1vcmUgaW5mb3JtYXRpb24gb24gYmFkZ2UgdXNlIHdpdGggbm90aWZpY2F0aW9ucy5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmFkZ2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYmFkZ2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWRnZTogQmFkZ2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5iYWRnZS5zZXQoMTApO1xyXG4gKiB0aGlzLmJhZGdlLmluY3JlYXNlKDEpO1xyXG4gKiB0aGlzLmJhZGdlLmNsZWFyKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JhZGdlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1iYWRnZScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLm5vdGlmaWNhdGlvbi5iYWRnZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tYmFkZ2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFkZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2xlYXIgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbGVhcigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgYmFkZ2Ugb2YgdGhlIGFwcCBpY29uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtudW1iZXJ9IGJhZGdlTnVtYmVyICBUaGUgbmV3IGJhZGdlIG51bWJlci5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXQoYmFkZ2VOdW1iZXI6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGJhZGdlIG9mIHRoZSBhcHAgaWNvbi5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSW5jcmVhc2UgdGhlIGJhZGdlIG51bWJlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmNyZWFzZUJ5ICBDb3VudCB0byBhZGQgdG8gdGhlIGN1cnJlbnQgYmFkZ2UgbnVtYmVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW5jcmVhc2UoaW5jcmVhc2VCeTogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlY3JlYXNlIHRoZSBiYWRnZSBudW1iZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZGVjcmVhc2VCeSAgQ291bnQgdG8gc3VidHJhY3QgZnJvbSB0aGUgY3VycmVudCBiYWRnZSBudW1iZXJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWNyZWFzZShkZWNyZWFzZUJ5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgc3VwcG9ydCB0byBzaG93IGJhZGdlcy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGlzU3VwcG9ydGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXRlcm1pbmUgaWYgdGhlIGFwcCBoYXMgcGVybWlzc2lvbiB0byBzaG93IGJhZGdlcy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhhc1Blcm1pc3Npb24oKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIHBlcm1pc3Npb24gdG8gc2V0IGJhZGdlIG5vdGlmaWNhdGlvbnNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==