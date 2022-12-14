import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Youtube Video Player
 * @description
 * Plays YouTube videos in Native YouTube App
 * @usage
 * For Android 5.0+ you will need to add the following to config.xml
 * ```xml
 * <preference name="YouTubeDataApiKey" value="[YOUR YOUTUBE API]" />
 * ```
 * For more information: https://developers.google.com/youtube/v3/getting-started
 *
 *
 * ```typescript
 * import { YoutubeVideoPlayer } from '@awesome-cordova-plugins/youtube-video-player/ngx';
 *
 * constructor(private youtube: YoutubeVideoPlayer) { }
 *
 * ...
 *
 *
 * this.youtube.openVideo('myvideoid');
 *
 * ```
 */
export declare class YoutubeVideoPlayer extends AwesomeCordovaNativePlugin {
    /**
     * Plays a YouTube video
     *
     * @param videoId {string} Video ID
     */
    openVideo(videoId: string): void;
}
