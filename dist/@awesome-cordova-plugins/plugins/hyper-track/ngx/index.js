import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var hypertrackIonicPluginVersion = "0.2.0";
var HyperTrackPlugin = /** @class */ (function (_super) {
    __extends(HyperTrackPlugin, _super);
    function HyperTrackPlugin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HyperTrackPlugin.prototype.initialize = function (publishableKey) { return cordova(this, "initialize", {}, arguments); };
    HyperTrackPlugin.prototype.getBlockers = function () { return cordova(this, "getBlockers", {}, arguments); };
    HyperTrackPlugin.prototype.enableDebugLogging = function () { return cordova(this, "enableDebugLogging", {}, arguments); };
    HyperTrackPlugin.pluginName = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.plugin = "cordova-plugin-hypertrack-v3";
    HyperTrackPlugin.pluginRef = "hypertrack";
    HyperTrackPlugin.repo = "https://github.com/hypertrack/cordova-plugin-hypertrack.git";
    HyperTrackPlugin.platforms = ["Android, iOS"];
    HyperTrackPlugin.decorators = [
        { type: Injectable }
    ];
    return HyperTrackPlugin;
}(AwesomeCordovaNativePlugin));
export { HyperTrackPlugin };
var CoordinatesValidationError = /** @class */ (function (_super) {
    __extends(CoordinatesValidationError, _super);
    function CoordinatesValidationError() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CoordinatesValidationError;
}(Error));
export { CoordinatesValidationError };
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
export { Coordinates };
export var LocationResultType;
(function (LocationResultType) {
    LocationResultType[LocationResultType["LOCATION"] = 0] = "LOCATION";
    LocationResultType[LocationResultType["OUTAGE"] = 1] = "OUTAGE";
})(LocationResultType || (LocationResultType = {}));
export var Outage;
(function (Outage) {
    Outage[Outage["MISSING_LOCATION_PERMISSION"] = 0] = "MISSING_LOCATION_PERMISSION";
    Outage[Outage["MISSING_ACTIVITY_PERMISSION"] = 1] = "MISSING_ACTIVITY_PERMISSION";
    Outage[Outage["LOCATION_SERVICE_DISABLED"] = 2] = "LOCATION_SERVICE_DISABLED";
    Outage[Outage["NOT_TRACKING"] = 3] = "NOT_TRACKING";
    Outage[Outage["START_HAS_NOT_FINISHED"] = 4] = "START_HAS_NOT_FINISHED";
    Outage[Outage["NO_GPS_SIGNAL"] = 5] = "NO_GPS_SIGNAL";
    Outage[Outage["RESTART_REQUIRED"] = 6] = "RESTART_REQUIRED";
})(Outage || (Outage = {}));
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
                    type: LocationResultType.LOCATION,
                    value: locationResult.location
                };
            }
            case "outage": {
                var outage = Outage[locationResult.outage.name];
                return {
                    type: LocationResultType.OUTAGE,
                    value: outage
                };
            }
        }
    };
    return HyperTrack;
}());
export { HyperTrack };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaHlwZXItdHJhY2svbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFFNUYsSUFBTSw0QkFBNEIsR0FBRyxPQUFPLENBQUE7O0lBVU4sb0NBQTBCOzs7O0lBRTlELHFDQUFVLGFBQUMsY0FBc0I7SUFLakMsc0NBQVc7SUFLWCw2Q0FBa0I7Ozs7Ozs7Z0JBYm5CLFVBQVU7OzJCQVpYO0VBYXNDLDBCQUEwQjtTQUFuRCxnQkFBZ0I7O0lBOERtQiw4Q0FBSzs7OztxQ0EzRXJEO0VBMkVnRCxLQUFLOzs7SUFJbkQscUJBQW1CLFFBQWdCLEVBQVMsU0FBaUI7UUFBN0QsaUJBSUM7UUFKa0IsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLGNBQVMsR0FBVCxTQUFTLENBQVE7UUFNdEQsYUFBUSxHQUFHO1lBQ2hCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFJLENBQUMsQ0FBQztRQUM5QixDQUFDLENBQUE7UUFQQyxJQUFJLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxRQUFRLEdBQUcsSUFBSSxJQUFJLFNBQVMsR0FBRyxDQUFDLEtBQUssSUFBSSxTQUFTLEdBQUcsS0FBSyxFQUFFO1lBQ2xGLE1BQU0sSUFBSSwwQkFBMEIsQ0FBQyxvREFBb0QsQ0FBQyxDQUFDO1NBQzVGO0lBQ0gsQ0FBQztzQkFuRkg7OztBQTBIQSxNQUFNLENBQU4sSUFBWSxrQkFFWDtBQUZELFdBQVksa0JBQWtCO0lBQzVCLG1FQUFRLENBQUE7SUFBRSwrREFBTSxDQUFBO0FBQ2xCLENBQUMsRUFGVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBRTdCO0FBRUQsTUFBTSxDQUFOLElBQVksTUFRWDtBQVJELFdBQVksTUFBTTtJQUNoQixpRkFBMkIsQ0FBQTtJQUMzQixpRkFBMkIsQ0FBQTtJQUMzQiw2RUFBeUIsQ0FBQTtJQUN6QixtREFBWSxDQUFBO0lBQ1osdUVBQXNCLENBQUE7SUFDdEIscURBQWEsQ0FBQTtJQUNiLDJEQUFnQixDQUFBO0FBQ2xCLENBQUMsRUFSVyxNQUFNLEtBQU4sTUFBTSxRQVFqQjs7SUFvUEMsb0JBQTRCLHFCQUF3QztRQUF4QywwQkFBcUIsR0FBckIscUJBQXFCLENBQW1CO0lBQUcsQ0FBQztJQXhOeEUsa0RBQWtEO0lBQzNDLDZCQUFrQixHQUF6QjtRQUNFLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRDs7Ozs7Ozs7T0FRRztJQUNJLHFCQUFVLEdBQWpCLFVBQWtCLGNBQXNCO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMscUNBQW1DLDRCQUE4QixDQUFDLENBQUE7UUFDOUUsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLElBQUksZ0JBQWdCLEVBQUU7aUJBQ25CLFVBQVUsQ0FBQyxjQUFjLENBQUM7aUJBQzFCLElBQUksQ0FBQyxVQUFDLGVBQWtDO2dCQUN2QyxPQUFPLENBQUMsSUFBSSxVQUFVLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDLFVBQUMsR0FBVSxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxzQkFBVyxHQUFsQjtRQUNFLE9BQU8sSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzlDLENBQUM7SUFFRCxvRUFBb0U7SUFDcEUsZ0NBQVcsR0FBWDtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxXQUFXLENBQ3BDLFVBQUMsUUFBUSxJQUFLLE9BQUEsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFqQixDQUFpQixFQUMvQixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwRUFBMEU7SUFDMUUsOEJBQVMsR0FBVDtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQ2xDLFVBQUMsU0FBUyxJQUFLLE9BQUEsT0FBTyxDQUFDLFNBQVMsQ0FBQyxFQUFsQixDQUFrQixFQUNqQyxVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsa0NBQWEsR0FBYixVQUFjLElBQVk7UUFBMUIsaUJBUUM7UUFQQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FDdEMsSUFBSSxFQUNKLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILHNDQUFpQixHQUFqQixVQUFrQixRQUFnQjtRQUFsQyxpQkFRQztRQVBDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsaUJBQWlCLENBQzFDLFFBQVEsRUFDUixjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsc0RBQWlDLEdBQWpDLFVBQWtDLEtBQWEsRUFBRSxPQUFlO1FBQWhFLGlCQVNDO1FBUkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxpQ0FBaUMsQ0FDMUQsS0FBSyxFQUNMLE9BQU8sRUFDUCxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gsOEJBQVMsR0FBVCxVQUFVLFVBQWtCLEVBQUUsZ0JBQThCO1FBQTVELGlCQVNDO1FBUkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQ2xDLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwR0FBMEc7SUFDMUcsa0RBQTZCLEdBQTdCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLDZCQUE2QixDQUN0RCxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELG9GQUFvRjtJQUNwRix1Q0FBa0IsR0FBbEI7UUFBQSxpQkFPQztRQU5DLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNqQyxLQUFJLENBQUMscUJBQXFCLENBQUMsa0JBQWtCLENBQzNDLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsdUNBQWtCLEdBQWxCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxjQUFNLE9BQUEsT0FBTyxFQUFFLEVBQVQsQ0FBUyxFQUNmLFVBQUMsR0FBRyxJQUFLLE9BQUEsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FDckIsQ0FBQztRQUNKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELHNCQUFzQjtJQUN0QiwwQkFBSyxHQUFMO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FDOUIsY0FBTSxPQUFBLE9BQU8sRUFBRSxFQUFULENBQVMsRUFDZixVQUFDLEdBQUcsSUFBSyxPQUFBLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQ3JCLENBQUM7UUFDSixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxxQkFBcUI7SUFDckIseUJBQUksR0FBSjtRQUFBLGlCQU9DO1FBTkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQzdCLGNBQU0sT0FBQSxPQUFPLEVBQUUsRUFBVCxDQUFTLEVBQ2YsVUFBQyxHQUFHLElBQUssT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNyQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsc0NBQWlCLEdBQWpCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGlCQUFpQixDQUMxQyxVQUFBLGNBQWMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsRUFDcEUsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7OztTQUdLO0lBQ0wsdUNBQWtCLEdBQWxCO1FBQUEsaUJBT0M7UUFOQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDakMsS0FBSSxDQUFDLHFCQUFxQixDQUFDLGtCQUFrQixDQUMzQyxVQUFBLGNBQWMsSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBbEQsQ0FBa0QsRUFDcEUsVUFBQSxHQUFHLElBQUksT0FBQSxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQVgsQ0FBVyxDQUNuQixDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8seUNBQW9CLEdBQTVCLFVBQTZCLGNBQTJDO1FBQ3RFLFFBQVEsY0FBYyxDQUFDLElBQUksRUFBRTtZQUMzQixLQUFLLFVBQVUsQ0FBQyxDQUFDO2dCQUNmLE9BQU87b0JBQ0wsSUFBSSxFQUFFLGtCQUFrQixDQUFDLFFBQVE7b0JBQ2pDLEtBQUssRUFBRSxjQUFjLENBQUMsUUFBUTtpQkFDL0IsQ0FBQTthQUNGO1lBQ0QsS0FBSyxRQUFRLENBQUMsQ0FBQztnQkFDYixJQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakQsT0FBTztvQkFDTCxJQUFJLEVBQUUsa0JBQWtCLENBQUMsTUFBTTtvQkFDL0IsS0FBSyxFQUFFLE1BQU07aUJBQ2QsQ0FBQTthQUNGO1NBQ0Y7SUFDSCxDQUFDO3FCQXhYSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIENvcmRvdmEsIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmNvbnN0IGh5cGVydHJhY2tJb25pY1BsdWdpblZlcnNpb24gPSBcIjAuMi4wXCJcclxuLy8gTWluaW1hbCBjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzIHZlcnNpb246IDAuNS4wXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oeXBlcnRyYWNrLXYzJyxcclxuICBwbHVnaW5SZWY6ICdoeXBlcnRyYWNrJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2h5cGVydHJhY2svY29yZG92YS1wbHVnaW4taHlwZXJ0cmFjay5naXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkLCBpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSHlwZXJUcmFja1BsdWdpbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBAQ29yZG92YSgpXHJcbiAgaW5pdGlhbGl6ZShwdWJsaXNoYWJsZUtleTogc3RyaW5nKTogUHJvbWlzZTxIeXBlclRyYWNrQ29yZG92YT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEJsb2NrZXJzKCk6IFByb21pc2U8U2V0PEJsb2NrZXI+PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgZW5hYmxlRGVidWdMb2dnaW5nKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbnRlcmZhY2VzIGZvciBDb3Jkb3ZhIFBsdWdpbiBjYWxsYmFja3NcclxuaW50ZXJmYWNlIERldmljZUlkUmVjZWl2ZXIge1xyXG4gIChkZXZpY2VJZDogc3RyaW5nKTogYW55O1xyXG59XHJcbmludGVyZmFjZSBUcmFja2luZ1N0YXRlUmVjZWl2ZXIge1xyXG4gIChpc1J1bm5pbmc6IGJvb2xlYW4pOiBhbnk7XHJcbn1cclxuaW50ZXJmYWNlIEZhaWx1cmVIYW5kbGVyIHtcclxuICAoZXJyb3I6IEVycm9yKTogYW55O1xyXG59XHJcbmludGVyZmFjZSBTdWNjZXNzSGFuZGxlciB7XHJcbiAgKCk6IGFueTtcclxufVxyXG5pbnRlcmZhY2UgTG9jYXRpb25SZWNlaXZlciB7XHJcbiAgKGxvY2F0aW9uOiBDb3Jkb3ZhTGF0ZXN0TG9jYXRpb25SZXN1bHQpOiBhbnk7ICBcclxufVxyXG5cclxuLy8gU0RLIGluc3RhbmNlIHRoYXQgZXhwb3NlZCBmcm9tIENvcmRvdmEgdXRpbGl6ZXMgdXNhZ2Ugb2YgY2FsbGJhY2tzLCBzbyB3ZVxyXG4vLyB3cmFwIGl0IHdpdGggYWRhcHRlciB0byBhdm9pZCBtaXggb2YgY2FsbGJhY2tzIGFuZCBQcm9taXNlc1xyXG5pbnRlcmZhY2UgSHlwZXJUcmFja0NvcmRvdmEge1xyXG4gIGdldERldmljZUlkKHN1Y2Nlc3M6IERldmljZUlkUmVjZWl2ZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgaXNSdW5uaW5nKHN1Y2Nlc3M6IFRyYWNraW5nU3RhdGVSZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBzZXREZXZpY2VOYW1lKG5hbWU6IHN0cmluZywgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgc2V0RGV2aWNlTWV0YWRhdGEobWV0YWRhdGE6IE9iamVjdCwgc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgc2V0VHJhY2tpbmdOb3RpZmljYXRpb25Qcm9wZXJ0aWVzKFxyXG4gICAgdGl0bGU6IHN0cmluZyxcclxuICAgIG1lc3NhZ2U6IHN0cmluZyxcclxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxyXG4gICAgZXJyb3I6IEZhaWx1cmVIYW5kbGVyXHJcbiAgKTogdm9pZDtcclxuICBhZGRHZW9UYWcoXHJcbiAgICBnZW90YWdEYXRhOiBPYmplY3QsXHJcbiAgICBleHBlY3RlZExvY2F0aW9uOiBDb29yZGluYXRlcyB8IHVuZGVmaW5lZCxcclxuICAgIHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLFxyXG4gICAgZXJyb3I6IEZhaWx1cmVIYW5kbGVyXHJcbiAgKTogdm9pZDtcclxuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeShzdWNjZXNzOiBTdWNjZXNzSGFuZGxlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBhbGxvd01vY2tMb2NhdGlvbnMoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgc3luY0RldmljZVNldHRpbmdzKHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIHN0YXJ0KHN1Y2Nlc3M6IFN1Y2Nlc3NIYW5kbGVyLCBlcnJvcjogRmFpbHVyZUhhbmRsZXIpOiB2b2lkO1xyXG4gIHN0b3Aoc3VjY2VzczogU3VjY2Vzc0hhbmRsZXIsIGVycm9yOiBGYWlsdXJlSGFuZGxlcik6IHZvaWQ7XHJcbiAgZ2V0TGF0ZXN0TG9jYXRpb24oc3VjY2VzczogTG9jYXRpb25SZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxuICBnZXRDdXJyZW50TG9jYXRpb24oc3VjY2VzczogTG9jYXRpb25SZWNlaXZlciwgZXJyb3I6IEZhaWx1cmVIYW5kbGVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige31cclxuXHJcbi8qKiBXcmFwcGVyIGNsYXNzIGZvciBwYXNzaW5nIHNwYXRpYWwgZ2VvcG9zaXRpb24gYXMgYSBnZW90YWcncyBleHBlY3RlZCBsb2NhdGlvbiAqL1xyXG5leHBvcnQgY2xhc3MgQ29vcmRpbmF0ZXMge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBsYXRpdHVkZTogbnVtYmVyLCBwdWJsaWMgbG9uZ2l0dWRlOiBudW1iZXIpIHtcclxuICAgIGlmIChsYXRpdHVkZSA8IC05MC4wIHx8IGxhdGl0dWRlID4gOTAuMCB8fCBsb25naXR1ZGUgPCAtMTgwLjAgfHwgbG9uZ2l0dWRlID4gMTgwLjApIHtcclxuICAgICAgdGhyb3cgbmV3IENvb3JkaW5hdGVzVmFsaWRhdGlvbkVycm9yKCdsYXRpdHVkZSBhbmQgbG9uZ2l0dWRlIHNob3VsZCBiZSBvZiBjb3JyZWN0IHZhbHVlcycpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHRvU3RyaW5nID0gKCk6IHN0cmluZyA9PiB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkodGhpcyk7XHJcbiAgfVxyXG59XHJcblxyXG4vKiogQSBibG9ja2VyIGlzIGFuIG9ic3RhY2xlIHRoYXQgbmVlZHMgdG8gYmUgcmVzb2x2ZWQgdG8gYWNoaWV2ZSByZWxpYWJsZSB0cmFja2luZy4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBCbG9ja2VyIHtcclxuICAvKiogUmVjb21tZW5kZWQgbmFtZSBmb3IgYSB1c2VyIGFjdGlvbiwgdGhhdCBuZWVkcyB0byBiZSBwZXJmb3JtZWQgdG8gcmVzb2x2ZSB0aGUgYmxvY2tlci4gKi9cclxuICB1c2VyQWN0aW9uVGl0bGU6IHN0cmluZztcclxuICAvKiogUmVjb21tZW5kZWQgbmFtZSBmb3IgYSBidXR0b24sIHRoYXQgd2lsbCBuYXZpZ2F0ZSB1c2VyIHRvIHRoZSBwbGFjZSB3aGVyZSBoZSBjYW4gcmVzb2x2ZSB0aGUgYmxvY2tlciAqL1xyXG4gIHVzZXJBY3Rpb25DVEE6IHN0cmluZztcclxuICAvKiogVXNlciBhY3Rpb24gZXhwbGFuYXRpb24gKi9cclxuICB1c2VyQWN0aW9uRXhwbGFuYXRpb246IHN0cmluZztcclxuICAvKiogQW4gYWN0aW9uIHRoYXQgbmF2aWdhdGVzIHVzZXIgdG8gdGhlIGRlZGljYXRlZCBzZXR0aW5ncyBtZW51LiAqL1xyXG4gIHJlc29sdmU6ICgpID0+IHZvaWQ7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvcmRvdmFMYXRlc3RMb2NhdGlvblJlc3VsdCA9IHtcclxuICB0eXBlOiBcImxvY2F0aW9uXCIsXHJcbiAgbG9jYXRpb246IENvb3JkaW5hdGVzLFxyXG59IHwge1xyXG4gIHR5cGU6IFwib3V0YWdlXCIsXHJcbiAgb3V0YWdlOiB7XHJcbiAgICBjb2RlOiBudW1iZXIsXHJcbiAgICBuYW1lOiBrZXlvZiB0eXBlb2YgT3V0YWdlXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBMb2NhdGlvblJlc3VsdCA9IHtcclxuICB0eXBlOiBMb2NhdGlvblJlc3VsdFR5cGUuTE9DQVRJT04sIFxyXG4gIHZhbHVlOiBDb29yZGluYXRlc1xyXG59IHwgXHJcbntcclxuICB0eXBlOiBMb2NhdGlvblJlc3VsdFR5cGUuT1VUQUdFLCBcclxuICB2YWx1ZTogT3V0YWdlXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIExvY2F0aW9uUmVzdWx0VHlwZSB7XHJcbiAgTE9DQVRJT04sIE9VVEFHRVxyXG59XHJcblxyXG5leHBvcnQgZW51bSBPdXRhZ2Uge1xyXG4gIE1JU1NJTkdfTE9DQVRJT05fUEVSTUlTU0lPTixcclxuICBNSVNTSU5HX0FDVElWSVRZX1BFUk1JU1NJT04sXHJcbiAgTE9DQVRJT05fU0VSVklDRV9ESVNBQkxFRCxcclxuICBOT1RfVFJBQ0tJTkcsXHJcbiAgU1RBUlRfSEFTX05PVF9GSU5JU0hFRCxcclxuICBOT19HUFNfU0lHTkFMLFxyXG4gIFJFU1RBUlRfUkVRVUlSRURcclxufVxyXG5cclxuLyoqXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqICAgaW1wb3J0IHsgSHlwZXJUcmFjayB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9oeXBlci10cmFjayc7XHJcbiAqXHJcbiAqICAgaW5pdGlhbGl6ZUh5cGVydHJhY2soKSB7XHJcbiAqICAgICBIeXBlclRyYWNrLmVuYWJsZURlYnVnTG9nZ2luZygpO1xyXG4gKiAgICAgSHlwZXJUcmFjay5pbml0aWFsaXplKCdZT1VSX1BVQkxJU0hJTkdfS0VZJylcclxuICogICAgIC50aGVuKCB0aGlzLm9uU2RrSW5zdGFuY2VSZWNlaXZlZCApXHJcbiAqICAgICAuY2F0Y2goIChlcnIpID0+IGNvbnNvbGUuZXJyb3IoXCJIeXBlclRyYWNrIGluaXQgZmFpbGVkIHdpdGggZXJyb3IgXCIgKyBlcnIpICk7XHJcbiAqICAgfVxyXG4gKiAgIG9uU2RrSW5zdGFuY2VSZWNlaXZlZChzZGtJbnN0YW5jZTogSHlwZXJUcmFjaykge1xyXG4gKiAgICAgICBzZGtJbnN0YW5jZS5nZXREZXZpY2VJZCgpXHJcbiAqICAgICAgLnRoZW4oKGlkKSA9PiBjb25zb2xlLmxvZyhcIkdvdCBkZXZpY2UgaWQgXCIgKyBpZCkpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0RGV2aWNlTmFtZShcIkVsdmlzIElvbmljXCIpKVxyXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiRGV2aWNlIG5hbWUgd2FzIGNoYW5nZWRcIikpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4gc2RrSW5zdGFuY2Uuc2V0RGV2aWNlTWV0YWRhdGEoe3BsYXRmb3JtOiBcIklvbmljIEFuZHJvaWRcIn0pKVxyXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiRGV2aWNlIG1ldGFkYXRhIHdhcyBjaGFuZ2VkXCIpKVxyXG4gKiAgICAgIC50aGVuKCgpID0+IHNka0luc3RhbmNlLnNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcIlRyYWNraW5nIE9uXCIsIFwiSW9uaWMgU0RLIGlzIHRyYWNraW5nXCIpKVxyXG4gKiAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKFwiTm90aWZpY2F0aW9uIHByb3BlcnRpZXMgd2VyZSBjaGFuZ2VkXCIpKVxyXG4gKiAgICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmVycm9yKFwiR290IGVycm9yIGluIEh5cGVyVHJhY2sgXCIgKyBlcnIpKTtcclxuICogICB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEh5cGVyVHJhY2sge1xyXG4gIC8qKiBFbmFibGVzIGRlYnVnIGxvZyBpbiBuYXRpdmUgSHlwZXJUcmFjayBTREsuICovXHJcbiAgc3RhdGljIGVuYWJsZURlYnVnTG9nZ2luZygpOiB2b2lkIHtcclxuICAgIG5ldyBIeXBlclRyYWNrUGx1Z2luKCkuZW5hYmxlRGVidWdMb2dnaW5nKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbnRyeSBwb2ludCBpbnRvIFNESy5cclxuICAgKlxyXG4gICAqIEluaXRpYWxpemVzIFNESy4gQWxzbyByZXNvbHZlcyBTREsgaW5zdGFuY2UgdGhhdCBjb3VsZCBiZSB1c2VkIHRvIHF1ZXJ5IGRldmljZUlkIG9yIHNldFxyXG4gICAqIHZhcmlvdXMgZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwdWJsaXNoYWJsZUtleSBhY2NvdW50LXNwZWNpZmljIHNlY3JldCBmcm9tIHRoZSBIeXBlclRyYWNrIGRhc2hib3JhZC5cclxuICAgKiBAc2VlIHtAbGluayBodHRwczovL2Rhc2hib2FyZC5oeXBlcnRyYWNrLmNvbS9zZXR1cH0uXHJcbiAgICovXHJcbiAgc3RhdGljIGluaXRpYWxpemUocHVibGlzaGFibGVLZXk6IHN0cmluZyk6IFByb21pc2U8SHlwZXJUcmFjaz4ge1xyXG4gICAgY29uc29sZS5sb2coYEh5cGVydHJhY2sgSW9uaWMgcGx1Z2luIHZlcnNpb24gJHtoeXBlcnRyYWNrSW9uaWNQbHVnaW5WZXJzaW9ufWApXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBuZXcgSHlwZXJUcmFja1BsdWdpbigpXHJcbiAgICAgICAgLmluaXRpYWxpemUocHVibGlzaGFibGVLZXkpXHJcbiAgICAgICAgLnRoZW4oKGNvcmRvdmFJbnN0YW5jZTogSHlwZXJUcmFja0NvcmRvdmEpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUobmV3IEh5cGVyVHJhY2soY29yZG92YUluc3RhbmNlKSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKGVycjogRXJyb3IpID0+IHJlamVjdChlcnIpKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBsaXN0IG9mIGJsb2NrZXJzIHRoYXQgbmVlZHMgdG8gYmUgcmVzb2x2ZWQgZm9yIHJlbGlhYmxlIHRyYWNraW5nLlxyXG4gICAqXHJcbiAgICogQHNlZSB7QmxvY2tlcn1cclxuICAgKi9cclxuICBzdGF0aWMgZ2V0QmxvY2tlcnMoKTogUHJvbWlzZTxTZXQ8QmxvY2tlcj4+IHtcclxuICAgIHJldHVybiBuZXcgSHlwZXJUcmFja1BsdWdpbigpLmdldEJsb2NrZXJzKCk7XHJcbiAgfVxyXG5cclxuICAvKiogUmVzb2x2ZXMgZGV2aWNlIElEIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlLiAqL1xyXG4gIGdldERldmljZUlkKCk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5nZXREZXZpY2VJZChcclxuICAgICAgICAoZGV2aWNlSWQpID0+IHJlc29sdmUoZGV2aWNlSWQpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBSZXNvbHZlcyB0byB0cnVlIGlmIHRyYWNraW5nIHNlcnZpY2UgaXMgcnVubmluZyBhbmQgZmFsc2Ugb3RoZXJ3aXNlICovXHJcbiAgaXNSdW5uaW5nKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuaXNSdW5uaW5nKFxyXG4gICAgICAgIChpc1J1bm5pbmcpID0+IHJlc29sdmUoaXNSdW5uaW5nKSxcclxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZXRzIGRldmljZSBuYW1lIHRoYXQgY291bGQgYmUgdXNlZCB0byBpZGVudGlmeSB0aGUgZGV2aWNlIGluIEh5cGVyVHJhY2sgZGFzaGJvYXJkXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbmFtZVxyXG4gICAqL1xyXG4gIHNldERldmljZU5hbWUobmFtZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zZXREZXZpY2VOYW1lKFxyXG4gICAgICAgIG5hbWUsXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSB0aGlzIHRvIHNldCBhZGRpdGlvbmFsIHByb3BlcnRpZXMsIGxpa2Ugc2VnbWVudHMsIHRlYW1zIGV0Yy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXRhZGF0YSBrZXktdmFsdWUgcGFpcyBvZiBwcm9wZXJ0aWVzLlxyXG4gICAqL1xyXG4gIHNldERldmljZU1ldGFkYXRhKG1ldGFkYXRhOiBPYmplY3QpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldERldmljZU1ldGFkYXRhKFxyXG4gICAgICAgIG1ldGFkYXRhLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVcGRhdGVzIHRpdGxlIGFuZCB0ZXh0IGluIHBlcnNpc3RlbnQgbm90aWZpY2F0aW9uLCB0aGF0IGFwcGVhcnMgd2hlbiB0cmFja2luZyBpcyBhY3RpdmUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdGl0bGVcclxuICAgKiBAcGFyYW0gbWVzc2FnZVxyXG4gICAqL1xyXG4gIHNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyh0aXRsZTogc3RyaW5nLCBtZXNzYWdlOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnNldFRyYWNraW5nTm90aWZpY2F0aW9uUHJvcGVydGllcyhcclxuICAgICAgICB0aXRsZSxcclxuICAgICAgICBtZXNzYWdlLFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBZGRzIHNwZWNpYWwgbWFya2VyLWxpa2Ugb2JqZWN0IHRvIGRldmljZSB0aW1lbGluZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBnZW90YWdEYXRhXHJcbiAgICogQHBhcmFtIGV4cGVjdGVkTG9jYXRpb25cclxuICAgKi9cclxuICBhZGRHZW90YWcoZ2VvdGFnRGF0YTogT2JqZWN0LCBleHBlY3RlZExvY2F0aW9uPzogQ29vcmRpbmF0ZXMpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmFkZEdlb1RhZyhcclxuICAgICAgICBnZW90YWdEYXRhLFxyXG4gICAgICAgIGV4cGVjdGVkTG9jYXRpb24sXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBQb3BzIHVwIHBlcm1pc3Npb24gcmVxdWVzdCBkaWFsb2csIGlmIHBlcm1pc3Npb25zIHdlcmVuJ3QgZ3JhbnRlZCBiZWZvcmUgb3IgZG9lcyBub3RoaW5nIG90aGVyd2lzZS4gKi9cclxuICByZXF1ZXN0UGVybWlzc2lvbnNJZk5lY2Vzc2FyeSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnJlcXVlc3RQZXJtaXNzaW9uc0lmTmVjZXNzYXJ5KFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogQWxsb3dzIGluamVjdGluZyBmYWxzZSBsb2NhdGlvbnMgaW50byB0aGUgU0RLLCB3aGljaCBpZ25vcmVzIHRoZW0gYnkgZGVmYXVsdC4gKi9cclxuICBhbGxvd01vY2tMb2NhdGlvbnMoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5hbGxvd01vY2tMb2NhdGlvbnMoXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN5bmNocm9uaXplcyB0cmFja2luZyBzdGF0ZSB3aXRoIHBsYXRmb3JtIG1vZGVsLiBUaGlzIG1ldGhvZCBpcyB1c2VkIHRvXHJcbiAgICogaGFyZGVuIHBsYXRmb3JtMmRldmljZSBjb21tdW5pY2F0aW9uIGNoYW5uZWwuXHJcbiAgICovXHJcbiAgc3luY0RldmljZVNldHRpbmdzKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgdGhpcy5jb3Jkb3ZhSW5zdGFuY2VIYW5kbGUuc3luY0RldmljZVNldHRpbmdzKFxyXG4gICAgICAgICgpID0+IHJlc29sdmUoKSxcclxuICAgICAgICAoZXJyKSA9PiByZWplY3QoZXJyKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiogU3RhcnQgdHJhY2tpbmcuICovXHJcbiAgc3RhcnQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5zdGFydChcclxuICAgICAgICAoKSA9PiByZXNvbHZlKCksXHJcbiAgICAgICAgKGVycikgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFN0b3AgdHJhY2tpbmcuICovXHJcbiAgc3RvcCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLnN0b3AoXHJcbiAgICAgICAgKCkgPT4gcmVzb2x2ZSgpLFxyXG4gICAgICAgIChlcnIpID0+IHJlamVjdChlcnIpXHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKiBcclxuICAgKiBSZXNvbHZlcyBsYXRlc3QgZGV2aWNlIGxvY2F0aW9uIHRoYXQgd2FzIHNlbnQgYnkgdGhlIFNESy4gXHJcbiAgICogT25seSBhdmFpbGFibGUgZm9yIEFuZHJvaWQgcGxhdGZvcm0uXHJcbiAgICogKi9cclxuICBnZXRMYXRlc3RMb2NhdGlvbigpOiBQcm9taXNlPExvY2F0aW9uUmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0aGlzLmNvcmRvdmFJbnN0YW5jZUhhbmRsZS5nZXRMYXRlc3RMb2NhdGlvbihcclxuICAgICAgICBsb2NhdGlvblJlc3VsdCA9PiByZXNvbHZlKHRoaXMuaGFuZGxlTG9jYXRpb25SZXN1bHQobG9jYXRpb25SZXN1bHQpKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFxyXG4gICAqIFJlc29sdmVzIGxhdGVzdCBkZXZpY2UgbG9jYXRpb24gZnJvbSBzeXN0ZW0gbG9jYXRpb24gcHJvdmlkZXIuIFxyXG4gICAqIE9ubHkgYXZhaWxhYmxlIGZvciBBbmRyb2lkIHBsYXRmb3JtLlxyXG4gICAqICovXHJcbiAgZ2V0Q3VycmVudExvY2F0aW9uKCk6IFByb21pc2U8TG9jYXRpb25SZXN1bHQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRoaXMuY29yZG92YUluc3RhbmNlSGFuZGxlLmdldEN1cnJlbnRMb2NhdGlvbihcclxuICAgICAgICBsb2NhdGlvblJlc3VsdCA9PiByZXNvbHZlKHRoaXMuaGFuZGxlTG9jYXRpb25SZXN1bHQobG9jYXRpb25SZXN1bHQpKSxcclxuICAgICAgICBlcnIgPT4gcmVqZWN0KGVycilcclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVMb2NhdGlvblJlc3VsdChsb2NhdGlvblJlc3VsdDogQ29yZG92YUxhdGVzdExvY2F0aW9uUmVzdWx0KTogTG9jYXRpb25SZXN1bHQge1xyXG4gICAgc3dpdGNoIChsb2NhdGlvblJlc3VsdC50eXBlKSB7XHJcbiAgICAgIGNhc2UgXCJsb2NhdGlvblwiOiB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHR5cGU6IExvY2F0aW9uUmVzdWx0VHlwZS5MT0NBVElPTixcclxuICAgICAgICAgIHZhbHVlOiBsb2NhdGlvblJlc3VsdC5sb2NhdGlvblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBjYXNlIFwib3V0YWdlXCI6IHtcclxuICAgICAgICBjb25zdCBvdXRhZ2UgPSBPdXRhZ2VbbG9jYXRpb25SZXN1bHQub3V0YWdlLm5hbWVdXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHR5cGU6IExvY2F0aW9uUmVzdWx0VHlwZS5PVVRBR0UsXHJcbiAgICAgICAgICB2YWx1ZTogb3V0YWdlXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHByaXZhdGUgY29yZG92YUluc3RhbmNlSGFuZGxlOiBIeXBlclRyYWNrQ29yZG92YSkge31cclxufVxyXG4iXX0=