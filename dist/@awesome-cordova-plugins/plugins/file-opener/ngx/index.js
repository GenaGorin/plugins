import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var FileOpener = /** @class */ (function (_super) {
    __extends(FileOpener, _super);
    function FileOpener() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpener.prototype.open = function (filePath, fileMIMEType) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.uninstall = function (packageId) { return cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.appIsInstalled = function (packageId) { return cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpener.pluginName = "FileOpener";
    FileOpener.plugin = "cordova-plugin-file-opener2";
    FileOpener.pluginRef = "cordova.plugins.fileOpener2";
    FileOpener.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpener.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    FileOpener.decorators = [
        { type: Injectable }
    ];
    return FileOpener;
}(AwesomeCordovaNativePlugin));
export { FileOpener };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1vcGVuZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0M1RCw4QkFBMEI7Ozs7SUFheEQseUJBQUksYUFBQyxRQUFnQixFQUFFLFlBQW9CO0lBZTNDLDhCQUFTLGFBQUMsU0FBaUI7SUFlM0IsbUNBQWMsYUFBQyxTQUFpQjtJQWdCaEMsdUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjs7Ozs7OztnQkE1RDFELFVBQVU7O3FCQWhDWDtFQWlDZ0MsMEJBQTBCO1NBQTdDLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlsZSBPcGVuZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHdpbGwgb3BlbiBhIGZpbGUgb24geW91ciBkZXZpY2UgZmlsZSBzeXN0ZW0gd2l0aCBpdHMgZGVmYXVsdCBhcHBsaWNhdGlvbi5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmlsZU9wZW5lciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlLW9wZW5lci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGVPcGVuZXI6IEZpbGVPcGVuZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlT3BlbmVyLm9wZW4oJ3BhdGgvdG8vZmlsZS5wZGYnLCAnYXBwbGljYXRpb24vcGRmJylcclxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRmlsZSBpcyBvcGVuZWQnKSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZygnRXJyb3Igb3BlbmluZyBmaWxlJywgZSkpO1xyXG4gKlxyXG4gKiB0aGlzLmZpbGVPcGVuZXIuc2hvd09wZW5XaXRoRGlhbG9nKCdwYXRoL3RvL2ZpbGUucGRmJywgJ2FwcGxpY2F0aW9uL3BkZicpXHJcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXHJcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9wZW5pbmcgZmlsZScsIGUpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlsZU9wZW5lcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZmlsZU9wZW5lcjInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcHdsaW4vY29yZG92YS1wbHVnaW4tZmlsZS1vcGVuZXIyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnV2luZG93cycsICdXaW5kb3dzIFBob25lIDgnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlsZU9wZW5lciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVuIGFuIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCBGaWxlIFBhdGhcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1JTUVUeXBlIEZpbGUgTUlNRSBUeXBlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXHJcbiAgfSlcclxuICBvcGVuKGZpbGVQYXRoOiBzdHJpbmcsIGZpbGVNSU1FVHlwZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuaW5zdGFsbHMgYSBwYWNrYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZUlkIFBhY2thZ2UgSURcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcclxuICB9KVxyXG4gIHVuaW5zdGFsbChwYWNrYWdlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhbiBhcHAgaXMgYWxyZWFkeSBpbnN0YWxsZWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlSWQgUGFja2FnZSBJRFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxyXG4gIH0pXHJcbiAgYXBwSXNJbnN0YWxsZWQocGFja2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbnMgd2l0aCBzeXN0ZW0gbW9kYWwgdG8gb3BlbiBmaWxlIHdpdGggYW4gYWxyZWFkeSBpbnN0YWxsZWQgYXBwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIEZpbGUgUGF0aFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlTUlNRVR5cGUgRmlsZSBNSU1FIFR5cGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcclxuICB9KVxyXG4gIHNob3dPcGVuV2l0aERpYWxvZyhmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==