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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2Original = /** @class */ (function (_super) {
    __extends(InAppPurchase2Original, _super);
    function InAppPurchase2Original() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2Original.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2Original.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.redeem = function () { return cordova(this, "redeem", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.manageBilling = function () { return cordova(this, "manageBilling", { "sync": true }, arguments); };
    InAppPurchase2Original.prototype.launchPriceChangeConfirmationFlow = function (productId, callback) { return cordova(this, "launchPriceChangeConfirmationFlow", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2Original.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2Original.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: false,
        configurable: true
    });
    InAppPurchase2Original.pluginName = "InAppPurchase2";
    InAppPurchase2Original.plugin = "cordova-plugin-purchase";
    InAppPurchase2Original.pluginRef = "store";
    InAppPurchase2Original.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2Original.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2Original.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    return InAppPurchase2Original;
}(AwesomeCordovaNativePlugin));
var InAppPurchase2 = new InAppPurchase2Original();
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXB1cmNoYXNlLTIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7Ozs7bUJBQTdHOzs7O0lBNmpCb0Msa0NBQTBCOzs7O0lBMEw1RCwrQ0FBc0I7SUFrQnRCLDRCQUFHLGFBQUMsU0FBaUI7SUFVckIsOEJBQUssYUFBQyxPQUFpQjtJQVF2QixpQ0FBUSxhQUFDLE9BQWdEO0lBVXpELDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFhNUUsNkJBQUksYUFBQyxLQUEwQixFQUFFLEtBQWMsRUFBRSxRQUEyQjtJQVU1RSw0QkFBRyxhQUFDLFFBQWtCO0lBNkJ0Qiw4QkFBSyxhQUFDLE9BQTRCLEVBQUUsY0FBb0I7SUFLeEQsOEJBQUssYUFBQyxRQUFrQjtJQTBDeEIsZ0NBQU87SUFNUCwrQkFBTTtJQUlOLDRDQUFtQjtJQUluQiwrQkFBTTtJQUlOLHNDQUFhO0lBSWIsMERBQWlDLGFBQy9CLFNBQWlCLEVBQ2pCLFFBQW9FOzBCQWpXdEUsaUNBQUs7Ozs7OzswQkFHTCxpQ0FBSzs7Ozs7OzBCQUdMLG1DQUFPOzs7Ozs7MEJBR1AsZ0NBQUk7Ozs7OzswQkFHSixpQ0FBSzs7Ozs7OzBCQU1MLHFDQUFTOzs7Ozs7MEJBT1Qsa0RBQXNCOzs7Ozs7MEJBTXRCLG1DQUFPOzs7Ozs7MEJBT1AsZ0RBQW9COzs7Ozs7MEJBR3BCLDZDQUFpQjs7Ozs7OzBCQUdqQiw2Q0FBaUI7Ozs7OzswQkFHakIscURBQXlCOzs7Ozs7MEJBR3pCLHNDQUFVOzs7Ozs7MEJBR1YsMENBQWM7Ozs7OzswQkFHZCxxQ0FBUzs7Ozs7OzBCQUdULG9DQUFROzs7Ozs7MEJBR1Isd0NBQVk7Ozs7OzswQkFHWiw2Q0FBaUI7Ozs7OzswQkFHakIsOENBQWtCOzs7Ozs7MEJBR2xCLGlEQUFxQjs7Ozs7OzBCQUdyQiwrQ0FBbUI7Ozs7OzswQkFHbkIsbURBQXVCOzs7Ozs7MEJBR3ZCLHVDQUFXOzs7Ozs7MEJBR1gsZ0RBQW9COzs7Ozs7MEJBR3BCLGtEQUFzQjs7Ozs7OzBCQUd0QixzQ0FBVTs7Ozs7OzBCQUdWLDZDQUFpQjs7Ozs7OzBCQUdqQiwyREFBK0I7Ozs7OzswQkFHL0IsNkNBQWlCOzs7Ozs7MEJBR2pCLG1EQUF1Qjs7Ozs7OzBCQUd2Qiw0Q0FBZ0I7Ozs7OzswQkFHaEIsdUNBQVc7Ozs7OzswQkFHWCwrQ0FBbUI7Ozs7OzswQkFHbkIsd0NBQVk7Ozs7OzswQkFHWixpRUFBcUM7Ozs7OzswQkFHckMsc0NBQVU7Ozs7OzswQkFHVixtQ0FBTzs7Ozs7OzBCQUdQLGlDQUFLOzs7Ozs7MEJBR0wscUNBQVM7Ozs7OzswQkFHVCxxQ0FBUzs7Ozs7OzBCQUdULG9DQUFROzs7Ozs7MEJBR1Isb0NBQVE7Ozs7OzswQkFHUixpQ0FBSzs7Ozs7OzBCQUdMLHVDQUFXOzs7Ozs7MEJBR1gsc0NBQVU7Ozs7OzswQkFLViwyQ0FBZTs7Ozs7OzBCQUdmLDZDQUFpQjs7Ozs7OzBCQUdqQiw0Q0FBZ0I7Ozs7OzswQkFHaEIsNkNBQWlCOzs7Ozs7MEJBR2pCLDBDQUFjOzs7Ozs7MEJBR2QsMENBQWM7Ozs7OzswQkFHZCxvQ0FBUTs7Ozs7OzBCQUdSLHFDQUFTOzs7Ozs7MEJBU1QsK0NBQW1COzs7Ozs7MEJBUW5CLCtCQUFHOzs7Ozs7Ozs7Ozs7eUJBNXZCTDtFQTZqQm9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RPcHRpb25zIHtcclxuICBpZDogc3RyaW5nO1xyXG4gIGFsaWFzPzogc3RyaW5nO1xyXG4gIHR5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJUmVmZXNoUmVzdWx0IHtcclxuICBjYW5jZWxsZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gIGZhaWxlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgY29tcGxldGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICBmaW5pc2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIElBUFByb2R1Y3RzID0gSUFQUHJvZHVjdFtdICYge1xyXG4gIC8qKlxyXG4gICAqIEdldCBwcm9kdWN0IGJ5IElEXHJcbiAgICovXHJcbiAgYnlJZDogeyBbaWQ6IHN0cmluZ106IElBUFByb2R1Y3QgfTtcclxuICAvKipcclxuICAgKiBHZXQgcHJvZHVjdCBieSBhbGlhc1xyXG4gICAqL1xyXG4gIGJ5QWxpYXM6IHsgW2FsaWFzOiBzdHJpbmddOiBJQVBQcm9kdWN0IH07XHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBwcm9kdWN0cyAoZm9yIHRlc3Rpbmcgb25seSkuXHJcbiAgICovXHJcbiAgcmVzZXQ6ICgpID0+IHt9O1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgSUFQUXVlcnlDYWxsYmFjayA9ICgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4gdm9pZCkgfCAoKGVycm9yOiBJQVBFcnJvcikgPT4gdm9pZCk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3Qge1xyXG4gIGlkOiBzdHJpbmc7XHJcblxyXG4gIGFsaWFzPzogc3RyaW5nO1xyXG5cclxuICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gIHN0YXRlOiBzdHJpbmc7XHJcblxyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XHJcblxyXG4gIHByaWNlTWljcm9zOiBudW1iZXI7XHJcblxyXG4gIHByaWNlOiBzdHJpbmc7XHJcblxyXG4gIGN1cnJlbmN5OiBzdHJpbmc7XHJcblxyXG4gIGxvYWRlZDogYm9vbGVhbjtcclxuXHJcbiAgdmFsaWQ6IGJvb2xlYW47XHJcblxyXG4gIGNhblB1cmNoYXNlOiBib29sZWFuO1xyXG5cclxuICBvd25lZDogYm9vbGVhbjtcclxuXHJcbiAgZG93bmxvYWRpbmc/OiBib29sZWFuO1xyXG5cclxuICBkb3dubG9hZGVkPzogYm9vbGVhbjtcclxuXHJcbiAgbGFzdFJlbmV3YWxEYXRlPzogRGF0ZTtcclxuXHJcbiAgZXhwaXJ5RGF0ZT86IERhdGU7XHJcblxyXG4gIGludHJvUHJpY2U/OiBzdHJpbmc7XHJcblxyXG4gIGludHJvUHJpY2VNaWNyb3M/OiBudW1iZXI7XHJcblxyXG4gIGludHJvUHJpY2VOdW1iZXJPZlBlcmlvZHM/OiBudW1iZXI7XHJcblxyXG4gIGludHJvUHJpY2VTdWJzY3JpcHRpb25QZXJpb2Q/OiBzdHJpbmc7XHJcblxyXG4gIGludHJvUHJpY2VQYXltZW50TW9kZT86IHN0cmluZztcclxuXHJcbiAgaW5lbGlnaWJsZUZvckludHJvUHJpY2U/OiBib29sZWFuO1xyXG5cclxuICBiaWxsaW5nUGVyaW9kPzogbnVtYmVyO1xyXG5cclxuICBiaWxsaW5nUGVyaW9kVW5pdD86IHN0cmluZztcclxuXHJcbiAgdHJpYWxQZXJpb2Q/OiBudW1iZXI7XHJcblxyXG4gIHRyaWFsUGVyaW9kVW5pdD86IHN0cmluZztcclxuXHJcbiAgYWRkaXRpb25hbERhdGE/OiBhbnk7XHJcblxyXG4gIHRyYW5zYWN0aW9uPzogUGxheVN0b3JlUmVjZWlwdCB8IEFwcFN0b3JlUmVjZWlwdDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FsbCBgcHJvZHVjdC5maW5pc2goKWAgdG8gY29uZmlybSB0byB0aGUgc3RvcmUgdGhhdCBhbiBhcHByb3ZlZCBvcmRlciBoYXMgYmVlbiBkZWxpdmVyZWQuXHJcbiAgICpcclxuICAgKiBUaGlzIHdpbGwgY2hhbmdlIHRoZSBwcm9kdWN0IHN0YXRlIGZyb20gYEFQUFJPVkVEYCB0byBgRklOSVNIRURgIChzZWUgcHJvZHVjdCBsaWZlLWN5Y2xlKS5cclxuICAgKlxyXG4gICAqIEFzIGxvbmcgYXMgeW91IGtlZXAgdGhlIHByb2R1Y3QgaW4gc3RhdGUgYEFQUFJPVkVEYDpcclxuICAgKlxyXG4gICAqICAtIHRoZSBtb25leSBtYXkgbm90IGJlIGluIHlvdXIgYWNjb3VudCAoaS5lLiB1c2VyIGlzbid0IGNoYXJnZWQpXHJcbiAgICogIC0geW91IHdpbGwgcmVjZWl2ZSB0aGUgYGFwcHJvdmVkYCBldmVudCBlYWNoIHRpbWUgdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cyxcclxuICAgKiAgICB3aGVyZSB5b3Ugc2hvdWxkIHRyeSBhZ2FpbiB0byBmaW5pc2ggdGhlIHBlbmRpbmcgdHJhbnNhY3Rpb24uXHJcbiAgICpcclxuICAgKiBleGFtcGxlIHVzZSoqXHJcbiAgICpcclxuICAgKiBgYGBqc1xyXG4gICAqIHN0b3JlLndoZW4oXCJwcm9kdWN0LmlkXCIpLmFwcHJvdmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe1xyXG4gICAqICAgICAvLyBzeW5jaHJvbm91c1xyXG4gICAqICAgICBhcHAudW5sb2NrRmVhdHVyZSgpO1xyXG4gICAqICAgICBwcm9kdWN0LmZpbmlzaCgpO1xyXG4gICAqIH0pO1xyXG4gICAqIGBgYFxyXG4gICAqXHJcbiAgICogYGBganNcclxuICAgKiBzdG9yZS53aGVuKFwicHJvZHVjdC5pZFwiKS5hcHByb3ZlZChmdW5jdGlvbihwcm9kdWN0KXtcclxuICAgKiAgICAgLy8gYXN5bmNocm9ub3VzXHJcbiAgICogICAgIGFwcC5kb3dubG9hZEZlYXR1cmUoZnVuY3Rpb24oKSB7XHJcbiAgICogICAgICAgICBwcm9kdWN0LmZpbmlzaCgpO1xyXG4gICAqICAgICB9KTtcclxuICAgKiB9KTtcclxuICAgKiBgYGBcclxuICAgKi9cclxuICBmaW5pc2goKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogSW5pdGlhdGUgcHVyY2hhc2UgdmFsaWRhdGlvbiBhcyBkZWZpbmVkIGJ5IHRoZSBgc3RvcmUudmFsaWRhdG9yYCBhdHRyaWJ1dGUuXHJcbiAgICpcclxuICAgKiByZXR1cm4gdmFsdWUqKlxyXG4gICAqXHJcbiAgICogQSBQcm9taXNlIHdpdGggdGhlIGZvbGxvd2luZyBtZXRob2RzOlxyXG4gICAqXHJcbiAgICogIC0gYGRvbmUoZnVuY3Rpb24ocHJvZHVjdCl7fSlgXHJcbiAgICogICAgLSBjYWxsZWQgd2hldGhlciB2ZXJpZmljYXRpb24gZmFpbGVkIG9yIHN1Y2NlZWRlZC5cclxuICAgKiAgLSBgZXhwaXJlZChmdW5jdGlvbihwcm9kdWN0KXt9KWBcclxuICAgKiAgICAtIGNhbGxlZCBpZiB0aGUgcHVyY2hhc2UgZXhwaXJlZC5cclxuICAgKiAgLSBgc3VjY2VzcyhmdW5jdGlvbihwcm9kdWN0LCBwdXJjaGFzZURhdGEpe30pYFxyXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBpcyB2YWxpZCBhbmQgdmVyaWZpZWQuXHJcbiAgICogICAgLSBgcHVyY2hhc2VEYXRhYCBpcyB0aGUgZGV2aWNlIGRlcGVuZGVudCB0cmFuc2FjdGlvbiBkZXRhaWxzXHJcbiAgICogICAgICByZXR1cm5lZCBieSB0aGUgdmFsaWRhdG9yLCB3aGljaCB5b3UgY2FuIG1vc3QgcHJvYmFibHkgaWdub3JlLlxyXG4gICAqICAtIGBlcnJvcihmdW5jdGlvbihlcnIpe30pYFxyXG4gICAqICAgIC0gdmFsaWRhdGlvbiBmYWlsZWQsIGVpdGhlciBiZWNhdXNlIG9mIGV4cGlyeSBvciBjb21tdW5pY2F0aW9uXHJcbiAgICogICAgICBmYWlsdXJlLlxyXG4gICAqICAgIC0gYGVycmAgaXMgYSBzdG9yZS5FcnJvciBvYmplY3QsIHdpdGggYSBjb2RlIGV4cGVjdGVkIHRvIGJlXHJcbiAgICogICAgICBgc3RvcmUuRVJSX1BBWU1FTlRfRVhQSVJFRGAgb3IgYHN0b3JlLkVSUl9WRVJJRklDQVRJT05fRkFJTEVEYC5cclxuICAgKi9cclxuICB2ZXJpZnkoKTogYW55O1xyXG5cclxuICBzZXQoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkO1xyXG5cclxuICBzdGF0ZUNoYW5nZWQoKTogdm9pZDtcclxuXHJcbiAgb24oZXZlbnQ6IHN0cmluZywgY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcclxuXHJcbiAgb25jZShldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xyXG5cclxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZDtcclxuXHJcbiAgdHJpZ2dlcihhY3Rpb246IHN0cmluZywgYXJnczogYW55KTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQVBQcm9kdWN0RXZlbnRzIHtcclxuICAvKiogQ2FsbGVkIHdoZW4gcHJvZHVjdCBkYXRhIGlzIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cclxuICBsb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYW55IGNoYW5nZSBvY2N1cmVkIHRvIGEgcHJvZHVjdC4gKi9cclxuICB1cGRhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGZhaWxlZC4gVGhlIGBlcnJgIHBhcmFtZXRlciBpcyBhbiBJQVBFcnJvciBvYmplY3QuICovXHJcbiAgZXJyb3I6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGFwcHJvdmVkLiAqL1xyXG4gIGFwcHJvdmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGEgbm9uLWNvbnN1bWFibGUgcHJvZHVjdCBvciBzdWJzY3JpcHRpb24gaXMgb3duZWQuICovXHJcbiAgb3duZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGNhbmNlbGxlZCBieSB0aGUgdXNlci4gKi9cclxuICBjYW5jZWxsZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaXMgcmVmdW5kZWQgYnkgdGhlIHVzZXIuICovXHJcbiAgcmVmdW5kZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gcHJvZHVjdCBoYXMganVzdCBiZWVuIHJlZ2lzdGVyZWQuICovXHJcbiAgcmVnaXN0ZXJlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHJvZHVjdCBkZXRhaWxzIGhhdmUgYmVlbiBzdWNjZXNzZnVsbHkgbG9hZGVkLiAqL1xyXG4gIHZhbGlkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwcm9kdWN0IGNhbm5vdCBiZSBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuICovXHJcbiAgaW52YWxpZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBoYXMganVzdCBiZWVuIHJlcXVlc3RlZC4gKi9cclxuICByZXF1ZXN0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHB1cmNoYXNlIHByb2Nlc3MgaGFzIGJlZW4gaW5pdGlhdGVkLiAqL1xyXG4gIGluaXRpYXRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyBoYXMgY29tcGxldGVkLiAqL1xyXG4gIGZpbmlzaGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHJlY2VpcHQgdmFsaWRhdGlvbiBzdWNjZXNzZnVsLiAqL1xyXG4gIHZlcmlmaWVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHJlY2VpcHQgdmVyaWZpY2F0aW9uIGZhaWxlZC4gKi9cclxuICB1bnZlcmlmaWVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkLiAqL1xyXG4gIGV4cGlyZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBpcyBzdGFydGVkLiAqL1xyXG4gIGRvd25sb2FkaW5nOiAocHJvZHVjdDogSUFQUHJvZHVjdCwgcHJvZ3Jlc3M6IGFueSwgdGltZV9yZW1haW5pbmc6IGFueSkgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBoYXMgc3VjY2Vzc2Z1bGx5IGNvbXBsZXRlZC4gKi9cclxuICBkb3dubG9hZGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFBsYXlTdG9yZVJlY2VpcHQgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBwdXJjaGFzZVN0YXRlOiBudW1iZXI7XHJcbiAgcHVyY2hhc2VUb2tlbjogc3RyaW5nO1xyXG4gIHJlY2VpcHQ6IHN0cmluZztcclxuICBzaWduYXR1cmU6IHN0cmluZztcclxuICB0eXBlOiAnYW5kcm9pZC1wbGF5c3RvcmUnO1xyXG59O1xyXG5cclxuZXhwb3J0IHR5cGUgQXBwU3RvcmVSZWNlaXB0ID0ge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYXBwU3RvcmVSZWNlaXB0OiBzdHJpbmc7XHJcbiAgb3JpZ2luYWxfdHJhbnNhY3Rpb25faWQ6IHN0cmluZztcclxuICB0eXBlOiAnaW9zLWFwcHN0b3JlJztcclxufTtcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgSUFQRXJyb3Ige1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBJbiBBcHAgUHVyY2hhc2UgMlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogSW4tQXBwIFB1cmNoYXNlIG9uIGlPUywgQW5kcm9pZCwgV2luZG93cywgbWFjT1MgYW5kIFhCb3guXHJcbiAqXHJcbiAqICMjIEZlYXR1cmVzXHJcbiAqXHJcbiAqIHwgIHwgaW9zIHwgYW5kcm9pZCB8IHdpbi04IHwgd2luLTEwL3V3cCB8IG1hYyB8XHJcbiAqIHwtLXwtLXwtLXwtLXwtLXwtLXxcclxuICogfCBjb25zdW1hYmxlcyB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8XHJcbiAqIHwgbm9uIGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcclxuICogfCBzdWJzY3JpcHRpb25zIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcclxuICogfCByZXN0b3JlIHB1cmNoYXNlcyB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8IOKchSB8XHJcbiAqIHwgcmVjZWlwdCB2YWxpZGF0aW9ucyB8IOKchSB8IOKchSB8ICB8IOKchSB8IOKchSB8XHJcbiAqIHwgZG93bmxvYWRhYmxlIGNvbnRlbnQgfCDinIUgfCAgIHwgICB8ICAgfCDinIUgfFxyXG4gKiB8IGludHJvZHVjdG9yeSBwcmljZXMgfCDinIUgfCDinIUgfCAgIHwg4pyFIHwg4pyFIHxcclxuICpcclxuICogU3VwcG9ydHM6XHJcbiAqXHJcbiAqICAtICoqaU9TKiogdmVyc2lvbiA3LjAgb3IgaGlnaGVyLlxyXG4gKiAgLSAqKkFuZHJvaWQqKiB2ZXJzaW9uIDIuMiAoQVBJIGxldmVsIDgpIG9yIGhpZ2hlclxyXG4gKiAgICAtIHdpdGggR29vZ2xlIFBsYXkgY2xpZW50IHZlcnNpb24gMy45LjE2IG9yIGhpZ2hlclxyXG4gKiAgLSAqKldpbmRvd3MqKiBTdG9yZS9QaG9uZSA4LjEgb3IgaGlnaGVyXHJcbiAqICAtICoqV2luZG93cyAxMCBNb2JpbGUqKlxyXG4gKiAgLSAqKm1hY09TKiogdmVyc2lvbiAxMFxyXG4gKiAgLSAqKlhib3ggT25lKipcclxuICogICAgLSAoYW5kIGFueSBwbGF0Zm9ybSBzdXBwb3J0aW5nIE1pY3Jvc29mdCdzIFVXUClcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgSW5BcHBQdXJjaGFzZTIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvaW4tYXBwLXB1cmNoYXNlLTIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHVibGljIHBsYXRmb3JtOiBQbGF0Zm9ybSwgcHJpdmF0ZSBzdG9yZTogSW5BcHBQdXJjaGFzZTIpIHtcclxuICogICBwbGF0Zm9ybS5yZWFkeSgpLnRoZW4oKCkgPT4ge1xyXG4gKiAgICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcclxuICogICAgICBpZDogXCJteV9wcm9kdWN0X2lkXCIsXHJcbiAqICAgICAgdHlwZTogdGhpcy5zdG9yZS5OT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OLFxyXG4gKiAgICB9KTtcclxuICogICAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKVxyXG4gKiAgICAgIC5hcHByb3ZlZChwID0+IHAudmVyaWZ5KCkpXHJcbiAqICAgICAgLnZlcmlmaWVkKHAgPT4gcC5maW5pc2goKSk7XHJcbiAqICAgIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xyXG4gKiAgIH0pO1xyXG4gKiB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIEZ1bGwgZXhhbXBsZVxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICAvLyBBZnRlciBwbGF0Zm9ybSByZWFkeVxyXG4gKiAgdGhpcy5zdG9yZS52ZXJib3NpdHkgPSB0aGlzLnN0b3JlLkRFQlVHO1xyXG4gKiAgdGhpcy5zdG9yZS5yZWdpc3Rlcih7XHJcbiAqICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcclxuICogICAgdHlwZTogdGhpcy5zdG9yZS5QQUlEX1NVQlNDUklQVElPTixcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gUmVnaXN0ZXIgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBzcGVjaWZpYyBwcm9kdWN0XHJcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnJlZ2lzdGVyZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdSZWdpc3RlcmVkOiAnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBVcGRhdGVkXHJcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpLnVwZGF0ZWQoIChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkJyArIEpTT04uc3RyaW5naWZ5KHByb2R1Y3QpKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gVXNlciBjbG9zZWQgdGhlIG5hdGl2ZSBwdXJjaGFzZSBkaWFsb2dcclxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikuY2FuY2VsbGVkKCAocHJvZHVjdCkgPT4ge1xyXG4gKiAgICAgIGNvbnNvbGUuZXJyb3IoJ1B1cmNoYXNlIHdhcyBDYW5jZWxsZWQnKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gVHJhY2sgYWxsIHN0b3JlIGVycm9yc1xyXG4gKiAgdGhpcy5zdG9yZS5lcnJvciggKGVycikgPT4ge1xyXG4gKiAgICBjb25zb2xlLmVycm9yKCdTdG9yZSBFcnJvciAnICsgSlNPTi5zdHJpbmdpZnkoZXJyKSk7XHJcbiAqICB9KTtcclxuICpcclxuICogIC8vIFJ1biBzb21lIGNvZGUgb25seSB3aGVuIHRoZSBzdG9yZSBpcyByZWFkeSB0byBiZSB1c2VkXHJcbiAqICB0aGlzLnN0b3JlLnJlYWR5KCgpID0+ICB7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdTdG9yZSBpcyByZWFkeScpO1xyXG4gKiAgICBjb25zb2xlLmxvZygnUHJvZHVjdHM6ICcgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnN0b3JlLnByb2R1Y3RzKSk7XHJcbiAqICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUuZ2V0KFwibXlfcHJvZHVjdF9pZFwiKSkpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBSZWZyZXNoIHRoZSBzdGF0dXMgb2YgaW4tYXBwIHByb2R1Y3RzXHJcbiAqICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcclxuICpcclxuICogIC4uLlxyXG4gKlxyXG4gKiAgLy8gVG8gbWFrZSBhIHB1cmNoYXNlXHJcbiAqICB0aGlzLnN0b3JlLm9yZGVyKFwibXlfcHJvZHVjdF9pZFwiKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIFBoaWxvc29waHlcclxuICpcclxuICogVGhlIEFQSSBpcyBtb3N0bHkgZXZlbnRzIGJhc2VkLiBBcyBhIHVzZXIgb2YgdGhpcyBwbHVnaW4sXHJcbiAqIHlvdSB3aWxsIGhhdmUgdG8gcmVnaXN0ZXIgbGlzdGVuZXJzIHRvIGNoYW5nZXMgaGFwcGVuaW5nIHRvIHRoZSBwcm9kdWN0c1xyXG4gKiB5b3UgcmVnaXN0ZXIuXHJcbiAqXHJcbiAqIFRoZSBjb3JlIG9mIHRoZSBsaXN0ZW5pbmcgbWVjaGFuaXNtIGlzIHRoZSBgd2hlbigpYCBtZXRob2QuIEl0IGFsbG93cyB5b3UgdG9cclxuICogYmUgbm90aWZpZWQgb2YgY2hhbmdlcyB0byBvbmUgb3IgYSBzZXQgb2YgcHJvZHVjdHMgdXNpbmcgYSBxdWVyeSBtZWNoYW5pc206XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIHRoaXMuc3RvcmUud2hlbihcInByb2R1Y3RcIikudXBkYXRlZChyZWZyZXNoU2NyZWVuKTsgLy8gbWF0Y2ggYW55IHByb2R1Y3RcclxuICogIHRoaXMuc3RvcmUud2hlbihcImZ1bGxfdmVyc2lvblwiKS5vd25lZCh1bmxvY2tBcHApOyAvLyBtYXRjaCBhIHNwZWNpZmljIHByb2R1Y3RcclxuICogIHRoaXMuc3RvcmUud2hlbihcInN1YnNjcmlwdGlvblwiKS5hcHByb3ZlZChzZXJ2ZXJDaGVjayk7IC8vIG1hdGNoIGFsbCBzdWJzY3JpcHRpb25zXHJcbiAqICB0aGlzLnN0b3JlLndoZW4oXCJkb3dubG9hZGFibGUgY29udGVudFwiKS5kb3dubG9hZGVkKHNob3dDb250ZW50KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBgdXBkYXRlZGAgZXZlbnQgaXMgZmlyZWQgd2hlbmV2ZXIgb25lIG9mIHRoZSBmaWVsZHMgb2YgYSBwcm9kdWN0IGlzXHJcbiAqIGNoYW5nZWQgKGl0cyBgb3duZWRgIHN0YXR1cyBmb3IgaW5zdGFuY2UpLlxyXG4gKlxyXG4gKiBUaGlzIGV2ZW50IHByb3ZpZGVzIGEgZ2VuZXJpYyB3YXkgdG8gdHJhY2sgdGhlIHN0YXR1c2VzIG9mIHlvdXIgcHVyY2hhc2VzLFxyXG4gKiB0byB1bmxvY2sgZmVhdHVyZXMgd2hlbiBuZWVkZWQgYW5kIHRvIHJlZnJlc2ggeW91ciB2aWV3cyBhY2NvcmRpbmdseS5cclxuICpcclxuICogIyMgUmVnaXN0ZXJpbmcgcHJvZHVjdHNcclxuICpcclxuICogVGhlIHN0b3JlIG5lZWRzIHRvIGtub3cgdGhlIHR5cGUgYW5kIGlkZW50aWZpZXJzIG9mIHlvdXIgcHJvZHVjdHMgYmVmb3JlIHlvdVxyXG4gKiBjYW4gdXNlIHRoZW0gaW4geW91ciBjb2RlLlxyXG4gKlxyXG4gKiBVc2UgYHN0b3JlLnJlZ2lzdGVyKClgIHRvIGRlZmluZSB0aGVtIGJlZm9yZSB5b3VyIGZpcnN0IGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAuXHJcbiAqXHJcbiAqIE9uY2UgcmVnaXN0ZXJlZCwgeW91IGNhbiB1c2UgYHN0b3JlLmdldCgpYCB0byByZXRyaWV2ZSBhbiBgSUFQUHJvZHVjdGAgb2JqZWN0LlxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcclxuICogICAgaWQ6IFwibXlfY29uc3VtYWJsZTFcIixcclxuICogICAgdHlwZTogdGhpcy5zdG9yZS5DT05TVU1BQkxFXHJcbiAqICB9KTtcclxuICogIC4uLlxyXG4gKiAgY29uc3QgcCA9IHRoaXMuc3RvcmUuZ2V0KFwibXlfY29uc3VtYWJsZTFcIik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBUaGUgcHJvZHVjdCBgaWRgIGFuZCBgdHlwZWAgaGF2ZSB0byBtYXRjaCBwcm9kdWN0cyBkZWZpbmVkIGluIHlvdXJcclxuICogQXBwbGUsIEdvb2dsZSBvciBNaWNyb3NvZnQgZGV2ZWxvcGVyIGNvbnNvbGVzLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlIGFib3V0IGl0IFtmcm9tIHRoZSB3aWtpXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS93aWtpKS5cclxuICpcclxuICogIyMgRGlzcGxheWluZyBwcm9kdWN0c1xyXG4gKlxyXG4gKiBSaWdodCBhZnRlciB5b3UgcmVnaXN0ZXJlZCB5b3VyIHByb2R1Y3RzLCBub3RoaW5nIG11Y2ggaXMga25vd24gYWJvdXQgdGhlbVxyXG4gKiBleGNlcHQgdGhlaXIgYGlkYCwgYHR5cGVgIGFuZCBhbiBvcHRpb25hbCBgYWxpYXNgLlxyXG4gKlxyXG4gKiBXaGVuIHlvdSBwZXJmb3JtIHRoZSBpbml0aWFsIGNhbGwgdG8gYHN0b3JlLnJlZnJlc2goKWAsIHRoZSBwbGF0Zm9ybXMnIHNlcnZlciB3aWxsXHJcbiAqIGJlIGNvbnRhY3RlZCB0byBsb2FkIGluZm9ybWF0aW9ucyBhYm91dCB0aGUgcmVnaXN0ZXJlZCBwcm9kdWN0czogaHVtYW5cclxuICogcmVhZGFibGUgYHRpdGxlYCBhbmQgYGRlc2NyaXB0aW9uYCwgYHByaWNlYCwgZXRjLlxyXG4gKlxyXG4gKiBUaGlzIGlzbid0IGFuIG9wdGlvbmFsIHN0ZXAsIHN0b3JlIG93bmVycyByZXF1aXJlIHlvdVxyXG4gKiB0byBkaXNwbGF5IGluZm9ybWF0aW9uIGFib3V0IGEgcHJvZHVjdCBleGFjdGx5IGFzIHJldHJpZXZlZCBmcm9tIHRoZWlyIHNlcnZlcjogbm9cclxuICogaGFyZC1jb2Rpbmcgb2YgcHJpY2UgYW5kIHRpdGxlIGFsbG93ZWQhIFRoaXMgaXMgYWxzbyBjb252ZW5pZW50IGZvciB5b3VcclxuICogYXMgeW91IGNhbiBjaGFuZ2UgdGhlIHByaWNlIG9mIHlvdXIgaXRlbXMga25vd2luZyB0aGF0IGl0J2xsIGJlIHJlZmxlY3RlZCBpbnN0YW50bHlcclxuICogb24geW91ciBjbGllbnRzJyBkZXZpY2VzLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIGluZm9ybWF0aW9uIG1heSBub3QgYmUgYXZhaWxhYmxlIHdoZW4gdGhlIGZpcnN0IHZpZXcgdGhhdCBuZWVkc1xyXG4gKiB0aGVtIGFwcGVhcnMgb24gc2NyZWVuLiBGb3IgeW91LCB0aGUgYmVzdCBvcHRpb24gaXMgdG8gaGF2ZSB5b3VyIHZpZXcgbW9uaXRvclxyXG4gKiBjaGFuZ2VzIG1hZGUgdG8gdGhlIHByb2R1Y3QuXHJcbiAqXHJcbiAqICMjIFB1cmNoYXNpbmdcclxuICpcclxuICogIyMjIyBpbml0aWF0ZSBhIHB1cmNoYXNlXHJcbiAqXHJcbiAqIFB1cmNoYXNlcyBhcmUgaW5pdGlhdGVkIHVzaW5nIHRoZSBgc3RvcmUub3JkZXIoXCJzb21lX3Byb2R1Y3RfaWRcIilgIG1ldGhvZC5cclxuICpcclxuICogVGhlIHN0b3JlIHdpbGwgbWFuYWdlIHRoZSBpbnRlcm5hbCBwdXJjaGFzZSBmbG93LiBJdCdsbCBlbmQ6XHJcbiAqXHJcbiAqICAtIHdpdGggYW4gYGFwcHJvdmVkYCBldmVudC4gVGhlIHByb2R1Y3QgZW50ZXJzIHRoZSBgQVBQUk9WRURgIHN0YXRlLlxyXG4gKiAgLSB3aXRoIGEgYGNhbmNlbGxlZGAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cclxuICogIC0gd2l0aCBhbiBgZXJyb3JgIGV2ZW50LiBUaGUgcHJvZHVjdCBnZXRzIGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXHJcbiAqXHJcbiAqIFNlZSB0aGUgcHJvZHVjdCBsaWZlLWN5Y2xlIHNlY3Rpb24gZm9yIGRldGFpbHMgYWJvdXQgcHJvZHVjdCBzdGF0ZXMuXHJcbiAqXHJcbiAqICMjIyMgZmluaXNoIGEgcHVyY2hhc2VcclxuICpcclxuICogT25jZSB0aGUgdHJhbnNhY3Rpb24gaXMgYXBwcm92ZWQsIHRoZSBwcm9kdWN0IHN0aWxsIGlzbid0IG93bmVkOiB0aGUgc3RvcmUgbmVlZHNcclxuICogY29uZmlybWF0aW9uIHRoYXQgdGhlIHB1cmNoYXNlIHdhcyBkZWxpdmVyZWQgYmVmb3JlIGNsb3NpbmcgdGhlIHRyYW5zYWN0aW9uLlxyXG4gKlxyXG4gKiBUbyBjb25maXJtIGRlbGl2ZXJ5LCB5b3UnbGwgdXNlIHRoZSBgcHJvZHVjdC5maW5pc2goKWAgbWV0aG9kLlxyXG4gKlxyXG4gKiAjIyMjIGV4YW1wbGUgdXNhZ2VcclxuICpcclxuICogRHVyaW5nIGluaXRpYWxpemF0aW9uOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIHRoaXMuc3RvcmUud2hlbihcImV4dHJhX2NoYXB0ZXJcIikuYXBwcm92ZWQoKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICAvLyBkb3dubG9hZCB0aGUgZmVhdHVyZVxyXG4gKiAgIGFwcC5kb3dubG9hZEV4dHJhQ2hhcHRlcigpXHJcbiAqICAgLnRoZW4oKCkgPT4gcHJvZHVjdC5maW5pc2goKSk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogV2hlbiB0aGUgcHVyY2hhc2UgYnV0dG9uIGlzIGNsaWNrZWQ6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdGhpcy5zdG9yZS5vcmRlcihcImV4dHJhX2NoYXB0ZXJcIik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyMjIHVuLWZpbmlzaGVkIHB1cmNoYXNlc1xyXG4gKlxyXG4gKiBJZiB5b3VyIGFwcCB3YXNuJ3QgYWJsZSB0byBkZWxpdmVyIHRoZSBjb250ZW50LCBgcHJvZHVjdC5maW5pc2goKWAgd29uJ3QgYmUgY2FsbGVkLlxyXG4gKlxyXG4gKiBEb24ndCB3b3JyeTogdGhlIGBhcHByb3ZlZGAgZXZlbnQgd2lsbCBiZSByZS10cmlnZ2VyZWQgdGhlIG5leHQgdGltZSB5b3VcclxuICogY2FsbCBgc3RvcmUucmVmcmVzaCgpYCwgd2hpY2ggY2FuIHZlcnkgd2VsbCBiZSB0aGUgbmV4dCB0aW1lXHJcbiAqIHRoZSBhcHBsaWNhdGlvbiBzdGFydHMuIFBlbmRpbmcgdHJhbnNhY3Rpb25zIGFyZSBwZXJzaXN0YW50LlxyXG4gKlxyXG4gKiAjIyMjIHNpbXBsZSBjYXNlXHJcbiAqXHJcbiAqIEluIHRoZSBtb3N0IHNpbXBsZSBjYXNlLCB3aGVyZTpcclxuICpcclxuICogIC0gZGVsaXZlcnkgb2YgcHVyY2hhc2VzIGlzIG9ubHkgbG9jYWwgO1xyXG4gKiAgLSB5b3UgZG9uJ3Qgd2FudCAob3IgbmVlZCkgdG8gaW1wbGVtZW50IHJlY2VpcHQgdmFsaWRhdGlvbiA7XHJcbiAqXHJcbiAqIFlvdSBtYXkganVzdCB3YW50IHRvIGZpbmlzaCBhbGwgcHVyY2hhc2VzIGF1dG9tYXRpY2FsbHkuIFlvdSBjYW4gZG8gaXQgdGhpcyB3YXk6XHJcbiAqIGBgYGpzXHJcbiAqIHRoaXMuc3RvcmUud2hlbihcInByb2R1Y3RcIikuYXBwcm92ZWQoKHA6IElBUFByb2R1Y3QpID0+IHAuZmluaXNoKCkpO1xyXG4gKiBgYGBcclxuICpcclxuICogTk9URTogdGhlIFwicHJvZHVjdFwiIHF1ZXJ5IHdpbGwgbWF0Y2ggYW55IHB1cmNoYXNlcyAoc2VlIFwicXVlcmllc1wiIHRvIGxlYXJuIG1vcmUgZGV0YWlscyBhYm91dCBxdWVyaWVzKS5cclxuICpcclxuICogIyMgUmVjZWlwdCB2YWxpZGF0aW9uXHJcbiAqXHJcbiAqIFRvIGdldCB0aGUgbW9zdCB1cC10by1kYXRlIGluZm9ybWF0aW9uIGFib3V0IHB1cmNoYXNlcyAoaW4gY2FzZSBhIHB1cmNoYXNlIGhhdmUgYmVlbiBjYW5jZWxlZCwgb3IgYSBzdWJzY3JpcHRpb24gcmVuZXdlZCksXHJcbiAqIHlvdSBzaG91bGQgaW1wbGVtZW50IHNlcnZlciBzaWRlIHJlY2VpcHQgdmFsaWRhdGlvbi5cclxuICpcclxuICogVGhpcyBhbHNvIHByb3RlY3RzIHlvdSBhZ2FpbnN0IGZha2UgXCJwdXJjaGFzZXNcIiwgbWFkZSBieSBzb21lIHVzZXJzIHVzaW5nXHJcbiAqIFwiZnJlZSBpbi1hcHAgcHVyY2hhc2VcIiBhcHBzIG9uIHRoZWlyIGRldmljZXMuXHJcbiAqXHJcbiAqIFdoZW4gYSBwdXJjaGFzZSBoYXMgYmVlbiBhcHByb3ZlZCBieSB0aGUgc3RvcmUsIGl0J3MgZW5yaWNoZWQgd2l0aFxyXG4gKiB0cmFuc2FjdGlvbiBpbmZvcm1hdGlvbiAoc2VlIGBwcm9kdWN0LnRyYW5zYWN0aW9uYCBhdHRyaWJ1dGUpLlxyXG4gKlxyXG4gKiBUbyB2ZXJpZnkgYSBwdXJjaGFzZSB5b3UnbGwgaGF2ZSB0byBkbyB0aHJlZSB0aGluZ3M6XHJcbiAqXHJcbiAqICAtIGNvbmZpZ3VyZSB0aGUgdmFsaWRhdG9yLlxyXG4gKiAgLSBjYWxsIGBwcm9kdWN0LnZlcmlmeSgpYCBmcm9tIHRoZSBgYXBwcm92ZWRgIGV2ZW50LCBiZWZvcmUgZmluaXNoaW5nIHRoZSB0cmFuc2FjdGlvbi5cclxuICogIC0gZmluaXNoIHRoZSB0cmFuc2FjdGlvbiB3aGVuIHRyYW5zYWN0aW9uIGlzIGB2ZXJpZmllZGAuXHJcbiAqXHJcbiAqIFNoYW1lbGVzcyBQbHVnKio6IHRoaXMgaXMgYSBmZWF0dXJlIG1hbnkgdXNlcnMgc3RydWdnbGUgd2l0aCwgc28gYXMgdGhlIGF1dGhvciBvZiB0aGlzIHBsdWdpbiwgd2UgY2FuIHByb3ZpZGUgaXQgdG8geW91IGFzLWEtc2VydmljZTogaHR0cHM6Ly9iaWxsaW5nLmZvdmVhLmNjL1xyXG4gKiAod2hpY2ggaXMgZnJlZSB1bnRpbCB5b3Ugc3RhcnQgbWFraW5nIHNlcmlvdXMgbW9uZXkpXHJcbiAqXHJcbiAqICMjIyMgZXhhbXBsZSB1c2luZyBhIHZhbGlkYXRpb24gVVJMXHJcbiAqXHJcbiAqIGBgYGpzXHJcbiAqIHRoaXMuc3RvcmUudmFsaWRhdG9yID0gXCJodHRwczovL2JpbGxpbmcuZm92ZWEuY2MvXCI7XHJcbiAqXHJcbiAqIHRoaXMuc3RvcmUud2hlbihcIm15IHN0dWZmXCIpXHJcbiAqICAgLmFwcHJvdmVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLnZlcmlmeSgpKVxyXG4gKiAgIC52ZXJpZmllZCgocDogSUFQUHJvZHVjdCkgPT4gcC5maW5pc2goKSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiAjIyBTdWJzY3JpcHRpb25zXHJcbiAqXHJcbiAqIEZvciBzdWJzY3JpcHRpb24sIHlvdSBNVVNUIGltcGxlbWVudCByZW1vdGUgcmVjZWlwdCB2YWxpZGF0aW9uLlxyXG4gKlxyXG4gKiBXaGVuIHRoZSByZWNlaXB0IHZhbGlkYXRvciByZXR1cm5zIGEgYHN0b3JlLlBVUkNIQVNFX0VYUElSRURgIGVycm9yIGNvZGUsIHRoZSBzdWJzY3JpcHRpb24gd2lsbFxyXG4gKiBhdXRvbWF0aWNhbGx5IGxvb3NlIGl0cyBgb3duZWRgIHN0YXR1cy5cclxuICpcclxuICogVHlwaWNhbGx5LCB5b3UnbGwgZW5hYmxlIGFuZCBkaXNhYmxlIGFjY2VzcyB0byB5b3VyIGNvbnRlbnQgdGhpcyB3YXkuXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdGhpcy5zdG9yZS53aGVuKFwibXlfc3ViY3JpcHRpb25cIikudXBkYXRlZCgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xyXG4gKiAgIGlmIChwcm9kdWN0Lm93bmVkKVxyXG4gKiAgICAgYXBwLnN1YnNjcmliZXJNb2RlKCk7XHJcbiAqICAgZWxzZVxyXG4gKiAgICAgYXBwLmd1ZXN0TW9kZSgpO1xyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIFByb2R1Y3QgbGlmZS1jeWNsZVxyXG4gKlxyXG4gKiBBIHByb2R1Y3Qgd2lsbCBjaGFuZ2Ugc3RhdGUgZHVyaW5nIHRoZSBhcHBsaWNhdGlvbiBleGVjdXRpb24uXHJcbiAqXHJcbiAqIEZpbmQgYmVsb3cgYSBkaWFncmFtIG9mIHRoZSBkaWZmZXJlbnQgc3RhdGVzIGEgcHJvZHVjdCBjYW4gcGFzcyBieS5cclxuICpcclxuICogYGBgXHJcbiAqIFJFR0lTVEVSRUQgKy0tPiBJTlZBTElEXHJcbiAqICAgICAgICAgICAgfFxyXG4gKiAgICAgICAgICAgICstLT4gVkFMSUQgKy0tPiBSRVFVRVNURUQgKy0tPiBJTklUSUFURUQgKy0rXHJcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogICAgICAgICAgICAgICAgIF4gICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHxcclxuICogICAgICAgICAgICAgICAgIHwgICAgICB8ICAgICAgICAgICAgICstLT4gRE9XTkxPQURJTkcgKy0tPiBET1dOTE9BREVEICtcclxuICogICAgICAgICAgICAgICAgIHwgICAgICB8ICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogICAgICAgICAgICAgICAgIHwgICAgICArLS0+IEFQUFJPVkVEICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSstLT4gRklOSVNIRUQgKy0tPiBPV05FRFxyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XHJcbiAqICAgICAgICAgICAgICAgICArLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLStcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyMgTm90ZXNcclxuICpcclxuICogIC0gV2hlbiBmaW5pc2hlZCwgYSBjb25zdW1hYmxlIHByb2R1Y3Qgd2lsbCBnZXQgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZSwgd2hpbGUgb3RoZXIgd2lsbCBlbnRlciB0aGUgYE9XTkVEYCBzdGF0ZS5cclxuICogIC0gQW55IGVycm9yIGluIHRoZSBwdXJjaGFzZSBwcm9jZXNzIHdpbGwgYnJpbmcgYSBwcm9kdWN0IGJhY2sgdG8gdGhlIGBWQUxJRGAgc3RhdGUuXHJcbiAqICAtIER1cmluZyBhcHBsaWNhdGlvbiBzdGFydHVwLCBwcm9kdWN0cyBtYXkgZ28gaW5zdGFudGx5IGZyb20gYFJFR0lTVEVSRURgIHRvIGBBUFBST1ZFRGAgb3IgYE9XTkVEYCwgZm9yIGV4YW1wbGUgaWYgdGhleSBhcmUgcHVyY2hhc2VkIG5vbi1jb25zdW1hYmxlcyBvciBub24tZXhwaXJlZCBzdWJzY3JpcHRpb25zLlxyXG4gKiAgLSBOb24tUmVuZXdpbmcgU3Vic2NyaXB0aW9ucyBhcmUgaU9TIHByb2R1Y3RzIG9ubHkuIFBsZWFzZSBzZWUgdGhlIFtpT1MgTm9uIFJlbmV3aW5nIFN1YnNjcmlwdGlvbnMgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2lvcy5tZCNub24tcmVuZXdpbmcpIGZvciBhIGRldGFpbGVkIGV4cGxhbmF0aW9uLlxyXG4gKlxyXG4gKiAjIyBldmVudHNcclxuICpcclxuICogIC0gYGxvYWRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLlxyXG4gKiAgLSBgdXBkYXRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LlxyXG4gKiAgLSBgZXJyb3IoZXJyKWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhbiBvcmRlciBmYWlsZWQuXHJcbiAqICAgIC0gVGhlIGBlcnJgIHBhcmFtZXRlciBpcyBhbiBlcnJvciBvYmplY3RcclxuICogIC0gYGFwcHJvdmVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgcHJvZHVjdCBvcmRlciBpcyBhcHByb3ZlZC5cclxuICogIC0gYG93bmVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGEgbm9uLWNvbnN1bWFibGUgcHJvZHVjdCBvciBzdWJzY3JpcHRpb24gaXMgb3duZWQuXHJcbiAqICAtIGBjYW5jZWxsZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGNhbmNlbGxlZCBieSB0aGUgdXNlci5cclxuICogIC0gYHJlZnVuZGVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGFuIG9yZGVyIGlzIHJlZnVuZGVkIGJ5IHRoZSB1c2VyLlxyXG4gKiAgLSBBY3R1YWxseSwgYWxsIG90aGVyIHByb2R1Y3Qgc3RhdGVzIGhhdmUgdGhlaXIgcHJvbWlzZVxyXG4gKiAgICAtIGByZWdpc3RlcmVkYCwgYHZhbGlkYCwgYGludmFsaWRgLCBgcmVxdWVzdGVkYCxcclxuICogICAgICBgaW5pdGlhdGVkYCBhbmQgYGZpbmlzaGVkYFxyXG4gKiAgLSBgdmVyaWZpZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWxcclxuICogIC0gYHVudmVyaWZpZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gcmVjZWlwdCB2ZXJpZmljYXRpb24gZmFpbGVkXHJcbiAqICAtIGBleHBpcmVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIHZhbGlkYXRpb24gZmluZCBhIHN1YnNjcmlwdGlvbiB0byBiZSBleHBpcmVkXHJcbiAqICAtIGBkb3dubG9hZGluZyhJQVBQcm9kdWN0LCBwcm9ncmVzcywgdGltZV9yZW1haW5pbmcpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaXMgc3RhcnRlZFxyXG4gKiAgLSBgZG93bmxvYWRlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkXHJcbiAqXHJcbiAqICMjIExlYXJuIE1vcmVcclxuICpcclxuICogIC0gW0dpdEh1Yl0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UpXHJcbiAqICAtIFtHaXRCb29rXShodHRwczovL3B1cmNoYXNlLmNvcmRvdmEuZm92ZWEuY2MvKVxyXG4gKiAgLSBbV2lraV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2Uvd2lraSlcclxuICogIC0gW0FQSSByZWZlcmVuY2VdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2Jsb2IvbWFzdGVyL2RvYy9hcGkubWQpXHJcbiAqXHJcbiAqICMjIFRlY2huaWNhbCBTdXBwb3J0IG9yIFF1ZXN0aW9uc1xyXG4gKlxyXG4gKiBJZiB5b3UgaGF2ZSBxdWVzdGlvbnMgb3IgbmVlZCBoZWxwIGludGVncmF0aW5nIEluLUFwcCBQdXJjaGFzZSwgW09wZW4gYW4gSXNzdWUgb24gR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9pc3N1ZXMpIG9yIGVtYWlsIHVzIGF0IF9zdXBwb3J0QGZvdmVhLmNjXy5cclxuICpcclxuICogQGludGVyZmFjZXNcclxuICogSUFQUHJvZHVjdFxyXG4gKiBJQVBQcm9kdWN0T3B0aW9uc1xyXG4gKiBJQVBQcm9kdWN0RXZlbnRzXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0luQXBwUHVyY2hhc2UyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZScsXHJcbiAgcGx1Z2luUmVmOiAnc3RvcmUnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJywgJ1dpbmRvd3MnXSxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXB1cmNoYXNlIC0tdmFyaWFibGUgQklMTElOR19LRVk9XCI8QU5EUk9JRF9CSUxMSU5HX0tFWT5cIicsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEluQXBwUHVyY2hhc2UyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFFVSUVUOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUk9SOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFdBUk5JTkc6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5GTzogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBERUJVRzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBEZWJ1ZyBsZXZlbC4gVXNlIFFVSUVULCBFUlJPUiwgV0FSTklORywgSU5GTyBvciBERUJVRyBjb25zdGFudHNcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB2ZXJib3NpdHk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gY2xlYXIgdGhlIHRyYW5zYWN0aW9uIHF1ZXVlLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24uXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZCNyYW5kb20tdGlwc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGF1dG9GaW5pc2hUcmFuc2FjdGlvbnM6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIGludm9rZSB0aGUgcGxhdGZvcm0gcHVyY2hhc2Ugc2FuZGJveC4gKFdpbmRvd3Mgb25seSlcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBzYW5kYm94OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGRvd25sb2FkaW5nIG9mIGhvc3RlZCBjb250ZW50LiAoQXBwbGUgb25seSkuXHJcbiAgICogVXNlZnVsIGluIGRldmVsb3BtZW50IG9yIHdoZW4gbWlncmF0aW5nIHlvdXIgYXBwIGF3YXkgZnJvbSBBcHBsZSBIb3N0ZWQgQ29udGVudC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBkaXNhYmxlSG9zdGVkQ29udGVudDogYm9vbGVhbjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRlJFRV9TVUJTQ1JJUFRJT046IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUEFJRF9TVUJTQ1JJUFRJT046IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTk9OX1JFTkVXSU5HX1NVQlNDUklQVElPTjogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBDT05TVU1BQkxFOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE5PTl9DT05TVU1BQkxFOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9TRVRVUDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfTE9BRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUFVSQ0hBU0U6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0xPQURfUkVDRUlQVFM6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0NMSUVOVF9JTlZBTElEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QQVlNRU5UX0NBTkNFTExFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUEFZTUVOVF9JTlZBTElEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QQVlNRU5UX05PVF9BTExPV0VEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9VTktOT1dOOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9SRUZSRVNIX1JFQ0VJUFRTOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9JTlZBTElEX1BST0RVQ1RfSUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0ZJTklTSDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfQ09NTVVOSUNBVElPTjogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfU1VCU0NSSVBUSU9OU19OT1RfQVZBSUxBQkxFOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9NSVNTSU5HX1RPS0VOOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9WRVJJRklDQVRJT05fRkFJTEVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9CQURfUkVTUE9OU0U6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1JFRlJFU0g6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1BBWU1FTlRfRVhQSVJFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfRE9XTkxPQUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1NVQlNDUklQVElPTl9VUERBVEVfTk9UX0FWQUlMQUJMRTogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSRUdJU1RFUkVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElOVkFMSUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVkFMSUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUkVRVUVTVEVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIElOSVRJQVRFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBBUFBST1ZFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGSU5JU0hFRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBPV05FRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBET1dOTE9BRElORzogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBET1dOTE9BREVEOiBzdHJpbmc7XHJcblxyXG4gIC8qIHZhbGlkYXRpb24gZXJyb3IgY29kZXMgKi9cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5WQUxJRF9QQVlMT0FEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENPTk5FQ1RJT05fRkFJTEVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBVUkNIQVNFX0VYUElSRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUFVSQ0hBU0VfQ09OU1VNRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5URVJOQUxfRVJST1I6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTkVFRF9NT1JFX0RBVEE6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgcHJvZHVjdHM6IElBUFByb2R1Y3RzO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB2YWxpZGF0b3I6XHJcbiAgICB8IHN0cmluZ1xyXG4gICAgfCAoKHVybDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgY2FsbGJhY2s6IEZ1bmN0aW9uKSA9PiB2b2lkKVxyXG4gICAgfCB7XHJcbiAgICAgICAgdXJsOiBzdHJpbmc7XHJcbiAgICAgICAgaGVhZGVycz86IHsgW3Rva2VuOiBzdHJpbmddOiBzdHJpbmcgfTtcclxuICAgICAgfTtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgYXBwbGljYXRpb25Vc2VybmFtZTogc3RyaW5nIHwgKCgpID0+IHN0cmluZyk7XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGdldEFwcGxpY2F0aW9uVXNlcm5hbWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGxvZzoge1xyXG4gICAgZXJyb3I6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICB3YXJuOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgaW5mbzogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIGRlYnVnOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBwcm9kdWN0IGJ5IGlkIG9yIGFsaWFzXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWRPckFsaWFzXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0KGlkT3JBbGlhczogc3RyaW5nKTogSUFQUHJvZHVjdCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlciBlcnJvciBoYW5kbGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb25FcnJvciB7RnVuY3Rpb259IGZ1bmN0aW9uIHRvIGNhbGwgb24gZXJyb3JcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBlcnJvcihvbkVycm9yOiBGdW5jdGlvbik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIG9yIHJlZ2lzdGVyIGEgcHJvZHVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHByb2R1Y3Qge0lBUFByb2R1Y3RPcHRpb25zfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlZ2lzdGVyKHByb2R1Y3Q6IElBUFByb2R1Y3RPcHRpb25zIHwgSUFQUHJvZHVjdE9wdGlvbnNbXSk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcXVlcnlcclxuICAgKiBAcGFyYW0gZXZlbnRcclxuICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgKiBAcmV0dXJucyB7SUFQUHJvZHVjdEV2ZW50c31cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB3aGVuKHF1ZXJ5OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBldmVudD86IHN0cmluZywgY2FsbGJhY2s/OiBJQVBRdWVyeUNhbGxiYWNrKTogSUFQUHJvZHVjdEV2ZW50cyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJZGVudGljYWwgdG8gYHdoZW5gLCBidXQgdGhlIGNhbGxiYWNrIHdpbGwgYmUgY2FsbGVkIG9ubHkgb25jZS4gQWZ0ZXIgYmVpbmcgY2FsbGVkLCB0aGUgY2FsbGJhY2sgd2lsbCBiZSB1bnJlZ2lzdGVyZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcXVlcnkge3N0cmluZyB8IElBUFByb2R1Y3R9XHJcbiAgICogQHBhcmFtIFtldmVudF0ge2V2ZW50fVxyXG4gICAqIEBwYXJhbSBbY2FsbGJhY2tdIHtJQVBRdWVyeUNhbGxiYWNrfVxyXG4gICAqIEByZXR1cm5zIHtJQVBQcm9kdWN0RXZlbnRzfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG9uY2UocXVlcnk6IHN0cmluZyB8IElBUFByb2R1Y3QsIGV2ZW50Pzogc3RyaW5nLCBjYWxsYmFjaz86IElBUFF1ZXJ5Q2FsbGJhY2spOiBJQVBQcm9kdWN0RXZlbnRzIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVucmVnaXN0ZXIgYSBjYWxsYmFjay4gV29ya3MgZm9yIGNhbGxiYWNrcyByZWdpc3RlcmVkIHdpdGggcmVhZHksIHdoZW4sIG9uY2UgYW5kIGVycm9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvZmYoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSB0aGUgcHVyY2hhc2Ugb2YgYSBwcm9kdWN0LlxyXG4gICAqXHJcbiAgICogVGhlIGBwcm9kdWN0YCBhcmd1bWVudCBjYW4gYmUgZWl0aGVyOlxyXG4gICAqXHJcbiAgICogIC0gdGhlIGBJQVBQcm9kdWN0YCBvYmplY3RcclxuICAgKiAgLSB0aGUgcHJvZHVjdCBgaWRgXHJcbiAgICogIC0gdGhlIHByb2R1Y3QgYGFsaWFzYFxyXG4gICAqXHJcbiAgICogVGhlIGBhZGRpdGlvbmFsRGF0YWAgYXJndW1lbnQgaXMgYW4gb3B0aW9uYWwgb2JqZWN0IHdpdGggYXR0cmlidXRlczpcclxuICAgKiAgLSBgb2xkUHVyY2hhc2VkU2t1c2A6IGEgc3RyaW5nIGFycmF5IHdpdGggdGhlIG9sZCBzdWJzY3JpcHRpb24gdG8gdXBncmFkZS9kb3duZ3JhZGUgb24gQW5kcm9pZC4gU2VlOiBbYW5kcm9pZCBkZXZlbG9wZXJdKGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvYmlsbGluZ19yZWZlcmVuY2UuaHRtbCN1cGdyYWRlLWdldEJ1eUludGVudFRvUmVwbGFjZVNrdXMpIGZvciBtb3JlIGluZm9cclxuICAgKiAgLSBgZGV2ZWxvcGVyUGF5bG9hZGA6IHN0cmluZyByZXByZXNlbnRpbmcgdGhlIGRldmVsb3BlciBwYXlsb2FkIGFzIGRlc2NyaWJlZCBpbiBbYmlsbGluZyBiZXN0IHByYWN0aWNlc10oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9iaWxsaW5nX2Jlc3RfcHJhY3RpY2VzLmh0bWwpXHJcbiAgICogIC0gYGFwcGxpY2F0aW9uVXNlcm5hbWVgOiB0aGUgaWRlbnRpZmllciBvZiB0aGUgdXNlciBpbiB5b3VyIGFwcGxpY2F0aW9uLlxyXG4gICAqXHJcbiAgICogU2VlIHRoZSBcIlB1cmNoYXNpbmcgc2VjdGlvblwiIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHB1cmNoYXNlIHByb2Nlc3MuXHJcbiAgICpcclxuICAgKiByZXR1cm4gdmFsdWUqKlxyXG4gICAqXHJcbiAgICogYHN0b3JlLm9yZGVyKClgIHJldHVybnMgYSBQcm9taXNlIHdpdGggdGhlIGZvbGxvd2luZyBtZXRob2RzOlxyXG4gICAqXHJcbiAgICogIC0gYHRoZW5gIC0gY2FsbGVkIHdoZW4gdGhlIG9yZGVyIHdhcyBzdWNjZXNzZnVsbHkgaW5pdGlhdGVkLlxyXG4gICAqICAtIGBlcnJvcmAgLSBjYWxsZWQgaWYgdGhlIG9yZGVyIGNvdWxkbid0IGJlIGluaXRpYXRlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwcm9kdWN0XHJcbiAgICogQHBhcmFtIGFkZGl0aW9uYWxEYXRhXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgb3JkZXIocHJvZHVjdDogc3RyaW5nIHwgSUFQUHJvZHVjdCwgYWRkaXRpb25hbERhdGE/OiBhbnkpOiB7IHRoZW46IEZ1bmN0aW9uOyBlcnJvcjogRnVuY3Rpb24gfSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgcmVhZHkoY2FsbGJhY2s6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEFmdGVyIHlvdSdyZSBkb25lIHJlZ2lzdGVyaW5nIHlvdXIgc3RvcmUncyBwcm9kdWN0IGFuZCBldmVudHMgaGFuZGxlcnMsXHJcbiAgICogdGltZSB0byBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLlxyXG4gICAqXHJcbiAgICogVGhpcyB3aWxsIGluaXRpYXRlIGFsbCB0aGUgY29tcGxleCBiZWhpbmQtdGhlLXNjZW5lIHdvcmssIHRvIGxvYWQgcHJvZHVjdFxyXG4gICAqIGRhdGEgZnJvbSB0aGUgc2VydmVycyBhbmQgcmVzdG9yZSB3aGF0ZXZlciBhbHJlYWR5IGhhdmUgYmVlblxyXG4gICAqIHB1cmNoYXNlZCBieSB0aGUgdXNlci5cclxuICAgKlxyXG4gICAqIE5vdGUgdGhhdCB5b3UgY2FuIGNhbGwgdGhpcyBtZXRob2QgYWdhaW4gbGF0ZXIgZHVyaW5nIHRoZSBhcHBsaWNhdGlvblxyXG4gICAqIGV4ZWN1dGlvbiB0byByZS10cmlnZ2VyIGFsbCB0aGF0IGhhcmQtd29yay4gSXQncyBraW5kIG9mIGV4cGVuc2l2ZSBpbiB0ZXJtIG9mXHJcbiAgICogcHJvY2Vzc2luZywgc28geW91J2QgYmV0dGVyIGNvbnNpZGVyIGl0IHR3aWNlLlxyXG4gICAqXHJcbiAgICogT25lIGdvb2Qgd2F5IG9mIGRvaW5nIGl0IGlzIHRvIGFkZCBhIFwiUmVmcmVzaCBQdXJjaGFzZXNcIiBidXR0b24gaW4geW91clxyXG4gICAqIGFwcGxpY2F0aW9ucyBzZXR0aW5ncy4gVGhpcyB3YXksIGlmIGRlbGl2ZXJ5IG9mIGEgcHVyY2hhc2UgZmFpbGVkIG9yXHJcbiAgICogaWYgYSB1c2VyIHdhbnRzIHRvIHJlc3RvcmUgcHVyY2hhc2VzIGhlIG1hZGUgZnJvbSBhbm90aGVyIGRldmljZSwgaGUnbGxcclxuICAgKiBoYXZlIGEgd2F5IHRvIGRvIGp1c3QgdGhhdC5cclxuICAgKlxyXG4gICAqIGV4YW1wbGUgdXNhZ2UqKlxyXG4gICAqXHJcbiAgICogYGBgdHlwZXNjcmlwdFxyXG4gICAqICAgIC8vIC4uLlxyXG4gICAqICAgIC8vIHJlZ2lzdGVyIHByb2R1Y3RzIGFuZCBldmVudHMgaGFuZGxlcnMgaGVyZVxyXG4gICAqICAgIC8vIC4uLlxyXG4gICAqICAgIC8vXHJcbiAgICogICAgLy8gdGhlbiBhbmQgb25seSB0aGVuLCBjYWxsIHJlZnJlc2guXHJcbiAgICogICAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiByZXN0b3JlIHB1cmNoYXNlcyoqXHJcbiAgICpcclxuICAgKiBBZGQgYSBcIlJlZnJlc2ggUHVyY2hhc2VzXCIgYnV0dG9uIHRvIGNhbGwgdGhlIGBzdG9yZS5yZWZyZXNoKClgIG1ldGhvZCwgbGlrZTpcclxuICAgKlxyXG4gICAqIGA8YnV0dG9uIG9uY2xpY2s9XCI8cHNldWRvX2NvZGU+dGhpcy5zdG9yZS5yZWZyZXNoKCk8L3BzZXVkb19jb2RlPlwiPlJlc3RvcmUgUHVyY2hhc2VzPC9idXR0b24+YFxyXG4gICAqXHJcbiAgICogVG8gbWFrZSB0aGUgcmVzdG9yZSBwdXJjaGFzZXMgd29yayBhcyBleHBlY3RlZCwgcGxlYXNlIG1ha2Ugc3VyZSB0aGF0XHJcbiAgICogdGhlIFwiYXBwcm92ZWRcIiBldmVudCBsaXN0ZW5lciBoYWQgYmUgcmVnaXN0ZXJlZCBwcm9wZXJseSxcclxuICAgKiBhbmQgaW4gdGhlIGNhbGxiYWNrIGBwcm9kdWN0LmZpbmlzaCgpYCBzaG91bGQgYmUgY2FsbGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlZnJlc2goKTogSVJlZmVzaFJlc3VsdCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKiogTGlnaHR3ZWlnaHQgbWV0aG9kIGxpa2UgcmVmcmVzaCBidXQgZG8gbm90IHJlbG9naW4gdXNlciAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHVwZGF0ZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKiBPcGVucyB0aGUgTWFuYWdlIFN1YnNjcmlwdGlvbiBwYWdlIChBcHBTdG9yZSwgUGxheSwgTWljcm9zb2Z0LCAuLi4pLiAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG1hbmFnZVN1YnNjcmlwdGlvbnMoKTogdm9pZCB7fVxyXG5cclxuICAvKiogT3BlbnMgdGhlIENvZGUgUmVkZW1wdGlvbiBTaGVldCBvbiBpT1MuIChBcHBTdG9yZSkuICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVkZWVtKCk6IHZvaWQge31cclxuXHJcbiAgLyoqIE9wZW5zIHRoZSBNYW5hZ2UgQmlsbGluZyBwYWdlIChBcHBTdG9yZSwgUGxheSwgTWljcm9zb2Z0LCAuLi4pLCB3aGVyZSB0aGUgdXNlciBjYW4gdXBkYXRlIGhpcy9oZXIgcGF5bWVudCBtZXRob2RzLiAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG1hbmFnZUJpbGxpbmcoKTogdm9pZCB7fVxyXG5cclxuICAvKiogT3BlbiB0aGUgc3Vic2NyaXB0aW9uIHByaWNlIGNoYW5nZSBub3RpZmljYXRpb24gd29ya2Zsb3cuIChQbGF5KSBTZWU6IGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL2dvb2dsZS9wbGF5L2JpbGxpbmcvc3Vic2NyaXB0aW9ucyNwcmljZS1jaGFuZ2UtY29tbXVuaWNhdGUgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBsYXVuY2hQcmljZUNoYW5nZUNvbmZpcm1hdGlvbkZsb3coXHJcbiAgICBwcm9kdWN0SWQ6IHN0cmluZyxcclxuICAgIGNhbGxiYWNrOiAoc3RhdHVzOiAnT0snIHwgJ1Vua25vd25Qcm9kdWN0JyB8ICdVc2VyQ2FuY2VsZWQnKSA9PiB2b2lkXHJcbiAgKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==