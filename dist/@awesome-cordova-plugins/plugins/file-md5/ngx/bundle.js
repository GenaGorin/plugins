'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var FileMD5 = /** @class */ (function (_super) {
    tslib.__extends(FileMD5, _super);
    function FileMD5() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FileMD5.prototype.file = function (fileEntry) { return core.cordova(this, "file", {}, arguments); };
    FileMD5.pluginName = "FileMD5";
    FileMD5.plugin = "cordova-plugin-file-md5";
    FileMD5.pluginRef = "md5chksum";
    FileMD5.repo = "https://github.com/mramonlopez/cordova-plugin-file-md5";
    FileMD5.platforms = ["Android", "iOS"];
    FileMD5.decorators = [
        { type: core$1.Injectable }
    ];
    return FileMD5;
}(core.AwesomeCordovaNativePlugin));

exports.FileMD5 = FileMD5;
