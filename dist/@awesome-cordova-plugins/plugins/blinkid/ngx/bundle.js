'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core = require('@awesome-cordova-plugins/core');
var core$1 = require('@angular/core');

exports.BarcodeType = void 0;
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
})(exports.BarcodeType || (exports.BarcodeType = {}));
exports.RecognizerResultState = void 0;
(function (RecognizerResultState) {
    RecognizerResultState[RecognizerResultState["empty"] = 1] = "empty";
    RecognizerResultState[RecognizerResultState["uncertain"] = 2] = "uncertain";
    RecognizerResultState[RecognizerResultState["valid"] = 3] = "valid";
})(exports.RecognizerResultState || (exports.RecognizerResultState = {}));
exports.MrtdDocumentType = void 0;
(function (MrtdDocumentType) {
    MrtdDocumentType[MrtdDocumentType["Unknown"] = 1] = "Unknown";
    MrtdDocumentType[MrtdDocumentType["IdentityCard"] = 2] = "IdentityCard";
    MrtdDocumentType[MrtdDocumentType["Passport"] = 3] = "Passport";
    MrtdDocumentType[MrtdDocumentType["Visa"] = 4] = "Visa";
    MrtdDocumentType[MrtdDocumentType["GreenCard"] = 5] = "GreenCard";
    MrtdDocumentType[MrtdDocumentType["MalaysianPassIMM13P"] = 6] = "MalaysianPassIMM13P";
})(exports.MrtdDocumentType || (exports.MrtdDocumentType = {}));
exports.EudlCountry = void 0;
(function (EudlCountry) {
    EudlCountry[EudlCountry["UK"] = 1] = "UK";
    EudlCountry[EudlCountry["Germany"] = 2] = "Germany";
    EudlCountry[EudlCountry["Austria"] = 3] = "Austria";
    EudlCountry[EudlCountry["Automatic"] = 4] = "Automatic";
})(exports.EudlCountry || (exports.EudlCountry = {}));
exports.DocumentFaceDetectorType = void 0;
(function (DocumentFaceDetectorType) {
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD1"] = 1] = "TD1";
    DocumentFaceDetectorType[DocumentFaceDetectorType["TD2"] = 2] = "TD2";
    DocumentFaceDetectorType[DocumentFaceDetectorType["PassportsAndVisas"] = 3] = "PassportsAndVisas";
})(exports.DocumentFaceDetectorType || (exports.DocumentFaceDetectorType = {}));
exports.UsdlKeys = void 0;
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
})(exports.UsdlKeys || (exports.UsdlKeys = {}));
var BlinkId = /** @class */ (function (_super) {
    tslib.__extends(BlinkId, _super);
    function BlinkId() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BlinkId.prototype.scanWithCamera = function (overlaySettings, recognizerCollection, licenses) { return core.cordova(this, "scanWithCamera", { "callbackOrder": "reverse" }, arguments); };
    Object.defineProperty(BlinkId.prototype, "Date", {
        get: function () { return core.cordovaPropertyGet(this, "Date"); },
        set: function (value) { core.cordovaPropertySet(this, "Date", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Point", {
        get: function () { return core.cordovaPropertyGet(this, "Point"); },
        set: function (value) { core.cordovaPropertySet(this, "Point", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Quadrilateral", {
        get: function () { return core.cordovaPropertyGet(this, "Quadrilateral"); },
        set: function (value) { core.cordovaPropertySet(this, "Quadrilateral", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeOverlaySettings", {
        get: function () { return core.cordovaPropertyGet(this, "BarcodeOverlaySettings"); },
        set: function (value) { core.cordovaPropertySet(this, "BarcodeOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentOverlaySettings", {
        get: function () { return core.cordovaPropertyGet(this, "DocumentOverlaySettings"); },
        set: function (value) { core.cordovaPropertySet(this, "DocumentOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentVerificationOverlaySettings", {
        get: function () { return core.cordovaPropertyGet(this, "DocumentVerificationOverlaySettings"); },
        set: function (value) { core.cordovaPropertySet(this, "DocumentVerificationOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardOverlaySettings", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkCardOverlaySettings"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkCardOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RecognizerCollection", {
        get: function () { return core.cordovaPropertyGet(this, "RecognizerCollection"); },
        set: function (value) { core.cordovaPropertySet(this, "RecognizerCollection", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "BarcodeRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "BarcodeRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BarcodeRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "BarcodeRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "BarcodeRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SuccessFrameGrabberRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SuccessFrameGrabberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SuccessFrameGrabberRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SuccessFrameGrabberRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SuccessFrameGrabberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustraliaDlBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustraliaDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustraliaDlBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustraliaDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustraliaDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustraliaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustraliaDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustraliaDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustraliaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaPassportRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "AustriaPassportRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "AustriaPassportRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "AustriaPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkCardEliteRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkCardEliteRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardEliteRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkCardEliteRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkCardEliteRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkCardRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkCardRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkCardRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkCardRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkCardRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "ColombiaDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "ColombiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "ColombiaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "ColombiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "ColombiaIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "ColombiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "ColombiaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "ColombiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ColombiaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "ColombiaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "ColombiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CroatiaCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CroatiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CroatiaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CroatiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CroatiaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CroatiaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CroatiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CyprusIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CyprusIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "CyprusIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "CyprusIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CyprusIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CyprusIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CyprusIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "CyprusIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "CyprusIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CzechiaCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CzechiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "CzechiaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "CzechiaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "CzechiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "DocumentFaceRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "DocumentFaceRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "DocumentFaceRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "EgyptIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "EgyptIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EgyptIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "EgyptIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "EgyptIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "EudlRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "EudlRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "EudlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyDlBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyDlBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyDlBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyOldIdRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyOldIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyOldIdRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyOldIdRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyOldIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyPassportRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "GermanyPassportRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "GermanyPassportRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "GermanyPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "HongKongIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "HongKongIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "HongKongIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "HongKongIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "HongKongIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "IkadRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "IkadRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IkadRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "IkadRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "IkadRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "IndonesiaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "IndonesiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IndonesiaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "IndonesiaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "IndonesiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "IrelandDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "IrelandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "IrelandDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "IrelandDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "IrelandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "ItalyDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "ItalyDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "ItalyDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "ItalyDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "ItalyDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "JordanCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "JordanCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "JordanCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "JordanCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "JordanIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "JordanIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "JordanIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "JordanIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "JordanIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "JordanIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "JordanIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "JordanIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "JordanIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "KuwaitIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "KuwaitIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "KuwaitIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "KuwaitIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "KuwaitIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "KuwaitIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "KuwaitIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "KuwaitIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "KuwaitIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MalaysiaDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MalaysiaDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MalaysiaDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MalaysiaDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MalaysiaMyTenteraRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MalaysiaMyTenteraRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MalaysiaMyTenteraRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MalaysiaMyTenteraRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MexicoVoterIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MexicoVoterIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MexicoVoterIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MexicoVoterIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MoroccoIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MoroccoIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MoroccoIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MoroccoIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MoroccoIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MoroccoIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MoroccoIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MoroccoIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MoroccoIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MrtdCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MrtdCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MrtdCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MrtdCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MrtdRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MrtdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MrtdRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MrtdRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MrtdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MyKadBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MyKadBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MyKadBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MyKadBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "MyKadFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "MyKadFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "MyKadFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "MyKadFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "MyKadFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "NewZealandDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "NewZealandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "NewZealandDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "NewZealandDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "NewZealandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417RecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "Pdf417RecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "Pdf417RecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "Pdf417Recognizer", {
        get: function () { return core.cordovaPropertyGet(this, "Pdf417Recognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "Pdf417Recognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "PolandCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "PolandCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "PolandCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "PolandCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "PolandIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "PolandIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "PolandIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "PolandIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "PolandIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "PolandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "PolandIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "PolandIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "PolandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "RomaniaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "RomaniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "RomaniaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "RomaniaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "RomaniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SerbiaCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SerbiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SerbiaCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SerbiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SerbiaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SerbiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SerbiaIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SerbiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SerbiaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SerbiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SerbiaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SerbiaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SerbiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SimNumberRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SimNumberRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SimNumberRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SimNumberRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SimNumberRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeChangiEmployeeIdRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeChangiEmployeeIdRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeChangiEmployeeIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SingaporeIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SingaporeIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SingaporeIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SlovakiaCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SlovakiaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SlovakiaCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SlovakiaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SlovakiaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SlovakiaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SlovakiaIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SlovakiaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SlovakiaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SlovakiaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SlovakiaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SlovakiaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SlovakiaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SloveniaCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SloveniaCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SloveniaCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SloveniaCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SloveniaIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SloveniaIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SloveniaIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SloveniaIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SloveniaIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SloveniaIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SloveniaIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SloveniaIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SloveniaIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SpainDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SpainDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SpainDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SpainDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SpainDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SwedenDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SwedenDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwedenDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SwedenDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SwedenDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandDlBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandDlBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandDlBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandDlBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandDlBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandPassportRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandPassportRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "SwitzerlandPassportRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "SwitzerlandPassportRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "SwitzerlandPassportRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesDlFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "UnitedArabEmiratesDlFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "UnitedArabEmiratesDlFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdBackRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "UnitedArabEmiratesIdBackRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "UnitedArabEmiratesIdBackRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UnitedArabEmiratesIdFrontRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "UnitedArabEmiratesIdFrontRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "UnitedArabEmiratesIdFrontRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "VinRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "VinRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "VinRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "VinRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "VinRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "UsdlRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "UsdlRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "UsdlRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "UsdlRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "UsdlCombinedRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "UsdlCombinedRecognizerResult", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "UsdlCombinedRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "UsdlCombinedRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "UsdlCombinedRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizer", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkIdRecognizer"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkIdRecognizer", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdOverlaySettings", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkIdOverlaySettings"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkIdOverlaySettings", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BlinkId.prototype, "BlinkIdRecognizerResult", {
        get: function () { return core.cordovaPropertyGet(this, "BlinkIdRecognizerResult"); },
        set: function (value) { core.cordovaPropertySet(this, "BlinkIdRecognizerResult", value); },
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
        { type: core$1.Injectable }
    ];
    return BlinkId;
}(core.AwesomeCordovaNativePlugin));

exports.BlinkId = BlinkId;
