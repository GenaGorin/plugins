import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var OpenNativeSettings = /** @class */ (function (_super) {
    __extends(OpenNativeSettings, _super);
    function OpenNativeSettings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OpenNativeSettings.prototype.open = function (setting) { return cordova(this, "open", {}, arguments); };
    OpenNativeSettings.pluginName = "OpenNativeSettings";
    OpenNativeSettings.plugin = "cordova-open-native-settings";
    OpenNativeSettings.pluginRef = "cordova.plugins.settings";
    OpenNativeSettings.repo = "https://github.com/guyromb/Cordova-open-native-settings";
    OpenNativeSettings.platforms = ["Android", "iOS"];
    OpenNativeSettings.decorators = [
        { type: Injectable }
    ];
    return OpenNativeSettings;
}(AwesomeCordovaNativePlugin));
export { OpenNativeSettings };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb3Blbi1uYXRpdmUtc2V0dGluZ3Mvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBbUdwRCxzQ0FBMEI7Ozs7SUFRaEUsaUNBQUksYUFBQyxPQUFtQzs7Ozs7OztnQkFUekMsVUFBVTs7NkJBbkdYO0VBb0d3QywwQkFBMEI7U0FBckQsa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE9wZW4gTmF0aXZlIFNldHRpbmdzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBQbHVnaW4gdG8gb3BlbiBuYXRpdmUgc2NyZWVucyBvZiBpT1MvYW5kcm9pZCBzZXR0aW5nc1xyXG4gKiBAdXNhZ2VcclxuICogWW91IGNhbiBvcGVuIGFueSBvZiB0aGVzZSBzZXR0aW5nczpcclxuICogYGBgXHJcbiAqICBcImFib3V0XCIsIC8vIGlvc1xyXG4gKiAgXCJhY2Nlc3NpYmlsaXR5XCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiAgXCJhY2NvdW50XCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiAgXCJhaXJwbGFuZV9tb2RlXCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiAgXCJhcG5cIiwgLy8gYW5kcm9pZFxyXG4gKiAgXCJhcHBsaWNhdGlvbl9kZXRhaWxzXCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiAgXCJhcHBsaWNhdGlvbl9kZXZlbG9wbWVudFwiLCAvLyBhbmRyb2lkXHJcbiAqICBcImFwcGxpY2F0aW9uXCIsIC8vIGFuZHJvaWRcclxuICogIFwiYXV0b2xvY2tcIiwgLy8gaW9zXHJcbiAqICBcImJhdHRlcnlfb3B0aW1pemF0aW9uXCIsIC8vIGFuZHJvaWRcclxuICogIFwiYmx1ZXRvb3RoXCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiAgXCJjYXN0bGVcIiwgLy8gaW9zXHJcbiAqICBcImNhcHRpb25pbmdcIiwgLy8gYW5kcm9pZFxyXG4gKiAgXCJjYXN0XCIsIC8vIGFuZHJvaWRcclxuICogIFwiY2VsbHVsYXJfdXNhZ2VcIiwgLy8gaW9zXHJcbiAqICBcImNvbmZpZ3VyYXRpb25fbGlzdFwiLCAvLyBpb3NcclxuICogIFwiZGF0YV9yb2FtaW5nXCIsIC8vIGFuZHJvaWRcclxuICogIFwiZGF0ZVwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogIFwiZGlzcGxheVwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogIFwiZHJlYW1cIiwgLy8gYW5kcm9pZFxyXG4gKiAgXCJmYWNldGltZVwiLCAvLyBpb3NcclxuICogIFwiaG9tZVwiLCAvLyBhbmRyb2lkXHJcbiAqICBcImtleWJvYXJkXCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiAgXCJrZXlib2FyZF9zdWJ0eXBlXCIsIC8vIGFuZHJvaWRcclxuICogIFwibG9jYWxlXCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiBcImxvY2F0aW9uXCIsIC8vIGlvcywgYW5kcm9pZFxyXG4gKiBcImxvY2F0aW9uc1wiLCAvLyBpb3NcclxuICogXCJtYW5hZ2VfYWxsX2FwcGxpY2F0aW9uc1wiLCAvLyBhbmRyb2lkXHJcbiAqIFwibWFuYWdlX2FwcGxpY2F0aW9uc1wiLCAvLyBhbmRyb2lkXHJcbiAqIFwibWVtb3J5X2NhcmRcIiwgLy8gYW5kcm9pZFxyXG4gKiBcIm11c2ljXCIsIC8vIGlvc1xyXG4gKiBcIm11c2ljX2VxdWFsaXplclwiLCAvLyBpb3NcclxuICogXCJtdXNpY192b2x1bWVcIiwgLy8gaW9zXHJcbiAqIFwibmV0d29ya1wiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogXCJuaWtlX2lwb2RcIiwgLy8gaW9zXHJcbiAqIFwibmZjc2hhcmluZ1wiLCAvLyBhbmRyb2lkXHJcbiAqIFwibmZjX3BheW1lbnRcIiwgLy8gYW5kcm9pZFxyXG4gKiBcIm5mY19zZXR0aW5nc1wiLCAvLyBhbmRyb2lkXHJcbiAqIFwibm90ZXNcIiwgLy8gaW9zXHJcbiAqIFwibm90aWZpY2F0aW9uX2lkXCIsIC8vIGlvc1xyXG4gKiBcInBhc3Nib29rXCIsIC8vIGlvc1xyXG4gKiBcInBob25lXCIsIC8vIGlvc1xyXG4gKiBcInBob3Rvc1wiLCAvLyBpb3NcclxuICogXCJwcmludFwiLCAvLyBhbmRyb2lkXHJcbiAqIFwicHJpdmFjeVwiLCAvLyBhbmRyb2lkXHJcbiAqIFwicXVpY2tfbGF1bmNoXCIsIC8vIGFuZHJvaWRcclxuICogXCJyZXNldFwiLCAvLyBpb3NcclxuICogXCJyaW5ndG9uZVwiLCAvLyBpb3NcclxuICogXCJicm93c2VyXCIsIC8vIGlvc1xyXG4gKiBcInNlYXJjaFwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogXCJzZWN1cml0eVwiLCAvLyBhbmRyb2lkXHJcbiAqIFwic2V0dGluZ3NcIiwgLy8gaW9zLCBhbmRyb2lkXHJcbiAqIFwic2hvd19yZWd1bGF0b3J5X2luZm9cIixcclxuICogXCJzb3VuZFwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogXCJzb2Z0d2FyZV91cGRhdGVcIiwgLy8gaW9zXHJcbiAqIFwic3RvcmFnZVwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogXCJzdG9yZVwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogXCJzeW5jXCIsIC8vIGFuZHJvaWRcclxuICogXCJ0ZXRoZXJpbmdcIiwgLy8gaW9zXHJcbiAqIFwidHdpdHRlclwiLCAvLyBpb3NcclxuICogXCJ0b3VjaFwiLCAvLyBpb3NcclxuICogXCJ1c2FnZVwiLCAvLyBpb3MsIGFuZHJvaWRcclxuICogXCJ1c2VyX2RpY3Rpb25hcnlcIiwgLy8gYW5kcm9pZFxyXG4gKiBcInZpZGVvXCIsIC8vIGlvc1xyXG4gKiBcInZvaWNlX2lucHV0XCIsIC8vIGFuZHJvaWRcclxuICogXCJ2cG5cIiwgLy8gaW9zXHJcbiAqIFwid2FsbHBhcGVyXCIsIC8vIGlvc1xyXG4gKiBcIndpZmlfaXBcIiwgLy8gYW5kcm9pZFxyXG4gKiBcIndpZmlcIiwgLy8gaW9zLCBhbmRyb2lkXHJcbiAqIFwid2lyZWxlc3NcIiAvLyBhbmRyb2lkXHJcbiAqICBgYGBcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBPcGVuTmF0aXZlU2V0dGluZ3MgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvb3Blbi1uYXRpdmUtc2V0dGluZ3Mvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuTmF0aXZlU2V0dGluZ3M6IE9wZW5OYXRpdmVTZXR0aW5ncykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdPcGVuTmF0aXZlU2V0dGluZ3MnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtb3Blbi1uYXRpdmUtc2V0dGluZ3MnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5zZXR0aW5ncycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9ndXlyb21iL0NvcmRvdmEtb3Blbi1uYXRpdmUtc2V0dGluZ3MnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBPcGVuTmF0aXZlU2V0dGluZ3MgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbnMgYSBzZXR0aW5nIGRpYWxvZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHNldHRpbmcge3N0cmluZ3xhcnJheX0gc2V0dGluZyBuYW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlbihzZXR0aW5nOiBzdHJpbmcgfCBbc3RyaW5nLCBib29sZWFuXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==