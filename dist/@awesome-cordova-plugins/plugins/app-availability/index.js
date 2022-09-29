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
var AppAvailabilityOriginal = /** @class */ (function (_super) {
    __extends(AppAvailabilityOriginal, _super);
    function AppAvailabilityOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AppAvailabilityOriginal.prototype.check = function (app) { return cordova(this, "check", {}, arguments); };
    AppAvailabilityOriginal.pluginName = "AppAvailability";
    AppAvailabilityOriginal.plugin = "cordova-plugin-appavailability";
    AppAvailabilityOriginal.pluginRef = "appAvailability";
    AppAvailabilityOriginal.repo = "https://github.com/ohh2ahh/AppAvailability";
    AppAvailabilityOriginal.platforms = ["Android", "iOS"];
    return AppAvailabilityOriginal;
}(AwesomeCordovaNativePlugin));
var AppAvailability = new AppAvailabilityOriginal();
export { AppAvailability };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYXBwLWF2YWlsYWJpbGl0eS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUF3Q3ZELG1DQUEwQjs7OztJQVE3RCwrQkFBSyxhQUFDLEdBQVc7Ozs7OzswQkFqRG5CO0VBeUNxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBcHAgQXZhaWxhYmlsaXR5XHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGNoZWNrIGlmIGFuIGFwcCBpcyBpbnN0YWxsZWQgb24gdGhlIHVzZXIncyBkZXZpY2UuIEl0IHJlcXVpcmVzIGFuIFVSSSBTY2hlbWUgKGUuZy4gdHdpdHRlcjovLykgb24gaU9TIG9yIGEgUGFja2FnZSBOYW1lIChlLmcgY29tLnR3aXR0ZXIuYW5kcm9pZCkgb24gQW5kcm9pZC5cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWFwcGF2YWlsYWJpbGl0eS4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0FwcEF2YWlsYWJpbGl0eSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL29oaDJhaGgvQXBwQXZhaWxhYmlsaXR5KS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQXBwQXZhaWxhYmlsaXR5IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2FwcC1hdmFpbGFiaWxpdHkvbmd4JztcclxuICogaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdpb25pYy1hbmd1bGFyJztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBhcHBBdmFpbGFiaWxpdHk6IEFwcEF2YWlsYWJpbGl0eSwgcHJpdmF0ZSBwbGF0Zm9ybTogUGxhdGZvcm0pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogbGV0IGFwcDtcclxuICpcclxuICogaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2lvcycpKSB7XHJcbiAqICAgYXBwID0gJ3R3aXR0ZXI6Ly8nO1xyXG4gKiB9IGVsc2UgaWYgKHRoaXMucGxhdGZvcm0uaXMoJ2FuZHJvaWQnKSkge1xyXG4gKiAgIGFwcCA9ICdjb20udHdpdHRlci5hbmRyb2lkJztcclxuICogfVxyXG4gKlxyXG4gKiB0aGlzLmFwcEF2YWlsYWJpbGl0eS5jaGVjayhhcHApXHJcbiAqICAgLnRoZW4oXHJcbiAqICAgICAoeWVzOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIGF2YWlsYWJsZScpLFxyXG4gKiAgICAgKG5vOiBib29sZWFuKSA9PiBjb25zb2xlLmxvZyhhcHAgKyAnIGlzIE5PVCBhdmFpbGFibGUnKVxyXG4gKiAgICk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0FwcEF2YWlsYWJpbGl0eScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tYXBwYXZhaWxhYmlsaXR5JyxcclxuICBwbHVnaW5SZWY6ICdhcHBBdmFpbGFiaWxpdHknLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vb2hoMmFoaC9BcHBBdmFpbGFiaWxpdHknLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBBcHBBdmFpbGFiaWxpdHkgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ2hlY2tzIGlmIGFuIGFwcCBpcyBhdmFpbGFibGUgb24gZGV2aWNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYXBwIFBhY2thZ2UgbmFtZSBvbiBhbmRyb2lkLCBvciBVUkkgc2NoZW1lIG9uIGlPU1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjaGVjayhhcHA6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=