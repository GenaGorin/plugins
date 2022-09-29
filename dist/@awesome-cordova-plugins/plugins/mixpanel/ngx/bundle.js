'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Mixpanel = /** @class */ (function (_super) {
    tslib.__extends(Mixpanel, _super);
    function Mixpanel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mixpanel.prototype.alias = function (aliasId, originalId) { return core.cordova(this, "alias", {}, arguments); };
    Mixpanel.prototype.distinctId = function () { return core.cordova(this, "distinctId", {}, arguments); };
    Mixpanel.prototype.flush = function () { return core.cordova(this, "flush", {}, arguments); };
    Mixpanel.prototype.identify = function (distinctId, usePeople) { return core.cordova(this, "identify", {}, arguments); };
    Mixpanel.prototype.init = function (token) { return core.cordova(this, "init", {}, arguments); };
    Mixpanel.prototype.getSuperProperties = function () { return core.cordova(this, "getSuperProperties", {}, arguments); };
    Mixpanel.prototype.registerSuperProperties = function (superProperties) { return core.cordova(this, "registerSuperProperties", {}, arguments); };
    Mixpanel.prototype.registerSuperPropertiesOnce = function (superProperties) { return core.cordova(this, "registerSuperPropertiesOnce", {}, arguments); };
    Mixpanel.prototype.unregisterSuperProperty = function (superPropertyName) { return core.cordova(this, "unregisterSuperProperty", {}, arguments); };
    Mixpanel.prototype.reset = function () { return core.cordova(this, "reset", {}, arguments); };
    Mixpanel.prototype.timeEvent = function (eventName) { return core.cordova(this, "timeEvent", {}, arguments); };
    Mixpanel.prototype.track = function (eventName, eventProperties) { return core.cordova(this, "track", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    Mixpanel.pluginName = "Mixpanel";
    Mixpanel.plugin = "cordova-plugin-mixpanel";
    Mixpanel.pluginRef = "mixpanel";
    Mixpanel.repo = "https://github.com/samzilverberg/cordova-mixpanel-plugin";
    Mixpanel.platforms = ["Android", "Browser", "iOS"];
    Mixpanel.decorators = [
        { type: core$1.Injectable }
    ];
    return Mixpanel;
}(core.AwesomeCordovaNativePlugin));
var MixpanelPeople = /** @class */ (function (_super) {
    tslib.__extends(MixpanelPeople, _super);
    function MixpanelPeople() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MixpanelPeople.prototype.append = function (appendObject) { return core.cordova(this, "append", {}, arguments); };
    MixpanelPeople.prototype.deleteUser = function () { return core.cordova(this, "deleteUser", {}, arguments); };
    MixpanelPeople.prototype.identify = function (distinctId) { return core.cordova(this, "identify", {}, arguments); };
    MixpanelPeople.prototype.increment = function (peopleProperties) { return core.cordova(this, "increment", {}, arguments); };
    MixpanelPeople.prototype.setPushId = function (pushId) { return core.cordova(this, "setPushId", {}, arguments); };
    MixpanelPeople.prototype.set = function (peopleProperties) { return core.cordova(this, "set", {}, arguments); };
    MixpanelPeople.prototype.setOnce = function (peopleProperties) { return core.cordova(this, "setOnce", {}, arguments); };
    MixpanelPeople.prototype.trackCharge = function (amount, chargeProperties) { return core.cordova(this, "trackCharge", {}, arguments); };
    MixpanelPeople.prototype.unset = function (propertiesArray) { return core.cordova(this, "unset", {}, arguments); };
    MixpanelPeople.prototype.union = function (unionObject) { return core.cordova(this, "union", {}, arguments); };
    MixpanelPeople.plugin = "cordova-plugin-mixpanel";
    MixpanelPeople.pluginRef = "mixpanel.people";
    MixpanelPeople.pluginName = "Mixpanel";
    MixpanelPeople.decorators = [
        { type: core$1.Injectable }
    ];
    return MixpanelPeople;
}(core.AwesomeCordovaNativePlugin));

exports.Mixpanel = Mixpanel;
exports.MixpanelPeople = MixpanelPeople;
