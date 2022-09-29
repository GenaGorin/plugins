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
var OpenALPROriginal = /** @class */ (function (_super) {
    __extends(OpenALPROriginal, _super);
    function OpenALPROriginal() {
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
    OpenALPROriginal.prototype.scan = function (imageData, options) { return cordova(this, "scan", {}, arguments); };
    OpenALPROriginal.pluginName = "OpenALPR";
    OpenALPROriginal.plugin = "cordova-plugin-openalpr";
    OpenALPROriginal.pluginRef = "cordova.plugins.OpenALPR";
    OpenALPROriginal.repo = "https://github.com/iMicknl/cordova-plugin-openalpr";
    OpenALPROriginal.platforms = ["Android", "iOS"];
    return OpenALPROriginal;
}(AwesomeCordovaNativePlugin));
var OpenALPR = new OpenALPROriginal();
export { OpenALPR };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvb3BlbmFscHIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBaUQ5RCw0QkFBMEI7OztRQUN0RCxhQUFPLEdBQUc7WUFDUixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEVBQUUsRUFBRSxJQUFJO1lBQ1IsR0FBRyxFQUFFLEtBQUs7WUFDVixFQUFFLEVBQUUsSUFBSTtZQUNSLEdBQUcsRUFBRSxLQUFLO1NBQ1gsQ0FBQzs7O0lBVUYsdUJBQUksYUFBQyxTQUFjLEVBQUUsT0FBeUI7Ozs7OzttQkF0RWhEO0VBa0Q4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgT3BlbkFMUFJPcHRpb25zIHtcclxuICAvKiogQ291bnRyeSB1c2VkIGZvciBzY2FubmluZyB0aGUgbGljZW5zZSBwbGF0ZSAqL1xyXG4gIGNvdW50cnk/OiBzdHJpbmc7XHJcblxyXG4gIC8qKiBBbW91bnQgb2YgcmVzdWx0cyByZXR1cm5lZCAqL1xyXG4gIGFtb3VudD86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPcGVuQUxQUlJlc3VsdCB7XHJcbiAgLyoqIExpY2Vuc2VQbGF0ZSAqL1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIC8qKiBQcm9iYWJpbGl0eSAqL1xyXG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE9wZW5BTFBSXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIENvcmRvdmEgcGx1Z2luIGFkZHMgc3VwcG9ydCBmb3IgdGhlIE9wZW5BTFBSIChBdXRvbWF0aWMgTGljZW5zZSBQbGF0ZSBSZWNvZ25pdGlvbikgbGlicmFyeSwgd2hpY2ggcHJvdmlkZXMgc3VwcG9ydCBmb3IgcmV0cmlldmluZyB0aGUgbGljZW5zZSBwbGF0ZSBmcm9tIGEgcGljdHVyZS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgT3BlbkFMUFIsIE9wZW5BTFBST3B0aW9ucywgT3BlbkFMUFJSZXN1bHQgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvb3BlbmFscHIvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBvcGVuQUxQUjogT3BlbkFMUFIpIHsgfVxyXG4gKlxyXG4gKiBjb25zdCBzY2FuT3B0aW9uczogT3BlbkFMUFJPcHRpb25zID0ge1xyXG4gKiAgICBjb3VudHJ5OiB0aGlzLm9wZW5BTFBSLkNvdW50cnkuRVUsXHJcbiAqICAgIGFtb3VudDogM1xyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIFRvIGdldCBpbWFnZURhdGEsIHlvdSBjYW4gdXNlIHRoZSBAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY2FtZXJhIG1vZHVsZSBmb3IgZXhhbXBsZS4gSXQgd29ya3Mgd2l0aCBEZXN0aW5hdGlvblR5cGUuRklMRV9VUkkgYW5kIERBVEFfVVJMXHJcbiAqXHJcbiAqIHRoaXMub3BlbkFMUFIuc2NhbihpbWFnZURhdGEsIHNjYW5PcHRpb25zKVxyXG4gKiAgIC50aGVuKChyZXM6IFtPcGVuQUxQUlJlc3VsdF0pID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogRXJyb3IpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnT3BlbkFMUFInLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW9wZW5hbHByJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuT3BlbkFMUFInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vaU1pY2tubC9jb3Jkb3ZhLXBsdWdpbi1vcGVuYWxwcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE9wZW5BTFBSIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIENvdW50cnkgPSB7XHJcbiAgICBBVTogJ2F1JyxcclxuICAgIEJSOiAnYnInLFxyXG4gICAgQlIyOiAnYnIyJyxcclxuICAgIEVVOiAnZXUnLFxyXG4gICAgSU46ICdpbicsXHJcbiAgICBLUjI6ICdrcjInLFxyXG4gICAgVVM6ICd1cycsXHJcbiAgICBWTjI6ICd2bjInLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gZG9lcyBzb21ldGhpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpbWFnZURhdGEge2FueX0gQmFzZTY0IGVuY29kaW5nIG9mIHRoZSBpbWFnZSBkYXRhIG9yIHRoZSBpbWFnZSBmaWxlIFVSSVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtPcGVuQUxQUk9wdGlvbnN9IE9wdGlvbnMgdG8gcGFzcyB0byB0aGUgT3BlbkFMUFIgc2Nhbm5lclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiBzb21ldGhpbmcgaGFwcGVuc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzY2FuKGltYWdlRGF0YTogYW55LCBvcHRpb25zPzogT3BlbkFMUFJPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19