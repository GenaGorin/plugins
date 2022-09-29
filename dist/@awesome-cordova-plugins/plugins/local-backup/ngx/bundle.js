'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var LocalBackup = /** @class */ (function (_super) {
    tslib.__extends(LocalBackup, _super);
    function LocalBackup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LocalBackup.prototype.create = function (data) { return core.cordova(this, "create", {}, arguments); };
    LocalBackup.prototype.read = function () { return core.cordova(this, "read", {}, arguments); };
    LocalBackup.prototype.exists = function () { return core.cordova(this, "exists", {}, arguments); };
    LocalBackup.prototype.remove = function () { return core.cordova(this, "remove", {}, arguments); };
    LocalBackup.pluginName = "LocalBackup";
    LocalBackup.plugin = "cordova-plugin-local-backup";
    LocalBackup.pluginRef = "LocalBackup";
    LocalBackup.repo = "https://github.com/MaximBelov/cordova-plugin-local-backup";
    LocalBackup.install = "ionic cordova plugin add cordova-plugin-local-backup";
    LocalBackup.platforms = ["Android", "iOS"];
    LocalBackup.decorators = [
        { type: core$1.Injectable }
    ];
    return LocalBackup;
}(core.AwesomeCordovaNativePlugin));

exports.LocalBackup = LocalBackup;
