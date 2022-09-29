'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AnalyticsFirebase = /** @class */ (function (_super) {
    tslib.__extends(AnalyticsFirebase, _super);
    function AnalyticsFirebase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnalyticsFirebase.prototype.logEvent = function (eventName, eventParams) { return core.cordova(this, "logEvent", {}, arguments); };
    AnalyticsFirebase.prototype.resetAnalyticsData = function () { return core.cordova(this, "resetAnalyticsData", {}, arguments); };
    AnalyticsFirebase.prototype.setAnalyticsCollectionEnabled = function (enabled) { return core.cordova(this, "setAnalyticsCollectionEnabled", {}, arguments); };
    AnalyticsFirebase.prototype.setCurrentScreen = function (screenName) { return core.cordova(this, "setCurrentScreen", {}, arguments); };
    AnalyticsFirebase.prototype.setMinimumSessionDuration = function (milliseconds) { return core.cordova(this, "setMinimumSessionDuration", {}, arguments); };
    AnalyticsFirebase.prototype.setSessionTimeoutDuration = function (milliseconds) { return core.cordova(this, "setSessionTimeoutDuration", {}, arguments); };
    AnalyticsFirebase.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", {}, arguments); };
    AnalyticsFirebase.prototype.setUserProperty = function (userPropertyName, userPropertyValue) { return core.cordova(this, "setUserProperty", {}, arguments); };
    Object.defineProperty(AnalyticsFirebase.prototype, "DEFAULT_EVENTS", {
        get: function () { return core.cordovaPropertyGet(this, "DEFAULT_EVENTS"); },
        set: function (value) { core.cordovaPropertySet(this, "DEFAULT_EVENTS", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnalyticsFirebase.prototype, "DEFAULT_PARAMS", {
        get: function () { return core.cordovaPropertyGet(this, "DEFAULT_PARAMS"); },
        set: function (value) { core.cordovaPropertySet(this, "DEFAULT_PARAMS", value); },
        enumerable: false,
        configurable: true
    });
    AnalyticsFirebase.pluginName = "AnalyticsFirebase";
    AnalyticsFirebase.plugin = "cordova-plugin-analytics";
    AnalyticsFirebase.pluginRef = "analytics";
    AnalyticsFirebase.repo = "https://github.com/appfeel/analytics-google";
    AnalyticsFirebase.platforms = ["Android", "iOS"];
    AnalyticsFirebase.decorators = [
        { type: core$1.Injectable }
    ];
    return AnalyticsFirebase;
}(core.AwesomeCordovaNativePlugin));

exports.AnalyticsFirebase = AnalyticsFirebase;
