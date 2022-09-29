'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var AbbyyRTR = /** @class */ (function (_super) {
    tslib.__extends(AbbyyRTR, _super);
    function AbbyyRTR() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AbbyyRTR.prototype.startTextCapture = function (options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    AbbyyRtrSdk.startTextCapture(function (result) {
                        if (result.error) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                    }, options);
                });
            }
        })();
    };
    AbbyyRTR.prototype.startDataCapture = function (options) {
        var _this = this;
        return (function () {
            if (core.checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    AbbyyRtrSdk.startDataCapture(function (result) {
                        if (result.error) {
                            reject(result);
                        }
                        else {
                            resolve(result);
                        }
                    }, options);
                });
            }
        })();
    };
    AbbyyRTR.pluginName = "AbbyyRTR";
    AbbyyRTR.plugin = "cordova-plugin-abbyy-rtr-sdk";
    AbbyyRTR.pluginRef = "AbbyyRtrSdk";
    AbbyyRTR.repo = "https://github.com/abbyysdk/RTR-SDK.Cordova";
    AbbyyRTR.install = "ionic cordova plugin add cordova-plugin-abbyy-rtr-sdk";
    AbbyyRTR.platforms = ["Android", "iOS"];
    AbbyyRTR.decorators = [
        { type: core$1.Injectable }
    ];
    return AbbyyRTR;
}(core.AwesomeCordovaNativePlugin));

exports.AbbyyRTR = AbbyyRTR;
