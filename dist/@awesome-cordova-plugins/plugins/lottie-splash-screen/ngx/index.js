import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var LottieSplashScreen = /** @class */ (function (_super) {
    __extends(LottieSplashScreen, _super);
    function LottieSplashScreen() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreen.prototype.show = function (location, remote, width, height) { return cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreen.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreen.pluginName = "LottieSplashScreen";
    LottieSplashScreen.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreen.pluginRef = "lottie.splashscreen";
    LottieSplashScreen.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreen.install = "";
    LottieSplashScreen.installVariables = [];
    LottieSplashScreen.platforms = ["Android", "iOS"];
    LottieSplashScreen.decorators = [
        { type: Injectable }
    ];
    return LottieSplashScreen;
}(AwesomeCordovaNativePlugin));
export { LottieSplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG90dGllLXNwbGFzaC1zY3JlZW4vbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0NwRCxzQ0FBMEI7Ozs7SUFZaEUsaUNBQUksYUFBQyxRQUFpQixFQUFFLE1BQWdCLEVBQUUsS0FBYyxFQUFFLE1BQWU7SUFNekUsaUNBQUk7Ozs7Ozs7OztnQkFuQkwsVUFBVTs7NkJBaENYO0VBaUN3QywwQkFBMEI7U0FBckQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIExvdHRpZSBTcGxhc2ggU2NyZWVuXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiB0byBzaG93IGJvZHltb3Zpbi9Mb3R0aWUgYW5pbWF0aW9ucyBhcyB0aGUgc3BsYXNoIHNjcmVlbiB3aXRoIEFpcmJuYidzIExvdHRpZSB3cmFwcGVyXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IExvdHRpZVNwbGFzaFNjcmVlbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9sb3R0aWUtc3BsYXNoLXNjcmVlbi9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGxvdHRpZVNwbGFzaFNjcmVlbjogTG90dGllU3BsYXNoU2NyZWVuKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMubG90dGllU3BsYXNoU2NyZWVuLnNob3coJ3d3dy9sb3R0aWUvYW5pbWF0aW9uLmpzb24nLCBmYWxzZSwgMTAyNCwgNzY4KVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTG90dGllU3BsYXNoU2NyZWVuJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb3R0aWUtc3BsYXNoc2NyZWVuJyxcclxuICBwbHVnaW5SZWY6ICdsb3R0aWUuc3BsYXNoc2NyZWVuJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RpbWJydTMxL2NvcmRvdmEtcGx1Z2luLWxvdHRpZS1zcGxhc2hzY3JlZW4nLFxyXG4gIGluc3RhbGw6ICcnLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFtdLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBMb3R0aWVTcGxhc2hTY3JlZW4gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBzaG93cyBhIExvdHRpZSBzcGxhc2ggc2NyZWVuLiBJZiBubyBhcmd1bWVudHMgYXJlIGdpdmVuLCBpdCBkZWZhdWx0cyB0byB0aGUgY29uZmlnLnhtbCB2YWx1ZXMsIGhvd2V2ZXIgeW91IGNhbiBwYXNzIChuZXcpIG9wdGlvbnMgaGVyZSB0byBjaGFuZ2UgdGhlIGJlaGF2aW9yIG9uIHJ1bnRpbWUuIChGb3IgZWFzaWVyIHJlYWRpbmcgdGhlIFR5cGVTY3JpcHQgbm90YXRpb24gaXMgdXNlZClcclxuICAgKlxyXG4gICAqIEBwYXJhbSBsb2NhdGlvbiB7c3RyaW5nfSBMb2NhdGlvbiBvZiB0aGUgTG90dGllIEpTT04gZmlsZSB0aGF0IHNob3VsZCBiZSBsb2FkZWQuXHJcbiAgICogQHBhcmFtIHJlbW90ZSB7bnVtYmVyfSBUb2dnbGVzIExvdHRpZSdzIHJlbW90ZSBtb2RlIHdoaWNoIGFsbG93cyBmaWxlcyB0byBiZSBkb3dubG9hZGVkL2Rpc3BsYXllZCBmcm9tIFVSTHMuIEV4YW1wbGU6XHJcbiAgICogQHBhcmFtIHdpZHRoIHtudW1iZXJ9IFdpZHRoIG9mIHRoZSBjb250YWluZXIgdGhhdCdzIHJlbmRlcmluZyB0aGUgTG90dGllIGFuaW1hdGlvblxyXG4gICAqIEBwYXJhbSBoZWlnaHQge251bWJlcn0gSGVpZ2h0IG9mIHRoZSBjb250YWluZXIgdGhhdCdzIHJlbmRlcmluZyB0aGUgTG90dGllIGFuaW1hdGlvblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBzaG93KGxvY2F0aW9uPzogc3RyaW5nLCByZW1vdGU/OiBib29sZWFuLCB3aWR0aD86IG51bWJlciwgaGVpZ2h0PzogbnVtYmVyKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUaGlzIG1ldGhvZHMgaGlkZXMgdGhlIGN1cnJlbnQgYWN0aXZlIExvdHRpZSBzcGxhc2hzY3JlZW4gYW5kIGRlc3Ryb3lzIHRoZSB2aWV3cy5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBoaWRlKCk6IHZvaWQge31cclxufVxyXG4iXX0=