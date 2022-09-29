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
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, getPromise } from '@awesome-cordova-plugins/core';
var PrinterOriginal = /** @class */ (function (_super) {
    __extends(PrinterOriginal, _super);
    function PrinterOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Checks whether the device is capable of printing (uses `check()` internally)
     *
     * @returns {Promise<boolean>}
     */
    PrinterOriginal.prototype.isAvailable = function () {
        return this.check().then(function (res) { return Promise.resolve(res.avail); });
    };
    PrinterOriginal.prototype.check = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    PrinterOriginal.getPlugin().canPrintItem(function (avail, count) {
                        resolve({ avail: avail, count: count });
                    });
                });
            }
        })();
    };
    PrinterOriginal.prototype.pick = function () { return cordova(this, "pick", {}, arguments); };
    PrinterOriginal.prototype.print = function (content, options) { return cordova(this, "print", { "successIndex": 2, "errorIndex": 4 }, arguments); };
    PrinterOriginal.pluginName = "Printer";
    PrinterOriginal.plugin = "cordova-plugin-printer";
    PrinterOriginal.pluginRef = "cordova.plugins.printer";
    PrinterOriginal.repo = "https://github.com/katzer/cordova-plugin-printer";
    PrinterOriginal.platforms = ["Android", "iOS", "Windows"];
    return PrinterOriginal;
}(AwesomeCordovaNativePlugin));
var Printer = new PrinterOriginal();
export { Printer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcHJpbnRlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTywwREFBNkQsVUFBVSxFQUFFLE1BQU0sK0JBQStCLENBQUM7O0lBdUt6RiwyQkFBMEI7Ozs7SUFDckQ7Ozs7T0FJRztJQUNILDZCQUFXLEdBQVg7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxHQUFRLElBQUssT0FBQSxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUFRRCx1QkFBSzs7O21EQUFpQjtnQkFDcEIsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFpQjtvQkFDdkMsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDLFlBQVksQ0FBQyxVQUFDLEtBQWMsRUFBRSxLQUFVO3dCQUMxRCxPQUFPLENBQUMsRUFBRSxLQUFLLE9BQUEsRUFBRSxLQUFLLE9BQUEsRUFBRSxDQUFDLENBQUM7b0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVFELHNCQUFJO0lBZUosdUJBQUssYUFBQyxPQUE4QixFQUFFLE9BQXNCOzs7Ozs7a0JBck45RDtFQXdLNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIENvcmRvdmFDaGVjaywgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiwgZ2V0UHJvbWlzZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmludGVyZmFjZSBGb250T3B0aW9ucyB7XHJcbiAgbmFtZTogc3RyaW5nOyAvLyBUaGUgbmFtZSBvZiB0aGUgZm9udCBmYW1pbHkuIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xyXG4gIHNpemU6IG51bWJlcjsgLy8gVGhlIHNpemUgb2YgdGhlIGZvbnQuIE9ubHkgc3VwcG9ydGVkIG9uIGlPUywgQW5kcm9pZFxyXG4gIGl0YWxpYzogYm9vbGVhbjsgLy8gU2V0IHRvIHRydWUgdG8gZW5hYmxlIHRoZXNlIGZvbnQgdHJhaXRzLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICBib2xkOiBib29sZWFuOyAvLyBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgdGhlc2UgZm9udCB0cmFpdHMuIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xyXG4gIGFsaWduOiAnbGVmdCcgfCAncmlnaHQnIHwgJ2NlbnRlcicgfCAnanVzdGlmaWVkJzsgLy8gUG9zc2libGUgYWxpZ25tZW50cyBhcmUgbGVmdCwgcmlnaHQsIGNlbnRlciBhbmQganVzdGlmaWVkLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICBjb2xvcjogc3RyaW5nOyAvLyBUaGUgY29sb3Igb2YgdGhlIGZvbnQgaW4gaGV4YS1kZWNpbWFsIFJHQiBmb3JtYXQgLSBcIkZGMDAwMFwiIG1lYW5zIHJlZC4gT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbn1cclxuXHJcbmludGVyZmFjZSBIZWFkZXJGb290ZXJMYWJlbE9wdGlvbnMge1xyXG4gIHRleHQ6IHN0cmluZzsgLy8gVGhlIHBsYWluIHRleHQgdG8gZGlzcGxheS4gVXNlICVsZCB0byBpbmRpY2F0ZSB3aGVyZSB0byBpbnNlcnQgdGhlIHBhZ2UgaW5kZXguIEZvciBleGFtcGxlIFwiUGFnZSAlbGRcIiB3b3VsZCByZXN1bHQgaW50byBcIlBhZ2UgMVwiLCBcIlBhZ2UgMlwiLCAuLi4uIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xyXG4gIHRvcDogc3RyaW5nOyAvLyBUaGUgcmVsYXRpdmUgcG9zaXRpb24gd2hlcmUgdG8gcGxhY2UgdGhlIGxhYmVsIHdpdGhpbiB0aGUgZm9vdGVyIG9yIGhlYWRlciBhcmVhLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICByaWdodDogc3RyaW5nOyAvLyBUaGUgcmVsYXRpdmUgcG9zaXRpb24gd2hlcmUgdG8gcGxhY2UgdGhlIGxhYmVsIHdpdGhpbiB0aGUgZm9vdGVyIG9yIGhlYWRlciBhcmVhLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICBsZWZ0OiBzdHJpbmc7IC8vIFRoZSByZWxhdGl2ZSBwb3NpdGlvbiB3aGVyZSB0byBwbGFjZSB0aGUgbGFiZWwgd2l0aGluIHRoZSBmb290ZXIgb3IgaGVhZGVyIGFyZWEuIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xyXG4gIGJvdHRvbTogc3RyaW5nOyAvLyBUaGUgcmVsYXRpdmUgcG9zaXRpb24gd2hlcmUgdG8gcGxhY2UgdGhlIGxhYmVsIHdpdGhpbiB0aGUgZm9vdGVyIG9yIGhlYWRlciBhcmVhLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICBmb250OiBGb250T3B0aW9uczsgLy8gVGhlIGZvbnQgYXR0cmlidXRlcyBmb3IgdGhlIGxhYmVsLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICBzaG93UGFnZUluZGV4OiBib29sZWFuOyAvLyBTZXQgdG8gdHJ1ZSBpZiB5b3Ugd2FudCB0byBkaXNwbGF5IHRoZSBwYWdlIGluZGV4LiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmludE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBwcmludCBqb2IgYW5kIHRoZSBkb2N1bWVudFxyXG4gICAqL1xyXG4gIG5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBudW1iZXIgb2YgY29waWVzIGZvciB0aGUgcHJpbnQgdGFzay5cclxuICAgKiBPbmx5IHN1cHBvcnRlZCBvbiBpT1MsIFdpbmRvd3NcclxuICAgKi9cclxuICBjb3BpZXM/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbWl0cyB0aGUgcGFnZXMgdG8gcHJpbnQgZXZlbiB0aGUgZG9jdW1lbnQgY29udGFpbnMgbW9yZS5cclxuICAgKiBUbyBza2lwIHRoZSBsYXN0IG4gcGFnZXMgeW91IGNhbiBhc3NpZ24gYSBuZWdhdGl2ZSB2YWx1ZSBvbiBpT1MuXHJcbiAgICogT25seSBzdXBwb3J0ZWQgb24gaU9TLCBBbmRyb2lkXHJcbiAgICovXHJcbiAgcGFnZUNvdW50PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBTcGVjaWZpZXMgdGhlIGR1cGxleCBtb2RlIHRvIHVzZSBmb3IgdGhlIHByaW50IGpvYi5cclxuICAgKiBFaXRoZXIgZG91YmxlLXNpZGVkIG9uIHNob3J0IHNpdGUgKGR1cGxleDonc2hvcnQnKSxcclxuICAgKiBkb3VibGUtc2lkZWQgb24gbG9uZyBzaXRlIChkdXBsZXg6J2xvbmcnKSBvciBzaW5nbGUtc2lkZWQgKGR1cGxleDonbm9uZScpLlxyXG4gICAqL1xyXG4gIGR1cGxleD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBvcmllbnRhdGlvbiBvZiB0aGUgcHJpbnRlZCBjb250ZW50LCBwb3J0cmFpdCBvciBsYW5kc2NhcGVcclxuICAgKiBQb3J0cmFpdCBieSBkZWZhdWx0LlxyXG4gICAqL1xyXG4gIG9yaWVudGF0aW9uPzogJ2xhbmRzY2FwZScgfCAncG9ydHJhaXQnO1xyXG5cclxuICAvKipcclxuICAgKiBJZiB5b3VyIGFwcGxpY2F0aW9uIG9ubHkgcHJpbnRzIGJsYWNrIHRleHQsIHNldHRpbmcgdGhpcyBwcm9wZXJ0eSB0byB0cnVlIGNhbiByZXN1bHQgaW4gYmV0dGVyIHBlcmZvcm1hbmNlIGluIG1hbnkgY2FzZXMuXHJcbiAgICogRmFsc2UgYnkgZGVmYXVsdC5cclxuICAgKi9cclxuICBtb25vY2hyb21lPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogSWYgeW91ciBhcHBsaWNhdGlvbiBvbmx5IHByaW50cyBibGFjayB0ZXh0LCBzZXR0aW5nIHRoaXMgcHJvcGVydHkgdG8gdHJ1ZSBjYW4gcmVzdWx0IGluIGJldHRlciBwZXJmb3JtYW5jZSBpbiBtYW55IGNhc2VzLlxyXG4gICAqIEZhbHNlIGJ5IGRlZmF1bHQuXHJcbiAgICogT25seSBzdXBwb3J0ZWQgb24gaU9TLCBXaW5kb3dzXHJcbiAgICovXHJcbiAgcGhvdG8/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSBkb3duc2NhbGluZyB0aGUgaW1hZ2UgdG8gZml0IGludG8gdGhlIGNvbnRlbnQgYXJlYWQuXHJcbiAgICogT25seSBzdXBwb3J0ZWQgb24gQW5kcm9pZFxyXG4gICAqL1xyXG4gIGF1dG9GaXQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgbmV0d29yayBVUkwgdG8gdGhlIHByaW50ZXIuXHJcbiAgICogT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICovXHJcbiAgcHJpbnRlcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVmaW5lcyB0aGUgbWF4aW11bSBzaXplIG9mIHRoZSBjb250ZW50IGFyZWEuXHJcbiAgICogT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICovXHJcbiAgbWF4SGVpZ2h0Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEZWZpbmVzIHRoZSBtYXhpbXVtIHNpemUgb2YgdGhlIGNvbnRlbnQgYXJlYS5cclxuICAgKiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICAgKi9cclxuICBtYXhXaWR0aD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIGZhbHNlIHRvIGF2b2lkIG1hcmdpbnMuXHJcbiAgICogVGhlIG1hcmdpbnMgZm9yIGVhY2ggcHJpbnRlZCBwYWdlLiBFYWNoIHByaW50ZXIgbWlnaHQgaGF2ZSBpdHMgb3duIG1pbmltdW0gbWFyZ2lucyBkZXBlbmRzIG9uIG1lZGlhIHR5cGUgYW5kIHBhcGVyIGZvcm1hdC5cclxuICAgKi9cclxuICBtYXJnaW4/OlxyXG4gICAgfCBib29sZWFuXHJcbiAgICB8IHtcclxuICAgICAgICB0b3A/OiBzdHJpbmc7XHJcbiAgICAgICAgbGVmdD86IHN0cmluZztcclxuICAgICAgICByaWdodD86IHN0cmluZztcclxuICAgICAgICBib3R0b20/OiBzdHJpbmc7XHJcbiAgICAgIH07XHJcblxyXG4gIHVpPzoge1xyXG4gICAgaGlkZU51bWJlck9mQ29waWVzPzogc3RyaW5nOyAvLyBTZXQgdG8gdHJ1ZSB0byBoaWRlIHRoZSBjb250cm9sIGZvciB0aGUgbnVtYmVyIG9mIGNvcGllcy4gT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICBoaWRlUGFwZXJGb3JtYXQ/OiBzdHJpbmc7IC8vIFNldCB0byB0cnVlIHRvIGhpZGUgdGhlIGNvbnRyb2wgZm9yIHRoZSBwYXBlciBmb3JtYXQuIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xyXG4gICAgdG9wPzogbnVtYmVyOyAvLyBUaGUgcG9zaXRpb24gb2YgdGhlIHByaW50ZXIgcGlja2VyLiBPbmx5IHN1cHBvcnRlZCBvbiBpUGFkXHJcbiAgICBsZWZ0PzogbnVtYmVyOyAvLyBUaGUgcG9zaXRpb24gb2YgdGhlIHByaW50ZXIgcGlja2VyLiBPbmx5IHN1cHBvcnRlZCBvbiBpUGFkXHJcbiAgICBoZWlnaHQ/OiBudW1iZXI7IC8vIFRoZSBzaXplIG9mIHRoZSBwcmludGVyIHBpY2tlci4gT25seSBzdXBwb3J0ZWQgb24gaVBhZFxyXG4gICAgd2lkdGg/OiBudW1iZXI7IC8vIFRoZSBzaXplIG9mIHRoZSBwcmludGVyIHBpY2tlci4gT25seSBzdXBwb3J0ZWQgb24gaVBhZFxyXG4gIH07XHJcblxyXG4gIHBhcGVyPzoge1xyXG4gICAgd2lkdGg6IHN0cmluZzsgLy8gVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHBhcGVyIOKAkyBpT1Mgd2lsbCB3aWxsIHRyeSB0byBjaG9vc2UgYSBmb3JtYXQgd2hpY2ggZml0cyBiZXN0cy4gT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICBoZWlnaHQ6IHN0cmluZzsgLy8gVGhlIGRpbWVuc2lvbnMgb2YgdGhlIHBhcGVyIOKAkyBpT1Mgd2lsbCB3aWxsIHRyeSB0byBjaG9vc2UgYSBmb3JtYXQgd2hpY2ggZml0cyBiZXN0cy4gT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICBuYW1lOiBzdHJpbmc7IC8vIFRoZSBuYW1lIG9mIHRoZSBmb3JtYXQgbGlrZSBJc29BNCBvciBSb2xsMjJJbmNoLiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy91d3AvYXBpL3dpbmRvd3MuZ3JhcGhpY3MucHJpbnRpbmcucHJpbnRtZWRpYXNpemUuIE9ubHkgc3VwcG9ydGVkIG9uIFdpbmRvd3NcclxuICAgIGxlbmd0aDogc3RyaW5nOyAvLyBPbiByb2xsLWZlZCBwcmludGVycyB5b3UgY2FuIGRlY2lkZSB3aGVuIHRoZSBwcmludGVyIGN1dHMgdGhlIHBhcGVyLiBodHRwczovL2RvY3MubWljcm9zb2Z0LmNvbS9lbi11cy91d3AvYXBpL3dpbmRvd3MuZ3JhcGhpY3MucHJpbnRpbmcucHJpbnRtZWRpYXNpemUuIE9ubHkgc3VwcG9ydGVkIG9uIGlPc1xyXG4gIH07XHJcblxyXG4gIGZvbnQ/OiBGb250T3B0aW9ucztcclxuXHJcbiAgaGVhZGVyPzoge1xyXG4gICAgaGVpZ2h0OiBzdHJpbmc7IC8vIFRoZSBoZWlnaHQgb2YgdGhlIGhlYWRlciBvciBmb290ZXIgb24gZWFjaCBwYWdlLiBPbmx5IHN1cHBvcnRlZCBvbiBpT1NcclxuICAgIGxhYmVsczogc3RyaW5nW107IC8vIEFuIGFycmF5IG9mIGxhYmVscyB0byBkaXNwbGF5LiBPbmx5IHVzZSBpZiB0aGVyZSBhcmUgbW9yZSB0aGVuIG9uZS4gT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICBsYWJlbDogSGVhZGVyRm9vdGVyTGFiZWxPcHRpb25zO1xyXG4gIH07XHJcblxyXG4gIGZvb3Rlcj86IHtcclxuICAgIGhlaWdodDogc3RyaW5nOyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBoZWFkZXIgb3IgZm9vdGVyIG9uIGVhY2ggcGFnZS4gT25seSBzdXBwb3J0ZWQgb24gaU9TXHJcbiAgICBsYWJlbHM6IHN0cmluZ1tdOyAvLyBBbiBhcnJheSBvZiBsYWJlbHMgdG8gZGlzcGxheS4gT25seSB1c2UgaWYgdGhlcmUgYXJlIG1vcmUgdGhlbiBvbmUuIE9ubHkgc3VwcG9ydGVkIG9uIGlPU1xyXG4gICAgbGFiZWw6IEhlYWRlckZvb3RlckxhYmVsT3B0aW9ucztcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgUHJpbnRlclxyXG4gKiBAZGVzY3JpcHRpb24gUHJpbnRzIGRvY3VtZW50cyBvciBIVE1MIHJlbmRlcmVkIGNvbnRlbnRcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgUHJpbnRlciwgUHJpbnRPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3ByaW50ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwcmludGVyOiBQcmludGVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMucHJpbnRlci5pc0F2YWlsYWJsZSgpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcclxuICpcclxuICogbGV0IG9wdGlvbnM6IFByaW50T3B0aW9ucyA9IHtcclxuICogICAgICBuYW1lOiAnTXlEb2N1bWVudCcsXHJcbiAqICAgICAgZHVwbGV4OiB0cnVlLFxyXG4gKiAgICAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICogICAgICBtb25vY2hyb21lOiB0cnVlXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5wcmludGVyLnByaW50KGNvbnRlbnQsIG9wdGlvbnMpLnRoZW4ob25TdWNjZXNzLCBvbkVycm9yKTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFByaW50T3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1ByaW50ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXByaW50ZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5wcmludGVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1wcmludGVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQcmludGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB3aGV0aGVyIHRoZSBkZXZpY2UgaXMgY2FwYWJsZSBvZiBwcmludGluZyAodXNlcyBgY2hlY2soKWAgaW50ZXJuYWxseSlcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMuY2hlY2soKS50aGVuKChyZXM6IGFueSkgPT4gUHJvbWlzZS5yZXNvbHZlKHJlcy5hdmFpbCkpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIFRvIGNoZWNrIGlmIHByaW50aW5nIGlzIHN1cHBvcnRlZCBpbiBnZW5lcmFsXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmUgd2l0aCBhbiBvYmplY3QgaW5kaWNhdGluZyB3aGV0aGVyIHByaW50aW5nIGlzIGF2YWlsYWJsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNoZWNrKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBQcmludGVyLmdldFBsdWdpbigpLmNhblByaW50SXRlbSgoYXZhaWw6IGJvb2xlYW4sIGNvdW50OiBhbnkpID0+IHtcclxuICAgICAgICByZXNvbHZlKHsgYXZhaWwsIGNvdW50IH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgYSBzeXN0ZW0gaW50ZXJmYWNlIGFsbG93aW5nIHRoZSB1c2VyIHRvIHNlbGVjdCBhbiBhdmFpbGFibGUgcHJpbnRlci4gVG8gc3BlYWsgd2l0aCBhIHByaW50ZXIgZGlyZWN0bHkgeW91IG5lZWQgdG8ga25vdyB0aGUgbmV0d29yayBhZGRyZXNzIGJ5IHBpY2tpbmcgdGhlbSBiZWZvcmUgdmlhIGBwcmludGVyLnBpY2tgLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGljaygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZHMgY29udGVudCB0byB0aGUgcHJpbnRlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250ZW50IHtzdHJpbmcgfCBIVE1MRWxlbWVudH0gVGhlIGNvbnRlbnQgdG8gcHJpbnQuIENhbiBiZSBhIFVSTCBvciBhbiBIVE1MIHN0cmluZy4gSWYgYSBIVE1MIERPTSBPYmplY3QgaXMgcHJvdmlkZWQsIGl0cyBpbm5lckh0bWwgcHJvcGVydHkgdmFsdWUgd2lsbCBiZSB1c2VkLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQcmludE9wdGlvbnN9IG9wdGlvbmFsLiBUaGUgb3B0aW9ucyB0byBwYXNzIHRvIHRoZSBwcmludGVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDIsXHJcbiAgICBlcnJvckluZGV4OiA0LFxyXG4gIH0pXHJcbiAgcHJpbnQoY29udGVudD86IHN0cmluZyB8IEhUTUxFbGVtZW50LCBvcHRpb25zPzogUHJpbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19