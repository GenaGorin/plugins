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
import { Observable } from 'rxjs';
/**
 * Emulation constants
 */
export var Emulation;
(function (Emulation) {
    /** mPOP, SM-L200, SM-L300, SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["StarPRNT"] = "StarPRNT";
    /** SM-L200, SM-L300 */
    Emulation["StarPRNTL"] = "StarPRNTL";
    /** FVP10, TSP650II, TSP700II, TSP800II */
    Emulation["StarLine"] = "StarLine";
    /** TSP100 */
    Emulation["StarGraphic"] = "StarGraphic";
    /** BSC10 */
    Emulation["EscPos"] = "EscPos";
    /** SM-S210i, SM-S220i, SM-S230i, SM-T300i/T300, SM-T400i */
    Emulation["EscPosMobile"] = "EscPosMobile";
    /** SP700 */
    Emulation["StarDotImpact"] = "StarDotImpact";
})(Emulation || (Emulation = {}));
/**
 * Encoding constants
 */
export var Encoding;
(function (Encoding) {
    /** English */
    Encoding["USASCII"] = "US-ASCII";
    /** French, German, Portuguese, Spanish */
    Encoding["Windows1252"] = "Windows-1252";
    /** Japanese */
    Encoding["ShiftJIS"] = "Shift-JIS";
    /** Russian */
    Encoding["Windows1251"] = "Windows-1251";
    /** Simplified Chinese */
    Encoding["GB2312"] = "GB2312";
    /** Traditional Chinese */
    Encoding["Big5"] = "Big5";
    /** UFT8 */
    Encoding["UTF8"] = "UTF-8";
})(Encoding || (Encoding = {}));
/**
 * CodePageType constants
 */
export var CodePageType;
(function (CodePageType) {
    CodePageType["CP737"] = "CP737";
    CodePageType["CP772"] = "CP772";
    CodePageType["CP774"] = "CP774";
    CodePageType["CP851"] = "CP851";
    CodePageType["CP852"] = "CP852";
    CodePageType["CP855"] = "CP855";
    CodePageType["CP857"] = "CP857";
    CodePageType["CP858"] = "CP858";
    CodePageType["CP860"] = "CP860";
    CodePageType["CP861"] = "CP861";
    CodePageType["CP862"] = "CP862";
    CodePageType["CP863"] = "CP863";
    CodePageType["CP864"] = "CP864";
    CodePageType["CP865"] = "CP865";
    CodePageType["CP869"] = "CP869";
    CodePageType["CP874"] = "CP874";
    CodePageType["CP928"] = "CP928";
    CodePageType["CP932"] = "CP932";
    CodePageType["CP999"] = "CP999";
    CodePageType["CP1001"] = "CP1001";
    CodePageType["CP1250"] = "CP1250";
    CodePageType["CP1251"] = "CP1251";
    CodePageType["CP1252"] = "CP1252";
    CodePageType["CP2001"] = "CP2001";
    CodePageType["CP3001"] = "CP3001";
    CodePageType["CP3002"] = "CP3002";
    CodePageType["CP3011"] = "CP3011";
    CodePageType["CP3012"] = "CP3012";
    CodePageType["CP3021"] = "CP3021";
    CodePageType["CP3041"] = "CP3041";
    CodePageType["CP3840"] = "CP3840";
    CodePageType["CP3841"] = "CP3841";
    CodePageType["CP3843"] = "CP3843";
    CodePageType["CP3845"] = "CP3845";
    CodePageType["CP3846"] = "CP3846";
    CodePageType["CP3847"] = "CP3847";
    CodePageType["CP3848"] = "CP3848";
    CodePageType["UTF8"] = "UTF8";
    CodePageType["Blank"] = "Blank";
})(CodePageType || (CodePageType = {}));
/**
 * InternationalType constants
 */
export var InternationalType;
(function (InternationalType) {
    InternationalType["UK"] = "UK";
    InternationalType["USA"] = "USA";
    InternationalType["France"] = "France";
    InternationalType["Germany"] = "Germany";
    InternationalType["Denmark"] = "Denmark";
    InternationalType["Sweden"] = "Sweden";
    InternationalType["Italy"] = "Italy";
    InternationalType["Spain"] = "Spain";
    InternationalType["Japan"] = "Japan";
    InternationalType["Norway"] = "Norway";
    InternationalType["Denmark2"] = "Denmark2";
    InternationalType["Spain2"] = "Spain2";
    InternationalType["LatinAmerica"] = "LatinAmerica";
    InternationalType["Korea"] = "Korea";
    InternationalType["Ireland"] = "Ireland";
    InternationalType["Legal"] = "Legal";
})(InternationalType || (InternationalType = {}));
/**
 * FontStyleType constants.
 */
export var FontStyleType;
(function (FontStyleType) {
    /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
    FontStyleType["A"] = "A";
    /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
    FontStyleType["B"] = "B";
})(FontStyleType || (FontStyleType = {}));
/**
 * CutPaperAction constants.
 */
export var CutPaperAction;
(function (CutPaperAction) {
    CutPaperAction["FullCut"] = "FullCut";
    CutPaperAction["FullCutWithFeed"] = "FullCutWithFeed";
    CutPaperAction["PartialCut"] = "PartialCut";
    CutPaperAction["PartialCutWithFeed"] = "PartialCutWithFeed";
})(CutPaperAction || (CutPaperAction = {}));
/**
 * BlackMarkType constants.
 */
export var BlackMarkType;
(function (BlackMarkType) {
    BlackMarkType["Valid"] = "Valid";
    BlackMarkType["Invalid"] = "Invalid";
    BlackMarkType["ValidWithDetection"] = "ValidWithDetection";
})(BlackMarkType || (BlackMarkType = {}));
/**
 * LogoSize constants
 */
export var LogoSize;
(function (LogoSize) {
    LogoSize["Normal"] = "Normal";
    LogoSize["DoubleWidth"] = "DoubleWidth";
    LogoSize["DoubleHeight"] = "DoubleHeight";
    LogoSize["DoubleWidthDoubleHeight"] = "DoubleWidthDoubleHeight";
})(LogoSize || (LogoSize = {}));
/**
 * AlignmentPosition constants
 */
export var AlignmentPosition;
(function (AlignmentPosition) {
    AlignmentPosition["Left"] = "Left";
    AlignmentPosition["Center"] = "Center";
    AlignmentPosition["Right"] = "Right";
})(AlignmentPosition || (AlignmentPosition = {}));
/**
 * BarcodeSymbology constants
 */
export var BarcodeSymbology;
(function (BarcodeSymbology) {
    BarcodeSymbology["Code128"] = "Code128";
    BarcodeSymbology["Code39"] = "Code39";
    BarcodeSymbology["Code93"] = "Code93";
    BarcodeSymbology["ITF"] = "ITF";
    BarcodeSymbology["JAN8"] = "JAN8";
    BarcodeSymbology["JAN13"] = "JAN13";
    BarcodeSymbology["NW7"] = "NW7";
    BarcodeSymbology["UPCA"] = "UPCA";
    BarcodeSymbology["UPCE"] = "UPCE";
})(BarcodeSymbology || (BarcodeSymbology = {}));
/**
 * BarcodeWidth constants
 */
export var BarcodeWidth;
(function (BarcodeWidth) {
    BarcodeWidth["Mode1"] = "Mode1";
    BarcodeWidth["Mode2"] = "Mode2";
    BarcodeWidth["Mode3"] = "Mode3";
    BarcodeWidth["Mode4"] = "Mode4";
    BarcodeWidth["Mode5"] = "Mode5";
    BarcodeWidth["Mode6"] = "Mode6";
    BarcodeWidth["Mode7"] = "Mode7";
    BarcodeWidth["Mode8"] = "Mode8";
    BarcodeWidth["Mode9"] = "Mode9";
})(BarcodeWidth || (BarcodeWidth = {}));
/**
 * QrCodeModel constants
 */
export var QrCodeModel;
(function (QrCodeModel) {
    QrCodeModel["No1"] = "No1";
    QrCodeModel["No2"] = "No2";
})(QrCodeModel || (QrCodeModel = {}));
/**
 * QrCodeLevel constants
 */
export var QrCodeLevel;
(function (QrCodeLevel) {
    QrCodeLevel["H"] = "H";
    QrCodeLevel["L"] = "L";
    QrCodeLevel["M"] = "M";
    QrCodeLevel["Q"] = "Q";
})(QrCodeLevel || (QrCodeLevel = {}));
/**
 * BitmapConverterRotation constants
 */
export var BitmapConverterRotation;
(function (BitmapConverterRotation) {
    BitmapConverterRotation["Normal"] = "Normal";
    BitmapConverterRotation["Left90"] = "Left90";
    BitmapConverterRotation["Right90"] = "Right90";
    BitmapConverterRotation["Rotate180"] = "Rotate180";
})(BitmapConverterRotation || (BitmapConverterRotation = {}));
var StarPRNTOriginal = /** @class */ (function (_super) {
    __extends(StarPRNTOriginal, _super);
    function StarPRNTOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for Emulation
         */
        _this.Emulation = {
            StarPRNT: 'StarPRNT',
            StarPRNTL: 'StarPRNTL',
            StarLine: 'StarLine',
            StarGraphic: 'StarGraphic',
            EscPos: 'EscPos',
            EscPosMobile: 'EscPosMobile',
            StarDotImpact: 'StarDotImpact',
        };
        /**
         * Constant for possible Encoding
         */
        _this.Encoding = {
            USASCII: 'US-ASCII',
            Windows1252: 'Windows-1252',
            ShiftJIS: 'Shift-JIS',
            Windows1251: 'Windows-1251',
            GB2312: 'GB2312',
            Big5: 'Big5',
            UTF8: 'UTF-8',
        };
        /**
         * CodePageType constants
         */
        _this.CodePageType = {
            CP737: 'CP737',
            CP772: 'CP772',
            CP774: 'CP774',
            CP851: 'CP851',
            CP852: 'CP852',
            CP855: 'CP855',
            CP857: 'CP857',
            CP858: 'CP858',
            CP860: 'CP860',
            CP861: 'CP861',
            CP862: 'CP862',
            CP863: 'CP863',
            CP864: 'CP864',
            CP865: 'CP865',
            CP869: 'CP869',
            CP874: 'CP874',
            CP928: 'CP928',
            CP932: 'CP932',
            CP999: 'CP999',
            CP1001: 'CP1001',
            CP1250: 'CP1250',
            CP1251: 'CP1251',
            CP1252: 'CP1252',
            CP2001: 'CP2001',
            CP3001: 'CP3001',
            CP3002: 'CP3002',
            CP3011: 'CP3011',
            CP3012: 'CP3012',
            CP3021: 'CP3021',
            CP3041: 'CP3041',
            CP3840: 'CP3840',
            CP3841: 'CP3841',
            CP3843: 'CP3843',
            CP3845: 'CP3845',
            CP3846: 'CP3846',
            CP3847: 'CP3847',
            CP3848: 'CP3848',
            UTF8: 'UTF8',
            Blank: 'Blank',
        };
        /**
         * Constant for possible InternationalType
         */
        _this.InternationalType = {
            UK: 'UK',
            USA: 'USA',
            France: 'France',
            Germany: 'Germany',
            Denmark: 'Denmark',
            Sweden: 'Sweden',
            Italy: 'Italy',
            Spain: 'Spain',
            Japan: 'Japan',
            Norway: 'Norway',
            Denmark2: 'Denmark2',
            Spain2: 'Spain2',
            LatinAmerica: 'LatinAmerica',
            Korea: 'Korea',
            Ireland: 'Ireland',
            Legal: 'Legal',
        };
        /**
         * Constant for possible FontStyleType
         */
        _this.FontStyleType = {
            /** Font-A (12 x 24 dots) / Specify 7 x 9 font (half dots) */
            A: 'A',
            /** Font-B (9 x 24 dots) / Specify 5 x 9 font (2P-1) */
            B: 'B',
        };
        /**
         * Constant for possible CutPaperAction
         */
        _this.CutPaperAction = {
            FullCut: 'FullCut',
            FullCutWithFeed: 'FullCutWithFeed',
            PartialCut: 'PartialCut',
            PartialCutWithFeed: 'PartialCutWithFeed',
        };
        /**
         * Constant for possible BlackMarkType
         */
        _this.BlackMarkType = {
            Valid: 'Valid',
            Invalid: 'Invalid',
            ValidWithDetection: 'ValidWithDetection',
        };
        /**
         * Constant for possible AlignmentPosition
         */
        _this.AlignmentPosition = {
            Left: 'Left',
            Center: 'Center',
            Right: 'Right',
        };
        /**
         * Constant for possible LogoSize
         */
        _this.LogoSize = {
            Normal: 'Normal',
            DoubleWidth: 'DoubleWidth',
            DoubleHeight: 'DoubleHeight',
            DoubleWidthDoubleHeight: 'DoubleWidthDoubleHeight',
        };
        /**
         * Constant for possible BarcodeSymbology
         */
        _this.BarcodeSymbology = {
            Code128: 'Code128',
            Code39: 'Code39',
            Code93: 'Code93',
            ITF: 'ITF',
            JAN8: 'JAN8',
            JAN13: 'JAN13',
            NW7: 'NW7',
            UPCA: 'UPCA',
            UPCE: 'UPCE',
        };
        /**
         * Constant for possible BarcodeWidth
         */
        _this.BarcodeWidth = {
            Mode1: 'Mode1',
            Mode2: 'Mode2',
            Mode3: 'Mode3',
            Mode4: 'Mode4',
            Mode5: 'Mode5',
            Mode6: 'Mode6',
            Mode7: 'Mode7',
            Mode8: 'Mode8',
            Mode9: 'Mode9',
        };
        /**
         * Constant for possible QrCodeModel
         */
        _this.QrCodeModel = {
            No1: 'No1',
            No2: 'No2',
        };
        /**
         * Constant for possible QrCodeLevel
         */
        _this.QrCodeLevel = {
            H: 'H',
            L: 'L',
            M: 'M',
            Q: 'Q',
        };
        /**
         * Constant for possible BitmapConverterRotation
         */
        _this.BitmapConverterRotation = {
            Normal: 'Normal',
            Left90: 'Left90',
            Right90: 'Right90',
            Rotate180: 'Rotate180',
        };
        return _this;
    }
    StarPRNTOriginal.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNTOriginal.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNTOriginal.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNTOriginal.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNTOriginal.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNTOriginal.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNTOriginal.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNTOriginal.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNTOriginal.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNTOriginal.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNTOriginal.pluginName = "StarPRNT";
    StarPRNTOriginal.plugin = "cordova-plugin-starprnt";
    StarPRNTOriginal.pluginRef = "starprnt";
    StarPRNTOriginal.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNTOriginal.platforms = ["Android", "iOS"];
    return StarPRNTOriginal;
}(AwesomeCordovaNativePlugin));
var StarPRNT = new StarPRNTOriginal();
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Rhci1wcm50L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFrWmxDOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksU0FlWDtBQWZELFdBQVksU0FBUztJQUNuQixvRkFBb0Y7SUFDcEYsa0NBQXFCLENBQUE7SUFDckIsdUJBQXVCO0lBQ3ZCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUEwQztJQUMxQyxrQ0FBcUIsQ0FBQTtJQUNyQixhQUFhO0lBQ2Isd0NBQTJCLENBQUE7SUFDM0IsWUFBWTtJQUNaLDhCQUFpQixDQUFBO0lBQ2pCLDREQUE0RDtJQUM1RCwwQ0FBNkIsQ0FBQTtJQUM3QixZQUFZO0lBQ1osNENBQStCLENBQUE7QUFDakMsQ0FBQyxFQWZXLFNBQVMsS0FBVCxTQUFTLFFBZXBCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxRQWVYO0FBZkQsV0FBWSxRQUFRO0lBQ2xCLGNBQWM7SUFDZCxnQ0FBb0IsQ0FBQTtJQUNwQiwwQ0FBMEM7SUFDMUMsd0NBQTRCLENBQUE7SUFDNUIsZUFBZTtJQUNmLGtDQUFzQixDQUFBO0lBQ3RCLGNBQWM7SUFDZCx3Q0FBNEIsQ0FBQTtJQUM1Qix5QkFBeUI7SUFDekIsNkJBQWlCLENBQUE7SUFDakIsMEJBQTBCO0lBQzFCLHlCQUFhLENBQUE7SUFDYixXQUFXO0lBQ1gsMEJBQWMsQ0FBQTtBQUNoQixDQUFDLEVBZlcsUUFBUSxLQUFSLFFBQVEsUUFlbkI7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFlBd0NYO0FBeENELFdBQVksWUFBWTtJQUN0QiwrQkFBZSxDQUFBO0lB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SCxpQkFBVyxHQUFHO1lBQ1osQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7U0FDUCxDQUFDO1FBRUY7O1dBRUc7UUFDSCw2QkFBdUIsR0FBRztZQUN4QixNQUFNLEVBQUUsUUFBUTtZQUNoQixNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsV0FBVztTQUN2QixDQUFDOzs7SUFTRixnQ0FBYSxhQUFDLElBQVk7SUFZMUIsOEJBQVcsYUFBQyxJQUFZLEVBQUUsU0FBaUI7SUFhM0MsK0JBQVksYUFBQyxJQUFpQixFQUFFLFNBQWlCLEVBQUUsUUFBa0I7SUFhckUscUNBQWtCLGFBQUMsSUFBaUIsRUFBRSxTQUFpQixFQUFFLFNBQW9CO0lBYTdFLDZCQUFVLGFBQUMsSUFBaUIsRUFBRSxTQUFpQixFQUFFLFFBQWtCO0lBWW5FLGlDQUFjLGFBQUMsSUFBaUIsRUFBRSxTQUFpQjtJQWFuRCx3QkFBSyxhQUFDLElBQWlCLEVBQUUsU0FBaUIsRUFBRSxhQUE0QjtJQWdCeEUsMEJBQU8sYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxnQkFBeUI7SUFhbEUsNEJBQVM7SUFXVCw2QkFBVTs7Ozs7O21CQTc4Qlo7RUEwb0I4QiwwQkFBMEI7U0FBM0MsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyIHtcclxuICAvKipcclxuICAgKiBQcmludGVyIG1vZGVsIG5hbWUgYW5kIG1vZGVsIG51bWJlclxyXG4gICAqL1xyXG4gIG1vZGVsTmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBNYWMgQWRkcmVzc1xyXG4gICAqL1xyXG4gIG1hY0FkZHJlc3M/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgcG9ydCBuYW1lIHVzZWQgdG8gY3JlYXRlIGEgbmV3IHBvcnQgaW5zdGFuY2Ugb2YgU01Qb3J0IG9yIFN0YXJJT0V4dE1hbmFnZXJcclxuICAgKi9cclxuICBwb3J0TmFtZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiBVU0IgU2VyaWFsIE51bWJlciAoVVNCIFByaW50ZXJzIE9ubHkpXHJcbiAgICovXHJcbiAgVVNCU2VyaWFsTnVtYmVyPzogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBBcnJheSBvZiBQcmludGVyIG9iamVjdHMgcmV0dXJuZWQgYnkgdGhlIHBvcnREaXNjb3ZlcnkoKSBmdW5jdGlvblxyXG4gKi9cclxuZXhwb3J0IHR5cGUgUHJpbnRlcnMgPSBBcnJheTxQcmludGVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRlclN0YXR1cyB7XHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBPbmxpbmUvT2ZmbGluZSBzdGF0dXNcclxuICAgKi9cclxuICBvZmZsaW5lPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogIFByaW50ZXIgbW9kZWwgbmFtZSBhbmQgbW9kZWwgbnVtYmVyXHJcbiAgICovXHJcbiAgTW9kZWxOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIGNvdmVyIHN0YXR1c1xyXG4gICAqL1xyXG4gIGNvdmVyT3Blbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgUGFwZXIgQ3V0dGVyIHN0YXR1c1xyXG4gICAqL1xyXG4gIGN1dHRlckVycm9yPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBQYXBlciBzdGF0dXNcclxuICAgKi9cclxuICByZWNlaXB0UGFwZXJFbXB0eT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgRmlybXdhcmUgaW5mb3JtYXRpb25cclxuICAgKi9cclxuICBGaXJtd2FyZVZlcnNpb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRPYmoge1xyXG4gIC8qKlxyXG4gICAqIHN0cmluZyBjb250YWluaW5nIHRoZSB0ZXh0IHRvIHByaW50LCBFeGFtcGxlOiBcIlN0YXIgQ2xvdGhpbmcgQm91dGlxdWVcXG4xMjMgU3RhciBSb2FkXFxuQ2l0eSwgU3RhdGUgMTIzNDVcXG5cXG5cIlxyXG4gICAqL1xyXG4gIHRleHQ6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIFNlbmRzIGEgUGFydGlhbEN1dFdpdGhGZWVkIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIsIGRlZmF1bHRzIHRvIHRydWVcclxuICAgKi9cclxuICBjdXRSZWNlaXB0PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yIC0gRGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIG9wZW5DYXNoRHJhd2VyPzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFJhc3Rlck9iaiBleHRlbmRzIFByaW50T2JqIHtcclxuICAvKipcclxuICAgKiBGb250IHNpemUgbnVtYmVyLCBkZWZhdWx0cyB0byAyNVxyXG4gICAqL1xyXG4gIGZvbnRTaXplPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQYXBlciB3aWR0aCAoVW5pdHM6IERvdHMpLiAyIGluY2hlczogMzg0LCAzIGluY2hlczogNTc2LCA0IGluY2hlczogODMyLCBFU0NQb3MgMyBpbmNoZXM6IDUxMiwgRG90IDMgaW5jaGVzOiAyMTAuIERlZmF1bHRzIHRvIDU3NlxyXG4gICAqL1xyXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZU9iaiB7XHJcbiAgLyoqXHJcbiAgICogSW1hZ2UgVVJJIHRvIHByaW50LCB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnlcclxuICAgKi9cclxuICB1cmk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSW1hZ2Ugd2lkdGggKFVuaXRzOiBEb3RzKSBkZWZhdWx0cyB0byA1NzZcclxuICAgKi9cclxuICBwYXBlcldpZHRoPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXHJcbiAgICovXHJcbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUHJpbnRDb21tYW5kIHtcclxuICAvKipcclxuICAgKiBDaGFyYWN0aGVyIGVuY29kaW5nIGlzIHVzZWQgdG8gZ2V0Qnl0ZSBkYXRhIGZyb20gYWxsIHN1YnNlcXVlbnQgY29tbWFuZHMuIERlZmF1bHQgJ1VTLUFTQ0lJJ1xyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5FbmNvZGluZyBvciB0aGUgRW5jb2RpbmcgZW51bS5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kRW5jb2Rpbmc6J1VTLUFTQ0lJJ31cclxuICAgKi9cclxuICBhcHBlbmRFbmNvZGluZz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGNvZGUgcGFnZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kcyBwcm9wZXJ0eS5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIERlZmluZWQgaW4gU3RhclBSTlQuQ29kZVBhZ2VUeXBlIG9yIHRoZSBDb2RlUGFnZVR5cGUgZW51bS5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ29kZVBhZ2U6J0NQODU4J31cclxuICAgKi9cclxuICBhcHBlbmRDb2RlUGFnZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kOlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxyXG4gICAqL1xyXG4gIGFwcGVuZD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoVGV4dCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kUmF3OlwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwifVxyXG4gICAqL1xyXG4gIGFwcGVuZFJhdz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxyXG4gICAqL1xyXG4gIGFwcGVuZEJ5dGVzPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIERhdGEgKENvbW1hbmQpIGlzIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYW4gYXJyYXkgb2YgYnl0ZXMuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFJhd0J5dGVzOlsweDQ4LCAweDY1LCAweDZjLCAweDZjLCAweDZmLCAweDIwLCAweDU3LCAweDZmLCAweDcyLCAweDZjLCAweDY0LCAweDJlXX1cclxuICAgKi9cclxuICBhcHBlbmRSYXdCeXRlcz86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29tbWFuZCBvZiB0aGUgY2hhcmFjdGVyIHNwYWNlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBDaGFyYWN0ZXIgU3BhY3MgKFVuaXQ6IERvdHMpIEV4YW1wbGU6IDRcclxuICAgKi9cclxuICBhcHBlbmRDaGFyYWN0ZXJTcGFjZT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kRW1waGFzaXM6XCJTQUxFXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kRW1waGFzaXM/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqICBFbmFibGUgZW1waGFzaXMgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUVtcGhhc2lzOnRydWV9XHJcbiAgICovXHJcbiAgZW5hYmxlRW1waGFzaXM/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGludmVydCBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kSW52ZXJ0OlwiUmVmdW5kcyBhbmQgRXhjaGFuZ2VzXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kSW52ZXJ0Pzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqICBFbmFibGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHtlbmFibGVJbnZlcnQ6dHJ1ZX1cclxuICAgKi9cclxuICBlbmFibGVJbnZlcnQ/OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7YXBwZW5kVW5kZXJsaW5lOlwiMzAgZGF5c1wifVxyXG4gICAqL1xyXG4gIGFwcGVuZFVuZGVybGluZT86IHN0cmluZztcclxuICAvKipcclxuICAgKiAgRW5hYmxlIHVuZGVyIGxpbmUgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZVVuZGVybGluZTp0cnVlfVxyXG4gICAqL1xyXG4gIGVuYWJsZVVuZGVybGluZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBpbnRlcm5hdGlvbmFsIGNoYXJhY3RlciBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5JbnRlcm5hdGlvbmFsVHlwZSBvciB0aGUgSW50ZXJuYXRpb25hbFR5cGUgZW51bS5cclxuICAgKiAnVUsnIHwgJ1VTQScgfCAnRnJhbmNlJyB8ICdHZXJtYW55JyB8ICdEZW5tYXJrJyB8ICdTd2VkZW4nIHwgJ0l0YWx5JyB8ICdTcGFpbicgfCAnSmFwYW4nIHwgJ05vcndheScgfCAnRGVubWFyazInIHwgJ1NwYWluMicgfCAnTGF0aW5BbWVyaWNhJyB8ICdLb3JlYScgfCAnSXJlbGFuZCcgfCAnTGVnYWwnXHJcbiAgICogRXhhbXBsZSB7YXBwZW5kSW50ZXJuYXRpb25hbDpJbnRlcm5hdGlvbmFsVHlwZS5VS31cclxuICAgKi9cclxuICBhcHBlbmRJbnRlcm5hdGlvbmFsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBMaW5lIGZlZWQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gUGFwZXIgZmVlZCB1bml0cyAoVW5pdHM6IExpbmVzKSBFeGFtcGxlOiAyXHJcbiAgICovXHJcbiAgYXBwZW5kTGluZUZlZWQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVuaXQgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogRG90cykgRXhhbXBsZTogNjRcclxuICAgKi9cclxuICBhcHBlbmRVbml0RmVlZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IGNvbW1hbmQgb2YgdGhlIGxpbmUgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIExpbmUgc3BhY2VzIChVbml0czogRG90cykgRXhhbXBsZTogMzJcclxuICAgKi9cclxuICBhcHBlbmRMaW5lU3BhY2U/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBmb250IHN0eWxlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5Gb250U3R5bGVUeXBlIG9yIHRoZSBGb250U3R5bGVUeXBlIGVudW0uICdBJyB8ICdCJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRGb250U3R5bGU6Rm9udFN0eWxlVHlwZS5BfVxyXG4gICAqL1xyXG4gIGFwcGVuZEZvbnRTdHlsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUGFwZXIgY3V0IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkN1dFBhcGVyQWN0aW9uIG9yIHRoZSBDdXRQYXBlckFjdGlvbiBlbnVtLiAnRnVsbEN1dCcgfCAnRnVsbEN1dFdpdGhGZWVkJyB8ICdQYXJ0aWFsQ3V0JyB8ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEN1dFBhcGVyOkN1dFBhcGVyQWN0aW9uLlBhcnRpYWxDdXRXaXRoRmVlZH1cclxuICAgKi9cclxuICBhcHBlbmRDdXRQYXBlcj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQmxhY2sgbWFyayBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CbGFja01hcmtUeXBlIG9yIHRoZSBCbGFja01hcmtUeXBlIGVudW0uICdWYWxpZCcgfCAnSW52YWxpZCcgfCAnVmFsaWRXaXRoRGV0ZWN0aW9uJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCbGFja01hcms6IEJsYWNrTWFya1R5cGUuVmFsaWR9XHJcbiAgICovXHJcbiAgYXBwZW5kQmxhY2tNYXJrPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBYnNvbHV0ZSBwb3NpdGlvbiBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiAoVW5pdDogRG90cykuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xyXG4gICAqIEV4YW1wbGUxOiBBcHBlbmQgZGF0YSB3aXRoIEFic29sdXRlIHBvc2l0aW9uIHthcHBlbmRBYnNvbHV0ZVBvc2l0aW9uOjQwLCBkYXRhOiBcIlRleHQgd2l0aCBhYnNvbHV0ZSBwb3NpdGlvblwifVxyXG4gICAqIEV4YW1wbGUyOiBBcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24gdG8gc3Vic2VxdWVudCBjb21tYW5kczoge2FwcGVuZEFic29sdXRlUG9zaXRpb246NDB9XHJcbiAgICovXHJcbiAgYXBwZW5kQWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQWxpZ25tZW50IGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFNlbmQgaW4gY29uanVuY3Rpb24gd2l0aCB0aGUgZGF0YSBwcm9wZXJ0eSB0byBhcHBlbmQgYWxpZ25tZW50IHBvc2l0aW9uIGp1c3QgdG8gdGhhdCBzdHJpbmdcclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cclxuICAgKiBFeGFtcGxlMSBBcHBlbmQgZGF0YSB3aXRoIEFsaWdubWVudCBwb3NpdGlvbjoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIsIGRhdGE6IFwiVGV4dCB3aXRoIGNlbnRlcmVkIHBvc2l0aW9uXCJ9XHJcbiAgICogRXhhbXBsZTIgQXBwZW5kIGFic29sdXRlIHBvc2l0aW9uIHRvIHN1YnNlcXVlbnQgY29tbWFuZHM6IHthcHBlbmRBbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfVxyXG4gICAqL1xyXG4gIGFwcGVuZEFsaWdubWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSG9yaXpvbnRhbCB0YWIgc2V0L2NsZWFyIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChPbmx5IHdvcmtzIGZvciBjZXJ0YWluIHByaW50ZXIgbW9kZWxzLCBjaGVjayB0aGUgc3RhclNESyBkb2N1bWVudGF0aW9uIGZvciBkZXRhaWxzKVxyXG4gICAqIEFycmF5IG9mIGhvcml6b250YWwgdGFiIHBvc2l0aW9ucyAoVW5pdHM6IEFOSyBjaGFyYWN0ZXIgcGl0Y2gpLiBTcGVjaWZ5aW5nIGVtcHR5IGFycmF5IGRlbGV0ZXMgYWxsIGN1cnJlbnRseSBzZXQgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246WzE1LCAzNV19XHJcbiAgICogRGVsZXRlIHBvc2l0aW9ucyBFeGFtcGxlOiB7YXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uOltdfVxyXG4gICAqL1xyXG4gIGFwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbj86IG51bWJlcltdO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBsb2dvIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUaGUgbG9nbyBoYXMgdG8gYmUgdXBsb2FkZWQgdG8gdGhlIHByaW50ZXIgdXNpbmcgdGhlIFN0YXIgUHJpbnQgdXRpbGl0eS5cclxuICAgKiBTZW5kIGluIGNvbmp1Y3Rpb24gd2l0aCB0aGUgbG9nb1NpemUgcHJvcGVydHkgdG8gc2V0IHRoZSBsb2dvIHNpemVcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxfVxyXG4gICAqIEV4YW1wbGUgd2l0aCBMb2dvU2l6ZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XHJcbiAgICovXHJcbiAgYXBwZW5kTG9nbz86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRMb2dvIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkxvZ29TaXplIG9yIHRoZSBMb2dvU2l6ZSBlbnVtLiAnTm9ybWFsJyB8ICdEb3VibGVXaWR0aCcgfCAnRG91YmxlSGVpZ2h0JyB8ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCc7XHJcbiAgICogRXhhbXBsZToge2FwcGVuZExvZ286MSwgbG9nb1NpemU6TG9nb1NpemUuRG91YmxlV2lkdGhEb3VibGVIZWlnaHR9XHJcbiAgICovXHJcbiAgbG9nb1NpemU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJhcmNvZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBCYXJjb2RlU3ltYm9sb2d5LCBCYXJjb2RlV2lkdGgsIGhlaWdodCwgaHJpLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6XCJ7QlN0YXJcIiwgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjgsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTIsIGhlaWdodDo0MCwgaHJpOnRydWUgfVxyXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWJzb2x1dGVQb3NpdGlvbjo0MCB9XHJcbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDp7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSwgYWxpZ25tZW50OmFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXIgfVxyXG4gICAqL1xyXG4gIGFwcGVuZEJhcmNvZGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5CYXJjb2RlU3ltYm9sb2d5IG9yIHRoZSBCYXJjb2RlU3ltYm9sb2d5IGVudW0uXHJcbiAgICogJ0NvZGUxMjgnIHwgJ0NvZGUzOScgfCAnQ29kZTkzJyB8ICdJVEYnIHwgJ0pBTjgnIHwgJ0pBTjEzJyB8ICdOVzcnIHwgJ1VQQ0EnIHwgJ1VQQ0UnIHxcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgQmFyY29kZVN5bWJvbG9neTpCYXJjb2RlU3ltYm9sb2d5LkNvZGUxMjh9XHJcbiAgICovXHJcbiAgQmFyY29kZVN5bWJvbG9neT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVXaWR0aCBvciB0aGUgQmFyY29kZVdpZHRoIGVudW0uXHJcbiAgICogTW9kZTEgfCBNb2RlMiB8IE1vZGUzIHwgTW9kZTQgfCBNb2RlNSB8IE1vZGU2IHwgTW9kZTcgfCBNb2RlOCB8IE1vZGU5XHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIEJhcmNvZGVXaWR0aDpCYXJjb2RlV2lkdGguTW9kZTJ9XHJcbiAgICovXHJcbiAgQmFyY29kZVdpZHRoPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cclxuICAgKiBVbmRlci1iYXIgY2hhcmFjdGVycy4gdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWRcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgaHJpOnRydWV9XHJcbiAgICovXHJcbiAgaHJpPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXHJcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgaGVpZ2h0OjQwfVxyXG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCBoZWlnaHQ6NDB9XHJcbiAgICovXHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kIG9yIHRoZSBhcHBlbmRNdWx0aXBsZSBjb21tYW5kIChVbml0czpEb3RzKVxyXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgd2lkdGg6NTc2fVxyXG4gICAqIGFwcGVuZE11bHRpcGxlOiB7YXBwZW5kTXVsdGlwbGU6J3RleHQgdG8gcHJpbnQnLCB3aWR0aDo0MH1cclxuICAgKi9cclxuICB3aWR0aD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxyXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXHJcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXHJcbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFic29sdXRlUG9zaXRpb246NDB9LlxyXG4gICAqL1xyXG4gIGFic29sdXRlUG9zaXRpb24/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQsIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQsIG9yIHRoZSBhcHBlbmRRckNvZGUgY29tbWFuZCAoVW5pdHM6RG90cylcclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQWxpZ25tZW50UG9zaXRpb24gb3IgdGhlIEFsaWdubWVudFBvc2l0aW9uIGVudW0uICdMZWZ0JyB8ICdDZW50ZXInIHwgJ1JpZ2h0Jy5cclxuICAgKiBhcHBlbmRCaXRtYXAgRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxyXG4gICAqIGFwcGVuZEJhcmNvZGUgRXhhbXBsZToge2FwcGVuZEJhcmNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxyXG4gICAqIGFwcGVuZFFyQ29kZSBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBhbGlnbm1lbnQ6QWxpZ25tZW50UG9zaXRpb24uQ2VudGVyfS5cclxuICAgKi9cclxuICBhbGlnbm1lbnQ/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbGVjdCBjb21tYW5kIG9mIHRoZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXHJcbiAgICogRXhhbXBsZToge2FwcGVuZE11bHRpcGxlOlwiICAgJDE1Ni45NVxcblwiLCB3aWR0aDoyLCBoZWlnaHQ6Mn0uXHJcbiAgICovXHJcbiAgYXBwZW5kTXVsdGlwbGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVuYWJsZSBtdWx0aXBsZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIEFkZGl0aW9uYWwgcHJvcGVydGllczogd2lkdGg6bnVtYmVyLCBoZWlnaHQ6bnVtYmVyXHJcbiAgICogRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOnRydWUsIHdpZHRoOjIsIGhlaWdodDoyfVxyXG4gICAqIERpc2FibGUgRXhhbXBsZToge2VuYWJsZU11bHRpcGxlOmZhbHNlfVxyXG4gICAqL1xyXG4gIGVuYWJsZU11bHRpcGxlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgUVIgY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cclxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IFFyQ29kZU1vZGVsLCBRckNvZGVMZXZlbCwgY2VsbCwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDh9LlxyXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kUXJDb2RlOlwie0JTdGFyXCIsIFFyQ29kZU1vZGVsOlwiTm8yXCIsIFFyQ29kZUxldmVsOlwiTFwiLCBjZWxsOiA4LCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxyXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFsaWdubWVudDpcIkNlbnRlclwiIH0uXHJcbiAgICovXHJcbiAgYXBwZW5kUXJDb2RlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVNb2RlbCBvciB0aGUgUXJDb2RlTW9kZWwgZW51bS4gJ05vMScgfCAnTm8yJyBEZWZhdWx0ICdObzInXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgUXJDb2RlTW9kZWw6UXJDb2RlTW9kZWwuTm8xfVxyXG4gICAqL1xyXG4gIFFyQ29kZU1vZGVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5RckNvZGVMZXZlbCBvciB0aGUgUXJDb2RlTGV2ZWwgZW51bS4gJ05vMScgfCAnTm8yJy4gRGVmYXVsdCAnSCdcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBRckNvZGVMZXZlbDpRckNvZGVMZXZlbC5IfVxyXG4gICAqL1xyXG4gIFFyQ29kZUxldmVsPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kLiBRUkNvZGUgQ2VsbCBzaXplLiBEZWZhdWx0IDQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgY2VsbDo4fVxyXG4gICAqL1xyXG4gIGNlbGw/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGJpdG1hcCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gVGFrZXMgYSBzdHJpbmcgaW1hZ2UgVVJJXHJcbiAgICogdGhpcyBjYW4gYmUgb2J0YWluZWQgdmlhIHRoZSBjYW1lcmEgb3IgcGhvdG8gbGlicmFyeSBvciBhcyBhIHN0YXRpYyByZXNvdXJjZSBzYXZlZCBvbiB0aGUgcGhvbmUgbWVtb3J5LlxyXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogZGlmZnVzaW9uLCB3aWR0aCwgYm90aFNjYWxlLCByb3RhdGlvbiwgYWJzb2x1dGVQb3NpdGlvbiwgYWxpZ25tZW50LlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlfVxyXG4gICAqIEV4YW1wbGUgd2l0aCBhYnNvbHV0ZVBvc2l0aW9uOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWJzb2x1dGVQb3NpdGlvbjogNDAgfS5cclxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiB0cnVlLCB3aWR0aDo1NzYsIGJvdGhTY2FsZTogdHJ1ZSwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cclxuICAgKi9cclxuICBhcHBlbmRCaXRtYXA/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuIFJhbmRvbSBkaXRoZXI6IHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogZmFsc2UgfVxyXG4gICAqL1xyXG4gIGRpZmZ1c2lvbj86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuIEhlaWdodCBpcyBjaGFuZ2VkIGFjY29yZGluZyB0byB0aGUgY29udmVyc2lvbiByYXRlIG9mIHRoZSB3aWR0aCBwcm9wZXJ0eS5cclxuICAgKiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZC4gRGVmYXVsdCB0cnVlLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBib3RoU2NhbGU6IHRydWUgfVxyXG4gICAqL1xyXG4gIGJvdGhTY2FsZT86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJpdG1hcENvbnZlcnRlclJvdGF0aW9uIG9yIHRoZSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBlbnVtLlxyXG4gICAqICdOb3JtYWwnIHwgJ0xlZnQ5MCcgfCAnUmlnaHQ5MCcgfCAnUm90YXRlMTgwJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCByb3RhdGlvbjogQml0bWFwQ29udmVydGVyUm90YXRpb24uTGVmdDkwIH1cclxuICAgKi9cclxuICByb3RhdGlvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogc2VuZHMgYSBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWwgbnVtYmVyOiBFeGFtcGxlOiAxID0gTm8xLCAyID0gTm8yXHJcbiAgICovXHJcbiAgb3BlbkNhc2hEcmF3ZXI/OiBudW1iZXI7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbXVsYXRpb24gY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBFbXVsYXRpb24ge1xyXG4gIC8qKiBtUE9QLCBTTS1MMjAwLCBTTS1MMzAwLCBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xyXG4gIFN0YXJQUk5UID0gJ1N0YXJQUk5UJyxcclxuICAvKiogU00tTDIwMCwgU00tTDMwMCAqL1xyXG4gIFN0YXJQUk5UTCA9ICdTdGFyUFJOVEwnLFxyXG4gIC8qKiBGVlAxMCwgVFNQNjUwSUksIFRTUDcwMElJLCBUU1A4MDBJSSAqL1xyXG4gIFN0YXJMaW5lID0gJ1N0YXJMaW5lJyxcclxuICAvKiogVFNQMTAwICovXHJcbiAgU3RhckdyYXBoaWMgPSAnU3RhckdyYXBoaWMnLFxyXG4gIC8qKiBCU0MxMCAqL1xyXG4gIEVzY1BvcyA9ICdFc2NQb3MnLFxyXG4gIC8qKiBTTS1TMjEwaSwgU00tUzIyMGksIFNNLVMyMzBpLCBTTS1UMzAwaS9UMzAwLCBTTS1UNDAwaSAqL1xyXG4gIEVzY1Bvc01vYmlsZSA9ICdFc2NQb3NNb2JpbGUnLFxyXG4gIC8qKiBTUDcwMCAqL1xyXG4gIFN0YXJEb3RJbXBhY3QgPSAnU3RhckRvdEltcGFjdCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBFbmNvZGluZyBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEVuY29kaW5nIHtcclxuICAvKiogRW5nbGlzaCAqL1xyXG4gIFVTQVNDSUkgPSAnVVMtQVNDSUknLFxyXG4gIC8qKiBGcmVuY2gsIEdlcm1hbiwgUG9ydHVndWVzZSwgU3BhbmlzaCAqL1xyXG4gIFdpbmRvd3MxMjUyID0gJ1dpbmRvd3MtMTI1MicsXHJcbiAgLyoqIEphcGFuZXNlICovXHJcbiAgU2hpZnRKSVMgPSAnU2hpZnQtSklTJyxcclxuICAvKiogUnVzc2lhbiAqL1xyXG4gIFdpbmRvd3MxMjUxID0gJ1dpbmRvd3MtMTI1MScsXHJcbiAgLyoqIFNpbXBsaWZpZWQgQ2hpbmVzZSAqL1xyXG4gIEdCMjMxMiA9ICdHQjIzMTInLFxyXG4gIC8qKiBUcmFkaXRpb25hbCBDaGluZXNlICovXHJcbiAgQmlnNSA9ICdCaWc1JyxcclxuICAvKiogVUZUOCAqL1xyXG4gIFVURjggPSAnVVRGLTgnLFxyXG59XHJcblxyXG4vKipcclxuICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gQ29kZVBhZ2VUeXBlIHtcclxuICBDUDczNyA9ICdDUDczNycsXHJcbiAgQ1A3NzIgPSAnQ1A3NzInLFxyXG4gIENQNzc0ID0gJ0NQNzc0JyxcclxuICBDUDg1MSA9ICdDUDg1MScsXHJcbiAgQ1A4NTIgPSAnQ1A4NTInLFxyXG4gIENQODU1ID0gJ0NQODU1JyxcclxuICBDUDg1NyA9ICdDUDg1NycsXHJcbiAgQ1A4NTggPSAnQ1A4NTgnLFxyXG4gIENQODYwID0gJ0NQODYwJyxcclxuICBDUDg2MSA9ICdDUDg2MScsXHJcbiAgQ1A4NjIgPSAnQ1A4NjInLFxyXG4gIENQODYzID0gJ0NQODYzJyxcclxuICBDUDg2NCA9ICdDUDg2NCcsXHJcbiAgQ1A4NjUgPSAnQ1A4NjUnLFxyXG4gIENQODY5ID0gJ0NQODY5JyxcclxuICBDUDg3NCA9ICdDUDg3NCcsXHJcbiAgQ1A5MjggPSAnQ1A5MjgnLFxyXG4gIENQOTMyID0gJ0NQOTMyJyxcclxuICBDUDk5OSA9ICdDUDk5OScsXHJcbiAgQ1AxMDAxID0gJ0NQMTAwMScsXHJcbiAgQ1AxMjUwID0gJ0NQMTI1MCcsXHJcbiAgQ1AxMjUxID0gJ0NQMTI1MScsXHJcbiAgQ1AxMjUyID0gJ0NQMTI1MicsXHJcbiAgQ1AyMDAxID0gJ0NQMjAwMScsXHJcbiAgQ1AzMDAxID0gJ0NQMzAwMScsXHJcbiAgQ1AzMDAyID0gJ0NQMzAwMicsXHJcbiAgQ1AzMDExID0gJ0NQMzAxMScsXHJcbiAgQ1AzMDEyID0gJ0NQMzAxMicsXHJcbiAgQ1AzMDIxID0gJ0NQMzAyMScsXHJcbiAgQ1AzMDQxID0gJ0NQMzA0MScsXHJcbiAgQ1AzODQwID0gJ0NQMzg0MCcsXHJcbiAgQ1AzODQxID0gJ0NQMzg0MScsXHJcbiAgQ1AzODQzID0gJ0NQMzg0MycsXHJcbiAgQ1AzODQ1ID0gJ0NQMzg0NScsXHJcbiAgQ1AzODQ2ID0gJ0NQMzg0NicsXHJcbiAgQ1AzODQ3ID0gJ0NQMzg0NycsXHJcbiAgQ1AzODQ4ID0gJ0NQMzg0OCcsXHJcbiAgVVRGOCA9ICdVVEY4JyxcclxuICBCbGFuayA9ICdCbGFuaycsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBJbnRlcm5hdGlvbmFsVHlwZSBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEludGVybmF0aW9uYWxUeXBlIHtcclxuICBVSyA9ICdVSycsXHJcbiAgVVNBID0gJ1VTQScsXHJcbiAgRnJhbmNlID0gJ0ZyYW5jZScsXHJcbiAgR2VybWFueSA9ICdHZXJtYW55JyxcclxuICBEZW5tYXJrID0gJ0Rlbm1hcmsnLFxyXG4gIFN3ZWRlbiA9ICdTd2VkZW4nLFxyXG4gIEl0YWx5ID0gJ0l0YWx5JyxcclxuICBTcGFpbiA9ICdTcGFpbicsXHJcbiAgSmFwYW4gPSAnSmFwYW4nLFxyXG4gIE5vcndheSA9ICdOb3J3YXknLFxyXG4gIERlbm1hcmsyID0gJ0Rlbm1hcmsyJyxcclxuICBTcGFpbjIgPSAnU3BhaW4yJyxcclxuICBMYXRpbkFtZXJpY2EgPSAnTGF0aW5BbWVyaWNhJyxcclxuICBLb3JlYSA9ICdLb3JlYScsXHJcbiAgSXJlbGFuZCA9ICdJcmVsYW5kJyxcclxuICBMZWdhbCA9ICdMZWdhbCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBGb250U3R5bGVUeXBlIGNvbnN0YW50cy5cclxuICovXHJcbmV4cG9ydCBlbnVtIEZvbnRTdHlsZVR5cGUge1xyXG4gIC8qKiBGb250LUEgKDEyIHggMjQgZG90cykgLyBTcGVjaWZ5IDcgeCA5IGZvbnQgKGhhbGYgZG90cykgKi9cclxuICBBID0gJ0EnLFxyXG4gIC8qKiBGb250LUIgKDkgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNSB4IDkgZm9udCAoMlAtMSkgKi9cclxuICBCID0gJ0InLFxyXG59XHJcblxyXG4vKipcclxuICogQ3V0UGFwZXJBY3Rpb24gY29uc3RhbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gQ3V0UGFwZXJBY3Rpb24ge1xyXG4gIEZ1bGxDdXQgPSAnRnVsbEN1dCcsXHJcbiAgRnVsbEN1dFdpdGhGZWVkID0gJ0Z1bGxDdXRXaXRoRmVlZCcsXHJcbiAgUGFydGlhbEN1dCA9ICdQYXJ0aWFsQ3V0JyxcclxuICBQYXJ0aWFsQ3V0V2l0aEZlZWQgPSAnUGFydGlhbEN1dFdpdGhGZWVkJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEJsYWNrTWFya1R5cGUgY29uc3RhbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gQmxhY2tNYXJrVHlwZSB7XHJcbiAgVmFsaWQgPSAnVmFsaWQnLFxyXG4gIEludmFsaWQgPSAnSW52YWxpZCcsXHJcbiAgVmFsaWRXaXRoRGV0ZWN0aW9uID0gJ1ZhbGlkV2l0aERldGVjdGlvbicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBMb2dvU2l6ZSBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIExvZ29TaXplIHtcclxuICBOb3JtYWwgPSAnTm9ybWFsJyxcclxuICBEb3VibGVXaWR0aCA9ICdEb3VibGVXaWR0aCcsXHJcbiAgRG91YmxlSGVpZ2h0ID0gJ0RvdWJsZUhlaWdodCcsXHJcbiAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQgPSAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxyXG59XHJcblxyXG4vKipcclxuICogQWxpZ25tZW50UG9zaXRpb24gY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBBbGlnbm1lbnRQb3NpdGlvbiB7XHJcbiAgTGVmdCA9ICdMZWZ0JyxcclxuICBDZW50ZXIgPSAnQ2VudGVyJyxcclxuICBSaWdodCA9ICdSaWdodCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXJjb2RlU3ltYm9sb2d5IGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gQmFyY29kZVN5bWJvbG9neSB7XHJcbiAgQ29kZTEyOCA9ICdDb2RlMTI4JyxcclxuICBDb2RlMzkgPSAnQ29kZTM5JyxcclxuICBDb2RlOTMgPSAnQ29kZTkzJyxcclxuICBJVEYgPSAnSVRGJyxcclxuICBKQU44ID0gJ0pBTjgnLFxyXG4gIEpBTjEzID0gJ0pBTjEzJyxcclxuICBOVzcgPSAnTlc3JyxcclxuICBVUENBID0gJ1VQQ0EnLFxyXG4gIFVQQ0UgPSAnVVBDRScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCYXJjb2RlV2lkdGggY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCYXJjb2RlV2lkdGgge1xyXG4gIE1vZGUxID0gJ01vZGUxJyxcclxuICBNb2RlMiA9ICdNb2RlMicsXHJcbiAgTW9kZTMgPSAnTW9kZTMnLFxyXG4gIE1vZGU0ID0gJ01vZGU0JyxcclxuICBNb2RlNSA9ICdNb2RlNScsXHJcbiAgTW9kZTYgPSAnTW9kZTYnLFxyXG4gIE1vZGU3ID0gJ01vZGU3JyxcclxuICBNb2RlOCA9ICdNb2RlOCcsXHJcbiAgTW9kZTkgPSAnTW9kZTknLFxyXG59XHJcblxyXG4vKipcclxuICogUXJDb2RlTW9kZWwgY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBRckNvZGVNb2RlbCB7XHJcbiAgTm8xID0gJ05vMScsXHJcbiAgTm8yID0gJ05vMicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBRckNvZGVMZXZlbCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIFFyQ29kZUxldmVsIHtcclxuICBIID0gJ0gnLFxyXG4gIEwgPSAnTCcsXHJcbiAgTSA9ICdNJyxcclxuICBRID0gJ1EnLFxyXG59XHJcblxyXG4vKipcclxuICogQml0bWFwQ29udmVydGVyUm90YXRpb24gY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiB7XHJcbiAgTm9ybWFsID0gJ05vcm1hbCcsXHJcbiAgTGVmdDkwID0gJ0xlZnQ5MCcsXHJcbiAgUmlnaHQ5MCA9ICdSaWdodDkwJyxcclxuICBSb3RhdGUxODAgPSAnUm90YXRlMTgwJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFB1c2ggYSBuZXcgUHJpbnRDb21tYW5kIG9iamVjdCB0byB0aGUgYXJyYXkgZm9yIGEgc2VwYXJhdGUgaW5zdHJ1Y3Rpb24gdG8gdGhlIHByaW50ZXIuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cclxuICovXHJcbmV4cG9ydCB0eXBlIENvbW1hbmRzQXJyYXkgPSBBcnJheTxQcmludENvbW1hbmQ+O1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFN0YXJQUk5UXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBJb25pYyBOYXRpdmUgd3JhcHBlcnMgZm9yIHRoZSBzdGFycHJudCBjb3Jkb3ZhIHBsdWdpbiBmb3IgU3RhciBNaWNyb25pY3MgQmx1ZXRvb3RoL0xBTiBwcmludGVyc1xyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTdGFyUFJOVCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zdGFyLXBybnQvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGFycHJudDogU3RhclBSTlQpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5zdGFycHJudC5wb3J0RGlzY292ZXJ5KCdBbGwnKVxyXG4gKiAgIC50aGVuKChyZXM6IGFueSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBhbnkpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU3RhclBSTlQnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0YXJwcm50JywgLy8gbnBtIHBhY2thZ2UgbmFtZSwgZXhhbXBsZTogY29yZG92YS1wbHVnaW4tY2FtZXJhXHJcbiAgcGx1Z2luUmVmOiAnc3RhcnBybnQnLCAvLyB0aGUgdmFyaWFibGUgcmVmZXJlbmNlIHRvIGNhbGwgdGhlIHBsdWdpbiwgZXhhbXBsZTogbmF2aWdhdG9yLmdlb2xvY2F0aW9uXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hdWN0aWZlcmEtam9zZWQvc3RhcnBybnQnLCAvLyB0aGUgZ2l0aHViIHJlcG9zaXRvcnkgVVJMIGZvciB0aGUgcGx1Z2luXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sIC8vIEFycmF5IG9mIHBsYXRmb3JtcyBzdXBwb3J0ZWQsIGV4YW1wbGU6IFsnQW5kcm9pZCcsICdpT1MnXVxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTdGFyUFJOVCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgRW11bGF0aW9uXHJcbiAgICovXHJcbiAgRW11bGF0aW9uID0ge1xyXG4gICAgU3RhclBSTlQ6ICdTdGFyUFJOVCcsXHJcbiAgICBTdGFyUFJOVEw6ICdTdGFyUFJOVEwnLFxyXG4gICAgU3RhckxpbmU6ICdTdGFyTGluZScsXHJcbiAgICBTdGFyR3JhcGhpYzogJ1N0YXJHcmFwaGljJyxcclxuICAgIEVzY1BvczogJ0VzY1BvcycsXHJcbiAgICBFc2NQb3NNb2JpbGU6ICdFc2NQb3NNb2JpbGUnLFxyXG4gICAgU3RhckRvdEltcGFjdDogJ1N0YXJEb3RJbXBhY3QnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBFbmNvZGluZ1xyXG4gICAqL1xyXG4gIEVuY29kaW5nID0ge1xyXG4gICAgVVNBU0NJSTogJ1VTLUFTQ0lJJyxcclxuICAgIFdpbmRvd3MxMjUyOiAnV2luZG93cy0xMjUyJyxcclxuICAgIFNoaWZ0SklTOiAnU2hpZnQtSklTJyxcclxuICAgIFdpbmRvd3MxMjUxOiAnV2luZG93cy0xMjUxJyxcclxuICAgIEdCMjMxMjogJ0dCMjMxMicsXHJcbiAgICBCaWc1OiAnQmlnNScsXHJcbiAgICBVVEY4OiAnVVRGLTgnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvZGVQYWdlVHlwZSBjb25zdGFudHNcclxuICAgKi9cclxuICBDb2RlUGFnZVR5cGUgPSB7XHJcbiAgICBDUDczNzogJ0NQNzM3JyxcclxuICAgIENQNzcyOiAnQ1A3NzInLFxyXG4gICAgQ1A3NzQ6ICdDUDc3NCcsXHJcbiAgICBDUDg1MTogJ0NQODUxJyxcclxuICAgIENQODUyOiAnQ1A4NTInLFxyXG4gICAgQ1A4NTU6ICdDUDg1NScsXHJcbiAgICBDUDg1NzogJ0NQODU3JyxcclxuICAgIENQODU4OiAnQ1A4NTgnLFxyXG4gICAgQ1A4NjA6ICdDUDg2MCcsXHJcbiAgICBDUDg2MTogJ0NQODYxJyxcclxuICAgIENQODYyOiAnQ1A4NjInLFxyXG4gICAgQ1A4NjM6ICdDUDg2MycsXHJcbiAgICBDUDg2NDogJ0NQODY0JyxcclxuICAgIENQODY1OiAnQ1A4NjUnLFxyXG4gICAgQ1A4Njk6ICdDUDg2OScsXHJcbiAgICBDUDg3NDogJ0NQODc0JyxcclxuICAgIENQOTI4OiAnQ1A5MjgnLFxyXG4gICAgQ1A5MzI6ICdDUDkzMicsXHJcbiAgICBDUDk5OTogJ0NQOTk5JyxcclxuICAgIENQMTAwMTogJ0NQMTAwMScsXHJcbiAgICBDUDEyNTA6ICdDUDEyNTAnLFxyXG4gICAgQ1AxMjUxOiAnQ1AxMjUxJyxcclxuICAgIENQMTI1MjogJ0NQMTI1MicsXHJcbiAgICBDUDIwMDE6ICdDUDIwMDEnLFxyXG4gICAgQ1AzMDAxOiAnQ1AzMDAxJyxcclxuICAgIENQMzAwMjogJ0NQMzAwMicsXHJcbiAgICBDUDMwMTE6ICdDUDMwMTEnLFxyXG4gICAgQ1AzMDEyOiAnQ1AzMDEyJyxcclxuICAgIENQMzAyMTogJ0NQMzAyMScsXHJcbiAgICBDUDMwNDE6ICdDUDMwNDEnLFxyXG4gICAgQ1AzODQwOiAnQ1AzODQwJyxcclxuICAgIENQMzg0MTogJ0NQMzg0MScsXHJcbiAgICBDUDM4NDM6ICdDUDM4NDMnLFxyXG4gICAgQ1AzODQ1OiAnQ1AzODQ1JyxcclxuICAgIENQMzg0NjogJ0NQMzg0NicsXHJcbiAgICBDUDM4NDc6ICdDUDM4NDcnLFxyXG4gICAgQ1AzODQ4OiAnQ1AzODQ4JyxcclxuICAgIFVURjg6ICdVVEY4JyxcclxuICAgIEJsYW5rOiAnQmxhbmsnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBJbnRlcm5hdGlvbmFsVHlwZVxyXG4gICAqL1xyXG4gIEludGVybmF0aW9uYWxUeXBlID0ge1xyXG4gICAgVUs6ICdVSycsXHJcbiAgICBVU0E6ICdVU0EnLFxyXG4gICAgRnJhbmNlOiAnRnJhbmNlJyxcclxuICAgIEdlcm1hbnk6ICdHZXJtYW55JyxcclxuICAgIERlbm1hcms6ICdEZW5tYXJrJyxcclxuICAgIFN3ZWRlbjogJ1N3ZWRlbicsXHJcbiAgICBJdGFseTogJ0l0YWx5JyxcclxuICAgIFNwYWluOiAnU3BhaW4nLFxyXG4gICAgSmFwYW46ICdKYXBhbicsXHJcbiAgICBOb3J3YXk6ICdOb3J3YXknLFxyXG4gICAgRGVubWFyazI6ICdEZW5tYXJrMicsXHJcbiAgICBTcGFpbjI6ICdTcGFpbjInLFxyXG4gICAgTGF0aW5BbWVyaWNhOiAnTGF0aW5BbWVyaWNhJyxcclxuICAgIEtvcmVhOiAnS29yZWEnLFxyXG4gICAgSXJlbGFuZDogJ0lyZWxhbmQnLFxyXG4gICAgTGVnYWw6ICdMZWdhbCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEZvbnRTdHlsZVR5cGVcclxuICAgKi9cclxuICBGb250U3R5bGVUeXBlID0ge1xyXG4gICAgLyoqIEZvbnQtQSAoMTIgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNyB4IDkgZm9udCAoaGFsZiBkb3RzKSAqL1xyXG4gICAgQTogJ0EnLFxyXG4gICAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xyXG4gICAgQjogJ0InLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBDdXRQYXBlckFjdGlvblxyXG4gICAqL1xyXG4gIEN1dFBhcGVyQWN0aW9uID0ge1xyXG4gICAgRnVsbEN1dDogJ0Z1bGxDdXQnLFxyXG4gICAgRnVsbEN1dFdpdGhGZWVkOiAnRnVsbEN1dFdpdGhGZWVkJyxcclxuICAgIFBhcnRpYWxDdXQ6ICdQYXJ0aWFsQ3V0JyxcclxuICAgIFBhcnRpYWxDdXRXaXRoRmVlZDogJ1BhcnRpYWxDdXRXaXRoRmVlZCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJsYWNrTWFya1R5cGVcclxuICAgKi9cclxuICBCbGFja01hcmtUeXBlID0ge1xyXG4gICAgVmFsaWQ6ICdWYWxpZCcsXHJcbiAgICBJbnZhbGlkOiAnSW52YWxpZCcsXHJcbiAgICBWYWxpZFdpdGhEZXRlY3Rpb246ICdWYWxpZFdpdGhEZXRlY3Rpb24nLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBBbGlnbm1lbnRQb3NpdGlvblxyXG4gICAqL1xyXG4gIEFsaWdubWVudFBvc2l0aW9uID0ge1xyXG4gICAgTGVmdDogJ0xlZnQnLFxyXG4gICAgQ2VudGVyOiAnQ2VudGVyJyxcclxuICAgIFJpZ2h0OiAnUmlnaHQnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBMb2dvU2l6ZVxyXG4gICAqL1xyXG4gIExvZ29TaXplID0ge1xyXG4gICAgTm9ybWFsOiAnTm9ybWFsJyxcclxuICAgIERvdWJsZVdpZHRoOiAnRG91YmxlV2lkdGgnLFxyXG4gICAgRG91YmxlSGVpZ2h0OiAnRG91YmxlSGVpZ2h0JyxcclxuICAgIERvdWJsZVdpZHRoRG91YmxlSGVpZ2h0OiAnRG91YmxlV2lkdGhEb3VibGVIZWlnaHQnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCYXJjb2RlU3ltYm9sb2d5XHJcbiAgICovXHJcbiAgQmFyY29kZVN5bWJvbG9neSA9IHtcclxuICAgIENvZGUxMjg6ICdDb2RlMTI4JyxcclxuICAgIENvZGUzOTogJ0NvZGUzOScsXHJcbiAgICBDb2RlOTM6ICdDb2RlOTMnLFxyXG4gICAgSVRGOiAnSVRGJyxcclxuICAgIEpBTjg6ICdKQU44JyxcclxuICAgIEpBTjEzOiAnSkFOMTMnLFxyXG4gICAgTlc3OiAnTlc3JyxcclxuICAgIFVQQ0E6ICdVUENBJyxcclxuICAgIFVQQ0U6ICdVUENFJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmFyY29kZVdpZHRoXHJcbiAgICovXHJcbiAgQmFyY29kZVdpZHRoID0ge1xyXG4gICAgTW9kZTE6ICdNb2RlMScsXHJcbiAgICBNb2RlMjogJ01vZGUyJyxcclxuICAgIE1vZGUzOiAnTW9kZTMnLFxyXG4gICAgTW9kZTQ6ICdNb2RlNCcsXHJcbiAgICBNb2RlNTogJ01vZGU1JyxcclxuICAgIE1vZGU2OiAnTW9kZTYnLFxyXG4gICAgTW9kZTc6ICdNb2RlNycsXHJcbiAgICBNb2RlODogJ01vZGU4JyxcclxuICAgIE1vZGU5OiAnTW9kZTknLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBRckNvZGVNb2RlbFxyXG4gICAqL1xyXG4gIFFyQ29kZU1vZGVsID0ge1xyXG4gICAgTm8xOiAnTm8xJyxcclxuICAgIE5vMjogJ05vMicsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZUxldmVsXHJcbiAgICovXHJcbiAgUXJDb2RlTGV2ZWwgPSB7XHJcbiAgICBIOiAnSCcsXHJcbiAgICBMOiAnTCcsXHJcbiAgICBNOiAnTScsXHJcbiAgICBROiAnUScsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uXHJcbiAgICovXHJcbiAgQml0bWFwQ29udmVydGVyUm90YXRpb24gPSB7XHJcbiAgICBOb3JtYWw6ICdOb3JtYWwnLFxyXG4gICAgTGVmdDkwOiAnTGVmdDkwJyxcclxuICAgIFJpZ2h0OTA6ICdSaWdodDkwJyxcclxuICAgIFJvdGF0ZTE4MDogJ1JvdGF0ZTE4MCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCBhdmFpbGFibGUgcHJpbnRlcnNcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlICBJbnRlcmZhY2UgVHlwZTogQWxsLCBMQU4sIEJsdWV0b290aCwgVVNCXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8UHJpbnRlcnM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYW4gYXJyYXkgb2YgcHJpbnRlcnNcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcG9ydERpc2NvdmVyeSh0eXBlOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVja3MgdGhlIHN0YXR1cyBvZiB0aGUgcHJpbnRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljc1xyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFByaW50ZXJTdGF0dXM+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIFByaW50ZXJTdGF0dXMgb2JqZWN0XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNoZWNrU3RhdHVzKHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPFByaW50ZXJTdGF0dXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50cyBwbGFpbiB0ZXh0XHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7UHJpbnRPYmp9IHByaW50T2JqICB0ZXh0OnN0cmluZywgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludFJhd1RleHQocG9ydDogc3RyaW5nfG51bGwsIGVtdWxhdGlvbjogc3RyaW5nLCBwcmludE9iajogUHJpbnRPYmopOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29udmVydHMgdGhlIHRleHQgaW50byBhIGJpdG1hcCBpbWFnZSBhbmQgc2VuZHMgaXQgdG8gdGhlIHByaW50ZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7UmFzdGVyT2JqfSByYXN0ZXJPYmogIHRleHQ6c3RyaW5nLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhbiwgZm9udFNpemU6bnVtYmVyLCBwYXBlcldpZHRoOm51bWJlclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByaW50UmFzdGVyUmVjZWlwdChwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIHJhc3Rlck9iajogUmFzdGVyT2JqKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldHMgYW4gaW1hZ2UgZnJvbSBhIHN0cmluZyBVUkkgYW5kIGNvbnZlcnRzIGl0IHRvIGJpdG1hcCB0byBzZW5kIGl0IHRvIHRoZSBwcmludGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7SW1hZ2VPYmp9IGltYWdlT2JqICB1cmk6c3RyaW5nLCBwYXBlcldpZHRoPzpudW1iZXIsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJpbnRJbWFnZShwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIGltYWdlT2JqOiBJbWFnZU9iaik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhbiBhcHBlbmRQZXJpcGhlcmFsIGNvbW1hbmQgdG8gdGhlIHByaW50ZXIgZm9yIGNoYW5uZWxzIE5vMSBhbmQgTm8yXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBvcGVuZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgb3BlbkNhc2hEcmF3ZXIocG9ydDogc3RyaW5nfG51bGwsIGVtdWxhdGlvbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmRzIGFuIEFycmF5IG9mIGNvbW1hbmRzIHRvIHRoZSBjb21tYW5kIGJ1ZmZlciB1c2luZyB0aGUgQW5kcm9pZCBJQ29tbWFuZEJ1aWxkZXJJbnRlcmZhY2Ugb3IgaU9TIElTQ0JCdWlsZGVySW50ZXJmYWNlXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzLiAgU2VuZCBudWxsIHRvIHVzZSBhIHByaW50ZXIgY29ubmVjdGVkIHZpYSBTdGFySU9FeHRNYW5hZ2VyIHVzaW5nIHRoZSBjb25uZWN0KCkgZnVuY3Rpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcGFyYW0ge0NvbW1hbmRzQXJyYXl9IGNvbW1hbmRzQXJyYXkgIGVhY2ggY29tbWFuZCBpbiB0aGUgYXJyYXkgc2hvdWxkIGJlIGFuIGluc3RhbmNlIG9mIHRoZSBQcmludENvbW1hbmQgb2JqZWN0LiBFeGFtcGxlIFt7YXBwZW5kOlwidGV4dFwifSwge1wib3BlbkNhc2hEcmF3ZXI6IDFcIn1dXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJpbnQocG9ydDogc3RyaW5nfG51bGwsIGVtdWxhdGlvbjogc3RyaW5nLCBjb21tYW5kc0FycmF5OiBDb21tYW5kc0FycmF5KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB5b3UgdG8gY29ubmVjdCB0byB0aGUgcHJpbnRlciwga2VlcCB0aGUgY29ubmVjdGlvbiBhbGl2ZSBhbmQgcmVjZWl2ZSBzdGF0dXMgdXBkYXRlcyB0aHJvdWdoIGFuIG9ic2VydmFibGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBwcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHBhcmFtIGhhc0JhcmNvZGVSZWFkZXJcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2FsbGJhY2tTdHlsZTogJ25vZGUnLFxyXG4gIH0pXHJcbiAgY29ubmVjdChwb3J0OiBzdHJpbmcsIGVtdWxhdGlvbjogc3RyaW5nLCBoYXNCYXJjb2RlUmVhZGVyOiBib29sZWFuKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSB3aXRoIHRoZSBkZXZpY2Ugc3RhdHVzIGV2ZW50cy4gT25seSBmaXJlcyB3aGVuIGEgcHJpbnRlciBpcyBjb25ubmVjdGVkIHRocm91Z2ggdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn0gZGF0YVR5cGU6IHByaW50ZXJPbmxpbmUsIHByaW50ZXJPZmZsaW5lLCBwcmludGVySW1wb3NzaWJsZSwgcHJpbnRlclBhcGVyRW1wdHksIHByaW50ZXJQYXBlck5lYXJFbXB0eSwgcHJpbnRlclBhcGVyUmVhZHksIHByaW50ZXJDb3Zlck9wZW4sIHByaW50ZXJDb3ZlckNsb3NlLCBjYXNoRHJhd2VyT3BlbiwgY2FzaERyYXdlckNsb3NlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgZXZlbnRPYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgZXZlbnQ6ICdzdGFyUHJudERhdGEnLFxyXG4gIH0pXHJcbiAgZ2V0U3RhdHVzKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgdG8gZGlzY29ubmVjdCAoY2xvc2UgdGhlIGNvbm5lY3Rpb24gdG8gdGhlIHBlcmlwaGVyYWxzKSwgdGhpcyBpcyB1c2VmdWwgdG8gYXZvaWQga2VlcGluZyBhbGl2ZSBhIGNvbm5lY3Rpb24gd2hlbiBub3QgaW4gdGhlIGFwcCB0byBzYXZlIGRldmljZSBiYXR0ZXJ5XHJcbiAgICogKGVuZXJneSBjb25zdW1wdGlvbikuIFlvdSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIHdoZW4gdGhlIGFwcCBpcyBwYXVzZWQgb3IgY2xvc2VkLlxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgY29ubmVjdGVkIG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGRpc2Nvbm5lY3QoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19