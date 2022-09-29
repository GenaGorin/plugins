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
var TealiumAdIdentifierOriginal = /** @class */ (function (_super) {
    __extends(TealiumAdIdentifierOriginal, _super);
    function TealiumAdIdentifierOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifierOriginal.prototype.setPersistent = function (instanceName) { return cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifierOriginal.prototype.setVolatile = function (instanceName) { return cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifierOriginal.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifierOriginal.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifierOriginal.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifierOriginal.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifierOriginal.platforms = ["Android", "iOS"];
    TealiumAdIdentifierOriginal.install = "";
    return TealiumAdIdentifierOriginal;
}(AwesomeCordovaNativePlugin));
var TealiumAdIdentifier = new TealiumAdIdentifierOriginal();
export { TealiumAdIdentifier };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGVhbGl1bS1hZGlkZW50aWZpZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBa0NuRCx1Q0FBMEI7Ozs7SUFRakUsMkNBQWEsYUFBQyxZQUFvQjtJQVdsQyx5Q0FBVyxhQUFDLFlBQW9COzs7Ozs7OzhCQXJEbEM7RUFrQ3lDLDBCQUEwQjtTQUF0RCxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG4vKipcclxuICogQHBhaWRcclxuICogQG5hbWUgVGVhbGl1bUFkSWRlbnRpZmllclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBtb2R1bGUgZGVwZW5kcyBvbiB0aGUgW1RlYWxpdW0gQ29yZG92YSBQbHVnaW5dKGh0dHBzOi8vZ2l0aHViLmNvbS90ZWFsaXVtL2NvcmRvdmEtcGx1Z2luKS4gV2l0aG91dCBpdCwgdGhpcyBtb2R1bGUgd2lsbCBub3QgZG8gYW55dGhpbmcuXHJcbiAqIE1ha2VzIHRoZSBJREZBIGFuZCBHb29nbGUgQWQgSWRlbnRpZmllciBhdmFpbGFibGUgaW4gdGhlIFRlYWxpdW0gZGF0YSBsYXllci5cclxuICogQHVzYWdlXHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBUZWFsaXVtQWRJZGVudGlmaWVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RlYWxpdW0tYWRpZGVudGlmaWVyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWRJZGVudGlmaWVyOiBUZWFsaXVtQWRJZGVudGlmaWVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYWRJZGVudGlmaWVyLnNldFBlcnNpc3RlbnQoXCJtYWluXCIpO1xyXG4gKiB0aGlzLmFkSWRlbnRpZmllci5zZXRWb2xhdGlsZShcIm1haW5cIik7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUZWFsaXVtQWRJZGVudGlmaWVyJyxcclxuICBwbHVnaW46ICd0ZWFsaXVtLWNvcmRvdmEtYWRpZGVudGlmaWVyJywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnd2luZG93LnRlYWxpdW1BZElkZW50aWZpZXInLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWFsaXVtL2NvcmRvdmEtcGx1Z2luJywgLy8gdGhlIGdpdGh1YiByZXBvc2l0b3J5IFVSTCBmb3IgdGhlIHBsdWdpblxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxuICBpbnN0YWxsOiAnJywgLy8gT1BUSU9OQUwgaW5zdGFsbCBjb21tYW5kLCBpbiBjYXNlIHRoZSBwbHVnaW4gcmVxdWlyZXMgdmFyaWFibGVzXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFRlYWxpdW1BZElkZW50aWZpZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzdG9yZXMgdGhlIGFkIGlkZW50aWZpZXIgaW5mb3JtYXRpb24gYXMgcGVyc2lzdGVudCBkYXRhXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0UGVyc2lzdGVudChpbnN0YW5jZU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0b3JlcyB0aGUgYWQgaWRlbnRpZmllciBpbmZvcm1hdGlvbiBhcyB2b2xhdGlsZSBkYXRhXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW5zdGFuY2VOYW1lIHtzdHJpbmd9IFlvdXIgYXJiaXRyYXJ5IFRlYWxpdW0gaW5zdGFuY2UgbmFtZSBwcm92aWRlZCBhdCBpbml0IHRpbWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2V0Vm9sYXRpbGUoaW5zdGFuY2VOYW1lOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=