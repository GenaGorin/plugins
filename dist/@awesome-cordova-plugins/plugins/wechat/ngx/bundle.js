'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Wechat = /** @class */ (function (_super) {
    tslib.__extends(Wechat, _super);
    function Wechat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wechat.prototype.isInstalled = function () { return core.cordova(this, "isInstalled", {}, arguments); };
    Wechat.prototype.share = function (params) { return core.cordova(this, "share", {}, arguments); };
    Wechat.prototype.auth = function (scope, state) { return core.cordova(this, "auth", {}, arguments); };
    Wechat.prototype.sendPaymentRequest = function (params) { return core.cordova(this, "sendPaymentRequest", {}, arguments); };
    Wechat.prototype.jumpToWechat = function (url) { return core.cordova(this, "jumpToWechat", {}, arguments); };
    Wechat.prototype.chooseInvoiceFromWX = function (params) { return core.cordova(this, "chooseInvoiceFromWX", {}, arguments); };
    Wechat.prototype.openMiniProgram = function (params) { return core.cordova(this, "openMiniProgram", {}, arguments); };
    Wechat.pluginName = "Wechat";
    Wechat.plugin = "cordova-plugin-wechat";
    Wechat.pluginRef = "Wechat";
    Wechat.repo = "https://github.com/xu-li/cordova-plugin-wechat.git";
    Wechat.install = "cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID";
    Wechat.installVariables = ["wechatappid"];
    Wechat.platforms = ["Android", "iOS"];
    Wechat.decorators = [
        { type: core$1.Injectable }
    ];
    return Wechat;
}(core.AwesomeCordovaNativePlugin));

exports.Wechat = Wechat;
