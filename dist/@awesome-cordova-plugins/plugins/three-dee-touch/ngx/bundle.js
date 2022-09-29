'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var ThreeDeeTouch = /** @class */ (function (_super) {
    tslib.__extends(ThreeDeeTouch, _super);
    function ThreeDeeTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDeeTouch.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    ThreeDeeTouch.prototype.watchForceTouches = function () { return core.cordova(this, "watchForceTouches", { "observable": true }, arguments); };
    ThreeDeeTouch.prototype.configureQuickActions = function (quickActions) { return core.cordova(this, "configureQuickActions", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.onHomeIconPressed = function () { return core.cordovaFunctionOverride(this, "onHomeIconPressed", {}, arguments); };
    ThreeDeeTouch.prototype.enableLinkPreview = function () { return core.cordova(this, "enableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.disableLinkPreview = function () { return core.cordova(this, "disableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.pluginName = "ThreeDeeTouch";
    ThreeDeeTouch.plugin = "cordova-plugin-3dtouch";
    ThreeDeeTouch.pluginRef = "ThreeDeeTouch";
    ThreeDeeTouch.repo = "https://github.com/EddyVerbruggen/cordova-plugin-3dtouch";
    ThreeDeeTouch.platforms = ["iOS"];
    ThreeDeeTouch.decorators = [
        { type: core$1.Injectable }
    ];
    return ThreeDeeTouch;
}(core.AwesomeCordovaNativePlugin));

exports.ThreeDeeTouch = ThreeDeeTouch;
