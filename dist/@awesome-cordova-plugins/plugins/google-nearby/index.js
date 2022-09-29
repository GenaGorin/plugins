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
var GoogleNearbyOriginal = /** @class */ (function (_super) {
    __extends(GoogleNearbyOriginal, _super);
    function GoogleNearbyOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearbyOriginal.prototype.publish = function (message) { return cordova(this, "publish", {}, arguments); };
    GoogleNearbyOriginal.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearbyOriginal.pluginName = "GoogleNearby";
    GoogleNearbyOriginal.plugin = "cordova-plugin-google-nearby";
    GoogleNearbyOriginal.pluginRef = "window.nearby";
    GoogleNearbyOriginal.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearbyOriginal.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearbyOriginal.installVariables = ["API_KEY"];
    GoogleNearbyOriginal.platforms = ["Android"];
    return GoogleNearbyOriginal;
}(AwesomeCordovaNativePlugin));
var GoogleNearby = new GoogleNearbyOriginal();
export { GoogleNearby };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ29vZ2xlLW5lYXJieS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWdDQSxnQ0FBMEI7Ozs7SUFRMUQsOEJBQU8sYUFBQyxPQUFlO0lBYXZCLGdDQUFTOzs7Ozs7Ozt1QkF2RFg7RUFrQ2tDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgR29vZ2xlIE5lYXJieVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgR29vZ2xlIE5lYXJieSBNZXNzYWdlcyBBUEkuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEdvb2dsZU5lYXJieSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9nb29nbGUtbmVhcmJ5L25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ29vZ2xlTmVhcmJ5OiBHb29nbGVOZWFyYnkpIHsgfVxyXG4gKlxyXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5wdWJsaXNoKCdIZWxsbycpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLmdvb2dsZU5lYXJieS5zdWJzY3JpYmUoKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnR29vZ2xlTmVhcmJ5JyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5JyxcclxuICBwbHVnaW5SZWY6ICd3aW5kb3cubmVhcmJ5JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hhaGFoYW5uZXMvY29yZG92YS1wbHVnaW4tZ29vZ2xlLW5lYXJieScsXHJcbiAgaW5zdGFsbDogJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBjb3Jkb3ZhLXBsdWdpbi1nb29nbGUtbmVhcmJ5IC0tdmFyaWFibGUgQVBJX0tFWT1cIjEyMzQ1Njc4OVwiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ0FQSV9LRVknXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBHb29nbGVOZWFyYnkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUHVibGlzaCBhIG1lc3NhZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHtzdHJpbmd9IE1lc3NhZ2UgdG8gcHVibGlzaFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgbWVzc2FnZSBnb3QgcHVibGlzaGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHB1Ymxpc2gobWVzc2FnZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnNjcmliZSB0byByZWNlaXZlIG1lc3NhZ2VzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBSZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBlbWl0cyByZWNlaXZlZCBtZXNzYWdlc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAndW5zdWJzY3JpYmUnLFxyXG4gIH0pXHJcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==