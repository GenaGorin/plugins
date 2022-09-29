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
var MusicControlsOriginal = /** @class */ (function (_super) {
    __extends(MusicControlsOriginal, _super);
    function MusicControlsOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MusicControlsOriginal.prototype.create = function (options) { return cordova(this, "create", {}, arguments); };
    MusicControlsOriginal.prototype.destroy = function () { return cordova(this, "destroy", {}, arguments); };
    MusicControlsOriginal.prototype.subscribe = function () { return cordova(this, "subscribe", { "observable": true }, arguments); };
    MusicControlsOriginal.prototype.listen = function () { return cordova(this, "listen", { "sync": true }, arguments); };
    MusicControlsOriginal.prototype.updateIsPlaying = function (isPlaying) { return cordova(this, "updateIsPlaying", {}, arguments); };
    MusicControlsOriginal.prototype.updateElapsed = function (args) { return cordova(this, "updateElapsed", { "platforms": ["iOS"] }, arguments); };
    MusicControlsOriginal.prototype.updateDismissable = function (dismissable) { return cordova(this, "updateDismissable", {}, arguments); };
    MusicControlsOriginal.pluginName = "MusicControls";
    MusicControlsOriginal.plugin = "cordova-plugin-music-controls2";
    MusicControlsOriginal.pluginRef = "MusicControls";
    MusicControlsOriginal.repo = "https://github.com/ghenry22/cordova-plugin-music-controls2";
    MusicControlsOriginal.platforms = ["Android", "iOS", "Windows"];
    return MusicControlsOriginal;
}(AwesomeCordovaNativePlugin));
var MusicControls = new MusicControlsOriginal();
export { MusicControls };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvbXVzaWMtY29udHJvbHMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sdUNBQStDLE1BQU0sK0JBQStCLENBQUM7QUFDNUYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLE1BQU0sQ0FBQzs7SUF5SkMsaUNBQTBCOzs7O0lBUTNELDhCQUFNLGFBQUMsT0FBNkI7SUFVcEMsK0JBQU87SUFZUCxpQ0FBUztJQVFULDhCQUFNO0lBUU4sdUNBQWUsYUFBQyxTQUFrQjtJQVlsQyxxQ0FBYSxhQUFDLElBQTZDO0lBUTNELHlDQUFpQixhQUFDLFdBQW9COzs7Ozs7d0JBN054QztFQTJKbUMsMEJBQTBCO1NBQWhELGFBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvcmRvdmEsIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvY29yZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTXVzaWNDb250cm9sc09wdGlvbnMge1xyXG4gIHRyYWNrPzogc3RyaW5nO1xyXG4gIGFydGlzdD86IHN0cmluZztcclxuICBjb3Zlcj86IHN0cmluZztcclxuICBpc1BsYXlpbmc/OiBib29sZWFuO1xyXG4gIGRpc21pc3NhYmxlPzogYm9vbGVhbjtcclxuICBoYXNQcmV2PzogYm9vbGVhbjtcclxuICBoYXNOZXh0PzogYm9vbGVhbjtcclxuICBoYXNTa2lwRm9yd2FyZD86IGJvb2xlYW47XHJcbiAgaGFzU2tpcEJhY2t3YXJkPzogYm9vbGVhbjtcclxuICBza2lwRm9yd2FyZEludGVydmFsPzogbnVtYmVyO1xyXG4gIHNraXBCYWNrd2FyZEludGVydmFsPzogbnVtYmVyO1xyXG4gIGhhc1NjcnViYmluZz86IGJvb2xlYW47XHJcbiAgaGFzQ2xvc2U/OiBib29sZWFuO1xyXG4gIGFsYnVtPzogc3RyaW5nO1xyXG4gIGR1cmF0aW9uPzogbnVtYmVyO1xyXG4gIGVsYXBzZWQ/OiBudW1iZXI7XHJcbiAgdGlja2VyPzogc3RyaW5nO1xyXG4gIHBsYXlJY29uPzogc3RyaW5nO1xyXG4gIHBhdXNlSWNvbj86IHN0cmluZztcclxuICBwcmV2SWNvbj86IHN0cmluZztcclxuICBuZXh0SWNvbj86IHN0cmluZztcclxuICBjbG9zZUljb24/OiBzdHJpbmc7XHJcbiAgbm90aWZpY2F0aW9uSWNvbj86IHN0cmluZztcclxufVxyXG5cclxuLyoqXHJcbiAqIEBuYW1lIE11c2ljIENvbnRyb2xzXHJcbiAqIEBjYXBhY2l0b3JpbmNvbXBhdGlibGUgdHJ1ZVxyXG4gKiBAZGVzY3JpcHRpb25cclxuICogTXVzaWMgY29udHJvbHMgZm9yIENvcmRvdmEgYXBwbGljYXRpb25zLlxyXG4gKiBEaXNwbGF5IGEgJ21lZGlhJyBub3RpZmljYXRpb24gd2l0aCBwbGF5L3BhdXNlLCBwcmV2aW91cywgbmV4dCBidXR0b25zLCBhbGxvd2luZyB0aGUgdXNlciB0byBjb250cm9sIHRoZSBwbGF5LlxyXG4gKiBIYW5kbGUgYWxzbyBoZWFkc2V0IGV2ZW50IChwbHVnLCB1bnBsdWcsIGhlYWRzZXQgYnV0dG9uKS5cclxuICogQHVzYWdlXHJcbiAqIGBgYHR5cGVzY3JpcHRcclxuICogaW1wb3J0IHsgTXVzaWNDb250cm9scyB9IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9tdXNpYy1jb250cm9scy9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIG11c2ljQ29udHJvbHM6IE11c2ljQ29udHJvbHMpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5tdXNpY0NvbnRyb2xzLmNyZWF0ZSh7XHJcbiAqICAgdHJhY2sgICAgICAgOiAnVGltZSBpcyBSdW5uaW5nIE91dCcsICAgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCA6ICcnXHJcbiAqICAgYXJ0aXN0ICAgICAgOiAnTXVzZScsICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCA6ICcnXHJcbiAqICAgY292ZXIgICAgICAgOiAnYWxidW1zL2Fic29sdXRpb24uanBnJywgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCA6IG5vdGhpbmdcclxuICogICAvLyBjb3ZlciBjYW4gYmUgYSBsb2NhbCBwYXRoICh1c2UgZnVsbHBhdGggJ2ZpbGU6Ly8vc3RvcmFnZS9lbXVsYXRlZC8uLi4nLCBvciBvbmx5ICdteV9pbWFnZS5qcGcnIGlmIG15X2ltYWdlLmpwZyBpcyBpbiB0aGUgd3d3IGZvbGRlciBvZiB5b3VyIGFwcClcclxuICogICAvLyAgICAgICAgICAgb3IgYSByZW1vdGUgdXJsICgnaHR0cDovLy4uLicsICdodHRwczovLy4uLicsICdmdHA6Ly8uLi4nKVxyXG4gKiAgIGlzUGxheWluZyAgIDogdHJ1ZSwgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgOiB0cnVlXHJcbiAqICAgZGlzbWlzc2FibGUgOiB0cnVlLCAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcHRpb25hbCwgZGVmYXVsdCA6IGZhbHNlXHJcbiAqXHJcbiAqICAgLy8gaGlkZSBwcmV2aW91cy9uZXh0L2Nsb3NlIGJ1dHRvbnM6XHJcbiAqICAgaGFzUHJldiAgIDogZmFsc2UsICAgICAgLy8gc2hvdyBwcmV2aW91cyBidXR0b24sIG9wdGlvbmFsLCBkZWZhdWx0OiB0cnVlXHJcbiAqICAgaGFzTmV4dCAgIDogZmFsc2UsICAgICAgLy8gc2hvdyBuZXh0IGJ1dHRvbiwgb3B0aW9uYWwsIGRlZmF1bHQ6IHRydWVcclxuICogICBoYXNDbG9zZSAgOiB0cnVlLCAgICAgICAvLyBzaG93IGNsb3NlIGJ1dHRvbiwgb3B0aW9uYWwsIGRlZmF1bHQ6IGZhbHNlXHJcbiAqXHJcbiAqIC8vIGlPUyBvbmx5LCBvcHRpb25hbFxyXG4gKiAgIGFsYnVtICAgICAgIDogJ0Fic29sdXRpb24nLCAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQ6ICcnXHJcbiAqICAgZHVyYXRpb24gOiA2MCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQ6IDBcclxuICogICBlbGFwc2VkIDogMTAsIC8vIG9wdGlvbmFsLCBkZWZhdWx0OiAwXHJcbiAqICAgaGFzU2tpcEZvcndhcmQgOiB0cnVlLCAgLy8gc2hvdyBza2lwIGZvcndhcmQgYnV0dG9uLCBvcHRpb25hbCwgZGVmYXVsdDogZmFsc2VcclxuICogICBoYXNTa2lwQmFja3dhcmQgOiB0cnVlLCAvLyBzaG93IHNraXAgYmFja3dhcmQgYnV0dG9uLCBvcHRpb25hbCwgZGVmYXVsdDogZmFsc2VcclxuICogICBza2lwRm9yd2FyZEludGVydmFsOiAxNSwgLy8gZGlzcGxheSBudW1iZXIgZm9yIHNraXAgZm9yd2FyZCwgb3B0aW9uYWwsIGRlZmF1bHQ6IDBcclxuICogICBza2lwQmFja3dhcmRJbnRlcnZhbDogMTUsIC8vIGRpc3BsYXkgbnVtYmVyIGZvciBza2lwIGJhY2t3YXJkLCBvcHRpb25hbCwgZGVmYXVsdDogMFxyXG4gKiAgIGhhc1NjcnViYmluZzogZmFsc2UsIC8vIGVuYWJsZSBzY3J1YmJpbmcgZnJvbSBjb250cm9sIGNlbnRlciBhbmQgbG9ja3NjcmVlbiBwcm9ncmVzcyBiYXIsIG9wdGlvbmFsXHJcbiAqXHJcbiAqICAgLy8gQW5kcm9pZCBvbmx5LCBvcHRpb25hbFxyXG4gKiAgIC8vIHRleHQgZGlzcGxheWVkIGluIHRoZSBzdGF0dXMgYmFyIHdoZW4gdGhlIG5vdGlmaWNhdGlvbiAoYW5kIHRoZSB0aWNrZXIpIGFyZSB1cGRhdGVkLCBvcHRpb25hbFxyXG4gKiAgIHRpY2tlciAgICA6ICdOb3cgcGxheWluZyBcIlRpbWUgaXMgUnVubmluZyBPdXRcIicsXHJcbiAqICAgLy8gQWxsIGljb25zIGRlZmF1bHQgdG8gdGhlaXIgYnVpbHQtaW4gYW5kcm9pZCBlcXVpdmFsZW50c1xyXG4gKiAgIHBsYXlJY29uOiAnbWVkaWFfcGxheScsXHJcbiAqICAgcGF1c2VJY29uOiAnbWVkaWFfcGF1c2UnLFxyXG4gKiAgIHByZXZJY29uOiAnbWVkaWFfcHJldicsXHJcbiAqICAgbmV4dEljb246ICdtZWRpYV9uZXh0JyxcclxuICogICBjbG9zZUljb246ICdtZWRpYV9jbG9zZScsXHJcbiAqICAgbm90aWZpY2F0aW9uSWNvbjogJ25vdGlmaWNhdGlvbidcclxuICogIH0pO1xyXG4gKlxyXG4gKiAgdGhpcy5tdXNpY0NvbnRyb2xzLnN1YnNjcmliZSgpLnN1YnNjcmliZShhY3Rpb24gPT4ge1xyXG4gKlxyXG4gKiAgICBmdW5jdGlvbiBldmVudHMoYWN0aW9uKSB7XHJcbiAqICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoYWN0aW9uKS5tZXNzYWdlO1xyXG4gKiAgICAgIFx0c3dpdGNoKG1lc3NhZ2UpIHtcclxuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtbmV4dCc6XHJcbiAqICAgICAgXHRcdFx0Ly8gRG8gc29tZXRoaW5nXHJcbiAqICAgICAgXHRcdFx0YnJlYWs7XHJcbiAqICAgICAgXHRcdGNhc2UgJ211c2ljLWNvbnRyb2xzLXByZXZpb3VzJzpcclxuICogICAgICBcdFx0XHQvLyBEbyBzb21ldGhpbmdcclxuICogICAgICBcdFx0XHRicmVhaztcclxuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtcGF1c2UnOlxyXG4gKiAgICAgIFx0XHRcdC8vIERvIHNvbWV0aGluZ1xyXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xyXG4gKiAgICAgIFx0XHRjYXNlICdtdXNpYy1jb250cm9scy1wbGF5JzpcclxuICogICAgICBcdFx0XHQvLyBEbyBzb21ldGhpbmdcclxuICogICAgICBcdFx0XHRicmVhaztcclxuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtZGVzdHJveSc6XHJcbiAqICAgICAgXHRcdFx0Ly8gRG8gc29tZXRoaW5nXHJcbiAqICAgICAgXHRcdFx0YnJlYWs7XHJcbiAqXHJcbiAqICAgICAgICAgIC8vIEV4dGVybmFsIGNvbnRyb2xzIChpT1Mgb25seSlcclxuICogICAgICAgICAgY2FzZSAnbXVzaWMtY29udHJvbHMtdG9nZ2xlLXBsYXktcGF1c2UnIDpcclxuICogICAgICBcdFx0XHQvLyBEbyBzb21ldGhpbmdcclxuICogICAgICBcdFx0XHRicmVhaztcclxuICogICAgICAgICAgY2FzZSAnbXVzaWMtY29udHJvbHMtc2Vlay10byc6XHJcbiAqICAgICAgICAgICAgY29uc3Qgc2Vla1RvSW5TZWNvbmRzID0gSlNPTi5wYXJzZShhY3Rpb24pLnBvc2l0aW9uO1xyXG4gKiAgICAgICAgICAgIHRoaXMubXVzaWNDb250cm9scy51cGRhdGVFbGFwc2VkKHtcclxuICogICAgICAgICAgICAgIGVsYXBzZWQ6IHNlZWtUb0luU2Vjb25kcyxcclxuICogICAgICAgICAgICAgIGlzUGxheWluZzogdHJ1ZVxyXG4gKiAgICAgICAgICAgIH0pO1xyXG4gKiAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZ1xyXG4gKiAgICAgICAgICAgIGJyZWFrO1xyXG4gKiAgICAgICAgICBjYXNlICdtdXNpYy1jb250cm9scy1za2lwLWZvcndhcmQnOlxyXG4gKiAgICAgICAgICAgIC8vIERvIHNvbWV0aGluZ1xyXG4gKiAgICAgICAgICAgIGJyZWFrO1xyXG4gKiAgICAgICAgICBjYXNlICdtdXNpYy1jb250cm9scy1za2lwLWJhY2t3YXJkJzpcclxuICogICAgICAgICAgICAvLyBEbyBzb21ldGhpbmdcclxuICogICAgICAgICAgICBicmVhaztcclxuICpcclxuICogICAgICBcdFx0Ly8gSGVhZHNldCBldmVudHMgKEFuZHJvaWQgb25seSlcclxuICogICAgICBcdFx0Ly8gQWxsIG1lZGlhIGJ1dHRvbiBldmVudHMgYXJlIGxpc3RlZCBiZWxvd1xyXG4gKiAgICAgIFx0XHRjYXNlICdtdXNpYy1jb250cm9scy1tZWRpYS1idXR0b24nIDpcclxuICogICAgICBcdFx0XHQvLyBEbyBzb21ldGhpbmdcclxuICogICAgICBcdFx0XHRicmVhaztcclxuICogICAgICBcdFx0Y2FzZSAnbXVzaWMtY29udHJvbHMtaGVhZHNldC11bnBsdWdnZWQnOlxyXG4gKiAgICAgIFx0XHRcdC8vIERvIHNvbWV0aGluZ1xyXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xyXG4gKiAgICAgIFx0XHRjYXNlICdtdXNpYy1jb250cm9scy1oZWFkc2V0LXBsdWdnZWQnOlxyXG4gKiAgICAgIFx0XHRcdC8vIERvIHNvbWV0aGluZ1xyXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xyXG4gKiAgICAgIFx0XHRkZWZhdWx0OlxyXG4gKiAgICAgIFx0XHRcdGJyZWFrO1xyXG4gKiAgICAgIFx0fVxyXG4gKiAgICAgIH1cclxuICogICAgIH0pO1xyXG4gKlxyXG4gKiAgdGhpcy5tdXNpY0NvbnRyb2xzLmxpc3RlbigpOyAvLyBhY3RpdmF0ZXMgdGhlIG9ic2VydmFibGUgYWJvdmVcclxuICpcclxuICogIHRoaXMubXVzaWNDb250cm9scy51cGRhdGVJc1BsYXlpbmcodHJ1ZSk7XHJcbiAqXHJcbiAqXHJcbiAqIGBgYFxyXG4gKiBAaW50ZXJmYWNlc1xyXG4gKiBNdXNpY0NvbnRyb2xzT3B0aW9uc1xyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ011c2ljQ29udHJvbHMnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLW11c2ljLWNvbnRyb2xzMicsXHJcbiAgcGx1Z2luUmVmOiAnTXVzaWNDb250cm9scycsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9naGVucnkyMi9jb3Jkb3ZhLXBsdWdpbi1tdXNpYy1jb250cm9sczInLFxyXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIE11c2ljQ29udHJvbHMgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHRoZSBtZWRpYSBjb250cm9sc1xyXG4gICAqXHJcbiAgICogQHBhcmFtIG9wdGlvbnMge011c2ljQ29udHJvbHNPcHRpb25zfVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIGNyZWF0ZShvcHRpb25zOiBNdXNpY0NvbnRyb2xzT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBEZXN0cm95IHRoZSBtZWRpYSBjb250cm9sbGVyXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICBkZXN0cm95KCk6IFByb21pc2U8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdWJzY3JpYmUgdG8gdGhlIGV2ZW50cyBvZiB0aGUgbWVkaWEgY29udHJvbGxlclxyXG4gICAqXHJcbiAgICogQHJldHVybnMge09ic2VydmFibGU8YW55Pn1cclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBvYnNlcnZhYmxlOiB0cnVlLFxyXG4gIH0pXHJcbiAgc3Vic2NyaWJlKCk6IE9ic2VydmFibGU8YW55PiB7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTdGFydCBsaXN0ZW5pbmcgZm9yIGV2ZW50cywgdGhpcyBlbmFibGVzIHRoZSBPYnNlcnZhYmxlIGZyb20gdGhlIHN1YnNjcmliZSBtZXRob2RcclxuICAgKi9cclxuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcclxuICBsaXN0ZW4oKTogdm9pZCB7fVxyXG5cclxuICAvKipcclxuICAgKiBUb2dnbGUgcGxheS9wYXVzZTpcclxuICAgKlxyXG4gICAqIEBwYXJhbSBpc1BsYXlpbmcge2Jvb2xlYW59XHJcbiAgICovXHJcbiAgQENvcmRvdmEoKVxyXG4gIHVwZGF0ZUlzUGxheWluZyhpc1BsYXlpbmc6IGJvb2xlYW4pOiB2b2lkIHt9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSBlbGFwc2VkIHRpbWUsIG9wdGlvbmFsbHkgdG9nZ2xlIHBsYXkvcGF1c2U6XHJcbiAgICpcclxuICAgKiBAcGFyYW0gYXJncyB7T2JqZWN0fVxyXG4gICAqIEBwYXJhbSBhcmdzLmVsYXBzZWRcclxuICAgKiBAcGFyYW0gYXJncy5pc1BsYXlpbmdcclxuICAgKi9cclxuICBAQ29yZG92YSh7XHJcbiAgICBwbGF0Zm9ybXM6IFsnaU9TJ10sXHJcbiAgfSlcclxuICB1cGRhdGVFbGFwc2VkKGFyZ3M6IHsgZWxhcHNlZDogbnVtYmVyOyBpc1BsYXlpbmc6IGJvb2xlYW4gfSk6IHZvaWQge31cclxuXHJcbiAgLyoqXHJcbiAgICogVG9nZ2xlIGRpc21pc3NhYmxlOlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRpc21pc3NhYmxlIHtib29sZWFufVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhKClcclxuICB1cGRhdGVEaXNtaXNzYWJsZShkaXNtaXNzYWJsZTogYm9vbGVhbik6IHZvaWQge31cclxufVxyXG4iXX0=