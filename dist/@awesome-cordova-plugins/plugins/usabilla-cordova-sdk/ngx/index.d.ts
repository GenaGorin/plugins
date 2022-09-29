import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface UsabillaResult {
    completed: boolean | string;
}
export interface UbCampaignResult {
    completed: {
        result: UbResult;
        isRedirectToAppStoreEnabled?: boolean;
    };
}
export interface UbResult {
    rating: number;
    abandonedPageIndex: number;
    sent: boolean;
}
/**
 * @name Usabilla
 * @description
 * Usabilla SDK is designed and developed to collect feedback from your users with great ease and flexibility through your mobile application.
 * This document describes library integration steps for your Cordova project.
 *
 * For more info see [Cordova plugin docs](https://github.com/usabilla/usabilla-u4a-cordova)
 * @usage
 * ```typescript
 * import { Usabilla } from '@awesome-cordova-plugins/usabilla-cordova-sdk/ngx';
 *
 *
 * constructor(private usabilla: Usabilla) { }
 *
 * ...
 *
 *
 *  this.usabilla.initialize(
 *    appID: '<your_application_id>',
 *    custom_vars: {
 *      "key": "value"
 *    });
 *
 *  this.usabilla.loadFeedbackForm(
 *    formID : '<your_form_id>'
 *    );
 *
 * ```
 */
export declare class Usabilla extends AwesomeCordovaNativePlugin {
    /**
     * Initializes Usabilla sdk for capturing feedbacks.
     *
     * @name initialize
     * @param {appId} APP_ID unique app id to initialize
     * @param appId
     * @param customVars
     * @param {customVars} CUSTOM_VARIABLES for target based event trigger
     */
    initialize(appId: string, customVars: any): Promise<UsabillaResult>;
    /**
     * Displays Feedback form based on unique form id after sdk initialization.
     *
     * @name loadFeedbackForm
     * @param formId
     * @param {formId} FORM_ID to display Feedback form for
     */
    loadFeedbackForm(formId: string): Promise<any>;
    /**
     * Displays Feedback form with current screen's snapshot and based on unique form id, after sdk initialization.
     *
     * @name loadFeedbackFormWithCurrentViewScreenshot
     * @param formId
     * @param {formId} FORM_ID to display Feedback form for
     */
    loadFeedbackFormWithCurrentViewScreenshot(formId: string): Promise<any>;
    /**
     * Displays Campaign banner targetted based on specific event and variables, after sdk initialization.
     *
     * @name sendEvent
     * @param eventId
     * @param {eventId} EVENT_ID to display Campaign banner for
     */
    sendEvent(eventId: string): Promise<UbCampaignResult>;
    /**
     * Reset Campaign for next trigger.
     *
     * @name resetCampaignData
     */
    resetCampaignData(): Promise<UsabillaResult>;
    /**
     * Dismiss or removes the Form/Banner from the view.
     *
     * @name dismiss
     */
    dismiss(): Promise<UsabillaResult>;
    /**
     * Get default masking strategy to be applied for data masking.
     *
     * @name getDefaultDataMasks
     */
    getDefaultDataMasks(): Promise<UsabillaResult>;
    /**
     * Set masking strategy for data masking.
     *
     * @name setDataMasking
     * @param {masks} Format regex to be applied for masking.
     * @param masks
     * @param maskCharacter
     * @param {maskCharacter} Character to be used as a masking character
     */
    setDataMasking(masks: any, maskCharacter: string): Promise<UsabillaResult>;
}
