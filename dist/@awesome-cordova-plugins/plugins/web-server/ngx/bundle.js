'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var WebServer = /** @class */ (function (_super) {
    tslib.__extends(WebServer, _super);
    function WebServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebServer.prototype.start = function (port) { return core.cordova(this, "start", { "callbackOrder": "reverse" }, arguments); };
    WebServer.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    WebServer.prototype.onRequest = function () { return core.cordova(this, "onRequest", { "callbackOrder": "reverse", "observable": true, "clearFunction": "stop" }, arguments); };
    WebServer.prototype.sendResponse = function (requestId, responseObject) { return core.cordova(this, "sendResponse", {}, arguments); };
    WebServer.pluginName = "WebServer";
    WebServer.plugin = "cordova-plugin-webserver2";
    WebServer.pluginRef = "window.webserver";
    WebServer.repo = "https://github.com/nguyenthanh1995/cordova-plugin-webserver2.git";
    WebServer.platforms = ["Android", "iOS"];
    WebServer.decorators = [
        { type: core$1.Injectable }
    ];
    return WebServer;
}(core.AwesomeCordovaNativePlugin));

exports.WebServer = WebServer;
