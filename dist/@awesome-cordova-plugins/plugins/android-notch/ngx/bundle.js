'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AndroidNotch = /** @class */ (function (_super) {
    tslib.__extends(AndroidNotch, _super);
    function AndroidNotch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidNotch.prototype.hasCutout = function () { return core.cordova(this, "hasCutout", {}, arguments); };
    AndroidNotch.prototype.getInsetTop = function () { return core.cordova(this, "getInsetTop", {}, arguments); };
    AndroidNotch.prototype.getInsetRight = function () { return core.cordova(this, "getInsetRight", {}, arguments); };
    AndroidNotch.prototype.getInsetBottom = function () { return core.cordova(this, "getInsetBottom", {}, arguments); };
    AndroidNotch.prototype.getInsetLeft = function () { return core.cordova(this, "getInsetLeft", {}, arguments); };
    AndroidNotch.pluginName = "AndroidNotch";
    AndroidNotch.plugin = "cordova-plugin-android-notch";
    AndroidNotch.pluginRef = "AndroidNotch";
    AndroidNotch.repo = "https://github.com/tobspr/cordova-plugin-android-notch.git";
    AndroidNotch.platforms = ["Android"];
    AndroidNotch.decorators = [
        { type: core$1.Injectable }
    ];
    return AndroidNotch;
}(core.AwesomeCordovaNativePlugin));

exports.AndroidNotch = AndroidNotch;
