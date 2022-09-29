import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var StarPRNT = /** @class */ (function (_super) {
    __extends(StarPRNT, _super);
    function StarPRNT() {
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
    StarPRNT.prototype.portDiscovery = function (type) { return cordova(this, "portDiscovery", {}, arguments); };
    StarPRNT.prototype.checkStatus = function (port, emulation) { return cordova(this, "checkStatus", {}, arguments); };
    StarPRNT.prototype.printRawText = function (port, emulation, printObj) { return cordova(this, "printRawText", {}, arguments); };
    StarPRNT.prototype.printRasterReceipt = function (port, emulation, rasterObj) { return cordova(this, "printRasterReceipt", {}, arguments); };
    StarPRNT.prototype.printImage = function (port, emulation, imageObj) { return cordova(this, "printImage", {}, arguments); };
    StarPRNT.prototype.openCashDrawer = function (port, emulation) { return cordova(this, "openCashDrawer", {}, arguments); };
    StarPRNT.prototype.print = function (port, emulation, commandsArray) { return cordova(this, "print", {}, arguments); };
    StarPRNT.prototype.connect = function (port, emulation, hasBarcodeReader) { return cordova(this, "connect", { "observable": true, "callbackStyle": "node" }, arguments); };
    StarPRNT.prototype.getStatus = function () { return cordova(this, "getStatus", { "eventObservable": true, "event": "starPrntData" }, arguments); };
    StarPRNT.prototype.disconnect = function () { return cordova(this, "disconnect", {}, arguments); };
    StarPRNT.pluginName = "StarPRNT";
    StarPRNT.plugin = "cordova-plugin-starprnt";
    StarPRNT.pluginRef = "starprnt";
    StarPRNT.repo = "https://github.com/auctifera-josed/starprnt";
    StarPRNT.platforms = ["Android", "iOS"];
    StarPRNT.decorators = [
        { type: Injectable }
    ];
    return StarPRNT;
}(AwesomeCordovaNativePlugin));
export { StarPRNT };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc3Rhci1wcm50L25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFrWmxDOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksU0FlWDtBQWZELFdBQVksU0FBUztJQUNuQixvRkFBb0Y7SUFDcEYsa0NBQXFCLENBQUE7SUFDckIsdUJBQXVCO0lBQ3ZCLG9DQUF1QixDQUFBO0lBQ3ZCLDBDQUEwQztJQUMxQyxrQ0FBcUIsQ0FBQTtJQUNyQixhQUFhO0lBQ2Isd0NBQTJCLENBQUE7SUFDM0IsWUFBWTtJQUNaLDhCQUFpQixDQUFBO0lBQ2pCLDREQUE0RDtJQUM1RCwwQ0FBNkIsQ0FBQTtJQUM3QixZQUFZO0lBQ1osNENBQStCLENBQUE7QUFDakMsQ0FBQyxFQWZXLFNBQVMsS0FBVCxTQUFTLFFBZXBCO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLENBQU4sSUFBWSxRQWVYO0FBZkQsV0FBWSxRQUFRO0lBQ2xCLGNBQWM7SUFDZCxnQ0FBb0IsQ0FBQTtJQUNwQiwwQ0FBMEM7SUFDMUMsd0NBQTRCLENBQUE7SUFDNUIsZUFBZTtJQUNmLGtDQUFzQixDQUFBO0lBQ3RCLGNBQWM7SUFDZCx3Q0FBNEIsQ0FBQTtJQUM1Qix5QkFBeUI7SUFDekIsNkJBQWlCLENBQUE7SUFDakIsMEJBQTBCO0lBQzFCLHlCQUFhLENBQUE7SUFDYixXQUFXO0lBQ1gsMEJBQWMsQ0FBQTtBQUNoQixDQUFDLEVBZlcsUUFBUSxLQUFSLFFBQVEsUUFlbkI7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBTixJQUFZLFlBd0NY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RyxFQUFFLEtBQUs7U0FDWCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxpQkFBVyxHQUFHO1lBQ1osQ0FBQyxFQUFFLEdBQUc7WUFDTixDQUFDLEVBQUUsR0FBRztZQUNOLENBQUMsRUFBRSxHQUFHO1lBQ04sQ0FBQyxFQUFFLEdBQUc7U0FDUCxDQUFDO1FBRUY7O1dBRUc7UUFDSCw2QkFBdUIsR0FBRztZQUN4QixNQUFNLEVBQUUsUUFBUTtZQUNoQixNQUFNLEVBQUUsUUFBUTtZQUNoQixPQUFPLEVBQUUsU0FBUztZQUNsQixTQUFTLEVBQUUsV0FBVztTQUN2QixDQUFDOzs7SUFTRixnQ0FBYSxhQUFDLElBQVk7SUFZMUIsOEJBQVcsYUFBQyxJQUFZLEVBQUUsU0FBaUI7SUFhM0MsK0JBQVksYUFBQyxJQUFpQixFQUFFLFNBQWlCLEVBQUUsUUFBa0I7SUFhckUscUNBQWtCLGFBQUMsSUFBaUIsRUFBRSxTQUFpQixFQUFFLFNBQW9CO0lBYTdFLDZCQUFVLGFBQUMsSUFBaUIsRUFBRSxTQUFpQixFQUFFLFFBQWtCO0lBWW5FLGlDQUFjLGFBQUMsSUFBaUIsRUFBRSxTQUFpQjtJQWFuRCx3QkFBSyxhQUFDLElBQWlCLEVBQUUsU0FBaUIsRUFBRSxhQUE0QjtJQWdCeEUsMEJBQU8sYUFBQyxJQUFZLEVBQUUsU0FBaUIsRUFBRSxnQkFBeUI7SUFhbEUsNEJBQVM7SUFXVCw2QkFBVTs7Ozs7OztnQkFwVVgsVUFBVTs7bUJBem9CWDtFQTBvQjhCLDBCQUEwQjtTQUEzQyxRQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFByaW50ZXIge1xyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgbW9kZWwgbmFtZSBhbmQgbW9kZWwgbnVtYmVyXHJcbiAgICovXHJcbiAgbW9kZWxOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIE1hYyBBZGRyZXNzXHJcbiAgICovXHJcbiAgbWFjQWRkcmVzcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBwb3J0IG5hbWUgdXNlZCB0byBjcmVhdGUgYSBuZXcgcG9ydCBpbnN0YW5jZSBvZiBTTVBvcnQgb3IgU3RhcklPRXh0TWFuYWdlclxyXG4gICAqL1xyXG4gIHBvcnROYW1lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFVTQiBTZXJpYWwgTnVtYmVyIChVU0IgUHJpbnRlcnMgT25seSlcclxuICAgKi9cclxuICBVU0JTZXJpYWxOdW1iZXI/OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEFycmF5IG9mIFByaW50ZXIgb2JqZWN0cyByZXR1cm5lZCBieSB0aGUgcG9ydERpc2NvdmVyeSgpIGZ1bmN0aW9uXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBQcmludGVycyA9IEFycmF5PFByaW50ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmludGVyU3RhdHVzIHtcclxuICAvKipcclxuICAgKiBQcmludGVyIE9ubGluZS9PZmZsaW5lIHN0YXR1c1xyXG4gICAqL1xyXG4gIG9mZmxpbmU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiAgUHJpbnRlciBtb2RlbCBuYW1lIGFuZCBtb2RlbCBudW1iZXJcclxuICAgKi9cclxuICBNb2RlbE5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50ZXIgY292ZXIgc3RhdHVzXHJcbiAgICovXHJcbiAgY292ZXJPcGVuPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBQYXBlciBDdXR0ZXIgc3RhdHVzXHJcbiAgICovXHJcbiAgY3V0dGVyRXJyb3I/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludGVyIFBhcGVyIHN0YXR1c1xyXG4gICAqL1xyXG4gIHJlY2VpcHRQYXBlckVtcHR5PzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRlciBGaXJtd2FyZSBpbmZvcm1hdGlvblxyXG4gICAqL1xyXG4gIEZpcm13YXJlVmVyc2lvbj86IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQcmludE9iaiB7XHJcbiAgLyoqXHJcbiAgICogc3RyaW5nIGNvbnRhaW5pbmcgdGhlIHRleHQgdG8gcHJpbnQsIEV4YW1wbGU6IFwiU3RhciBDbG90aGluZyBCb3V0aXF1ZVxcbjEyMyBTdGFyIFJvYWRcXG5DaXR5LCBTdGF0ZSAxMjM0NVxcblxcblwiXHJcbiAgICovXHJcbiAgdGV4dDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VuZHMgYSBQYXJ0aWFsQ3V0V2l0aEZlZWQgY29tbWFuZCB0byB0aGUgcHJpbnRlciwgZGVmYXVsdHMgdG8gdHJ1ZVxyXG4gICAqL1xyXG4gIGN1dFJlY2VpcHQ/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzIgLSBEZWZhdWx0cyB0byB0cnVlXHJcbiAgICovXHJcbiAgb3BlbkNhc2hEcmF3ZXI/OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmFzdGVyT2JqIGV4dGVuZHMgUHJpbnRPYmoge1xyXG4gIC8qKlxyXG4gICAqIEZvbnQgc2l6ZSBudW1iZXIsIGRlZmF1bHRzIHRvIDI1XHJcbiAgICovXHJcbiAgZm9udFNpemU/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFBhcGVyIHdpZHRoIChVbml0czogRG90cykuIDIgaW5jaGVzOiAzODQsIDMgaW5jaGVzOiA1NzYsIDQgaW5jaGVzOiA4MzIsIEVTQ1BvcyAzIGluY2hlczogNTEyLCBEb3QgMyBpbmNoZXM6IDIxMC4gRGVmYXVsdHMgdG8gNTc2XHJcbiAgICovXHJcbiAgcGFwZXJXaWR0aD86IG51bWJlcjtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlT2JqIHtcclxuICAvKipcclxuICAgKiBJbWFnZSBVUkkgdG8gcHJpbnQsIHRoaXMgY2FuIGJlIG9idGFpbmVkIHZpYSB0aGUgY2FtZXJhIG9yIHBob3RvIGxpYnJhcnkgb3IgYXMgYSBzdGF0aWMgcmVzb3VyY2Ugc2F2ZWQgb24gdGhlIHBob25lIG1lbW9yeVxyXG4gICAqL1xyXG4gIHVyaTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBJbWFnZSB3aWR0aCAoVW5pdHM6IERvdHMpIGRlZmF1bHRzIHRvIDU3NlxyXG4gICAqL1xyXG4gIHBhcGVyV2lkdGg/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqICBTZW5kcyBhIFBhcnRpYWxDdXRXaXRoRmVlZCBjb21tYW5kIHRvIHRoZSBwcmludGVyLCBkZWZhdWx0cyB0byB0cnVlXHJcbiAgICovXHJcbiAgY3V0UmVjZWlwdD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlbmRzIGEgYXBwZW5kUGVyaXBoZXJhbCBjb21tYW5kIHRvIHRoZSBwcmludGVyIGZvciBjaGFubmVscyBObzEgYW5kIE5vMiAtIERlZmF1bHRzIHRvIHRydWVcclxuICAgKi9cclxuICBvcGVuQ2FzaERyYXdlcj86IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQcmludENvbW1hbmQge1xyXG4gIC8qKlxyXG4gICAqIENoYXJhY3RoZXIgZW5jb2RpbmcgaXMgdXNlZCB0byBnZXRCeXRlIGRhdGEgZnJvbSBhbGwgc3Vic2VxdWVudCBjb21tYW5kcy4gRGVmYXVsdCAnVVMtQVNDSUknXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkVuY29kaW5nIG9yIHRoZSBFbmNvZGluZyBlbnVtLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRFbmNvZGluZzonVVMtQVNDSUknfVxyXG4gICAqL1xyXG4gIGFwcGVuZEVuY29kaW5nPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBTZWxlY3QgY29tbWFuZCBvZiB0aGUgY29kZSBwYWdlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmRzIHByb3BlcnR5LlxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgRGVmaW5lZCBpbiBTdGFyUFJOVC5Db2RlUGFnZVR5cGUgb3IgdGhlIENvZGVQYWdlVHlwZSBlbnVtLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRDb2RlUGFnZTonQ1A4NTgnfVxyXG4gICAqL1xyXG4gIGFwcGVuZENvZGVQYWdlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmQ6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIChUZXh0KSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRSYXc6XCJTdGFyIENsb3RoaW5nIEJvdXRpcXVlXFxuMTIzIFN0YXIgUm9hZFxcbkNpdHksIFN0YXRlIDEyMzQ1XFxuXFxuXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kUmF3Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBEYXRhIChDb21tYW5kKSBpcyBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRha2VzIGFuIGFycmF5IG9mIGJ5dGVzLlxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCeXRlczpbMHg0OCwgMHg2NSwgMHg2YywgMHg2YywgMHg2ZiwgMHgyMCwgMHg1NywgMHg2ZiwgMHg3MiwgMHg2YywgMHg2NCwgMHgyZV19XHJcbiAgICovXHJcbiAgYXBwZW5kQnl0ZXM/OiBudW1iZXJbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRGF0YSAoQ29tbWFuZCkgaXMgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhbiBhcnJheSBvZiBieXRlcy5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUmF3Qnl0ZXM6WzB4NDgsIDB4NjUsIDB4NmMsIDB4NmMsIDB4NmYsIDB4MjAsIDB4NTcsIDB4NmYsIDB4NzIsIDB4NmMsIDB4NjQsIDB4MmVdfVxyXG4gICAqL1xyXG4gIGFwcGVuZFJhd0J5dGVzPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCBjb21tYW5kIG9mIHRoZSBjaGFyYWN0ZXIgc3BhY2UgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIENoYXJhY3RlciBTcGFjcyAoVW5pdDogRG90cykgRXhhbXBsZTogNFxyXG4gICAqL1xyXG4gIGFwcGVuZENoYXJhY3RlclNwYWNlPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiAgU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGVtcGhhc2lzIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRFbXBoYXNpczpcIlNBTEVcXG5cIn1cclxuICAgKi9cclxuICBhcHBlbmRFbXBoYXNpcz86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIEVuYWJsZSBlbXBoYXNpcyBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlRW1waGFzaXM6dHJ1ZX1cclxuICAgKi9cclxuICBlbmFibGVFbXBoYXNpcz86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqICBTZWxlY3QgY29tbWFuZCBvZiB0aGUgaW52ZXJ0IG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRJbnZlcnQ6XCJSZWZ1bmRzIGFuZCBFeGNoYW5nZXNcXG5cIn1cclxuICAgKi9cclxuICBhcHBlbmRJbnZlcnQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogIEVuYWJsZSBpbnZlcnQgbW9kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gRXhhbXBsZToge2VuYWJsZUludmVydDp0cnVlfVxyXG4gICAqL1xyXG4gIGVuYWJsZUludmVydD86IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogIFNlbGVjdCBjb21tYW5kIG9mIHRoZSB1bmRlciBsaW5lIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIEV4YW1wbGU6IHthcHBlbmRVbmRlcmxpbmU6XCIzMCBkYXlzXCJ9XHJcbiAgICovXHJcbiAgYXBwZW5kVW5kZXJsaW5lPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqICBFbmFibGUgdW5kZXIgbGluZSBtb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBFeGFtcGxlOiB7ZW5hYmxlVW5kZXJsaW5lOnRydWV9XHJcbiAgICovXHJcbiAgZW5hYmxlVW5kZXJsaW5lPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGludGVybmF0aW9uYWwgY2hhcmFjdGVyIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBEZWZpbmVkIGluIFN0YXJQUk5ULkludGVybmF0aW9uYWxUeXBlIG9yIHRoZSBJbnRlcm5hdGlvbmFsVHlwZSBlbnVtLlxyXG4gICAqICdVSycgfCAnVVNBJyB8ICdGcmFuY2UnIHwgJ0dlcm1hbnknIHwgJ0Rlbm1hcmsnIHwgJ1N3ZWRlbicgfCAnSXRhbHknIHwgJ1NwYWluJyB8ICdKYXBhbicgfCAnTm9yd2F5JyB8ICdEZW5tYXJrMicgfCAnU3BhaW4yJyB8ICdMYXRpbkFtZXJpY2EnIHwgJ0tvcmVhJyB8ICdJcmVsYW5kJyB8ICdMZWdhbCdcclxuICAgKiBFeGFtcGxlIHthcHBlbmRJbnRlcm5hdGlvbmFsOkludGVybmF0aW9uYWxUeXBlLlVLfVxyXG4gICAqL1xyXG4gIGFwcGVuZEludGVybmF0aW9uYWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIExpbmUgZmVlZCBjb21tYW5kIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBQYXBlciBmZWVkIHVuaXRzIChVbml0czogTGluZXMpIEV4YW1wbGU6IDJcclxuICAgKi9cclxuICBhcHBlbmRMaW5lRmVlZD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVW5pdCBmZWVkIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFBhcGVyIGZlZWQgdW5pdHMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiA2NFxyXG4gICAqL1xyXG4gIGFwcGVuZFVuaXRGZWVkPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBTZXQgY29tbWFuZCBvZiB0aGUgbGluZSBzcGFjZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gTGluZSBzcGFjZXMgKFVuaXRzOiBEb3RzKSBFeGFtcGxlOiAzMlxyXG4gICAqL1xyXG4gIGFwcGVuZExpbmVTcGFjZT86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIGZvbnQgc3R5bGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkZvbnRTdHlsZVR5cGUgb3IgdGhlIEZvbnRTdHlsZVR5cGUgZW51bS4gJ0EnIHwgJ0InXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEZvbnRTdHlsZTpGb250U3R5bGVUeXBlLkF9XHJcbiAgICovXHJcbiAgYXBwZW5kRm9udFN0eWxlPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQYXBlciBjdXQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQ3V0UGFwZXJBY3Rpb24gb3IgdGhlIEN1dFBhcGVyQWN0aW9uIGVudW0uICdGdWxsQ3V0JyB8ICdGdWxsQ3V0V2l0aEZlZWQnIHwgJ1BhcnRpYWxDdXQnIHwgJ1BhcnRpYWxDdXRXaXRoRmVlZCdcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQ3V0UGFwZXI6Q3V0UGFwZXJBY3Rpb24uUGFydGlhbEN1dFdpdGhGZWVkfVxyXG4gICAqL1xyXG4gIGFwcGVuZEN1dFBhcGVyPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBCbGFjayBtYXJrIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJsYWNrTWFya1R5cGUgb3IgdGhlIEJsYWNrTWFya1R5cGUgZW51bS4gJ1ZhbGlkJyB8ICdJbnZhbGlkJyB8ICdWYWxpZFdpdGhEZXRlY3Rpb24nXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJsYWNrTWFyazogQmxhY2tNYXJrVHlwZS5WYWxpZH1cclxuICAgKi9cclxuICBhcHBlbmRCbGFja01hcms/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFic29sdXRlIHBvc2l0aW9uIGNvbW1hbmQgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIChVbml0OiBEb3RzKS4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiBqdXN0IHRvIHRoYXQgc3RyaW5nXHJcbiAgICogRXhhbXBsZTE6IEFwcGVuZCBkYXRhIHdpdGggQWJzb2x1dGUgcG9zaXRpb24ge2FwcGVuZEFic29sdXRlUG9zaXRpb246NDAsIGRhdGE6IFwiVGV4dCB3aXRoIGFic29sdXRlIHBvc2l0aW9uXCJ9XHJcbiAgICogRXhhbXBsZTI6IEFwcGVuZCBhYnNvbHV0ZSBwb3NpdGlvbiB0byBzdWJzZXF1ZW50IGNvbW1hbmRzOiB7YXBwZW5kQWJzb2x1dGVQb3NpdGlvbjo0MH1cclxuICAgKi9cclxuICBhcHBlbmRBYnNvbHV0ZVBvc2l0aW9uPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBBbGlnbm1lbnQgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gU2VuZCBpbiBjb25qdW5jdGlvbiB3aXRoIHRoZSBkYXRhIHByb3BlcnR5IHRvIGFwcGVuZCBhbGlnbm1lbnQgcG9zaXRpb24ganVzdCB0byB0aGF0IHN0cmluZ1xyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxyXG4gICAqIEV4YW1wbGUxIEFwcGVuZCBkYXRhIHdpdGggQWxpZ25tZW50IHBvc2l0aW9uOiB7YXBwZW5kQWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciwgZGF0YTogXCJUZXh0IHdpdGggY2VudGVyZWQgcG9zaXRpb25cIn1cclxuICAgKiBFeGFtcGxlMiBBcHBlbmQgYWJzb2x1dGUgcG9zaXRpb24gdG8gc3Vic2VxdWVudCBjb21tYW5kczoge2FwcGVuZEFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9XHJcbiAgICovXHJcbiAgYXBwZW5kQWxpZ25tZW50Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBIb3Jpem9udGFsIHRhYiBzZXQvY2xlYXIgY29tbWFuZCBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci4gKE9ubHkgd29ya3MgZm9yIGNlcnRhaW4gcHJpbnRlciBtb2RlbHMsIGNoZWNrIHRoZSBzdGFyU0RLIGRvY3VtZW50YXRpb24gZm9yIGRldGFpbHMpXHJcbiAgICogQXJyYXkgb2YgaG9yaXpvbnRhbCB0YWIgcG9zaXRpb25zIChVbml0czogQU5LIGNoYXJhY3RlciBwaXRjaCkuIFNwZWNpZnlpbmcgZW1wdHkgYXJyYXkgZGVsZXRlcyBhbGwgY3VycmVudGx5IHNldCBob3Jpem9udGFsIHRhYiBwb3NpdGlvbnMuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEhvcml6b250YWxUYWJQb3NpdGlvbjpbMTUsIDM1XX1cclxuICAgKiBEZWxldGUgcG9zaXRpb25zIEV4YW1wbGU6IHthcHBlbmRIb3Jpem9udGFsVGFiUG9zaXRpb246W119XHJcbiAgICovXHJcbiAgYXBwZW5kSG9yaXpvbnRhbFRhYlBvc2l0aW9uPzogbnVtYmVyW107XHJcblxyXG4gIC8qKlxyXG4gICAqIFByaW50IGNvbW1hbmQgb2YgdGhlIGxvZ28gaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuIFRoZSBsb2dvIGhhcyB0byBiZSB1cGxvYWRlZCB0byB0aGUgcHJpbnRlciB1c2luZyB0aGUgU3RhciBQcmludCB1dGlsaXR5LlxyXG4gICAqIFNlbmQgaW4gY29uanVjdGlvbiB3aXRoIHRoZSBsb2dvU2l6ZSBwcm9wZXJ0eSB0byBzZXQgdGhlIGxvZ28gc2l6ZVxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRMb2dvOjF9XHJcbiAgICogRXhhbXBsZSB3aXRoIExvZ29TaXplOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cclxuICAgKi9cclxuICBhcHBlbmRMb2dvPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZExvZ28gY29tbWFuZC5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuTG9nb1NpemUgb3IgdGhlIExvZ29TaXplIGVudW0uICdOb3JtYWwnIHwgJ0RvdWJsZVdpZHRoJyB8ICdEb3VibGVIZWlnaHQnIHwgJ0RvdWJsZVdpZHRoRG91YmxlSGVpZ2h0JztcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTG9nbzoxLCBsb2dvU2l6ZTpMb2dvU2l6ZS5Eb3VibGVXaWR0aERvdWJsZUhlaWdodH1cclxuICAgKi9cclxuICBsb2dvU2l6ZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYmFyY29kZSBpcyBnZW5lcmF0ZWQgYW5kIGFkZGVkIHRvIHRoZSBjb21tYW5kIGJ1ZmZlci5cclxuICAgKiBBZGRpdGlvbmFsIFByb3BlcnRpZXM6IEJhcmNvZGVTeW1ib2xvZ3ksIEJhcmNvZGVXaWR0aCwgaGVpZ2h0LCBocmksIGFic29sdXRlUG9zaXRpb24sIGFsaWdubWVudC5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTpcIntCU3RhclwiLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOCwgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMiwgaGVpZ2h0OjQwLCBocmk6dHJ1ZSB9XHJcbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOjQwIH1cclxuICAgKiBFeGFtcGxlIHdpdGggYWxpZ25tZW50OnthcHBlbmRCYXJjb2RlOlwie0JTdGFyXCIsIEJhcmNvZGVTeW1ib2xvZ3k6QmFyY29kZVN5bWJvbG9neS5Db2RlMTI4LCBCYXJjb2RlV2lkdGg6QmFyY29kZVdpZHRoLk1vZGUyLCBoZWlnaHQ6NDAsIGhyaTp0cnVlLCBhbGlnbm1lbnQ6YWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlciB9XHJcbiAgICovXHJcbiAgYXBwZW5kQmFyY29kZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCYXJjb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULkJhcmNvZGVTeW1ib2xvZ3kgb3IgdGhlIEJhcmNvZGVTeW1ib2xvZ3kgZW51bS5cclxuICAgKiAnQ29kZTEyOCcgfCAnQ29kZTM5JyB8ICdDb2RlOTMnIHwgJ0lURicgfCAnSkFOOCcgfCAnSkFOMTMnIHwgJ05XNycgfCAnVVBDQScgfCAnVVBDRScgfFxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBCYXJjb2RlU3ltYm9sb2d5OkJhcmNvZGVTeW1ib2xvZ3kuQ29kZTEyOH1cclxuICAgKi9cclxuICBCYXJjb2RlU3ltYm9sb2d5Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZC5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQmFyY29kZVdpZHRoIG9yIHRoZSBCYXJjb2RlV2lkdGggZW51bS5cclxuICAgKiBNb2RlMSB8IE1vZGUyIHwgTW9kZTMgfCBNb2RlNCB8IE1vZGU1IHwgTW9kZTYgfCBNb2RlNyB8IE1vZGU4IHwgTW9kZTlcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgQmFyY29kZVdpZHRoOkJhcmNvZGVXaWR0aC5Nb2RlMn1cclxuICAgKi9cclxuICBCYXJjb2RlV2lkdGg/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLlxyXG4gICAqIFVuZGVyLWJhciBjaGFyYWN0ZXJzLiB0cnVlID0gVmFsaWQsIGZhbHNlID0gSW52YWxpZFxyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBocmk6dHJ1ZX1cclxuICAgKi9cclxuICBocmk/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCBvciB0aGUgYXBwZW5kTXVsdGlwbGUgY29tbWFuZCAoVW5pdHM6RG90cylcclxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBoZWlnaHQ6NDB9XHJcbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIGhlaWdodDo0MH1cclxuICAgKi9cclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kQml0bWFwIGNvbW1hbmQgb3IgdGhlIGFwcGVuZE11bHRpcGxlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXHJcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCB3aWR0aDo1NzZ9XHJcbiAgICogYXBwZW5kTXVsdGlwbGU6IHthcHBlbmRNdWx0aXBsZTondGV4dCB0byBwcmludCcsIHdpZHRoOjQwfVxyXG4gICAqL1xyXG4gIHdpZHRoPzogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBQcm9wZXJ0eSB0byBiZSB1c2VkIHdpdGggdGhlIGFwcGVuZEJpdG1hcCBjb21tYW5kLCB0aGUgYXBwZW5kQmFyY29kZSBjb21tYW5kLCBvciB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQgKFVuaXRzOkRvdHMpXHJcbiAgICogYXBwZW5kQml0bWFwIEV4YW1wbGU6IHthcHBlbmRCaXRtYXA6dXJpLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cclxuICAgKiBhcHBlbmRCYXJjb2RlIEV4YW1wbGU6IHthcHBlbmRCYXJjb2RlOid7QlN0YXInLCBhYnNvbHV0ZVBvc2l0aW9uOjQwfS5cclxuICAgKiBhcHBlbmRRckNvZGUgRXhhbXBsZToge2FwcGVuZFFyQ29kZTone0JTdGFyJywgYWJzb2x1dGVQb3NpdGlvbjo0MH0uXHJcbiAgICovXHJcbiAgYWJzb2x1dGVQb3NpdGlvbj86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZCwgdGhlIGFwcGVuZEJhcmNvZGUgY29tbWFuZCwgb3IgdGhlIGFwcGVuZFFyQ29kZSBjb21tYW5kIChVbml0czpEb3RzKVxyXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUgZGVmaW5lZCBpbiBTdGFyUFJOVC5BbGlnbm1lbnRQb3NpdGlvbiBvciB0aGUgQWxpZ25tZW50UG9zaXRpb24gZW51bS4gJ0xlZnQnIHwgJ0NlbnRlcicgfCAnUmlnaHQnLlxyXG4gICAqIGFwcGVuZEJpdG1hcCBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXHJcbiAgICogYXBwZW5kQmFyY29kZSBFeGFtcGxlOiB7YXBwZW5kQmFyY29kZTone0JTdGFyJywgYWxpZ25tZW50OkFsaWdubWVudFBvc2l0aW9uLkNlbnRlcn0uXHJcbiAgICogYXBwZW5kUXJDb2RlIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIGFsaWdubWVudDpBbGlnbm1lbnRQb3NpdGlvbi5DZW50ZXJ9LlxyXG4gICAqL1xyXG4gIGFsaWdubWVudD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2VsZWN0IGNvbW1hbmQgb2YgdGhlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kTXVsdGlwbGU6XCIgICAkMTU2Ljk1XFxuXCIsIHdpZHRoOjIsIGhlaWdodDoyfS5cclxuICAgKi9cclxuICBhcHBlbmRNdWx0aXBsZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW5hYmxlIG11bHRpcGxlIG1vZGUgaXMgZ2VuZXJhdGVkIGFuZCBhZGRlZCB0byB0aGUgY29tbWFuZCBidWZmZXIuXHJcbiAgICogQWRkaXRpb25hbCBwcm9wZXJ0aWVzOiB3aWR0aDpudW1iZXIsIGhlaWdodDpudW1iZXJcclxuICAgKiBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6dHJ1ZSwgd2lkdGg6MiwgaGVpZ2h0OjJ9XHJcbiAgICogRGlzYWJsZSBFeGFtcGxlOiB7ZW5hYmxlTXVsdGlwbGU6ZmFsc2V9XHJcbiAgICovXHJcbiAgZW5hYmxlTXVsdGlwbGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBQcmludCBjb21tYW5kIG9mIHRoZSBRUiBjb2RlIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLlxyXG4gICAqIEFkZGl0aW9uYWwgUHJvcGVydGllczogUXJDb2RlTW9kZWwsIFFyQ29kZUxldmVsLCBjZWxsLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOH0uXHJcbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRRckNvZGU6XCJ7QlN0YXJcIiwgUXJDb2RlTW9kZWw6XCJObzJcIiwgUXJDb2RlTGV2ZWw6XCJMXCIsIGNlbGw6IDgsIGFic29sdXRlUG9zaXRpb246IDQwIH0uXHJcbiAgICogRXhhbXBsZSB3aXRoIGFsaWdubWVudDoge2FwcGVuZFFyQ29kZTpcIntCU3RhclwiLCBRckNvZGVNb2RlbDpcIk5vMlwiLCBRckNvZGVMZXZlbDpcIkxcIiwgY2VsbDogOCwgYWxpZ25tZW50OlwiQ2VudGVyXCIgfS5cclxuICAgKi9cclxuICBhcHBlbmRRckNvZGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZU1vZGVsIG9yIHRoZSBRckNvZGVNb2RlbCBlbnVtLiAnTm8xJyB8ICdObzInIERlZmF1bHQgJ05vMidcclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBRckNvZGVNb2RlbDpRckNvZGVNb2RlbC5ObzF9XHJcbiAgICovXHJcbiAgUXJDb2RlTW9kZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuXHJcbiAgICogQ2hvb3NlIHRoZSBmb3JtYXQgb2YgdGhlIHJldHVybiB2YWx1ZSBkZWZpbmVkIGluIFN0YXJQUk5ULlFyQ29kZUxldmVsIG9yIHRoZSBRckNvZGVMZXZlbCBlbnVtLiAnTm8xJyB8ICdObzInLiBEZWZhdWx0ICdIJ1xyXG4gICAqIEV4YW1wbGU6IHthcHBlbmRRckNvZGU6J3tCU3RhcicsIFFyQ29kZUxldmVsOlFyQ29kZUxldmVsLkh9XHJcbiAgICovXHJcbiAgUXJDb2RlTGV2ZWw/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFByb3BlcnR5IHRvIGJlIHVzZWQgd2l0aCB0aGUgYXBwZW5kUXJDb2RlIGNvbW1hbmQuIFFSQ29kZSBDZWxsIHNpemUuIERlZmF1bHQgNC5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kUXJDb2RlOid7QlN0YXInLCBjZWxsOjh9XHJcbiAgICovXHJcbiAgY2VsbD86IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnQgY29tbWFuZCBvZiB0aGUgYml0bWFwIGlzIGdlbmVyYXRlZCBhbmQgYWRkZWQgdG8gdGhlIGNvbW1hbmQgYnVmZmVyLiBUYWtlcyBhIHN0cmluZyBpbWFnZSBVUklcclxuICAgKiB0aGlzIGNhbiBiZSBvYnRhaW5lZCB2aWEgdGhlIGNhbWVyYSBvciBwaG90byBsaWJyYXJ5IG9yIGFzIGEgc3RhdGljIHJlc291cmNlIHNhdmVkIG9uIHRoZSBwaG9uZSBtZW1vcnkuXHJcbiAgICogQWRkaXRpb25hbCBQcm9wZXJ0aWVzOiBkaWZmdXNpb24sIHdpZHRoLCBib3RoU2NhbGUsIHJvdGF0aW9uLCBhYnNvbHV0ZVBvc2l0aW9uLCBhbGlnbm1lbnQuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGRpZmZ1c2lvbjogdHJ1ZSwgd2lkdGg6NTc2LCBib3RoU2NhbGU6IHRydWV9XHJcbiAgICogRXhhbXBsZSB3aXRoIGFic29sdXRlUG9zaXRpb246IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhYnNvbHV0ZVBvc2l0aW9uOiA0MCB9LlxyXG4gICAqIEV4YW1wbGUgd2l0aCBhbGlnbm1lbnQ6IHthcHBlbmRCaXRtYXA6dXJpLCBkaWZmdXNpb246IHRydWUsIHdpZHRoOjU3NiwgYm90aFNjYWxlOiB0cnVlLCBhbGlnbm1lbnQ6XCJDZW50ZXJcIiB9LlxyXG4gICAqL1xyXG4gIGFwcGVuZEJpdG1hcD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gUmFuZG9tIGRpdGhlcjogdHJ1ZSA9IFZhbGlkLCBmYWxzZSA9IEludmFsaWQuIERlZmF1bHQgdHJ1ZS5cclxuICAgKiBFeGFtcGxlOiB7YXBwZW5kQml0bWFwOnVyaSwgZGlmZnVzaW9uOiBmYWxzZSB9XHJcbiAgICovXHJcbiAgZGlmZnVzaW9uPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC4gSGVpZ2h0IGlzIGNoYW5nZWQgYWNjb3JkaW5nIHRvIHRoZSBjb252ZXJzaW9uIHJhdGUgb2YgdGhlIHdpZHRoIHByb3BlcnR5LlxyXG4gICAqIHRydWUgPSBWYWxpZCwgZmFsc2UgPSBJbnZhbGlkLiBEZWZhdWx0IHRydWUuXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIGJvdGhTY2FsZTogdHJ1ZSB9XHJcbiAgICovXHJcbiAgYm90aFNjYWxlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUHJvcGVydHkgdG8gYmUgdXNlZCB3aXRoIHRoZSBhcHBlbmRCaXRtYXAgY29tbWFuZC5cclxuICAgKiBDaG9vc2UgdGhlIGZvcm1hdCBvZiB0aGUgcmV0dXJuIHZhbHVlIGRlZmluZWQgaW4gU3RhclBSTlQuQml0bWFwQ29udmVydGVyUm90YXRpb24gb3IgdGhlIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIGVudW0uXHJcbiAgICogJ05vcm1hbCcgfCAnTGVmdDkwJyB8ICdSaWdodDkwJyB8ICdSb3RhdGUxODAnXHJcbiAgICogRXhhbXBsZToge2FwcGVuZEJpdG1hcDp1cmksIHJvdGF0aW9uOiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbi5MZWZ0OTAgfVxyXG4gICAqL1xyXG4gIHJvdGF0aW9uPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBzZW5kcyBhIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbCBudW1iZXI6IEV4YW1wbGU6IDEgPSBObzEsIDIgPSBObzJcclxuICAgKi9cclxuICBvcGVuQ2FzaERyYXdlcj86IG51bWJlcjtcclxufVxyXG5cclxuLyoqXHJcbiAqIEVtdWxhdGlvbiBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEVtdWxhdGlvbiB7XHJcbiAgLyoqIG1QT1AsIFNNLUwyMDAsIFNNLUwzMDAsIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXHJcbiAgU3RhclBSTlQgPSAnU3RhclBSTlQnLFxyXG4gIC8qKiBTTS1MMjAwLCBTTS1MMzAwICovXHJcbiAgU3RhclBSTlRMID0gJ1N0YXJQUk5UTCcsXHJcbiAgLyoqIEZWUDEwLCBUU1A2NTBJSSwgVFNQNzAwSUksIFRTUDgwMElJICovXHJcbiAgU3RhckxpbmUgPSAnU3RhckxpbmUnLFxyXG4gIC8qKiBUU1AxMDAgKi9cclxuICBTdGFyR3JhcGhpYyA9ICdTdGFyR3JhcGhpYycsXHJcbiAgLyoqIEJTQzEwICovXHJcbiAgRXNjUG9zID0gJ0VzY1BvcycsXHJcbiAgLyoqIFNNLVMyMTBpLCBTTS1TMjIwaSwgU00tUzIzMGksIFNNLVQzMDBpL1QzMDAsIFNNLVQ0MDBpICovXHJcbiAgRXNjUG9zTW9iaWxlID0gJ0VzY1Bvc01vYmlsZScsXHJcbiAgLyoqIFNQNzAwICovXHJcbiAgU3RhckRvdEltcGFjdCA9ICdTdGFyRG90SW1wYWN0JyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEVuY29kaW5nIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gRW5jb2Rpbmcge1xyXG4gIC8qKiBFbmdsaXNoICovXHJcbiAgVVNBU0NJSSA9ICdVUy1BU0NJSScsXHJcbiAgLyoqIEZyZW5jaCwgR2VybWFuLCBQb3J0dWd1ZXNlLCBTcGFuaXNoICovXHJcbiAgV2luZG93czEyNTIgPSAnV2luZG93cy0xMjUyJyxcclxuICAvKiogSmFwYW5lc2UgKi9cclxuICBTaGlmdEpJUyA9ICdTaGlmdC1KSVMnLFxyXG4gIC8qKiBSdXNzaWFuICovXHJcbiAgV2luZG93czEyNTEgPSAnV2luZG93cy0xMjUxJyxcclxuICAvKiogU2ltcGxpZmllZCBDaGluZXNlICovXHJcbiAgR0IyMzEyID0gJ0dCMjMxMicsXHJcbiAgLyoqIFRyYWRpdGlvbmFsIENoaW5lc2UgKi9cclxuICBCaWc1ID0gJ0JpZzUnLFxyXG4gIC8qKiBVRlQ4ICovXHJcbiAgVVRGOCA9ICdVVEYtOCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDb2RlUGFnZVR5cGUgY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDb2RlUGFnZVR5cGUge1xyXG4gIENQNzM3ID0gJ0NQNzM3JyxcclxuICBDUDc3MiA9ICdDUDc3MicsXHJcbiAgQ1A3NzQgPSAnQ1A3NzQnLFxyXG4gIENQODUxID0gJ0NQODUxJyxcclxuICBDUDg1MiA9ICdDUDg1MicsXHJcbiAgQ1A4NTUgPSAnQ1A4NTUnLFxyXG4gIENQODU3ID0gJ0NQODU3JyxcclxuICBDUDg1OCA9ICdDUDg1OCcsXHJcbiAgQ1A4NjAgPSAnQ1A4NjAnLFxyXG4gIENQODYxID0gJ0NQODYxJyxcclxuICBDUDg2MiA9ICdDUDg2MicsXHJcbiAgQ1A4NjMgPSAnQ1A4NjMnLFxyXG4gIENQODY0ID0gJ0NQODY0JyxcclxuICBDUDg2NSA9ICdDUDg2NScsXHJcbiAgQ1A4NjkgPSAnQ1A4NjknLFxyXG4gIENQODc0ID0gJ0NQODc0JyxcclxuICBDUDkyOCA9ICdDUDkyOCcsXHJcbiAgQ1A5MzIgPSAnQ1A5MzInLFxyXG4gIENQOTk5ID0gJ0NQOTk5JyxcclxuICBDUDEwMDEgPSAnQ1AxMDAxJyxcclxuICBDUDEyNTAgPSAnQ1AxMjUwJyxcclxuICBDUDEyNTEgPSAnQ1AxMjUxJyxcclxuICBDUDEyNTIgPSAnQ1AxMjUyJyxcclxuICBDUDIwMDEgPSAnQ1AyMDAxJyxcclxuICBDUDMwMDEgPSAnQ1AzMDAxJyxcclxuICBDUDMwMDIgPSAnQ1AzMDAyJyxcclxuICBDUDMwMTEgPSAnQ1AzMDExJyxcclxuICBDUDMwMTIgPSAnQ1AzMDEyJyxcclxuICBDUDMwMjEgPSAnQ1AzMDIxJyxcclxuICBDUDMwNDEgPSAnQ1AzMDQxJyxcclxuICBDUDM4NDAgPSAnQ1AzODQwJyxcclxuICBDUDM4NDEgPSAnQ1AzODQxJyxcclxuICBDUDM4NDMgPSAnQ1AzODQzJyxcclxuICBDUDM4NDUgPSAnQ1AzODQ1JyxcclxuICBDUDM4NDYgPSAnQ1AzODQ2JyxcclxuICBDUDM4NDcgPSAnQ1AzODQ3JyxcclxuICBDUDM4NDggPSAnQ1AzODQ4JyxcclxuICBVVEY4ID0gJ1VURjgnLFxyXG4gIEJsYW5rID0gJ0JsYW5rJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEludGVybmF0aW9uYWxUeXBlIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gSW50ZXJuYXRpb25hbFR5cGUge1xyXG4gIFVLID0gJ1VLJyxcclxuICBVU0EgPSAnVVNBJyxcclxuICBGcmFuY2UgPSAnRnJhbmNlJyxcclxuICBHZXJtYW55ID0gJ0dlcm1hbnknLFxyXG4gIERlbm1hcmsgPSAnRGVubWFyaycsXHJcbiAgU3dlZGVuID0gJ1N3ZWRlbicsXHJcbiAgSXRhbHkgPSAnSXRhbHknLFxyXG4gIFNwYWluID0gJ1NwYWluJyxcclxuICBKYXBhbiA9ICdKYXBhbicsXHJcbiAgTm9yd2F5ID0gJ05vcndheScsXHJcbiAgRGVubWFyazIgPSAnRGVubWFyazInLFxyXG4gIFNwYWluMiA9ICdTcGFpbjInLFxyXG4gIExhdGluQW1lcmljYSA9ICdMYXRpbkFtZXJpY2EnLFxyXG4gIEtvcmVhID0gJ0tvcmVhJyxcclxuICBJcmVsYW5kID0gJ0lyZWxhbmQnLFxyXG4gIExlZ2FsID0gJ0xlZ2FsJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEZvbnRTdHlsZVR5cGUgY29uc3RhbnRzLlxyXG4gKi9cclxuZXhwb3J0IGVudW0gRm9udFN0eWxlVHlwZSB7XHJcbiAgLyoqIEZvbnQtQSAoMTIgeCAyNCBkb3RzKSAvIFNwZWNpZnkgNyB4IDkgZm9udCAoaGFsZiBkb3RzKSAqL1xyXG4gIEEgPSAnQScsXHJcbiAgLyoqIEZvbnQtQiAoOSB4IDI0IGRvdHMpIC8gU3BlY2lmeSA1IHggOSBmb250ICgyUC0xKSAqL1xyXG4gIEIgPSAnQicsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBDdXRQYXBlckFjdGlvbiBjb25zdGFudHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBDdXRQYXBlckFjdGlvbiB7XHJcbiAgRnVsbEN1dCA9ICdGdWxsQ3V0JyxcclxuICBGdWxsQ3V0V2l0aEZlZWQgPSAnRnVsbEN1dFdpdGhGZWVkJyxcclxuICBQYXJ0aWFsQ3V0ID0gJ1BhcnRpYWxDdXQnLFxyXG4gIFBhcnRpYWxDdXRXaXRoRmVlZCA9ICdQYXJ0aWFsQ3V0V2l0aEZlZWQnLFxyXG59XHJcblxyXG4vKipcclxuICogQmxhY2tNYXJrVHlwZSBjb25zdGFudHMuXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCbGFja01hcmtUeXBlIHtcclxuICBWYWxpZCA9ICdWYWxpZCcsXHJcbiAgSW52YWxpZCA9ICdJbnZhbGlkJyxcclxuICBWYWxpZFdpdGhEZXRlY3Rpb24gPSAnVmFsaWRXaXRoRGV0ZWN0aW9uJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIExvZ29TaXplIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gTG9nb1NpemUge1xyXG4gIE5vcm1hbCA9ICdOb3JtYWwnLFxyXG4gIERvdWJsZVdpZHRoID0gJ0RvdWJsZVdpZHRoJyxcclxuICBEb3VibGVIZWlnaHQgPSAnRG91YmxlSGVpZ2h0JyxcclxuICBEb3VibGVXaWR0aERvdWJsZUhlaWdodCA9ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCcsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBBbGlnbm1lbnRQb3NpdGlvbiBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEFsaWdubWVudFBvc2l0aW9uIHtcclxuICBMZWZ0ID0gJ0xlZnQnLFxyXG4gIENlbnRlciA9ICdDZW50ZXInLFxyXG4gIFJpZ2h0ID0gJ1JpZ2h0JyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhcmNvZGVTeW1ib2xvZ3kgY29uc3RhbnRzXHJcbiAqL1xyXG5leHBvcnQgZW51bSBCYXJjb2RlU3ltYm9sb2d5IHtcclxuICBDb2RlMTI4ID0gJ0NvZGUxMjgnLFxyXG4gIENvZGUzOSA9ICdDb2RlMzknLFxyXG4gIENvZGU5MyA9ICdDb2RlOTMnLFxyXG4gIElURiA9ICdJVEYnLFxyXG4gIEpBTjggPSAnSkFOOCcsXHJcbiAgSkFOMTMgPSAnSkFOMTMnLFxyXG4gIE5XNyA9ICdOVzcnLFxyXG4gIFVQQ0EgPSAnVVBDQScsXHJcbiAgVVBDRSA9ICdVUENFJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIEJhcmNvZGVXaWR0aCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVXaWR0aCB7XHJcbiAgTW9kZTEgPSAnTW9kZTEnLFxyXG4gIE1vZGUyID0gJ01vZGUyJyxcclxuICBNb2RlMyA9ICdNb2RlMycsXHJcbiAgTW9kZTQgPSAnTW9kZTQnLFxyXG4gIE1vZGU1ID0gJ01vZGU1JyxcclxuICBNb2RlNiA9ICdNb2RlNicsXHJcbiAgTW9kZTcgPSAnTW9kZTcnLFxyXG4gIE1vZGU4ID0gJ01vZGU4JyxcclxuICBNb2RlOSA9ICdNb2RlOScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBRckNvZGVNb2RlbCBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIFFyQ29kZU1vZGVsIHtcclxuICBObzEgPSAnTm8xJyxcclxuICBObzIgPSAnTm8yJyxcclxufVxyXG5cclxuLyoqXHJcbiAqIFFyQ29kZUxldmVsIGNvbnN0YW50c1xyXG4gKi9cclxuZXhwb3J0IGVudW0gUXJDb2RlTGV2ZWwge1xyXG4gIEggPSAnSCcsXHJcbiAgTCA9ICdMJyxcclxuICBNID0gJ00nLFxyXG4gIFEgPSAnUScsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiBjb25zdGFudHNcclxuICovXHJcbmV4cG9ydCBlbnVtIEJpdG1hcENvbnZlcnRlclJvdGF0aW9uIHtcclxuICBOb3JtYWwgPSAnTm9ybWFsJyxcclxuICBMZWZ0OTAgPSAnTGVmdDkwJyxcclxuICBSaWdodDkwID0gJ1JpZ2h0OTAnLFxyXG4gIFJvdGF0ZTE4MCA9ICdSb3RhdGUxODAnLFxyXG59XHJcblxyXG4vKipcclxuICogUHVzaCBhIG5ldyBQcmludENvbW1hbmQgb2JqZWN0IHRvIHRoZSBhcnJheSBmb3IgYSBzZXBhcmF0ZSBpbnN0cnVjdGlvbiB0byB0aGUgcHJpbnRlci4gRXhhbXBsZSBbe2FwcGVuZDpcInRleHRcIn0sIHtcIm9wZW5DYXNoRHJhd2VyOiAxXCJ9XVxyXG4gKi9cclxuZXhwb3J0IHR5cGUgQ29tbWFuZHNBcnJheSA9IEFycmF5PFByaW50Q29tbWFuZD47XHJcblxyXG4vKipcclxuICogQG5hbWUgU3RhclBSTlRcclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIElvbmljIE5hdGl2ZSB3cmFwcGVycyBmb3IgdGhlIHN0YXJwcm50IGNvcmRvdmEgcGx1Z2luIGZvciBTdGFyIE1pY3JvbmljcyBCbHVldG9vdGgvTEFOIHByaW50ZXJzXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFN0YXJQUk5UIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3N0YXItcHJudC9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHN0YXJwcm50OiBTdGFyUFJOVCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiB0aGlzLnN0YXJwcm50LnBvcnREaXNjb3ZlcnkoJ0FsbCcpXHJcbiAqICAgLnRoZW4oKHJlczogYW55KSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IGFueSkgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTdGFyUFJOVCcsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhcnBybnQnLCAvLyBucG0gcGFja2FnZSBuYW1lLCBleGFtcGxlOiBjb3Jkb3ZhLXBsdWdpbi1jYW1lcmFcclxuICBwbHVnaW5SZWY6ICdzdGFycHJudCcsIC8vIHRoZSB2YXJpYWJsZSByZWZlcmVuY2UgdG8gY2FsbCB0aGUgcGx1Z2luLCBleGFtcGxlOiBuYXZpZ2F0b3IuZ2VvbG9jYXRpb25cclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2F1Y3RpZmVyYS1qb3NlZC9zdGFycHJudCcsIC8vIHRoZSBnaXRodWIgcmVwb3NpdG9yeSBVUkwgZm9yIHRoZSBwbHVnaW5cclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSwgLy8gQXJyYXkgb2YgcGxhdGZvcm1zIHN1cHBvcnRlZCwgZXhhbXBsZTogWydBbmRyb2lkJywgJ2lPUyddXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFN0YXJQUk5UIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBFbXVsYXRpb25cclxuICAgKi9cclxuICBFbXVsYXRpb24gPSB7XHJcbiAgICBTdGFyUFJOVDogJ1N0YXJQUk5UJyxcclxuICAgIFN0YXJQUk5UTDogJ1N0YXJQUk5UTCcsXHJcbiAgICBTdGFyTGluZTogJ1N0YXJMaW5lJyxcclxuICAgIFN0YXJHcmFwaGljOiAnU3RhckdyYXBoaWMnLFxyXG4gICAgRXNjUG9zOiAnRXNjUG9zJyxcclxuICAgIEVzY1Bvc01vYmlsZTogJ0VzY1Bvc01vYmlsZScsXHJcbiAgICBTdGFyRG90SW1wYWN0OiAnU3RhckRvdEltcGFjdCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEVuY29kaW5nXHJcbiAgICovXHJcbiAgRW5jb2RpbmcgPSB7XHJcbiAgICBVU0FTQ0lJOiAnVVMtQVNDSUknLFxyXG4gICAgV2luZG93czEyNTI6ICdXaW5kb3dzLTEyNTInLFxyXG4gICAgU2hpZnRKSVM6ICdTaGlmdC1KSVMnLFxyXG4gICAgV2luZG93czEyNTE6ICdXaW5kb3dzLTEyNTEnLFxyXG4gICAgR0IyMzEyOiAnR0IyMzEyJyxcclxuICAgIEJpZzU6ICdCaWc1JyxcclxuICAgIFVURjg6ICdVVEYtOCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29kZVBhZ2VUeXBlIGNvbnN0YW50c1xyXG4gICAqL1xyXG4gIENvZGVQYWdlVHlwZSA9IHtcclxuICAgIENQNzM3OiAnQ1A3MzcnLFxyXG4gICAgQ1A3NzI6ICdDUDc3MicsXHJcbiAgICBDUDc3NDogJ0NQNzc0JyxcclxuICAgIENQODUxOiAnQ1A4NTEnLFxyXG4gICAgQ1A4NTI6ICdDUDg1MicsXHJcbiAgICBDUDg1NTogJ0NQODU1JyxcclxuICAgIENQODU3OiAnQ1A4NTcnLFxyXG4gICAgQ1A4NTg6ICdDUDg1OCcsXHJcbiAgICBDUDg2MDogJ0NQODYwJyxcclxuICAgIENQODYxOiAnQ1A4NjEnLFxyXG4gICAgQ1A4NjI6ICdDUDg2MicsXHJcbiAgICBDUDg2MzogJ0NQODYzJyxcclxuICAgIENQODY0OiAnQ1A4NjQnLFxyXG4gICAgQ1A4NjU6ICdDUDg2NScsXHJcbiAgICBDUDg2OTogJ0NQODY5JyxcclxuICAgIENQODc0OiAnQ1A4NzQnLFxyXG4gICAgQ1A5Mjg6ICdDUDkyOCcsXHJcbiAgICBDUDkzMjogJ0NQOTMyJyxcclxuICAgIENQOTk5OiAnQ1A5OTknLFxyXG4gICAgQ1AxMDAxOiAnQ1AxMDAxJyxcclxuICAgIENQMTI1MDogJ0NQMTI1MCcsXHJcbiAgICBDUDEyNTE6ICdDUDEyNTEnLFxyXG4gICAgQ1AxMjUyOiAnQ1AxMjUyJyxcclxuICAgIENQMjAwMTogJ0NQMjAwMScsXHJcbiAgICBDUDMwMDE6ICdDUDMwMDEnLFxyXG4gICAgQ1AzMDAyOiAnQ1AzMDAyJyxcclxuICAgIENQMzAxMTogJ0NQMzAxMScsXHJcbiAgICBDUDMwMTI6ICdDUDMwMTInLFxyXG4gICAgQ1AzMDIxOiAnQ1AzMDIxJyxcclxuICAgIENQMzA0MTogJ0NQMzA0MScsXHJcbiAgICBDUDM4NDA6ICdDUDM4NDAnLFxyXG4gICAgQ1AzODQxOiAnQ1AzODQxJyxcclxuICAgIENQMzg0MzogJ0NQMzg0MycsXHJcbiAgICBDUDM4NDU6ICdDUDM4NDUnLFxyXG4gICAgQ1AzODQ2OiAnQ1AzODQ2JyxcclxuICAgIENQMzg0NzogJ0NQMzg0NycsXHJcbiAgICBDUDM4NDg6ICdDUDM4NDgnLFxyXG4gICAgVVRGODogJ1VURjgnLFxyXG4gICAgQmxhbms6ICdCbGFuaycsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEludGVybmF0aW9uYWxUeXBlXHJcbiAgICovXHJcbiAgSW50ZXJuYXRpb25hbFR5cGUgPSB7XHJcbiAgICBVSzogJ1VLJyxcclxuICAgIFVTQTogJ1VTQScsXHJcbiAgICBGcmFuY2U6ICdGcmFuY2UnLFxyXG4gICAgR2VybWFueTogJ0dlcm1hbnknLFxyXG4gICAgRGVubWFyazogJ0Rlbm1hcmsnLFxyXG4gICAgU3dlZGVuOiAnU3dlZGVuJyxcclxuICAgIEl0YWx5OiAnSXRhbHknLFxyXG4gICAgU3BhaW46ICdTcGFpbicsXHJcbiAgICBKYXBhbjogJ0phcGFuJyxcclxuICAgIE5vcndheTogJ05vcndheScsXHJcbiAgICBEZW5tYXJrMjogJ0Rlbm1hcmsyJyxcclxuICAgIFNwYWluMjogJ1NwYWluMicsXHJcbiAgICBMYXRpbkFtZXJpY2E6ICdMYXRpbkFtZXJpY2EnLFxyXG4gICAgS29yZWE6ICdLb3JlYScsXHJcbiAgICBJcmVsYW5kOiAnSXJlbGFuZCcsXHJcbiAgICBMZWdhbDogJ0xlZ2FsJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgRm9udFN0eWxlVHlwZVxyXG4gICAqL1xyXG4gIEZvbnRTdHlsZVR5cGUgPSB7XHJcbiAgICAvKiogRm9udC1BICgxMiB4IDI0IGRvdHMpIC8gU3BlY2lmeSA3IHggOSBmb250IChoYWxmIGRvdHMpICovXHJcbiAgICBBOiAnQScsXHJcbiAgICAvKiogRm9udC1CICg5IHggMjQgZG90cykgLyBTcGVjaWZ5IDUgeCA5IGZvbnQgKDJQLTEpICovXHJcbiAgICBCOiAnQicsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEN1dFBhcGVyQWN0aW9uXHJcbiAgICovXHJcbiAgQ3V0UGFwZXJBY3Rpb24gPSB7XHJcbiAgICBGdWxsQ3V0OiAnRnVsbEN1dCcsXHJcbiAgICBGdWxsQ3V0V2l0aEZlZWQ6ICdGdWxsQ3V0V2l0aEZlZWQnLFxyXG4gICAgUGFydGlhbEN1dDogJ1BhcnRpYWxDdXQnLFxyXG4gICAgUGFydGlhbEN1dFdpdGhGZWVkOiAnUGFydGlhbEN1dFdpdGhGZWVkJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQmxhY2tNYXJrVHlwZVxyXG4gICAqL1xyXG4gIEJsYWNrTWFya1R5cGUgPSB7XHJcbiAgICBWYWxpZDogJ1ZhbGlkJyxcclxuICAgIEludmFsaWQ6ICdJbnZhbGlkJyxcclxuICAgIFZhbGlkV2l0aERldGVjdGlvbjogJ1ZhbGlkV2l0aERldGVjdGlvbicsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEFsaWdubWVudFBvc2l0aW9uXHJcbiAgICovXHJcbiAgQWxpZ25tZW50UG9zaXRpb24gPSB7XHJcbiAgICBMZWZ0OiAnTGVmdCcsXHJcbiAgICBDZW50ZXI6ICdDZW50ZXInLFxyXG4gICAgUmlnaHQ6ICdSaWdodCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIExvZ29TaXplXHJcbiAgICovXHJcbiAgTG9nb1NpemUgPSB7XHJcbiAgICBOb3JtYWw6ICdOb3JtYWwnLFxyXG4gICAgRG91YmxlV2lkdGg6ICdEb3VibGVXaWR0aCcsXHJcbiAgICBEb3VibGVIZWlnaHQ6ICdEb3VibGVIZWlnaHQnLFxyXG4gICAgRG91YmxlV2lkdGhEb3VibGVIZWlnaHQ6ICdEb3VibGVXaWR0aERvdWJsZUhlaWdodCcsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIEJhcmNvZGVTeW1ib2xvZ3lcclxuICAgKi9cclxuICBCYXJjb2RlU3ltYm9sb2d5ID0ge1xyXG4gICAgQ29kZTEyODogJ0NvZGUxMjgnLFxyXG4gICAgQ29kZTM5OiAnQ29kZTM5JyxcclxuICAgIENvZGU5MzogJ0NvZGU5MycsXHJcbiAgICBJVEY6ICdJVEYnLFxyXG4gICAgSkFOODogJ0pBTjgnLFxyXG4gICAgSkFOMTM6ICdKQU4xMycsXHJcbiAgICBOVzc6ICdOVzcnLFxyXG4gICAgVVBDQTogJ1VQQ0EnLFxyXG4gICAgVVBDRTogJ1VQQ0UnLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIENvbnN0YW50IGZvciBwb3NzaWJsZSBCYXJjb2RlV2lkdGhcclxuICAgKi9cclxuICBCYXJjb2RlV2lkdGggPSB7XHJcbiAgICBNb2RlMTogJ01vZGUxJyxcclxuICAgIE1vZGUyOiAnTW9kZTInLFxyXG4gICAgTW9kZTM6ICdNb2RlMycsXHJcbiAgICBNb2RlNDogJ01vZGU0JyxcclxuICAgIE1vZGU1OiAnTW9kZTUnLFxyXG4gICAgTW9kZTY6ICdNb2RlNicsXHJcbiAgICBNb2RlNzogJ01vZGU3JyxcclxuICAgIE1vZGU4OiAnTW9kZTgnLFxyXG4gICAgTW9kZTk6ICdNb2RlOScsXHJcbiAgfTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29uc3RhbnQgZm9yIHBvc3NpYmxlIFFyQ29kZU1vZGVsXHJcbiAgICovXHJcbiAgUXJDb2RlTW9kZWwgPSB7XHJcbiAgICBObzE6ICdObzEnLFxyXG4gICAgTm8yOiAnTm8yJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgUXJDb2RlTGV2ZWxcclxuICAgKi9cclxuICBRckNvZGVMZXZlbCA9IHtcclxuICAgIEg6ICdIJyxcclxuICAgIEw6ICdMJyxcclxuICAgIE06ICdNJyxcclxuICAgIFE6ICdRJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgQml0bWFwQ29udmVydGVyUm90YXRpb25cclxuICAgKi9cclxuICBCaXRtYXBDb252ZXJ0ZXJSb3RhdGlvbiA9IHtcclxuICAgIE5vcm1hbDogJ05vcm1hbCcsXHJcbiAgICBMZWZ0OTA6ICdMZWZ0OTAnLFxyXG4gICAgUmlnaHQ5MDogJ1JpZ2h0OTAnLFxyXG4gICAgUm90YXRlMTgwOiAnUm90YXRlMTgwJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBGaW5kIGF2YWlsYWJsZSBwcmludGVyc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgIEludGVyZmFjZSBUeXBlOiBBbGwsIExBTiwgQmx1ZXRvb3RoLCBVU0JcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxQcmludGVycz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhbiBhcnJheSBvZiBwcmludGVyc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwb3J0RGlzY292ZXJ5KHR5cGU6IHN0cmluZyk6IFByb21pc2U8UHJpbnRlcnM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrcyB0aGUgc3RhdHVzIG9mIHRoZSBwcmludGVyXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcG9ydCAgUHJpbnRlciBuYW1lIGkuZSBCVDpTdGFyTWljcm9uaWNzXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8UHJpbnRlclN0YXR1cz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgUHJpbnRlclN0YXR1cyBvYmplY3RcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgY2hlY2tTdGF0dXMocG9ydDogc3RyaW5nLCBlbXVsYXRpb246IHN0cmluZyk6IFByb21pc2U8UHJpbnRlclN0YXR1cz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHJpbnRzIHBsYWluIHRleHRcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHBhcmFtIHtQcmludE9ian0gcHJpbnRPYmogIHRleHQ6c3RyaW5nLCBjdXRSZWNlaXB0Pzpib29sZWFuLCBvcGVuQ2FzaERyYXdlcj86Ym9vbGVhblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIHByaW50ZWQgY29ycmVjdGx5IG9yIGVycm9yIG1lc3NhZ2Ugc3RyaW5nIHJldHVybmVkIGJ5IHRoZSBTREsuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHByaW50UmF3VGV4dChwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIHByaW50T2JqOiBQcmludE9iaik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb252ZXJ0cyB0aGUgdGV4dCBpbnRvIGEgYml0bWFwIGltYWdlIGFuZCBzZW5kcyBpdCB0byB0aGUgcHJpbnRlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHBhcmFtIHtSYXN0ZXJPYmp9IHJhc3Rlck9iaiAgdGV4dDpzdHJpbmcsIGN1dFJlY2VpcHQ/OmJvb2xlYW4sIG9wZW5DYXNoRHJhd2VyPzpib29sZWFuLCBmb250U2l6ZTpudW1iZXIsIHBhcGVyV2lkdGg6bnVtYmVyXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gU3VjY2VzcyEgaWYgcHJpbnRlZCBjb3JyZWN0bHkgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcHJpbnRSYXN0ZXJSZWNlaXB0KHBvcnQ6IHN0cmluZ3xudWxsLCBlbXVsYXRpb246IHN0cmluZywgcmFzdGVyT2JqOiBSYXN0ZXJPYmopOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0cyBhbiBpbWFnZSBmcm9tIGEgc3RyaW5nIFVSSSBhbmQgY29udmVydHMgaXQgdG8gYml0bWFwIHRvIHNlbmQgaXQgdG8gdGhlIHByaW50ZXJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0IFByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy4gIFNlbmQgbnVsbCB0byB1c2UgYSBwcmludGVyIGNvbm5lY3RlZCB2aWEgU3RhcklPRXh0TWFuYWdlciB1c2luZyB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGVtdWxhdGlvbiAgU3RhclByaW50ZXIgRW11bGF0aW9uIHR5cGU6IFwiU3RhclBSTlRcIiwgXCJTdGFyUFJOVExcIiwgXCJTdGFyTGluZVwiLCBcIlN0YXJHcmFwaGljXCIsIFwiRXNjUG9zXCIsIFwiRXNjUG9zTW9iaWxlXCIsIFwiU3RhckRvdEltcGFjdFwiXHJcbiAgICogQHBhcmFtIHtJbWFnZU9ian0gaW1hZ2VPYmogIHVyaTpzdHJpbmcsIHBhcGVyV2lkdGg/Om51bWJlciwgY3V0UmVjZWlwdD86Ym9vbGVhbiwgb3BlbkNhc2hEcmF3ZXI/OmJvb2xlYW5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludEltYWdlKHBvcnQ6IHN0cmluZ3xudWxsLCBlbXVsYXRpb246IHN0cmluZywgaW1hZ2VPYmo6IEltYWdlT2JqKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlbmRzIGFuIGFwcGVuZFBlcmlwaGVyYWwgY29tbWFuZCB0byB0aGUgcHJpbnRlciBmb3IgY2hhbm5lbHMgTm8xIGFuZCBObzJcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFN1Y2Nlc3MhIGlmIG9wZW5lZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvcGVuQ2FzaERyYXdlcihwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2VuZHMgYW4gQXJyYXkgb2YgY29tbWFuZHMgdG8gdGhlIGNvbW1hbmQgYnVmZmVyIHVzaW5nIHRoZSBBbmRyb2lkIElDb21tYW5kQnVpbGRlckludGVyZmFjZSBvciBpT1MgSVNDQkJ1aWxkZXJJbnRlcmZhY2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwb3J0ICBQcmludGVyIG5hbWUgaS5lIEJUOlN0YXJNaWNyb25pY3MuICBTZW5kIG51bGwgdG8gdXNlIGEgcHJpbnRlciBjb25uZWN0ZWQgdmlhIFN0YXJJT0V4dE1hbmFnZXIgdXNpbmcgdGhlIGNvbm5lY3QoKSBmdW5jdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBlbXVsYXRpb24gIFN0YXJQcmludGVyIEVtdWxhdGlvbiB0eXBlOiBcIlN0YXJQUk5UXCIsIFwiU3RhclBSTlRMXCIsIFwiU3RhckxpbmVcIiwgXCJTdGFyR3JhcGhpY1wiLCBcIkVzY1Bvc1wiLCBcIkVzY1Bvc01vYmlsZVwiLCBcIlN0YXJEb3RJbXBhY3RcIlxyXG4gICAqIEBwYXJhbSB7Q29tbWFuZHNBcnJheX0gY29tbWFuZHNBcnJheSAgZWFjaCBjb21tYW5kIGluIHRoZSBhcnJheSBzaG91bGQgYmUgYW4gaW5zdGFuY2Ugb2YgdGhlIFByaW50Q29tbWFuZCBvYmplY3QuIEV4YW1wbGUgW3thcHBlbmQ6XCJ0ZXh0XCJ9LCB7XCJvcGVuQ2FzaERyYXdlcjogMVwifV1cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBwcmludGVkIGNvcnJlY3RseSBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBwcmludChwb3J0OiBzdHJpbmd8bnVsbCwgZW11bGF0aW9uOiBzdHJpbmcsIGNvbW1hbmRzQXJyYXk6IENvbW1hbmRzQXJyYXkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWxsb3dzIHlvdSB0byBjb25uZWN0IHRvIHRoZSBwcmludGVyLCBrZWVwIHRoZSBjb25uZWN0aW9uIGFsaXZlIGFuZCByZWNlaXZlIHN0YXR1cyB1cGRhdGVzIHRocm91Z2ggYW4gb2JzZXJ2YWJsZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBvcnQgIHByaW50ZXIgbmFtZSBpLmUgQlQ6U3Rhck1pY3Jvbmljcy5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZW11bGF0aW9uICBTdGFyUHJpbnRlciBFbXVsYXRpb24gdHlwZTogXCJTdGFyUFJOVFwiLCBcIlN0YXJQUk5UTFwiLCBcIlN0YXJMaW5lXCIsIFwiU3RhckdyYXBoaWNcIiwgXCJFc2NQb3NcIiwgXCJFc2NQb3NNb2JpbGVcIiwgXCJTdGFyRG90SW1wYWN0XCJcclxuICAgKiBAcGFyYW0gaGFzQmFyY29kZVJlYWRlclxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPGFueT59IFN1Y2Nlc3MhIGlmIGNvbm5lY3RlZCBvciBlcnJvciBtZXNzYWdlIHN0cmluZyByZXR1cm5lZCBieSB0aGUgU0RLLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjYWxsYmFja1N0eWxlOiAnbm9kZScsXHJcbiAgfSlcclxuICBjb25uZWN0KHBvcnQ6IHN0cmluZywgZW11bGF0aW9uOiBzdHJpbmcsIGhhc0JhcmNvZGVSZWFkZXI6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGRldmljZSBzdGF0dXMgZXZlbnRzLiBPbmx5IGZpcmVzIHdoZW4gYSBwcmludGVyIGlzIGNvbm5uZWN0ZWQgdGhyb3VnaCB0aGUgY29ubmVjdCgpIGZ1bmN0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fSBkYXRhVHlwZTogcHJpbnRlck9ubGluZSwgcHJpbnRlck9mZmxpbmUsIHByaW50ZXJJbXBvc3NpYmxlLCBwcmludGVyUGFwZXJFbXB0eSwgcHJpbnRlclBhcGVyTmVhckVtcHR5LCBwcmludGVyUGFwZXJSZWFkeSwgcHJpbnRlckNvdmVyT3BlbiwgcHJpbnRlckNvdmVyQ2xvc2UsIGNhc2hEcmF3ZXJPcGVuLCBjYXNoRHJhd2VyQ2xvc2VcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBldmVudE9ic2VydmFibGU6IHRydWUsXHJcbiAgICBldmVudDogJ3N0YXJQcm50RGF0YScsXHJcbiAgfSlcclxuICBnZXRTdGF0dXMoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0byBkaXNjb25uZWN0IChjbG9zZSB0aGUgY29ubmVjdGlvbiB0byB0aGUgcGVyaXBoZXJhbHMpLCB0aGlzIGlzIHVzZWZ1bCB0byBhdm9pZCBrZWVwaW5nIGFsaXZlIGEgY29ubmVjdGlvbiB3aGVuIG5vdCBpbiB0aGUgYXBwIHRvIHNhdmUgZGV2aWNlIGJhdHRlcnlcclxuICAgKiAoZW5lcmd5IGNvbnN1bXB0aW9uKS4gWW91IHNob3VsZCBjYWxsIHRoaXMgZnVuY3Rpb24gd2hlbiB0aGUgYXBwIGlzIHBhdXNlZCBvciBjbG9zZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBTdWNjZXNzISBpZiBjb25uZWN0ZWQgb3IgZXJyb3IgbWVzc2FnZSBzdHJpbmcgcmV0dXJuZWQgYnkgdGhlIFNESy5cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgZGlzY29ubmVjdCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=