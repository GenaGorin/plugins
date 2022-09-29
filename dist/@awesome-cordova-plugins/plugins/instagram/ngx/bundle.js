'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Instagram = /** @class */ (function (_super) {
    tslib.__extends(Instagram, _super);
    function Instagram() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Instagram.prototype.isInstalled = function () { return core.cordova(this, "isInstalled", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.share = function (canvasIdOrDataUrl, caption) { return core.cordova(this, "share", { "callbackStyle": "node" }, arguments); };
    Instagram.prototype.shareAsset = function (assetLocalIdentifier) { return core.cordova(this, "shareAsset", { "callbackOrder": "reverse" }, arguments); };
    Instagram.pluginName = "Instagram";
    Instagram.plugin = "cordova-instagram-plugin";
    Instagram.pluginRef = "Instagram";
    Instagram.repo = "https://github.com/vstirbu/InstagramPlugin";
    Instagram.platforms = ["Android", "iOS"];
    Instagram.decorators = [
        { type: core$1.Injectable }
    ];
    return Instagram;
}(core.AwesomeCordovaNativePlugin));

exports.Instagram = Instagram;
