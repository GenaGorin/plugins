'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var Usabilla = /** @class */ (function (_super) {
    tslib.__extends(Usabilla, _super);
    function Usabilla() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Usabilla.prototype.initialize = function (appId, customVars) { return core.cordova(this, "initialize", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.loadFeedbackForm = function (formId) { return core.cordova(this, "loadFeedbackForm", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.loadFeedbackFormWithCurrentViewScreenshot = function (formId) { return core.cordova(this, "loadFeedbackFormWithCurrentViewScreenshot", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.sendEvent = function (eventId) { return core.cordova(this, "sendEvent", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.resetCampaignData = function () { return core.cordova(this, "resetCampaignData", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.dismiss = function () { return core.cordova(this, "dismiss", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.getDefaultDataMasks = function () { return core.cordova(this, "getDefaultDataMasks", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.prototype.setDataMasking = function (masks, maskCharacter) { return core.cordova(this, "setDataMasking", { "successIndex": 0, "errorIndex": 1 }, arguments); };
    Usabilla.pluginName = "usabilla-cordova";
    Usabilla.plugin = "usabilla-cordova";
    Usabilla.pluginRef = "Usabilla";
    Usabilla.repo = "https://github.com/usabilla/usabilla-u4a-cordova";
    Usabilla.platforms = ["Android", "iOS"];
    Usabilla.decorators = [
        { type: core$1.Injectable }
    ];
    return Usabilla;
}(core.AwesomeCordovaNativePlugin));

exports.Usabilla = Usabilla;
