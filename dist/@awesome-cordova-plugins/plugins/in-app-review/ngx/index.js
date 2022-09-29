import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var InAppReview = /** @class */ (function (_super) {
    __extends(InAppReview, _super);
    function InAppReview() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    InAppReview.prototype.requestReview = function () { return cordova(this, "requestReview", {}, arguments); };
    InAppReview.pluginName = "InAppReview";
    InAppReview.plugin = "com.omarben.inappreview";
    InAppReview.pluginRef = "inappreview";
    InAppReview.repo = "https://github.com/omaxlive/com.omarben.inappreview";
    InAppReview.platforms = ["iOS"];
    InAppReview.decorators = [
        { type: Injectable }
    ];
    return InAppReview;
}(AwesomeCordovaNativePlugin));
export { InAppReview };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaW4tYXBwLXJldmlldy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUFpQzNELCtCQUEwQjs7OztJQU96RCxtQ0FBYTs7Ozs7OztnQkFSZCxVQUFVOztzQkFqQ1g7RUFrQ2lDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xyXG4vKipcclxuICogQG5hbWUgSW4gQXBwIFJldmlld1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gZG9lcyB1c2UgdGhlIGlPUyBjbGFzcyBTS1N0b3Jl4oCLUmV2aWV34oCLQ29udHJvbGxlciB0byBvcGVuIHRoZSBpbkFwcCByZXZpZXcgcG9wdXAgYXZhaWxhYmxlIHNpbmNlIGlPUyAxMC4zXHJcbiAqXHJcbiAqIFRoaXMgZnVuY3Rpb25hbGl0eSBvbmx5IHdvcmtzIG9uIGlPUyBkZXZpY2VzXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEluQXBwUmV2aWV3IH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2luLWFwcC1yZXZpZXcvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBpbkFwcFJldmlldzogSW5BcHBSZXZpZXcpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5pbkFwcFJldmlldy5yZXF1ZXN0UmV2aWV3KClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuLyogdHNsaW50OmVuYWJsZSAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSW5BcHBSZXZpZXcnLFxyXG4gIHBsdWdpbjogJ2NvbS5vbWFyYmVuLmluYXBwcmV2aWV3JyxcclxuICBwbHVnaW5SZWY6ICdpbmFwcHJldmlldycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9vbWF4bGl2ZS9jb20ub21hcmJlbi5pbmFwcHJldmlldycsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBJbkFwcFJldmlldyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBPcGVuIHRoZSBpbkFwcCByZXZpZXcgcG9wdXBcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXF1ZXN0UmV2aWV3KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47IC8vIFdlIGFkZCByZXR1cm47IGhlcmUgdG8gYXZvaWQgYW55IElERSAvIENvbXBpbGVyIGVycm9yc1xyXG4gIH1cclxufVxyXG4iXX0=