import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Taptic Engine
 * @description
 * An Ionic plugin to use Taptic Engine API on iPhone 7, 7 Plus or newer.
 * @usage
 * ```typescript
 * import { TapticEngine } from '@awesome-cordova-plugins/taptic-engine/ngx';
 *
 * ...
 *
 * constructor(private taptic: TapticEngine) { }
 *
 * ...
 *
 * this.taptic.selection();
 *
 * this.taptic.notification();
 *
 * this.taptic.impact();
 *
 * ```
 */
export declare class TapticEngine extends AwesomeCordovaNativePlugin {
    /**
     * Use selection feedback generators to indicate a change in selection.
     *
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    selection(): Promise<any>;
    /**
     * Use this to indicate success/failure/warning to the user.
     *
     * @param options {Object} should be of the type { type: 'success' } (or 'warning'/'error')
     * @param {'success' | 'warning' | 'error'} options.type
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    notification(options: {
        type: 'success' | 'warning' | 'error';
    }): Promise<any>;
    /**
     * Use this to indicate success/failure/warning to the user.
     *
     * @param options {Object} should be of the type { style: 'light' } (or 'medium'/'heavy')
     * @param {'light' | 'medium' | 'heavy'} options.type
     * @param options.style
     * @returns {Promise<any>} Returns a promise that resolves on success and rejects on error
     */
    impact(options: {
        style: 'light' | 'medium' | 'heavy';
    }): Promise<any>;
    /**
     * Tell the taptic engine that a gesture for a selection change is starting.
     *
     * @returns {Promise<any>}
     */
    gestureSelectionStart(): Promise<any>;
    /**
     * Tell the taptic engine that a selection changed during a gesture.
     *
     * @returns {Promise<any>}
     */
    gestureSelectionChanged(): Promise<any>;
    /**
     * Tell the taptic engine we are done with a gesture. This needs to be called lest resources are not properly recycled.
     *
     * @returns {Promise<any>}
     */
    gestureSelectionEnd(): Promise<any>;
}
