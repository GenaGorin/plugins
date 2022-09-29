'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var CloudSettings = /** @class */ (function (_super) {
    tslib.__extends(CloudSettings, _super);
    function CloudSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CloudSettings.prototype.exists = function () { return core.cordova(this, "exists", {}, arguments); };
    CloudSettings.prototype.save = function (settings, overwrite) { return core.cordova(this, "save", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    CloudSettings.prototype.load = function () { return core.cordova(this, "load", {}, arguments); };
    CloudSettings.prototype.onRestore = function (handler) { return core.cordova(this, "onRestore", { "sync": true }, arguments); };
    CloudSettings.prototype.enableDebug = function () { return core.cordova(this, "enableDebug", {}, arguments); };
    CloudSettings.pluginName = "CloudSettings";
    CloudSettings.plugin = "cordova-plugin-cloud-settings";
    CloudSettings.pluginRef = "cordova.plugin.cloudsettings";
    CloudSettings.repo = "https://github.com/dpa99c/cordova-plugin-cloud-settings";
    CloudSettings.install = "ionic cordova plugin add cordova-plugin-cloud-settings --variable ANDROID_BACKUP_SERVICE_KEY=myapikey";
    CloudSettings.installVariables = ["ANDROID_BACKUP_SERVICE_KEY"];
    CloudSettings.platforms = ["Android", "iOS"];
    CloudSettings.decorators = [
        { type: core$1.Injectable }
    ];
    return CloudSettings;
}(core.AwesomeCordovaNativePlugin));

exports.CloudSettings = CloudSettings;
