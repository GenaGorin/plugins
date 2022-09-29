import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Pollfish
 * @description
 * Pollfish Ionic Native plugin wrapper
 * @usage
 * ```typescript
 * import { Pollfish } from '@awesome-cordova-plugins/pollfish/ngx';
 *
 *
 * constructor(private pollfish: Pollfish) { }
 *
 * ...
 *
 * this.pollfish.init(false, false, 'YOUR_API_KEY', 1, 8, 'REQUEST_UUID', false);
 *
 * this.pollfish.initWithUserAttributes(false, false, 'YOUR_API_KEY', 1, 8, 'REQUEST_UUID', false, {
 *  'gender': '1',
 *  ...
 * });
 *
 * this.pollfish.showPollfish();
 *
 * this.pollfish.hidePollfish();
 *
 * // Event Listeners
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishSurveyReceived, (surveyInfo) => {
 *  console.log("Survey Received: " + JSON.stringify(surveyInfo));
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishSurveyCompleted, (result) => {
 *  console.log("Survey Completed: " + JSON.stringify(surveyInfo));
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishUserNotEligible, (_) => {
 *  console.log("Pollfish User Not Eligible");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishSurveyNotAvailable, (_) => {
 *  console.log("Pollfish Survey not available");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishOpened, (_) => {
 *  console.log("Pollfish Survey panel is open");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishClosed, (_) => {
 *  console.log("Pollfish Survey panel is closed");
 * });
 *
 * this.pollfish.setEventCallback(pollfish.EventListener.OnPollfishUserRejectedSurvey, (_) => {
 *  console.log("Pollfish User Rejected Survey");
 * });
 *
 * ```
 */
export declare class PollfishOriginal extends AwesomeCordovaNativePlugin {
    EventListener: {
        OnPollfishClosed: string;
        OnPollfishOpened: string;
        OnPollfishSurveyReceived: string;
        OnPollfishSurveyCompleted: string;
        OnPollfishUserNotEligible: string;
        OnPollfishUserRejectedSurvey: string;
        OnPollfishSurveyNotAvailable: string;
    };
    Position: {
        TOP_LEFT: number;
        TOP_RIGHT: number;
        MIDDLE_LEFT: number;
        MIDDLE_RIGHT: number;
        BOTTOM_LEFT: number;
        BOTTOM_RIGHT: number;
    };
    /**
     * Function to init Pollfish
     *
     * @param releaseMode {boolean}
     * @param rewardMode {boolean}
     * @param apiKey {string}
     * @param position {number}
     * @param padding {number}
     * @param requestUUID {string}
     * @param offerwallMode {boolean}
     */
    init(releaseMode: boolean, rewardMode: boolean, apiKey: string, position: number, padding: number, requestUUID: string, offerwallMode: boolean): any;
    /**
     * Function to init Pollfish with user attributes
     *
     * @param releaseMode {boolean}
     * @param rewardMode {boolean}
     * @param apiKey {string}
     * @param position {number}
     * @param padding {number}
     * @param requestUUID {string}
     * @param offerwallMode {boolean}
     * @param userAttributes {Json}
     */
    initWithUserAttributes(releaseMode: boolean, rewardMode: boolean, apiKey: string, position: number, padding: number, requestUUID: string, offerwallMode: boolean, userAttributes: {}): void;
    /**
     * Function to manually show Pollfish
     */
    showPollfish(): void;
    /**
     * Function to manually hide Pollfish
     */
    hidePollfish(): void;
    /**
     * Function to set event callbacks
     *
     * @param eventName
     * @param callback
     */
    setEventCallback(eventName: string, callback: (info?: any) => void): void;
}

export declare const Pollfish: PollfishOriginal;