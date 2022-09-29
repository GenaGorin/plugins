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
export var BarcodeFormat;
(function (BarcodeFormat) {
    BarcodeFormat[BarcodeFormat["UNKNOWN"] = -1] = "UNKNOWN";
    BarcodeFormat[BarcodeFormat["ALL_FORMATS"] = 0] = "ALL_FORMATS";
    BarcodeFormat[BarcodeFormat["CODE_128"] = 1] = "CODE_128";
    BarcodeFormat[BarcodeFormat["CODE_39"] = 2] = "CODE_39";
    BarcodeFormat[BarcodeFormat["CODE_93"] = 4] = "CODE_93";
    BarcodeFormat[BarcodeFormat["CODABAR"] = 8] = "CODABAR";
    BarcodeFormat[BarcodeFormat["DATA_MATRIX"] = 16] = "DATA_MATRIX";
    BarcodeFormat[BarcodeFormat["EAN_13"] = 32] = "EAN_13";
    BarcodeFormat[BarcodeFormat["EAN_8"] = 64] = "EAN_8";
    BarcodeFormat[BarcodeFormat["ITF"] = 128] = "ITF";
    BarcodeFormat[BarcodeFormat["QR_CODE"] = 256] = "QR_CODE";
    BarcodeFormat[BarcodeFormat["UPC_A"] = 512] = "UPC_A";
    BarcodeFormat[BarcodeFormat["UPC_E"] = 1024] = "UPC_E";
    BarcodeFormat[BarcodeFormat["PDF417"] = 2048] = "PDF417";
    BarcodeFormat[BarcodeFormat["AZTEC"] = 4096] = "AZTEC";
})(BarcodeFormat || (BarcodeFormat = {}));
export var BarcodeValueType;
(function (BarcodeValueType) {
    /** Unknown Barcode value types.  */
    BarcodeValueType[BarcodeValueType["Unknown"] = 0] = "Unknown";
    /** Barcode value type for contact info. */
    BarcodeValueType[BarcodeValueType["ContactInfo"] = 1] = "ContactInfo";
    /** Barcode value type for email addresses. */
    BarcodeValueType[BarcodeValueType["Email"] = 2] = "Email";
    /** Barcode value type for ISBNs. */
    BarcodeValueType[BarcodeValueType["ISBN"] = 3] = "ISBN";
    /** Barcode value type for phone numbers. */
    BarcodeValueType[BarcodeValueType["Phone"] = 4] = "Phone";
    /** Barcode value type for product codes. */
    BarcodeValueType[BarcodeValueType["Product"] = 5] = "Product";
    /** Barcode value type for SMS details. */
    BarcodeValueType[BarcodeValueType["SMS"] = 6] = "SMS";
    /** Barcode value type for plain text. */
    BarcodeValueType[BarcodeValueType["Text"] = 7] = "Text";
    /** Barcode value type for URLs/bookmarks. */
    BarcodeValueType[BarcodeValueType["URL"] = 8] = "URL";
    /** Barcode value type for Wi-Fi access point details. */
    BarcodeValueType[BarcodeValueType["WiFi"] = 9] = "WiFi";
    /** Barcode value type for geographic coordinates. */
    BarcodeValueType[BarcodeValueType["GeographicCoordinates"] = 10] = "GeographicCoordinates";
    /** Barcode value type for calendar events. */
    BarcodeValueType[BarcodeValueType["CalendarEvent"] = 11] = "CalendarEvent";
    /** Barcode value type for driver's license data. */
    BarcodeValueType[BarcodeValueType["DriversLicense"] = 12] = "DriversLicense";
})(BarcodeValueType || (BarcodeValueType = {}));
export var BarcodeEmailType;
(function (BarcodeEmailType) {
    /** Unknown email type. */
    BarcodeEmailType[BarcodeEmailType["Unknown"] = 0] = "Unknown";
    /** Barcode work email type. */
    BarcodeEmailType[BarcodeEmailType["Work"] = 1] = "Work";
    /** Barcode home email type. */
    BarcodeEmailType[BarcodeEmailType["Home"] = 2] = "Home";
})(BarcodeEmailType || (BarcodeEmailType = {}));
export var BarcodePhoneType;
(function (BarcodePhoneType) {
    /** Unknown phone type. */
    BarcodePhoneType[BarcodePhoneType["Unknown"] = 0] = "Unknown";
    /** Barcode work phone type. */
    BarcodePhoneType[BarcodePhoneType["Work"] = 1] = "Work";
    /** Barcode home phone type. */
    BarcodePhoneType[BarcodePhoneType["Home"] = 2] = "Home";
    /** Barcode fax phone type. */
    BarcodePhoneType[BarcodePhoneType["Fax"] = 3] = "Fax";
    /** Barcode mobile phone type. */
    BarcodePhoneType[BarcodePhoneType["Mobile"] = 4] = "Mobile";
})(BarcodePhoneType || (BarcodePhoneType = {}));
export var BarcodeWiFiEncryptionType;
(function (BarcodeWiFiEncryptionType) {
    /** Barcode unknown Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Unknown"] = 0] = "Unknown";
    /** Barcode open Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["Open"] = 1] = "Open";
    /** Barcode WPA Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WPA"] = 2] = "WPA";
    /** Barcode WEP Wi-Fi encryption type. */
    BarcodeWiFiEncryptionType[BarcodeWiFiEncryptionType["WEP"] = 3] = "WEP";
})(BarcodeWiFiEncryptionType || (BarcodeWiFiEncryptionType = {}));
export var BarcodeAddressType;
(function (BarcodeAddressType) {
    /** Barcode unknown address type. */
    BarcodeAddressType[BarcodeAddressType["Unknown"] = 0] = "Unknown";
    /** Barcode work address type. */
    BarcodeAddressType[BarcodeAddressType["Work"] = 1] = "Work";
    /** Barcode home address type. */
    BarcodeAddressType[BarcodeAddressType["Home"] = 2] = "Home";
})(BarcodeAddressType || (BarcodeAddressType = {}));
var FirebaseVisionOriginal = /** @class */ (function (_super) {
    __extends(FirebaseVisionOriginal, _super);
    function FirebaseVisionOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVisionOriginal.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVisionOriginal.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVisionOriginal.prototype.imageLabeler = function (file_uri) { return cordova(this, "imageLabeler", {}, arguments); };
    FirebaseVisionOriginal.pluginName = "FirebaseVision";
    FirebaseVisionOriginal.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.pluginRef = "FirebaseVisionPlugin";
    FirebaseVisionOriginal.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVisionOriginal.platforms = ["Android", "iOS"];
    return FirebaseVisionOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseVision = new FirebaseVisionOriginal();
export { FirebaseVision };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtdmlzaW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBb0M1RixNQUFNLENBQU4sSUFBWSxhQWdCWDtBQWhCRCxXQUFZLGFBQWE7SUFDdkIsd0RBQVksQ0FBQTtJQUNaLCtEQUFlLENBQUE7SUFDZix5REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsZ0VBQWdCLENBQUE7SUFDaEIsc0RBQVcsQ0FBQTtJQUNYLG9EQUFVLENBQUE7SUFDVixpREFBUyxDQUFBO0lBQ1QseURBQWEsQ0FBQTtJQUNiLHFEQUFXLENBQUE7SUFDWCxzREFBWSxDQUFBO0lBQ1osd0RBQWEsQ0FBQTtJQUNiLHNEQUFZLENBQUE7QUFDZCxDQUFDLEVBaEJXLGFBQWEsS0FBYixhQUFhLFFBZ0J4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQTJCWDtBQTNCRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBb0M7SUFDcEMsNkRBQU8sQ0FBQTtJQUNQLDJDQUEyQztJQUMzQyxxRUFBVyxDQUFBO0lBQ1gsOENBQThDO0lBQzlDLHlEQUFLLENBQUE7SUFDTCxvQ0FBb0M7SUFDcEMsdURBQUksQ0FBQTtJQUNKLDRDQUE0QztJQUM1Qyx5REFBSyxDQUFBO0lBQ0wsNENBQTRDO0lBQzVDLDZEQUFPLENBQUE7SUFDUCwwQ0FBMEM7SUFDMUMscURBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1REFBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLHFEQUFHLENBQUE7SUFDSCx5REFBeUQ7SUFDekQsdURBQUksQ0FBQTtJQUNKLHFEQUFxRDtJQUNyRCwwRkFBcUIsQ0FBQTtJQUNyQiw4Q0FBOEM7SUFDOUMsMEVBQWEsQ0FBQTtJQUNiLG9EQUFvRDtJQUNwRCw0RUFBYyxDQUFBO0FBQ2hCLENBQUMsRUEzQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTJCM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDBCQUEwQjtJQUMxQiw2REFBTyxDQUFBO0lBQ1AsK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiw4QkFBOEI7SUFDOUIscURBQUcsQ0FBQTtJQUNILGlDQUFpQztJQUNqQywyREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQVhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFXM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx5QkFTWDtBQVRELFdBQVkseUJBQXlCO0lBQ25DLDZDQUE2QztJQUM3QywrRUFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHlFQUFJLENBQUE7SUFDSix5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1RUFBRyxDQUFBO0FBQ0wsQ0FBQyxFQVRXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFTcEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzVCLG9DQUFvQztJQUNwQyxpRUFBTyxDQUFBO0lBQ1AsaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7SUFDSixpQ0FBaUM7SUFDakMsMkRBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBTzdCOztJQXVJbUMsa0NBQTBCOzs7O0lBUTVELCtDQUFzQixhQUFDLFFBQWdCO0lBVXZDLHdDQUFlLGFBQUMsUUFBZ0I7SUFVaEMscUNBQVksYUFBQyxRQUFnQjs7Ozs7O3lCQS9SL0I7RUFtUW9DLDBCQUEwQjtTQUFqRCxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQbHVnaW4sIENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0IHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgYmxvY2tzOiBUZXh0TGluZVtdO1xyXG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XHJcbiAgaW1hZ2VXaWR0aDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRMaW5lIGV4dGVuZHMgVGV4dEJsb2NrIHtcclxuICBsaW5lczogVGV4dEVsZW1lbnRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0RWxlbWVudCBleHRlbmRzIFRleHRCbG9jayB7XHJcbiAgZWxlbWVudHM6IFRleHRCbG9ja1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRCbG9jayB7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIGNvcm5lclBvaW50czogVGV4dFBvaW50W107XHJcbiAgZnJhbWU6IFRleHRGcmFtZTtcclxuICByZWNvZ25pemVkTGFuZ3VhZ2VzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dFBvaW50IHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRGcmFtZSB7XHJcbiAgeDogbnVtYmVyO1xyXG4gIHk6IG51bWJlcjtcclxuICB3aWR0aDogbnVtYmVyO1xyXG4gIGhlaWdodDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlRm9ybWF0IHtcclxuICBVTktOT1dOID0gLTEsXHJcbiAgQUxMX0ZPUk1BVFMgPSAwLFxyXG4gIENPREVfMTI4ID0gMSxcclxuICBDT0RFXzM5ID0gMixcclxuICBDT0RFXzkzID0gNCxcclxuICBDT0RBQkFSID0gOCxcclxuICBEQVRBX01BVFJJWCA9IDE2LFxyXG4gIEVBTl8xMyA9IDMyLFxyXG4gIEVBTl84ID0gNjQsXHJcbiAgSVRGID0gMTI4LFxyXG4gIFFSX0NPREUgPSAyNTYsXHJcbiAgVVBDX0EgPSA1MTIsXHJcbiAgVVBDX0UgPSAxMDI0LFxyXG4gIFBERjQxNyA9IDIwNDgsXHJcbiAgQVpURUMgPSA0MDk2LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlVmFsdWVUeXBlIHtcclxuICAvKiogVW5rbm93biBCYXJjb2RlIHZhbHVlIHR5cGVzLiAgKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGNvbnRhY3QgaW5mby4gKi9cclxuICBDb250YWN0SW5mbyxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBlbWFpbCBhZGRyZXNzZXMuICovXHJcbiAgRW1haWwsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgSVNCTnMuICovXHJcbiAgSVNCTixcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwaG9uZSBudW1iZXJzLiAqL1xyXG4gIFBob25lLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHByb2R1Y3QgY29kZXMuICovXHJcbiAgUHJvZHVjdCxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBTTVMgZGV0YWlscy4gKi9cclxuICBTTVMsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcGxhaW4gdGV4dC4gKi9cclxuICBUZXh0LFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFVSTHMvYm9va21hcmtzLiAqL1xyXG4gIFVSTCxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBXaS1GaSBhY2Nlc3MgcG9pbnQgZGV0YWlscy4gKi9cclxuICBXaUZpLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGdlb2dyYXBoaWMgY29vcmRpbmF0ZXMuICovXHJcbiAgR2VvZ3JhcGhpY0Nvb3JkaW5hdGVzLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGNhbGVuZGFyIGV2ZW50cy4gKi9cclxuICBDYWxlbmRhckV2ZW50LFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGRyaXZlcidzIGxpY2Vuc2UgZGF0YS4gKi9cclxuICBEcml2ZXJzTGljZW5zZSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZUVtYWlsVHlwZSB7XHJcbiAgLyoqIFVua25vd24gZW1haWwgdHlwZS4gKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIHdvcmsgZW1haWwgdHlwZS4gKi9cclxuICBXb3JrLFxyXG4gIC8qKiBCYXJjb2RlIGhvbWUgZW1haWwgdHlwZS4gKi9cclxuICBIb21lLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlUGhvbmVUeXBlIHtcclxuICAvKiogVW5rbm93biBwaG9uZSB0eXBlLiAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgd29yayBwaG9uZSB0eXBlLiAqL1xyXG4gIFdvcmssXHJcbiAgLyoqIEJhcmNvZGUgaG9tZSBwaG9uZSB0eXBlLiAqL1xyXG4gIEhvbWUsXHJcbiAgLyoqIEJhcmNvZGUgZmF4IHBob25lIHR5cGUuICovXHJcbiAgRmF4LFxyXG4gIC8qKiBCYXJjb2RlIG1vYmlsZSBwaG9uZSB0eXBlLiAqL1xyXG4gIE1vYmlsZSxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZVdpRmlFbmNyeXB0aW9uVHlwZSB7XHJcbiAgLyoqIEJhcmNvZGUgdW5rbm93biBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXHJcbiAgVW5rbm93bixcclxuICAvKiogQmFyY29kZSBvcGVuIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBPcGVuLFxyXG4gIC8qKiBCYXJjb2RlIFdQQSBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXHJcbiAgV1BBLFxyXG4gIC8qKiBCYXJjb2RlIFdFUCBXaS1GaSBlbmNyeXB0aW9uIHR5cGUuICovXHJcbiAgV0VQLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlQWRkcmVzc1R5cGUge1xyXG4gIC8qKiBCYXJjb2RlIHVua25vd24gYWRkcmVzcyB0eXBlLiAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgd29yayBhZGRyZXNzIHR5cGUuICovXHJcbiAgV29yayxcclxuICAvKiogQmFyY29kZSBob21lIGFkZHJlc3MgdHlwZS4gKi9cclxuICBIb21lLFxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGUge1xyXG4gIHZhbHVlVHlwZTogQmFyY29kZVZhbHVlVHlwZTtcclxuICBmb3JtYXQ6IEJhcmNvZGVGb3JtYXQ7XHJcbiAgcmF3VmFsdWU6IHN0cmluZztcclxuICBkaXNwbGF5VmFsdWU6IHN0cmluZztcclxuICBjb3JuZXJQb2ludHM6IGFueTtcclxuICBpbWFnZUhlaWdodDogbnVtYmVyO1xyXG4gIGltYWdlV2lkdGg6IG51bWJlcjtcclxuICBlbWFpbDogQmFyY29kZUVtYWlsO1xyXG4gIHBob25lOiBCYXJjb2RlUGhvbmU7XHJcbiAgc21zOiBCYXJjb2RlU21zO1xyXG4gIHVybDogQmFyY29kZVVybDtcclxuICB3aWZpOiBCYXJjb2RlV2lmaTtcclxuICBnZW9Qb2ludDogQmFyY29kZUdlb1BvaW50O1xyXG4gIGNhbGVuZGFyRXZlbnQ6IEJhcmNvZGVDYWxlbmRhckV2ZW50O1xyXG4gIGNvbnRhY3RJbmZvOiBCYXJjb2RlQ29udGFjdEluZm87XHJcbiAgZHJpdmVyTGljZW5zZTogQmFyY29kZURyaXZlckxpY2Vuc2U7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUVtYWlsIHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYm9keTogc3RyaW5nO1xyXG4gIHN1YmplY3Q6IHN0cmluZztcclxuICB0eXBlOiBCYXJjb2RlRW1haWxUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVQaG9uZSB7XHJcbiAgbnVtYmVyOiBzdHJpbmc7XHJcbiAgdHlwZTogQmFyY29kZVBob25lVHlwZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlU21zIHtcclxuICBwaG9uZU51bWJlcjogc3RyaW5nO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlVXJsIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIHVybDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVdpZmkge1xyXG4gIHNzaWQ6IHN0cmluZztcclxuICBwYXNzd29yZDogc3RyaW5nO1xyXG4gIHR5cGU6IEJhcmNvZGVXaUZpRW5jcnlwdGlvblR5cGU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlR2VvUG9pbnQge1xyXG4gIGxhdGl0dWRlOiBudW1iZXI7XHJcbiAgbG9uZ2l0dWRlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUNhbGVuZGFyRXZlbnQge1xyXG4gIGV2ZW50RGVzY3JpcHRpb246IHN0cmluZztcclxuICBsb2NhdGlvbjogc3RyaW5nO1xyXG4gIG9yZ2FuaXplcjogc3RyaW5nO1xyXG4gIHN0YXR1czogc3RyaW5nO1xyXG4gIHN1bW1hcnk6IHN0cmluZztcclxuICBzdGFydDogYW55O1xyXG4gIGVuZDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVDb250YWN0SW5mbyB7XHJcbiAgdGl0bGU6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgYWRkcmVzc2VzOiBCYXJjb2RlQWRkcmVzc1tdO1xyXG4gIHBob25lczogQmFyY29kZVBob25lW107XHJcbiAgZW1haWxzOiBCYXJjb2RlRW1haWxbXTtcclxuICBvcmdhbml6YXRpb246IHN0cmluZztcclxuICB1cmxzOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUFkZHJlc3Mge1xyXG4gIGFkZHJlc3NMaW5lOiBzdHJpbmc7XHJcbiAgdHlwZTogQmFyY29kZUFkZHJlc3NUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVEcml2ZXJMaWNlbnNlIHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBtaWRkbGVOYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBnZW5kZXI6IHN0cmluZztcclxuICBhZGRyZXNzQ2l0eTogc3RyaW5nO1xyXG4gIGFkZHJlc3NTdGF0ZTogc3RyaW5nO1xyXG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZztcclxuICBhZGRyZXNzWmlwOiBzdHJpbmc7XHJcbiAgYmlydGhEYXRlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IHN0cmluZztcclxuICBpc3N1aW5nRGF0ZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdDb3VudHJ5OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VMYWJlbCB7XHJcbiAgaW5kZXg6IG51bWJlcjtcclxuICBjb25maWRlbmNlOiBudW1iZXI7XHJcbiAgdGV4dDogc3RyaW5nO1xyXG59XHJcbi8qKlxyXG4gKiBAbmFtZSBGaXJlYmFzZSBWaXNpb25cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIENvcmRvdmEgcGx1Z2luIGZvciBGaXJlYmFzZSBNTEtpdCBWaXNpb25cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmlyZWJhc2VWaXNpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlyZWJhc2UtdmlzaW9uL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyZWJhc2VWaXNpb246IEZpcmViYXNlVmlzaW9uKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZmlyZWJhc2VWaXNpb24ub25EZXZpY2VUZXh0UmVjb2duaXplcihGSUxFX1VSSSlcclxuICogICAudGhlbigocmVzOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIHRoaXMuZmlyZWJhc2VWaXNpb24uYmFyY29kZURldGVjdG9yKEZJTEVfVVJJKVxyXG4gKiAgIC50aGVuKChyZXM6IEJhcmNvZGVbXSkgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5pbWFnZUxhYmVsZXIoRklMRV9VUkkpXHJcbiAqICAgLnRoZW4oKHJlczogSW1hZ2VMYWJlbFtdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdGaXJlYmFzZVZpc2lvbicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlyZWJhc2UtbWx2aXNpb24nLFxyXG4gIHBsdWdpblJlZjogJ0ZpcmViYXNlVmlzaW9uUGx1Z2luJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2Fsb24yMi9jb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tbHZpc2lvbicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlVmlzaW9uIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJlY29nbml6ZSB0ZXh0IGluIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZV91cmkge3N0cmluZ30gSW1hZ2UgVVJJXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSB0ZXh0IGluIHRoZSBpbWFnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBvbkRldmljZVRleHRSZWNvZ25pemVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPFRleHQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVhZCBkYXRhIGZyb20gQmFyY29kZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbGVfdXJpIHtzdHJpbmd9IEltYWdlIFVSSVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEJhcmNvZGVbXT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgZGF0YSBpbiBiYXJjb2RlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGJhcmNvZGVEZXRlY3RvcihmaWxlX3VyaTogc3RyaW5nKTogUHJvbWlzZTxCYXJjb2RlW10+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbiAgLyoqXHJcbiAgICogUmVjb2duaXplIG9iamVjdCBpbiBpbWFnZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGZpbGVfdXJpIHtzdHJpbmd9IEltYWdlIFVSSVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEltYWdlTGFiZWxbXT59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2l0aCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgZW50aXRpZXMgaW4gYW4gaW1hZ2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgaW1hZ2VMYWJlbGVyKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPEltYWdlTGFiZWxbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxufVxyXG4iXX0=