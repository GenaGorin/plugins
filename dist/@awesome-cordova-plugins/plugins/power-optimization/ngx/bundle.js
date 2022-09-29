'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var PowerOptimization = /** @class */ (function (_super) {
    tslib.__extends(PowerOptimization, _super);
    function PowerOptimization() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PowerOptimization.prototype.IsIgnoringBatteryOptimizations = function () { return core.cordova(this, "IsIgnoringBatteryOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizations = function () { return core.cordova(this, "RequestOptimizations", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestOptimizationsMenu = function () { return core.cordova(this, "RequestOptimizationsMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.IsIgnoringDataSaver = function () { return core.cordova(this, "IsIgnoringDataSaver", { "sync": true }, arguments); };
    PowerOptimization.prototype.RequestDataSaverMenu = function () { return core.cordova(this, "RequestDataSaverMenu", { "sync": true }, arguments); };
    PowerOptimization.prototype.HaveProtectedAppsCheck = function () { return core.cordova(this, "HaveProtectedAppsCheck", { "sync": true }, arguments); };
    PowerOptimization.prototype.ProtectedAppCheck = function () { return core.cordova(this, "ProtectedAppCheck", { "sync": true }, arguments); };
    PowerOptimization.pluginName = "PowerOptimization";
    PowerOptimization.plugin = "cordova-plugin-power-optimization";
    PowerOptimization.pluginRef = "cordova.plugins.PowerOptimization";
    PowerOptimization.repo = "https://github.com/snt1017/cordova-plugin-power-optimization";
    PowerOptimization.platforms = ["Android"];
    PowerOptimization.decorators = [
        { type: core$1.Injectable }
    ];
    return PowerOptimization;
}(core.AwesomeCordovaNativePlugin));

exports.PowerOptimization = PowerOptimization;
