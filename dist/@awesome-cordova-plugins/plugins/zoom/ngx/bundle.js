'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Zoom = /** @class */ (function (_super) {
    tslib.__extends(Zoom, _super);
    function Zoom() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zoom.prototype.initialize = function (appKey, appSecret) { return core.cordova(this, "initialize", {}, arguments); };
    Zoom.prototype.login = function (username, password) { return core.cordova(this, "login", {}, arguments); };
    Zoom.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    Zoom.prototype.isLoggedIn = function () { return core.cordova(this, "isLoggedIn", {}, arguments); };
    Zoom.prototype.joinMeeting = function (meetingNo, meetingPassword, displayName, options) { return core.cordova(this, "joinMeeting", {}, arguments); };
    Zoom.prototype.startMeetingWithZAK = function (meetingNo, displayName, zoomToken, zoomAccessToken, userId, options) { return core.cordova(this, "startMeetingWithZAK", {}, arguments); };
    Zoom.prototype.startMeeting = function (meetingNo, options) { return core.cordova(this, "startMeeting", {}, arguments); };
    Zoom.prototype.startInstantMeeting = function (options) { return core.cordova(this, "startInstantMeeting", {}, arguments); };
    Zoom.prototype.setLocale = function (languageTag) { return core.cordova(this, "setLocale", {}, arguments); };
    Zoom.pluginName = "Zoom";
    Zoom.plugin = "cordova.plugin.zoom";
    Zoom.pluginRef = "cordova.plugins.Zoom";
    Zoom.repo = "https://github.com/zoom/zoom-sdk-ionic";
    Zoom.platforms = ["Android", "iOS"];
    Zoom.decorators = [
        { type: core$1.Injectable }
    ];
    return Zoom;
}(core.AwesomeCordovaNativePlugin));

exports.Zoom = Zoom;
