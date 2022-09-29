'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var NativeView = /** @class */ (function (_super) {
    tslib.__extends(NativeView, _super);
    function NativeView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeView.prototype.show = function (packageOrClass, className, extraParams, success, error) { return core.cordova(this, "show", {}, arguments); };
    NativeView.prototype.checkIfAppInstalled = function (config, success, error) { return core.cordova(this, "checkIfAppInstalled", {}, arguments); };
    NativeView.prototype.showMarket = function (config, success, error) { return core.cordova(this, "showMarket", {}, arguments); };
    NativeView.prototype.getBuildVariant = function (config, success, error) { return core.cordova(this, "getBuildVariant", { "platforms": ["android"] }, arguments); };
    NativeView.pluginName = "NativeView";
    NativeView.plugin = "cordova-plugin-nativeview";
    NativeView.pluginRef = "cordova.plugins.NativeView";
    NativeView.repo = "https://github.com/mfdeveloper/cordova-plugin-nativeview";
    NativeView.platforms = ["Android", "iOS"];
    NativeView.decorators = [
        { type: core$1.Injectable }
    ];
    return NativeView;
}(core.AwesomeCordovaNativePlugin));

exports.NativeView = NativeView;
