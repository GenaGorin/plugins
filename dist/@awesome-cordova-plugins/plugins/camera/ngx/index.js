import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
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
    Camera.prototype.getPicture = function (options) { return cordova(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return cordova(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera.decorators = [
        { type: Injectable }
    ];
    return Camera;
}(AwesomeCordovaNativePlugin));
export { Camera };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvY2FtZXJhL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBc0Y1RixNQUFNLENBQU4sSUFBWSxlQUlYO0FBSkQsV0FBWSxlQUFlO0lBQ3pCLDZEQUFZLENBQUE7SUFDWiw2REFBUSxDQUFBO0lBQ1IsaUVBQVUsQ0FBQTtBQUNaLENBQUMsRUFKVyxlQUFlLEtBQWYsZUFBZSxRQUkxQjtBQUVELE1BQU0sQ0FBTixJQUFZLFlBR1g7QUFIRCxXQUFZLFlBQVk7SUFDdEIsK0NBQVEsQ0FBQTtJQUNSLDZDQUFHLENBQUE7QUFDTCxDQUFDLEVBSFcsWUFBWSxLQUFaLFlBQVksUUFHdkI7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUlYO0FBSkQsV0FBWSxTQUFTO0lBQ25CLCtDQUFXLENBQUE7SUFDWCwyQ0FBSyxDQUFBO0lBQ0wsaURBQVEsQ0FBQTtBQUNWLENBQUMsRUFKVyxTQUFTLEtBQVQsU0FBUyxRQUlwQjtBQUVELE1BQU0sQ0FBTixJQUFZLGlCQUlYO0FBSkQsV0FBWSxpQkFBaUI7SUFDM0IseUVBQWdCLENBQUE7SUFDaEIsNkRBQU0sQ0FBQTtJQUNOLCtFQUFlLENBQUE7QUFDakIsQ0FBQyxFQUpXLGlCQUFpQixLQUFqQixpQkFBaUIsUUFJNUI7QUFFRCxNQUFNLENBQU4sSUFBWSxxQkFNWDtBQU5ELFdBQVkscUJBQXFCO0lBQy9CLHlFQUFZLENBQUE7SUFDWiw2RUFBVSxDQUFBO0lBQ1YsNkVBQVUsQ0FBQTtJQUNWLCtFQUFXLENBQUE7SUFDWCwyRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQU5XLHFCQUFxQixLQUFyQixxQkFBcUIsUUFNaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxTQUdYO0FBSEQsV0FBWSxTQUFTO0lBQ25CLHlDQUFRLENBQUE7SUFDUiwyQ0FBSyxDQUFBO0FBQ1AsQ0FBQyxFQUhXLFNBQVMsS0FBVCxTQUFTLFFBR3BCOztJQXFEMkIsMEJBQTBCOzs7UUFDcEQ7O1dBRUc7UUFDSCxxQkFBZSxHQUFHO1lBQ2hCLGdLQUFnSztZQUNoSyxRQUFRLEVBQUUsQ0FBQztZQUNYLDRFQUE0RTtZQUM1RSxRQUFRLEVBQUUsQ0FBQztZQUNYLDBEQUEwRDtZQUMxRCxVQUFVLEVBQUUsQ0FBQztTQUNkLENBQUM7UUFFRjs7V0FFRztRQUNILGtCQUFZLEdBQUc7WUFDYixnQ0FBZ0M7WUFDaEMsSUFBSSxFQUFFLENBQUM7WUFDUCwrQkFBK0I7WUFDL0IsR0FBRyxFQUFFLENBQUM7U0FDUCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVix3R0FBd0c7WUFDeEcsT0FBTyxFQUFFLENBQUM7WUFDVixzREFBc0Q7WUFDdEQsS0FBSyxFQUFFLENBQUM7WUFDUiwyQ0FBMkM7WUFDM0MsUUFBUSxFQUFFLENBQUM7U0FDWixDQUFDO1FBRUY7O1dBRUc7UUFDSCx1QkFBaUIsR0FBRztZQUNsQiwyRUFBMkU7WUFDM0UsWUFBWSxFQUFFLENBQUM7WUFDZiwrQkFBK0I7WUFDL0IsTUFBTSxFQUFFLENBQUM7WUFDVCw4RUFBOEU7WUFDOUUsZUFBZSxFQUFFLENBQUM7U0FDbkIsQ0FBQztRQUVGOztXQUVHO1FBQ0gsMkJBQXFCLEdBQUc7WUFDdEIsUUFBUSxFQUFFLENBQUM7WUFDWCxVQUFVLEVBQUUsQ0FBQztZQUNiLFVBQVUsRUFBRSxDQUFDO1lBQ2IsV0FBVyxFQUFFLENBQUM7WUFDZCxTQUFTLEVBQUUsRUFBRTtTQUNkLENBQUM7UUFFRjs7V0FFRztRQUNILGVBQVMsR0FBRztZQUNWLGlDQUFpQztZQUNqQyxJQUFJLEVBQUUsQ0FBQztZQUNQLGtDQUFrQztZQUNsQyxLQUFLLEVBQUUsQ0FBQztTQUNULENBQUM7OztJQVdGLDJCQUFVLGFBQUMsT0FBdUI7SUFhbEMsd0JBQU87Ozs7Ozs7Z0JBM0ZSLFVBQVU7O2lCQTdLWDtFQThLNEIsMEJBQTBCO1NBQXpDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhbWVyYU9wdGlvbnMge1xyXG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cclxuICBxdWFsaXR5PzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXHJcbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGVzdGluYXRpb25UeXBlLiBEZWZhdWx0IGlzIEZJTEVfVVJJLlxyXG4gICAqICAgICAgREFUQV9VUkwgOiAwLCAgIFJldHVybiBpbWFnZSBhcyBiYXNlNjQtZW5jb2RlZCBzdHJpbmcgKERBVEFfVVJMIGNhbiBiZSB2ZXJ5IG1lbW9yeSBpbnRlbnNpdmUgYW5kIGNhdXNlIGFwcCBjcmFzaGVzIG9yIG91dCBvZiBtZW1vcnkgZXJyb3JzLiBVc2UgRklMRV9VUkkgb3IgTkFUSVZFX1VSSSBpZiBwb3NzaWJsZSksXHJcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxyXG4gICAqICAgICAgTkFUSVZFX1VSSSA6IDIgIFJldHVybiBpbWFnZSBuYXRpdmUgVVJJXHJcbiAgICogICAgICAgICAgKGUuZy4sIGFzc2V0cy1saWJyYXJ5Oi8vIG9uIGlPUyBvciBjb250ZW50Oi8vIG9uIEFuZHJvaWQpXHJcbiAgICovXHJcbiAgZGVzdGluYXRpb25UeXBlPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxyXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLlBpY3R1cmVTb3VyY2VUeXBlLiBEZWZhdWx0IGlzIENBTUVSQS5cclxuICAgKiAgICAgIFBIT1RPTElCUkFSWSA6IDAsXHJcbiAgICogICAgICBDQU1FUkEgOiAxLFxyXG4gICAqICAgICAgU0FWRURQSE9UT0FMQlVNIDogMlxyXG4gICAqL1xyXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XHJcbiAgLyoqIEFsbG93IHNpbXBsZSBlZGl0aW5nIG9mIGltYWdlIGJlZm9yZSBzZWxlY3Rpb24uICovXHJcbiAgYWxsb3dFZGl0PzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBDaG9vc2UgdGhlIHJldHVybmVkIGltYWdlIGZpbGUncyBlbmNvZGluZy5cclxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5FbmNvZGluZ1R5cGUuIERlZmF1bHQgaXMgSlBFR1xyXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxyXG4gICAqICAgICAgUE5HIDogMSAgICAgUmV0dXJuIFBORyBlbmNvZGVkIGltYWdlXHJcbiAgICovXHJcbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFdpZHRoIGluIHBpeGVscyB0byBzY2FsZSBpbWFnZS4gTXVzdCBiZSB1c2VkIHdpdGggdGFyZ2V0SGVpZ2h0LlxyXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxyXG4gICAqL1xyXG4gIHRhcmdldFdpZHRoPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIEhlaWdodCBpbiBwaXhlbHMgdG8gc2NhbGUgaW1hZ2UuIE11c3QgYmUgdXNlZCB3aXRoIHRhcmdldFdpZHRoLlxyXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxyXG4gICAqL1xyXG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcclxuICAvKipcclxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxyXG4gICAqIGlzIFBIT1RPTElCUkFSWSBvciBTQVZFRFBIT1RPQUxCVU0uIERlZmluZWQgaW4gQ2FtZXJhLk1lZGlhVHlwZVxyXG4gICAqICAgICAgUElDVFVSRTogMCAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULlxyXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxyXG4gICAqICAgICAgVklERU86IDEgICAgICAgIGFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBXSUxMIEFMV0FZUyBSRVRVUk4gRklMRV9VUklcclxuICAgKiAgICAgIEFMTE1FRElBIDogMiAgICBhbGxvdyBzZWxlY3Rpb24gZnJvbSBhbGwgbWVkaWEgdHlwZXNcclxuICAgKi9cclxuICBtZWRpYVR5cGU/OiBudW1iZXI7XHJcbiAgLyoqIFJvdGF0ZSB0aGUgaW1hZ2UgdG8gY29ycmVjdCBmb3IgdGhlIG9yaWVudGF0aW9uIG9mIHRoZSBkZXZpY2UgZHVyaW5nIGNhcHR1cmUuICovXHJcbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcclxuICAvKiogU2F2ZSB0aGUgaW1hZ2UgdG8gdGhlIHBob3RvIGFsYnVtIG9uIHRoZSBkZXZpY2UgYWZ0ZXIgY2FwdHVyZS4gKi9cclxuICBzYXZlVG9QaG90b0FsYnVtPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBDaG9vc2UgdGhlIGNhbWVyYSB0byB1c2UgKGZyb250LSBvciBiYWNrLWZhY2luZykuXHJcbiAgICogRGVmaW5lZCBpbiBDYW1lcmEuRGlyZWN0aW9uLiBEZWZhdWx0IGlzIEJBQ0suXHJcbiAgICogICAgICBCQUNLOiAwXHJcbiAgICogICAgICBGUk9OVDogMVxyXG4gICAqL1xyXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcclxuICAvKiogaU9TLW9ubHkgb3B0aW9ucyB0aGF0IHNwZWNpZnkgcG9wb3ZlciBsb2NhdGlvbiBpbiBpUGFkLiBEZWZpbmVkIGluIENhbWVyYVBvcG92ZXJPcHRpb25zLiAqL1xyXG4gIHBvcG92ZXJPcHRpb25zPzogQ2FtZXJhUG9wb3Zlck9wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxyXG4gKiBvZiB0aGUgcG9wb3ZlciB3aGVuIHNlbGVjdGluZyBpbWFnZXMgZnJvbSBhbiBpUGFkJ3MgbGlicmFyeSBvciBhbGJ1bS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbiAgd2lkdGg6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXHJcbiAgICogTWF0Y2hlcyBpT1MgVUlQb3BvdmVyQXJyb3dEaXJlY3Rpb24gY29uc3RhbnRzLlxyXG4gICAqICAgICAgQVJST1dfVVAgOiAxLFxyXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXHJcbiAgICogICAgICBBUlJPV19MRUZUIDogNCxcclxuICAgKiAgICAgIEFSUk9XX1JJR0hUIDogOCxcclxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XHJcbiAgICovXHJcbiAgYXJyb3dEaXI6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGVzdGluYXRpb25UeXBlIHtcclxuICBEQVRBX1VSTCA9IDAsXHJcbiAgRklMRV9VUkwsXHJcbiAgTkFUSVZFX1VSSSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRW5jb2RpbmdUeXBlIHtcclxuICBKUEVHID0gMCxcclxuICBQTkcsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1lZGlhVHlwZSB7XHJcbiAgUElDVFVSRSA9IDAsXHJcbiAgVklERU8sXHJcbiAgQUxMTUVESUEsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBpY3R1cmVTb3VyY2VUeXBlIHtcclxuICBQSE9UT0xJQlJBUlkgPSAwLFxyXG4gIENBTUVSQSxcclxuICBTQVZFRFBIT1RPQUxCVU0sXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XHJcbiAgQVJST1dfVVAgPSAxLFxyXG4gIEFSUk9XX0RPV04sXHJcbiAgQVJST1dfTEVGVCxcclxuICBBUlJPV19SSUdIVCxcclxuICBBUlJPV19BTlksXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERpcmVjdGlvbiB7XHJcbiAgQkFDSyA9IDAsXHJcbiAgRlJPTlQsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBDYW1lcmFcclxuICogQHByZW1pZXIgY2FtZXJhXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUYWtlIGEgcGhvdG8gb3IgY2FwdHVyZSB2aWRlby5cclxuICpcclxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXHJcbiAqXHJcbiAqIFtXYXJuaW5nXSBTaW5jZSBJT1MgMTAgdGhlIGNhbWVyYSByZXF1aXJlcyBwZXJtaXNzaW9ucyB0byBiZSBwbGFjZWQgaW4geW91ciBjb25maWcueG1sIGFkZFxyXG4gKiBgYGB4bWxcclxuICogPGNvbmZpZy1maWxlIHBhcmVudD1cIk5TQ2FtZXJhVXNhZ2VEZXNjcmlwdGlvblwiIHBsYXRmb3JtPVwiaW9zXCIgdGFyZ2V0PVwiKi1JbmZvLnBsaXN0XCI+XHJcbiAqICA8c3RyaW5nPllvdSBjYW4gdGFrZSBwaG90b3M8L3N0cmluZz5cclxuICogPC9jb25maWctZmlsZT5cclxuICogYGBgXHJcbiAqIGluc2lkZSBvZiB0aGUgPHBsYXRmb3JtIG5hbWU9J2lvcz4gc2VjdGlvblxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FtZXJhL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogY29uc3Qgb3B0aW9uczogQ2FtZXJhT3B0aW9ucyA9IHtcclxuICogICBxdWFsaXR5OiAxMDAsXHJcbiAqICAgZGVzdGluYXRpb25UeXBlOiB0aGlzLmNhbWVyYS5EZXN0aW5hdGlvblR5cGUuRklMRV9VUkksXHJcbiAqICAgZW5jb2RpbmdUeXBlOiB0aGlzLmNhbWVyYS5FbmNvZGluZ1R5cGUuSlBFRyxcclxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcclxuICogIC8vIGltYWdlRGF0YSBpcyBlaXRoZXIgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgb3IgYSBmaWxlIFVSSVxyXG4gKiAgLy8gSWYgaXQncyBiYXNlNjQgKERBVEFfVVJMKTpcclxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XHJcbiAqIH0sIChlcnIpID0+IHtcclxuICogIC8vIEhhbmRsZSBlcnJvclxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIENhbWVyYU9wdGlvbnNcclxuICogQ2FtZXJhUG9wb3Zlck9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdDYW1lcmEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXHJcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhbWVyYSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcclxuICAgKi9cclxuICBEZXN0aW5hdGlvblR5cGUgPSB7XHJcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXHJcbiAgICBEQVRBX1VSTDogMCxcclxuICAgIC8qKiBSZXR1cm4gZmlsZSB1cmkgKGNvbnRlbnQ6Ly9tZWRpYS9leHRlcm5hbC9pbWFnZXMvbWVkaWEvMiBmb3IgQW5kcm9pZCkgKi9cclxuICAgIEZJTEVfVVJJOiAxLFxyXG4gICAgLyoqIFJldHVybiBuYXRpdmUgdXJpIChlZy4gYXNzZXQtbGlicmFyeTovLy4uLiBmb3IgaU9TKSAqL1xyXG4gICAgTkFUSVZFX1VSSTogMixcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxyXG4gICAqL1xyXG4gIEVuY29kaW5nVHlwZSA9IHtcclxuICAgIC8qKiBSZXR1cm4gSlBFRyBlbmNvZGVkIGltYWdlICovXHJcbiAgICBKUEVHOiAwLFxyXG4gICAgLyoqIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZSAqL1xyXG4gICAgUE5HOiAxLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgTWVkaWFUeXBlID0ge1xyXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiBzdGlsbCBwaWN0dXJlcyBvbmx5LiBERUZBVUxULiBXaWxsIHJldHVybiBmb3JtYXQgc3BlY2lmaWVkIHZpYSBEZXN0aW5hdGlvblR5cGUgKi9cclxuICAgIFBJQ1RVUkU6IDAsXHJcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHZpZGVvIG9ubHksIE9OTFkgUkVUVVJOUyBVUkwgKi9cclxuICAgIFZJREVPOiAxLFxyXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xyXG4gICAgQUxMTUVESUE6IDIsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKi9cclxuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcclxuICAgIC8qKiBDaG9vc2UgaW1hZ2UgZnJvbSBwaWN0dXJlIGxpYnJhcnkgKHNhbWUgYXMgUEhPVE9MSUJSQVJZIGZvciBBbmRyb2lkKSAqL1xyXG4gICAgUEhPVE9MSUJSQVJZOiAwLFxyXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xyXG4gICAgQ0FNRVJBOiAxLFxyXG4gICAgLyoqIENob29zZSBpbWFnZSBmcm9tIHBpY3R1cmUgbGlicmFyeSAoc2FtZSBhcyBTQVZFRFBIT1RPQUxCVU0gZm9yIEFuZHJvaWQpICovXHJcbiAgICBTQVZFRFBIT1RPQUxCVU06IDIsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcclxuICAgKi9cclxuICBQb3BvdmVyQXJyb3dEaXJlY3Rpb24gPSB7XHJcbiAgICBBUlJPV19VUDogMSxcclxuICAgIEFSUk9XX0RPV046IDIsXHJcbiAgICBBUlJPV19MRUZUOiA0LFxyXG4gICAgQVJST1dfUklHSFQ6IDgsXHJcbiAgICBBUlJPV19BTlk6IDE1LFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XHJcbiAgICovXHJcbiAgRGlyZWN0aW9uID0ge1xyXG4gICAgLyoqIFVzZSB0aGUgYmFjay1mYWNpbmcgY2FtZXJhICovXHJcbiAgICBCQUNLOiAwLFxyXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xyXG4gICAgRlJPTlQ6IDEsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGFrZSBhIHBpY3R1cmUgb3IgdmlkZW8sIG9yIGxvYWQgb25lIGZyb20gdGhlIGxpYnJhcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggQmFzZTY0IGVuY29kaW5nIG9mIHRoZSBpbWFnZSBkYXRhLCBvciB0aGUgaW1hZ2UgZmlsZSBVUkksIGRlcGVuZGluZyBvbiBjYW1lcmFPcHRpb25zLCBvdGhlcndpc2UgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGdldFBpY3R1cmUob3B0aW9ucz86IENhbWVyYU9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGludGVybWVkaWF0ZSBpbWFnZSBmaWxlcyB0aGF0IGFyZSBrZXB0IGluIHRlbXBvcmFyeSBzdG9yYWdlIGFmdGVyIGNhbGxpbmcgY2FtZXJhLmdldFBpY3R1cmUuXHJcbiAgICogQXBwbGllcyBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIENhbWVyYS5zb3VyY2VUeXBlIGVxdWFscyBDYW1lcmEuUGljdHVyZVNvdXJjZVR5cGUuQ0FNRVJBIGFuZCB0aGUgQ2FtZXJhLmRlc3RpbmF0aW9uVHlwZSBlcXVhbHMgQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG4gIH0pXHJcbiAgY2xlYW51cCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=