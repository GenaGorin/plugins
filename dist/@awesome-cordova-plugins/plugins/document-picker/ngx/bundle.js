'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var DocumentPicker = /** @class */ (function (_super) {
    tslib.__extends(DocumentPicker, _super);
    function DocumentPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentPicker.prototype.getFile = function (option) { return core.cordova(this, "getFile", {}, arguments); };
    DocumentPicker.pluginName = "IOSDocumentPicker";
    DocumentPicker.plugin = "cordova-plugin-documentpicker.DocumentPicker";
    DocumentPicker.pluginRef = "DocumentPicker";
    DocumentPicker.repo = "https://github.com/iampossible/Cordova-DocPicker";
    DocumentPicker.platforms = ["iOS"];
    DocumentPicker.decorators = [
        { type: core$1.Injectable }
    ];
    return DocumentPicker;
}(core.AwesomeCordovaNativePlugin));

exports.DocumentPicker = DocumentPicker;
