'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var UpdateType;
(function (UpdateType) {
    UpdateType[UpdateType["FLEXIBLE"] = 0] = "FLEXIBLE";
    UpdateType[UpdateType["IMMEDIATE"] = 1] = "IMMEDIATE";
})(UpdateType || (UpdateType = {}));
var InstallStatus;
(function (InstallStatus) {
    InstallStatus[InstallStatus["CANCELED"] = 0] = "CANCELED";
    InstallStatus[InstallStatus["DOWNLOADED"] = 1] = "DOWNLOADED";
    InstallStatus[InstallStatus["DOWNLOADING"] = 2] = "DOWNLOADING";
    InstallStatus[InstallStatus["FAILED"] = 3] = "FAILED";
    InstallStatus[InstallStatus["INSTALLED"] = 4] = "INSTALLED";
    InstallStatus[InstallStatus["INSTALLING"] = 5] = "INSTALLING";
    InstallStatus[InstallStatus["PENDING"] = 6] = "PENDING";
    InstallStatus[InstallStatus["UNKNOWN"] = 7] = "UNKNOWN";
})(InstallStatus || (InstallStatus = {}));
var UpdateAvailability;
(function (UpdateAvailability) {
    UpdateAvailability[UpdateAvailability["DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS"] = 0] = "DEVELOPER_TRIGGERED_UPDATE_IN_PROGRESS";
    UpdateAvailability[UpdateAvailability["UNKNOWN"] = 1] = "UNKNOWN";
    UpdateAvailability[UpdateAvailability["UPDATE_AVAILABLE"] = 2] = "UPDATE_AVAILABLE";
    UpdateAvailability[UpdateAvailability["UPDATE_NOT_AVAILABLE"] = 3] = "UPDATE_NOT_AVAILABLE";
})(UpdateAvailability || (UpdateAvailability = {}));
var AppUpdateInfo = /** @class */ (function () {
    function AppUpdateInfo() {
    }
    return AppUpdateInfo;
}());
var InAppUpdate = /** @class */ (function (_super) {
    tslib.__extends(InAppUpdate, _super);
    function InAppUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppUpdate.prototype.check = function () { return core.cordova(this, "check", {}, arguments); };
    InAppUpdate.prototype.update = function (config) { return core.cordova(this, "update", { "observable": true }, arguments); };
    InAppUpdate.prototype.completeFlexibleUpdate = function () { return core.cordova(this, "completeFlexibleUpdate", {}, arguments); };
    InAppUpdate.pluginName = "InAppUpdate";
    InAppUpdate.plugin = "cordova-in-app-update";
    InAppUpdate.pluginRef = "window.plugins.InAppUpdate";
    InAppUpdate.repo = "https://github.com/itsLucario/cordova-app-update-plugin";
    InAppUpdate.platforms = ["Android"];
    InAppUpdate.decorators = [
        { type: core$1.Injectable }
    ];
    return InAppUpdate;
}(core.AwesomeCordovaNativePlugin));

exports.AppUpdateInfo = AppUpdateInfo;
exports.InAppUpdate = InAppUpdate;
