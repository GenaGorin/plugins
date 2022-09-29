'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var SystemAlertWindowPermission = /** @class */ (function (_super) {
    tslib.__extends(SystemAlertWindowPermission, _super);
    function SystemAlertWindowPermission() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SystemAlertWindowPermission.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.requestPermission = function () { return core.cordova(this, "requestPermission", {}, arguments); };
    SystemAlertWindowPermission.prototype.openNotificationSettings = function () { return core.cordova(this, "openNotificationSettings", {}, arguments); };
    SystemAlertWindowPermission.pluginName = "SystemAlertWindowPermission";
    SystemAlertWindowPermission.plugin = "cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.pluginRef = "window.systemAlertWindowPermission";
    SystemAlertWindowPermission.repo = "https://github.com/MaximBelov/cordova-plugin-system-alert-window-permission.git";
    SystemAlertWindowPermission.install = "ionic cordova plugin add cordova-plugin-system-alert-window-permission";
    SystemAlertWindowPermission.platforms = ["Android"];
    SystemAlertWindowPermission.decorators = [
        { type: core$1.Injectable }
    ];
    return SystemAlertWindowPermission;
}(core.AwesomeCordovaNativePlugin));

exports.SystemAlertWindowPermission = SystemAlertWindowPermission;
