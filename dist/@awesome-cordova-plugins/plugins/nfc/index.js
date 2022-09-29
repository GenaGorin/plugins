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
import { Observable } from 'rxjs';
var NFCOriginal = /** @class */ (function (_super) {
    __extends(NFCOriginal, _super);
    function NFCOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NFCOriginal.prototype.readerMode = function (flags) { return cordova(this, "readerMode", { "observable": true, "clearFunction": "disableReaderMode", "clearWithArgs": false }, arguments); };
    NFCOriginal.prototype.scanNdef = function (options) { return cordova(this, "scanNdef", { "sync": true }, arguments); };
    NFCOriginal.prototype.scanTag = function (options) { return cordova(this, "scanTag", { "sync": true }, arguments); };
    NFCOriginal.prototype.cancelScan = function () { return cordova(this, "cancelScan", { "sync": true }, arguments); };
    NFCOriginal.prototype.connect = function (tech, timeout) { return cordova(this, "connect", { "sync": true }, arguments); };
    NFCOriginal.prototype.close = function () { return cordova(this, "close", { "sync": true }, arguments); };
    NFCOriginal.prototype.transceive = function (data) { return cordova(this, "transceive", { "sync": true }, arguments); };
    NFCOriginal.prototype.beginSession = function (onSuccess, onFailure) { return cordova(this, "beginSession", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "invalidateSession", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefListener = function (onSuccess, onFailure) { return cordova(this, "addNdefListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeNdefListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addTagDiscoveredListener = function (onSuccess, onFailure) { return cordova(this, "addTagDiscoveredListener", { "observable": true, "successIndex": 0, "errorIndex": 3, "clearFunction": "removeTagDiscoveredListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addMimeTypeListener = function (mimeType, onSuccess, onFailure) { return cordova(this, "addMimeTypeListener", { "observable": true, "successIndex": 1, "errorIndex": 4, "clearFunction": "removeMimeTypeListener", "clearWithArgs": true }, arguments); };
    NFCOriginal.prototype.addNdefFormatableListener = function (onSuccess, onFailure) { return cordova(this, "addNdefFormatableListener", { "observable": true, "successIndex": 0, "errorIndex": 3 }, arguments); };
    NFCOriginal.prototype.write = function (message) { return cordova(this, "write", {}, arguments); };
    NFCOriginal.prototype.makeReadOnly = function () { return cordova(this, "makeReadOnly", {}, arguments); };
    NFCOriginal.prototype.share = function (message) { return cordova(this, "share", {}, arguments); };
    NFCOriginal.prototype.unshare = function () { return cordova(this, "unshare", {}, arguments); };
    NFCOriginal.prototype.erase = function () { return cordova(this, "erase", {}, arguments); };
    NFCOriginal.prototype.handover = function (uris) { return cordova(this, "handover", {}, arguments); };
    NFCOriginal.prototype.stopHandover = function () { return cordova(this, "stopHandover", {}, arguments); };
    NFCOriginal.prototype.showSettings = function () { return cordova(this, "showSettings", {}, arguments); };
    NFCOriginal.prototype.enabled = function () { return cordova(this, "enabled", {}, arguments); };
    NFCOriginal.prototype.bytesToString = function (bytes) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NFCOriginal.prototype.stringToBytes = function (str) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NFCOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_A", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_A"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_A", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_B", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_B"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_B", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_F", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_F"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_F", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_V", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_V"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_V", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NFC_BARCODE", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NFC_BARCODE"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NFC_BARCODE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_SKIP_NDEF_CHECK", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_SKIP_NDEF_CHECK"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_SKIP_NDEF_CHECK", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NFCOriginal.prototype, "FLAG_READER_NO_PLATFORM_SOUNDS", {
        get: function () { return cordovaPropertyGet(this, "FLAG_READER_NO_PLATFORM_SOUNDS"); },
        set: function (value) { cordovaPropertySet(this, "FLAG_READER_NO_PLATFORM_SOUNDS", value); },
        enumerable: false,
        configurable: true
    });
    NFCOriginal.pluginName = "NFC";
    NFCOriginal.plugin = "phonegap-nfc";
    NFCOriginal.pluginRef = "nfc";
    NFCOriginal.repo = "https://github.com/chariotsolutions/phonegap-nfc";
    NFCOriginal.platforms = ["Android", "iOS", "Windows"];
    return NFCOriginal;
}(AwesomeCordovaNativePlugin));
var NFC = new NFCOriginal();
export { NFC };
var NdefOriginal = /** @class */ (function (_super) {
    __extends(NdefOriginal, _super);
    function NdefOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NdefOriginal.prototype.record = function (tnf, type, id, payload) { return cordova(this, "record", { "sync": true }, arguments); };
    NdefOriginal.prototype.textRecord = function (text, languageCode, id) { return cordova(this, "textRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.uriRecord = function (uri, id) { return cordova(this, "uriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.absoluteUriRecord = function (uri, payload, id) { return cordova(this, "absoluteUriRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.mimeMediaRecord = function (mimeType, payload) { return cordova(this, "mimeMediaRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.smartPoster = function (ndefRecords, id) { return cordova(this, "smartPoster", { "sync": true }, arguments); };
    NdefOriginal.prototype.emptyRecord = function () { return cordova(this, "emptyRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.androidApplicationRecord = function (packageName) { return cordova(this, "androidApplicationRecord", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeMessage = function (ndefRecords) { return cordova(this, "encodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeMessage = function (bytes) { return cordova(this, "decodeMessage", { "sync": true }, arguments); };
    NdefOriginal.prototype.decodeTnf = function (tnf_byte) { return cordova(this, "decodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.encodeTnf = function (mb, me, cf, sr, il, tnf) { return cordova(this, "encodeTnf", { "sync": true }, arguments); };
    NdefOriginal.prototype.tnfToString = function (tnf) { return cordova(this, "tnfToString", { "sync": true }, arguments); };
    Object.defineProperty(NdefOriginal.prototype, "TNF_EMPTY", {
        get: function () { return cordovaPropertyGet(this, "TNF_EMPTY"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EMPTY", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_WELL_KNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_WELL_KNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_WELL_KNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_MIME_MEDIA", {
        get: function () { return cordovaPropertyGet(this, "TNF_MIME_MEDIA"); },
        set: function (value) { cordovaPropertySet(this, "TNF_MIME_MEDIA", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_ABSOLUTE_URI", {
        get: function () { return cordovaPropertyGet(this, "TNF_ABSOLUTE_URI"); },
        set: function (value) { cordovaPropertySet(this, "TNF_ABSOLUTE_URI", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_EXTERNAL_TYPE", {
        get: function () { return cordovaPropertyGet(this, "TNF_EXTERNAL_TYPE"); },
        set: function (value) { cordovaPropertySet(this, "TNF_EXTERNAL_TYPE", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNKNOWN", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNKNOWN"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNKNOWN", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_UNCHANGED", {
        get: function () { return cordovaPropertyGet(this, "TNF_UNCHANGED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_UNCHANGED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "TNF_RESERVED", {
        get: function () { return cordovaPropertyGet(this, "TNF_RESERVED"); },
        set: function (value) { cordovaPropertySet(this, "TNF_RESERVED", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "textHelper", {
        get: function () { return cordovaPropertyGet(this, "textHelper"); },
        set: function (value) { cordovaPropertySet(this, "textHelper", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NdefOriginal.prototype, "uriHelper", {
        get: function () { return cordovaPropertyGet(this, "uriHelper"); },
        set: function (value) { cordovaPropertySet(this, "uriHelper", value); },
        enumerable: false,
        configurable: true
    });
    NdefOriginal.pluginName = "NFC";
    NdefOriginal.plugin = "phonegap-nfc";
    NdefOriginal.pluginRef = "ndef";
    return NdefOriginal;
}(AwesomeCordovaNativePlugin));
var Ndef = new NdefOriginal();
export { Ndef };
var NfcUtilOriginal = /** @class */ (function (_super) {
    __extends(NfcUtilOriginal, _super);
    function NfcUtilOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NfcUtilOriginal.prototype.toHex = function (i) { return cordova(this, "toHex", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.toPrintable = function (i) { return cordova(this, "toPrintable", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToString = function (i) { return cordova(this, "bytesToString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.stringToBytes = function (s) { return cordova(this, "stringToBytes", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.bytesToHexString = function (bytes) { return cordova(this, "bytesToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.isType = function (record, tnf, type) { return cordova(this, "isType", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.arrayBufferToHexString = function (buffer) { return cordova(this, "arrayBufferToHexString", { "sync": true }, arguments); };
    NfcUtilOriginal.prototype.hexStringToArrayBuffer = function (hexString) { return cordova(this, "hexStringToArrayBuffer", { "sync": true }, arguments); };
    NfcUtilOriginal.pluginName = "NFC";
    NfcUtilOriginal.plugin = "phonegap-nfc";
    NfcUtilOriginal.pluginRef = "util";
    return NfcUtilOriginal;
}(AwesomeCordovaNativePlugin));
var NfcUtil = new NfcUtilOriginal();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbmZjL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLCtFQUFnRSxNQUFNLCtCQUErQixDQUFDO0FBQzdHLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBa0dULHVCQUEwQjs7OztJQThCakQsd0JBQVUsYUFBQyxLQUFhO0lBV3hCLHNCQUFRLGFBQUMsT0FBcUI7SUFhOUIscUJBQU8sYUFBQyxPQUFxQjtJQVM3Qix3QkFBVTtJQVlWLHFCQUFPLGFBQUMsSUFBWSxFQUFFLE9BQWdCO0lBU3RDLG1CQUFLO0lBYUwsd0JBQVUsYUFBQyxJQUEwQjtJQW1CckMsMEJBQVksYUFBQyxTQUFvQixFQUFFLFNBQW9CO0lBa0J2RCw2QkFBZSxhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFrQjFELHNDQUF3QixhQUFDLFNBQW9CLEVBQUUsU0FBb0I7SUFtQm5FLGlDQUFtQixhQUFDLFFBQWdCLEVBQUUsU0FBb0IsRUFBRSxTQUFvQjtJQWdCaEYsdUNBQXlCLGFBQUMsU0FBb0IsRUFBRSxTQUFvQjtJQVdwRSxtQkFBSyxhQUFDLE9BQWM7SUFTcEIsMEJBQVk7SUFXWixtQkFBSyxhQUFDLE9BQWM7SUFVcEIscUJBQU87SUFRUCxtQkFBSztJQVdMLHNCQUFRLGFBQUMsSUFBYztJQVV2QiwwQkFBWTtJQVVaLDBCQUFZO0lBVVoscUJBQU87SUFjUCwyQkFBYSxhQUFDLEtBQWU7SUFVN0IsMkJBQWEsYUFBQyxHQUFXO0lBVXpCLDhCQUFnQixhQUFDLEtBQWU7MEJBblRoQyxrQ0FBaUI7Ozs7OzswQkFFakIsa0NBQWlCOzs7Ozs7MEJBRWpCLGtDQUFpQjs7Ozs7OzBCQUVqQixrQ0FBaUI7Ozs7OzswQkFFakIsd0NBQXVCOzs7Ozs7MEJBRXZCLDRDQUEyQjs7Ozs7OzBCQUUzQiwrQ0FBOEI7Ozs7Ozs7Ozs7O2NBcEhoQztFQW9HeUIsMEJBQTBCO1NBQXRDLEdBQUc7O0lBMlVVLHdCQUEwQjs7OztJQW1CbEQscUJBQU0sYUFBQyxHQUFXLEVBQUUsSUFBdUIsRUFBRSxFQUFxQixFQUFFLE9BQTBCO0lBSzlGLHlCQUFVLGFBQUMsSUFBWSxFQUFFLFlBQXFCLEVBQUUsRUFBc0I7SUFLdEUsd0JBQVMsYUFBQyxHQUFXLEVBQUUsRUFBc0I7SUFLN0MsZ0NBQWlCLGFBQUMsR0FBVyxFQUFFLE9BQTBCLEVBQUUsRUFBc0I7SUFLakYsOEJBQWUsYUFBQyxRQUFnQixFQUFFLE9BQWU7SUFLakQsMEJBQVcsYUFBQyxXQUFrQixFQUFFLEVBQXNCO0lBS3RELDBCQUFXO0lBS1gsdUNBQXdCLGFBQUMsV0FBbUI7SUFLNUMsNEJBQWEsYUFBQyxXQUFnQjtJQUs5Qiw0QkFBYSxhQUFDLEtBQVU7SUFLeEIsd0JBQVMsYUFBQyxRQUFhO0lBS3ZCLHdCQUFTLGFBQUMsRUFBTyxFQUFFLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBTyxFQUFFLEVBQU8sRUFBRSxHQUFRO0lBSy9ELDBCQUFXLGFBQUMsR0FBUTswQkE3RXBCLDJCQUFTOzs7Ozs7MEJBRVQsZ0NBQWM7Ozs7OzswQkFFZCxnQ0FBYzs7Ozs7OzBCQUVkLGtDQUFnQjs7Ozs7OzBCQUVoQixtQ0FBaUI7Ozs7OzswQkFFakIsNkJBQVc7Ozs7OzswQkFFWCwrQkFBYTs7Ozs7OzBCQUViLDhCQUFZOzs7Ozs7MEJBb0VaLDRCQUFVOzs7Ozs7MEJBR1YsMkJBQVM7Ozs7Ozs7OztlQXRnQlg7RUErYTBCLDBCQUEwQjtTQUF2QyxJQUFJOztJQW1HWSwyQkFBMEI7Ozs7SUFFckQsdUJBQUssYUFBQyxDQUFTO0lBS2YsNkJBQVcsYUFBQyxDQUFTO0lBS3JCLCtCQUFhLGFBQUMsQ0FBVztJQUt6QiwrQkFBYSxhQUFDLENBQVM7SUFLdkIsa0NBQWdCLGFBQUMsS0FBZTtJQUtoQyx3QkFBTSxhQUFDLE1BQWtCLEVBQUUsR0FBVyxFQUFFLElBQXVCO0lBSy9ELHdDQUFzQixhQUFDLE1BQW1CO0lBSzFDLHdDQUFzQixhQUFDLFNBQWlCOzs7O2tCQXZqQjFDO0VBa2hCNkIsMEJBQTBCO1NBQTFDLE9BQU87O0lBMENZLDhCQUEwQjs7OztJQUN4RCxrQ0FBYSxHQUFiLFVBQWMsSUFBYztRQUMxQixPQUFPO0lBQ1QsQ0FBQztJQUNELGtDQUFhLEdBQWIsVUFBYyxJQUFZLEVBQUUsSUFBWTtRQUN0QyxPQUFPO0lBQ1QsQ0FBQztxQkFsa0JIO0VBNGpCZ0MsMEJBQTBCOzs7SUFTM0IsNkJBQTBCOzs7O0lBQ3ZELGlDQUFhLEdBQWIsVUFBYyxJQUFjO1FBQzFCLE9BQU87SUFDVCxDQUFDO0lBQ0QsaUNBQWEsR0FBYixVQUFjLEdBQVc7UUFDdkIsT0FBTztJQUNULENBQUM7b0JBM2tCSDtFQXFrQitCLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmRlY2xhcmUgbGV0IHdpbmRvdzogYW55O1xyXG5cclxuLy8gdGFnIHNob3VsZCBiZSBOZmNUYWcsIGJ1dCBrZWVwaW5nIGFzIE5kZWZUYWcgdG8gYXZvaWQgYnJlYWtpbmcgZXhpc3RpbmcgY29kZVxyXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZFdmVudCB7XHJcbiAgdGFnOiBOZGVmVGFnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5kZWZSZWNvcmQge1xyXG4gIGlkOiBhbnlbXTtcclxuICBwYXlsb2FkOiBudW1iZXJbXTtcclxuICB0bmY6IG51bWJlcjtcclxuICB0eXBlOiBudW1iZXJbXTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXByZWNhdGVkIHVzZSBOZmNUYWdcclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmRlZlRhZyB7XHJcbiAgY2FuTWFrZVJlYWRPbmx5OiBib29sZWFuO1xyXG4gIGlkOiBudW1iZXJbXTtcclxuICBpc1dyaXRhYmxlOiBib29sZWFuO1xyXG4gIG1heFNpemU6IG51bWJlcjtcclxuICBuZGVmTWVzc2FnZTogTmRlZlJlY29yZFtdO1xyXG4gIHRlY2hUeXBlczogc3RyaW5nW107XHJcbiAgdHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5mY1RhZyB7XHJcbiAgaWQ/OiBudW1iZXJbXTtcclxuICBjYW5NYWtlUmVhZE9ubHk/OiBib29sZWFuO1xyXG4gIGlzV3JpdGFibGU/OiBib29sZWFuO1xyXG4gIG1heFNpemU/OiBudW1iZXI7XHJcbiAgbmRlZk1lc3NhZ2U/OiBOZGVmUmVjb3JkW107XHJcbiAgdGVjaFR5cGVzPzogc3RyaW5nW107XHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTY2FuT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogSWYgdHJ1ZSwga2VlcCB0aGUgc2NhbiBzZXNzaW9uIG9wZW4gc28gd3JpdGUgY2FuIGJlIGNhbGxlZFxyXG4gICAqIGFmdGVyIHJlYWRpbmcuIFRoZSBkZWZhdWx0IHZhbHVlIGlzIGZhbHNlLlxyXG4gICAqL1xyXG4gIGtlZXBTZXNzaW9uT3Blbj86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBORkNcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoZSBORkMgcGx1Z2luIGFsbG93cyB5b3UgdG8gcmVhZCBhbmQgd3JpdGUgTkZDIHRhZ3MuIFlvdSBjYW4gYWxzbyBiZWFtIHRvLCBhbmQgcmVjZWl2ZSBmcm9tLCBvdGhlciBORkMgZW5hYmxlZCBkZXZpY2VzLlxyXG4gKlxyXG4gKiBVc2UgdG9cclxuICogLSByZWFkIGRhdGEgZnJvbSBORkMgdGFnc1xyXG4gKiAtIHdyaXRlIGRhdGEgdG8gTkZDIHRhZ3NcclxuICogLSBzZW5kIGRhdGEgdG8gb3RoZXIgTkZDIGVuYWJsZWQgZGV2aWNlc1xyXG4gKiAtIHJlY2VpdmUgZGF0YSBmcm9tIE5GQyBkZXZpY2VzXHJcbiAqXHJcbiAqIFRoaXMgcGx1Z2luIHVzZXMgTkRFRiAoTkZDIERhdGEgRXhjaGFuZ2UgRm9ybWF0KSBmb3IgbWF4aW11bSBjb21wYXRpYmlsdHkgYmV0d2VlbiBORkMgZGV2aWNlcywgdGFnIHR5cGVzLCBhbmQgb3BlcmF0aW5nIHN5c3RlbXMuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IE5GQywgTmRlZiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9uZmMvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBuZmM6IE5GQywgcHJpdmF0ZSBuZGVmOiBOZGVmKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIFJlYWQgTkZDIFRhZyAtIEFuZHJvaWRcclxuICogLy8gT25jZSB0aGUgcmVhZGVyIG1vZGUgaXMgZW5hYmxlZCwgYW55IHRhZ3MgdGhhdCBhcmUgc2Nhbm5lZCBhcmUgc2VudCB0byB0aGUgc3Vic2NyaWJlclxyXG4gKiAgbGV0IGZsYWdzID0gdGhpcy5uZmMuRkxBR19SRUFERVJfTkZDX0EgfCB0aGlzLm5mYy5GTEFHX1JFQURFUl9ORkNfVjtcclxuICogIHRoaXMucmVhZGVyTW9kZSQgPSB0aGlzLm5mYy5yZWFkZXJNb2RlKGZsYWdzKS5zdWJzY3JpYmUoXHJcbiAqICAgICAgdGFnID0+IGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRhZykpLFxyXG4gKiAgICAgIGVyciA9PiBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyB0YWcnLCBlcnIpXHJcbiAqICApO1xyXG4gKlxyXG4gKiAvLyBSZWFkIE5GQyBUYWcgLSBpT1NcclxuICogLy8gT24gaU9TLCBhIE5GQyByZWFkZXIgc2Vzc2lvbiB0YWtlcyBjb250cm9sIGZyb20geW91ciBhcHAgd2hpbGUgc2Nhbm5pbmcgdGFncyB0aGVuIHJldHVybnMgYSB0YWdcclxuICogdHJ5IHtcclxuICogICAgIGxldCB0YWcgPSBhd2FpdCB0aGlzLm5mYy5zY2FuTmRlZigpO1xyXG4gKiAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGFnKSk7XHJcbiAqICB9IGNhdGNoIChlcnIpIHtcclxuICogICAgICBjb25zb2xlLmxvZygnRXJyb3IgcmVhZGluZyB0YWcnLCBlcnIpO1xyXG4gKiAgfVxyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogRm9yIG1vcmUgZGV0YWlscyBvbiBORkMgdGFnIG9wZXJhdGlvbnMgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mY1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ05GQycsXHJcbiAgcGx1Z2luOiAncGhvbmVnYXAtbmZjJyxcclxuICBwbHVnaW5SZWY6ICduZmMnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbi8qKlxyXG4gKiBAeyBORkMgfSBjbGFzcyBtZXRob2RzXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBORkMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLy8gRmxhZ3MgZm9yIHJlYWRlck1vZGVcclxuICAvLyBodHRwczovL2RldmVsb3Blci5hbmRyb2lkLmNvbS9yZWZlcmVuY2UvYW5kcm9pZC9uZmMvTmZjQWRhcHRlciNGTEFHX1JFQURFUl9ORkNfQVxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19BOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX0I6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9ORkNfRjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIEZMQUdfUkVBREVSX05GQ19WOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgRkxBR19SRUFERVJfTkZDX0JBUkNPREU6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9TS0lQX05ERUZfQ0hFQ0s6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBGTEFHX1JFQURFUl9OT19QTEFURk9STV9TT1VORFM6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBORkMgdGFncyBzZW5kaW5nIHRoZSB0YWcgZGF0YSB0byB0aGUgc3VjY2VzcyBjYWxsYmFjay5cclxuICAgKiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3JlYWRlcm1vZGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmbGFnc1xyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIGNsZWFyRnVuY3Rpb246ICdkaXNhYmxlUmVhZGVyTW9kZScsXHJcbiAgICBjbGVhcldpdGhBcmdzOiBmYWxzZSxcclxuICB9KVxyXG4gIHJlYWRlck1vZGUoZmxhZ3M6IG51bWJlcik6IE9ic2VydmFibGU8TmZjVGFnPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiBzY2FuTmRlZiBzdGFydHMgdGhlIE5GQ05ERUZSZWFkZXJTZXNzaW9uIGFsbG93aW5nIGlPUyB0byBzY2FuIE5GQyB0YWdzLlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNzY2FubmRlZlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzY2FuTmRlZihvcHRpb25zPzogU2Nhbk9wdGlvbnMpOiBQcm9taXNlPE5mY1RhZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRnVuY3Rpb24gc2NhblRhZyBzdGFydHMgdGhlIE5GQ1RhZ1JlYWRlclNlc3Npb24gYWxsb3dpbmcgaU9TIHRvIHNjYW4gTkZDIHRhZ3MuXHJcbiAgICpcclxuICAgKiBZb3UgcHJvYmFibHkgd2FudCAqc2Nhbk5kZWYqIGZvciByZWFkaW5nIE5GQyB0YWdzIG9uIGlPUy4gT25seSB1c2Ugc2NhblRhZyBpZiB5b3UgbmVlZCB0aGUgdGFnIFVJRC5cclxuICAgKiBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjbmZjc2NhbnRhZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzY2FuVGFnKG9wdGlvbnM/OiBTY2FuT3B0aW9ucyk6IFByb21pc2U8TmZjVGFnPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBGdW5jdGlvbiBjYW5jZWxTY2FuIHN0b3BzIHRoZSBORkNSZWFkZXJTZXNzaW9uIHJldHVybmluZyBjb250cm9sIHRvIHlvdXIgYXBwLlxyXG4gICAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jaGFyaW90c29sdXRpb25zL3Bob25lZ2FwLW5mYyNuZmNjYW5jZWxzY2FuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2FuY2VsU2NhbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29ubmVjdCB0byB0aGUgdGFnIGFuZCBlbmFibGUgSS9PIG9wZXJhdGlvbnMgdG8gdGhlIHRhZyBmcm9tIHRoaXMgVGFnVGVjaG5vbG9neSBvYmplY3QuXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY2Nvbm5lY3RcclxuICAgKlxyXG4gICAqIEBwYXJhbSB0ZWNoIFRoZSB0YWcgdGVjaG5vbG9neSBjbGFzcyBuYW1lIGUuZy4gYW5kcm9pZC5uZmMudGVjaC5Jc29EZXBcclxuICAgKiBAcGFyYW0gdGltZW91dCBUaGUgdHJhbnNjZWl2ZShieXRlW10pIHRpbWVvdXQgaW4gbWlsbGlzZWNvbmRzIFtvcHRpb25hbF1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjb25uZWN0KHRlY2g6IHN0cmluZywgdGltZW91dD86IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDbG9zZSBUYWdUZWNobm9sb2d5IGNvbm5lY3Rpb24uXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY2Nsb3NlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgY2xvc2UoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgcmF3IGNvbW1hbmQgdG8gdGhlIHRhZyBhbmQgcmVjZWl2ZSB0aGUgcmVzcG9uc2UuXHJcbiAgICogaHR0cHM6Ly9naXRodWIuY29tL2NoYXJpb3Rzb2x1dGlvbnMvcGhvbmVnYXAtbmZjI25mY3RyYW5zY2VpdmVcclxuICAgKlxyXG4gICAqIEV4YW1wbGUgY29kZSBodHRwczovL2dpdGh1Yi5jb20vY2hhcmlvdHNvbHV0aW9ucy9waG9uZWdhcC1uZmMjdGFnLXRlY2hub2xvZ3ktZnVuY3Rpb25zLTFcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhIGFuIEFycmF5QnVmZmVyIG9yIHN0cmluZyBvZiBoZXggZGF0YSBlLmcuICcwMCBBNCAwNCAwMCAwNyBEMiA3NiAwMCAwMCA4NSAwMSAwMCdcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0cmFuc2NlaXZlKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSBORkNOREVGUmVhZGVyU2Vzc2lvbiBhbGxvd2luZyBpT1MgdG8gc2NhbiBORkMgdGFncy5cclxuICAgKlxyXG4gICAqIEBkZXByZWNhdGVkIHVzZSBzY2FuTmRlZiBvciBzY2FuVGFnXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ2ludmFsaWRhdGVTZXNzaW9uJyxcclxuICAgIGNsZWFyV2l0aEFyZ3M6IHRydWUsXHJcbiAgfSlcclxuICBiZWdpblNlc3Npb24ob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhbiBldmVudCBsaXN0ZW5lciBmb3IgYW55IE5ERUYgdGFnLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZU5kZWZMaXN0ZW5lcicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgYWRkTmRlZkxpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8TmRlZkV2ZW50PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRhZ3MgbWF0Y2hpbmcgYW55IHRhZyB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9uU3VjY2Vzc1xyXG4gICAqIEBwYXJhbSBvbkZhaWx1cmVcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3JlbW92ZVRhZ0Rpc2NvdmVyZWRMaXN0ZW5lcicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgYWRkVGFnRGlzY292ZXJlZExpc3RlbmVyKG9uU3VjY2Vzcz86IEZ1bmN0aW9uLCBvbkZhaWx1cmU/OiBGdW5jdGlvbik6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWdpc3RlcnMgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIE5ERUYgdGFncyBtYXRjaGluZyBhIHNwZWNpZmllZCBNSU1FIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbWltZVR5cGVcclxuICAgKiBAcGFyYW0gb25TdWNjZXNzXHJcbiAgICogQHBhcmFtIG9uRmFpbHVyZVxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICAgIHN1Y2Nlc3NJbmRleDogMSxcclxuICAgIGVycm9ySW5kZXg6IDQsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAncmVtb3ZlTWltZVR5cGVMaXN0ZW5lcicsXHJcbiAgICBjbGVhcldpdGhBcmdzOiB0cnVlLFxyXG4gIH0pXHJcbiAgYWRkTWltZVR5cGVMaXN0ZW5lcihtaW1lVHlwZTogc3RyaW5nLCBvblN1Y2Nlc3M/OiBGdW5jdGlvbiwgb25GYWlsdXJlPzogRnVuY3Rpb24pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVnaXN0ZXJzIGFuIGV2ZW50IGxpc3RlbmVyIGZvciBmb3JtYXRhYmxlIE5ERUYgdGFncy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBvblN1Y2Nlc3NcclxuICAgKiBAcGFyYW0gb25GYWlsdXJlXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIGFkZE5kZWZGb3JtYXRhYmxlTGlzdGVuZXIob25TdWNjZXNzPzogRnVuY3Rpb24sIG9uRmFpbHVyZT86IEZ1bmN0aW9uKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlcyBhbiBOZGVmTWVzc2FnZShhcnJheSBvZiBuZGVmIHJlY29yZHMpIHRvIGEgTkZDIHRhZy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIHthbnlbXX1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB3cml0ZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIC8qKlxyXG4gICAqIE1ha2VzIGEgTkZDIHRhZyByZWFkIG9ubHkuICoqV2FybmluZyoqIHRoaXMgaXMgcGVybWFuZW50LlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgbWFrZVJlYWRPbmx5KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaGFyZXMgYW4gTkRFRiBNZXNzYWdlKGFycmF5IG9mIG5kZWYgcmVjb3JkcykgdmlhIHBlZXItdG8tcGVlci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIEFuIGFycmF5IG9mIE5ERUYgUmVjb3Jkcy5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzaGFyZShtZXNzYWdlOiBhbnlbXSk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIHNoYXJpbmcgTkRFRiBkYXRhIHZpYSBwZWVyLXRvLXBlZXIuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bnNoYXJlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBFcmFzZSBhIE5ERUYgdGFnXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGVyYXNlKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTZW5kIGEgZmlsZSB0byBhbm90aGVyIGRldmljZSB2aWEgTkZDIGhhbmRvdmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHVyaXMgQSBVUkkgYXMgYSBTdHJpbmcsIG9yIGFuIGFycmF5IG9mIFVSSXMuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaGFuZG92ZXIodXJpczogc3RyaW5nW10pOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCBzaGFyaW5nIE5ERUYgZGF0YSB2aWEgTkZDIGhhbmRvdmVyLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcEhhbmRvdmVyKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBPcGVucyB0aGUgZGV2aWNlJ3MgTkZDIHNldHRpbmdzLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2hvd1NldHRpbmdzKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBORkMgaXMgYXZhaWxhYmxlIGFuZCBlbmFibGVkIG9uIHRoaXMgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZW5hYmxlZCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBAeyBORkMgfSBjbGFzcyB1dGlsaXR5IG1ldGhvZHNcclxuICAgKiBmb3IgdXNlIHdpdGhcclxuICAgKi9cclxuICAvKipcclxuICAgKiBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gc3RyaW5nXHJcbiAgICpcclxuICAgKiBAcGFyYW0gYnl0ZXMge251bWJlcltdfVxyXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYnl0ZXNUb1N0cmluZyhieXRlczogbnVtYmVyW10pOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDb252ZXJ0IHN0cmluZyB0byBieXRlIGFycmF5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN0ciB7c3RyaW5nfVxyXG4gICAqIEByZXR1cm5zIHtudW1iZXJbXX1cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzdHJpbmdUb0J5dGVzKHN0cjogc3RyaW5nKTogbnVtYmVyW10ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBDb252ZXJ0IGJ5dGUgYXJyYXkgdG8gaGV4IHN0cmluZ1xyXG4gICAqXHJcbiAgICogQHBhcmFtIGJ5dGVzIHtudW1iZXJbXX1cclxuICAgKiBAcmV0dXJucyB7c3RyaW5nfVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuLyoqXHJcbiAqIEBoaWRkZW5cclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdORkMnLFxyXG4gIHBsdWdpbjogJ3Bob25lZ2FwLW5mYycsXHJcbiAgcGx1Z2luUmVmOiAnbmRlZicsXHJcbn0pXHJcbi8qKlxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVXRpbGl0eSBtZXRob2RzIGZvciBjcmVhdGluZyBuZGVmIHJlY29yZHMgZm9yIHRoZSBuZGVmIHRhZyBmb3JtYXQuXHJcbiAqIE1vdmUgcmVjb3JkcyBpbnRvIGFycmF5IGJlZm9yZSB1c2FnZS4gVGhlbiBwYXNzIGFuIGFycmF5IHRvIG1ldGhvZHMgYXMgcGFyYW1ldGVycy5cclxuICogRG8gbm90IHBhc3MgYnl0ZXMgYXMgcGFyYW1ldGVycyBmb3IgdGhlc2UgbWV0aG9kcywgY29udmVyc2lvbiBpcyBidWlsdCBpbi5cclxuICogRm9yIHVzYWdlIHdpdGggbmZjLndyaXRlKCkgYW5kIG5mYy5zaGFyZSgpXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZGVmIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9FTVBUWTogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9XRUxMX0tOT1dOOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX01JTUVfTUVESUE6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfQUJTT0xVVEVfVVJJOiBudW1iZXI7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgVE5GX0VYVEVSTkFMX1RZUEU6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfVU5LTk9XTjogbnVtYmVyO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKVxyXG4gIFRORl9VTkNIQU5HRUQ6IG51bWJlcjtcclxuICBAQ29yZG92YVByb3BlcnR5KClcclxuICBUTkZfUkVTRVJWRUQ6IG51bWJlcjtcclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgcmVjb3JkKHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZywgaWQ6IG51bWJlcltdIHwgc3RyaW5nLCBwYXlsb2FkOiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdGV4dFJlY29yZCh0ZXh0OiBzdHJpbmcsIGxhbmd1YWdlQ29kZT86IHN0cmluZywgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdXJpUmVjb3JkKHVyaTogc3RyaW5nLCBpZD86IG51bWJlcltdIHwgc3RyaW5nKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhYnNvbHV0ZVVyaVJlY29yZCh1cmk6IHN0cmluZywgcGF5bG9hZDogbnVtYmVyW10gfCBzdHJpbmcsIGlkPzogbnVtYmVyW10gfCBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIG1pbWVNZWRpYVJlY29yZChtaW1lVHlwZTogc3RyaW5nLCBwYXlsb2FkOiBzdHJpbmcpOiBOZGVmUmVjb3JkIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNtYXJ0UG9zdGVyKG5kZWZSZWNvcmRzOiBhbnlbXSwgaWQ/OiBudW1iZXJbXSB8IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZW1wdHlSZWNvcmQoKTogTmRlZlJlY29yZCB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBhbmRyb2lkQXBwbGljYXRpb25SZWNvcmQocGFja2FnZU5hbWU6IHN0cmluZyk6IE5kZWZSZWNvcmQge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgZW5jb2RlTWVzc2FnZShuZGVmUmVjb3JkczogYW55KTogYW55IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGRlY29kZU1lc3NhZ2UoYnl0ZXM6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBkZWNvZGVUbmYodG5mX2J5dGU6IGFueSk6IGFueSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBlbmNvZGVUbmYobWI6IGFueSwgbWU6IGFueSwgY2Y6IGFueSwgc3I6IGFueSwgaWw6IGFueSwgdG5mOiBhbnkpOiBhbnkge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgdG5mVG9TdHJpbmcodG5mOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdGV4dEhlbHBlcjogVGV4dEhlbHBlcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpXHJcbiAgdXJpSGVscGVyOiBVcmlIZWxwZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnTkZDJyxcclxuICBwbHVnaW46ICdwaG9uZWdhcC1uZmMnLFxyXG4gIHBsdWdpblJlZjogJ3V0aWwnLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOZmNVdGlsIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHRvSGV4KGk6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB0b1ByaW50YWJsZShpOiBudW1iZXIpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYnl0ZXNUb1N0cmluZyhpOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzdHJpbmdUb0J5dGVzKHM6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGJ5dGVzVG9IZXhTdHJpbmcoYnl0ZXM6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGlzVHlwZShyZWNvcmQ6IE5kZWZSZWNvcmQsIHRuZjogbnVtYmVyLCB0eXBlOiBudW1iZXJbXSB8IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgYXJyYXlCdWZmZXJUb0hleFN0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGhleFN0cmluZ1RvQXJyYXlCdWZmZXIoaGV4U3RyaW5nOiBzdHJpbmcpOiBBcnJheUJ1ZmZlciB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dEhlbHBlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICBkZWNvZGVQYXlsb2FkKGRhdGE6IG51bWJlcltdKTogc3RyaW5nIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgZW5jb2RlUGF5bG9hZCh0ZXh0OiBzdHJpbmcsIGxhbmc6IHN0cmluZyk6IG51bWJlcltdIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVcmlIZWxwZXIgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgZGVjb2RlUGF5bG9hZChkYXRhOiBudW1iZXJbXSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG4gIGVuY29kZVBheWxvYWQodXJpOiBzdHJpbmcpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==