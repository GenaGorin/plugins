'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var CallDirectory = /** @class */ (function (_super) {
    tslib.__extends(CallDirectory, _super);
    function CallDirectory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CallDirectory.prototype.isAvailable = function () { return core.cordova(this, "isAvailable", {}, arguments); };
    CallDirectory.prototype.addIdentification = function (items) { return core.cordova(this, "addIdentification", {}, arguments); };
    CallDirectory.prototype.removeIdentification = function (items) { return core.cordova(this, "removeIdentification", {}, arguments); };
    CallDirectory.prototype.removeAllIdentification = function () { return core.cordova(this, "removeAllIdentification", {}, arguments); };
    CallDirectory.prototype.getAllItems = function () { return core.cordova(this, "getAllItems", {}, arguments); };
    CallDirectory.prototype.reloadExtension = function () { return core.cordova(this, "reloadExtension", {}, arguments); };
    CallDirectory.prototype.getLog = function () { return core.cordova(this, "getLog", {}, arguments); };
    CallDirectory.pluginName = "CallDirectory";
    CallDirectory.plugin = "cordova-plugin-call-directory";
    CallDirectory.pluginRef = "CallDirectory";
    CallDirectory.repo = "https://github.com/GEDYSIntraWare/cordova-plugin-call-directory";
    CallDirectory.install = "cordova plugin add cordova-plugin-call-directory --variable EXT_NAME=\"Cordova-Directory\" --variable ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES=\"NO\"";
    CallDirectory.installVariables = ["EXT_NAME", "ALWAYS_EMBED_SWIFT_STANDARD_LIBRARIES"];
    CallDirectory.platforms = ["iOS"];
    CallDirectory.decorators = [
        { type: core$1.Injectable }
    ];
    return CallDirectory;
}(core.AwesomeCordovaNativePlugin));

exports.CallDirectory = CallDirectory;
