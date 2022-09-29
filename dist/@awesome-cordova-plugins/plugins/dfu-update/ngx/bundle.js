'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var DfuUpdate = /** @class */ (function (_super) {
    tslib.__extends(DfuUpdate, _super);
    function DfuUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DfuUpdate.prototype.updateFirmware = function (options) { return core.cordova(this, "updateFirmware", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    DfuUpdate.pluginName = "DfuUpdate";
    DfuUpdate.plugin = "cordova-plugin-dfu-update";
    DfuUpdate.pluginRef = "window.DfuUpdate";
    DfuUpdate.repo = "https://github.com/EinfachHans/cordova-plugin-dfu-update";
    DfuUpdate.install = "ionic cordova plugin add cordova-plugin-dfu-update --variable ANDROID_NORDIC_VERSION=\"1.11.0\"";
    DfuUpdate.installVariables = ["ANDROID_NORDIC_VERSION"];
    DfuUpdate.platforms = ["Android", "iOS"];
    DfuUpdate.decorators = [
        { type: core$1.Injectable }
    ];
    return DfuUpdate;
}(core.AwesomeCordovaNativePlugin));

exports.DfuUpdate = DfuUpdate;
