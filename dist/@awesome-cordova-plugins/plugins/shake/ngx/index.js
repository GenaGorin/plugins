import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var Shake = /** @class */ (function (_super) {
    __extends(Shake, _super);
    function Shake() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shake.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    Shake.pluginName = "Shake";
    Shake.plugin = "cordova-plugin-shake";
    Shake.pluginRef = "shake";
    Shake.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    Shake.platforms = ["iOS"];
    Shake.decorators = [
        { type: Injectable }
    ];
    return Shake;
}(AwesomeCordovaNativePlugin));
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2hha2Uvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyQlAseUJBQTBCOzs7O0lBYW5ELDBCQUFVLGFBQUMsV0FBb0I7Ozs7Ozs7Z0JBZGhDLFVBQVU7O2dCQTVCWDtFQTZCMkIsMEJBQTBCO1NBQXhDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuLyoqXHJcbiAqIEBuYW1lIFNoYWtlXHJcbiAqIEBkZXNjcmlwdGlvbiBIYW5kbGVzIHNoYWtlIGdlc3R1cmVcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgU2hha2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvc2hha2Uvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzaGFrZTogU2hha2UpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3Qgd2F0Y2ggPSB0aGlzLnNoYWtlLnN0YXJ0V2F0Y2goNjApLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAqICAgLy8gZG8gc29tZXRoaW5nXHJcbiAqICAgfSk7XHJcbiAqXHJcbiAqIHdhdGNoLnVuc3Vic2NyaWJlKCk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1NoYWtlJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1zaGFrZScsXHJcbiAgcGx1Z2luUmVmOiAnc2hha2UnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbGVlY3Jvc3NsZXkvY29yZG92YS1wbHVnaW4tc2hha2UnLFxyXG4gIHBsYXRmb3JtczogWydpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgU2hha2UgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogV2F0Y2ggZm9yIHNoYWtlIGdlc3R1cmVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBzZW5zaXRpdml0eSB7bnVtYmVyfSBPcHRpb25hbCBzZW5zaXRpdml0eSBwYXJhbWV0ZXIuIERlZmF1bHRzIHRvIDQwXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3BXYXRjaCcsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgc3RhcnRXYXRjaChzZW5zaXRpdml0eT86IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==