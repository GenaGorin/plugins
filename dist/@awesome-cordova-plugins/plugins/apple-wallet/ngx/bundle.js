'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AppleWallet = /** @class */ (function (_super) {
    tslib.__extends(AppleWallet, _super);
    function AppleWallet() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppleWallet.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    AppleWallet.prototype.checkCardEligibility = function (primaryAccountIdentifier) { return core.cordova(this, "checkCardEligibility", {}, arguments); };
    AppleWallet.prototype.checkCardEligibilityBySuffix = function (cardSuffix) { return core.cordova(this, "checkCardEligibilityBySuffix", {}, arguments); };
    AppleWallet.prototype.checkPairedDevices = function () { return core.cordova(this, "checkPairedDevices", {}, arguments); };
    AppleWallet.prototype.checkPairedDevicesBySuffix = function (cardSuffix) { return core.cordova(this, "checkPairedDevicesBySuffix", {}, arguments); };
    AppleWallet.prototype.startAddPaymentPass = function (data) { return core.cordova(this, "startAddPaymentPass", {}, arguments); };
    AppleWallet.prototype.completeAddPaymentPass = function (data) { return core.cordova(this, "completeAddPaymentPass", {}, arguments); };
    AppleWallet.pluginName = "AppleWallet";
    AppleWallet.plugin = "cordova-apple-wallet";
    AppleWallet.pluginRef = "AppleWallet";
    AppleWallet.repo = "https://github.com/tomavic/cordova-apple-wallet";
    AppleWallet.platforms = ["iOS"];
    AppleWallet.decorators = [
        { type: core$1.Injectable }
    ];
    return AppleWallet;
}(core.AwesomeCordovaNativePlugin));

exports.AppleWallet = AppleWallet;
