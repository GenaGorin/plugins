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
var FileMD5Original = /** @class */ (function (_super) {
    __extends(FileMD5Original, _super);
    function FileMD5Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileMD5Original.prototype.file = function (fileEntry) { return cordova(this, "file", {}, arguments); };
    FileMD5Original.pluginName = "FileMD5";
    FileMD5Original.plugin = "cordova-plugin-file-md5";
    FileMD5Original.pluginRef = "md5chksum";
    FileMD5Original.repo = "https://github.com/mramonlopez/cordova-plugin-file-md5";
    FileMD5Original.platforms = ["Android", "iOS"];
    return FileMD5Original;
}(AwesomeCordovaNativePlugin));
var FileMD5 = new FileMD5Original();
export { FileMD5 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1tZDUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEIvRCwyQkFBMEI7Ozs7SUFRckQsc0JBQUksYUFBQyxTQUFjOzs7Ozs7a0JBdkNyQjtFQStCNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlsZSBNRDVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHJlYWRzIGxhcmdlIGZpbGVzIGluIGNodW5rcyBhbmQgYnVpbGQgdGhlIG1kNXN1bSBpbmNyZW1lbnRhbGx5LlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaWxlTUQ1IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUtbWQ1L254JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlTUQ1OiBGaWxlTUQ1KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZmlsZU1ENS5maWxlKGZpbGVFbnRyeSlcclxuICogICAudGhlbigobWQ1c3VtOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKG1kNXN1bSkpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpbGVNRDUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtbWQ1JyxcclxuICBwbHVnaW5SZWY6ICdtZDVjaGtzdW0nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbXJhbW9ubG9wZXovY29yZG92YS1wbHVnaW4tZmlsZS1tZDUnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWxlTUQ1IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEdldCBNRDUgY2hlY2tzdW0gZnJvbSBhIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlRW50cnkge0ZpbGVFbnRyeX0gRmlsZSBlbnRyeSBpcyBhIG9yZy5hcGFjaGUuY29yZG92YS5maWxlLkZpbGVFbnRyeVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2Ugd2l0aCBtZDVzdW1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmlsZShmaWxlRW50cnk6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==