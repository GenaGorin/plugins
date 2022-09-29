'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AppCenterCrashes = /** @class */ (function (_super) {
    tslib.__extends(AppCenterCrashes, _super);
    function AppCenterCrashes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterCrashes.prototype.generateTestCrash = function () { return core.cordova(this, "generateTestCrash", {}, arguments); };
    AppCenterCrashes.prototype.hasCrashedInLastSession = function () { return core.cordova(this, "hasCrashedInLastSession", {}, arguments); };
    AppCenterCrashes.prototype.lastSessionCrashReport = function () { return core.cordova(this, "lastSessionCrashReport", {}, arguments); };
    AppCenterCrashes.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    AppCenterCrashes.prototype.setEnabled = function (shouldEnable) { return core.cordova(this, "setEnabled", {}, arguments); };
    AppCenterCrashes.pluginName = "AppCenterCrashes";
    AppCenterCrashes.plugin = "cordova-plugin-appcenter-crashes";
    AppCenterCrashes.pluginRef = "AppCenter.Crashes";
    AppCenterCrashes.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-crashes";
    AppCenterCrashes.platforms = ["Android", "iOS"];
    AppCenterCrashes.decorators = [
        { type: core$1.Injectable }
    ];
    return AppCenterCrashes;
}(core.AwesomeCordovaNativePlugin));

exports.AppCenterCrashes = AppCenterCrashes;
