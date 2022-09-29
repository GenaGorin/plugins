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
var TextToSpeechAdvancedOriginal = /** @class */ (function (_super) {
    __extends(TextToSpeechAdvancedOriginal, _super);
    function TextToSpeechAdvancedOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechAdvancedOriginal.prototype.speak = function (textOrOptions) { return cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeechAdvancedOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    TextToSpeechAdvancedOriginal.prototype.getVoices = function () { return cordova(this, "getVoices", {}, arguments); };
    TextToSpeechAdvancedOriginal.pluginName = "Text To Speech Advanced";
    TextToSpeechAdvancedOriginal.plugin = "cordova-plugin-tts-advanced";
    TextToSpeechAdvancedOriginal.pluginRef = "TTS";
    TextToSpeechAdvancedOriginal.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
    TextToSpeechAdvancedOriginal.platforms = ["Android", "iOS"];
    return TextToSpeechAdvancedOriginal;
}(AwesomeCordovaNativePlugin));
var TextToSpeechAdvanced = new TextToSpeechAdvancedOriginal();
export { TextToSpeechAdvanced };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvdGV4dC10by1zcGVlY2gtYWR2YW5jZWQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7O0lBdURsRCx3Q0FBMEI7Ozs7SUFXbEUsb0NBQUssYUFBQyxhQUFrQztJQVV4QyxtQ0FBSTtJQVVKLHdDQUFTOzs7Ozs7K0JBdkZYO0VBd0QwQywwQkFBMEI7U0FBdkQsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUVFNPcHRpb25zIHtcclxuICAvKiogdGV4dCB0byBzcGVhayAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuICAvKiogY2FuY2VsLCBib29sZWFuOiB0cnVlL2ZhbHNlICovXHJcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xyXG4gIC8qKiB2b2ljZSBpZGVudGlmaWVyIChpT1MgLyBBbmRyb2lkKSBmcm9tIGdldFZvaWNlcyAqL1xyXG4gIGxvY2FsZT86IHN0cmluZztcclxuICAvKiogc3BlZWQgcmF0ZSwgMCB+IDEgKi9cclxuICByYXRlPzogbnVtYmVyO1xyXG4gIC8qKiBwaXRjaCwgMCB+IDEgKi9cclxuICBwaXRjaD86IG51bWJlcjtcclxuICAvKiogY2FuY2VsLCBib29sZWFuOiB0cnVlL2ZhbHNlICovXHJcbiAgY2FuY2VsPzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUVFNWb2ljZSB7XHJcbiAgLyoqIFZvaWNlIG5hbWUgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqIFZvaWNlIGxhbmd1YWdlICovXHJcbiAgbGFuZ3VhZ2U6IHN0cmluZztcclxuICAvKiogVm9pY2UgaWRlbnRpZmllciBzdHJpbmcgKi9cclxuICBpZGVudGlmaWVyOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBUZXh0IFRvIFNwZWVjaCBBZHZhbmNlZFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGV4dCB0byBTcGVlY2ggcGx1Z2luXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFRleHRUb1NwZWVjaEFkdmFuY2VkIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3RleHQtdG8tc3BlZWNoLWFkdmFuY2VkL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgdHRzOiBUZXh0VG9TcGVlY2hBZHZhbmNlZCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnR0cy5zcGVhaygnSGVsbG8gV29ybGQnKVxyXG4gKiAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdTdWNjZXNzJykpXHJcbiAqICAgLmNhdGNoKChyZWFzb246IGFueSkgPT4gY29uc29sZS5sb2cocmVhc29uKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBUVFNPcHRpb25zXHJcbiAqIFRUU1ZvaWNlXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnVGV4dCBUbyBTcGVlY2ggQWR2YW5jZWQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXR0cy1hZHZhbmNlZCcsXHJcbiAgcGx1Z2luUmVmOiAnVFRTJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3NwYXNtYS9jb3Jkb3ZhLXBsdWdpbi10dHMtYWR2YW5jZWQnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBUZXh0VG9TcGVlY2hBZHZhbmNlZCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBUaGlzIGZ1bmN0aW9uIHNwZWFrc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHRleHRPck9wdGlvbnMge3N0cmluZyB8IFRUU09wdGlvbnN9IFRleHQgdG8gc3BlYWsgb3IgVFRTT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2hlbiB0aGUgc3BlYWtpbmcgZmluaXNoZXNcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgc3BlYWsodGV4dE9yT3B0aW9uczogc3RyaW5nIHwgVFRTT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIGFueSBjdXJyZW50IFRUUyBwbGF5YmFja1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGFsbCB2b2ljZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFRUU1ZvaWNlW10+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRWb2ljZXMoKTogUHJvbWlzZTxUVFNWb2ljZVtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==