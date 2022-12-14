import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var Zip = /** @class */ (function (_super) {
    __extends(Zip, _super);
    function Zip() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Zip.prototype.unzip = function (sourceZip, destFolder, onProgress) { return cordova(this, "unzip", {}, arguments); };
    Zip.pluginName = "Zip";
    Zip.plugin = "cordova-plugin-zip";
    Zip.pluginRef = "zip";
    Zip.repo = "https://github.com/MobileChromeApps/cordova-plugin-zip";
    Zip.platforms = ["Android", "iOS"];
    Zip.decorators = [
        { type: Injectable }
    ];
    return Zip;
}(AwesomeCordovaNativePlugin));
export { Zip };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemlwL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyx1Q0FBK0MsTUFBTSwrQkFBK0IsQ0FBQztBQUU1RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztJQTRCbEIsdUJBQTBCOzs7O0lBU2pELG1CQUFLLGFBQUMsU0FBaUIsRUFBRSxVQUFrQixFQUFFLFVBQXFCOzs7Ozs7O2dCQVZuRSxVQUFVOztjQTdCWDtFQThCeUIsMEJBQTBCO1NBQXRDLEdBQUciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgQ29yZG92YSwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFppcFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQSBDb3Jkb3ZhIHBsdWdpbiB0byB1bnppcCBmaWxlcyBpbiBBbmRyb2lkIGFuZCBpT1MuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFppcCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy96aXAvbngnXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCByZXN1bHQgPSBhd2FpdCBaaXAudW56aXAoJ3BhdGgvdG8vc291cmNlLnppcCcsICdwYXRoL3RvL2Rlc3QnLCAocHJvZ3Jlc3MpID0+XHJcbiAqICAgICBjb25zb2xlLmxvZygnVW56aXBwaW5nLCAnICsgTWF0aC5yb3VuZCgocHJvZ3Jlc3MubG9hZGVkIC8gcHJvZ3Jlc3MudG90YWwpICogMTAwKSArICclJylcclxuICogKTtcclxuICpcclxuICogaWYocmVzdWx0ID09PSAwKSBjb25zb2xlLmxvZygnU1VDQ0VTUycpO1xyXG4gKiBpZihyZXN1bHQgPT09IC0xKSBjb25zb2xlLmxvZygnRkFJTEVEJyk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1ppcCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4temlwJyxcclxuICBwbHVnaW5SZWY6ICd6aXAnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vTW9iaWxlQ2hyb21lQXBwcy9jb3Jkb3ZhLXBsdWdpbi16aXAnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBaaXAgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogRXh0cmFjdHMgZmlsZXMgZnJvbSBhIFpJUCBhcmNoaXZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHNvdXJjZVppcCAgU291cmNlIFpJUCBmaWxlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRlc3RGb2xkZXIgRGVzdGluYXRpb24gZm9sZGVyXHJcbiAgICogQHBhcmFtIHtGdW5jdGlvbn0gb25Qcm9ncmVzcyAgb3B0aW9uYWwgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIG9uIHByb2dyZXNzIHVwZGF0ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIG51bWJlci4gMCBpcyBzdWNjZXNzLCAtMSBpcyBlcnJvclxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bnppcChzb3VyY2VaaXA6IHN0cmluZywgZGVzdEZvbGRlcjogc3RyaW5nLCBvblByb2dyZXNzPzogRnVuY3Rpb24pOiBQcm9taXNlPG51bWJlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=