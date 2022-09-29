'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Pollfish = /** @class */ (function (_super) {
    tslib.__extends(Pollfish, _super);
    function Pollfish() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Pollfish.prototype.init = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode) { return core.cordova(this, "init", {}, arguments); };
    Pollfish.prototype.initWithUserAttributes = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode, userAttributes) { return core.cordova(this, "initWithUserAttributes", {}, arguments); };
    Pollfish.prototype.showPollfish = function () { return core.cordova(this, "showPollfish", {}, arguments); };
    Pollfish.prototype.hidePollfish = function () { return core.cordova(this, "hidePollfish", {}, arguments); };
    Pollfish.prototype.setEventCallback = function (eventName, callback) { return core.cordova(this, "setEventCallback", { "sync": true }, arguments); };
    Object.defineProperty(Pollfish.prototype, "EventListener", {
        get: function () { return core.cordovaPropertyGet(this, "EventListener"); },
        set: function (value) { core.cordovaPropertySet(this, "EventListener", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pollfish.prototype, "Position", {
        get: function () { return core.cordovaPropertyGet(this, "Position"); },
        set: function (value) { core.cordovaPropertySet(this, "Position", value); },
        enumerable: false,
        configurable: true
    });
    Pollfish.pluginName = "Pollfish";
    Pollfish.plugin = "com.pollfish.cordova_plugin";
    Pollfish.pluginRef = "pollfishplugin";
    Pollfish.repo = "https://github.com/pollfish/cordova-plugin-pollfish";
    Pollfish.platforms = ["Android", "iOS"];
    Pollfish.decorators = [
        { type: core$1.Injectable }
    ];
    return Pollfish;
}(core.AwesomeCordovaNativePlugin));

exports.Pollfish = Pollfish;
