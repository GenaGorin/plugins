import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var OpenALPR = /** @class */ (function (_super) {
    __extends(OpenALPR, _super);
    function OpenALPR() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Country = {
            AU: 'au',
            BR: 'br',
            BR2: 'br2',
            EU: 'eu',
            IN: 'in',
            KR2: 'kr2',
            US: 'us',
            VN2: 'vn2',
        };
        return _this;
    }
    OpenALPR.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPR.pluginName = "OpenALPR";
    OpenALPR.plugin = "cordova-plugin-openalpr";
    OpenALPR.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPR.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPR.platforms = ["Android", "iOS"];
    OpenALPR.decorators = [
        { type: Injectable }
    ];
    return OpenALPR;
}(AwesomeCordovaNativePlugin));
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb3BlbmFscHIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUQ5RCw0QkFBMEI7OztRQUN0RCxhQUFPLEdBQUc7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQzs7O0lBVUYsdUJBQUksYUFBQyxTQUFjLEVBQUUsT0FBeUI7Ozs7Ozs7Z0JBckIvQyxVQUFVOzttQkFqRFg7RUFrRDhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuQUxQUk9wdGlvbnMge1xyXG4gIC8qKiBDb3VudHJ5IHVzZWQgZm9yIHNjYW5uaW5nIHRoZSBsaWNlbnNlIHBsYXRlICovXHJcbiAgY291bnRyeT86IHN0cmluZztcclxuXHJcbiAgLyoqIEFtb3VudCBvZiByZXN1bHRzIHJldHVybmVkICovXHJcbiAgYW1vdW50PzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5BTFBSUmVzdWx0IHtcclxuICAvKiogTGljZW5zZVBsYXRlICovXHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgLyoqIFByb2JhYmlsaXR5ICovXHJcbiAgY29uZmlkZW5jZTogbnVtYmVyO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgT3BlbkFMUFJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgQ29yZG92YSBwbHVnaW4gYWRkcyBzdXBwb3J0IGZvciB0aGUgT3BlbkFMUFIgKEF1dG9tYXRpYyBMaWNlbnNlIFBsYXRlIFJlY29nbml0aW9uKSBsaWJyYXJ5LCB3aGljaCBwcm92aWRlcyBzdXBwb3J0IGZvciByZXRyaWV2aW5nIHRoZSBsaWNlbnNlIHBsYXRlIGZyb20gYSBwaWN0dXJlLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBPcGVuQUxQUiwgT3BlbkFMUFJPcHRpb25zLCBPcGVuQUxQUlJlc3VsdCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9vcGVuYWxwci9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG9wZW5BTFBSOiBPcGVuQUxQUikgeyB9XHJcbiAqXHJcbiAqIGNvbnN0IHNjYW5PcHRpb25zOiBPcGVuQUxQUk9wdGlvbnMgPSB7XHJcbiAqICAgIGNvdW50cnk6IHRoaXMub3BlbkFMUFIuQ291bnRyeS5FVSxcclxuICogICAgYW1vdW50OiAzXHJcbiAqIH1cclxuICpcclxuICogLy8gVG8gZ2V0IGltYWdlRGF0YSwgeW91IGNhbiB1c2UgdGhlIEBhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jYW1lcmEgbW9kdWxlIGZvciBleGFtcGxlLiBJdCB3b3JrcyB3aXRoIERlc3RpbmF0aW9uVHlwZS5GSUxFX1VSSSBhbmQgREFUQV9VUkxcclxuICpcclxuICogdGhpcy5vcGVuQUxQUi5zY2FuKGltYWdlRGF0YSwgc2Nhbk9wdGlvbnMpXHJcbiAqICAgLnRoZW4oKHJlczogW09wZW5BTFBSUmVzdWx0XSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBFcnJvcikgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdPcGVuQUxQUicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tb3BlbmFscHInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5PcGVuQUxQUicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9pTWlja25sL2NvcmRvdmEtcGx1Z2luLW9wZW5hbHByJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgT3BlbkFMUFIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQ291bnRyeSA9IHtcclxuICAgIEFVOiAnYXUnLFxyXG4gICAgQlI6ICdicicsXHJcbiAgICBCUjI6ICdicjInLFxyXG4gICAgRVU6ICdldScsXHJcbiAgICBJTjogJ2luJyxcclxuICAgIEtSMjogJ2tyMicsXHJcbiAgICBVUzogJ3VzJyxcclxuICAgIFZOMjogJ3ZuMicsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhpcyBmdW5jdGlvbiBkb2VzIHNvbWV0aGluZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGltYWdlRGF0YSB7YW55fSBCYXNlNjQgZW5jb2Rpbmcgb2YgdGhlIGltYWdlIGRhdGEgb3IgdGhlIGltYWdlIGZpbGUgVVJJXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge09wZW5BTFBST3B0aW9uc30gT3B0aW9ucyB0byBwYXNzIHRvIHRoZSBPcGVuQUxQUiBzY2FubmVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHNvbWV0aGluZyBoYXBwZW5zXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNjYW4oaW1hZ2VEYXRhOiBhbnksIG9wdGlvbnM/OiBPcGVuQUxQUk9wdGlvbnMpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=