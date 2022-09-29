'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var LineLogin = /** @class */ (function (_super) {
    tslib.__extends(LineLogin, _super);
    function LineLogin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LineLogin.prototype.initialize = function (param) { return core.cordova(this, "initialize", {}, arguments); };
    LineLogin.prototype.login = function () { return core.cordova(this, "login", {}, arguments); };
    LineLogin.prototype.loginWeb = function () { return core.cordova(this, "loginWeb", {}, arguments); };
    LineLogin.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    LineLogin.prototype.getAccessToken = function () { return core.cordova(this, "getAccessToken", {}, arguments); };
    LineLogin.prototype.verifyAccessToken = function () { return core.cordova(this, "verifyAccessToken", {}, arguments); };
    LineLogin.prototype.refreshAccessToken = function () { return core.cordova(this, "refreshAccessToken", {}, arguments); };
    LineLogin.pluginName = "LineLogin";
    LineLogin.plugin = "cordova-line-login-plugin";
    LineLogin.pluginRef = "lineLogin";
    LineLogin.repo = "https://github.com/nrikiji/cordova-line-login-plugin";
    LineLogin.install = "ionic cordova plugin add https://github.com/nrikiji/cordova-line-login-plugin.git --variable LINE_CHANNEL_ID=\"your_line_channel_id\"";
    LineLogin.installVariables = ["LINE_CHANNEL_ID"];
    LineLogin.platforms = ["Android", "iOS"];
    LineLogin.decorators = [
        { type: core$1.Injectable }
    ];
    return LineLogin;
}(core.AwesomeCordovaNativePlugin));

exports.LineLogin = LineLogin;
