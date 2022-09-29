'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Checkout = /** @class */ (function (_super) {
    tslib.__extends(Checkout, _super);
    function Checkout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Checkout.prototype.initSandboxClient = function (publicKey) { return core.cordova(this, "initSandboxClient", {}, arguments); };
    Checkout.prototype.initLiveClient = function (publicKey) { return core.cordova(this, "initLiveClient", {}, arguments); };
    Checkout.prototype.generateToken = function (ckoCardTokenRequest) { return core.cordova(this, "generateToken", {}, arguments); };
    Checkout.pluginName = "Checkout";
    Checkout.plugin = "@checkout.com/cordova-plugin-checkout";
    Checkout.pluginRef = "cordova.plugins.Checkout";
    Checkout.repo = "https://github.com/checkout/frames-cordova";
    Checkout.install = "";
    Checkout.installVariables = [];
    Checkout.platforms = ["Android", "iOS"];
    Checkout.decorators = [
        { type: core$1.Injectable }
    ];
    return Checkout;
}(core.AwesomeCordovaNativePlugin));

exports.Checkout = Checkout;
