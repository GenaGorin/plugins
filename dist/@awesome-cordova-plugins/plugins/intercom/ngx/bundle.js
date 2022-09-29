'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var Intercom = /** @class */ (function (_super) {
    tslib.__extends(Intercom, _super);
    function Intercom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Intercom.prototype.registerIdentifiedUser = function (options) { return core.cordova(this, "registerIdentifiedUser", {}, arguments); };
    Intercom.prototype.registerUnidentifiedUser = function (options) { return core.cordova(this, "registerUnidentifiedUser", {}, arguments); };
    Intercom.prototype.reset = function () { return core.cordova(this, "reset", {}, arguments); };
    Intercom.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    Intercom.prototype.setSecureMode = function (secureHash, secureData) { return core.cordova(this, "setSecureMode", {}, arguments); };
    Intercom.prototype.setUserHash = function (secureHash) { return core.cordova(this, "setUserHash", {}, arguments); };
    Intercom.prototype.updateUser = function (attributes) { return core.cordova(this, "updateUser", {}, arguments); };
    Intercom.prototype.logEvent = function (eventName, metaData) { return core.cordova(this, "logEvent", {}, arguments); };
    Intercom.prototype.displayMessenger = function () { return core.cordova(this, "displayMessenger", {}, arguments); };
    Intercom.prototype.displayMessageComposer = function () { return core.cordova(this, "displayMessageComposer", {}, arguments); };
    Intercom.prototype.displayMessageComposerWithInitialMessage = function (initialMessage) { return core.cordova(this, "displayMessageComposerWithInitialMessage", {}, arguments); };
    Intercom.prototype.displayConversationsList = function () { return core.cordova(this, "displayConversationsList", {}, arguments); };
    Intercom.prototype.displayHelpCenter = function () { return core.cordova(this, "displayHelpCenter", {}, arguments); };
    Intercom.prototype.unreadConversationCount = function () { return core.cordova(this, "unreadConversationCount", {}, arguments); };
    Intercom.prototype.setLauncherVisibility = function (visibility) { return core.cordova(this, "setLauncherVisibility", {}, arguments); };
    Intercom.prototype.setInAppMessageVisibility = function (visibility) { return core.cordova(this, "setInAppMessageVisibility", {}, arguments); };
    Intercom.prototype.hideMessenger = function () { return core.cordova(this, "hideMessenger", {}, arguments); };
    Intercom.prototype.registerForPush = function () { return core.cordova(this, "registerForPush", {}, arguments); };
    Intercom.prototype.sendPushTokenToIntercom = function (token) { return core.cordova(this, "sendPushTokenToIntercom", {}, arguments); };
    Intercom.prototype.displayCarousel = function (carouselId) { return core.cordova(this, "displayCarousel", {}, arguments); };
    Intercom.prototype.displayArticle = function (articleId) { return core.cordova(this, "displayArticle", {}, arguments); };
    Intercom.prototype.setBottomPadding = function (bottomPadding) { return core.cordova(this, "setBottomPadding", {}, arguments); };
    Intercom.prototype.displaySurvey = function (surveyId) { return core.cordova(this, "displaySurvey", {}, arguments); };
    Intercom.pluginName = "Intercom";
    Intercom.plugin = "cordova-plugin-intercom";
    Intercom.pluginRef = "intercom";
    Intercom.repo = "https://github.com/intercom/intercom-cordova";
    Intercom.platforms = ["Android", "iOS"];
    Intercom.decorators = [
        { type: core$1.Injectable }
    ];
    return Intercom;
}(core.AwesomeCordovaNativePlugin));

exports.Intercom = Intercom;
