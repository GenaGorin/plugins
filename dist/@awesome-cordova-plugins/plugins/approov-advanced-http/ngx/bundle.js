'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var ApproovHttp = /** @class */ (function (_super) {
    tslib.__extends(ApproovHttp, _super);
    function ApproovHttp() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ApproovHttp.prototype.getBasicAuthHeader = function (username, password) { return core.cordova(this, "getBasicAuthHeader", { "sync": true }, arguments); };
    ApproovHttp.prototype.useBasicAuth = function (username, password) { return core.cordova(this, "useBasicAuth", { "sync": true }, arguments); };
    ApproovHttp.prototype.getHeaders = function (host) { return core.cordova(this, "getHeaders", { "sync": true }, arguments); };
    ApproovHttp.prototype.setHeader = function (host, header, value) { return core.cordova(this, "setHeader", { "sync": true }, arguments); };
    ApproovHttp.prototype.getDataSerializer = function () { return core.cordova(this, "getDataSerializer", { "sync": true }, arguments); };
    ApproovHttp.prototype.setDataSerializer = function (serializer) { return core.cordova(this, "setDataSerializer", { "sync": true }, arguments); };
    ApproovHttp.prototype.setCookie = function (url, cookie) { return core.cordova(this, "setCookie", { "sync": true }, arguments); };
    ApproovHttp.prototype.clearCookies = function () { return core.cordova(this, "clearCookies", { "sync": true }, arguments); };
    ApproovHttp.prototype.removeCookies = function (url, cb) { return core.cordova(this, "removeCookies", { "sync": true }, arguments); };
    ApproovHttp.prototype.getCookieString = function (url) { return core.cordova(this, "getCookieString", { "sync": true }, arguments); };
    ApproovHttp.prototype.getRequestTimeout = function () { return core.cordova(this, "getRequestTimeout", { "sync": true }, arguments); };
    ApproovHttp.prototype.setRequestTimeout = function (timeout) { return core.cordova(this, "setRequestTimeout", { "sync": true }, arguments); };
    ApproovHttp.prototype.getFollowRedirect = function () { return core.cordova(this, "getFollowRedirect", { "sync": true }, arguments); };
    ApproovHttp.prototype.setFollowRedirect = function (follow) { return core.cordova(this, "setFollowRedirect", { "sync": true }, arguments); };
    ApproovHttp.prototype.setServerTrustMode = function (mode) { return core.cordova(this, "setServerTrustMode", {}, arguments); };
    ApproovHttp.prototype.post = function (url, body, headers) { return core.cordova(this, "post", {}, arguments); };
    ApproovHttp.prototype.postSync = function (url, body, headers, success, failure) { return core.cordova(this, "post", { "methodName": "post", "sync": true }, arguments); };
    ApproovHttp.prototype.get = function (url, parameters, headers) { return core.cordova(this, "get", {}, arguments); };
    ApproovHttp.prototype.getSync = function (url, parameters, headers, success, failure) { return core.cordova(this, "get", { "methodName": "get", "sync": true }, arguments); };
    ApproovHttp.prototype.put = function (url, body, headers) { return core.cordova(this, "put", {}, arguments); };
    ApproovHttp.prototype.putSync = function (url, body, headers, success, failure) { return core.cordova(this, "put", { "methodName": "put", "sync": true }, arguments); };
    ApproovHttp.prototype.patch = function (url, body, headers) { return core.cordova(this, "patch", {}, arguments); };
    ApproovHttp.prototype.patchSync = function (url, body, headers, success, failure) { return core.cordova(this, "patch", { "methodName": "patch", "sync": true }, arguments); };
    ApproovHttp.prototype.delete = function (url, parameters, headers) { return core.cordova(this, "delete", {}, arguments); };
    ApproovHttp.prototype.deleteSync = function (url, parameters, headers, success, failure) { return core.cordova(this, "delete", { "methodName": "delete", "sync": true }, arguments); };
    ApproovHttp.prototype.head = function (url, parameters, headers) { return core.cordova(this, "head", {}, arguments); };
    ApproovHttp.prototype.headSync = function (url, parameters, headers, success, failure) { return core.cordova(this, "head", { "methodName": "head", "sync": true }, arguments); };
    ApproovHttp.prototype.options = function (url, parameters, headers) { return core.cordova(this, "options", {}, arguments); };
    ApproovHttp.prototype.optionsSync = function (url, parameters, headers, success, failure) { return core.cordova(this, "options", { "methodName": "options", "sync": true }, arguments); };
    ApproovHttp.prototype.uploadFile = function (url, body, headers, filePath, name) { return core.cordova(this, "uploadFile", {}, arguments); };
    ApproovHttp.prototype.uploadFileSync = function (url, body, headers, filePath, name, success, failure) { return core.cordova(this, "uploadFile", { "methodName": "uploadFile", "sync": true }, arguments); };
    ApproovHttp.prototype.downloadFile = function (url, body, headers, filePath) { return core.cordova(this, "downloadFile", {}, arguments); };
    ApproovHttp.prototype.downloadFileSync = function (url, body, headers, filePath, success, failure) { return core.cordova(this, "downloadFile", { "methodName": "downloadFile", "sync": true }, arguments); };
    ApproovHttp.prototype.sendRequest = function (url, options) { return core.cordova(this, "sendRequest", {}, arguments); };
    ApproovHttp.prototype.sendRequestSync = function (url, options, success, failure) { return core.cordova(this, "sendRequest", { "methodName": "sendRequest", "sync": true }, arguments); };
    ApproovHttp.prototype.abort = function (requestId) { return core.cordova(this, "abort", {}, arguments); };
    ApproovHttp.prototype.initializeApproov = function () { return core.cordova(this, "initializeApproov", { "sync": true }, arguments); };
    ApproovHttp.prototype.approovSetDataHashInToken = function (dataHash) { return core.cordova(this, "approovSetDataHashInToken", { "sync": true }, arguments); };
    ApproovHttp.prototype.approovSetBindingHeader = function (header) { return core.cordova(this, "approovSetBindingHeader", { "sync": true }, arguments); };
    ApproovHttp.prototype.getApproovLoggableToken = function (host) { return core.cordova(this, "getApproovLoggableToken", {}, arguments); };
    Object.defineProperty(ApproovHttp.prototype, "ErrorCode", {
        get: function () { return core.cordovaPropertyGet(this, "ErrorCode"); },
        set: function (value) { core.cordovaPropertySet(this, "ErrorCode", value); },
        enumerable: false,
        configurable: true
    });
    ApproovHttp.pluginName = "ApproovHttp";
    ApproovHttp.plugin = "cordova-approov-advanced-http";
    ApproovHttp.pluginRef = "cordova.plugin.ApproovHttp";
    ApproovHttp.repo = "https://github.com/approov/quickstart-ionic-advancedhttp";
    ApproovHttp.platforms = ["Android", "iOS"];
    ApproovHttp.decorators = [
        { type: core$1.Injectable }
    ];
    return ApproovHttp;
}(core.AwesomeCordovaNativePlugin));

exports.ApproovHttp = ApproovHttp;
