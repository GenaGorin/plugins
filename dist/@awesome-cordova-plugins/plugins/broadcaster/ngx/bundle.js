'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var Broadcaster = /** @class */ (function (_super) {
    tslib.__extends(Broadcaster, _super);
    function Broadcaster() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Broadcaster.prototype.addEventListener = function (eventName, isGlobal) {
        if (isGlobal === void 0) { isGlobal = false; }
        return core.cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener", "clearWithArgs": true }, arguments);
    };
    Broadcaster.prototype.fireNativeEvent = function (eventName, isGlobalOrEventData, data) { return core.cordova(this, "fireNativeEvent", {}, arguments); };
    Broadcaster.pluginName = "Broadcaster";
    Broadcaster.plugin = "cordova-plugin-broadcaster";
    Broadcaster.pluginRef = "broadcaster";
    Broadcaster.repo = "https://github.com/bsorrentino/cordova-broadcaster";
    Broadcaster.platforms = ["Android", "iOS", "Browser"];
    Broadcaster.decorators = [
        { type: core$1.Injectable }
    ];
    return Broadcaster;
}(core.AwesomeCordovaNativePlugin));

exports.Broadcaster = Broadcaster;
