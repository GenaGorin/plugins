import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordovaPropertyGet, cordovaPropertySet, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
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
var BlinkId = /** @class */ (function (_super) {
    __extends(BlinkId, _super);
    function BlinkId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkId.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkId.prototype, "Date", {
        get: function () { return cordovaPropertyGet(this, "Date"); },
        set: function (value) { cordovaPropertySet(this, "Date", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Point", {
        get: function () { return cordovaPropertyGet(this, "Point"); },
        set: function (value) { cordovaPropertySet(this, "Point", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Quadrilateral", {
        get: function () { return cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RecognizerCollection", {
        get: function () { return cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EudlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417RecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417Recognizer", {
        get: function () { return cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizer", {
        get: function () { return cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizer", {
        get: function () { return cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizer", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizer"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdOverlaySettings", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdOverlaySettings"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizerResult", {
        get: function () { return cordovaPropertyGet(this, "BlinkIdRecognizerResult"); },
        set: function (value) { cordovaPropertySet(this, "BlinkIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    BlinkId.pluginName = "BlinkId";
    BlinkId.plugin = "blinkid-cordova";
    BlinkId.pluginRef = "cordova.plugins.BlinkID";
    BlinkId.repo = "https://github.com/BlinkID/blinkid-phonegap";
    BlinkId.install = "ionic cordova plugin add blinkid-cordova --variable CAMERA_USAGE_DESCRIPTION=\"Enable your camera so that you can scan your ID to validate your account\"";
    BlinkId.platforms = ["iOS", "Android"];
    BlinkId.decorators = [
        { type: Injectable }
    ];
    return BlinkId;
}(AwesomeCordovaNativePlugin));
export { BlinkId };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmxpbmtpZC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sK0VBQWdFLE1BQU0sK0JBQStCLENBQUM7QUFDN0csT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU8zQyxNQUFNLENBQU4sSUFBWSxXQWFYO0FBYkQsV0FBWSxXQUFXO0lBQ3JCLDZDQUFRLENBQUE7SUFDUixpREFBVSxDQUFBO0lBQ1YseURBQWMsQ0FBQTtJQUNkLDZDQUFRLENBQUE7SUFDUiw2Q0FBUSxDQUFBO0lBQ1IsNkNBQVEsQ0FBQTtJQUNSLCtDQUFTLENBQUE7SUFDVCxtREFBVyxDQUFBO0lBQ1gsaURBQVUsQ0FBQTtJQUNWLDRDQUFRLENBQUE7SUFDUixnREFBVSxDQUFBO0lBQ1Ysa0RBQVcsQ0FBQTtBQUNiLENBQUMsRUFiVyxXQUFXLEtBQVgsV0FBVyxRQWF0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHFCQUlYO0FBSkQsV0FBWSxxQkFBcUI7SUFDL0IsbUVBQVMsQ0FBQTtJQUNULDJFQUFhLENBQUE7SUFDYixtRUFBUyxDQUFBO0FBQ1gsQ0FBQyxFQUpXLHFCQUFxQixLQUFyQixxQkFBcUIsUUFJaEM7QUFFRCxNQUFNLENBQU4sSUFBWSxnQkFPWDtBQVBELFdBQVksZ0JBQWdCO0lBQzFCLDZEQUFXLENBQUE7SUFDWCx1RUFBZ0IsQ0FBQTtJQUNoQiwrREFBWSxDQUFBO0lBQ1osdURBQVEsQ0FBQTtJQUNSLGlFQUFhLENBQUE7SUFDYixxRkFBdUIsQ0FBQTtBQUN6QixDQUFDLEVBUFcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQU8zQjtBQUVELE1BQU0sQ0FBTixJQUFZLFdBS1g7QUFMRCxXQUFZLFdBQVc7SUFDckIseUNBQU0sQ0FBQTtJQUNOLG1EQUFXLENBQUE7SUFDWCxtREFBVyxDQUFBO0lBQ1gsdURBQWEsQ0FBQTtBQUNmLENBQUMsRUFMVyxXQUFXLEtBQVgsV0FBVyxRQUt0QjtBQUVELE1BQU0sQ0FBTixJQUFZLHdCQUlYO0FBSkQsV0FBWSx3QkFBd0I7SUFDbEMscUVBQU8sQ0FBQTtJQUNQLHFFQUFPLENBQUE7SUFDUCxpR0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBSlcsd0JBQXdCLEtBQXhCLHdCQUF3QixRQUluQztBQUVELE1BQU0sQ0FBTixJQUFZLFFBdUZYO0FBdkZELFdBQVksUUFBUTtJQUNsQix1REFBZ0IsQ0FBQTtJQUNoQix5RUFBeUIsQ0FBQTtJQUN6QixtRUFBc0IsQ0FBQTtJQUN0QixpRUFBcUIsQ0FBQTtJQUNyQiwrREFBb0IsQ0FBQTtJQUNwQixxREFBZSxDQUFBO0lBQ2YscUNBQU8sQ0FBQTtJQUNQLCtDQUFZLENBQUE7SUFDWix5REFBaUIsQ0FBQTtJQUNqQixxREFBZSxDQUFBO0lBQ2YsOEVBQTRCLENBQUE7SUFDNUIsa0VBQXNCLENBQUE7SUFDdEIsc0RBQWdCLENBQUE7SUFDaEIsNENBQVcsQ0FBQTtJQUNYLGdEQUFhLENBQUE7SUFDYixnREFBYSxDQUFBO0lBQ2Isb0VBQXVCLENBQUE7SUFDdkIsa0RBQWMsQ0FBQTtJQUNkLG9EQUFlLENBQUE7SUFDZixzREFBZ0IsQ0FBQTtJQUNoQiwwREFBa0IsQ0FBQTtJQUNsQix3REFBaUIsQ0FBQTtJQUNqQiwwREFBa0IsQ0FBQTtJQUNsQixzREFBZ0IsQ0FBQTtJQUNoQix3REFBaUIsQ0FBQTtJQUNqQiw4REFBb0IsQ0FBQTtJQUNwQixnRUFBcUIsQ0FBQTtJQUNyQix3RUFBeUIsQ0FBQTtJQUN6QixzRUFBd0IsQ0FBQTtJQUN4Qix3RUFBeUIsQ0FBQTtJQUN6Qix3REFBaUIsQ0FBQTtJQUNqQiw0REFBbUIsQ0FBQTtJQUNuQiwwREFBa0IsQ0FBQTtJQUNsQixvREFBZSxDQUFBO0lBQ2YsMEVBQTBCLENBQUE7SUFDMUIsNEVBQTJCLENBQUE7SUFDM0IsOEVBQTRCLENBQUE7SUFDNUIsMERBQWtCLENBQUE7SUFDbEIsa0ZBQThCLENBQUE7SUFDOUIsc0VBQXdCLENBQUE7SUFDeEIsd0VBQXlCLENBQUE7SUFDekIsOENBQVksQ0FBQTtJQUNaLDhDQUFZLENBQUE7SUFDWiw4Q0FBWSxDQUFBO0lBQ1osd0VBQXlCLENBQUE7SUFDekIsOEVBQTRCLENBQUE7SUFDNUIsMERBQWtCLENBQUE7SUFDbEIsMERBQWtCLENBQUE7SUFDbEIsb0RBQWUsQ0FBQTtJQUNmLDhDQUFZLENBQUE7SUFDWiw0REFBbUIsQ0FBQTtJQUNuQixvRkFBK0IsQ0FBQTtJQUMvQiw0RUFBMkIsQ0FBQTtJQUMzQixrRkFBOEIsQ0FBQTtJQUM5QixnRkFBNkIsQ0FBQTtJQUM3Qix3RkFBaUMsQ0FBQTtJQUNqQyx3RkFBaUMsQ0FBQTtJQUNqQyxrRUFBc0IsQ0FBQTtJQUN0QiwwRkFBa0MsQ0FBQTtJQUNsQyxzRUFBd0IsQ0FBQTtJQUN4QiwwRkFBa0MsQ0FBQTtJQUNsQyw4RUFBNEIsQ0FBQTtJQUM1Qiw4RUFBNEIsQ0FBQTtJQUM1Qiw4RUFBNEIsQ0FBQTtJQUM1Qix3SEFBaUQsQ0FBQTtJQUNqRCwwR0FBMEMsQ0FBQTtJQUMxQyw0R0FBMkMsQ0FBQTtJQUMzQyw0RUFBMkIsQ0FBQTtJQUMzQixnRUFBcUIsQ0FBQTtJQUNyQiwwRUFBMEIsQ0FBQTtJQUMxQiw4RUFBNEIsQ0FBQTtJQUM1QixnRUFBcUIsQ0FBQTtJQUNyQiw0REFBbUIsQ0FBQTtJQUNuQiw0REFBbUIsQ0FBQTtJQUNuQix3RUFBeUIsQ0FBQTtJQUN6QixnRUFBcUIsQ0FBQTtJQUNyQiw4REFBb0IsQ0FBQTtJQUNwQixvRUFBdUIsQ0FBQTtJQUN2Qix3RUFBeUIsQ0FBQTtJQUN6QixnRUFBcUIsQ0FBQTtJQUNyQixzREFBZ0IsQ0FBQTtJQUNoQixnRUFBcUIsQ0FBQTtJQUNyQixrRUFBc0IsQ0FBQTtJQUN0Qiw4RUFBNEIsQ0FBQTtJQUM1QixzRUFBd0IsQ0FBQTtJQUN4Qiw4REFBb0IsQ0FBQTtBQUN0QixDQUFDLEVBdkZXLFFBQVEsS0FBUixRQUFRLFFBdUZuQjs7SUEyakY0QiwyQkFBMEI7Ozs7SUFZckQsZ0NBQWMsYUFDWixlQUFnQyxFQUNoQyxvQkFBMEMsRUFDMUMsUUFBa0I7MEJBS0QseUJBQUk7Ozs7OzswQkFDSiwwQkFBSzs7Ozs7OzBCQUNMLGtDQUFhOzs7Ozs7MEJBRWIsMkNBQXNCOzs7Ozs7MEJBQ3RCLDRDQUF1Qjs7Ozs7OzBCQUN2Qix3REFBbUM7Ozs7OzswQkFDbkMsNkNBQXdCOzs7Ozs7MEJBRXhCLHlDQUFvQjs7Ozs7OzBCQUVwQiw0Q0FBdUI7Ozs7OzswQkFDdkIsc0NBQWlCOzs7Ozs7MEJBQ2pCLHdEQUFtQzs7Ozs7OzBCQUNuQyxrREFBNkI7Ozs7OzswQkFFN0Isb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsbURBQThCOzs7Ozs7MEJBQzlCLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsb0RBQStCOzs7Ozs7MEJBQy9CLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixvREFBK0I7Ozs7OzswQkFDL0Isa0RBQTZCOzs7Ozs7MEJBQzdCLG1EQUE4Qjs7Ozs7OzBCQUM5QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsb0RBQStCOzs7Ozs7MEJBQy9CLGtEQUE2Qjs7Ozs7OzBCQUM3QixpREFBNEI7Ozs7OzswQkFDNUIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0Qix5Q0FBb0I7Ozs7OzswQkFDcEIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLG9EQUErQjs7Ozs7OzBCQUMvQiw4Q0FBeUI7Ozs7OzswQkFDekIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6Qix5Q0FBb0I7Ozs7OzswQkFDcEIsbUNBQWM7Ozs7OzswQkFDZCxxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixpREFBNEI7Ozs7OzswQkFDNUIsMkNBQXNCOzs7Ozs7MEJBQ3RCLGtEQUE2Qjs7Ozs7OzBCQUM3Qiw0Q0FBdUI7Ozs7OzswQkFDdkIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHVEQUFrQzs7Ozs7OzBCQUNsQyxpREFBNEI7Ozs7OzswQkFDNUIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIseUNBQW9COzs7Ozs7MEJBQ3BCLG1DQUFjOzs7Ozs7MEJBQ2QsOENBQXlCOzs7Ozs7MEJBQ3pCLHdDQUFtQjs7Ozs7OzBCQUNuQiwrQ0FBMEI7Ozs7OzswQkFDMUIseUNBQW9COzs7Ozs7MEJBQ3BCLHNEQUFpQzs7Ozs7OzBCQUNqQyxnREFBMkI7Ozs7OzswQkFDM0IsMkNBQXNCOzs7Ozs7MEJBQ3RCLHFDQUFnQjs7Ozs7OzBCQUNoQixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2QixtREFBOEI7Ozs7OzswQkFDOUIsNkNBQXdCOzs7Ozs7MEJBQ3hCLG1EQUE4Qjs7Ozs7OzBCQUM5Qiw2Q0FBd0I7Ozs7OzswQkFDeEIsaURBQTRCOzs7Ozs7MEJBQzVCLDJDQUFzQjs7Ozs7OzBCQUN0QixrREFBNkI7Ozs7OzswQkFDN0IsNENBQXVCOzs7Ozs7MEJBQ3ZCLDhDQUF5Qjs7Ozs7OzBCQUN6Qix3Q0FBbUI7Ozs7OzswQkFDbkIsOERBQXlDOzs7Ozs7MEJBQ3pDLHdEQUFtQzs7Ozs7OzBCQUNuQyxzREFBaUM7Ozs7OzswQkFDakMsZ0RBQTJCOzs7Ozs7MEJBQzNCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsb0RBQStCOzs7Ozs7MEJBQy9CLDhDQUF5Qjs7Ozs7OzBCQUN6QixxREFBZ0M7Ozs7OzswQkFDaEMsK0NBQTBCOzs7Ozs7MEJBQzFCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLHFEQUFnQzs7Ozs7OzBCQUNoQywrQ0FBMEI7Ozs7OzswQkFDMUIsbURBQThCOzs7Ozs7MEJBQzlCLDZDQUF3Qjs7Ozs7OzBCQUN4QixvREFBK0I7Ozs7OzswQkFDL0IsOENBQXlCOzs7Ozs7MEJBQ3pCLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsa0RBQTZCOzs7Ozs7MEJBQzdCLDRDQUF1Qjs7Ozs7OzBCQUN2Qix1REFBa0M7Ozs7OzswQkFDbEMsaURBQTRCOzs7Ozs7MEJBQzVCLHNEQUFpQzs7Ozs7OzBCQUNqQyxnREFBMkI7Ozs7OzswQkFDM0IsdURBQWtDOzs7Ozs7MEJBQ2xDLGlEQUE0Qjs7Ozs7OzBCQUM1Qix3REFBbUM7Ozs7OzswQkFDbkMsa0RBQTZCOzs7Ozs7MEJBQzdCLDhEQUF5Qzs7Ozs7OzBCQUN6Qyx3REFBbUM7Ozs7OzswQkFDbkMsNkRBQXdDOzs7Ozs7MEJBQ3hDLHVEQUFrQzs7Ozs7OzBCQUNsQyw4REFBeUM7Ozs7OzswQkFDekMsd0RBQW1DOzs7Ozs7MEJBQ25DLHdDQUFtQjs7Ozs7OzBCQUNuQixrQ0FBYTs7Ozs7OzBCQUNiLHlDQUFvQjs7Ozs7OzBCQUNwQixtQ0FBYzs7Ozs7OzBCQUNkLGlEQUE0Qjs7Ozs7OzBCQUM1QiwyQ0FBc0I7Ozs7OzswQkFDdEIsc0NBQWlCOzs7Ozs7MEJBQ2pCLDJDQUFzQjs7Ozs7OzBCQUN0Qiw0Q0FBdUI7Ozs7Ozs7Ozs7Ozs7Z0JBL0wzQyxVQUFVOztrQkFwc0ZYO0VBcXNGNkIsMEJBQTBCO1NBQTFDLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTGljZW5zZXMge1xyXG4gIGlvczogc3RyaW5nO1xyXG4gIGFuZHJvaWQ6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGVudW0gQmFyY29kZVR5cGUge1xyXG4gIE5vbmUgPSAxLFxyXG4gIFFSQ29kZSA9IDIsXHJcbiAgRGF0YU1hdHJpeCA9IDMsXHJcbiAgVVBDRSA9IDQsXHJcbiAgVVBDQSA9IDUsXHJcbiAgRUFOOCA9IDYsXHJcbiAgRUFOMTMgPSA3LFxyXG4gIENvZGUxMjggPSA4LFxyXG4gIENvZGUzOSA9IDksXHJcbiAgSVRGID0gMTAsXHJcbiAgQXp0ZWMgPSAxMSxcclxuICBQREY0MTcgPSAxMixcclxufVxyXG5cclxuZXhwb3J0IGVudW0gUmVjb2duaXplclJlc3VsdFN0YXRlIHtcclxuICBlbXB0eSA9IDEsXHJcbiAgdW5jZXJ0YWluID0gMixcclxuICB2YWxpZCA9IDMsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIE1ydGREb2N1bWVudFR5cGUge1xyXG4gIFVua25vd24gPSAxLFxyXG4gIElkZW50aXR5Q2FyZCA9IDIsXHJcbiAgUGFzc3BvcnQgPSAzLFxyXG4gIFZpc2EgPSA0LFxyXG4gIEdyZWVuQ2FyZCA9IDUsXHJcbiAgTWFsYXlzaWFuUGFzc0lNTTEzUCA9IDYsXHJcbn1cclxuXHJcbmV4cG9ydCBlbnVtIEV1ZGxDb3VudHJ5IHtcclxuICBVSyA9IDEsXHJcbiAgR2VybWFueSA9IDIsXHJcbiAgQXVzdHJpYSA9IDMsXHJcbiAgQXV0b21hdGljID0gNCxcclxufVxyXG5cclxuZXhwb3J0IGVudW0gRG9jdW1lbnRGYWNlRGV0ZWN0b3JUeXBlIHtcclxuICBURDEgPSAxLFxyXG4gIFREMiA9IDIsXHJcbiAgUGFzc3BvcnRzQW5kVmlzYXMgPSAzLFxyXG59XHJcblxyXG5leHBvcnQgZW51bSBVc2RsS2V5cyB7XHJcbiAgRG9jdW1lbnRUeXBlID0gMCxcclxuICBTdGFuZGFyZFZlcnNpb25OdW1iZXIgPSAxLFxyXG4gIEN1c3RvbWVyRmFtaWx5TmFtZSA9IDIsXHJcbiAgQ3VzdG9tZXJGaXJzdE5hbWUgPSAzLFxyXG4gIEN1c3RvbWVyRnVsbE5hbWUgPSA0LFxyXG4gIERhdGVPZkJpcnRoID0gNSxcclxuICBTZXggPSA2LFxyXG4gIEV5ZUNvbG9yID0gNyxcclxuICBBZGRyZXNzU3RyZWV0ID0gOCxcclxuICBBZGRyZXNzQ2l0eSA9IDksXHJcbiAgQWRkcmVzc0p1cmlzZGljdGlvbkNvZGUgPSAxMCxcclxuICBBZGRyZXNzUG9zdGFsQ29kZSA9IDExLFxyXG4gIEZ1bGxBZGRyZXNzID0gMTIsXHJcbiAgSGVpZ2h0ID0gMTMsXHJcbiAgSGVpZ2h0SW4gPSAxNCxcclxuICBIZWlnaHRDbSA9IDE1LFxyXG4gIEN1c3RvbWVyTWlkZGxlTmFtZSA9IDE2LFxyXG4gIEhhaXJDb2xvciA9IDE3LFxyXG4gIE5hbWVTdWZmaXggPSAxOCxcclxuICBBS0FGdWxsTmFtZSA9IDE5LFxyXG4gIEFLQUZhbWlseU5hbWUgPSAyMCxcclxuICBBS0FHaXZlbk5hbWUgPSAyMSxcclxuICBBS0FTdWZmaXhOYW1lID0gMjIsXHJcbiAgV2VpZ2h0UmFuZ2UgPSAyMyxcclxuICBXZWlnaHRQb3VuZHMgPSAyNCxcclxuICBXZWlnaHRLaWxvZ3JhbXMgPSAyNSxcclxuICBDdXN0b21lcklkTnVtYmVyID0gMjYsXHJcbiAgRmFtaWx5TmFtZVRydW5jYXRpb24gPSAyNyxcclxuICBGaXJzdE5hbWVUcnVuY2F0aW9uID0gMjgsXHJcbiAgTWlkZGxlTmFtZVRydW5jYXRpb24gPSAyOSxcclxuICBQbGFjZU9mQmlydGggPSAzMCxcclxuICBBZGRyZXNzU3RyZWV0MiA9IDMxLFxyXG4gIFJhY2VFdGhuaWNpdHkgPSAzMixcclxuICBOYW1lUHJlZml4ID0gMzMsXHJcbiAgQ291bnRyeUlkZW50aWZpY2F0aW9uID0gMzQsXHJcbiAgUmVzaWRlbmNlU3RyZWV0QWRkcmVzcyA9IDM1LFxyXG4gIFJlc2lkZW5jZVN0cmVldEFkZHJlc3MyID0gMzYsXHJcbiAgUmVzaWRlbmNlQ2l0eSA9IDM3LFxyXG4gIFJlc2lkZW5jZUp1cmlzZGljdGlvbkNvZGUgPSAzOCxcclxuICBSZXNpZGVuY2VQb3N0YWxDb2RlID0gMzksXHJcbiAgUmVzaWRlbmNlRnVsbEFkZHJlc3MgPSA0MCxcclxuICBVbmRlcjE4ID0gNDEsXHJcbiAgVW5kZXIxOSA9IDQyLFxyXG4gIFVuZGVyMjEgPSA0MyxcclxuICBTb2NpYWxTZWN1cml0eU51bWJlciA9IDQ0LFxyXG4gIEFLQVNvY2lhbFNlY3VyaXR5TnVtYmVyID0gNDUsXHJcbiAgQUtBTWlkZGxlTmFtZSA9IDQ2LFxyXG4gIEFLQVByZWZpeE5hbWUgPSA0NyxcclxuICBPcmdhbkRvbm9yID0gNDgsXHJcbiAgVmV0ZXJhbiA9IDQ5LFxyXG4gIEFLQURhdGVPZkJpcnRoID0gNTAsXHJcbiAgSXNzdWVySWRlbnRpZmljYXRpb25OdW1iZXIgPSA1MSxcclxuICBEb2N1bWVudEV4cGlyYXRpb25EYXRlID0gNTIsXHJcbiAgSnVyaXNkaWN0aW9uVmVyc2lvbk51bWJlciA9IDUzLFxyXG4gIEp1cmlzZGljdGlvblZlaGljbGVDbGFzcyA9IDU0LFxyXG4gIEp1cmlzZGljdGlvblJlc3RyaWN0aW9uQ29kZXMgPSA1NSxcclxuICBKdXJpc2RpY3Rpb25FbmRvcnNlbWVudENvZGVzID0gNTYsXHJcbiAgRG9jdW1lbnRJc3N1ZURhdGUgPSA1NyxcclxuICBGZWRlcmFsQ29tbWVyY2lhbFZlaGljbGVDb2RlcyA9IDU4LFxyXG4gIElzc3VpbmdKdXJpc2RpY3Rpb24gPSA1OSxcclxuICBTdGFuZGFyZFZlaGljbGVDbGFzc2lmaWNhdGlvbiA9IDYwLFxyXG4gIElzc3VpbmdKdXJpc2RpY3Rpb25OYW1lID0gNjEsXHJcbiAgU3RhbmRhcmRFbmRvcnNlbWVudENvZGUgPSA2MixcclxuICBTdGFuZGFyZFJlc3RyaWN0aW9uQ29kZSA9IDYzLFxyXG4gIEp1cmlzZGljdGlvblZlaGljbGVDbGFzc2lmaWNhdGlvbkRlc2NyaXB0aW9uID0gNjQsXHJcbiAgSnVyaXNkaWN0aW9uRW5kb3JzbWVudENvZGVEZXNjcmlwdGlvbiA9IDY1LFxyXG4gIEp1cmlzZGljdGlvblJlc3RyaWN0aW9uQ29kZURlc2NyaXB0aW9uID0gNjYsXHJcbiAgSW52ZW50b3J5Q29udHJvbE51bWJlciA9IDY3LFxyXG4gIENhcmRSZXZpc2lvbkRhdGUgPSA2OCxcclxuICBEb2N1bWVudERpc2NyaW1pbmF0b3IgPSA2OSxcclxuICBMaW1pdGVkRHVyYXRpb25Eb2N1bWVudCA9IDcwLFxyXG4gIEF1ZGl0SW5mb3JtYXRpb24gPSA3MSxcclxuICBDb21wbGlhbmNlVHlwZSA9IDcyLFxyXG4gIElzc3VlVGltZXN0YW1wID0gNzMsXHJcbiAgUGVybWl0RXhwaXJhdGlvbkRhdGUgPSA3NCxcclxuICBQZXJtaXRJZGVudGlmaWVyID0gNzUsXHJcbiAgUGVybWl0SXNzdWVEYXRlID0gNzYsXHJcbiAgTnVtYmVyT2ZEdXBsaWNhdGVzID0gNzcsXHJcbiAgSEFaTUFURXhwaXJhdGlvbkRhdGUgPSA3OCxcclxuICBNZWRpY2FsSW5kaWNhdG9yID0gNzksXHJcbiAgTm9uUmVzaWRlbnQgPSA4MCxcclxuICBVbmlxdWVDdXN0b21lcklkID0gODEsXHJcbiAgRGF0YURpc2NyaW1pbmF0b3IgPSA4MixcclxuICBEb2N1bWVudEV4cGlyYXRpb25Nb250aCA9IDgzLFxyXG4gIERvY3VtZW50Tm9uZXhwaXJpbmcgPSA4NCxcclxuICBTZWN1cml0eVZlcnNpb24gPSA4NSxcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJbWFnZUV4dGVuc2lvbkZhY3RvcnMge1xyXG4gIHVwRmFjdG9yOiBudW1iZXI7XHJcbiAgcmlnaHRGYWN0b3I6IG51bWJlcjtcclxuICBkb3duRmFjdG9yOiBudW1iZXI7XHJcbiAgbGVmdEZhY3RvcjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERhdGUge1xyXG4gIGRheTogc3RyaW5nO1xyXG4gIG1vbnRoOiBzdHJpbmc7XHJcbiAgeWVhcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0ZUN0b3Ige1xyXG4gIG5ldyAobmF0aXZlRGF0ZTogRGF0ZSk6IERhdGU7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9pbnQge1xyXG4gIHg6IHN0cmluZztcclxuICB5OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBQb2ludEN0b3Ige1xyXG4gIG5ldyAobmF0aXZlUG9pbnQ6IFBvaW50KTogUG9pbnQ7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUXVhZHJpbGF0ZXJhbCB7XHJcbiAgdXBwZXJMZWZ0OiBzdHJpbmc7XHJcbiAgdXBwZXJSaWdodDogc3RyaW5nO1xyXG4gIGxvd2VyTGVmdDogc3RyaW5nO1xyXG4gIGxvd2VyUmlnaHQ6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFF1YWRyaWxhdGVyYWxDdG9yIHtcclxuICBuZXcgKG5hdGl2ZVF1YWQ6IFF1YWRyaWxhdGVyYWwpOiBRdWFkcmlsYXRlcmFsO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE92ZXJsYXlTZXR0aW5ncyB7XHJcbiAgb3ZlcmxheVNldHRpbmdzVHlwZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBCYXJjb2RlT3ZlcmxheVNldHRpbmdzID0gT3ZlcmxheVNldHRpbmdzO1xyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVPdmVybGF5U2V0dGluZ3NDdG9yIHtcclxuICBuZXcgKCk6IEJhcmNvZGVPdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIERvY3VtZW50T3ZlcmxheVNldHRpbmdzID0gT3ZlcmxheVNldHRpbmdzO1xyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50T3ZlcmxheVNldHRpbmdzQ3RvciB7XHJcbiAgbmV3ICgpOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5ncztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncyBleHRlbmRzIE92ZXJsYXlTZXR0aW5ncyB7XHJcbiAgZmlyc3RTaWRlU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xyXG4gIHNlY29uZFNpZGVTcGxhc2hNZXNzYWdlOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdEb25lU3BsYXNoTWVzc2FnZTogc3RyaW5nO1xyXG4gIGZpcnN0U2lkZUluc3RydWN0aW9uczogc3RyaW5nO1xyXG4gIHNlY29uZFNpZGVJbnN0cnVjdGlvbnM6IHN0cmluZztcclxuICBnbGFyZU1lc3NhZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzQ3RvciB7XHJcbiAgbmV3ICgpOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5ncztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3MgZXh0ZW5kcyBPdmVybGF5U2V0dGluZ3Mge1xyXG4gIGdsYXJlTWVzc2FnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvciB7XHJcbiAgbmV3ICgpOiBCbGlua0NhcmRPdmVybGF5U2V0dGluZ3M7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgcmVzdWx0U3RhdGU6IFJlY29nbml6ZXJSZXN1bHRTdGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxUIGV4dGVuZHMgUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIG5ldyAobmF0aXZlUmVzdWx0OiBhbnkpOiBUO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJlY29nbml6ZXI8VCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQgPSBhbnk+IHtcclxuICByZWNvZ25pemVyVHlwZTogc3RyaW5nO1xyXG4gIHJlc3VsdDogVDtcclxuICBjcmVhdGVSZXN1bHRGcm9tTmF0aXZlKG5hdGl2ZVJlc3VsdDogYW55KTogVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ3RvcjxUIGV4dGVuZHMgUmVjb2duaXplcj4ge1xyXG4gIG5ldyAoKTogVDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ29sbGVjdGlvbiB7XHJcbiAgcmVjb2duaXplckFycmF5OiBSZWNvZ25pemVyW107XHJcbiAgYWxsb3dNdWx0aXBsZVJlc3VsdHM6IGJvb2xlYW47XHJcbiAgLy8gc2ljXHJcbiAgbWlsaXNlY29uZHNCZWZvcmVUaW1lb3V0OiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBSZWNvZ25pemVyQ29sbGVjdGlvbkN0b3Ige1xyXG4gIG5ldyAocmVjb2duaXplckNvbGxlY3Rpb246IFJlY29nbml6ZXJbXSk6IFJlY29nbml6ZXJDb2xsZWN0aW9uO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYmFyY29kZVR5cGU6IEJhcmNvZGVUeXBlO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICBzdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFyY29kZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJhcmNvZGVSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYXV0b1NjYWxlRGV0ZWN0aW9uOiBib29sZWFuO1xyXG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xyXG4gIHJlYWRDb2RlMzlBc0V4dGVuZGVkRGF0YTogYm9vbGVhbjtcclxuICBzY2FuQXp0ZWNDb2RlOiBib29sZWFuO1xyXG4gIHNjYW5Db2RlMTI4OiBib29sZWFuO1xyXG4gIHNjYW5Db2RlMzk6IGJvb2xlYW47XHJcbiAgc2NhbkRhdGFNYXRyaXg6IGJvb2xlYW47XHJcbiAgc2NhbkVhbjEzOiBib29sZWFuO1xyXG4gIHNjYW5FYW44OiBib29sZWFuO1xyXG4gIHNjYW5JbnZlcnNlOiBib29sZWFuO1xyXG4gIHNjYW5JdGY6IGJvb2xlYW47XHJcbiAgc2NhblBkZjQxNzogYm9vbGVhbjtcclxuICBzY2FuUXJDb2RlOiBib29sZWFuO1xyXG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XHJcbiAgc2NhblVwY2E6IGJvb2xlYW47XHJcbiAgc2NhblVwY2U6IGJvb2xlYW47XHJcbiAgc2xvd2VyVGhvcm91Z2hTY2FuOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEJhcmNvZGVSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEJhcmNvZGVSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ6UmVzdWx0IHtcclxuICBkb2N1bWVudFR5cGU6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBnZW5kZXI6IHN0cmluZztcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBhbGllbk51bWJlcjogc3RyaW5nO1xyXG4gIGFwcGxpY2F0aW9uUmVjZWlwdE51bWJlcjogc3RyaW5nO1xyXG4gIGltbWlncmFudENhc2VOdW1iZXI6IHN0cmluZztcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgc3VjY2Vzc0ZyYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBzbGF2ZVJlY29nbml6ZXI6IFJlY29nbml6ZXI7XHJcbiAgY3JlYXRlUmVzdWx0RnJvbU5hdGl2ZShuYXRpdmVSZXN1bHQ6IHsgc2xhdmVSZWNvZ25pemVyUmVzdWx0OiBhbnkgfSk6IFN1Y2Nlc3NGcmFtZUdyYWJiZXJSZWNvZ25pemVyUmVzdWx0O1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yIHtcclxuICBuZXcgKHJlY29nbml6ZXI6IFJlY29nbml6ZXIpOiBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIGxpY2Vuc2VUeXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmFsaWFEbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWFuY2U6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBleWVDb2xvcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbXJ0ZFZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbmNpcGFsUmVzaWRlbmNlOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWFuY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFByaW5jaXBhbFJlc2lkZW5jZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFDb21iaW5lZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHZlaGljbGVDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0VmVoaWNsZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJpYURsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGV5ZUNvbG9yOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbmNpcGFsUmVzaWRlbmNlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWFuY2U6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQcmluY2lwYWxSZXNpZGVuY2U6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxBdXN0cmlhSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBnaXZlbk5hbWU6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1YW5jZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXNzcG9ydE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBBdXN0cmlhUGFzc3BvcnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZHJpdmVyUmVzdHJpY3Rpb25zOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQWdlbmN5OiBzdHJpbmc7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPENvbG9tYmlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REcml2ZXJSZXN0cmljdGlvbnM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdBZ2VuY3k6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYmlydGhEYXRlOiBEYXRlO1xyXG4gIGJsb29kR3JvdXA6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZpbmdlcnByaW50OiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyPENvbG9tYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICBudWxsUXVpZXRab25lQWxsb3dlZDogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzY2FuVW5jZXJ0YWluOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXI8Q29sb21iaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0Rmlyc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMYXN0TmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Q29sb21iaWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2l0aXplbnNoaXA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5UGVybWFuZW50OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50QmlsaW5ndWFsOiBib29sZWFuO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5vblJlc2lkZW50OiBib29sZWFuO1xyXG4gIHBlcnNvbmFsSWRlbnRpZmljYXRpb25OdW1iZXI6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPENyb2F0aWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRGb3JOb25SZXNpZGVudDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlZEJ5OiBzdHJpbmc7XHJcbiAgbXJ6UmVzdWx0OiBNcnpSZXN1bHQ7XHJcbiAgcmVzaWRlbmNlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Q3JvYXRpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RSZXNpZGVuY2U6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjaXRpemVuc2hpcDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnRCaWxpbmd1YWw6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDcm9hdGlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBleHBpcmVzT246IERhdGU7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDeXBydXNJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEV4cGlyZXNPbjogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxDeXBydXNJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERvY3VtZW50TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Q3plY2hpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN6ZWNoaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcGVybWFuZW50U3RheTogc3RyaW5nO1xyXG4gIHBlcnNvbmFsTnVtYmVyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxDemVjaGlhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBlcm1hbmVudFN0YXk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBlcnNvbmFsTnVtYmVyOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEN5cHJ1c0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWVzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Q3lwcnVzSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEb2N1bWVudEZhY2VSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZG9jdW1lbnRMb2NhdGlvbjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZhY2VMb2NhdGlvbjogUXVhZHJpbGF0ZXJhbDtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8RG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIERvY3VtZW50RmFjZVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPERvY3VtZW50RmFjZVJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RvclR5cGU6IERvY3VtZW50RmFjZURldGVjdG9yVHlwZS5URDE7XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICBudW1TdGFibGVEZXRlY3Rpb25zVGhyZXNob2xkOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxFZ3lwdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsTnVtYmVyOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEVneXB0SWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgY3Z2OiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGludmVudG9yeU51bWJlcjogc3RyaW5nO1xyXG4gIG93bmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHZhbGlkVGhydTogRGF0ZTtcclxufVxyXG5leHBvcnQgdHlwZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBhbm9ueW1pemVDYXJkTnVtYmVyOiBib29sZWFuO1xyXG4gIGFub255bWl6ZUN2djogYm9vbGVhbjtcclxuICBhbm9ueW1pemVPd25lcjogYm9vbGVhbjtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0SW52ZW50b3J5TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RPd25lcjogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRUaHJ1OiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8QmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXVkbFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYmlydGhEYXRhOiBzdHJpbmc7XHJcbiAgY291bnRyeTogc3RyaW5nO1xyXG4gIGRyaXZlck51bWJlcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZURhdGU6IERhdGU7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBFdWRsUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxFdWRsUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEV1ZGxSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxFdWRsUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGNvdW50cnk6IEV1ZGxDb3VudHJ5LkF1dG9tYXRpYztcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGVyc29uYWxOdW1iZXI6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjYW5OdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZXllQ29sb3I6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaWRlbnRpdHlDYXJkTnVtYmVyOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55Q29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueUNvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mSXNzdWVCMTA6IHN0cmluZztcclxuICBkYXRlT2ZJc3N1ZUIxME5vdFNwZWNpZmllZDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueURsQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlEbEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55RGxCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxHZXJtYW55RGxCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGFkZHJlc3NDaXR5OiBzdHJpbmc7XHJcbiAgYWRkcmVzc0hvdXNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgYWRkcmVzc1N0cmVldDogc3RyaW5nO1xyXG4gIGFkZHJlc3NaaXBDb2RlOiBzdHJpbmc7XHJcbiAgYXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZXllQ29sb3VyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBoZWlnaHQ6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEdlcm1hbnlJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFeWVDb2xvdXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEhlaWdodDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55SWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxHZXJtYW55SWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNhbk51bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lczogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENhbk51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lczogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxHZXJtYW55SWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55T2xkSWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueU9sZElkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8R2VybWFueU9sZElkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8R2VybWFueVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYXRpb25hbGl0eTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEdlcm1hbnlQYXNzcG9ydFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY29tbWVyY2lhbENvZGU6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICByZXNpZGVudGlhbFN0YXR1czogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8SG9uZ0tvbmdJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGdWxsTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UmVzaWRlbnRpYWxTdGF0dXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJa2FkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBlbXBsb3llcjogc3RyaW5nO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmFjdWx0eUFkZHJlc3M6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XHJcbiAgc2VjdG9yeTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIElrYWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPElrYWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSWthZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPElrYWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEVtcGxveWVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RFeHBpcnlEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGYWN1bHR5QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZWN0b3I6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBJa2FkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxJa2FkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGJsb29kVHlwZTogc3RyaW5nO1xyXG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnlQZXJtYW5lbnQ6IHN0cmluZztcclxuICBkaXN0cmljdDogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBrZWxEZXNhOiBzdHJpbmc7XHJcbiAgbWFyaXRhbFN0YXR1czogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBvY2N1cGF0aW9uOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJvdmluY2U6IHN0cmluZztcclxuICByZWxpZ2lvbjogc3RyaW5nO1xyXG4gIHJ0OiBzdHJpbmc7XHJcbiAgcnc6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEJsb29kVHlwZTogYm9vbGVhbjtcclxuICBleHRyYWN0Q2l0aXplbnNoaXA6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGlzdHJpY3Q6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEtlbERlc2E6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE1hcml0YWxTdGF0dXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE9jY3VwYXRpb246IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0UmVsaWdpb246IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJ0OiBib29sZWFuO1xyXG4gIGV4dHJhY3RSdzogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkcml2ZXJOdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VlZEJ5OiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICAvLyBzaWNcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElyZWxhbmREbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8SXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VlZEJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPElyZWxhbmREbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaXNzdWluZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIC8vIHNpY1xyXG4gIGxpY2VuY2VDYXRlZ29yaWVzOiBzdHJpbmc7XHJcbiAgLy8gc2ljXHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8SXRhbHlEbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEl0YWx5RGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEdpdmVuTmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIEl0YWx5RGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8SXRhbHlEbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEpvcmRhbkNvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogYm9vbGVhbjtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgbmF0aW9uYWxOdW1iZXI6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Sm9yZGFuQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgSm9yZGFuSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxKb3JkYW5JZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbE51bWJlcjogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSm9yZGFuSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Sm9yZGFuSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxuICBzZXJpYWxObzogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8S3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEt1d2FpdElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEt1d2FpdElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2VyaWFsTm86IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBLdXdhaXRJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEt1d2FpdElkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJpcnRoRGF0YTogRGF0ZTtcclxuICBjaXZpbElkTnVtYmVyOiBzdHJpbmc7XHJcbiAgZXhwaXJ5RGF0ZTogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgS3V3YWl0SWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEt1d2FpdElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEJpcnRoRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBLdXdhaXRJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxLdXdhaXRJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBjaXR5OiBzdHJpbmc7XHJcbiAgZGxDbGFzczogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxBZGRyZXNzOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG93bmVyU3RhdGU6IHN0cmluZztcclxuICBzdHJlZXQ6IHN0cmluZztcclxuICB2YWxpZEZyb206IERhdGU7XHJcbiAgdmFsaWRVbnRpbDogRGF0ZTtcclxuICB6aXBjb2RlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWFsYXlzaWFEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWFsYXlzaWFEbEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDbGFzczogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkRnJvbTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRVbnRpbDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPE1hbGF5c2lhRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhcm15TnVtYmVyOiBzdHJpbmc7XHJcbiAgYmlydGhEYXRhOiBEYXRlO1xyXG4gIGNpdHk6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsQWRkcmVzczogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbE5hbWU6IHN0cmluZztcclxuICBucmljOiBzdHJpbmc7XHJcbiAgb3duZXJTdGF0ZTogc3RyaW5nO1xyXG4gIHJlbGlnaW9uOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc3RyZWV0OiBzdHJpbmc7XHJcbiAgemlwY29kZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGdWxsTmFtZUFuZEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFJlbGlnaW9uOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGN1cnA6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBlbGVjdG9yS2V5OiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBmdWxsTmFtZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDdXJwOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGdWxsTmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1leGljb1ZvdGVySWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNpdmlsU3RhdHVzTnVtYmVyOiBzdHJpbmc7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmF0aGVyc05hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG1vdGhlcnNOYW1lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TW9yb2Njb0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0Q2l2aWxTdGF0dXNOdW1iZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RmF0aGVyc05hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE1vdGhlcnNOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBNb3JvY2NvSWRCYWNrUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNb3JvY2NvSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1vcm9jY29JZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNb3JvY2NvSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWxpZW5OdW1iZXI6IHN0cmluZztcclxuICBhcHBsaWNhdGlvblJlY2VpcHROdW1iZXI6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBkb2N1bWVudFR5cGU6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRCYWNrSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRGcm9udEltYWdlOiBzdHJpbmc7XHJcbiAgaW1taWdyYW50Q2FzZU51bWJlcjogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yekltYWdlOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG9wdDE6IHN0cmluZztcclxuICBvcHQyOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZENvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXJ0ZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFsbG93VW5wYXJzZWRSZXN1bHRzOiBib29sZWFuO1xyXG4gIGFsbG93VW52ZXJpZmllZFJlc3VsdHM6IGJvb2xlYW47XHJcbiAgbnVtU3RhYmxlRGV0ZWN0aW9uc1RocmVzaG9sZDogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5NcnpJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIE1ydGRDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXJ0ZENvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ydGRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtcnpJbWFnZTogc3RyaW5nO1xyXG4gIG1yelJlc3VsdDogTXJ6UmVzdWx0O1xyXG59XHJcbmV4cG9ydCB0eXBlIE1ydGRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE1ydGRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXJ0ZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPE1ydGRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgYWxsb3dVbnBhcnNlZFJlc3VsdHM6IGJvb2xlYW47XHJcbiAgYWxsb3dVbnZlcmlmaWVkUmVzdWx0czogYm9vbGVhbjtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5NcnpJbWFnZTogYm9vbGVhbjtcclxuICBzYXZlSW1hZ2VEUEk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBNcnRkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNcnRkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBleHRlbmRlZE5yaWM6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5yaWM6IHN0cmluZztcclxuICBvbGROcmljOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxNeUthZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE9sZE5yaWM6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduYXR1cmVJbWFnZURwaTogbnVtYmVyO1xyXG59XHJcbmV4cG9ydCB0eXBlIE15S2FkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TXlLYWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYXJteU51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgbnJpY051bWJlcjogc3RyaW5nO1xyXG4gIG93bmVyQWRkcmVzczogc3RyaW5nO1xyXG4gIG93bmVyQWRkcmVzc0NpdHk6IHN0cmluZztcclxuICBvd25lckFkZHJlc3NTdGF0ZTogc3RyaW5nO1xyXG4gIG93bmVyQWRkcmVzc1N0cmVldDogc3RyaW5nO1xyXG4gIG93bmVyQWRkcmVzc1ppcENvZGU6IHN0cmluZztcclxuICBvd25lckJpcnRoRGF0ZTogRGF0ZTtcclxuICBvd25lckZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgb3duZXJSZWxpZ2lvbjogc3RyaW5nO1xyXG4gIG93bmVyU2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNeUthZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8TXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBleHRyYWN0QXJteU51bWJlcjogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBNeUthZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxNeUthZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE5ld1plYWxhbmREbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBjYXJkVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb25vckluZGljYXRvcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZXM6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGxpY2VuY2VOdW1iZXI6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QWRkcmVzczogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERvbm9ySW5kaWNhdG9yOiBib29sZWFuO1xyXG4gIGV4dHJhY3RGaXJzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8TmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNhcmROdW1iZXI6IHN0cmluZztcclxuICBjdnY6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlOiBzdHJpbmc7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZVZlcnNpb246IHN0cmluZztcclxuICBkb2N1bWVudERhdGFNYXRjaDogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpbnZlbnRvcnlOdW1iZXI6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBvd25lcjogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICB2YWxpZFRocnU6IERhdGU7XHJcbn1cclxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCbGlua0NhcmRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtDYXJkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8QmxpbmtDYXJkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGFub255bWl6ZUNhcmROdW1iZXI6IGJvb2xlYW47XHJcbiAgYW5vbnltaXplQ3Z2OiBib29sZWFuO1xyXG4gIGFub255bWl6ZU93bmVyOiBib29sZWFuO1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDdnY6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEludmVudG9yeU51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0T3duZXI6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVGhydTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgQmxpbmtDYXJkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxCbGlua0NhcmRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGJhcmNvZGVUeXBlOiBzdHJpbmc7XHJcbiAgcmF3RGF0YTogc3RyaW5nO1xyXG4gIHN0cmluZ0RhdGE6IHN0cmluZztcclxuICB1bmNlcnRhaW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgUGRmNDE3UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQZGY0MTdSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUGRmNDE3UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8UGRmNDE3UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xyXG4gIHNjYW5JbnZlcnNlOiBib29sZWFuO1xyXG4gIHNjYW5VbmNlcnRhaW46IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgUGRmNDE3UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQZGY0MTdSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmYW1pbHlOYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZXM6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBhcmVudHNHaXZlbk5hbWVzOiBzdHJpbmc7XHJcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcclxuICBzY2FubmluZ0ZpcnN0U2lkZURvbmU6IGJvb2xlYW47XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RmFtaWx5TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQYXJlbnRzR2l2ZW5OYW1lczogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8UG9sYW5kSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFBvbGFuZElkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZhbWlseU5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGdpdmVuTmFtZXM6IHN0cmluZztcclxuICBwYXJlbnRzR2l2ZW5OYW1lczogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHN1cm5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFBvbGFuZElkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxQb2xhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RmFtaWx5TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lczogYm9vbGVhbjtcclxuICBleHRyYWN0UGFyZW50c0dpdmVuTmFtZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8UG9sYW5kSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGNucDogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaWRTZXJpZXM6IHN0cmluZztcclxuICBpc3N1ZWRCeTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG5vbk1SWk5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgbm9uTVJaU2V4OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwYXJlbnROYW1lczogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgdmFsaWRGcm9tOiBEYXRlO1xyXG4gIHZhbGlkVW50aWw6IERhdGU7XHJcbn1cclxuZXhwb3J0IHR5cGUgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFJvbWFuaWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFJvbWFuaWFJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdExhc3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROb25NUlpTZXg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8Um9tYW5pYUlkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBqbWJnOiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogYm9vbGVhbjtcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTZXJiaWFDb21iaW5lZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRvY3VtZW50Q29kZTogc3RyaW5nO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZXI6IHN0cmluZztcclxuICBtcnpQYXJzZWQ6IGJvb2xlYW47XHJcbiAgbXJ6VGV4dDogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwcmltYXJ5SWQ6IHN0cmluZztcclxuICBzZWNvbmRhcnlJZDogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2VyYmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNlcmJpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNlcmJpYUlkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nRGF0ZTogRGF0ZTtcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG4gIHZhbGlkVGhydTogRGF0ZTtcclxuICB2YWxpZFVudGlsOiBEYXRlO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VyYmlhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdElzc3VpbmdEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5TaWduYXR1cmVJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTZXJiaWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBzaW1OdW1iZXI6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTaW1OdW1iZXJSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IHR5cGUgU2ltTnVtYmVyUmVjb2duaXplciA9IFJlY29nbml6ZXI8U2ltTnVtYmVyUmVjb2duaXplclJlc3VsdD47XHJcbmV4cG9ydCB0eXBlIFNpbU51bWJlclJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2ltTnVtYmVyUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgY29tcGFueU5hbWU6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTaW5nYXBvcmVDaGFuZ2lFbXBsb3llZUlkUmVjb2duaXplclJlc3VsdEN0b3IgPVxyXG4gIFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENvbXBhbnlOYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYWRkcmVzc0NoYW5nZURhdGU6IERhdGU7XHJcbiAgYmxvb2RHcm91cDogc3RyaW5nO1xyXG4gIGNvdW50cnlPZkJpcnRoOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZGlnaXRhbFNpZ25hdHVyZTogc3RyaW5nO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmVWZXJzaW9uOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnREYXRhTWF0Y2g6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlkZW50aXR5Q2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICByYWNlOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEFkZHJlc3NDaGFuZ2VEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RCbG9vZEdyb3VwOiBib29sZWFuO1xyXG4gIGV4dHJhY3RDb3VudHJ5T2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3ROYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RSYWNlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBiaXJ0aERhdGE6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZURhdGU6IERhdGU7XHJcbiAgbGljZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICB2YWxpZFRpbGw6IERhdGU7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QmlydGhEYXRlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1ZURhdGU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFZhbGlkVGlsbDogYm9vbGVhbjtcclxuICBmYWNlSW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTaW5nYXBvcmVEbEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgYWRkcmVzc0NoYW5nZURhdGU6IHN0cmluZztcclxuICBibG9vZEdyb3VwOiBzdHJpbmc7XHJcbiAgY2FyZE51bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2luZ2Fwb3JlSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RBZGRyZXNzQ2hhbmdlRGF0ZTogYm9vbGVhbjtcclxuICBleHRyYWN0Qmxvb2RHcm91cDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTaW5nYXBvcmVJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGNvdW50cnlPZkJpcnRoOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgcmFjZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdENvdW50cnlPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UmFjZTogYm9vbGVhbjtcclxuICBleHRyYWN0U2V4OiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhZGRyZXNzOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IG51bWJlcjtcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogbnVtYmVyO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGRvY3VtZW50TnVtYmVyOiBzdHJpbmc7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50QmFja0ltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50RnJvbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG1yelZlcmlmaWVkOiBib29sZWFuO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGVyc29uYWxJZGVudGlmaWNhdGlvbk51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNjYW5uaW5nRmlyc3RTaWRlRG9uZTogc3RyaW5nO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3BlY2lhbFJlbWFya3M6IHN0cmluZztcclxuICBzdXJuYW1lQXRCaXJ0aDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3BlY2lhbFJlbWFya3M6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWVBdEJpcnRoOiBib29sZWFuO1xyXG4gIHJldHVybkZhY2VJbWFnZTogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxuICBzaWduUmVzdWx0OiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc3BlY2lhbFJlbWFya3M6IHN0cmluZztcclxuICBzdXJuYW1lQXRCaXJ0aDogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhSWRCYWNrUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNwZWNpYWxSZW1hcmtzOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lQXRCaXJ0aDogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgaXNzdWVkQnk6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgcGVyc29uYWxOdW1iZXI6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzaWduYXR1cmVJbWFnZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmFraWFJZEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0UGxhY2VPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3REb2N1bWVudE51bWJlcjogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWVkQnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmFraWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgYWRkcmVzczogc3RyaW5nO1xyXG4gIGNpdGl6ZW5zaGlwOiBzdHJpbmc7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEJhY2tJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEZyb250SW1hZ2U6IHN0cmluZztcclxuICBpZGVudGl0eUNhcmROdW1iZXI6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBwZXJzb25hbElkZW50aWZpY2F0aW9uTnVtYmVyOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnblJlc3VsdDogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTbG92ZW5pYUNvbWJpbmVkUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGFkZHJlc3M6IHN0cmluZztcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHByaW1hcnlJZDogc3RyaW5nO1xyXG4gIHNlY29uZGFyeUlkOiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEF1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgc2V4OiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RTZXg6IGJvb2xlYW47XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U2xvdmVuaWFJZEZyb250UmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBmYWNlSW1hZ2U6IHN0cmluZztcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGlzc3VpbmdBdXRob3JpdHk6IHN0cmluZztcclxuICBsaWNlbmNlQ2F0ZWdvcmllczogc3RyaW5nO1xyXG4gIG51bWJlcjogc3RyaW5nO1xyXG4gIHBsYWNlT2ZCaXJ0aDogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG4gIHZhbGlkRnJvbTogRGF0ZTtcclxuICB2YWxpZFVudGlsOiBEYXRlO1xyXG59XHJcbmV4cG9ydCB0eXBlIFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNwYWluRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFNwYWluRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGljZW5jZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0VmFsaWRGcm9tOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZFVudGlsOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VFeHRlbnNpb25GYWN0b3JzOiBJbWFnZUV4dGVuc2lvbkZhY3RvcnM7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHJldHVyblNpZ25hdHVyZUltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25hdHVyZUltYWdlRHBpOiBudW1iZXI7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3BhaW5EbEZyb250UmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxTcGFpbkRsRnJvbnRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQWdlbmN5OiBzdHJpbmc7XHJcbiAgbGljZW5jZUNhdGVnb3JpZXM6IHN0cmluZztcclxuICBsaWNlbmNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHJlZmVyZW5jZU51bWJlcjogc3RyaW5nO1xyXG4gIHNpZ25hdHVyZUltYWdlOiBzdHJpbmc7XHJcbiAgc3VybmFtZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9IFJlY29nbml6ZXJSZXN1bHRDdG9yPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dlZGVuRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3ZWRlbkRsRnJvbnRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgZGV0ZWN0R2xhcmU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkJpcnRoOiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RJc3N1aW5nQXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RMaWNlbmNlQ2F0ZWdvcmllczogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0UmVmZXJlbmNlTnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RTdXJuYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RWYWxpZEZyb206IGJvb2xlYW47XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dlZGVuRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dlZGVuRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZGF0ZU9mQmlydGg6IERhdGU7XHJcbiAgZGF0ZU9mRXhwaXJ5OiBEYXRlO1xyXG4gIGRhdGVPZklzc3VlOiBEYXRlO1xyXG4gIGV4cGlyeURhdGVQZXJtYW5lbnQ6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1aW5nQXV0aG9yaXR5OiBzdHJpbmc7XHJcbiAgbGFzdE5hbWU6IHN0cmluZztcclxuICBsaWNlbnNlTnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICB2ZWhpY2xlQ2F0ZWdvcmllczogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmREbEZyb250UmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZkV4cGlyeTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdEZpcnN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0SXNzdWluZ0F1dGhvcml0eTogYm9vbGVhbjtcclxuICBleHRyYWN0TGFzdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0VmVoaWNsZUNhdGVnb3JpZXM6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBhdXRob3JpdHk6IHN0cmluZztcclxuICBkYXRlT2ZCaXJ0aDogRGF0ZTtcclxuICBkYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgZGF0ZU9mSXNzdWU6IERhdGU7XHJcbiAgZG9jdW1lbnRDb2RlOiBzdHJpbmc7XHJcbiAgZG9jdW1lbnROdW1iZXI6IHN0cmluZztcclxuICBmdWxsRG9jdW1lbnRJbWFnZTogc3RyaW5nO1xyXG4gIGhlaWdodDogc3RyaW5nO1xyXG4gIGlzc3Vlcjogc3RyaW5nO1xyXG4gIG1yelBhcnNlZDogYm9vbGVhbjtcclxuICBtcnpUZXh0OiBzdHJpbmc7XHJcbiAgbXJ6VmVyaWZpZWQ6IGJvb2xlYW47XHJcbiAgbmF0aW9uYWxpdHk6IHN0cmluZztcclxuICBub25NcnpEYXRlT2ZFeHBpcnk6IERhdGU7XHJcbiAgbm9uTXJ6U2V4OiBzdHJpbmc7XHJcbiAgb3B0MTogc3RyaW5nO1xyXG4gIG9wdDI6IHN0cmluZztcclxuICBwbGFjZU9mT3JpZ2luOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxufVxyXG5leHBvcnQgdHlwZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZFeHBpcnk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBsYWNlT2ZPcmlnaW46IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICByZXR1cm5GdWxsRG9jdW1lbnRJbWFnZTogYm9vbGVhbjtcclxufVxyXG5leHBvcnQgdHlwZSBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgc2lnbmF0dXJlSW1hZ2U6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGRldGVjdEdsYXJlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RHaXZlbk5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFN1cm5hbWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuU2lnbmF0dXJlSW1hZ2U6IGJvb2xlYW47XHJcbiAgc2lnbmF0dXJlSW1hZ2VEcGk6IG51bWJlcjtcclxufVxyXG5leHBvcnQgdHlwZSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFN3aXR6ZXJsYW5kSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGF1dGhvcml0eTogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBkYXRlT2ZJc3N1ZTogRGF0ZTtcclxuICBkb2N1bWVudENvZGU6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgZ2l2ZW5OYW1lOiBzdHJpbmc7XHJcbiAgaGVpZ2h0OiBzdHJpbmc7XHJcbiAgaXNzdWVyOiBzdHJpbmc7XHJcbiAgbXJ6UGFyc2VkOiBib29sZWFuO1xyXG4gIG1yelRleHQ6IHN0cmluZztcclxuICBtcnpWZXJpZmllZDogYm9vbGVhbjtcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIG5vbk1yekRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIG5vbk1yekRhdGVPZkV4cGlyeTogRGF0ZTtcclxuICBub25NcnpTZXg6IHN0cmluZztcclxuICBvcHQxOiBzdHJpbmc7XHJcbiAgb3B0Mjogc3RyaW5nO1xyXG4gIHBhc3Nwb3J0TnVtYmVyOiBzdHJpbmc7XHJcbiAgcGxhY2VPZkJpcnRoOiBzdHJpbmc7XHJcbiAgcHJpbWFyeUlkOiBzdHJpbmc7XHJcbiAgc2Vjb25kYXJ5SWQ6IHN0cmluZztcclxuICBzZXg6IHN0cmluZztcclxuICBzdXJuYW1lOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHRDdG9yID0gUmVjb2duaXplclJlc3VsdEN0b3I8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0QXV0aG9yaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZCaXJ0aDogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mRXhwaXJ5OiBib29sZWFuO1xyXG4gIGV4dHJhY3REYXRlT2ZJc3N1ZTogYm9vbGVhbjtcclxuICBleHRyYWN0R2l2ZW5OYW1lOiBib29sZWFuO1xyXG4gIGV4dHJhY3RIZWlnaHQ6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFBhc3Nwb3J0TnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdFNleDogYm9vbGVhbjtcclxuICBleHRyYWN0U3VybmFtZTogYm9vbGVhbjtcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgU3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8U3dpdHplcmxhbmRQYXNzcG9ydFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIGV4cGlyeURhdGU6IERhdGU7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpc3N1ZURhdGU6IERhdGU7XHJcbiAgbGljZW5zZU51bWJlcjogc3RyaW5nO1xyXG4gIGxpY2Vuc2luZ0F1dGhvcml0eTogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG4gIHBsYWNlT2ZJc3N1ZTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9XHJcbiAgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0RGF0ZU9mQmlydGg6IGJvb2xlYW47XHJcbiAgZXh0cmFjdERhdGVPZklzc3VlOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMaWNlbnNlTnVtYmVyOiBib29sZWFuO1xyXG4gIGV4dHJhY3RMaWNlbnNpbmdBdXRob3JpdHk6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hbWU6IGJvb2xlYW47XHJcbiAgZXh0cmFjdE5hdGlvbmFsaXR5OiBib29sZWFuO1xyXG4gIGV4dHJhY3RQbGFjZU9mSXNzdWU6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgVW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzRGxGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxufVxyXG5leHBvcnQgdHlwZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvciA9XHJcbiAgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRXh0ZW5zaW9uRmFjdG9yczogSW1hZ2VFeHRlbnNpb25GYWN0b3JzO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRCYWNrUmVjb2duaXplcj47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgZmFjZUltYWdlOiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBpZE51bWJlcjogc3RyaW5nO1xyXG4gIG5hbWU6IHN0cmluZztcclxuICBuYXRpb25hbGl0eTogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvciA9XHJcbiAgUmVjb2duaXplclJlc3VsdEN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEZyb250UmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ+IHtcclxuICBkZXRlY3RHbGFyZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmFtZTogYm9vbGVhbjtcclxuICBleHRyYWN0TmF0aW9uYWxpdHk6IGJvb2xlYW47XHJcbiAgZmFjZUltYWdlRHBpOiBudW1iZXI7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2VEcGk6IG51bWJlcjtcclxuICBmdWxsRG9jdW1lbnRJbWFnZUV4dGVuc2lvbkZhY3RvcnM6IEltYWdlRXh0ZW5zaW9uRmFjdG9ycztcclxuICByZXR1cm5GYWNlSW1hZ2U6IGJvb2xlYW47XHJcbiAgcmV0dXJuRnVsbERvY3VtZW50SW1hZ2U6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJDdG9yID0gUmVjb2duaXplckN0b3I8VW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBWaW5SZWNvZ25pemVyUmVzdWx0IGV4dGVuZHMgUmVjb2duaXplclJlc3VsdCB7XHJcbiAgdmluOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IHR5cGUgVmluUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxWaW5SZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCB0eXBlIFZpblJlY29nbml6ZXIgPSBSZWNvZ25pemVyPFZpblJlY29nbml6ZXJSZXN1bHQ+O1xyXG5leHBvcnQgdHlwZSBWaW5SZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFZpblJlY29nbml6ZXI+O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBVc2RsUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBzdHJpbmc7XHJcbiAgZmllbGRzOiBhbnlbXTtcclxufVxyXG5leHBvcnQgdHlwZSBVc2RsUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVc2RsUmVjb2duaXplclJlc3VsdD47XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFVzZGxSZWNvZ25pemVyIGV4dGVuZHMgUmVjb2duaXplcjxVc2RsUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIG51bGxRdWlldFpvbmVBbGxvd2VkOiBib29sZWFuO1xyXG4gIHVuY2VydGFpbkRlY29kaW5nOiBib29sZWFuO1xyXG59XHJcbmV4cG9ydCB0eXBlIFVzZGxSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPFVzZGxSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdCBleHRlbmRzIFJlY29nbml6ZXJSZXN1bHQge1xyXG4gIGRpZ2l0YWxTaWduYXR1cmU6IHN0cmluZztcclxuICBkaWdpdGFsU2lnbmF0dXJlVmVyc2lvbjogc3RyaW5nO1xyXG4gIGRvY3VtZW50RGF0YU1hdGNoOiBib29sZWFuO1xyXG4gIGZhY2VJbWFnZTogc3RyaW5nO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlOiBzdHJpbmc7XHJcbiAgc2Nhbm5pbmdGaXJzdFNpZGVEb25lOiBib29sZWFuO1xyXG4gIG9wdGlvbmFsRWxlbWVudHM6IGFueVtdO1xyXG4gIHJhd0RhdGE6IHN0cmluZztcclxuICByYXdTdHJpbmdEYXRhOiBzdHJpbmc7XHJcbiAgdW5jZXJ0YWluOiBib29sZWFuO1xyXG4gIGZpZWxkczogYW55W107XHJcbn1cclxuZXhwb3J0IHR5cGUgVXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0PjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVXNkbENvbWJpbmVkUmVjb2duaXplciBleHRlbmRzIFJlY29nbml6ZXI8VXNkbENvbWJpbmVkUmVjb2duaXplclJlc3VsdD4ge1xyXG4gIGZhY2VJbWFnZURwaTogbnVtYmVyO1xyXG4gIGZ1bGxEb2N1bWVudEltYWdlRHBpOiBudW1iZXI7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIHNpZ25SZXN1bHQ6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IHR5cGUgVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3IgPSBSZWNvZ25pemVyQ3RvcjxVc2RsQ29tYmluZWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCB0eXBlIEJsaW5rSWRSZWNvZ25pemVyQ3RvciA9IFJlY29nbml6ZXJDdG9yPEJsaW5rSWRSZWNvZ25pemVyPjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZFJlY29nbml6ZXIgZXh0ZW5kcyBSZWNvZ25pemVyPEJsaW5rSWRSZWNvZ25pemVyUmVzdWx0PiB7XHJcbiAgcmV0dXJuRmFjZUltYWdlOiBib29sZWFuO1xyXG4gIHJldHVybkZ1bGxEb2N1bWVudEltYWdlOiBib29sZWFuO1xyXG4gIGFub255bWl6YXRpb25Nb2RlOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmxpbmtJZFJlY29nbml6ZXJSZXN1bHQgZXh0ZW5kcyBSZWNvZ25pemVyUmVzdWx0IHtcclxuICBmaXJzdE5hbWU6IHN0cmluZztcclxuICBsYXN0TmFtZTogc3RyaW5nO1xyXG4gIGZ1bGxOYW1lOiBzdHJpbmc7XHJcbiAgbG9jYWxpemVkTmFtZTogc3RyaW5nO1xyXG4gIGFkZGl0aW9uYWxOYW1lSW5mb3JtYXRpb246IHN0cmluZztcclxuICBwbGFjZU9mQmlydGg6IHN0cmluZztcclxuICBkb2N1bWVudE51bWJlcjogc3RyaW5nO1xyXG4gIGRhdGVPZkJpcnRoOiBEYXRlO1xyXG4gIHNleDogc3RyaW5nO1xyXG4gIG5hdGlvbmFsaXR5OiBzdHJpbmc7XHJcbiAgZnVsbERvY3VtZW50SW1hZ2U6IHN0cmluZztcclxuICBtcnpSZXN1bHQ6IE1yelJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBCbGlua0lkT3ZlcmxheVNldHRpbmdzQ3RvciB7XHJcbiAgbmV3ICgpOiBCbGlua0lkT3ZlcmxheVNldHRpbmdzO1xyXG59XHJcbmV4cG9ydCB0eXBlIEJsaW5rSWRPdmVybGF5U2V0dGluZ3MgPSBPdmVybGF5U2V0dGluZ3M7XHJcblxyXG5leHBvcnQgdHlwZSBCbGlua0lkUmVjb2duaXplclJlc3VsdEN0b3IgPSBSZWNvZ25pemVyUmVzdWx0Q3RvcjxCbGlua0lkUmVjb2duaXplclJlc3VsdD47XHJcbi8qKlxyXG4gKiBAbmFtZSBCbGlua0lkXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBNaWNyb2JsaW5rIFNESyB3cmFwcGVyIGZvciBiYXJjb2RlIGFuZCBkb2N1bWVudCBzY2FubmluZy4gU2VlIHRoZVxyXG4gKiBibGlua2lkLXBob25lZ2FwIHJlcG9zaXRvcnkgZm9yIGF2YWlsYWJsZSByZWNvZ25pemVycyBhbmQgb3RoZXIgc2V0dGluZ3NcclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgQmxpbmtJZCwgUmVjb2duaXplclJlc3VsdFN0YXRlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JsaW5raWQvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBibGlua0lkOiBCbGlua0lkKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIGNvbnN0IG92ZXJsYXlTZXR0aW5ncyA9IG5ldyB0aGlzLmJsaW5rSWQuRG9jdW1lbnRPdmVybGF5U2V0dGluZ3MoKTtcclxuICpcclxuICogY29uc3QgdXNkbFJlY29nbml6ZXIgPSBuZXcgdGhpcy5ibGlua0lkLlVzZGxSZWNvZ25pemVyKCk7XHJcbiAqIGNvbnN0IHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyID0gbmV3IHRoaXMuYmxpbmtJZC5TdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcih1c2RsUmVjb2duaXplcik7XHJcbiAqXHJcbiAqIGNvbnN0IGJhcmNvZGVSZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CYXJjb2RlUmVjb2duaXplcigpO1xyXG4gKiBiYXJjb2RlUmVjb2duaXplci5zY2FuUGRmNDE3ID0gdHJ1ZTtcclxuICpcclxuICogY29uc3QgcmVjb2duaXplckNvbGxlY3Rpb24gPSBuZXcgdGhpcy5ibGlua0lkLlJlY29nbml6ZXJDb2xsZWN0aW9uKFtcclxuICogICB1c2RsU3VjY2Vzc0ZyYW1lR3JhYmJlcixcclxuICogICBiYXJjb2RlUmVjb2duaXplcixcclxuICogXSk7XHJcbiAqXHJcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxyXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcclxuICogICByZWNvZ25pemVyQ29sbGVjdGlvbixcclxuICogICB7IGlvczogSU9TX0xJQ0VOU0VfS0VZLCBhbmRyb2lkOiBBTkRST0lEX0xJQ0VOU0VfS0VZIH0sXHJcbiAqICk7XHJcbiAqXHJcbiAqIGlmICghY2FuY2VsZWQpIHtcclxuICogICBpZiAodXNkbFJlY29nbml6ZXIucmVzdWx0LnJlc3VsdFN0YXRlID09PSBSZWNvZ25pemVyUmVzdWx0U3RhdGUudmFsaWQpIHtcclxuICogICAgIGNvbnN0IHN1Y2Nlc3NGcmFtZSA9IHVzZGxTdWNjZXNzRnJhbWVHcmFiYmVyLnJlc3VsdC5zdWNjZXNzRnJhbWU7XHJcbiAqICAgICBpZiAoc3VjY2Vzc0ZyYW1lKSB7XHJcbiAqICAgICAgIHRoaXMuYmFzZTY0SW1nID0gYGRhdGE6aW1hZ2UvanBnO2Jhc2U2NCwgJHtzdWNjZXNzRnJhbWV9YDtcclxuICogICAgICAgdGhpcy5maWVsZHMgPSB1c2RsUmVjb2duaXplci5yZXN1bHQuZmllbGRzO1xyXG4gKiAgICAgfVxyXG4gKiAgIH0gZWxzZSB7XHJcbiAqICAgICB0aGlzLmJhcmNvZGVTdHJpbmdEYXRhID0gYmFyY29kZVJlY29nbml6ZXIucmVzdWx0LnN0cmluZ0RhdGE7XHJcbiAqICAgfVxyXG4gKiB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCBvdmVybGF5U2V0dGluZ3MgPSBuZXcgdGhpcy5ibGlua0lkLkJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5ncygpO1xyXG4gKiBjb25zdCByZWNvZ25pemVyID0gbmV3IHRoaXMuYmxpbmtJZC5CbGlua0NhcmRSZWNvZ25pemVyKCk7XHJcbiAqIHJlY29nbml6ZXIucmV0dXJuRnVsbERvY3VtZW50SW1hZ2UgPSBmYWxzZTtcclxuICogcmVjb2duaXplci5kZXRlY3RHbGFyZSA9IHRydWU7XHJcbiAqIHJlY29nbml6ZXIuZXh0cmFjdEN2diA9IHRydWU7XHJcbiAqIHJlY29nbml6ZXIuZXh0cmFjdFZhbGlkVGhydSA9IHRydWU7XHJcbiAqIHJlY29nbml6ZXIuZXh0cmFjdE93bmVyID0gdHJ1ZTtcclxuICpcclxuICogY29uc3QgcmVjb2duaXplckNvbGxlY3Rpb24gPSBuZXcgdGhpcy5ibGlua0lkLlJlY29nbml6ZXJDb2xsZWN0aW9uKFtyZWNvZ25pemVyXSk7XHJcbiAqIGNvbnN0IGNhbmNlbGVkID0gYXdhaXQgdGhpcy5ibGlua0lkLnNjYW5XaXRoQ2FtZXJhKFxyXG4gKiAgIG92ZXJsYXlTZXR0aW5ncyxcclxuICogICByZWNvZ25pemVyQ29sbGVjdGlvbixcclxuICogICB7XHJcbiAqICAgICBpb3M6ICcnLCAvL2lPUyBMaWNlbnNlIEtleVxyXG4gKiAgICAgYW5kcm9pZDogJycgLy9BbmRyb2lkIExpY2Vuc2UgS2V5XHJcbiAqICAgfSxcclxuICogKTtcclxuICpcclxuICogaWYgKCFjYW5jZWxlZCkge1xyXG4gKiAgIGlmIChyZWNvZ25pemVyLnJlc3VsdC5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XHJcbiAqICAgICBjb25zdCByZXN1bHRzID0gcmVjb2duaXplci5yZXN1bHQ7XHJcbiAqXHJcbiAqICAgICBpZiAocmVzdWx0cy5yZXN1bHRTdGF0ZSA9PT0gUmVjb2duaXplclJlc3VsdFN0YXRlLnZhbGlkKSB7XHJcbiAqICAgICAgIGNvbnN0IGNjSW5mbyA9IHtcclxuICogICAgICAgICBjYXJkTnVtYmVyOiBOdW1iZXIocmVzdWx0cy5jYXJkTnVtYmVyKSxcclxuICogICAgICAgICBleHBpcmF0aW9uTW9udGg6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS5tb250aCksXHJcbiAqICAgICAgICAgZXhwaXJhdGlvblllYXI6IE51bWJlcihyZXN1bHRzLnZhbGlkVGhydS55ZWFyKSxcclxuICogICAgICAgICBjdnY6IE51bWJlcihyZXN1bHRzLmN2dilcclxuICogICAgICAgfTtcclxuICogICAgIH1cclxuICogICB9XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0JsaW5rSWQnLFxyXG4gIHBsdWdpbjogJ2JsaW5raWQtY29yZG92YScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLkJsaW5rSUQnLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vQmxpbmtJRC9ibGlua2lkLXBob25lZ2FwJyxcclxuICBpbnN0YWxsOlxyXG4gICAgJ2lvbmljIGNvcmRvdmEgcGx1Z2luIGFkZCBibGlua2lkLWNvcmRvdmEgLS12YXJpYWJsZSBDQU1FUkFfVVNBR0VfREVTQ1JJUFRJT049XCJFbmFibGUgeW91ciBjYW1lcmEgc28gdGhhdCB5b3UgY2FuIHNjYW4geW91ciBJRCB0byB2YWxpZGF0ZSB5b3VyIGFjY291bnRcIicsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUycsICdBbmRyb2lkJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJsaW5rSWQgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogT3BlbnMgdGhlIGNhbWVyYSBkaWFsb2cgYW5kIGF0dGVtcHRzIHRvIHNjYW4gYSBiYXJjb2RlL2RvY3VtZW50XHJcbiAgICpcclxuICAgKiBAcGFyYW0gb3ZlcmxheVNldHRpbmdzIHtPdmVybGF5U2V0dGluZ3N9IGZvciBjYW1lcmEgb3ZlcmxheSBjdXN0b21pemF0aW9uXHJcbiAgICogQHBhcmFtIHJlY29nbml6ZXJDb2xsZWN0aW9uIHtSZWNvZ25pemVyQ29sbGVjdGlvbn0gY29sbGVjdGlvbiBvZiByZWNvZ25pemVycyB0byBzY2FuIHdpdGhcclxuICAgKiBAcGFyYW0gbGljZW5zZXNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScsXHJcbiAgfSlcclxuICBzY2FuV2l0aENhbWVyYShcclxuICAgIG92ZXJsYXlTZXR0aW5nczogT3ZlcmxheVNldHRpbmdzLFxyXG4gICAgcmVjb2duaXplckNvbGxlY3Rpb246IFJlY29nbml6ZXJDb2xsZWN0aW9uLFxyXG4gICAgbGljZW5zZXM6IExpY2Vuc2VzXHJcbiAgKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgRGF0ZTogRGF0ZUN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvaW50OiBQb2ludEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFF1YWRyaWxhdGVyYWw6IFF1YWRyaWxhdGVyYWxDdG9yO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmFyY29kZU92ZXJsYXlTZXR0aW5nczogQmFyY29kZU92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50T3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudE92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIERvY3VtZW50VmVyaWZpY2F0aW9uT3ZlcmxheVNldHRpbmdzOiBEb2N1bWVudFZlcmlmaWNhdGlvbk92ZXJsYXlTZXR0aW5nc0N0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZE92ZXJsYXlTZXR0aW5nczogQmxpbmtDYXJkT3ZlcmxheVNldHRpbmdzQ3RvcjtcclxuXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFJlY29nbml6ZXJDb2xsZWN0aW9uOiBSZWNvZ25pemVyQ29sbGVjdGlvbkN0b3I7XHJcblxyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplclJlc3VsdDogQmFyY29kZVJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCYXJjb2RlUmVjb2duaXplcjogQmFyY29kZVJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplclJlc3VsdDogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTdWNjZXNzRnJhbWVHcmFiYmVyUmVjb2duaXplcjogU3VjY2Vzc0ZyYW1lR3JhYmJlclJlY29nbml6ZXJDdG9yO1xyXG5cclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdDogQXVzdHJhbGlhRGxCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXI6IEF1c3RyYWxpYURsQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmFsaWFEbEZyb250UmVjb2duaXplcjogQXVzdHJhbGlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBBdXN0cmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplcjogQXVzdHJpYUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFEbEZyb250UmVjb2duaXplclJlc3VsdDogQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYURsRnJvbnRSZWNvZ25pemVyOiBBdXN0cmlhRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRCYWNrUmVjb2duaXplclJlc3VsdDogQXVzdHJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRCYWNrUmVjb2duaXplcjogQXVzdHJpYUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBBdXN0cmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEF1c3RyaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFJZEZyb250UmVjb2duaXplcjogQXVzdHJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdDogQXVzdHJpYVBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXI6IEF1c3RyaWFQYXNzcG9ydFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0NhcmRFbGl0ZVJlY29nbml6ZXI6IEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZEVsaXRlUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkRWxpdGVSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdDogQmxpbmtDYXJkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rQ2FyZFJlY29nbml6ZXI6IEJsaW5rQ2FyZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ29sb21iaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkQmFja1JlY29nbml6ZXI6IENvbG9tYmlhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IENvbG9tYmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyOiBDb2xvbWJpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBDcm9hdGlhSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIENyb2F0aWFJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3JvYXRpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEN5cHJ1c0lkQmFja1JlY29nbml6ZXI6IEN5cHJ1c0lkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplclJlc3VsdDogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDeXBydXNJZEZyb250UmVjb2duaXplcjogQ3lwcnVzSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBDemVjaGlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgQ3plY2hpYUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEN6ZWNoaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdDogRG9jdW1lbnRGYWNlUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEVneXB0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBFZ3lwdElkRnJvbnRSZWNvZ25pemVyOiBFZ3lwdElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgRXVkbFJlY29nbml6ZXJSZXN1bHQ6IEV1ZGxSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogR2VybWFueUNvbWJpbmVkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXI6IEdlcm1hbnlDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55RGxCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueURsQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55RGxCYWNrUmVjb2duaXplcjogR2VybWFueURsQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplclJlc3VsdDogR2VybWFueUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRCYWNrUmVjb2duaXplcjogR2VybWFueUlkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55SWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEdlcm1hbnlJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlJZEZyb250UmVjb2duaXplcjogR2VybWFueUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdDogR2VybWFueU9sZElkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEdlcm1hbnlPbGRJZFJlY29nbml6ZXI6IEdlcm1hbnlPbGRJZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBHZXJtYW55UGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgR2VybWFueVBhc3Nwb3J0UmVjb2duaXplcjogR2VybWFueVBhc3Nwb3J0UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEhvbmdLb25nSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyOiBIb25nS29uZ0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSWthZFJlY29nbml6ZXJSZXN1bHQ6IElrYWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSWthZFJlY29nbml6ZXI6IElrYWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSW5kb25lc2lhSWRGcm9udFJlY29nbml6ZXI6IEluZG9uZXNpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSXJlbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJcmVsYW5kRGxGcm9udFJlY29nbml6ZXI6IElyZWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEl0YWx5RGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBJdGFseURsRnJvbnRSZWNvZ25pemVyOiBJdGFseURsRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5Db21iaW5lZFJlY29nbml6ZXI6IEpvcmRhbkNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbklkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBKb3JkYW5JZEJhY2tSZWNvZ25pemVyOiBKb3JkYW5JZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IEpvcmRhbklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgSm9yZGFuSWRGcm9udFJlY29nbml6ZXI6IEpvcmRhbklkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEt1d2FpdElkQmFja1JlY29nbml6ZXI6IEt1d2FpdElkQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplclJlc3VsdDogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBLdXdhaXRJZEZyb250UmVjb2duaXplcjogS3V3YWl0SWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNYWxheXNpYURsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFEbEZyb250UmVjb2duaXplcjogTWFsYXlzaWFEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1hbGF5c2lhTXlUZW50ZXJhUmVjb2duaXplclJlc3VsdDogTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWFsYXlzaWFNeVRlbnRlcmFSZWNvZ25pemVyOiBNYWxheXNpYU15VGVudGVyYVJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBNZXhpY29Wb3RlcklkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplcjogTWV4aWNvVm90ZXJJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBNb3JvY2NvSWRCYWNrUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEJhY2tSZWNvZ25pemVyOiBNb3JvY2NvSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1vcm9jY29JZEZyb250UmVjb2duaXplclJlc3VsdDogTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTW9yb2Njb0lkRnJvbnRSZWNvZ25pemVyOiBNb3JvY2NvSWRGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBNcnRkQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXJ0ZENvbWJpbmVkUmVjb2duaXplcjogTXJ0ZENvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRSZWNvZ25pemVyUmVzdWx0OiBNcnRkUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE1ydGRSZWNvZ25pemVyOiBNcnRkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHQ6IE15S2FkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBNeUthZEJhY2tSZWNvZ25pemVyOiBNeUthZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IE15S2FkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTXlLYWRGcm9udFJlY29nbml6ZXI6IE15S2FkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgTmV3WmVhbGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBOZXdaZWFsYW5kRGxGcm9udFJlY29nbml6ZXI6IE5ld1plYWxhbmREbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBkZjQxN1JlY29nbml6ZXJSZXN1bHQ6IFBkZjQxN1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQZGY0MTdSZWNvZ25pemVyOiBQZGY0MTdSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRDb21iaW5lZFJlY29nbml6ZXI6IFBvbGFuZENvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBQb2xhbmRJZEJhY2tSZWNvZ25pemVyOiBQb2xhbmRJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUG9sYW5kSWRGcm9udFJlY29nbml6ZXI6IFBvbGFuZElkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgUm9tYW5pYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBSb21hbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBSb21hbmlhSWRGcm9udFJlY29nbml6ZXI6IFJvbWFuaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUNvbWJpbmVkUmVjb2duaXplclJlc3VsdDogU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhQ29tYmluZWRSZWNvZ25pemVyOiBTZXJiaWFDb21iaW5lZFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2VyYmlhSWRCYWNrUmVjb2duaXplcjogU2VyYmlhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTZXJiaWFJZEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNlcmJpYUlkRnJvbnRSZWNvZ25pemVyOiBTZXJiaWFJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHQ6IFNpbU51bWJlclJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW1OdW1iZXJSZWNvZ25pemVyOiBTaW1OdW1iZXJSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ2hhbmdpRW1wbG95ZWVJZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNoYW5naUVtcGxveWVlSWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVDb21iaW5lZFJlY29nbml6ZXI6IFNpbmdhcG9yZUNvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZURsRnJvbnRSZWNvZ25pemVyOiBTaW5nYXBvcmVEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyOiBTaW5nYXBvcmVJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2luZ2Fwb3JlSWRGcm9udFJlY29nbml6ZXI6IFNpbmdhcG9yZUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFDb21iaW5lZFJlY29nbml6ZXI6IFNsb3Zha2lhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmFraWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92YWtpYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkQmFja1JlY29nbml6ZXI6IFNsb3Zha2lhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNsb3Zha2lhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92YWtpYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFDb21iaW5lZFJlY29nbml6ZXI6IFNsb3ZlbmlhQ29tYmluZWRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU2xvdmVuaWFJZEJhY2tSZWNvZ25pemVyUmVzdWx0OiBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkQmFja1JlY29nbml6ZXI6IFNsb3ZlbmlhSWRCYWNrUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFNsb3ZlbmlhSWRGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyOiBTbG92ZW5pYUlkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3BhaW5EbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFNwYWluRGxGcm9udFJlY29nbml6ZXI6IFNwYWluRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplclJlc3VsdDogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2VkZW5EbEZyb250UmVjb2duaXplcjogU3dlZGVuRGxGcm9udFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZERsRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmREbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kRGxCYWNrUmVjb2duaXplclJlc3VsdDogU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmREbEJhY2tSZWNvZ25pemVyOiBTd2l0emVybGFuZERsQmFja1JlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZElkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplcjogU3dpdHplcmxhbmRJZEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyUmVzdWx0OiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFN3aXR6ZXJsYW5kUGFzc3BvcnRSZWNvZ25pemVyOiBTd2l0emVybGFuZFBhc3Nwb3J0UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyUmVzdWx0OiBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0RsRnJvbnRSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNEbEZyb250UmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkQmFja1JlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyOiBVbml0ZWRBcmFiRW1pcmF0ZXNJZEJhY2tSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXJSZXN1bHQ6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVW5pdGVkQXJhYkVtaXJhdGVzSWRGcm9udFJlY29nbml6ZXI6IFVuaXRlZEFyYWJFbWlyYXRlc0lkRnJvbnRSZWNvZ25pemVyQ3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVmluUmVjb2duaXplclJlc3VsdDogVmluUmVjb2duaXplclJlc3VsdEN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIFZpblJlY29nbml6ZXI6IFZpblJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplclJlc3VsdDogVXNkbFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsUmVjb2duaXplcjogVXNkbFJlY29nbml6ZXJDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0OiBVc2RsQ29tYmluZWRSZWNvZ25pemVyUmVzdWx0Q3RvcjtcclxuICBAQ29yZG92YVByb3BlcnR5KCkgVXNkbENvbWJpbmVkUmVjb2duaXplcjogVXNkbENvbWJpbmVkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rSWRSZWNvZ25pemVyOiBCbGlua0lkUmVjb2duaXplckN0b3I7XHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIEJsaW5rSWRPdmVybGF5U2V0dGluZ3M6IEJsaW5rSWRPdmVybGF5U2V0dGluZ3NDdG9yO1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBCbGlua0lkUmVjb2duaXplclJlc3VsdDogQmxpbmtJZFJlY29nbml6ZXJSZXN1bHRDdG9yO1xyXG59XHJcbiJdfQ==