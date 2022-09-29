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
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@awesome-cordova-plugins/core';
export var BarcodeType;
(function (BarcodeType) {
    BarcodeType[BarcodeType["None"] = 1] = "None";
    BarcodeType[BarcodeType["QRCode"] = 2] = "QRCode";
    BarcodeType[BarcodeType["DataMatrix"] = 3] = "DataMatrix";
    BarcodeType[BarcodeType["UPCE"] = 4] = "UPCE";
    BarcodeType[BarcodeType["UPCA"] = 5] = "UPCA";
    BarcodeType[BarcodeType["EAN8"] = 6] = "EAN8";
    BarcodeType[BarcodeType["EAN13"] = 7] = "EAN13";
    BarcodeType[BarcodeType["Code128"] = 8] = "Code128";
    BarcodeType[BarcodeType["Code39"] = 9] = "Code39";
    BarcodeType[BarcodeType["ITF"] = 10] = "ITF";
    BarcodeType[BarcodeType["Aztec"] = 11] = "Aztec";
    BarcodeType[BarcodeType["PDF417"] = 12] = "PDF417";
})(BarcodeType || (BarcodeType = {}));
export var RecognizerResultState;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(RecognizerResultState || (RecognizerResultState = {}));
export var MrtdDocumentType;
(function (MrtdDocumentType) {
    MrtdDocumentType[MrtdDocumentType["Unknown"] = 1] = "Unknown";
    MrtdDocumentType[MrtdDocumentType["IdentityCard"] = 2] = "IdentityCard";
    MrtdDocumentType[MrtdDocumentType["Passport"] = 3] = "Passport";
    MrtdDocumentType[MrtdDocumentType["Visa"] = 4] = "Visa";
    MrtdDocumentType[MrtdDocumentType["GreenCard"] = 5] = "GreenCard";
    MrtdDocumentType[MrtdDocumentType["MalaysianPassIMM13P"] = 6] = "MalaysianPassIMM13P";
})(MrtdDocumentType || (MrtdDocumentType = {}));
export var EudlCountry;
(function (EudlCountry) {
    EudlCountry[EudlCountry["UK"] = 1] = "UK";
    EudlCountry[EudlCountry["Germany"] = 2] = "Germany";
    EudlCountry[EudlCountry["Austria"] = 3] = "Austria";
    EudlCountry[EudlCountry["Automatic"] = 4] = "Automatic";
})(EudlCountry || (EudlCountry = {}));
export var DocumentFaceDetectorType;
(function (DocumentFaceDetectorType) {
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD1"] = 1] = "TD1";
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD2"] = 2] = "TD2";
    DocumentFaceDetectorType[DocumentFaceDetectorType["PassportsAndVisas"] = 3] = "PassportsAndVisas";
})(DocumentFaceDetectorType || (DocumentFaceDetectorType = {}));
export var UsdlKeys;
(function (UsdlKeys) {
    UsdlKeys[UsdlKeys["DocumentType"] = 0] = "DocumentType";
    UsdlKeys[UsdlKeys["StandardVersionNumber"] = 1] = "StandardVersionNumber";
    UsdlKeys[UsdlKeys["CustomerFamilyName"] = 2] = "CustomerFamilyName";
    UsdlKeys[UsdlKeys["CustomerFirstName"] = 3] = "CustomerFirstName";
    UsdlKeys[UsdlKeys["CustomerFullName"] = 4] = "CustomerFullName";
    UsdlKeys[UsdlKeys["DateOfBirth"] = 5] = "DateOfBirth";
    UsdlKeys[UsdlKeys["Sex"] = 6] = "Sex";
    UsdlKeys[UsdlKeys["EyeColor"] = 7] = "EyeColor";
    UsdlKeys[UsdlKeys["AddressStreet"] = 8] = "AddressStreet";
    UsdlKeys[UsdlKeys["AddressCity"] = 9] = "AddressCity";
    UsdlKeys[UsdlKeys["AddressJurisdictionCode"] = 10] = "AddressJurisdictionCode";
    UsdlKeys[UsdlKeys["AddressPostalCode"] = 11] = "AddressPostalCode";
    UsdlKeys[UsdlKeys["FullAddress"] = 12] = "FullAddress";
    UsdlKeys[UsdlKeys["Height"] = 13] = "Height";
    UsdlKeys[UsdlKeys["HeightIn"] = 14] = "HeightIn";
    UsdlKeys[UsdlKeys["HeightCm"] = 15] = "HeightCm";
    UsdlKeys[UsdlKeys["CustomerMiddleName"] = 16] = "CustomerMiddleName";
    UsdlKeys[UsdlKeys["HairColor"] = 17] = "HairColor";
    UsdlKeys[UsdlKeys["NameSuffix"] = 18] = "NameSuffix";
    UsdlKeys[UsdlKeys["AKAFullName"] = 19] = "AKAFullName";
    UsdlKeys[UsdlKeys["AKAFamilyName"] = 20] = "AKAFamilyName";
    UsdlKeys[UsdlKeys["AKAGivenName"] = 21] = "AKAGivenName";
    UsdlKeys[UsdlKeys["AKASuffixName"] = 22] = "AKASuffixName";
    UsdlKeys[UsdlKeys["WeightRange"] = 23] = "WeightRange";
    UsdlKeys[UsdlKeys["WeightPounds"] = 24] = "WeightPounds";
    UsdlKeys[UsdlKeys["WeightKilograms"] = 25] = "WeightKilograms";
    UsdlKeys[UsdlKeys["CustomerIdNumber"] = 26] = "CustomerIdNumber";
    UsdlKeys[UsdlKeys["FamilyNameTruncation"] = 27] = "FamilyNameTruncation";
    UsdlKeys[UsdlKeys["FirstNameTruncation"] = 28] = "FirstNameTruncation";
    UsdlKeys[UsdlKeys["MiddleNameTruncation"] = 29] = "MiddleNameTruncation";
    UsdlKeys[UsdlKeys["PlaceOfBirth"] = 30] = "PlaceOfBirth";
    UsdlKeys[UsdlKeys["AddressStreet2"] = 31] = "AddressStreet2";
    UsdlKeys[UsdlKeys["RaceEthnicity"] = 32] = "RaceEthnicity";
    UsdlKeys[UsdlKeys["NamePrefix"] = 33] = "NamePrefix";
    UsdlKeys[UsdlKeys["CountryIdentification"] = 34] = "CountryIdentification";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress"] = 35] = "ResidenceStreetAddress";
    UsdlKeys[UsdlKeys["ResidenceStreetAddress2"] = 36] = "ResidenceStreetAddress2";
    UsdlKeys[UsdlKeys["ResidenceCity"] = 37] = "ResidenceCity";
    UsdlKeys[UsdlKeys["ResidenceJurisdictionCode"] = 38] = "ResidenceJurisdictionCode";
    UsdlKeys[UsdlKeys["ResidencePostalCode"] = 39] = "ResidencePostalCode";
    UsdlKeys[UsdlKeys["ResidenceFullAddress"] = 40] = "ResidenceFullAddress";
    UsdlKeys[UsdlKeys["Under18"] = 41] = "Under18";
    UsdlKeys[UsdlKeys["Under19"] = 42] = "Under19";
    UsdlKeys[UsdlKeys["Under21"] = 43] = "Under21";
    UsdlKeys[UsdlKeys["SocialSecurityNumber"] = 44] = "SocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKASocialSecurityNumber"] = 45] = "AKASocialSecurityNumber";
    UsdlKeys[UsdlKeys["AKAMiddleName"] = 46] = "AKAMiddleName";
    UsdlKeys[UsdlKeys["AKAPrefixName"] = 47] = "AKAPrefixName";
    UsdlKeys[UsdlKeys["OrganDonor"] = 48] = "OrganDonor";
    UsdlKeys[UsdlKeys["Veteran"] = 49] = "Veteran";
    UsdlKeys[UsdlKeys["AKADateOfBirth"] = 50] = "AKADateOfBirth";
    UsdlKeys[UsdlKeys["IssuerIdentificationNumber"] = 51] = "IssuerIdentificationNumber";
    UsdlKeys[UsdlKeys["DocumentExpirationDate"] = 52] = "DocumentExpirationDate";
    UsdlKeys[UsdlKeys["JurisdictionVersionNumber"] = 53] = "JurisdictionVersionNumber";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClass"] = 54] = "JurisdictionVehicleClass";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodes"] = 55] = "JurisdictionRestrictionCodes";
    UsdlKeys[UsdlKeys["JurisdictionEndorsementCodes"] = 56] = "JurisdictionEndorsementCodes";
    UsdlKeys[UsdlKeys["DocumentIssueDate"] = 57] = "DocumentIssueDate";
    UsdlKeys[UsdlKeys["FederalCommercialVehicleCodes"] = 58] = "FederalCommercialVehicleCodes";
    UsdlKeys[UsdlKeys["IssuingJurisdiction"] = 59] = "IssuingJurisdiction";
    UsdlKeys[UsdlKeys["StandardVehicleClassification"] = 60] = "StandardVehicleClassification";
    UsdlKeys[UsdlKeys["IssuingJurisdictionName"] = 61] = "IssuingJurisdictionName";
    UsdlKeys[UsdlKeys["StandardEndorsementCode"] = 62] = "StandardEndorsementCode";
    UsdlKeys[UsdlKeys["StandardRestrictionCode"] = 63] = "StandardRestrictionCode";
    UsdlKeys[UsdlKeys["JurisdictionVehicleClassificationDescription"] = 64] = "JurisdictionVehicleClassificationDescription";
    UsdlKeys[UsdlKeys["JurisdictionEndorsmentCodeDescription"] = 65] = "JurisdictionEndorsmentCodeDescription";
    UsdlKeys[UsdlKeys["JurisdictionRestrictionCodeDescription"] = 66] = "JurisdictionRestrictionCodeDescription";
    UsdlKeys[UsdlKeys["InventoryControlNumber"] = 67] = "InventoryControlNumber";
    UsdlKeys[UsdlKeys["CardRevisionDate"] = 68] = "CardRevisionDate";
    UsdlKeys[UsdlKeys["DocumentDiscriminator"] = 69] = "DocumentDiscriminator";
    UsdlKeys[UsdlKeys["LimitedDurationDocument"] = 70] = "LimitedDurationDocument";
    UsdlKeys[UsdlKeys["AuditInformation"] = 71] = "AuditInformation";
    UsdlKeys[UsdlKeys["ComplianceType"] = 72] = "ComplianceType";
    UsdlKeys[UsdlKeys["IssueTimestamp"] = 73] = "IssueTimestamp";
    UsdlKeys[UsdlKeys["PermitExpirationDate"] = 74] = "PermitExpirationDate";
    UsdlKeys[UsdlKeys["PermitIdentifier"] = 75] = "PermitIdentifier";
    UsdlKeys[UsdlKeys["PermitIssueDate"] = 76] = "PermitIssueDate";
    UsdlKeys[UsdlKeys["NumberOfDuplicates"] = 77] = "NumberOfDuplicates";
    UsdlKeys[UsdlKeys["HAZMATExpirationDate"] = 78] = "HAZMATExpirationDate";
    UsdlKeys[UsdlKeys["MedicalIndicator"] = 79] = "MedicalIndicator";
    UsdlKeys[UsdlKeys["NonResident"] = 80] = "NonResident";
    UsdlKeys[UsdlKeys["UniqueCustomerId"] = 81] = "UniqueCustomerId";
    UsdlKeys[UsdlKeys["DataDiscriminator"] = 82] = "DataDiscriminator";
    UsdlKeys[UsdlKeys["DocumentExpirationMonth"] = 83] = "DocumentExpirationMonth";
    UsdlKeys[UsdlKeys["DocumentNonexpiring"] = 84] = "DocumentNonexpiring";
    UsdlKeys[UsdlKeys["SecurityVersion"] = 85] = "SecurityVersion";
})(UsdlKeys || (UsdlKeys = {}));
var BlinkIdOriginal = /** @class */ (function (_super) {
    __extends(BlinkIdOriginal, _super);
    function BlinkIdOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkIdOriginal.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkIdOriginal.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkIdOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkIdOriginal.prototype, "BlinkIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    BlinkIdOriginal.pluginName = "BlinkId";
    BlinkIdOriginal.plugin = "blinkid-cordova";
    BlinkIdOriginal.pluginRef = "cordova.plugins.BlinkID";
    BlinkIdOriginal.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkIdOriginal.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkIdOriginal.platforms = ["iOS", "Android"];
    return BlinkIdOriginal;
}(AwesomeCordovaNativePlugin));
var BlinkId = new BlinkIdOriginal();
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmxpbmtpZC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUEsT0FBTywrRUFBZ0UsTUFBTSwrQkFBK0IsQ0FBQztBQVE3RyxNQUFNLENBQU4sSUFBWSxXQWFYO0FBYkQsV0FBWSxXQUFXO0lBQ3JCLDZDQUFRLENBQUE7SUFDUixpREFBVSxDQUFBO0lBQ1YseURBQWMsQ0FBQTtJQUNkLDZDQUFRLENBQUE7SUFDUiw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLCtDQUFTLENBQUE7SUFDVCxtREFBVyxDQUFBO0lBQ1gsaURBQVUsQ0FBQTtJQUNWLDRDQUFRLENBQUE7SUFDUixnREFBVSxDQUFBO0lBQ1Ysa0RBQVcsQ0FBQTtBQUNiLENBQUMsRUFiVyxXQUFXLEtBQVgsV0FBVyxRQWF0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQUlYO0FBSkQsV0FBWSxxQkFBcUI7SUFDL0IsbUVBQVMsQ0FBQTtJQUNULDJFQUFhLENBQUE7SUFDYixtRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFJaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDZEQUFXLENBQUE7SUFDWCx1RUFBZ0IsQ0FBQTtJQUNoQiwrREFBWSxDQUFBO0lBQ1osdURBQVEsQ0FBQTtJQUNSLGlFQUFhLENBQUE7SUFDYixxRkFBdUIsQ0FBQTtBQUN6QixDQUFDLEVBUFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQU8zQjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIseUNBQU0sQ0FBQTtJQUNOLG1EQUFXLENBQUE7SUFDWCxtREFBVyxDQUFBO0lBQ1gsdURBQWEsQ0FBQTtBQUNmLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHdCQUlYO0FBSkQsV0FBWSx3QkFBd0I7SUFDbEMscUVBQU8sQ0FBQTtJQUNQLHFFQUFPLENBQUE7SUFDUCxpR0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSlcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUluQztBQUVELE1BQU0sQ0FBTixJQUFZLFFBdUZYO0FBdkZELFdBQVksUUFBUTtJQUNsQix1REFBZ0IsQ0FBQTtJQUNoQix5RUFBeUIsQ0FBQTtJQUN6QixtRUFBc0IsQ0FBQTtJQUN0QixpRUFBcUIsQ0FBQTtJQUNyQiwrREFBb0IsQ0FBQTtJQUNwQixxREFBZSxDQUFBO0lBQ2YscUNBQU8sQ0FBQTtJQUNQLCtDQUFZLENBQUE7SUFDWix5REFBaUIsQ0FBQTtJQUNqQixxREFBZSxDQUFBO0lBQ2YsOEVBQTRCLENBQUE7SUFDNUIsa0VBQXNCLENBQUE7SUFDdEIsc0RBQWdCLENBQUE7SUFDaEIsNENBQVcsQ0FBQTtJQUNYLGdEQUFhLENBQUE7SUFDYixnREFBYSxDQUFBO0lBQ2Isb0VBQXVCLENBQUE7SUFDdkIsa0RBQWMsQ0FBQTtJQUNkLG9EQUFlLENBQUE7SUFDZixzREFBZ0IsQ0FBQTtJQUNoQiwwREFBa0IsQ0FBQTtJQUNsQix3REFBaUIsQ0FBQTtJQUNqQiwwREFBa0IsQ0FBQTtJQUNsQixzREFBZ0IsQ0FBQTtJQUNoQix3REFBaUIsQ0FBQTtJQUNqQiw4REFBb0IsQ0FBQTtJQUNwQixnRUFBcUIsQ0FBQTtJQUNyQix3RUFBeUIsQ0FBQTtJQUN6QixzRUFBd0IsQ0FBQTtJQUN4Qix3RUFBeUIsQ0FBQTtJQUN6Qix3REFBaUIsQ0FBQTtJQUNqQiw0REFBbUIsQ0FBQTtJQUNuQiwwREFBa0IsQ0FBQTtJQUNsQixvREFBZSxDQUFBO0lBQ2YsMEVBQTBCLENBQUE7SUFDMUIsNEVBQTJCLENBQUE7SUFDM0IsOEVBQTRCLENBQUE7SUFDNUIsMERBQWtCLENBQUE7SUFDbEIsa0ZBQThCLENBQUE7SUFDOUIsc0VBQXdCLENBQUE7SUFDeEIsd0VBQXlCLENBQUE7SUFDekIsOENBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osd0VBQXlCLENBQUE7SUFDekIsOEVBQTRCLENBQUE7SUFDNUIsMERBQWtCLENBQUE7SUFDbEIsMERBQWtCLENBQUE7SUFDbEIsb0RBQWUsQ0FBQTtJQUNmLDhDQUFZLENBQUE7SUFDWiw0REFBbUIsQ0FBQTtJQUNuQixvRkFBK0IsQ0FBQTtJQUMvQiw0RUFBMkIsQ0FBQTtJQUMzQixrRkFBOEIsQ0FBQTtJQUM5QixnRkFBNkIsQ0FBQTtJQUM3Qix3RkFBaUMsQ0FBQTtJQUNqQyx3RkFBaUMsQ0FBQTtJQUNqQyxrRUFBc0IsQ0FBQTtJQUN0QiwwRkFBa0MsQ0FBQTtJQUNsQyxzRUFBd0IsQ0FBQTtJQUN4QiwwRkFBa0MsQ0FBQTtJQUNsQyw4RUFBNEIsQ0FBQTtJQUM1Qiw4RUFBNEIsQ0FBQTtJQUM1Qiw4RUFBNEIsQ0FBQTtJQUM1Qix3SEFBaUQsQ0FBQTtJQUNqRCwwR0FBMEMsQ0FBQTtJQUMxQyw0R0FBMkMsQ0FBQTtJQUMzQyw0RUFBMkIsQ0FBQTtJQUMzQixnRUFBcUIsQ0FBQTtJQUNyQiwwRUFBMEIsQ0FBQTtJQUMxQiw4RUFBNEIsQ0FBQTtJQUM1QixnRUFBcUIsQ0FBQTtJQUNyQiw0REFBbUIsQ0FBQTtJQUNuQiw0REFBbUIsQ0FBQTtJQUNuQix3RUFBeUIsQ0FBQTtJQUN6QixnRUFBcUIsQ0FBQTtJQUNyQiw4REFBb0IsQ0FBQTtJQUNwQixvRUFBdUIsQ0FBQTtJQUN2Qix3RUFBeUIsQ0FBQTtJQUN6QixnRUFBcUIsQ0FBQTtJQUNyQixzREFBZ0IsQ0FBQTtJQUNoQixnRUFBcUIsQ0FBQTtJQUNyQixrRUFBc0IsQ0FBQTtJQUN0Qiw4RUFBNEIsQ0FBQTtJQUM1QixzRUFBd0IsQ0FBQTtJQUN4Qiw4REFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBdkZXLFFBQVEsS0FBUixRQUFRLFFBdUZuQjs7SUEyakY0QiwyQkFBMEI7Ozs7SUFZckQsZ0NBQWMsYUFDWixlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsUUFBa0I7MEJBS0QseUJBQUk7Ozs7OzswQkFDSiwwQkFBSzs7Ozs7OzBCQUNMLGtDQUFhOzs7Ozs7MEJBRWIsMkNBQXNCOzs7Ozs7MEJBQ3RCLDRDQUF1Qjs7Ozs7OzBCQUN2Qix3REFBbUM7Ozs7OzswQkFDbkMsNkNBQXdCOzs7Ozs7MEJBRXhCLHlDQUFvQjs7Ozs7OzBCQUVwQiw0Q0FBdUI7Ozs7OzswQkFDdkIsc0NBQWlCOzs7Ozs7MEJBQ2pCLHdEQUFtQzs7Ozs7OzBCQUNuQyxrREFBNkI7Ozs7OzswQkFFN0Isb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsbURBQThCOzs7Ozs7MEJBQzlCLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsb0RBQStCOzs7Ozs7MEJBQy9CLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixvREFBK0I7Ozs7OzswQkFDL0Isa0RBQTZCOzs7Ozs7MEJBQzdCLG1EQUE4Qjs7Ozs7OzBCQUM5QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsb0RBQStCOzs7Ozs7MEJBQy9CLGtEQUE2Qjs7Ozs7OzBCQUM3QixpREFBNEI7Ozs7OzswQkFDNUIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0Qix5Q0FBb0I7Ozs7OzswQkFDcEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6Qix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCxxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QsOENBQXlCOzs7Ozs7MEJBQ3pCLHdDQUFtQjs7Ozs7OzBCQUNuQiwrQ0FBMEI7Ozs7OzswQkFDMUIseUNBQW9COzs7Ozs7MEJBQ3BCLHNEQUFpQzs7Ozs7OzBCQUNqQyxnREFBMkI7Ozs7OzswQkFDM0IsMkNBQXNCOzs7Ozs7MEJBQ3RCLHFDQUFnQjs7Ozs7OzBCQUNoQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyxzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2Qix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLHNEQUFpQzs7Ozs7OzBCQUNqQyxnREFBMkI7Ozs7OzswQkFDM0IsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1Qix3REFBbUM7Ozs7OzswQkFDbkMsa0RBQTZCOzs7Ozs7MEJBQzdCLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsNkRBQXdDOzs7Ozs7MEJBQ3hDLHVEQUFrQzs7Ozs7OzBCQUNsQyw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLHdDQUFtQjs7Ozs7OzBCQUNuQixrQ0FBYTs7Ozs7OzBCQUNiLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsc0NBQWlCOzs7Ozs7MEJBQ2pCLDJDQUFzQjs7Ozs7OzBCQUN0Qiw0Q0FBdUI7Ozs7Ozs7Ozs7OztrQkFuNEY1QztFQXFzRjZCLDBCQUEwQjtTQUExQyxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YVByb3BlcnR5LCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExpY2Vuc2VzIHtcclxuICBpb3M6IHN0cmluZztcclxuICBhbmRyb2lkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEJhcmNvZGVUeXBlIHtcclxuICBOb25lID0gMSxcclxuICBRUkNvZGUgPSAyLFxyXG4gIERhdGFNYXRyaXggPSAzLFxyXG4gIFVQQ0UgPSA0LFxyXG4gIFVQQ0EgPSA1LFxyXG4gIEVBTjggPSA2LFxyXG4gIEVBTjEzID0gNyxcclxuICBDb2RlMTI4ID0gOCxcclxuICBDb2RlMzkgPSA5LFxyXG4gIElURiA9IDEwLFxyXG4gIEF6dGVjID0gMTEsXHJcbiAgUERGNDE3ID0gMTIsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIFJlY29nbml6ZXJSZXN1bHRTdGF0ZSB7XHJcbiAgZW1wdHkgPSAxLFxyXG4gIHVuY2VydGFpbiA9IDIsXHJcbiAgdmFsaWQgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBNcnRkRG9jdW1lbnRUeXBlIHtcclxuICBVbmtub3duID0gMSxcclxuICBJZGVudGl0eUNhcmQgPSAyLFxyXG4gIFBhc3Nwb3J0ID0gMyxcclxuICBWaXNhID0gNCxcclxuICBHcmVlbkNhcmQgPSA1LFxyXG4gIE1hbGF5c2lhblBhc3NJTU0xM1AgPSA2LFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBFdWRsQ291bnRyeSB7XHJcbiAgVUsgPSAxLFxyXG4gIEdlcm1hbnkgPSAyLFxyXG4gIEF1c3RyaWEgPSAzLFxyXG4gIEF1dG9tYXRpYyA9IDQsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIERvY3VtZW50RmFjZURldGVjdG9yVHlwZSB7XHJcbiAgVEQxID0gMSxcclxuICBURDIgPSAyLFxyXG4gIFBhc3Nwb3J0c0FuZFZpc2FzID0gMyxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gVXNkbEtleXMge1xyXG4gIERvY3VtZW50VHlwZSA9IDAsXHJcbiAgU3RhbmRhcmRWZXJzaW9uTnVtYmVyID0gMSxcclxuICBDdXN0b21lckZhbWlseU5hbWUgPSAyLFxyXG4gIEN1c3RvbWVyRmlyc3ROYW1lID0gMyxcclxuICBDdXN0b21lckZ1bGxOYW1lID0gNCxcclxuICBEYXRlT2ZCaXJ0aCA9IDUsXHJcbiAgU2V4ID0gNixcclxuICBFeWVDb2xvciA9IDcsXHJcbiAgQWRkcmVzc1N0cmVldCA9IDgsXHJcbiAgQWRkcmVzc0NpdHkgPSA5LFxyXG4gIEFkZHJlc3NKdXJpc2RpY3Rpb25Db2RlID0gMTAsXHJcbiAgQWRkcmVzc1Bvc3RhbENvZGUgPSAxMSxcclxuICBGdWxsQWRkcmVzcyA9IDEyLFxyXG4gIEhlaWdodCA9IDEzLFxyXG4gIEhlaWdodEluID0gMTQsXHJcbiAgSGVpZ2h0Q20gPSAxNSxcclxuICBDdXN0b21lck1pZGRsZU5hbWUgPSAxNixcclxuICBIYWlyQ29sb3IgPSAxNyxcclxuICBOYW1lU3VmZml4ID0gMTgsXHJcbiAgQUtBRnVsbE5hbWUgPSAxOSxcclxuICBBS0FGYW1pbHlOYW1lID0gMjAsXHJcbiAgQUtBR2l2ZW5OYW1lID0gMjEsXHJcbiAgQUtBU3VmZml4TmFtZSA9IDIyLFxyXG4gIFdlaWdodFJhbmdlID0gMjMsXHJcbiAgV2VpZ2h0UG91bmRzID0gMjQsXHJcbiAgV2VpZ2h0S2lsb2dyYW1zID0gMjUsXHJcbiAgQ3VzdG9tZXJJZE51bWJlciA9IDI2LFxyXG4gIEZhbWlseU5hbWVUcnVuY2F0aW9uID0gMjcsXHJcbiAgRmlyc3ROYW1lVHJ1bmNhdGlvbiA9IDI4LFxyXG4gIE1pZGRsZU5hbWVUcnVuY2F0aW9uID0gMjksXHJcbiAgUGxhY2VPZkJpcnRoID0gMzAsXHJcbiAgQWRkcmVzc1N0cmVldDIgPSAzMSxcclxuICBSYWNlRXRobmljaXR5ID0gMzIsXHJcbiAgTmFtZVByZWZpeCA9IDMzLFxyXG4gIENvdW50cnlJZGVudGlmaWNhdGlvbiA9IDM0LFxyXG4gIFJlc2lkZW5jZVN0cmVldEFkZHJlc3MgPSAzNSxcclxuICBSZXNpZGVuY2VTdHJlZXRBZGRyZXNzMiA9IDM2LFxyXG4gIFJlc2lkZW5jZUNpdHkgPSAzNyxcclxuICBSZXNpZGVuY2VKdXJpc2RpY3Rpb25Db2RlID0gMzgsXHJcbiAgUmVzaWRlbmNlUG9zdGFsQ29kZSA9IDM5LFxyXG4gIFJlc2lkZW5jZUZ1bGxBZGRyZXNzID0gNDAsXHJcbiAgVW5kZXIxOCA9IDQxLFxyXG4gIFVuZGVyMTkgPSA0MixcclxuICBVbmRlcjIxID0gNDMsXHJcbiAgU29jaWFsU2VjdXJpdHlOdW1iZXIgPSA0NCxcclxuICBBS0FTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ1LFxyXG4gIEFLQU1pZGRsZU5hbWUgPSA0NixcclxuICBBS0FQcmVmaXhOYW1lID0gNDcsXHJcbiAgT3JnYW5Eb25vciA9IDQ4LFxyXG4gIFZldGVyYW4gPSA0OSxcclxuICBBS0FEYXRlT2ZCaXJ0aCA9IDUwLFxyXG4gIElzc3VlcklkZW50aWZpY2F0aW9uTnVtYmVyID0gNTEsXHJcbiAgRG9jdW1lbnRFeHBpcmF0aW9uRGF0ZSA9IDUyLFxyXG4gIEp1cmlzZGljdGlvblZlcnNpb25OdW1iZXIgPSA1MyxcclxuICBKdXJpc2RpY3Rpb25WZWhpY2xlQ2xhc3MgPSA1NCxcclxuICBKdXJpc2RpY3Rpb25SZXN0cmljdGlvbkNvZGVzID0gNTUsXHJcbiAgSnVyaXNkaWN0aW9uRW5kb3JzZW1lbnRDb2RlcyA9IDU2LFxyXG4gIERvY3VtZW50SXNzdWVEYXRlID0gNTcsXHJcbiAgRmVkZXJhbENvbW1lcmNpYWxWZWhpY2xlQ29kZXMgPSA1OCxcclxuICBJc3N1aW5nSnVyaXNkaWN0aW9uID0gNTksXHJcbiAgU3RhbmRhcmRWZWhpY2xlQ2xhc3NpZmljYXRpb24gPSA2MCxcclxuICBJc3N1aW5nSnVyaXNkaWN0aW9uTmFtZSA9IDYxLFxyXG4gIFN0YW5kYXJkRW5kb3JzZW1lbnRDb2RlID0gNjIsXHJcbiAgU3RhbmRhcmRSZXN0cmljdGlvbkNvZGUgPSA2MyxcclxuICBKdXJpc2RpY3Rpb25WZWhpY2xlQ2xhc3NpZmljYXRpb25EZXNjcmlwdGlvbiA9IDY0LFxyXG4gIEp1cmlzZGljdGlvbkVuZG9yc21lbnRDb2RlRGVzY3JpcHRpb24gPSA2NSxcclxuICBKdXJpc2RpY3Rpb25SZXN0cmljdGlvbkNvZGVEZXNjcmlwdGlvbiA9IDY2LFxyXG4gIEludmVudG9yeUNvbnRyb2xOdW1iZXIgPSA2NyxcclxuICBDYXJkUmV2aXNpb25EYXRlID0gNjgsXHJcbiAgRG9jdW1lbnREaXNjcmltaW5hdG9yID0gNjksXHJcbiAgTGltaXRlZER1cmF0aW9uRG9jdW1lbnQgPSA3MCxcclxuICBBdWRpdEluZm9ybWF0aW9uID0gNzEsXHJcbiAgQ29tcGxpYW5jZVR5cGUgPSA3MixcclxuICBJc3N1ZVRpbWVzdGFtcCA9IDczLFxyXG4gIFBlcm1pdEV4cGlyYXRpb25EYXRlID0gNzQsXHJcbiAgUGVybWl0SWRlbnRpZmllciA9IDc1LFxyXG4gIFBlcm1pdElzc3VlRGF0ZSA9IDc2LFxyXG4gIE51bWJlck9mRHVwbGljYXRlcyA9IDc3LFxyXG4gIEhBWk1BVEV4cGlyYXRpb25EYXRlID0gNzgsXHJcbiAgTWVkaWNhbEluZGljYXRvciA9IDc5LFxyXG4gIE5vblJlc2lkZW50ID0gODAsXHJcbiAgVW5pcXVlQ3VzdG9tZXJJZCA9IDgxLFxyXG4gIERhdGFEaXNjcmltaW5hdG9yID0gODIsXHJcbiAgRG9jdW1lbnRFeHBpcmF0aW9uTW9udGggPSA4MyxcclxuICBEb2N1bWVudE5vbmV4cGlyaW5nID0gODQsXHJcbiAgU2VjdXJpdHlWZXJzaW9uID0gODUsXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VFeHRlbnNpb25GYWN0b3JzIHtcclxuICB1cEZhY3RvcjogbnVtYmVyO1xyXG4gIHJpZ2h0RmFjdG9yOiBudW1iZXI7XHJcbiAgZG93bkZhY3RvcjogbnVtYmVyO1xyXG4gIGxlZnRGYWN0b3I6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRlIHtcclxuICBkYXk6IHN0cmluZztcclxuICBtb250aDogc3RyaW5nO1xyXG4gIHllYXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGVDdG9yIHtcclxuICBuZXcgKG5hdGl2ZURhdGU6IERhdGUpOiBEYXRlO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvaW50IHtcclxuICB4OiBzdHJpbmc7XHJcbiAgeTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnRDdG9yIHtcclxuICBuZXcgKG5hdGl2ZVBvaW50OiBQb2ludCk6IFBvaW50O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFF1YWRyaWxhdGVyYWwge1xyXG4gIHVwcGVyTGVmdDogc3RyaW5nO1xyXG4gIHVwcGVyUmlnaHQ6IHN0cmluZztcclxuICBsb3dlckxlZnQ6IHN0cmluZztcclxuICBsb3dlclJpZ2h0OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBRdWFkcmlsYXRlcmFsQ3RvciB7XHJcbiAgbmV3IChuYXRpdmVRdWFkOiBRdWFkcmlsYXRlcmFsKTogUXVhZHJpbGF0ZXJhbDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBPdmVybGF5U2V0dGluZ3Mge1xyXG4gIG92ZXJsYXlTZXR0aW5nc1R5cGU6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQmFyY29kZU92ZXJsYXlTZXR0aW5ncyA9IE92ZXJsYXlTZXR0aW5ncztcclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlT3ZlcmxheVNldHRpbmdzQ3RvciB7XHJcbiAgbmV3ICgpOiBCYXJjb2RlT3ZlcmxheVNldHRpbmdzO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5ncyA9IE92ZXJsYXlTZXR0aW5ncztcclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogRG9jdW1lbnRPdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xyXG4gIGZpcnN0U2lkZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcclxuICBzZWNvbmRTaWRlU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRG9uZVNwbGFzaE1lc3NhZ2U6IHN0cmluZztcclxuICBmaXJzdFNpZGVJbnN0cnVjdGlvbnM6IHN0cmluZztcclxuICBzZWNvbmRTaWRlSW5zdHJ1Y3Rpb25zOiBzdHJpbmc7XHJcbiAgZ2xhcmVNZXNzYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzIGV4dGVuZHMgT3ZlcmxheVNldHRpbmdzIHtcclxuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHJlc3VsdFN0YXRlOiBSZWNvZ25pemVyUmVzdWx0U3RhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdEN0b3I8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBuZXcgKG5hdGl2ZVJlc3VsdDogYW55KTogVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyPFQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0ID0gYW55PiB7XHJcbiAgcmVjb2duaXplclR5cGU6IHN0cmluZztcclxuICByZXN1bHQ6IFQ7XHJcbiAgY3JlYXRlUmVzdWx0RnJvbU5hdGl2ZShuYXRpdmVSZXN1bHQ6IGFueSk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckN0b3I8VCBleHRlbmRzIFJlY29nbml6ZXI+IHtcclxuICBuZXcgKCk6IFQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb24ge1xyXG4gIHJlY29nbml6ZXJBcnJheTogUmVjb2duaXplcltdO1xyXG4gIGFsbG93TXVsdGlwbGVSZXN1bHRzOiBib29sZWFuO1xyXG4gIC8vIHNpY1xyXG4gIG1pbGlzZWNvbmRzQmVmb3JlVGltZW91dDogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplckNvbGxlY3Rpb25DdG9yIHtcclxuICBuZXcgKHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyW10pOiBSZWNvZ25pemVyQ29sbGVjdGlvbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJhcmNvZGVUeXBlOiBCYXJjb2RlVHlwZTtcclxuICByYXdEYXRhOiBzdHJpbmc7XHJcbiAgc3RyaW5nRGF0YTogc3RyaW5nO1xyXG4gIHVuY2VydGFpbjogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCYXJjb2RlUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGF1dG9TY2FsZURldGVjdGlvbjogYm9vbGVhbjtcclxuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcclxuICByZWFkQ29kZTM5QXNFeHRlbmRlZERhdGE6IGJvb2xlYW47XHJcbiAgc2NhbkF6dGVjQ29kZTogYm9vbGVhbjtcclxuICBzY2FuQ29kZTEyODogYm9vbGVhbjtcclxuICBzY2FuQ29kZTM5OiBib29sZWFuO1xyXG4gIHNjYW5EYXRhTWF0cml4OiBib29sZWFuO1xyXG4gIHNjYW5FYW4xMzogYm9vbGVhbjtcclxuICBzY2FuRWFuODogYm9vbGVhbjtcclxuICBzY2FuSW52ZXJzZTogYm9vbGVhbjtcclxuICBzY2FuSXRmOiBib29sZWFuO1xyXG4gIHNjYW5QZGY0MTc6IGJvb2xlYW47XHJcbiAgc2NhblFyQ29kZTogYm9vbGVhbjtcclxuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xyXG4gIHNjYW5VcGNhOiBib29sZWFuO1xyXG4gIHNjYW5VcGNlOiBib29sZWFuO1xyXG4gIHNsb3dlclRob3JvdWdoU2NhbjogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBCYXJjb2RlUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxCYXJjb2RlUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1yelJlc3VsdCB7XHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgZ2VuZGVyOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgYWxpZW5OdW1iZXI6IHN0cmluZztcclxuICBhcHBsaWNhdGlvblJlY2VpcHROdW1iZXI6IHN0cmluZztcclxuICBpbW1pZ3JhbnRDYXNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHN1Y2Nlc3NGcmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgc2xhdmVSZWNvZ25pemVyOiBSZWNvZ25pemVyO1xyXG4gIGNyZWF0ZVJlc3VsdEZyb21OYXRpdmUobmF0aXZlUmVzdWx0OiB7IHNsYXZlUmVjb2duaXplclJlc3VsdDogYW55IH0pOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvciB7XHJcbiAgbmV3IChyZWNvZ25pemVyOiBSZWNvZ25pemVyKTogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBsaWNlbnNlVHlwZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VhbmNlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZXllQ29sb3I6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIG1ydGRWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW5jaXBhbFJlc2lkZW5jZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQcmluY2lwYWxSZXNpZGVuY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZlaGljbGVDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFEbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBleWVDb2xvcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW5jaXBhbFJlc2lkZW5jZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VhbmNlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0UHJpbmNpcGFsUmVzaWRlbmNlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGFzc3BvcnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRyaXZlclJlc3RyaWN0aW9uczogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0FnZW5jeTogc3RyaW5nO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RHJpdmVyUmVzdHJpY3Rpb25zOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQWdlbmN5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJpcnRoRGF0ZTogRGF0ZTtcclxuICBibG9vZEdyb3VwOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmaW5nZXJwcmludDogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgbnVsbFF1aWV0Wm9uZUFsbG93ZWQ6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2NhblVuY2VydGFpbjogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Q29sb21iaWFJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeVBlcm1hbmVudDogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudEJpbGluZ3VhbDogYm9vbGVhbjtcclxuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBub25SZXNpZGVudDogYm9vbGVhbjtcclxuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBib29sZWFuO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Rm9yTm9uUmVzaWRlbnQ6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZWRCeTogc3RyaW5nO1xyXG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xyXG4gIHJlc2lkZW5jZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcclxuICBleHRyYWN0UmVzaWRlbmNlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBib29sZWFuO1xyXG4gIGRvY3VtZW50QmlsaW5ndWFsOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdGl6ZW5zaGlwOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZXhwaXJlc09uOiBEYXRlO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFeHBpcmVzT246IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Q3lwcnVzSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBDeXBydXNJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBlcm1hbmVudFN0YXk6IHN0cmluZztcclxuICBwZXJzb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQZXJtYW5lbnRTdGF5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQZXJzb25hbE51bWJlcjogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lczogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRvY3VtZW50TG9jYXRpb246IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYWNlTG9jYXRpb246IFF1YWRyaWxhdGVyYWw7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0b3JUeXBlOiBEb2N1bWVudEZhY2VEZXRlY3RvclR5cGUuVEQxO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgbnVtU3RhYmxlRGV0ZWN0aW9uc1RocmVzaG9sZDogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgRWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRWd5cHRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RWd5cHRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbE51bWJlcjogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgRWd5cHRJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGN2djogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpbnZlbnRvcnlOdW1iZXI6IHN0cmluZztcclxuICBvd25lcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICB2YWxpZFRocnU6IERhdGU7XHJcbn1cclxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYW5vbnltaXplQ2FyZE51bWJlcjogYm9vbGVhbjtcclxuICBhbm9ueW1pemVDdnY6IGJvb2xlYW47XHJcbiAgYW5vbnltaXplT3duZXI6IGJvb2xlYW47XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVGhydTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV1ZGxSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGJpcnRoRGF0YTogc3RyaW5nO1xyXG4gIGNvdW50cnk6IHN0cmluZztcclxuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcclxuICBleHBpcnlEYXRlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVEYXRlOiBEYXRlO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgRXVkbFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8RXVkbFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFdWRsUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8RXVkbFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBjb3VudHJ5OiBFdWRsQ291bnRyeS5BdXRvbWF0aWM7XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2FuTnVtYmVyOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGV5ZUNvbG9yOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZklzc3VlQjEwOiBzdHJpbmc7XHJcbiAgZGF0ZU9mSXNzdWVCMTBOb3RTcGVjaWZpZWQ6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueURsQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueURsQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBhZGRyZXNzQ2l0eTogc3RyaW5nO1xyXG4gIGFkZHJlc3NIb3VzZU51bWJlcjogc3RyaW5nO1xyXG4gIGFkZHJlc3NTdHJlZXQ6IHN0cmluZztcclxuICBhZGRyZXNzWmlwQ29kZTogc3RyaW5nO1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGV5ZUNvbG91cjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RXllQ29sb3VyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueUlkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjYW5OdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZXM6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDYW5OdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlPbGRJZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNvbW1lcmNpYWxDb2RlOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgcmVzaWRlbnRpYWxTdGF0dXM6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJlc2lkZW50aWFsU3RhdHVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZW1wbG95ZXI6IHN0cmluZztcclxuICBleHBpcnlEYXRlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZhY3VsdHlBZGRyZXNzOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xyXG4gIHNlY3Rvcnk6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBJa2FkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJa2FkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElrYWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJa2FkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFbXBsb3llcjogYm9vbGVhbjtcclxuICBleHRyYWN0RXhwaXJ5RGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RmFjdWx0eUFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0U2VjdG9yOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgSWthZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8SWthZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBibG9vZFR5cGU6IHN0cmluZztcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBzdHJpbmc7XHJcbiAgZGlzdHJpY3Q6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAga2VsRGVzYTogc3RyaW5nO1xyXG4gIG1hcml0YWxTdGF0dXM6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgb2NjdXBhdGlvbjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByb3ZpbmNlOiBzdHJpbmc7XHJcbiAgcmVsaWdpb246IHN0cmluZztcclxuICBydDogc3RyaW5nO1xyXG4gIHJ3OiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCbG9vZFR5cGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdGl6ZW5zaGlwOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERpc3RyaWN0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RLZWxEZXNhOiBib29sZWFuO1xyXG4gIGV4dHJhY3RNYXJpdGFsU3RhdHVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RPY2N1cGF0aW9uOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJlbGlnaW9uOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSdDogYm9vbGVhbjtcclxuICBleHRyYWN0Unc6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxJbmRvbmVzaWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZHJpdmVyTnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZWRCeTogc3RyaW5nO1xyXG4gIC8vIHNpY1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZWRCeTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIElyZWxhbmREbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxJcmVsYW5kRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICAvLyBzaWNcclxuICBsaWNlbmNlQ2F0ZWdvcmllczogc3RyaW5nO1xyXG4gIC8vIHNpY1xyXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJdGFseURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBJdGFseURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEl0YWx5RGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEpvcmRhbkNvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Sm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEpvcmRhbklkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Sm9yZGFuSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgc2VyaWFsTm86IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNlcmlhbE5vOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgS3V3YWl0SWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBiaXJ0aERhdGE6IERhdGU7XHJcbiAgY2l2aWxJZE51bWJlcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCaXJ0aERhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8S3V3YWl0SWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIGRsQ2xhc3M6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsQWRkcmVzczogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlOdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvd25lclN0YXRlOiBzdHJpbmc7XHJcbiAgc3RyZWV0OiBzdHJpbmc7XHJcbiAgdmFsaWRGcm9tOiBEYXRlO1xyXG4gIHZhbGlkVW50aWw6IERhdGU7XHJcbiAgemlwY29kZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0Q2xhc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVW50aWw6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgTWFsYXlzaWFEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXJteU51bWJlcjogc3RyaW5nO1xyXG4gIGJpcnRoRGF0YTogRGF0ZTtcclxuICBjaXR5OiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbEFkZHJlc3M6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgbnJpYzogc3RyaW5nO1xyXG4gIG93bmVyU3RhdGU6IHN0cmluZztcclxuICByZWxpZ2lvbjogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHN0cmVldDogc3RyaW5nO1xyXG4gIHppcGNvZGU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RnVsbE5hbWVBbmRBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZWxpZ2lvbjogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjdXJwOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZWxlY3RvcktleTogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0Q3VycDogYm9vbGVhbjtcclxuICBleHRyYWN0RnVsbE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjaXZpbFN0YXR1c051bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhdGhlcnNOYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtb3RoZXJzTmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdmlsU3RhdHVzTnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZhdGhlcnNOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RNb3RoZXJzTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TW9yb2Njb0lkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFsaWVuTnVtYmVyOiBzdHJpbmc7XHJcbiAgYXBwbGljYXRpb25SZWNlaXB0TnVtYmVyOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRUeXBlOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGltbWlncmFudENhc2VOdW1iZXI6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpJbWFnZTogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1ydGRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBhbGxvd1VucGFyc2VkUmVzdWx0czogYm9vbGVhbjtcclxuICBhbGxvd1VudmVyaWZpZWRSZXN1bHRzOiBib29sZWFuO1xyXG4gIG51bVN0YWJsZURldGVjdGlvbnNUaHJlc2hvbGQ6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuTXJ6SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1ydGRDb21iaW5lZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6SW1hZ2U6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxufVxyXG5leHBvcnQgdHlwZSBNcnRkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNcnRkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNcnRkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xyXG4gIGFsbG93VW52ZXJpZmllZFJlc3VsdHM6IGJvb2xlYW47XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuTXJ6SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2F2ZUltYWdlRFBJOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgTXJ0ZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXJ0ZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZXh0ZW5kZWROcmljOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBucmljOiBzdHJpbmc7XHJcbiAgb2xkTnJpYzogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTXlLYWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXlLYWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RPbGROcmljOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBNeUthZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE15S2FkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFybXlOdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5yaWNOdW1iZXI6IHN0cmluZztcclxuICBvd25lckFkZHJlc3M6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NDaXR5OiBzdHJpbmc7XHJcbiAgb3duZXJBZGRyZXNzU3RhdGU6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NTdHJlZXQ6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NaaXBDb2RlOiBzdHJpbmc7XHJcbiAgb3duZXJCaXJ0aERhdGU6IERhdGU7XHJcbiAgb3duZXJGdWxsTmFtZTogc3RyaW5nO1xyXG4gIG93bmVyUmVsaWdpb246IHN0cmluZztcclxuICBvd25lclNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXlLYWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZXh0cmFjdEFybXlOdW1iZXI6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgTXlLYWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2FyZFZlcnNpb246IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9ub3JJbmRpY2F0b3I6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWVzOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb25vckluZGljYXRvcjogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE5ld1plYWxhbmREbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgY3Z2OiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaW52ZW50b3J5TnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgb3duZXI6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgdmFsaWRUaHJ1OiBEYXRlO1xyXG59XHJcbmV4cG9ydCB0eXBlIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rQ2FyZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBhbm9ueW1pemVDYXJkTnVtYmVyOiBib29sZWFuO1xyXG4gIGFub255bWl6ZUN2djogYm9vbGVhbjtcclxuICBhbm9ueW1pemVPd25lcjogYm9vbGVhbjtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0Q3Z2OiBib29sZWFuO1xyXG4gIGV4dHJhY3RJbnZlbnRvcnlOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE93bmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFRocnU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEJsaW5rQ2FyZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QmxpbmtDYXJkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBiYXJjb2RlVHlwZTogc3RyaW5nO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICBzdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UGRmNDE3UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBkZjQxN1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcclxuICBzY2FuSW52ZXJzZTogYm9vbGVhbjtcclxuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFBkZjQxN1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8UGRmNDE3UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmFtaWx5TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWVzOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xyXG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGFyZW50c0dpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8UG9sYW5kQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgUG9sYW5kSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQb2xhbmRJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYW1pbHlOYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWVzOiBzdHJpbmc7XHJcbiAgcGFyZW50c0dpdmVuTmFtZXM6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZhbWlseU5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhcmVudHNHaXZlbk5hbWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFBvbGFuZElkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNhcmROdW1iZXI6IHN0cmluZztcclxuICBjbnA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkU2VyaWVzOiBzdHJpbmc7XHJcbiAgaXNzdWVkQnk6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBub25NUlpOYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG5vbk1SWlNleDogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGFyZW50TmFtZXM6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHZhbGlkRnJvbTogRGF0ZTtcclxuICB2YWxpZFVudGlsOiBEYXRlO1xyXG59XHJcbmV4cG9ydCB0eXBlIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0Tm9uTVJaU2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFJvbWFuaWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgam1iZzogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2VyYmlhQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2VyYmlhSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTZXJiaWFJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0RhdGU6IERhdGU7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICB2YWxpZFRocnU6IERhdGU7XHJcbiAgdmFsaWRVbnRpbDogRGF0ZTtcclxufVxyXG5leHBvcnQgdHlwZSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2VyYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2VyYmlhSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgc2ltTnVtYmVyOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2ltTnVtYmVyUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCB0eXBlIFNpbU51bWJlclJlY29nbml6ZXIgPSBSZWNvZ25pemVyPFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ+O1xyXG5leHBvcnQgdHlwZSBTaW1OdW1iZXJSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbU51bWJlclJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNvbXBhbnlOYW1lOiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHRDdG9yID1cclxuICBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDb21wYW55TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGFkZHJlc3NDaGFuZ2VEYXRlOiBEYXRlO1xyXG4gIGJsb29kR3JvdXA6IHN0cmluZztcclxuICBjb3VudHJ5T2ZCaXJ0aDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcmFjZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzQ2hhbmdlRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Qmxvb2RHcm91cDogYm9vbGVhbjtcclxuICBleHRyYWN0Q291bnRyeU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYmlydGhEYXRhOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVEYXRlOiBEYXRlO1xyXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdmFsaWRUaWxsOiBEYXRlO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEJpcnRoRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFRpbGw6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGFkZHJlc3NDaGFuZ2VEYXRlOiBzdHJpbmc7XHJcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xyXG4gIGNhcmROdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzc0NoYW5nZURhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEJsb29kR3JvdXA6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjb3VudHJ5T2ZCaXJ0aDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJhY2U6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJhY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBudW1iZXI7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IG51bWJlcjtcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XHJcbiAgc3VybmFtZUF0QmlydGg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNwZWNpYWxSZW1hcmtzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lQXRCaXJ0aDogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNwZWNpYWxSZW1hcmtzOiBzdHJpbmc7XHJcbiAgc3VybmFtZUF0QmlydGg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTcGVjaWFsUmVtYXJrczogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZUF0QmlydGg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlZEJ5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0RG9jdW1lbnROdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUlkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmVuaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICBudW1iZXI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxuICB2YWxpZEZyb206IERhdGU7XHJcbiAgdmFsaWRVbnRpbDogRGF0ZTtcclxufVxyXG5leHBvcnQgdHlwZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTcGFpbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExpY2VuY2VDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNwYWluRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3BhaW5EbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0FnZW5jeTogc3RyaW5nO1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByZWZlcmVuY2VOdW1iZXI6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJlZmVyZW5jZU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBleHBpcnlEYXRlUGVybWFuZW50OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgdmVoaWNsZUNhdGVnb3JpZXM6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZlaGljbGVDYXRlZ29yaWVzOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgbm9uTXJ6RGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIG5vbk1yelNleDogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZk9yaWdpbjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mT3JpZ2luOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBub25NcnpEYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBub25NcnpEYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwYXNzcG9ydE51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SGVpZ2h0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBleHBpcnlEYXRlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVEYXRlOiBEYXRlO1xyXG4gIGxpY2Vuc2VOdW1iZXI6IHN0cmluZztcclxuICBsaWNlbnNpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwbGFjZU9mSXNzdWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPVxyXG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5zZU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5zaW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZklzc3VlOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbn1cclxuZXhwb3J0IHR5cGUgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPVxyXG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPVxyXG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVmluUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIHZpbjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFZpblJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8VmluUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgdHlwZSBWaW5SZWNvZ25pemVyID0gUmVjb2duaXplcjxWaW5SZWNvZ25pemVyUmVzdWx0PjtcclxuZXhwb3J0IHR5cGUgVmluUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxWaW5SZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBvcHRpb25hbEVsZW1lbnRzOiBhbnlbXTtcclxuICByYXdEYXRhOiBzdHJpbmc7XHJcbiAgcmF3U3RyaW5nRGF0YTogc3RyaW5nO1xyXG4gIHVuY2VydGFpbjogc3RyaW5nO1xyXG4gIGZpZWxkczogYW55W107XHJcbn1cclxuZXhwb3J0IHR5cGUgVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VXNkbFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcclxuICB1bmNlcnRhaW5EZWNvZGluZzogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBVc2RsUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxVc2RsUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBvcHRpb25hbEVsZW1lbnRzOiBhbnlbXTtcclxuICByYXdEYXRhOiBzdHJpbmc7XHJcbiAgcmF3U3RyaW5nRGF0YTogc3RyaW5nO1xyXG4gIHVuY2VydGFpbjogYm9vbGVhbjtcclxuICBmaWVsZHM6IGFueVtdO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVzZGxDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVzZGxDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VXNkbENvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgdHlwZSBCbGlua0lkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxCbGlua0lkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rSWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCbGlua0lkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBhbm9ueW1pemF0aW9uTW9kZTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIGxvY2FsaXplZE5hbWU6IHN0cmluZztcclxuICBhZGRpdGlvbmFsTmFtZUluZm9ybWF0aW9uOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBzZXg6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZE92ZXJsYXlTZXR0aW5nc0N0b3Ige1xyXG4gIG5ldyAoKTogQmxpbmtJZE92ZXJsYXlTZXR0aW5ncztcclxufVxyXG5leHBvcnQgdHlwZSBCbGlua0lkT3ZlcmxheVNldHRpbmdzID0gT3ZlcmxheVNldHRpbmdzO1xyXG5cclxuZXhwb3J0IHR5cGUgQmxpbmtJZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtJZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG4vKipcclxuICogQG5hbWUgQmxpbmtJZFxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTWljcm9ibGluayBTREsgd3JhcHBlciBmb3IgYmFyY29kZSBhbmQgZG9jdW1lbnQgc2Nhbm5pbmcuIFNlZSB0aGVcclxuICogYmxpbmtpZC1waG9uZWdhcCByZXBvc2l0b3J5IGZvciBhdmFpbGFibGUgcmVjb2duaXplcnMgYW5kIG90aGVyIHNldHRpbmdzXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJsaW5rSWQsIFJlY29nbml6ZXJSZXN1bHRTdGF0ZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9ibGlua2lkL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgYmxpbmtJZDogQmxpbmtJZCkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCBvdmVybGF5U2V0dGluZ3MgPSBuZXcgdGhpcy5ibGlua0lkLkRvY3VtZW50T3ZlcmxheVNldHRpbmdzKCk7XHJcbiAqXHJcbiAqIGNvbnN0IHVzZGxSZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5Vc2RsUmVjb2duaXplcigpO1xyXG4gKiBjb25zdCB1c2RsU3VjY2Vzc0ZyYW1lR3JhYmJlciA9IG5ldyB0aGlzLmJsaW5rSWQuU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXIodXNkbFJlY29nbml6ZXIpO1xyXG4gKlxyXG4gKiBjb25zdCBiYXJjb2RlUmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuQmFyY29kZVJlY29nbml6ZXIoKTtcclxuICogYmFyY29kZVJlY29nbml6ZXIuc2NhblBkZjQxNyA9IHRydWU7XHJcbiAqXHJcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbXHJcbiAqICAgdXNkbFN1Y2Nlc3NGcmFtZUdyYWJiZXIsXHJcbiAqICAgYmFyY29kZVJlY29nbml6ZXIsXHJcbiAqIF0pO1xyXG4gKlxyXG4gKiBjb25zdCBjYW5jZWxlZCA9IGF3YWl0IHRoaXMuYmxpbmtJZC5zY2FuV2l0aENhbWVyYShcclxuICogICBvdmVybGF5U2V0dGluZ3MsXHJcbiAqICAgcmVjb2duaXplckNvbGxlY3Rpb24sXHJcbiAqICAgeyBpb3M6IElPU19MSUNFTlNFX0tFWSwgYW5kcm9pZDogQU5EUk9JRF9MSUNFTlNFX0tFWSB9LFxyXG4gKiApO1xyXG4gKlxyXG4gKiBpZiAoIWNhbmNlbGVkKSB7XHJcbiAqICAgaWYgKHVzZGxSZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XHJcbiAqICAgICBjb25zdCBzdWNjZXNzRnJhbWUgPSB1c2RsU3VjY2Vzc0ZyYW1lR3JhYmJlci5yZXN1bHQuc3VjY2Vzc0ZyYW1lO1xyXG4gKiAgICAgaWYgKHN1Y2Nlc3NGcmFtZSkge1xyXG4gKiAgICAgICB0aGlzLmJhc2U2NEltZyA9IGBkYXRhOmltYWdlL2pwZztiYXNlNjQsICR7c3VjY2Vzc0ZyYW1lfWA7XHJcbiAqICAgICAgIHRoaXMuZmllbGRzID0gdXNkbFJlY29nbml6ZXIucmVzdWx0LmZpZWxkcztcclxuICogICAgIH1cclxuICogICB9IGVsc2Uge1xyXG4gKiAgICAgdGhpcy5iYXJjb2RlU3RyaW5nRGF0YSA9IGJhcmNvZGVSZWNvZ25pemVyLnJlc3VsdC5zdHJpbmdEYXRhO1xyXG4gKiAgIH1cclxuICogfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogY29uc3Qgb3ZlcmxheVNldHRpbmdzID0gbmV3IHRoaXMuYmxpbmtJZC5CbGlua0NhcmRPdmVybGF5U2V0dGluZ3MoKTtcclxuICogY29uc3QgcmVjb2duaXplciA9IG5ldyB0aGlzLmJsaW5rSWQuQmxpbmtDYXJkUmVjb2duaXplcigpO1xyXG4gKiByZWNvZ25pemVyLnJldHVybkZ1bGxEb2N1bWVudEltYWdlID0gZmFsc2U7XHJcbiAqIHJlY29nbml6ZXIuZGV0ZWN0R2xhcmUgPSB0cnVlO1xyXG4gKiByZWNvZ25pemVyLmV4dHJhY3RDdnYgPSB0cnVlO1xyXG4gKiByZWNvZ25pemVyLmV4dHJhY3RWYWxpZFRocnUgPSB0cnVlO1xyXG4gKiByZWNvZ25pemVyLmV4dHJhY3RPd25lciA9IHRydWU7XHJcbiAqXHJcbiAqIGNvbnN0IHJlY29nbml6ZXJDb2xsZWN0aW9uID0gbmV3IHRoaXMuYmxpbmtJZC5SZWNvZ25pemVyQ29sbGVjdGlvbihbcmVjb2duaXplcl0pO1xyXG4gKiBjb25zdCBjYW5jZWxlZCA9IGF3YWl0IHRoaXMuYmxpbmtJZC5zY2FuV2l0aENhbWVyYShcclxuICogICBvdmVybGF5U2V0dGluZ3MsXHJcbiAqICAgcmVjb2duaXplckNvbGxlY3Rpb24sXHJcbiAqICAge1xyXG4gKiAgICAgaW9zOiAnJywgLy9pT1MgTGljZW5zZSBLZXlcclxuICogICAgIGFuZHJvaWQ6ICcnIC8vQW5kcm9pZCBMaWNlbnNlIEtleVxyXG4gKiAgIH0sXHJcbiAqICk7XHJcbiAqXHJcbiAqIGlmICghY2FuY2VsZWQpIHtcclxuICogICBpZiAocmVjb2duaXplci5yZXN1bHQucmVzdWx0U3RhdGUgPT09IFJlY29nbml6ZXJSZXN1bHRTdGF0ZS52YWxpZCkge1xyXG4gKiAgICAgY29uc3QgcmVzdWx0cyA9IHJlY29nbml6ZXIucmVzdWx0O1xyXG4gKlxyXG4gKiAgICAgaWYgKHJlc3VsdHMucmVzdWx0U3RhdGUgPT09IFJlY29nbml6ZXJSZXN1bHRTdGF0ZS52YWxpZCkge1xyXG4gKiAgICAgICBjb25zdCBjY0luZm8gPSB7XHJcbiAqICAgICAgICAgY2FyZE51bWJlcjogTnVtYmVyKHJlc3VsdHMuY2FyZE51bWJlciksXHJcbiAqICAgICAgICAgZXhwaXJhdGlvbk1vbnRoOiBOdW1iZXIocmVzdWx0cy52YWxpZFRocnUubW9udGgpLFxyXG4gKiAgICAgICAgIGV4cGlyYXRpb25ZZWFyOiBOdW1iZXIocmVzdWx0cy52YWxpZFRocnUueWVhciksXHJcbiAqICAgICAgICAgY3Z2OiBOdW1iZXIocmVzdWx0cy5jdnYpXHJcbiAqICAgICAgIH07XHJcbiAqICAgICB9XHJcbiAqICAgfVxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCbGlua0lkJyxcclxuICBwbHVnaW46ICdibGlua2lkLWNvcmRvdmEnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5CbGlua0lEJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL0JsaW5rSUQvYmxpbmtpZC1waG9uZWdhcCcsXHJcbiAgaW5zdGFsbDpcclxuICAgICdpb25pYyBjb3Jkb3ZhIHBsdWdpbiBhZGQgYmxpbmtpZC1jb3Jkb3ZhIC0tdmFyaWFibGUgQ0FNRVJBX1VTQUdFX0RFU0NSSVBUSU9OPVwiRW5hYmxlIHlvdXIgY2FtZXJhIHNvIHRoYXQgeW91IGNhbiBzY2FuIHlvdXIgSUQgdG8gdmFsaWRhdGUgeW91ciBhY2NvdW50XCInLFxyXG4gIHBsYXRmb3JtczogWydpT1MnLCAnQW5kcm9pZCddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBCbGlua0lkIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIE9wZW5zIHRoZSBjYW1lcmEgZGlhbG9nIGFuZCBhdHRlbXB0cyB0byBzY2FuIGEgYmFyY29kZS9kb2N1bWVudFxyXG4gICAqXHJcbiAgICogQHBhcmFtIG92ZXJsYXlTZXR0aW5ncyB7T3ZlcmxheVNldHRpbmdzfSBmb3IgY2FtZXJhIG92ZXJsYXkgY3VzdG9taXphdGlvblxyXG4gICAqIEBwYXJhbSByZWNvZ25pemVyQ29sbGVjdGlvbiB7UmVjb2duaXplckNvbGxlY3Rpb259IGNvbGxlY3Rpb24gb2YgcmVjb2duaXplcnMgdG8gc2NhbiB3aXRoXHJcbiAgICogQHBhcmFtIGxpY2Vuc2VzXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgc2NhbldpdGhDYW1lcmEoXHJcbiAgICBvdmVybGF5U2V0dGluZ3M6IE92ZXJsYXlTZXR0aW5ncyxcclxuICAgIHJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyQ29sbGVjdGlvbixcclxuICAgIGxpY2Vuc2VzOiBMaWNlbnNlc1xyXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERhdGU6IERhdGVDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2ludDogUG9pbnRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBRdWFkcmlsYXRlcmFsOiBRdWFkcmlsYXRlcmFsQ3RvcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJhcmNvZGVPdmVybGF5U2V0dGluZ3M6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudE92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRPdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nczogRG9jdW1lbnRWZXJpZmljYXRpb25PdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3M6IEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSZWNvZ25pemVyQ29sbGVjdGlvbjogUmVjb2duaXplckNvbGxlY3Rpb25DdG9yO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXJSZXN1bHQ6IEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZVJlY29nbml6ZXI6IEJhcmNvZGVSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXI6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyQ3RvcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyOiBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXI6IEF1c3RyYWxpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI6IEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFEbEZyb250UmVjb2duaXplcjogQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkQmFja1JlY29nbml6ZXI6IEF1c3RyaWFJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXI6IEF1c3RyaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyOiBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyOiBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rQ2FyZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRSZWNvZ25pemVyOiBCbGlua0NhcmRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQ29sb21iaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyOiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEZyb250UmVjb2duaXplcjogQ29sb21iaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEJhY2tSZWNvZ25pemVyOiBDeXBydXNJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXI6IEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ6IERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRWd5cHRJZEZyb250UmVjb2duaXplcjogRWd5cHRJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEV1ZGxSZWNvZ25pemVyUmVzdWx0OiBFdWRsUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyOiBHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueURsQmFja1JlY29nbml6ZXI6IEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkQmFja1JlY29nbml6ZXI6IEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXI6IEdlcm1hbnlJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55T2xkSWRSZWNvZ25pemVyOiBHZXJtYW55T2xkSWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI6IEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSG9uZ0tvbmdJZEZyb250UmVjb2duaXplcjogSG9uZ0tvbmdJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyUmVzdWx0OiBJa2FkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElrYWRSZWNvZ25pemVyOiBJa2FkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyOiBJbmRvbmVzaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyOiBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJdGFseURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSXRhbHlEbEZyb250UmVjb2duaXplcjogSXRhbHlEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyOiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRCYWNrUmVjb2duaXplcjogSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyOiBKb3JkYW5JZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyOiBLdXdhaXRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRGcm9udFJlY29nbml6ZXI6IEt1d2FpdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI6IE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ6IE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplcjogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdDogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXI6IE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRCYWNrUmVjb2duaXplcjogTW9yb2Njb0lkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplcjogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRDb21iaW5lZFJlY29nbml6ZXI6IE1ydGRDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplclJlc3VsdDogTXJ0ZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkUmVjb2duaXplcjogTXJ0ZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRCYWNrUmVjb2duaXplcjogTXlLYWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNeUthZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkRnJvbnRSZWNvZ25pemVyOiBNeUthZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyOiBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQZGY0MTdSZWNvZ25pemVyUmVzdWx0OiBQZGY0MTdSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUGRmNDE3UmVjb2duaXplcjogUGRmNDE3UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyOiBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRCYWNrUmVjb2duaXplcjogUG9sYW5kSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyOiBQb2xhbmRJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyOiBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplcjogU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkQmFja1JlY29nbml6ZXI6IFNlcmJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdDogU2VyYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEZyb250UmVjb2duaXplcjogU2VyYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0OiBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2ltTnVtYmVyUmVjb2duaXplcjogU2ltTnVtYmVyUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyOiBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdDogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplcjogU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplcjogU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyOiBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyOiBTbG92YWtpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyOiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEZyb250UmVjb2duaXplcjogU2xvdmFraWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyOiBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyOiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEZyb250UmVjb2duaXplcjogU2xvdmVuaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTcGFpbkRsRnJvbnRSZWNvZ25pemVyOiBTcGFpbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dlZGVuRGxGcm9udFJlY29nbml6ZXI6IFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ6IFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplcjogU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI6IFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplcjogU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdDogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcjogVW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXJSZXN1bHQ6IFZpblJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBWaW5SZWNvZ25pemVyOiBWaW5SZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXJSZXN1bHQ6IFVzZGxSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbFJlY29nbml6ZXI6IFVzZGxSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdDogVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVzZGxDb21iaW5lZFJlY29nbml6ZXI6IFVzZGxDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0lkUmVjb2duaXplcjogQmxpbmtJZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0lkT3ZlcmxheVNldHRpbmdzOiBCbGlua0lkT3ZlcmxheVNldHRpbmdzQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtJZFJlY29nbml6ZXJSZXN1bHQ6IEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxufVxyXG4iXX0=