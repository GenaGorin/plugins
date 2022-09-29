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
var FirebaseConfigOriginal = /** @class */ (function (_super) {
    __extends(FirebaseConfigOriginal, _super);
    function FirebaseConfigOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseConfigOriginal.prototype.fetch = function (expirationDuration) { return cordova(this, "fetch", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.activate = function () { return cordova(this, "activate", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.fetchAndActivate = function () { return cordova(this, "fetchAndActivate", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getBoolean = function (key) { return cordova(this, "getBoolean", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getString = function (key) { return cordova(this, "getString", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getNumber = function (key) { return cordova(this, "getNumber", { "sync": true }, arguments); };
    FirebaseConfigOriginal.prototype.getBytes = function (key) { return cordova(this, "getBytes", { "sync": true }, arguments); };
    FirebaseConfigOriginal.pluginName = "FirebaseConfig";
    FirebaseConfigOriginal.plugin = "cordova-plugin-firebase-config";
    FirebaseConfigOriginal.pluginRef = "cordova.plugins.firebase.config";
    FirebaseConfigOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-config";
    FirebaseConfigOriginal.platforms = ["Android", "iOS"];
    return FirebaseConfigOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseConfig = new FirebaseConfigOriginal();
export { FirebaseConfig };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtY29uZmlnL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQStCeEQsa0NBQTBCOzs7O0lBUTVELDhCQUFLLGFBQUMsa0JBQTJCO0lBVWpDLGlDQUFRO0lBVVIseUNBQWdCO0lBV2hCLG1DQUFVLGFBQUMsR0FBVztJQVd0QixrQ0FBUyxhQUFDLEdBQVc7SUFXckIsa0NBQVMsYUFBQyxHQUFXO0lBV3JCLGlDQUFRLGFBQUMsR0FBVzs7Ozs7O3lCQXhHdEI7RUFnQ29DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBiZXRhXHJcbiAqIEBuYW1lIEZpcmViYXNlIENvbmZpZ1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIENvbmZpZ1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaXJlYmFzZUNvbmZpZyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maXJlYmFzZS1jb25maWcvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZUNvbmZpZzogRmlyZWJhc2VDb25maWcpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5maXJlYmFzZUNvbmZpZy5nZXRCb29sZWFuKCdteV9rZXknKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlyZWJhc2VDb25maWcnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNvbmZpZycsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmZpcmViYXNlLmNvbmZpZycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWNvbmZpZycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQ29uZmlnIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBmZXRjaGluZyBjb25maWdzLCBhZGhlcmluZyB0byB0aGUgc3BlY2lmaWVkIG1pbmltdW0gZmV0Y2ggaW50ZXJ2YWwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gZXhwaXJhdGlvbkR1cmF0aW9uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVsbD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZmV0Y2goZXhwaXJhdGlvbkR1cmF0aW9uPzogbnVtYmVyKTogUHJvbWlzZTxudWxsPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3luY2hyb25vdXNseSBhY3RpdmF0ZXMgdGhlIG1vc3QgcmVjZW50bHkgZmV0Y2hlZCBjb25maWdzLCBzbyB0aGF0IHRoZSBmZXRjaGVkIGtleSB2YWx1ZSBwYWlycyB0YWtlIGVmZmVjdC5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bGw+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGFjdGl2YXRlKCk6IFByb21pc2U8bnVsbD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQXN5bmNocm9ub3VzbHkgZmV0Y2hlcyBhbmQgdGhlbiBhY3RpdmF0ZXMgdGhlIGZldGNoZWQgY29uZmlncy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bGw+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGZldGNoQW5kQWN0aXZhdGUoKTogUHJvbWlzZTxudWxsPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGZXRjaGVzIGEgYm9vbGVhbiBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0Qm9vbGVhbihrZXk6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhIHN0cmluZyBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0U3RyaW5nKGtleTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZldGNoZXMgYSBudW1lcmljIGNvbmZpZ3VyYXRpb24gdmFsdWUgZnJvbSBSZW1vdGVDb25maWdcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBrZXlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBnZXROdW1iZXIoa2V5OiBzdHJpbmcpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmV0Y2hlcyBhbiBhcnJheSBvZiBieXRlcyBjb25maWd1cmF0aW9uIHZhbHVlIGZyb20gUmVtb3RlQ29uZmlnXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0Qnl0ZXMoa2V5OiBzdHJpbmcpOiBQcm9taXNlPGFueVtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==