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
var VideoPlayerOriginal = /** @class */ (function (_super) {
    __extends(VideoPlayerOriginal, _super);
    function VideoPlayerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VideoPlayerOriginal.prototype.play = function (fileUrl, options) { return cordova(this, "play", {}, arguments); };
    VideoPlayerOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    VideoPlayerOriginal.pluginName = "VideoPlayer";
    VideoPlayerOriginal.plugin = "https://github.com/moust/cordova-plugin-videoplayer.git";
    VideoPlayerOriginal.pluginRef = "VideoPlayer";
    VideoPlayerOriginal.repo = "https://github.com/moust/cordova-plugin-videoplayer";
    VideoPlayerOriginal.platforms = ["Android"];
    return VideoPlayerOriginal;
}(AwesomeCordovaNativePlugin));
var VideoPlayer = new VideoPlayerOriginal();
export { VideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdmlkZW8tcGxheWVyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQW1EM0QsK0JBQTBCOzs7O0lBU3pELDBCQUFJLGFBQUMsT0FBZSxFQUFFLE9BQXNCO0lBUTVDLDJCQUFLOzs7Ozs7c0JBckVQO0VBb0RpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBPcHRpb25zIGZvciB0aGUgdmlkZW8gcGxheWJhY2sgdXNpbmcgdGhlIGBwbGF5YCBmdW5jdGlvbi5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBTZXQgdGhlIGluaXRpYWwgdm9sdW1lIG9mIHRoZSB2aWRlbyBwbGF5YmFjaywgd2hlcmUgMC4wIGlzIDAlIHZvbHVtZSBhbmQgMS4wIGlzIDEwMCUuXHJcbiAgICogRm9yIGV4YW1wbGU6IGZvciBhIHZvbHVtZSBvZiAzMCUgc2V0IHRoZSB2YWx1ZSB0byAwLjMuXHJcbiAgICovXHJcbiAgdm9sdW1lPzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZXJlIGFyZSB0d28gb3B0aW9ucyBmb3IgdGhlIHNjYWxpbmcgbW9kZS4gU0NBTEVfVE9fRklUIHdoaWNoIGlzIGRlZmF1bHQgYW5kIFNDQUxFX1RPX0ZJVF9XSVRIX0NST1BQSU5HLlxyXG4gICAqIFRoZXNlIHN0cmluZ3MgYXJlIHRoZSBvbmx5IG9uZXMgd2hpY2ggY2FuIGJlIHBhc3NlZCBhcyBvcHRpb24uXHJcbiAgICovXHJcbiAgc2NhbGluZ01vZGU/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBWaWRlbyBQbGF5ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIEEgQ29yZG92YSBwbHVnaW4gdGhhdCBzaW1wbHkgYWxsb3dzIHlvdSB0byBpbW1lZGlhdGVseSBwbGF5IGEgdmlkZW8gaW4gZnVsbHNjcmVlbiBtb2RlLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvbS5tb3VzdC5jb3Jkb3ZhLnZpZGVvcGxheWVyYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW1ZpZGVvUGxheWVyIHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vbW91c3QvY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXIpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBWaWRlb1BsYXllciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy92aWRlby1wbGF5ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSB2aWRlb1BsYXllcjogVmlkZW9QbGF5ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gUGxheWluZyBhIHZpZGVvLlxyXG4gKiB0aGlzLnZpZGVvUGxheWVyLnBsYXkoJ2ZpbGU6Ly8vYW5kcm9pZF9hc3NldC93d3cvbW92aWUubXA0JykudGhlbigoKSA9PiB7XHJcbiAqICBjb25zb2xlLmxvZygndmlkZW8gY29tcGxldGVkJyk7XHJcbiAqIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAqICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIFZpZGVvT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1ZpZGVvUGxheWVyJyxcclxuICBwbHVnaW46ICdodHRwczovL2dpdGh1Yi5jb20vbW91c3QvY29yZG92YS1wbHVnaW4tdmlkZW9wbGF5ZXIuZ2l0JyxcclxuICBwbHVnaW5SZWY6ICdWaWRlb1BsYXllcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tb3VzdC9jb3Jkb3ZhLXBsdWdpbi12aWRlb3BsYXllcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVmlkZW9QbGF5ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUGxheXMgdGhlIHZpZGVvIGZyb20gdGhlIHBhc3NlZCB1cmwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBGaWxlIHVybCB0byB0aGUgdmlkZW8uXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1ZpZGVvT3B0aW9ucz99IE9wdGlvbmFsIHZpZGVvIHBsYXliYWNrIHNldHRpbmdzLiBTZWUgb3B0aW9ucyBhYm92ZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIHZpZGVvIHdhcyBwbGF5ZWQgc3VjY2Vzc2Z1bGx5LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwbGF5KGZpbGVVcmw6IHN0cmluZywgb3B0aW9ucz86IFZpZGVvT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyB0aGUgdmlkZW8gcGxheWJhY2sgaW1tZWRpYXRseS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjbG9zZSgpOiB2b2lkIHt9XHJcbn1cclxuIl19