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
var ShakeOriginal = /** @class */ (function (_super) {
    __extends(ShakeOriginal, _super);
    function ShakeOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShakeOriginal.prototype.startWatch = function (sensitivity) { return cordova(this, "startWatch", { "observable": true, "clearFunction": "stopWatch", "successIndex": 0, "errorIndex": 2 }, arguments); };
    ShakeOriginal.pluginName = "Shake";
    ShakeOriginal.plugin = "cordova-plugin-shake";
    ShakeOriginal.pluginRef = "shake";
    ShakeOriginal.repo = "https://github.com/leecrossley/cordova-plugin-shake";
    ShakeOriginal.platforms = ["iOS"];
    return ShakeOriginal;
}(AwesomeCordovaNativePlugin));
var Shake = new ShakeOriginal();
export { Shake };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvc2hha2UvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUEyQlAseUJBQTBCOzs7O0lBYW5ELDBCQUFVLGFBQUMsV0FBb0I7Ozs7OztnQkExQ2pDO0VBNkIyQiwwQkFBMEI7U0FBeEMsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29yZG92YSwgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG4vKipcclxuICogQG5hbWUgU2hha2VcclxuICogQGRlc2NyaXB0aW9uIEhhbmRsZXMgc2hha2UgZ2VzdHVyZVxyXG4gKiBAdXNhZ2VcclxuICogYGBgdHlwZXNjcmlwdFxyXG4gKiBpbXBvcnQgeyBTaGFrZSB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9zaGFrZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYWtlOiBTaGFrZSkgeyB9XHJcbiAqXHJcbiAqIC4uLlxyXG4gKlxyXG4gKiBjb25zdCB3YXRjaCA9IHRoaXMuc2hha2Uuc3RhcnRXYXRjaCg2MCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICogICAvLyBkbyBzb21ldGhpbmdcclxuICogICB9KTtcclxuICpcclxuICogd2F0Y2gudW5zdWJzY3JpYmUoKTtcclxuICogYGBgXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnU2hha2UnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXNoYWtlJyxcclxuICBwbHVnaW5SZWY6ICdzaGFrZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sZWVjcm9zc2xleS9jb3Jkb3ZhLXBsdWdpbi1zaGFrZScsXHJcbiAgcGxhdGZvcm1zOiBbJ2lPUyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBTaGFrZSBleHRlbmRzIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luIHtcclxuICAvKipcclxuICAgKiBXYXRjaCBmb3Igc2hha2UgZ2VzdHVyZVxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNlbnNpdGl2aXR5IHtudW1iZXJ9IE9wdGlvbmFsIHNlbnNpdGl2aXR5IHBhcmFtZXRlci4gRGVmYXVsdHMgdG8gNDBcclxuICAgKiBAcmV0dXJucyB7T2JzZXJ2YWJsZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKHtcclxuICAgIG9ic2VydmFibGU6IHRydWUsXHJcbiAgICBjbGVhckZ1bmN0aW9uOiAnc3RvcFdhdGNoJyxcclxuICAgIHN1Y2Nlc3NJbmRleDogMCxcclxuICAgIGVycm9ySW5kZXg6IDIsXHJcbiAgfSlcclxuICBzdGFydFdhdGNoKHNlbnNpdGl2aXR5PzogbnVtYmVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn1cclxuIl19