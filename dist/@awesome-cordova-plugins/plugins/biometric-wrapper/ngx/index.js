import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var BiometricWrapper = /** @class */ (function (_super) {
    __extends(BiometricWrapper, _super);
    function BiometricWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapper.prototype.activateIris = function (args) { return cordova(this, "activateIris", {}, arguments); };
    BiometricWrapper.prototype.activateFingerprint = function (args) { return cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapper.pluginName = "BiometricWrapper";
    BiometricWrapper.plugin = "cordova-plugin-biometric";
    BiometricWrapper.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapper.repo = "";
    BiometricWrapper.install = "";
    BiometricWrapper.installVariables = [];
    BiometricWrapper.platforms = ["Android"];
    BiometricWrapper.decorators = [
        { type: Injectable }
    ];
    return BiometricWrapper;
}(AwesomeCordovaNativePlugin));
export { BiometricWrapper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvbWV0cmljLXdyYXBwZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0N0RCxvQ0FBMEI7Ozs7SUFROUQsdUNBQVksYUFBQyxJQUFTO0lBV3RCLDhDQUFtQixhQUFDLElBQVM7Ozs7Ozs7OztnQkFwQjlCLFVBQVU7OzJCQWxDWDtFQW1Dc0MsMEJBQTBCO1NBQW5ELGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCaW9tZXRyaWNXcmFwcGVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBjYXB0dXJlIGJpb21ldHJpYyhJcmlzIGFuZCBGaW5nZXJwcmludCkgYW5kIHZhbGlkYXRlIHRoZSB1c2VyLlxyXG4gKiBNYXkgYmUgdXNlZCBpbiBCYW5raW5nIGRvbWFpblxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBCaW9tZXRyaWNXcmFwcGVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Jpb21ldHJpYy13cmFwcGVyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmlvbWV0cmljV3JhcHBlcjogQmlvbWV0cmljV3JhcHBlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJpb21ldHJpY1dyYXBwZXIuYWN0aXZhdGVJcmlzKHsnUElEX1hNTCc6ICc8cGlkLXhtbC8+J30pXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiApXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiApO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcblxyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmlvbWV0cmljV3JhcHBlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYmlvbWV0cmljJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQmlvbWV0cmljV3JhcHBlcicsXHJcbiAgcmVwbzogJycsXHJcbiAgaW5zdGFsbDogJycsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogW10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmlvbWV0cmljV3JhcHBlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGFjdGl2YXRlIGlyaXMgYWN0aXZpdHlcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhcmdzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGlyaXMgZGF0YSBjYXB0dXJlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhY3RpdmF0ZUlyaXMoYXJnczogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gYWN0aXZhdGUgZmluZ2VycHJpbnQgYWN0aXZpdHlcclxuICAgKlxyXG4gICAqIEBwYXJhbSBhcmdzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIEZQIGRhdGEgY2FwdHVyZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYWN0aXZhdGVGaW5nZXJwcmludChhcmdzOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=