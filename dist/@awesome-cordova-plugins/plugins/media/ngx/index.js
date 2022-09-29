import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var Media = /** @class */ (function (_super) {
    __extends(Media, _super);
    function Media() {
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
    Media.prototype.create = function (src) {
        var instance;
        if (checkAvailability(Media.getPluginRef(), null, Media.getPluginName()) === true) {
            // Creates a new media object
            instance = new (Media.getPlugin())(src);
        }
        return new MediaObject(instance);
    };
    Media.pluginName = "Media";
    Media.repo = "https://github.com/apache/cordova-plugin-media";
    Media.plugin = "cordova-plugin-media";
    Media.pluginRef = "Media";
    Media.platforms = ["Android", "Browser", "iOS", "Windows"];
    Media.decorators = [
        { type: Injectable }
    ];
    return Media;
}(AwesomeCordovaNativePlugin));
export { Media };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbWVkaWEvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8seUZBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sK0JBQStCLENBQUM7QUFDdkMsT0FBTyxFQUFFLFVBQVUsRUFBWSxNQUFNLE1BQU0sQ0FBQzs7SUFvQzFDLHFCQUFvQixlQUFvQjtRQUF4QyxpQkFlQztRQWZtQixvQkFBZSxHQUFmLGVBQWUsQ0FBSztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksVUFBVSxDQUFNLFVBQUMsUUFBdUI7WUFDM0QsS0FBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNwRCxPQUFPLGNBQU0sT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsY0FBTyxDQUFDLENBQUMsRUFBakMsQ0FBaUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxVQUFVLENBQWMsVUFBQyxRQUErQjtZQUN6RSxLQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE9BQU8sY0FBTSxPQUFBLENBQUMsS0FBSSxDQUFDLGFBQWEsR0FBRyxjQUFPLENBQUMsQ0FBQyxFQUEvQixDQUErQixDQUFDO1FBQy9DLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLFVBQVUsQ0FBZSxVQUFDLFFBQWdDO1lBQ2xGLEtBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDbkQsT0FBTyxjQUFNLE9BQUEsQ0FBQyxLQUFJLENBQUMsY0FBYyxHQUFHLGNBQU8sQ0FBQyxDQUFDLEVBQWhDLENBQWdDLENBQUM7UUFDaEQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBUUQseUNBQW1CO0lBVW5CLHdDQUFrQjtJQVVsQixpQ0FBVztJQVlYLDBCQUFJLGFBQUMsVUFBOEU7SUFNbkYsMkJBQUs7SUFNTCw2QkFBTztJQVFQLDRCQUFNLGFBQUMsWUFBb0I7SUFRM0IsK0JBQVMsYUFBQyxNQUFjO0lBR3hCLDZCQUFPLGFBQUMsU0FBaUI7SUFNekIsaUNBQVc7SUFNWCxnQ0FBVTtJQU1WLGlDQUFXO0lBTVgsa0NBQVk7SUFNWiwwQkFBSTswQkFoSWdCLHdDQUFlOzs7Ozs7MEJBS2Ysc0NBQWE7Ozs7OzswQkFLYix1Q0FBYzs7Ozs7O3NCQTFDcEM7OztBQWlMQSxNQUFNLENBQU4sSUFBWSxZQU1YO0FBTkQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUix1REFBUSxDQUFBO0lBQ1IscURBQU8sQ0FBQTtJQUNQLG1EQUFNLENBQUE7SUFDTixxREFBTyxDQUFBO0FBQ1QsQ0FBQyxFQU5XLFlBQVksS0FBWixZQUFZLFFBTXZCO0FBRUQsTUFBTSxDQUFOLElBQVksV0FLWDtBQUxELFdBQVksV0FBVztJQUNyQixtREFBVyxDQUFBO0lBQ1gsbURBQU8sQ0FBQTtJQUNQLGlEQUFNLENBQUE7SUFDTix1REFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUxXLFdBQVcsS0FBWCxXQUFXLFFBS3RCOztJQTZHMEIseUJBQTBCOzs7UUFDbkQsWUFBWTtRQUNaOztXQUVHO1FBQ0gsZ0JBQVUsR0FBRyxDQUFDLENBQUM7UUFDZjs7V0FFRztRQUNILG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25COztXQUVHO1FBQ0gsbUJBQWEsR0FBRyxDQUFDLENBQUM7UUFDbEI7O1dBRUc7UUFDSCxrQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQjs7V0FFRztRQUNILG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBRWxCLGNBQWM7UUFDZDs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHVCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0Qjs7V0FFRztRQUNILHNCQUFnQixHQUFHLENBQUMsQ0FBQztRQUNyQjs7V0FFRztRQUNILDhCQUF3QixHQUFHLENBQUMsQ0FBQzs7O0lBRTdCOzs7OztPQUtHO0lBQ0gsc0JBQU0sR0FBTixVQUFPLEdBQVc7UUFDaEIsSUFBSSxRQUFhLENBQUM7UUFFbEIsSUFBSSxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQyxLQUFLLElBQUksRUFBRTtZQUNqRiw2QkFBNkI7WUFDN0IsUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN6QztRQUVELE9BQU8sSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsQ0FBQzs7Ozs7OztnQkF6REYsVUFBVTs7Z0JBMVNYO0VBMlMyQiwwQkFBMEI7U0FBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDb3Jkb3ZhSW5zdGFuY2UsXHJcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcclxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxuICBQbHVnaW4sXHJcbiAgY2hlY2tBdmFpbGFiaWxpdHksXHJcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBNZWRpYU9iamVjdCB7XHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSBvbiBhY3Rpb25zIHN1Y2Nlc3NcclxuICAgKi9cclxuICBvblN1Y2Nlc3M6IE9ic2VydmFibGU8YW55PjtcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gb2JzZXJ2YWJsZSB0aGF0IG5vdGlmaWVzIHlvdSB3aGVuIGFuIGVycm9yIG9jY3Vyc1xyXG4gICAqL1xyXG4gIG9uRXJyb3I6IE9ic2VydmFibGU8TUVESUFfRVJST1I+O1xyXG5cclxuICAvKipcclxuICAgKiBBbiBvYnNlcnZhYmxlIHRoYXQgbm90aWZpZXMgeW91IHdoZW4gdGhlIGZpbGUgc3RhdHVzIGNoYW5nZXNcclxuICAgKi9cclxuICBvblN0YXR1c1VwZGF0ZTogT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+O1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBzdWNjZXNzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgQEluc3RhbmNlUHJvcGVydHkoKSBlcnJvckNhbGxiYWNrOiBGdW5jdGlvbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIEBJbnN0YW5jZVByb3BlcnR5KCkgc3RhdHVzQ2FsbGJhY2s6IEZ1bmN0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9vYmplY3RJbnN0YW5jZTogYW55KSB7XHJcbiAgICB0aGlzLm9uU3VjY2VzcyA9IG5ldyBPYnNlcnZhYmxlPGFueT4oKG9ic2VydmVyOiBPYnNlcnZlcjxhbnk+KSA9PiB7XHJcbiAgICAgIHRoaXMuc3VjY2Vzc0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcclxuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN1Y2Nlc3NDYWxsYmFjayA9ICgpID0+IHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25FcnJvciA9IG5ldyBPYnNlcnZhYmxlPE1FRElBX0VSUk9SPigob2JzZXJ2ZXI6IE9ic2VydmVyPE1FRElBX0VSUk9SPikgPT4ge1xyXG4gICAgICB0aGlzLmVycm9yQ2FsbGJhY2sgPSBvYnNlcnZlci5uZXh0LmJpbmQob2JzZXJ2ZXIpO1xyXG4gICAgICByZXR1cm4gKCkgPT4gKHRoaXMuZXJyb3JDYWxsYmFjayA9ICgpID0+IHt9KTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMub25TdGF0dXNVcGRhdGUgPSBuZXcgT2JzZXJ2YWJsZTxNRURJQV9TVEFUVVM+KChvYnNlcnZlcjogT2JzZXJ2ZXI8TUVESUFfU1RBVFVTPikgPT4ge1xyXG4gICAgICB0aGlzLnN0YXR1c0NhbGxiYWNrID0gb2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKTtcclxuICAgICAgcmV0dXJuICgpID0+ICh0aGlzLnN0YXR1c0NhbGxiYWNrID0gKCkgPT4ge30pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgYW1wbGl0dWRlIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGFtcGxpdHVkZSBvZiB0aGUgY3VycmVudCByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKClcclxuICBnZXRDdXJyZW50QW1wbGl0dWRlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGN1cnJlbnQgcG9zaXRpb24gd2l0aGluIGFuIGF1ZGlvIGZpbGUuIEFsc28gdXBkYXRlcyB0aGUgTWVkaWEgb2JqZWN0J3MgcG9zaXRpb24gcGFyYW1ldGVyLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2Ugd2l0aCB0aGUgcG9zaXRpb24gb2YgdGhlIGN1cnJlbnQgcmVjb3JkaW5nXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSgpXHJcbiAgZ2V0Q3VycmVudFBvc2l0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIGR1cmF0aW9uIG9mIGFuIGF1ZGlvIGZpbGUgaW4gc2Vjb25kcy4gSWYgdGhlIGR1cmF0aW9uIGlzIHVua25vd24sIGl0IHJldHVybnMgYSB2YWx1ZSBvZiAtMS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFJldHVybnMgYSBwcm9taXNlIHdpdGggdGhlIGR1cmF0aW9uIG9mIHRoZSBjdXJyZW50IHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZ2V0RHVyYXRpb24oKTogbnVtYmVyIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0cyBvciByZXN1bWVzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpb3NPcHRpb25zXHJcbiAgICogQHBhcmFtIGlvc09wdGlvbnMubnVtYmVyT2ZMb29wc1xyXG4gICAqIEBwYXJhbSBpb3NPcHRpb25zLnBsYXlBdWRpb1doZW5TY3JlZW5Jc0xvY2tlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcGxheShpb3NPcHRpb25zPzogeyBudW1iZXJPZkxvb3BzPzogbnVtYmVyOyBwbGF5QXVkaW9XaGVuU2NyZWVuSXNMb2NrZWQ/OiBib29sZWFuIH0pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyBwbGF5aW5nIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBwYXVzZSgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbGVhc2VzIHRoZSB1bmRlcmx5aW5nIG9wZXJhdGluZyBzeXN0ZW0ncyBhdWRpbyByZXNvdXJjZXMuIFRoaXMgaXMgcGFydGljdWxhcmx5IGltcG9ydGFudCBmb3IgQW5kcm9pZCwgc2luY2UgdGhlcmUgYXJlIGEgZmluaXRlIGFtb3VudCBvZiBPcGVuQ29yZSBpbnN0YW5jZXMgZm9yIG1lZGlhIHBsYXliYWNrLiBBcHBsaWNhdGlvbnMgc2hvdWxkIGNhbGwgdGhlIHJlbGVhc2UgZnVuY3Rpb24gZm9yIGFueSBNZWRpYSByZXNvdXJjZSB0aGF0IGlzIG5vIGxvbmdlciBuZWVkZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICByZWxlYXNlKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyB0aGUgY3VycmVudCBwb3NpdGlvbiB3aXRoaW4gYW4gYXVkaW8gZmlsZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBtaWxsaXNlY29uZHMgVGhlIHRpbWUgcG9zaXRpb24geW91IHdhbnQgdG8gc2V0IGZvciB0aGUgY3VycmVudCBhdWRpbyBmaWxlXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzZWVrVG8obWlsbGlzZWNvbmRzOiBudW1iZXIpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgdm9sdW1lIGZvciBhbiBhdWRpbyBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSBUaGUgdm9sdW1lIHRvIHNldCBmb3IgcGxheWJhY2suIFRoZSB2YWx1ZSBtdXN0IGJlIHdpdGhpbiB0aGUgcmFuZ2Ugb2YgMC4wIHRvIDEuMC5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNldFZvbHVtZSh2b2x1bWU6IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRSYXRlKHNwZWVkUmF0ZTogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgcmVjb3JkaW5nIGFuIGF1ZGlvIGZpbGUuXHJcbiAgICovXHJcbiAgQENvcmRvdmFJbnN0YW5jZSh7IHN5bmM6IHRydWUgfSlcclxuICBzdGFydFJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHJlY29yZGluZ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhSW5zdGFuY2UoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc3RvcFJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhdXNlcyByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHBhdXNlUmVjb3JkKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdW1lcyByZWNvcmRpbmdcclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHJlc3VtZVJlY29yZCgpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW8gZmlsZS5cclxuICAgKi9cclxuICBAQ29yZG92YUluc3RhbmNlKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0b3AoKTogdm9pZCB7fVxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZWRpYVN0YXR1c1VwZGF0ZUNhbGxiYWNrID0gKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWVkaWFFcnJvciB7XHJcbiAgLyoqXHJcbiAgICogRXJyb3IgbWVzc2FnZVxyXG4gICAqL1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRXJyb3IgY29kZVxyXG4gICAqL1xyXG4gIGNvZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGVudW0gTUVESUFfU1RBVFVTIHtcclxuICBOT05FID0gMCxcclxuICBTVEFSVElORyxcclxuICBSVU5OSU5HLFxyXG4gIFBBVVNFRCxcclxuICBTVE9QUEVELFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNRURJQV9FUlJPUiB7XHJcbiAgQUJPUlRFRCA9IDEsXHJcbiAgTkVUV09SSyxcclxuICBERUNPREUsXHJcbiAgU1VQUE9SVEVELFxyXG59XHJcblxyXG5leHBvcnQgdHlwZSBNZWRpYUVycm9yQ2FsbGJhY2sgPSAoZXJyb3I6IE1lZGlhRXJyb3IpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogQG5hbWUgTWVkaWFcclxuICogQHByZW1pZXIgbWVkaWFcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIHByb3ZpZGVzIHRoZSBhYmlsaXR5IHRvIHJlY29yZCBhbmQgcGxheSBiYWNrIGF1ZGlvIGZpbGVzIG9uIGEgZGV2aWNlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBNZWRpYSwgTWVkaWFPYmplY3QgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbWVkaWEvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYTogTWVkaWEpIHsgfVxyXG4gKlxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogLy8gQ3JlYXRlIGEgTWVkaWEgaW5zdGFuY2UuICBFeHBlY3RzIHBhdGggdG8gZmlsZSBvciB1cmwgYXMgYXJndW1lbnRcclxuICogLy8gV2UgY2FuIG9wdGlvbmFsbHkgcGFzcyBhIHNlY29uZCBhcmd1bWVudCB0byB0cmFjayB0aGUgc3RhdHVzIG9mIHRoZSBtZWRpYVxyXG4gKlxyXG4gKiBjb25zdCBmaWxlOiBNZWRpYU9iamVjdCA9IHRoaXMubWVkaWEuY3JlYXRlKCdmaWxlLm1wMycpO1xyXG4gKlxyXG4gKiAvLyB0byBsaXN0ZW4gdG8gcGx1Z2luIGV2ZW50czpcclxuICpcclxuICogZmlsZS5vblN0YXR1c1VwZGF0ZS5zdWJzY3JpYmUoc3RhdHVzID0+IGNvbnNvbGUubG9nKHN0YXR1cykpOyAvLyBmaXJlcyB3aGVuIGZpbGUgc3RhdHVzIGNoYW5nZXNcclxuICpcclxuICogZmlsZS5vblN1Y2Nlc3Muc3Vic2NyaWJlKCgpID0+IGNvbnNvbGUubG9nKCdBY3Rpb24gaXMgc3VjY2Vzc2Z1bCcpKTtcclxuICpcclxuICogZmlsZS5vbkVycm9yLnN1YnNjcmliZShlcnJvciA9PiBjb25zb2xlLmxvZygnRXJyb3IhJywgZXJyb3IpKTtcclxuICpcclxuICogLy8gcGxheSB0aGUgZmlsZVxyXG4gKiBmaWxlLnBsYXkoKTtcclxuICpcclxuICogLy8gcGF1c2UgdGhlIGZpbGVcclxuICogZmlsZS5wYXVzZSgpO1xyXG4gKlxyXG4gKiAvLyBnZXQgY3VycmVudCBwbGF5YmFjayBwb3NpdGlvblxyXG4gKiBmaWxlLmdldEN1cnJlbnRQb3NpdGlvbigpLnRoZW4oKHBvc2l0aW9uKSA9PiB7XHJcbiAqICAgY29uc29sZS5sb2cocG9zaXRpb24pO1xyXG4gKiB9KTtcclxuICpcclxuICogLy8gZ2V0IGZpbGUgZHVyYXRpb25cclxuICogbGV0IGR1cmF0aW9uID0gZmlsZS5nZXREdXJhdGlvbigpO1xyXG4gKiBjb25zb2xlLmxvZyhkdXJhdGlvbik7XHJcbiAqXHJcbiAqIC8vIHNraXAgdG8gMTAgc2Vjb25kcyAoZXhwZWN0cyBpbnQgdmFsdWUgaW4gbXMpXHJcbiAqIGZpbGUuc2Vla1RvKDEwMDAwKTtcclxuICpcclxuICogLy8gc3RvcCBwbGF5aW5nIHRoZSBmaWxlXHJcbiAqIGZpbGUuc3RvcCgpO1xyXG4gKlxyXG4gKiAvLyByZWxlYXNlIHRoZSBuYXRpdmUgYXVkaW8gcmVzb3VyY2VcclxuICogLy8gUGxhdGZvcm0gUXVpcmtzOlxyXG4gKiAvLyBpT1Mgc2ltcGx5IGNyZWF0ZSBhIG5ldyBpbnN0YW5jZSBhbmQgdGhlIG9sZCBvbmUgd2lsbCBiZSBvdmVyd3JpdHRlblxyXG4gKiAvLyBBbmRyb2lkIHlvdSBtdXN0IGNhbGwgcmVsZWFzZSgpIHRvIGRlc3Ryb3kgaW5zdGFuY2VzIG9mIG1lZGlhIHdoZW4geW91IGFyZSBkb25lXHJcbiAqIGZpbGUucmVsZWFzZSgpO1xyXG4gKlxyXG4gKlxyXG4gKlxyXG4gKiAvLyBSZWNvcmRpbmcgdG8gYSBmaWxlXHJcbiAqIGNvbnN0IGZpbGU6IE1lZGlhT2JqZWN0ID0gdGhpcy5tZWRpYS5jcmVhdGUoJ3BhdGgvdG8vZmlsZS5tcDMnKTtcclxuICpcclxuICogZmlsZS5zdGFydFJlY29yZCgpO1xyXG4gKlxyXG4gKiBmaWxlLnN0b3BSZWNvcmQoKTtcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqIFNvbWUgaGludHMgaWYgeW91IGFyZSB1c2luZyBpT1MgYW5kIHJlY29yZGluZyBkb2Vzbid0IHdvcms6XHJcbiAqIDEuKSBUcnkgdG8gdXNlIGEgYWJzb2x1dGUgZmlsZSBwYXRoIGJ1dCByZW1vdmUgYmVnaW5uaW5nIFwiZmlsZTovL1wiLlxyXG4gKiBUaGVuIGl0IGxvb2tzIGxpa2U6IGAvdmFyL21vYmlsZS9Db250YWluZXJzL0RhdGEvQXBwbGljYXRpb24vQUY0MzhCOEItNzcyNC00RkJCLThFNjktMDgzNDYzMjI0RkM0L3RtcC9teV9maWxlLm00YWBcclxuICogRXhhbXBsZTogYHRoaXMubWVkaWEuY3JlYXRlKHRoaXMuZmlsZS50ZW1wRGlyZWN0b3J5LnJlcGxhY2UoL15maWxlOlxcL1xcLy8sICcnKSArICdteV9maWxlLm00YScpYFxyXG4gKiAyLikgSWYgdGhhdCdzIG5vdCB3b3JraW5nLCB0b28sIGNyZWF0ZSB0aGUgZmlsZSBiZWZvcmUgdXNpbmcuXHJcbiAqIEV4YW1wbGU6XHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTWVkaWEsIE1lZGlhT2JqZWN0IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL21lZGlhL25neCc7XHJcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS9uZ3gnO1xyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBtZWRpYTogTWVkaWEsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmZpbGUuY3JlYXRlRmlsZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeSwgJ215X2ZpbGUubTRhJywgdHJ1ZSkudGhlbigoKSA9PiB7XHJcbiAqICAgbGV0IGZpbGUgPSB0aGlzLm1lZGlhLmNyZWF0ZSh0aGlzLmZpbGUudGVtcERpcmVjdG9yeS5yZXBsYWNlKC9eZmlsZTpcXC9cXC8vLCAnJykgKyAnbXlfZmlsZS5tNGEnKTtcclxuICogICBmaWxlLnN0YXJ0UmVjb3JkKCk7XHJcbiAqICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4gZmlsZS5zdG9wUmVjb3JkKCksIDEwMDAwKTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBZb3UgY2FuIGZpbmQgdGhlIHJlYXNvbnMgaGVyZTogaHR0cHM6Ly9naXRodWIuY29tL2lvbmljLXRlYW0vaW9uaWMtbmF0aXZlL2lzc3Vlcy8xNDUyI2lzc3VlY29tbWVudC0yOTk2MDU5MDZcclxuICogQGNsYXNzZXNcclxuICogTWVkaWFPYmplY3RcclxuICogQGludGVyZmFjZXNcclxuICogTWVkaWFFcnJvclxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ01lZGlhJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1tZWRpYScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbWVkaWEnLFxyXG4gIHBsdWdpblJlZjogJ01lZGlhJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE1lZGlhIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8vIENvbnN0YW50c1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9OT05FID0gMDtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfU1RBUlRJTkcgPSAxO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9SVU5OSU5HID0gMjtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfUEFVU0VEID0gMztcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfU1RPUFBFRCA9IDQ7XHJcblxyXG4gIC8vIGVycm9yIGNvZGVzXHJcbiAgLyoqXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIE1FRElBX0VSUl9BQk9SVEVEID0gMTtcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfRVJSX05FVFdPUksgPSAyO1xyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBNRURJQV9FUlJfREVDT0RFID0gMztcclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgTUVESUFfRVJSX05PTkVfU1VQUE9SVEVEID0gNDtcclxuXHJcbiAgLyoqXHJcbiAgICogT3BlbiBhIG1lZGlhIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzcmMge3N0cmluZ30gQSBVUkkgY29udGFpbmluZyB0aGUgYXVkaW8gY29udGVudC5cclxuICAgKiBAcmV0dXJucyB7TWVkaWFPYmplY3R9XHJcbiAgICovXHJcbiAgY3JlYXRlKHNyYzogc3RyaW5nKTogTWVkaWFPYmplY3Qge1xyXG4gICAgbGV0IGluc3RhbmNlOiBhbnk7XHJcblxyXG4gICAgaWYgKGNoZWNrQXZhaWxhYmlsaXR5KE1lZGlhLmdldFBsdWdpblJlZigpLCBudWxsLCBNZWRpYS5nZXRQbHVnaW5OYW1lKCkpID09PSB0cnVlKSB7XHJcbiAgICAgIC8vIENyZWF0ZXMgYSBuZXcgbWVkaWEgb2JqZWN0XHJcbiAgICAgIGluc3RhbmNlID0gbmV3IChNZWRpYS5nZXRQbHVnaW4oKSkoc3JjKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IE1lZGlhT2JqZWN0KGluc3RhbmNlKTtcclxuICB9XHJcbn1cclxuIl19