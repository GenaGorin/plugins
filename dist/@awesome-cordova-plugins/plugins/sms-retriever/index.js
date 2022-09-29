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
var SmsRetrieverOriginal = /** @class */ (function (_super) {
    __extends(SmsRetrieverOriginal, _super);
    function SmsRetrieverOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SmsRetrieverOriginal.prototype.startWatching = function () { return cordova(this, "startWatching", {}, arguments); };
    SmsRetrieverOriginal.prototype.getAppHash = function () { return cordova(this, "getAppHash", {}, arguments); };
    SmsRetrieverOriginal.pluginName = "SmsRetriever";
    SmsRetrieverOriginal.plugin = "cordova-plugin-sms-retriever-manager";
    SmsRetrieverOriginal.pluginRef = "cordova.plugins.smsRetriever";
    SmsRetrieverOriginal.repo = "https://github.com/hanatharesh2712/ionic-native-sms-retriever-plugin-master";
    SmsRetrieverOriginal.install = "ionic cordova plugin add cordova-plugin-sms-retriever-manager --variable PLAY_SERVICES_VERSION=\"15.0.1\"";
    SmsRetrieverOriginal.installVariables = ["PLAY_SERVICES_VERSION"];
    SmsRetrieverOriginal.platforms = ["Android"];
    return SmsRetrieverOriginal;
}(AwesomeCordovaNativePlugin));
var SmsRetriever = new SmsRetrieverOriginal();
export { SmsRetriever };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc21zLXJldHJpZXZlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFtQzFELGdDQUEwQjs7OztJQU8xRCxvQ0FBYTtJQVViLGlDQUFVOzs7Ozs7Ozt1QkFyRFo7RUFvQ2tDLDBCQUEwQjtTQUEvQyxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFNtcyBSZXRyaWV2ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHJldHJpdmVzIHRoZSBTTVMgd2hpY2ggYXJyaXZlIHdpdGhvdXQgcmVxdWlyaW5nIFJFQUQgcGVybWlzc2lvbnMuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNtc1JldHJpZXZlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zbXMtcmV0cmlldmVyL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc21zUmV0cmlldmVyOiBTbXNSZXRyaWV2ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5zbXNSZXRyaWV2ZXIuZ2V0QXBwSGFzaCgpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKiB0aGlzLnNtc1JldHJpZXZlci5zdGFydFdhdGNoaW5nKClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1Ntc1JldHJpZXZlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc21zLXJldHJpZXZlci1tYW5hZ2VyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuc21zUmV0cmlldmVyJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2hhbmF0aGFyZXNoMjcxMi9pb25pYy1uYXRpdmUtc21zLXJldHJpZXZlci1wbHVnaW4tbWFzdGVyJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXNtcy1yZXRyaWV2ZXItbWFuYWdlciAtLXZhcmlhYmxlIFBMQVlfU0VSVklDRVNfVkVSU0lPTj1cIjE1LjAuMVwiJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BMQVlfU0VSVklDRVNfVkVSU0lPTiddLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNtc1JldHJpZXZlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHN0YXJ0IHdhdGhjaGluZyBtZXNzYWdlIGFycml2ZSBldmVudCBhbmQgcmV0cml2ZSBtZXNzYWdlIHRleHQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gcmV0cml2ZXMgU01TIHRleHQgb3IgVElNRU9VVCBhZnRlciA1IG1pbi5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnRXYXRjaGluZygpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBpcyB0byBnZXQgaGFzaCBzdHJpbmcgb2YgQVBQLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHN1Y2Nlc3NmdWxseSBnZW5lcmF0ZSBoYXNoIG9mIEFQUC5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0QXBwSGFzaCgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=