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
    ChooserOriginal.prototype.getFiles = function (accept) { return cordova(this, "getFiles", {}, arguments); };
    ChooserOriginal.pluginName = "Chooser";
    ChooserOriginal.plugin = "cordova-plugin-simple-file-chooser";
    ChooserOriginal.pluginRef = "chooser";
    ChooserOriginal.repo = "https://github.com/hc-oss/cordova-plugin-simple-file-chooser";
    ChooserOriginal.platforms = ["Android", "iOS"];
    return ChooserOriginal;
}(AwesomeCordovaNativePlugin));
var Chooser = new ChooserOriginal();
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFrRC9ELDJCQUEwQjs7OztJQVNyRCwwQkFBUSxhQUFDLE1BQWU7Ozs7OztrQkE1RDFCO0VBbUQ2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XHJcbiAgbWVkaWFUeXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVyaTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQ2hvb3NlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogRmlsZSBjaG9vc2VyIHBsdWdpbiBmb3IgQ29yZG92YS5cclxuICpcclxuICogVGhlIGZvbGxvd2luZyBtdXN0IGJlIGFkZGVkIHRvIGNvbmZpZy54bWwgdG8gcHJldmVudCBjcmFzaGluZyB3aGVuIHNlbGVjdGluZyBsYXJnZSBmaWxlcyBvbiBBbmRyb2lkOlxyXG4gKiBgYGB4bWxcclxuICogPHBsYXRmb3JtIG5hbWU9XCJhbmRyb2lkXCI+XHJcbiAqICA8ZWRpdC1jb25maWdcclxuICogICAgZmlsZT1cImFwcC9zcmMvbWFpbi9BbmRyb2lkTWFuaWZlc3QueG1sXCJcclxuICogICAgbW9kZT1cIm1lcmdlXCJcclxuICogICAgdGFyZ2V0PVwiL21hbmlmZXN0L2FwcGxpY2F0aW9uXCI+XHJcbiAqICAgIDxhcHBsaWNhdGlvbiBhbmRyb2lkOmxhcmdlSGVhcD1cInRydWVcIiAvPlxyXG4gKiAgPC9lZGl0LWNvbmZpZz5cclxuICogPC9wbGF0Zm9ybT5cclxuICogYGBgXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IENob29zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2hvb3Nlci1zaW1wbGUtZmlsZS9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNob29zZXI6IENob29zZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5jaG9vc2VyLmdldEZpbGVzKClcclxuICogICAudGhlbihmaWxlcyA9PiBjb25zb2xlLmxvZyhmaWxlcyA/IGZpbGVzLm5hbWUgOiAnY2FuY2VsZWQnKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIENob29zZXJSZXN1bHRcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDaG9vc2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaW1wbGUtZmlsZS1jaG9vc2VyJyxcclxuICBwbHVnaW5SZWY6ICdjaG9vc2VyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hjLW9zcy9jb3Jkb3ZhLXBsdWdpbi1zaW1wbGUtZmlsZS1jaG9vc2VyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2hvb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBuYXRpdmUgcHJvbXB0IGZvciB1c2VyIHRvIHNlbGVjdCBhIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FjY2VwdF0gT3B0aW9uYWwgTUlNRSB0eXBlIGZpbHRlciAoZS5nLiAnaW1hZ2UvZ2lmLHZpZGVvLyonKS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBQcm9taXNlIGNvbnRhaW5pbmcgc2VsZWN0ZWQgZmlsZSdzXHJcbiAgICogZGF0YTogTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEZpbGVzKGFjY2VwdD86IHN0cmluZyk6IFByb21pc2U8Q2hvb3NlclJlc3VsdFtdIHwgdW5kZWZpbmVkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==