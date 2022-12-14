import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export declare type AndroidExoPlayerAspectRatio = 'FILL_SCREEN' | 'FIT_SCREEN';
export interface AndroidExoPlayerParams {
    /**
     * Url of the video to play.
     */
    url: string;
    /**
     * Set the user agent. Default is `ExoPlayerPlugin`
     */
    userAgent?: string;
    /**
     * Set the player aspect ratio.
     */
    aspectRatio?: AndroidExoPlayerAspectRatio;
    /**
     * Hide controls after this many milliseconds, default is `5000`.
     */
    hideTimeout?: number;
    /**
     * When set to false stream will not automatically start.
     */
    autoPlay?: boolean;
    /**
     * Start playback at this many milliseconds into video, default is `0`.
     */
    seekTo?: number;
    /**
     * Amount of time in milliseconds to use when skipping forward, default is `1000`.
     */
    forwardTime?: number;
    /**
     * Amount of time in milliseconds to use when skipping backward, default is `1000`.
     */
    rewindTime?: number;
    /**
     * Only play audio in the backgroud, default is `false`.
     * If you pass in `audioOnly: true`, make sure to manually close the player on some event (like escape button) since the plugin won't be detecting keypresses when playing audio in the background.
     */
    audioOnly?: true;
    /**
     * Optional subtitle url to display over the video.
     * We currently support .srt and .vtt subtitle formats. Subtitles are not supported on all stream types, as ExoPlayer has requirement that both video and subtitle "must have the same number of periods, and must not have any dynamic windows", which means for simple mp4s it should work, but on more complex HLS/Dash setups it might not.
     */
    subtitleUrl?: string;
    /**
     * okhttp connect timeout in milliseconds (default is `0`)
     */
    connectTimeout?: number;
    /**
     * okhttp read timeout in milliseconds (default is `0`)
     */
    readTimeout?: number;
    /**
     * okhttp write timeout in milliseconds (default is `0`)
     */
    writeTimeout?: number;
    /**
     * okhttp socket ping interval in milliseconds (default is `0` or disabled)
     */
    pingInterval?: number;
    /**
     * Number of times datasource will retry the stream before giving up (default is `3`)
     */
    retryCount?: number;
    /**
     * If this object is not present controller will not be visible.
     */
    controller?: AndroidExoPlayerControllerConfig;
}
export interface AndroidExoplayerState {
    [s: string]: string;
}
export interface AndroidExoPlayerControllerConfig {
    /**
     * Image in the controller.
     */
    streamImage: string;
    /**
     *
     */
    streamTitle: string;
    /**
     *
     */
    streamDescription: string;
    /**
     * Hide entire progress bar.
     */
    hideProgress?: true;
    /**
     * If progress bar is visible hide current position from it
     */
    hidePosition: false;
    /**
     * If progress bar is visible Hide stream duration from it
     */
    hideDuration: false;
    /**
     * Override the player control button icons.
     */
    controlIcons?: {
        /**
         * Rewind button icon.
         */
        exo_rew: string;
        /**
         * Play button icon.
         */
        exo_play: string;
        /**
         * Pause button icon.
         */
        exo_pause: string;
        /**
         * Fast forward button icon.
         */
        exo_ffwd: string;
    };
}
/**
 * @name Android ExoPlayer
 * @description
 * Cordova media player plugin using Google's ExoPlayer framework.
 *
 * https://github.com/google/ExoPlayer
 * @usage
 * ```typescript
 * import { AndroidExoPlayer } from '@awesome-cordova-plugins/android-exoplayer/ngx';
 *
 * constructor(private androidExoPlayer: AndroidExoPlayer) { }
 *
 * ...
 *
 * this.androidExoPlayer.show({url: 'http://www.youtube.com/api/manifest/dash/id/bf5bb2419360daf1/source/youtube'});
 *
 * ```
 * @interfaces
 * AndroidExoPlayerParams
 * AndroidExoplayerState
 * AndroidExoPlayerControllerConfig
 */
export declare class AndroidExoplayerOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Show the player.
     *
     * @param {AndroidExoPlayerParams} parameters Parameters
     * @returns {Observable<AndroidExoplayerState>}
     */
    show(parameters: AndroidExoPlayerParams): Observable<AndroidExoplayerState>;
    /**
     * Switch stream without disposing of the player.
     *
     * @param {string} url The url of the new stream.
     * @param {AndroidExoPlayerControllerConfig} controller Configuration of the controller.
     * @returns {Promise<void>}
     */
    setStream(url: string, controller: AndroidExoPlayerControllerConfig): Promise<void>;
    /**
     * Will pause if playing and play if paused
     *
     * @returns {Promise<void>}
     */
    playPause(): Promise<void>;
    /**
     * Stop playing.
     *
     * @returns {Promise<void>}
     */
    stop(): Promise<void>;
    /**
     * Jump to a particular position.
     *
     * @param {number} milliseconds Position in stream in milliseconds
     * @returns {Promise<void>}
     */
    seekTo(milliseconds: number): Promise<void>;
    /**
     * Jump to a particular time relative to the current position.
     *
     * @param {number} milliseconds Time in milliseconds
     * @returns {Promise<void>}
     */
    seekBy(milliseconds: number): Promise<void>;
    /**
     * Get the current player state.
     *
     * @returns {Promise<AndroidExoplayerState>}
     */
    getState(): Promise<AndroidExoplayerState>;
    /**
     * Show the controller.
     *
     * @returns {Promise<void>}
     */
    showController(): Promise<void>;
    /**
     * Hide the controller.
     *
     * @returns {Promise<void>}
     */
    hideController(): Promise<void>;
    /**
     * Update the controller configuration.
     *
     * @param {AndroidExoPlayerControllerConfig} controller Configuration of the controller.
     * @returns {Promise<void>}
     */
    setController(controller: AndroidExoPlayerControllerConfig): Promise<void>;
    /**
     * Close and dispose of player, call before destroy.
     *
     * @returns {Promise<void>}
     */
    close(): Promise<void>;
}

export declare const AndroidExoplayer: AndroidExoplayerOriginal;