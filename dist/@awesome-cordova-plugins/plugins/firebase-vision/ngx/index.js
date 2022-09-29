import { __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var FirebaseVision = /** @class */ (function (_super) {
    __extends(FirebaseVision, _super);
    function FirebaseVision() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseVision.prototype.onDeviceTextRecognizer = function (file_uri) { return cordova(this, "onDeviceTextRecognizer", {}, arguments); };
    FirebaseVision.prototype.barcodeDetector = function (file_uri) { return cordova(this, "barcodeDetector", {}, arguments); };
    FirebaseVision.prototype.imageLabeler = function (file_uri) { return cordova(this, "imageLabeler", {}, arguments); };
    FirebaseVision.pluginName = "FirebaseVision";
    FirebaseVision.plugin = "cordova-plugin-firebase-mlvision";
    FirebaseVision.pluginRef = "FirebaseVisionPlugin";
    FirebaseVision.repo = "https://github.com/alon22/cordova-plugin-firebase-mlvision";
    FirebaseVision.platforms = ["Android", "iOS"];
    FirebaseVision.decorators = [
        { type: Injectable }
    ];
    return FirebaseVision;
}(AwesomeCordovaNativePlugin));
export { FirebaseVision };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtdmlzaW9uL25neC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBb0M1RixNQUFNLENBQU4sSUFBWSxhQWdCWDtBQWhCRCxXQUFZLGFBQWE7SUFDdkIsd0RBQVksQ0FBQTtJQUNaLCtEQUFlLENBQUE7SUFDZix5REFBWSxDQUFBO0lBQ1osdURBQVcsQ0FBQTtJQUNYLHVEQUFXLENBQUE7SUFDWCx1REFBVyxDQUFBO0lBQ1gsZ0VBQWdCLENBQUE7SUFDaEIsc0RBQVcsQ0FBQTtJQUNYLG9EQUFVLENBQUE7SUFDVixpREFBUyxDQUFBO0lBQ1QseURBQWEsQ0FBQTtJQUNiLHFEQUFXLENBQUE7SUFDWCxzREFBWSxDQUFBO0lBQ1osd0RBQWEsQ0FBQTtJQUNiLHNEQUFZLENBQUE7QUFDZCxDQUFDLEVBaEJXLGFBQWEsS0FBYixhQUFhLFFBZ0J4QjtBQUVELE1BQU0sQ0FBTixJQUFZLGdCQTJCWDtBQTNCRCxXQUFZLGdCQUFnQjtJQUMxQixvQ0FBb0M7SUFDcEMsNkRBQU8sQ0FBQTtJQUNQLDJDQUEyQztJQUMzQyxxRUFBVyxDQUFBO0lBQ1gsOENBQThDO0lBQzlDLHlEQUFLLENBQUE7SUFDTCxvQ0FBb0M7SUFDcEMsdURBQUksQ0FBQTtJQUNKLDRDQUE0QztJQUM1Qyx5REFBSyxDQUFBO0lBQ0wsNENBQTRDO0lBQzVDLDZEQUFPLENBQUE7SUFDUCwwQ0FBMEM7SUFDMUMscURBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1REFBSSxDQUFBO0lBQ0osNkNBQTZDO0lBQzdDLHFEQUFHLENBQUE7SUFDSCx5REFBeUQ7SUFDekQsdURBQUksQ0FBQTtJQUNKLHFEQUFxRDtJQUNyRCwwRkFBcUIsQ0FBQTtJQUNyQiw4Q0FBOEM7SUFDOUMsMEVBQWEsQ0FBQTtJQUNiLG9EQUFvRDtJQUNwRCw0RUFBYyxDQUFBO0FBQ2hCLENBQUMsRUEzQlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQTJCM0I7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDBCQUEwQjtJQUMxQiw2REFBTyxDQUFBO0lBQ1AsK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiwrQkFBK0I7SUFDL0IsdURBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxnQkFBZ0IsS0FBaEIsZ0JBQWdCLFFBTzNCO0FBRUQsTUFBTSxDQUFOLElBQVksZ0JBV1g7QUFYRCxXQUFZLGdCQUFnQjtJQUMxQiwwQkFBMEI7SUFDMUIsNkRBQU8sQ0FBQTtJQUNQLCtCQUErQjtJQUMvQix1REFBSSxDQUFBO0lBQ0osK0JBQStCO0lBQy9CLHVEQUFJLENBQUE7SUFDSiw4QkFBOEI7SUFDOUIscURBQUcsQ0FBQTtJQUNILGlDQUFpQztJQUNqQywyREFBTSxDQUFBO0FBQ1IsQ0FBQyxFQVhXLGdCQUFnQixLQUFoQixnQkFBZ0IsUUFXM0I7QUFFRCxNQUFNLENBQU4sSUFBWSx5QkFTWDtBQVRELFdBQVkseUJBQXlCO0lBQ25DLDZDQUE2QztJQUM3QywrRUFBTyxDQUFBO0lBQ1AsMENBQTBDO0lBQzFDLHlFQUFJLENBQUE7SUFDSix5Q0FBeUM7SUFDekMsdUVBQUcsQ0FBQTtJQUNILHlDQUF5QztJQUN6Qyx1RUFBRyxDQUFBO0FBQ0wsQ0FBQyxFQVRXLHlCQUF5QixLQUF6Qix5QkFBeUIsUUFTcEM7QUFFRCxNQUFNLENBQU4sSUFBWSxrQkFPWDtBQVBELFdBQVksa0JBQWtCO0lBQzVCLG9DQUFvQztJQUNwQyxpRUFBTyxDQUFBO0lBQ1AsaUNBQWlDO0lBQ2pDLDJEQUFJLENBQUE7SUFDSixpQ0FBaUM7SUFDakMsMkRBQUksQ0FBQTtBQUNOLENBQUMsRUFQVyxrQkFBa0IsS0FBbEIsa0JBQWtCLFFBTzdCOztJQXVJbUMsa0NBQTBCOzs7O0lBUTVELCtDQUFzQixhQUFDLFFBQWdCO0lBVXZDLHdDQUFlLGFBQUMsUUFBZ0I7SUFVaEMscUNBQVksYUFBQyxRQUFnQjs7Ozs7OztnQkE3QjlCLFVBQVU7O3lCQWxRWDtFQW1Rb0MsMEJBQTBCO1NBQWpELGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHQge1xyXG4gIHRleHQ6IHN0cmluZztcclxuICBibG9ja3M6IFRleHRMaW5lW107XHJcbiAgaW1hZ2VIZWlnaHQ6IG51bWJlcjtcclxuICBpbWFnZVdpZHRoOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dExpbmUgZXh0ZW5kcyBUZXh0QmxvY2sge1xyXG4gIGxpbmVzOiBUZXh0RWxlbWVudFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRleHRFbGVtZW50IGV4dGVuZHMgVGV4dEJsb2NrIHtcclxuICBlbGVtZW50czogVGV4dEJsb2NrW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEJsb2NrIHtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbiAgY29ybmVyUG9pbnRzOiBUZXh0UG9pbnRbXTtcclxuICBmcmFtZTogVGV4dEZyYW1lO1xyXG4gIHJlY29nbml6ZWRMYW5ndWFnZXM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUZXh0UG9pbnQge1xyXG4gIHg6IG51bWJlcjtcclxuICB5OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGV4dEZyYW1lIHtcclxuICB4OiBudW1iZXI7XHJcbiAgeTogbnVtYmVyO1xyXG4gIHdpZHRoOiBudW1iZXI7XHJcbiAgaGVpZ2h0OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVGb3JtYXQge1xyXG4gIFVOS05PV04gPSAtMSxcclxuICBBTExfRk9STUFUUyA9IDAsXHJcbiAgQ09ERV8xMjggPSAxLFxyXG4gIENPREVfMzkgPSAyLFxyXG4gIENPREVfOTMgPSA0LFxyXG4gIENPREFCQVIgPSA4LFxyXG4gIERBVEFfTUFUUklYID0gMTYsXHJcbiAgRUFOXzEzID0gMzIsXHJcbiAgRUFOXzggPSA2NCxcclxuICBJVEYgPSAxMjgsXHJcbiAgUVJfQ09ERSA9IDI1NixcclxuICBVUENfQSA9IDUxMixcclxuICBVUENfRSA9IDEwMjQsXHJcbiAgUERGNDE3ID0gMjA0OCxcclxuICBBWlRFQyA9IDQwOTYsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVWYWx1ZVR5cGUge1xyXG4gIC8qKiBVbmtub3duIEJhcmNvZGUgdmFsdWUgdHlwZXMuICAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgY29udGFjdCBpbmZvLiAqL1xyXG4gIENvbnRhY3RJbmZvLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIGVtYWlsIGFkZHJlc3Nlcy4gKi9cclxuICBFbWFpbCxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBJU0JOcy4gKi9cclxuICBJU0JOLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIHBob25lIG51bWJlcnMuICovXHJcbiAgUGhvbmUsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgcHJvZHVjdCBjb2Rlcy4gKi9cclxuICBQcm9kdWN0LFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFNNUyBkZXRhaWxzLiAqL1xyXG4gIFNNUyxcclxuICAvKiogQmFyY29kZSB2YWx1ZSB0eXBlIGZvciBwbGFpbiB0ZXh0LiAqL1xyXG4gIFRleHQsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgVVJMcy9ib29rbWFya3MuICovXHJcbiAgVVJMLFxyXG4gIC8qKiBCYXJjb2RlIHZhbHVlIHR5cGUgZm9yIFdpLUZpIGFjY2VzcyBwb2ludCBkZXRhaWxzLiAqL1xyXG4gIFdpRmksXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZ2VvZ3JhcGhpYyBjb29yZGluYXRlcy4gKi9cclxuICBHZW9ncmFwaGljQ29vcmRpbmF0ZXMsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgY2FsZW5kYXIgZXZlbnRzLiAqL1xyXG4gIENhbGVuZGFyRXZlbnQsXHJcbiAgLyoqIEJhcmNvZGUgdmFsdWUgdHlwZSBmb3IgZHJpdmVyJ3MgbGljZW5zZSBkYXRhLiAqL1xyXG4gIERyaXZlcnNMaWNlbnNlLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlRW1haWxUeXBlIHtcclxuICAvKiogVW5rbm93biBlbWFpbCB0eXBlLiAqL1xyXG4gIFVua25vd24sXHJcbiAgLyoqIEJhcmNvZGUgd29yayBlbWFpbCB0eXBlLiAqL1xyXG4gIFdvcmssXHJcbiAgLyoqIEJhcmNvZGUgaG9tZSBlbWFpbCB0eXBlLiAqL1xyXG4gIEhvbWUsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVQaG9uZVR5cGUge1xyXG4gIC8qKiBVbmtub3duIHBob25lIHR5cGUuICovXHJcbiAgVW5rbm93bixcclxuICAvKiogQmFyY29kZSB3b3JrIHBob25lIHR5cGUuICovXHJcbiAgV29yayxcclxuICAvKiogQmFyY29kZSBob21lIHBob25lIHR5cGUuICovXHJcbiAgSG9tZSxcclxuICAvKiogQmFyY29kZSBmYXggcGhvbmUgdHlwZS4gKi9cclxuICBGYXgsXHJcbiAgLyoqIEJhcmNvZGUgbW9iaWxlIHBob25lIHR5cGUuICovXHJcbiAgTW9iaWxlLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBCYXJjb2RlV2lGaUVuY3J5cHRpb25UeXBlIHtcclxuICAvKiogQmFyY29kZSB1bmtub3duIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBVbmtub3duLFxyXG4gIC8qKiBCYXJjb2RlIG9wZW4gV2ktRmkgZW5jcnlwdGlvbiB0eXBlLiAqL1xyXG4gIE9wZW4sXHJcbiAgLyoqIEJhcmNvZGUgV1BBIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBXUEEsXHJcbiAgLyoqIEJhcmNvZGUgV0VQIFdpLUZpIGVuY3J5cHRpb24gdHlwZS4gKi9cclxuICBXRVAsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVBZGRyZXNzVHlwZSB7XHJcbiAgLyoqIEJhcmNvZGUgdW5rbm93biBhZGRyZXNzIHR5cGUuICovXHJcbiAgVW5rbm93bixcclxuICAvKiogQmFyY29kZSB3b3JrIGFkZHJlc3MgdHlwZS4gKi9cclxuICBXb3JrLFxyXG4gIC8qKiBCYXJjb2RlIGhvbWUgYWRkcmVzcyB0eXBlLiAqL1xyXG4gIEhvbWUsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZSB7XHJcbiAgdmFsdWVUeXBlOiBCYXJjb2RlVmFsdWVUeXBlO1xyXG4gIGZvcm1hdDogQmFyY29kZUZvcm1hdDtcclxuICByYXdWYWx1ZTogc3RyaW5nO1xyXG4gIGRpc3BsYXlWYWx1ZTogc3RyaW5nO1xyXG4gIGNvcm5lclBvaW50czogYW55O1xyXG4gIGltYWdlSGVpZ2h0OiBudW1iZXI7XHJcbiAgaW1hZ2VXaWR0aDogbnVtYmVyO1xyXG4gIGVtYWlsOiBCYXJjb2RlRW1haWw7XHJcbiAgcGhvbmU6IEJhcmNvZGVQaG9uZTtcclxuICBzbXM6IEJhcmNvZGVTbXM7XHJcbiAgdXJsOiBCYXJjb2RlVXJsO1xyXG4gIHdpZmk6IEJhcmNvZGVXaWZpO1xyXG4gIGdlb1BvaW50OiBCYXJjb2RlR2VvUG9pbnQ7XHJcbiAgY2FsZW5kYXJFdmVudDogQmFyY29kZUNhbGVuZGFyRXZlbnQ7XHJcbiAgY29udGFjdEluZm86IEJhcmNvZGVDb250YWN0SW5mbztcclxuICBkcml2ZXJMaWNlbnNlOiBCYXJjb2RlRHJpdmVyTGljZW5zZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlRW1haWwge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBib2R5OiBzdHJpbmc7XHJcbiAgc3ViamVjdDogc3RyaW5nO1xyXG4gIHR5cGU6IEJhcmNvZGVFbWFpbFR5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVBob25lIHtcclxuICBudW1iZXI6IHN0cmluZztcclxuICB0eXBlOiBCYXJjb2RlUGhvbmVUeXBlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVTbXMge1xyXG4gIHBob25lTnVtYmVyOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVVcmwge1xyXG4gIHRpdGxlOiBzdHJpbmc7XHJcbiAgdXJsOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlV2lmaSB7XHJcbiAgc3NpZDogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgdHlwZTogQmFyY29kZVdpRmlFbmNyeXB0aW9uVHlwZTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVHZW9Qb2ludCB7XHJcbiAgbGF0aXR1ZGU6IG51bWJlcjtcclxuICBsb25naXR1ZGU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQ2FsZW5kYXJFdmVudCB7XHJcbiAgZXZlbnREZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIGxvY2F0aW9uOiBzdHJpbmc7XHJcbiAgb3JnYW5pemVyOiBzdHJpbmc7XHJcbiAgc3RhdHVzOiBzdHJpbmc7XHJcbiAgc3VtbWFyeTogc3RyaW5nO1xyXG4gIHN0YXJ0OiBhbnk7XHJcbiAgZW5kOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZUNvbnRhY3RJbmZvIHtcclxuICB0aXRsZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBhZGRyZXNzZXM6IEJhcmNvZGVBZGRyZXNzW107XHJcbiAgcGhvbmVzOiBCYXJjb2RlUGhvbmVbXTtcclxuICBlbWFpbHM6IEJhcmNvZGVFbWFpbFtdO1xyXG4gIG9yZ2FuaXphdGlvbjogc3RyaW5nO1xyXG4gIHVybHM6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlQWRkcmVzcyB7XHJcbiAgYWRkcmVzc0xpbmU6IHN0cmluZztcclxuICB0eXBlOiBCYXJjb2RlQWRkcmVzc1R5cGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZURyaXZlckxpY2Vuc2Uge1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIG1pZGRsZU5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGdlbmRlcjogc3RyaW5nO1xyXG4gIGFkZHJlc3NDaXR5OiBzdHJpbmc7XHJcbiAgYWRkcmVzc1N0YXRlOiBzdHJpbmc7XHJcbiAgYWRkcmVzc1N0cmVldDogc3RyaW5nO1xyXG4gIGFkZHJlc3NaaXA6IHN0cmluZztcclxuICBiaXJ0aERhdGU6IHN0cmluZztcclxuICBkb2N1bWVudFR5cGU6IHN0cmluZztcclxuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgZXhwaXJ5RGF0ZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdEYXRlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0NvdW50cnk6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUxhYmVsIHtcclxuICBpbmRleDogbnVtYmVyO1xyXG4gIGNvbmZpZGVuY2U6IG51bWJlcjtcclxuICB0ZXh0OiBzdHJpbmc7XHJcbn1cclxuLyoqXHJcbiAqIEBuYW1lIEZpcmViYXNlIFZpc2lvblxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogQ29yZG92YSBwbHVnaW4gZm9yIEZpcmViYXNlIE1MS2l0IFZpc2lvblxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBGaXJlYmFzZVZpc2lvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maXJlYmFzZS12aXNpb24vbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaXJlYmFzZVZpc2lvbjogRmlyZWJhc2VWaXNpb24pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5vbkRldmljZVRleHRSZWNvZ25pemVyKEZJTEVfVVJJKVxyXG4gKiAgIC50aGVuKChyZXM6IHN0cmluZykgPT4gY29uc29sZS5sb2cocmVzKSlcclxuICogICAuY2F0Y2goKGVycm9yOiBzdHJpbmcpID0+IGNvbnNvbGUuZXJyb3IoZXJyb3IpKTtcclxuICpcclxuICogdGhpcy5maXJlYmFzZVZpc2lvbi5iYXJjb2RlRGV0ZWN0b3IoRklMRV9VUkkpXHJcbiAqICAgLnRoZW4oKHJlczogQmFyY29kZVtdKSA9PiBjb25zb2xlLmxvZyhyZXMpKVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IHN0cmluZykgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gKlxyXG4gKiB0aGlzLmZpcmViYXNlVmlzaW9uLmltYWdlTGFiZWxlcihGSUxFX1VSSSlcclxuICogICAudGhlbigocmVzOiBJbWFnZUxhYmVsW10pID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogc3RyaW5nKSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlVmlzaW9uJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maXJlYmFzZS1tbHZpc2lvbicsXHJcbiAgcGx1Z2luUmVmOiAnRmlyZWJhc2VWaXNpb25QbHVnaW4nLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYWxvbjIyL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLW1sdmlzaW9uJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRmlyZWJhc2VWaXNpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUmVjb2duaXplIHRleHQgaW4gaW1hZ2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlX3VyaSB7c3RyaW5nfSBJbWFnZSBVUklcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGZ1bGZpbGxzIHdpdGggdGhlIHRleHQgaW4gdGhlIGltYWdlXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIG9uRGV2aWNlVGV4dFJlY29nbml6ZXIoZmlsZV91cmk6IHN0cmluZyk6IFByb21pc2U8VGV4dD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZWFkIGRhdGEgZnJvbSBCYXJjb2RlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZV91cmkge3N0cmluZ30gSW1hZ2UgVVJJXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QmFyY29kZVtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSBkYXRhIGluIGJhcmNvZGVcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgYmFyY29kZURldGVjdG9yKGZpbGVfdXJpOiBzdHJpbmcpOiBQcm9taXNlPEJhcmNvZGVbXT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBSZWNvZ25pemUgb2JqZWN0IGluIGltYWdlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZV91cmkge3N0cmluZ30gSW1hZ2UgVVJJXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8SW1hZ2VMYWJlbFtdPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCBmdWxmaWxscyB3aXRoIHRoZSBpbmZvcm1hdGlvbiBhYm91dCBlbnRpdGllcyBpbiBhbiBpbWFnZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBpbWFnZUxhYmVsZXIoZmlsZV91cmk6IHN0cmluZyk6IFByb21pc2U8SW1hZ2VMYWJlbFtdPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcbiJdfQ==