'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var AndroidExoplayer = /** @class */ (function (_super) {
    tslib.__extends(AndroidExoplayer, _super);
    function AndroidExoplayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidExoplayer.prototype.show = function (parameters) { return core.cordova(this, "show", { "observable": true, "clearFunction": "close", "clearWithArgs": false, "successIndex": 1, "errorIndex": 2 }, arguments); };
    AndroidExoplayer.prototype.setStream = function (url, controller) { return core.cordova(this, "setStream", {}, arguments); };
    AndroidExoplayer.prototype.playPause = function () { return core.cordova(this, "playPause", {}, arguments); };
    AndroidExoplayer.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    AndroidExoplayer.prototype.seekTo = function (milliseconds) { return core.cordova(this, "seekTo", {}, arguments); };
    AndroidExoplayer.prototype.seekBy = function (milliseconds) { return core.cordova(this, "seekBy", {}, arguments); };
    AndroidExoplayer.prototype.getState = function () { return core.cordova(this, "getState", {}, arguments); };
    AndroidExoplayer.prototype.showController = function () { return core.cordova(this, "showController", {}, arguments); };
    AndroidExoplayer.prototype.hideController = function () { return core.cordova(this, "hideController", {}, arguments); };
    AndroidExoplayer.prototype.setController = function (controller) { return core.cordova(this, "setController", {}, arguments); };
    AndroidExoplayer.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    AndroidExoplayer.pluginName = "AndroidExoPlayer";
    AndroidExoplayer.plugin = "cordova-plugin-exoplayer";
    AndroidExoplayer.pluginRef = "ExoPlayer";
    AndroidExoplayer.repo = "https://github.com/frontyard/cordova-plugin-exoplayer";
    AndroidExoplayer.platforms = ["Android"];
    AndroidExoplayer.decorators = [
        { type: core$1.Injectable }
    ];
    return AndroidExoplayer;
}(core.AwesomeCordovaNativePlugin));

exports.AndroidExoplayer = AndroidExoplayer;
