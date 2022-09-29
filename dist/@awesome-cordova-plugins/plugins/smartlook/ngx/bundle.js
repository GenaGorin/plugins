'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var SmartlookSetupConfigBuilder = /** @class */ (function () {
    function SmartlookSetupConfigBuilder(smartlookAPIKey) {
        this._smartlookSetupConfig = new SmartlookSetupConfig(smartlookAPIKey);
    }
    SmartlookSetupConfigBuilder.prototype.fps = function (fps) {
        this._smartlookSetupConfig.fps = fps;
        return this;
    };
    SmartlookSetupConfigBuilder.prototype.renderingMode = function (renderingMode) {
        this._smartlookSetupConfig.renderingMode = renderingMode.getRenderingModeString();
        return this;
    };
    SmartlookSetupConfigBuilder.prototype.startNewSession = function (startNewSession) {
        this._smartlookSetupConfig.startNewSession = startNewSession;
        return this;
    };
    SmartlookSetupConfigBuilder.prototype.startNewSessionAndUser = function (startNewSessionAndUser) {
        this._smartlookSetupConfig.startNewSessionAndUser = startNewSessionAndUser;
        return this;
    };
    SmartlookSetupConfigBuilder.prototype.eventTrackingModes = function (eventTrackingModes) {
        this._smartlookSetupConfig.eventTrackingModes = eventTrackingModes.getEventTrackingModeStringArray();
        return this;
    };
    SmartlookSetupConfigBuilder.prototype.build = function () {
        return this._smartlookSetupConfig;
    };
    return SmartlookSetupConfigBuilder;
}());
var SmartlookSetupConfig = /** @class */ (function () {
    function SmartlookSetupConfig(smartlookAPIKey) {
        this.smartlookAPIKey = smartlookAPIKey;
    }
    return SmartlookSetupConfig;
}());
var SmartlookResetSession = /** @class */ (function () {
    function SmartlookResetSession(resetUser) {
        this.resetUser = resetUser;
    }
    return SmartlookResetSession;
}());
var SmartlookUserIdentifier = /** @class */ (function () {
    function SmartlookUserIdentifier(identifier, sessionProperties) {
        this.identifier = identifier;
        this.sessionProperties = sessionProperties;
    }
    return SmartlookUserIdentifier;
}());
var SmartlookEventTrackingMode = /** @class */ (function () {
    function SmartlookEventTrackingMode(eventTrackingMode) {
        this.eventTrackingMode = eventTrackingMode;
    }
    SmartlookEventTrackingMode.FULL_TRACKING = function () {
        return new SmartlookEventTrackingMode('full_tracking');
    };
    SmartlookEventTrackingMode.IGNORE_USER_INTERACTION = function () {
        return new SmartlookEventTrackingMode('ignore_user_interaction');
    };
    SmartlookEventTrackingMode.IGNORE_NAVIGATION_INTERACTION = function () {
        return new SmartlookEventTrackingMode('ignore_navigation_interaction');
    };
    SmartlookEventTrackingMode.IGNORE_RAGE_CLICKS = function () {
        return new SmartlookEventTrackingMode('ignore_rage_clicks');
    };
    SmartlookEventTrackingMode.NO_TRACKING = function () {
        return new SmartlookEventTrackingMode('no_tracking');
    };
    SmartlookEventTrackingMode.prototype.getEventTrackingModeString = function () {
        return this.eventTrackingMode;
    };
    return SmartlookEventTrackingMode;
}());
var SmartlookEventTrackingModes = /** @class */ (function () {
    function SmartlookEventTrackingModes(eventTrackingModes) {
        this.eventTrackingModes = eventTrackingModes.map(function (eventTrackingMode) {
            return eventTrackingMode.getEventTrackingModeString();
        });
    }
    SmartlookEventTrackingModes.prototype.getEventTrackingModeStringArray = function () {
        return this.eventTrackingModes;
    };
    return SmartlookEventTrackingModes;
}());
var SmartlookViewState = /** @class */ (function () {
    function SmartlookViewState() {
    }
    SmartlookViewState.START = 'start';
    SmartlookViewState.STOP = 'stop';
    return SmartlookViewState;
}());
var SmartlookNavigationEvent = /** @class */ (function () {
    function SmartlookNavigationEvent(name, viewState) {
        this.name = name;
        this.viewState = this.viewState;
    }
    return SmartlookNavigationEvent;
}());
var SmartlookCustomEvent = /** @class */ (function () {
    function SmartlookCustomEvent(name, eventProperties) {
        this.name = name;
        this.eventProperties = eventProperties;
    }
    return SmartlookCustomEvent;
}());
var SmartlookTimedCustomEventStart = /** @class */ (function () {
    function SmartlookTimedCustomEventStart(name, eventProperties) {
        this.name = name;
        this.eventProperties = eventProperties;
    }
    return SmartlookTimedCustomEventStart;
}());
var SmartlookTimedCustomEventStop = /** @class */ (function () {
    function SmartlookTimedCustomEventStop(eventId, eventProperties) {
        this.eventId = eventId;
        this.eventProperties = eventProperties;
    }
    return SmartlookTimedCustomEventStop;
}());
var SmartlookTimedCustomEventCancel = /** @class */ (function () {
    function SmartlookTimedCustomEventCancel(eventId, reason, eventProperties) {
        this.eventId = eventId;
        this.reason = reason;
        this.eventProperties = eventProperties;
    }
    return SmartlookTimedCustomEventCancel;
}());
var SmartlookGlobalEventProperties = /** @class */ (function () {
    function SmartlookGlobalEventProperties(globalEventProperties, immutable) {
        this.globalEventProperties = globalEventProperties;
        this.immutable = immutable;
    }
    return SmartlookGlobalEventProperties;
}());
var SmartlookGlobalEventProperty = /** @class */ (function () {
    function SmartlookGlobalEventProperty(key, value, immutable) {
        this.key = key;
        this.value = value;
        this.immutable = immutable;
    }
    return SmartlookGlobalEventProperty;
}());
var SmartlookGlobalEventPropertyKey = /** @class */ (function () {
    function SmartlookGlobalEventPropertyKey(key) {
        this.key = key;
    }
    return SmartlookGlobalEventPropertyKey;
}());
var SmartlookReferrer = /** @class */ (function () {
    function SmartlookReferrer(referrer, source) {
        this.referrer = referrer;
        this.source = source;
    }
    return SmartlookReferrer;
}());
var SmartlookDashboardSessionUrl = /** @class */ (function () {
    function SmartlookDashboardSessionUrl(withCurrentTimestamp) {
        this.withCurrentTimestamp = withCurrentTimestamp;
    }
    return SmartlookDashboardSessionUrl;
}());
var SmartlookRenderingMode = /** @class */ (function () {
    function SmartlookRenderingMode(renderingMode) {
        this.renderingMode = renderingMode;
    }
    SmartlookRenderingMode.NO_RENDERING = function () {
        return new SmartlookRenderingMode('no_rendering');
    };
    SmartlookRenderingMode.NATIVE = function () {
        return new SmartlookRenderingMode('native');
    };
    SmartlookRenderingMode.prototype.getRenderingModeString = function () {
        return this.renderingMode;
    };
    return SmartlookRenderingMode;
}());
var Smartlook = /** @class */ (function (_super) {
    tslib.__extends(Smartlook, _super);
    function Smartlook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Smartlook.prototype.setupAndStartRecording = function (config) { return core.cordova(this, "setupAndStartRecording", { "sync": true }, arguments); };
    Smartlook.prototype.setup = function (config) { return core.cordova(this, "setup", { "sync": true }, arguments); };
    Smartlook.prototype.startRecording = function () { return core.cordova(this, "startRecording", { "sync": true }, arguments); };
    Smartlook.prototype.stopRecording = function () { return core.cordova(this, "stopRecording", { "sync": true }, arguments); };
    Smartlook.prototype.isRecording = function () { return core.cordova(this, "isRecording", {}, arguments); };
    Smartlook.prototype.resetSession = function (resetSession) { return core.cordova(this, "resetSession", { "sync": true }, arguments); };
    Smartlook.prototype.startFullscreenSensitiveMode = function () { return core.cordova(this, "startFullscreenSensitiveMode", { "sync": true }, arguments); };
    Smartlook.prototype.stopFullscreenSensitiveMode = function () { return core.cordova(this, "stopFullscreenSensitiveMode", { "sync": true }, arguments); };
    Smartlook.prototype.isFullscreenSensitiveModeActive = function () { return core.cordova(this, "isFullscreenSensitiveModeActive", {}, arguments); };
    Smartlook.prototype.setUserIdentifier = function (identifier) { return core.cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    Smartlook.prototype.setEventTrackingMode = function (eventTrackingMode) { return core.cordova(this, "setEventTrackingMode", { "sync": true }, arguments); };
    Smartlook.prototype.setEventTrackingModes = function (eventTrackingModes) { return core.cordova(this, "setEventTrackingModes", { "sync": true }, arguments); };
    Smartlook.prototype.trackNavigationEvent = function (navigationEvent) { return core.cordova(this, "trackNavigationEvent", { "sync": true }, arguments); };
    Smartlook.prototype.startTimedCustomEvent = function (timedEvent) { return core.cordova(this, "startTimedCustomEvent", {}, arguments); };
    Smartlook.prototype.stopTimedCustomEvent = function (timedEvent) { return core.cordova(this, "stopTimedCustomEvent", { "sync": true }, arguments); };
    Smartlook.prototype.cancelTimedCustomEvent = function (timedEvent) { return core.cordova(this, "cancelTimedCustomEvent", { "sync": true }, arguments); };
    Smartlook.prototype.trackCustomEvent = function (event) { return core.cordova(this, "trackCustomEvent", { "sync": true }, arguments); };
    Smartlook.prototype.setGlobalEventProperties = function (properties) { return core.cordova(this, "setGlobalEventProperties", { "sync": true }, arguments); };
    Smartlook.prototype.setGlobalEventProperty = function (property) { return core.cordova(this, "setGlobalEventProperty", { "sync": true }, arguments); };
    Smartlook.prototype.removeGlobalEventProperty = function (property) { return core.cordova(this, "removeGlobalEventProperty", { "sync": true }, arguments); };
    Smartlook.prototype.removeAllGlobalEventProperties = function () { return core.cordova(this, "removeAllGlobalEventProperties", { "sync": true }, arguments); };
    Smartlook.prototype.setReferrer = function (referrer) { return core.cordova(this, "setReferrer", { "sync": true }, arguments); };
    Smartlook.prototype.getDashboardSessionUrl = function (smartlookDashboardSessionUrl) { return core.cordova(this, "getDashboardSessionUrl", {}, arguments); };
    Smartlook.prototype.getDashboardVisitorUrl = function () { return core.cordova(this, "getDashboardVisitorUrl", {}, arguments); };
    Smartlook.prototype.registerIntegrationListener = function (integrationListener) { return core.cordova(this, "registerIntegrationListener", { "sync": true }, arguments); };
    Smartlook.prototype.setRenderingMode = function (renderingMode) { return core.cordova(this, "setRenderingMode", { "sync": true }, arguments); };
    Smartlook.prototype.unregisterIntegrationListener = function () { return core.cordova(this, "unregisterIntegrationListener", { "sync": true }, arguments); };
    Smartlook.pluginName = "Smartlook";
    Smartlook.plugin = "https://github.com/smartlook/cordova-smartlook.git";
    Smartlook.pluginRef = "cordova.plugins.SmartlookPlugin";
    Smartlook.repo = "https://github.com/smartlook/cordova-smartlook.git";
    Smartlook.platforms = ["Android", "iOS"];
    Smartlook.decorators = [
        { type: core$1.Injectable }
    ];
    return Smartlook;
}(core.AwesomeCordovaNativePlugin));

exports.Smartlook = Smartlook;
exports.SmartlookCustomEvent = SmartlookCustomEvent;
exports.SmartlookDashboardSessionUrl = SmartlookDashboardSessionUrl;
exports.SmartlookEventTrackingMode = SmartlookEventTrackingMode;
exports.SmartlookEventTrackingModes = SmartlookEventTrackingModes;
exports.SmartlookGlobalEventProperties = SmartlookGlobalEventProperties;
exports.SmartlookGlobalEventProperty = SmartlookGlobalEventProperty;
exports.SmartlookGlobalEventPropertyKey = SmartlookGlobalEventPropertyKey;
exports.SmartlookNavigationEvent = SmartlookNavigationEvent;
exports.SmartlookReferrer = SmartlookReferrer;
exports.SmartlookRenderingMode = SmartlookRenderingMode;
exports.SmartlookResetSession = SmartlookResetSession;
exports.SmartlookSetupConfig = SmartlookSetupConfig;
exports.SmartlookSetupConfigBuilder = SmartlookSetupConfigBuilder;
exports.SmartlookTimedCustomEventCancel = SmartlookTimedCustomEventCancel;
exports.SmartlookTimedCustomEventStart = SmartlookTimedCustomEventStart;
exports.SmartlookTimedCustomEventStop = SmartlookTimedCustomEventStop;
exports.SmartlookUserIdentifier = SmartlookUserIdentifier;
exports.SmartlookViewState = SmartlookViewState;
