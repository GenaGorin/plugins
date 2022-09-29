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
var AnylineOriginal = /** @class */ (function (_super) {
    __extends(AnylineOriginal, _super);
    function AnylineOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnylineOriginal.prototype.scan = function (options) { return cordova(this, "scan", {}, arguments); };
    AnylineOriginal.pluginName = "Anyline";
    AnylineOriginal.plugin = "io-anyline-cordova";
    AnylineOriginal.pluginRef = "Anyline";
    AnylineOriginal.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    AnylineOriginal.platforms = ["Android", "iOS"];
    return AnylineOriginal;
}(AwesomeCordovaNativePlugin));
var Anyline = new AnylineOriginal();
export { Anyline };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW55bGluZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFzQy9ELDJCQUEwQjs7OztJQVFyRCxzQkFBSSxhQUFDLE9BQXVCOzs7Ozs7a0JBL0M5QjtFQXVDNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEFueWxpbmVPcHRpb25zIHtcclxuICAvLyBWYWxpZCBMaWNlbnNlIEtleVxyXG4gIGxpY2Vuc2VLZXk6IHN0cmluZztcclxuXHJcbiAgLy8gU2Nhbm5pbmcgb3B0aW9uc1xyXG4gIGNvbmZpZzogYW55O1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQW55bGluZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQW55bGluZSBwcm92aWRlcyBhbiBlYXN5LXRvLXVzZSBTREsgZm9yIGFwcGxpY2F0aW9ucyB0byBlbmFibGUgT3B0aWNhbCBDaGFyYWN0ZXIgUmVjb2duaXRpb24gKE9DUikgb24gbW9iaWxlIGRldmljZXMuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFueWxpbmUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW55bGluZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFueWxpbmU6IEFueWxpbmUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5hbnlsaW5lLnNjYW4ob3B0aW9ucylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FueWxpbmUnLFxyXG4gIHBsdWdpbjogJ2lvLWFueWxpbmUtY29yZG92YScsXHJcbiAgcGx1Z2luUmVmOiAnQW55bGluZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9BbnlsaW5lL2FueWxpbmUtb2NyLWNvcmRvdmEtbW9kdWxlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQW55bGluZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTY2FuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9ucyB7QW55bGluZU9wdGlvbnN9IFNjYW5uaW5nIG9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gQ29kZSBpcyBjYXB0dXJlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzY2FuKG9wdGlvbnM6IEFueWxpbmVPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19