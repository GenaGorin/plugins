import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name In App Review
 * @description
 * This plugin does use the iOS class SKStore​Review​Controller to open the inApp review popup available since iOS 10.3
 *
 * This functionality only works on iOS devices
 * @usage
 * ```typescript
 * import { InAppReview } from '@awesome-cordova-plugins/in-app-review/ngx';
 *
 *
 * constructor(private inAppReview: InAppReview) { }
 *
 * ...
 *
 *
 * this.inAppReview.requestReview()
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class InAppReviewOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Open the inApp review popup
     *
     * @returns {Promise<any>} Returns a promise that resolves when something happens
     */
    requestReview(): Promise<any>;
}

export declare const InAppReview: InAppReviewOriginal;