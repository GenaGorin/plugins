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
var ZeroconfOriginal = /** @class */ (function (_super) {
    __extends(ZeroconfOriginal, _super);
    function ZeroconfOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZeroconfOriginal.prototype.getHostname = function () { return cordova(this, "getHostname", {}, arguments); };
    ZeroconfOriginal.prototype.register = function (type, domain, name, port, txtRecord) { return cordova(this, "register", {}, arguments); };
    ZeroconfOriginal.prototype.unregister = function (type, domain, name) { return cordova(this, "unregister", {}, arguments); };
    ZeroconfOriginal.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    ZeroconfOriginal.prototype.watch = function (type, domain) { return cordova(this, "watch", { "observable": true, "clearFunction": "unwatch", "clearWithArgs": true }, arguments); };
    ZeroconfOriginal.prototype.unwatch = function (type, domain) { return cordova(this, "unwatch", {}, arguments); };
    ZeroconfOriginal.prototype.close = function () { return cordova(this, "close", {}, arguments); };
    ZeroconfOriginal.prototype.reInit = function () { return cordova(this, "reInit", {}, arguments); };
    ZeroconfOriginal.pluginName = "Zeroconf";
    ZeroconfOriginal.plugin = "cordova-plugin-zeroconf";
    ZeroconfOriginal.pluginRef = "cordova.plugins.zeroconf";
    ZeroconfOriginal.repo = "https://github.com/becvert/cordova-plugin-zeroconf";
    ZeroconfOriginal.platforms = ["Android", "iOS"];
    return ZeroconfOriginal;
}(AwesomeCordovaNativePlugin));
var Zeroconf = new ZeroconfOriginal();
export { Zeroconf };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvemVyb2NvbmYvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyREosNEJBQTBCOzs7O0lBT3RELDhCQUFXO0lBZVgsMkJBQVEsYUFBQyxJQUFZLEVBQUUsTUFBYyxFQUFFLElBQVksRUFBRSxJQUFZLEVBQUUsU0FBYztJQWFqRiw2QkFBVSxhQUFDLElBQVksRUFBRSxNQUFjLEVBQUUsSUFBWTtJQVVyRCx1QkFBSTtJQWdCSix3QkFBSyxhQUFDLElBQVksRUFBRSxNQUFjO0lBWWxDLDBCQUFPLGFBQUMsSUFBWSxFQUFFLE1BQWM7SUFVcEMsd0JBQUs7SUFVTCx5QkFBTTs7Ozs7O21CQTFKUjtFQTZEOEIsMEJBQTBCO1NBQTNDLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgWmVyb2NvbmZTZXJ2aWNlIHtcclxuICBkb21haW46IHN0cmluZztcclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHBvcnQ6IG51bWJlcjtcclxuICBob3N0bmFtZTogc3RyaW5nO1xyXG4gIGlwdjRBZGRyZXNzZXM6IHN0cmluZ1tdO1xyXG4gIGlwdjZBZGRyZXNzZXM6IHN0cmluZ1tdO1xyXG4gIHR4dFJlY29yZDogYW55O1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFplcm9jb25mUmVzdWx0IHtcclxuICBhY3Rpb246ICdyZWdpc3RlcmVkJyB8ICdhZGRlZCcgfCAncmVtb3ZlZCcgfCAncmVzb2x2ZWQnO1xyXG4gIHNlcnZpY2U6IFplcm9jb25mU2VydmljZTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIFplcm9jb25mXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIGJyb3dzZSBhbmQgcHVibGlzaCBaZXJvY29uZi9Cb25qb3VyL21ETlMgc2VydmljZXMuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IFplcm9jb25mIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3plcm9jb25mL25neCc7XHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgemVyb2NvbmY6IFplcm9jb25mKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIC8vIHdhdGNoIGZvciBzZXJ2aWNlcyBvZiBhIHNwZWNpZmllZCB0eXBlXHJcbiAqIHRoaXMuemVyb2NvbmYud2F0Y2goJ19odHRwLl90Y3AuJywgJ2xvY2FsLicpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gKiAgIGlmIChyZXN1bHQuYWN0aW9uID09ICdhZGRlZCcpIHtcclxuICogICAgIGNvbnNvbGUubG9nKCdzZXJ2aWNlIGFkZGVkJywgcmVzdWx0LnNlcnZpY2UpO1xyXG4gKiAgIH0gZWxzZSB7XHJcbiAqICAgICBjb25zb2xlLmxvZygnc2VydmljZSByZW1vdmVkJywgcmVzdWx0LnNlcnZpY2UpO1xyXG4gKiAgIH1cclxuICogfSk7XHJcbiAqXHJcbiAqIC8vIHB1Ymxpc2ggYSB6ZXJvY29uZiBzZXJ2aWNlIG9mIHlvdXIgb3duXHJcbiAqIHRoaXMuemVyb2NvbmYucmVnaXN0ZXIoJ19odHRwLl90Y3AuJywgJ2xvY2FsLicsICdCZWN2ZXJ0XFwncyBpUGFkJywgODAsIHtcclxuICogICAnZm9vJzogJ2JhcidcclxuICogfSkudGhlbihyZXN1bHQgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKCdTZXJ2aWNlIHJlZ2lzdGVyZWQnLCByZXN1bHQuc2VydmljZSk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKlxyXG4gKiAvLyB1bnJlZ2lzdGVyIHlvdXIgc2VydmljZVxyXG4gKiB0aGlzLnplcm9jb25mLnVucmVnaXN0ZXIoJ19odHRwLl90Y3AuJywgJ2xvY2FsLicsICdCZWN2ZXJ0XFwncyBpUGFkJyk7XHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ1plcm9jb25mJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi16ZXJvY29uZicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLnplcm9jb25mJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2JlY3ZlcnQvY29yZG92YS1wbHVnaW4temVyb2NvbmYnLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBaZXJvY29uZiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBSZXR1cm5zIHRoaXMgZGV2aWNlJ3MgaG9zdG5hbWUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRIb3N0bmFtZSgpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHVibGlzaGVzIGEgbmV3IHNlcnZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfSBTZXJ2aWNlIHR5cGUgbmFtZSwgZS5nLiBcIl9odHRwLl90Y3BcIi5cclxuICAgKiBAcGFyYW0gZG9tYWluIHtzdHJpbmd9IERvbWFpbiBzY29wZSBvZiB0aGUgc2VydmljZSwgdHlwaWNhbGx5IFwibG9jYWwuXCIuXHJcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVW5xdWFsaWZpZWQgc2VydmljZSBpbnN0YW5jZSBuYW1lLlxyXG4gICAqIEBwYXJhbSBwb3J0IHtudW1iZXJ9IExvY2FsIHBvcnQgb24gd2hpY2ggdGhlIHNlcnZpY2UgcnVucy5cclxuICAgKiBAcGFyYW0gdHh0UmVjb3JkIHthbnl9IEFyYml0cmFyeSBrZXkvdmFsdWUgcGFpcnMgZGVzY3JpYmluZyB0aGUgc2VydmljZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxaZXJvY29uZlJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVnaXN0ZXJlZCBzZXJ2aWNlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICByZWdpc3Rlcih0eXBlOiBzdHJpbmcsIGRvbWFpbjogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIHBvcnQ6IG51bWJlciwgdHh0UmVjb3JkOiBhbnkpOiBQcm9taXNlPFplcm9jb25mUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBVbnJlZ2lzdGVycyBhIHNlcnZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfSBTZXJ2aWNlIHR5cGUgbmFtZSwgZS5nLiBcIl9odHRwLl90Y3BcIi5cclxuICAgKiBAcGFyYW0gZG9tYWluIHtzdHJpbmd9IERvbWFpbiBzY29wZSBvZiB0aGUgc2VydmljZSwgdHlwaWNhbGx5IFwibG9jYWwuXCIuXHJcbiAgICogQHBhcmFtIG5hbWUge3N0cmluZ30gVW5xdWFsaWZpZWQgc2VydmljZSBpbnN0YW5jZSBuYW1lLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bnJlZ2lzdGVyKHR5cGU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVW5yZWdpc3RlcnMgYWxsIHB1Ymxpc2hlZCBzZXJ2aWNlcy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wKCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnRzIHdhdGNoaW5nIGZvciBzZXJ2aWNlcyBvZiB0aGUgc3BlY2lmaWVkIHR5cGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdHlwZSB7c3RyaW5nfSBTZXJ2aWNlIHR5cGUgbmFtZSwgZS5nLiBcIl9odHRwLl90Y3BcIi5cclxuICAgKiBAcGFyYW0gZG9tYWluIHtzdHJpbmd9IERvbWFpbiBzY29wZSBvZiB0aGUgc2VydmljZSwgdHlwaWNhbGx5IFwibG9jYWwuXCIuXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8WmVyb2NvbmZSZXN1bHQ+fSBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBub3RpZmllcyBvZiBlYWNoIHNlcnZpY2UgYWRkZWQgb3IgcmVtb3ZlZC5cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3Vud2F0Y2gnLFxyXG4gICAgY2xlYXJXaXRoQXJnczogdHJ1ZSxcclxuICB9KVxyXG4gIHdhdGNoKHR5cGU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFplcm9jb25mUmVzdWx0PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wcyB3YXRjaGluZyBmb3Igc2VydmljZXMgb2YgdGhlIHNwZWNpZmllZCB0eXBlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHR5cGUge3N0cmluZ30gU2VydmljZSB0eXBlIG5hbWUsIGUuZy4gXCJfaHR0cC5fdGNwXCIuXHJcbiAgICogQHBhcmFtIGRvbWFpbiB7c3RyaW5nfSBEb21haW4gc2NvcGUgb2YgdGhlIHNlcnZpY2UsIHR5cGljYWxseSBcImxvY2FsLlwiLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1bndhdGNoKHR5cGU6IHN0cmluZywgZG9tYWluOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlcyB0aGUgc2VydmljZSBicm93c2VyIGFuZCBzdG9wcyB3YXRjaGluZy5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBjbG9zZSgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlLWluaXRpYWxpemVzIHRoZSBwbHVnaW4gdG8gY2xlYW4gc2VydmljZSAmIGJyb3dzZXIgc3RhdGUuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTx2b2lkPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgcmVJbml0KCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuICAvKipcclxuICAgKiBGYW1pbHkgb2YgYWRkcmVzc2VzIHRvIHJlZ2lzdGVyOiBpcHY0LCBpcHY2IG9yIGFueS5cclxuICAgKi9cclxuICByZWdpc3RlckFkZHJlc3NGYW1pbHk6ICdpcHY0JyB8ICdpcHY2JyB8ICdhbnknO1xyXG4gIC8qKlxyXG4gICAqIEZhbWlseSBvZiBhZGRyZXNzZXMgdG8gd2F0Y2ggZm9yOiBpcHY0LCBpcHY2IG9yIGFueS5cclxuICAgKi9cclxuICB3YXRjaEFkZHJlc3NGYW1pbHk6ICdpcHY0JyB8ICdpcHY2JyB8ICdhbnknO1xyXG59XHJcbiJdfQ==