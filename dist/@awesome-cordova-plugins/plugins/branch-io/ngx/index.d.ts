import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface BranchIoPromise {
    $identity_id?: number;
    $one_time_use?: boolean;
    '+click_timestamp'?: number;
    '+clicked_branch_link'?: boolean;
    '+is_first_session'?: boolean;
    '+match_guaranteed'?: boolean;
    contentMetadata?: string;
    source?: string;
    '~campaign'?: string;
    '~channel'?: string;
    '~creation_source'?: string;
    '~feature'?: string;
    '~id'?: number;
    '~referring_link:'?: string;
    [x: string]: any;
}
export interface BranchIoAnalytics {
    channel?: string;
    feature?: string;
    campaign?: string;
    stage?: string;
    tags?: string[];
    [x: string]: any;
}
export interface BranchIoProperties {
    contentMetadata?: {
        [x: string]: any;
    };
    [x: string]: any;
}
export interface BranchUniversalObject {
    generateShortUrl(analytics: BranchIoAnalytics, properties: BranchIoProperties): Promise<any>;
    registerView(): Promise<any>;
    showShareSheet(analytics: BranchIoAnalytics, properties: BranchIoProperties, shareText: string): Promise<any>;
    onShareSheetLaunched(callback: any): void;
    onShareSheetDismissed(callback: any): void;
    onLinkShareResponse(callback: any): void;
    onChannelSelected(callback: any): void;
    listOnSpotlight(): Promise<any>;
}
/**
 * @name BranchIo
 * @description
 * Branch.io is an attribution service for deeplinking and invitation links
 * @usage
 * ```
 * import { BranchIo } from '@awesome-cordova-plugins/branch-io/ngx';
 *
 *
 * constructor(private branch: BranchIo) { }
 *
 * ```
 * @interfaces
 * BranchIoPromise
 * BranchIoAnalytics
 * BranchIoProperties
 * BranchUniversalObject
 */
export declare class BranchIo extends AwesomeCordovaNativePlugin {
    /**
     * for development and debugging only
     *
     * @param {boolean} enable Enable debug
     * @returns {Promise<any>}
     */
    setDebug(enable: boolean): Promise<any>;
    /**
     * Disable tracking
     *
     * @param {boolean} disable disable tracking
     * @returns {Promise<any>}
     */
    disableTracking(disable: boolean): Promise<any>;
    /**
     * Initializes Branch
     *
     * @returns {Promise<any>}
     */
    initSession(): Promise<BranchIoPromise>;
    /**
     * Initializes Branch with callback
     *
     * @returns {Observable<any>}
     */
    initSessionWithCallback(): Observable<BranchIoPromise>;
    /**
     * Set Request Metadata
     *
     * @returns {Promise<any>}
     */
    setRequestMetadata(): Promise<any>;
    /**
     * for better Android matching
     *
     * @param {string} linkDomain LinkDomain at branch
     * @returns {Promise<any>}
     */
    setCookieBasedMatching(linkDomain: string): Promise<any>;
    /**
     * First data
     *
     * @returns {Promise<any>}
     */
    getFirstReferringParams(): Promise<any>;
    /**
     * Latest data
     *
     * @returns {Promise<any>}
     */
    getLatestReferringParams(): Promise<any>;
    /**
     * Set identy of user
     *
     * @param {string} userId
     * @returns {Promise<any>}
     */
    setIdentity(userId: string): Promise<any>;
    /**
     * Logout user
     *
     * @returns {Promise<any>}
     */
    logout(): Promise<any>;
    /**
     * Registers a custom event
     *
     * @param {string} eventName
     * @param {any} metaData
     * @returns {Promise<any>}
     */
    userCompletedAction(eventName: string, metaData: any): Promise<any>;
    /**
     * Send Commerce Event
     *
     * @deprecated since v.3.1.0. As of https://help.branch.io/developers-hub/docs/cordova-phonegap-ionic#track-commerce
     * @param {string} event
     * @param {any} metaData
     * @returns {Promise<any>}
     */
    sendCommerceEvent(event: string, metaData: any): Promise<any>;
    /**
     * Send Branch Event
     *
     * @param {string} event
     * @param {any} metaData
     * @returns {Promise<any>}
     */
    sendBranchEvent(event: string, metaData: any): Promise<any>;
    /**
     * create a branchUniversalObj variable to reference with other Branch methods
     *
     * @param {BranchIoProperties} properties
     * @returns {Promise<BranchUniversalObject>}
     */
    createBranchUniversalObject(properties: BranchIoProperties): Promise<BranchUniversalObject>;
    /**
     * Load credits
     *
     * @param {any} bucket
     * @returns {Promise<any>}
     */
    loadRewards(bucket: any): Promise<any>;
    /**
     * Redeem Rewards
     *
     * @param {string} value
     * @param {any} bucket
     * @returns {Promise<any>}
     */
    redeemRewards(value: string, bucket: any): Promise<any>;
    /**
     * Show credit history
     *
     * @returns {Promise<any>}
     */
    creditHistory(): Promise<any>;
}
