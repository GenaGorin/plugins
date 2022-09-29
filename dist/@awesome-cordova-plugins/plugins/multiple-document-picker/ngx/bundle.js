'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var MultipleDocumentsPicker = /** @class */ (function (_super) {
    tslib.__extends(MultipleDocumentsPicker, _super);
    function MultipleDocumentsPicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MultipleDocumentsPicker.prototype.pick = function (type) { return core.cordova(this, "pick", {}, arguments); };
    MultipleDocumentsPicker.pluginName = "MultipleDocumentsPicker";
    MultipleDocumentsPicker.plugin = "cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPicker.pluginRef = "multipleDocumentsPicker";
    MultipleDocumentsPicker.repo = "https://github.com/akeotech/cordova-plugin-multiple-documents-picker";
    MultipleDocumentsPicker.platforms = ["Android", "iOS"];
    MultipleDocumentsPicker.decorators = [
        { type: core$1.Injectable }
    ];
    return MultipleDocumentsPicker;
}(core.AwesomeCordovaNativePlugin));

exports.MultipleDocumentsPicker = MultipleDocumentsPicker;
