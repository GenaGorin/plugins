import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Zoom
 * @description
 * A Cordova plugin to use Zoom Video Conferencing services on Cordova applications.
 * @usage
 * ```typescript
 * import { Zoom } from '@awesome-cordova-plugins/zoom';
 *
 *
 * constructor(private zoomService: Zoom) { }
 *
 * ...
 *
 * // Initialize Zoom SDK, need to be called when app fired up.
 * this.zoomService.initialize(API_KEY, API_SECRET)
 *   .then((success: any) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Log user in with Zoom username and password.
 * this.zoomService.login(userName, password)
 *   .then((success: any) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Log user out.
 * this.zoomService.logout()
 *   .then((success: boolean) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Check whether user is logged in.
 * this.zoomService.isLoggedIn()
 *   .then((success: boolean) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // meeting options (Only available for Android)
 * let options = {
 * "no_driving_mode":true,
 * "no_invite":true,
 * "no_meeting_end_message":true,
 * "no_titlebar":false,
 * "no_bottom_toolbar":false,
 * "no_dial_in_via_phone":true,
 * "no_dial_out_to_phone":true,
 * "no_disconnect_audio":true,
 * "no_share":true,
 * "no_audio":true,
 * "no_video":true,
 * "no_meeting_error_message":true
 * };
 *
 * // Join meeting.
 * this.zoomService.joinMeeting(meetingNumber, meetingPassword, displayName, options)
 *   .then((success: any) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Start an existing meeting for non-login user.
 * this.zoomService.startMeetingWithZAK(meetingNumber, displayName, zoomToken, zoomAccessToken, userId, options)
 *   .then((success: any) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Start an existing meeting for logged in user.
 * this.zoomService.startMeeting(meetingNumber, vanityId, options)
 *   .then((success: any) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Start an instant meeting for logged in user.
 * this.zoomService.startInstantMeeting()
 *   .then((success: anu) => console.log(success))
 *   .catch((error: any) => console.log(error));
 *
 * // Set language.
 * this.zoomService.setLanguage("en-US")
 *   .then((success: any) => console.log(success))
 *   .catch((error: any) => console.log(error));
 * ```
 */
export declare class Zoom extends AwesomeCordovaNativePlugin {
    /**
     * Initialize Zoom SDK.
     *
     * @param appKey    Zoom SDK app key.
     * @param appSecret Zoom SDK app secret.
     * @returns {Promise<any>}
     */
    initialize(appKey: string, appSecret: string): Promise<any>;
    /**
     * Log user in with Zoom username and password.
     *
     * @param username user's Zoom username.
     * @param password user's Zoom password.
     * @returns {Promise<any>}
     */
    login(username: string, password: string): Promise<any>;
    /**
     * Log user out.
     *
     * @returns {Promise<any>} true if logout success / false if failed.
     */
    logout(): Promise<any>;
    /**
     * Check whether the user is logged in.
     *
     * @returns {Promise<boolean>} true if is logged in / false if not.
     */
    isLoggedIn(): Promise<boolean>;
    /**
     * Join a meeting for logged in user.
     *
     * @param meetingNo       meeting number.
     * @param meetingPassword meeting password.
     * @param displayName
     * @param options meeting options.
     * @returns {Promise<any>}
     */
    joinMeeting(meetingNo: string, meetingPassword: string, displayName: string, options: any): Promise<any>;
    /**
     * Start a meeting for non-login user.
     *
     * @param meetingNo        meeting number.
     * @param displayName      display name shown in meeting.
     * @param zoomToken        zoom token retrieved from Zoom Rest API.
     * @param zoomAccessToken  zoom access token retrieved from Zoom Rest API.
     * @param userId           user ID retrieved from Zoom Rest API.
     * @param options          meeting options.
     * @returns {Promise<any>}
     */
    startMeetingWithZAK(meetingNo: string, displayName: string, zoomToken: string, zoomAccessToken: string, userId: string, options: any): Promise<any>;
    /**
     * Start a meeting for logged in user.
     *
     * @param meetingNo   meeting number.
     * @param options     meeting option.
     * @returns {Promise<any>}
     */
    startMeeting(meetingNo: string, options: any): Promise<any>;
    /**
     * Start an instant meeting for logged in user.
     *
     * @param options meeting option.
     * @returns {Promise<any>}
     */
    startInstantMeeting(options: any): Promise<any>;
    /**
     * Set language.
     *
     * @param languageTag language name.
     * @returns {Promise<any>}
     */
    setLocale(languageTag: string): Promise<any>;
}
