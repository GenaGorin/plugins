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
var HeaderColorOriginal = /** @class */ (function (_super) {
    __extends(HeaderColorOriginal, _super);
    function HeaderColorOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColorOriginal.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColorOriginal.pluginName = "HeaderColor";
    HeaderColorOriginal.plugin = "cordova-plugin-headercolor";
    HeaderColorOriginal.pluginRef = "plugins.headerColor";
    HeaderColorOriginal.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColorOriginal.platforms = ["Android"];
    return HeaderColorOriginal;
}(AwesomeCordovaNativePlugin));
var HeaderColor = new HeaderColorOriginal();
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaGVhZGVyLWNvbG9yL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlCM0QsK0JBQTBCOzs7O0lBWXpELDBCQUFJLGFBQUMsS0FBYTs7Ozs7O3NCQXRDcEI7RUEwQmlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEhlYWRlciBDb2xvclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBwbHVnaW4gdG8gY2hhbmdlIGNvbG9yIG9mIGhlYWRlciBpbiBBbmRyb2lkIE11bHRpdGFzayBWaWV3XHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEhlYWRlckNvbG9yIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2hlYWRlci1jb2xvci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGhlYWRlckNvbG9yOiBIZWFkZXJDb2xvcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmhlYWRlckNvbG9yLnRpbnQoJyNiZWNiMjknKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnSGVhZGVyQ29sb3InLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWhlYWRlcmNvbG9yJyxcclxuICBwbHVnaW5SZWY6ICdwbHVnaW5zLmhlYWRlckNvbG9yJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3RvbWxvcHJvZC9jb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyQ29sb3IgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU2V0IGEgY29sb3IgdG8gdGhlIHRhc2sgaGVhZGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0gY29sb3Ige3N0cmluZ30gVGhlIGhleCB2YWx1ZSBvZiB0aGUgY29sb3JcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrU3R5bGU6ICdvYmplY3QnLFxyXG4gICAgc3VjY2Vzc05hbWU6ICdzdWNjZXNzJyxcclxuICAgIGVycm9yTmFtZTogJ2ZhaWx1cmUnLFxyXG4gIH0pXHJcbiAgdGludChjb2xvcjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19