'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var ServiceDiscovery = /** @class */ (function (_super) {
    tslib.__extends(ServiceDiscovery, _super);
    function ServiceDiscovery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ServiceDiscovery.prototype.getNetworkServices = function (service) { return core.cordova(this, "getNetworkServices", {}, arguments); };
    ServiceDiscovery.pluginName = "ServiceDiscovery";
    ServiceDiscovery.plugin = "cordova-plugin-discovery";
    ServiceDiscovery.pluginRef = "serviceDiscovery";
    ServiceDiscovery.repo = "https://github.com/scottdermott/cordova-plugin-discovery";
    ServiceDiscovery.platforms = ["Android", "iOS"];
    ServiceDiscovery.decorators = [
        { type: core$1.Injectable }
    ];
    return ServiceDiscovery;
}(core.AwesomeCordovaNativePlugin));

exports.ServiceDiscovery = ServiceDiscovery;
