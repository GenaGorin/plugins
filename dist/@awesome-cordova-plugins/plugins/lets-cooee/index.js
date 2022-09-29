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
var CooeeOriginal = /** @class */ (function (_super) {
    __extends(CooeeOriginal, _super);
    function CooeeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CooeeOriginal.prototype.sendEvent = function (eventName, eventProperties) { return cordova(this, "sendEvent", {}, arguments); };
    CooeeOriginal.prototype.updateUserProfile = function (userProfile) { return cordova(this, "updateUserProfile", {}, arguments); };
    CooeeOriginal.prototype.setCurrentScreen = function (screenName) { return cordova(this, "setCurrentScreen", {}, arguments); };
    CooeeOriginal.prototype.getUserID = function () { return cordova(this, "getUserID", {}, arguments); };
    CooeeOriginal.prototype.addCooeeCTAListener = function () { return cordova(this, "addCooeeCTAListener", { "eventObservable": true, "event": "onCooeeCTAListener", "element": "document" }, arguments); };
    CooeeOriginal.pluginName = "Cooee";
    CooeeOriginal.plugin = "@letscooee/cordova-plugin";
    CooeeOriginal.pluginRef = "cordova.plugins.Cooee";
    CooeeOriginal.repo = "https://github.com/letscooee/cordova-plugin-cooee";
    CooeeOriginal.install = "ionic cordova plugin add @letscooee/cordova-plugin --variable COOEE_APP_ID=appId";
    CooeeOriginal.installVariables = ["COOEE_APP_ID"];
    CooeeOriginal.platforms = ["Android", "iOS"];
    return CooeeOriginal;
}(AwesomeCordovaNativePlugin));
var Cooee = new CooeeOriginal();
export { Cooee };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbGV0cy1jb29lZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQWlDUCx5QkFBMEI7Ozs7SUFRbkQseUJBQVMsYUFBQyxTQUFpQixFQUFFLGVBQW9DO0lBVWpFLGlDQUFpQixhQUFDLFdBQWdDO0lBVWxELGdDQUFnQixhQUFDLFVBQWtCO0lBU25DLHlCQUFTO0lBYVQsbUNBQW1COzs7Ozs7OztnQkFyRnJCO0VBbUMyQiwwQkFBMEI7U0FBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExldHMgQ29vZWVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEFJIGRyaXZlbiBQZXJzb25hbGlzZWQgTm90aWZpY2F0aW9ucyBmb3IgQmV0dGVyIEN1c3RvbWVyIEVuZ2FnZW1lbnRcclxuICpcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ29vZWUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbGV0cy1jb29lZS9ueCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY29vZWU6IENvb2VlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuY29vZWUuZnVuY3Rpb25OYW1lKCdIZWxsbycsIDEyMylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0Nvb2VlJyxcclxuICBwbHVnaW46ICdAbGV0c2Nvb2VlL2NvcmRvdmEtcGx1Z2luJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuQ29vZWUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGV0c2Nvb2VlL2NvcmRvdmEtcGx1Z2luLWNvb2VlJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIEBsZXRzY29vZWUvY29yZG92YS1wbHVnaW4gLS12YXJpYWJsZSBDT09FRV9BUFBfSUQ9YXBwSWQnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnQ09PRUVfQVBQX0lEJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENvb2VlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNlbmQgdGhlIGdpdmVuIHVzZXIgZGF0YSBhbmQgdXNlciBwcm9wZXJ0aWVzIHRvIHRoZSBzZXJ2ZXIuXHJcbiAgICogQHJldHVybiB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSBzbyB1c2VyIGNhbiBiZSBub3RpZmllZC5cclxuICAgKiBAcGFyYW0gZXZlbnROYW1lIHtzdHJpbmd9IE5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICogQHBhcmFtIGV2ZW50UHJvcGVydGllcyB7UmVjb3JkPHN0cmluZywgYW55Pn0gUHJvcGVydGllcyBvZiB0aGUgZXZlbnRcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2VuZEV2ZW50KGV2ZW50TmFtZTogc3RyaW5nLCBldmVudFByb3BlcnRpZXM6IFJlY29yZDxzdHJpbmcsIGFueT4pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCB0aGUgZ2l2ZW4gdXNlciBkYXRhIGFuZCB1c2VyIHByb3BlcnRpZXMgdG8gdGhlIHNlcnZlci5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHNvIHVzZXIgY2FuIGJlIG5vdGlmaWVkLlxyXG4gICAqIEBwYXJhbSB1c2VyUHJvZmlsZSB7UmVjb3JkPHN0cmluZywgYW55Pn0gVXNlciBkYXRhIHRvIHNlbmQgdG8gdGhlIHNlcnZlclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVVc2VyUHJvZmlsZSh1c2VyUHJvZmlsZTogUmVjb3JkPHN0cmluZywgYW55Pik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIHRoZSBnaXZlbiBzY3JlZW4gbmFtZSB3aXRoIGV2ZXJ5IGV2ZW50LlxyXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugc28gdXNlciBjYW4gYmUgbm90aWZpZWQuXHJcbiAgICogQHBhcmFtIHNjcmVlbk5hbWUge3N0cmluZ30gU2NyZWVuIG5hbWUgdG8gc2VuZCB0byB0aGUgc2VydmVyXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEN1cnJlbnRTY3JlZW4oc2NyZWVuTmFtZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGUgQ29vZWUncyB1c2VySUQgYXNzaWduZWQgdG8gdGhlIGN1cnJlbnQgdXNlci5cclxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdXNlcklkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRVc2VySUQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3ZpZGVzIGNhbGxiYWNrIGZvciB0aGUgb25Db29lZUNUQUxpc3RlbmVyIGV2ZW50LlxyXG4gICAqIEByZXR1cm4ge09ic2VydmFibGU8QW55Pn0gUmV0dXJucyBhbiBvYnNlcnZhYmxlIHJlY29yZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ29uQ29vZWVDVEFMaXN0ZW5lcicsXHJcbiAgICBlbGVtZW50OiBkb2N1bWVudCxcclxuICB9KVxyXG4gIGFkZENvb2VlQ1RBTGlzdGVuZXIoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19