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
var DocumentPickerOriginal = /** @class */ (function (_super) {
    __extends(DocumentPickerOriginal, _super);
    function DocumentPickerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPickerOriginal.prototype.getFile = function (option) { return cordova(this, "getFile", {}, arguments); };
    DocumentPickerOriginal.pluginName = "IOSDocumentPicker";
    DocumentPickerOriginal.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPickerOriginal.pluginRef = "DocumentPicker";
    DocumentPickerOriginal.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPickerOriginal.platforms = ["iOS"];
    return DocumentPickerOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentPicker = new DocumentPickerOriginal();
export { DocumentPicker };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtcGlja2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQThCeEQsa0NBQTBCOzs7O0lBUTVELGdDQUFPLGFBQUMsTUFBZTs7Ozs7O3lCQXZDekI7RUErQm9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIGlPUyBEb2N1bWVudFBpY2tlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogT3BlbnMgdGhlIGZpbGUgcGlja2VyIG9uIGlPUyBmb3IgdGhlIHVzZXIgdG8gc2VsZWN0IGEgZmlsZSwgcmV0dXJucyBhIGZpbGUgVVJJLlxyXG4gKiBBbGxvd3MgdGhlIHVzZXIgdG8gdXBsb2FkIGZpbGVzIGZyb20gaUNsb3VkXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IERvY3VtZW50UGlja2VyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RvY3VtZW50LXBpY2tlci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGRvY1BpY2tlcjogRG9jdW1lbnRQaWNrZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5kb2NQaWNrZXIuZ2V0RmlsZSgnYWxsJylcclxuICogICAudGhlbih1cmkgPT4gY29uc29sZS5sb2codXJpKSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0lPU0RvY3VtZW50UGlja2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudHBpY2tlci5Eb2N1bWVudFBpY2tlcicsXHJcbiAgcGx1Z2luUmVmOiAnRG9jdW1lbnRQaWNrZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWFtcG9zc2libGUvQ29yZG92YS1Eb2NQaWNrZXInLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRQaWNrZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbiBhIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9uXSBmaWxlcyBiZXR3ZWVuICdpbWFnZScsICdwZGYnIG9yICdhbGwnXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0RmlsZShvcHRpb24/OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=