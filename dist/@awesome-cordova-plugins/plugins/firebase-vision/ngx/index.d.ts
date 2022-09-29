import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface Text {
    text: string;
    blocks: TextLine[];
    imageHeight: number;
    imageWidth: number;
}
export interface TextLine extends TextBlock {
    lines: TextElement[];
}
export interface TextElement extends TextBlock {
    elements: TextBlock[];
}
export interface TextBlock {
    text: string;
    cornerPoints: TextPoint[];
    frame: TextFrame;
    recognizedLanguages: string;
}
export interface TextPoint {
    x: number;
    y: number;
}
export interface TextFrame {
    x: number;
    y: number;
    width: number;
    height: number;
}
export declare enum BarcodeFormat {
    UNKNOWN = -1,
    ALL_FORMATS = 0,
    CODE_128 = 1,
    CODE_39 = 2,
    CODE_93 = 4,
    CODABAR = 8,
    DATA_MATRIX = 16,
    EAN_13 = 32,
    EAN_8 = 64,
    ITF = 128,
    QR_CODE = 256,
    UPC_A = 512,
    UPC_E = 1024,
    PDF417 = 2048,
    AZTEC = 4096
}
export declare enum BarcodeValueType {
    /** Unknown Barcode value types.  */
    Unknown = 0,
    /** Barcode value type for contact info. */
    ContactInfo = 1,
    /** Barcode value type for email addresses. */
    Email = 2,
    /** Barcode value type for ISBNs. */
    ISBN = 3,
    /** Barcode value type for phone numbers. */
    Phone = 4,
    /** Barcode value type for product codes. */
    Product = 5,
    /** Barcode value type for SMS details. */
    SMS = 6,
    /** Barcode value type for plain text. */
    Text = 7,
    /** Barcode value type for URLs/bookmarks. */
    URL = 8,
    /** Barcode value type for Wi-Fi access point details. */
    WiFi = 9,
    /** Barcode value type for geographic coordinates. */
    GeographicCoordinates = 10,
    /** Barcode value type for calendar events. */
    CalendarEvent = 11,
    /** Barcode value type for driver's license data. */
    DriversLicense = 12
}
export declare enum BarcodeEmailType {
    /** Unknown email type. */
    Unknown = 0,
    /** Barcode work email type. */
    Work = 1,
    /** Barcode home email type. */
    Home = 2
}
export declare enum BarcodePhoneType {
    /** Unknown phone type. */
    Unknown = 0,
    /** Barcode work phone type. */
    Work = 1,
    /** Barcode home phone type. */
    Home = 2,
    /** Barcode fax phone type. */
    Fax = 3,
    /** Barcode mobile phone type. */
    Mobile = 4
}
export declare enum BarcodeWiFiEncryptionType {
    /** Barcode unknown Wi-Fi encryption type. */
    Unknown = 0,
    /** Barcode open Wi-Fi encryption type. */
    Open = 1,
    /** Barcode WPA Wi-Fi encryption type. */
    WPA = 2,
    /** Barcode WEP Wi-Fi encryption type. */
    WEP = 3
}
export declare enum BarcodeAddressType {
    /** Barcode unknown address type. */
    Unknown = 0,
    /** Barcode work address type. */
    Work = 1,
    /** Barcode home address type. */
    Home = 2
}
export interface Barcode {
    valueType: BarcodeValueType;
    format: BarcodeFormat;
    rawValue: string;
    displayValue: string;
    cornerPoints: any;
    imageHeight: number;
    imageWidth: number;
    email: BarcodeEmail;
    phone: BarcodePhone;
    sms: BarcodeSms;
    url: BarcodeUrl;
    wifi: BarcodeWifi;
    geoPoint: BarcodeGeoPoint;
    calendarEvent: BarcodeCalendarEvent;
    contactInfo: BarcodeContactInfo;
    driverLicense: BarcodeDriverLicense;
}
export interface BarcodeEmail {
    address: string;
    body: string;
    subject: string;
    type: BarcodeEmailType;
}
export interface BarcodePhone {
    number: string;
    type: BarcodePhoneType;
}
export interface BarcodeSms {
    phoneNumber: string;
    message: string;
}
export interface BarcodeUrl {
    title: string;
    url: string;
}
export interface BarcodeWifi {
    ssid: string;
    password: string;
    type: BarcodeWiFiEncryptionType;
}
export interface BarcodeGeoPoint {
    latitude: number;
    longitude: number;
}
export interface BarcodeCalendarEvent {
    eventDescription: string;
    location: string;
    organizer: string;
    status: string;
    summary: string;
    start: any;
    end: any;
}
export interface BarcodeContactInfo {
    title: string;
    name: string;
    addresses: BarcodeAddress[];
    phones: BarcodePhone[];
    emails: BarcodeEmail[];
    organization: string;
    urls: string;
}
export interface BarcodeAddress {
    addressLine: string;
    type: BarcodeAddressType;
}
export interface BarcodeDriverLicense {
    firstName: string;
    middleName: string;
    lastName: string;
    gender: string;
    addressCity: string;
    addressState: string;
    addressStreet: string;
    addressZip: string;
    birthDate: string;
    documentType: string;
    licenseNumber: string;
    expiryDate: string;
    issuingDate: string;
    issuingCountry: string;
}
export interface ImageLabel {
    index: number;
    confidence: number;
    text: string;
}
/**
 * @name Firebase Vision
 * @description
 * Cordova plugin for Firebase MLKit Vision
 * @usage
 * ```typescript
 * import { FirebaseVision } from '@awesome-cordova-plugins/firebase-vision/ngx';
 *
 *
 * constructor(private firebaseVision: FirebaseVision) { }
 *
 * ...
 *
 *
 * this.firebaseVision.onDeviceTextRecognizer(FILE_URI)
 *   .then((res: string) => console.log(res))
 *   .catch((error: string) => console.error(error));
 *
 * this.firebaseVision.barcodeDetector(FILE_URI)
 *   .then((res: Barcode[]) => console.log(res))
 *   .catch((error: string) => console.error(error));
 *
 * this.firebaseVision.imageLabeler(FILE_URI)
 *   .then((res: ImageLabel[]) => console.log(res))
 *   .catch((error: string) => console.error(error));
 *
 * ```
 */
export declare class FirebaseVision extends AwesomeCordovaNativePlugin {
    /**
     * Recognize text in image
     *
     * @param file_uri {string} Image URI
     * @returns {Promise<string>} Returns a promise that fulfills with the text in the image
     */
    onDeviceTextRecognizer(file_uri: string): Promise<Text>;
    /**
     * Read data from Barcode
     *
     * @param file_uri {string} Image URI
     * @returns {Promise<Barcode[]>} Returns a promise that fulfills with the data in barcode
     */
    barcodeDetector(file_uri: string): Promise<Barcode[]>;
    /**
     * Recognize object in image
     *
     * @param file_uri {string} Image URI
     * @returns {Promise<ImageLabel[]>} Returns a promise that fulfills with the information about entities in an image
     */
    imageLabeler(file_uri: string): Promise<ImageLabel[]>;
}
