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
var GaoDeLocationOriginal = /** @class */ (function (_super) {
    __extends(GaoDeLocationOriginal, _super);
    function GaoDeLocationOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GaoDeLocationOriginal.prototype.getCurrentPosition = function (positionOptions) { return cordova(this, "getCurrentPosition", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocationOriginal.prototype.startSerialLocation = function (positionOptions) { return cordova(this, "startSerialLocation", { "callbackOrder": "reverse", "observable": true }, arguments); };
    GaoDeLocationOriginal.prototype.stopSerialLocation = function () { return cordova(this, "stopSerialLocation", { "callbackOrder": "reverse" }, arguments); };
    GaoDeLocationOriginal.pluginName = "GaoDeLocation";
    GaoDeLocationOriginal.plugin = "cordova-plugin-gaodelocation-chenyu";
    GaoDeLocationOriginal.pluginRef = "GaoDe";
    GaoDeLocationOriginal.repo = "https://github.com/waliu/cordova-plugin-gaodelocation-chenyu.git";
    GaoDeLocationOriginal.install = "ionic cordova plugin add cordova-plugin-gaodelocation-chenyu --variable  ANDROID_API_KEY=your android key --variable  IOS_API_KEY=your ios key";
    GaoDeLocationOriginal.installVariables = ["ANDROID_API_KEY", "IOS_API_KEY"];
    GaoDeLocationOriginal.platforms = ["Android", "iOS"];
    return GaoDeLocationOriginal;
}(AwesomeCordovaNativePlugin));
var GaoDeLocation = new GaoDeLocationOriginal();
export { GaoDeLocation };
/**
 * ios positioning accuracy
 * https://developer.apple.com/documentation/corelocation/kcllocationaccuracybestfornavigation
 */
export var DesiredAccuracyEnum;
(function (DesiredAccuracyEnum) {
    /**
     * The highest possible accuracy that uses additional sensor data to facilitate navigation apps.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBestForNavigation"] = 1] = "kCLLocationAccuracyBestForNavigation";
    /**
     * The best level of accuracy available.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyBest"] = 2] = "kCLLocationAccuracyBest";
    /**
     * Accurate to within ten meters of the desired target.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyNearestTenMeters"] = 3] = "kCLLocationAccuracyNearestTenMeters";
    /**
     * Accurate to within one hundred meters.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyHundredMeters"] = 4] = "kCLLocationAccuracyHundredMeters";
    /**
     * Accurate to the nearest kilometer.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyKilometer"] = 5] = "kCLLocationAccuracyKilometer";
    /**
     * Accurate to the nearest three kilometers.
     */
    DesiredAccuracyEnum[DesiredAccuracyEnum["kCLLocationAccuracyThreeKilometers"] = 6] = "kCLLocationAccuracyThreeKilometers";
})(DesiredAccuracyEnum || (DesiredAccuracyEnum = {}));
/**
 * locationModeEnum
 */
export var LocationModeEnum;
(function (LocationModeEnum) {
    LocationModeEnum[LocationModeEnum["Hight_Accuracy"] = 1] = "Hight_Accuracy";
    LocationModeEnum[LocationModeEnum["Battery_Saving"] = 2] = "Battery_Saving";
    LocationModeEnum[LocationModeEnum["Device_Sensors"] = 3] = "Device_Sensors";
})(LocationModeEnum || (LocationModeEnum = {}));
/**
 * locationProtocolEnum
 */
export var LocationProtocolEnum;
(function (LocationProtocolEnum) {
    LocationProtocolEnum[LocationProtocolEnum["HTTP"] = 1] = "HTTP";
    LocationProtocolEnum[LocationProtocolEnum["HTTPS"] = 2] = "HTTPS";
})(LocationProtocolEnum || (LocationProtocolEnum = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZ2FvLWRlLWxvY2F0aW9uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQSxPQUFPLHVDQUErQyxNQUFNLCtCQUErQixDQUFDO0FBQzVGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7O0lBZ0VDLGlDQUEwQjs7OztJQVUzRCwwQ0FBa0IsYUFBQyxlQUFnQztJQWNuRCwyQ0FBbUIsYUFBQyxlQUFnQztJQVlwRCwwQ0FBa0I7Ozs7Ozs7O3dCQXRHcEI7RUFrRW1DLDBCQUEwQjtTQUFoRCxhQUFhO0FBeUkxQjs7O0dBR0c7QUFDSCxNQUFNLENBQU4sSUFBWSxtQkF5Qlg7QUF6QkQsV0FBWSxtQkFBbUI7SUFDN0I7O09BRUc7SUFDSCw2SEFBd0MsQ0FBQTtJQUN4Qzs7T0FFRztJQUNILG1HQUEyQixDQUFBO0lBQzNCOztPQUVHO0lBQ0gsMkhBQXVDLENBQUE7SUFDdkM7O09BRUc7SUFDSCxxSEFBb0MsQ0FBQTtJQUNwQzs7T0FFRztJQUNILDZHQUFnQyxDQUFBO0lBQ2hDOztPQUVHO0lBQ0gseUhBQXNDLENBQUE7QUFDeEMsQ0FBQyxFQXpCVyxtQkFBbUIsS0FBbkIsbUJBQW1CLFFBeUI5QjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksZ0JBSVg7QUFKRCxXQUFZLGdCQUFnQjtJQUMxQiwyRUFBa0IsQ0FBQTtJQUNsQiwyRUFBa0IsQ0FBQTtJQUNsQiwyRUFBa0IsQ0FBQTtBQUNwQixDQUFDLEVBSlcsZ0JBQWdCLEtBQWhCLGdCQUFnQixRQUkzQjtBQUVEOztHQUVHO0FBQ0gsTUFBTSxDQUFOLElBQVksb0JBR1g7QUFIRCxXQUFZLG9CQUFvQjtJQUM5QiwrREFBUSxDQUFBO0lBQ1IsaUVBQVMsQ0FBQTtBQUNYLENBQUMsRUFIVyxvQkFBb0IsS0FBcEIsb0JBQW9CLFFBRy9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb3Jkb3ZhLCBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcblxyXG4vKipcclxuICogQG5hbWUgR2FvIERlIExvY2F0aW9uXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBCZWNhdXNlIHRoZSBvcmlnaW5hbCBHUFMgcG9zaXRpb25pbmcgdXNlcyBHb29nbGUgQnJvd3NlciBwb3NpdGlvbmluZywgYW5kIEdvb2dsZSB3aXRoZHJhd3MgZnJvbSBDaGluYSwgcmVzdWx0aW5nIGluIEdQUyBBbmRyb2lkIHBvc2l0aW9uaW5nIGNhbiBub3QgYmUgcG9zaXRpb25lZC5cclxuICogR2FvZGUgbG9jYXRpb24gY2FuIGRpcmVjdGx5IHJldHVybiBhZGRyZXNzIGluZm9ybWF0aW9uR2FvZGUgbG9jYXRpb24gY2FuIGRpcmVjdGx5IHJldHVybiBhZGRyZXNzIGluZm9ybWF0aW9uXHJcbiAqIEB1c2FnZVxyXG4gKiBgYGB0eXBlc2NyaXB0XHJcbiAqIGltcG9ydCB7IEdhb0RlTG9jYXRpb24gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZ2FvLWRlLWxvY2F0aW9uL25neCc7XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FvRGVMb2NhdGlvbjogR2FvRGVMb2NhdGlvbikgeyB9XHJcbiAqXHJcbiAqXHJcbiAqIGNvbnN0IHBvc2l0aW9uT3B0aW9uczogUG9zaXRpb25PcHRpb25zID0ge1xyXG4gKiAgICAgYW5kcm9pZE9wdGlvbjoge1xyXG4gKiAgICAgIGxvY2F0aW9uTW9kZTogTG9jYXRpb25Nb2RlRW51bS5IaWdodF9BY2N1cmFjeSxcclxuICogICAgICBncHNGaXJzdDogZmFsc2UsXHJcbiAqICAgICAgIEh0dHBUaW1lT3V0OiAzMDAwMCxcclxuICogICAgICAgaW50ZXJ2YWw6IDIwMDAsXHJcbiAqICAgICAgIG5lZWRBZGRyZXNzOiB0cnVlLFxyXG4gKiAgICAgICBvbmNlTG9jYXRpb246IGZhbHNlLFxyXG4gKiAgICAgICBvbmNlTG9jYXRpb25MYXRlc3Q6IGZhbHNlLFxyXG4gKiAgICAgICBsb2NhdGlvblByb3RvY29sOiBMb2NhdGlvblByb3RvY29sRW51bS5IVFRQLFxyXG4gKiAgICAgICBzZW5zb3JFbmFibGU6IGZhbHNlLFxyXG4gKiAgICAgICB3aWZpU2NhbjogdHJ1ZSxcclxuICogICAgICAgbG9jYXRpb25DYWNoZUVuYWJsZTogdHJ1ZVxyXG4gKiAgICAgfSwgaW9zT3B0aW9uOiB7XHJcbiAqICAgICAgIGRlc2lyZWRBY2N1cmFjeTogRGVzaXJlZEFjY3VyYWN5RW51bS5rQ0xMb2NhdGlvbkFjY3VyYWN5QmVzdCxcclxuICogICAgICAgcGF1c2VzTG9jYXRpb25VcGRhdGVzQXV0b21hdGljYWxseTogJ1lFUycsXHJcbiAqICAgICAgIGFsbG93c0JhY2tncm91bmRMb2NhdGlvblVwZGF0ZXM6ICdOTycsXHJcbiAqICAgICAgIGxvY2F0aW9uVGltZW91dDogMTAsXHJcbiAqICAgICAgIHJlR2VvY29kZVRpbWVvdXQ6IDUsXHJcbiAqICAgICB9XHJcbiAqICAgfTtcclxuICogY29uc3QgcG9zaXRpb25SZXM6IFBvc2l0aW9uUmVzID0gYXdhaXQgdGhpcy5nYW9EZUxvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbk9wdGlvbnMpLmNhdGNoKChlOiBhbnkpID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gKiAgIH0pIHx8IG51bGw7XHJcbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uUmVzKSk7XHJcbiAqXHJcbiAqXHJcbiAqIHRoaXMuZ2FvRGVMb2NhdGlvbi5zdGFydFNlcmlhbExvY2F0aW9uKHBvc2l0aW9uT3B0aW9ucykuc3Vic2NyaWJlKChwb3NpdGlvblJlczogUG9zaXRpb25SZXMpID0+IHtcclxuICogICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocG9zaXRpb25SZXMpKTtcclxuICogfSk7XHJcbiAqXHJcbiAqIGNvbnN0IHBvc2l0aW9uUmVzOiBhbnkgPSB0aGlzLmdhb0RlTG9jYXRpb24uc3RvcFNlcmlhbExvY2F0aW9uKCkuY2F0Y2goKGUpID0+IHtcclxuICogICAgIGNvbnNvbGUubG9nKGUpO1xyXG4gKiAgIH0pIHx8IG51bGw7XHJcbiAqIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHBvc2l0aW9uUmVzKSk7XHJcbiAqXHJcbiAqIGBgYFxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0dhb0RlTG9jYXRpb24nLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWdhb2RlbG9jYXRpb24tY2hlbnl1JyxcclxuICBwbHVnaW5SZWY6ICdHYW9EZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS93YWxpdS9jb3Jkb3ZhLXBsdWdpbi1nYW9kZWxvY2F0aW9uLWNoZW55dS5naXQnLFxyXG4gIGluc3RhbGw6XHJcbiAgICAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLWdhb2RlbG9jYXRpb24tY2hlbnl1IC0tdmFyaWFibGUgIEFORFJPSURfQVBJX0tFWT15b3VyIGFuZHJvaWQga2V5IC0tdmFyaWFibGUgIElPU19BUElfS0VZPXlvdXIgaW9zIGtleScsXHJcbiAgaW5zdGFsbFZhcmlhYmxlczogWydBTkRST0lEX0FQSV9LRVknLCAnSU9TX0FQSV9LRVknXSxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdpT1MnXSxcclxufSlcclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgR2FvRGVMb2NhdGlvbiBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBTaW5nbGUgbG9jYXRpb25cclxuICAgKlxyXG4gICAqIEBwYXJhbSBwb3NpdGlvbk9wdGlvbnNcclxuICAgKiBAcmV0dXJucyBQcm9taXNlPFBvc2l0aW9uUmVzPlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIGNhbGxiYWNrT3JkZXI6ICdyZXZlcnNlJyxcclxuICB9KVxyXG4gIGdldEN1cnJlbnRQb3NpdGlvbihwb3NpdGlvbk9wdGlvbnM6IFBvc2l0aW9uT3B0aW9ucyk6IFByb21pc2U8UG9zaXRpb25SZXM+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFN0YXJ0IHNlcmlhbCBsb2NhdGlvblxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBvc2l0aW9uT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIFByb21pc2U8UG9zaXRpb25SZXM+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gICAgb2JzZXJ2YWJsZTogdHJ1ZSxcclxuICB9KVxyXG4gIHN0YXJ0U2VyaWFsTG9jYXRpb24ocG9zaXRpb25PcHRpb25zOiBQb3NpdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPFBvc2l0aW9uUmVzPiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdG9wIFNlcmlhbCBMb2NhdGlvblxyXG4gICAqXHJcbiAgICogQHJldHVybnMgUHJvbWlzZTxhbnk+XHJcbiAgICovXHJcbiAgQENvcmRvdmEoe1xyXG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnLFxyXG4gIH0pXHJcbiAgc3RvcFNlcmlhbExvY2F0aW9uKCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG59XHJcblxyXG4vKipcclxuICogTG9jYXRpb24gcGFyYW1ldGVyXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uT3B0aW9ucyB7XHJcbiAgLyoqXHJcbiAgICogYW5kcm9pZCBvcHRpb25zXHJcbiAgICovXHJcbiAgYW5kcm9pZE9wdGlvbjogQW5kcm9pZE9wdGlvbnM7XHJcbiAgLyoqXHJcbiAgICogaW9zIG9wdGlvbnNcclxuICAgKi9cclxuICBpb3NPcHRpb246IElvc09wdGlvbnM7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBhbmRyb2lkIHBvc2l0aW9uaW5nIGFjY3VyYWN5XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIEFuZHJvaWRPcHRpb25zIHtcclxuICAvKipcclxuICAgKiBsb2NhdGlvbiBtb2RlXHJcbiAgICovXHJcbiAgbG9jYXRpb25Nb2RlOiBMb2NhdGlvbk1vZGVFbnVtO1xyXG4gIC8qKlxyXG4gICAqIGdwcyBmaXJzdFxyXG4gICAqL1xyXG4gIGdwc0ZpcnN0OiBib29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIEh0dHAgdGltZU91dFxyXG4gICAqL1xyXG4gIEh0dHBUaW1lT3V0OiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogTG9jYXRpb24gaW50ZXJ2YWxcclxuICAgKi9cclxuICBpbnRlcnZhbDogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIE9wZW4gcmV2ZXJzZSBhZGRyZXNzXHJcbiAgICovXHJcbiAgbmVlZEFkZHJlc3M6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogb25jZSBsb2NhdGlvblxyXG4gICAqL1xyXG4gIG9uY2VMb2NhdGlvbjogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBvbmNlIGxvY2F0aW9uIGxhdGVzdFxyXG4gICAqL1xyXG4gIG9uY2VMb2NhdGlvbkxhdGVzdDogYm9vbGVhbjtcclxuICAvKipcclxuICAgKiBsb2NhdGlvbiBwcm90b2NvbFxyXG4gICAqL1xyXG4gIGxvY2F0aW9uUHJvdG9jb2w6IExvY2F0aW9uUHJvdG9jb2xFbnVtO1xyXG4gIC8qKlxyXG4gICAqIHNlbnNvciBlbmFibGVcclxuICAgKi9cclxuICBzZW5zb3JFbmFibGU6IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogd2lmaSBzY2FuXHJcbiAgICovXHJcbiAgd2lmaVNjYW46IGJvb2xlYW47XHJcbiAgLyoqXHJcbiAgICogbG9jYXRpb24gY2FjaGUgZW5hYmxlXHJcbiAgICovXHJcbiAgbG9jYXRpb25DYWNoZUVuYWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIElPUyBwb3NpdGlvbmluZyBwYXJhbWV0ZXJzXHJcbiAqXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIElvc09wdGlvbnMge1xyXG4gIC8qKlxyXG4gICAqIGRlc2lyZWQgYWNjdXJhY3lcclxuICAgKi9cclxuICBkZXNpcmVkQWNjdXJhY3k/OiBEZXNpcmVkQWNjdXJhY3lFbnVtO1xyXG4gIC8qKlxyXG4gICAqIHBhdXNlcyBsb2NhdGlvbiB1cGRhdGVzIGF1dG9tYXRpY2FsbHlcclxuICAgKi9cclxuICBwYXVzZXNMb2NhdGlvblVwZGF0ZXNBdXRvbWF0aWNhbGx5OiBJb3NCb29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIGFsbG93cyBiYWNrZ3JvdW5kIGxvY2F0aW9uIHVwZGF0ZXNcclxuICAgKi9cclxuICBhbGxvd3NCYWNrZ3JvdW5kTG9jYXRpb25VcGRhdGVzOiBJb3NCb29sZWFuO1xyXG4gIC8qKlxyXG4gICAqIGxvY2F0aW9uIHRpbWVvdXRcclxuICAgKi9cclxuICBsb2NhdGlvblRpbWVvdXQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiByZSBnZW9jb2RlIHRpbWVvdXRcclxuICAgKi9cclxuICByZUdlb2NvZGVUaW1lb3V0PzogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIGxvY2F0aW5nIHdpdGggcmUgZ2VvY29kZVxyXG4gICAqL1xyXG4gIGxvY2F0aW5nV2l0aFJlR2VvY29kZT86IElvc0Jvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBpb3MgcG9zaXRpb25pbmcgYWNjdXJhY3lcclxuICogaHR0cHM6Ly9kZXZlbG9wZXIuYXBwbGUuY29tL2RvY3VtZW50YXRpb24vY29yZWxvY2F0aW9uL2tjbGxvY2F0aW9uYWNjdXJhY3liZXN0Zm9ybmF2aWdhdGlvblxyXG4gKi9cclxuZXhwb3J0IGVudW0gRGVzaXJlZEFjY3VyYWN5RW51bSB7XHJcbiAgLyoqXHJcbiAgICogVGhlIGhpZ2hlc3QgcG9zc2libGUgYWNjdXJhY3kgdGhhdCB1c2VzIGFkZGl0aW9uYWwgc2Vuc29yIGRhdGEgdG8gZmFjaWxpdGF0ZSBuYXZpZ2F0aW9uIGFwcHMuXHJcbiAgICovXHJcbiAga0NMTG9jYXRpb25BY2N1cmFjeUJlc3RGb3JOYXZpZ2F0aW9uID0gMSxcclxuICAvKipcclxuICAgKiBUaGUgYmVzdCBsZXZlbCBvZiBhY2N1cmFjeSBhdmFpbGFibGUuXHJcbiAgICovXHJcbiAga0NMTG9jYXRpb25BY2N1cmFjeUJlc3QgPSAyLFxyXG4gIC8qKlxyXG4gICAqIEFjY3VyYXRlIHRvIHdpdGhpbiB0ZW4gbWV0ZXJzIG9mIHRoZSBkZXNpcmVkIHRhcmdldC5cclxuICAgKi9cclxuICBrQ0xMb2NhdGlvbkFjY3VyYWN5TmVhcmVzdFRlbk1ldGVycyA9IDMsXHJcbiAgLyoqXHJcbiAgICogQWNjdXJhdGUgdG8gd2l0aGluIG9uZSBodW5kcmVkIG1ldGVycy5cclxuICAgKi9cclxuICBrQ0xMb2NhdGlvbkFjY3VyYWN5SHVuZHJlZE1ldGVycyA9IDQsXHJcbiAgLyoqXHJcbiAgICogQWNjdXJhdGUgdG8gdGhlIG5lYXJlc3Qga2lsb21ldGVyLlxyXG4gICAqL1xyXG4gIGtDTExvY2F0aW9uQWNjdXJhY3lLaWxvbWV0ZXIgPSA1LFxyXG4gIC8qKlxyXG4gICAqIEFjY3VyYXRlIHRvIHRoZSBuZWFyZXN0IHRocmVlIGtpbG9tZXRlcnMuXHJcbiAgICovXHJcbiAga0NMTG9jYXRpb25BY2N1cmFjeVRocmVlS2lsb21ldGVycyA9IDYsXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBsb2NhdGlvbk1vZGVFbnVtXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2NhdGlvbk1vZGVFbnVtIHtcclxuICBIaWdodF9BY2N1cmFjeSA9IDEsXHJcbiAgQmF0dGVyeV9TYXZpbmcgPSAyLFxyXG4gIERldmljZV9TZW5zb3JzID0gMyxcclxufVxyXG5cclxuLyoqXHJcbiAqIGxvY2F0aW9uUHJvdG9jb2xFbnVtXHJcbiAqL1xyXG5leHBvcnQgZW51bSBMb2NhdGlvblByb3RvY29sRW51bSB7XHJcbiAgSFRUUCA9IDEsXHJcbiAgSFRUUFMgPSAyLFxyXG59XHJcblxyXG4vKipcclxuICogaW9zIGJvb2xlYW5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIHR5cGUgSW9zQm9vbGVhbiA9ICdZRVMnIHwgJ05PJztcclxuXHJcbi8qKlxyXG4gKiBQb3NpdGlvbmluZyByZXR1cm4gcmVzdWx0XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uUmVzIHtcclxuICAvKipcclxuICAgKiBTdGF0dXMgY29kZVxyXG4gICAqL1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBsYXRpdHVkZVxyXG4gICAqL1xyXG4gIGxhdGl0dWRlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogbG9uZ2l0dWRlXHJcbiAgICovXHJcbiAgbG9uZ2l0dWRlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYWNjdXJhY3lcclxuICAgKi9cclxuICBhY2N1cmFjeTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkZHJlc3NcclxuICAgKi9cclxuICBmb3JtYXR0ZWRBZGRyZXNzOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY291bnRyeVxyXG4gICAqL1xyXG4gIGNvdW50cnk6IHN0cmluZztcclxuICAvKipcclxuICAgKiBwcm92aW5jZVxyXG4gICAqL1xyXG4gIHByb3ZpbmNlOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY2l0eVxyXG4gICAqL1xyXG4gIGNpdHk6IHN0cmluZztcclxuICAvKipcclxuICAgKiBkaXN0cmljdFxyXG4gICAqL1xyXG4gIGRpc3RyaWN0OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogY2l0eWNvZGVcclxuICAgKi9cclxuICBjaXR5Y29kZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGFkY29kZVxyXG4gICAqL1xyXG4gIGFkY29kZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHN0cmVldFxyXG4gICAqL1xyXG4gIHN0cmVldDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFN0cmVldCBudW1iZXIgaW5mb3JtYXRpb25cclxuICAgKi9cclxuICBudW1iZXI6IHN0cmluZztcclxuICAvKipcclxuICAgKiBQT0kgbmFtZVxyXG4gICAqL1xyXG4gIFBPSU5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBBT0kgTmFtZVxyXG4gICAqL1xyXG4gIEFPSU5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBhbHRpdHVkZVxyXG4gICAqL1xyXG4gIGFsdGl0dWRlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIHNwZWVkXHJcbiAgICovXHJcbiAgc3BlZWQ/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYmVhcmluZ1xyXG4gICAqL1xyXG4gIGJlYXJpbmc/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogYnVpbGRpbmcgaWRcclxuICAgKi9cclxuICBidWlsZGluZ0lkPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIGZsb29yXHJcbiAgICovXHJcbiAgZmxvb3I/OiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogZ3BzIGFjY3VyYWN5IHN0YXR1c1xyXG4gICAqL1xyXG4gIGdwc0FjY3VyYWN5U3RhdHVzPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIEdldCBsb2NhdGlvbiByZXN1bHQgc291cmNlXHJcbiAgICovXHJcbiAgbG9jYXRpb25UeXBlPzogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIExvY2F0aW9uIGRldGFpbFxyXG4gICAqL1xyXG4gIGxvY2F0aW9uRGV0YWlsPzogc3RyaW5nO1xyXG59XHJcbiJdfQ==