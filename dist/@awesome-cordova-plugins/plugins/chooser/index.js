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
var ChooserOriginal = /** @class */ (function (_super) {
    __extends(ChooserOriginal, _super);
    function ChooserOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChooserOriginal.prototype.getFile = function (accept) { return cordova(this, "getFile", {}, arguments); };
    ChooserOriginal.prototype.getFileMetadata = function (accept) { return cordova(this, "getFileMetadata", {}, arguments); };
    ChooserOriginal.pluginName = "Chooser";
    ChooserOriginal.plugin = "cordova-plugin-chooser";
    ChooserOriginal.pluginRef = "chooser";
    ChooserOriginal.repo = "https://github.com/cyph/cordova-plugin-chooser";
    ChooserOriginal.platforms = ["Android", "iOS"];
    return ChooserOriginal;
}(AwesomeCordovaNativePlugin));
var Chooser = new ChooserOriginal();
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFvRC9ELDJCQUEwQjs7OztJQVNyRCx5QkFBTyxhQUFDLE1BQWU7SUFZdkIsaUNBQWUsYUFBQyxNQUFlOzs7Ozs7a0JBMUVqQztFQXFENkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENob29zZXJSZXN1bHQge1xyXG4gIGRhdGE/OiBVaW50OEFycmF5O1xyXG4gIGRhdGFVUkk/OiBzdHJpbmc7XHJcbiAgbWVkaWFUeXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVyaTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQ2hvb3NlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogRmlsZSBjaG9vc2VyIHBsdWdpbiBmb3IgQ29yZG92YS5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBtdXN0IGJlIGFkZGVkIHRvIGNvbmZpZy54bWwgdG8gcHJldmVudCBjcmFzaGluZyB3aGVuIHNlbGVjdGluZyBsYXJnZSBmaWxlcyBvbiBBbmRyb2lkOlxyXG4gKiBgYGB4bWxcclxuICogPHBsYXRmb3JtIG5hbWU9XCJhbmRyb2lkXCI+XHJcbiAqICA8ZWRpdC1jb25maWdcclxuICogICAgZmlsZT1cImFwcC9zcmMvbWFpbi9BbmRyb2lkTWFuaWZlc3QueG1sXCJcclxuICogICAgbW9kZT1cIm1lcmdlXCJcclxuICogICAgdGFyZ2V0PVwiL21hbmlmZXN0L2FwcGxpY2F0aW9uXCI+XHJcbiAqICAgIDxhcHBsaWNhdGlvbiBhbmRyb2lkOmxhcmdlSGVhcD1cInRydWVcIiAvPlxyXG4gKiAgPC9lZGl0LWNvbmZpZz5cclxuICogPC9wbGF0Zm9ybT5cclxuICogYGBgXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENob29zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2hvb3Nlci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5jaG9vc2VyLmdldEZpbGUoKVxyXG4gKiAgIC50aGVuKGZpbGUgPT4gY29uc29sZS5sb2coZmlsZSA/IGZpbGUubmFtZSA6ICdjYW5jZWxlZCcpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQ2hvb3NlclJlc3VsdFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Nob29zZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNob29zZXInLFxyXG4gIHBsdWdpblJlZjogJ2Nob29zZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY3lwaC9jb3Jkb3ZhLXBsdWdpbi1jaG9vc2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2VwdF0gT3B0aW9uYWwgTUlNRSB0eXBlIGZpbHRlciAoZS5nLiAnaW1hZ2UvZ2lmLHZpZGVvLyonKS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIGNvbnRhaW5pbmcgc2VsZWN0ZWQgZmlsZSdzIHJhdyBiaW5hcnkgZGF0YSxcclxuICAgKiBiYXNlNjQtZW5jb2RlZCBkYXRhOiBVUkksIE1JTUUgdHlwZSwgZGlzcGxheSBuYW1lLCBhbmQgb3JpZ2luYWwgVVJJLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRGaWxlKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2VwdF0gT3B0aW9uYWwgTUlNRSB0eXBlIGZpbHRlciAoZS5nLiAnaW1hZ2UvZ2lmLHZpZGVvLyonKS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIGNvbnRhaW5pbmcgc2VsZWN0ZWQgZmlsZSdzIE1JTUUgdHlwZSwgZGlzcGxheSBuYW1lLCBhbmQgb3JpZ2luYWwgVVJJLlxyXG4gICAqIElmIHVzZXIgY2FuY2VscywgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIGFzIHVuZGVmaW5lZC5cclxuICAgKiBJZiBlcnJvciBvY2N1cnMsIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0RmlsZU1ldGFkYXRhKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdCB8IHVuZGVmaW5lZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=