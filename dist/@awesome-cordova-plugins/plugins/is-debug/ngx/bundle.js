'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var IsDebug = /** @class */ (function (_super) {
    tslib.__extends(IsDebug, _super);
    function IsDebug() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IsDebug.prototype.getIsDebug = function () { return core.cordova(this, "getIsDebug", {}, arguments); };
    IsDebug.pluginName = "IsDebug";
    IsDebug.plugin = "cordova-plugin-is-debug";
    IsDebug.pluginRef = "cordova.plugins.IsDebug";
    IsDebug.repo = "https://github.com/mattlewis92/cordova-plugin-is-debug";
    IsDebug.platforms = ["Android", "iOS"];
    IsDebug.decorators = [
        { type: core$1.Injectable }
    ];
    return IsDebug;
}(core.AwesomeCordovaNativePlugin));

exports.IsDebug = IsDebug;
