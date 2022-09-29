import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var NativeStorage = /** @class */ (function (_super) {
    __extends(NativeStorage, _super);
    function NativeStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NativeStorage.prototype.initWithSuiteName = function (reference) { return cordova(this, "initWithSuiteName", { "platforms": ["iOS"] }, arguments); };
    NativeStorage.prototype.setItem = function (reference, value) { return cordova(this, "setItem", {}, arguments); };
    NativeStorage.prototype.getItem = function (reference) { return cordova(this, "getItem", {}, arguments); };
    NativeStorage.prototype.keys = function () { return cordova(this, "keys", {}, arguments); };
    NativeStorage.prototype.remove = function (reference) { return cordova(this, "remove", {}, arguments); };
    NativeStorage.prototype.clear = function () { return cordova(this, "clear", {}, arguments); };
    NativeStorage.pluginName = "NativeStorage";
    NativeStorage.plugin = "cordova-plugin-nativestorage";
    NativeStorage.pluginRef = "NativeStorage";
    NativeStorage.repo = "https://github.com/TheCocoaProject/cordova-plugin-nativestorage";
    NativeStorage.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    NativeStorage.decorators = [
        { type: Injectable }
    ];
    return NativeStorage;
}(AwesomeCordovaNativePlugin));
export { NativeStorage };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmF0aXZlLXN0b3JhZ2Uvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUN6RCxpQ0FBMEI7Ozs7SUFVM0QseUNBQWlCLGFBQUMsU0FBaUI7SUFZbkMsK0JBQU8sYUFBQyxTQUFpQixFQUFFLEtBQVU7SUFXckMsK0JBQU8sYUFBQyxTQUFpQjtJQVV6Qiw0QkFBSTtJQVdKLDhCQUFNLGFBQUMsU0FBaUI7SUFVeEIsNkJBQUs7Ozs7Ozs7Z0JBakVOLFVBQVU7O3dCQW5DWDtFQW9DbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgTmF0aXZlIFN0b3JhZ2VcclxuICogQHByZW1pZXIgbmF0aXZlc3RvcmFnZVxyXG4gKiBAZGVzY3JpcHRpb24gTmF0aXZlIHN0b3JhZ2Ugb2YgdmFyaWFibGVzIGluIEFuZHJvaWQgYW5kIGlPU1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBOYXRpdmVTdG9yYWdlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25hdGl2ZS1zdG9yYWdlL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgbmF0aXZlU3RvcmFnZTogTmF0aXZlU3RvcmFnZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLm5hdGl2ZVN0b3JhZ2Uuc2V0SXRlbSgnbXlpdGVtJywge3Byb3BlcnR5OiAndmFsdWUnLCBhbm90aGVyUHJvcGVydHk6ICdhbm90aGVyVmFsdWUnfSlcclxuICogICAudGhlbihcclxuICogICAgICgpID0+IGNvbnNvbGUubG9nKCdTdG9yZWQgaXRlbSEnKSxcclxuICogICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHN0b3JpbmcgaXRlbScsIGVycm9yKVxyXG4gKiAgICk7XHJcbiAqXHJcbiAqIHRoaXMubmF0aXZlU3RvcmFnZS5nZXRJdGVtKCdteWl0ZW0nKVxyXG4gKiAgIC50aGVuKFxyXG4gKiAgICAgZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSxcclxuICogICAgIGVycm9yID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpXHJcbiAqICAgKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTmF0aXZlU3RvcmFnZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tbmF0aXZlc3RvcmFnZScsXHJcbiAgcGx1Z2luUmVmOiAnTmF0aXZlU3RvcmFnZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UaGVDb2NvYVByb2plY3QvY29yZG92YS1wbHVnaW4tbmF0aXZlc3RvcmFnZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOYXRpdmVTdG9yYWdlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIEluaXRpYWxpc2VzIHNoYXJlZCBzdG9yYWdlIHdpdGggdGhlIHN1aXRlIG5hbWUgd2hlbiB1c2luZyBhcHAgZ3JvdXBzIGluIGlPU1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHBsYXRmb3JtczogWydpT1MnXSxcclxuICB9KVxyXG4gIGluaXRXaXRoU3VpdGVOYW1lKHJlZmVyZW5jZTogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9yZXMgYSB2YWx1ZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlZmVyZW5jZSB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSB2YWx1ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNldEl0ZW0ocmVmZXJlbmNlOiBzdHJpbmcsIHZhbHVlOiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhIHN0b3JlZCBpdGVtXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZ2V0SXRlbShyZWZlcmVuY2U6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXRyaWV2aW5nIGFsbCBrZXlzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBrZXlzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgc2luZ2xlIHN0b3JlZCBpdGVtXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcmVmZXJlbmNlIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVtb3ZlKHJlZmVyZW5jZTogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIHN0b3JlZCB2YWx1ZXMuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbGVhcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=