import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Chooser = /** @class */ (function (_super) {
    __extends(Chooser, _super);
    function Chooser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chooser.prototype.getFile = function (accept) { return cordova(this, "getFile", {}, arguments); };
    Chooser.prototype.getFileMetadata = function (accept) { return cordova(this, "getFileMetadata", {}, arguments); };
    Chooser.pluginName = "Chooser";
    Chooser.plugin = "cordova-plugin-chooser";
    Chooser.pluginRef = "chooser";
    Chooser.repo = "https://github.com/cyph/cordova-plugin-chooser";
    Chooser.platforms = ["Android", "iOS"];
    Chooser.decorators = [
        { type: Injectable }
    ];
    return Chooser;
}(AwesomeCordovaNativePlugin));
export { Chooser };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2hvb3Nlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFvRC9ELDJCQUEwQjs7OztJQVNyRCx5QkFBTyxhQUFDLE1BQWU7SUFZdkIsaUNBQWUsYUFBQyxNQUFlOzs7Ozs7O2dCQXRCaEMsVUFBVTs7a0JBcERYO0VBcUQ2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2hvb3NlclJlc3VsdCB7XHJcbiAgZGF0YT86IFVpbnQ4QXJyYXk7XHJcbiAgZGF0YVVSST86IHN0cmluZztcclxuICBtZWRpYVR5cGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXJpOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDaG9vc2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBGaWxlIGNob29zZXIgcGx1Z2luIGZvciBDb3Jkb3ZhLlxyXG4gKlxyXG4gKiBUaGUgZm9sbG93aW5nIG11c3QgYmUgYWRkZWQgdG8gY29uZmlnLnhtbCB0byBwcmV2ZW50IGNyYXNoaW5nIHdoZW4gc2VsZWN0aW5nIGxhcmdlIGZpbGVzIG9uIEFuZHJvaWQ6XHJcbiAqIGBgYHhtbFxyXG4gKiA8cGxhdGZvcm0gbmFtZT1cImFuZHJvaWRcIj5cclxuICogIDxlZGl0LWNvbmZpZ1xyXG4gKiAgICBmaWxlPVwiYXBwL3NyYy9tYWluL0FuZHJvaWRNYW5pZmVzdC54bWxcIlxyXG4gKiAgICBtb2RlPVwibWVyZ2VcIlxyXG4gKiAgICB0YXJnZXQ9XCIvbWFuaWZlc3QvYXBwbGljYXRpb25cIj5cclxuICogICAgPGFwcGxpY2F0aW9uIGFuZHJvaWQ6bGFyZ2VIZWFwPVwidHJ1ZVwiIC8+XHJcbiAqICA8L2VkaXQtY29uZmlnPlxyXG4gKiA8L3BsYXRmb3JtPlxyXG4gKiBgYGBcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ2hvb3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jaG9vc2VyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hvb3NlcjogQ2hvb3NlcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmNob29zZXIuZ2V0RmlsZSgpXHJcbiAqICAgLnRoZW4oZmlsZSA9PiBjb25zb2xlLmxvZyhmaWxlID8gZmlsZS5uYW1lIDogJ2NhbmNlbGVkJykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBDaG9vc2VyUmVzdWx0XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2hvb3NlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2hvb3NlcicsXHJcbiAgcGx1Z2luUmVmOiAnY2hvb3NlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jeXBoL2NvcmRvdmEtcGx1Z2luLWNob29zZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDaG9vc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXB0XSBPcHRpb25hbCBNSU1FIHR5cGUgZmlsdGVyIChlLmcuICdpbWFnZS9naWYsdmlkZW8vKicpLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3MgcmF3IGJpbmFyeSBkYXRhLFxyXG4gICAqIGJhc2U2NC1lbmNvZGVkIGRhdGE6IFVSSSwgTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEZpbGUoYWNjZXB0Pzogc3RyaW5nKTogUHJvbWlzZTxDaG9vc2VyUmVzdWx0IHwgdW5kZWZpbmVkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIG5hdGl2ZSBwcm9tcHQgZm9yIHVzZXIgdG8gc2VsZWN0IGEgZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXB0XSBPcHRpb25hbCBNSU1FIHR5cGUgZmlsdGVyIChlLmcuICdpbWFnZS9naWYsdmlkZW8vKicpLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFByb21pc2UgY29udGFpbmluZyBzZWxlY3RlZCBmaWxlJ3MgTUlNRSB0eXBlLCBkaXNwbGF5IG5hbWUsIGFuZCBvcmlnaW5hbCBVUkkuXHJcbiAgICogSWYgdXNlciBjYW5jZWxzLCBwcm9taXNlIHdpbGwgYmUgcmVzb2x2ZWQgYXMgdW5kZWZpbmVkLlxyXG4gICAqIElmIGVycm9yIG9jY3VycywgcHJvbWlzZSB3aWxsIGJlIHJlamVjdGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRGaWxlTWV0YWRhdGEoYWNjZXB0Pzogc3RyaW5nKTogUHJvbWlzZTxDaG9vc2VyUmVzdWx0IHwgdW5kZWZpbmVkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==