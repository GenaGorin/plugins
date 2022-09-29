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
var AndroidNotchOriginal = /** @class */ (function (_super) {
    __extends(AndroidNotchOriginal, _super);
    function AndroidNotchOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidNotchOriginal.prototype.hasCutout = function () { return cordova(this, "hasCutout", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetTop = function () { return cordova(this, "getInsetTop", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetRight = function () { return cordova(this, "getInsetRight", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetBottom = function () { return cordova(this, "getInsetBottom", {}, arguments); };
    AndroidNotchOriginal.prototype.getInsetLeft = function () { return cordova(this, "getInsetLeft", {}, arguments); };
    AndroidNotchOriginal.pluginName = "AndroidNotch";
    AndroidNotchOriginal.plugin = "cordova-plugin-android-notch";
    AndroidNotchOriginal.pluginRef = "AndroidNotch";
    AndroidNotchOriginal.repo = "https://github.com/tobspr/cordova-plugin-android-notch.git";
    AndroidNotchOriginal.platforms = ["Android"];
    return AndroidNotchOriginal;
}(AwesomeCordovaNativePlugin));
var AndroidNotch = new AndroidNotchOriginal();
export { AndroidNotch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYW5kcm9pZC1ub3RjaC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFnRDFELGdDQUEwQjs7OztJQU8xRCxnQ0FBUztJQVVULGtDQUFXO0lBVVgsb0NBQWE7SUFVYixxQ0FBYztJQVVkLG1DQUFZOzs7Ozs7dUJBaEdkO0VBaURrQywwQkFBMEI7U0FBL0MsWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGx1Z2luLCBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBbmRyb2lkIE5vdGNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBlbmFibGVzIGRldmVsb3BlcnMgdG8gZ2V0IHRoZSBjdXRvdXQgYW5kIGFuZHJvaWQgZGV2aWNlcyBpbnNldCBzaXplc1xyXG4gKiBJdCBpcyBiYXNlZCBvbiB0aGUgY29yZG92YSBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEB0b2JzcHI6IGh0dHBzOi8vZ2l0aHViLmNvbS90b2JzcHIvY29yZG92YS1wbHVnaW4tYW5kcm9pZC1ub3RjaFxyXG4gKiBUaGlzIHBsdWdpbiB3b3JrcyBvbiBhbGwgYW5kcm9pZCB2ZXJzaW9ucywgYnV0IHdlIGNhbiBvbmx5IGRldGVjdCBub3RjaGVzIHN0YXJ0aW5nIGZyb20gQW5kcm9pZCA5LlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBbmRyb2lkTm90Y2ggfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYW5kcm9pZC1ub3RjaC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFuZHJvaWROb3RjaDogQW5kcm9pZE5vdGNoKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmhhc0N1dG91dCgpXHJcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxyXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxyXG4gKlxyXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5nZXRJbnNldFRvcCgpXHJcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxyXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxyXG4gKlxyXG4gKiB0aGlzLmFuZHJvaWROb3RjaC5nZXRJbnNldFJpZ2h0KClcclxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXHJcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXHJcbiAqXHJcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmdldEluc2V0Qm90dG9tKClcclxuICogICAgLnRoZW4oKHB4OiBudW1iZXIpID0+IGNvbnNvbGUubG9nKCdJbnNldCBzaXplOiAnKSwgcHgpXHJcbiAqICAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnJvcikpXHJcbiAqXHJcbiAqIHRoaXMuYW5kcm9pZE5vdGNoLmdldEluc2V0TGVmdCgpXHJcbiAqICAgIC50aGVuKChweDogbnVtYmVyKSA9PiBjb25zb2xlLmxvZygnSW5zZXQgc2l6ZTogJyksIHB4KVxyXG4gKiAgICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyb3IpKVxyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBbmRyb2lkTm90Y2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFuZHJvaWQtbm90Y2gnLFxyXG4gIHBsdWdpblJlZjogJ0FuZHJvaWROb3RjaCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b2JzcHIvY29yZG92YS1wbHVnaW4tYW5kcm9pZC1ub3RjaC5naXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFuZHJvaWROb3RjaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGFuZHJvaWQgZGV2aWNlIGhhcyBjdXRvdXRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYXNDdXRvdXQoKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoZSBoZWlndGggb2YgdGhlIHRvcCBpbnNldFxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8bnVtYmVyPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SW5zZXRUb3AoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGhlaWd0aCBvZiB0aGUgcmlnaHQgaW5zZXRcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGdldEluc2V0UmlnaHQoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgdGhlIGhlaWd0aCBvZiB0aGUgYm90dG9tIGluc2V0XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRJbnNldEJvdHRvbSgpOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgaGVpZ3RoIG9mIHRoZSBsZWZ0IGluc2V0XHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRJbnNldExlZnQoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19