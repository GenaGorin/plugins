'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var BioCatch = /** @class */ (function (_super) {
    tslib.__extends(BioCatch, _super);
    function BioCatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BioCatch.prototype.start = function (customerSessionID, wupUrl, publicKey) { return core.cordova(this, "start", {}, arguments); };
    BioCatch.prototype.pause = function () { return core.cordova(this, "pause", {}, arguments); };
    BioCatch.prototype.resume = function () { return core.cordova(this, "resume", {}, arguments); };
    BioCatch.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    BioCatch.prototype.resetSession = function () { return core.cordova(this, "resetSession", {}, arguments); };
    BioCatch.prototype.changeContext = function (contextName) { return core.cordova(this, "changeContext", {}, arguments); };
    BioCatch.prototype.updateCustomerSessionID = function (customerSessionID) { return core.cordova(this, "updateCustomerSessionID", {}, arguments); };
    BioCatch.pluginName = "BioCatch";
    BioCatch.plugin = "cordova-plugin-biocatch";
    BioCatch.pluginRef = "BioCatch";
    BioCatch.repo = "https://bitbucket.org/carlos_orellana/ionic-plugin";
    BioCatch.platforms = ["iOS", "Android"];
    BioCatch.decorators = [
        { type: core$1.Injectable }
    ];
    return BioCatch;
}(core.AwesomeCordovaNativePlugin));

exports.BioCatch = BioCatch;
