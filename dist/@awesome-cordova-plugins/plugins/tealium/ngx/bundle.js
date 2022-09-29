'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

exports.Collectors = void 0;
(function (Collectors) {
    Collectors["AppData"] = "AppData";
    Collectors["Connectivity"] = "Connectivity";
    Collectors["DeviceData"] = "DeviceData";
    Collectors["Lifecycle"] = "Lifecycle";
})(exports.Collectors || (exports.Collectors = {}));
exports.Dispatchers = void 0;
(function (Dispatchers) {
    Dispatchers["Collect"] = "Collect";
    Dispatchers["TagManagement"] = "TagManagement";
    Dispatchers["RemoteCommands"] = "RemoteCommands";
})(exports.Dispatchers || (exports.Dispatchers = {}));
exports.Expiry = void 0;
(function (Expiry) {
    Expiry["forever"] = "forever";
    Expiry["untilRestart"] = "untilRestart";
    Expiry["session"] = "session";
})(exports.Expiry || (exports.Expiry = {}));
exports.ConsentPolicy = void 0;
(function (ConsentPolicy) {
    ConsentPolicy["ccpa"] = "ccpa";
    ConsentPolicy["gdpr"] = "gdpr";
})(exports.ConsentPolicy || (exports.ConsentPolicy = {}));
var TealiumView = /** @class */ (function () {
    function TealiumView(viewName, dataLayer) {
        this.viewName = viewName;
        this.dataLayer = dataLayer;
        this.type = 'view';
    }
    TealiumView.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['viewName'] = this.viewName;
        return JSON.stringify(dictionary);
    };
    return TealiumView;
}());
var TealiumEvent = /** @class */ (function () {
    function TealiumEvent(eventName, dataLayer) {
        this.eventName = eventName;
        this.dataLayer = dataLayer;
        this.type = 'event';
    }
    TealiumEvent.prototype.toJson = function () {
        var dictionary = {};
        dictionary['type'] = this.type;
        dictionary['dataLayer'] = {};
        this.dataLayer.forEach(function (k, v) {
            dictionary['dataLayer'][k] = v;
        });
        dictionary['type'] = this.type;
        dictionary['eventName'] = this.eventName;
        return JSON.stringify(dictionary);
    };
    return TealiumEvent;
}());
var ConsentExpiry = /** @class */ (function () {
    function ConsentExpiry(time, unit) {
        this.time = time;
        this.unit = unit;
    }
    return ConsentExpiry;
}());
exports.TimeUnit = void 0;
(function (TimeUnit) {
    TimeUnit["minutes"] = "minutes";
    TimeUnit["hours"] = "hours";
    TimeUnit["days"] = "days";
    TimeUnit["months"] = "months";
})(exports.TimeUnit || (exports.TimeUnit = {}));
exports.ConsentStatus = void 0;
(function (ConsentStatus) {
    ConsentStatus["consented"] = "consented";
    ConsentStatus["notConsented"] = "notConsented";
    ConsentStatus["unknown"] = "unknown";
})(exports.ConsentStatus || (exports.ConsentStatus = {}));
exports.LogLevel = void 0;
(function (LogLevel) {
    LogLevel["dev"] = "dev";
    LogLevel["qa"] = "qa";
    LogLevel["prod"] = "prod";
    LogLevel["silent"] = "silent";
})(exports.LogLevel || (exports.LogLevel = {}));
exports.TealiumEnvironment = void 0;
(function (TealiumEnvironment) {
    TealiumEnvironment["dev"] = "dev";
    TealiumEnvironment["qa"] = "qa";
    TealiumEnvironment["prod"] = "prod";
})(exports.TealiumEnvironment || (exports.TealiumEnvironment = {}));
exports.ConsentCategories = void 0;
(function (ConsentCategories) {
    ConsentCategories["analytics"] = "analytics";
    ConsentCategories["affiliates"] = "affiliates";
    ConsentCategories["displayAds"] = "display_ads";
    ConsentCategories["email"] = "email";
    ConsentCategories["personalization"] = "personalization";
    ConsentCategories["search"] = "search";
    ConsentCategories["social"] = "social";
    ConsentCategories["bigData"] = "big_data";
    ConsentCategories["mobile"] = "mobile";
    ConsentCategories["engagement"] = "engagement";
    ConsentCategories["monitoring"] = "monitoring";
    ConsentCategories["crm"] = "crm";
    ConsentCategories["cdp"] = "cdp";
    ConsentCategories["cookieMatch"] = "cookiematch";
    ConsentCategories["misc"] = "misc";
})(exports.ConsentCategories || (exports.ConsentCategories = {}));
var Tealium = /** @class */ (function (_super) {
    tslib.__extends(Tealium, _super);
    function Tealium() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tealium.prototype.initialize = function (config, callback) { return core.cordova(this, "initialize", {}, arguments); };
    Tealium.prototype.track = function (dispatch) { return core.cordova(this, "track", {}, arguments); };
    Tealium.prototype.terminateInstance = function () { return core.cordova(this, "terminateInstance", {}, arguments); };
    Tealium.prototype.addData = function (data, expiry) { return core.cordova(this, "addData", {}, arguments); };
    Tealium.prototype.getData = function (key, callback) { return core.cordova(this, "getData", {}, arguments); };
    Tealium.prototype.removeData = function (keys) { return core.cordova(this, "removeData", {}, arguments); };
    Tealium.prototype.getConsentStatus = function (callback) { return core.cordova(this, "getConsentStatus", {}, arguments); };
    Tealium.prototype.setConsentStatus = function (consentStatus) { return core.cordova(this, "setConsentStatus", {}, arguments); };
    Tealium.prototype.getConsentCategories = function (callback) { return core.cordova(this, "getConsentCategories", {}, arguments); };
    Tealium.prototype.setConsentCategories = function (categories) { return core.cordova(this, "setConsentCategories", {}, arguments); };
    Tealium.prototype.joinTrace = function (id) { return core.cordova(this, "joinTrace", {}, arguments); };
    Tealium.prototype.leaveTrace = function () { return core.cordova(this, "leaveTrace", {}, arguments); };
    Tealium.prototype.getVisitorId = function (callback) { return core.cordova(this, "getVisitorId", {}, arguments); };
    Tealium.prototype.setVisitorServiceListener = function (callback) { return core.cordova(this, "setVisitorServiceListener", {}, arguments); };
    Tealium.prototype.setConsentExpiryListener = function (callback) { return core.cordova(this, "setConsentExpiryListener", {}, arguments); };
    Tealium.prototype.addRemoteCommand = function (id, callback) { return core.cordova(this, "addRemoteCommand", {}, arguments); };
    Tealium.prototype.removeRemoteCommand = function (id) { return core.cordova(this, "removeRemoteCommand", {}, arguments); };
    Tealium.prototype.removeListeners = function () { return core.cordova(this, "removeListeners", {}, arguments); };
    Tealium.pluginName = "Tealium";
    Tealium.plugin = "tealium-cordova-plugin";
    Tealium.pluginRef = "tealium";
    Tealium.repo = "https://github.com/Tealium/cordova-plugin";
    Tealium.install = "";
    Tealium.installVariables = [];
    Tealium.platforms = ["Android", "iOS"];
    Tealium.decorators = [
        { type: core$1.Injectable }
    ];
    return Tealium;
}(core.AwesomeCordovaNativePlugin));

exports.ConsentExpiry = ConsentExpiry;
exports.Tealium = Tealium;
exports.TealiumEvent = TealiumEvent;
exports.TealiumView = TealiumView;
