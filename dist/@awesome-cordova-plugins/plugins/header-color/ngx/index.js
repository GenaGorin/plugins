import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var HeaderColor = /** @class */ (function (_super) {
    __extends(HeaderColor, _super);
    function HeaderColor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HeaderColor.prototype.tint = function (color) { return cordova(this, "tint", { "callbackStyle": "object", "successName": "success", "errorName": "failure" }, arguments); };
    HeaderColor.pluginName = "HeaderColor";
    HeaderColor.plugin = "cordova-plugin-headercolor";
    HeaderColor.pluginRef = "plugins.headerColor";
    HeaderColor.repo = "https://github.com/tomloprod/cordova-plugin-headercolor";
    HeaderColor.platforms = ["Android"];
    HeaderColor.decorators = [
        { type: Injectable }
    ];
    return HeaderColor;
}(AwesomeCordovaNativePlugin));
export { HeaderColor };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvaGVhZGVyLWNvbG9yL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQXlCM0QsK0JBQTBCOzs7O0lBWXpELDBCQUFJLGFBQUMsS0FBYTs7Ozs7OztnQkFibkIsVUFBVTs7c0JBekJYO0VBMEJpQywwQkFBMEI7U0FBOUMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBIZWFkZXIgQ29sb3JcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgcGx1Z2luIHRvIGNoYW5nZSBjb2xvciBvZiBoZWFkZXIgaW4gQW5kcm9pZCBNdWx0aXRhc2sgVmlld1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBIZWFkZXJDb2xvciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9oZWFkZXItY29sb3Ivbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBoZWFkZXJDb2xvcjogSGVhZGVyQ29sb3IpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5oZWFkZXJDb2xvci50aW50KCcjYmVjYjI5Jyk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0hlYWRlckNvbG9yJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1oZWFkZXJjb2xvcicsXHJcbiAgcGx1Z2luUmVmOiAncGx1Z2lucy5oZWFkZXJDb2xvcicsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90b21sb3Byb2QvY29yZG92YS1wbHVnaW4taGVhZGVyY29sb3InLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEhlYWRlckNvbG9yIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFNldCBhIGNvbG9yIHRvIHRoZSB0YXNrIGhlYWRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbG9yIHtzdHJpbmd9IFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja1N0eWxlOiAnb2JqZWN0JyxcclxuICAgIHN1Y2Nlc3NOYW1lOiAnc3VjY2VzcycsXHJcbiAgICBlcnJvck5hbWU6ICdmYWlsdXJlJyxcclxuICB9KVxyXG4gIHRpbnQoY29sb3I6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==