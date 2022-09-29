'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var BiometricWrapper = /** @class */ (function (_super) {
    tslib.__extends(BiometricWrapper, _super);
    function BiometricWrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BiometricWrapper.prototype.activateIris = function (args) { return core.cordova(this, "activateIris", {}, arguments); };
    BiometricWrapper.prototype.activateFingerprint = function (args) { return core.cordova(this, "activateFingerprint", {}, arguments); };
    BiometricWrapper.pluginName = "BiometricWrapper";
    BiometricWrapper.plugin = "cordova-plugin-biometric";
    BiometricWrapper.pluginRef = "cordova.plugins.BiometricWrapper";
    BiometricWrapper.repo = "";
    BiometricWrapper.install = "";
    BiometricWrapper.installVariables = [];
    BiometricWrapper.platforms = ["Android"];
    BiometricWrapper.decorators = [
        { type: core$1.Injectable }
    ];
    return BiometricWrapper;
}(core.AwesomeCordovaNativePlugin));

exports.BiometricWrapper = BiometricWrapper;
