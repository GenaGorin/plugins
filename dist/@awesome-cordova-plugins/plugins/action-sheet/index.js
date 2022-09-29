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
var ActionSheetOriginal = /** @class */ (function (_super) {
    __extends(ActionSheetOriginal, _super);
    function ActionSheetOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Convenience property to select an Android theme value
         */
        _this.ANDROID_THEMES = {
            THEME_TRADITIONAL: 1,
            THEME_HOLO_DARK: 2,
            THEME_HOLO_LIGHT: 3,
            THEME_DEVICE_DEFAULT_DARK: 4,
            THEME_DEVICE_DEFAULT_LIGHT: 5,
        };
        return _this;
    }
    ActionSheetOriginal.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    ActionSheetOriginal.prototype.hide = function (options) { return cordova(this, "hide", {}, arguments); };
    ActionSheetOriginal.pluginName = "ActionSheet";
    ActionSheetOriginal.plugin = "cordova-plugin-actionsheet";
    ActionSheetOriginal.pluginRef = "plugins.actionsheet";
    ActionSheetOriginal.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheetOriginal.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    return ActionSheetOriginal;
}(AwesomeCordovaNativePlugin));
var ActionSheet = new ActionSheetOriginal();
export { ActionSheet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWN0aW9uLXNoZWV0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdHM0QsK0JBQTBCOzs7UUFDekQ7O1dBRUc7UUFDSCxvQkFBYyxHQU1WO1lBQ0YsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHlCQUF5QixFQUFFLENBQUM7WUFDNUIsMEJBQTBCLEVBQUUsQ0FBQztTQUM5QixDQUFDOzs7SUFVRiwwQkFBSSxhQUFDLE9BQTRCO0lBV2pDLDBCQUFJLGFBQUMsT0FBNEI7Ozs7OztzQkF0SW5DO0VBaUdpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uU2hlZXRPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBUaGUgbGFiZWxzIGZvciB0aGUgYnV0dG9ucy4gVXNlcyB0aGUgaW5kZXggeFxyXG4gICAqL1xyXG4gIGJ1dHRvbkxhYmVsczogc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0aXRsZSBmb3IgdGhlIGFjdGlvbnNoZWV0XHJcbiAgICovXHJcbiAgdGl0bGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzdWJ0aXRsZSBmb3IgdGhlIGFjdGlvbnNoZWV0IChJT1Mgb25seSlcclxuICAgKi9cclxuICBzdWJ0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlbWUgdG8gYmUgdXNlZCBvbiBBbmRyb2lkXHJcbiAgICovXHJcbiAgYW5kcm9pZFRoZW1lPzogMSB8IDIgfCAzIHwgNCB8IDU7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBhIGNhbmNlbCBvbiBBbmRyb2lkXHJcbiAgICovXHJcbiAgYW5kcm9pZEVuYWJsZUNhbmNlbEJ1dHRvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBhIGNhbmNlbCBvbiBXaW5kb3dzIFBob25lXHJcbiAgICovXHJcbiAgd2lucGhvbmVFbmFibGVDYW5jZWxCdXR0b24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBjYW5jZWwgYnV0dG9uIHdpdGggdGV4dFxyXG4gICAqL1xyXG4gIGFkZENhbmNlbEJ1dHRvbldpdGhMYWJlbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQWRkIGEgZGVzdHJ1Y3RpdmUgYnV0dG9uIHdpdGggdGV4dFxyXG4gICAqL1xyXG4gIGFkZERlc3RydWN0aXZlQnV0dG9uV2l0aExhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBPbiBhbiBpUGFkLCBzZXQgdGhlIFgsWSBwb3NpdGlvblxyXG4gICAqL1xyXG4gIHBvc2l0aW9uPzogW251bWJlciwgbnVtYmVyXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hvb3NlIGlmIGRlc3RydWN0aXZlIGJ1dHRvbiB3aWxsIGJlIHRoZSBsYXN0XHJcbiAgICovXHJcbiAgZGVzdHJ1Y3RpdmVCdXR0b25MYXN0PzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEFjdGlvbiBTaGVldFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIEFjdGlvblNoZWV0IHBsdWdpbiBzaG93cyBhIG5hdGl2ZSBsaXN0IG9mIG9wdGlvbnMgdGhlIHVzZXIgY2FuIGNob29zZSBmcm9tLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0YC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0FjdGlvblNoZWV0IHBsdWdpbiBkb2NzXShodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXQpLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBY3Rpb25TaGVldCwgQWN0aW9uU2hlZXRPcHRpb25zIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FjdGlvbi1zaGVldC9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjdGlvblNoZWV0OiBBY3Rpb25TaGVldCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiBsZXQgYnV0dG9uTGFiZWxzID0gWydTaGFyZSB2aWEgRmFjZWJvb2snLCAnU2hhcmUgdmlhIFR3aXR0ZXInXTtcclxuICpcclxuICogY29uc3Qgb3B0aW9uczogQWN0aW9uU2hlZXRPcHRpb25zID0ge1xyXG4gKiAgIHRpdGxlOiAnV2hhdCBkbyB5b3Ugd2FudCB3aXRoIHRoaXMgaW1hZ2U/JyxcclxuICogICBzdWJ0aXRsZTogJ0Nob29zZSBhbiBhY3Rpb24nLFxyXG4gKiAgIGJ1dHRvbkxhYmVsczogYnV0dG9uTGFiZWxzLFxyXG4gKiAgIGFkZENhbmNlbEJ1dHRvbldpdGhMYWJlbDogJ0NhbmNlbCcsXHJcbiAqICAgYWRkRGVzdHJ1Y3RpdmVCdXR0b25XaXRoTGFiZWw6ICdEZWxldGUnLFxyXG4gKiAgIGFuZHJvaWRUaGVtZTogdGhpcy5hY3Rpb25TaGVldC5BTkRST0lEX1RIRU1FUy5USEVNRV9IT0xPX0RBUkssXHJcbiAqICAgZGVzdHJ1Y3RpdmVCdXR0b25MYXN0OiB0cnVlXHJcbiAqIH1cclxuICpcclxuICogdGhpcy5hY3Rpb25TaGVldC5zaG93KG9wdGlvbnMpLnRoZW4oKGJ1dHRvbkluZGV4OiBudW1iZXIpID0+IHtcclxuICogICBjb25zb2xlLmxvZygnQnV0dG9uIHByZXNzZWQ6ICcgKyBidXR0b25JbmRleCk7XHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogQWN0aW9uU2hlZXRPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQWN0aW9uU2hlZXQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0JyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmFjdGlvbnNoZWV0JyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0VkZHlWZXJicnVnZ2VuL2NvcmRvdmEtcGx1Z2luLWFjdGlvbnNoZWV0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdXaW5kb3dzJywgJ1dpbmRvd3MgUGhvbmUgOCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBY3Rpb25TaGVldCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb252ZW5pZW5jZSBwcm9wZXJ0eSB0byBzZWxlY3QgYW4gQW5kcm9pZCB0aGVtZSB2YWx1ZVxyXG4gICAqL1xyXG4gIEFORFJPSURfVEhFTUVTOiB7XHJcbiAgICBUSEVNRV9UUkFESVRJT05BTDogbnVtYmVyO1xyXG4gICAgVEhFTUVfSE9MT19EQVJLOiBudW1iZXI7XHJcbiAgICBUSEVNRV9IT0xPX0xJR0hUOiBudW1iZXI7XHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiBudW1iZXI7XHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogbnVtYmVyO1xyXG4gIH0gPSB7XHJcbiAgICBUSEVNRV9UUkFESVRJT05BTDogMSxcclxuICAgIFRIRU1FX0hPTE9fREFSSzogMixcclxuICAgIFRIRU1FX0hPTE9fTElHSFQ6IDMsXHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9EQVJLOiA0LFxyXG4gICAgVEhFTUVfREVWSUNFX0RFRkFVTFRfTElHSFQ6IDUsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBhIG5hdGl2ZSBBY3Rpb25TaGVldCBjb21wb25lbnQuIFNlZSBiZWxvdyBmb3Igb3B0aW9ucy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7QWN0aW9uU2hlZXRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBTZWUgdGFibGUgYmVsb3dcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGluZGV4IG9mIHRoZVxyXG4gICAqICAgYnV0dG9uIHByZXNzZWQgKDEgYmFzZWQsIHNvIDEsIDIsIDMsIGV0Yy4pXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNob3cob3B0aW9ucz86IEFjdGlvblNoZWV0T3B0aW9ucyk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcm9ncmFtbWF0aWNhbGx5IGhpZGUgdGhlIG5hdGl2ZSBBY3Rpb25TaGVldFxyXG4gICAqXHJcbiAgICogQHBhcmFtICB7QWN0aW9uU2hlZXRPcHRpb25zfSBbb3B0aW9uc10gT3B0aW9ucyBTZWUgdGFibGUgYmVsb3dcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gdGhlIGFjdGlvbnNoZWV0IGlzIGNsb3NlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoaWRlKG9wdGlvbnM/OiBBY3Rpb25TaGVldE9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=