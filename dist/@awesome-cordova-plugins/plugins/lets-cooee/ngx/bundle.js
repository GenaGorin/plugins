'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var Cooee = /** @class */ (function (_super) {
    tslib.__extends(Cooee, _super);
    function Cooee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cooee.prototype.sendEvent = function (eventName, eventProperties) { return core.cordova(this, "sendEvent", {}, arguments); };
    Cooee.prototype.updateUserProfile = function (userProfile) { return core.cordova(this, "updateUserProfile", {}, arguments); };
    Cooee.prototype.setCurrentScreen = function (screenName) { return core.cordova(this, "setCurrentScreen", {}, arguments); };
    Cooee.prototype.getUserID = function () { return core.cordova(this, "getUserID", {}, arguments); };
    Cooee.prototype.addCooeeCTAListener = function () { return core.cordova(this, "addCooeeCTAListener", { "eventObservable": true, "event": "onCooeeCTAListener", "element": "document" }, arguments); };
    Cooee.pluginName = "Cooee";
    Cooee.plugin = "@letscooee/cordova-plugin";
    Cooee.pluginRef = "cordova.plugins.Cooee";
    Cooee.repo = "https://github.com/letscooee/cordova-plugin-cooee";
    Cooee.install = "ionic cordova plugin add @letscooee/cordova-plugin --variable COOEE_APP_ID=appId";
    Cooee.installVariables = ["COOEE_APP_ID"];
    Cooee.platforms = ["Android", "iOS"];
    Cooee.decorators = [
        { type: core$1.Injectable }
    ];
    return Cooee;
}(core.AwesomeCordovaNativePlugin));

exports.Cooee = Cooee;
