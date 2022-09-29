import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var AllInOneSDK = /** @class */ (function (_super) {
    __extends(AllInOneSDK, _super);
    function AllInOneSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllInOneSDK.prototype.startTransaction = function (options) { return cordova(this, "startTransaction", {}, arguments); };
    AllInOneSDK.pluginName = "AllInOneSDK";
    AllInOneSDK.plugin = "cordova-paytm-allinonesdk";
    AllInOneSDK.pluginRef = "AllInOneSDK";
    AllInOneSDK.repo = "https://github.com/paytm/paytm-allinonesdk-ionic-cordova.git";
    AllInOneSDK.platforms = ["Android", "iOS"];
    return AllInOneSDK;
}(AwesomeCordovaNativePlugin));
export { AllInOneSDK };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYWxsLWluLW9uZS1zZGsvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLHVDQU9OLE1BQU0sK0JBQStCLENBQUM7O0lBd0NOLCtCQUEwQjs7OztJQVV6RCxzQ0FBZ0IsYUFBQyxPQUFzRDs7Ozs7O3NCQTFEekU7RUFnRGlDLDBCQUEwQjtTQUE5QyxXQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIFBsdWdpbixcclxuICBDb3Jkb3ZhLFxyXG4gIENvcmRvdmFQcm9wZXJ0eSxcclxuICBDb3Jkb3ZhSW5zdGFuY2UsXHJcbiAgSW5zdGFuY2VQcm9wZXJ0eSxcclxuICBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbixcclxufSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBBbGxJbk9uZVNES1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogUGF5dG0gQWxsLWluLU9uZSBTREsgcGx1Z2luIGZvciBDb3Jkb3ZhL0lvbmljIEFwcGxpY2F0aW9uc1xyXG4gKiBQYXl0bSBBbGwtaW4tT25lIFNESyBwcm92aWRlcyBhIHN3aWZ0LCBzZWN1cmUgYW5kIHNlYW1sZXNzIHBheW1lbnQgZXhwZXJpZW5jZSB0byB5b3VyIHVzZXJzIGJ5IGludm9raW5nIHRoZSBQYXl0bSBhcHAgKGlmIGluc3RhbGxlZCBvbiB5b3VyIHVzZXLigJlzIHNtYXJ0cGhvbmUpIHRvIGNvbXBsZXRlIHBheW1lbnQgZm9yIHlvdXIgb3JkZXIuXHJcbiAqIFBheXRtIEFsbC1pbi1PbmUgU0RLIGVuYWJsZXMgcGF5bWVudCBhY2NlcHRhbmNlIHZpYSBQYXl0bSB3YWxsZXQsIFBheXRtIFBheW1lbnRzIEJhbmssIHNhdmVkIERlYml0L0NyZWRpdCBjYXJkcywgTmV0IEJhbmtpbmcsIEJISU0gVVBJIGFuZCBFTUkgYXMgYXZhaWxhYmxlIGluIHlvdXIgY3VzdG9tZXLigJlzIFBheXRtIGFjY291bnQuIElmIFBheXRtIGFwcCBpcyBub3QgaW5zdGFsbGVkIG9uIGEgY3VzdG9tZXIncyBkZXZpY2UsIHRoZSB0cmFuc2FjdGlvbiB3aWxsIGJlIHByb2Nlc3NlZCB2aWEgd2ViIHZpZXcgd2l0aGluIHRoZSBBbGwtaW4tT25lIFNESy5cclxuICogRm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgUGF5dG0gQWxsLWluLU9uZSBTREssIHBsZWFzZSB2aXNpdCBodHRwczovL2RldmVsb3Blci5wYXl0bS5jb20vZG9jcy9hbGwtaW4tb25lLXNkay9oeWJyaWQtYXBwcy9jb3Jkb3ZhL1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBBbGxJbk9uZVNESyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9hbGwtaW4tb25lLXNkay9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGFsbEluT25lU0RLOiBBbGxJbk9uZVNESykgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBGb3IgYmVsb3cgcGFyYW1ldGVycyBzZWUgW2RvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVyLnBheXRtLmNvbS9kb2NzL2FsbC1pbi1vbmUtc2RrL2h5YnJpZC1hcHBzL2NvcmRvdmEvKVxyXG4gKiBsZXQgcGF5bWVudEludGVudCA9IHsgbWlkIDogbWVyY2hhbnRJRCwgb3JkZXJJZDogb3JkZXJJZCwgdHhuVG9rZW46IHRyYW5zYWN0aW9uVG9rZW4sIGFtb3VudDogYW1vdW50LCBpc1N0YWdpbmc6IGlzU3RhZ2luZywgY2FsbGJhY2tVcmw6Y2FsbEJhY2tVUkwsICByZXN0cmljdEFwcEludm9rZTpyZXN0cmljdEFwcEludm9rZSAgfVxyXG4gKlxyXG4gKiB0aGlzLmFsbEluT25lU0RLLnN0YXJ0VHJhbnNhY3Rpb24ocGF5bWVudEludGVudClcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGb3IgaU9TOlxyXG4gKiBBZnRlciBhZGRpbmcgdGhlIHBsdWdpbiwgb3BlbiB0aGUgaU9TIHByb2plY3QsIHlvdSBjYW4gZmluZCB0aGUgc2FtZSBhdCA8cHJvamVjdE5hbWU+L3BsYXRmb3Jtcy9pb3MuXHJcbiAqIEluIGNhc2UgbWVyY2hhbnQgZG9u4oCZdCBoYXZlIGNhbGxiYWNrIFVSTCwgQWRkIGFuIGVudHJ5IGludG8gSW5mby5wbGlzdCBMU0FwcGxpY2F0aW9uUXVlcmllc1NjaGVtZXMoQXJyYXkpIEl0ZW0gMCAoU3RyaW5nKS0+IHBheXRtXHJcbiAqIEFkZCBhIFVSTCBTY2hlbWUg4oCccGF5dG3igJ0r4oCdTUlE4oCdXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnQWxsSW5PbmVTREsnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGF5dG0tYWxsaW5vbmVzZGsnLFxyXG4gIHBsdWdpblJlZjogJ0FsbEluT25lU0RLJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL3BheXRtL3BheXRtLWFsbGlub25lc2RrLWlvbmljLWNvcmRvdmEuZ2l0JyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEFsbEluT25lU0RLIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFRoaXMgZnVuY3Rpb24gY2hlY2tzIGlmIFBheXRtIEFwcGxpY2F0aW9uIGlzIGF2YWlsYWJsZSBvbiB0aGUgZGV2aWNlLlxyXG4gICAqIElmIFBheXRtIGV4aXN0cyB0aGVuIGl0IGludm9rZXMgUGF5dG0gQXBwbGljYXRpb24gd2l0aCB0aGUgcGFyYW1ldGVycyBzZW50IGFuZCBjcmVhdGVzIGFuIG9yZGVyLlxyXG4gICAqIElmIHRoZSBQYXl0bSBBcHBsaWNhdGlvbiBpcyBub3QgYXZhaWxhYmxlIHRoZSB0cmFuc2FjdGlvbiBpcyBjb250aW51ZWQgb24gYSB3ZWJWaWV3IHdpdGhpbiBBbGwtaW4tT25lIFNESy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtQYXltZW50SW50ZW50TW9kZWx9IFRoZXNlIHBhcmFtZXRlcnMgYXJlIHJlcXVpcmVkIGFuZCB3aWxsIGJlIHVzZWQgdG8gY3JlYXRlIGFuIG9yZGVyLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFBheXRtUmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdoZW4gYSB0cmFuc2FjdGlvbiBjb21wbGV0ZXMoYm90aCBmYWlsZWQgYW5kIHN1Y2Nlc3NmdWwpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGFydFRyYW5zYWN0aW9uKG9wdGlvbnM6IFBheW1lbnRJbnRlbnRNb2RlbCB8IFBheW1lbnRBc3Npc3RJbnRlbnRNb2RlbCk6IFByb21pc2U8UGF5dG1SZXNwb25zZT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIFRoZSByZXNwb25zZSB0aGF0IHdpbGwgYmUgcmVjaWV2ZWQgd2hlbiBhbnkgdHJhbnNhY3Rpb24gaXMgY29tcGxldGVkXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBheXRtUmVzcG9uc2Uge1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuICByZXNwb25zZTogc3RyaW5nOyAvLyBBIHN0cmluZ2lmaWVkIHJlc3BvbnNlIG9mIGEgaGFzaG1hcCByZXR1cm5lZCBmcm9tIEFsbC1pbi1PbmUgU0RLXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb3IgYmVsb3cgcGFyYW1ldGVycyBzZWUgW2RvY3VtZW50YXRpb25dKGh0dHBzOi8vZGV2ZWxvcGVyLnBheXRtLmNvbS9kb2NzL2FsbC1pbi1vbmUtc2RrL2h5YnJpZC1hcHBzL2NvcmRvdmEvKVxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBQYXltZW50SW50ZW50TW9kZWwge1xyXG4gIG1pZDogc3RyaW5nOyAvLyBNZXJjaGFudCBJRFxyXG4gIG9yZGVySWQ6IHN0cmluZzsgLy8gT3JkZXIgSURcclxuICB0eG5Ub2tlbjogc3RyaW5nOyAvLyBUcmFuc2FjdGlvbiBUb2tlblxyXG4gIGFtb3VudDogc3RyaW5nOyAvLyBBbW91bnRcclxuICBpc1N0YWdpbmc6IGJvb2xlYW47IC8vIEVudmlyb25tZW50XHJcbiAgY2FsbGJhY2tVcmw6IHN0cmluZzsgLy8gQ2FsbGJhY2sgVVJMXHJcbiAgcmVzdHJpY3RBcHBJbnZva2U6IGJvb2xlYW47IC8vIFRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBwYXl0bSBhcHAgaW52b2NhdGlvblxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBheW1lbnRBc3Npc3RJbnRlbnRNb2RlbCB7XHJcbiAgbWlkOiBzdHJpbmc7IC8vIE1lcmNoYW50IElEXHJcbiAgb3JkZXJJZDogc3RyaW5nOyAvLyBPcmRlciBJRFxyXG4gIHR4blRva2VuOiBzdHJpbmc7IC8vIFRyYW5zYWN0aW9uIFRva2VuXHJcbiAgYW1vdW50OiBzdHJpbmc7IC8vIEFtb3VudFxyXG4gIGlzU3RhZ2luZzogYm9vbGVhbjsgLy8gRW52aXJvbm1lbnRcclxuICBjYWxsYmFja1VybDogc3RyaW5nOyAvLyBDYWxsYmFjayBVUkxcclxuICByZXN0cmljdEFwcEludm9rZTogYm9vbGVhbjsgLy8gVG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIHBheXRtIGFwcCBpbnZvY2F0aW9uXHJcbiAgZW5hYmxlQXNzaXN0OiBib29sZWFuOyAvLyBUbyBlbmFibGUgb3IgZGlzYWJsZSB0aGUgQXNzaXN0IChPdHAgYXV0byByZWFkKVxyXG59XHJcbiJdfQ==