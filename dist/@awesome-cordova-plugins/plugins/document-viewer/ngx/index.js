import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var DocumentViewer = /** @class */ (function (_super) {
    __extends(DocumentViewer, _super);
    function DocumentViewer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DocumentViewer.prototype.getSupportInfo = function () { return cordova(this, "getSupportInfo", {}, arguments); };
    DocumentViewer.prototype.canViewDocument = function (url, contentType, options, onPossible, onMissingApp, onImpossible, onError) { return cordova(this, "canViewDocument", { "sync": true }, arguments); };
    DocumentViewer.prototype.viewDocument = function (url, contentType, options, onShow, onClose, onMissingApp, onError) { return cordova(this, "viewDocument", { "sync": true }, arguments); };
    DocumentViewer.pluginName = "Document Viewer";
    DocumentViewer.plugin = "cordova-plugin-document-viewer";
    DocumentViewer.pluginRef = "SitewaertsDocumentViewer";
    DocumentViewer.repo = "https://github.com/sitewaerts/cordova-plugin-document-viewer";
    DocumentViewer.platforms = ["Android", "iOS", "Windows"];
    DocumentViewer.decorators = [
        { type: Injectable }
    ];
    return DocumentViewer;
}(AwesomeCordovaNativePlugin));
export { DocumentViewer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZG9jdW1lbnQtdmlld2VyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUM1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTREUCxrQ0FBMEI7Ozs7SUFPNUQsdUNBQWM7SUFnQmQsd0NBQWUsYUFDYixHQUFXLEVBQ1gsV0FBbUIsRUFDbkIsT0FBOEIsRUFDOUIsVUFBcUIsRUFDckIsWUFBdUIsRUFDdkIsWUFBdUIsRUFDdkIsT0FBa0I7SUFlcEIscUNBQVksYUFDVixHQUFXLEVBQ1gsV0FBbUIsRUFDbkIsT0FBOEIsRUFDOUIsTUFBaUIsRUFDakIsT0FBa0IsRUFDbEIsWUFBdUIsRUFDdkIsT0FBa0I7Ozs7Ozs7Z0JBckRyQixVQUFVOzt5QkE1RFg7RUE2RG9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZpZXdlck9wdGlvbnMge1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGRvY3VtZW50Vmlldz86IHtcclxuICAgIGNsb3NlTGFiZWw6IHN0cmluZztcclxuICB9O1xyXG4gIG5hdmlnYXRpb25WaWV3Pzoge1xyXG4gICAgY2xvc2VMYWJlbDogc3RyaW5nO1xyXG4gIH07XHJcbiAgZW1haWw/OiB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG4gIH07XHJcbiAgcHJpbnQ/OiB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG4gIH07XHJcbiAgb3BlbldpdGg/OiB7XHJcbiAgICBlbmFibGVkOiBib29sZWFuO1xyXG4gIH07XHJcbiAgYm9va21hcmtzPzoge1xyXG4gICAgZW5hYmxlZDogYm9vbGVhbjtcclxuICB9O1xyXG4gIHNlYXJjaD86IHtcclxuICAgIGVuYWJsZWQ6IGJvb2xlYW47XHJcbiAgfTtcclxuICBhdXRvQ2xvc2U/OiB7XHJcbiAgICBvblBhdXNlOiBib29sZWFuO1xyXG4gIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBEb2N1bWVudCBWaWV3ZXJcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIG9mZmVycyBhIHNsaW0gQVBJIHRvIHZpZXcgUERGIGZpbGVzIHdoaWNoIGFyZSBlaXRoZXIgc3RvcmVkIGluIHRoZSBhcHBzIGFzc2V0cyBmb2xkZXIgKC93d3cvKikgb3IgaW4gYW55IG90aGVyIGZpbGUgc3lzdGVtIGRpcmVjdG9yeSBhdmFpbGFibGUgdmlhIHRoZSBjb3Jkb3ZhIGZpbGUgcGx1Z2luLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBEb2N1bWVudFZpZXdlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9kb2N1bWVudC12aWV3ZXIvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRWaWV3ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICogY29uc3Qgb3B0aW9uczogRG9jdW1lbnRWaWV3ZXJPcHRpb25zID0ge1xyXG4gKiAgIHRpdGxlOiAnTXkgUERGJ1xyXG4gKiB9XHJcbiAqXHJcbiAqIHRoaXMuZG9jdW1lbnQudmlld0RvY3VtZW50KCdhc3NldHMvbXlGaWxlLnBkZicsICdhcHBsaWNhdGlvbi9wZGYnLCBvcHRpb25zKVxyXG4gKlxyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogRG9jdW1lbnRWaWV3ZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRG9jdW1lbnQgVmlld2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1kb2N1bWVudC12aWV3ZXInLFxyXG4gIHBsdWdpblJlZjogJ1NpdGV3YWVydHNEb2N1bWVudFZpZXdlcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9zaXRld2FlcnRzL2NvcmRvdmEtcGx1Z2luLWRvY3VtZW50LXZpZXdlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRG9jdW1lbnRWaWV3ZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgdGhlIGVtYWlsIGNvbXBvc2VyIHByZS1maWxsZWQgd2l0aCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgcHJvbWlzZSB3aGVuIHRoZSBFbWFpbENvbXBvc2VyIGhhcyBiZWVuIG9wZW5lZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRTdXBwb3J0SW5mbygpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgdGhlIGRvY3VtZW50IGNhbiBiZSBzaG93blxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVcmwgdG8gdGhlIGZpbGVcclxuICAgKiBAcGFyYW0gY29udGVudFR5cGUge3N0cmluZ30gQ29udGVudCB0eXBlIG9mIHRoZSBmaWxlXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0RvY3VtZW50Vmlld2VyT3B0aW9uc30gb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBbb25Qb3NzaWJsZV0ge0Z1bmN0aW9ufVxyXG4gICAqIEBwYXJhbSBbb25NaXNzaW5nQXBwXSB7RnVuY3Rpb259XHJcbiAgICogQHBhcmFtIFtvbkltcG9zc2libGVdIHtGdW5jdGlvbn1cclxuICAgKiBAcGFyYW0gW29uRXJyb3JdIHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjYW5WaWV3RG9jdW1lbnQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGNvbnRlbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBEb2N1bWVudFZpZXdlck9wdGlvbnMsXHJcbiAgICBvblBvc3NpYmxlPzogRnVuY3Rpb24sXHJcbiAgICBvbk1pc3NpbmdBcHA/OiBGdW5jdGlvbixcclxuICAgIG9uSW1wb3NzaWJsZT86IEZ1bmN0aW9uLFxyXG4gICAgb25FcnJvcj86IEZ1bmN0aW9uXHJcbiAgKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyB0aGUgZmlsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVybCB7c3RyaW5nfSBVcmwgdG8gdGhlIGZpbGVcclxuICAgKiBAcGFyYW0gY29udGVudFR5cGUge3N0cmluZ30gQ29udGVudCB0eXBlIG9mIHRoZSBmaWxlXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge0RvY3VtZW50Vmlld2VyT3B0aW9uc30gb3B0aW9uc1xyXG4gICAqIEBwYXJhbSBbb25TaG93XSB7RnVuY3Rpb259XHJcbiAgICogQHBhcmFtIFtvbkNsb3NlXSB7RnVuY3Rpb259XHJcbiAgICogQHBhcmFtIFtvbk1pc3NpbmdBcHBdIHtGdW5jdGlvbn1cclxuICAgKiBAcGFyYW0gW29uRXJyb3JdIHtGdW5jdGlvbn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB2aWV3RG9jdW1lbnQoXHJcbiAgICB1cmw6IHN0cmluZyxcclxuICAgIGNvbnRlbnRUeXBlOiBzdHJpbmcsXHJcbiAgICBvcHRpb25zOiBEb2N1bWVudFZpZXdlck9wdGlvbnMsXHJcbiAgICBvblNob3c/OiBGdW5jdGlvbixcclxuICAgIG9uQ2xvc2U/OiBGdW5jdGlvbixcclxuICAgIG9uTWlzc2luZ0FwcD86IEZ1bmN0aW9uLFxyXG4gICAgb25FcnJvcj86IEZ1bmN0aW9uXHJcbiAgKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==