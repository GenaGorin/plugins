'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var hypertrackIonicPluginVersion = "0.2.0";
var HyperTrackPlugin = /** @class */ (function (_super) {
    tslib.__extends(HyperTrackPlugin, _super);
    function HyperTrackPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPlugin.prototype.initialize = function (publishableKey) { return core.cordova(this, "initialize", {}, arguments); };
    HyperTrackPlugin.prototype.getBlockers = function () { return core.cordova(this, "getBlockers", {}, arguments); };
    HyperTrackPlugin.prototype.enableDebugLogging = function () { return core.cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPlugin.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.pluginRef = "hypertrack";
    HyperTrackPlugin.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPlugin.platforms = ["Android, iOS"];
    HyperTrackPlugin.decorators = [
        { type: core$1.Injectable }
    ];
    return HyperTrackPlugin;
}(core.AwesomeCordovaNativePlugin));
var CoordinatesValidationError = /** @class */ (function (_super) {
    tslib.__extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
var Coordinates = /** @class */ (function () {
    function Coordinates(latitude, longitude) {
        var _this = this;
        this.latitude = latitude;
        this.longitude = longitude;
        this.toString = function () {
            return JSON.stringify(_this);
        };
        if (latitude < -90.0 || latitude > 90.0 || longitude < -180.0 || longitude > 180.0) {
            throw new CoordinatesValidationError('latitude and longitude should be of correct values');
        }
    }
    return Coordinates;
}());
exports.LocationResultType = void 0;
(function (LocationResultType) {
    LocationResultType[LocationResultType["LOCATION"] = 0] = "LOCATION";
    LocationResultType[LocationResultType["OUTAGE"] = 1] = "OUTAGE";
})(exports.LocationResultType || (exports.LocationResultType = {}));
exports.Outage = void 0;
(function (Outage) {
    Outage[Outage["MISSING_LOCATION_PERMISSION"] = 0] = "MISSING_LOCATION_PERMISSION";
    Outage[Outage["MISSING_ACTIVITY_PERMISSION"] = 1] = "MISSING_ACTIVITY_PERMISSION";
    Outage[Outage["LOCATION_SERVICE_DISABLED"] = 2] = "LOCATION_SERVICE_DISABLED";
    Outage[Outage["NOT_TRACKING"] = 3] = "NOT_TRACKING";
    Outage[Outage["START_HAS_NOT_FINISHED"] = 4] = "START_HAS_NOT_FINISHED";
    Outage[Outage["NO_GPS_SIGNAL"] = 5] = "NO_GPS_SIGNAL";
    Outage[Outage["RESTART_REQUIRED"] = 6] = "RESTART_REQUIRED";
})(exports.Outage || (exports.Outage = {}));
var HyperTrack = /** @class */ (function () {
    function HyperTrack(cordovaInstanceHandle) {
        this.cordovaInstanceHandle = cordovaInstanceHandle;
    }
    /** Enables debug log in native HyperTrack SDK. */
    HyperTrack.enableDebugLogging = function () {
        new HyperTrackPlugin().enableDebugLogging();
    };
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     *
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    HyperTrack.initialize = function (publishableKey) {
        console.log("Hypertrack Ionic plugin version " + hypertrackIonicPluginVersion);
        return new Promise(function (resolve, reject) {
            new HyperTrackPlugin()
                .initialize(publishableKey)
                .then(function (cordovaInstance) {
                resolve(new HyperTrack(cordovaInstance));
            })
                .catch(function (err) { return reject(err); });
        });
    };
    /**
     * Get the list of blockers that needs to be resolved for reliable tracking.
     *
     * @see {Blocker}
     */
    HyperTrack.getBlockers = function () {
        return new HyperTrackPlugin().getBlockers();
    };
    /** Resolves device ID that could be used to identify the device. */
    HyperTrack.prototype.getDeviceId = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getDeviceId(function (deviceId) { return resolve(deviceId); }, function (err) { return reject(err); });
        });
    };
    /** Resolves to true if tracking service is running and false otherwise */
    HyperTrack.prototype.isRunning = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.isRunning(function (isRunning) { return resolve(isRunning); }, function (err) { return reject(err); });
        });
    };
    /**
     * Sets device name that could be used to identify the device in HyperTrack dashboard
     *
     * @param name
     */
    HyperTrack.prototype.setDeviceName = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceName(name, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Use this to set additional properties, like segments, teams etc.
     *
     * @param metadata key-value pais of properties.
     */
    HyperTrack.prototype.setDeviceMetadata = function (metadata) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setDeviceMetadata(metadata, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Updates title and text in persistent notification, that appears when tracking is active.
     *
     * @param title
     * @param message
     */
    HyperTrack.prototype.setTrackingNotificationProperties = function (title, message) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.setTrackingNotificationProperties(title, message, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Adds special marker-like object to device timeline.
     *
     * @param geotagData
     * @param expectedLocation
     */
    HyperTrack.prototype.addGeotag = function (geotagData, expectedLocation) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.addGeoTag(geotagData, expectedLocation, function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    HyperTrack.prototype.requestPermissionsIfNecessary = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.requestPermissionsIfNecessary(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    HyperTrack.prototype.allowMockLocations = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.allowMockLocations(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    HyperTrack.prototype.syncDeviceSettings = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.syncDeviceSettings(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Start tracking. */
    HyperTrack.prototype.start = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.start(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /** Stop tracking. */
    HyperTrack.prototype.stop = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.stop(function () { return resolve(); }, function (err) { return reject(err); });
        });
    };
    /**
     * Resolves latest device location that was sent by the SDK.
     * Only available for Android platform.
     * */
    HyperTrack.prototype.getLatestLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getLatestLocation(function (locationResult) { return resolve(_this.handleLocationResult(locationResult)); }, function (err) { return reject(err); });
        });
    };
    /**
     * Resolves latest device location from system location provider.
     * Only available for Android platform.
     * */
    HyperTrack.prototype.getCurrentLocation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.cordovaInstanceHandle.getCurrentLocation(function (locationResult) { return resolve(_this.handleLocationResult(locationResult)); }, function (err) { return reject(err); });
        });
    };
    HyperTrack.prototype.handleLocationResult = function (locationResult) {
        switch (locationResult.type) {
            case "location": {
                return {
                    type: exports.LocationResultType.LOCATION,
                    value: locationResult.location
                };
            }
            case "outage": {
                var outage = exports.Outage[locationResult.outage.name];
                return {
                    type: exports.LocationResultType.OUTAGE,
                    value: outage
                };
            }
        }
    };
    return HyperTrack;
}());

exports.Coordinates = Coordinates;
exports.CoordinatesValidationError = CoordinatesValidationError;
exports.HyperTrack = HyperTrack;
exports.HyperTrackPlugin = HyperTrackPlugin;
