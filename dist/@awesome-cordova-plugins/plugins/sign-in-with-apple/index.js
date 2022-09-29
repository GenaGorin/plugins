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
var ASAuthorizationAppleIDRequest = /** @class */ (function () {
    function ASAuthorizationAppleIDRequest() {
    }
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeFullName = 0;
    ASAuthorizationAppleIDRequest.ASAuthorizationScopeEmail = 1;
    return ASAuthorizationAppleIDRequest;
}());
export { ASAuthorizationAppleIDRequest };
var SignInWithAppleOriginal = /** @class */ (function (_super) {
    __extends(SignInWithAppleOriginal, _super);
    function SignInWithAppleOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SignInWithAppleOriginal.prototype.signin = function (options) {
        if (options === void 0) { options = {}; }
        return cordova(this, "signin", {}, arguments);
    };
    SignInWithAppleOriginal.pluginName = "Sign in with Apple";
    SignInWithAppleOriginal.plugin = "cordova-plugin-sign-in-with-apple";
    SignInWithAppleOriginal.pluginRef = "cordova.plugins.SignInWithApple";
    SignInWithAppleOriginal.repo = "https://github.com/twogate/cordova-plugin-sign-in-with-apple";
    SignInWithAppleOriginal.platforms = ["iOS"];
    return SignInWithAppleOriginal;
}(AwesomeCordovaNativePlugin));
var SignInWithApple = new SignInWithAppleOriginal();
export { SignInWithApple };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2lnbi1pbi13aXRoLWFwcGxlL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDOzs7O0lBTTFFLDBEQUE0QixHQUFHLENBQUMsQ0FBQztJQUNqQyx1REFBeUIsR0FBRyxDQUFDLENBQUM7d0NBUmhEOztTQU1hLDZCQUE2Qjs7SUE0SkwsbUNBQTBCOzs7O0lBVTdELGdDQUFNLGFBQUMsT0FBMkM7UUFBM0Msd0JBQUEsRUFBQSxZQUEyQzs7Ozs7Ozs7MEJBNUtwRDtFQWtLcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9hdXRoZW50aWNhdGlvbnNlcnZpY2VzL2FzYXV0aG9yaXphdGlvbmFwcGxlaWRyZXF1ZXN0XHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgQVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3Qge1xyXG4gIHN0YXRpYyByZWFkb25seSBBU0F1dGhvcml6YXRpb25TY29wZUZ1bGxOYW1lID0gMDtcclxuICBzdGF0aWMgcmVhZG9ubHkgQVNBdXRob3JpemF0aW9uU2NvcGVFbWFpbCA9IDE7XHJcblxyXG4gIHJlcXVlc3RlZFNjb3Blcz86IG51bWJlcltdO1xyXG59XHJcblxyXG4vKipcclxuICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9mb3VuZGF0aW9uL25zcGVyc29ubmFtZWNvbXBvbmVudHMvMTQxMjE5My1waG9uZXRpY3JlcHJlc2VudGF0aW9uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIE5TUGVyc29uTmFtZUNvbXBvbmVudHMge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBwb3J0aW9uIG9mIGEgbmFtZeKAmXMgZnVsbCBmb3JtIG9mIGFkZHJlc3MgdGhhdCBwcmVjZWRlcyB0aGUgbmFtZSBpdHNlbGYgKGZvciBleGFtcGxlLCBcIkRyLixcIiBcIk1yLixcIiBcIk1zLlwiKVxyXG4gICAqL1xyXG4gIG5hbWVQcmVmaXg/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE5hbWUgYmVzdG93ZWQgdXBvbiBhbiBpbmRpdmlkdWFsIHRvIGRpZmZlcmVudGlhdGUgdGhlbSBmcm9tIG90aGVyIG1lbWJlcnMgb2YgYSBncm91cCB0aGF0IHNoYXJlIGEgZmFtaWx5IG5hbWUgKGZvciBleGFtcGxlLCBcIkpvaG5hdGhhblwiKVxyXG4gICAqL1xyXG4gIGdpdmVuTmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogU2Vjb25kYXJ5IG5hbWUgYmVzdG93ZWQgdXBvbiBhbiBpbmRpdmlkdWFsIHRvIGRpZmZlcmVudGlhdGUgdGhlbSBmcm9tIG90aGVycyB0aGF0IGhhdmUgdGhlIHNhbWUgZ2l2ZW4gbmFtZSAoZm9yIGV4YW1wbGUsIFwiTWFwbGVcIilcclxuICAgKi9cclxuICBtaWRkbGVOYW1lPzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBOYW1lIGJlc3Rvd2VkIHVwb24gYW4gaW5kaXZpZHVhbCB0byBkZW5vdGUgbWVtYmVyc2hpcCBpbiBhIGdyb3VwIG9yIGZhbWlseS4gKGZvciBleGFtcGxlLCBcIkFwcGxlc2VlZFwiKVxyXG4gICAqL1xyXG4gIGZhbWlseU5hbWU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBwb3J0aW9uIG9mIGEgbmFtZeKAmXMgZnVsbCBmb3JtIG9mIGFkZHJlc3MgdGhhdCBmb2xsb3dzIHRoZSBuYW1lIGl0c2VsZiAoZm9yIGV4YW1wbGUsIFwiRXNxLixcIiBcIkpyLixcIiBcIlBoLkQuXCIpXHJcbiAgICovXHJcbiAgbmFtZVN1ZmZpeD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogTmFtZSBzdWJzdGl0dXRlZCBmb3IgdGhlIHB1cnBvc2VzIG9mIGZhbWlsaWFyaXR5IChmb3IgZXhhbXBsZSwgXCJKb2hubnlcIilcclxuICAgKi9cclxuICBuaWNrbmFtZT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIHBob25ldGljIHJlcHJlc2VudGF0aW9uIG5hbWUgY29tcG9uZW50cyBvZiB0aGUgcmVjZWl2ZXJcclxuICAgKi9cclxuICBwaG9uZXRpY1JlcHJlc2VudGF0aW9uPzogTlNQZXJzb25OYW1lQ29tcG9uZW50cztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vYXV0aGVudGljYXRpb25zZXJ2aWNlcy9hc2F1dGhvcml6YXRpb25hcHBsZWlkY3JlZGVudGlhbFxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBBcHBsZVNpZ25JblJlc3BvbnNlIHtcclxuICAvKipcclxuICAgKiBUaGUgdXNlcuKAmXMgZW1haWwgYWRkcmVzcyBpLmUuIGFiY0Bwcml2YXRlcmVsYXkuYXBwbGVpZC5jb21cclxuICAgKi9cclxuICBlbWFpbD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gYXJiaXRyYXJ5IHN0cmluZyB0aGF0IHlvdXIgYXBwIHByb3ZpZGVkIHRvIHRoZSByZXF1ZXN0IHRoYXQgZ2VuZXJhdGVkIHRoZSBjcmVkZW50aWFsXHJcbiAgICovXHJcbiAgc3RhdGU/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgSlNPTiBXZWIgVG9rZW4gKEpXVCkgdGhhdCBzZWN1cmVseSBjb21tdW5pY2F0ZXMgaW5mb3JtYXRpb24gYWJvdXQgdGhlIHVzZXIgdG8geW91ciBhcHBcclxuICAgKi9cclxuICBpZGVudGl0eVRva2VuOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc2hvcnQtbGl2ZWQgdG9rZW4gdXNlZCBieSB5b3VyIGFwcCBmb3IgcHJvb2Ygb2YgYXV0aG9yaXphdGlvbiB3aGVuIGludGVyYWN0aW5nIHdpdGggdGhlIGFwcCdzIHNlcnZlciBjb3VudGVycGFydFxyXG4gICAqL1xyXG4gIGF1dGhvcml6YXRpb25Db2RlOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSB1c2VyJ3MgbmFtZVxyXG4gICAqXHJcbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vZG9jdW1lbnRhdGlvbi9mb3VuZGF0aW9uL25zcGVyc29ubmFtZWNvbXBvbmVudHM/bGFuZ3VhZ2U9b2JqY1xyXG4gICAqL1xyXG4gIGZ1bGxOYW1lPzogTlNQZXJzb25OYW1lQ29tcG9uZW50cztcclxuXHJcbiAgLyoqXHJcbiAgICogQW4gaWRlbnRpZmllciBhc3NvY2lhdGVkIHdpdGggdGhlIGF1dGhlbnRpY2F0ZWQgdXNlclxyXG4gICAqL1xyXG4gIHVzZXI/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2ZvdW5kYXRpb24vbnNlcnJvclxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBOU0Vycm9yIHtcclxuICAvKipcclxuICAgKiBUaGUgZXJyb3IgY29kZVxyXG4gICAqL1xyXG4gIGNvZGU/OiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIEEgc3RyaW5nIGNvbnRhaW5pbmcgdGhlIGxvY2FsaXplZCBkZXNjcmlwdGlvbiBvZiB0aGUgZXJyb3JcclxuICAgKi9cclxuICBsb2NhbGl6ZWREZXNjcmlwdGlvbj86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQSBzdHJpbmcgY29udGFpbmluZyB0aGUgbG9jYWxpemVkIGV4cGxhbmF0aW9uIG9mIHRoZSByZWFzb24gZm9yIHRoZSBlcnJvclxyXG4gICAqL1xyXG4gIGxvY2FsaXplZEZhaWx1cmVSZWFzb24/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXBwbGVTaWduSW5FcnJvclJlc3BvbnNlIGV4dGVuZHMgTlNFcnJvciB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVycm9yIGkuZS4gXCJBU0FVVEhPUklaQVRJT05fRVJST1JcIlxyXG4gICAqL1xyXG4gIGVycm9yPzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgU2lnbiBJbiBXaXRoIEFwcGxlXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBTaWduIGluIHdpdGggQXBwbGUgbWFrZXMgaXQgZWFzeSBmb3IgdXNlcnMgdG8gc2lnbiBpbiB0byB5b3VyIGFwcHMgYW5kIHdlYnNpdGVzIHVzaW5nIHRoZWlyIEFwcGxlIElELlxyXG4gKiBJbnN0ZWFkIG9mIGZpbGxpbmcgb3V0IGZvcm1zLCB2ZXJpZnlpbmcgZW1haWwgYWRkcmVzc2VzLCBhbmQgY2hvb3NpbmcgbmV3IHBhc3N3b3JkcyxcclxuICogdGhleSBjYW4gdXNlIFNpZ24gaW4gd2l0aCBBcHBsZSB0byBzZXQgdXAgYW4gYWNjb3VudCBhbmQgc3RhcnQgdXNpbmcgeW91ciBhcHAgcmlnaHQgYXdheS5cclxuICogQWxsIGFjY291bnRzIGFyZSBwcm90ZWN0ZWQgd2l0aCB0d28tZmFjdG9yIGF1dGhlbnRpY2F0aW9uIGZvciBzdXBlcmlvciBzZWN1cml0eSxcclxuICogYW5kIEFwcGxlIHdpbGwgbm90IHRyYWNrIHVzZXJz4oCZIGFjdGl2aXR5IGluIHlvdXIgYXBwIG9yIHdlYnNpdGUuXHJcbiAqIFNvdXJjZToqIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9zaWduLWluLXdpdGgtYXBwbGUvXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFNpZ25JbldpdGhBcHBsZSwgQXBwbGVTaWduSW5SZXNwb25zZSwgQXBwbGVTaWduSW5FcnJvclJlc3BvbnNlLCBBU0F1dGhvcml6YXRpb25BcHBsZUlEUmVxdWVzdCB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zaWduLWluLXdpdGgtYXBwbGUvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzaWduSW5XaXRoQXBwbGU6IFNpZ25JbldpdGhBcHBsZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKlxyXG4gKiAgIHRoaXMuc2lnbkluV2l0aEFwcGxlLnNpZ25pbih7XHJcbiAqICAgICByZXF1ZXN0ZWRTY29wZXM6IFtcclxuICogICAgICAgQVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3QuQVNBdXRob3JpemF0aW9uU2NvcGVGdWxsTmFtZSxcclxuICogICAgICAgQVNBdXRob3JpemF0aW9uQXBwbGVJRFJlcXVlc3QuQVNBdXRob3JpemF0aW9uU2NvcGVFbWFpbFxyXG4gKiAgICAgXVxyXG4gKiAgIH0pXHJcbiAqICAgLnRoZW4oKHJlczogQXBwbGVTaWduSW5SZXNwb25zZSkgPT4ge1xyXG4gKiAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vc2lnbmlud2l0aGFwcGxlcmVzdGFwaS92ZXJpZnlpbmdfYV91c2VyXHJcbiAqICAgICBhbGVydCgnU2VuZCB0b2tlbiB0byBhcHBsZSBmb3IgdmVyaWZpY2F0aW9uOiAnICsgcmVzLmlkZW50aXR5VG9rZW4pO1xyXG4gKiAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaCgoZXJyb3I6IEFwcGxlU2lnbkluRXJyb3JSZXNwb25zZSkgPT4ge1xyXG4gKiAgICAgYWxlcnQoZXJyb3IuY29kZSArICcgJyArIGVycm9yLmxvY2FsaXplZERlc2NyaXB0aW9uKTtcclxuICogICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gKiAgIH0pO1xyXG4gKlxyXG4gKiBgYGBcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdTaWduIGluIHdpdGggQXBwbGUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNpZ24taW4td2l0aC1hcHBsZScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLlNpZ25JbldpdGhBcHBsZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90d29nYXRlL2NvcmRvdmEtcGx1Z2luLXNpZ24taW4td2l0aC1hcHBsZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaWduSW5XaXRoQXBwbGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHRoZSBhdXRob3JpemF0aW9uIGZsb3dzIG5hbWVkIGR1cmluZyBjb250cm9sbGVyIGluaXRpYWxpemF0aW9uXHJcbiAgICpcclxuICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLmFwcGxlLmNvbS9kb2N1bWVudGF0aW9uL2F1dGhlbnRpY2F0aW9uc2VydmljZXMvYXNhdXRob3JpemF0aW9uY29udHJvbGxlci8zMTUzMDQ3LXBlcmZvcm1yZXF1ZXN0c1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFwcGxlU2lnbkluUmVzcG9uc2U+fSBSZXR1cm5zIGEgcHJvbWlzZSB3aGVuIGF1dGhvcml6YXRpb24gc3VjY2VlZHNcclxuICAgKiBAcGFyYW0ge0FTQXV0aG9yaXphdGlvbkFwcGxlSURSZXF1ZXN0fSBvcHRpb25zXHJcbiAgICogQHRocm93cyBBcHBsZVNpZ25JbkVycm9yUmVzcG9uc2VcclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc2lnbmluKG9wdGlvbnM6IEFTQXV0aG9yaXphdGlvbkFwcGxlSURSZXF1ZXN0ID0ge30pOiBQcm9taXNlPEFwcGxlU2lnbkluUmVzcG9uc2U+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19