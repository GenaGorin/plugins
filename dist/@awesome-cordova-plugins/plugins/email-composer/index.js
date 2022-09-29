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
import { AwesomeCordovaNativePlugin, checkAvailability, cordova, getPromise } from '@awesome-cordova-plugins/core';
var EmailComposerOriginal = /** @class */ (function (_super) {
    __extends(EmailComposerOriginal, _super);
    function EmailComposerOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EmailComposerOriginal.prototype.hasPermission = function () { return cordova(this, "hasPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.requestPermission = function () { return cordova(this, "requestPermission", { "successIndex": 0, "errorIndex": 2 }, arguments); };
    EmailComposerOriginal.prototype.hasAccount = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().hasAccount(function (result) {
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
    EmailComposerOriginal.prototype.hasClient = function (app) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    if (app) {
                        EmailComposerOriginal.getPlugin().hasClient(app, function (result) {
                            if (result) {
                                resolve(true);
                            }
                            else {
                                resolve(false);
                            }
                        });
                    }
                    else {
                        EmailComposerOriginal.getPlugin().getClients(function (apps) {
                            resolve(apps && apps.length > 0);
                        });
                    }
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.getClients = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve) {
                    EmailComposerOriginal.getPlugin().getClients(function (apps) {
                        if (Object.prototype.toString.call(apps) === '[object String]') {
                            apps = [apps];
                        }
                        resolve(apps);
                    });
                });
            }
        })();
    };
    EmailComposerOriginal.prototype.isAvailable = function (app) {
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
    EmailComposerOriginal.prototype.open = function (options, scope) { return cordova(this, "open", { "successIndex": 1, "errorIndex": 3 }, arguments); };
    EmailComposerOriginal.prototype.addAlias = function (alias, packageName) { return cordova(this, "addAlias", {}, arguments); };
    EmailComposerOriginal.pluginName = "EmailComposer";
    EmailComposerOriginal.plugin = "cordova-plugin-email-composer";
    EmailComposerOriginal.pluginRef = "cordova.plugins.email";
    EmailComposerOriginal.repo = "https://github.com/katzer/cordova-plugin-email-composer";
    EmailComposerOriginal.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Windows", "macOS"];
    return EmailComposerOriginal;
}(AwesomeCordovaNativePlugin));
var EmailComposer = new EmailComposerOriginal();
export { EmailComposer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZW1haWwtY29tcG9zZXIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sMERBQTZELFVBQVUsRUFBRSxNQUFNLCtCQUErQixDQUFDOztJQWlJbkYsaUNBQTBCOzs7O0lBVTNELHFDQUFhO0lBYWIseUNBQWlCO0lBVWpCLGtDQUFVOzs7bURBQWlCO2dCQUN6QixPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLGFBQWEsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxVQUFVLENBQUMsVUFBQyxNQUFlO3dCQUNuRCxJQUFJLE1BQU0sRUFBRTs0QkFDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7eUJBQ2Y7NkJBQU07NEJBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO3lCQUNoQjtvQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFDTCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFVRCxpQ0FBUyxhQUFDLEdBQVk7OzttREFBZ0I7Z0JBQ3BDLE9BQU8sVUFBVSxDQUFVLFVBQUMsT0FBTztvQkFDakMsSUFBSSxHQUFHLEVBQUU7d0JBQ1AsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUUsVUFBQyxNQUFlOzRCQUN2RCxJQUFJLE1BQU0sRUFBRTtnQ0FDVixPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQ2Y7aUNBQU07Z0NBQ0wsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDOzZCQUNoQjt3QkFDSCxDQUFDLENBQUMsQ0FBQztxQkFDSjt5QkFBTTt3QkFDTCxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBYzs0QkFDbEQsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuQyxDQUFDLENBQUMsQ0FBQztxQkFDSjtnQkFDSCxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFTRCxrQ0FBVTs7O21EQUFzQjtnQkFDOUIsT0FBTyxVQUFVLENBQVcsVUFBQyxPQUFPO29CQUNsQyxhQUFhLENBQUMsU0FBUyxFQUFFLENBQUMsVUFBVSxDQUFDLFVBQUMsSUFBUzt3QkFDN0MsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssaUJBQWlCLEVBQUU7NEJBQzlELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO3lCQUNmO3dCQUNELE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDaEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBU0QsbUNBQVcsYUFBQyxHQUFZOzs7bURBQWdCO2dCQUN0QyxPQUFPLFVBQVUsQ0FBVSxVQUFDLE9BQU87b0JBQ2pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQU87d0JBQy9ELE9BQU8sT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEtBQUssQ0FBQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbkUsQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDSjs7O0lBYUQsNEJBQUksYUFBQyxPQUE2QixFQUFFLEtBQVc7SUFXL0MsZ0NBQVEsYUFBQyxLQUFhLEVBQUUsV0FBbUI7Ozs7Ozt3QkFoUTdDO0VBa0ltQywwQkFBMEI7U0FBaEQsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQ29yZG92YUNoZWNrLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luLCBnZXRQcm9taXNlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFbWFpbENvbXBvc2VyT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogQXBwIHRvIHNlbmQgdGhlIGVtYWlsIHdpdGhcclxuICAgKi9cclxuICBhcHA/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBUbyBmaWVsZFxyXG4gICAqL1xyXG4gIHRvPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBDQyBmaWVsZFxyXG4gICAqL1xyXG4gIGNjPzogc3RyaW5nIHwgc3RyaW5nW107XHJcblxyXG4gIC8qKlxyXG4gICAqIEVtYWlsIGFkZHJlc3MoZXMpIGZvciBCQ0MgZmllbGRcclxuICAgKi9cclxuICBiY2M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogRmlsZSBwYXRocyBvciBiYXNlNjQgZGF0YSBzdHJlYW1zXHJcbiAgICovXHJcbiAgYXR0YWNobWVudHM/OiBzdHJpbmdbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogU3ViamVjdCBvZiB0aGUgZW1haWxcclxuICAgKi9cclxuICBzdWJqZWN0Pzogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBFbWFpbCBib2R5IChmb3IgSFRNTCwgc2V0IGlzSHRtbCB0byB0cnVlKVxyXG4gICAqL1xyXG4gIGJvZHk/OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEluZGljYXRlcyBpZiB0aGUgYm9keSBpcyBIVE1MIG9yIHBsYWluIHRleHRcclxuICAgKi9cclxuICBpc0h0bWw/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiAgQ29udGVudCB0eXBlIG9mIHRoZSBlbWFpbCAoQW5kcm9pZCBvbmx5KVxyXG4gICAqL1xyXG4gIHR5cGU/OiBzdHJpbmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBFbWFpbCBDb21wb3NlclxyXG4gKiBAcHJlbWllciBlbWFpbC1jb21wb3NlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICpcclxuICogUmVxdWlyZXMgQ29yZG92YSBwbHVnaW46IGNvcmRvdmEtcGx1Z2luLWVtYWlsLWNvbXBvc2VyLiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBbRW1haWwgQ29tcG9zZXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9oeXBlcnkyay9jb3Jkb3ZhLWVtYWlsLXBsdWdpbikuXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEVtYWlsQ29tcG9zZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZW1haWwtY29tcG9zZXIvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBlbWFpbENvbXBvc2VyOiBFbWFpbENvbXBvc2VyKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5nZXRDbGllbnRzKCkudGhlbigoYXBwczogW10pID0+IHtcclxuICogICAgLy8gUmV0dXJucyBhbiBhcnJheSBvZiBjb25maWd1cmVkIGVtYWlsIGNsaWVudHMgZm9yIHRoZSBkZXZpY2VcclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5oYXNDbGllbnQoYXBwKS50aGVuKChpc1ZhbGlkOiBib29sZWFuKSA9PiB7XHJcbiAqICBpZiAoaXNWYWxpZCkge1xyXG4gKiAgICAvLyBOb3cgd2Uga25vdyB3ZSBoYXZlIGEgdmFsaWQgZW1haWwgY2xpZW50IGNvbmZpZ3VyZWRcclxuICogICAgLy8gTm90IHNwZWNpZnlpbmcgYW4gYXBwIHdpbGwgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIGVtYWlsIGNsaWVudCBpcyBjb25maWd1cmVkXHJcbiAqICB9XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiB0aGlzLmVtYWlsQ29tcG9zZXIuaGFzQWNjb3VudCgpLnRoZW4oKGlzVmFsaWQ6IGJvb2xlYW4pID0+IHtcclxuICogIGlmIChpc1ZhbGlkKSB7XHJcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGhhdmUgYSB2YWxpZCBlbWFpbCBhY2NvdW50IGNvbmZpZ3VyZWRcclxuICogIH1cclxuICogfSk7XHJcbiAqXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5pc0F2YWlsYWJsZShhcHApLnRoZW4oKGF2YWlsYWJsZTogYm9vbGVhbikgPT4ge1xyXG4gKiAgaWYoYXZhaWxhYmxlKSB7XHJcbiAqICAgIC8vIE5vdyB3ZSBrbm93IHdlIGNhbiBzZW5kIGFuIGVtYWlsLCBjYWxscyBoYXNDbGllbnQgYW5kIGhhc0FjY291bnRcclxuICogICAgLy8gTm90IHNwZWNpZnlpbmcgYW4gYXBwIHdpbGwgcmV0dXJuIHRydWUgaWYgYXQgbGVhc3Qgb25lIGVtYWlsIGNsaWVudCBpcyBjb25maWd1cmVkXHJcbiAqICB9XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiBsZXQgZW1haWwgPSB7XHJcbiAqICAgdG86ICdtYXhAbXVzdGVybWFubi5kZScsXHJcbiAqICAgY2M6ICdlcmlrYUBtdXN0ZXJtYW5uLmRlJyxcclxuICogICBiY2M6IFsnam9obkBkb2UuY29tJywgJ2phbmVAZG9lLmNvbSddLFxyXG4gKiAgIGF0dGFjaG1lbnRzOiBbXHJcbiAqICAgICAnZmlsZTovL2ltZy9sb2dvLnBuZycsXHJcbiAqICAgICAncmVzOi8vaWNvbi5wbmcnLFxyXG4gKiAgICAgJ2Jhc2U2NDppY29uLnBuZy8vaVZCT1J3MEtHZ29BQUFBTlNVaEVVZy4uLicsXHJcbiAqICAgICAnZmlsZTovL1JFQURNRS5wZGYnXHJcbiAqICAgXSxcclxuICogICBzdWJqZWN0OiAnQ29yZG92YSBJY29ucycsXHJcbiAqICAgYm9keTogJ0hvdyBhcmUgeW91PyBOaWNlIGdyZWV0aW5ncyBmcm9tIExlaXB6aWcnLFxyXG4gKiAgIGlzSHRtbDogdHJ1ZVxyXG4gKiB9XHJcbiAqXHJcbiAqIC8vIFNlbmQgYSB0ZXh0IG1lc3NhZ2UgdXNpbmcgZGVmYXVsdCBvcHRpb25zXHJcbiAqIHRoaXMuZW1haWxDb21wb3Nlci5vcGVuKGVtYWlsKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIFlvdSBjYW4gYWxzbyBhc3NpZ24gYWxpYXNlcyB0byBlbWFpbCBhcHBzXHJcbiAqIGBgYHRzXHJcbiAqIC8vIGFkZCBhbGlhc1xyXG4gKiB0aGlzLmVtYWlsLmFkZEFsaWFzKCdnbWFpbCcsICdjb20uZ29vZ2xlLmFuZHJvaWQuZ20nKTtcclxuICpcclxuICogLy8gdGhlbiB1c2UgYWxpYXMgd2hlbiBzZW5kaW5nIGVtYWlsXHJcbiAqIHRoaXMuZW1haWwub3Blbih7XHJcbiAqICAgYXBwOiAnZ21haWwnLFxyXG4gKiAgIC4uLlxyXG4gKiB9KTtcclxuICogYGBgXHJcbiAqIEBpbnRlcmZhY2VzXHJcbiAqIEVtYWlsQ29tcG9zZXJPcHRpb25zXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRW1haWxDb21wb3NlcicsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEucGx1Z2lucy5lbWFpbCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9rYXR6ZXIvY29yZG92YS1wbHVnaW4tZW1haWwtY29tcG9zZXInLFxyXG4gIHBsYXRmb3JtczogWydBbWF6b24gRmlyZSBPUycsICdBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnLCAnbWFjT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRW1haWxDb21wb3NlciBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDaGVja3MgaWYgdGhlIGFwcCBoYXMgYSBwZXJtaXNzaW9uIHRvIGFjY2VzcyBlbWFpbCBhY2NvdW50cyBpbmZvcm1hdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IHJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gdGhhdCBpbmRpY2F0ZXMgaWYgdGhlIHBlcm1pc3Npb24gd2FzIGdyYW50ZWRcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBzdWNjZXNzSW5kZXg6IDAsXHJcbiAgICBlcnJvckluZGV4OiAyLFxyXG4gIH0pXHJcbiAgaGFzUGVybWlzc2lvbigpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byBhY2Nlc3MgZW1haWwgYWNjb3VudHMgaW5mb3JtYXRpb25cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBwZXJtaXNzaW9uIHdhcyBncmFudGVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAwLFxyXG4gICAgZXJyb3JJbmRleDogMixcclxuICB9KVxyXG4gIHJlcXVlc3RQZXJtaXNzaW9uKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpZXMgaWYgYW4gZW1haWwgYWNjb3VudCBpcyBjb25maWd1cmVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBpZiBhdmFpbGFibGUsIHJlamVjdHMgaWYgbm90IGF2YWlsYWJsZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGhhc0FjY291bnQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIEVtYWlsQ29tcG9zZXIuZ2V0UGx1Z2luKCkuaGFzQWNjb3VudCgocmVzdWx0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogVmVyaWZpZXMgaWYgYSBzcGVjaWZpYyBlbWFpbCBjbGllbnQgaXMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2FwcF0gQXBwIGlkIG9yIHVyaSBzY2hlbWUuXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmVzb2x2ZXMgaWYgYXZhaWxhYmxlLCByZWplY3RzIGlmIG5vdCBhdmFpbGFibGVcclxuICAgKi9cclxuXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgaGFzQ2xpZW50KGFwcD86IHN0cmluZyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxib29sZWFuPigocmVzb2x2ZSkgPT4ge1xyXG4gICAgICBpZiAoYXBwKSB7XHJcbiAgICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5oYXNDbGllbnQoYXBwLCAocmVzdWx0OiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBFbWFpbENvbXBvc2VyLmdldFBsdWdpbigpLmdldENsaWVudHMoKGFwcHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGFwcHMgJiYgYXBwcy5sZW5ndGggPiAwKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGFuIGFycmF5IG9mIGVtYWlsIGNsaWVudHMgaW5zdGFsbGVkIG9uIHRoZSBkZXZpY2UuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmdbXT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgQENvcmRvdmEoeyBwbGF0Zm9ybXM6IFsnQW5kcm9pZCddIH0pXHJcbiAgZ2V0Q2xpZW50cygpOiBQcm9taXNlPHN0cmluZ1tdPiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxzdHJpbmdbXT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgRW1haWxDb21wb3Nlci5nZXRQbHVnaW4oKS5nZXRDbGllbnRzKChhcHBzOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFwcHMpID09PSAnW29iamVjdCBTdHJpbmddJykge1xyXG4gICAgICAgICAgYXBwcyA9IFthcHBzXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzb2x2ZShhcHBzKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFZlcmlmaWVzIGlmIHNlbmRpbmcgZW1haWxzIGlzIHN1cHBvcnRlZCBvbiB0aGUgZGV2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFthcHBdIEFwcCBpZCBvciB1cmkgc2NoZW1lLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJlc29sdmVzIGlmIGF2YWlsYWJsZSwgcmVqZWN0cyBpZiBub3QgYXZhaWxhYmxlXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgaXNBdmFpbGFibGUoYXBwPzogc3RyaW5nKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGJvb2xlYW4+KChyZXNvbHZlKSA9PiB7XHJcbiAgICAgIFByb21pc2UuYWxsKFt0aGlzLmhhc0FjY291bnQsIHRoaXMuaGFzQ2xpZW50KGFwcCldKS50aGVuKChyZXN1bHRzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0cy5sZW5ndGggPT09IDIgJiYgcmVzdWx0c1swXSAmJiByZXN1bHRzWzFdKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIERpc3BsYXlzIHRoZSBlbWFpbCBjb21wb3NlciBwcmUtZmlsbGVkIHdpdGggZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7RW1haWxDb21wb3Nlck9wdGlvbnN9IG9wdGlvbnMgRW1haWxcclxuICAgKiBAcGFyYW0ge2FueX0gW3Njb3BlXSBTY29wZSBmb3IgdGhlIHByb21pc2VcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXNvbHZlcyBwcm9taXNlIHdoZW4gdGhlIEVtYWlsQ29tcG9zZXIgaGFzIGJlZW4gb3BlbmVkXHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgc3VjY2Vzc0luZGV4OiAxLFxyXG4gICAgZXJyb3JJbmRleDogMyxcclxuICB9KVxyXG4gIG9wZW4ob3B0aW9uczogRW1haWxDb21wb3Nlck9wdGlvbnMsIHNjb3BlPzogYW55KTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEFkZHMgYSBuZXcgbWFpbCBhcHAgYWxpYXMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWxpYXMgVGhlIGFsaWFzIG5hbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFja2FnZU5hbWUgVGhlIHBhY2thZ2UgbmFtZVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBhZGRBbGlhcyhhbGlhczogc3RyaW5nLCBwYWNrYWdlTmFtZTogc3RyaW5nKTogdm9pZCB7fVxyXG59XHJcbiJdfQ==