'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var NativeKeyboard = /** @class */ (function (_super) {
    tslib.__extends(NativeKeyboard, _super);
    function NativeKeyboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeKeyboard.prototype.showMessenger = function (options) { return core.cordova(this, "showMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.hideMessenger = function (options) { return core.cordova(this, "hideMessenger", { "sync": true }, arguments); };
    NativeKeyboard.prototype.showMessengerKeyboard = function () { return core.cordova(this, "showMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.hideMessengerKeyboard = function () { return core.cordova(this, "hideMessengerKeyboard", {}, arguments); };
    NativeKeyboard.prototype.updateMessenger = function (options) { return core.cordova(this, "updateMessenger", {}, arguments); };
    NativeKeyboard.pluginName = "NativeKeyboard";
    NativeKeyboard.plugin = "cordova-plugin-native-keyboard";
    NativeKeyboard.pluginRef = "NativeKeyboard";
    NativeKeyboard.repo = "https://github.com/EddyVerbruggen/cordova-plugin-native-keyboard";
    NativeKeyboard.platforms = ["Android", "iOS"];
    NativeKeyboard.decorators = [
        { type: core$1.Injectable }
    ];
    return NativeKeyboard;
}(core.AwesomeCordovaNativePlugin));

exports.NativeKeyboard = NativeKeyboard;
