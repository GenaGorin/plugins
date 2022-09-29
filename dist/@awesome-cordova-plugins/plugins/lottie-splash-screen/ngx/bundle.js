'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var LottieSplashScreen = /** @class */ (function (_super) {
    tslib.__extends(LottieSplashScreen, _super);
    function LottieSplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreen.prototype.show = function (location, remote, width, height) { return core.cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreen.prototype.hide = function () { return core.cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreen.pluginName = "LottieSplashScreen";
    LottieSplashScreen.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreen.pluginRef = "lottie.splashscreen";
    LottieSplashScreen.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreen.install = "";
    LottieSplashScreen.installVariables = [];
    LottieSplashScreen.platforms = ["Android", "iOS"];
    LottieSplashScreen.decorators = [
        { type: core$1.Injectable }
    ];
    return LottieSplashScreen;
}(core.AwesomeCordovaNativePlugin));

exports.LottieSplashScreen = LottieSplashScreen;
