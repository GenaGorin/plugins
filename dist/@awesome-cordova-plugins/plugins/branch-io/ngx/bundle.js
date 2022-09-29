'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var BranchIo = /** @class */ (function (_super) {
    tslib.__extends(BranchIo, _super);
    function BranchIo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BranchIo.prototype.setDebug = function (enable) { return core.cordova(this, "setDebug", { "otherPromise": true }, arguments); };
    BranchIo.prototype.disableTracking = function (disable) { return core.cordova(this, "disableTracking", { "otherPromise": true }, arguments); };
    BranchIo.prototype.initSession = function () { return core.cordova(this, "initSession", { "otherPromise": true }, arguments); };
    BranchIo.prototype.initSessionWithCallback = function () { return core.cordova(this, "initSessionWithCallback", { "observable": true }, arguments); };
    BranchIo.prototype.setRequestMetadata = function () { return core.cordova(this, "setRequestMetadata", { "otherPromise": true }, arguments); };
    BranchIo.prototype.setCookieBasedMatching = function (linkDomain) { return core.cordova(this, "setCookieBasedMatching", { "otherPromise": true }, arguments); };
    BranchIo.prototype.getFirstReferringParams = function () { return core.cordova(this, "getFirstReferringParams", { "otherPromise": true }, arguments); };
    BranchIo.prototype.getLatestReferringParams = function () { return core.cordova(this, "getLatestReferringParams", { "otherPromise": true }, arguments); };
    BranchIo.prototype.setIdentity = function (userId) { return core.cordova(this, "setIdentity", { "otherPromise": true }, arguments); };
    BranchIo.prototype.logout = function () { return core.cordova(this, "logout", { "otherPromise": true }, arguments); };
    BranchIo.prototype.userCompletedAction = function (eventName, metaData) { return core.cordova(this, "userCompletedAction", { "otherPromise": true }, arguments); };
    BranchIo.prototype.sendCommerceEvent = function (event, metaData) { return core.cordova(this, "sendCommerceEvent", { "otherPromise": true }, arguments); };
    BranchIo.prototype.sendBranchEvent = function (event, metaData) { return core.cordova(this, "sendBranchEvent", { "otherPromise": true }, arguments); };
    BranchIo.prototype.createBranchUniversalObject = function (properties) { return core.cordova(this, "createBranchUniversalObject", { "otherPromise": true }, arguments); };
    BranchIo.prototype.loadRewards = function (bucket) { return core.cordova(this, "loadRewards", { "otherPromise": true }, arguments); };
    BranchIo.prototype.redeemRewards = function (value, bucket) { return core.cordova(this, "redeemRewards", { "otherPromise": true }, arguments); };
    BranchIo.prototype.creditHistory = function () { return core.cordova(this, "creditHistory", { "otherPromise": true }, arguments); };
    BranchIo.pluginName = "BranchIo";
    BranchIo.plugin = "branch-cordova-sdk";
    BranchIo.pluginRef = "Branch";
    BranchIo.repo = "https://github.com/BranchMetrics/cordova-ionic-phonegap-branch-deep-linking";
    BranchIo.platforms = ["iOS", "Android"];
    BranchIo.decorators = [
        { type: core$1.Injectable }
    ];
    return BranchIo;
}(core.AwesomeCordovaNativePlugin));

exports.BranchIo = BranchIo;
