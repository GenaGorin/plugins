'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var TapticEngine = /** @class */ (function (_super) {
    tslib.__extends(TapticEngine, _super);
    function TapticEngine() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TapticEngine.prototype.selection = function () { return core.cordova(this, "selection", {}, arguments); };
    TapticEngine.prototype.notification = function (options) { return core.cordova(this, "notification", {}, arguments); };
    TapticEngine.prototype.impact = function (options) { return core.cordova(this, "impact", {}, arguments); };
    TapticEngine.prototype.gestureSelectionStart = function () { return core.cordova(this, "gestureSelectionStart", {}, arguments); };
    TapticEngine.prototype.gestureSelectionChanged = function () { return core.cordova(this, "gestureSelectionChanged", {}, arguments); };
    TapticEngine.prototype.gestureSelectionEnd = function () { return core.cordova(this, "gestureSelectionEnd", {}, arguments); };
    TapticEngine.pluginName = "TapticEngine";
    TapticEngine.plugin = "cordova-plugin-taptic-engine";
    TapticEngine.pluginRef = "TapticEngine";
    TapticEngine.repo = "https://github.com/EddyVerbruggen/cordova-plugin-taptic-engine";
    TapticEngine.platforms = ["iOS"];
    TapticEngine.decorators = [
        { type: core$1.Injectable }
    ];
    return TapticEngine;
}(core.AwesomeCordovaNativePlugin));

exports.TapticEngine = TapticEngine;
