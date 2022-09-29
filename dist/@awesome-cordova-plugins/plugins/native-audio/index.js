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
var NativeAudioOriginal = /** @class */ (function (_super) {
    __extends(NativeAudioOriginal, _super);
    function NativeAudioOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeAudioOriginal.prototype.preloadSimple = function (id, assetPath) { return cordova(this, "preloadSimple", {}, arguments); };
    NativeAudioOriginal.prototype.preloadComplex = function (id, assetPath, volume, voices, delay) { return cordova(this, "preloadComplex", {}, arguments); };
    NativeAudioOriginal.prototype.play = function (id, completeCallback) { return cordova(this, "play", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    NativeAudioOriginal.prototype.stop = function (id) { return cordova(this, "stop", {}, arguments); };
    NativeAudioOriginal.prototype.loop = function (id) { return cordova(this, "loop", {}, arguments); };
    NativeAudioOriginal.prototype.unload = function (id) { return cordova(this, "unload", {}, arguments); };
    NativeAudioOriginal.prototype.setVolumeForComplexAsset = function (id, volume) { return cordova(this, "setVolumeForComplexAsset", {}, arguments); };
    NativeAudioOriginal.pluginName = "NativeAudio";
    NativeAudioOriginal.plugin = "cordova-plugin-nativeaudio";
    NativeAudioOriginal.pluginRef = "plugins.NativeAudio";
    NativeAudioOriginal.repo = "https://github.com/floatinghotpot/cordova-plugin-nativeaudio";
    NativeAudioOriginal.platforms = ["Android", "Browser", "iOS"];
    return NativeAudioOriginal;
}(AwesomeCordovaNativePlugin));
var NativeAudio = new NativeAudioOriginal();
export { NativeAudio };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLWF1ZGlvL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXNDM0QsK0JBQTBCOzs7O0lBU3pELG1DQUFhLGFBQUMsRUFBVSxFQUFFLFNBQWlCO0lBZTNDLG9DQUFjLGFBQUMsRUFBVSxFQUFFLFNBQWlCLEVBQUUsTUFBYyxFQUFFLE1BQWMsRUFBRSxLQUFhO0lBZTNGLDBCQUFJLGFBQUMsRUFBVSxFQUFFLGdCQUEyQjtJQVc1QywwQkFBSSxhQUFDLEVBQVU7SUFXZiwwQkFBSSxhQUFDLEVBQVU7SUFXZiw0QkFBTSxhQUFDLEVBQVU7SUFZakIsOENBQXdCLGFBQUMsRUFBVSxFQUFFLE1BQWM7Ozs7OztzQkEzSHJEO0VBdUNpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuLyoqXHJcbiAqIEBuYW1lIE5hdGl2ZSBBdWRpb1xyXG4gKiBAZGVzY3JpcHRpb24gTmF0aXZlIEF1ZGlvIFBsYXliYWNrXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5hdGl2ZUF1ZGlvIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25hdGl2ZS1hdWRpby9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5hdGl2ZUF1ZGlvOiBOYXRpdmVBdWRpbykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRTaW1wbGUoJ3VuaXF1ZUlkMScsICdwYXRoL3RvL2ZpbGUubXAzJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnByZWxvYWRDb21wbGV4KCd1bmlxdWVJZDInLCAncGF0aC90by9maWxlMi5tcDMnLCAxLCAxLCAwKS50aGVuKG9uU3VjY2Vzcywgb25FcnJvcik7XHJcbiAqXHJcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKlxyXG4gKiAvLyBjYW4gb3B0aW9uYWxseSBwYXNzIGEgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGZpbGUgaXMgZG9uZSBwbGF5aW5nXHJcbiAqIHRoaXMubmF0aXZlQXVkaW8ucGxheSgndW5pcXVlSWQxJywgKCkgPT4gY29uc29sZS5sb2coJ3VuaXF1ZUlkMSBpcyBkb25lIHBsYXlpbmcnKSk7XHJcbiAqXHJcbiAqIHRoaXMubmF0aXZlQXVkaW8ubG9vcCgndW5pcXVlSWQyJykudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xyXG4gKlxyXG4gKiB0aGlzLm5hdGl2ZUF1ZGlvLnNldFZvbHVtZUZvckNvbXBsZXhBc3NldCgndW5pcXVlSWQyJywgMC42KS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcclxuICpcclxuICogdGhpcy5uYXRpdmVBdWRpby5zdG9wKCd1bmlxdWVJZDEnKS50aGVuKG9uU3VjY2VzcyxvbkVycm9yKTtcclxuICpcclxuICogdGhpcy5uYXRpdmVBdWRpby51bmxvYWQoJ3VuaXF1ZUlkMScpLnRoZW4ob25TdWNjZXNzLG9uRXJyb3IpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdOYXRpdmVBdWRpbycsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlYXVkaW8nLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuTmF0aXZlQXVkaW8nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vZmxvYXRpbmdob3Rwb3QvY29yZG92YS1wbHVnaW4tbmF0aXZlYXVkaW8nLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5hdGl2ZUF1ZGlvIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3Igc2hvcnQgY2xpcHMgLyBzaW5nbGUgc2hvdHMgKHVwIHRvIGZpdmUgc2Vjb25kcykuIENhbm5vdCBiZSBzdG9wcGVkIC8gbG9vcGVkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcclxuICAgKiBAcGFyYW0gYXNzZXRQYXRoIHtzdHJpbmd9ICB0aGUgcmVsYXRpdmUgcGF0aCBvciBhYnNvbHV0ZSBVUkwgKGlubHVkaW5nIGh0dHA6Ly8pIHRvIHRoZSBhdWRpbyBhc3NldC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmVsb2FkU2ltcGxlKGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvYWRzIGFuIGF1ZGlvIGZpbGUgaW50byBtZW1vcnkuIE9wdGltaXplZCBmb3IgYmFja2dyb3VuZCBtdXNpYyAvIGFtYmllbnQgc291bmQuIFVzZXMgaGlnaGxldmVsIG5hdGl2ZSBBUElzIHdpdGggYSBsYXJnZXIgZm9vdHByaW50LiAoaU9TOiBBVkF1ZGlvUGxheWVyKS4gQ2FuIGJlIHN0b3BwZWQgLyBsb29wZWQgYW5kIHVzZWQgd2l0aCBtdWx0aXBsZSB2b2ljZXMuIENhbiBiZSBmYWRlZCBpbiBhbmQgb3V0IHVzaW5nIHRoZSBkZWxheSBwYXJhbWV0ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWQge3N0cmluZ30gdW5pcXVlIElEIGZvciB0aGUgYXVkaW8gZmlsZVxyXG4gICAqIEBwYXJhbSBhc3NldFBhdGgge3N0cmluZ30gIHRoZSByZWxhdGl2ZSBwYXRoIG9yIGFic29sdXRlIFVSTCAoaW5sdWRpbmcgaHR0cDovLykgdG8gdGhlIGF1ZGlvIGFzc2V0LlxyXG4gICAqIEBwYXJhbSB2b2x1bWUge251bWJlcn0gdGhlIHZvbHVtZSBvZiB0aGUgcHJlbG9hZGVkIHNvdW5kICgwLjEgdG8gMS4wKVxyXG4gICAqIEBwYXJhbSB2b2ljZXMge251bWJlcn0gdGhlIG51bWJlciBvZiBtdWx0aWNoYW5uZWwgdm9pY2VzIGF2YWlsYWJsZVxyXG4gICAqIEBwYXJhbSBkZWxheSB7bnVtYmVyfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByZWxvYWRDb21wbGV4KGlkOiBzdHJpbmcsIGFzc2V0UGF0aDogc3RyaW5nLCB2b2x1bWU6IG51bWJlciwgdm9pY2VzOiBudW1iZXIsIGRlbGF5OiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUGxheXMgYW4gYXVkaW8gYXNzZXRcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXHJcbiAgICogQHBhcmFtIGNvbXBsZXRlQ2FsbGJhY2sge0Z1bmN0aW9ufSBvcHRpb25hbC4gQ2FsbGJhY2sgdG8gYmUgaW52b2tlZCB3aGVuIGF1ZGlvIGlzIGRvbmUgcGxheWluZ1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIHBsYXkoaWQ6IHN0cmluZywgY29tcGxldGVDYWxsYmFjaz86IEZ1bmN0aW9uKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3BzIHBsYXlpbmcgYW4gYXVkaW9cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb3BzIGFuIGF1ZGlvIGFzc2V0IGluZmluaXRlbHksIHRoaXMgb25seSB3b3JrcyBmb3IgY29tcGxleCBhc3NldHNcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbG9vcChpZDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVubG9hZHMgYW4gYXVkaW8gZmlsZSBmcm9tIG1lbW9yeVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGlkIHtzdHJpbmd9IHVuaXF1ZSBJRCBmb3IgdGhlIGF1ZGlvIGZpbGVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bmxvYWQoaWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGFuZ2VzIHRoZSB2b2x1bWUgZm9yIHByZWxvYWRlZCBjb21wbGV4IGFzc2V0cy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZCB7c3RyaW5nfSB1bmlxdWUgSUQgZm9yIHRoZSBhdWRpbyBmaWxlXHJcbiAgICogQHBhcmFtIHZvbHVtZSB7bnVtYmVyfSB0aGUgdm9sdW1lIG9mIHRoZSBhdWRpbyBhc3NldCAoMC4xIHRvIDEuMClcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzZXRWb2x1bWVGb3JDb21wbGV4QXNzZXQoaWQ6IHN0cmluZywgdm9sdW1lOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=