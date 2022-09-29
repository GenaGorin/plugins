'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var ForegroundService = /** @class */ (function (_super) {
    tslib.__extends(ForegroundService, _super);
    function ForegroundService() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ForegroundService.prototype.start = function (title, text, icon, importance, id) {
        if (importance === void 0) { importance = 1; }
        if (id === void 0) { id = 0; }
        return core.cordova(this, "start", { "sync": true }, arguments);
    };
    ForegroundService.prototype.stop = function () { return core.cordova(this, "stop", { "sync": true }, arguments); };
    ForegroundService.pluginName = "ForegroundService";
    ForegroundService.plugin = "cordova-plugin-foreground-service";
    ForegroundService.pluginRef = "cordova.plugins.foregroundService";
    ForegroundService.repo = "https://github.com/DavidBriglio/cordova-plugin-foreground-service";
    ForegroundService.platforms = ["Android"];
    ForegroundService.decorators = [
        { type: core$1.Injectable }
    ];
    return ForegroundService;
}(core.AwesomeCordovaNativePlugin));

exports.ForegroundService = ForegroundService;
