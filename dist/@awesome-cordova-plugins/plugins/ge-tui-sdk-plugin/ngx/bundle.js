'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var GeTuiSdkPlugin = /** @class */ (function (_super) {
    tslib.__extends(GeTuiSdkPlugin, _super);
    function GeTuiSdkPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GeTuiSdkPlugin.prototype.callback_init = function (callback) { return core.cordova(this, "callback_init", {}, arguments); };
    GeTuiSdkPlugin.prototype.initialize = function () { return core.cordova(this, "initialize", { "sync": true }, arguments); };
    GeTuiSdkPlugin.prototype.getClientId = function () { return core.cordova(this, "getClientId", {}, arguments); };
    GeTuiSdkPlugin.prototype.getVersion = function () { return core.cordova(this, "getVersion", {}, arguments); };
    GeTuiSdkPlugin.pluginName = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.plugin = "cordova-plugin-getuisdk";
    GeTuiSdkPlugin.pluginRef = "GeTuiSdkPlugin";
    GeTuiSdkPlugin.repo = "git@github.com:GetuiLaboratory/cordova-plugin-getuisdk.git";
    GeTuiSdkPlugin.install = "cordova plugin add cordova-plugin-getuisdk --variable PUSH_APPID=your appid --variable PUSH_APPKEY=your appkey --variable PUSH_APPSECRET=your appsecret";
    GeTuiSdkPlugin.installVariables = ["PUSH_APPID", "PUSH_APPKEY", "PUSH_APPSECRET"];
    GeTuiSdkPlugin.platforms = ["Android", "iOS"];
    GeTuiSdkPlugin.decorators = [
        { type: core$1.Injectable }
    ];
    return GeTuiSdkPlugin;
}(core.AwesomeCordovaNativePlugin));

exports.GeTuiSdkPlugin = GeTuiSdkPlugin;
