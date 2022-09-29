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
var LottieSplashScreenOriginal = /** @class */ (function (_super) {
    __extends(LottieSplashScreenOriginal, _super);
    function LottieSplashScreenOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LottieSplashScreenOriginal.prototype.show = function (location, remote, width, height) { return cordova(this, "show", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.prototype.hide = function () { return cordova(this, "hide", { "sync": true }, arguments); };
    LottieSplashScreenOriginal.pluginName = "LottieSplashScreen";
    LottieSplashScreenOriginal.plugin = "cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.pluginRef = "lottie.splashscreen";
    LottieSplashScreenOriginal.repo = "https://github.com/timbru31/cordova-plugin-lottie-splashscreen";
    LottieSplashScreenOriginal.install = "";
    LottieSplashScreenOriginal.installVariables = [];
    LottieSplashScreenOriginal.platforms = ["Android", "iOS"];
    return LottieSplashScreenOriginal;
}(AwesomeCordovaNativePlugin));
var LottieSplashScreen = new LottieSplashScreenOriginal();
export { LottieSplashScreen };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbG90dGllLXNwbGFzaC1zY3JlZW4vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBZ0NwRCxzQ0FBMEI7Ozs7SUFZaEUsaUNBQUksYUFBQyxRQUFpQixFQUFFLE1BQWdCLEVBQUUsS0FBYyxFQUFFLE1BQWU7SUFNekUsaUNBQUk7Ozs7Ozs7OzZCQW5ETjtFQWlDd0MsMEJBQTBCO1NBQXJELGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBMb3R0aWUgU3BsYXNoIFNjcmVlblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBwbHVnaW4gdG8gc2hvdyBib2R5bW92aW4vTG90dGllIGFuaW1hdGlvbnMgYXMgdGhlIHNwbGFzaCBzY3JlZW4gd2l0aCBBaXJibmIncyBMb3R0aWUgd3JhcHBlclxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBMb3R0aWVTcGxhc2hTY3JlZW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvbG90dGllLXNwbGFzaC1zY3JlZW4vbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBsb3R0aWVTcGxhc2hTY3JlZW46IExvdHRpZVNwbGFzaFNjcmVlbikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmxvdHRpZVNwbGFzaFNjcmVlbi5zaG93KCd3d3cvbG90dGllL2FuaW1hdGlvbi5qc29uJywgZmFsc2UsIDEwMjQsIDc2OClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0xvdHRpZVNwbGFzaFNjcmVlbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbG90dGllLXNwbGFzaHNjcmVlbicsXHJcbiAgcGx1Z2luUmVmOiAnbG90dGllLnNwbGFzaHNjcmVlbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90aW1icnUzMS9jb3Jkb3ZhLXBsdWdpbi1sb3R0aWUtc3BsYXNoc2NyZWVuJyxcclxuICBpbnN0YWxsOiAnJyxcclxuICBpbnN0YWxsVmFyaWFibGVzOiBbXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTG90dGllU3BsYXNoU2NyZWVuIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gc2hvd3MgYSBMb3R0aWUgc3BsYXNoIHNjcmVlbi4gSWYgbm8gYXJndW1lbnRzIGFyZSBnaXZlbiwgaXQgZGVmYXVsdHMgdG8gdGhlIGNvbmZpZy54bWwgdmFsdWVzLCBob3dldmVyIHlvdSBjYW4gcGFzcyAobmV3KSBvcHRpb25zIGhlcmUgdG8gY2hhbmdlIHRoZSBiZWhhdmlvciBvbiBydW50aW1lLiAoRm9yIGVhc2llciByZWFkaW5nIHRoZSBUeXBlU2NyaXB0IG5vdGF0aW9uIGlzIHVzZWQpXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbG9jYXRpb24ge3N0cmluZ30gTG9jYXRpb24gb2YgdGhlIExvdHRpZSBKU09OIGZpbGUgdGhhdCBzaG91bGQgYmUgbG9hZGVkLlxyXG4gICAqIEBwYXJhbSByZW1vdGUge251bWJlcn0gVG9nZ2xlcyBMb3R0aWUncyByZW1vdGUgbW9kZSB3aGljaCBhbGxvd3MgZmlsZXMgdG8gYmUgZG93bmxvYWRlZC9kaXNwbGF5ZWQgZnJvbSBVUkxzLiBFeGFtcGxlOlxyXG4gICAqIEBwYXJhbSB3aWR0aCB7bnVtYmVyfSBXaWR0aCBvZiB0aGUgY29udGFpbmVyIHRoYXQncyByZW5kZXJpbmcgdGhlIExvdHRpZSBhbmltYXRpb25cclxuICAgKiBAcGFyYW0gaGVpZ2h0IHtudW1iZXJ9IEhlaWdodCBvZiB0aGUgY29udGFpbmVyIHRoYXQncyByZW5kZXJpbmcgdGhlIExvdHRpZSBhbmltYXRpb25cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2hvdyhsb2NhdGlvbj86IHN0cmluZywgcmVtb3RlPzogYm9vbGVhbiwgd2lkdGg/OiBudW1iZXIsIGhlaWdodD86IG51bWJlcik6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBtZXRob2RzIGhpZGVzIHRoZSBjdXJyZW50IGFjdGl2ZSBMb3R0aWUgc3BsYXNoc2NyZWVuIGFuZCBkZXN0cm95cyB0aGUgdmlld3MuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgaGlkZSgpOiB2b2lkIHt9XHJcbn1cclxuIl19