'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var HeaderColor = /** @class */ (function (_super) {
    tslib.__extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColor.prototype.tint = function (color) { return core.cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColor.pluginName = "HeaderColor";
    HeaderColor.plugin = "cordova-plugin-headercolor";
    HeaderColor.pluginRef = "plugins.headerColor";
    HeaderColor.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColor.platforms = ["Android"];
    HeaderColor.decorators = [
        { type: core$1.Injectable }
    ];
    return HeaderColor;
}(core.AwesomeCordovaNativePlugin));

exports.HeaderColor = HeaderColor;
