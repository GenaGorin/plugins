import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var IAPError = /** @class */ (function () {
    function IAPError() {
    }
    return IAPError;
}());
export { IAPError };
var InAppPurchase2 = /** @class */ (function (_super) {
    __extends(InAppPurchase2, _super);
    function InAppPurchase2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppPurchase2.prototype.getApplicationUsername = function () { return cordova(this, "getApplicationUsername", { "sync": true }, arguments); };
    InAppPurchase2.prototype.get = function (idOrAlias) { return cordova(this, "get", { "sync": true }, arguments); };
    InAppPurchase2.prototype.error = function (onError) { return cordova(this, "error", { "sync": true }, arguments); };
    InAppPurchase2.prototype.register = function (product) { return cordova(this, "register", { "sync": true }, arguments); };
    InAppPurchase2.prototype.when = function (query, event, callback) { return cordova(this, "when", { "sync": true }, arguments); };
    InAppPurchase2.prototype.once = function (query, event, callback) { return cordova(this, "once", { "sync": true }, arguments); };
    InAppPurchase2.prototype.off = function (callback) { return cordova(this, "off", { "sync": true }, arguments); };
    InAppPurchase2.prototype.order = function (product, additionalData) { return cordova(this, "order", { "sync": true }, arguments); };
    InAppPurchase2.prototype.ready = function (callback) { return cordova(this, "ready", {}, arguments); };
    InAppPurchase2.prototype.refresh = function () { return cordova(this, "refresh", { "sync": true }, arguments); };
    InAppPurchase2.prototype.update = function () { return cordova(this, "update", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageSubscriptions = function () { return cordova(this, "manageSubscriptions", { "sync": true }, arguments); };
    InAppPurchase2.prototype.redeem = function () { return cordova(this, "redeem", { "sync": true }, arguments); };
    InAppPurchase2.prototype.manageBilling = function () { return cordova(this, "manageBilling", { "sync": true }, arguments); };
    InAppPurchase2.prototype.launchPriceChangeConfirmationFlow = function (productId, callback) { return cordova(this, "launchPriceChangeConfirmationFlow", { "sync": true }, arguments); };
    Object.defineProperty(InAppPurchase2.prototype, "QUIET", {
        get: function () { return cordovaPropertyGet(this, "QUIET"); },
        set: function (value) { cordovaPropertySet(this, "QUIET", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERROR", {
        get: function () { return cordovaPropertyGet(this, "ERROR"); },
        set: function (value) { cordovaPropertySet(this, "ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "WARNING", {
        get: function () { return cordovaPropertyGet(this, "WARNING"); },
        set: function (value) { cordovaPropertySet(this, "WARNING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INFO", {
        get: function () { return cordovaPropertyGet(this, "INFO"); },
        set: function (value) { cordovaPropertySet(this, "INFO", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DEBUG", {
        get: function () { return cordovaPropertyGet(this, "DEBUG"); },
        set: function (value) { cordovaPropertySet(this, "DEBUG", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "verbosity", {
        get: function () { return cordovaPropertyGet(this, "verbosity"); },
        set: function (value) { cordovaPropertySet(this, "verbosity", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "autoFinishTransactions", {
        get: function () { return cordovaPropertyGet(this, "autoFinishTransactions"); },
        set: function (value) { cordovaPropertySet(this, "autoFinishTransactions", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "sandbox", {
        get: function () { return cordovaPropertyGet(this, "sandbox"); },
        set: function (value) { cordovaPropertySet(this, "sandbox", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "disableHostedContent", {
        get: function () { return cordovaPropertyGet(this, "disableHostedContent"); },
        set: function (value) { cordovaPropertySet(this, "disableHostedContent", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FREE_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "FREE_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "FREE_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PAID_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "PAID_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "PAID_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_RENEWING_SUBSCRIPTION", {
        get: function () { return cordovaPropertyGet(this, "NON_RENEWING_SUBSCRIPTION"); },
        set: function (value) { cordovaPropertySet(this, "NON_RENEWING_SUBSCRIPTION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NON_CONSUMABLE", {
        get: function () { return cordovaPropertyGet(this, "NON_CONSUMABLE"); },
        set: function (value) { cordovaPropertySet(this, "NON_CONSUMABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SETUP", {
        get: function () { return cordovaPropertyGet(this, "ERR_SETUP"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SETUP", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PURCHASE", {
        get: function () { return cordovaPropertyGet(this, "ERR_PURCHASE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PURCHASE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_LOAD_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_LOAD_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_LOAD_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_CLIENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_CLIENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_CLIENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_CANCELLED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_CANCELLED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_CANCELLED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_INVALID", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_INVALID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_NOT_ALLOWED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_NOT_ALLOWED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_NOT_ALLOWED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "ERR_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH_RECEIPTS", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH_RECEIPTS"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH_RECEIPTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_INVALID_PRODUCT_ID", {
        get: function () { return cordovaPropertyGet(this, "ERR_INVALID_PRODUCT_ID"); },
        set: function (value) { cordovaPropertySet(this, "ERR_INVALID_PRODUCT_ID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_FINISH", {
        get: function () { return cordovaPropertyGet(this, "ERR_FINISH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_FINISH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_COMMUNICATION", {
        get: function () { return cordovaPropertyGet(this, "ERR_COMMUNICATION"); },
        set: function (value) { cordovaPropertySet(this, "ERR_COMMUNICATION", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTIONS_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_MISSING_TOKEN", {
        get: function () { return cordovaPropertyGet(this, "ERR_MISSING_TOKEN"); },
        set: function (value) { cordovaPropertySet(this, "ERR_MISSING_TOKEN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_VERIFICATION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "ERR_VERIFICATION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_VERIFICATION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_BAD_RESPONSE", {
        get: function () { return cordovaPropertyGet(this, "ERR_BAD_RESPONSE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_BAD_RESPONSE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_REFRESH", {
        get: function () { return cordovaPropertyGet(this, "ERR_REFRESH"); },
        set: function (value) { cordovaPropertySet(this, "ERR_REFRESH", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_PAYMENT_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "ERR_PAYMENT_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "ERR_PAYMENT_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_DOWNLOAD", {
        get: function () { return cordovaPropertyGet(this, "ERR_DOWNLOAD"); },
        set: function (value) { cordovaPropertySet(this, "ERR_DOWNLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", {
        get: function () { return cordovaPropertyGet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE"); },
        set: function (value) { cordovaPropertySet(this, "ERR_SUBSCRIPTION_UPDATE_NOT_AVAILABLE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REGISTERED", {
        get: function () { return cordovaPropertyGet(this, "REGISTERED"); },
        set: function (value) { cordovaPropertySet(this, "REGISTERED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID", {
        get: function () { return cordovaPropertyGet(this, "INVALID"); },
        set: function (value) { cordovaPropertySet(this, "INVALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "VALID", {
        get: function () { return cordovaPropertyGet(this, "VALID"); },
        set: function (value) { cordovaPropertySet(this, "VALID", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "REQUESTED", {
        get: function () { return cordovaPropertyGet(this, "REQUESTED"); },
        set: function (value) { cordovaPropertySet(this, "REQUESTED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INITIATED", {
        get: function () { return cordovaPropertyGet(this, "INITIATED"); },
        set: function (value) { cordovaPropertySet(this, "INITIATED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "APPROVED", {
        get: function () { return cordovaPropertyGet(this, "APPROVED"); },
        set: function (value) { cordovaPropertySet(this, "APPROVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "FINISHED", {
        get: function () { return cordovaPropertyGet(this, "FINISHED"); },
        set: function (value) { cordovaPropertySet(this, "FINISHED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "OWNED", {
        get: function () { return cordovaPropertyGet(this, "OWNED"); },
        set: function (value) { cordovaPropertySet(this, "OWNED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADING", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADING"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADING", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "DOWNLOADED", {
        get: function () { return cordovaPropertyGet(this, "DOWNLOADED"); },
        set: function (value) { cordovaPropertySet(this, "DOWNLOADED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INVALID_PAYLOAD", {
        get: function () { return cordovaPropertyGet(this, "INVALID_PAYLOAD"); },
        set: function (value) { cordovaPropertySet(this, "INVALID_PAYLOAD", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "CONNECTION_FAILED", {
        get: function () { return cordovaPropertyGet(this, "CONNECTION_FAILED"); },
        set: function (value) { cordovaPropertySet(this, "CONNECTION_FAILED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_EXPIRED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_EXPIRED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_EXPIRED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "PURCHASE_CONSUMED", {
        get: function () { return cordovaPropertyGet(this, "PURCHASE_CONSUMED"); },
        set: function (value) { cordovaPropertySet(this, "PURCHASE_CONSUMED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "INTERNAL_ERROR", {
        get: function () { return cordovaPropertyGet(this, "INTERNAL_ERROR"); },
        set: function (value) { cordovaPropertySet(this, "INTERNAL_ERROR", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "NEED_MORE_DATA", {
        get: function () { return cordovaPropertyGet(this, "NEED_MORE_DATA"); },
        set: function (value) { cordovaPropertySet(this, "NEED_MORE_DATA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "products", {
        get: function () { return cordovaPropertyGet(this, "products"); },
        set: function (value) { cordovaPropertySet(this, "products", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "validator", {
        get: function () { return cordovaPropertyGet(this, "validator"); },
        set: function (value) { cordovaPropertySet(this, "validator", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "applicationUsername", {
        get: function () { return cordovaPropertyGet(this, "applicationUsername"); },
        set: function (value) { cordovaPropertySet(this, "applicationUsername", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(InAppPurchase2.prototype, "log", {
        get: function () { return cordovaPropertyGet(this, "log"); },
        set: function (value) { cordovaPropertySet(this, "log", value); },
        enumerable: false,
        configurable: true
    });
    InAppPurchase2.pluginName = "InAppPurchase2";
    InAppPurchase2.plugin = "cordova-plugin-purchase";
    InAppPurchase2.pluginRef = "store";
    InAppPurchase2.repo = "https://github.com/j3k0/cordova-plugin-purchase";
    InAppPurchase2.platforms = ["iOS", "Android", "Windows"];
    InAppPurchase2.install = "ionic cordova plugin add cordova-plugin-purchase --variable BILLING_KEY=\"<ANDROID_BILLING_KEY>\"";
    InAppPurchase2.decorators = [
        { type: Injectable }
    ];
    return InAppPurchase2;
}(AwesomeCordovaNativePlugin));
export { InAppPurchase2 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXB1cmNoYXNlLTIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7bUJBRDNDOzs7O0lBNmpCb0Msa0NBQTBCOzs7O0lBMEw1RCwrQ0FBc0I7SUFrQnRCLDRCQUFHLGFBQUMsU0FBaUI7SUFVckIsOEJBQUssYUFBQyxPQUFpQjtJQVF2QixpQ0FBUSxhQUFDLE9BQWdEO0lBVXpELDZCQUFJLGFBQUMsS0FBMEIsRUFBRSxLQUFjLEVBQUUsUUFBMkI7SUFhNUUsNkJBQUksYUFBQyxLQUEwQixFQUFFLEtBQWMsRUFBRSxRQUEyQjtJQVU1RSw0QkFBRyxhQUFDLFFBQWtCO0lBNkJ0Qiw4QkFBSyxhQUFDLE9BQTRCLEVBQUUsY0FBb0I7SUFLeEQsOEJBQUssYUFBQyxRQUFrQjtJQTBDeEIsZ0NBQU87SUFNUCwrQkFBTTtJQUlOLDRDQUFtQjtJQUluQiwrQkFBTTtJQUlOLHNDQUFhO0lBSWIsMERBQWlDLGFBQy9CLFNBQWlCLEVBQ2pCLFFBQW9FOzBCQWpXdEUsaUNBQUs7Ozs7OzswQkFHTCxpQ0FBSzs7Ozs7OzBCQUdMLG1DQUFPOzs7Ozs7MEJBR1AsZ0NBQUk7Ozs7OzswQkFHSixpQ0FBSzs7Ozs7OzBCQU1MLHFDQUFTOzs7Ozs7MEJBT1Qsa0RBQXNCOzs7Ozs7MEJBTXRCLG1DQUFPOzs7Ozs7MEJBT1AsZ0RBQW9COzs7Ozs7MEJBR3BCLDZDQUFpQjs7Ozs7OzBCQUdqQiw2Q0FBaUI7Ozs7OzswQkFHakIscURBQXlCOzs7Ozs7MEJBR3pCLHNDQUFVOzs7Ozs7MEJBR1YsMENBQWM7Ozs7OzswQkFHZCxxQ0FBUzs7Ozs7OzBCQUdULG9DQUFROzs7Ozs7MEJBR1Isd0NBQVk7Ozs7OzswQkFHWiw2Q0FBaUI7Ozs7OzswQkFHakIsOENBQWtCOzs7Ozs7MEJBR2xCLGlEQUFxQjs7Ozs7OzBCQUdyQiwrQ0FBbUI7Ozs7OzswQkFHbkIsbURBQXVCOzs7Ozs7MEJBR3ZCLHVDQUFXOzs7Ozs7MEJBR1gsZ0RBQW9COzs7Ozs7MEJBR3BCLGtEQUFzQjs7Ozs7OzBCQUd0QixzQ0FBVTs7Ozs7OzBCQUdWLDZDQUFpQjs7Ozs7OzBCQUdqQiwyREFBK0I7Ozs7OzswQkFHL0IsNkNBQWlCOzs7Ozs7MEJBR2pCLG1EQUF1Qjs7Ozs7OzBCQUd2Qiw0Q0FBZ0I7Ozs7OzswQkFHaEIsdUNBQVc7Ozs7OzswQkFHWCwrQ0FBbUI7Ozs7OzswQkFHbkIsd0NBQVk7Ozs7OzswQkFHWixpRUFBcUM7Ozs7OzswQkFHckMsc0NBQVU7Ozs7OzswQkFHVixtQ0FBTzs7Ozs7OzBCQUdQLGlDQUFLOzs7Ozs7MEJBR0wscUNBQVM7Ozs7OzswQkFHVCxxQ0FBUzs7Ozs7OzBCQUdULG9DQUFROzs7Ozs7MEJBR1Isb0NBQVE7Ozs7OzswQkFHUixpQ0FBSzs7Ozs7OzBCQUdMLHVDQUFXOzs7Ozs7MEJBR1gsc0NBQVU7Ozs7OzswQkFLViwyQ0FBZTs7Ozs7OzBCQUdmLDZDQUFpQjs7Ozs7OzBCQUdqQiw0Q0FBZ0I7Ozs7OzswQkFHaEIsNkNBQWlCOzs7Ozs7MEJBR2pCLDBDQUFjOzs7Ozs7MEJBR2QsMENBQWM7Ozs7OzswQkFHZCxvQ0FBUTs7Ozs7OzBCQUdSLHFDQUFTOzs7Ozs7MEJBU1QsK0NBQW1COzs7Ozs7MEJBUW5CLCtCQUFHOzs7Ozs7Ozs7Ozs7O2dCQWhNSixVQUFVOzt5QkE1akJYO0VBNmpCb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdE9wdGlvbnMge1xyXG4gIGlkOiBzdHJpbmc7XHJcbiAgYWxpYXM/OiBzdHJpbmc7XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElSZWZlc2hSZXN1bHQge1xyXG4gIGNhbmNlbGxlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQ7XHJcbiAgZmFpbGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxuICBjb21wbGV0ZWQoZm46ICgpID0+IHZvaWQpOiB2b2lkO1xyXG4gIGZpbmlzaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgSUFQUHJvZHVjdHMgPSBJQVBQcm9kdWN0W10gJiB7XHJcbiAgLyoqXHJcbiAgICogR2V0IHByb2R1Y3QgYnkgSURcclxuICAgKi9cclxuICBieUlkOiB7IFtpZDogc3RyaW5nXTogSUFQUHJvZHVjdCB9O1xyXG4gIC8qKlxyXG4gICAqIEdldCBwcm9kdWN0IGJ5IGFsaWFzXHJcbiAgICovXHJcbiAgYnlBbGlhczogeyBbYWxpYXM6IHN0cmluZ106IElBUFByb2R1Y3QgfTtcclxuICAvKipcclxuICAgKiBSZW1vdmUgYWxsIHByb2R1Y3RzIChmb3IgdGVzdGluZyBvbmx5KS5cclxuICAgKi9cclxuICByZXNldDogKCkgPT4ge307XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBJQVBRdWVyeUNhbGxiYWNrID0gKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB2b2lkKSB8ICgoZXJyb3I6IElBUEVycm9yKSA9PiB2b2lkKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUFQUHJvZHVjdCB7XHJcbiAgaWQ6IHN0cmluZztcclxuXHJcbiAgYWxpYXM/OiBzdHJpbmc7XHJcblxyXG4gIHR5cGU6IHN0cmluZztcclxuXHJcbiAgc3RhdGU6IHN0cmluZztcclxuXHJcbiAgdGl0bGU6IHN0cmluZztcclxuXHJcbiAgZGVzY3JpcHRpb246IHN0cmluZztcclxuXHJcbiAgcHJpY2VNaWNyb3M6IG51bWJlcjtcclxuXHJcbiAgcHJpY2U6IHN0cmluZztcclxuXHJcbiAgY3VycmVuY3k6IHN0cmluZztcclxuXHJcbiAgbG9hZGVkOiBib29sZWFuO1xyXG5cclxuICB2YWxpZDogYm9vbGVhbjtcclxuXHJcbiAgY2FuUHVyY2hhc2U6IGJvb2xlYW47XHJcblxyXG4gIG93bmVkOiBib29sZWFuO1xyXG5cclxuICBkb3dubG9hZGluZz86IGJvb2xlYW47XHJcblxyXG4gIGRvd25sb2FkZWQ/OiBib29sZWFuO1xyXG5cclxuICBsYXN0UmVuZXdhbERhdGU/OiBEYXRlO1xyXG5cclxuICBleHBpcnlEYXRlPzogRGF0ZTtcclxuXHJcbiAgaW50cm9QcmljZT86IHN0cmluZztcclxuXHJcbiAgaW50cm9QcmljZU1pY3Jvcz86IG51bWJlcjtcclxuXHJcbiAgaW50cm9QcmljZU51bWJlck9mUGVyaW9kcz86IG51bWJlcjtcclxuXHJcbiAgaW50cm9QcmljZVN1YnNjcmlwdGlvblBlcmlvZD86IHN0cmluZztcclxuXHJcbiAgaW50cm9QcmljZVBheW1lbnRNb2RlPzogc3RyaW5nO1xyXG5cclxuICBpbmVsaWdpYmxlRm9ySW50cm9QcmljZT86IGJvb2xlYW47XHJcblxyXG4gIGJpbGxpbmdQZXJpb2Q/OiBudW1iZXI7XHJcblxyXG4gIGJpbGxpbmdQZXJpb2RVbml0Pzogc3RyaW5nO1xyXG5cclxuICB0cmlhbFBlcmlvZD86IG51bWJlcjtcclxuXHJcbiAgdHJpYWxQZXJpb2RVbml0Pzogc3RyaW5nO1xyXG5cclxuICBhZGRpdGlvbmFsRGF0YT86IGFueTtcclxuXHJcbiAgdHJhbnNhY3Rpb24/OiBQbGF5U3RvcmVSZWNlaXB0IHwgQXBwU3RvcmVSZWNlaXB0O1xyXG5cclxuICAvKipcclxuICAgKiBDYWxsIGBwcm9kdWN0LmZpbmlzaCgpYCB0byBjb25maXJtIHRvIHRoZSBzdG9yZSB0aGF0IGFuIGFwcHJvdmVkIG9yZGVyIGhhcyBiZWVuIGRlbGl2ZXJlZC5cclxuICAgKlxyXG4gICAqIFRoaXMgd2lsbCBjaGFuZ2UgdGhlIHByb2R1Y3Qgc3RhdGUgZnJvbSBgQVBQUk9WRURgIHRvIGBGSU5JU0hFRGAgKHNlZSBwcm9kdWN0IGxpZmUtY3ljbGUpLlxyXG4gICAqXHJcbiAgICogQXMgbG9uZyBhcyB5b3Uga2VlcCB0aGUgcHJvZHVjdCBpbiBzdGF0ZSBgQVBQUk9WRURgOlxyXG4gICAqXHJcbiAgICogIC0gdGhlIG1vbmV5IG1heSBub3QgYmUgaW4geW91ciBhY2NvdW50IChpLmUuIHVzZXIgaXNuJ3QgY2hhcmdlZClcclxuICAgKiAgLSB5b3Ugd2lsbCByZWNlaXZlIHRoZSBgYXBwcm92ZWRgIGV2ZW50IGVhY2ggdGltZSB0aGUgYXBwbGljYXRpb24gc3RhcnRzLFxyXG4gICAqICAgIHdoZXJlIHlvdSBzaG91bGQgdHJ5IGFnYWluIHRvIGZpbmlzaCB0aGUgcGVuZGluZyB0cmFuc2FjdGlvbi5cclxuICAgKlxyXG4gICAqIGV4YW1wbGUgdXNlKipcclxuICAgKlxyXG4gICAqIGBgYGpzXHJcbiAgICogc3RvcmUud2hlbihcInByb2R1Y3QuaWRcIikuYXBwcm92ZWQoZnVuY3Rpb24ocHJvZHVjdCl7XHJcbiAgICogICAgIC8vIHN5bmNocm9ub3VzXHJcbiAgICogICAgIGFwcC51bmxvY2tGZWF0dXJlKCk7XHJcbiAgICogICAgIHByb2R1Y3QuZmluaXNoKCk7XHJcbiAgICogfSk7XHJcbiAgICogYGBgXHJcbiAgICpcclxuICAgKiBgYGBqc1xyXG4gICAqIHN0b3JlLndoZW4oXCJwcm9kdWN0LmlkXCIpLmFwcHJvdmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe1xyXG4gICAqICAgICAvLyBhc3luY2hyb25vdXNcclxuICAgKiAgICAgYXBwLmRvd25sb2FkRmVhdHVyZShmdW5jdGlvbigpIHtcclxuICAgKiAgICAgICAgIHByb2R1Y3QuZmluaXNoKCk7XHJcbiAgICogICAgIH0pO1xyXG4gICAqIH0pO1xyXG4gICAqIGBgYFxyXG4gICAqL1xyXG4gIGZpbmlzaCgpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZSBwdXJjaGFzZSB2YWxpZGF0aW9uIGFzIGRlZmluZWQgYnkgdGhlIGBzdG9yZS52YWxpZGF0b3JgIGF0dHJpYnV0ZS5cclxuICAgKlxyXG4gICAqIHJldHVybiB2YWx1ZSoqXHJcbiAgICpcclxuICAgKiBBIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XHJcbiAgICpcclxuICAgKiAgLSBgZG9uZShmdW5jdGlvbihwcm9kdWN0KXt9KWBcclxuICAgKiAgICAtIGNhbGxlZCB3aGV0aGVyIHZlcmlmaWNhdGlvbiBmYWlsZWQgb3Igc3VjY2VlZGVkLlxyXG4gICAqICAtIGBleHBpcmVkKGZ1bmN0aW9uKHByb2R1Y3Qpe30pYFxyXG4gICAqICAgIC0gY2FsbGVkIGlmIHRoZSBwdXJjaGFzZSBleHBpcmVkLlxyXG4gICAqICAtIGBzdWNjZXNzKGZ1bmN0aW9uKHByb2R1Y3QsIHB1cmNoYXNlRGF0YSl7fSlgXHJcbiAgICogICAgLSBjYWxsZWQgaWYgdGhlIHB1cmNoYXNlIGlzIHZhbGlkIGFuZCB2ZXJpZmllZC5cclxuICAgKiAgICAtIGBwdXJjaGFzZURhdGFgIGlzIHRoZSBkZXZpY2UgZGVwZW5kZW50IHRyYW5zYWN0aW9uIGRldGFpbHNcclxuICAgKiAgICAgIHJldHVybmVkIGJ5IHRoZSB2YWxpZGF0b3IsIHdoaWNoIHlvdSBjYW4gbW9zdCBwcm9iYWJseSBpZ25vcmUuXHJcbiAgICogIC0gYGVycm9yKGZ1bmN0aW9uKGVycil7fSlgXHJcbiAgICogICAgLSB2YWxpZGF0aW9uIGZhaWxlZCwgZWl0aGVyIGJlY2F1c2Ugb2YgZXhwaXJ5IG9yIGNvbW11bmljYXRpb25cclxuICAgKiAgICAgIGZhaWx1cmUuXHJcbiAgICogICAgLSBgZXJyYCBpcyBhIHN0b3JlLkVycm9yIG9iamVjdCwgd2l0aCBhIGNvZGUgZXhwZWN0ZWQgdG8gYmVcclxuICAgKiAgICAgIGBzdG9yZS5FUlJfUEFZTUVOVF9FWFBJUkVEYCBvciBgc3RvcmUuRVJSX1ZFUklGSUNBVElPTl9GQUlMRURgLlxyXG4gICAqL1xyXG4gIHZlcmlmeSgpOiBhbnk7XHJcblxyXG4gIHNldChrZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQ7XHJcblxyXG4gIHN0YXRlQ2hhbmdlZCgpOiB2b2lkO1xyXG5cclxuICBvbihldmVudDogc3RyaW5nLCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xyXG5cclxuICBvbmNlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQ7XHJcblxyXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkO1xyXG5cclxuICB0cmlnZ2VyKGFjdGlvbjogc3RyaW5nLCBhcmdzOiBhbnkpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElBUFByb2R1Y3RFdmVudHMge1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGRhdGEgaXMgbG9hZGVkIGZyb20gdGhlIHN0b3JlLiAqL1xyXG4gIGxvYWRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhbnkgY2hhbmdlIG9jY3VyZWQgdG8gYSBwcm9kdWN0LiAqL1xyXG4gIHVwZGF0ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYW4gb3JkZXIgZmFpbGVkLiBUaGUgYGVycmAgcGFyYW1ldGVyIGlzIGFuIElBUEVycm9yIG9iamVjdC4gKi9cclxuICBlcnJvcjogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgYXBwcm92ZWQuICovXHJcbiAgYXBwcm92ZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC4gKi9cclxuICBvd25lZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgY2FuY2VsbGVkIGJ5IHRoZSB1c2VyLiAqL1xyXG4gIGNhbmNlbGxlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBhbiBvcmRlciBpcyByZWZ1bmRlZCBieSB0aGUgdXNlci4gKi9cclxuICByZWZ1bmRlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBwcm9kdWN0IGhhcyBqdXN0IGJlZW4gcmVnaXN0ZXJlZC4gKi9cclxuICByZWdpc3RlcmVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwcm9kdWN0IGRldGFpbHMgaGF2ZSBiZWVuIHN1Y2Nlc3NmdWxseSBsb2FkZWQuICovXHJcbiAgdmFsaWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdGhlIHByb2R1Y3QgY2Fubm90IGJlIGxvYWRlZCBmcm9tIHRoZSBzdG9yZS4gKi9cclxuICBpbnZhbGlkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIGFuIG9yZGVyIGhhcyBqdXN0IGJlZW4gcmVxdWVzdGVkLiAqL1xyXG4gIHJlcXVlc3RlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiB0aGUgcHVyY2hhc2UgcHJvY2VzcyBoYXMgYmVlbiBpbml0aWF0ZWQuICovXHJcbiAgaW5pdGlhdGVkOiAoY2FsbGJhY2s6IElBUFF1ZXJ5Q2FsbGJhY2spID0+IElBUFByb2R1Y3RFdmVudHM7XHJcbiAgLyoqIENhbGxlZCB3aGVuIHRoZSBwdXJjaGFzZSBwcm9jZXNzIGhhcyBjb21wbGV0ZWQuICovXHJcbiAgZmluaXNoZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2YWxpZGF0aW9uIHN1Y2Nlc3NmdWwuICovXHJcbiAgdmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gcmVjZWlwdCB2ZXJpZmljYXRpb24gZmFpbGVkLiAqL1xyXG4gIHVudmVyaWZpZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxuICAvKiogQ2FsbGVkIHdoZW4gdmFsaWRhdGlvbiBmaW5kIGEgc3Vic2NyaXB0aW9uIHRvIGJlIGV4cGlyZWQuICovXHJcbiAgZXhwaXJlZDogKGNhbGxiYWNrOiBJQVBRdWVyeUNhbGxiYWNrKSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGlzIHN0YXJ0ZWQuICovXHJcbiAgZG93bmxvYWRpbmc6IChwcm9kdWN0OiBJQVBQcm9kdWN0LCBwcm9ncmVzczogYW55LCB0aW1lX3JlbWFpbmluZzogYW55KSA9PiBJQVBQcm9kdWN0RXZlbnRzO1xyXG4gIC8qKiBDYWxsZWQgd2hlbiBjb250ZW50IGRvd25sb2FkIGhhcyBzdWNjZXNzZnVsbHkgY29tcGxldGVkLiAqL1xyXG4gIGRvd25sb2FkZWQ6IChjYWxsYmFjazogSUFQUXVlcnlDYWxsYmFjaykgPT4gSUFQUHJvZHVjdEV2ZW50cztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUGxheVN0b3JlUmVjZWlwdCA9IHtcclxuICBpZDogc3RyaW5nO1xyXG4gIHB1cmNoYXNlU3RhdGU6IG51bWJlcjtcclxuICBwdXJjaGFzZVRva2VuOiBzdHJpbmc7XHJcbiAgcmVjZWlwdDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIHR5cGU6ICdhbmRyb2lkLXBsYXlzdG9yZSc7XHJcbn07XHJcblxyXG5leHBvcnQgdHlwZSBBcHBTdG9yZVJlY2VpcHQgPSB7XHJcbiAgaWQ6IHN0cmluZztcclxuICBhcHBTdG9yZVJlY2VpcHQ6IHN0cmluZztcclxuICBvcmlnaW5hbF90cmFuc2FjdGlvbl9pZDogc3RyaW5nO1xyXG4gIHR5cGU6ICdpb3MtYXBwc3RvcmUnO1xyXG59O1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBJQVBFcnJvciB7XHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEluIEFwcCBQdXJjaGFzZSAyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBJbi1BcHAgUHVyY2hhc2Ugb24gaU9TLCBBbmRyb2lkLCBXaW5kb3dzLCBtYWNPUyBhbmQgWEJveC5cclxuICpcclxuICogIyMgRmVhdHVyZXNcclxuICpcclxuICogfCAgfCBpb3MgfCBhbmRyb2lkIHwgd2luLTggfCB3aW4tMTAvdXdwIHwgbWFjIHxcclxuICogfC0tfC0tfC0tfC0tfC0tfC0tfFxyXG4gKiB8IGNvbnN1bWFibGVzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcclxuICogfCBub24gY29uc3VtYWJsZXMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxyXG4gKiB8IHN1YnNjcmlwdGlvbnMgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfCDinIUgfFxyXG4gKiB8IHJlc3RvcmUgcHVyY2hhc2VzIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHwg4pyFIHxcclxuICogfCByZWNlaXB0IHZhbGlkYXRpb25zIHwg4pyFIHwg4pyFIHwgIHwg4pyFIHwg4pyFIHxcclxuICogfCBkb3dubG9hZGFibGUgY29udGVudCB8IOKchSB8ICAgfCAgIHwgICB8IOKchSB8XHJcbiAqIHwgaW50cm9kdWN0b3J5IHByaWNlcyB8IOKchSB8IOKchSB8ICAgfCDinIUgfCDinIUgfFxyXG4gKlxyXG4gKiBTdXBwb3J0czpcclxuICpcclxuICogIC0gKippT1MqKiB2ZXJzaW9uIDcuMCBvciBoaWdoZXIuXHJcbiAqICAtICoqQW5kcm9pZCoqIHZlcnNpb24gMi4yIChBUEkgbGV2ZWwgOCkgb3IgaGlnaGVyXHJcbiAqICAgIC0gd2l0aCBHb29nbGUgUGxheSBjbGllbnQgdmVyc2lvbiAzLjkuMTYgb3IgaGlnaGVyXHJcbiAqICAtICoqV2luZG93cyoqIFN0b3JlL1Bob25lIDguMSBvciBoaWdoZXJcclxuICogIC0gKipXaW5kb3dzIDEwIE1vYmlsZSoqXHJcbiAqICAtICoqbWFjT1MqKiB2ZXJzaW9uIDEwXHJcbiAqICAtICoqWGJveCBPbmUqKlxyXG4gKiAgICAtIChhbmQgYW55IHBsYXRmb3JtIHN1cHBvcnRpbmcgTWljcm9zb2Z0J3MgVVdQKVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBJbkFwcFB1cmNoYXNlMiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9pbi1hcHAtcHVyY2hhc2UtMi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3RvcihwdWJsaWMgcGxhdGZvcm06IFBsYXRmb3JtLCBwcml2YXRlIHN0b3JlOiBJbkFwcFB1cmNoYXNlMikge1xyXG4gKiAgIHBsYXRmb3JtLnJlYWR5KCkudGhlbigoKSA9PiB7XHJcbiAqICAgIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xyXG4gKiAgICAgIGlkOiBcIm15X3Byb2R1Y3RfaWRcIixcclxuICogICAgICB0eXBlOiB0aGlzLnN0b3JlLk5PTl9SRU5FV0lOR19TVUJTQ1JJUFRJT04sXHJcbiAqICAgIH0pO1xyXG4gKiAgICB0aGlzLnN0b3JlLndoZW4oXCJteV9wcm9kdWN0X2lkXCIpXHJcbiAqICAgICAgLmFwcHJvdmVkKHAgPT4gcC52ZXJpZnkoKSlcclxuICogICAgICAudmVyaWZpZWQocCA9PiBwLmZpbmlzaCgpKTtcclxuICogICAgdGhpcy5zdG9yZS5yZWZyZXNoKCk7XHJcbiAqICAgfSk7XHJcbiAqIH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogIyMgRnVsbCBleGFtcGxlXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIC8vIEFmdGVyIHBsYXRmb3JtIHJlYWR5XHJcbiAqICB0aGlzLnN0b3JlLnZlcmJvc2l0eSA9IHRoaXMuc3RvcmUuREVCVUc7XHJcbiAqICB0aGlzLnN0b3JlLnJlZ2lzdGVyKHtcclxuICogICAgaWQ6IFwibXlfcHJvZHVjdF9pZFwiLFxyXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLlBBSURfU1VCU0NSSVBUSU9OLFxyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBSZWdpc3RlciBldmVudCBoYW5kbGVycyBmb3IgdGhlIHNwZWNpZmljIHByb2R1Y3RcclxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikucmVnaXN0ZXJlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICAgY29uc29sZS5sb2coJ1JlZ2lzdGVyZWQ6ICcgKyBKU09OLnN0cmluZ2lmeShwcm9kdWN0KSk7XHJcbiAqICB9KTtcclxuICpcclxuICogIC8vIFVwZGF0ZWRcclxuICogIHRoaXMuc3RvcmUud2hlbihcIm15X3Byb2R1Y3RfaWRcIikudXBkYXRlZCggKHByb2R1Y3Q6IElBUFByb2R1Y3QpID0+IHtcclxuICogICAgY29uc29sZS5sb2coJ1VwZGF0ZWQnICsgSlNPTi5zdHJpbmdpZnkocHJvZHVjdCkpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBVc2VyIGNsb3NlZCB0aGUgbmF0aXZlIHB1cmNoYXNlIGRpYWxvZ1xyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwibXlfcHJvZHVjdF9pZFwiKS5jYW5jZWxsZWQoIChwcm9kdWN0KSA9PiB7XHJcbiAqICAgICAgY29uc29sZS5lcnJvcignUHVyY2hhc2Ugd2FzIENhbmNlbGxlZCcpO1xyXG4gKiAgfSk7XHJcbiAqXHJcbiAqICAvLyBUcmFjayBhbGwgc3RvcmUgZXJyb3JzXHJcbiAqICB0aGlzLnN0b3JlLmVycm9yKCAoZXJyKSA9PiB7XHJcbiAqICAgIGNvbnNvbGUuZXJyb3IoJ1N0b3JlIEVycm9yICcgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgLy8gUnVuIHNvbWUgY29kZSBvbmx5IHdoZW4gdGhlIHN0b3JlIGlzIHJlYWR5IHRvIGJlIHVzZWRcclxuICogIHRoaXMuc3RvcmUucmVhZHkoKCkgPT4gIHtcclxuICogICAgY29uc29sZS5sb2coJ1N0b3JlIGlzIHJlYWR5Jyk7XHJcbiAqICAgIGNvbnNvbGUubG9nKCdQcm9kdWN0czogJyArIEpTT04uc3RyaW5naWZ5KHRoaXMuc3RvcmUucHJvZHVjdHMpKTtcclxuICogICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5zdG9yZS5nZXQoXCJteV9wcm9kdWN0X2lkXCIpKSk7XHJcbiAqICB9KTtcclxuICpcclxuICogIC8vIFJlZnJlc2ggdGhlIHN0YXR1cyBvZiBpbi1hcHAgcHJvZHVjdHNcclxuICogIHRoaXMuc3RvcmUucmVmcmVzaCgpO1xyXG4gKlxyXG4gKiAgLi4uXHJcbiAqXHJcbiAqICAvLyBUbyBtYWtlIGEgcHVyY2hhc2VcclxuICogIHRoaXMuc3RvcmUub3JkZXIoXCJteV9wcm9kdWN0X2lkXCIpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogIyMgUGhpbG9zb3BoeVxyXG4gKlxyXG4gKiBUaGUgQVBJIGlzIG1vc3RseSBldmVudHMgYmFzZWQuIEFzIGEgdXNlciBvZiB0aGlzIHBsdWdpbixcclxuICogeW91IHdpbGwgaGF2ZSB0byByZWdpc3RlciBsaXN0ZW5lcnMgdG8gY2hhbmdlcyBoYXBwZW5pbmcgdG8gdGhlIHByb2R1Y3RzXHJcbiAqIHlvdSByZWdpc3Rlci5cclxuICpcclxuICogVGhlIGNvcmUgb2YgdGhlIGxpc3RlbmluZyBtZWNoYW5pc20gaXMgdGhlIGB3aGVuKClgIG1ldGhvZC4gSXQgYWxsb3dzIHlvdSB0b1xyXG4gKiBiZSBub3RpZmllZCBvZiBjaGFuZ2VzIHRvIG9uZSBvciBhIHNldCBvZiBwcm9kdWN0cyB1c2luZyBhIHF1ZXJ5IG1lY2hhbmlzbTpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS51cGRhdGVkKHJlZnJlc2hTY3JlZW4pOyAvLyBtYXRjaCBhbnkgcHJvZHVjdFxyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwiZnVsbF92ZXJzaW9uXCIpLm93bmVkKHVubG9ja0FwcCk7IC8vIG1hdGNoIGEgc3BlY2lmaWMgcHJvZHVjdFxyXG4gKiAgdGhpcy5zdG9yZS53aGVuKFwic3Vic2NyaXB0aW9uXCIpLmFwcHJvdmVkKHNlcnZlckNoZWNrKTsgLy8gbWF0Y2ggYWxsIHN1YnNjcmlwdGlvbnNcclxuICogIHRoaXMuc3RvcmUud2hlbihcImRvd25sb2FkYWJsZSBjb250ZW50XCIpLmRvd25sb2FkZWQoc2hvd0NvbnRlbnQpO1xyXG4gKiBgYGBcclxuICpcclxuICogVGhlIGB1cGRhdGVkYCBldmVudCBpcyBmaXJlZCB3aGVuZXZlciBvbmUgb2YgdGhlIGZpZWxkcyBvZiBhIHByb2R1Y3QgaXNcclxuICogY2hhbmdlZCAoaXRzIGBvd25lZGAgc3RhdHVzIGZvciBpbnN0YW5jZSkuXHJcbiAqXHJcbiAqIFRoaXMgZXZlbnQgcHJvdmlkZXMgYSBnZW5lcmljIHdheSB0byB0cmFjayB0aGUgc3RhdHVzZXMgb2YgeW91ciBwdXJjaGFzZXMsXHJcbiAqIHRvIHVubG9jayBmZWF0dXJlcyB3aGVuIG5lZWRlZCBhbmQgdG8gcmVmcmVzaCB5b3VyIHZpZXdzIGFjY29yZGluZ2x5LlxyXG4gKlxyXG4gKiAjIyBSZWdpc3RlcmluZyBwcm9kdWN0c1xyXG4gKlxyXG4gKiBUaGUgc3RvcmUgbmVlZHMgdG8ga25vdyB0aGUgdHlwZSBhbmQgaWRlbnRpZmllcnMgb2YgeW91ciBwcm9kdWN0cyBiZWZvcmUgeW91XHJcbiAqIGNhbiB1c2UgdGhlbSBpbiB5b3VyIGNvZGUuXHJcbiAqXHJcbiAqIFVzZSBgc3RvcmUucmVnaXN0ZXIoKWAgdG8gZGVmaW5lIHRoZW0gYmVmb3JlIHlvdXIgZmlyc3QgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYC5cclxuICpcclxuICogT25jZSByZWdpc3RlcmVkLCB5b3UgY2FuIHVzZSBgc3RvcmUuZ2V0KClgIHRvIHJldHJpZXZlIGFuIGBJQVBQcm9kdWN0YCBvYmplY3QuXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogIHRoaXMuc3RvcmUucmVnaXN0ZXIoe1xyXG4gKiAgICBpZDogXCJteV9jb25zdW1hYmxlMVwiLFxyXG4gKiAgICB0eXBlOiB0aGlzLnN0b3JlLkNPTlNVTUFCTEVcclxuICogIH0pO1xyXG4gKiAgLi4uXHJcbiAqICBjb25zdCBwID0gdGhpcy5zdG9yZS5nZXQoXCJteV9jb25zdW1hYmxlMVwiKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFRoZSBwcm9kdWN0IGBpZGAgYW5kIGB0eXBlYCBoYXZlIHRvIG1hdGNoIHByb2R1Y3RzIGRlZmluZWQgaW4geW91clxyXG4gKiBBcHBsZSwgR29vZ2xlIG9yIE1pY3Jvc29mdCBkZXZlbG9wZXIgY29uc29sZXMuXHJcbiAqXHJcbiAqIExlYXJuIG1vcmUgYWJvdXQgaXQgW2Zyb20gdGhlIHdpa2ldKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL3dpa2kpLlxyXG4gKlxyXG4gKiAjIyBEaXNwbGF5aW5nIHByb2R1Y3RzXHJcbiAqXHJcbiAqIFJpZ2h0IGFmdGVyIHlvdSByZWdpc3RlcmVkIHlvdXIgcHJvZHVjdHMsIG5vdGhpbmcgbXVjaCBpcyBrbm93biBhYm91dCB0aGVtXHJcbiAqIGV4Y2VwdCB0aGVpciBgaWRgLCBgdHlwZWAgYW5kIGFuIG9wdGlvbmFsIGBhbGlhc2AuXHJcbiAqXHJcbiAqIFdoZW4geW91IHBlcmZvcm0gdGhlIGluaXRpYWwgY2FsbCB0byBgc3RvcmUucmVmcmVzaCgpYCwgdGhlIHBsYXRmb3Jtcycgc2VydmVyIHdpbGxcclxuICogYmUgY29udGFjdGVkIHRvIGxvYWQgaW5mb3JtYXRpb25zIGFib3V0IHRoZSByZWdpc3RlcmVkIHByb2R1Y3RzOiBodW1hblxyXG4gKiByZWFkYWJsZSBgdGl0bGVgIGFuZCBgZGVzY3JpcHRpb25gLCBgcHJpY2VgLCBldGMuXHJcbiAqXHJcbiAqIFRoaXMgaXNuJ3QgYW4gb3B0aW9uYWwgc3RlcCwgc3RvcmUgb3duZXJzIHJlcXVpcmUgeW91XHJcbiAqIHRvIGRpc3BsYXkgaW5mb3JtYXRpb24gYWJvdXQgYSBwcm9kdWN0IGV4YWN0bHkgYXMgcmV0cmlldmVkIGZyb20gdGhlaXIgc2VydmVyOiBub1xyXG4gKiBoYXJkLWNvZGluZyBvZiBwcmljZSBhbmQgdGl0bGUgYWxsb3dlZCEgVGhpcyBpcyBhbHNvIGNvbnZlbmllbnQgZm9yIHlvdVxyXG4gKiBhcyB5b3UgY2FuIGNoYW5nZSB0aGUgcHJpY2Ugb2YgeW91ciBpdGVtcyBrbm93aW5nIHRoYXQgaXQnbGwgYmUgcmVmbGVjdGVkIGluc3RhbnRseVxyXG4gKiBvbiB5b3VyIGNsaWVudHMnIGRldmljZXMuXHJcbiAqXHJcbiAqIE5vdGUgdGhhdCB0aGUgaW5mb3JtYXRpb24gbWF5IG5vdCBiZSBhdmFpbGFibGUgd2hlbiB0aGUgZmlyc3QgdmlldyB0aGF0IG5lZWRzXHJcbiAqIHRoZW0gYXBwZWFycyBvbiBzY3JlZW4uIEZvciB5b3UsIHRoZSBiZXN0IG9wdGlvbiBpcyB0byBoYXZlIHlvdXIgdmlldyBtb25pdG9yXHJcbiAqIGNoYW5nZXMgbWFkZSB0byB0aGUgcHJvZHVjdC5cclxuICpcclxuICogIyMgUHVyY2hhc2luZ1xyXG4gKlxyXG4gKiAjIyMjIGluaXRpYXRlIGEgcHVyY2hhc2VcclxuICpcclxuICogUHVyY2hhc2VzIGFyZSBpbml0aWF0ZWQgdXNpbmcgdGhlIGBzdG9yZS5vcmRlcihcInNvbWVfcHJvZHVjdF9pZFwiKWAgbWV0aG9kLlxyXG4gKlxyXG4gKiBUaGUgc3RvcmUgd2lsbCBtYW5hZ2UgdGhlIGludGVybmFsIHB1cmNoYXNlIGZsb3cuIEl0J2xsIGVuZDpcclxuICpcclxuICogIC0gd2l0aCBhbiBgYXBwcm92ZWRgIGV2ZW50LiBUaGUgcHJvZHVjdCBlbnRlcnMgdGhlIGBBUFBST1ZFRGAgc3RhdGUuXHJcbiAqICAtIHdpdGggYSBgY2FuY2VsbGVkYCBldmVudC4gVGhlIHByb2R1Y3QgZ2V0cyBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLlxyXG4gKiAgLSB3aXRoIGFuIGBlcnJvcmAgZXZlbnQuIFRoZSBwcm9kdWN0IGdldHMgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cclxuICpcclxuICogU2VlIHRoZSBwcm9kdWN0IGxpZmUtY3ljbGUgc2VjdGlvbiBmb3IgZGV0YWlscyBhYm91dCBwcm9kdWN0IHN0YXRlcy5cclxuICpcclxuICogIyMjIyBmaW5pc2ggYSBwdXJjaGFzZVxyXG4gKlxyXG4gKiBPbmNlIHRoZSB0cmFuc2FjdGlvbiBpcyBhcHByb3ZlZCwgdGhlIHByb2R1Y3Qgc3RpbGwgaXNuJ3Qgb3duZWQ6IHRoZSBzdG9yZSBuZWVkc1xyXG4gKiBjb25maXJtYXRpb24gdGhhdCB0aGUgcHVyY2hhc2Ugd2FzIGRlbGl2ZXJlZCBiZWZvcmUgY2xvc2luZyB0aGUgdHJhbnNhY3Rpb24uXHJcbiAqXHJcbiAqIFRvIGNvbmZpcm0gZGVsaXZlcnksIHlvdSdsbCB1c2UgdGhlIGBwcm9kdWN0LmZpbmlzaCgpYCBtZXRob2QuXHJcbiAqXHJcbiAqICMjIyMgZXhhbXBsZSB1c2FnZVxyXG4gKlxyXG4gKiBEdXJpbmcgaW5pdGlhbGl6YXRpb246XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogdGhpcy5zdG9yZS53aGVuKFwiZXh0cmFfY2hhcHRlclwiKS5hcHByb3ZlZCgocHJvZHVjdDogSUFQUHJvZHVjdCkgPT4ge1xyXG4gKiAgIC8vIGRvd25sb2FkIHRoZSBmZWF0dXJlXHJcbiAqICAgYXBwLmRvd25sb2FkRXh0cmFDaGFwdGVyKClcclxuICogICAudGhlbigoKSA9PiBwcm9kdWN0LmZpbmlzaCgpKTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBXaGVuIHRoZSBwdXJjaGFzZSBidXR0b24gaXMgY2xpY2tlZDpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0aGlzLnN0b3JlLm9yZGVyKFwiZXh0cmFfY2hhcHRlclwiKTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIyMgdW4tZmluaXNoZWQgcHVyY2hhc2VzXHJcbiAqXHJcbiAqIElmIHlvdXIgYXBwIHdhc24ndCBhYmxlIHRvIGRlbGl2ZXIgdGhlIGNvbnRlbnQsIGBwcm9kdWN0LmZpbmlzaCgpYCB3b24ndCBiZSBjYWxsZWQuXHJcbiAqXHJcbiAqIERvbid0IHdvcnJ5OiB0aGUgYGFwcHJvdmVkYCBldmVudCB3aWxsIGJlIHJlLXRyaWdnZXJlZCB0aGUgbmV4dCB0aW1lIHlvdVxyXG4gKiBjYWxsIGBzdG9yZS5yZWZyZXNoKClgLCB3aGljaCBjYW4gdmVyeSB3ZWxsIGJlIHRoZSBuZXh0IHRpbWVcclxuICogdGhlIGFwcGxpY2F0aW9uIHN0YXJ0cy4gUGVuZGluZyB0cmFuc2FjdGlvbnMgYXJlIHBlcnNpc3RhbnQuXHJcbiAqXHJcbiAqICMjIyMgc2ltcGxlIGNhc2VcclxuICpcclxuICogSW4gdGhlIG1vc3Qgc2ltcGxlIGNhc2UsIHdoZXJlOlxyXG4gKlxyXG4gKiAgLSBkZWxpdmVyeSBvZiBwdXJjaGFzZXMgaXMgb25seSBsb2NhbCA7XHJcbiAqICAtIHlvdSBkb24ndCB3YW50IChvciBuZWVkKSB0byBpbXBsZW1lbnQgcmVjZWlwdCB2YWxpZGF0aW9uIDtcclxuICpcclxuICogWW91IG1heSBqdXN0IHdhbnQgdG8gZmluaXNoIGFsbCBwdXJjaGFzZXMgYXV0b21hdGljYWxseS4gWW91IGNhbiBkbyBpdCB0aGlzIHdheTpcclxuICogYGBganNcclxuICogdGhpcy5zdG9yZS53aGVuKFwicHJvZHVjdFwiKS5hcHByb3ZlZCgocDogSUFQUHJvZHVjdCkgPT4gcC5maW5pc2goKSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBOT1RFOiB0aGUgXCJwcm9kdWN0XCIgcXVlcnkgd2lsbCBtYXRjaCBhbnkgcHVyY2hhc2VzIChzZWUgXCJxdWVyaWVzXCIgdG8gbGVhcm4gbW9yZSBkZXRhaWxzIGFib3V0IHF1ZXJpZXMpLlxyXG4gKlxyXG4gKiAjIyBSZWNlaXB0IHZhbGlkYXRpb25cclxuICpcclxuICogVG8gZ2V0IHRoZSBtb3N0IHVwLXRvLWRhdGUgaW5mb3JtYXRpb24gYWJvdXQgcHVyY2hhc2VzIChpbiBjYXNlIGEgcHVyY2hhc2UgaGF2ZSBiZWVuIGNhbmNlbGVkLCBvciBhIHN1YnNjcmlwdGlvbiByZW5ld2VkKSxcclxuICogeW91IHNob3VsZCBpbXBsZW1lbnQgc2VydmVyIHNpZGUgcmVjZWlwdCB2YWxpZGF0aW9uLlxyXG4gKlxyXG4gKiBUaGlzIGFsc28gcHJvdGVjdHMgeW91IGFnYWluc3QgZmFrZSBcInB1cmNoYXNlc1wiLCBtYWRlIGJ5IHNvbWUgdXNlcnMgdXNpbmdcclxuICogXCJmcmVlIGluLWFwcCBwdXJjaGFzZVwiIGFwcHMgb24gdGhlaXIgZGV2aWNlcy5cclxuICpcclxuICogV2hlbiBhIHB1cmNoYXNlIGhhcyBiZWVuIGFwcHJvdmVkIGJ5IHRoZSBzdG9yZSwgaXQncyBlbnJpY2hlZCB3aXRoXHJcbiAqIHRyYW5zYWN0aW9uIGluZm9ybWF0aW9uIChzZWUgYHByb2R1Y3QudHJhbnNhY3Rpb25gIGF0dHJpYnV0ZSkuXHJcbiAqXHJcbiAqIFRvIHZlcmlmeSBhIHB1cmNoYXNlIHlvdSdsbCBoYXZlIHRvIGRvIHRocmVlIHRoaW5nczpcclxuICpcclxuICogIC0gY29uZmlndXJlIHRoZSB2YWxpZGF0b3IuXHJcbiAqICAtIGNhbGwgYHByb2R1Y3QudmVyaWZ5KClgIGZyb20gdGhlIGBhcHByb3ZlZGAgZXZlbnQsIGJlZm9yZSBmaW5pc2hpbmcgdGhlIHRyYW5zYWN0aW9uLlxyXG4gKiAgLSBmaW5pc2ggdGhlIHRyYW5zYWN0aW9uIHdoZW4gdHJhbnNhY3Rpb24gaXMgYHZlcmlmaWVkYC5cclxuICpcclxuICogU2hhbWVsZXNzIFBsdWcqKjogdGhpcyBpcyBhIGZlYXR1cmUgbWFueSB1c2VycyBzdHJ1Z2dsZSB3aXRoLCBzbyBhcyB0aGUgYXV0aG9yIG9mIHRoaXMgcGx1Z2luLCB3ZSBjYW4gcHJvdmlkZSBpdCB0byB5b3UgYXMtYS1zZXJ2aWNlOiBodHRwczovL2JpbGxpbmcuZm92ZWEuY2MvXHJcbiAqICh3aGljaCBpcyBmcmVlIHVudGlsIHlvdSBzdGFydCBtYWtpbmcgc2VyaW91cyBtb25leSlcclxuICpcclxuICogIyMjIyBleGFtcGxlIHVzaW5nIGEgdmFsaWRhdGlvbiBVUkxcclxuICpcclxuICogYGBganNcclxuICogdGhpcy5zdG9yZS52YWxpZGF0b3IgPSBcImh0dHBzOi8vYmlsbGluZy5mb3ZlYS5jYy9cIjtcclxuICpcclxuICogdGhpcy5zdG9yZS53aGVuKFwibXkgc3R1ZmZcIilcclxuICogICAuYXBwcm92ZWQoKHA6IElBUFByb2R1Y3QpID0+IHAudmVyaWZ5KCkpXHJcbiAqICAgLnZlcmlmaWVkKChwOiBJQVBQcm9kdWN0KSA9PiBwLmZpbmlzaCgpKTtcclxuICogYGBgXHJcbiAqXHJcbiAqICMjIFN1YnNjcmlwdGlvbnNcclxuICpcclxuICogRm9yIHN1YnNjcmlwdGlvbiwgeW91IE1VU1QgaW1wbGVtZW50IHJlbW90ZSByZWNlaXB0IHZhbGlkYXRpb24uXHJcbiAqXHJcbiAqIFdoZW4gdGhlIHJlY2VpcHQgdmFsaWRhdG9yIHJldHVybnMgYSBgc3RvcmUuUFVSQ0hBU0VfRVhQSVJFRGAgZXJyb3IgY29kZSwgdGhlIHN1YnNjcmlwdGlvbiB3aWxsXHJcbiAqIGF1dG9tYXRpY2FsbHkgbG9vc2UgaXRzIGBvd25lZGAgc3RhdHVzLlxyXG4gKlxyXG4gKiBUeXBpY2FsbHksIHlvdSdsbCBlbmFibGUgYW5kIGRpc2FibGUgYWNjZXNzIHRvIHlvdXIgY29udGVudCB0aGlzIHdheS5cclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiB0aGlzLnN0b3JlLndoZW4oXCJteV9zdWJjcmlwdGlvblwiKS51cGRhdGVkKChwcm9kdWN0OiBJQVBQcm9kdWN0KSA9PiB7XHJcbiAqICAgaWYgKHByb2R1Y3Qub3duZWQpXHJcbiAqICAgICBhcHAuc3Vic2NyaWJlck1vZGUoKTtcclxuICogICBlbHNlXHJcbiAqICAgICBhcHAuZ3Vlc3RNb2RlKCk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogIyMgUHJvZHVjdCBsaWZlLWN5Y2xlXHJcbiAqXHJcbiAqIEEgcHJvZHVjdCB3aWxsIGNoYW5nZSBzdGF0ZSBkdXJpbmcgdGhlIGFwcGxpY2F0aW9uIGV4ZWN1dGlvbi5cclxuICpcclxuICogRmluZCBiZWxvdyBhIGRpYWdyYW0gb2YgdGhlIGRpZmZlcmVudCBzdGF0ZXMgYSBwcm9kdWN0IGNhbiBwYXNzIGJ5LlxyXG4gKlxyXG4gKiBgYGBcclxuICogUkVHSVNURVJFRCArLS0+IElOVkFMSURcclxuICogICAgICAgICAgICB8XHJcbiAqICAgICAgICAgICAgKy0tPiBWQUxJRCArLS0+IFJFUVVFU1RFRCArLS0+IElOSVRJQVRFRCArLStcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgXiAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0rXHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgKy0tPiBET1dOTE9BRElORyArLS0+IERPV05MT0FERUQgK1xyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgIHwgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gKiAgICAgICAgICAgICAgICAgfCAgICAgICstLT4gQVBQUk9WRUQgKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tPiBGSU5JU0hFRCArLS0+IE9XTkVEXHJcbiAqICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICogICAgICAgICAgICAgICAgICstLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tK1xyXG4gKiBgYGBcclxuICpcclxuICogIyMjIyBOb3Rlc1xyXG4gKlxyXG4gKiAgLSBXaGVuIGZpbmlzaGVkLCBhIGNvbnN1bWFibGUgcHJvZHVjdCB3aWxsIGdldCBiYWNrIHRvIHRoZSBgVkFMSURgIHN0YXRlLCB3aGlsZSBvdGhlciB3aWxsIGVudGVyIHRoZSBgT1dORURgIHN0YXRlLlxyXG4gKiAgLSBBbnkgZXJyb3IgaW4gdGhlIHB1cmNoYXNlIHByb2Nlc3Mgd2lsbCBicmluZyBhIHByb2R1Y3QgYmFjayB0byB0aGUgYFZBTElEYCBzdGF0ZS5cclxuICogIC0gRHVyaW5nIGFwcGxpY2F0aW9uIHN0YXJ0dXAsIHByb2R1Y3RzIG1heSBnbyBpbnN0YW50bHkgZnJvbSBgUkVHSVNURVJFRGAgdG8gYEFQUFJPVkVEYCBvciBgT1dORURgLCBmb3IgZXhhbXBsZSBpZiB0aGV5IGFyZSBwdXJjaGFzZWQgbm9uLWNvbnN1bWFibGVzIG9yIG5vbi1leHBpcmVkIHN1YnNjcmlwdGlvbnMuXHJcbiAqICAtIE5vbi1SZW5ld2luZyBTdWJzY3JpcHRpb25zIGFyZSBpT1MgcHJvZHVjdHMgb25seS4gUGxlYXNlIHNlZSB0aGUgW2lPUyBOb24gUmVuZXdpbmcgU3Vic2NyaXB0aW9ucyBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9ibG9iL21hc3Rlci9kb2MvaW9zLm1kI25vbi1yZW5ld2luZykgZm9yIGEgZGV0YWlsZWQgZXhwbGFuYXRpb24uXHJcbiAqXHJcbiAqICMjIGV2ZW50c1xyXG4gKlxyXG4gKiAgLSBgbG9hZGVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIHByb2R1Y3QgZGF0YSBpcyBsb2FkZWQgZnJvbSB0aGUgc3RvcmUuXHJcbiAqICAtIGB1cGRhdGVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGFueSBjaGFuZ2Ugb2NjdXJlZCB0byBhIHByb2R1Y3QuXHJcbiAqICAtIGBlcnJvcihlcnIpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGFuIG9yZGVyIGZhaWxlZC5cclxuICogICAgLSBUaGUgYGVycmAgcGFyYW1ldGVyIGlzIGFuIGVycm9yIG9iamVjdFxyXG4gKiAgLSBgYXBwcm92ZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBwcm9kdWN0IG9yZGVyIGlzIGFwcHJvdmVkLlxyXG4gKiAgLSBgb3duZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYSBub24tY29uc3VtYWJsZSBwcm9kdWN0IG9yIHN1YnNjcmlwdGlvbiBpcyBvd25lZC5cclxuICogIC0gYGNhbmNlbGxlZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiBhIHByb2R1Y3Qgb3JkZXIgaXMgY2FuY2VsbGVkIGJ5IHRoZSB1c2VyLlxyXG4gKiAgLSBgcmVmdW5kZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gYW4gb3JkZXIgaXMgcmVmdW5kZWQgYnkgdGhlIHVzZXIuXHJcbiAqICAtIEFjdHVhbGx5LCBhbGwgb3RoZXIgcHJvZHVjdCBzdGF0ZXMgaGF2ZSB0aGVpciBwcm9taXNlXHJcbiAqICAgIC0gYHJlZ2lzdGVyZWRgLCBgdmFsaWRgLCBgaW52YWxpZGAsIGByZXF1ZXN0ZWRgLFxyXG4gKiAgICAgIGBpbml0aWF0ZWRgIGFuZCBgZmluaXNoZWRgXHJcbiAqICAtIGB2ZXJpZmllZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiByZWNlaXB0IHZhbGlkYXRpb24gc3VjY2Vzc2Z1bFxyXG4gKiAgLSBgdW52ZXJpZmllZChJQVBQcm9kdWN0KWBcclxuICogICAgLSBDYWxsZWQgd2hlbiByZWNlaXB0IHZlcmlmaWNhdGlvbiBmYWlsZWRcclxuICogIC0gYGV4cGlyZWQoSUFQUHJvZHVjdClgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gdmFsaWRhdGlvbiBmaW5kIGEgc3Vic2NyaXB0aW9uIHRvIGJlIGV4cGlyZWRcclxuICogIC0gYGRvd25sb2FkaW5nKElBUFByb2R1Y3QsIHByb2dyZXNzLCB0aW1lX3JlbWFpbmluZylgXHJcbiAqICAgIC0gQ2FsbGVkIHdoZW4gY29udGVudCBkb3dubG9hZCBpcyBzdGFydGVkXHJcbiAqICAtIGBkb3dubG9hZGVkKElBUFByb2R1Y3QpYFxyXG4gKiAgICAtIENhbGxlZCB3aGVuIGNvbnRlbnQgZG93bmxvYWQgaGFzIHN1Y2Nlc3NmdWxseSBjb21wbGV0ZWRcclxuICpcclxuICogIyMgTGVhcm4gTW9yZVxyXG4gKlxyXG4gKiAgLSBbR2l0SHViXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZSlcclxuICogIC0gW0dpdEJvb2tdKGh0dHBzOi8vcHVyY2hhc2UuY29yZG92YS5mb3ZlYS5jYy8pXHJcbiAqICAtIFtXaWtpXShodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS93aWtpKVxyXG4gKiAgLSBbQVBJIHJlZmVyZW5jZV0oaHR0cHM6Ly9naXRodWIuY29tL2ozazAvY29yZG92YS1wbHVnaW4tcHVyY2hhc2UvYmxvYi9tYXN0ZXIvZG9jL2FwaS5tZClcclxuICpcclxuICogIyMgVGVjaG5pY2FsIFN1cHBvcnQgb3IgUXVlc3Rpb25zXHJcbiAqXHJcbiAqIElmIHlvdSBoYXZlIHF1ZXN0aW9ucyBvciBuZWVkIGhlbHAgaW50ZWdyYXRpbmcgSW4tQXBwIFB1cmNoYXNlLCBbT3BlbiBhbiBJc3N1ZSBvbiBHaXRIdWJdKGh0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlL2lzc3Vlcykgb3IgZW1haWwgdXMgYXQgX3N1cHBvcnRAZm92ZWEuY2NfLlxyXG4gKlxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBJQVBQcm9kdWN0XHJcbiAqIElBUFByb2R1Y3RPcHRpb25zXHJcbiAqIElBUFByb2R1Y3RFdmVudHNcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW5BcHBQdXJjaGFzZTInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlJyxcclxuICBwbHVnaW5SZWY6ICdzdG9yZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qM2swL2NvcmRvdmEtcGx1Z2luLXB1cmNoYXNlJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJywgJ0FuZHJvaWQnLCAnV2luZG93cyddLFxyXG4gIGluc3RhbGw6ICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgY29yZG92YS1wbHVnaW4tcHVyY2hhc2UgLS12YXJpYWJsZSBCSUxMSU5HX0tFWT1cIjxBTkRST0lEX0JJTExJTkdfS0VZPlwiJyxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSW5BcHBQdXJjaGFzZTIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUVVJRVQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJST1I6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgV0FSTklORzogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJTkZPOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIERFQlVHOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlYnVnIGxldmVsLiBVc2UgUVVJRVQsIEVSUk9SLCBXQVJOSU5HLCBJTkZPIG9yIERFQlVHIGNvbnN0YW50c1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHZlcmJvc2l0eTogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgdG8gdHJ1ZSB0byBjbGVhciB0aGUgdHJhbnNhY3Rpb24gcXVldWUuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbi5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vajNrMC9jb3Jkb3ZhLXBsdWdpbi1wdXJjaGFzZS9ibG9iL21hc3Rlci9kb2MvYXBpLm1kI3JhbmRvbS10aXBzXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgYXV0b0ZpbmlzaFRyYW5zYWN0aW9uczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRvIHRydWUgdG8gaW52b2tlIHRoZSBwbGF0Zm9ybSBwdXJjaGFzZSBzYW5kYm94LiAoV2luZG93cyBvbmx5KVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHNhbmRib3g6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgZG93bmxvYWRpbmcgb2YgaG9zdGVkIGNvbnRlbnQuIChBcHBsZSBvbmx5KS5cclxuICAgKiBVc2VmdWwgaW4gZGV2ZWxvcG1lbnQgb3Igd2hlbiBtaWdyYXRpbmcgeW91ciBhcHAgYXdheSBmcm9tIEFwcGxlIEhvc3RlZCBDb250ZW50LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIGRpc2FibGVIb3N0ZWRDb250ZW50OiBib29sZWFuO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGUkVFX1NVQlNDUklQVElPTjogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQQUlEX1NVQlNDUklQVElPTjogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBOT05fUkVORVdJTkdfU1VCU0NSSVBUSU9OOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIENPTlNVTUFCTEU6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgTk9OX0NPTlNVTUFCTEU6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1NFVFVQOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9MT0FEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QVVJDSEFTRTogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfTE9BRF9SRUNFSVBUUzogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfQ0xJRU5UX0lOVkFMSUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1BBWU1FTlRfQ0FOQ0VMTEVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9QQVlNRU5UX0lOVkFMSUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1BBWU1FTlRfTk9UX0FMTE9XRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1VOS05PV046IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1JFRlJFU0hfUkVDRUlQVFM6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0lOVkFMSURfUFJPRFVDVF9JRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfRklOSVNIOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9DT01NVU5JQ0FUSU9OOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9TVUJTQ1JJUFRJT05TX05PVF9BVkFJTEFCTEU6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX01JU1NJTkdfVE9LRU46IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX1ZFUklGSUNBVElPTl9GQUlMRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRVJSX0JBRF9SRVNQT05TRTogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUkVGUkVTSDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfUEFZTUVOVF9FWFBJUkVEOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEVSUl9ET1dOTE9BRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBFUlJfU1VCU0NSSVBUSU9OX1VQREFURV9OT1RfQVZBSUxBQkxFOiBudW1iZXI7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFJFR0lTVEVSRUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5WQUxJRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBWQUxJRDogc3RyaW5nO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBSRVFVRVNURUQ6IHN0cmluZztcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgSU5JVElBVEVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEFQUFJPVkVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZJTklTSEVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIE9XTkVEOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIERPV05MT0FESU5HOiBzdHJpbmc7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIERPV05MT0FERUQ6IHN0cmluZztcclxuXHJcbiAgLyogdmFsaWRhdGlvbiBlcnJvciBjb2RlcyAqL1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJTlZBTElEX1BBWUxPQUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgQ09OTkVDVElPTl9GQUlMRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgUFVSQ0hBU0VfRVhQSVJFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBQVVJDSEFTRV9DT05TVU1FRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBJTlRFUk5BTF9FUlJPUjogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBORUVEX01PUkVfREFUQTogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBwcm9kdWN0czogSUFQUHJvZHVjdHM7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIHZhbGlkYXRvcjpcclxuICAgIHwgc3RyaW5nXHJcbiAgICB8ICgodXJsOiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBjYWxsYmFjazogRnVuY3Rpb24pID0+IHZvaWQpXHJcbiAgICB8IHtcclxuICAgICAgICB1cmw6IHN0cmluZztcclxuICAgICAgICBoZWFkZXJzPzogeyBbdG9rZW46IHN0cmluZ106IHN0cmluZyB9O1xyXG4gICAgICB9O1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBhcHBsaWNhdGlvblVzZXJuYW1lOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKTtcclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0QXBwbGljYXRpb25Vc2VybmFtZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgbG9nOiB7XHJcbiAgICBlcnJvcjogKG1lc3NhZ2U6IHN0cmluZykgPT4gdm9pZDtcclxuICAgIHdhcm46IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgICBpbmZvOiAobWVzc2FnZTogc3RyaW5nKSA9PiB2b2lkO1xyXG4gICAgZGVidWc6IChtZXNzYWdlOiBzdHJpbmcpID0+IHZvaWQ7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHByb2R1Y3QgYnkgaWQgb3IgYWxpYXNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZE9yQWxpYXNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBnZXQoaWRPckFsaWFzOiBzdHJpbmcpOiBJQVBQcm9kdWN0IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVyIGVycm9yIGhhbmRsZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSBvbkVycm9yIHtGdW5jdGlvbn0gZnVuY3Rpb24gdG8gY2FsbCBvbiBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGVycm9yKG9uRXJyb3I6IEZ1bmN0aW9uKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBBZGQgb3IgcmVnaXN0ZXIgYSBwcm9kdWN0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gcHJvZHVjdCB7SUFQUHJvZHVjdE9wdGlvbnN9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVnaXN0ZXIocHJvZHVjdDogSUFQUHJvZHVjdE9wdGlvbnMgfCBJQVBQcm9kdWN0T3B0aW9uc1tdKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKlxyXG4gICAqIEBwYXJhbSBxdWVyeVxyXG4gICAqIEBwYXJhbSBldmVudFxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqIEByZXR1cm5zIHtJQVBQcm9kdWN0RXZlbnRzfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHdoZW4ocXVlcnk6IHN0cmluZyB8IElBUFByb2R1Y3QsIGV2ZW50Pzogc3RyaW5nLCBjYWxsYmFjaz86IElBUFF1ZXJ5Q2FsbGJhY2spOiBJQVBQcm9kdWN0RXZlbnRzIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIElkZW50aWNhbCB0byBgd2hlbmAsIGJ1dCB0aGUgY2FsbGJhY2sgd2lsbCBiZSBjYWxsZWQgb25seSBvbmNlLiBBZnRlciBiZWluZyBjYWxsZWQsIHRoZSBjYWxsYmFjayB3aWxsIGJlIHVucmVnaXN0ZXJlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBxdWVyeSB7c3RyaW5nIHwgSUFQUHJvZHVjdH1cclxuICAgKiBAcGFyYW0gW2V2ZW50XSB7ZXZlbnR9XHJcbiAgICogQHBhcmFtIFtjYWxsYmFja10ge0lBUFF1ZXJ5Q2FsbGJhY2t9XHJcbiAgICogQHJldHVybnMge0lBUFByb2R1Y3RFdmVudHN9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgb25jZShxdWVyeTogc3RyaW5nIHwgSUFQUHJvZHVjdCwgZXZlbnQ/OiBzdHJpbmcsIGNhbGxiYWNrPzogSUFQUXVlcnlDYWxsYmFjayk6IElBUFByb2R1Y3RFdmVudHMge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5yZWdpc3RlciBhIGNhbGxiYWNrLiBXb3JrcyBmb3IgY2FsbGJhY2tzIHJlZ2lzdGVyZWQgd2l0aCByZWFkeSwgd2hlbiwgb25jZSBhbmQgZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY2FsbGJhY2sge0Z1bmN0aW9ufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG9mZihjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIEluaXRpYXRlIHRoZSBwdXJjaGFzZSBvZiBhIHByb2R1Y3QuXHJcbiAgICpcclxuICAgKiBUaGUgYHByb2R1Y3RgIGFyZ3VtZW50IGNhbiBiZSBlaXRoZXI6XHJcbiAgICpcclxuICAgKiAgLSB0aGUgYElBUFByb2R1Y3RgIG9iamVjdFxyXG4gICAqICAtIHRoZSBwcm9kdWN0IGBpZGBcclxuICAgKiAgLSB0aGUgcHJvZHVjdCBgYWxpYXNgXHJcbiAgICpcclxuICAgKiBUaGUgYGFkZGl0aW9uYWxEYXRhYCBhcmd1bWVudCBpcyBhbiBvcHRpb25hbCBvYmplY3Qgd2l0aCBhdHRyaWJ1dGVzOlxyXG4gICAqICAtIGBvbGRQdXJjaGFzZWRTa3VzYDogYSBzdHJpbmcgYXJyYXkgd2l0aCB0aGUgb2xkIHN1YnNjcmlwdGlvbiB0byB1cGdyYWRlL2Rvd25ncmFkZSBvbiBBbmRyb2lkLiBTZWU6IFthbmRyb2lkIGRldmVsb3Blcl0oaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9iaWxsaW5nX3JlZmVyZW5jZS5odG1sI3VwZ3JhZGUtZ2V0QnV5SW50ZW50VG9SZXBsYWNlU2t1cykgZm9yIG1vcmUgaW5mb1xyXG4gICAqICAtIGBkZXZlbG9wZXJQYXlsb2FkYDogc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGV2ZWxvcGVyIHBheWxvYWQgYXMgZGVzY3JpYmVkIGluIFtiaWxsaW5nIGJlc3QgcHJhY3RpY2VzXShodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9nb29nbGUvcGxheS9iaWxsaW5nL2JpbGxpbmdfYmVzdF9wcmFjdGljZXMuaHRtbClcclxuICAgKiAgLSBgYXBwbGljYXRpb25Vc2VybmFtZWA6IHRoZSBpZGVudGlmaWVyIG9mIHRoZSB1c2VyIGluIHlvdXIgYXBwbGljYXRpb24uXHJcbiAgICpcclxuICAgKiBTZWUgdGhlIFwiUHVyY2hhc2luZyBzZWN0aW9uXCIgdG8gbGVhcm4gbW9yZSBhYm91dCB0aGUgcHVyY2hhc2UgcHJvY2Vzcy5cclxuICAgKlxyXG4gICAqIHJldHVybiB2YWx1ZSoqXHJcbiAgICpcclxuICAgKiBgc3RvcmUub3JkZXIoKWAgcmV0dXJucyBhIFByb21pc2Ugd2l0aCB0aGUgZm9sbG93aW5nIG1ldGhvZHM6XHJcbiAgICpcclxuICAgKiAgLSBgdGhlbmAgLSBjYWxsZWQgd2hlbiB0aGUgb3JkZXIgd2FzIHN1Y2Nlc3NmdWxseSBpbml0aWF0ZWQuXHJcbiAgICogIC0gYGVycm9yYCAtIGNhbGxlZCBpZiB0aGUgb3JkZXIgY291bGRuJ3QgYmUgaW5pdGlhdGVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHByb2R1Y3RcclxuICAgKiBAcGFyYW0gYWRkaXRpb25hbERhdGFcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvcmRlcihwcm9kdWN0OiBzdHJpbmcgfCBJQVBQcm9kdWN0LCBhZGRpdGlvbmFsRGF0YT86IGFueSk6IHsgdGhlbjogRnVuY3Rpb247IGVycm9yOiBGdW5jdGlvbiB9IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKClcclxuICByZWFkeShjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogQWZ0ZXIgeW91J3JlIGRvbmUgcmVnaXN0ZXJpbmcgeW91ciBzdG9yZSdzIHByb2R1Y3QgYW5kIGV2ZW50cyBoYW5kbGVycyxcclxuICAgKiB0aW1lIHRvIGNhbGwgYHN0b3JlLnJlZnJlc2goKWAuXHJcbiAgICpcclxuICAgKiBUaGlzIHdpbGwgaW5pdGlhdGUgYWxsIHRoZSBjb21wbGV4IGJlaGluZC10aGUtc2NlbmUgd29yaywgdG8gbG9hZCBwcm9kdWN0XHJcbiAgICogZGF0YSBmcm9tIHRoZSBzZXJ2ZXJzIGFuZCByZXN0b3JlIHdoYXRldmVyIGFscmVhZHkgaGF2ZSBiZWVuXHJcbiAgICogcHVyY2hhc2VkIGJ5IHRoZSB1c2VyLlxyXG4gICAqXHJcbiAgICogTm90ZSB0aGF0IHlvdSBjYW4gY2FsbCB0aGlzIG1ldGhvZCBhZ2FpbiBsYXRlciBkdXJpbmcgdGhlIGFwcGxpY2F0aW9uXHJcbiAgICogZXhlY3V0aW9uIHRvIHJlLXRyaWdnZXIgYWxsIHRoYXQgaGFyZC13b3JrLiBJdCdzIGtpbmQgb2YgZXhwZW5zaXZlIGluIHRlcm0gb2ZcclxuICAgKiBwcm9jZXNzaW5nLCBzbyB5b3UnZCBiZXR0ZXIgY29uc2lkZXIgaXQgdHdpY2UuXHJcbiAgICpcclxuICAgKiBPbmUgZ29vZCB3YXkgb2YgZG9pbmcgaXQgaXMgdG8gYWRkIGEgXCJSZWZyZXNoIFB1cmNoYXNlc1wiIGJ1dHRvbiBpbiB5b3VyXHJcbiAgICogYXBwbGljYXRpb25zIHNldHRpbmdzLiBUaGlzIHdheSwgaWYgZGVsaXZlcnkgb2YgYSBwdXJjaGFzZSBmYWlsZWQgb3JcclxuICAgKiBpZiBhIHVzZXIgd2FudHMgdG8gcmVzdG9yZSBwdXJjaGFzZXMgaGUgbWFkZSBmcm9tIGFub3RoZXIgZGV2aWNlLCBoZSdsbFxyXG4gICAqIGhhdmUgYSB3YXkgdG8gZG8ganVzdCB0aGF0LlxyXG4gICAqXHJcbiAgICogZXhhbXBsZSB1c2FnZSoqXHJcbiAgICpcclxuICAgKiBgYGB0eXBlc2NyaXB0XHJcbiAgICogICAgLy8gLi4uXHJcbiAgICogICAgLy8gcmVnaXN0ZXIgcHJvZHVjdHMgYW5kIGV2ZW50cyBoYW5kbGVycyBoZXJlXHJcbiAgICogICAgLy8gLi4uXHJcbiAgICogICAgLy9cclxuICAgKiAgICAvLyB0aGVuIGFuZCBvbmx5IHRoZW4sIGNhbGwgcmVmcmVzaC5cclxuICAgKiAgICB0aGlzLnN0b3JlLnJlZnJlc2goKTtcclxuICAgKiBgYGBcclxuICAgKlxyXG4gICAqIHJlc3RvcmUgcHVyY2hhc2VzKipcclxuICAgKlxyXG4gICAqIEFkZCBhIFwiUmVmcmVzaCBQdXJjaGFzZXNcIiBidXR0b24gdG8gY2FsbCB0aGUgYHN0b3JlLnJlZnJlc2goKWAgbWV0aG9kLCBsaWtlOlxyXG4gICAqXHJcbiAgICogYDxidXR0b24gb25jbGljaz1cIjxwc2V1ZG9fY29kZT50aGlzLnN0b3JlLnJlZnJlc2goKTwvcHNldWRvX2NvZGU+XCI+UmVzdG9yZSBQdXJjaGFzZXM8L2J1dHRvbj5gXHJcbiAgICpcclxuICAgKiBUbyBtYWtlIHRoZSByZXN0b3JlIHB1cmNoYXNlcyB3b3JrIGFzIGV4cGVjdGVkLCBwbGVhc2UgbWFrZSBzdXJlIHRoYXRcclxuICAgKiB0aGUgXCJhcHByb3ZlZFwiIGV2ZW50IGxpc3RlbmVyIGhhZCBiZSByZWdpc3RlcmVkIHByb3Blcmx5LFxyXG4gICAqIGFuZCBpbiB0aGUgY2FsbGJhY2sgYHByb2R1Y3QuZmluaXNoKClgIHNob3VsZCBiZSBjYWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVmcmVzaCgpOiBJUmVmZXNoUmVzdWx0IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKiBMaWdodHdlaWdodCBtZXRob2QgbGlrZSByZWZyZXNoIGJ1dCBkbyBub3QgcmVsb2dpbiB1c2VyICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdXBkYXRlKCk6IHZvaWQge31cclxuXHJcbiAgLyoqIE9wZW5zIHRoZSBNYW5hZ2UgU3Vic2NyaXB0aW9uIHBhZ2UgKEFwcFN0b3JlLCBQbGF5LCBNaWNyb3NvZnQsIC4uLikuICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgbWFuYWdlU3Vic2NyaXB0aW9ucygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKiBPcGVucyB0aGUgQ29kZSBSZWRlbXB0aW9uIFNoZWV0IG9uIGlPUy4gKEFwcFN0b3JlKS4gKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICByZWRlZW0oKTogdm9pZCB7fVxyXG5cclxuICAvKiogT3BlbnMgdGhlIE1hbmFnZSBCaWxsaW5nIHBhZ2UgKEFwcFN0b3JlLCBQbGF5LCBNaWNyb3NvZnQsIC4uLiksIHdoZXJlIHRoZSB1c2VyIGNhbiB1cGRhdGUgaGlzL2hlciBwYXltZW50IG1ldGhvZHMuICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgbWFuYWdlQmlsbGluZygpOiB2b2lkIHt9XHJcblxyXG4gIC8qKiBPcGVuIHRoZSBzdWJzY3JpcHRpb24gcHJpY2UgY2hhbmdlIG5vdGlmaWNhdGlvbiB3b3JrZmxvdy4gKFBsYXkpIFNlZTogaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vZ29vZ2xlL3BsYXkvYmlsbGluZy9zdWJzY3JpcHRpb25zI3ByaWNlLWNoYW5nZS1jb21tdW5pY2F0ZSAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGxhdW5jaFByaWNlQ2hhbmdlQ29uZmlybWF0aW9uRmxvdyhcclxuICAgIHByb2R1Y3RJZDogc3RyaW5nLFxyXG4gICAgY2FsbGJhY2s6IChzdGF0dXM6ICdPSycgfCAnVW5rbm93blByb2R1Y3QnIHwgJ1VzZXJDYW5jZWxlZCcpID0+IHZvaWRcclxuICApOiB2b2lkIHt9XHJcbn1cclxuIl19