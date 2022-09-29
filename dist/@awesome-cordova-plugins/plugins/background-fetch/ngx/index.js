import { __extends } from "tslib";
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Injectable } from '@angular/core';
var BackgroundFetch = /** @class */ (function (_super) {
    __extends(BackgroundFetch, _super);
    function BackgroundFetch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundFetch.prototype.configure = function (config) { return cordova(this, "configure", { "callbackOrder": "reverse" }, arguments); };
    BackgroundFetch.prototype.start = function () { return cordova(this, "start", {}, arguments); };
    BackgroundFetch.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    BackgroundFetch.prototype.finish = function (taskId) { return cordova(this, "finish", { "sync": true }, arguments); };
    BackgroundFetch.prototype.status = function () { return cordova(this, "status", {}, arguments); };
    BackgroundFetch.pluginName = "BackgroundFetch";
    BackgroundFetch.plugin = "cordova-plugin-background-fetch";
    BackgroundFetch.pluginRef = "BackgroundFetch";
    BackgroundFetch.repo = "https://github.com/transistorsoft/cordova-plugin-background-fetch";
    BackgroundFetch.platforms = ["iOS"];
    BackgroundFetch.decorators = [
        { type: Injectable }
    ];
    return BackgroundFetch;
}(AwesomeCordovaNativePlugin));
export { BackgroundFetch };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvYmFja2dyb3VuZC1mZXRjaC9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7SUF5RE4sbUNBQTBCOzs7O0lBVTdELG1DQUFTLGFBQUMsTUFBNkI7SUFXdkMsK0JBQUs7SUFVTCw4QkFBSTtJQVlKLGdDQUFNLGFBQUMsTUFBYztJQVFyQixnQ0FBTTs7Ozs7OztnQkFwRFAsVUFBVTs7MEJBekRYO0VBMERxQywwQkFBMEI7U0FBbEQsZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQmFja2dyb3VuZEZldGNoQ29uZmlnIHtcclxuICAvKipcclxuICAgKiBTZXQgdHJ1ZSB0byBjZWFzZSBiYWNrZ3JvdW5kLWZldGNoIGZyb20gb3BlcmF0aW5nIGFmdGVyIHVzZXIgXCJjbG9zZXNcIiB0aGUgYXBwLiBEZWZhdWx0cyB0byB0cnVlLlxyXG4gICAqL1xyXG4gIHN0b3BPblRlcm1pbmF0ZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBCYWNrZ3JvdW5kIEZldGNoXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBpT1MgQmFja2dyb3VuZCBGZXRjaCBJbXBsZW1lbnRhdGlvbi4gU2VlOiBodHRwczovL2RldmVsb3Blci5hcHBsZS5jb20vcmVmZXJlbmNlL3Vpa2l0L3VpYXBwbGljYXRpb24jMTY1NzM5OVxyXG4gKiBpT1MgQmFja2dyb3VuZCBGZXRjaCBpcyBiYXNpY2FsbHkgYW4gQVBJIHdoaWNoIHdha2VzIHVwIHlvdXIgYXBwIGFib3V0IGV2ZXJ5IDE1IG1pbnV0ZXMgKGR1cmluZyB0aGUgdXNlcidzIHByaW1lLXRpbWUgaG91cnMpIGFuZCBwcm92aWRlcyB5b3VyIGFwcCBleGFjdGx5IDMwcyBvZiBiYWNrZ3JvdW5kIHJ1bm5pbmctdGltZS4gVGhpcyBwbHVnaW4gd2lsbCBleGVjdXRlIHlvdXIgcHJvdmlkZWQgY2FsbGJhY2tGbiB3aGVuZXZlciBhIGJhY2tncm91bmQtZmV0Y2ggZXZlbnQgb2NjdXJzLiBUaGVyZSBpcyBubyB3YXkgdG8gaW5jcmVhc2UgdGhlIHJhdGUgd2hpY2ggYSBmZXRjaC1ldmVudCBvY2N1cnMgYW5kIHRoaXMgcGx1Z2luIHNldHMgdGhlIHJhdGUgdG8gdGhlIG1vc3QgZnJlcXVlbnQgcG9zc2libGUgdmFsdWUgb2YgVUlBcHBsaWNhdGlvbkJhY2tncm91bmRGZXRjaEludGVydmFsTWluaW11bSAtLSBpT1MgZGV0ZXJtaW5lcyB0aGUgcmF0ZSBhdXRvbWF0aWNhbGx5IGJhc2VkIHVwb24gZGV2aWNlIHVzYWdlIGFuZCB0aW1lLW9mLWRheSAoaWU6IGZldGNoLXJhdGUgaXMgYWJvdXQgfjE1bWluIGR1cmluZyBwcmltZS10aW1lIGhvdXJzOyBsZXNzIGZyZXF1ZW50bHkgd2hlbiB0aGUgdXNlciBpcyBwcmVzdW1lZCB0byBiZSBzbGVlcGluZywgYXQgM2FtIGZvciBleGFtcGxlKS5cclxuICogRm9yIG1vcmUgZGV0YWlsLCBwbGVhc2Ugc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS90cmFuc2lzdG9yc29mdC9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLWZldGNoXHJcbiAqIEB1c2FnZVxyXG4gKlxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEJhY2tncm91bmRGZXRjaCwgQmFja2dyb3VuZEZldGNoQ29uZmlnIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2JhY2tncm91bmQtZmV0Y2gvbmd4JztcclxuICpcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBiYWNrZ3JvdW5kRmV0Y2g6IEJhY2tncm91bmRGZXRjaCkge1xyXG4gKlxyXG4gKiAgIGNvbnN0IGNvbmZpZzogQmFja2dyb3VuZEZldGNoQ29uZmlnID0ge1xyXG4gKiAgICAgc3RvcE9uVGVybWluYXRlOiBmYWxzZSwgLy8gU2V0IHRydWUgdG8gY2Vhc2UgYmFja2dyb3VuZC1mZXRjaCBmcm9tIG9wZXJhdGluZyBhZnRlciB1c2VyIFwiY2xvc2VzXCIgdGhlIGFwcC4gRGVmYXVsdHMgdG8gdHJ1ZS5cclxuICogICB9XHJcbiAqXHJcbiAqICAgYmFja2dyb3VuZEZldGNoLmNvbmZpZ3VyZShjb25maWcpXHJcbiAqICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gKiAgICAgICAgICBjb25zb2xlLmxvZygnQmFja2dyb3VuZCBGZXRjaCBpbml0aWFsaXplZCcpO1xyXG4gKlxyXG4gKiAgICAgICAgICB0aGlzLmJhY2tncm91bmRGZXRjaC5maW5pc2goKTtcclxuICpcclxuICogICAgICB9KVxyXG4gKiAgICAgIC5jYXRjaChlID0+IGNvbnNvbGUubG9nKCdFcnJvciBpbml0aWFsaXppbmcgYmFja2dyb3VuZCBmZXRjaCcsIGUpKTtcclxuICpcclxuICogICAvLyBTdGFydCB0aGUgYmFja2dyb3VuZC1mZXRjaCBBUEkuIFlvdXIgY2FsbGJhY2tGbiBwcm92aWRlZCB0byAjY29uZmlndXJlIHdpbGwgYmUgZXhlY3V0ZWQgZWFjaCB0aW1lIGEgYmFja2dyb3VuZC1mZXRjaCBldmVudCBvY2N1cnMuIE5PVEUgdGhlICNjb25maWd1cmUgbWV0aG9kIGF1dG9tYXRpY2FsbHkgY2FsbHMgI3N0YXJ0LiBZb3UgZG8gbm90IGhhdmUgdG8gY2FsbCB0aGlzIG1ldGhvZCBhZnRlciB5b3UgI2NvbmZpZ3VyZSB0aGUgcGx1Z2luXHJcbiAqICAgYmFja2dyb3VuZEZldGNoLnN0YXJ0KCk7XHJcbiAqXHJcbiAqICAgLy8gU3RvcCB0aGUgYmFja2dyb3VuZC1mZXRjaCBBUEkgZnJvbSBmaXJpbmcgZmV0Y2ggZXZlbnRzLiBZb3VyIGNhbGxiYWNrRm4gcHJvdmlkZWQgdG8gI2NvbmZpZ3VyZSB3aWxsIG5vIGxvbmdlciBiZSBleGVjdXRlZC5cclxuICogICBiYWNrZ3JvdW5kRmV0Y2guc3RvcCgpO1xyXG4gKlxyXG4gKlxyXG4gKiB9XHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBCYWNrZ3JvdW5kRmV0Y2hDb25maWdcclxuICovXHJcbkBQbHVnaW4oe1xyXG4gIHBsdWdpbk5hbWU6ICdCYWNrZ3JvdW5kRmV0Y2gnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWJhY2tncm91bmQtZmV0Y2gnLFxyXG4gIHBsdWdpblJlZjogJ0JhY2tncm91bmRGZXRjaCcsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS90cmFuc2lzdG9yc29mdC9jb3Jkb3ZhLXBsdWdpbi1iYWNrZ3JvdW5kLWZldGNoJyxcclxuICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEJhY2tncm91bmRGZXRjaCBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBDb25maWd1cmVzIHRoZSBwbHVnaW4ncyBmZXRjaCBjYWxsYmFja0ZuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge0JhY2tncm91bmRGZXRjaENvbmZpZ30gY29uZmlnIENvbmZpZ3VyYXRpb24gZm9yIHBsdWdpblxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgY29uZmlndXJlKGNvbmZpZzogQmFja2dyb3VuZEZldGNoQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHRoZSBiYWNrZ3JvdW5kLWZldGNoIEFQSS5cclxuICAgKiBZb3VyIGNhbGxiYWNrRm4gcHJvdmlkZWQgdG8gI2NvbmZpZ3VyZSB3aWxsIGJlIGV4ZWN1dGVkIGVhY2ggdGltZSBhIGJhY2tncm91bmQtZmV0Y2ggZXZlbnQgb2NjdXJzLiBOT1RFIHRoZSAjY29uZmlndXJlIG1ldGhvZCBhdXRvbWF0aWNhbGx5IGNhbGxzICNzdGFydC4gWW91IGRvIG5vdCBoYXZlIHRvIGNhbGwgdGhpcyBtZXRob2QgYWZ0ZXIgeW91ICNjb25maWd1cmUgdGhlIHBsdWdpblxyXG4gICAqXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RhcnQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0b3AgdGhlIGJhY2tncm91bmQtZmV0Y2ggQVBJIGZyb20gZmlyaW5nIGZldGNoIGV2ZW50cy4gWW91ciBjYWxsYmFja0ZuIHByb3ZpZGVkIHRvICNjb25maWd1cmUgd2lsbCBubyBsb25nZXIgYmUgZXhlY3V0ZWQuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdG9wKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBZb3UgTVVTVCBjYWxsIHRoaXMgbWV0aG9kIGluIHlvdXIgZmV0Y2ggY2FsbGJhY2tGbiBwcm92aWRlZCB0byAjY29uZmlndXJlIGluIG9yZGVyIHRvIHNpZ25hbCB0byBpT1MgdGhhdCB5b3VyIGZldGNoIGFjdGlvbiBpcyBjb21wbGV0ZS4gaU9TIHByb3ZpZGVzIG9ubHkgMzBzIG9mIGJhY2tncm91bmQtdGltZSBmb3IgYSBmZXRjaC1ldmVudCAtLSBpZiB5b3UgZXhjZWVkIHRoaXMgMzBzLCBpT1Mgd2lsbCBraWxsIHlvdXIgYXBwLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHRhc2tJZFxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIHN5bmM6IHRydWUsXHJcbiAgfSlcclxuICBmaW5pc2godGFza0lkOiBzdHJpbmcpOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGUgc3RhdHVzIG9mIHRoZSBiYWNrZ3JvdW5kLWZldGNoXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBzdGF0dXMoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19