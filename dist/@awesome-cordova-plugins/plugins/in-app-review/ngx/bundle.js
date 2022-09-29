'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var InAppReview = /** @class */ (function (_super) {
    tslib.__extends(InAppReview, _super);
    function InAppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReview.prototype.requestReview = function () { return core.cordova(this, "requestReview", {}, arguments); };
    InAppReview.pluginName = "InAppReview";
    InAppReview.plugin = "com.omarben.inappreview";
    InAppReview.pluginRef = "inappreview";
    InAppReview.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReview.platforms = ["iOS"];
    InAppReview.decorators = [
        { type: core$1.Injectable }
    ];
    return InAppReview;
}(core.AwesomeCordovaNativePlugin));

exports.InAppReview = InAppReview;
