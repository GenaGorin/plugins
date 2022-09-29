'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var GoogleNearby = /** @class */ (function (_super) {
    tslib.__extends(GoogleNearby, _super);
    function GoogleNearby() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GoogleNearby.prototype.publish = function (message) { return core.cordova(this, "publish", {}, arguments); };
    GoogleNearby.prototype.subscribe = function () { return core.cordova(this, "subscribe", { "observable": true, "clearFunction": "unsubscribe" }, arguments); };
    GoogleNearby.pluginName = "GoogleNearby";
    GoogleNearby.plugin = "cordova-plugin-google-nearby";
    GoogleNearby.pluginRef = "window.nearby";
    GoogleNearby.repo = "https://github.com/hahahannes/cordova-plugin-google-nearby";
    GoogleNearby.install = "ionic cordova plugin add cordova-plugin-google-nearby --variable API_KEY=\"123456789\"";
    GoogleNearby.installVariables = ["API_KEY"];
    GoogleNearby.platforms = ["Android"];
    GoogleNearby.decorators = [
        { type: core$1.Injectable }
    ];
    return GoogleNearby;
}(core.AwesomeCordovaNativePlugin));

exports.GoogleNearby = GoogleNearby;
