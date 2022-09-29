import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var NFC = /** @class */ (function (_super) {
    __extends(NFC, _super);
    function NFC() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFC.prototype.readerMode = function (flags) { return cordova(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFC.prototype.scanNdef = function (options) { return cordova(this, "scanNdef", { "sync": true }, arguments); };
    NFC.prototype.scanTag = function (options) { return cordova(this, "scanTag", { "sync": true }, arguments); };
    NFC.prototype.cancelScan = function () { return cordova(this, "cancelScan", { "sync": true }, arguments); };
    NFC.prototype.connect = function (tech, timeout) { return cordova(this, "connect", { "sync": true }, arguments); };
    NFC.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    NFC.prototype.transceive = function (data) { return cordova(this, "transceive", { "sync": true }, arguments); };
    NFC.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFC.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFC.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFC.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFC.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFC.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFC.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFC.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFC.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFC.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFC.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFC.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFC.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFC.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFC.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: false,
        configurable: true
    });
    NFC.pluginName = "NFC";
    NFC.plugin = "phonegap-nfc";
    NFC.pluginRef = "nfc";
    NFC.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFC.platforms = ["Android", "iOS", "Windows"];
    NFC.decorators = [
        { type: Injectable }
    ];
    return NFC;
}(AwesomeCordovaNativePlugin));
export { NFC };
var Ndef = /** @class */ (function (_super) {
    __extends(Ndef, _super);
    function Ndef() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ndef.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    Ndef.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    Ndef.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    Ndef.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    Ndef.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    Ndef.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    Ndef.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    Ndef.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    Ndef.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    Ndef.prototype.decodeTnf = function (tnf_byte) { return cordova(this, "decodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    Ndef.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(Ndef.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Ndef.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: false,
        configurable: true
    });
    Ndef.pluginName = "NFC";
    Ndef.plugin = "phonegap-nfc";
    Ndef.pluginRef = "ndef";
    Ndef.decorators = [
        { type: Injectable }
    ];
    return Ndef;
}(AwesomeCordovaNativePlugin));
export { Ndef };
var NfcUtil = /** @class */ (function (_super) {
    __extends(NfcUtil, _super);
    function NfcUtil() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtil.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtil.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtil.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtil.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtil.prototype.arrayBufferToHexString = function (buffer) { return cordova(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtil.prototype.hexStringToArrayBuffer = function (hexString) { return cordova(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtil.pluginName = "NFC";
    NfcUtil.plugin = "phonegap-nfc";
    NfcUtil.pluginRef = "util";
    NfcUtil.decorators = [
        { type: Injectable }
    ];
    return NfcUtil;
}(AwesomeCordovaNativePlugin));
export { NfcUtil };
var TextHelper = /** @class */ (function (_super) {
    __extends(TextHelper, _super);
    function TextHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextHelper.prototype.decodePayload = function (data) {
        return;
    };
    TextHelper.prototype.encodePayload = function (text, lang) {
        return;
    };
    return TextHelper;
}(AwesomeCordovaNativePlugin));
export { TextHelper };
var UriHelper = /** @class */ (function (_super) {
    __extends(UriHelper, _super);
    function UriHelper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UriHelper.prototype.decodePayload = function (data) {
        return;
    };
    UriHelper.prototype.encodePayload = function (uri) {
        return;
    };
    return UriHelper;
}(AwesomeCordovaNativePlugin));
export { UriHelper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmZjL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBa0dULHVCQUEwQjs7OztJQThCakQsd0JBQVUsYUFBQyxLQUFhO0lBV3hCLHNCQUFRLGFBQUMsT0FBcUI7SUFhOUIscUJBQU8sYUFBQyxPQUFxQjtJQVM3Qix3QkFBVTtJQVlWLHFCQUFPLGFBQUMsSUFBWSxFQUFFLE9BQWdCO0lBU3RDLG1CQUFLO0lBYUwsd0JBQVUsYUFBQyxJQUEwQjtJQW1CckMsMEJBQVksYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBa0J2RCw2QkFBZSxhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFrQjFELHNDQUF3QixhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFtQm5FLGlDQUFtQixhQUFDLFFBQWdCLEVBQUUsU0FBb0IsRUFBRSxTQUFvQjtJQWdCaEYsdUNBQXlCLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQVdwRSxtQkFBSyxhQUFDLE9BQWM7SUFTcEIsMEJBQVk7SUFXWixtQkFBSyxhQUFDLE9BQWM7SUFVcEIscUJBQU87SUFRUCxtQkFBSztJQVdMLHNCQUFRLGFBQUMsSUFBYztJQVV2QiwwQkFBWTtJQVVaLDBCQUFZO0lBVVoscUJBQU87SUFjUCwyQkFBYSxhQUFDLEtBQWU7SUFVN0IsMkJBQWEsYUFBQyxHQUFXO0lBVXpCLDhCQUFnQixhQUFDLEtBQWU7MEJBblRoQyxrQ0FBaUI7Ozs7OzswQkFFakIsa0NBQWlCOzs7Ozs7MEJBRWpCLGtDQUFpQjs7Ozs7OzBCQUVqQixrQ0FBaUI7Ozs7OzswQkFFakIsd0NBQXVCOzs7Ozs7MEJBRXZCLDRDQUEyQjs7Ozs7OzBCQUUzQiwrQ0FBOEI7Ozs7Ozs7Ozs7OztnQkFqQi9CLFVBQVU7O2NBbkdYO0VBb0d5QiwwQkFBMEI7U0FBdEMsR0FBRzs7SUEyVVUsd0JBQTBCOzs7O0lBbUJsRCxxQkFBTSxhQUFDLEdBQVcsRUFBRSxJQUF1QixFQUFFLEVBQXFCLEVBQUUsT0FBMEI7SUFLOUYseUJBQVUsYUFBQyxJQUFZLEVBQUUsWUFBcUIsRUFBRSxFQUFzQjtJQUt0RSx3QkFBUyxhQUFDLEdBQVcsRUFBRSxFQUFzQjtJQUs3QyxnQ0FBaUIsYUFBQyxHQUFXLEVBQUUsT0FBMEIsRUFBRSxFQUFzQjtJQUtqRiw4QkFBZSxhQUFDLFFBQWdCLEVBQUUsT0FBZTtJQUtqRCwwQkFBVyxhQUFDLFdBQWtCLEVBQUUsRUFBc0I7SUFLdEQsMEJBQVc7SUFLWCx1Q0FBd0IsYUFBQyxXQUFtQjtJQUs1Qyw0QkFBYSxhQUFDLFdBQWdCO0lBSzlCLDRCQUFhLGFBQUMsS0FBVTtJQUt4Qix3QkFBUyxhQUFDLFFBQWE7SUFLdkIsd0JBQVMsYUFBQyxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEdBQVE7SUFLL0QsMEJBQVcsYUFBQyxHQUFROzBCQTdFcEIsMkJBQVM7Ozs7OzswQkFFVCxnQ0FBYzs7Ozs7OzBCQUVkLGdDQUFjOzs7Ozs7MEJBRWQsa0NBQWdCOzs7Ozs7MEJBRWhCLG1DQUFpQjs7Ozs7OzBCQUVqQiw2QkFBVzs7Ozs7OzBCQUVYLCtCQUFhOzs7Ozs7MEJBRWIsOEJBQVk7Ozs7OzswQkFvRVosNEJBQVU7Ozs7OzswQkFHViwyQkFBUzs7Ozs7Ozs7OztnQkF4RlYsVUFBVTs7ZUE5YVg7RUErYTBCLDBCQUEwQjtTQUF2QyxJQUFJOztJQW1HWSwyQkFBMEI7Ozs7SUFFckQsdUJBQUssYUFBQyxDQUFTO0lBS2YsNkJBQVcsYUFBQyxDQUFTO0lBS3JCLCtCQUFhLGFBQUMsQ0FBVztJQUt6QiwrQkFBYSxhQUFDLENBQVM7SUFLdkIsa0NBQWdCLGFBQUMsS0FBZTtJQUtoQyx3QkFBTSxhQUFDLE1BQWtCLEVBQUUsR0FBVyxFQUFFLElBQXVCO0lBSy9ELHdDQUFzQixhQUFDLE1BQW1CO0lBSzFDLHdDQUFzQixhQUFDLFNBQWlCOzs7OztnQkF0Q3pDLFVBQVU7O2tCQWpoQlg7RUFraEI2QiwwQkFBMEI7U0FBMUMsT0FBTzs7SUEwQ1ksOEJBQTBCOzs7O0lBQ3hELGtDQUFhLEdBQWIsVUFBYyxJQUFjO1FBQzFCLE9BQU87SUFDVCxDQUFDO0lBQ0Qsa0NBQWEsR0FBYixVQUFjLElBQVksRUFBRSxJQUFZO1FBQ3RDLE9BQU87SUFDVCxDQUFDO3FCQWxrQkg7RUE0akJnQywwQkFBMEI7OztJQVMzQiw2QkFBMEI7Ozs7SUFDdkQsaUNBQWEsR0FBYixVQUFjLElBQWM7UUFDMUIsT0FBTztJQUNULENBQUM7SUFDRCxpQ0FBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixPQUFPO0lBQ1QsQ0FBQztvQkEza0JIO0VBcWtCK0IsMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuZGVjbGFyZSBsZXQgd2luZG93OiBhbnk7XHJcblxyXG4vLyB0YWcgc2hvdWxkIGJlIE5mY1RhZywgYnV0IGtlZXBpbmcgYXMgTmRlZlRhZyB0byBhdm9pZCBicmVha2luZyBleGlzdGluZyBjb2RlXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZkV2ZW50IHtcclxuICB0YWc6IE5kZWZUYWc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlJlY29yZCB7XHJcbiAgaWQ6IGFueVtdO1xyXG4gIHBheWxvYWQ6IG51bWJlcltdO1xyXG4gIHRuZjogbnVtYmVyO1xyXG4gIHR5cGU6IG51bWJlcltdO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlcHJlY2F0ZWQgdXNlIE5mY1RhZ1xyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOZGVmVGFnIHtcclxuICBjYW5NYWtlUmVhZE9ubHk6IGJvb2xlYW47XHJcbiAgaWQ6IG51bWJlcltdO1xyXG4gIGlzV3JpdGFibGU6IGJvb2xlYW47XHJcbiAgbWF4U2l6ZTogbnVtYmVyO1xyXG4gIG5kZWZNZXNzYWdlOiBOZGVmUmVjb3JkW107XHJcbiAgdGVjaFR5cGVzOiBzdHJpbmdbXTtcclxuICB0eXBlOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmZjVGFnIHtcclxuICBpZD86IG51bWJlcltdO1xyXG4gIGNhbk1ha2VSZWFkT25seT86IGJvb2xlYW47XHJcbiAgaXNXcml0YWJsZT86IGJvb2xlYW47XHJcbiAgbWF4U2l6ZT86IG51bWJlcjtcclxuICBuZGVmTWVzc2FnZT86IE5kZWZSZWNvcmRbXTtcclxuICB0ZWNoVHlwZXM/OiBzdHJpbmdbXTtcclxuICB0eXBlPzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNjYW5PcHRpb25zIHtcclxuICAvKipcclxuICAgKiBJZiB0cnVlLCBrZWVwIHRoZSBzY2FuIHNlc3Npb24gb3BlbiBzbyB3cml0ZSBjYW4gYmUgY2FsbGVkXHJcbiAgICogYWZ0ZXIgcmVhZGluZy4gVGhlIGRlZmF1bHQgdmFsdWUgaXMgZmFsc2UuXHJcbiAgICovXHJcbiAga2VlcFNlc3Npb25PcGVuPzogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE5GQ1xyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhlIE5GQyBwbHVnaW4gYWxsb3dzIHlvdSB0byByZWFkIGFuZCB3cml0ZSBORkMgdGFncy4gWW91IGNhbiBhbHNvIGJlYW0gdG8sIGFuZCByZWNlaXZlIGZyb20sIG90aGVyIE5GQyBlbmFibGVkIGRldmljZXMuXHJcbiAqXHJcbiAqIFVzZSB0b1xyXG4gKiAtIHJlYWQgZGF0YSBmcm9tIE5GQyB0YWdzXHJcbiAqIC0gd3JpdGUgZGF0YSB0byBORkMgdGFnc1xyXG4gKiAtIHNlbmQgZGF0YSB0byBvdGhlciBORkMgZW5hYmxlZCBkZXZpY2VzXHJcbiAqIC0gcmVjZWl2ZSBkYXRhIGZyb20gTkZDIGRldmljZXNcclxuICpcclxuICogVGhpcyBwbHVnaW4gdXNlcyBOREVGIChORkMgRGF0YSBFeGNoYW5nZSBGb3JtYXQpIGZvciBtYXhpbXVtIGNvbXBhdGliaWx0eSBiZXR3ZWVuIE5GQyBkZXZpY2VzLCB0YWcgdHlwZXMsIGFuZCBvcGVyYXRpbmcgc3lzdGVtcy5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTkZDLCBOZGVmIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL25mYy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG5mYzogTkZDLCBwcml2YXRlIG5kZWY6IE5kZWYpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gUmVhZCBORkMgVGFnIC0gQW5kcm9pZFxyXG4gKiAvLyBPbmNlIHRoZSByZWFkZXIgbW9kZSBpcyBlbmFibGVkLCBhbnkgdGFncyB0aGF0IGFyZSBzY2FubmVkIGFyZSBzZW50IHRvIHRoZSBzdWJzY3JpYmVyXHJcbiAqICBsZXQgZmxhZ3MgPSB0aGlzLm5mYy5GTEFHX1JFQURFUl9ORkNfQSB8IHRoaXMubmZjLkZMQUdfUkVBREVSX05GQ19WO1xyXG4gKiAgdGhpcy5yZWFkZXJNb2RlJCA9IHRoaXMubmZjLnJlYWRlck1vZGUoZmxhZ3MpLnN1YnNjcmliZShcclxuICogICAgICB0YWcgPT4gY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGFnKSksXHJcbiAqICAgICAgZXJyID0+IGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIHRhZycsIGVycilcclxuICogICk7XHJcbiAqXHJcbiAqIC8vIFJlYWQgTkZDIFRhZyAtIGlPU1xyXG4gKiAvLyBPbiBpT1MsIGEgTkZDIHJlYWRlciBzZXNzaW9uIHRha2VzIGNvbnRyb2wgZnJvbSB5b3VyIGFwcCB3aGlsZSBzY2FubmluZyB0YWdzIHRoZW4gcmV0dXJucyBhIHRhZ1xyXG4gKiB0cnkge1xyXG4gKiAgICAgbGV0IHRhZyA9IGF3YWl0IHRoaXMubmZjLnNjYW5OZGVmKCk7XHJcbiAqICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0YWcpKTtcclxuICogIH0gY2F0Y2ggKGVycikge1xyXG4gKiAgICAgIGNvbnNvbGUubG9nKCdFcnJvciByZWFkaW5nIHRhZycsIGVycik7XHJcbiAqICB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBGb3IgbW9yZSBkZXRhaWxzIG9uIE5GQyB0YWcgb3BlcmF0aW9ucyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTkZDJyxcclxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxyXG4gIHBsdWdpblJlZjogJ25mYycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYycsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXSxcclxufSlcclxuLyoqXHJcbiAqIEB7IE5GQyB9IGNsYXNzIG1ldGhvZHNcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5GQyBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvLyBGbGFncyBmb3IgcmVhZGVyTW9kZVxyXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLmFuZHJvaWQuY29tL3JlZmVyZW5jZS9hbmRyb2lkL25mYy9OZmNBZGFwdGVyI0ZMQUdfUkVBREVSX05GQ19BXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX0E6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9ORkNfQjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19GOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX1Y6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9ORkNfQkFSQ09ERTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX1NLSVBfTkRFRl9DSEVDSzogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05PX1BMQVRGT1JNX1NPVU5EUzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZWFkIE5GQyB0YWdzIHNlbmRpbmcgdGhlIHRhZyBkYXRhIHRvIHRoZSBzdWNjZXNzIGNhbGxiYWNrLlxyXG4gICAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjcmVhZGVybW9kZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZsYWdzXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ2Rpc2FibGVSZWFkZXJNb2RlJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IGZhbHNlLFxyXG4gIH0pXHJcbiAgcmVhZGVyTW9kZShmbGFnczogbnVtYmVyKTogT2JzZXJ2YWJsZTxOZmNUYWc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIHNjYW5OZGVmIHN0YXJ0cyB0aGUgTkZDTkRFRlJlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3NjYW5uZGVmXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNjYW5OZGVmKG9wdGlvbnM/OiBTY2FuT3B0aW9ucyk6IFByb21pc2U8TmZjVGFnPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiBzY2FuVGFnIHN0YXJ0cyB0aGUgTkZDVGFnUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cclxuICAgKlxyXG4gICAqIFlvdSBwcm9iYWJseSB3YW50ICpzY2FuTmRlZiogZm9yIHJlYWRpbmcgTkZDIHRhZ3Mgb24gaU9TLiBPbmx5IHVzZSBzY2FuVGFnIGlmIHlvdSBuZWVkIHRoZSB0YWcgVUlELlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNzY2FudGFnXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNjYW5UYWcob3B0aW9ucz86IFNjYW5PcHRpb25zKTogUHJvbWlzZTxOZmNUYWc+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEZ1bmN0aW9uIGNhbmNlbFNjYW4gc3RvcHMgdGhlIE5GQ1JlYWRlclNlc3Npb24gcmV0dXJuaW5nIGNvbnRyb2wgdG8geW91ciBhcHAuXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY2NhbmNlbHNjYW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjYW5jZWxTY2FuKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb25uZWN0IHRvIHRoZSB0YWcgYW5kIGVuYWJsZSBJL08gb3BlcmF0aW9ucyB0byB0aGUgdGFnIGZyb20gdGhpcyBUYWdUZWNobm9sb2d5IG9iamVjdC5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY29ubmVjdFxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRlY2ggVGhlIHRhZyB0ZWNobm9sb2d5IGNsYXNzIG5hbWUgZS5nLiBhbmRyb2lkLm5mYy50ZWNoLklzb0RlcFxyXG4gICAqIEBwYXJhbSB0aW1lb3V0IFRoZSB0cmFuc2NlaXZlKGJ5dGVbXSkgdGltZW91dCBpbiBtaWxsaXNlY29uZHMgW29wdGlvbmFsXVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGNvbm5lY3QodGVjaDogc3RyaW5nLCB0aW1lb3V0PzogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlIFRhZ1RlY2hub2xvZ3kgY29ubmVjdGlvbi5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjY2xvc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjbG9zZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZCByYXcgY29tbWFuZCB0byB0aGUgdGFnIGFuZCByZWNlaXZlIHRoZSByZXNwb25zZS5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjdHJhbnNjZWl2ZVxyXG4gICAqXHJcbiAgICogRXhhbXBsZSBjb2RlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyN0YWctdGVjaG5vbG9neS1mdW5jdGlvbnMtMVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEgYW4gQXJyYXlCdWZmZXIgb3Igc3RyaW5nIG9mIGhleCBkYXRhIGUuZy4gJzAwIEE0IDA0IDAwIDA3IEQyIDc2IDAwIDAwIDg1IDAxIDAwJ1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRyYW5zY2VpdmUoZGF0YTogc3RyaW5nIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxyXG4gICAqXHJcbiAgICogQGRlcHJlY2F0ZWQgdXNlIHNjYW5OZGVmIG9yIHNjYW5UYWdcclxuICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDMsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnaW52YWxpZGF0ZVNlc3Npb24nLFxyXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcclxuICB9KVxyXG4gIGJlZ2luU2Vzc2lvbihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBhbnkgTkRFRiB0YWcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDMsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlTmRlZkxpc3RlbmVyJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBhZGROZGVmTGlzdGVuZXIob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxOZGVmRXZlbnQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGFncyBtYXRjaGluZyBhbnkgdGFnIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDMsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlVGFnRGlzY292ZXJlZExpc3RlbmVyJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBhZGRUYWdEaXNjb3ZlcmVkTGlzdGVuZXIob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgTkRFRiB0YWdzIG1hdGNoaW5nIGEgc3BlY2lmaWVkIE1JTUUgdHlwZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtaW1lVHlwZVxyXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogNCxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdyZW1vdmVNaW1lVHlwZUxpc3RlbmVyJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBhZGRNaW1lVHlwZUxpc3RlbmVyKG1pbWVUeXBlOiBzdHJpbmcsIG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIGZvcm1hdGFibGUgTkRFRiB0YWdzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgYWRkTmRlZkZvcm1hdGFibGVMaXN0ZW5lcihvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGVzIGFuIE5kZWZNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdG8gYSBORkMgdGFnLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1lc3NhZ2Uge2FueVtdfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHdyaXRlKG1lc3NhZ2U6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogTWFrZXMgYSBORkMgdGFnIHJlYWQgb25seS4gKipXYXJuaW5nKiogdGhpcyBpcyBwZXJtYW5lbnQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBtYWtlUmVhZE9ubHkoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNoYXJlcyBhbiBOREVGIE1lc3NhZ2UoYXJyYXkgb2YgbmRlZiByZWNvcmRzKSB2aWEgcGVlci10by1wZWVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG1lc3NhZ2UgQW4gYXJyYXkgb2YgTkRFRiBSZWNvcmRzLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNoYXJlKG1lc3NhZ2U6IGFueVtdKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3Agc2hhcmluZyBOREVGIGRhdGEgdmlhIHBlZXItdG8tcGVlci5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHVuc2hhcmUoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEVyYXNlIGEgTkRFRiB0YWdcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZXJhc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgYSBmaWxlIHRvIGFub3RoZXIgZGV2aWNlIHZpYSBORkMgaGFuZG92ZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJpcyBBIFVSSSBhcyBhIFN0cmluZywgb3IgYW4gYXJyYXkgb2YgVVJJcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBoYW5kb3Zlcih1cmlzOiBzdHJpbmdbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBORkMgaGFuZG92ZXIuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wSGFuZG92ZXIoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wZW5zIHRoZSBkZXZpY2UncyBORkMgc2V0dGluZ3MuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaG93U2V0dGluZ3MoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIE5GQyBpcyBhdmFpbGFibGUgYW5kIGVuYWJsZWQgb24gdGhpcyBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBlbmFibGVkKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIEB7IE5GQyB9IGNsYXNzIHV0aWxpdHkgbWV0aG9kc1xyXG4gICAqIGZvciB1c2Ugd2l0aFxyXG4gICAqL1xyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgYnl0ZSBhcnJheSB0byBzdHJpbmdcclxuICAgKlxyXG4gICAqIEBwYXJhbSBieXRlcyB7bnVtYmVyW119XHJcbiAgICogQHJldHVybnMge3N0cmluZ31cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBieXRlc1RvU3RyaW5nKGJ5dGVzOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgc3RyaW5nIHRvIGJ5dGUgYXJyYXkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RyIHtzdHJpbmd9XHJcbiAgICogQHJldHVybnMge251bWJlcltdfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0cmluZ1RvQnl0ZXMoc3RyOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIENvbnZlcnQgYnl0ZSBhcnJheSB0byBoZXggc3RyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYnl0ZXNUb0hleFN0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05GQycsXHJcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcclxuICBwbHVnaW5SZWY6ICduZGVmJyxcclxufSlcclxuLyoqXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBVdGlsaXR5IG1ldGhvZHMgZm9yIGNyZWF0aW5nIG5kZWYgcmVjb3JkcyBmb3IgdGhlIG5kZWYgdGFnIGZvcm1hdC5cclxuICogTW92ZSByZWNvcmRzIGludG8gYXJyYXkgYmVmb3JlIHVzYWdlLiBUaGVuIHBhc3MgYW4gYXJyYXkgdG8gbWV0aG9kcyBhcyBwYXJhbWV0ZXJzLlxyXG4gKiBEbyBub3QgcGFzcyBieXRlcyBhcyBwYXJhbWV0ZXJzIGZvciB0aGVzZSBtZXRob2RzLCBjb252ZXJzaW9uIGlzIGJ1aWx0IGluLlxyXG4gKiBGb3IgdXNhZ2Ugd2l0aCBuZmMud3JpdGUoKSBhbmQgbmZjLnNoYXJlKClcclxuICovXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5kZWYgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX0VNUFRZOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX1dFTExfS05PV046IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfTUlNRV9NRURJQTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9BQlNPTFVURV9VUkk6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfRVhURVJOQUxfVFlQRTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9VTktOT1dOOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX1VOQ0hBTkdFRDogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9SRVNFUlZFRDogbnVtYmVyO1xyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICByZWNvcmQodG5mOiBudW1iZXIsIHR5cGU6IG51bWJlcltdIHwgc3RyaW5nLCBpZDogbnVtYmVyW10gfCBzdHJpbmcsIHBheWxvYWQ6IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0ZXh0UmVjb3JkKHRleHQ6IHN0cmluZywgbGFuZ3VhZ2VDb2RlPzogc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB1cmlSZWNvcmQodXJpOiBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGFic29sdXRlVXJpUmVjb3JkKHVyaTogc3RyaW5nLCBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgbWltZU1lZGlhUmVjb3JkKG1pbWVUeXBlOiBzdHJpbmcsIHBheWxvYWQ6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc21hcnRQb3N0ZXIobmRlZlJlY29yZHM6IGFueVtdLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBlbXB0eVJlY29yZCgpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGFuZHJvaWRBcHBsaWNhdGlvblJlY29yZChwYWNrYWdlTmFtZTogc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBlbmNvZGVNZXNzYWdlKG5kZWZSZWNvcmRzOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZGVjb2RlTWVzc2FnZShieXRlczogYW55KTogYW55IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGRlY29kZVRuZih0bmZfYnl0ZTogYW55KTogYW55IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGVuY29kZVRuZihtYjogYW55LCBtZTogYW55LCBjZjogYW55LCBzcjogYW55LCBpbDogYW55LCB0bmY6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0bmZUb1N0cmluZyh0bmY6IGFueSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB0ZXh0SGVscGVyOiBUZXh0SGVscGVyO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICB1cmlIZWxwZXI6IFVyaUhlbHBlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdORkMnLFxyXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXHJcbiAgcGx1Z2luUmVmOiAndXRpbCcsXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE5mY1V0aWwgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdG9IZXgoaTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRvUHJpbnRhYmxlKGk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBieXRlc1RvU3RyaW5nKGk6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHN0cmluZ1RvQnl0ZXMoczogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYnl0ZXNUb0hleFN0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgaXNUeXBlKHJlY29yZDogTmRlZlJlY29yZCwgdG5mOiBudW1iZXIsIHR5cGU6IG51bWJlcltdIHwgc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhcnJheUJ1ZmZlclRvSGV4U3RyaW5nKGJ1ZmZlcjogQXJyYXlCdWZmZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgaGV4U3RyaW5nVG9BcnJheUJ1ZmZlcihoZXhTdHJpbmc6IHN0cmluZyk6IEFycmF5QnVmZmVyIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0SGVscGVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIGRlY29kZVBheWxvYWQoZGF0YTogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICBlbmNvZGVQYXlsb2FkKHRleHQ6IHN0cmluZywgbGFuZzogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFVyaUhlbHBlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBkZWNvZGVQYXlsb2FkKGRhdGE6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZW5jb2RlUGF5bG9hZCh1cmk6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19