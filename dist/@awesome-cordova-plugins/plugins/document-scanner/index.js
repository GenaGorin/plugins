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
export var DocumentScannerSourceType;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(DocumentScannerSourceType || (DocumentScannerSourceType = {}));
var DocumentScannerOriginal = /** @class */ (function (_super) {
    __extends(DocumentScannerOriginal, _super);
    function DocumentScannerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScannerOriginal.prototype.scanDoc = function (opts) { return cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScannerOriginal.pluginName = "DocumentScanner";
    DocumentScannerOriginal.plugin = "cordova-plugin-document-scanner";
    DocumentScannerOriginal.pluginRef = "scan";
    DocumentScannerOriginal.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScannerOriginal.platforms = ["Android", "iOS"];
    return DocumentScannerOriginal;
}(AwesomeCordovaNativePlugin));
var DocumentScanner = new DocumentScannerOriginal();
export { DocumentScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtc2Nhbm5lci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RixNQUFNLENBQU4sSUFBWSx5QkFXWDtBQVhELFdBQVkseUJBQXlCO0lBQ25DOzs7T0FHRztJQUNILDZFQUFVLENBQUE7SUFFVjs7T0FFRztJQUNILCtFQUFXLENBQUE7QUFDYixDQUFDLEVBWFcseUJBQXlCLEtBQXpCLHlCQUF5QixRQVdwQzs7SUFnRW9DLG1DQUEwQjs7OztJQVU3RCxpQ0FBTyxhQUFDLElBQTZCOzs7Ozs7MEJBeEZ2QztFQThFcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgZW51bSBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlIHtcclxuICAvKipcclxuICAgKiBTY2FuIGRpcmVjdGx5IGZyb20gZGV2aWNlIGNhbWVyYS5cclxuICAgKiBUaGlzIGlzIHRoZSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIENBTUVSQSA9IDEsXHJcblxyXG4gIC8qKlxyXG4gICAqIFNjYW4gZnJvbSBhbiBpbWFnZSBhbHJlYWR5IHN0b3JlZCBvbiBkZXZpY2UuXHJcbiAgICovXHJcbiAgR0FMTEVSWSA9IDAsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRTY2FubmVyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQ2hvb3NlIHRvIHNjYW4gZnJvbSBjYW1lcmEgb3IgZXhpc3RpbmcgaW1hZ2UgZmlsZS4gT25seSB2YWxpZCBmb3IgQW5kcm9pZC5cclxuICAgKi9cclxuICBzb3VyY2VUeXBlPzogRG9jdW1lbnRTY2FubmVyU291cmNlVHlwZTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlsZW5hbWUgdG8gc2F2ZSBzY2FubmVkIGltYWdlIHRvIChtaW51cyBleHRlbnNpb24sIHdoaWNoIGlzIGFsd2F5cyBcIi5wbmdcIikuXHJcbiAgICogT25seSB2YWxpZCBmb3IgaU9TLiBDYWxsZXIgaXMgcmVzcG9uc2libGUgZm9yIGNsZWFuaW5nIHVwIGFueSBmaWxlcyBjcmVhdGVkXHJcbiAgICogaWYgdGhpcyBwYXJhbWV0ZXIgaXMgc2V0IHRvIGFueXRoaW5nIG90aGVyIHRoYW4gdGhlIGRlZmF1bHQgdmFsdWUsXHJcbiAgICogd2hpY2ggaXMgXCJpbWFnZVwiLlxyXG4gICAqL1xyXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBRdWFsaXR5IHRvIHVzZSB3aGVuIGNhcHR1cmluZyB0aGUgaW1hZ2UsIG11c3QgYmUgYSBmbG9hdCB2YWx1ZVxyXG4gICAqIGZyb20gMS4wKGRlZmF1bHQgLSBIaWdoZXN0IHF1YWxpdHkpIHRvIDUuMChMb3dlc3QgUXVhbGl0eSkuIEFueSB2YWx1ZVxyXG4gICAqIGluIGJldHdlZW4gd2lsbCBiZSBhY2NlcHRlZC4gQW55IHZhbHVlIG5vdCBlcXVhbCB0byBvciBub3QgYmV0d2VlbiB0aGVzZSB2YWx1ZXNcclxuICAgKiAgd2lsbCBkZWZhdWx0IHRvIHRoZSBoaWdoZXN0IHF1YWxpdHkgb2YgMS4wLlxyXG4gICAqL1xyXG4gIHF1YWxpdHk/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIElmIHRoZSBpbWFnZSBzaG91bGQgYmUgcmV0dXJuZWQgYXMgYSBiYXNlNjQgZW5jb2RpbmcgaW5zdGVhZCBvZiBhcyBhIGZpbGUgVVJMLlxyXG4gICAqIElmIHRydWUsIHRoZSBwbHVnaW4gd2lsbCByZXR1cm4gdGhlIHNjYW5uZWQgaW1hZ2UgYXMgYmFzZTY0LiBJZiBmYWxzZSxcclxuICAgKiB0aGUgcGx1Z2luIHdpbGwgcmV0dXJuIHRoZSBpbWFnZSBVUkwgb2YgdGhlIGltYWdlLlxyXG4gICAqL1xyXG4gIHJldHVybkJhc2U2ND86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBEb2N1bWVudCBTY2FubmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm9jZXNzZXMgaW1hZ2VzIG9mIGRvY3VtZW50cywgY29tcGVuc2F0aW5nIGZvciBwZXJzcGVjdGl2ZS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRG9jdW1lbnRTY2FubmVyLCBEb2N1bWVudFNjYW5uZXJPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2RvY3VtZW50LXNjYW5uZXIvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudFNjYW5uZXI6IERvY3VtZW50U2Nhbm5lcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBsZXQgb3B0czogRG9jdW1lbnRTY2FubmVyT3B0aW9ucyA9IHt9O1xyXG4gKiB0aGlzLmRvY3VtZW50U2Nhbm5lci5zY2FuRG9jdW1lbnQob3B0cylcclxuICogICAudGhlbigocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBEb2N1bWVudFNjYW5uZXJPcHRpb25zXHJcbiAqIEBlbnVtc1xyXG4gKiBEb2N1bWVudFNjYW5uZXJTb3VyY2VUeXBlXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRG9jdW1lbnRTY2FubmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC1zY2FubmVyJyxcclxuICBwbHVnaW5SZWY6ICdzY2FuJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05ldXRyaW5vc1BsYXRmb3JtL2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXNjYW5uZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEb2N1bWVudFNjYW5uZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU2NhbiBhIGRvY3VtZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0cyB7RG9jdW1lbnRTY2FubmVyT3B0aW9uc30gb3B0aW9uYWwgcGFyYW1ldGVyIGZvciBjb250cm9sbGluZyBzY2FubmluZ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IGZpbGUgVVJMIG9mIHNjYW5uZWQgZG9jdW1lbnQgaW1hZ2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzY2FuRG9jKG9wdHM/OiBEb2N1bWVudFNjYW5uZXJPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19