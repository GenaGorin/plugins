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
var FilePathOriginal = /** @class */ (function (_super) {
    __extends(FilePathOriginal, _super);
    function FilePathOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FilePathOriginal.prototype.resolveNativePath = function (path) { return cordova(this, "resolveNativePath", {}, arguments); };
    FilePathOriginal.pluginName = "FilePath";
    FilePathOriginal.plugin = "cordova-plugin-filepath";
    FilePathOriginal.pluginRef = "window.FilePath";
    FilePathOriginal.repo = "https://github.com/hiddentao/cordova-plugin-filepath";
    FilePathOriginal.platforms = ["Android"];
    return FilePathOriginal;
}(AwesomeCordovaNativePlugin));
var FilePath = new FilePathOriginal();
export { FilePath };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS1wYXRoL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWdDOUQsNEJBQTBCOzs7O0lBUXRELG9DQUFpQixhQUFDLElBQVk7Ozs7OzttQkF6Q2hDO0VBaUM4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlsZSBQYXRoXHJcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqXHJcbiAqIFRoaXMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVzb2x2ZSB0aGUgbmF0aXZlIGZpbGVzeXN0ZW0gcGF0aCBmb3IgQW5kcm9pZCBjb250ZW50IFVSSXMgYW5kIGlzIGJhc2VkIG9uIGNvZGUgaW4gdGhlIGFGaWxlQ2hvb3NlciBsaWJyYXJ5LlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaWxlUGF0aCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maWxlLXBhdGgvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlUGF0aDogRmlsZVBhdGgpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlUGF0aC5yZXNvbHZlTmF0aXZlUGF0aChwYXRoKVxyXG4gKiAgIC50aGVuKGZpbGVQYXRoID0+IGNvbnNvbGUubG9nKGZpbGVQYXRoKSlcclxuICogICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaWxlUGF0aCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxyXG4gIHBsdWdpblJlZjogJ3dpbmRvdy5GaWxlUGF0aCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9oaWRkZW50YW8vY29yZG92YS1wbHVnaW4tZmlsZXBhdGgnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGVQYXRoIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJlc29sdmUgbmF0aXZlIHBhdGggZm9yIGdpdmVuIGNvbnRlbnQgVVJML3BhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQ29udGVudCBVUkwvcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZXNvbHZlTmF0aXZlUGF0aChwYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=