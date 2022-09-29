'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var PlayInstallReferrer = /** @class */ (function (_super) {
    tslib.__extends(PlayInstallReferrer, _super);
    function PlayInstallReferrer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PlayInstallReferrer.prototype.getReferrer = function () { return core.cordova(this, "getReferrer", {}, arguments); };
    PlayInstallReferrer.pluginName = "PlayInstallReferrer";
    PlayInstallReferrer.plugin = "cordova-plugin-play-installreferrer";
    PlayInstallReferrer.pluginRef = "installReferrer";
    PlayInstallReferrer.repo = "https://github.com/swayangjit/cordova-plugin-play-installreferrer";
    PlayInstallReferrer.platforms = ["Android"];
    PlayInstallReferrer.decorators = [
        { type: core$1.Injectable }
    ];
    return PlayInstallReferrer;
}(core.AwesomeCordovaNativePlugin));

exports.PlayInstallReferrer = PlayInstallReferrer;
