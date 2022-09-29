'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var AppCenterPush = /** @class */ (function (_super) {
    tslib.__extends(AppCenterPush, _super);
    function AppCenterPush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenterPush.prototype.addEventListener = function (eventName) { return core.cordova(this, "addEventListener", { "observable": true, "clearFunction": "removeEventListener" }, arguments); };
    AppCenterPush.prototype.isEnabled = function () { return core.cordova(this, "isEnabled", {}, arguments); };
    AppCenterPush.prototype.setEnabled = function (shouldEnable) { return core.cordova(this, "setEnabled", {}, arguments); };
    AppCenterPush.pluginName = "AppCenterPush";
    AppCenterPush.plugin = "cordova-plugin-appcenter-push";
    AppCenterPush.pluginRef = "AppCenter.Push";
    AppCenterPush.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-push";
    AppCenterPush.platforms = ["Android", "iOS"];
    AppCenterPush.decorators = [
        { type: core$1.Injectable }
    ];
    return AppCenterPush;
}(core.AwesomeCordovaNativePlugin));

exports.AppCenterPush = AppCenterPush;
