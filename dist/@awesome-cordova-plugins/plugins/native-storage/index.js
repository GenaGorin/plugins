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
var NativeStorageOriginal = /** @class */ (function (_super) {
    __extends(NativeStorageOriginal, _super);
    function NativeStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeStorageOriginal.prototype.initWithSuiteName = function (reference) { return cordova(this, "initWithSuiteName", { "platforms": ["iOS"] }, arguments); };
    NativeStorageOriginal.prototype.setItem = function (reference, value) { return cordova(this, "setItem", {}, arguments); };
    NativeStorageOriginal.prototype.getItem = function (reference) { return cordova(this, "getItem", {}, arguments); };
    NativeStorageOriginal.prototype.keys = function () { return cordova(this, "keys", {}, arguments); };
    NativeStorageOriginal.prototype.remove = function (reference) { return cordova(this, "remove", {}, arguments); };
    NativeStorageOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    NativeStorageOriginal.pluginName = "NativeStorage";
    NativeStorageOriginal.plugin = "cordova-plugin-nativestorage";
    NativeStorageOriginal.pluginRef = "NativeStorage";
    NativeStorageOriginal.repo = "https://github.com/TheCocoaProject/cordova-plugin-nativestorage";
    NativeStorageOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return NativeStorageOriginal;
}(AwesomeCordovaNativePlugin));
var NativeStorage = new NativeStorageOriginal();
export { NativeStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLXN0b3JhZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUN6RCxpQ0FBMEI7Ozs7SUFVM0QseUNBQWlCLGFBQUMsU0FBaUI7SUFZbkMsK0JBQU8sYUFBQyxTQUFpQixFQUFFLEtBQVU7SUFXckMsK0JBQU8sYUFBQyxTQUFpQjtJQVV6Qiw0QkFBSTtJQVdKLDhCQUFNLGFBQUMsU0FBaUI7SUFVeEIsNkJBQUs7Ozs7Ozt3QkFwR1A7RUFvQ21DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE5hdGl2ZSBTdG9yYWdlXHJcbiAqIEBwcmVtaWVyIG5hdGl2ZXN0b3JhZ2VcclxuICogQGRlc2NyaXB0aW9uIE5hdGl2ZSBzdG9yYWdlIG9mIHZhcmlhYmxlcyBpbiBBbmRyb2lkIGFuZCBpT1NcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTmF0aXZlU3RvcmFnZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uYXRpdmUtc3RvcmFnZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZVN0b3JhZ2U6IE5hdGl2ZVN0b3JhZ2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5uYXRpdmVTdG9yYWdlLnNldEl0ZW0oJ215aXRlbScsIHtwcm9wZXJ0eTogJ3ZhbHVlJywgYW5vdGhlclByb3BlcnR5OiAnYW5vdGhlclZhbHVlJ30pXHJcbiAqICAgLnRoZW4oXHJcbiAqICAgICAoKSA9PiBjb25zb2xlLmxvZygnU3RvcmVkIGl0ZW0hJyksXHJcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBzdG9yaW5nIGl0ZW0nLCBlcnJvcilcclxuICogICApO1xyXG4gKlxyXG4gKiB0aGlzLm5hdGl2ZVN0b3JhZ2UuZ2V0SXRlbSgnbXlpdGVtJylcclxuICogICAudGhlbihcclxuICogICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAqICAgICBlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKVxyXG4gKiAgICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05hdGl2ZVN0b3JhZ2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXN0b3JhZ2UnLFxyXG4gIHBsdWdpblJlZjogJ05hdGl2ZVN0b3JhZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vVGhlQ29jb2FQcm9qZWN0L2NvcmRvdmEtcGx1Z2luLW5hdGl2ZXN0b3JhZ2UnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ21hY09TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTmF0aXZlU3RvcmFnZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBJbml0aWFsaXNlcyBzaGFyZWQgc3RvcmFnZSB3aXRoIHRoZSBzdWl0ZSBuYW1lIHdoZW4gdXNpbmcgYXBwIGdyb3VwcyBpbiBpT1NcclxuICAgKlxyXG4gICAqIEBwYXJhbSByZWZlcmVuY2Uge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbiAgfSlcclxuICBpbml0V2l0aFN1aXRlTmFtZShyZWZlcmVuY2U6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcmVzIGEgdmFsdWVcclxuICAgKlxyXG4gICAqIEBwYXJhbSByZWZlcmVuY2Uge3N0cmluZ31cclxuICAgKiBAcGFyYW0gdmFsdWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRJdGVtKHJlZmVyZW5jZTogc3RyaW5nLCB2YWx1ZTogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYSBzdG9yZWQgaXRlbVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0cmlldmluZyBhbGwga2V5c1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAga2V5cygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIHNpbmdsZSBzdG9yZWQgaXRlbVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJlbW92ZShyZWZlcmVuY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGFsbCBzdG9yZWQgdmFsdWVzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19