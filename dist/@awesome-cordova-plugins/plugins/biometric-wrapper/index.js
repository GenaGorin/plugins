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
var BiometricWrapperOriginal = /** @class */ (function (_super) {
    __extends(BiometricWrapperOriginal, _super);
    function BiometricWrapperOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapperOriginal.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapperOriginal.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapperOriginal.pluginName = "BiometricWrapper";
    BiometricWrapperOriginal.plugin = "cordova-plugin-biometric";
    BiometricWrapperOriginal.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapperOriginal.repo = "";
    BiometricWrapperOriginal.install = "";
    BiometricWrapperOriginal.installVariables = [];
    BiometricWrapperOriginal.platforms = ["Android"];
    return BiometricWrapperOriginal;
}(AwesomeCordovaNativePlugin));
var BiometricWrapper = new BiometricWrapperOriginal();
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvbWV0cmljLXdyYXBwZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0N0RCxvQ0FBMEI7Ozs7SUFROUQsdUNBQVksYUFBQyxJQUFTO0lBV3RCLDhDQUFtQixhQUFDLElBQVM7Ozs7Ozs7OzJCQXREL0I7RUFtQ3NDLDBCQUEwQjtTQUFuRCxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgQmlvbWV0cmljV3JhcHBlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gY2FwdHVyZSBiaW9tZXRyaWMoSXJpcyBhbmQgRmluZ2VycHJpbnQpIGFuZCB2YWxpZGF0ZSB0aGUgdXNlci5cclxuICogTWF5IGJlIHVzZWQgaW4gQmFua2luZyBkb21haW5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmlvbWV0cmljV3JhcHBlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9iaW9tZXRyaWMtd3JhcHBlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJpb21ldHJpY1dyYXBwZXI6IEJpb21ldHJpY1dyYXBwZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW9tZXRyaWNXcmFwcGVyLmFjdGl2YXRlSXJpcyh7J1BJRF9YTUwnOiAnPHBpZC14bWwvPid9KVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Jpb21ldHJpY1dyYXBwZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb21ldHJpYycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJpb21ldHJpY1dyYXBwZXInLFxyXG4gIHJlcG86ICcnLFxyXG4gIGluc3RhbGw6ICcnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJpb21ldHJpY1dyYXBwZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBhY3RpdmF0ZSBpcmlzIGFjdGl2aXR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXJnc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBpcmlzIGRhdGEgY2FwdHVyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWN0aXZhdGVJcmlzKGFyZ3M6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGFjdGl2YXRlIGZpbmdlcnByaW50IGFjdGl2aXR5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXJnc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBGUCBkYXRhIGNhcHR1cmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFjdGl2YXRlRmluZ2VycHJpbnQoYXJnczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19