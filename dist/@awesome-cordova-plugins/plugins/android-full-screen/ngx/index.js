import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
/**
 * Bit flag values for setSystemUiVisibility()
 *
 * @see  https://developer.android.com/reference/android/view/View.html#setSystemUiVisibility(int)
 */
export var AndroidSystemUiFlags;
(function (AndroidSystemUiFlags) {
    /** View has requested the system UI (status bar) to be visible (the default). SYSTEM_UI_FLAG_VISIBLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Visible"] = 0] = "Visible";
    /** View has requested the system UI to enter an unobtrusive "low profile" mode. SYSTEM_UI_FLAG_LOW_PROFILE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LowProfile"] = 1] = "LowProfile";
    /** View has requested that the system navigation be temporarily hidden. SYSTEM_UI_FLAG_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["HideNavigation"] = 2] = "HideNavigation";
    /** View has requested to go into the normal fullscreen mode so that its content can take over the screen while still allowing the user to interact with the application. SYSTEM_UI_FLAG_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Fullscreen"] = 4] = "Fullscreen";
    /** When using other layout flags, we would like a stable view of the content insets given to fitSystemWindows(Rect). SYSTEM_UI_FLAG_LAYOUT_STABLE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutStable"] = 256] = "LayoutStable";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_HIDE_NAVIGATION, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_HIDE_NAVIGATION */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutHideNavigation"] = 512] = "LayoutHideNavigation";
    /** View would like its window to be laid out as if it has requested SYSTEM_UI_FLAG_FULLSCREEN, even if it currently hasn't. SYSTEM_UI_FLAG_LAYOUT_FULLSCREEN */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LayoutFullscreen"] = 1024] = "LayoutFullscreen";
    /** View would like to remain interactive when hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE */
    AndroidSystemUiFlags[AndroidSystemUiFlags["Immersive"] = 2048] = "Immersive";
    /** View would like to remain interactive when hiding the status bar with SYSTEM_UI_FLAG_FULLSCREEN and/or hiding the navigation bar with SYSTEM_UI_FLAG_HIDE_NAVIGATION. SYSTEM_UI_FLAG_IMMERSIVE_STICKY */
    AndroidSystemUiFlags[AndroidSystemUiFlags["ImmersiveSticky"] = 4096] = "ImmersiveSticky";
    /** Requests the status bar to draw in a mode that is compatible with light status bar backgrounds. SYSTEM_UI_FLAG_LIGHT_STATUS_BAR */
    AndroidSystemUiFlags[AndroidSystemUiFlags["LightStatusBar"] = 8192] = "LightStatusBar";
})(AndroidSystemUiFlags || (AndroidSystemUiFlags = {}));
var AndroidFullScreen = /** @class */ (function (_super) {
    __extends(AndroidFullScreen, _super);
    function AndroidFullScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidFullScreen.prototype.isSupported = function () { return cordova(this, "isSupported", {}, arguments); };
    AndroidFullScreen.prototype.isImmersiveModeSupported = function () { return cordova(this, "isImmersiveModeSupported", {}, arguments); };
    AndroidFullScreen.prototype.immersiveWidth = function () { return cordova(this, "immersiveWidth", {}, arguments); };
    AndroidFullScreen.prototype.immersiveHeight = function () { return cordova(this, "immersiveHeight", {}, arguments); };
    AndroidFullScreen.prototype.leanMode = function () { return cordova(this, "leanMode", {}, arguments); };
    AndroidFullScreen.prototype.showSystemUI = function () { return cordova(this, "showSystemUI", {}, arguments); };
    AndroidFullScreen.prototype.showUnderStatusBar = function () { return cordova(this, "showUnderStatusBar", {}, arguments); };
    AndroidFullScreen.prototype.showUnderSystemUI = function () { return cordova(this, "showUnderSystemUI", {}, arguments); };
    AndroidFullScreen.prototype.immersiveMode = function () { return cordova(this, "immersiveMode", {}, arguments); };
    AndroidFullScreen.prototype.setSystemUiVisibility = function (visibility) { return cordova(this, "setSystemUiVisibility", {}, arguments); };
    AndroidFullScreen.pluginName = "AndroidFullScreen";
    AndroidFullScreen.plugin = "cordova-plugin-fullscreen";
    AndroidFullScreen.pluginRef = "AndroidFullScreen";
    AndroidFullScreen.repo = "https://github.com/mesmotronic/cordova-plugin-fullscreen";
    AndroidFullScreen.platforms = ["Android"];
    AndroidFullScreen.decorators = [
        { type: Injectable }
    ];
    return AndroidFullScreen;
}(AwesomeCordovaNativePlugin));
export { AndroidFullScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1mdWxsLXNjcmVlbi9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1Rjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFOLElBQVksb0JBcUJYO0FBckJELFdBQVksb0JBQW9CO0lBQzlCLHdHQUF3RztJQUN4RyxxRUFBVyxDQUFBO0lBQ1gsOEdBQThHO0lBQzlHLDJFQUFjLENBQUE7SUFDZCwwR0FBMEc7SUFDMUcsbUZBQWtCLENBQUE7SUFDbEIsc01BQXNNO0lBQ3RNLDJFQUFjLENBQUE7SUFDZCxxSkFBcUo7SUFDckosaUZBQWtCLENBQUE7SUFDbEIsMEtBQTBLO0lBQzFLLGlHQUEwQixDQUFBO0lBQzFCLGdLQUFnSztJQUNoSywwRkFBdUIsQ0FBQTtJQUN2Qix5SUFBeUk7SUFDekksNEVBQWdCLENBQUE7SUFDaEIsNE1BQTRNO0lBQzVNLHdGQUFzQixDQUFBO0lBQ3RCLHNJQUFzSTtJQUN0SSxzRkFBcUIsQ0FBQTtBQUN2QixDQUFDLEVBckJXLG9CQUFvQixLQUFwQixvQkFBb0IsUUFxQi9COztJQThCc0MscUNBQTBCOzs7O0lBTy9ELHVDQUFXO0lBVVgsb0RBQXdCO0lBVXhCLDBDQUFjO0lBVWQsMkNBQWU7SUFVZixvQ0FBUTtJQVVSLHdDQUFZO0lBVVosOENBQWtCO0lBVWxCLDZDQUFpQjtJQVVqQix5Q0FBYTtJQVliLGlEQUFxQixhQUFDLFVBQWdDOzs7Ozs7O2dCQXBHdkQsVUFBVTs7NEJBMURYO0VBMkR1QywwQkFBMEI7U0FBcEQsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEJpdCBmbGFnIHZhbHVlcyBmb3Igc2V0U3lzdGVtVWlWaXNpYmlsaXR5KClcclxuICpcclxuICogQHNlZSAgaHR0cHM6Ly9kZXZlbG9wZXIuYW5kcm9pZC5jb20vcmVmZXJlbmNlL2FuZHJvaWQvdmlldy9WaWV3Lmh0bWwjc2V0U3lzdGVtVWlWaXNpYmlsaXR5KGludClcclxuICovXHJcbmV4cG9ydCBlbnVtIEFuZHJvaWRTeXN0ZW1VaUZsYWdzIHtcclxuICAvKiogVmlldyBoYXMgcmVxdWVzdGVkIHRoZSBzeXN0ZW0gVUkgKHN0YXR1cyBiYXIpIHRvIGJlIHZpc2libGUgKHRoZSBkZWZhdWx0KS4gU1lTVEVNX1VJX0ZMQUdfVklTSUJMRSAqL1xyXG4gIFZpc2libGUgPSAwLFxyXG4gIC8qKiBWaWV3IGhhcyByZXF1ZXN0ZWQgdGhlIHN5c3RlbSBVSSB0byBlbnRlciBhbiB1bm9idHJ1c2l2ZSBcImxvdyBwcm9maWxlXCIgbW9kZS4gU1lTVEVNX1VJX0ZMQUdfTE9XX1BST0ZJTEUgKi9cclxuICBMb3dQcm9maWxlID0gMSxcclxuICAvKiogVmlldyBoYXMgcmVxdWVzdGVkIHRoYXQgdGhlIHN5c3RlbSBuYXZpZ2F0aW9uIGJlIHRlbXBvcmFyaWx5IGhpZGRlbi4gU1lTVEVNX1VJX0ZMQUdfSElERV9OQVZJR0FUSU9OICovXHJcbiAgSGlkZU5hdmlnYXRpb24gPSAyLFxyXG4gIC8qKiBWaWV3IGhhcyByZXF1ZXN0ZWQgdG8gZ28gaW50byB0aGUgbm9ybWFsIGZ1bGxzY3JlZW4gbW9kZSBzbyB0aGF0IGl0cyBjb250ZW50IGNhbiB0YWtlIG92ZXIgdGhlIHNjcmVlbiB3aGlsZSBzdGlsbCBhbGxvd2luZyB0aGUgdXNlciB0byBpbnRlcmFjdCB3aXRoIHRoZSBhcHBsaWNhdGlvbi4gU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTiAqL1xyXG4gIEZ1bGxzY3JlZW4gPSA0LFxyXG4gIC8qKiBXaGVuIHVzaW5nIG90aGVyIGxheW91dCBmbGFncywgd2Ugd291bGQgbGlrZSBhIHN0YWJsZSB2aWV3IG9mIHRoZSBjb250ZW50IGluc2V0cyBnaXZlbiB0byBmaXRTeXN0ZW1XaW5kb3dzKFJlY3QpLiBTWVNURU1fVUlfRkxBR19MQVlPVVRfU1RBQkxFICovXHJcbiAgTGF5b3V0U3RhYmxlID0gMjU2LFxyXG4gIC8qKiBWaWV3IHdvdWxkIGxpa2UgaXRzIHdpbmRvdyB0byBiZSBsYWlkIG91dCBhcyBpZiBpdCBoYXMgcmVxdWVzdGVkIFNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTiwgZXZlbiBpZiBpdCBjdXJyZW50bHkgaGFzbid0LiBTWVNURU1fVUlfRkxBR19MQVlPVVRfSElERV9OQVZJR0FUSU9OICovXHJcbiAgTGF5b3V0SGlkZU5hdmlnYXRpb24gPSA1MTIsXHJcbiAgLyoqIFZpZXcgd291bGQgbGlrZSBpdHMgd2luZG93IHRvIGJlIGxhaWQgb3V0IGFzIGlmIGl0IGhhcyByZXF1ZXN0ZWQgU1lTVEVNX1VJX0ZMQUdfRlVMTFNDUkVFTiwgZXZlbiBpZiBpdCBjdXJyZW50bHkgaGFzbid0LiBTWVNURU1fVUlfRkxBR19MQVlPVVRfRlVMTFNDUkVFTiAqL1xyXG4gIExheW91dEZ1bGxzY3JlZW4gPSAxMDI0LFxyXG4gIC8qKiBWaWV3IHdvdWxkIGxpa2UgdG8gcmVtYWluIGludGVyYWN0aXZlIHdoZW4gaGlkaW5nIHRoZSBuYXZpZ2F0aW9uIGJhciB3aXRoIFNZU1RFTV9VSV9GTEFHX0hJREVfTkFWSUdBVElPTi4gU1lTVEVNX1VJX0ZMQUdfSU1NRVJTSVZFICovXHJcbiAgSW1tZXJzaXZlID0gMjA0OCxcclxuICAvKiogVmlldyB3b3VsZCBsaWtlIHRvIHJlbWFpbiBpbnRlcmFjdGl2ZSB3aGVuIGhpZGluZyB0aGUgc3RhdHVzIGJhciB3aXRoIFNZU1RFTV9VSV9GTEFHX0ZVTExTQ1JFRU4gYW5kL29yIGhpZGluZyB0aGUgbmF2aWdhdGlvbiBiYXIgd2l0aCBTWVNURU1fVUlfRkxBR19ISURFX05BVklHQVRJT04uIFNZU1RFTV9VSV9GTEFHX0lNTUVSU0lWRV9TVElDS1kgKi9cclxuICBJbW1lcnNpdmVTdGlja3kgPSA0MDk2LFxyXG4gIC8qKiBSZXF1ZXN0cyB0aGUgc3RhdHVzIGJhciB0byBkcmF3IGluIGEgbW9kZSB0aGF0IGlzIGNvbXBhdGlibGUgd2l0aCBsaWdodCBzdGF0dXMgYmFyIGJhY2tncm91bmRzLiBTWVNURU1fVUlfRkxBR19MSUdIVF9TVEFUVVNfQkFSICovXHJcbiAgTGlnaHRTdGF0dXNCYXIgPSA4MTkyLFxyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQW5kcm9pZCBGdWxsIFNjcmVlblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZW5hYmxlcyBkZXZlbG9wZXJzIHRvIG9mZmVyIHVzZXJzIGEgdHJ1ZSBmdWxsIHNjcmVlbiBleHBlcmllbmNlIGluIHRoZWlyIENvcmRvdmEgYW5kIFBob25lR2FwIGFwcHMgZm9yIEFuZHJvaWQuXHJcbiAqIFVzaW5nIEFuZHJvaWQgNC4wKywgeW91IGNhbiB1c2UgdHJ1ZSBmdWxsIHNjcmVlbiBpbiBcImxlYW4gbW9kZVwiLCB0aGUgd2F5IHlvdSBzZWUgaW4gYXBwcyBsaWtlIFlvdVR1YmUsIGV4cGFuZGluZyB0aGUgYXBwIHJpZ2h0IHRvIHRoZSBlZGdlcyBvZiB0aGUgc2NyZWVuLCBoaWRpbmcgdGhlIHN0YXR1cyBhbmQgbmF2aWdhdGlvbiBiYXJzIHVudGlsIHRoZSB1c2VyIG5leHQgaW50ZXJhY3RzLiBUaGlzIGlzIGlkZWFsbHkgc3VpdGVkIHRvIHZpZGVvIG9yIGN1dC1zY2VuZSBjb250ZW50LlxyXG4gKiBJbiBBbmRyb2lkIDQuNCssIGhvd2V2ZXIsIHlvdSBjYW4gbm93IGVudGVyIHRydWUgZnVsbCBzY3JlZW4sIGZ1bGx5IGludGVyYWN0aXZlIGltbWVyc2l2ZSBtb2RlLiBJbiB0aGlzIG1vZGUsIHlvdXIgYXBwIHdpbGwgcmVtYWluIGluIHRydWUgZnVsbCBzY3JlZW4gdW50aWwgeW91IGNob29zZSBvdGhlcndpc2U7IHVzZXJzIGNhbiBzd2lwZSBkb3duIGZyb20gdGhlIHRvcCBvZiB0aGUgc2NyZWVuIHRvIHRlbXBvcmFyaWx5IGRpc3BsYXkgdGhlIHN5c3RlbSBVSS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQW5kcm9pZEZ1bGxTY3JlZW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW5kcm9pZC1mdWxsLXNjcmVlbi9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWRGdWxsU2NyZWVuOiBBbmRyb2lkRnVsbFNjcmVlbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmFuZHJvaWRGdWxsU2NyZWVuLmlzSW1tZXJzaXZlTW9kZVN1cHBvcnRlZCgpXHJcbiAqICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ0ltbWVyc2l2ZSBtb2RlIHN1cHBvcnRlZCcpKVxyXG4gKiAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWRGdWxsU2NyZWVuJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1mdWxsc2NyZWVuJyxcclxuICBwbHVnaW5SZWY6ICdBbmRyb2lkRnVsbFNjcmVlbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9tZXNtb3Ryb25pYy9jb3Jkb3ZhLXBsdWdpbi1mdWxsc2NyZWVuJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBbmRyb2lkRnVsbFNjcmVlbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBJcyB0aGlzIHBsdWdpbiBzdXBwb3J0ZWQ/XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNTdXBwb3J0ZWQoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJcyBpbW1lcnNpdmUgbW9kZSBzdXBwb3J0ZWQ/XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNJbW1lcnNpdmVNb2RlU3VwcG9ydGVkKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHdpZHRoIG9mIHRoZSBzY3JlZW4gaW4gaW1tZXJzaXZlIG1vZGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbW1lcnNpdmVXaWR0aCgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgc2NyZWVuIGluIGltbWVyc2l2ZSBtb2RlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW1tZXJzaXZlSGVpZ2h0KCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBIaWRlIHN5c3RlbSBVSSB1bnRpbCB1c2VyIGludGVyYWN0cy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBsZWFuTW9kZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNob3cgc3lzdGVtIFVJLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3dTeXN0ZW1VSSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEV4dGVuZCB5b3VyIGFwcCB1bmRlcm5lYXRoIHRoZSBzdGF0dXMgYmFyIChBbmRyb2lkIDQuNCsgb25seSkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd1VuZGVyU3RhdHVzQmFyKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRXh0ZW5kIHlvdXIgYXBwIHVuZGVybmVhdGggdGhlIHN5c3RlbSBVSSAoQW5kcm9pZCA0LjQrIG9ubHkpLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3dVbmRlclN5c3RlbVVJKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGlkZSBzeXN0ZW0gVUkgYW5kIGtlZXAgaXQgaGlkZGVuIChBbmRyb2lkIDQuNCsgb25seSkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW1tZXJzaXZlTW9kZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE1hbnVhbGx5IHNldCB0aGUgdGhlIHN5c3RlbSBVSSB0byBhIGN1c3RvbSBtb2RlLiBUaGlzIG1pcnJvcnMgdGhlIEFuZHJvaWQgbWV0aG9kIG9mIHRoZSBzYW1lIG5hbWUuIChBbmRyb2lkIDQuNCsgb25seSkuXHJcbiAgICpcclxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3JlZmVyZW5jZS9hbmRyb2lkL3ZpZXcvVmlldy5odG1sI3NldFN5c3RlbVVpVmlzaWJpbGl0eShpbnQpXHJcbiAgICogQHBhcmFtIHtBbmRyb2lkU3lzdGVtVWlGbGFnc30gdmlzaWJpbGl0eSBCaXR3aXNlLU9SIG9mIGZsYWdzIGluIEFuZHJvaWRTeXN0ZW1VaUZsYWdzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldFN5c3RlbVVpVmlzaWJpbGl0eSh2aXNpYmlsaXR5OiBBbmRyb2lkU3lzdGVtVWlGbGFncyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=