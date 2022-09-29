'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var MLKitTranslate = /** @class */ (function (_super) {
    tslib.__extends(MLKitTranslate, _super);
    function MLKitTranslate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MLKitTranslate.prototype.translate = function (text, targetLanguage, sourceLanguage) { return core.cordova(this, "translate", {}, arguments); };
    MLKitTranslate.prototype.identifyLanguage = function (text) { return core.cordova(this, "identifyLanguage", {}, arguments); };
    MLKitTranslate.prototype.getDownloadedModels = function () { return core.cordova(this, "getDownloadedModels", {}, arguments); };
    MLKitTranslate.prototype.getAvailableModels = function () { return core.cordova(this, "getAvailableModels", {}, arguments); };
    MLKitTranslate.prototype.downloadModel = function (code) { return core.cordova(this, "downloadModel", {}, arguments); };
    MLKitTranslate.prototype.deleteModel = function (code) { return core.cordova(this, "deleteModel", {}, arguments); };
    MLKitTranslate.pluginName = "MLKitTranslate";
    MLKitTranslate.plugin = "cordova-plugin-mlkit-translate";
    MLKitTranslate.pluginRef = "MLKitTranslate";
    MLKitTranslate.repo = "https://github.com/rigelglen/cordova-plugin-mlkit-translate";
    MLKitTranslate.platforms = ["Android", "iOS"];
    MLKitTranslate.decorators = [
        { type: core$1.Injectable }
    ];
    return MLKitTranslate;
}(core.AwesomeCordovaNativePlugin));

exports.MLKitTranslate = MLKitTranslate;
