'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var FirebaseCrash = /** @class */ (function (_super) {
    tslib.__extends(FirebaseCrash, _super);
    function FirebaseCrash() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrash.prototype.log = function (message) { return core.cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrash.prototype.logError = function (message) { return core.cordova(this, "logError", { "sync": true }, arguments); };
    FirebaseCrash.prototype.setUserId = function (userId) { return core.cordova(this, "setUserId", { "sync": true }, arguments); };
    FirebaseCrash.pluginName = "FirebaseCrash";
    FirebaseCrash.plugin = "cordova-plugin-firebase-crash";
    FirebaseCrash.pluginRef = "cordova.plugins.firebase.crashlytics";
    FirebaseCrash.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-crash";
    FirebaseCrash.platforms = ["Android", "iOS"];
    FirebaseCrash.decorators = [
        { type: core$1.Injectable }
    ];
    return FirebaseCrash;
}(core.AwesomeCordovaNativePlugin));

exports.FirebaseCrash = FirebaseCrash;
