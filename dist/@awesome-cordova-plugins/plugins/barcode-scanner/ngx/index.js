import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
var BarcodeScanner = /** @class */ (function (_super) {
    __extends(BarcodeScanner, _super);
    function BarcodeScanner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.Encode = {
            TEXT_TYPE: 'TEXT_TYPE',
            EMAIL_TYPE: 'EMAIL_TYPE',
            PHONE_TYPE: 'PHONE_TYPE',
            SMS_TYPE: 'SMS_TYPE',
        };
        return _this;
    }
    BarcodeScanner.prototype.scan = function (options) { return cordova(this, "scan", { "callbackOrder": "reverse" }, arguments); };
    BarcodeScanner.prototype.encode = function (type, data) { return cordova(this, "encode", {}, arguments); };
    BarcodeScanner.pluginName = "BarcodeScanner";
    BarcodeScanner.plugin = "phonegap-plugin-barcodescanner";
    BarcodeScanner.pluginRef = "cordova.plugins.barcodeScanner";
    BarcodeScanner.repo = "https://github.com/phonegap/phonegap-plugin-barcodescanner";
    BarcodeScanner.platforms = ["Android", "BlackBerry 10", "Browser", "iOS", "Windows"];
    BarcodeScanner.decorators = [
        { type: Injectable }
    ];
    return BarcodeScanner;
}(AwesomeCordovaNativePlugin));
export { BarcodeScanner };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFyY29kZS1zY2FubmVyL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOztJQWtIeEQsa0NBQTBCOzs7UUFDNUQsWUFBTSxHQUtGO1lBQ0YsU0FBUyxFQUFFLFdBQVc7WUFDdEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsVUFBVSxFQUFFLFlBQVk7WUFDeEIsUUFBUSxFQUFFLFVBQVU7U0FDckIsQ0FBQzs7O0lBV0YsNkJBQUksYUFBQyxPQUErQjtJQWFwQywrQkFBTSxhQUFDLElBQVksRUFBRSxJQUFTOzs7Ozs7O2dCQXBDL0IsVUFBVTs7eUJBbEhYO0VBbUhvQywwQkFBMEI7U0FBakQsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVNjYW5uZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBQcmVmZXIgZnJvbnQgY2FtZXJhLiBTdXBwb3J0ZWQgb24gaU9TIGFuZCBBbmRyb2lkLlxyXG4gICAqL1xyXG4gIHByZWZlckZyb250Q2FtZXJhPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2hvdyBmbGlwIGNhbWVyYSBidXR0b24uIFN1cHBvcnRlZCBvbiBpT1MgYW5kIEFuZHJvaWQuXHJcbiAgICovXHJcbiAgc2hvd0ZsaXBDYW1lcmFCdXR0b24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBTaG93IHRvcmNoIGJ1dHRvbi4gU3VwcG9ydGVkIG9uIGlPUyBhbmQgQW5kcm9pZC5cclxuICAgKi9cclxuICBzaG93VG9yY2hCdXR0b24/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNhYmxlIGFuaW1hdGlvbnMuIFN1cHBvcnRlZCBvbiBpT1Mgb25seS5cclxuICAgKi9cclxuICBkaXNhYmxlQW5pbWF0aW9ucz86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc2FibGUgc3VjY2VzcyBiZWVwLiBTdXBwb3J0ZWQgb24gaU9TIG9ubHkuXHJcbiAgICovXHJcbiAgZGlzYWJsZVN1Y2Nlc3NCZWVwPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvbXB0IHRleHQuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXHJcbiAgICovXHJcbiAgcHJvbXB0Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBGb3JtYXRzIHNlcGFyYXRlZCBieSBjb21tYXMuIERlZmF1bHRzIHRvIGFsbCBmb3JtYXRzIGV4Y2VwdCBgUERGXzQxN2AgYW5kIGBSU1NfRVhQQU5ERURgLlxyXG4gICAqL1xyXG4gIGZvcm1hdHM/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9yaWVudGF0aW9uLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBvbmx5LiBDYW4gYmUgc2V0IHRvIGBwb3J0cmFpdGAgb3IgYGxhbmRzY2FwZWAuIERlZmF1bHRzIHRvIG5vbmUgc28gdGhlIHVzZXIgY2FuIHJvdGF0ZSB0aGUgcGhvbmUgYW5kIHBpY2sgYW4gb3JpZW50YXRpb24uXHJcbiAgICovXHJcbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExhdW5jaCB3aXRoIHRoZSB0b3JjaCBzd2l0Y2hlZCBvbiAoaWYgYXZhaWxhYmxlKS4gU3VwcG9ydGVkIG9uIEFuZHJvaWQgb25seS5cclxuICAgKi9cclxuICB0b3JjaE9uPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2F2ZSBzY2FuIGhpc3RvcnkuIERlZmF1bHRzIHRvIGBmYWxzZWAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXHJcbiAgICovXHJcbiAgc2F2ZUhpc3Rvcnk/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBEaXNwbGF5IHNjYW5uZWQgdGV4dCBmb3IgWCBtcy4gMCBzdXBwcmVzc2VzIGl0IGVudGlyZWx5LCBkZWZhdWx0IDE1MDAuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIG9ubHkuXHJcbiAgICovXHJcbiAgcmVzdWx0RGlzcGxheUR1cmF0aW9uPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVTY2FuUmVzdWx0IHtcclxuICBmb3JtYXQ6XHJcbiAgICB8ICdRUl9DT0RFJ1xyXG4gICAgfCAnREFUQV9NQVRSSVgnXHJcbiAgICB8ICdVUENfRSdcclxuICAgIHwgJ1VQQ19BJ1xyXG4gICAgfCAnRUFOXzgnXHJcbiAgICB8ICdFQU5fMTMnXHJcbiAgICB8ICdDT0RFXzEyOCdcclxuICAgIHwgJ0NPREVfMzknXHJcbiAgICB8ICdDT0RFXzkzJ1xyXG4gICAgfCAnQ09EQUJBUidcclxuICAgIHwgJ0lURidcclxuICAgIHwgJ1JTUzE0J1xyXG4gICAgfCAnUlNTX0VYUEFOREVEJ1xyXG4gICAgfCAnUERGXzQxNydcclxuICAgIHwgJ0FaVEVDJ1xyXG4gICAgfCAnTVNJJztcclxuICBjYW5jZWxsZWQ6IGJvb2xlYW47XHJcbiAgdGV4dDogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgQmFyY29kZSBTY2FubmVyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGUgQmFyY29kZSBTY2FubmVyIFBsdWdpbiBvcGVucyBhIGNhbWVyYSB2aWV3IGFuZCBhdXRvbWF0aWNhbGx5IHNjYW5zIGEgYmFyY29kZSwgcmV0dXJuaW5nIHRoZSBkYXRhIGJhY2sgdG8geW91LlxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYHBob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtCYXJjb2RlU2Nhbm5lciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL3Bob25lZ2FwL3Bob25lZ2FwLXBsdWdpbi1iYXJjb2Rlc2Nhbm5lcikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJhcmNvZGVTY2FubmVyIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhcmNvZGUtc2Nhbm5lci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGJhcmNvZGVTY2FubmVyOiBCYXJjb2RlU2Nhbm5lcikgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLmJhcmNvZGVTY2FubmVyLnNjYW4oKS50aGVuKGJhcmNvZGVEYXRhID0+IHtcclxuICogIGNvbnNvbGUubG9nKCdCYXJjb2RlIGRhdGEnLCBiYXJjb2RlRGF0YSk7XHJcbiAqIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAqIFx0Y29uc29sZS5sb2coJ0Vycm9yJywgZXJyKTtcclxuICogfSk7XHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBCYXJjb2RlU2Nhbm5lck9wdGlvbnNcclxuICogQmFyY29kZVNjYW5SZXN1bHRcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCYXJjb2RlU2Nhbm5lcicsXHJcbiAgcGx1Z2luOiAncGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuYmFyY29kZVNjYW5uZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vcGhvbmVnYXAvcGhvbmVnYXAtcGx1Z2luLWJhcmNvZGVzY2FubmVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCbGFja0JlcnJ5IDEwJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQmFyY29kZVNjYW5uZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgRW5jb2RlOiB7XHJcbiAgICBURVhUX1RZUEU6IHN0cmluZztcclxuICAgIEVNQUlMX1RZUEU6IHN0cmluZztcclxuICAgIFBIT05FX1RZUEU6IHN0cmluZztcclxuICAgIFNNU19UWVBFOiBzdHJpbmc7XHJcbiAgfSA9IHtcclxuICAgIFRFWFRfVFlQRTogJ1RFWFRfVFlQRScsXHJcbiAgICBFTUFJTF9UWVBFOiAnRU1BSUxfVFlQRScsXHJcbiAgICBQSE9ORV9UWVBFOiAnUEhPTkVfVFlQRScsXHJcbiAgICBTTVNfVFlQRTogJ1NNU19UWVBFJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBPcGVuIHRoZSBiYXJjb2RlIHNjYW5uZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0JhcmNvZGVTY2FubmVyT3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbmFsIG9wdGlvbnMgdG8gcGFzcyB0byB0aGUgc2Nhbm5lclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBzY2FubmVyIGRhdGEsIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzY2FuKG9wdGlvbnM/OiBCYXJjb2RlU2Nhbm5lck9wdGlvbnMpOiBQcm9taXNlPEJhcmNvZGVTY2FuUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFbmNvZGVzIGRhdGEgaW50byBhIGJhcmNvZGUuXHJcbiAgICogTk9URTogbm90IHdlbGwgc3VwcG9ydGVkIG9uIEFuZHJvaWRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlIFR5cGUgb2YgZW5jb2RpbmdcclxuICAgKiBAcGFyYW0ge2FueX0gZGF0YSBEYXRhIHRvIGVuY29kZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVuY29kZSh0eXBlOiBzdHJpbmcsIGRhdGE6IGFueSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==