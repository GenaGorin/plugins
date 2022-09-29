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
import { AwesomeCordovaNativePlugin, cordovaInstance, instancePropertyGet, instancePropertySet, checkAvailability } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var MediaObject = /** @class */ (function () {
    function MediaObject(_objectInstance) {
        var _this = this;
        this._objectInstance = _objectInstance;
        this.onSuccess = new Observable(function (observer) {
            _this.successCallback = observer.next.bind(observer);
            return function () { return (_this.successCallback = function () { }); };
        });
        this.onError = new Observable(function (observer) {
            _this.errorCallback = observer.next.bind(observer);
            return function () { return (_this.errorCallback = function () { }); };
        });
        this.onStatusUpdate = new Observable(function (observer) {
            _this.statusCallback = observer.next.bind(observer);
            return function () { return (_this.statusCallback = function () { }); };
        });
    }
    MediaObject.prototype.getCurrentAmplitude = function () { return cordovaInstance(this, "getCurrentAmplitude", {}, arguments); };
    MediaObject.prototype.getCurrentPosition = function () { return cordovaInstance(this, "getCurrentPosition", {}, arguments); };
    MediaObject.prototype.getDuration = function () { return cordovaInstance(this, "getDuration", { "sync": true }, arguments); };
    MediaObject.prototype.play = function (iosOptions) { return cordovaInstance(this, "play", { "sync": true }, arguments); };
    MediaObject.prototype.pause = function () { return cordovaInstance(this, "pause", { "sync": true }, arguments); };
    MediaObject.prototype.release = function () { return cordovaInstance(this, "release", { "sync": true }, arguments); };
    MediaObject.prototype.seekTo = function (milliseconds) { return cordovaInstance(this, "seekTo", { "sync": true }, arguments); };
    MediaObject.prototype.setVolume = function (volume) { return cordovaInstance(this, "setVolume", { "sync": true }, arguments); };
    MediaObject.prototype.setRate = function (speedRate) { return cordovaInstance(this, "setRate", { "sync": true }, arguments); };
    MediaObject.prototype.startRecord = function () { return cordovaInstance(this, "startRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stopRecord = function () { return cordovaInstance(this, "stopRecord", { "sync": true }, arguments); };
    MediaObject.prototype.pauseRecord = function () { return cordovaInstance(this, "pauseRecord", { "sync": true }, arguments); };
    MediaObject.prototype.resumeRecord = function () { return cordovaInstance(this, "resumeRecord", { "sync": true }, arguments); };
    MediaObject.prototype.stop = function () { return cordovaInstance(this, "stop", { "sync": true }, arguments); };
    Object.defineProperty(MediaObject.prototype, "successCallback", {
        get: function () { return instancePropertyGet(this, "successCallback"); },
        set: function (value) { instancePropertySet(this, "successCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "errorCallback", {
        get: function () { return instancePropertyGet(this, "errorCallback"); },
        set: function (value) { instancePropertySet(this, "errorCallback", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MediaObject.prototype, "statusCallback", {
        get: function () { return instancePropertyGet(this, "statusCallback"); },
        set: function (value) { instancePropertySet(this, "statusCallback", value); },
        enumerable: false,
        configurable: true
    });
    return MediaObject;
}());
export { MediaObject };
export var MEDIA_STATUS;
(function (MEDIA_STATUS) {
    MEDIA_STATUS[MEDIA_STATUS["NONE"] = 0] = "NONE";
    MEDIA_STATUS[MEDIA_STATUS["STARTING"] = 1] = "STARTING";
    MEDIA_STATUS[MEDIA_STATUS["RUNNING"] = 2] = "RUNNING";
    MEDIA_STATUS[MEDIA_STATUS["PAUSED"] = 3] = "PAUSED";
    MEDIA_STATUS[MEDIA_STATUS["STOPPED"] = 4] = "STOPPED";
})(MEDIA_STATUS || (MEDIA_STATUS = {}));
export var MEDIA_ERROR;
(function (MEDIA_ERROR) {
    MEDIA_ERROR[MEDIA_ERROR["ABORTED"] = 1] = "ABORTED";
    MEDIA_ERROR[MEDIA_ERROR["NETWORK"] = 2] = "NETWORK";
    MEDIA_ERROR[MEDIA_ERROR["DECODE"] = 3] = "DECODE";
    MEDIA_ERROR[MEDIA_ERROR["SUPPORTED"] = 4] = "SUPPORTED";
})(MEDIA_ERROR || (MEDIA_ERROR = {}));
var MediaOriginal = /** @class */ (function (_super) {
    __extends(MediaOriginal, _super);
    function MediaOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // Constants
        /**
         * @hidden
         */
        _this.MEDIA_NONE = 0;
        /**
         * @hidden
         */
        _this.MEDIA_STARTING = 1;
        /**
         * @hidden
         */
        _this.MEDIA_RUNNING = 2;
        /**
         * @hidden
         */
        _this.MEDIA_PAUSED = 3;
        /**
         * @hidden
         */
        _this.MEDIA_STOPPED = 4;
        // error codes
        /**
         * @hidden
         */
        _this.MEDIA_ERR_ABORTED = 1;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NETWORK = 2;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_DECODE = 3;
        /**
         * @hidden
         */
        _this.MEDIA_ERR_NONE_SUPPORTED = 4;
        return _this;
    }
    /**
     * Open a media file
     *
     * @param src {string} A URI containing the audio content.
     * @returns {MediaObject}
     */
    MediaOriginal.prototype.create = function (src) {
        var instance;
        if (checkAvailability(MediaOriginal.getPluginRef(), null, MediaOriginal.getPluginName()) === true) {
            // Creates a new media object
            instance = new (MediaOriginal.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    MediaOriginal.pluginName = "Media";
    MediaOriginal.repo = "https://github.com/apache/cordova-plugin-media";
    MediaOriginal.plugin = "cordova-plugin-media";
    MediaOriginal.pluginRef = "Media";
    MediaOriginal.platforms = ["Android", "Browser", "iOS", "Windows"];
    return MediaOriginal;
}(AwesomeCordovaNativePlugin));
var Media = new MediaOriginal();
export { Media };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWVkaWEvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8seUZBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUFvQzFDLHFCQUFvQixlQUFvQjtRQUF4QyxpQkFlQztRQWZtQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxDQUFNLFVBQUMsUUFBdUI7WUFDM0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQWMsVUFBQyxRQUErQjtZQUN6RSxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxjQUFPLENBQUMsQ0FBQyxFQUEvQixDQUErQixDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFVBQVUsQ0FBZSxVQUFDLFFBQWdDO1lBQ2xGLEtBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUUQseUNBQW1CO0lBVW5CLHdDQUFrQjtJQVVsQixpQ0FBVztJQVlYLDBCQUFJLGFBQUMsVUFBOEU7SUFNbkYsMkJBQUs7SUFNTCw2QkFBTztJQVFQLDRCQUFNLGFBQUMsWUFBb0I7SUFRM0IsK0JBQVMsYUFBQyxNQUFjO0lBR3hCLDZCQUFPLGFBQUMsU0FBaUI7SUFNekIsaUNBQVc7SUFNWCxnQ0FBVTtJQU1WLGlDQUFXO0lBTVgsa0NBQVk7SUFNWiwwQkFBSTswQkFoSWdCLHdDQUFlOzs7Ozs7MEJBS2Ysc0NBQWE7Ozs7OzswQkFLYix1Q0FBYzs7Ozs7O3NCQTFDcEM7OztBQWlMQSxNQUFNLENBQU4sSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUix1REFBUSxDQUFBO0lBQ1IscURBQU8sQ0FBQTtJQUNQLG1EQUFNLENBQUE7SUFDTixxREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFlBQVksS0FBWixZQUFZLFFBTXZCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixtREFBVyxDQUFBO0lBQ1gsbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7SUFDTix1REFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCOztJQTZHMEIseUJBQTBCOzs7UUFDbkQsWUFBWTtRQUNaOztXQUVHO1FBQ0gsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZjs7V0FFRztRQUNILG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25COztXQUVHO1FBQ0gsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEI7O1dBRUc7UUFDSCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGNBQWM7UUFDZDs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQjs7V0FFRztRQUNILDhCQUF3QixHQUFHLENBQUMsQ0FBQzs7O0lBRTdCOzs7OztPQUtHO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqRiw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7O2dCQW5XSDtFQTJTMkIsMEJBQTBCO1NBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7XHJcbiAgQ29yZG92YUluc3RhbmNlLFxyXG4gIEluc3RhbmNlUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbiAgUGx1Z2luLFxyXG4gIGNoZWNrQXZhaWxhYmlsaXR5LFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTWVkaWFPYmplY3Qge1xyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugb24gYWN0aW9ucyBzdWNjZXNzXHJcbiAgICovXHJcbiAgb25TdWNjZXNzOiBPYnNlcnZhYmxlPGFueT47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiBhbiBlcnJvciBvY2N1cnNcclxuICAgKi9cclxuICBvbkVycm9yOiBPYnNlcnZhYmxlPE1FRElBX0VSUk9SPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIHRoZSBmaWxlIHN0YXR1cyBjaGFuZ2VzXHJcbiAgICovXHJcbiAgb25TdGF0dXNVcGRhdGU6IE9ic2VydmFibGU8TUVESUFfU1RBVFVTPjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3VjY2Vzc0NhbGxiYWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgZXJyb3JDYWxsYmFjazogRnVuY3Rpb247XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBASW5zdGFuY2VQcm9wZXJ0eSgpIHN0YXR1c0NhbGxiYWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueSkge1xyXG4gICAgdGhpcy5vblN1Y2Nlc3MgPSBuZXcgT2JzZXJ2YWJsZTxhbnk+KChvYnNlcnZlcjogT2JzZXJ2ZXI8YW55PikgPT4ge1xyXG4gICAgICB0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XHJcbiAgICAgIHJldHVybiAoKSA9PiAodGhpcy5zdWNjZXNzQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uRXJyb3IgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9FUlJPUj4oKG9ic2VydmVyOiBPYnNlcnZlcjxNRURJQV9FUlJPUj4pID0+IHtcclxuICAgICAgdGhpcy5lcnJvckNhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcclxuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLmVycm9yQ2FsbGJhY2sgPSAoKSA9PiB7fSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uU3RhdHVzVXBkYXRlID0gbmV3IE9ic2VydmFibGU8TUVESUFfU1RBVFVTPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX1NUQVRVUz4pID0+IHtcclxuICAgICAgdGhpcy5zdGF0dXNDYWxsYmFjayA9IG9ic2VydmVyLm5leHQuYmluZChvYnNlcnZlcik7XHJcbiAgICAgIHJldHVybiAoKSA9PiAodGhpcy5zdGF0dXNDYWxsYmFjayA9ICgpID0+IHt9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmcuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZ2V0Q3VycmVudEFtcGxpdHVkZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBjdXJyZW50IHBvc2l0aW9uIHdpdGhpbiBhbiBhdWRpbyBmaWxlLiBBbHNvIHVwZGF0ZXMgdGhlIE1lZGlhIG9iamVjdCdzIHBvc2l0aW9uIHBhcmFtZXRlci5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIHBvc2l0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoKVxyXG4gIGdldEN1cnJlbnRQb3NpdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IHRoZSBkdXJhdGlvbiBvZiBhbiBhdWRpbyBmaWxlIGluIHNlY29uZHMuIElmIHRoZSBkdXJhdGlvbiBpcyB1bmtub3duLCBpdCByZXR1cm5zIGEgdmFsdWUgb2YgLTEuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIGEgcHJvbWlzZSB3aXRoIHRoZSBkdXJhdGlvbiBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGdldER1cmF0aW9uKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgb3IgcmVzdW1lcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaW9zT3B0aW9uc1xyXG4gICAqIEBwYXJhbSBpb3NPcHRpb25zLm51bWJlck9mTG9vcHNcclxuICAgKiBAcGFyYW0gaW9zT3B0aW9ucy5wbGF5QXVkaW9XaGVuU2NyZWVuSXNMb2NrZWRcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHBsYXkoaW9zT3B0aW9ucz86IHsgbnVtYmVyT2ZMb29wcz86IG51bWJlcjsgcGxheUF1ZGlvV2hlblNjcmVlbklzTG9ja2VkPzogYm9vbGVhbiB9KTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBQYXVzZXMgcGxheWluZyBhbiBhdWRpbyBmaWxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcGF1c2UoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBSZWxlYXNlcyB0aGUgdW5kZXJseWluZyBvcGVyYXRpbmcgc3lzdGVtJ3MgYXVkaW8gcmVzb3VyY2VzLiBUaGlzIGlzIHBhcnRpY3VsYXJseSBpbXBvcnRhbnQgZm9yIEFuZHJvaWQsIHNpbmNlIHRoZXJlIGFyZSBhIGZpbml0ZSBhbW91bnQgb2YgT3BlbkNvcmUgaW5zdGFuY2VzIGZvciBtZWRpYSBwbGF5YmFjay4gQXBwbGljYXRpb25zIHNob3VsZCBjYWxsIHRoZSByZWxlYXNlIGZ1bmN0aW9uIGZvciBhbnkgTWVkaWEgcmVzb3VyY2UgdGhhdCBpcyBubyBsb25nZXIgbmVlZGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVsZWFzZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldHMgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gbWlsbGlzZWNvbmRzIFRoZSB0aW1lIHBvc2l0aW9uIHlvdSB3YW50IHRvIHNldCBmb3IgdGhlIGN1cnJlbnQgYXVkaW8gZmlsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2Vla1RvKG1pbGxpc2Vjb25kczogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTZXQgdGhlIHZvbHVtZSBmb3IgYW4gYXVkaW8gZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gVGhlIHZvbHVtZSB0byBzZXQgZm9yIHBsYXliYWNrLiBUaGUgdmFsdWUgbXVzdCBiZSB3aXRoaW4gdGhlIHJhbmdlIG9mIDAuMCB0byAxLjAuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRWb2x1bWUodm9sdW1lOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2V0UmF0ZShzcGVlZFJhdGU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHJlY29yZGluZyBhbiBhdWRpbyBmaWxlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RhcnRSZWNvcmQoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0b3BSZWNvcmQoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBQYXVzZXMgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBwYXVzZVJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc3VtZXMgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICByZXN1bWVSZWNvcmQoKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzdG9wKCk6IHZvaWQge31cclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVkaWFTdGF0dXNVcGRhdGVDYWxsYmFjayA9IChzdGF0dXNDb2RlOiBudW1iZXIpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhRXJyb3Ige1xyXG4gIC8qKlxyXG4gICAqIEVycm9yIG1lc3NhZ2VcclxuICAgKi9cclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVycm9yIGNvZGVcclxuICAgKi9cclxuICBjb2RlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1FRElBX1NUQVRVUyB7XHJcbiAgTk9ORSA9IDAsXHJcbiAgU1RBUlRJTkcsXHJcbiAgUlVOTklORyxcclxuICBQQVVTRUQsXHJcbiAgU1RPUFBFRCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUVESUFfRVJST1Ige1xyXG4gIEFCT1JURUQgPSAxLFxyXG4gIE5FVFdPUkssXHJcbiAgREVDT0RFLFxyXG4gIFNVUFBPUlRFRCxcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgTWVkaWFFcnJvckNhbGxiYWNrID0gKGVycm9yOiBNZWRpYUVycm9yKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE1lZGlhXHJcbiAqIEBwcmVtaWVyIG1lZGlhXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBwcm92aWRlcyB0aGUgYWJpbGl0eSB0byByZWNvcmQgYW5kIHBsYXkgYmFjayBhdWRpbyBmaWxlcyBvbiBhIGRldmljZS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21lZGlhL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhKSB7IH1cclxuICpcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIC8vIENyZWF0ZSBhIE1lZGlhIGluc3RhbmNlLiAgRXhwZWN0cyBwYXRoIHRvIGZpbGUgb3IgdXJsIGFzIGFyZ3VtZW50XHJcbiAqIC8vIFdlIGNhbiBvcHRpb25hbGx5IHBhc3MgYSBzZWNvbmQgYXJndW1lbnQgdG8gdHJhY2sgdGhlIHN0YXR1cyBvZiB0aGUgbWVkaWFcclxuICpcclxuICogY29uc3QgZmlsZTogTWVkaWFPYmplY3QgPSB0aGlzLm1lZGlhLmNyZWF0ZSgnZmlsZS5tcDMnKTtcclxuICpcclxuICogLy8gdG8gbGlzdGVuIHRvIHBsdWdpbiBldmVudHM6XHJcbiAqXHJcbiAqIGZpbGUub25TdGF0dXNVcGRhdGUuc3Vic2NyaWJlKHN0YXR1cyA9PiBjb25zb2xlLmxvZyhzdGF0dXMpKTsgLy8gZmlyZXMgd2hlbiBmaWxlIHN0YXR1cyBjaGFuZ2VzXHJcbiAqXHJcbiAqIGZpbGUub25TdWNjZXNzLnN1YnNjcmliZSgoKSA9PiBjb25zb2xlLmxvZygnQWN0aW9uIGlzIHN1Y2Nlc3NmdWwnKSk7XHJcbiAqXHJcbiAqIGZpbGUub25FcnJvci5zdWJzY3JpYmUoZXJyb3IgPT4gY29uc29sZS5sb2coJ0Vycm9yIScsIGVycm9yKSk7XHJcbiAqXHJcbiAqIC8vIHBsYXkgdGhlIGZpbGVcclxuICogZmlsZS5wbGF5KCk7XHJcbiAqXHJcbiAqIC8vIHBhdXNlIHRoZSBmaWxlXHJcbiAqIGZpbGUucGF1c2UoKTtcclxuICpcclxuICogLy8gZ2V0IGN1cnJlbnQgcGxheWJhY2sgcG9zaXRpb25cclxuICogZmlsZS5nZXRDdXJyZW50UG9zaXRpb24oKS50aGVuKChwb3NpdGlvbikgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKHBvc2l0aW9uKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIGdldCBmaWxlIGR1cmF0aW9uXHJcbiAqIGxldCBkdXJhdGlvbiA9IGZpbGUuZ2V0RHVyYXRpb24oKTtcclxuICogY29uc29sZS5sb2coZHVyYXRpb24pO1xyXG4gKlxyXG4gKiAvLyBza2lwIHRvIDEwIHNlY29uZHMgKGV4cGVjdHMgaW50IHZhbHVlIGluIG1zKVxyXG4gKiBmaWxlLnNlZWtUbygxMDAwMCk7XHJcbiAqXHJcbiAqIC8vIHN0b3AgcGxheWluZyB0aGUgZmlsZVxyXG4gKiBmaWxlLnN0b3AoKTtcclxuICpcclxuICogLy8gcmVsZWFzZSB0aGUgbmF0aXZlIGF1ZGlvIHJlc291cmNlXHJcbiAqIC8vIFBsYXRmb3JtIFF1aXJrczpcclxuICogLy8gaU9TIHNpbXBseSBjcmVhdGUgYSBuZXcgaW5zdGFuY2UgYW5kIHRoZSBvbGQgb25lIHdpbGwgYmUgb3ZlcndyaXR0ZW5cclxuICogLy8gQW5kcm9pZCB5b3UgbXVzdCBjYWxsIHJlbGVhc2UoKSB0byBkZXN0cm95IGluc3RhbmNlcyBvZiBtZWRpYSB3aGVuIHlvdSBhcmUgZG9uZVxyXG4gKiBmaWxlLnJlbGVhc2UoKTtcclxuICpcclxuICpcclxuICpcclxuICogLy8gUmVjb3JkaW5nIHRvIGEgZmlsZVxyXG4gKiBjb25zdCBmaWxlOiBNZWRpYU9iamVjdCA9IHRoaXMubWVkaWEuY3JlYXRlKCdwYXRoL3RvL2ZpbGUubXAzJyk7XHJcbiAqXHJcbiAqIGZpbGUuc3RhcnRSZWNvcmQoKTtcclxuICpcclxuICogZmlsZS5zdG9wUmVjb3JkKCk7XHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBTb21lIGhpbnRzIGlmIHlvdSBhcmUgdXNpbmcgaU9TIGFuZCByZWNvcmRpbmcgZG9lc24ndCB3b3JrOlxyXG4gKiAxLikgVHJ5IHRvIHVzZSBhIGFic29sdXRlIGZpbGUgcGF0aCBidXQgcmVtb3ZlIGJlZ2lubmluZyBcImZpbGU6Ly9cIi5cclxuICogVGhlbiBpdCBsb29rcyBsaWtlOiBgL3Zhci9tb2JpbGUvQ29udGFpbmVycy9EYXRhL0FwcGxpY2F0aW9uL0FGNDM4QjhCLTc3MjQtNEZCQi04RTY5LTA4MzQ2MzIyNEZDNC90bXAvbXlfZmlsZS5tNGFgXHJcbiAqIEV4YW1wbGU6IGB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKWBcclxuICogMi4pIElmIHRoYXQncyBub3Qgd29ya2luZywgdG9vLCBjcmVhdGUgdGhlIGZpbGUgYmVmb3JlIHVzaW5nLlxyXG4gKiBFeGFtcGxlOlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE1lZGlhLCBNZWRpYU9iamVjdCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tZWRpYS9uZ3gnO1xyXG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUvbmd4JztcclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbWVkaWE6IE1lZGlhLCBwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlLmNyZWF0ZUZpbGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnksICdteV9maWxlLm00YScsIHRydWUpLnRoZW4oKCkgPT4ge1xyXG4gKiAgIGxldCBmaWxlID0gdGhpcy5tZWRpYS5jcmVhdGUodGhpcy5maWxlLnRlbXBEaXJlY3RvcnkucmVwbGFjZSgvXmZpbGU6XFwvXFwvLywgJycpICsgJ215X2ZpbGUubTRhJyk7XHJcbiAqICAgZmlsZS5zdGFydFJlY29yZCgpO1xyXG4gKiAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IGZpbGUuc3RvcFJlY29yZCgpLCAxMDAwMCk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBmaW5kIHRoZSByZWFzb25zIGhlcmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9pb25pYy10ZWFtL2lvbmljLW5hdGl2ZS9pc3N1ZXMvMTQ1MiNpc3N1ZWNvbW1lbnQtMjk5NjA1OTA2XHJcbiAqIEBjbGFzc2VzXHJcbiAqIE1lZGlhT2JqZWN0XHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIE1lZGlhRXJyb3JcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdNZWRpYScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tbWVkaWEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW1lZGlhJyxcclxuICBwbHVnaW5SZWY6ICdNZWRpYScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZWRpYSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvLyBDb25zdGFudHNcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfTk9ORSA9IDA7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX1NUQVJUSU5HID0gMTtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfUlVOTklORyA9IDI7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX1BBVVNFRCA9IDM7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX1NUT1BQRUQgPSA0O1xyXG5cclxuICAvLyBlcnJvciBjb2Rlc1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9FUlJfQUJPUlRFRCA9IDE7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX0VSUl9ORVRXT1JLID0gMjtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfRVJSX0RFQ09ERSA9IDM7XHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX0VSUl9OT05FX1NVUFBPUlRFRCA9IDQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW4gYSBtZWRpYSBmaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3JjIHtzdHJpbmd9IEEgVVJJIGNvbnRhaW5pbmcgdGhlIGF1ZGlvIGNvbnRlbnQuXHJcbiAgICogQHJldHVybnMge01lZGlhT2JqZWN0fVxyXG4gICAqL1xyXG4gIGNyZWF0ZShzcmM6IHN0cmluZyk6IE1lZGlhT2JqZWN0IHtcclxuICAgIGxldCBpbnN0YW5jZTogYW55O1xyXG5cclxuICAgIGlmIChjaGVja0F2YWlsYWJpbGl0eShNZWRpYS5nZXRQbHVnaW5SZWYoKSwgbnVsbCwgTWVkaWEuZ2V0UGx1Z2luTmFtZSgpKSA9PT0gdHJ1ZSkge1xyXG4gICAgICAvLyBDcmVhdGVzIGEgbmV3IG1lZGlhIG9iamVjdFxyXG4gICAgICBpbnN0YW5jZSA9IG5ldyAoTWVkaWEuZ2V0UGx1Z2luKCkpKHNyYyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIG5ldyBNZWRpYU9iamVjdChpbnN0YW5jZSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==