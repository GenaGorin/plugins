'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var Zip = /** @class */ (function (_super) {
    tslib.__extends(Zip, _super);
    function Zip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zip.prototype.unzip = function (sourceZip, destFolder, onProgress) { return core.cordova(this, "unzip", {}, arguments); };
    Zip.pluginName = "Zip";
    Zip.plugin = "cordova-plugin-zip";
    Zip.pluginRef = "zip";
    Zip.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    Zip.platforms = ["Android", "iOS"];
    Zip.decorators = [
        { type: core$1.Injectable }
    ];
    return Zip;
}(core.AwesomeCordovaNativePlugin));

exports.Zip = Zip;
