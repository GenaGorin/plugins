'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

exports.DocumentScannerSourceType = void 0;
(function (DocumentScannerSourceType) {
    /**
     * Scan directly from device camera.
     * This is the default.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["CAMERA"] = 1] = "CAMERA";
    /**
     * Scan from an image already stored on device.
     */
    DocumentScannerSourceType[DocumentScannerSourceType["GALLERY"] = 0] = "GALLERY";
})(exports.DocumentScannerSourceType || (exports.DocumentScannerSourceType = {}));
var DocumentScanner = /** @class */ (function (_super) {
    tslib.__extends(DocumentScanner, _super);
    function DocumentScanner() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentScanner.prototype.scanDoc = function (opts) { return core.cordova(this, "scanDoc", { "callbackOrder": "reverse" }, arguments); };
    DocumentScanner.pluginName = "DocumentScanner";
    DocumentScanner.plugin = "cordova-plugin-document-scanner";
    DocumentScanner.pluginRef = "scan";
    DocumentScanner.repo = "https://github.com/NeutrinosPlatform/cordova-plugin-document-scanner";
    DocumentScanner.platforms = ["Android", "iOS"];
    DocumentScanner.decorators = [
        { type: core$1.Injectable }
    ];
    return DocumentScanner;
}(core.AwesomeCordovaNativePlugin));

exports.DocumentScanner = DocumentScanner;
