import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordovaFunctionOverride, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var ThreeDeeTouch = /** @class */ (function (_super) {
    __extends(ThreeDeeTouch, _super);
    function ThreeDeeTouch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ThreeDeeTouch.prototype.isAvailable = function () { return cordova(this, "isAvailable", {}, arguments); };
    ThreeDeeTouch.prototype.watchForceTouches = function () { return cordova(this, "watchForceTouches", { "observable": true }, arguments); };
    ThreeDeeTouch.prototype.configureQuickActions = function (quickActions) { return cordova(this, "configureQuickActions", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.onHomeIconPressed = function () { return cordovaFunctionOverride(this, "onHomeIconPressed", {}, arguments); };
    ThreeDeeTouch.prototype.enableLinkPreview = function () { return cordova(this, "enableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.prototype.disableLinkPreview = function () { return cordova(this, "disableLinkPreview", { "sync": true }, arguments); };
    ThreeDeeTouch.pluginName = "ThreeDeeTouch";
    ThreeDeeTouch.plugin = "cordova-plugin-3dtouch";
    ThreeDeeTouch.pluginRef = "ThreeDeeTouch";
    ThreeDeeTouch.repo = "https://github.com/EddyVerbruggen/cordova-plugin-3dtouch";
    ThreeDeeTouch.platforms = ["iOS"];
    ThreeDeeTouch.decorators = [
        { type: Injectable }
    ];
    return ThreeDeeTouch;
}(AwesomeCordovaNativePlugin));
export { ThreeDeeTouch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGhyZWUtZGVlLXRvdWNoL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLGdFQUF3RSxNQUFNLCtCQUErQixDQUFDO0FBQ3JILE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBOEhDLGlDQUEwQjs7OztJQU8zRCxtQ0FBVztJQVlYLHlDQUFpQjtJQWlCakIsNkNBQXFCLGFBQUMsWUFBd0M7SUFROUQseUNBQWlCO0lBV2pCLHlDQUFpQjtJQVFqQiwwQ0FBa0I7Ozs7Ozs7Z0JBaEVuQixVQUFVOzt3QkEvSFg7RUFnSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhRnVuY3Rpb25PdmVycmlkZSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaHJlZURlZVRvdWNoUXVpY2tBY3Rpb24ge1xyXG4gIC8qKlxyXG4gICAqIFR5cGUgdGhhdCBjYW4gYmUgdXNlZCBpbiB0aGUgb25Ib21lSWNvblByZXNzZWQgY2FsbGJhY2tcclxuICAgKi9cclxuICB0eXBlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaXRsZVxyXG4gICAqL1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFN1YnRpdGxlXHJcbiAgICovXHJcbiAgc3VidGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEljb24gdHlwZS4gQ2FzZSBpbnNlbnNpdGl2ZVxyXG4gICAqL1xyXG4gIGljb25UeXBlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJY29uIHRlbXBsYXRlXHJcbiAgICovXHJcbiAgaWNvblRlbXBsYXRlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoIHtcclxuICAvKipcclxuICAgKiBUb3VjaCBmb3JjZVxyXG4gICAqL1xyXG4gIGZvcmNlOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRpbWVzdGFtcCBvZiBhY3Rpb25cclxuICAgKi9cclxuICB0aW1lc3RhbXA6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogWCBjb29yZGluYXRlIG9mIGFjdGlvblxyXG4gICAqL1xyXG4gIHg6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogWSBjb29yZGluYXRlIG9mIGFjdGlvblxyXG4gICAqL1xyXG4gIHk6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIDNEIFRvdWNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgM0QgVG91Y2ggcGx1Z2luIGFkZHMgM0QgVG91Y2ggY2FwYWJpbGl0aWVzIHRvIHlvdXIgQ29yZG92YSBhcHAuXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tM2R0b3VjaGAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFszRCBUb3VjaCBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLTNkdG91Y2gpLlxyXG4gKiBAdXNhZ2VcclxuICogUGxlYXNlIGRvIHJlZmVyIHRvIHRoZSBvcmlnaW5hbCBwbHVnaW4ncyByZXBvIGZvciBkZXRhaWxlZCB1c2FnZS4gVGhlIHVzYWdlIGV4YW1wbGUgaGVyZSBtaWdodCBub3QgYmUgc3VmZmljaWVudC5cclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBUaHJlZURlZVRvdWNoLCBUaHJlZURlZVRvdWNoUXVpY2tBY3Rpb24sIFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RocmVlLWRlZS10b3VjaC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRocmVlRGVlVG91Y2g6IFRocmVlRGVlVG91Y2gpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy50aHJlZURlZVRvdWNoLmlzQXZhaWxhYmxlKCkudGhlbihpc0F2YWlsYWJsZSA9PiBjb25zb2xlLmxvZygnM0QgVG91Y2ggYXZhaWxhYmxlPyAnICsgaXNBdmFpbGFibGUpKTtcclxuICpcclxuICogdGhpcy50aHJlZURlZVRvdWNoLndhdGNoRm9yY2VUb3VjaGVzKClcclxuICogICAuc3Vic2NyaWJlKFxyXG4gKiAgICAgKGRhdGE6IFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoKSA9PiB7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKCdGb3JjZSB0b3VjaCAlJyArIGRhdGEuZm9yY2UpO1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnRm9yY2UgdG91Y2ggdGltZXN0YW1wOiAnICsgZGF0YS50aW1lc3RhbXApO1xyXG4gKiAgICAgICBjb25zb2xlLmxvZygnRm9yY2UgdG91Y2ggeDogJyArIGRhdGEueCk7XHJcbiAqICAgICAgIGNvbnNvbGUubG9nKCdGb3JjZSB0b3VjaCB5OiAnICsgZGF0YS55KTtcclxuICogICAgIH1cclxuICogICApO1xyXG4gKlxyXG4gKlxyXG4gKiBsZXQgYWN0aW9uczogVGhyZWVEZWVUb3VjaFF1aWNrQWN0aW9uW10gPSBbXHJcbiAqICAge1xyXG4gKiAgICAgdHlwZTogJ2NoZWNraW4nLFxyXG4gKiAgICAgdGl0bGU6ICdDaGVjayBpbicsXHJcbiAqICAgICBzdWJ0aXRsZTogJ1F1aWNrbHkgY2hlY2sgaW4nLFxyXG4gKiAgICAgaWNvblR5cGU6ICdDb21wb3NlJ1xyXG4gKiAgIH0sXHJcbiAqICAge1xyXG4gKiAgICAgdHlwZTogJ3NoYXJlJyxcclxuICogICAgIHRpdGxlOiAnU2hhcmUnLFxyXG4gKiAgICAgc3VidGl0bGU6ICdTaGFyZSBsaWtlIHlvdSBjYXJlJyxcclxuICogICAgIGljb25UeXBlOiAnU2hhcmUnXHJcbiAqICAgfSxcclxuICogICB7XHJcbiAqICAgICB0eXBlOiAnc2VhcmNoJyxcclxuICogICAgIHRpdGxlOiAnU2VhcmNoJyxcclxuICogICAgIGljb25UeXBlOiAnU2VhcmNoJ1xyXG4gKiAgIH0sXHJcbiAqICAge1xyXG4gKiAgICAgdGl0bGU6ICdTaG93IGZhdm9yaXRlcycsXHJcbiAqICAgICBpY29uVGVtcGxhdGU6ICdIZWFydFRlbXBsYXRlJ1xyXG4gKiAgIH1cclxuICogXTtcclxuICpcclxuICogdGhpcy50aHJlZURlZVRvdWNoLmNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhhY3Rpb25zKTtcclxuICpcclxuICogdGhpcy50aHJlZURlZVRvdWNoLm9uSG9tZUljb25QcmVzc2VkKCkuc3Vic2NyaWJlKFxyXG4gKiAgKHBheWxvYWQpID0+IHtcclxuICogICAgLy8gcmV0dXJucyBhbiBvYmplY3QgdGhhdCBpcyB0aGUgYnV0dG9uIHlvdSBwcmVzZWRcclxuICogICAgY29uc29sZS5sb2coJ1ByZXNzZWQgdGhlICR7cGF5bG9hZC50aXRsZX0gYnV0dG9uJylcclxuICogICAgY29uc29sZS5sb2cocGF5bG9hZC50eXBlKVxyXG4gKlxyXG4gKiAgfVxyXG4gKiApXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBUaHJlZURlZVRvdWNoUXVpY2tBY3Rpb25cclxuICogVGhyZWVEZWVUb3VjaEZvcmNlVG91Y2hcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdUaHJlZURlZVRvdWNoJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi0zZHRvdWNoJyxcclxuICBwbHVnaW5SZWY6ICdUaHJlZURlZVRvdWNoJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLTNkdG91Y2gnLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVGhyZWVEZWVUb3VjaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBZb3UgbmVlZCBhbiBpUGhvbmUgNlMgb3Igc29tZSBmdXR1cmUgdGVjaCB0byB1c2UgdGhlIGZlYXR1cmVzIG9mIHRoaXMgcGx1Z2luLCBzbyB5b3UgY2FuIGNoZWNrIGF0IHJ1bnRpbWUgaWYgdGhlIHVzZXIncyBkZXZpY2UgaXMgc3VwcG9ydGVkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgcGx1Z2luIGlzIGF2YWlsYWJsZSBvciBub3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaXNBdmFpbGFibGUoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgY2FuIGdldCBhIG5vdGlmaWNhdGlvbiB3aGVuIHRoZSB1c2VyIGZvcmNlIHRvdWNoZXMgdGhlIHdlYnZpZXcuIFRoZSBwbHVnaW4gZGVmaW5lcyBhIEZvcmNlIFRvdWNoIHdoZW4gYXQgbGVhc3QgNzUlIG9mIHRoZSBtYXhpbXVtIGZvcmNlIGlzIGFwcGxpZWQgdG8gdGhlIHNjcmVlbi4gWW91ciBhcHAgd2lsbCByZWNlaXZlIHRoZSB4IGFuZCB5IGNvb3JkaW5hdGVzLCBzbyB5b3UgaGF2ZSB0byBmaWd1cmUgb3V0IHdoaWNoIFVJIGVsZW1lbnQgd2FzIHRvdWNoZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxUaHJlZURlZVRvdWNoRm9yY2VUb3VjaD59IFJldHVybnMgYW4gb2JzZXJ2YWJsZSB0aGF0IHNlbmRzIGEgYFRocmVlRGVlVG91Y2hGb3JjZVRvdWNoYCBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgd2F0Y2hGb3JjZVRvdWNoZXMoKTogT2JzZXJ2YWJsZTxUaHJlZURlZVRvdWNoRm9yY2VUb3VjaD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogc2V0dXAgdGhlIDNELXRvdWNoIGFjdGlvbnMsIHRha2VzIGFuIGFycmF5IG9mIG9iamVjdHMgd2l0aCB0aGUgZm9sbG93aW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZSAob3B0aW9uYWwpIEEgdHlwZSB0aGF0IGNhbiBiZSB1c2VkIGBvbkhvbWVJY29uUHJlc3NlZGAgY2FsbGJhY2tcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgVGl0bGUgZm9yIHlvdXIgYWN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHN1YnRpdGxlIChvcHRpb25hbCkgQSBzaG9ydCBkZXNjcmlwdGlvbiBmb3IgeW91ciBhY3Rpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gaWNvblR5cGUgKG9wdGlvbmFsKSBDaG9vc2UgYmV0d2VlbiBQcm9oaWJpdCwgQ29udGFjdCwgSG9tZSwgTWFya0xvY2F0aW9uLCBGYXZvcml0ZSwgTG92ZSwgQ2xvdWQsIEludml0YXRpb24sIENvbmZpcm1hdGlvbiwgTWFpbCwgTWVzc2FnZSwgRGF0ZSwgVGltZSwgQ2FwdHVyZVBob3RvLCBDYXB0dXJlVmlkZW8sIFRhc2ssIFRhc2tDb21wbGV0ZWQsIEFsYXJtLCBCb29rbWFyaywgU2h1ZmZsZSwgQXVkaW8sIFVwZGF0ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBpY29uVGVtcGxhdGUgKG9wdGlvbmFsKSBDYW4gYmUgdXNlZCB0byBwcm92aWRlIHlvdXIgb3duIGljb25cclxuICAgKiBAcGFyYW0gcXVpY2tBY3Rpb25zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGNvbmZpZ3VyZVF1aWNrQWN0aW9ucyhxdWlja0FjdGlvbnM6IFRocmVlRGVlVG91Y2hRdWlja0FjdGlvbltdKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBXaGVuIGEgaG9tZSBpY29uIGlzIHByZXNzZWQsIHlvdXIgYXBwIGxhdW5jaGVzIGFuZCB0aGlzIEpTIGNhbGxiYWNrIGlzIGludm9rZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSByZXR1cm5zIGFuIG9ic2VydmFibGUgdGhhdCBub3RpZmllcyB5b3Ugd2hlbiBoZSB1c2VyIHByZXNzZXMgb24gdGhlIGhvbWUgc2NyZWVuIGljb25cclxuICAgKi9cclxuICBAQ29yZG92YUZ1bmN0aW9uT3ZlcnJpZGUoKVxyXG4gIG9uSG9tZUljb25QcmVzc2VkKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmFibGUgTGluayBQcmV2aWV3LlxyXG4gICAqIFVJV2ViVmlldyBhbmQgV0tXZWJWaWV3ICh0aGUgd2Vidmlld3MgcG93ZXJpbmcgQ29yZG92YSBhcHBzKSBkb24ndCBhbGxvdyB0aGUgZmFuY3kgbmV3IGxpbmsgcHJldmlldyBmZWF0dXJlIG9mIGlPUzkuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3luYzogdHJ1ZSxcclxuICB9KVxyXG4gIGVuYWJsZUxpbmtQcmV2aWV3KCk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzYWJsZWQgdGhlIGxpbmsgcHJldmlldyBmZWF0dXJlLCBpZiBlbmFibGVkLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBkaXNhYmxlTGlua1ByZXZpZXcoKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==