'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

var LaunchReview = /** @class */ (function (_super) {
    tslib.__extends(LaunchReview, _super);
    function LaunchReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LaunchReview.prototype.launch = function (appId) { return core.cordova(this, "launch", { "platforms": ["Android", "iOS"], "callbackOrder": "reverse" }, arguments); };
    LaunchReview.prototype.rating = function () { return core.cordova(this, "rating", { "observable": true }, arguments); };
    LaunchReview.prototype.isRatingSupported = function () { return core.cordova(this, "isRatingSupported", { "platforms": ["Android", "iOS"], "sync": true }, arguments); };
    LaunchReview.pluginName = "LaunchReview";
    LaunchReview.plugin = "cordova-launch-review";
    LaunchReview.pluginRef = "LaunchReview";
    LaunchReview.repo = "https://github.com/dpa99c/cordova-launch-review";
    LaunchReview.platforms = ["Android", "iOS"];
    LaunchReview.decorators = [
        { type: core$1.Injectable }
    ];
    return LaunchReview;
}(core.AwesomeCordovaNativePlugin));

exports.LaunchReview = LaunchReview;
