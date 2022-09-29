'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

var DNS = /** @class */ (function (_super) {
    tslib.__extends(DNS, _super);
    function DNS() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DNS.prototype.resolve = function (hostname) { return core.cordova(this, "resolve", {}, arguments); };
    DNS.pluginName = "DNS";
    DNS.plugin = "cordova-plugin-dns";
    DNS.pluginRef = "cordova.plugins.dns";
    DNS.repo = "https://bitbucket.org/zegeba/cordova-plugin-dns";
    DNS.platforms = ["Android"];
    DNS.decorators = [
        { type: core$1.Injectable }
    ];
    return DNS;
}(core.AwesomeCordovaNativePlugin));

exports.DNS = DNS;
