'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Webengage = /** @class */ (function (_super) {
    tslib.__extends(Webengage, _super);
    function Webengage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Webengage.prototype.engage = function (config) { return core.cordova(this, "engage", {}, arguments); };
    Webengage.prototype.options = function (key, value) { return core.cordova(this, "options", {}, arguments); };
    Webengage.prototype.track = function (eventName, attributes) { return core.cordova(this, "track", {}, arguments); };
    Webengage.prototype.screen = function (screenName, screenData) { return core.cordova(this, "screen", {}, arguments); };
    Webengage.pluginName = "Webengage";
    Webengage.plugin = "cordova-plugin-webengage";
    Webengage.pluginRef = "webengage";
    Webengage.repo = "https://github.com/WebEngage/cordova-plugin";
    Webengage.platforms = ["Android", "iOS"];
    Webengage.decorators = [
        { type: core$1.Injectable }
    ];
    return Webengage;
}(core.AwesomeCordovaNativePlugin));
var WebengageUser = /** @class */ (function (_super) {
    tslib.__extends(WebengageUser, _super);
    function WebengageUser() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageUser.prototype.login = function (userId) { return core.cordova(this, "login", {}, arguments); };
    WebengageUser.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    WebengageUser.prototype.setAttribute = function (key, value) { return core.cordova(this, "setAttribute", {}, arguments); };
    WebengageUser.pluginName = "Webengage";
    WebengageUser.plugin = "cordova-plugin-webengage";
    WebengageUser.pluginRef = "webengage.user";
    WebengageUser.decorators = [
        { type: core$1.Injectable }
    ];
    return WebengageUser;
}(core.AwesomeCordovaNativePlugin));
var WebengagePush = /** @class */ (function (_super) {
    tslib.__extends(WebengagePush, _super);
    function WebengagePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengagePush.prototype.onClick = function (callback) { return core.cordova(this, "onClick", {}, arguments); };
    WebengagePush.prototype.options = function (key, value) { return core.cordova(this, "options", {}, arguments); };
    WebengagePush.pluginName = "Webengage";
    WebengagePush.plugin = "cordova-plugin-webengage";
    WebengagePush.pluginRef = "webengage.push";
    WebengagePush.decorators = [
        { type: core$1.Injectable }
    ];
    return WebengagePush;
}(core.AwesomeCordovaNativePlugin));
var WebengageNotification = /** @class */ (function (_super) {
    tslib.__extends(WebengageNotification, _super);
    function WebengageNotification() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebengageNotification.prototype.onShown = function (callback) { return core.cordova(this, "onShown", {}, arguments); };
    WebengageNotification.prototype.onClick = function (callback) { return core.cordova(this, "onClick", {}, arguments); };
    WebengageNotification.prototype.onDismiss = function (callback) { return core.cordova(this, "onDismiss", {}, arguments); };
    WebengageNotification.prototype.options = function (key, value) { return core.cordova(this, "options", {}, arguments); };
    WebengageNotification.pluginName = "Webengage";
    WebengageNotification.plugin = "cordova-plugin-webengage";
    WebengageNotification.pluginRef = "webengage.notification";
    WebengageNotification.decorators = [
        { type: core$1.Injectable }
    ];
    return WebengageNotification;
}(core.AwesomeCordovaNativePlugin));

exports.Webengage = Webengage;
exports.WebengageNotification = WebengageNotification;
exports.WebengagePush = WebengagePush;
exports.WebengageUser = WebengageUser;
