import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var ActionSheet = /** @class */ (function (_super) {
    __extends(ActionSheet, _super);
    function ActionSheet() {
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
    ActionSheet.prototype.show = function (options) { return cordova(this, "show", {}, arguments); };
    ActionSheet.prototype.hide = function (options) { return cordova(this, "hide", {}, arguments); };
    ActionSheet.pluginName = "ActionSheet";
    ActionSheet.plugin = "cordova-plugin-actionsheet";
    ActionSheet.pluginRef = "plugins.actionsheet";
    ActionSheet.repo = "https://github.com/EddyVerbruggen/cordova-plugin-actionsheet";
    ActionSheet.platforms = ["Android", "Browser", "iOS", "Windows", "Windows Phone 8"];
    ActionSheet.decorators = [
        { type: Injectable }
    ];
    return ActionSheet;
}(AwesomeCordovaNativePlugin));
export { ActionSheet };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWN0aW9uLXNoZWV0L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdHM0QsK0JBQTBCOzs7UUFDekQ7O1dBRUc7UUFDSCxvQkFBYyxHQU1WO1lBQ0YsaUJBQWlCLEVBQUUsQ0FBQztZQUNwQixlQUFlLEVBQUUsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDO1lBQ25CLHlCQUF5QixFQUFFLENBQUM7WUFDNUIsMEJBQTBCLEVBQUUsQ0FBQztTQUM5QixDQUFDOzs7SUFVRiwwQkFBSSxhQUFDLE9BQTRCO0lBV2pDLDBCQUFJLGFBQUMsT0FBNEI7Ozs7Ozs7Z0JBdENsQyxVQUFVOztzQkFoR1g7RUFpR2lDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBY3Rpb25TaGVldE9wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYWJlbHMgZm9yIHRoZSBidXR0b25zLiBVc2VzIHRoZSBpbmRleCB4XHJcbiAgICovXHJcbiAgYnV0dG9uTGFiZWxzOiBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHRpdGxlIGZvciB0aGUgYWN0aW9uc2hlZXRcclxuICAgKi9cclxuICB0aXRsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHN1YnRpdGxlIGZvciB0aGUgYWN0aW9uc2hlZXQgKElPUyBvbmx5KVxyXG4gICAqL1xyXG4gIHN1YnRpdGxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGVtZSB0byBiZSB1c2VkIG9uIEFuZHJvaWRcclxuICAgKi9cclxuICBhbmRyb2lkVGhlbWU/OiAxIHwgMiB8IDMgfCA0IHwgNTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIGEgY2FuY2VsIG9uIEFuZHJvaWRcclxuICAgKi9cclxuICBhbmRyb2lkRW5hYmxlQ2FuY2VsQnV0dG9uPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIGEgY2FuY2VsIG9uIFdpbmRvd3MgUGhvbmVcclxuICAgKi9cclxuICB3aW5waG9uZUVuYWJsZUNhbmNlbEJ1dHRvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZCBhIGNhbmNlbCBidXR0b24gd2l0aCB0ZXh0XHJcbiAgICovXHJcbiAgYWRkQ2FuY2VsQnV0dG9uV2l0aExhYmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBZGQgYSBkZXN0cnVjdGl2ZSBidXR0b24gd2l0aCB0ZXh0XHJcbiAgICovXHJcbiAgYWRkRGVzdHJ1Y3RpdmVCdXR0b25XaXRoTGFiZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9uIGFuIGlQYWQsIHNldCB0aGUgWCxZIHBvc2l0aW9uXHJcbiAgICovXHJcbiAgcG9zaXRpb24/OiBbbnVtYmVyLCBudW1iZXJdO1xyXG5cclxuICAvKipcclxuICAgKiBDaG9vc2UgaWYgZGVzdHJ1Y3RpdmUgYnV0dG9uIHdpbGwgYmUgdGhlIGxhc3RcclxuICAgKi9cclxuICBkZXN0cnVjdGl2ZUJ1dHRvbkxhc3Q/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQWN0aW9uIFNoZWV0XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgQWN0aW9uU2hlZXQgcGx1Z2luIHNob3dzIGEgbmF0aXZlIGxpc3Qgb2Ygb3B0aW9ucyB0aGUgdXNlciBjYW4gY2hvb3NlIGZyb20uXHJcbiAqXHJcbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXRgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbQWN0aW9uU2hlZXQgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9FZGR5VmVyYnJ1Z2dlbi9jb3Jkb3ZhLXBsdWdpbi1hY3Rpb25zaGVldCkuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEFjdGlvblNoZWV0LCBBY3Rpb25TaGVldE9wdGlvbnMgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvYWN0aW9uLXNoZWV0L25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aW9uU2hlZXQ6IEFjdGlvblNoZWV0KSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIGxldCBidXR0b25MYWJlbHMgPSBbJ1NoYXJlIHZpYSBGYWNlYm9vaycsICdTaGFyZSB2aWEgVHdpdHRlciddO1xyXG4gKlxyXG4gKiBjb25zdCBvcHRpb25zOiBBY3Rpb25TaGVldE9wdGlvbnMgPSB7XHJcbiAqICAgdGl0bGU6ICdXaGF0IGRvIHlvdSB3YW50IHdpdGggdGhpcyBpbWFnZT8nLFxyXG4gKiAgIHN1YnRpdGxlOiAnQ2hvb3NlIGFuIGFjdGlvbicsXHJcbiAqICAgYnV0dG9uTGFiZWxzOiBidXR0b25MYWJlbHMsXHJcbiAqICAgYWRkQ2FuY2VsQnV0dG9uV2l0aExhYmVsOiAnQ2FuY2VsJyxcclxuICogICBhZGREZXN0cnVjdGl2ZUJ1dHRvbldpdGhMYWJlbDogJ0RlbGV0ZScsXHJcbiAqICAgYW5kcm9pZFRoZW1lOiB0aGlzLmFjdGlvblNoZWV0LkFORFJPSURfVEhFTUVTLlRIRU1FX0hPTE9fREFSSyxcclxuICogICBkZXN0cnVjdGl2ZUJ1dHRvbkxhc3Q6IHRydWVcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLmFjdGlvblNoZWV0LnNob3cob3B0aW9ucykudGhlbigoYnV0dG9uSW5kZXg6IG51bWJlcikgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKCdCdXR0b24gcHJlc3NlZDogJyArIGJ1dHRvbkluZGV4KTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBBY3Rpb25TaGVldE9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdBY3Rpb25TaGVldCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXQnLFxyXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuYWN0aW9uc2hlZXQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vRWRkeVZlcmJydWdnZW4vY29yZG92YS1wbHVnaW4tYWN0aW9uc2hlZXQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnV2luZG93cyBQaG9uZSA4J10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFjdGlvblNoZWV0IGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnZlbmllbmNlIHByb3BlcnR5IHRvIHNlbGVjdCBhbiBBbmRyb2lkIHRoZW1lIHZhbHVlXHJcbiAgICovXHJcbiAgQU5EUk9JRF9USEVNRVM6IHtcclxuICAgIFRIRU1FX1RSQURJVElPTkFMOiBudW1iZXI7XHJcbiAgICBUSEVNRV9IT0xPX0RBUks6IG51bWJlcjtcclxuICAgIFRIRU1FX0hPTE9fTElHSFQ6IG51bWJlcjtcclxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IG51bWJlcjtcclxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0xJR0hUOiBudW1iZXI7XHJcbiAgfSA9IHtcclxuICAgIFRIRU1FX1RSQURJVElPTkFMOiAxLFxyXG4gICAgVEhFTUVfSE9MT19EQVJLOiAyLFxyXG4gICAgVEhFTUVfSE9MT19MSUdIVDogMyxcclxuICAgIFRIRU1FX0RFVklDRV9ERUZBVUxUX0RBUks6IDQsXHJcbiAgICBUSEVNRV9ERVZJQ0VfREVGQVVMVF9MSUdIVDogNSxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBTaG93IGEgbmF0aXZlIEFjdGlvblNoZWV0IGNvbXBvbmVudC4gU2VlIGJlbG93IGZvciBvcHRpb25zLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtBY3Rpb25TaGVldE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIFNlZSB0YWJsZSBiZWxvd1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgaW5kZXggb2YgdGhlXHJcbiAgICogICBidXR0b24gcHJlc3NlZCAoMSBiYXNlZCwgc28gMSwgMiwgMywgZXRjLilcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvdyhvcHRpb25zPzogQWN0aW9uU2hlZXRPcHRpb25zKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb2dyYW1tYXRpY2FsbHkgaGlkZSB0aGUgbmF0aXZlIEFjdGlvblNoZWV0XHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtBY3Rpb25TaGVldE9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIFNlZSB0YWJsZSBiZWxvd1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgYWN0aW9uc2hlZXQgaXMgY2xvc2VkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGhpZGUob3B0aW9ucz86IEFjdGlvblNoZWV0T3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==