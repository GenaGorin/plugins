import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var Dialogs = /** @class */ (function (_super) {
    __extends(Dialogs, _super);
    function Dialogs() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dialogs.prototype.alert = function (message, title, buttonName) { return cordova(this, "alert", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    Dialogs.prototype.confirm = function (message, title, buttonLabels) { return cordova(this, "confirm", { "successIndex": 1, "errorIndex": 4 }, arguments); };
    Dialogs.prototype.prompt = function (message, title, buttonLabels, defaultText) { return cordova(this, "prompt", { "successIndex": 1, "errorIndex": 5 }, arguments); };
    Dialogs.prototype.beep = function (times) { return cordova(this, "beep", { "sync": true }, arguments); };
    Dialogs.pluginName = "Dialogs";
    Dialogs.plugin = "cordova-plugin-dialogs";
    Dialogs.pluginRef = "navigator.notification";
    Dialogs.repo = "https://github.com/apache/cordova-plugin-dialogs";
    Dialogs.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows"];
    Dialogs.decorators = [
        { type: Injectable }
    ];
    return Dialogs;
}(AwesomeCordovaNativePlugin));
export { Dialogs };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZGlhbG9ncy9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQzs7SUE4Qy9ELDJCQUEwQjs7OztJQWFyRCx1QkFBSyxhQUFDLE9BQWUsRUFBRSxLQUFjLEVBQUUsVUFBbUI7SUFnQjFELHlCQUFPLGFBQUMsT0FBZSxFQUFFLEtBQWMsRUFBRSxZQUF1QjtJQWlCaEUsd0JBQU0sYUFDSixPQUFnQixFQUNoQixLQUFjLEVBQ2QsWUFBdUIsRUFDdkIsV0FBb0I7SUFhdEIsc0JBQUksYUFBQyxLQUFhOzs7Ozs7O2dCQWhFbkIsVUFBVTs7a0JBOUNYO0VBK0M2QiwwQkFBMEI7U0FBMUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlhbG9nc1Byb21wdENhbGxiYWNrIHtcclxuICAvKipcclxuICAgKiBUaGUgaW5kZXggb2YgdGhlIHByZXNzZWQgYnV0dG9uLiAoTnVtYmVyKSBOb3RlIHRoYXQgdGhlIGluZGV4IHVzZXMgb25lLWJhc2VkIGluZGV4aW5nLCBzbyB0aGUgdmFsdWUgaXMgMSwgMiwgMywgZXRjLlxyXG4gICAqL1xyXG4gIGJ1dHRvbkluZGV4OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB0ZXh0IGVudGVyZWQgaW4gdGhlIHByb21wdCBkaWFsb2cgYm94LiAoU3RyaW5nKVxyXG4gICAqL1xyXG4gIGlucHV0MTogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgRGlhbG9nc1xyXG4gKiBAcHJlbWllciBkaWFsb2dzXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBnaXZlcyB5b3UgYWJpbGl0eSB0byBhY2Nlc3MgYW5kIGN1c3RvbWl6ZSB0aGUgZGV2aWNlIG5hdGl2ZSBkaWFsb2dzLlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWRpYWxvZ3NgLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRGlhbG9ncyBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1kaWFsb2dzKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRGlhbG9ncyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kaWFsb2dzL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZGlhbG9nczogRGlhbG9ncykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiB0aGlzLmRpYWxvZ3MuYWxlcnQoJ0hlbGxvIHdvcmxkJylcclxuICogICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygnRGlhbG9nIGRpc21pc3NlZCcpKVxyXG4gKiAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBkaXNwbGF5aW5nIGRpYWxvZycsIGUpKTtcclxuICpcclxuICpcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIERpYWxvZ3NQcm9tcHRDYWxsYmFja1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0RpYWxvZ3MnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWRpYWxvZ3MnLFxyXG4gIHBsdWdpblJlZjogJ25hdmlnYXRvci5ub3RpZmljYXRpb24nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWRpYWxvZ3MnLFxyXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRGlhbG9ncyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaG93cyBhIGN1c3RvbSBhbGVydCBvciBkaWFsb2cgYm94LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgRGlhbG9nIG1lc3NhZ2UuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0aXRsZV0gRGlhbG9nIHRpdGxlLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIEFsZXJ0KVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYnV0dG9uTmFtZV0gQnV0dG9uIG5hbWUuIChPcHRpb25hbCwgZGVmYXVsdHMgdG8gT0spXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIGJsYW5rIHByb21pc2Ugb25jZSB0aGUgdXNlciBoYXMgZGlzbWlzc2VkIHRoZSBhbGVydC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiA0LFxyXG4gIH0pXHJcbiAgYWxlcnQobWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uTmFtZT86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5cyBhIGN1c3RvbWl6YWJsZSBjb25maXJtYXRpb24gZGlhbG9nIGJveC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBtZXNzYWdlIERpYWxvZyBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdIERpYWxvZyB0aXRsZS4gKE9wdGlvbmFsLCBkZWZhdWx0cyB0byBDb25maXJtKVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nW119IFtidXR0b25MYWJlbHNdIEFycmF5IG9mIHN0cmluZ3Mgc3BlY2lmeWluZyBidXR0b24gbGFiZWxzLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIFtPSyxDYW5jZWxdKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGJ1dHRvbiBpbmRleCB0aGF0IHdhcyBjbGlja2VkLCBvciAwIGlmIHRoZSB1c2VyIGhhcyBkaXNtaXNzZWQgdGhlIGRpYWxvZyBieSBjbGlja2luZyBvdXRzaWRlIHRoZSBkaWFsb2cgYm94LiBOb3RlIHRoYXQgdGhlIGluZGV4IHVzZSBvbmUtYmFzZWQgaW5kZXhpbmcuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogNCxcclxuICB9KVxyXG4gIGNvbmZpcm0obWVzc2FnZTogc3RyaW5nLCB0aXRsZT86IHN0cmluZywgYnV0dG9uTGFiZWxzPzogc3RyaW5nW10pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgYSBuYXRpdmUgZGlhbG9nIGJveCB0aGF0IGlzIG1vcmUgY3VzdG9taXphYmxlIHRoYW4gdGhlIGJyb3dzZXIncyBwcm9tcHQgZnVuY3Rpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW21lc3NhZ2VdIERpYWxvZyBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbdGl0bGVdIERpYWxvZyB0aXRsZS4gKE9wdGlvbmFsLCBkZWZhdWx0cyB0byBQcm9tcHQpXHJcbiAgICogQHBhcmFtIHtzdHJpbmdbXX0gW2J1dHRvbkxhYmVsc10gIEFycmF5IG9mIHN0cmluZ3Mgc3BlY2lmeWluZyBidXR0b24gbGFiZWxzLiAoT3B0aW9uYWwsIGRlZmF1bHRzIHRvIFtcIk9LXCIsXCJDYW5jZWxcIl0pXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtkZWZhdWx0VGV4dF0gRGVmYXVsdCB0ZXh0IGJveCBpbnB1dCB2YWx1ZS4gIChPcHRpb25hbCwgRGVmYXVsdDogZW1wdHkgc3RyaW5nKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpYWxvZ3NQcm9tcHRDYWxsYmFjaz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYW4gb2JqZWN0IHdpdGggdGhlIGJ1dHRvbiBpbmRleCBjbGlja2VkIGFuZCB0aGUgdGV4dCBlbnRlcmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogNSxcclxuICB9KVxyXG4gIHByb21wdChcclxuICAgIG1lc3NhZ2U/OiBzdHJpbmcsXHJcbiAgICB0aXRsZT86IHN0cmluZyxcclxuICAgIGJ1dHRvbkxhYmVscz86IHN0cmluZ1tdLFxyXG4gICAgZGVmYXVsdFRleHQ/OiBzdHJpbmdcclxuICApOiBQcm9taXNlPERpYWxvZ3NQcm9tcHRDYWxsYmFjaz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGRldmljZSBwbGF5cyBhIGJlZXAgc291bmQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcnN9IHRpbWVzIFRoZSBudW1iZXIgb2YgdGltZXMgdG8gcmVwZWF0IHRoZSBiZWVwLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBiZWVwKHRpbWVzOiBudW1iZXIpOiB2b2lkIHt9XHJcbn1cclxuIl19