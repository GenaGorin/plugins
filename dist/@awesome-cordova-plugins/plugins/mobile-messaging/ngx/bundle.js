'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var DefaultMessageStorage = /** @class */ (function () {
    function DefaultMessageStorage() {
    }
    DefaultMessageStorage.prototype.find = function (messageId, callback) { return core.cordova(this, "find", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.findAll = function (callback) { return core.cordova(this, "findAll", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.delete = function (messageId, callback) { return core.cordova(this, "delete", { "sync": true }, arguments); };
    DefaultMessageStorage.prototype.deleteAll = function (callback) { return core.cordova(this, "deleteAll", { "sync": true }, arguments); };
    return DefaultMessageStorage;
}());
var CustomMessageStorage = /** @class */ (function () {
    function CustomMessageStorage() {
    }
    CustomMessageStorage.prototype.save = function (messages) { return core.cordova(this, "save", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.find = function (messageId, callback) { return core.cordova(this, "find", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.findAll = function (callback) { return core.cordova(this, "findAll", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.start = function () { return core.cordova(this, "start", { "sync": true }, arguments); };
    CustomMessageStorage.prototype.stop = function () { return core.cordova(this, "stop", { "sync": true }, arguments); };
    return CustomMessageStorage;
}());
var MobileMessaging = /** @class */ (function (_super) {
    tslib.__extends(MobileMessaging, _super);
    function MobileMessaging() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MobileMessaging.prototype.init = function (config, onInitError) { return core.cordova(this, "init", { "sync": true }, arguments); };
    MobileMessaging.prototype.register = function (event) { return core.cordova(this, "register", { "observable": true }, arguments); };
    MobileMessaging.prototype.on = function (event) { return core.cordova(this, "on", { "observable": true }, arguments); };
    MobileMessaging.prototype.unregister = function (event) { return core.cordova(this, "unregister", { "observable": true }, arguments); };
    MobileMessaging.prototype.off = function (event) { return core.cordova(this, "off", { "observable": true }, arguments); };
    MobileMessaging.prototype.submitEvent = function (event) { return core.cordova(this, "submitEvent", { "sync": true }, arguments); };
    MobileMessaging.prototype.submitEventImmediately = function (event) { return core.cordova(this, "submitEventImmediately", { "observable": true }, arguments); };
    MobileMessaging.prototype.saveUser = function (userData) { return core.cordova(this, "saveUser", {}, arguments); };
    MobileMessaging.prototype.fetchUser = function () { return core.cordova(this, "fetchUser", {}, arguments); };
    MobileMessaging.prototype.getUser = function () { return core.cordova(this, "getUser", {}, arguments); };
    MobileMessaging.prototype.saveInstallation = function (installation) { return core.cordova(this, "saveInstallation", {}, arguments); };
    MobileMessaging.prototype.fetchInstallation = function () { return core.cordova(this, "fetchInstallation", {}, arguments); };
    MobileMessaging.prototype.getInstallation = function () { return core.cordova(this, "getInstallation", {}, arguments); };
    MobileMessaging.prototype.setInstallationAsPrimary = function (pushRegistrationId, primary) { return core.cordova(this, "setInstallationAsPrimary", {}, arguments); };
    MobileMessaging.prototype.personalize = function (context) { return core.cordova(this, "personalize", {}, arguments); };
    MobileMessaging.prototype.depersonalize = function () { return core.cordova(this, "depersonalize", {}, arguments); };
    MobileMessaging.prototype.depersonalizeInstallation = function (pushRegistrationId) { return core.cordova(this, "depersonalizeInstallation", {}, arguments); };
    MobileMessaging.prototype.markMessagesSeen = function (messageIds) { return core.cordova(this, "markMessagesSeen", {}, arguments); };
    MobileMessaging.prototype.showDialogForError = function (errorCode) { return core.cordova(this, "showDialogForError", {}, arguments); };
    MobileMessaging.prototype.defaultMessageStorage = function () { return core.cordova(this, "defaultMessageStorage", { "sync": true }, arguments); };
    MobileMessaging.prototype.showChat = function (config) { return core.cordova(this, "showChat", {}, arguments); };
    MobileMessaging.prototype.setupiOSChatSettings = function (settings) { return core.cordova(this, "setupiOSChatSettings", {}, arguments); };
    MobileMessaging.prototype.getMessageCounter = function (onResult) { return core.cordova(this, "getMessageCounter", { "sync": true }, arguments); };
    MobileMessaging.prototype.resetMessageCounter = function () { return core.cordova(this, "resetMessageCounter", {}, arguments); };
    MobileMessaging.pluginName = "MobileMessaging";
    MobileMessaging.plugin = "com-infobip-plugins-mobilemessaging";
    MobileMessaging.pluginRef = "MobileMessaging";
    MobileMessaging.repo = "https://github.com/infobip/mobile-messaging-cordova-plugin";
    MobileMessaging.platforms = ["Android", "iOS"];
    MobileMessaging.decorators = [
        { type: core$1.Injectable }
    ];
    return MobileMessaging;
}(core.AwesomeCordovaNativePlugin));

exports.CustomMessageStorage = CustomMessageStorage;
exports.DefaultMessageStorage = DefaultMessageStorage;
exports.MobileMessaging = MobileMessaging;
