'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@angular/core');
var core$1 = require('@awesome-cordova-plugins/core');

exports.UploadState = void 0;
(function (UploadState) {
    UploadState["UPLOADED"] = "UPLOADED";
    UploadState["FAILED"] = "FAILED";
    UploadState["UPLOADING"] = "UPLOADING";
    UploadState["INITIALIZED"] = "INITIALIZED";
})(exports.UploadState || (exports.UploadState = {}));
var FileTransferManager = /** @class */ (function () {
    function FileTransferManager(options) {
        this._objectInstance = window.FileTransferManager.init(options.config, options.callBack);
    }
    FileTransferManager.prototype.startUpload = function (payload) { return core$1.cordovaInstance(this, "startUpload", {}, arguments); };
    FileTransferManager.prototype.removeUpload = function (id) { return core$1.cordovaInstance(this, "removeUpload", {}, arguments); };
    FileTransferManager.prototype.acknowledgeEvent = function (id) { return core$1.cordovaInstance(this, "acknowledgeEvent", {}, arguments); };
    FileTransferManager.prototype.destroy = function () { return core$1.cordovaInstance(this, "destroy", {}, arguments); };
    return FileTransferManager;
}());
var BackgroundUpload = /** @class */ (function (_super) {
    tslib.__extends(BackgroundUpload, _super);
    function BackgroundUpload() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.FileTransferManager = FileTransferManager;
        return _this;
    }
    BackgroundUpload.prototype.init = function (options) {
        return new FileTransferManager(options);
    };
    BackgroundUpload.pluginName = "BackgroundUpload";
    BackgroundUpload.plugin = "@spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.pluginRef = "FileTransferManager";
    BackgroundUpload.repo = "https://github.com/spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.install = "ionic cordova plugin add @spoonconsulting/cordova-plugin-background-upload";
    BackgroundUpload.platforms = ["Android", "iOS"];
    BackgroundUpload.decorators = [
        { type: core.Injectable }
    ];
    return BackgroundUpload;
}(core$1.AwesomeCordovaNativePlugin));

exports.BackgroundUpload = BackgroundUpload;
exports.FileTransferManager = FileTransferManager;
