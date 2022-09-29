'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');

var AllInOneSDK = /** @class */ (function (_super) {
    tslib.__extends(AllInOneSDK, _super);
    function AllInOneSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllInOneSDK.prototype.startTransaction = function (options) { return core.cordova(this, "startTransaction", {}, arguments); };
    AllInOneSDK.pluginName = "AllInOneSDK";
    AllInOneSDK.plugin = "cordova-paytm-allinonesdk";
    AllInOneSDK.pluginRef = "AllInOneSDK";
    AllInOneSDK.repo = "https://github.com/paytm/paytm-allinonesdk-ionic-cordova.git";
    AllInOneSDK.platforms = ["Android", "iOS"];
    return AllInOneSDK;
}(core.AwesomeCordovaNativePlugin));

exports.AllInOneSDK = AllInOneSDK;
