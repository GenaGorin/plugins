'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var TealiumAdIdentifier = /** @class */ (function (_super) {
    tslib.__extends(TealiumAdIdentifier, _super);
    function TealiumAdIdentifier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TealiumAdIdentifier.prototype.setPersistent = function (instanceName) { return core.cordova(this, "setPersistent", {}, arguments); };
    TealiumAdIdentifier.prototype.setVolatile = function (instanceName) { return core.cordova(this, "setVolatile", {}, arguments); };
    TealiumAdIdentifier.pluginName = "TealiumAdIdentifier";
    TealiumAdIdentifier.plugin = "tealium-cordova-adidentifier";
    TealiumAdIdentifier.pluginRef = "window.tealiumAdIdentifier";
    TealiumAdIdentifier.repo = "https://github.com/Tealium/cordova-plugin";
    TealiumAdIdentifier.platforms = ["Android", "iOS"];
    TealiumAdIdentifier.install = "";
    TealiumAdIdentifier.decorators = [
        { type: core$1.Injectable }
    ];
    return TealiumAdIdentifier;
}(core.AwesomeCordovaNativePlugin));

exports.TealiumAdIdentifier = TealiumAdIdentifier;
