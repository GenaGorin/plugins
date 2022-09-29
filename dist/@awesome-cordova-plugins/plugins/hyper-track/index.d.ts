import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export declare class HyperTrackPluginOriginal extends AwesomeCordovaNativePlugin {
    initialize(publishableKey: string): Promise<HyperTrackCordova>;
    getBlockers(): Promise<Set<Blocker>>;
    enableDebugLogging(): Promise<any>;
}
interface DeviceIdReceiver {
    (deviceId: string): any;
}
interface TrackingStateReceiver {
    (isRunning: boolean): any;
}
interface FailureHandler {
    (error: Error): any;
}
interface SuccessHandler {
    (): any;
}
interface LocationReceiver {
    (location: CordovaLatestLocationResult): any;
}
interface HyperTrackCordova {
    getDeviceId(success: DeviceIdReceiver, error: FailureHandler): void;
    isRunning(success: TrackingStateReceiver, error: FailureHandler): void;
    setDeviceName(name: string, success: SuccessHandler, error: FailureHandler): void;
    setDeviceMetadata(metadata: Object, success: SuccessHandler, error: FailureHandler): void;
    setTrackingNotificationProperties(title: string, message: string, success: SuccessHandler, error: FailureHandler): void;
    addGeoTag(geotagData: Object, expectedLocation: Coordinates | undefined, success: SuccessHandler, error: FailureHandler): void;
    requestPermissionsIfNecessary(success: SuccessHandler, error: FailureHandler): void;
    allowMockLocations(success: SuccessHandler, error: FailureHandler): void;
    syncDeviceSettings(success: SuccessHandler, error: FailureHandler): void;
    start(success: SuccessHandler, error: FailureHandler): void;
    stop(success: SuccessHandler, error: FailureHandler): void;
    getLatestLocation(success: LocationReceiver, error: FailureHandler): void;
    getCurrentLocation(success: LocationReceiver, error: FailureHandler): void;
}
export declare class CoordinatesValidationError extends Error {
}
/** Wrapper class for passing spatial geoposition as a geotag's expected location */
export declare class Coordinates {
    latitude: number;
    longitude: number;
    constructor(latitude: number, longitude: number);
    toString: () => string;
}
/** A blocker is an obstacle that needs to be resolved to achieve reliable tracking. */
export interface Blocker {
    /** Recommended name for a user action, that needs to be performed to resolve the blocker. */
    userActionTitle: string;
    /** Recommended name for a button, that will navigate user to the place where he can resolve the blocker */
    userActionCTA: string;
    /** User action explanation */
    userActionExplanation: string;
    /** An action that navigates user to the dedicated settings menu. */
    resolve: () => void;
}
export declare type CordovaLatestLocationResult = {
    type: "location";
    location: Coordinates;
} | {
    type: "outage";
    outage: {
        code: number;
        name: keyof typeof Outage;
    };
};
export declare type LocationResult = {
    type: LocationResultType.LOCATION;
    value: Coordinates;
} | {
    type: LocationResultType.OUTAGE;
    value: Outage;
};
export declare enum LocationResultType {
    LOCATION = 0,
    OUTAGE = 1
}
export declare enum Outage {
    MISSING_LOCATION_PERMISSION = 0,
    MISSING_ACTIVITY_PERMISSION = 1,
    LOCATION_SERVICE_DISABLED = 2,
    NOT_TRACKING = 3,
    START_HAS_NOT_FINISHED = 4,
    NO_GPS_SIGNAL = 5,
    RESTART_REQUIRED = 6
}
/**
 * @usage
 * ```typescript
 *   import { HyperTrack } from '@awesome-cordova-plugins/hyper-track';
 *
 *   initializeHypertrack() {
 *     HyperTrack.enableDebugLogging();
 *     HyperTrack.initialize('YOUR_PUBLISHING_KEY')
 *     .then( this.onSdkInstanceReceived )
 *     .catch( (err) => console.error("HyperTrack init failed with error " + err) );
 *   }
 *   onSdkInstanceReceived(sdkInstance: HyperTrack) {
 *       sdkInstance.getDeviceId()
 *      .then((id) => console.log("Got device id " + id))
 *      .then(() => sdkInstance.setDeviceName("Elvis Ionic"))
 *      .then(() => console.log("Device name was changed"))
 *      .then(() => sdkInstance.setDeviceMetadata({platform: "Ionic Android"}))
 *      .then(() => console.log("Device metadata was changed"))
 *      .then(() => sdkInstance.setTrackingNotificationProperties("Tracking On", "Ionic SDK is tracking"))
 *      .then(() => console.log("Notification properties were changed"))
 *      .catch((err) => console.error("Got error in HyperTrack " + err));
 *   }
 *
 * ```
 */
export declare class HyperTrack {
    private cordovaInstanceHandle;
    /** Enables debug log in native HyperTrack SDK. */
    static enableDebugLogging(): void;
    /**
     * Entry point into SDK.
     *
     * Initializes SDK. Also resolves SDK instance that could be used to query deviceId or set
     * various data.
     *
     * @param publishableKey account-specific secret from the HyperTrack dashborad.
     * @see {@link https://dashboard.hypertrack.com/setup}.
     */
    static initialize(publishableKey: string): Promise<HyperTrack>;
    /**
     * Get the list of blockers that needs to be resolved for reliable tracking.
     *
     * @see {Blocker}
     */
    static getBlockers(): Promise<Set<Blocker>>;
    /** Resolves device ID that could be used to identify the device. */
    getDeviceId(): Promise<string>;
    /** Resolves to true if tracking service is running and false otherwise */
    isRunning(): Promise<boolean>;
    /**
     * Sets device name that could be used to identify the device in HyperTrack dashboard
     *
     * @param name
     */
    setDeviceName(name: string): Promise<void>;
    /**
     * Use this to set additional properties, like segments, teams etc.
     *
     * @param metadata key-value pais of properties.
     */
    setDeviceMetadata(metadata: Object): Promise<void>;
    /**
     * Updates title and text in persistent notification, that appears when tracking is active.
     *
     * @param title
     * @param message
     */
    setTrackingNotificationProperties(title: string, message: string): Promise<void>;
    /**
     * Adds special marker-like object to device timeline.
     *
     * @param geotagData
     * @param expectedLocation
     */
    addGeotag(geotagData: Object, expectedLocation?: Coordinates): Promise<void>;
    /** Pops up permission request dialog, if permissions weren't granted before or does nothing otherwise. */
    requestPermissionsIfNecessary(): Promise<void>;
    /** Allows injecting false locations into the SDK, which ignores them by default. */
    allowMockLocations(): Promise<void>;
    /**
     * Synchronizes tracking state with platform model. This method is used to
     * harden platform2device communication channel.
     */
    syncDeviceSettings(): Promise<void>;
    /** Start tracking. */
    start(): Promise<void>;
    /** Stop tracking. */
    stop(): Promise<void>;
    /**
     * Resolves latest device location that was sent by the SDK.
     * Only available for Android platform.
     * */
    getLatestLocation(): Promise<LocationResult>;
    /**
     * Resolves latest device location from system location provider.
     * Only available for Android platform.
     * */
    getCurrentLocation(): Promise<LocationResult>;
    private handleLocationResult;
    private constructor();
}
export {};

export declare const HyperTrackPlugin: HyperTrackPluginOriginal;