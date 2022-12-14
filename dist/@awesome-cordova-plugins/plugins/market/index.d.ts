import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Market
 * @description
 * Opens an app's page in the market place (Google Play, App Store)
 *
 * @usage
 * ```typescript
 * import { Market } from '@awesome-cordova-plugins/market/ngx';
 *
 * constructor(private market: Market) { }
 *
 * ...
 *
 * this.market.open('your.package.name');
 *
 * ```
 */
export declare class MarketOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Opens an app in Google Play / App Store
     * @param appId {string} Package name
     * @return {Promise<any>}
     */
    open(appId: string): Promise<any>;
    /**
     * Search apps by keyword
     * @param keyword {string} Keyword
     * @return {Promise<any>}
     */
    search(keyword: string): Promise<any>;
}

export declare const Market: MarketOriginal;