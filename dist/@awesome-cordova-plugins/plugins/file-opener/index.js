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
var FileOpenerOriginal = /** @class */ (function (_super) {
    __extends(FileOpenerOriginal, _super);
    function FileOpenerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileOpenerOriginal.prototype.open = function (filePath, fileMIMEType) { return cordova(this, "open", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.uninstall = function (packageId) { return cordova(this, "uninstall", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.appIsInstalled = function (packageId) { return cordova(this, "appIsInstalled", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.prototype.showOpenWithDialog = function (filePath, fileMIMEType) { return cordova(this, "showOpenWithDialog", { "callbackStyle": "object", "successName": "success", "errorName": "error" }, arguments); };
    FileOpenerOriginal.pluginName = "FileOpener";
    FileOpenerOriginal.plugin = "cordova-plugin-file-opener2";
    FileOpenerOriginal.pluginRef = "cordova.plugins.fileOpener2";
    FileOpenerOriginal.repo = "https://github.com/pwlin/cordova-plugin-file-opener2";
    FileOpenerOriginal.platforms = ["Android", "iOS", "Windows", "Windows Phone 8"];
    return FileOpenerOriginal;
}(AwesomeCordovaNativePlugin));
var FileOpener = new FileOpenerOriginal();
export { FileOpener };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1vcGVuZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0M1RCw4QkFBMEI7Ozs7SUFheEQseUJBQUksYUFBQyxRQUFnQixFQUFFLFlBQW9CO0lBZTNDLDhCQUFTLGFBQUMsU0FBaUI7SUFlM0IsbUNBQWMsYUFBQyxTQUFpQjtJQWdCaEMsdUNBQWtCLGFBQUMsUUFBZ0IsRUFBRSxZQUFvQjs7Ozs7O3FCQTVGM0Q7RUFpQ2dDLDBCQUEwQjtTQUE3QyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZpbGUgT3BlbmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiB3aWxsIG9wZW4gYSBmaWxlIG9uIHlvdXIgZGV2aWNlIGZpbGUgc3lzdGVtIHdpdGggaXRzIGRlZmF1bHQgYXBwbGljYXRpb24uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEZpbGVPcGVuZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS1vcGVuZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlT3BlbmVyOiBGaWxlT3BlbmVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZU9wZW5lci5vcGVuKCdwYXRoL3RvL2ZpbGUucGRmJywgJ2FwcGxpY2F0aW9uL3BkZicpXHJcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ZpbGUgaXMgb3BlbmVkJykpXHJcbiAqICAgLmNhdGNoKGUgPT4gY29uc29sZS5sb2coJ0Vycm9yIG9wZW5pbmcgZmlsZScsIGUpKTtcclxuICpcclxuICogdGhpcy5maWxlT3BlbmVyLnNob3dPcGVuV2l0aERpYWxvZygncGF0aC90by9maWxlLnBkZicsICdhcHBsaWNhdGlvbi9wZGYnKVxyXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdGaWxlIGlzIG9wZW5lZCcpKVxyXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBvcGVuaW5nIGZpbGUnLCBlKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpbGVPcGVuZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtb3BlbmVyMicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpbGVPcGVuZXIyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3B3bGluL2NvcmRvdmEtcGx1Z2luLWZpbGUtb3BlbmVyMicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVPcGVuZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbiBhbiBmaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZVBhdGggRmlsZSBQYXRoXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVNSU1FVHlwZSBGaWxlIE1JTUUgVHlwZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tTdHlsZTogJ29iamVjdCcsXHJcbiAgICBzdWNjZXNzTmFtZTogJ3N1Y2Nlc3MnLFxyXG4gICAgZXJyb3JOYW1lOiAnZXJyb3InLFxyXG4gIH0pXHJcbiAgb3BlbihmaWxlUGF0aDogc3RyaW5nLCBmaWxlTUlNRVR5cGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbmluc3RhbGxzIGEgcGFja2FnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhY2thZ2VJZCBQYWNrYWdlIElEXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXHJcbiAgfSlcclxuICB1bmluc3RhbGwocGFja2FnZUlkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYW4gYXBwIGlzIGFscmVhZHkgaW5zdGFsbGVkXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZUlkIFBhY2thZ2UgSURcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2Vycm9yJyxcclxuICB9KVxyXG4gIGFwcElzSW5zdGFsbGVkKHBhY2thZ2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIHdpdGggc3lzdGVtIG1vZGFsIHRvIG9wZW4gZmlsZSB3aXRoIGFuIGFscmVhZHkgaW5zdGFsbGVkIGFwcC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCBGaWxlIFBhdGhcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU1JTUVUeXBlIEZpbGUgTUlNRSBUeXBlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdlcnJvcicsXHJcbiAgfSlcclxuICBzaG93T3BlbldpdGhEaWFsb2coZmlsZVBhdGg6IHN0cmluZywgZmlsZU1JTUVUeXBlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=