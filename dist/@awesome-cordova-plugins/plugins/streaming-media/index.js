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
var StreamingMediaOriginal = /** @class */ (function (_super) {
    __extends(StreamingMediaOriginal, _super);
    function StreamingMediaOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMediaOriginal.prototype.playVideo = function (videoUrl, options) { return cordova(this, "playVideo", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.playAudio = function (audioUrl, options) { return cordova(this, "playAudio", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.stopAudio = function () { return cordova(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMediaOriginal.prototype.pauseAudio = function () { return cordova(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMediaOriginal.prototype.resumeAudio = function () { return cordova(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMediaOriginal.pluginName = "StreamingMedia";
    StreamingMediaOriginal.plugin = "cordova-plugin-streaming-media";
    StreamingMediaOriginal.pluginRef = "plugins.streamingMedia";
    StreamingMediaOriginal.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMediaOriginal.platforms = ["Amazon Fire OS", "Android", "iOS"];
    return StreamingMediaOriginal;
}(AwesomeCordovaNativePlugin));
var StreamingMedia = new StreamingMediaOriginal();
export { StreamingMedia };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3RyZWFtaW5nLW1lZGlhL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdGeEQsa0NBQTBCOzs7O0lBUTVELGtDQUFTLGFBQUMsUUFBZ0IsRUFBRSxPQUErQjtJQVMzRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFNM0Qsa0NBQVM7SUFNVCxtQ0FBVTtJQU1WLG9DQUFXOzs7Ozs7eUJBcEhiO0VBaUZvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBPYmplY3Qgb2Ygb3B0aW9ucyB0byBwYXNzIGludG8gdGhlIHBsYXlWaWRlbyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyB7XHJcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIHN1Y2Nlc3MgcGxheWluZyBhdWRpby4gKi9cclxuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgZXJyb3IgcGxheWluZyB2aWRlby4gKi9cclxuICBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb247XHJcbiAgLyoqIEZvcmNlIG9uZSBvcmllbnRhdGlvbiBmb3IgcGxheWluZyB2aWRlby4gKi9cclxuICBvcmllbnRhdGlvbj86IHN0cmluZztcclxuICAvKiogU2hvdWxkIHRoZSB2aWRlbyBjbG9zZSBhZnRlciBpdCdzIG92ZXIuIERlZmF1bHRzIHRvIHRydWUuICovXHJcbiAgc2hvdWxkQXV0b0Nsb3NlPzogYm9vbGVhbjtcclxuICAvKiogU2hvdWxkIHRoZSB2aWRlbyBoYXZlIGNvbnRyb2xzLiBEZWZhdWx0cyB0byB0cnVlLiBBbmRyb2lkIG9ubHkuICovXHJcbiAgY29udHJvbHM/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogT2JqZWN0IG9mIG9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBwbGF5QXVkaW8gbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdBdWRpb09wdGlvbnMge1xyXG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhdWRpbyBwbGF5ZXIuICovXHJcbiAgYmdDb2xvcj86IHN0cmluZztcclxuICAvKiogQmFja2dyb3VuZCBpbWFnZSBmb3IgYXVkaW8gcGxheWVyLiAqL1xyXG4gIGJnSW1hZ2U/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogQmFja2dyb3VuZCBpbWFnZSBzY2FsZSBmb3IgYXVkaW8gcGxheWVyLlxyXG4gICAqIFZhbGlkIHZhbHVlcyBhcmU6XHJcbiAgICogZml0XHJcbiAgICogc3RyZXRjaFxyXG4gICAqIGFzcGVjdFN0cmV0Y2guXHJcbiAgICovXHJcbiAgYmdJbWFnZVNjYWxlPzogc3RyaW5nO1xyXG4gIC8qKiBTdGFydCBhdWRpbyBwbGF5ZXIgaW4gZnVsbCBzY3JlZW4uIGlPUyBvbmx5LiAqL1xyXG4gIGluaXRGdWxsc2NyZWVuPzogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIGxpdCBhbmQgc3RvcHMgaXQgZnJvbSBsb2NraW5nXHJcbiAgICogd2hpbGUgYXVkaW8gaXMgcGxheWluZy4gQW5kcm9pZCBvbmx5LlxyXG4gICAqL1xyXG4gIGtlZXBBd2FrZT86IGJvb2xlYW47XHJcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIHN1Y2Nlc3MgcGxheWluZyBhdWRpby4gKi9cclxuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcclxuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgZXJyb3IgcGxheWluZyBhdWRpby4gKi9cclxuICBlcnJvckNhbGxiYWNrPzogRnVuY3Rpb247XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBTdHJlYW1pbmcgTWVkaWFcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gc3RyZWFtIGF1ZGlvIGFuZCB2aWRlbyBpbiBhIGZ1bGxzY3JlZW4sIG5hdGl2ZSBwbGF5ZXIgb24gaU9TIGFuZCBBbmRyb2lkLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTdHJlYW1pbmdNZWRpYSwgU3RyZWFtaW5nVmlkZW9PcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0cmVhbWluZ01lZGlhOiBTdHJlYW1pbmdNZWRpYSkgeyB9XHJcbiAqXHJcbiAqIGxldCBvcHRpb25zOiBTdHJlYW1pbmdWaWRlb09wdGlvbnMgPSB7XHJcbiAqICAgc3VjY2Vzc0NhbGxiYWNrOiAoKSA9PiB7IGNvbnNvbGUubG9nKCdWaWRlbyBwbGF5ZWQnKSB9LFxyXG4gKiAgIGVycm9yQ2FsbGJhY2s6IChlKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBzdHJlYW1pbmcnKSB9LFxyXG4gKiAgIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyxcclxuICogICBzaG91bGRBdXRvQ2xvc2U6IHRydWUsXHJcbiAqICAgY29udHJvbHM6IGZhbHNlXHJcbiAqIH07XHJcbiAqXHJcbiAqIHRoaXMuc3RyZWFtaW5nTWVkaWEucGxheVZpZGVvKCdodHRwczovL3BhdGgvdG8vdmlkZW8vc3RyZWFtJywgb3B0aW9ucyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBTdHJlYW1pbmdWaWRlb09wdGlvbnNcclxuICogU3RyZWFtaW5nQXVkaW9PcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3RyZWFtaW5nTWVkaWEnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5zdHJlYW1pbmdNZWRpYScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9uY2h1dGNoaW5kL2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0cmVhbWluZ01lZGlhIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFN0cmVhbXMgYSB2aWRlb1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHZpZGVvVXJsIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHZpZGVvXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVhbWluZ1ZpZGVvT3B0aW9uc30gT3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHBsYXlWaWRlbyh2aWRlb1VybDogc3RyaW5nLCBvcHRpb25zPzogU3RyZWFtaW5nVmlkZW9PcHRpb25zKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdHJlYW1zIGFuIGF1ZGlvXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXVkaW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgYXVkaW8gc3RyZWFtXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge1N0cmVhbWluZ0F1ZGlvT3B0aW9uc30gT3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHBsYXlBdWRpbyhhdWRpb1VybDogc3RyaW5nLCBvcHRpb25zPzogU3RyZWFtaW5nQXVkaW9PcHRpb25zKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyBzdHJlYW1pbmcgYXVkaW9cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzdG9wQXVkaW8oKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBQYXVzZXMgc3RyZWFtaW5nIGF1ZGlvXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcclxuICBwYXVzZUF1ZGlvKCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzdW1lcyBzdHJlYW1pbmcgYXVkaW9cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxyXG4gIHJlc3VtZUF1ZGlvKCk6IHZvaWQge31cclxufVxyXG4iXX0=