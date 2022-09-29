'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AES256 = /** @class */ (function (_super) {
    tslib.__extends(AES256, _super);
    function AES256() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AES256.prototype.encrypt = function (secureKey, secureIV, data) { return core.cordova(this, "encrypt", {}, arguments); };
    AES256.prototype.decrypt = function (secureKey, secureIV, data) { return core.cordova(this, "decrypt", {}, arguments); };
    AES256.prototype.generateSecureKey = function (password) { return core.cordova(this, "generateSecureKey", {}, arguments); };
    AES256.prototype.generateSecureIV = function (password) { return core.cordova(this, "generateSecureIV", {}, arguments); };
    AES256.pluginName = "AES256";
    AES256.plugin = "cordova-plugin-aes256-encryption";
    AES256.pluginRef = "cordova.plugins.AES256";
    AES256.repo = "https://github.com/Ideas2IT/cordova-aes256";
    AES256.platforms = ["Android", "iOS"];
    AES256.install = "ionic cordova plugin add cordova-plugin-aes256-encryption";
    AES256.decorators = [
        { type: core$1.Injectable }
    ];
    return AES256;
}(core.AwesomeCordovaNativePlugin));

exports.AES256 = AES256;
