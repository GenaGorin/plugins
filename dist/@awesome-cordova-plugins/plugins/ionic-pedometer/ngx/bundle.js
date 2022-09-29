'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var IonicPedometer = /** @class */ (function (_super) {
    tslib.__extends(IonicPedometer, _super);
    function IonicPedometer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IonicPedometer.prototype.isStepCountingAvailable = function (successCallback, failureCallback) { return core.cordova(this, "isStepCountingAvailable", {}, arguments); };
    IonicPedometer.prototype.startPedometerUpdates = function (successHandler, onError) {
        return;
    };
    IonicPedometer.pluginName = "IonicPedometer";
    IonicPedometer.plugin = "cordova-plugin-pedometer";
    IonicPedometer.pluginRef = "pedometer";
    IonicPedometer.repo = "https://github.com/leecrossley/cordova-plugin-pedometer";
    IonicPedometer.decorators = [
        { type: core$1.Injectable }
    ];
    return IonicPedometer;
}(core.AwesomeCordovaNativePlugin));

exports.IonicPedometer = IonicPedometer;
