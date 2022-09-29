'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var TealiumInstallReferrer = /** @class */ (function (_super) {
    tslib.__extends(TealiumInstallReferrer, _super);
    function TealiumInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumInstallReferrer.prototype.setPersistent = function (instanceName) { return core.cordova(this, "setPersistent", {}, arguments); };
    TealiumInstallReferrer.prototype.setVolatile = function (instanceName) { return core.cordova(this, "setVolatile", {}, arguments); };
    TealiumInstallReferrer.pluginName = "TealiumInstallReferrer";
    TealiumInstallReferrer.plugin = "tealium-cordova-installreferrer";
    TealiumInstallReferrer.pluginRef = "window.tealiumInstallReferrer";
    TealiumInstallReferrer.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumInstallReferrer.platforms = ["Android"];
    TealiumInstallReferrer.install = "";
    TealiumInstallReferrer.decorators = [
        { type: core$1.Injectable }
    ];
    return TealiumInstallReferrer;
}(core.AwesomeCordovaNativePlugin));

exports.TealiumInstallReferrer = TealiumInstallReferrer;
