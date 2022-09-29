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
import { AwesomeCordovaNativePlugin, cordova, checkAvailability, cordovaInstance, instancePropertyGet, instancePropertySet } from '@awesome-cordova-plugins/core';
var SQLiteObject = /** @class */ (function () {
    function SQLiteObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SQLiteObject.prototype.addTransaction = function (transaction) { return cordovaInstance(this, "addTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.transaction = function (fn) { return cordovaInstance(this, "transaction", { "successIndex": 2, "errorIndex": 1 }, arguments); };
    SQLiteObject.prototype.readTransaction = function (fn) { return cordovaInstance(this, "readTransaction", {}, arguments); };
    SQLiteObject.prototype.startNextTransaction = function () { return cordovaInstance(this, "startNextTransaction", { "sync": true }, arguments); };
    SQLiteObject.prototype.open = function () { return cordovaInstance(this, "open", {}, arguments); };
    SQLiteObject.prototype.close = function () { return cordovaInstance(this, "close", {}, arguments); };
    SQLiteObject.prototype.executeSql = function (statement, params) { return cordovaInstance(this, "executeSql", {}, arguments); };
    SQLiteObject.prototype.sqlBatch = function (sqlStatements) { return cordovaInstance(this, "sqlBatch", {}, arguments); };
    SQLiteObject.prototype.abortallPendingTransactions = function () { return cordovaInstance(this, "abortallPendingTransactions", { "sync": true }, arguments); };
    Object.defineProperty(SQLiteObject.prototype, "databaseFeatures", {
        get: function () { return instancePropertyGet(this, "databaseFeatures"); },
        set: function (value) { instancePropertySet(this, "databaseFeatures", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SQLiteObject.prototype, "openDBs", {
        get: function () { return instancePropertyGet(this, "openDBs"); },
        set: function (value) { instancePropertySet(this, "openDBs", value); },
        enumerable: false,
        configurable: true
    });
    return SQLiteObject;
}());
export { SQLiteObject };
var SQLiteOriginal = /** @class */ (function (_super) {
    __extends(SQLiteOriginal, _super);
    function SQLiteOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SQLiteOriginal.prototype.create = function (config) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    sqlitePlugin.openDatabase(config, function (db) { return resolve(new SQLiteObject(db)); }, reject);
                });
            }
        })();
    };
    SQLiteOriginal.prototype.echoTest = function () { return cordova(this, "echoTest", {}, arguments); };
    SQLiteOriginal.prototype.selfTest = function () { return cordova(this, "selfTest", {}, arguments); };
    SQLiteOriginal.prototype.deleteDatabase = function (config) { return cordova(this, "deleteDatabase", {}, arguments); };
    SQLiteOriginal.pluginName = "SQLite";
    SQLiteOriginal.pluginRef = "sqlitePlugin";
    SQLiteOriginal.plugin = "cordova-sqlite-storage";
    SQLiteOriginal.repo = "https://github.com/litehelpers/Cordova-sqlite-storage";
    SQLiteOriginal.platforms = ["Android", "iOS", "macOS", "Windows"];
    return SQLiteOriginal;
}(AwesomeCordovaNativePlugin));
var SQLite = new SQLiteOriginal();
export { SQLite };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3FsaXRlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHFIQU9OLE1BQU0sK0JBQStCLENBQUM7O0lBd0RyQyxzQkFBbUIsZUFBb0I7UUFBcEIsb0JBQWUsR0FBZixlQUFlLENBQUs7SUFBRyxDQUFDO0lBUTNDLHFDQUFjLGFBQUMsV0FBNEM7SUFVM0Qsa0NBQVcsYUFBQyxFQUErQjtJQVMzQyxzQ0FBZSxhQUFDLEVBQW1DO0lBT25ELDJDQUFvQjtJQU1wQiwyQkFBSTtJQVFKLDRCQUFLO0lBWUwsaUNBQVUsYUFBQyxTQUFpQixFQUFFLE1BQWM7SUFTNUMsK0JBQVEsYUFBQyxhQUEwQztJQU9uRCxrREFBMkI7MEJBMUVQLDBDQUFnQjs7Ozs7OzBCQUNoQixpQ0FBTzs7Ozs7O3VCQW5FN0I7Ozs7SUEwTDRCLDBCQUEwQjs7OztJQVVwRCx1QkFBTSxhQUFDLE1BQTRCOzs7bURBQXlCO2dCQUMxRCxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07b0JBQ2pDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQUMsRUFBTyxJQUFLLE9BQUEsT0FBTyxDQUFDLElBQUksWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQTdCLENBQTZCLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3hGLENBQUMsQ0FBQyxDQUFDO2FBQ0o7OztJQVFELHlCQUFRO0lBVVIseUJBQVE7SUFXUiwrQkFBYyxhQUFDLE1BQTRCOzs7Ozs7aUJBck83QztFQTBMNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29yZG92YSxcclxuICBDb3Jkb3ZhQ2hlY2ssXHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbiAgUGx1Z2luLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgc3FsaXRlUGx1Z2luOiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNRTGl0ZURhdGFiYXNlQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBOYW1lIG9mIHRoZSBkYXRhYmFzZS4gRXhhbXBsZTogJ215LmRiJ1xyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBMb2NhdGlvbiBvZiB0aGUgZGF0YWJhc2UuIEV4YW1wbGU6ICdkZWZhdWx0J1xyXG4gICAqL1xyXG4gIGxvY2F0aW9uPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGlPUyBEYXRhYmFzZSBMb2NhdGlvbi4gRXhhbXBsZTogJ0xpYnJhcnknXHJcbiAgICovXHJcbiAgaW9zRGF0YWJhc2VMb2NhdGlvbj86IHN0cmluZztcclxuICAvKipcclxuICAgKiBzdXBwb3J0IGFyYml0cmFyeSBkYXRhYmFzZSBsb2NhdGlvbiBvbiBhbmRyb2lkIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV2Y29yZS1leHRidWlsZC1mcmVlXHJcbiAgICovXHJcbiAgYW5kcm9pZERhdGFiYXNlTG9jYXRpb24/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogc3VwcG9ydCBvcGVuaW5nIHByZS1maWxsZWQgZGF0YWJhc2VzIHdpdGggaHR0cHM6Ly9naXRodWIuY29tL2xpdGVoZWxwZXJzL2NvcmRvdmEtc3FsaXRlLWV4dFxyXG4gICAqL1xyXG4gIGNyZWF0ZUZyb21Mb2NhdGlvbj86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBzdXBwb3J0IGVuY3J5cHRlZCBkYXRhYmFzZXMgd2l0aCBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxjaXBoZXItYWRhcHRlclxyXG4gICAqL1xyXG4gIGtleT86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGJUcmFuc2FjdGlvbiB7XHJcbiAgZXhlY3V0ZVNxbDogKHNxbDogYW55LCB2YWx1ZXM/OiBhbnlbXSwgc3VjY2Vzcz86IEZ1bmN0aW9uLCBlcnJvcj86IEZ1bmN0aW9uKSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTUUxpdGVUcmFuc2FjdGlvbiBleHRlbmRzIERiVHJhbnNhY3Rpb24ge1xyXG4gIHN0YXJ0OiAoKSA9PiB2b2lkO1xyXG4gIGFkZFN0YXRlbWVudDogRGJUcmFuc2FjdGlvblsnZXhlY3V0ZVNxbCddO1xyXG4gIGhhbmRsZVN0YXRlbWVudFN1Y2Nlc3M6IChoYW5kbGVyOiBGdW5jdGlvbiwgcmVzcG9uc2U6IGFueSkgPT4gdm9pZDtcclxuICBoYW5kbGVTdGF0ZW1lbnRGYWlsdXJlOiAoaGFuZGxlcjogRnVuY3Rpb24sIHJlc3BvbnNlOiBhbnkpID0+IHZvaWQ7XHJcbiAgcnVuOiAoKSA9PiB2b2lkO1xyXG4gIGFib3J0OiAodHhGYWlsdXJlOiBhbnkpID0+IHZvaWQ7XHJcbiAgZmluaXNoOiAoKSA9PiB2b2lkO1xyXG4gIGFib3J0RnJvbVE6IChzcWxlcnJvcjogYW55KSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFNRTGl0ZU9iamVjdCB7XHJcbiAgY29uc3RydWN0b3IocHVibGljIF9vYmplY3RJbnN0YW5jZTogYW55KSB7fVxyXG5cclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIGRhdGFiYXNlRmVhdHVyZXM6IHsgaXNTUUxpdGVQbHVnaW5EYXRhYmFzZTogYm9vbGVhbiB9O1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgb3BlbkRCczogYW55O1xyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBhZGRUcmFuc2FjdGlvbih0cmFuc2FjdGlvbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAyLFxyXG4gICAgZXJyb3JJbmRleDogMSxcclxuICB9KVxyXG4gIHRyYW5zYWN0aW9uKGZuOiAodHg6IERiVHJhbnNhY3Rpb24pID0+IHZvaWQpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGZuIHtGdW5jdGlvbn1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIHJlYWRUcmFuc2FjdGlvbihmbjogKHR4OiBTUUxpdGVUcmFuc2FjdGlvbikgPT4gdm9pZCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YUluc3RhbmNlKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzdGFydE5leHRUcmFuc2FjdGlvbigpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgb3BlbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXhlY3V0ZSBTUUwgb24gdGhlIG9wZW5lZCBkYXRhYmFzZS4gTm90ZSwgeW91IG11c3QgY2FsbCBgY3JlYXRlYCBmaXJzdCwgYW5kXHJcbiAgICogZW5zdXJlIGl0IHJlc29sdmVkIGFuZCBzdWNjZXNzZnVsbHkgb3BlbmVkIHRoZSBkYXRhYmFzZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGF0ZW1lbnRcclxuICAgKiBAcGFyYW0gcGFyYW1zXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZXhlY3V0ZVNxbChzdGF0ZW1lbnQ6IHN0cmluZywgcGFyYW1zPzogYW55W10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHNxbFN0YXRlbWVudHMge3N0cmluZ1tdIHwgc3RyaW5nW11bXSB8IGFueVtdfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgc3FsQmF0Y2goc3FsU3RhdGVtZW50czogKHN0cmluZyB8IHN0cmluZ1tdIHwgYW55KVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGFib3J0YWxsUGVuZGluZ1RyYW5zYWN0aW9ucygpOiB2b2lkIHt9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTUUxpdGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFjY2VzcyBTUUxpdGUgZGF0YWJhc2VzIG9uIHRoZSBkZXZpY2UuXHJcbiAqIEB1c2FnZVxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNRTGl0ZSwgU1FMaXRlT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3NxbGl0ZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNxbGl0ZTogU1FMaXRlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3FsaXRlLmNyZWF0ZSh7XHJcbiAqICAgbmFtZTogJ2RhdGEuZGInLFxyXG4gKiAgIGxvY2F0aW9uOiAnZGVmYXVsdCdcclxuICogfSlcclxuICogICAudGhlbigoZGI6IFNRTGl0ZU9iamVjdCkgPT4ge1xyXG4gKlxyXG4gKlxyXG4gKiAgICAgZGIuZXhlY3V0ZVNxbCgnY3JlYXRlIHRhYmxlIGRhbmNlTW92ZXMobmFtZSBWQVJDSEFSKDMyKSknLCBbXSlcclxuICogICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0V4ZWN1dGVkIFNRTCcpKVxyXG4gKiAgICAgICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAqXHJcbiAqXHJcbiAqICAgfSlcclxuICogICAuY2F0Y2goZSA9PiBjb25zb2xlLmxvZyhlKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAY2xhc3Nlc1xyXG4gKiBTUUxpdGVPYmplY3RcclxuICogQGludGVyZmFjZXNcclxuICogU1FMaXRlRGF0YWJhc2VDb25maWdcclxuICogU1FMaXRlVHJhbnNhY3Rpb25cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTUUxpdGUnLFxyXG4gIHBsdWdpblJlZjogJ3NxbGl0ZVBsdWdpbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1zcWxpdGUtc3RvcmFnZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9saXRlaGVscGVycy9Db3Jkb3ZhLXNxbGl0ZS1zdG9yYWdlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTUUxpdGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbiBvciBjcmVhdGUgYSBTUUxpdGUgZGF0YWJhc2UgZmlsZS5cclxuICAgKlxyXG4gICAqIFNlZSB0aGUgcGx1Z2luIGRvY3MgZm9yIGFuIGV4cGxhbmF0aW9uIG9mIGFsbCBvcHRpb25zOiBodHRwczovL2dpdGh1Yi5jb20vbGl0ZWhlbHBlcnMvQ29yZG92YS1zcWxpdGUtc3RvcmFnZSNvcGVuaW5nLWEtZGF0YWJhc2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb25maWcge1NRTGl0ZURhdGFiYXNlQ29uZmlnfSBkYXRhYmFzZSBjb25maWd1cmF0aW9uXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxTUUxpdGVPYmplY3Q+XHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY3JlYXRlKGNvbmZpZzogU1FMaXRlRGF0YWJhc2VDb25maWcpOiBQcm9taXNlPFNRTGl0ZU9iamVjdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3FsaXRlUGx1Z2luLm9wZW5EYXRhYmFzZShjb25maWcsIChkYjogYW55KSA9PiByZXNvbHZlKG5ldyBTUUxpdGVPYmplY3QoZGIpKSwgcmVqZWN0KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZ5IHRoYXQgYm90aCB0aGUgSmF2YXNjcmlwdCBhbmQgbmF0aXZlIHBhcnQgb2YgdGhpcyBwbHVnaW4gYXJlIGluc3RhbGxlZCBpbiB5b3VyIGFwcGxpY2F0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlY2hvVGVzdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXV0b21hdGljYWxseSB2ZXJpZnkgYmFzaWMgZGF0YWJhc2UgYWNjZXNzIG9wZXJhdGlvbnMgaW5jbHVkaW5nIG9wZW5pbmcgYSBkYXRhYmFzZVxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VsZlRlc3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBkYXRhYmFzZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbmZpZyB7U1FMaXRlRGF0YWJhc2VDb25maWd9IGRhdGFiYXNlIGNvbmZpZ3VyYXRpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZWxldGVEYXRhYmFzZShjb25maWc6IFNRTGl0ZURhdGFiYXNlQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19