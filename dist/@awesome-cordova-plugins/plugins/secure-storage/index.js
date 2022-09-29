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
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaInstance, getPromise } from '@awesome-cordova-plugins/core';
var SecureStorageObject = /** @class */ (function () {
    function SecureStorageObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageObject.prototype.get = function (key) { return cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.set = function (key, value) { return cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.remove = function (key) { return cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.keys = function () { return cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.clear = function () { return cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageObject.prototype.secureDevice = function () { return cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageObject;
}());
export { SecureStorageObject };
var SecureStorageOriginal = /** @class */ (function (_super) {
    __extends(SecureStorageOriginal, _super);
    function SecureStorageOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageOriginal.prototype.create = function (store) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (res, rej) {
                    var instance = new (SecureStorageOriginal.getPlugin())(function () { return res(new SecureStorageObject(instance)); }, function () { return rej(new SecureStorageObject(instance)); }, store);
                });
            }
        })();
    };
    SecureStorageOriginal.pluginName = "SecureStorage";
    SecureStorageOriginal.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageOriginal.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return SecureStorageOriginal;
}(AwesomeCordovaNativePlugin));
var SecureStorage = new SecureStorageOriginal();
export { SecureStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2VjdXJlLXN0b3JhZ2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sa0VBS0wsVUFBVSxFQUNYLE1BQU0sK0JBQStCLENBQUM7O0lBTXJDLDZCQUFvQixlQUFvQjtRQUFwQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztJQUFHLENBQUM7SUFXNUMsaUNBQUcsYUFBQyxHQUFXO0lBY2YsaUNBQUcsYUFBQyxHQUFXLEVBQUUsS0FBYTtJQWE5QixvQ0FBTSxhQUFDLEdBQVc7SUFZbEIsa0NBQUk7SUFZSixtQ0FBSztJQVVMLDBDQUFZOzhCQXJGZDs7OztJQStJbUMsaUNBQTBCOzs7O0lBUTNELDhCQUFNLGFBQUMsS0FBYTs7O21EQUFnQztnQkFDbEQsT0FBTyxVQUFVLENBQXNCLFVBQUMsR0FBYSxFQUFFLEdBQWE7b0JBQ2xFLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FDOUMsY0FBTSxPQUFBLEdBQUcsQ0FBQyxJQUFJLG1CQUFtQixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLEVBQzVDLGNBQU0sT0FBQSxHQUFHLENBQUMsSUFBSSxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUF0QyxDQUFzQyxFQUM1QyxLQUFLLENBQ04sQ0FBQztnQkFDSixDQUFDLENBQUMsQ0FBQzthQUNKOzs7Ozs7Ozt3QkEvSkg7RUErSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENvcmRvdmFDaGVjayxcclxuICBDb3Jkb3ZhSW5zdGFuY2UsXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbiAgUGx1Z2luLFxyXG4gIGdldFByb21pc2UsXHJcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBTZWN1cmVTdG9yYWdlT2JqZWN0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXRzIGEgc3RvcmVkIGl0ZW1cclxuICAgKlxyXG4gICAqIEBwYXJhbSBrZXkge3N0cmluZ31cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgZ2V0KGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3JlcyBhIHZhbHVlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XHJcbiAgICogQHBhcmFtIHZhbHVlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXHJcbiAgICpcclxuICAgKiBAcGFyYW0ga2V5IHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBrZXkgdGhhdCB3YXMgcmVtb3ZlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgcmVtb3ZlKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhbGwgcmVmZXJlbmNlcyBmcm9tIHRoZSBzdG9yYWdlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nW10+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYXJyYXkgb2Yga2V5cyBzdG9yYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBrZXlzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIGFsbCByZWZlcmVuY2VzIGZyb20gdGhlIHN0b3JhZ2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgY2xlYXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEJyaW5ncyB1cCB0aGUgc2NyZWVuLWxvY2sgc2V0dGluZ3NcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgc2VjdXJlRGV2aWNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU2VjdXJlIFN0b3JhZ2VcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGdldHMsIHNldHMgYW5kIHJlbW92ZXMga2V5LHZhbHVlIHBhaXJzIGZyb20gYSBkZXZpY2UncyBzZWN1cmUgc3RvcmFnZS5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGBjb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIFNlY3VyZSBTdG9yYWdlIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9DcnlwaG8vY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UpLlxyXG4gKlxyXG4gKiBUaGUgYnJvd3NlciBwbGF0Zm9ybSBpcyBzdXBwb3J0ZWQgYXMgYSBtb2NrIG9ubHkuIEtleS92YWx1ZXMgYXJlIHN0b3JlZCB1bmVuY3J5cHRlZCBpbiBsb2NhbFN0b3JhZ2UuXHJcbiAqIEB1c2FnZVxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNlY3VyZVN0b3JhZ2UsIFNlY3VyZVN0b3JhZ2VPYmplY3QgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2VjdXJlLXN0b3JhZ2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzZWN1cmVTdG9yYWdlOiBTZWN1cmVTdG9yYWdlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc2VjdXJlU3RvcmFnZS5jcmVhdGUoJ215X3N0b3JlX25hbWUnKVxyXG4gKiAgIC50aGVuKChzdG9yYWdlOiBTZWN1cmVTdG9yYWdlT2JqZWN0KSA9PiB7XHJcbiAqXHJcbiAqICAgICAgc3RvcmFnZS5nZXQoJ2tleScpXHJcbiAqICAgICAgICAudGhlbihcclxuICogICAgICAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICogICAgICAgICAgZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpXHJcbiAqICAgICAgKTtcclxuICpcclxuICogICAgICBzdG9yYWdlLnNldCgna2V5JywgJ3ZhbHVlJylcclxuICogICAgICAgIC50aGVuKFxyXG4gKiAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gKiAgICAgICk7XHJcbiAqXHJcbiAqICAgICAgc3RvcmFnZS5yZW1vdmUoJ2tleScpXHJcbiAqICAgICAgLnRoZW4oXHJcbiAqICAgICAgICAgIGRhdGEgPT4gY29uc29sZS5sb2coZGF0YSksXHJcbiAqICAgICAgICAgIGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKVxyXG4gKiAgICAgICk7XHJcbiAqXHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAY2xhc3Nlc1xyXG4gKiBTZWN1cmVTdG9yYWdlT2JqZWN0XHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU2VjdXJlU3RvcmFnZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc2VjdXJlLXN0b3JhZ2UtZWNobycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNlY3VyZVN0b3JhZ2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbWlicml0bzcwNy9jb3Jkb3ZhLXBsdWdpbi1zZWN1cmUtc3RvcmFnZS1lY2hvJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNlY3VyZVN0b3JhZ2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5hbWVzcGFjZWQgc3RvcmFnZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdG9yZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFNlY3VyZVN0b3JhZ2VPYmplY3Q+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNyZWF0ZShzdG9yZTogc3RyaW5nKTogUHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxTZWN1cmVTdG9yYWdlT2JqZWN0PigocmVzOiBGdW5jdGlvbiwgcmVqOiBGdW5jdGlvbikgPT4ge1xyXG4gICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyAoU2VjdXJlU3RvcmFnZS5nZXRQbHVnaW4oKSkoXHJcbiAgICAgICAgKCkgPT4gcmVzKG5ldyBTZWN1cmVTdG9yYWdlT2JqZWN0KGluc3RhbmNlKSksXHJcbiAgICAgICAgKCkgPT4gcmVqKG5ldyBTZWN1cmVTdG9yYWdlT2JqZWN0KGluc3RhbmNlKSksXHJcbiAgICAgICAgc3RvcmVcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=