'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Anyline = /** @class */ (function (_super) {
    tslib.__extends(Anyline, _super);
    function Anyline() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Anyline.prototype.scan = function (options) { return core.cordova(this, "scan", {}, arguments); };
    Anyline.pluginName = "Anyline";
    Anyline.plugin = "io-anyline-cordova";
    Anyline.pluginRef = "Anyline";
    Anyline.repo = "https://github.com/Anyline/anyline-ocr-cordova-module";
    Anyline.platforms = ["Android", "iOS"];
    Anyline.decorators = [
        { type: core$1.Injectable }
    ];
    return Anyline;
}(core.AwesomeCordovaNativePlugin));

exports.Anyline = Anyline;
