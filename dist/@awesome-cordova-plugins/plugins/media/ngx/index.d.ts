import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @hidden
 */
export declare class MediaObject {
    private _objectInstance;
    /**
     * An observable that notifies you on actions success
     */
    onSuccess: Observable<any>;
    /**
     * An observable that notifies you when an error occurs
     */
    onError: Observable<MEDIA_ERROR>;
    /**
     * An observable that notifies you when the file status changes
     */
    onStatusUpdate: Observable<MEDIA_STATUS>;
    /**
     * @hidden
     */
    successCallback: Function;
    /**
     * @hidden
     */
    errorCallback: Function;
    /**
     * @hidden
     */
    statusCallback: Function;
    constructor(_objectInstance: any);
    /**
     * Get the current amplitude of the current recording.
     *
     * @returns {Promise<any>} Returns a promise with the amplitude of the current recording
     */
    getCurrentAmplitude(): Promise<any>;
    /**
     * Get the current position within an audio file. Also updates the Media object's position parameter.
     *
     * @returns {Promise<any>} Returns a promise with the position of the current recording
     */
    getCurrentPosition(): Promise<any>;
    /**
     * Get the duration of an audio file in seconds. If the duration is unknown, it returns a value of -1.
     *
     * @returns {number} Returns a promise with the duration of the current recording
     */
    getDuration(): number;
    /**
     * Starts or resumes playing an audio file.
     *
     * @param iosOptions
     * @param iosOptions.numberOfLoops
     * @param iosOptions.playAudioWhenScreenIsLocked
     */
    play(iosOptions?: {
        numberOfLoops?: number;
        playAudioWhenScreenIsLocked?: boolean;
    }): void;
    /**
     * Pauses playing an audio file.
     */
    pause(): void;
    /**
     * Releases the underlying operating system's audio resources. This is particularly important for Android, since there are a finite amount of OpenCore instances for media playback. Applications should call the release function for any Media resource that is no longer needed.
     */
    release(): void;
    /**
     * Sets the current position within an audio file.
     *
     * @param {number} milliseconds The time position you want to set for the current audio file
     */
    seekTo(milliseconds: number): void;
    /**
     * Set the volume for an audio file.
     *
     * @param volume {number} The volume to set for playback. The value must be within the range of 0.0 to 1.0.
     */
    setVolume(volume: number): void;
    setRate(speedRate: number): void;
    /**
     * Starts recording an audio file.
     */
    startRecord(): void;
    /**
     * Stops recording
     */
    stopRecord(): void;
    /**
     * Pauses recording
     */
    pauseRecord(): void;
    /**
     * Resumes recording
     */
    resumeRecord(): void;
    /**
     * Stops playing an audio file.
     */
    stop(): void;
}
export declare type MediaStatusUpdateCallback = (statusCode: number) => void;
export interface MediaError {
    /**
     * Error message
     */
    message: string;
    /**
     * Error code
     */
    code: number;
}
export declare enum MEDIA_STATUS {
    NONE = 0,
    STARTING = 1,
    RUNNING = 2,
    PAUSED = 3,
    STOPPED = 4
}
export declare enum MEDIA_ERROR {
    ABORTED = 1,
    NETWORK = 2,
    DECODE = 3,
    SUPPORTED = 4
}
export declare type MediaErrorCallback = (error: MediaError) => void;
/**
 * @name Media
 * @premier media
 * @description
 * This plugin provides the ability to record and play back audio files on a device.
 * @usage
 * ```typescript
 * import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
 *
 *
 * constructor(private media: Media) { }
 *
 *
 * ...
 *
 *
 * // Create a Media instance.  Expects path to file or url as argument
 * // We can optionally pass a second argument to track the status of the media
 *
 * const file: MediaObject = this.media.create('file.mp3');
 *
 * // to listen to plugin events:
 *
 * file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
 *
 * file.onSuccess.subscribe(() => console.log('Action is successful'));
 *
 * file.onError.subscribe(error => console.log('Error!', error));
 *
 * // play the file
 * file.play();
 *
 * // pause the file
 * file.pause();
 *
 * // get current playback position
 * file.getCurrentPosition().then((position) => {
 *   console.log(position);
 * });
 *
 * // get file duration
 * let duration = file.getDuration();
 * console.log(duration);
 *
 * // skip to 10 seconds (expects int value in ms)
 * file.seekTo(10000);
 *
 * // stop playing the file
 * file.stop();
 *
 * // release the native audio resource
 * // Platform Quirks:
 * // iOS simply create a new instance and the old one will be overwritten
 * // Android you must call release() to destroy instances of media when you are done
 * file.release();
 *
 *
 *
 * // Recording to a file
 * const file: MediaObject = this.media.create('path/to/file.mp3');
 *
 * file.startRecord();
 *
 * file.stopRecord();
 *
 *
 * ```
 *
 * Some hints if you are using iOS and recording doesn't work:
 * 1.) Try to use a absolute file path but remove beginning "file://".
 * Then it looks like: `/var/mobile/Containers/Data/Application/AF438B8B-7724-4FBB-8E69-083463224FC4/tmp/my_file.m4a`
 * Example: `this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a')`
 * 2.) If that's not working, too, create the file before using.
 * Example:
 * ```typescript
 * import { Media, MediaObject } from '@awesome-cordova-plugins/media/ngx';
 * import { File } from '@awesome-cordova-plugins/file/ngx';
 *
 * ...
 *
 * constructor(private media: Media, private file: File) { }
 *
 * ...
 *
 * this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
 *   let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
 *   file.startRecord();
 *   window.setTimeout(() => file.stopRecord(), 10000);
 * });
 * ```
 *
 * You can find the reasons here: https://github.com/ionic-team/ionic-native/issues/1452#issuecomment-299605906
 * @classes
 * MediaObject
 * @interfaces
 * MediaError
 */
export declare class Media extends AwesomeCordovaNativePlugin {
    /**
     * @hidden
     */
    MEDIA_NONE: number;
    /**
     * @hidden
     */
    MEDIA_STARTING: number;
    /**
     * @hidden
     */
    MEDIA_RUNNING: number;
    /**
     * @hidden
     */
    MEDIA_PAUSED: number;
    /**
     * @hidden
     */
    MEDIA_STOPPED: number;
    /**
     * @hidden
     */
    MEDIA_ERR_ABORTED: number;
    /**
     * @hidden
     */
    MEDIA_ERR_NETWORK: number;
    /**
     * @hidden
     */
    MEDIA_ERR_DECODE: number;
    /**
     * @hidden
     */
    MEDIA_ERR_NONE_SUPPORTED: number;
    /**
     * Open a media file
     *
     * @param src {string} A URI containing the audio content.
     * @returns {MediaObject}
     */
    create(src: string): MediaObject;
}
