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
var PhotoViewerOriginal = /** @class */ (function (_super) {
    __extends(PhotoViewerOriginal, _super);
    function PhotoViewerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PhotoViewerOriginal.prototype.show = function (url, title, options) { return cordova(this, "show", { "sync": true }, arguments); };
    PhotoViewerOriginal.pluginName = "PhotoViewer";
    PhotoViewerOriginal.plugin = "com-sarriaroman-photoviewer";
    PhotoViewerOriginal.pluginRef = "PhotoViewer";
    PhotoViewerOriginal.repo = "https://github.com/sarriaroman/photoviewer";
    PhotoViewerOriginal.platforms = ["Android", "iOS"];
    return PhotoViewerOriginal;
}(AwesomeCordovaNativePlugin));
var PhotoViewer = new PhotoViewerOriginal();
export { PhotoViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcGhvdG8tdmlld2VyL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXdEM0QsK0JBQTBCOzs7O0lBU3pELDBCQUFJLGFBQUMsR0FBVyxFQUFFLEtBQWMsRUFBRSxPQUE0Qjs7Ozs7O3NCQWxFaEU7RUF5RGlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQaG90b1ZpZXdlck9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFNldCB0byBmYWxzZSB0byBkaXNhYmxlIHRoZSBzaGFyZSBidXR0b24gKEFuZHJvaWQgb25seSkuIERlZmF1bHQ6IHRydWVcclxuICAgKi9cclxuICBzaGFyZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogQWRkIEhUVFAgaGVhZGVycyB0byB0aGUgcmVxdWVzdC4gIFVzZWZ1bCBmb3IgYXV0aGVudGljYXRlZCBwYWdlcy5cclxuICAgKiBUaGUgdmFsdWUgaXMgYSBzdHJpbmcgaW4gYSBKU09OIGZvcm1hdC4gIERlZmF1bHQ6ICcnXHJcbiAgICovXHJcbiAgaGVhZGVycz86IHN0cmluZztcclxuICAvKipcclxuICAgKiBPcHRpb24gZm9yIGNsb3NlIGJ1dHRvbiB2aXNpYmlsaXR5IHdoZW4gc2hhcmUgZmFsc2UgW09OTFkgRk9SIGlPU11cclxuICAgKi9cclxuICBjbG9zZUJ1dHRvbj86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogSWYgeW91IG5lZWQgdG8gY29weSBpbWFnZSB0byByZWZlcmVuY2UgYmVmb3JlIHNob3cgdGhlbiBzZXQgaXQgdHJ1ZSBbT05MWSBGT1IgaU9TXVxyXG4gICAqL1xyXG4gIGNvcHlUb1JlZmVyZW5jZT86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIG9yIERpc2FibGUgUGljYXNzbyBPcHRpb25zICggT25seSBBbmRyb2lkICk6IGZpdCwgY2VudGVySW5zaWRlLCBjZW50ZXJDcm9wLlxyXG4gICAqL1xyXG4gIHBpY2Nhc29PcHRpb25zPzoge1xyXG4gICAgZml0PzogYm9vbGVhbjtcclxuICAgIGNlbnRlckluc2lkZT86IGJvb2xlYW47XHJcbiAgICBjZW50ZXJDcm9wPzogYm9vbGVhbjtcclxuICB9O1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgUGhvdG8gVmlld2VyXHJcbiAqIEBkZXNjcmlwdGlvbiBUaGlzIHBsdWdpbiBjYW4gZGlzcGxheSB5b3VyIGltYWdlIGluIGZ1bGwgc2NyZWVuIHdpdGggdGhlIGFiaWxpdHkgdG8gcGFuLCB6b29tLCBhbmQgc2hhcmUgdGhlIGltYWdlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQaG90b1ZpZXdlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9waG90by12aWV3ZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBwaG90b1ZpZXdlcjogUGhvdG9WaWV3ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnKTtcclxuICpcclxuICogdGhpcy5waG90b1ZpZXdlci5zaG93KCdodHRwczovL215c2l0ZS5jb20vcGF0aC90by9pbWFnZS5qcGcnLCAnTXkgaW1hZ2UgdGl0bGUnLCB7c2hhcmU6IGZhbHNlfSk7XHJcbiAqXHJcbiAqIHRoaXMucGhvdG9WaWV3ZXIuc2hvdygnaHR0cHM6Ly9teXNlY3VyZXNpdGUuY29tL3BhdGgvdG8vaW1hZ2UuanBnJywgJ015IGltYWdlIHRpdGxlJywge3NoYXJlOiBmYWxzZSwgaGVhZGVyczogJ3t1c2VybmFtZTpmb28scGFzc3dvcmQ6YmFyfSd9KTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnUGhvdG9WaWV3ZXInLFxyXG4gIHBsdWdpbjogJ2NvbS1zYXJyaWFyb21hbi1waG90b3ZpZXdlcicsXHJcbiAgcGx1Z2luUmVmOiAnUGhvdG9WaWV3ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vc2Fycmlhcm9tYW4vcGhvdG92aWV3ZXInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBQaG90b1ZpZXdlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaG93cyBhbiBpbWFnZSBpbiBmdWxsIHNjcmVlblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVUkwgb3IgcGF0aCB0byBpbWFnZVxyXG4gICAqIEBwYXJhbSB0aXRsZSB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQaG90b1ZpZXdlck9wdGlvbnN9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2hvdyh1cmw6IHN0cmluZywgdGl0bGU/OiBzdHJpbmcsIG9wdGlvbnM/OiBQaG90b1ZpZXdlck9wdGlvbnMpOiB2b2lkIHt9XHJcbn1cclxuIl19