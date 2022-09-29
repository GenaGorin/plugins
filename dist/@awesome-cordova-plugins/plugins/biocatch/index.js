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
var BioCatchOriginal = /** @class */ (function (_super) {
    __extends(BioCatchOriginal, _super);
    function BioCatchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatchOriginal.prototype.start = function (customerSessionID, wupUrl, publicKey) { return cordova(this, "start", {}, arguments); };
    BioCatchOriginal.prototype.pause = function () { return cordova(this, "pause", {}, arguments); };
    BioCatchOriginal.prototype.resume = function () { return cordova(this, "resume", {}, arguments); };
    BioCatchOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BioCatchOriginal.prototype.resetSession = function () { return cordova(this, "resetSession", {}, arguments); };
    BioCatchOriginal.prototype.changeContext = function (contextName) { return cordova(this, "changeContext", {}, arguments); };
    BioCatchOriginal.prototype.updateCustomerSessionID = function (customerSessionID) { return cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatchOriginal.pluginName = "BioCatch";
    BioCatchOriginal.plugin = "cordova-plugin-biocatch";
    BioCatchOriginal.pluginRef = "BioCatch";
    BioCatchOriginal.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatchOriginal.platforms = ["iOS", "Android"];
    return BioCatchOriginal;
}(AwesomeCordovaNativePlugin));
var BioCatch = new BioCatchOriginal();
export { BioCatch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmlvY2F0Y2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBOEI5RCw0QkFBMEI7Ozs7SUFVdEQsd0JBQUssYUFBQyxpQkFBZ0MsRUFBRSxNQUFjLEVBQUUsU0FBd0I7SUFVaEYsd0JBQUs7SUFVTCx5QkFBTTtJQVVOLHVCQUFJO0lBVUosK0JBQVk7SUFXWixnQ0FBYSxhQUFDLFdBQW1CO0lBV2pDLDBDQUF1QixhQUFDLGlCQUFnQzs7Ozs7O21CQXZHMUQ7RUErQjhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEJpb0NhdGNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBCaW9DYXRjaCBTREsgQ29yZG92YSBzdXBwb3J0XHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJpb0NhdGNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2Jpb2NhdGNoJztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiaW9jYXRjaDogQmlvQ2F0Y2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5iaW9jYXRjaC5zdGFydCgnY3VzdG9tZXItc2Vzc2lvbi0xJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScsICdzb21lLXB1YmxpYy1rZXknKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQmlvQ2F0Y2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJpb2NhdGNoJyxcclxuICBwbHVnaW5SZWY6ICdCaW9DYXRjaCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vYml0YnVja2V0Lm9yZy9jYXJsb3Nfb3JlbGxhbmEvaW9uaWMtcGx1Z2luJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmlvQ2F0Y2ggZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU3RhcnQgYSBzZXNzaW9uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY3VzdG9tZXJTZXNzaW9uSUQge1N0cmluZ30gQ3VzdG9tZXIgc2Vzc2lvbiBpZFxyXG4gICAqIEBwYXJhbSB3dXBVcmwge1N0cmluZ30gV1VQIHNlcnZlciBVUkxcclxuICAgKiBAcGFyYW0gcHVibGljS2V5IHtTdHJpbmd9IFB1YmxpYyBLZXlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnQoY3VzdG9tZXJTZXNzaW9uSUQ6IHN0cmluZyB8IG51bGwsIHd1cFVybDogc3RyaW5nLCBwdWJsaWNLZXk6IHN0cmluZyB8IG51bGwpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlIHRoZSBzZXNzaW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcGF1c2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXN1bWUgdGhlIHNlc3Npb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXN1bWUoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHRoZSBzZXNzaW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc2V0IHRoZSBzZXNzaW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVzZXRTZXNzaW9uKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlIHRoZSBzZXNzaW9uIGNvbnRleHRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb250ZXh0TmFtZSB7U3RyaW5nfSBDb250ZXh0IG5hbWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn0gUmV0dXJucyBhIHByb21pc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hhbmdlQ29udGV4dChjb250ZXh0TmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGUgdGhlIGN1c3RvbWVyIHNlc3Npb24gSURcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjdXN0b21lclNlc3Npb25JRCB7U3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgcHJvbWlzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVDdXN0b21lclNlc3Npb25JRChjdXN0b21lclNlc3Npb25JRDogc3RyaW5nIHwgbnVsbCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=