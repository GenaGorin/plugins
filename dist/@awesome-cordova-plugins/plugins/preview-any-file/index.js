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
import { Observable } from 'rxjs';
var PreviewAnyFileOriginal = /** @class */ (function (_super) {
    __extends(PreviewAnyFileOriginal, _super);
    function PreviewAnyFileOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PreviewAnyFileOriginal.prototype.preview = function (url) { return cordova(this, "preview", {}, arguments); };
    PreviewAnyFileOriginal.prototype.previewPath = function (path, opt) {
        if (opt === void 0) { opt = {}; }
        return cordova(this, "previewPath", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFileOriginal.prototype.previewBase64 = function (base64, opt) {
        if (opt === void 0) { opt = {}; }
        return cordova(this, "previewBase64", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFileOriginal.prototype.previewAsset = function (path, opt) {
        if (opt === void 0) { opt = {}; }
        return cordova(this, "previewAsset", { "observable": true, "callbackOrder": "reverse" }, arguments);
    };
    PreviewAnyFileOriginal.pluginName = "Preview/Open Any File";
    PreviewAnyFileOriginal.plugin = "cordova-plugin-preview-any-file";
    PreviewAnyFileOriginal.pluginRef = "PreviewAnyFile";
    PreviewAnyFileOriginal.repo = "https://github.com/mostafa-mansour1/previewAnyFile";
    PreviewAnyFileOriginal.install = "";
    PreviewAnyFileOriginal.installVariables = [];
    PreviewAnyFileOriginal.platforms = ["Android", "iOS"];
    return PreviewAnyFileOriginal;
}(AwesomeCordovaNativePlugin));
var PreviewAnyFile = new PreviewAnyFileOriginal();
export { PreviewAnyFile };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcHJldmlldy1hbnktZmlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sTUFBTSxDQUFDOztJQXdERSxrQ0FBMEI7Ozs7SUFRNUQsZ0NBQU8sYUFBQyxHQUFXO0lBZ0JuQixvQ0FBVyxhQUFDLElBQVksRUFBRSxHQUF3QjtRQUF4QixvQkFBQSxFQUFBLFFBQXdCOzs7SUFpQmxELHNDQUFhLGFBQUMsTUFBYyxFQUFFLEdBQXdCO1FBQXhCLG9CQUFBLEVBQUEsUUFBd0I7OztJQWdCdEQscUNBQVksYUFBQyxJQUFZLEVBQUUsR0FBd0I7UUFBeEIsb0JBQUEsRUFBQSxRQUF3Qjs7Ozs7Ozs7Ozt5QkFuSHJEO0VBMERvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vKipcclxuICogQG5hbWUgUHJldmlld0FueUZpbGVcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFdoYXRldmVyIHRoZSBmaWxlIGlzIFBERiBkb2N1bWVudCwgV29yZCBkb2N1bWVudCwgRXhjZWwsIG9mZmljZSBkb2N1bWVudCx6aXAgYXJjaGl2ZSBmaWxlLCBpbWFnZSwgdGV4dCwgaHRtbCBvciBhbnl0aGluZyBlbHNlLCB5b3UgY2FuIHBlcmZvcm0gYSBwcmV2aWV3IGJ5IHRoaXMgY29yZG92YSBQbHVnaW4gdG8gcHJldmlldyBhbnkgZmlsZSBpbiBuYXRpdmUgbW9kZSBieSBwcm92aWRpbmcgdGhlIGxvY2FsIG9yIGV4dGVybmFsIFVSTC5cclxuICpcclxuICogIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tcHJldmlldy1hbnktZmlsZWAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtwcmV2aWV3QW55RmlsZSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL21vc3RhZmEtbWFuc291cjEvcHJldmlld0FueUZpbGUpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQcmV2aWV3QW55RmlsZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9wcmV2aWV3LWFueS1maWxlL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJldmlld0FueUZpbGU6IFByZXZpZXdBbnlGaWxlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMucHJldmlld0FueUZpbGUucHJldmlld1BhdGgoJ2ZpbGU6Ly9wYXRoL3RvL2ZpbGUueGxzJylcclxuICogICAuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpLGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxyXG4gKlxyXG4gKiAvL2lmIHRoZSBmaWxlIGluIHRoZSB1cmwgaGFzIG5vIGV4dGVuc2lvbiwgeW91IG11c3QgZGVmaW5lIHRoZSBuYW1lIG9yIG1pbWV0eXBlIGluIHRoZSBvcHRpb25zXHJcbiAqIHRoaXMucHJldmlld0FueUZpbGUucHJldmlld1BhdGgoJ2h0dHBzOi8vZG9tYWluLmNvbS9maWxlL3BkZkZpbGUnLHtuYW1lOmZpbGUucGRmfSlcclxuICogICAuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpLGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxyXG4gKlxyXG4gKiAvLyB2aWV3IGZpbGUgZnJvbSBsb2NhbCBmb2xkZXIgaW4gdGhlIGFwcFxyXG4gKiB0aGlzLnByZXZpZXdBbnlGaWxlLnByZXZpZXdBc3NldCgnL2Fzc2V0cy9sb2NhbEZpbGUuZG9jJylcclxuICogICAuc3Vic2NyaWJlKHJlcyA9PiBjb25zb2xlLmxvZyhyZXMpLGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKVxyXG4gKlxyXG4gKiB0aGlzLnByZXZpZXdBbnlGaWxlLnByZXZpZXdCYXNlNjQoJ2RhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaFAuLi4uLicpXHJcbiAqICAgLnN1YnNjcmliZShyZXMgPT4gY29uc29sZS5sb2cocmVzKSxlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSlcclxuICpcclxuICogLy9pZiB0aGUgbWltZSB0eXBlIG5vdCBleGlzdCBpbiB0aGUgYmFzZTY0LCB5b3UgbXVzdCBkZWZpbmUgdGhlIG5hbWUgb3IgbWltZXR5cGUgaW4gdGhlIG9wdGlvbnNcclxuICogdGhpcy5wcmV2aWV3QW55RmlsZS5wcmV2aWV3QmFzZTY0KCdKVkJFUmkweExqTUtKY1RsOHVYci4uLi4uJyx7bWltZVR5cGU6J2FwcGxpY2F0aW9uL3BkZid9KVxyXG4gKiAgIC5zdWJzY3JpYmUocmVzID0+IGNvbnNvbGUubG9nKHJlcyksZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpXHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJldmlld09wdGlvbnMge1xyXG4gIC8vIG92ZXJ3cml0ZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSBleDogZmlsZS5wZGZcclxuICBuYW1lPzogc3RyaW5nO1xyXG4gIC8vIG92ZXJ3cml0ZSB0aGUgbWltZSB0eXBlIG9mIHRoZSBmaWxlIGV4OiBhcHBsaWNhdGlvbi9wZGZcclxuICBtaW1lVHlwZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUHJldmlld1Jlc3BvbnNlID0gJ0NMT1NJTkcnIHwgJ1NVQ0NFU1MnIHwgJ05PX0FQUCc7XHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQcmV2aWV3L09wZW4gQW55IEZpbGUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXByZXZpZXctYW55LWZpbGUnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdQcmV2aWV3QW55RmlsZScsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL21vc3RhZmEtbWFuc291cjEvcHJldmlld0FueUZpbGUnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgaW5zdGFsbDogJycsIC8vIE9QVElPTkFMIGluc3RhbGwgY29tbWFuZCwgaW4gY2FzZSB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLCAvLyBPUFRJT05BTCB0aGUgcGx1Z2luIHJlcXVpcmVzIHZhcmlhYmxlc1xyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLCAvLyBBcnJheSBvZiBwbGF0Zm9ybXMgc3VwcG9ydGVkLCBleGFtcGxlOiBbJ0FuZHJvaWQnLCAnaU9TJ11cclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgUHJldmlld0FueUZpbGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQGRlcHJlY2F0ZWQgVXNlIHRoZSBwcmV2aWV3UGF0aCxwcmV2aWV3QmFzZTY0IG9yIHByZXZpZXdBc3NldC4gdGhleSBoYXZlIG1vcmUgb3B0aW9uc1xyXG4gICAqIEBwYXJhbSB1cmwge1N0cmluZ30gZnVsbCBhYnNvbHV0ZSBVUkwgLT4gZmlsZTovLywgY29udGVudDovLywgaHR0cDovLywgaHR0cHMsIC4uLiBldGNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmV2aWV3UmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBmaWxlIG9wZW5lZCByZWplY3QgaWYgbm90O1xyXG4gICAqIEBhdXRob3IgTW9zdGFmYSBNYW5zb3VyIDxtb3N0YWZhQG91dGxvb2sua3I+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByZXZpZXcodXJsOiBzdHJpbmcpOiBQcm9taXNlPFByZXZpZXdSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcHJldmlld1BhdGggZnVuY3Rpb24gd2lsbCByZXR1cm4gU1VDQ0VTUyxOT19BUFAgb3IgQ0xPU0lORyBpbiBPYnNlcnZhYmxlIENhbGxiYWNrICwgaWYgdGhlIGNvbnRlbnQgaXMgYmFzZTY0IHlvdSBoYXZlIHRvIHVzZSBwcmV2aWV3QmFzZTY0IG1ldGhvZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhdGgge1N0cmluZ30gZnVsbCBhYnNvbHV0ZSBVUkwgLT4gZmlsZTovLywgY29udGVudDovLywgaHR0cDovLywgaHR0cHMsIC4uLiBldGMsIGlmIGV4dGVuc2lvbiBub3QgZXhpc3QsIHlvdSBtdXN0IGRlZmluZSBpdCBpbiB0aGUgb3B0IHBhcmFtXHJcbiAgICogQHBhcmFtIG9wdCB7UHJldmlld09wdGlvbnN9IGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB3aXRoIGV4dGVuc2lvbiBvciBpdCdzIG1pbWVUeXBlLCBpZiB0aGUgY29ycmVjdCBleHRlbnNpb24gbm90IGV4aXN0IGluIHRoZSBwYXRoXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8UHJldmlld1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGZpbGUgb3BlbmVkLCBjbG9zZWQgb3Igbm90IG9wZW5lZCAsIGl0IHdpbGwgcmVqZWN0IGlmIGFueSBlcnJvcjtcclxuICAgKiBAYXV0aG9yIE1vc3RhZmEgTWFuc291ciA8bW9zdGFmYUBvdXRsb29rLmtyPlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBwcmV2aWV3UGF0aChwYXRoOiBzdHJpbmcsIG9wdDogUHJldmlld09wdGlvbnMgPSB7fSk6IE9ic2VydmFibGU8UHJldmlld1Jlc3BvbnNlPiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogcHJldmlld0Jhc2U2NCBmdW5jdGlvbiB3aWxsIHJldHVybiBTVUNDRVNTLE5PX0FQUCBvciBDTE9TSU5HIGluIE9ic2VydmFibGUgQ2FsbGJhY2sgLCBpZiB0aGUgY29udGVudCBpcyB1cmwgb3IgcGF0aCB5b3UgaGF2ZSB0byB1c2UgcHJldmlld1BhdGggbWV0aG9kXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGF0aCB7U3RyaW5nfSBmdWxsIGFic29sdXRlIFVSTCAtPiBmaWxlOi8vLCBjb250ZW50Oi8vLCBodHRwOi8vLCBodHRwcywgLi4uIGV0YywgaWYgZXh0ZW5zaW9uIG5vdCBleGlzdCwgeW91IG11c3QgZGVmaW5lIGl0IGluIHRoZSBvcHQgcGFyYW1cclxuICAgKiBAcGFyYW0gYmFzZTY0XHJcbiAgICogQHBhcmFtIG9wdCB7UHJldmlld09wdGlvbnN9IGRlZmluZSB0aGUgbmFtZSBvZiB0aGUgZmlsZSB3aXRoIGV4dGVuc2lvbiBvciBpdCdzIG1pbWVUeXBlLCBpZiB0aGUgbWltZXR5cGUgbm90IGV4aXN0IGluIHRoZSBiYXNlNjQgc3RyaW5nXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8UHJldmlld1Jlc3BvbnNlPn0gUmV0dXJucyBhbiBPYnNlcnZhYmxlIHRoYXQgcmVzb2x2ZXMgaWYgdGhlIGZpbGUgb3BlbmVkLCBjbG9zZWQgb3Igbm90IG9wZW5lZCAsIGl0IHdpbGwgcmVqZWN0IGlmIGFueSBlcnJvcjtcclxuICAgKiBAYXV0aG9yIE1vc3RhZmEgTWFuc291ciA8bW9zdGFmYUBvdXRsb29rLmtyPlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBwcmV2aWV3QmFzZTY0KGJhc2U2NDogc3RyaW5nLCBvcHQ6IFByZXZpZXdPcHRpb25zID0ge30pOiBPYnNlcnZhYmxlPFByZXZpZXdSZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuOyAvLyBXZSBhZGQgcmV0dXJuOyBoZXJlIHRvIGF2b2lkIGFueSBJREUgLyBDb21waWxlciBlcnJvcnNcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZSBwcmV2aWV3QXNzZXQgZnVuY3Rpb24gdG8gb3BlbiBhIGZpbGUgZnJvbSBhc3NldHMgZm9sZGVyLCBpdCB3aWxsIHJldHVybiBTVUNDRVNTLE5PX0FQUCBvciBDTE9TSU5HIGluIE9ic2VydmFibGUgQ2FsbGJhY2sgLFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhdGgge1N0cmluZ30gcmVsYXRpdmUgcGF0aCBvZiB0aGUgZmlsZSBmcm9tIGFzc2V0cyBmb2xkZXIgXCIvYXNzZXRzL2ZpbGUucGRmXCIgLCBpZiBleHRlbnNpb24gbm90IGV4aXN0LCB5b3UgbXVzdCBkZWZpbmUgaXQgaW4gdGhlIG9wdCBwYXJhbVxyXG4gICAqIEBwYXJhbSBvcHQge1ByZXZpZXdPcHRpb25zfSBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGZpbGUgd2l0aCBleHRlbnNpb24gb3IgaXQncyBtaW1lVHlwZSwgaWYgdGhlIGNvcnJlY3QgZXh0ZW5zaW9uIG5vdCBleGlzdCBpbiB0aGUgcGF0aFxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFByZXZpZXdSZXNwb25zZT59IFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IHJlc29sdmVzIGlmIHRoZSBmaWxlIG9wZW5lZCwgY2xvc2VkIG9yIG5vdCBvcGVuZWQgLCBpdCB3aWxsIHJlamVjdCBpZiBhbnkgZXJyb3I7XHJcbiAgICogQGF1dGhvciBNb3N0YWZhIE1hbnNvdXIgPG1vc3RhZmFAb3V0bG9vay5rcj5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgcHJldmlld0Fzc2V0KHBhdGg6IHN0cmluZywgb3B0OiBQcmV2aWV3T3B0aW9ucyA9IHt9KTogT2JzZXJ2YWJsZTxQcmV2aWV3UmVzcG9uc2U+IHtcclxuICAgIHJldHVybjsgLy8gV2UgYWRkIHJldHVybjsgaGVyZSB0byBhdm9pZCBhbnkgSURFIC8gQ29tcGlsZXIgZXJyb3JzXHJcbiAgfVxyXG59XHJcbiJdfQ==