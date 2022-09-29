'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var PushapePush = /** @class */ (function (_super) {
    tslib.__extends(PushapePush, _super);
    function PushapePush() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Init push notifications
     *
     * @param options {PushapeOptions}
     * @returns {PushObject}
     */
    PushapePush.prototype.init = function (options) {
        return new PushObject(options);
    };
    PushapePush.prototype.hasPermission = function () { return core.cordova(this, "hasPermission", {}, arguments); };
    PushapePush.prototype.createChannel = function (channel) { return core.cordova(this, "createChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePush.prototype.deleteChannel = function (id) { return core.cordova(this, "deleteChannel", { "callbackOrder": "reverse" }, arguments); };
    PushapePush.prototype.listChannels = function () { return core.cordova(this, "listChannels", {}, arguments); };
    PushapePush.pluginName = "PushapePush";
    PushapePush.plugin = "pushape-cordova-push";
    PushapePush.pluginRef = "PushNotification";
    PushapePush.repo = "https://github.com/gluelabs/pushape-cordova-push";
    PushapePush.install = "ionic cordova plugin add pushape-cordova-push";
    PushapePush.platforms = ["Android", "Browser", "iOS"];
    PushapePush.decorators = [
        { type: core$1.Injectable }
    ];
    return PushapePush;
}(core.AwesomeCordovaNativePlugin));
var PushObject = /** @class */ (function () {
    function PushObject(options) {
        if (core.checkAvailability('PushNotification', 'init', 'PushNotification') === true) {
            if (typeof window !== 'undefined') {
                this._objectInstance = window.PushNotification.init(options);
            }
        }
    }
    PushObject.prototype.on = function (event) { return core.cordovaInstance(this, "on", { "observable": true, "clearFunction": "off", "clearWithArgs": true }, arguments); };
    PushObject.prototype.unregister = function () { return core.cordovaInstance(this, "unregister", {}, arguments); };
    PushObject.prototype.setApplicationIconBadgeNumber = function (count) { return core.cordovaInstance(this, "setApplicationIconBadgeNumber", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.getApplicationIconBadgeNumber = function () { return core.cordovaInstance(this, "getApplicationIconBadgeNumber", {}, arguments); };
    PushObject.prototype.finish = function (id) { return core.cordovaInstance(this, "finish", { "callbackOrder": "reverse" }, arguments); };
    PushObject.prototype.clearAllNotifications = function () { return core.cordovaInstance(this, "clearAllNotifications", {}, arguments); };
    PushObject.prototype.subscribe = function (topic) { return core.cordovaInstance(this, "subscribe", {}, arguments); };
    PushObject.prototype.unsubscribe = function (topic) { return core.cordovaInstance(this, "unsubscribe", {}, arguments); };
    PushObject.pluginName = "PushapePush";
    PushObject.plugin = "pushape-cordova-push";
    PushObject.pluginRef = "PushNotification";
    return PushObject;
}());

exports.PushObject = PushObject;
exports.PushapePush = PushapePush;
