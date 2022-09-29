'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var SpotifyAuth = /** @class */ (function (_super) {
    tslib.__extends(SpotifyAuth, _super);
    function SpotifyAuth() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SpotifyAuth.prototype.authorize = function (cfg) { return core.cordova(this, "authorize", { "sync": false }, arguments); };
    SpotifyAuth.prototype.forget = function () { return core.cordova(this, "forget", { "sync": true }, arguments); };
    SpotifyAuth.pluginName = "SpotifyAuth";
    SpotifyAuth.plugin = "cordova-spotify-oauth";
    SpotifyAuth.pluginRef = "cordova.plugins.spotifyAuth";
    SpotifyAuth.repo = "https://github.com/Festify/cordova-spotify-oauth";
    SpotifyAuth.install = "ionic cordova plugin add cordova-spotify-oauth --variable LOCAL_STORAGE_KEY=\"SpotifyOAuthData\"";
    SpotifyAuth.installVariables = ["LOCAL_STORAGE_KEY"];
    SpotifyAuth.platforms = ["Android", "iOS"];
    SpotifyAuth.decorators = [
        { type: core$1.Injectable }
    ];
    return SpotifyAuth;
}(core.AwesomeCordovaNativePlugin));

exports.SpotifyAuth = SpotifyAuth;
