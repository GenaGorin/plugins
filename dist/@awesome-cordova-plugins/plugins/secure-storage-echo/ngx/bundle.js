'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var SecureStorageEchoObject = /** @class */ (function () {
    function SecureStorageEchoObject(_objectInstance) {
        this._objectInstance = _objectInstance;
    }
    SecureStorageEchoObject.prototype.get = function (key) { return core.cordovaInstance(this, "get", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.set = function (key, value) { return core.cordovaInstance(this, "set", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.remove = function (key) { return core.cordovaInstance(this, "remove", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.keys = function () { return core.cordovaInstance(this, "keys", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.clear = function () { return core.cordovaInstance(this, "clear", { "callbackOrder": "reverse" }, arguments); };
    SecureStorageEchoObject.prototype.secureDevice = function () { return core.cordovaInstance(this, "secureDevice", {}, arguments); };
    return SecureStorageEchoObject;
}());
var SecureStorageEcho = /** @class */ (function (_super) {
    tslib.__extends(SecureStorageEcho, _super);
    function SecureStorageEcho() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecureStorageEcho.prototype.create = function (store, options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return core.getPromise(function (res, rej) {
                    var instance = new (SecureStorageEcho.getPlugin())(function () { return res(new SecureStorageEchoObject(instance)); }, function () { return rej(new SecureStorageEchoObject(instance)); }, store, options);
                });
            }
        })();
    };
    SecureStorageEcho.pluginName = "SecureStorageEcho";
    SecureStorageEcho.plugin = "cordova-plugin-secure-storage-echo";
    SecureStorageEcho.pluginRef = "cordova.plugins.SecureStorage";
    SecureStorageEcho.repo = "https://github.com/mibrito707/cordova-plugin-secure-storage-echo";
    SecureStorageEcho.platforms = ["Android", "Browser", "iOS", "Windows"];
    SecureStorageEcho.decorators = [
        { type: core$1.Injectable }
    ];
    return SecureStorageEcho;
}(core.AwesomeCordovaNativePlugin));

exports.SecureStorageEcho = SecureStorageEcho;
exports.SecureStorageEchoObject = SecureStorageEchoObject;
