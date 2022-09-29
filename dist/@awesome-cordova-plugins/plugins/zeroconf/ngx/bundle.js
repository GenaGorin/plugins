'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var Zeroconf = /** @class */ (function (_super) {
    tslib.__extends(Zeroconf, _super);
    function Zeroconf() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zeroconf.prototype.getHostname = function () { return core.cordova(this, "getHostname", {}, arguments); };
    Zeroconf.prototype.register = function (type, domain, name, port, txtRecord) { return core.cordova(this, "register", {}, arguments); };
    Zeroconf.prototype.unregister = function (type, domain, name) { return core.cordova(this, "unregister", {}, arguments); };
    Zeroconf.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    Zeroconf.prototype.watch = function (type, domain) { return core.cordova(this, "watch", { "observable": true, "clearFunction": "unwatch", "clearWithArgs": true }, arguments); };
    Zeroconf.prototype.unwatch = function (type, domain) { return core.cordova(this, "unwatch", {}, arguments); };
    Zeroconf.prototype.close = function () { return core.cordova(this, "close", {}, arguments); };
    Zeroconf.prototype.reInit = function () { return core.cordova(this, "reInit", {}, arguments); };
    Zeroconf.pluginName = "Zeroconf";
    Zeroconf.plugin = "cordova-plugin-zeroconf";
    Zeroconf.pluginRef = "cordova.plugins.zeroconf";
    Zeroconf.repo = "https://github.com/becvert/cordova-plugin-zeroconf";
    Zeroconf.platforms = ["Android", "iOS"];
    Zeroconf.decorators = [
        { type: core$1.Injectable }
    ];
    return Zeroconf;
}(core.AwesomeCordovaNativePlugin));

exports.Zeroconf = Zeroconf;
