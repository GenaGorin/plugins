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
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
var PollfishOriginal = /** @class */ (function (_super) {
    __extends(PollfishOriginal, _super);
    function PollfishOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PollfishOriginal.prototype.init = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode) { return cordova(this, "init", {}, arguments); };
    PollfishOriginal.prototype.initWithUserAttributes = function (releaseMode, rewardMode, apiKey, position, padding, requestUUID, offerwallMode, userAttributes) { return cordova(this, "initWithUserAttributes", {}, arguments); };
    PollfishOriginal.prototype.showPollfish = function () { return cordova(this, "showPollfish", {}, arguments); };
    PollfishOriginal.prototype.hidePollfish = function () { return cordova(this, "hidePollfish", {}, arguments); };
    PollfishOriginal.prototype.setEventCallback = function (eventName, callback) { return cordova(this, "setEventCallback", { "sync": true }, arguments); };
    Object.defineProperty(PollfishOriginal.prototype, "EventListener", {
        get: function () { return cordovaPropertyGet(this, "EventListener"); },
        set: function (value) { cordovaPropertySet(this, "EventListener", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PollfishOriginal.prototype, "Position", {
        get: function () { return cordovaPropertyGet(this, "Position"); },
        set: function (value) { cordovaPropertySet(this, "Position", value); },
        enumerable: false,
        configurable: true
    });
    PollfishOriginal.pluginName = "Pollfish";
    PollfishOriginal.plugin = "com.pollfish.cordova_plugin";
    PollfishOriginal.pluginRef = "pollfishplugin";
    PollfishOriginal.repo = "https://github.com/pollfish/cordova-plugin-pollfish";
    PollfishOriginal.platforms = ["Android", "iOS"];
    return PollfishOriginal;
}(AwesomeCordovaNativePlugin));
var Pollfish = new PollfishOriginal();
export { Pollfish };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvcG9sbGZpc2gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7O0lBa0UvRSw0QkFBMEI7Ozs7SUFrQ3RELHVCQUFJLGFBQ0YsV0FBb0IsRUFDcEIsVUFBbUIsRUFDbkIsTUFBYyxFQUNkLFFBQWdCLEVBQ2hCLE9BQWUsRUFDZixXQUFtQixFQUNuQixhQUFzQjtJQW1CeEIseUNBQXNCLGFBQ3BCLFdBQW9CLEVBQ3BCLFVBQW1CLEVBQ25CLE1BQWMsRUFDZCxRQUFnQixFQUNoQixPQUFlLEVBQ2YsV0FBbUIsRUFDbkIsYUFBc0IsRUFDdEIsY0FBa0I7SUFVcEIsK0JBQVk7SUFTWiwrQkFBWTtJQWNaLG1DQUFnQixhQUFDLFNBQWlCLEVBQUUsUUFBOEI7MEJBbkdsRSxtQ0FBYTs7Ozs7OzBCQVdiLDhCQUFROzs7Ozs7Ozs7OzttQkFoRlY7RUFtRThCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIENvcmRvdmFQcm9wZXJ0eSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQG5hbWUgUG9sbGZpc2hcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFBvbGxmaXNoIElvbmljIE5hdGl2ZSBwbHVnaW4gd3JhcHBlclxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBQb2xsZmlzaCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9wb2xsZmlzaC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHBvbGxmaXNoOiBQb2xsZmlzaCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLnBvbGxmaXNoLmluaXQoZmFsc2UsIGZhbHNlLCAnWU9VUl9BUElfS0VZJywgMSwgOCwgJ1JFUVVFU1RfVVVJRCcsIGZhbHNlKTtcclxuICpcclxuICogdGhpcy5wb2xsZmlzaC5pbml0V2l0aFVzZXJBdHRyaWJ1dGVzKGZhbHNlLCBmYWxzZSwgJ1lPVVJfQVBJX0tFWScsIDEsIDgsICdSRVFVRVNUX1VVSUQnLCBmYWxzZSwge1xyXG4gKiAgJ2dlbmRlcic6ICcxJyxcclxuICogIC4uLlxyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5wb2xsZmlzaC5zaG93UG9sbGZpc2goKTtcclxuICpcclxuICogdGhpcy5wb2xsZmlzaC5oaWRlUG9sbGZpc2goKTtcclxuICpcclxuICogLy8gRXZlbnQgTGlzdGVuZXJzXHJcbiAqXHJcbiAqIHRoaXMucG9sbGZpc2guc2V0RXZlbnRDYWxsYmFjayhwb2xsZmlzaC5FdmVudExpc3RlbmVyLk9uUG9sbGZpc2hTdXJ2ZXlSZWNlaXZlZCwgKHN1cnZleUluZm8pID0+IHtcclxuICogIGNvbnNvbGUubG9nKFwiU3VydmV5IFJlY2VpdmVkOiBcIiArIEpTT04uc3RyaW5naWZ5KHN1cnZleUluZm8pKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMucG9sbGZpc2guc2V0RXZlbnRDYWxsYmFjayhwb2xsZmlzaC5FdmVudExpc3RlbmVyLk9uUG9sbGZpc2hTdXJ2ZXlDb21wbGV0ZWQsIChyZXN1bHQpID0+IHtcclxuICogIGNvbnNvbGUubG9nKFwiU3VydmV5IENvbXBsZXRlZDogXCIgKyBKU09OLnN0cmluZ2lmeShzdXJ2ZXlJbmZvKSk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiB0aGlzLnBvbGxmaXNoLnNldEV2ZW50Q2FsbGJhY2socG9sbGZpc2guRXZlbnRMaXN0ZW5lci5PblBvbGxmaXNoVXNlck5vdEVsaWdpYmxlLCAoXykgPT4ge1xyXG4gKiAgY29uc29sZS5sb2coXCJQb2xsZmlzaCBVc2VyIE5vdCBFbGlnaWJsZVwiKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMucG9sbGZpc2guc2V0RXZlbnRDYWxsYmFjayhwb2xsZmlzaC5FdmVudExpc3RlbmVyLk9uUG9sbGZpc2hTdXJ2ZXlOb3RBdmFpbGFibGUsIChfKSA9PiB7XHJcbiAqICBjb25zb2xlLmxvZyhcIlBvbGxmaXNoIFN1cnZleSBub3QgYXZhaWxhYmxlXCIpO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaE9wZW5lZCwgKF8pID0+IHtcclxuICogIGNvbnNvbGUubG9nKFwiUG9sbGZpc2ggU3VydmV5IHBhbmVsIGlzIG9wZW5cIik7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiB0aGlzLnBvbGxmaXNoLnNldEV2ZW50Q2FsbGJhY2socG9sbGZpc2guRXZlbnRMaXN0ZW5lci5PblBvbGxmaXNoQ2xvc2VkLCAoXykgPT4ge1xyXG4gKiAgY29uc29sZS5sb2coXCJQb2xsZmlzaCBTdXJ2ZXkgcGFuZWwgaXMgY2xvc2VkXCIpO1xyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5wb2xsZmlzaC5zZXRFdmVudENhbGxiYWNrKHBvbGxmaXNoLkV2ZW50TGlzdGVuZXIuT25Qb2xsZmlzaFVzZXJSZWplY3RlZFN1cnZleSwgKF8pID0+IHtcclxuICogIGNvbnNvbGUubG9nKFwiUG9sbGZpc2ggVXNlciBSZWplY3RlZCBTdXJ2ZXlcIik7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdQb2xsZmlzaCcsXHJcbiAgcGx1Z2luOiAnY29tLnBvbGxmaXNoLmNvcmRvdmFfcGx1Z2luJyxcclxuICBwbHVnaW5SZWY6ICdwb2xsZmlzaHBsdWdpbicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9wb2xsZmlzaC9jb3Jkb3ZhLXBsdWdpbi1wb2xsZmlzaCcsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFBvbGxmaXNoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEV2ZW50TGlzdGVuZXI6IHtcclxuICAgIE9uUG9sbGZpc2hDbG9zZWQ6IHN0cmluZztcclxuICAgIE9uUG9sbGZpc2hPcGVuZWQ6IHN0cmluZztcclxuICAgIE9uUG9sbGZpc2hTdXJ2ZXlSZWNlaXZlZDogc3RyaW5nO1xyXG4gICAgT25Qb2xsZmlzaFN1cnZleUNvbXBsZXRlZDogc3RyaW5nO1xyXG4gICAgT25Qb2xsZmlzaFVzZXJOb3RFbGlnaWJsZTogc3RyaW5nO1xyXG4gICAgT25Qb2xsZmlzaFVzZXJSZWplY3RlZFN1cnZleTogc3RyaW5nO1xyXG4gICAgT25Qb2xsZmlzaFN1cnZleU5vdEF2YWlsYWJsZTogc3RyaW5nO1xyXG4gIH07XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFBvc2l0aW9uOiB7XHJcbiAgICBUT1BfTEVGVDogbnVtYmVyO1xyXG4gICAgVE9QX1JJR0hUOiBudW1iZXI7XHJcbiAgICBNSURETEVfTEVGVDogbnVtYmVyO1xyXG4gICAgTUlERExFX1JJR0hUOiBudW1iZXI7XHJcbiAgICBCT1RUT01fTEVGVDogbnVtYmVyO1xyXG4gICAgQk9UVE9NX1JJR0hUOiBudW1iZXI7XHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gaW5pdCBQb2xsZmlzaFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlbGVhc2VNb2RlIHtib29sZWFufVxyXG4gICAqIEBwYXJhbSByZXdhcmRNb2RlIHtib29sZWFufVxyXG4gICAqIEBwYXJhbSBhcGlLZXkge3N0cmluZ31cclxuICAgKiBAcGFyYW0gcG9zaXRpb24ge251bWJlcn1cclxuICAgKiBAcGFyYW0gcGFkZGluZyB7bnVtYmVyfVxyXG4gICAqIEBwYXJhbSByZXF1ZXN0VVVJRCB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSBvZmZlcndhbGxNb2RlIHtib29sZWFufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbml0KFxyXG4gICAgcmVsZWFzZU1vZGU6IGJvb2xlYW4sXHJcbiAgICByZXdhcmRNb2RlOiBib29sZWFuLFxyXG4gICAgYXBpS2V5OiBzdHJpbmcsXHJcbiAgICBwb3NpdGlvbjogbnVtYmVyLFxyXG4gICAgcGFkZGluZzogbnVtYmVyLFxyXG4gICAgcmVxdWVzdFVVSUQ6IHN0cmluZyxcclxuICAgIG9mZmVyd2FsbE1vZGU6IGJvb2xlYW5cclxuICApOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gaW5pdCBQb2xsZmlzaCB3aXRoIHVzZXIgYXR0cmlidXRlc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHJlbGVhc2VNb2RlIHtib29sZWFufVxyXG4gICAqIEBwYXJhbSByZXdhcmRNb2RlIHtib29sZWFufVxyXG4gICAqIEBwYXJhbSBhcGlLZXkge3N0cmluZ31cclxuICAgKiBAcGFyYW0gcG9zaXRpb24ge251bWJlcn1cclxuICAgKiBAcGFyYW0gcGFkZGluZyB7bnVtYmVyfVxyXG4gICAqIEBwYXJhbSByZXF1ZXN0VVVJRCB7c3RyaW5nfVxyXG4gICAqIEBwYXJhbSBvZmZlcndhbGxNb2RlIHtib29sZWFufVxyXG4gICAqIEBwYXJhbSB1c2VyQXR0cmlidXRlcyB7SnNvbn1cclxuICAgKi9cclxuXHJcbiAgQENvcmRvdmEoKVxyXG4gIGluaXRXaXRoVXNlckF0dHJpYnV0ZXMoXHJcbiAgICByZWxlYXNlTW9kZTogYm9vbGVhbixcclxuICAgIHJld2FyZE1vZGU6IGJvb2xlYW4sXHJcbiAgICBhcGlLZXk6IHN0cmluZyxcclxuICAgIHBvc2l0aW9uOiBudW1iZXIsXHJcbiAgICBwYWRkaW5nOiBudW1iZXIsXHJcbiAgICByZXF1ZXN0VVVJRDogc3RyaW5nLFxyXG4gICAgb2ZmZXJ3YWxsTW9kZTogYm9vbGVhbixcclxuICAgIHVzZXJBdHRyaWJ1dGVzOiB7fVxyXG4gICkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gbWFudWFsbHkgc2hvdyBQb2xsZmlzaFxyXG4gICAqL1xyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd1BvbGxmaXNoKCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gbWFudWFsbHkgaGlkZSBQb2xsZmlzaFxyXG4gICAqL1xyXG5cclxuICBAQ29yZG92YSgpXHJcbiAgaGlkZVBvbGxmaXNoKCkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gdG8gc2V0IGV2ZW50IGNhbGxiYWNrc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGV2ZW50TmFtZVxyXG4gICAqIEBwYXJhbSBjYWxsYmFja1xyXG4gICAqL1xyXG5cclxuICBAQ29yZG92YSh7XHJcbiAgICBzeW5jOiB0cnVlLFxyXG4gIH0pXHJcbiAgc2V0RXZlbnRDYWxsYmFjayhldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChpbmZvPzogYW55KSA9PiB2b2lkKSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==