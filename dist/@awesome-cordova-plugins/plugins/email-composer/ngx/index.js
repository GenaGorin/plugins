import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, checkAvailability, cordova, getPromise } from '@awesome-cordova-plugins/core';
var EmailComposer = /** @class */ (function (_super) {
    __extends(EmailComposer, _super);
    function EmailComposer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposer.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposer.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposer.getPlugin().hasAccount(function (result) {
                        if (result) {
                            resolve(true);
                        }
                        else {
                            resolve(false);
                        }
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposer.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposer.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposer.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposer.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.isAvailable = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    Promise.all([_this.hasAccount, _this.hasClient(app)]).then(function (results) {
                        return resolve(results.length === 2 && results[0] && results[1]);
                    });
                });
            }
        })();
    };
    EmailComposer.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposer.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposer.pluginName = "EmailComposer";
    EmailComposer.plugin = "cordova-plugin-email-composer";
    EmailComposer.pluginRef = "cordova.plugins.email";
    EmailComposer.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    EmailComposer.decorators = [
        { type: Injectable }
    ];
    return EmailComposer;
}(AwesomeCordovaNativePlugin));
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sMERBQTZELFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWlJbkYsaUNBQTBCOzs7O0lBVTNELHFDQUFhO0lBYWIseUNBQWlCO0lBVWpCLGtDQUFVOzs7bURBQWlCO2dCQUN6QixPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxNQUFlO3dCQUNuRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNoQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFVRCxpQ0FBUyxhQUFDLEdBQVk7OzttREFBZ0I7Z0JBQ3BDLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBQyxNQUFlOzRCQUN2RCxJQUFJLE1BQU0sRUFBRTtnQ0FDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2Y7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNoQjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBYzs0QkFDbEQsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxrQ0FBVTs7O21EQUFzQjtnQkFDOUIsT0FBTyxVQUFVLENBQVcsVUFBQyxPQUFPO29CQUNsQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBUzt3QkFDN0MsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLEVBQUU7NEJBQzlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBU0QsbUNBQVcsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87d0JBQy9ELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBYUQsNEJBQUksYUFBQyxPQUE2QixFQUFFLEtBQVc7SUFXL0MsZ0NBQVEsYUFBQyxLQUFhLEVBQUUsV0FBbUI7Ozs7Ozs7Z0JBL0g1QyxVQUFVOzt3QkFqSVg7RUFrSW1DLDBCQUEwQjtTQUFoRCxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhQ2hlY2ssIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4sIGdldFByb21pc2UgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVtYWlsQ29tcG9zZXJPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBBcHAgdG8gc2VuZCB0aGUgZW1haWwgd2l0aFxyXG4gICAqL1xyXG4gIGFwcD86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIFRvIGZpZWxkXHJcbiAgICovXHJcbiAgdG8/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIENDIGZpZWxkXHJcbiAgICovXHJcbiAgY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRW1haWwgYWRkcmVzcyhlcykgZm9yIEJDQyBmaWVsZFxyXG4gICAqL1xyXG4gIGJjYz86IHN0cmluZyB8IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBGaWxlIHBhdGhzIG9yIGJhc2U2NCBkYXRhIHN0cmVhbXNcclxuICAgKi9cclxuICBhdHRhY2htZW50cz86IHN0cmluZ1tdO1xyXG5cclxuICAvKipcclxuICAgKiBTdWJqZWN0IG9mIHRoZSBlbWFpbFxyXG4gICAqL1xyXG4gIHN1YmplY3Q/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtYWlsIGJvZHkgKGZvciBIVE1MLCBzZXQgaXNIdG1sIHRvIHRydWUpXHJcbiAgICovXHJcbiAgYm9keT86IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogSW5kaWNhdGVzIGlmIHRoZSBib2R5IGlzIEhUTUwgb3IgcGxhaW4gdGV4dFxyXG4gICAqL1xyXG4gIGlzSHRtbD86IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqICBDb250ZW50IHR5cGUgb2YgdGhlIGVtYWlsIChBbmRyb2lkIG9ubHkpXHJcbiAgICovXHJcbiAgdHlwZT86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIEVtYWlsIENvbXBvc2VyXHJcbiAqIEBwcmVtaWVyIGVtYWlsLWNvbXBvc2VyXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKlxyXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXIuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtFbWFpbCBDb21wb3NlciBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2h5cGVyeTJrL2NvcmRvdmEtZW1haWwtcGx1Z2luKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgRW1haWxDb21wb3NlciB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9lbWFpbC1jb21wb3Nlci9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGVtYWlsQ29tcG9zZXI6IEVtYWlsQ29tcG9zZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmdldENsaWVudHMoKS50aGVuKChhcHBzOiBbXSkgPT4ge1xyXG4gKiAgICAvLyBSZXR1cm5zIGFuIGFycmF5IG9mIGNvbmZpZ3VyZWQgZW1haWwgY2xpZW50cyBmb3IgdGhlIGRldmljZVxyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmhhc0NsaWVudChhcHApLnRoZW4oKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcclxuICogIGlmIChpc1ZhbGlkKSB7XHJcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGhhdmUgYSB2YWxpZCBlbWFpbCBjbGllbnQgY29uZmlndXJlZFxyXG4gKiAgICAvLyBOb3Qgc3BlY2lmeWluZyBhbiBhcHAgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZW1haWwgY2xpZW50IGlzIGNvbmZpZ3VyZWRcclxuICogIH1cclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNBY2NvdW50KCkudGhlbigoaXNWYWxpZDogYm9vbGVhbikgPT4ge1xyXG4gKiAgaWYgKGlzVmFsaWQpIHtcclxuICogICAgLy8gTm93IHdlIGtub3cgd2UgaGF2ZSBhIHZhbGlkIGVtYWlsIGFjY291bnQgY29uZmlndXJlZFxyXG4gKiAgfVxyXG4gKiB9KTtcclxuICpcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLmlzQXZhaWxhYmxlKGFwcCkudGhlbigoYXZhaWxhYmxlOiBib29sZWFuKSA9PiB7XHJcbiAqICBpZihhdmFpbGFibGUpIHtcclxuICogICAgLy8gTm93IHdlIGtub3cgd2UgY2FuIHNlbmQgYW4gZW1haWwsIGNhbGxzIGhhc0NsaWVudCBhbmQgaGFzQWNjb3VudFxyXG4gKiAgICAvLyBOb3Qgc3BlY2lmeWluZyBhbiBhcHAgd2lsbCByZXR1cm4gdHJ1ZSBpZiBhdCBsZWFzdCBvbmUgZW1haWwgY2xpZW50IGlzIGNvbmZpZ3VyZWRcclxuICogIH1cclxuICogfSk7XHJcbiAqXHJcbiAqIGxldCBlbWFpbCA9IHtcclxuICogICB0bzogJ21heEBtdXN0ZXJtYW5uLmRlJyxcclxuICogICBjYzogJ2VyaWthQG11c3Rlcm1hbm4uZGUnLFxyXG4gKiAgIGJjYzogWydqb2huQGRvZS5jb20nLCAnamFuZUBkb2UuY29tJ10sXHJcbiAqICAgYXR0YWNobWVudHM6IFtcclxuICogICAgICdmaWxlOi8vaW1nL2xvZ28ucG5nJyxcclxuICogICAgICdyZXM6Ly9pY29uLnBuZycsXHJcbiAqICAgICAnYmFzZTY0Omljb24ucG5nLy9pVkJPUncwS0dnb0FBQUFOU1VoRVVnLi4uJyxcclxuICogICAgICdmaWxlOi8vUkVBRE1FLnBkZidcclxuICogICBdLFxyXG4gKiAgIHN1YmplY3Q6ICdDb3Jkb3ZhIEljb25zJyxcclxuICogICBib2R5OiAnSG93IGFyZSB5b3U/IE5pY2UgZ3JlZXRpbmdzIGZyb20gTGVpcHppZycsXHJcbiAqICAgaXNIdG1sOiB0cnVlXHJcbiAqIH1cclxuICpcclxuICogLy8gU2VuZCBhIHRleHQgbWVzc2FnZSB1c2luZyBkZWZhdWx0IG9wdGlvbnNcclxuICogdGhpcy5lbWFpbENvbXBvc2VyLm9wZW4oZW1haWwpO1xyXG4gKiBgYGBcclxuICpcclxuICogWW91IGNhbiBhbHNvIGFzc2lnbiBhbGlhc2VzIHRvIGVtYWlsIGFwcHNcclxuICogYGBgdHNcclxuICogLy8gYWRkIGFsaWFzXHJcbiAqIHRoaXMuZW1haWwuYWRkQWxpYXMoJ2dtYWlsJywgJ2NvbS5nb29nbGUuYW5kcm9pZC5nbScpO1xyXG4gKlxyXG4gKiAvLyB0aGVuIHVzZSBhbGlhcyB3aGVuIHNlbmRpbmcgZW1haWxcclxuICogdGhpcy5lbWFpbC5vcGVuKHtcclxuICogICBhcHA6ICdnbWFpbCcsXHJcbiAqICAgLi4uXHJcbiAqIH0pO1xyXG4gKiBgYGBcclxuICogQGludGVyZmFjZXNcclxuICogRW1haWxDb21wb3Nlck9wdGlvbnNcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdFbWFpbENvbXBvc2VyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3NlcicsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5wbHVnaW5zLmVtYWlsJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2thdHplci9jb3Jkb3ZhLXBsdWdpbi1lbWFpbC1jb21wb3NlcicsXHJcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnV2luZG93cycsICdtYWNPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBFbWFpbENvbXBvc2VyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIENoZWNrcyBpZiB0aGUgYXBwIGhhcyBhIHBlcm1pc3Npb24gdG8gYWNjZXNzIGVtYWlsIGFjY291bnRzIGluZm9ybWF0aW9uXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gcmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyBpZiB0aGUgcGVybWlzc2lvbiB3YXMgZ3JhbnRlZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICBoYXNQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVxdWVzdCBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgcmVxdWVzdFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmllcyBpZiBhbiBlbWFpbCBhY2NvdW50IGlzIGNvbmZpZ3VyZWQgb24gdGhlIGRldmljZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgaGFzQWNjb3VudCgpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcclxuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNBY2NvdW50KChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBWZXJpZmllcyBpZiBhIHNwZWNpZmljIGVtYWlsIGNsaWVudCBpcyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYXBwXSBBcHAgaWQgb3IgdXJpIHNjaGVtZS5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxyXG4gICAqL1xyXG5cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBoYXNDbGllbnQoYXBwPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIGlmIChhcHApIHtcclxuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmhhc0NsaWVudChhcHAsIChyZXN1bHQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZmFsc2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuZ2V0Q2xpZW50cygoYXBwczogc3RyaW5nW10pID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoYXBwcyAmJiBhcHBzLmxlbmd0aCA+IDApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYW4gYXJyYXkgb2YgZW1haWwgY2xpZW50cyBpbnN0YWxsZWQgb24gdGhlIGRldmljZS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZ1tdPn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBAQ29yZG92YSh7IHBsYXRmb3JtczogWydBbmRyb2lkJ10gfSlcclxuICBnZXRDbGllbnRzKCk6IFByb21pc2U8c3RyaW5nW10+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPHN0cmluZ1tdPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmdldENsaWVudHMoKGFwcHM6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXBwcykgPT09ICdbb2JqZWN0IFN0cmluZ10nKSB7XHJcbiAgICAgICAgICBhcHBzID0gW2FwcHNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlKGFwcHMpO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpZXMgaWYgc2VuZGluZyBlbWFpbHMgaXMgc3VwcG9ydGVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwcF0gQXBwIGlkIG9yIHVyaSBzY2hlbWUuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBpc0F2YWlsYWJsZShhcHA/OiBzdHJpbmcpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuIGdldFByb21pc2U8Ym9vbGVhbj4oKHJlc29sdmUpID0+IHtcclxuICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuaGFzQWNjb3VudCwgdGhpcy5oYXNDbGllbnQoYXBwKV0pLnRoZW4oKHJlc3VsdHMpID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZShyZXN1bHRzLmxlbmd0aCA9PT0gMiAmJiByZXN1bHRzWzBdICYmIHJlc3VsdHNbMV0pO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRGlzcGxheXMgdGhlIGVtYWlsIGNvbXBvc2VyIHByZS1maWxsZWQgd2l0aCBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtFbWFpbENvbXBvc2VyT3B0aW9uc30gb3B0aW9ucyBFbWFpbFxyXG4gICAqIEBwYXJhbSB7YW55fSBbc2NvcGVdIFNjb3BlIGZvciB0aGUgcHJvbWlzZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIHByb21pc2Ugd2hlbiB0aGUgRW1haWxDb21wb3NlciBoYXMgYmVlbiBvcGVuZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDEsXHJcbiAgICBlcnJvckluZGV4OiAzLFxyXG4gIH0pXHJcbiAgb3BlbihvcHRpb25zOiBFbWFpbENvbXBvc2VyT3B0aW9ucywgc2NvcGU/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQWRkcyBhIG5ldyBtYWlsIGFwcCBhbGlhcy5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBhbGlhcyBUaGUgYWxpYXMgbmFtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYWNrYWdlTmFtZSBUaGUgcGFja2FnZSBuYW1lXHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGFkZEFsaWFzKGFsaWFzOiBzdHJpbmcsIHBhY2thZ2VOYW1lOiBzdHJpbmcpOiB2b2lkIHt9XHJcbn1cclxuIl19