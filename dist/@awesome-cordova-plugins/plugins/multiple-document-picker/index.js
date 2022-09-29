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
var MultipleDocumentsPickerOriginal = /** @class */ (function (_super) {
    __extends(MultipleDocumentsPickerOriginal, _super);
    function MultipleDocumentsPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPickerOriginal.prototype.pick = function (type) { return cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPickerOriginal.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPickerOriginal.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPickerOriginal.platforms = ["Android", "iOS"];
    return MultipleDocumentsPickerOriginal;
}(AwesomeCordovaNativePlugin));
var MultipleDocumentsPicker = new MultipleDocumentsPickerOriginal();
export { MultipleDocumentsPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbXVsdGlwbGUtZG9jdW1lbnQtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFLQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCL0MsMkNBQTBCOzs7O0lBUXJFLHNDQUFJLGFBQUMsSUFBWTs7Ozs7O2tDQTNDbkI7RUFtQzZDLDBCQUEwQjtTQUExRCx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogVGhpcyBpcyBhIHdyYXBwZXIgZm9yIE11bHRpcGxlRG9jdW1lbnRzUGlja2VyIHBsdWdpblxyXG4gKlxyXG4gKi9cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE11bHRpcGxlIERvY3VtZW50cyBQaWNrZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB1c2VycyB0byBwaWNrIG11bHRpcGxlIGRvY3VtZW50cy9pbWFnZXMgYXQgb25jZVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBNdWx0aXBsZURvY3VtZW50c1BpY2tlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tdWx0aXBsZS1kb2N1bWVudC1waWNrZXIvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtdWx0aXBsZURvY3VtZW50c1BpY2tlcjogTXVsdGlwbGVEb2N1bWVudHNQaWNrZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5tdWx0aXBsZURvY3VtZW50c1BpY2tlci5waWNrKDEpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdNdWx0aXBsZURvY3VtZW50c1BpY2tlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbXVsdGlwbGUtZG9jdW1lbnRzLXBpY2tlcicsXHJcbiAgcGx1Z2luUmVmOiAnbXVsdGlwbGVEb2N1bWVudHNQaWNrZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWtlb3RlY2gvY29yZG92YS1wbHVnaW4tbXVsdGlwbGUtZG9jdW1lbnRzLXBpY2tlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE11bHRpcGxlRG9jdW1lbnRzUGlja2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gYWxsb3cgdXNlciB0byBzaG93IG5hdGl2ZSBmaWxlIHBpY2tlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHR5cGUge251bWJlcn0gVG8gcGljayB0eXBlIG9mIGZpbGVzOiBmb3IgaW1hZ2VzIHNlbmQgMSwgZm9yIGFsbCBmaWxlcyBzZW5kIDJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gc29tZXRoaW5nIGhhcHBlbnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGljayh0eXBlOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcbn1cclxuIl19