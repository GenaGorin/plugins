'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var DeviceAccounts = /** @class */ (function (_super) {
    tslib.__extends(DeviceAccounts, _super);
    function DeviceAccounts() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DeviceAccounts.prototype.get = function () { return core.cordova(this, "get", {}, arguments); };
    DeviceAccounts.prototype.getByType = function (type) { return core.cordova(this, "getByType", {}, arguments); };
    DeviceAccounts.prototype.getEmails = function () { return core.cordova(this, "getEmails", {}, arguments); };
    DeviceAccounts.prototype.getEmail = function () { return core.cordova(this, "getEmail", {}, arguments); };
    DeviceAccounts.prototype.getPermissions = function () { return core.cordova(this, "getPermissions", {}, arguments); };
    DeviceAccounts.prototype.getPermissionsByType = function (type) { return core.cordova(this, "getPermissionsByType", {}, arguments); };
    DeviceAccounts.pluginName = "DeviceAccounts";
    DeviceAccounts.plugin = "cordova-device-accounts-v2";
    DeviceAccounts.pluginRef = "DeviceAccounts";
    DeviceAccounts.repo = "https://github.com/xUnholy/cordova-device-accounts-v2";
    DeviceAccounts.platforms = ["Android"];
    DeviceAccounts.decorators = [
        { type: core$1.Injectable }
    ];
    return DeviceAccounts;
}(core.AwesomeCordovaNativePlugin));

exports.DeviceAccounts = DeviceAccounts;
