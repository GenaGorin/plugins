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
var CustomUISDKOriginal = /** @class */ (function (_super) {
    __extends(CustomUISDKOriginal, _super);
    function CustomUISDKOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CustomUISDKOriginal.prototype.fetchAuthCode = function (clientId, mid) { return cordova(this, "fetchAuthCode", {}, arguments); };
    CustomUISDKOriginal.prototype.isPaytmAppInstalled = function () { return cordova(this, "isPaytmAppInstalled", {}, arguments); };
    CustomUISDKOriginal.prototype.checkHasInstrument = function (mid) { return cordova(this, "checkHasInstrument", {}, arguments); };
    CustomUISDKOriginal.prototype.initPaytmSDK = function (mid, orderId, txnToken, amount, isStaging, callbackUrl) { return cordova(this, "initPaytmSDK", {}, arguments); };
    CustomUISDKOriginal.prototype.goForWalletTransaction = function (paymentFlow) { return cordova(this, "goForWalletTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.appInvoke = function () { return cordova(this, "appInvoke", {}, arguments); };
    CustomUISDKOriginal.prototype.goForNewCardTransaction = function (cardNumber, cardExpiry, cardCvv, cardType, paymentFlow, channelCode, issuingBankCode, emiChannelId, authMode, saveCard) { return cordova(this, "goForNewCardTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.goForSavedCardTransaction = function (cardId, cardCvv, cardType, paymentFlow, channelCode, issuingBankCode, emiChannelId, authMode) { return cordova(this, "goForSavedCardTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.goForNetBankingTransaction = function (netBankingCode, paymentFlow) { return cordova(this, "goForNetBankingTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.goForUpiCollectTransaction = function (upiCode, paymentFlow, saveVPA) { return cordova(this, "goForUpiCollectTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.getUpiIntentList = function () { return cordova(this, "getUpiIntentList", {}, arguments); };
    CustomUISDKOriginal.prototype.goForUpiIntentTransaction = function (appName, paymentFlow) { return cordova(this, "goForUpiIntentTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.goForUpiPushTransaction = function (paymentFlow, bankAccountJson, vpaName, merchantDetailsJson) { return cordova(this, "goForUpiPushTransaction", {}, arguments); };
    CustomUISDKOriginal.prototype.fetchUpiBalance = function (bankAccountJson, vpaName) { return cordova(this, "fetchUpiBalance", {}, arguments); };
    CustomUISDKOriginal.prototype.setUpiMpin = function (bankAccountJson, vpaName) { return cordova(this, "setUpiMpin", {}, arguments); };
    CustomUISDKOriginal.prototype.getBin = function (cardSixDigit, tokenType, token, mid, referenceId) { return cordova(this, "getBin", {}, arguments); };
    CustomUISDKOriginal.prototype.fetchNBList = function (tokenType, token, mid, orderId, referenceId) { return cordova(this, "fetchNBList", {}, arguments); };
    CustomUISDKOriginal.prototype.fetchEmiDetails = function (channelCode, cardType) { return cordova(this, "fetchEmiDetails", {}, arguments); };
    CustomUISDKOriginal.prototype.getLastNBSavedBank = function () { return cordova(this, "getLastNBSavedBank", {}, arguments); };
    CustomUISDKOriginal.prototype.getLastSavedVPA = function () { return cordova(this, "getLastSavedVPA", {}, arguments); };
    CustomUISDKOriginal.prototype.isAuthCodeValid = function (clientId, authCode) { return cordova(this, "isAuthCodeValid", {}, arguments); };
    CustomUISDKOriginal.prototype.getEnvironment = function () { return cordova(this, "getEnvironment", {}, arguments); };
    CustomUISDKOriginal.prototype.setEnvironment = function (environment) { return cordova(this, "setEnvironment", {}, arguments); };
    CustomUISDKOriginal.pluginName = "cordova-paytm-customuisdk";
    CustomUISDKOriginal.plugin = "cordova-paytm-customuisdk";
    CustomUISDKOriginal.pluginRef = "paytm.customuisdk";
    CustomUISDKOriginal.repo = "https://github.com/paytm/paytm-customuisdk-cordova";
    CustomUISDKOriginal.install = "";
    CustomUISDKOriginal.installVariables = [];
    CustomUISDKOriginal.platforms = ["Android, iOS"];
    return CustomUISDKOriginal;
}(AwesomeCordovaNativePlugin));
var CustomUISDK = new CustomUISDKOriginal();
export { CustomUISDK };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY3VzdG9tLXVpc2RrL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQU9OLE1BQU0sK0JBQStCLENBQUM7O0lBNEJOLCtCQUEwQjs7OztJQVN6RCxtQ0FBYSxhQUFDLFFBQWdCLEVBQUUsR0FBVztJQVUzQyx5Q0FBbUI7SUFTbkIsd0NBQWtCLGFBQUMsR0FBVztJQWE5QixrQ0FBWSxhQUNWLEdBQVcsRUFDWCxPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsTUFBYyxFQUNkLFNBQWtCLEVBQ2xCLFdBQW1CO0lBVXJCLDRDQUFzQixhQUFDLFdBQW1CO0lBUTFDLCtCQUFTO0lBa0JULDZDQUF1QixhQUNyQixVQUFrQixFQUNsQixVQUFrQixFQUNsQixPQUFlLEVBQ2YsUUFBZ0IsRUFDaEIsV0FBbUIsRUFDbkIsV0FBbUIsRUFDbkIsZUFBdUIsRUFDdkIsWUFBb0IsRUFDcEIsUUFBZ0IsRUFDaEIsUUFBaUI7SUFpQm5CLCtDQUF5QixhQUN2QixNQUFjLEVBQ2QsT0FBZSxFQUNmLFFBQWdCLEVBQ2hCLFdBQW1CLEVBQ25CLFdBQW1CLEVBQ25CLGVBQXVCLEVBQ3ZCLFlBQW9CLEVBQ3BCLFFBQWdCO0lBV2xCLGdEQUEwQixhQUFDLGNBQXNCLEVBQUUsV0FBbUI7SUFXdEUsZ0RBQTBCLGFBQUMsT0FBZSxFQUFFLFdBQW1CLEVBQUUsT0FBZ0I7SUFRakYsc0NBQWdCO0lBVWhCLCtDQUF5QixhQUFDLE9BQWUsRUFBRSxXQUFtQjtJQVk5RCw2Q0FBdUIsYUFDckIsV0FBbUIsRUFDbkIsZUFBbUIsRUFDbkIsT0FBZSxFQUNmLG1CQUF1QjtJQVd6QixxQ0FBZSxhQUFDLGVBQW1CLEVBQUUsT0FBZTtJQVVwRCxnQ0FBVSxhQUFDLGVBQW1CLEVBQUUsT0FBZTtJQWEvQyw0QkFBTSxhQUFDLFlBQW9CLEVBQUUsU0FBaUIsRUFBRSxLQUFhLEVBQUUsR0FBVyxFQUFFLFdBQW1CO0lBYS9GLGlDQUFXLGFBQUMsU0FBaUIsRUFBRSxLQUFhLEVBQUUsR0FBVyxFQUFFLE9BQWUsRUFBRSxXQUFtQjtJQVUvRixxQ0FBZSxhQUFDLFdBQW1CLEVBQUUsUUFBZ0I7SUFTckQsd0NBQWtCO0lBU2xCLHFDQUFlO0lBVWYscUNBQWUsYUFBQyxRQUFnQixFQUFFLFFBQWdCO0lBUWxELG9DQUFjO0lBUWQsb0NBQWMsYUFBQyxXQUFtQjs7Ozs7Ozs7c0JBdlRwQztFQW9DaUMsMEJBQTBCO1NBQTlDLFdBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgUGx1Z2luLFxyXG4gIENvcmRvdmEsXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIENvcmRvdmFJbnN0YW5jZSxcclxuICBJbnN0YW5jZVByb3BlcnR5LFxyXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDdXN0b21VSVNES1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gaXMgdXNlZCB0byBhY2Nlc3MgUGF5dG0ncyBuYXRpdmUgQ3VzdG9tVUlTREsgZnJhbWV3b3JrJ3MgYXBpcy5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ3VzdG9tVUlTREsgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY3VzdG9tLXVpc2RrL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY3VzdG9tdWlzZGs6IEN1c3RvbVVJU0RLKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqIHRoaXMuY3VzdG9tdWlzZGsuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ2NvcmRvdmEtcGF5dG0tY3VzdG9tdWlzZGsnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGF5dG0tY3VzdG9tdWlzZGsnLFxyXG4gIHBsdWdpblJlZjogJ3BheXRtLmN1c3RvbXVpc2RrJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BheXRtL3BheXRtLWN1c3RvbXVpc2RrLWNvcmRvdmEnLFxyXG4gIGluc3RhbGw6ICcnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkLCBpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tVUlTREsgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzaG93IGRpYWxvZyB0byBhc2sgdXNlciBwZXJtaXNpb24gdG8gZmV0Y2ggYXV0aGNvZGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjbGllbnRJZCB7c3RyaW5nfSB1bmlxdWUgaWQgZ2l2ZSB0byBlYWNoIG1lcmNoYW50XHJcbiAgICogQHBhcmFtIG1pZCB7c3RyaW5nfSBtZXJjaGFudCBpZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYXV0aGNvZGVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hBdXRoQ29kZShjbGllbnRJZDogc3RyaW5nLCBtaWQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIGNoZWNrIHRoYXQgcGF5dG0gYXBwIGlzIGluc3RhbGxlZCBvciBub3RcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGluc3RhbGxlZCAtIHRydWUgb3Igbm90IC1mYWxzZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc1BheXRtQXBwSW5zdGFsbGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIG1pZCB7c3RyaW5nfSBtZXJjaGFudCBpZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGlmIGhhcyBwYXltZW50IG1ldGhvZHMgLSB0cnVlIG9yIG5vdCAtZmFsc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hlY2tIYXNJbnN0cnVtZW50KG1pZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gbWlkIHtzdHJpbmd9IG1lcmNoYW50IGlkXHJcbiAgICogQHBhcmFtIG9yZGVySWQge3N0cmluZ30gb3JkZXIgaWRcclxuICAgKiBAcGFyYW0gdHhuVG9rZW4ge3N0cmluZ30gdHJhbnNhY3Rpb24gdG9rZW5cclxuICAgKiBAcGFyYW0gYW1vdW50IHtzdHJpbmd9IHRyYW5zYWN0aW9uIGFtb3VudFxyXG4gICAqIEBwYXJhbSBpc1N0YWdpbmcge2Jvb2xlYW59IHN0YWdpbmcgb3IgcHJvZHVjdGlvblxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1VybCB7c3RyaW5nfSBjYWxsYmFjayB1cmwgb25seSByZXF1aXJlZCBmb3IgY3VzdG9tIHVybCBwYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXRQYXl0bVNESyhcclxuICAgIG1pZDogc3RyaW5nLFxyXG4gICAgb3JkZXJJZDogc3RyaW5nLFxyXG4gICAgdHhuVG9rZW46IHN0cmluZyxcclxuICAgIGFtb3VudDogc3RyaW5nLFxyXG4gICAgaXNTdGFnaW5nOiBib29sZWFuLFxyXG4gICAgY2FsbGJhY2tVcmw6IHN0cmluZ1xyXG4gICkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHBheW1lbnRGbG93IHtzdHJpbmd9IHBheW1lbnQgdHlwZSBOT05FLCBBRERBTkRQQVlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnb0ZvcldhbGxldFRyYW5zYWN0aW9uKHBheW1lbnRGbG93OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBvYmplY3Qgb2YgcmVzcG9uc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYXBwSW52b2tlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY2FyZE51bWJlciB7c3RyaW5nfSBjYXJkIG51bWJlclxyXG4gICAqIEBwYXJhbSBjYXJkRXhwaXJ5IHtzdHJpbmd9IGNhcmQgZXhwaXJ5XHJcbiAgICogQHBhcmFtIGNhcmRDdnYge3N0cmluZ30gY2FyZCBjdnZcclxuICAgKiBAcGFyYW0gY2FyZFR5cGUge3N0cmluZ30gY2FyZCB0eXBlIGRlYml0IG9yIGNyZWRpdFxyXG4gICAqIEBwYXJhbSBwYXltZW50RmxvdyB7c3RyaW5nfSBwYXltZW50IHR5cGUgTk9ORSwgQUREQU5EUEFZXHJcbiAgICogQHBhcmFtIGNoYW5uZWxDb2RlIHtzdHJpbmd9IGJhbmsgY2hhbm5lbCBjb2RlXHJcbiAgICogQHBhcmFtIGlzc3VpbmdCYW5rQ29kZSB7c3RyaW5nfSBpc3N1aW5nIGJhbmsgY29kZVxyXG4gICAqIEBwYXJhbSBlbWlDaGFubmVsSWQge3N0cmluZ30gZW1pIHBsYW4gaWRcclxuICAgKiBAcGFyYW0gYXV0aE1vZGUge3N0cmluZ30gYXV0aGVudGljYXRpb24gbW9kZSAnb3RwJyAncGluJ1xyXG4gICAqIEBwYXJhbSBzYXZlQ2FyZCB7Ym9vbGVhbn0gc2F2ZSBjYXJkIGZvciBuZXh0IHRpbWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnb0Zvck5ld0NhcmRUcmFuc2FjdGlvbihcclxuICAgIGNhcmROdW1iZXI6IHN0cmluZyxcclxuICAgIGNhcmRFeHBpcnk6IHN0cmluZyxcclxuICAgIGNhcmRDdnY6IHN0cmluZyxcclxuICAgIGNhcmRUeXBlOiBzdHJpbmcsXHJcbiAgICBwYXltZW50Rmxvdzogc3RyaW5nLFxyXG4gICAgY2hhbm5lbENvZGU6IHN0cmluZyxcclxuICAgIGlzc3VpbmdCYW5rQ29kZTogc3RyaW5nLFxyXG4gICAgZW1pQ2hhbm5lbElkOiBzdHJpbmcsXHJcbiAgICBhdXRoTW9kZTogc3RyaW5nLFxyXG4gICAgc2F2ZUNhcmQ6IGJvb2xlYW5cclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGNhcmRJZCB7c3RyaW5nfSBjYXJkIGlkIG9mIHNhdmVkIGNhcmRcclxuICAgKiBAcGFyYW0gY2FyZEN2diB7c3RyaW5nfSBjYXJkIGN2dlxyXG4gICAqIEBwYXJhbSBjYXJkVHlwZSB7c3RyaW5nfSBjYXJkIHR5cGUgIGRlYml0IG9yIGNyZWRpdFxyXG4gICAqIEBwYXJhbSBwYXltZW50RmxvdyB7c3RyaW5nfSBwYXltZW50IHR5cGUgTk9ORSwgQUREQU5EUEFZXHJcbiAgICogQHBhcmFtIGNoYW5uZWxDb2RlIHtzdHJpbmd9IGJhbmsgY2hhbm5lbCBjb2RlXHJcbiAgICogQHBhcmFtIGlzc3VpbmdCYW5rQ29kZSB7c3RyaW5nfSBpc3N1aW5nIGJhbmsgY29kZVxyXG4gICAqIEBwYXJhbSBlbWlDaGFubmVsSWQge3N0cmluZ30gZW1pIHBsYW4gaWRcclxuICAgKiBAcGFyYW0gYXV0aE1vZGUge3N0cmluZ30gYXV0aGVudGljYXRpb24gbW9kZSAnb3RwJyAncGluJ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgb2JqZWN0IG9mIHJlc3BvbnNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdvRm9yU2F2ZWRDYXJkVHJhbnNhY3Rpb24oXHJcbiAgICBjYXJkSWQ6IHN0cmluZyxcclxuICAgIGNhcmRDdnY6IHN0cmluZyxcclxuICAgIGNhcmRUeXBlOiBzdHJpbmcsXHJcbiAgICBwYXltZW50Rmxvdzogc3RyaW5nLFxyXG4gICAgY2hhbm5lbENvZGU6IHN0cmluZyxcclxuICAgIGlzc3VpbmdCYW5rQ29kZTogc3RyaW5nLFxyXG4gICAgZW1pQ2hhbm5lbElkOiBzdHJpbmcsXHJcbiAgICBhdXRoTW9kZTogc3RyaW5nXHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBuZXRCYW5raW5nQ29kZSB7c3RyaW5nfSBiYW5rIGNoYW5uZWwgY29kZVxyXG4gICAqIEBwYXJhbSBwYXltZW50RmxvdyB7c3RyaW5nfSBwYXltZW50IHR5cGUgTk9ORSwgQUREQU5EUEFZXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBvYmplY3Qgb2YgcmVzcG9uc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ29Gb3JOZXRCYW5raW5nVHJhbnNhY3Rpb24obmV0QmFua2luZ0NvZGU6IHN0cmluZywgcGF5bWVudEZsb3c6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdXBpQ29kZSB7c3RyaW5nfSB1cGkgY29kZVxyXG4gICAqIEBwYXJhbSBwYXltZW50RmxvdyB7c3RyaW5nfSBwYXltZW50IHR5cGUgTk9ORSwgQUREQU5EUEFZXHJcbiAgICogQHBhcmFtIHNhdmVWUEEge2Jvb2xlYW59IHNhdmUgdnBhIGZvciBmdXR1cmUgdHJhbnNhY3Rpb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnb0ZvclVwaUNvbGxlY3RUcmFuc2FjdGlvbih1cGlDb2RlOiBzdHJpbmcsIHBheW1lbnRGbG93OiBzdHJpbmcsIHNhdmVWUEE6IGJvb2xlYW4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyB1cGkgYXBwIGxpc3QgbmFtZXNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0VXBpSW50ZW50TGlzdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGFwcE5hbWUge3N0cmluZ30gdXBpIGFwcCBuYW1lXHJcbiAgICogQHBhcmFtIHBheW1lbnRGbG93IHtzdHJpbmd9IHBheW1lbnQgdHlwZSBOT05FLCBBRERBTkRQQVlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnb0ZvclVwaUludGVudFRyYW5zYWN0aW9uKGFwcE5hbWU6IHN0cmluZywgcGF5bWVudEZsb3c6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdnBhTmFtZSB7c3RyaW5nfSB2cGEgbmFtZVxyXG4gICAqIEBwYXJhbSBwYXltZW50RmxvdyB7c3RyaW5nfSBwYXltZW50IHR5cGUgTk9ORSwgQUREQU5EUEFZXHJcbiAgICogQHBhcmFtIGJhbmtBY2NvdW50SnNvbiB7e319IGJhbmsgYWNjb3VudCBqc29uIG9iamVjdFxyXG4gICAqIEBwYXJhbSBtZXJjaGFudERldGFpbHNKc29uIHt7fX0gbWVyY2hhbnQgZGV0YWlsIGpzb25cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnb0ZvclVwaVB1c2hUcmFuc2FjdGlvbihcclxuICAgIHBheW1lbnRGbG93OiBzdHJpbmcsXHJcbiAgICBiYW5rQWNjb3VudEpzb246IHt9LFxyXG4gICAgdnBhTmFtZTogc3RyaW5nLFxyXG4gICAgbWVyY2hhbnREZXRhaWxzSnNvbjoge31cclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHZwYU5hbWUge3N0cmluZ30gdnBhIG5hbWVcclxuICAgKiBAcGFyYW0gYmFua0FjY291bnRKc29uIHt7fX0gYmFuayBhY2NvdW50IGpzb24gb2JqZWN0XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBvYmplY3Qgb2YgcmVzcG9uc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZmV0Y2hVcGlCYWxhbmNlKGJhbmtBY2NvdW50SnNvbjoge30sIHZwYU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gdnBhTmFtZSB7c3RyaW5nfSB2cGEgbmFtZVxyXG4gICAqIEBwYXJhbSBiYW5rQWNjb3VudEpzb24ge3t9fSBiYW5rIGFjY291bnQganNvbiBvYmplY3RcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRVcGlNcGluKGJhbmtBY2NvdW50SnNvbjoge30sIHZwYU5hbWU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY2FyZFNpeERpZ2l0IHtzdHJpbmd9IGNhcmQgc3RhcnRpbmcgc2l4IGRpZ2l0XHJcbiAgICogQHBhcmFtIHRva2VuVHlwZSB7c3RyaW5nfSB0b2tlbiB0eXBlIEFDQ0VTUyBvciBUWE5fVE9LRU5cclxuICAgKiBAcGFyYW0gdG9rZW4ge3N0cmluZ30gdG9rZW4gZmV0Y2ggZnJvbSBhcGlcclxuICAgKiBAcGFyYW0gbWlkIHtzdHJpbmd9IG1lcmNoYW50IGlkXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZUlkIHtzdHJpbmd9IHJlZmVyZW5jZSBpZFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgb2JqZWN0IG9mIHJlc3BvbnNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEJpbihjYXJkU2l4RGlnaXQ6IHN0cmluZywgdG9rZW5UeXBlOiBzdHJpbmcsIHRva2VuOiBzdHJpbmcsIG1pZDogc3RyaW5nLCByZWZlcmVuY2VJZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB0b2tlblR5cGUge3N0cmluZ30gdG9rZW4gdHlwZSBBQ0NFU1Mgb3IgVFhOX1RPS0VOXHJcbiAgICogQHBhcmFtIHRva2VuIHtzdHJpbmd9IHRva2VuIGZldGNoIGZyb20gYXBpXHJcbiAgICogQHBhcmFtIG1pZCB7c3RyaW5nfSBtZXJjaGFudCBpZFxyXG4gICAqIEBwYXJhbSBvcmRlcklkIHtzdHJpbmd9IG9yZGVyIGlkIHJlcXVpcmVkIG9ubHkgaWYgdG9rZW4gdHlwZSBpcyBUWE5fVE9LRU5cclxuICAgKiBAcGFyYW0gcmVmZXJlbmNlSWQge3N0cmluZ30gcmVmZXJlbmNlIGlkIHJlcXVpcmVkIG9ubHkgaWYgdG9rZW4gdHlwZSBpcyBBQ0NFU1NcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIG9iamVjdCBvZiByZXNwb25zZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBmZXRjaE5CTGlzdCh0b2tlblR5cGU6IHN0cmluZywgdG9rZW46IHN0cmluZywgbWlkOiBzdHJpbmcsIG9yZGVySWQ6IHN0cmluZywgcmVmZXJlbmNlSWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY2hhbm5lbENvZGUge3N0cmluZ30gYmFuayBjaGFubmVsIGNvZGVcclxuICAgKiBAcGFyYW0gY2FyZFR5cGUge3N0cmluZ30gY2FyZCB0eXBlIGRlYml0IG9yIGNyZWRpdFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgb2JqZWN0IG9mIHJlc3BvbnNlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGZldGNoRW1pRGV0YWlscyhjaGFubmVsQ29kZTogc3RyaW5nLCBjYXJkVHlwZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgbGFzdCBzdWNjZXNzZnVsbHkgdXNlZCBuZXQgYmFja2luZyBjb2RlXHJcbiAgICovXHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRMYXN0TkJTYXZlZEJhbmsoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgbGFzdCBzdWNjZXNzZnVsbHkgdXNlZCB2cGEgY29kZVxyXG4gICAqL1xyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0TGFzdFNhdmVkVlBBKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gY2xpZW50SWQge3N0cmluZ30gdW5pcXVlIGlkIGdpdmUgdG8gZWFjaCBtZXJjaGFudFxyXG4gICAqIEBwYXJhbSBhdXRoQ29kZSB7c3RyaW5nfSBmZXRjaGVkIGF1dGggY29kZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgbGFzdCBzdWNjZXNzZnVsbHkgdXNlZCB2cGEgY29kZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpc0F1dGhDb2RlVmFsaWQoY2xpZW50SWQ6IHN0cmluZywgYXV0aENvZGU6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGN1cnJlbnQgZW52aXJvbm1lbnRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0RW52aXJvbm1lbnQoKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBlbnZpcm9ubWVudCB7c3RyaW5nfSBzZXR0aW5nIGVudmlyb25tZW50IFBST0RVQ1RJT04gb3IgU1RBR0lOR1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRFbnZpcm9ubWVudChlbnZpcm9ubWVudDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==