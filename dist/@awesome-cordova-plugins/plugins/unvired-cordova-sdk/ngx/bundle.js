'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');
require('rxjs');

/**
 * Outbox Lock Result States
 */
exports.OutboxLockStatus = void 0;
(function (OutboxLockStatus) {
    OutboxLockStatus[OutboxLockStatus["LockApplied"] = 0] = "LockApplied";
    OutboxLockStatus[OutboxLockStatus["DataBeingSent"] = 1] = "DataBeingSent";
    OutboxLockStatus[OutboxLockStatus["DataNotInQueue"] = 2] = "DataNotInQueue";
})(exports.OutboxLockStatus || (exports.OutboxLockStatus = {}));
/**
 * Log levels supported in the sdk.
 */
exports.LogLevel = void 0;
(function (LogLevel) {
    LogLevel[LogLevel["important"] = 7] = "important";
    LogLevel[LogLevel["error"] = 8] = "error";
    LogLevel[LogLevel["debug"] = 9] = "debug";
})(exports.LogLevel || (exports.LogLevel = {}));
/**
 * AuthenticateAndActivateResultType Some Documentation
 */
exports.AuthenticateAndActivateResultType = void 0;
(function (AuthenticateAndActivateResultType) {
    /**
     * This value indicates that UMP was able to validate users credentials & activation of the user is complete.
     * In mobile apps, this also means database is created & apps can proceed with their custom logic.
     */
    AuthenticateAndActivateResultType[AuthenticateAndActivateResultType["auth_activation_success"] = 2] = "auth_activation_success";
    /**
     * This value indicates that UMP was unable to validate users credentials.
     */
    AuthenticateAndActivateResultType[AuthenticateAndActivateResultType["auth_activation_error"] = 3] = "auth_activation_error";
})(exports.AuthenticateAndActivateResultType || (exports.AuthenticateAndActivateResultType = {}));
exports.AuthenticateLocalResultType = void 0;
(function (AuthenticateLocalResultType) {
    /**
     * This value indicates that UnviredCordovaSDK was able to validate users credentials and apps can proceed with their custom logic.
     */
    AuthenticateLocalResultType[AuthenticateLocalResultType["login_success"] = 4] = "login_success";
    /**
     * This value indicates that UnviredCordovaSDK was unable to validate users credentials. You can retrieve the error information from AuthenticateLocalResult.
     */
    AuthenticateLocalResultType[AuthenticateLocalResultType["login_error"] = 5] = "login_error";
})(exports.AuthenticateLocalResultType || (exports.AuthenticateLocalResultType = {}));
exports.LoginListenerType = void 0;
(function (LoginListenerType) {
    /**
     * This value indicates that there is no user account exists and user needs to authenticate & activate. Call authenticateAndActivate() api to activate the user.
     */
    LoginListenerType[LoginListenerType["auth_activation_required"] = 0] = "auth_activation_required";
    /**
     * Applicable for mobile.
     * This value indicates user needs to login before using the app. This depends on the setting LOCAL_PASSWORD which is set in UMP Admin Cockpit.
     * If LOCAL_PASSWORD is set to true, this type is set everytime user opens the app.
     */
    LoginListenerType[LoginListenerType["app_requires_login"] = 1] = "app_requires_login";
    /**
     * This value indicates app can proceed with its custom logic.
     */
    LoginListenerType[LoginListenerType["login_success"] = 4] = "login_success";
    /**
     * If there are multiple accounts active & no account is specified in the login(), then this value is returned indicating that a current account needs to be specified for the login().
     */
    LoginListenerType[LoginListenerType["app_requires_current_account"] = 6] = "app_requires_current_account";
    /**
     * This value indicates app can proceed with demo mode.
     */
    LoginListenerType[LoginListenerType["login_demo"] = 7] = "login_demo";
})(exports.LoginListenerType || (exports.LoginListenerType = {}));
exports.LoginType = void 0;
(function (LoginType) {
    /**
     * This value represents authentication using Unvired ID.
     * Example:
     * ```
     * loginParameters.username = 'USER_NAME'
     * loginParameters.password = 'password'
     * loginParameters.company = 'unvired'
     * loginParameters.loginType = LoginType.unvired
     * ```
     */
    LoginType["unvired"] = "UNVIRED_ID";
    /**
     * This value represents authentication using Active Directory Service (ADS).
     * Example:
     * ```
     * loginParameters.username = 'USER_NAME'
     * loginParameters.password = 'password'
     * loginParameters.company = 'unvired'
     * loginParameters.domain = 'ADS_DOMAIN'
     * loginParameters.loginType = LoginType.ads
     * ```
     */
    LoginType["ads"] = "ADS";
    /**
     * This value represents authentication using SAP ID.
     * Example:
     * ```
     * loginParameters.username = 'USER_NAME'
     * loginParameters.password = 'password'
     * loginParameters.company = 'unvired'
     * loginParameters.port = 'SAP_PORT_NAME'
     * loginParameters.domain = 'SAP_DOMAIN'
     * loginParameters.loginType = LoginType.sap
     * ```
     */
    LoginType["sap"] = "SAP";
    /**
     * EMAIL
     * Set the type to email to login based on email id.
     */
    LoginType["email"] = "EMAIL";
    /**
     * SAML 2.0 Login Type
     */
    LoginType["saml2"] = "SAML2";
    /**
     * TODO:
     */
    LoginType["custom"] = "CUSTOM";
})(exports.LoginType || (exports.LoginType = {}));
exports.ResultType = void 0;
(function (ResultType) {
    /**
     * This value indicates a succesful operation.
     */
    ResultType[ResultType["success"] = 0] = "success";
    /**
     * This value indicates an error.
     */
    ResultType[ResultType["error"] = 1] = "error";
})(exports.ResultType || (exports.ResultType = {}));
exports.RequestType = void 0;
(function (RequestType) {
    /**
     * Set this type if the data exchange with UMP is 1:1. The header datastructure needs to be sent which also should be present in database prior to the call.
     * You can use UnviredCordovaSDK's db methods to insert data into database.
     */
    RequestType["RQST"] = "RQST";
    /**
     * Set this type if the data exchange with UMP is 1:N pr 0:N. Sending a datastructure is optional and is dependent on the Process Agent function.
     * If the Process Agent function is marked with metadata delete flag, then server data replaces the data in database.
     * If the Process Agent function is NOT marked with metadata delete flag, then this request type behaves the same as QUERY
     */
    RequestType["PULL"] = "PULL";
    /**
     * This request type is for those message which are initiated by the server. You typically do not set this request type in sync.. methods.
     */
    RequestType["PUSH"] = "PUSH";
    /**
     * Set this type if the data exchange with UMP is 1:N pr 0:N. Sending a datastructure is optional and is dependent on the Process Agent function.
     * Unlike PULL, this request type updates the data in database without deleting existing entries.
     */
    RequestType["QUERY"] = "QUERY";
    /**
     * Set this type if the data exchange with UMP is 1:0. This handles the case where no server response is expected.
     */
    RequestType["REQ"] = "REQ";
})(exports.RequestType || (exports.RequestType = {}));
exports.NotificationListenerType = void 0;
(function (NotificationListenerType) {
    /**
     * Notify successful asynchronous send of data to the server. This type indicates that data has moved from outbox to sent items.
     */
    NotificationListenerType[NotificationListenerType["dataSend"] = 0] = "dataSend";
    /**
     * Notify data changes for each BusinessEntity when received data from server. This type indicates when data is removed from sent items table.
     */
    NotificationListenerType[NotificationListenerType["dataChanged"] = 1] = "dataChanged";
    /**
     * Notify data receive completion on receiving of all BusinessEntities from server. Data would get processed after this step.
     */
    NotificationListenerType[NotificationListenerType["dataReceived"] = 2] = "dataReceived";
    /**
     * Notify application data reset.
     */
    NotificationListenerType[NotificationListenerType["appReset"] = 3] = "appReset";
    /**
     * Notify application with error message and attchment item on attachment download success
     */
    NotificationListenerType[NotificationListenerType["attachmentDownloadSuccess"] = 4] = "attachmentDownloadSuccess";
    /**
     * Notify application with error message and attchment item on attachment download error
     */
    NotificationListenerType[NotificationListenerType["attachmentDownloadError"] = 5] = "attachmentDownloadError";
    /**
     * Notify application when incoming data handling finished
     */
    NotificationListenerType[NotificationListenerType["incomingDataProcessingFinished"] = 6] = "incomingDataProcessingFinished";
    /**
     * Notify application when incoming data handling finished
     */
    NotificationListenerType[NotificationListenerType["attachmentDownloadWaiting"] = 7] = "attachmentDownloadWaiting";
    /**
     * Notify application with any InfoMessages
     */
    NotificationListenerType[NotificationListenerType["infoMessage"] = 8] = "infoMessage";
    /**
     * Notify application with Server errors
     */
    NotificationListenerType[NotificationListenerType["serverError"] = 9] = "serverError";
    /**
     * Notify attachment downloads completed
     */
    NotificationListenerType[NotificationListenerType["attachmentDownloadCompleted"] = 10] = "attachmentDownloadCompleted";
    /**
     * Notify when the sent item count changes.
     */
    NotificationListenerType[NotificationListenerType["SentItemChanged"] = 11] = "SentItemChanged";
    /**
     * Notify that the JWT token is received
     */
    NotificationListenerType[NotificationListenerType["JWTTokenReceived"] = 12] = "JWTTokenReceived";
})(exports.NotificationListenerType || (exports.NotificationListenerType = {}));
exports.AttachmentItemStatus = void 0;
(function (AttachmentItemStatus) {
    AttachmentItemStatus[AttachmentItemStatus["DEFAULT"] = 0] = "DEFAULT";
    AttachmentItemStatus[AttachmentItemStatus["QUEUED_FOR_DOWNLOAD"] = 1] = "QUEUED_FOR_DOWNLOAD";
    AttachmentItemStatus[AttachmentItemStatus["DOWNLOADED"] = 2] = "DOWNLOADED";
    AttachmentItemStatus[AttachmentItemStatus["ERROR_IN_DOWNLOAD"] = 3] = "ERROR_IN_DOWNLOAD";
    AttachmentItemStatus[AttachmentItemStatus["SAVED_FOR_UPLOAD"] = 4] = "SAVED_FOR_UPLOAD";
    AttachmentItemStatus[AttachmentItemStatus["UPLOADED"] = 5] = "UPLOADED";
    AttachmentItemStatus[AttachmentItemStatus["ERROR_IN_UPLOAD"] = 6] = "ERROR_IN_UPLOAD";
    AttachmentItemStatus[AttachmentItemStatus["MARKED_FOR_DELETE"] = 7] = "MARKED_FOR_DELETE";
    AttachmentItemStatus[AttachmentItemStatus["EXTERNAL"] = 8] = "EXTERNAL";
})(exports.AttachmentItemStatus || (exports.AttachmentItemStatus = {}));
var Settings = /** @class */ (function () {
    function Settings() {
    }
    return Settings;
}());
var UnviredResult = /** @class */ (function () {
    function UnviredResult() {
    }
    return UnviredResult;
}());
var OutboxLockResult = /** @class */ (function (_super) {
    tslib.__extends(OutboxLockResult, _super);
    function OutboxLockResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return OutboxLockResult;
}(UnviredResult));
var LogResult = /** @class */ (function (_super) {
    tslib.__extends(LogResult, _super);
    function LogResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LogResult;
}(UnviredResult));
var LogDataResult = /** @class */ (function (_super) {
    tslib.__extends(LogDataResult, _super);
    function LogDataResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LogDataResult;
}(UnviredResult));
var NotifResult = /** @class */ (function (_super) {
    tslib.__extends(NotifResult, _super);
    function NotifResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return NotifResult;
}(UnviredResult));
var SettingsResult = /** @class */ (function (_super) {
    tslib.__extends(SettingsResult, _super);
    function SettingsResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SettingsResult;
}(UnviredResult));
var SyncResult = /** @class */ (function (_super) {
    tslib.__extends(SyncResult, _super);
    function SyncResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SyncResult;
}(UnviredResult));
var DbResult = /** @class */ (function (_super) {
    tslib.__extends(DbResult, _super);
    function DbResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return DbResult;
}(UnviredResult));
var LoginParameters = /** @class */ (function () {
    function LoginParameters() {
    }
    return LoginParameters;
}());
var LoginResult = /** @class */ (function (_super) {
    tslib.__extends(LoginResult, _super);
    function LoginResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LoginResult;
}(UnviredResult));
var AuthenticateActivateResult = /** @class */ (function (_super) {
    tslib.__extends(AuthenticateActivateResult, _super);
    function AuthenticateActivateResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthenticateActivateResult;
}(UnviredResult));
var AuthenticateLocalResult = /** @class */ (function (_super) {
    tslib.__extends(AuthenticateLocalResult, _super);
    function AuthenticateLocalResult() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuthenticateLocalResult;
}(UnviredResult));
var UnviredCredential = /** @class */ (function () {
    function UnviredCredential() {
    }
    return UnviredCredential;
}());
var UnviredCordovaSDK = /** @class */ (function (_super) {
    tslib.__extends(UnviredCordovaSDK, _super);
    function UnviredCordovaSDK() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UnviredCordovaSDK.prototype.logDebug = function (sourceClass, method, message) { return core.cordova(this, "logDebug", {}, arguments); };
    UnviredCordovaSDK.prototype.logError = function (sourceClass, method, message) { return core.cordova(this, "logError", {}, arguments); };
    UnviredCordovaSDK.prototype.logInfo = function (sourceClass, method, message) { return core.cordova(this, "logInfo", {}, arguments); };
    UnviredCordovaSDK.prototype.logRead = function () { return core.cordova(this, "logRead", {}, arguments); };
    UnviredCordovaSDK.prototype.logDelete = function () { return core.cordova(this, "logDelete", {}, arguments); };
    UnviredCordovaSDK.prototype.sendLogToServer = function () { return core.cordova(this, "sendLogToServer", {}, arguments); };
    UnviredCordovaSDK.prototype.sendLogViaEmail = function () { return core.cordova(this, "sendLogViaEmail", {}, arguments); };
    UnviredCordovaSDK.prototype.getLogLevel = function () { return core.cordova(this, "getLogLevel", {}, arguments); };
    UnviredCordovaSDK.prototype.getLogFilePath = function () { return core.cordova(this, "getLogFilePath", {}, arguments); };
    UnviredCordovaSDK.prototype.setLogLevel = function (logLevel) { return core.cordova(this, "setLogLevel", {}, arguments); };
    UnviredCordovaSDK.prototype.login = function (loginParameters) { return core.cordova(this, "login", {}, arguments); };
    UnviredCordovaSDK.prototype.loginWithDemoData = function (loginParameters) { return core.cordova(this, "loginWithDemoData", {}, arguments); };
    UnviredCordovaSDK.prototype.logout = function () { return core.cordova(this, "logout", {}, arguments); };
    UnviredCordovaSDK.prototype.authenticateAndActivate = function (loginParameters) { return core.cordova(this, "authenticateAndActivate", {}, arguments); };
    UnviredCordovaSDK.prototype.authenticateLocal = function (loginParameters) { return core.cordova(this, "authenticateLocal", {}, arguments); };
    UnviredCordovaSDK.prototype.getAllAccounts = function () { return core.cordova(this, "getAllAccounts", {}, arguments); };
    UnviredCordovaSDK.prototype.switchAccount = function (account) { return core.cordova(this, "switchAccount", {}, arguments); };
    UnviredCordovaSDK.prototype.deleteAccount = function (account) { return core.cordova(this, "deleteAccount", {}, arguments); };
    UnviredCordovaSDK.prototype.getInfoMessages = function (headerName, lid) { return core.cordova(this, "getInfoMessages", {}, arguments); };
    UnviredCordovaSDK.prototype.showSettings = function () { return core.cordova(this, "showSettings", {}, arguments); };
    UnviredCordovaSDK.prototype.userSettings = function () { return core.cordova(this, "userSettings", {}, arguments); };
    UnviredCordovaSDK.prototype.updateSystemCredentials = function (credentials) { return core.cordova(this, "updateSystemCredentials", {}, arguments); };
    UnviredCordovaSDK.prototype.getSystemCredentials = function () { return core.cordova(this, "getSystemCredentials", {}, arguments); };
    UnviredCordovaSDK.prototype.getVersionNumbers = function () { return core.cordova(this, "getVersionNumbers", {}, arguments); };
    UnviredCordovaSDK.prototype.clearData = function () { return core.cordova(this, "clearData", {}, arguments); };
    UnviredCordovaSDK.prototype.hasInternet = function () { return core.cordova(this, "hasInternet", {}, arguments); };
    UnviredCordovaSDK.prototype.guid = function () { return core.cordova(this, "guid", { "sync": true }, arguments); };
    UnviredCordovaSDK.prototype.pullDb = function () { return core.cordova(this, "pullDb", {}, arguments); };
    UnviredCordovaSDK.prototype.pushDb = function () { return core.cordova(this, "pushDb", {}, arguments); };
    UnviredCordovaSDK.prototype.dbSelect = function (tableName, whereClause) { return core.cordova(this, "dbSelect", {}, arguments); };
    UnviredCordovaSDK.prototype.dbInsert = function (tableName, structureObject, isHeader) { return core.cordova(this, "dbInsert", {}, arguments); };
    UnviredCordovaSDK.prototype.dbInsertOrUpdate = function (tableName, structureObject, isHeader) { return core.cordova(this, "dbInsertOrUpdate", {}, arguments); };
    UnviredCordovaSDK.prototype.dbDelete = function (tableName, whereClause) { return core.cordova(this, "dbDelete", {}, arguments); };
    UnviredCordovaSDK.prototype.dbUpdate = function (tableName, updatedObject, whereClause) { return core.cordova(this, "dbUpdate", {}, arguments); };
    UnviredCordovaSDK.prototype.dbExecuteStatement = function (query) { return core.cordova(this, "dbExecuteStatement", {}, arguments); };
    UnviredCordovaSDK.prototype.dbCreateSavePoint = function (savePoint) { return core.cordova(this, "dbCreateSavePoint", {}, arguments); };
    UnviredCordovaSDK.prototype.dbReleaseSavePoint = function (savePoint) { return core.cordova(this, "dbReleaseSavePoint", {}, arguments); };
    UnviredCordovaSDK.prototype.dbRollbackToSavePoint = function (savePoint) { return core.cordova(this, "dbRollbackToSavePoint", {}, arguments); };
    UnviredCordovaSDK.prototype.dbBeginTransaction = function () { return core.cordova(this, "dbBeginTransaction", {}, arguments); };
    UnviredCordovaSDK.prototype.dbEndTransaction = function () { return core.cordova(this, "dbEndTransaction", {}, arguments); };
    UnviredCordovaSDK.prototype.dbSaveWebData = function () { return core.cordova(this, "dbSaveWebData", {}, arguments); };
    UnviredCordovaSDK.prototype.dbExportWebData = function () { return core.cordova(this, "dbExportWebData", {}, arguments); };
    UnviredCordovaSDK.prototype.launchFile = function (filePath) { return core.cordova(this, "launchFile", {}, arguments); };
    UnviredCordovaSDK.prototype.launchBase64 = function (base64string, fileName, extension) { return core.cordova(this, "launchBase64", {}, arguments); };
    UnviredCordovaSDK.prototype.unzip = function (srcPath, destPath) { return core.cordova(this, "unzip", {}, arguments); };
    UnviredCordovaSDK.prototype.getAttachmentFolderPath = function () { return core.cordova(this, "getAttachmentFolderPath", {}, arguments); };
    UnviredCordovaSDK.prototype.createAttachmentItem = function (tableName, structureObject) { return core.cordova(this, "createAttachmentItem", {}, arguments); };
    UnviredCordovaSDK.prototype.uploadAttachment = function (tableName, structureObject, isAsync) { return core.cordova(this, "uploadAttachment", {}, arguments); };
    UnviredCordovaSDK.prototype.downloadAttachment = function (tableName, structureObject) { return core.cordova(this, "downloadAttachment", {}, arguments); };
    UnviredCordovaSDK.prototype.syncForeground = function (reqype, header, customData, paFunction, autoSave) { return core.cordova(this, "syncForeground", {}, arguments); };
    UnviredCordovaSDK.prototype.syncBackground = function (reqype, header, customData, paFunction, beName, belid, bypassAttachment) { return core.cordova(this, "syncBackground", {}, arguments); };
    UnviredCordovaSDK.prototype.getSynchronizationState = function () { return core.cordova(this, "getSynchronizationState", { "observable": true }, arguments); };
    UnviredCordovaSDK.prototype.dbReload = function () { return core.cordova(this, "dbReload", {}, arguments); };
    UnviredCordovaSDK.prototype.generateUBJson = function (headerName, header, itemName, items) { return core.cordova(this, "generateUBJson", {}, arguments); };
    UnviredCordovaSDK.prototype.parseRawUBJson = function (json) { return core.cordova(this, "parseRawUBJson", {}, arguments); };
    UnviredCordovaSDK.prototype.dbGetCollection = function (tableName) { return core.cordova(this, "dbGetCollection", {}, arguments); };
    UnviredCordovaSDK.prototype.getMessages = function () { return core.cordova(this, "getMessages", {}, arguments); };
    UnviredCordovaSDK.prototype.registerNotifListener = function () { return core.cordova(this, "registerNotifListener", { "observable": true }, arguments); };
    UnviredCordovaSDK.prototype.isInOutBox = function (beLid) { return core.cordova(this, "isInOutBox", {}, arguments); };
    UnviredCordovaSDK.prototype.outBoxItemCount = function () { return core.cordova(this, "outBoxItemCount", {}, arguments); };
    UnviredCordovaSDK.prototype.isInSentItem = function (beLid) { return core.cordova(this, "isInSentItem", {}, arguments); };
    UnviredCordovaSDK.prototype.sentItemCount = function () { return core.cordova(this, "sentItemCount", {}, arguments); };
    UnviredCordovaSDK.prototype.inBoxItemCount = function () { return core.cordova(this, "inBoxItemCount", {}, arguments); };
    UnviredCordovaSDK.prototype.deleteOutBoxEntry = function (beLid) { return core.cordova(this, "deleteOutBoxEntry", {}, arguments); };
    UnviredCordovaSDK.prototype.resetApplicationSyncData = function () { return core.cordova(this, "resetApplicationSyncData", {}, arguments); };
    UnviredCordovaSDK.prototype.reCreateAppDB = function () { return core.cordova(this, "reCreateAppDB", {}, arguments); };
    UnviredCordovaSDK.prototype.startInboxHandler = function () { return core.cordova(this, "startInboxHandler", {}, arguments); };
    UnviredCordovaSDK.prototype.startDataSender = function () { return core.cordova(this, "startDataSender", {}, arguments); };
    UnviredCordovaSDK.prototype.platform = function () { return core.cordova(this, "platform", {}, arguments); };
    UnviredCordovaSDK.prototype.testPushNotification = function () { return core.cordova(this, "testPushNotification", {}, arguments); };
    UnviredCordovaSDK.prototype.lockDataSender = function (beLid) { return core.cordova(this, "lockDataSender", {}, arguments); };
    UnviredCordovaSDK.prototype.unlockDataSender = function () { return core.cordova(this, "unlockDataSender", {}, arguments); };
    UnviredCordovaSDK.prototype.removeOutObjectBasedOnLid = function (lid) { return core.cordova(this, "removeOutObjectBasedOnLid", {}, arguments); };
    UnviredCordovaSDK.prototype.startDiscoveryService = function () { return core.cordova(this, "startDiscoveryService", {}, arguments); };
    UnviredCordovaSDK.prototype.setClientCredentials = function (credentials) { return core.cordova(this, "setClientCredentials", {}, arguments); };
    UnviredCordovaSDK.prototype.isClientCredentialsSet = function () { return core.cordova(this, "isClientCredentialsSet", {}, arguments); };
    UnviredCordovaSDK.prototype.encrypt = function (stringToBeEncrypted) { return core.cordova(this, "encrypt", {}, arguments); };
    UnviredCordovaSDK.prototype.decrypt = function (stringToBeDecrypted) { return core.cordova(this, "decrypt", {}, arguments); };
    UnviredCordovaSDK.prototype.registerForPushNotification = function () { return core.cordova(this, "registerForPushNotification", {}, arguments); };
    UnviredCordovaSDK.prototype.refreshJWTToken = function () { return core.cordova(this, "refreshJWTToken", {}, arguments); };
    UnviredCordovaSDK.pluginName = "UnviredCordovaSDK";
    UnviredCordovaSDK.plugin = "cordova-plugin-unvired-sdk";
    UnviredCordovaSDK.pluginRef = "ump";
    UnviredCordovaSDK.repo = "https://github.com/unvired/cordova-plugin-unvired-sdk/";
    UnviredCordovaSDK.install = "ionic cordova plugin add @awesome-cordova-plugins/unvired-cordova-sdk";
    UnviredCordovaSDK.installVariables = [];
    UnviredCordovaSDK.platforms = ["iOS", "Android", "Windows", "Browser"];
    UnviredCordovaSDK.decorators = [
        { type: core$1.Injectable }
    ];
    return UnviredCordovaSDK;
}(core.AwesomeCordovaNativePlugin));

exports.AuthenticateActivateResult = AuthenticateActivateResult;
exports.AuthenticateLocalResult = AuthenticateLocalResult;
exports.DbResult = DbResult;
exports.LogDataResult = LogDataResult;
exports.LogResult = LogResult;
exports.LoginParameters = LoginParameters;
exports.LoginResult = LoginResult;
exports.NotifResult = NotifResult;
exports.OutboxLockResult = OutboxLockResult;
exports.Settings = Settings;
exports.SettingsResult = SettingsResult;
exports.SyncResult = SyncResult;
exports.UnviredCordovaSDK = UnviredCordovaSDK;
exports.UnviredCredential = UnviredCredential;
exports.UnviredResult = UnviredResult;
