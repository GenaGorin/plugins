'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var BatteryStatus = /** @class */ (function (_super) {
    tslib.__extends(BatteryStatus, _super);
    function BatteryStatus() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BatteryStatus.prototype.onChange = function () { return core.cordova(this, "onChange", { "eventObservable": true, "event": "batterystatus" }, arguments); };
    BatteryStatus.prototype.onLow = function () { return core.cordova(this, "onLow", { "eventObservable": true, "event": "batterylow" }, arguments); };
    BatteryStatus.prototype.onCritical = function () { return core.cordova(this, "onCritical", { "eventObservable": true, "event": "batterycritical" }, arguments); };
    BatteryStatus.pluginName = "BatteryStatus";
    BatteryStatus.plugin = "cordova-plugin-battery-status";
    BatteryStatus.pluginRef = "navigator.battery";
    BatteryStatus.repo = "https://github.com/apache/cordova-plugin-battery-status";
    BatteryStatus.platforms = ["iOS", "Android", "Windows", "Browser"];
    BatteryStatus.decorators = [
        { type: core$1.Injectable }
    ];
    return BatteryStatus;
}(core.AwesomeCordovaNativePlugin));

exports.BatteryStatus = BatteryStatus;
