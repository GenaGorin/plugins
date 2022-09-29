'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Uptime = /** @class */ (function (_super) {
    tslib.__extends(Uptime, _super);
    function Uptime() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Uptime.prototype.getUptime = function (includeDeepSleep) { return core.cordova(this, "getUptime", {}, arguments); };
    Uptime.pluginName = "Uptime";
    Uptime.plugin = "cordova-plugin-uptime";
    Uptime.pluginRef = "Uptime";
    Uptime.repo = "https://github.com/s1lviu/cordova-plugin-uptime";
    Uptime.platforms = ["Android", "iOS"];
    Uptime.decorators = [
        { type: core$1.Injectable }
    ];
    return Uptime;
}(core.AwesomeCordovaNativePlugin));

exports.Uptime = Uptime;
