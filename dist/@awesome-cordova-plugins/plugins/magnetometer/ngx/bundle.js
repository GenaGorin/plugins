'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var Magnetometer = /** @class */ (function (_super) {
    tslib.__extends(Magnetometer, _super);
    function Magnetometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Magnetometer.prototype.getReading = function () { return core.cordova(this, "getReading", {}, arguments); };
    Magnetometer.prototype.watchReadings = function () { return core.cordova(this, "watchReadings", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    Magnetometer.pluginName = "Magnetometer";
    Magnetometer.plugin = "cordova-plugin-magnetometer";
    Magnetometer.pluginRef = "cordova.plugins.magnetometer";
    Magnetometer.repo = "https://github.com/sdesalas/cordova-plugin-magnetometer";
    Magnetometer.platforms = ["Android", "iOS"];
    Magnetometer.decorators = [
        { type: core$1.Injectable }
    ];
    return Magnetometer;
}(core.AwesomeCordovaNativePlugin));

exports.Magnetometer = Magnetometer;
