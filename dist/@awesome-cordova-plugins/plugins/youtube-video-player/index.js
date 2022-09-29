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
var YoutubeVideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayerOriginal, _super);
    function YoutubeVideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayerOriginal.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayerOriginal.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayerOriginal.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayerOriginal.platforms = ["Android", "iOS"];
    return YoutubeVideoPlayerOriginal;
}(AwesomeCordovaNativePlugin));
var YoutubeVideoPlayer = new YoutubeVideoPlayerOriginal();
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUNwRCxzQ0FBMEI7Ozs7SUFPaEUsc0NBQVMsYUFBQyxPQUFlOzs7Ozs7NkJBekMzQjtFQWtDd0MsMEJBQTBCO1NBQXJELGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIFlvdXR1YmUgVmlkZW8gUGxheWVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQbGF5cyBZb3VUdWJlIHZpZGVvcyBpbiBOYXRpdmUgWW91VHViZSBBcHBcclxuICogQHVzYWdlXHJcbiAqIEZvciBBbmRyb2lkIDUuMCsgeW91IHdpbGwgbmVlZCB0byBhZGQgdGhlIGZvbGxvd2luZyB0byBjb25maWcueG1sXHJcbiAqIGBgYHhtbFxyXG4gKiA8cHJlZmVyZW5jZSBuYW1lPVwiWW91VHViZURhdGFBcGlLZXlcIiB2YWx1ZT1cIltZT1VSIFlPVVRVQkUgQVBJXVwiIC8+XHJcbiAqIGBgYFxyXG4gKiBGb3IgbW9yZSBpbmZvcm1hdGlvbjogaHR0cHM6Ly9kZXZlbG9wZXJzLmdvb2dsZS5jb20veW91dHViZS92My9nZXR0aW5nLXN0YXJ0ZWRcclxuICpcclxuICpcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBZb3V0dWJlVmlkZW9QbGF5ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB5b3V0dWJlOiBZb3V0dWJlVmlkZW9QbGF5ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy55b3V0dWJlLm9wZW5WaWRlbygnbXl2aWRlb2lkJyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1lvdXR1YmVWaWRlb1BsYXllcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4teW91dHViZS12aWRlby1wbGF5ZXInLFxyXG4gIHBsdWdpblJlZjogJ1lvdXR1YmVWaWRlb1BsYXllcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9paGFkZWVkL0NvcmRvdmFZb3V0dWJlVmlkZW9QbGF5ZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBZb3V0dWJlVmlkZW9QbGF5ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUGxheXMgYSBZb3VUdWJlIHZpZGVvXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdmlkZW9JZCB7c3RyaW5nfSBWaWRlbyBJRFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG9wZW5WaWRlbyh2aWRlb0lkOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuIl19