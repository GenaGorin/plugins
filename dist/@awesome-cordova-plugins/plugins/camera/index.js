var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
export var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
export var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
export var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
export var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
export var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
export var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var CameraOriginal = /** @class */ (function (_super) {
    __extends(CameraOriginal, _super);
    function CameraOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2,
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1,
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2,
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            SAVEDPHOTOALBUM: 2,
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15,
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1,
        };
        return _this;
    }
    CameraOriginal.prototype.getPicture = function (options) { return cordova(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    CameraOriginal.prototype.cleanup = function () { return cordova(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    CameraOriginal.pluginName = "Camera";
    CameraOriginal.plugin = "cordova-plugin-camera";
    CameraOriginal.pluginRef = "navigator.camera";
    CameraOriginal.repo = "https://github.com/apache/cordova-plugin-camera";
    CameraOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return CameraOriginal;
}(AwesomeCordovaNativePlugin));
var Camera = new CameraOriginal();
export { Camera };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FtZXJhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBc0Y1RixNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLDZEQUFZLENBQUE7SUFDWiw2REFBUSxDQUFBO0lBQ1IsaUVBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUVELE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsK0NBQVEsQ0FBQTtJQUNSLDZDQUFHLENBQUE7QUFDTCxDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLCtDQUFXLENBQUE7SUFDWCwyQ0FBSyxDQUFBO0lBQ0wsaURBQVEsQ0FBQTtBQUNWLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IseUVBQWdCLENBQUE7SUFDaEIsNkRBQU0sQ0FBQTtJQUNOLCtFQUFlLENBQUE7QUFDakIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFNWDtBQU5ELFdBQVkscUJBQXFCO0lBQy9CLHlFQUFZLENBQUE7SUFDWiw2RUFBVSxDQUFBO0lBQ1YsNkVBQVUsQ0FBQTtJQUNWLCtFQUFXLENBQUE7SUFDWCwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLHlDQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCOztJQXFEMkIsMEJBQTBCOzs7UUFDcEQ7O1dBRUc7UUFDSCxxQkFBZSxHQUFHO1lBQ2hCLGdLQUFnSztZQUNoSyxRQUFRLEVBQUUsQ0FBQztZQUNYLDRFQUE0RTtZQUM1RSxRQUFRLEVBQUUsQ0FBQztZQUNYLDBEQUEwRDtZQUMxRCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFFRjs7V0FFRztRQUNILGtCQUFZLEdBQUc7WUFDYixnQ0FBZ0M7WUFDaEMsSUFBSSxFQUFFLENBQUM7WUFDUCwrQkFBK0I7WUFDL0IsR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVix3R0FBd0c7WUFDeEcsT0FBTyxFQUFFLENBQUM7WUFDVixzREFBc0Q7WUFDdEQsS0FBSyxFQUFFLENBQUM7WUFDUiwyQ0FBMkM7WUFDM0MsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRztZQUNsQiwyRUFBMkU7WUFDM0UsWUFBWSxFQUFFLENBQUM7WUFDZiwrQkFBK0I7WUFDL0IsTUFBTSxFQUFFLENBQUM7WUFDVCw4RUFBOEU7WUFDOUUsZUFBZSxFQUFFLENBQUM7U0FDbkIsQ0FBQztRQUVGOztXQUVHO1FBQ0gsMkJBQXFCLEdBQUc7WUFDdEIsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDO1lBQ2IsV0FBVyxFQUFFLENBQUM7WUFDZCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFFRjs7V0FFRztRQUNILGVBQVMsR0FBRztZQUNWLGlDQUFpQztZQUNqQyxJQUFJLEVBQUUsQ0FBQztZQUNQLGtDQUFrQztZQUNsQyxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7OztJQVdGLDJCQUFVLGFBQUMsT0FBdUI7SUFhbEMsd0JBQU87Ozs7OztpQkF4UVQ7RUE4SzRCLDBCQUEwQjtTQUF6QyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFPcHRpb25zIHtcclxuICAvKiogUGljdHVyZSBxdWFsaXR5IGluIHJhbmdlIDAtMTAwLiBEZWZhdWx0IGlzIDUwICovXHJcbiAgcXVhbGl0eT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlLlxyXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cclxuICAgKiAgICAgIERBVEFfVVJMIDogMCwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nIChEQVRBX1VSTCBjYW4gYmUgdmVyeSBtZW1vcnkgaW50ZW5zaXZlIGFuZCBjYXVzZSBhcHAgY3Jhc2hlcyBvciBvdXQgb2YgbWVtb3J5IGVycm9ycy4gVXNlIEZJTEVfVVJJIG9yIE5BVElWRV9VUkkgaWYgcG9zc2libGUpLFxyXG4gICAqICAgICAgRklMRV9VUkkgOiAxLCAgIFJldHVybiBpbWFnZSBmaWxlIFVSSSxcclxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxyXG4gICAqICAgICAgICAgIChlLmcuLCBhc3NldHMtbGlicmFyeTovLyBvbiBpT1Mgb3IgY29udGVudDovLyBvbiBBbmRyb2lkKVxyXG4gICAqL1xyXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBTZXQgdGhlIHNvdXJjZSBvZiB0aGUgcGljdHVyZS5cclxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXHJcbiAgICogICAgICBQSE9UT0xJQlJBUlkgOiAwLFxyXG4gICAqICAgICAgQ0FNRVJBIDogMSxcclxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcclxuICAgKi9cclxuICBzb3VyY2VUeXBlPzogbnVtYmVyO1xyXG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xyXG4gIGFsbG93RWRpdD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXHJcbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRW5jb2RpbmdUeXBlLiBEZWZhdWx0IGlzIEpQRUdcclxuICAgKiAgICAgIEpQRUcgOiAwICAgIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2VcclxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxyXG4gICAqL1xyXG4gIGVuY29kaW5nVHlwZT86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBXaWR0aCBpbiBwaXhlbHMgdG8gc2NhbGUgaW1hZ2UuIE11c3QgYmUgdXNlZCB3aXRoIHRhcmdldEhlaWdodC5cclxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cclxuICAgKi9cclxuICB0YXJnZXRXaWR0aD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cclxuICAgKiBBc3BlY3QgcmF0aW8gcmVtYWlucyBjb25zdGFudC5cclxuICAgKi9cclxuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSB0eXBlIG9mIG1lZGlhIHRvIHNlbGVjdCBmcm9tLiBPbmx5IHdvcmtzIHdoZW4gUGljdHVyZVNvdXJjZVR5cGVcclxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcclxuICAgKiAgICAgIFBJQ1RVUkU6IDAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC5cclxuICAgKiAgICAgICAgICBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGVcclxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXHJcbiAgICogICAgICBBTExNRURJQSA6IDIgICAgYWxsb3cgc2VsZWN0aW9uIGZyb20gYWxsIG1lZGlhIHR5cGVzXHJcbiAgICovXHJcbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xyXG4gIC8qKiBSb3RhdGUgdGhlIGltYWdlIHRvIGNvcnJlY3QgZm9yIHRoZSBvcmllbnRhdGlvbiBvZiB0aGUgZGV2aWNlIGR1cmluZyBjYXB0dXJlLiAqL1xyXG4gIGNvcnJlY3RPcmllbnRhdGlvbj86IGJvb2xlYW47XHJcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXHJcbiAgc2F2ZVRvUGhvdG9BbGJ1bT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxyXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRpcmVjdGlvbi4gRGVmYXVsdCBpcyBCQUNLLlxyXG4gICAqICAgICAgQkFDSzogMFxyXG4gICAqICAgICAgRlJPTlQ6IDFcclxuICAgKi9cclxuICBjYW1lcmFEaXJlY3Rpb24/OiBudW1iZXI7XHJcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cclxuICBwb3BvdmVyT3B0aW9ucz86IENhbWVyYVBvcG92ZXJPcHRpb25zO1xyXG59XHJcblxyXG4vKipcclxuICogaU9TLW9ubHkgcGFyYW1ldGVycyB0aGF0IHNwZWNpZnkgdGhlIGFuY2hvciBlbGVtZW50IGxvY2F0aW9uIGFuZCBhcnJvdyBkaXJlY3Rpb25cclxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYVBvcG92ZXJPcHRpb25zIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogRGlyZWN0aW9uIHRoZSBhcnJvdyBvbiB0aGUgcG9wb3ZlciBzaG91bGQgcG9pbnQuIERlZmluZWQgaW4gQ2FtZXJhLlBvcG92ZXJBcnJvd0RpcmVjdGlvblxyXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cclxuICAgKiAgICAgIEFSUk9XX1VQIDogMSxcclxuICAgKiAgICAgIEFSUk9XX0RPV04gOiAyLFxyXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXHJcbiAgICogICAgICBBUlJPV19SSUdIVCA6IDgsXHJcbiAgICogICAgICBBUlJPV19BTlkgOiAxNVxyXG4gICAqL1xyXG4gIGFycm93RGlyOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERlc3RpbmF0aW9uVHlwZSB7XHJcbiAgREFUQV9VUkwgPSAwLFxyXG4gIEZJTEVfVVJMLFxyXG4gIE5BVElWRV9VUkksXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XHJcbiAgSlBFRyA9IDAsXHJcbiAgUE5HLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNZWRpYVR5cGUge1xyXG4gIFBJQ1RVUkUgPSAwLFxyXG4gIFZJREVPLFxyXG4gIEFMTE1FRElBLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XHJcbiAgUEhPVE9MSUJSQVJZID0gMCxcclxuICBDQU1FUkEsXHJcbiAgU0FWRURQSE9UT0FMQlVNLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBQb3BvdmVyQXJyb3dEaXJlY3Rpb24ge1xyXG4gIEFSUk9XX1VQID0gMSxcclxuICBBUlJPV19ET1dOLFxyXG4gIEFSUk9XX0xFRlQsXHJcbiAgQVJST1dfUklHSFQsXHJcbiAgQVJST1dfQU5ZLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xyXG4gIEJBQ0sgPSAwLFxyXG4gIEZST05ULFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQ2FtZXJhXHJcbiAqIEBwcmVtaWVyIGNhbWVyYVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXHJcbiAqXHJcbiAqIFJlcXVpcmVzIHRoZSBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWNhbWVyYWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtDb3Jkb3ZhIENhbWVyYSBQbHVnaW4gRG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEpLlxyXG4gKlxyXG4gKiBbV2FybmluZ10gU2luY2UgSU9TIDEwIHRoZSBjYW1lcmEgcmVxdWlyZXMgcGVybWlzc2lvbnMgdG8gYmUgcGxhY2VkIGluIHlvdXIgY29uZmlnLnhtbCBhZGRcclxuICogYGBgeG1sXHJcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxyXG4gKiAgPHN0cmluZz5Zb3UgY2FuIHRha2UgcGhvdG9zPC9zdHJpbmc+XHJcbiAqIDwvY29uZmlnLWZpbGU+XHJcbiAqIGBgYFxyXG4gKiBpbnNpZGUgb2YgdGhlIDxwbGF0Zm9ybSBuYW1lPSdpb3M+IHNlY3Rpb25cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQ2FtZXJhLCBDYW1lcmFPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NhbWVyYS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbWVyYTogQ2FtZXJhKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0IG9wdGlvbnM6IENhbWVyYU9wdGlvbnMgPSB7XHJcbiAqICAgcXVhbGl0eTogMTAwLFxyXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxyXG4gKiAgIGVuY29kaW5nVHlwZTogdGhpcy5jYW1lcmEuRW5jb2RpbmdUeXBlLkpQRUcsXHJcbiAqICAgbWVkaWFUeXBlOiB0aGlzLmNhbWVyYS5NZWRpYVR5cGUuUElDVFVSRVxyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMuY2FtZXJhLmdldFBpY3R1cmUob3B0aW9ucykudGhlbigoaW1hZ2VEYXRhKSA9PiB7XHJcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcclxuICogIC8vIElmIGl0J3MgYmFzZTY0IChEQVRBX1VSTCk6XHJcbiAqICBsZXQgYmFzZTY0SW1hZ2UgPSAnZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwnICsgaW1hZ2VEYXRhO1xyXG4gKiB9LCAoZXJyKSA9PiB7XHJcbiAqICAvLyBIYW5kbGUgZXJyb3JcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBDYW1lcmFPcHRpb25zXHJcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1jYW1lcmEnLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5jYW1lcmEnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIGRlc3RpbmF0aW9uIHR5cGVzXHJcbiAgICovXHJcbiAgRGVzdGluYXRpb25UeXBlID0ge1xyXG4gICAgLyoqIFJldHVybiBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuIERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSAqL1xyXG4gICAgREFUQV9VUkw6IDAsXHJcbiAgICAvKiogUmV0dXJuIGZpbGUgdXJpIChjb250ZW50Oi8vbWVkaWEvZXh0ZXJuYWwvaW1hZ2VzL21lZGlhLzIgZm9yIEFuZHJvaWQpICovXHJcbiAgICBGSUxFX1VSSTogMSxcclxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cclxuICAgIE5BVElWRV9VUkk6IDIsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKi9cclxuICBFbmNvZGluZ1R5cGUgPSB7XHJcbiAgICAvKiogUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZSAqL1xyXG4gICAgSlBFRzogMCxcclxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cclxuICAgIFBORzogMSxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqL1xyXG4gIE1lZGlhVHlwZSA9IHtcclxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gb2Ygc3RpbGwgcGljdHVyZXMgb25seS4gREVGQVVMVC4gV2lsbCByZXR1cm4gZm9ybWF0IHNwZWNpZmllZCB2aWEgRGVzdGluYXRpb25UeXBlICovXHJcbiAgICBQSUNUVVJFOiAwLFxyXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXHJcbiAgICBWSURFTzogMSxcclxuICAgIC8qKiBBbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXMgKi9cclxuICAgIEFMTE1FRElBOiAyLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgUGljdHVyZVNvdXJjZVR5cGUgPSB7XHJcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cclxuICAgIFBIT1RPTElCUkFSWTogMCxcclxuICAgIC8qKiBUYWtlIHBpY3R1cmUgZnJvbSBjYW1lcmEgKi9cclxuICAgIENBTUVSQTogMSxcclxuICAgIC8qKiBDaG9vc2UgaW1hZ2UgZnJvbSBwaWN0dXJlIGxpYnJhcnkgKHNhbWUgYXMgU0FWRURQSE9UT0FMQlVNIGZvciBBbmRyb2lkKSAqL1xyXG4gICAgU0FWRURQSE9UT0FMQlVNOiAyLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgUG9wb3ZlckFycm93RGlyZWN0aW9uID0ge1xyXG4gICAgQVJST1dfVVA6IDEsXHJcbiAgICBBUlJPV19ET1dOOiAyLFxyXG4gICAgQVJST1dfTEVGVDogNCxcclxuICAgIEFSUk9XX1JJR0hUOiA4LFxyXG4gICAgQVJST1dfQU5ZOiAxNSxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqL1xyXG4gIERpcmVjdGlvbiA9IHtcclxuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xyXG4gICAgQkFDSzogMCxcclxuICAgIC8qKiBVc2UgdGhlIGZyb250LWZhY2luZyBjYW1lcmEgKi9cclxuICAgIEZST05UOiAxLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtDYW1lcmFPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyB0aGF0IHlvdSB3YW50IHRvIHBhc3MgdG8gdGhlIGNhbWVyYS4gRW5jb2RpbmcgdHlwZSwgcXVhbGl0eSwgZXRjLiBQbGF0Zm9ybS1zcGVjaWZpYyBxdWlya3MgYXJlIGRlc2NyaWJlZCBpbiB0aGUgW0NvcmRvdmEgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhI2NhbWVyYW9wdGlvbnMtZXJyYXRhLSkuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBnZXRQaWN0dXJlKG9wdGlvbnM/OiBDYW1lcmFPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxyXG4gICAqIEFwcGxpZXMgb25seSB3aGVuIHRoZSB2YWx1ZSBvZiBDYW1lcmEuc291cmNlVHlwZSBlcXVhbHMgQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLkNBTUVSQSBhbmQgdGhlIENhbWVyYS5kZXN0aW5hdGlvblR5cGUgZXF1YWxzIENhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcclxuICB9KVxyXG4gIGNsZWFudXAoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19