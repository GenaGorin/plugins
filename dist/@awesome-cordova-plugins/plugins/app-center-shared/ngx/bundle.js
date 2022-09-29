'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AppCenter = /** @class */ (function (_super) {
    tslib.__extends(AppCenter, _super);
    function AppCenter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppCenter.prototype.getInstallId = function () { return core.cordova(this, "getInstallId", {}, arguments); };
    AppCenter.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    AppCenter.pluginName = "AppCenter";
    AppCenter.plugin = "cordova-plugin-appcenter-shared";
    AppCenter.pluginRef = "AppCenter";
    AppCenter.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-shared";
    AppCenter.platforms = ["Android", "iOS"];
    AppCenter.decorators = [
        { type: core$1.Injectable }
    ];
    return AppCenter;
}(core.AwesomeCordovaNativePlugin));

exports.AppCenter = AppCenter;
