'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var TouchID = /** @class */ (function (_super) {
    tslib.__extends(TouchID, _super);
    function TouchID() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TouchID.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    TouchID.prototype.verifyFingerprint = function (message) { return core.cordova(this, "verifyFingerprint", {}, arguments); };
    TouchID.prototype.verifyFingerprintWithCustomPasswordFallback = function (message) { return core.cordova(this, "verifyFingerprintWithCustomPasswordFallback", {}, arguments); };
    TouchID.prototype.verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel = function (message, enterPasswordLabel) { return core.cordova(this, "verifyFingerprintWithCustomPasswordFallbackAndEnterPasswordLabel", {}, arguments); };
    TouchID.prototype.didFingerprintDatabaseChange = function () { return core.cordova(this, "didFingerprintDatabaseChange", {}, arguments); };
    TouchID.pluginName = "TouchID";
    TouchID.plugin = "cordova-plugin-touch-id";
    TouchID.pluginRef = "plugins.touchid";
    TouchID.repo = "https://github.com/EddyVerbruggen/cordova-plugin-touch-id";
    TouchID.platforms = ["iOS"];
    TouchID.decorators = [
        { type: core$1.Injectable }
    ];
    return TouchID;
}(core.AwesomeCordovaNativePlugin));

exports.TouchID = TouchID;
