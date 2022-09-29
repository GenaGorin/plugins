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
var FirebaseAuthenticationOriginal = /** @class */ (function (_super) {
    __extends(FirebaseAuthenticationOriginal, _super);
    function FirebaseAuthenticationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseAuthenticationOriginal.prototype.getCurrentUser = function () { return cordova(this, "getCurrentUser", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.getIdToken = function (forceRefresh) { return cordova(this, "getIdToken", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.createUserWithEmailAndPassword = function (email, password) { return cordova(this, "createUserWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.sendEmailVerification = function () { return cordova(this, "sendEmailVerification", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.sendPasswordResetEmail = function (email) { return cordova(this, "sendPasswordResetEmail", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithEmailAndPassword = function (email, password) { return cordova(this, "signInWithEmailAndPassword", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.verifyPhoneNumber = function (phoneNumber, timeout) { return cordova(this, "verifyPhoneNumber", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithVerificationId = function (verificationId, smsCode) { return cordova(this, "signInWithVerificationId", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInAnonymously = function () { return cordova(this, "signInAnonymously", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithGoogle = function (idToken, accessToken) { return cordova(this, "signInWithGoogle", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithApple = function (identityToken, rawNonce) { return cordova(this, "signInWithApple", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithFacebook = function (accessToken) { return cordova(this, "signInWithFacebook", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signInWithTwitter = function (token, secret) { return cordova(this, "signInWithTwitter", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.onAuthStateChanged = function () { return cordova(this, "onAuthStateChanged", { "observable": true, "callbackOrder": "reverse" }, arguments); };
    FirebaseAuthenticationOriginal.prototype.setLanguageCode = function (languageCode) { return cordova(this, "setLanguageCode", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.useAppLanguage = function () { return cordova(this, "useAppLanguage", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.prototype.signOut = function () { return cordova(this, "signOut", { "sync": true }, arguments); };
    FirebaseAuthenticationOriginal.pluginName = "FirebaseAuthentication";
    FirebaseAuthenticationOriginal.plugin = "cordova-plugin-firebase-authentication";
    FirebaseAuthenticationOriginal.pluginRef = "cordova.plugins.firebase.auth";
    FirebaseAuthenticationOriginal.repo = "https://github.com/chemerisuk/cordova-plugin-firebase-authentication";
    FirebaseAuthenticationOriginal.install = "ionic cordova plugin add cordova-plugin-firebase-authentication --variable FIREBASE_AUTH_VERSION=version";
    FirebaseAuthenticationOriginal.installVariables = ["FIREBASE_AUTH_VERSION"];
    FirebaseAuthenticationOriginal.platforms = ["Android", "iOS"];
    return FirebaseAuthenticationOriginal;
}(AwesomeCordovaNativePlugin));
var FirebaseAuthentication = new FirebaseAuthenticationOriginal();
export { FirebaseAuthentication };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlyZWJhc2UtYXV0aGVudGljYXRpb24vaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUFnQ1UsMENBQTBCOzs7O0lBT3BFLCtDQUFjO0lBV2QsMkNBQVUsYUFBQyxZQUFxQjtJQVdoQywrREFBOEIsYUFBQyxLQUFhLEVBQUUsUUFBZ0I7SUFROUQsc0RBQXFCO0lBV3JCLHVEQUFzQixhQUFDLEtBQWE7SUFXcEMsMkRBQTBCLGFBQUMsS0FBYSxFQUFFLFFBQWdCO0lBaUIxRCxrREFBaUIsYUFBQyxXQUFtQixFQUFFLE9BQWU7SUFXdEQseURBQXdCLGFBQUMsY0FBc0IsRUFBRSxPQUFlO0lBUWhFLGtEQUFpQjtJQVdqQixpREFBZ0IsYUFBQyxPQUFlLEVBQUUsV0FBbUI7SUFZckQsZ0RBQWUsYUFBQyxhQUFxQixFQUFFLFFBQWlCO0lBVXhELG1EQUFrQixhQUFDLFdBQW1CO0lBV3RDLGtEQUFpQixhQUFDLEtBQWEsRUFBRSxNQUFjO0lBVy9DLG1EQUFrQjtJQVVsQixnREFBZSxhQUFDLFlBQW9CO0lBUXBDLCtDQUFjO0lBUWQsd0NBQU87Ozs7Ozs7O2lDQWxOVDtFQWtDNEMsMEJBQTBCO1NBQXpELHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBDb3Jkb3ZhIHBsdWdpbiBmb3IgRmlyZWJhc2UgQXV0aGVudGljYXRpb25cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRmlyZWJhc2VBdXRoZW50aWNhdGlvbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9maXJlYmFzZS1hdXRoZW50aWNhdGlvbi9uZ3gnO1xyXG4gKlxyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcmViYXNlQXV0aGVudGljYXRpb246IEZpcmViYXNlQXV0aGVudGljYXRpb24pIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5maXJlYmFzZUF1dGhlbnRpY2F0aW9uLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCgndGVzdEBnbWFpbC5jb20nLCAnMTIzJylcclxuICogICAudGhlbigocmVzOiBhbnkpID0+IGNvbnNvbGUubG9nKHJlcykpXHJcbiAqICAgLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpcmViYXNlQXV0aGVudGljYXRpb24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMuZmlyZWJhc2UuYXV0aCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jaGVtZXJpc3VrL2NvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uJyxcclxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWZpcmViYXNlLWF1dGhlbnRpY2F0aW9uIC0tdmFyaWFibGUgRklSRUJBU0VfQVVUSF9WRVJTSU9OPXZlcnNpb24nLFxyXG4gIGluc3RhbGxWYXJpYWJsZXM6IFsnRklSRUJBU0VfQVVUSF9WRVJTSU9OJ10sXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpcmViYXNlQXV0aGVudGljYXRpb24gZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCB1c2VyIGxvZ2dlZCBpbiBGaXJlYmFzZSBzZXJ2aWNlXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIHRoZSB1c2VyIGluZm9cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBnZXRDdXJyZW50VXNlcigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIEpXVCB0b2tlbiB1c2VkIHRvIGlkZW50aWZ5IHRoZSB1c2VyIHRvIGEgRmlyZWJhc2Ugc2VydmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBmb3JjZVJlZnJlc2gge2Jvb2xlYW59IEZvcmNlIFJlZnJlc2hcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIHRoZSBpZCB0b2tlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIGdldElkVG9rZW4oZm9yY2VSZWZyZXNoOiBib29sZWFuKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFRyaWVzIHRvIGNyZWF0ZSBhIG5ldyB1c2VyIGFjY291bnQgd2l0aCB0aGUgZ2l2ZW4gZW1haWwgYWRkcmVzcyBhbmQgcGFzc3dvcmQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZW1haWwgRW1haWxcclxuICAgKiBAcGFyYW0gcGFzc3dvcmQgUGFzc3dvcmRcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBJbml0aWF0ZXMgZW1haWwgdmVyaWZpY2F0aW9uIGZvciB0aGUgY3VycmVudCB1c2VyLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNlbmRFbWFpbFZlcmlmaWNhdGlvbigpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVHJpZ2dlcnMgdGhlIEZpcmViYXNlIEF1dGhlbnRpY2F0aW9uIGJhY2tlbmQgdG8gc2VuZCBhIHBhc3N3b3JkLXJlc2V0IGVtYWlsIHRvIHRoZSBnaXZlbiBlbWFpbCBhZGRyZXNzLFxyXG4gICAqIHdoaWNoIG11c3QgY29ycmVzcG9uZCB0byBhbiBleGlzdGluZyB1c2VyIG9mIHlvdXIgYXBwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGVtYWlsIEVtYWlsXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2VuZFBhc3N3b3JkUmVzZXRFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFzeW5jaHJvbm91c2x5IHNpZ25zIGluIHVzaW5nIGFuIGVtYWlsIGFuZCBwYXNzd29yZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBlbWFpbCBFbWFpbFxyXG4gICAqIEBwYXJhbSBwYXNzd29yZCBQYXNzd29yZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSBwaG9uZSBudW1iZXIgdmVyaWZpY2F0aW9uIHByb2Nlc3MgZm9yIHRoZSBnaXZlbiBwaG9uZSBudW1iZXIuXHJcbiAgICogTk9URTogQW5kcm9pZCBzdXBwb3J0cyBhdXRvLXZlcmlmeSBhbmQgaW5zdGFudCBkZXZpY2UgdmVyaWZpY2F0aW9uLlxyXG4gICAqIFRoZXJlZm9yZSBpbiB0aGF0IGNhc2VzIGl0IGRvZXNuJ3QgbWFrZSBzZW5zZSB0byBhc2sgZm9yIHNtcyBjb2RlLlxyXG4gICAqIEl0J3MgcmVjb21tZW5kZWQgdG8gcmVnaXN0ZXIgb25BdXRoU3RhdGVDaGFuZ2VkIGNhbGxiYWNrIHRvIGJlIG5vdGlmaWVkIG9uIGF1dG8gc2lnbi1pbi5cclxuICAgKiB0aW1lb3V0IFttaWxsaXNlY29uZHNdIGlzIHRoZSBtYXhpbXVtIGFtb3VudCBvZiB0aW1lIHlvdSBhcmUgd2lsbGluZyB0byB3YWl0IGZvciBTTVMgYXV0by1yZXRyaWV2YWxcclxuICAgKiB0byBiZSBjb21wbGV0ZWQgYnkgdGhlIGxpYnJhcnkuIE1heGltdW0gYWxsb3dlZCB2YWx1ZSBpcyAyIG1pbnV0ZXMuIFVzZSAwIHRvIGRpc2FibGUgU01TLWF1dG8tcmV0cmlldmFsLlxyXG4gICAqIElmIHlvdSBzcGVjaWZ5IGEgcG9zaXRpdmUgdmFsdWUgbGVzcyB0aGFuIDMwIHNlY29uZHMsIGxpYnJhcnkgd2lsbCBkZWZhdWx0IHRvIDMwIHNlY29uZHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGhvbmVOdW1iZXIgUGhvbmUgbnVtYmVyXHJcbiAgICogQHBhcmFtIHRpbWVvdXQge251bWJlcn0gVGltZW91dFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHZlcmlmeVBob25lTnVtYmVyKHBob25lTnVtYmVyOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3luY2hyb25vdXNseSBzaWducyBpbiB1c2luZyB2ZXJpZmljYXRpb25JZCBhbmQgNi1kaWdpdCBTTVMgY29kZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB2ZXJpZmljYXRpb25JZCBWZXJpZmljYXRpb24gSURcclxuICAgKiBAcGFyYW0gc21zQ29kZSBTTVMgY29kZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNpZ25JbldpdGhWZXJpZmljYXRpb25JZCh2ZXJpZmljYXRpb25JZDogc3RyaW5nLCBzbXNDb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGFuZCB1c2UgdGVtcG9yYXJ5IGFub255bW91cyBhY2NvdW50IHRvIGF1dGhlbnRpY2F0ZSB3aXRoIEZpcmViYXNlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNpZ25JbkFub255bW91c2x5KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VzIEdvb2dsZSdzIGlkVG9rZW4gYW5kIGFjY2Vzc1Rva2VuIHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TXHJcbiAgICpcclxuICAgKiBAcGFyYW0gaWRUb2tlbiBJRCBUb2tlblxyXG4gICAqIEBwYXJhbSBhY2Nlc3NUb2tlbiBBY2Nlc3MgVG9rZW5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzaWduSW5XaXRoR29vZ2xlKGlkVG9rZW46IHN0cmluZywgYWNjZXNzVG9rZW46IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVc2VzIEFwcGxlcydzIGlkVG9rZW4gYW5kIHJhd05vbmNlIChvcHRpb25hbCkgdG8gc2lnbi1pbiBpbnRvIGZpcmViYXNlIGFjY291bnQuIEluIG9yZGVyIHRvIHJldHJpZXZlIHRob3NlIHRva2VucyBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGZvciBBbmRyb2lkIGFuZCBpT1NcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpZFRva2VuIElEIFRva2VuXHJcbiAgICogQHBhcmFtIGlkZW50aXR5VG9rZW5cclxuICAgKiBAcGFyYW0gcmF3Tm9uY2UgQWNjZXNzIFRva2VuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlIH0pXHJcbiAgc2lnbkluV2l0aEFwcGxlKGlkZW50aXR5VG9rZW46IHN0cmluZywgcmF3Tm9uY2U/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVXNlcyBGYWNlYm9vaydzIGFjY2Vzc1Rva2VuIHRvIHNpZ24taW4gaW50byBmaXJlYmFzZSBhY2NvdW50LiBJbiBvcmRlciB0byByZXRyaWV2ZSB0aG9zZSB0b2tlbnMgZm9sbG93IGluc3RydWN0aW9ucyBmb3IgQW5kcm9pZCBhbmQgaU9TLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGFjY2Vzc1Rva2VuIEFjY2VzcyBUb2tlblxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNpZ25JbldpdGhGYWNlYm9vayhhY2Nlc3NUb2tlbjogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZXMgVHdpdHRlcidzIHRva2VuIGFuZCBzZWNyZXQgdG8gc2lnbi1pbiBpbnRvIGZpcmViYXNlIGFjY291bnQuIEluIG9yZGVyIHRvIHJldHJpZXZlIHRob3NlIHRva2VucyBmb2xsb3cgaW5zdHJ1Y3Rpb25zIGZvciBBbmRyb2lkIGFuZCBpT1MuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdG9rZW4gVG9rZW5cclxuICAgKiBAcGFyYW0gc2VjcmV0IFNlY3JldFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNpZ25JbldpdGhUd2l0dGVyKHRva2VuOiBzdHJpbmcsIHNlY3JldDogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlZ2lzdGVycyBhIGJsb2NrIGFzIGFuIGF1dGggc3RhdGUgZGlkIGNoYW5nZSBsaXN0ZW5lci4gVG8gYmUgaW52b2tlZCB3aGVuOlxyXG4gICAqICAgIC0gVGhlIGJsb2NrIGlzIHJlZ2lzdGVyZWQgYXMgYSBsaXN0ZW5lcixcclxuICAgKiAgICAtIEEgdXNlciB3aXRoIGEgZGlmZmVyZW50IFVJRCBmcm9tIHRoZSBjdXJyZW50IHVzZXIgaGFzIHNpZ25lZCBpbiwgb3JcclxuICAgKiAgICAtIFRoZSBjdXJyZW50IHVzZXIgaGFzIHNpZ25lZCBvdXQuXHJcbiAgICovXHJcbiAgQENvcmRvdmEoeyBvYnNlcnZhYmxlOiB0cnVlLCBjYWxsYmFja09yZGVyOiAncmV2ZXJzZScgfSlcclxuICBvbkF1dGhTdGF0ZUNoYW5nZWQoKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCdzIHRoZSBjdXJyZW50IHVzZXIgbGFuZ3VhZ2UgY29kZS4gVGhlIHN0cmluZyB1c2VkIHRvIHNldCB0aGlzIHByb3BlcnR5IG11c3QgYmUgYSBsYW5ndWFnZSBjb2RlIHRoYXQgZm9sbG93cyBCQ1AgNDcuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gbGFuZ3VhZ2VDb2RlIExhbmd1YWdlIENvZGVcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBzZXRMYW5ndWFnZUNvZGUobGFuZ3VhZ2VDb2RlOiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0cyBsYW5ndWFnZUNvZGUgdG8gdGhlIGFwcOKAmXMgY3VycmVudCBsYW5ndWFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICB1c2VBcHBMYW5ndWFnZSgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2lnbnMgb3V0IHRoZSBjdXJyZW50IHVzZXIgYW5kIGNsZWFycyBpdCBmcm9tIHRoZSBkaXNrIGNhY2hlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxyXG4gIHNpZ25PdXQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19