import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, cordova } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
var WebSocketServer = /** @class */ (function (_super) {
    __extends(WebSocketServer, _super);
    function WebSocketServer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WebSocketServer.prototype.getInterfaces = function () { return cordova(this, "getInterfaces", {}, arguments); };
    WebSocketServer.prototype.start = function (port, options) { return cordova(this, "start", { "observable": true, "clearFunction": "stop" }, arguments); };
    WebSocketServer.prototype.onFunctionToObservable = function (fnName) {
        return new Observable(function (observer) {
            var id = window.cordova.plugins.wsserver[fnName](observer.next.bind(observer), observer.error.bind(observer));
            return function () { return window.cordova.plugins.wsserver.removeCallback(id); };
        });
    };
    /**
     * Watches for new messages
     *
     * @returns {Observable<WebSocketMessage>}
     */
    WebSocketServer.prototype.watchMessage = function () {
        return this.onFunctionToObservable('onMessage');
    };
    /**
     * Watches for new opened connections
     *
     * @returns {Observable<WebSocketConnection>}
     */
    WebSocketServer.prototype.watchOpen = function () {
        return this.onFunctionToObservable('onOpen');
    };
    /**
     * Watches for closed connections
     *
     * @returns {Observable<WebSocketClose>}
     */
    WebSocketServer.prototype.watchClose = function () {
        return this.onFunctionToObservable('onClose');
    };
    /**
     * Watches for any websocket failures
     *
     * @returns {Observable<WebSocketFailure>}
     */
    WebSocketServer.prototype.watchFailure = function () {
        return this.onFunctionToObservable('onFailure');
    };
    WebSocketServer.prototype.stop = function () { return cordova(this, "stop", {}, arguments); };
    WebSocketServer.prototype.send = function (conn, msg) { return cordova(this, "send", {}, arguments); };
    WebSocketServer.prototype.close = function (conn, code, reason) { return cordova(this, "close", {}, arguments); };
    WebSocketServer.pluginName = "WebSocketServer";
    WebSocketServer.plugin = "cordova-plugin-websocket-server";
    WebSocketServer.pluginRef = "cordova.plugins.wsserver";
    WebSocketServer.repo = "https://github.com/becvert/cordova-plugin-websocket-server";
    WebSocketServer.platforms = ["Android", "iOS"];
    WebSocketServer.decorators = [
        { type: Injectable }
    ];
    return WebSocketServer;
}(AwesomeCordovaNativePlugin));
export { WebSocketServer };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvd2ViLXNvY2tldC1zZXJ2ZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyR0csbUNBQTBCOzs7O0lBTzdELHVDQUFhO0lBZWIsK0JBQUssYUFBQyxJQUFZLEVBQUUsT0FBeUI7SUFJckMsZ0RBQXNCLEdBQTlCLFVBQWtDLE1BQWM7UUFDOUMsT0FBTyxJQUFJLFVBQVUsQ0FBSSxVQUFDLFFBQVE7WUFDaEMsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7WUFFaEgsT0FBTyxjQUFNLE9BQUEsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsRUFBbEQsQ0FBa0QsQ0FBQztRQUNsRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsbUNBQVMsR0FBVDtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsb0NBQVUsR0FBVjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsc0NBQVksR0FBWjtRQUNFLE9BQU8sSUFBSSxDQUFDLHNCQUFzQixDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFRRCw4QkFBSTtJQVlKLDhCQUFJLGFBQUMsSUFBeUIsRUFBRSxHQUFXO0lBYTNDLCtCQUFLLGFBQUMsSUFBeUIsRUFBRSxJQUFZLEVBQUUsTUFBYzs7Ozs7OztnQkF0RzlELFVBQVU7OzBCQTVHWDtFQTZHcUMsMEJBQTBCO1NBQWxELGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBsdWdpbiwgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBhbnk7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldEludGVyZmFjZXMge1xyXG4gIFtrZXk6IHN0cmluZ106IFdlYlNvY2tldEludGVyZmFjZTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJbnRlcmZhY2Uge1xyXG4gIGlwdjRBZGRyZXNzZXM6IHN0cmluZ1tdO1xyXG4gIGlwdjZBZGRyZXNzZXM6IHN0cmluZ1tdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE9wdGlvbnMge1xyXG4gIG9yaWdpbnM/OiBzdHJpbmdbXTtcclxuICBwcm90b2NvbHM/OiBzdHJpbmdbXTtcclxuICB0Y3BOb0RlbGF5PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJZGVudGlmaWVyIHtcclxuICB1dWlkOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0U2VydmVyRGV0YWlscyB7XHJcbiAgYWRkcjogc3RyaW5nO1xyXG4gIHBvcnQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRGYWlsdXJlIGV4dGVuZHMgV2ViU29ja2V0U2VydmVyRGV0YWlscyB7XHJcbiAgcmVhc29uOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0TWVzc2FnZSB7XHJcbiAgY29ubjogV2ViU29ja2V0Q29ubmVjdGlvbjtcclxuICBtc2c6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRDbG9zZSB7XHJcbiAgY29ubjogV2ViU29ja2V0Q29ubmVjdGlvbjtcclxuICBjb2RlOiBudW1iZXI7XHJcbiAgcmVhc29uOiBzdHJpbmc7XHJcbiAgd2FzQ2xlYW46IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0Q29ubmVjdGlvbiBleHRlbmRzIFdlYlNvY2tldElkZW50aWZpZXIge1xyXG4gIHJlbW90ZUF0dHI6IHN0cmluZztcclxuICBzdGF0ZTogJ29wZW4nIHwgJ2Nsb3NlZCc7XHJcbiAgaHR0cEZpZWxkczogSHR0cEZpZWxkcztcclxuICByZXNvdXJjZTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEh0dHBGaWVsZHMge1xyXG4gICdBY2NlcHQtRW5jb2RpbmcnOiBzdHJpbmc7XHJcbiAgJ0FjY2VwdC1MYW5ndWFnZSc6IHN0cmluZztcclxuICAnQ2FjaGUtQ29udHJvbCc6IHN0cmluZztcclxuICBDb25uZWN0aW9uOiBzdHJpbmc7XHJcbiAgSG9zdDogc3RyaW5nO1xyXG4gIE9yaWdpbjogc3RyaW5nO1xyXG4gIFByYWdtYTogc3RyaW5nO1xyXG4gICdTZWMtV2ViU29ja2V0LUV4dGVuc2lvbnMnOiBzdHJpbmc7XHJcbiAgJ1NlYy1XZWJTb2NrZXQtS2V5Jzogc3RyaW5nO1xyXG4gICdTZWMtV2ViU29ja2V0LVZlcnNpb24nOiBzdHJpbmc7XHJcbiAgVXBncmFkZTogc3RyaW5nO1xyXG4gICdVc2VyLUFnZW50Jzogc3RyaW5nO1xyXG59XHJcblxyXG4vKipcclxuICogQG5hbWUgV2ViU29ja2V0IFNlcnZlclxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogVGhpcyBwbHVnaW4gYWxsb3dzIHlvdSB0byBydW4gYSBzaW5nbGUsIGxpZ2h0d2VpZ2h0LCBiYXJlYm9uZSBXZWJTb2NrZXQgU2VydmVyLlxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvd2ViLXNvY2tldC1zZXJ2ZXInO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdzc2VydmVyOiBXZWJTb2NrZXRTZXJ2ZXIpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogLy8gc3RhcnQgd2Vic29ja2V0IHNlcnZlclxyXG4gKiB0aGlzLndzc2VydmVyLnN0YXJ0KDg4ODgsIHt9KS5zdWJzY3JpYmUoe1xyXG4gKiAgIG5leHQ6IHNlcnZlciA9PiBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCksXHJcbiAqICAgZXJyb3I6IGVycm9yID0+IGNvbnNvbGUubG9nKGBVbmV4cGVjdGVkIGVycm9yYCwgZXJyb3IpO1xyXG4gKiB9KTtcclxuICpcclxuICogLy8gd2F0Y2ggZm9yIGFueSBtZXNzYWdlc1xyXG4gKiB0aGlzLndzc2VydmVyLndhdGNoTWVzc2FnZSgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBtZXNzYWdlICR7cmVzdWx0Lm1zZ30gZnJvbSAke3Jlc3VsdC5jb25uLnV1aWR9YCk7XHJcbiAqIH0pO1xyXG4gKlxyXG4gKiAvLyBzZW5kIG1lc3NhZ2UgdG8gY29ubmVjdGlvbiB3aXRoIHNwZWNpZmllZCB1dWlkXHJcbiAqIHRoaXMud3NzZXJ2ZXIuc2VuZCh7IHV1aWQ6ICc4ZTdjNGY0OC1kZTY4LTRiNmYtOGZjYS0xMDY3YTM1Mzk2OGQnIH0sICdIZWxsbyBXb3JsZCcpO1xyXG4gKlxyXG4gKiAvLyBzdG9wIHdlYnNvY2tldCBzZXJ2ZXJcclxuICogdGhpcy53c3NlcnZlci5zdG9wKCkudGhlbihzZXJ2ZXIgPT4ge1xyXG4gKiAgIGNvbnNvbGUubG9nKGBTdG9wIGxpc3RlbmluZyBvbiAke3NlcnZlci5hZGRyfToke3NlcnZlci5wb3J0fWApO1xyXG4gKiB9KTtcclxuICpcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnV2ViU29ja2V0U2VydmVyJyxcclxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi13ZWJzb2NrZXQtc2VydmVyJyxcclxuICBwbHVnaW5SZWY6ICdjb3Jkb3ZhLnBsdWdpbnMud3NzZXJ2ZXInLFxyXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYmVjdmVydC9jb3Jkb3ZhLXBsdWdpbi13ZWJzb2NrZXQtc2VydmVyJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgV2ViU29ja2V0U2VydmVyIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqIFJldHVybiB0aGlzIGRldmljZSdzIGludGVyZmFjZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFdlYlNvY2tldEludGVyZmFjZXM+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBnZXRJbnRlcmZhY2VzKCk6IFByb21pc2U8V2ViU29ja2V0SW50ZXJmYWNlcz4ge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RhcnQgd2Vic29ja2V0IHNlcnZlclxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBvcnQge251bWJlcn0gTG9jYWwgcG9ydCBvbiB3aGljaCB0aGUgc2VydmljZSBydW5zLiAoMCBtZWFucyBhbnkgZnJlZSBwb3J0KVxyXG4gICAqIEBwYXJhbSBvcHRpb25zIHtXZWJTb2NrZXRPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHdlYnNvY2tldFxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+fSBSZXR1cm5zIE9ic2VydmFibGUgd2hlcmUgYWxsIGdlbmVyaWMgZXJyb3IgY2FuIGJlIGNhdGNoZWQgKG1vc3RseSBKU09ORXhjZXB0aW9ucylcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gICAgY2xlYXJGdW5jdGlvbjogJ3N0b3AnLFxyXG4gIH0pXHJcbiAgc3RhcnQocG9ydDogbnVtYmVyLCBvcHRpb25zOiBXZWJTb2NrZXRPcHRpb25zKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRnVuY3Rpb25Ub09ic2VydmFibGU8VD4oZm5OYW1lOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiBuZXcgT2JzZXJ2YWJsZTxUPigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgY29uc3QgaWQgPSB3aW5kb3cuY29yZG92YS5wbHVnaW5zLndzc2VydmVyW2ZuTmFtZV0ob2JzZXJ2ZXIubmV4dC5iaW5kKG9ic2VydmVyKSwgb2JzZXJ2ZXIuZXJyb3IuYmluZChvYnNlcnZlcikpO1xyXG5cclxuICAgICAgcmV0dXJuICgpID0+IHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMud3NzZXJ2ZXIucmVtb3ZlQ2FsbGJhY2soaWQpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXYXRjaGVzIGZvciBuZXcgbWVzc2FnZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldE1lc3NhZ2U+fVxyXG4gICAqL1xyXG4gIHdhdGNoTWVzc2FnZSgpOiBPYnNlcnZhYmxlPFdlYlNvY2tldE1lc3NhZ2U+IHtcclxuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uTWVzc2FnZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV2F0Y2hlcyBmb3IgbmV3IG9wZW5lZCBjb25uZWN0aW9uc1xyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj59XHJcbiAgICovXHJcbiAgd2F0Y2hPcGVuKCk6IE9ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj4ge1xyXG4gICAgcmV0dXJuIHRoaXMub25GdW5jdGlvblRvT2JzZXJ2YWJsZSgnb25PcGVuJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXYXRjaGVzIGZvciBjbG9zZWQgY29ubmVjdGlvbnNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldENsb3NlPn1cclxuICAgKi9cclxuICB3YXRjaENsb3NlKCk6IE9ic2VydmFibGU8V2ViU29ja2V0Q2xvc2U+IHtcclxuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uQ2xvc2UnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdhdGNoZXMgZm9yIGFueSB3ZWJzb2NrZXQgZmFpbHVyZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtPYnNlcnZhYmxlPFdlYlNvY2tldEZhaWx1cmU+fVxyXG4gICAqL1xyXG4gIHdhdGNoRmFpbHVyZSgpOiBPYnNlcnZhYmxlPFdlYlNvY2tldEZhaWx1cmU+IHtcclxuICAgIHJldHVybiB0aGlzLm9uRnVuY3Rpb25Ub09ic2VydmFibGUoJ29uRmFpbHVyZScpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU3RvcCB3ZWJzb2NrZXQgc2VydmVyIGFuZCBjbG9zZXMgYWxsIGNvbm5lY3Rpb25zXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPn1cclxuICAgKi9cclxuICBAQ29yZG92YSgpXHJcbiAgc3RvcCgpOiBQcm9taXNlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlbmQgTWVzc2FnZSB0byBhIGNvbm5lY3RlZCBkZXZpY2VcclxuICAgKlxyXG4gICAqIEBwYXJhbSBjb25uIHtXZWJTb2NrZXRJZGVudGlmaWVyfSBDb25uZWN0aW9uIHRvIHNlbmQgbWVzc2FnZSB0b1xyXG4gICAqIEBwYXJhbSBtc2cge3N0cmluZ30gTWVzc2FnZSB0byBzZW5kXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHNlbmQoY29ubjogV2ViU29ja2V0SWRlbnRpZmllciwgbXNnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb3NlIHNwZWNpZmljIGNvbm5lY3Rpb24gdXNpbmcgdXVpZFxyXG4gICAqXHJcbiAgICogQHBhcmFtIGNvbm4ge1dlYlNvY2tldElkZW50aWZpZXJ9IENvbm5lY3Rpb24gdG8gY2xvc2VcclxuICAgKiBAcGFyYW0gY29kZSB7bnVtYmVyfSBDbG9zZSBjb2RlLCBkZXRlcm1pbmVzIGlmIGl0IHdhcyBjbGVhblxyXG4gICAqIEBwYXJhbSByZWFzb24ge3N0cmluZ30gUmVhc29uIGZvciBjbG9zaW5nXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNsb3NlKGNvbm46IFdlYlNvY2tldElkZW50aWZpZXIsIGNvZGU6IG51bWJlciwgcmVhc29uOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19