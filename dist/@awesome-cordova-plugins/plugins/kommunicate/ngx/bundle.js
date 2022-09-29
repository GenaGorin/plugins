'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Kommunicate = /** @class */ (function (_super) {
    tslib.__extends(Kommunicate, _super);
    function Kommunicate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Kommunicate.prototype.login = function (kmUser) { return core.cordova(this, "login", {}, arguments); };
    Kommunicate.prototype.registerPushNotification = function () { return core.cordova(this, "registerPushNotification", {}, arguments); };
    Kommunicate.prototype.isLoggedIn = function () { return core.cordova(this, "isLoggedIn", {}, arguments); };
    Kommunicate.prototype.updatePushNotificationToken = function (token) { return core.cordova(this, "updatePushNotificationToken", {}, arguments); };
    Kommunicate.prototype.launchConversation = function () { return core.cordova(this, "launchConversation", {}, arguments); };
    Kommunicate.prototype.launchParticularConversation = function (conversationObject) { return core.cordova(this, "launchParticularConversation", {}, arguments); };
    Kommunicate.prototype.startNewConversation = function (conversationParams) { return core.cordova(this, "startNewConversation", {}, arguments); };
    Kommunicate.prototype.processPushNotification = function (data) { return core.cordova(this, "processPushNotification", { "sync": true }, arguments); };
    Kommunicate.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    Kommunicate.prototype.startSingleChat = function (data) { return core.cordova(this, "startSingleChat", {}, arguments); };
    Kommunicate.prototype.conversationBuilder = function (converationObject) { return core.cordova(this, "conversationBuilder", {}, arguments); };
    Kommunicate.pluginName = "Kommunicate";
    Kommunicate.plugin = "kommunicate-cordova-plugin";
    Kommunicate.pluginRef = "kommunicate";
    Kommunicate.repo = "https://github.com/Kommunicate-io/Kommunicate-Cordova-Ionic-PhoneGap-Chat-Plugin";
    Kommunicate.platforms = ["Android", "Browser", "iOS"];
    Kommunicate.decorators = [
        { type: core$1.Injectable }
    ];
    return Kommunicate;
}(core.AwesomeCordovaNativePlugin));

exports.Kommunicate = Kommunicate;
