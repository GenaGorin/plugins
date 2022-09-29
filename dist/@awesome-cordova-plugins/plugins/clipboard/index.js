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
var ClipboardOriginal = /** @class */ (function (_super) {
    __extends(ClipboardOriginal, _super);
    function ClipboardOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ClipboardOriginal.prototype.copy = function (text) { return cordova(this, "copy", {}, arguments); };
    ClipboardOriginal.prototype.paste = function () { return cordova(this, "paste", {}, arguments); };
    ClipboardOriginal.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    ClipboardOriginal.pluginName = "Clipboard";
    ClipboardOriginal.plugin = "cordova-clipboard";
    ClipboardOriginal.pluginRef = "cordova.plugins.clipboard";
    ClipboardOriginal.repo = "https://github.com/ihadeed/cordova-clipboard";
    ClipboardOriginal.platforms = ["Android", "iOS", "Windows Phone 8"];
    return ClipboardOriginal;
}(AwesomeCordovaNativePlugin));
var Clipboard = new ClipboardOriginal();
export { Clipboard };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2xpcGJvYXJkL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXFDN0QsNkJBQTBCOzs7O0lBUXZELHdCQUFJLGFBQUMsSUFBWTtJQVVqQix5QkFBSztJQVVMLHlCQUFLOzs7Ozs7b0JBbEVQO0VBc0MrQiwwQkFBMEI7U0FBNUMsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIENsaXBib2FyZFxyXG4gKiBAcHJlbWllciBjbGlwYm9hcmRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENsaXBib2FyZCBtYW5hZ2VtZW50IHBsdWdpbiBmb3IgQ29yZG92YSB0aGF0IHN1cHBvcnRzIGlPUywgQW5kcm9pZCwgYW5kIFdpbmRvd3MgUGhvbmUgOC5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ2xpcGJvYXJkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NsaXBib2FyZC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNsaXBib2FyZDogQ2xpcGJvYXJkKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuY2xpcGJvYXJkLmNvcHkoJ0hlbGxvIHdvcmxkJyk7XHJcbiAqXHJcbiAqIHRoaXMuY2xpcGJvYXJkLnBhc3RlKCkudGhlbihcclxuICogICAgKHJlc29sdmU6IHN0cmluZykgPT4ge1xyXG4gKiAgICAgICBhbGVydChyZXNvbHZlKTtcclxuICogICAgIH0sXHJcbiAqICAgICAocmVqZWN0OiBzdHJpbmcpID0+IHtcclxuICogICAgICAgYWxlcnQoJ0Vycm9yOiAnICsgcmVqZWN0KTtcclxuICogICAgIH1cclxuICogICApO1xyXG4gKlxyXG4gKiB0aGlzLmNsaXBib2FyZC5jbGVhcigpO1xyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDbGlwYm9hcmQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtY2xpcGJvYXJkJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuY2xpcGJvYXJkJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2loYWRlZWQvY29yZG92YS1jbGlwYm9hcmQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2xpcGJvYXJkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvcGllcyB0aGUgZ2l2ZW4gdGV4dFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRleHQgVGV4dCB0aGF0IGdldHMgY29waWVkIG9uIHRoZSBzeXN0ZW0gY2xpcGJvYXJkXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgYWZ0ZXIgdGhlIHRleHQgaGFzIGJlZW4gY29waWVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNvcHkodGV4dDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhc3RlcyB0aGUgdGV4dCBzdG9yZWQgaW4gY2xpcGJvYXJkXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBhZnRlciB0aGUgdGV4dCBoYXMgYmVlbiBwYXN0ZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGFzdGUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIHRoZSB0ZXh0IHN0b3JlZCBpbiBjbGlwYm9hcmRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIGFmdGVyIHRoZSB0ZXh0IGhhcyBiZWVuIGNsZWFuZWRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19