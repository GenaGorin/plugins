'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var LowMemory = /** @class */ (function (_super) {
    tslib.__extends(LowMemory, _super);
    function LowMemory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LowMemory.prototype.generateLowMemory = function () { return core.cordova(this, "generateLowMemory", {}, arguments); };
    LowMemory.pluginName = "LowMemory";
    LowMemory.plugin = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemory.pluginRef = "LowMemory";
    LowMemory.repo = "https://github.com/Microsoft/appcenter-sdk-cordova/tree/master/cordova-plugin-appcenter-generate-low-memory";
    LowMemory.platforms = ["Android", "iOS"];
    LowMemory.decorators = [
        { type: core$1.Injectable }
    ];
    return LowMemory;
}(core.AwesomeCordovaNativePlugin));

exports.LowMemory = LowMemory;
