'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var FTP = /** @class */ (function (_super) {
    tslib.__extends(FTP, _super);
    function FTP() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FTP.prototype.connect = function (hostname, username, password) { return core.cordova(this, "connect", {}, arguments); };
    FTP.prototype.ls = function (path) { return core.cordova(this, "ls", {}, arguments); };
    FTP.prototype.mkdir = function (path) { return core.cordova(this, "mkdir", {}, arguments); };
    FTP.prototype.rmdir = function (path) { return core.cordova(this, "rmdir", {}, arguments); };
    FTP.prototype.rm = function (file) { return core.cordova(this, "rm", {}, arguments); };
    FTP.prototype.upload = function (localFile, remoteFile) { return core.cordova(this, "upload", { "observable": true }, arguments); };
    FTP.prototype.download = function (localFile, remoteFile) { return core.cordova(this, "download", { "observable": true }, arguments); };
    FTP.prototype.cancel = function () { return core.cordova(this, "cancel", {}, arguments); };
    FTP.prototype.disconnect = function () { return core.cordova(this, "disconnect", {}, arguments); };
    FTP.pluginName = "FTP";
    FTP.plugin = "cordova-plugin-ftp";
    FTP.pluginRef = "cordova.plugin.ftp";
    FTP.repo = "https://github.com/xfally/cordova-plugin-ftp";
    FTP.platforms = ["Android", "iOS"];
    FTP.decorators = [
        { type: core$1.Injectable }
    ];
    return FTP;
}(core.AwesomeCordovaNativePlugin));

exports.FTP = FTP;
