import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var YoutubeVideoPlayer = /** @class */ (function (_super) {
    __extends(YoutubeVideoPlayer, _super);
    function YoutubeVideoPlayer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    YoutubeVideoPlayer.prototype.openVideo = function (videoId) { return cordova(this, "openVideo", { "sync": true }, arguments); };
    YoutubeVideoPlayer.pluginName = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.plugin = "cordova-plugin-youtube-video-player";
    YoutubeVideoPlayer.pluginRef = "YoutubeVideoPlayer";
    YoutubeVideoPlayer.repo = "https://github.com/ihadeed/CordovaYoutubeVideoPlayer";
    YoutubeVideoPlayer.platforms = ["Android", "iOS"];
    YoutubeVideoPlayer.decorators = [
        { type: Injectable }
    ];
    return YoutubeVideoPlayer;
}(AwesomeCordovaNativePlugin));
export { YoutubeVideoPlayer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMveW91dHViZS12aWRlby1wbGF5ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUNwRCxzQ0FBMEI7Ozs7SUFPaEUsc0NBQVMsYUFBQyxPQUFlOzs7Ozs7O2dCQVIxQixVQUFVOzs2QkFqQ1g7RUFrQ3dDLDBCQUEwQjtTQUFyRCxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbi8qKlxyXG4gKiBAbmFtZSBZb3V0dWJlIFZpZGVvIFBsYXllclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUGxheXMgWW91VHViZSB2aWRlb3MgaW4gTmF0aXZlIFlvdVR1YmUgQXBwXHJcbiAqIEB1c2FnZVxyXG4gKiBGb3IgQW5kcm9pZCA1LjArIHlvdSB3aWxsIG5lZWQgdG8gYWRkIHRoZSBmb2xsb3dpbmcgdG8gY29uZmlnLnhtbFxyXG4gKiBgYGB4bWxcclxuICogPHByZWZlcmVuY2UgbmFtZT1cIllvdVR1YmVEYXRhQXBpS2V5XCIgdmFsdWU9XCJbWU9VUiBZT1VUVUJFIEFQSV1cIiAvPlxyXG4gKiBgYGBcclxuICogRm9yIG1vcmUgaW5mb3JtYXRpb246IGh0dHBzOi8vZGV2ZWxvcGVycy5nb29nbGUuY29tL3lvdXR1YmUvdjMvZ2V0dGluZy1zdGFydGVkXHJcbiAqXHJcbiAqXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgWW91dHViZVZpZGVvUGxheWVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3lvdXR1YmUtdmlkZW8tcGxheWVyL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgeW91dHViZTogWW91dHViZVZpZGVvUGxheWVyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMueW91dHViZS5vcGVuVmlkZW8oJ215dmlkZW9pZCcpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdZb3V0dWJlVmlkZW9QbGF5ZXInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXlvdXR1YmUtdmlkZW8tcGxheWVyJyxcclxuICBwbHVnaW5SZWY6ICdZb3V0dWJlVmlkZW9QbGF5ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaWhhZGVlZC9Db3Jkb3ZhWW91dHViZVZpZGVvUGxheWVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgWW91dHViZVZpZGVvUGxheWVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFBsYXlzIGEgWW91VHViZSB2aWRlb1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHZpZGVvSWQge3N0cmluZ30gVmlkZW8gSURcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBvcGVuVmlkZW8odmlkZW9JZDogc3RyaW5nKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==