'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var PreviewAnyFile = /** @class */ (function (_super) {
    tslib.__extends(PreviewAnyFile, _super);
    function PreviewAnyFile() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFile.prototype.preview = function (url) { return core.cordova(this, "preview", {}, arguments); };
    PreviewAnyFile.prototype.previewPath = function (path, opt) {
        if (opt === void 0) { opt = {}; }
        return core.cordova(this, "previewPath", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFile.prototype.previewBase64 = function (base64, opt) {
        if (opt === void 0) { opt = {}; }
        return core.cordova(this, "previewBase64", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFile.prototype.previewAsset = function (path, opt) {
        if (opt === void 0) { opt = {}; }
        return core.cordova(this, "previewAsset", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFile.pluginName = "Preview/Open Any File";
    PreviewAnyFile.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFile.pluginRef = "PreviewAnyFile";
    PreviewAnyFile.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFile.install = "";
    PreviewAnyFile.installVariables = [];
    PreviewAnyFile.platforms = ["Android", "iOS"];
    PreviewAnyFile.decorators = [
        { type: core$1.Injectable }
    ];
    return PreviewAnyFile;
}(core.AwesomeCordovaNativePlugin));

exports.PreviewAnyFile = PreviewAnyFile;
