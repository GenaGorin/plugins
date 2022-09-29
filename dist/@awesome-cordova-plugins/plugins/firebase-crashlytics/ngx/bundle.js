'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var FirebaseCrashlytics = /** @class */ (function (_super) {
    tslib.__extends(FirebaseCrashlytics, _super);
    function FirebaseCrashlytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashlytics.prototype.initialise = function () { return core.cordova(this, "initialise", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.crash = function () { return core.cordova(this, "crash", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.logPriority = function (priority, tag, message) { return core.cordova(this, "logPriority", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.log = function (message) { return core.cordova(this, "log", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.logException = function (message) { return core.cordova(this, "logException", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setString = function (key, value) { return core.cordova(this, "setString", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setBool = function (key, value) { return core.cordova(this, "setBool", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setDouble = function (key, value) { return core.cordova(this, "setDouble", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setFloat = function (key, value) { return core.cordova(this, "setFloat", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setInt = function (key, value) { return core.cordova(this, "setInt", { "sync": true }, arguments); };
    FirebaseCrashlytics.prototype.setUserIdentifier = function (identifier) { return core.cordova(this, "setUserIdentifier", { "sync": true }, arguments); };
    FirebaseCrashlytics.pluginName = "FirebaseCrashlytics";
    FirebaseCrashlytics.plugin = "cordova-plugin-firebase-crashlytics";
    FirebaseCrashlytics.pluginRef = "FirebaseCrashlytics";
    FirebaseCrashlytics.repo = "https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics";
    FirebaseCrashlytics.install = "ionic cordova plugin add cordova-plugin-firebase-crashlytics --variable ANDROID_FIREBASE_CORE_VERSION=16.0.0";
    FirebaseCrashlytics.installVariables = ["ANDROID_FIREBASE_CORE_VERSION"];
    FirebaseCrashlytics.platforms = ["Android", "iOS"];
    FirebaseCrashlytics.decorators = [
        { type: core$1.Injectable }
    ];
    return FirebaseCrashlytics;
}(core.AwesomeCordovaNativePlugin));

exports.FirebaseCrashlytics = FirebaseCrashlytics;
