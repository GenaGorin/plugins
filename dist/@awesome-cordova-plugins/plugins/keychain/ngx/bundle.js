'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Keychain = /** @class */ (function (_super) {
    tslib.__extends(Keychain, _super);
    function Keychain() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Keychain.prototype.get = function (key, touchIDMessage) { return core.cordova(this, "get", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.set = function (key, value, useTouchID) { return core.cordova(this, "set", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.getJson = function (key, touchIDMessage) { return core.cordova(this, "getJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.setJson = function (key, obj, useTouchId) { return core.cordova(this, "setJson", { "callbackOrder": "reverse" }, arguments); };
    Keychain.prototype.remove = function (key) { return core.cordova(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    Keychain.pluginName = "Keychain";
    Keychain.plugin = "cordova-plugin-ios-keychain";
    Keychain.pluginRef = "window.Keychain";
    Keychain.repo = "https://github.com/ionic-team/cordova-plugin-ios-keychain";
    Keychain.platforms = ["iOS"];
    Keychain.decorators = [
        { type: core$1.Injectable }
    ];
    return Keychain;
}(core.AwesomeCordovaNativePlugin));

exports.Keychain = Keychain;
