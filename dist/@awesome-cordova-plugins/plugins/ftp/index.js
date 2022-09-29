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
import { Observable } from 'rxjs';
var FTPOriginal = /** @class */ (function (_super) {
    __extends(FTPOriginal, _super);
    function FTPOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FTPOriginal.prototype.connect = function (hostname, username, password) { return cordova(this, "connect", {}, arguments); };
    FTPOriginal.prototype.ls = function (path) { return cordova(this, "ls", {}, arguments); };
    FTPOriginal.prototype.mkdir = function (path) { return cordova(this, "mkdir", {}, arguments); };
    FTPOriginal.prototype.rmdir = function (path) { return cordova(this, "rmdir", {}, arguments); };
    FTPOriginal.prototype.rm = function (file) { return cordova(this, "rm", {}, arguments); };
    FTPOriginal.prototype.upload = function (localFile, remoteFile) { return cordova(this, "upload", { "observable": true }, arguments); };
    FTPOriginal.prototype.download = function (localFile, remoteFile) { return cordova(this, "download", { "observable": true }, arguments); };
    FTPOriginal.prototype.cancel = function () { return cordova(this, "cancel", {}, arguments); };
    FTPOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    FTPOriginal.pluginName = "FTP";
    FTPOriginal.plugin = "cordova-plugin-ftp";
    FTPOriginal.pluginRef = "cordova.plugin.ftp";
    FTPOriginal.repo = "https://github.com/xfally/cordova-plugin-ftp";
    FTPOriginal.platforms = ["Android", "iOS"];
    return FTPOriginal;
}(AwesomeCordovaNativePlugin));
var FTP = new FTPOriginal();
export { FTP };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZnRwL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBOEJULHVCQUEwQjs7OztJQVlqRCxxQkFBTyxhQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQjtJQW1CNUQsZ0JBQUUsYUFBQyxJQUFZO0lBV2YsbUJBQUssYUFBQyxJQUFZO0lBYWxCLG1CQUFLLGFBQUMsSUFBWTtJQVdsQixnQkFBRSxhQUFDLElBQVk7SUFnQmYsb0JBQU0sYUFBQyxTQUFpQixFQUFFLFVBQWtCO0lBZ0I1QyxzQkFBUSxhQUFDLFNBQWlCLEVBQUUsVUFBa0I7SUFVOUMsb0JBQU07SUFVTix3QkFBVTs7Ozs7O2NBdEpaO0VBZ0N5QiwwQkFBMEI7U0FBdEMsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZUUFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBjb3Jkb3ZhIHBsdWdpbiBpcyBjcmVhdGVkIHRvIHVzZSBmdHAgKGNsaWVudCkgaW4gd2ViL2pzLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGVFAgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZnRwL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZlRQOiBGVFApIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5mVFAuY29ubmVjdCgnZnRwX2hvc3QnLCAnZnRwX3VzZXInLCAnZnRwX3Bhc3N3b3JkJylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKCdMb2dpbiBzdWNjZXNzZnVsJywgcmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRlRQJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mdHAnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2luLmZ0cCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS94ZmFsbHkvY29yZG92YS1wbHVnaW4tZnRwJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRlRQIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbm5lY3QgdG8gb25lIGZ0cCBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBKdXN0IG5lZWQgdG8gaW5pdCB0aGUgY29ubmVjdGlvbiBvbmNlLiBJZiBzdWNjZXNzLCB5b3UgY2FuIGRvIGFueSBmdHAgYWN0aW9ucyBsYXRlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBob3N0bmFtZSBUaGUgZnRwIHNlcnZlciB1cmwuIExpa2UgaXAgd2l0aG91dCBwcm90b2NvbCBwcmVmaXgsIGUuZy4gXCIxOTIuMTY4LjEuMVwiLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1c2VybmFtZSBUaGUgZnRwIGxvZ2luIHVzZXJuYW1lLiBJZiBpdCBhbmQgYHBhc3N3b3JkYCBhcmUgYWxsIGJsYW5rL3VuZGVmaW5lZCwgdGhlIGRlZmF1bHQgdXNlcm5hbWUgXCJhbm9ueW1vdXNcIiBpcyB1c2VkLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXNzd29yZCBUaGUgZnRwIGxvZ2luIHBhc3N3b3JkLiBJZiBpdCBhbmQgYHVzZXJuYW1lYCBhcmUgYWxsIGJsYW5rL3VuZGVmaW5lZCwgdGhlIGRlZmF1bHQgcGFzc3dvcmQgXCJhbm9ueW1vdXNAXCIgaXMgdXNlZC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBUaGUgc3VjY2VzcyBjYWxsYmFjay4gTm90aWNlOiBGb3IgaU9TLCBpZiB0cmlnZ2VyZWQsIG1lYW5zIGBpbml0YCBzdWNjZXNzLCBidXQgTk9UIG1lYW5zIHRoZSBsYXRlciBhY3Rpb24sIGUuZy4gYGxzYC4uLiBgZG93bmxvYWRgIHdpbGwgc3VjY2VzcyFcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY29ubmVjdChob3N0bmFtZTogc3RyaW5nLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3QgZmlsZXMgKHdpdGggaW5mbyBvZiBgbmFtZWAsIGB0eXBlYCwgYGxpbmtgLCBgc2l6ZWAsIGBtb2RpZmllZERhdGVgKSB1bmRlciBvbmUgZGlyZWN0b3J5IG9uIHRoZSBmdHAgc2VydmVyLlxyXG4gICAqIFlvdSBjYW4gZ2V0IG9uZSBmaWxlJ3MgbmFtZSB1c2luZyBgZmlsZUxpc3RbeF0ubmFtZWAgKGB4YCBpcyB0aGUgbG9jYXRpb24gaW4gYXJyYXkpLlxyXG4gICAqXHJcbiAgICogRXhwbGFpbiBrZXk6XHJcbiAgICogLSBuYW1lOiBmaWxlIG5hbWUgKHV0Zi04KS5cclxuICAgKiAtIHR5cGU6IGZpbGUgdHlwZS4gbnVtYmVyIGAwYCBtZWFucyByZWd1bGFyIGZpbGUsIGAxYCBtZWFucyBkaXJlY3RvcnksIGAyYCBtZWFucyBzeW1ib2xpYyBsaW5rLCBgLTFgIG1lYW5zIHVua25vd24gdHlwZSAobWF5YmUgYmxvY2sgZGV2LCBjaGFyIGRldi4uLikuXHJcbiAgICogLSBsaW5rOiBpZiB0aGUgZmlsZSBpcyBhIHN5bWJvbGljIGxpbmssIHRoZW4gdGhpcyBmaWVsZCBzdG9yZSBzeW1ib2xpYyBsaW5rIGluZm9ybWF0aW9uICh1dGYtOCksIGVsc2UgaXQncyBhIGJsYW5rIHN0cmluZy5cclxuICAgKiAtIHNpemU6IGZpbGUgc2l6ZSBpbiBieXRlcy5cclxuICAgKiAtIG1vZGlmaWVkRGF0ZTogbW9kaWZpZWQgZGF0ZSBvZiB0aGlzIGZpbGUuIGRhdGUgZm9ybWF0IGlzIGB5eXl5LU1NLWRkIEhIOm1tOnNzIHp6emAsIGUuZyBcIjIwMTUtMTItMDEgMjA6NDU6MDAgR01UKzhcIi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIG9uIHRoZSBmdHAgc2VydmVyLiBlLmcuIFwiL2FkZi8xMjMvXCIuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbHMocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBvbmUgZGlyZWN0b3J5IG9uIHRoZSBmdHAgc2VydmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggb24gdGhlIGZ0cCBzZXJ2ZXIuIGUuZy4gXCIvYWRmLzEyMy9cIi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBta2RpcihwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlIG9uZSBkaXJlY3Rvcnkgb24gdGhlIGZ0cCBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBUaXA6IEFzIG1hbnkgZnRwIHNlcnZlciBjb3VsZCBub3Qgcm0gZGlyIHdoZW4gaXQncyBub3QgZW1wdHksIHNvIHJtIGFsbCBmaWxlcyB1bmRlciB0aGUgZGlyIGF0IGZpcnN0IGlzIHJlY29tbWVuZGVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIGZpbGUgKHdpdGggZnVsbCBwYXRoKSB5b3Ugd2FudCB0byBkZWxldGUuIGUuZy4gXCIvYWRmLzEyMy9uZXdEaXIvbXlGaWxlXCIuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcm1kaXIocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZSBvbmUgZmlsZSBvbiB0aGUgZnRwIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gZGVsZXRlLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL215RmlsZVwiLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHJtKGZpbGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGxvYWQgb25lIGxvY2FsIGZpbGUgdG8gdGhlIGZ0cCBzZXJ2ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbG9jYWxGaWxlIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gdXBsb2FkLiBlLmcuIFwiL2xvY2FsL3BhdGgvdG8vbG9jYWxGaWxlXCIuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHJlbW90ZUZpbGUgVGhlIGZpbGUgKHdpdGggZnVsbCBwYXRoKSB5b3Ugd2FudCB0byBsb2NhdGVkIG9uIHRoZSBmdHAgc2VydmVyLiBlLmcuIFwiL2FkZi8xMjMvbmV3RGlyL3JlbW90ZUZpbGVcIi5cclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBJdCB3aWxsIGJlIHRyaWdnZXJlZCBtYW55IHRpbWVzIGFjY29yZGluZyB0aGUgZmlsZSdzIHNpemUuXHJcbiAgICogICAgICAgICAgICAgICAgICAgICAgICBUaGUgYXJnIGAwYCwgYDAuMXh4YCwgYDAuMnh4YCAuLi4gYDFgIG1lYW5zIHRoZSB1cGxvYWQgcGVyY2VudC4gV2hlbiBpdCByZWFjaCBgMWAsIG1lYW5zIHN1Y2Nlc3MuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHVwbG9hZChsb2NhbEZpbGU6IHN0cmluZywgcmVtb3RlRmlsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERvd25sb2FkIG9uZSByZW1vdGUgZmlsZSBvbiB0aGUgZnRwIHNlcnZlciB0byBsb2NhbCBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGxvY2FsRmlsZSBUaGUgZmlsZSAod2l0aCBmdWxsIHBhdGgpIHlvdSB3YW50IHRvIHVwbG9hZC4gZS5nLiBcIi9sb2NhbC9wYXRoL3RvL2xvY2FsRmlsZVwiLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSByZW1vdGVGaWxlIFRoZSBmaWxlICh3aXRoIGZ1bGwgcGF0aCkgeW91IHdhbnQgdG8gbG9jYXRlZCBvbiB0aGUgZnRwIHNlcnZlci4gZS5nLiBcIi9hZGYvMTIzL25ld0Rpci9yZW1vdGVGaWxlXCIuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgSXQgd2lsbCBiZSB0cmlnZ2VyZWQgbWFueSB0aW1lcyBhY2NvcmRpbmcgdGhlIGZpbGUncyBzaXplLlxyXG4gICAqICAgICAgICAgICAgICAgICAgICAgICAgVGhlIGFyZyBgMGAsIGAwLjF4eGAsIGAwLjJ4eGAgLi4uIGAxYCBtZWFucyB0aGUgdXBsb2FkIHBlcmNlbnQuIFdoZW4gaXQgcmVhY2ggYDFgLCBtZWFucyBzdWNjZXNzLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgfSlcclxuICBkb3dubG9hZChsb2NhbEZpbGU6IHN0cmluZywgcmVtb3RlRmlsZTogc3RyaW5nKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENhbmNlbCBhbGwgcmVxdWVzdHMuIEFsd2F5cyBzdWNjZXNzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2FuY2VsKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNjb25uZWN0IGZyb20gZnRwIHNlcnZlci5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19