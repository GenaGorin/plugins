'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var WheelSelector = /** @class */ (function (_super) {
    tslib.__extends(WheelSelector, _super);
    function WheelSelector() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WheelSelector.prototype.show = function (options) { return core.cordova(this, "show", {}, arguments); };
    WheelSelector.prototype.hideSelector = function () { return core.cordova(this, "hideSelector", { "platforms": ["iOS"] }, arguments); };
    WheelSelector.pluginName = "WheelSelector";
    WheelSelector.plugin = "cordova-wheel-selector-plugin";
    WheelSelector.pluginRef = "SelectorCordovaPlugin";
    WheelSelector.repo = "https://github.com/jasonmamy/cordova-wheel-selector-plugin";
    WheelSelector.platforms = ["Android", "iOS"];
    WheelSelector.decorators = [
        { type: core$1.Injectable }
    ];
    return WheelSelector;
}(core.AwesomeCordovaNativePlugin));

exports.WheelSelector = WheelSelector;
