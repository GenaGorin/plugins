import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @name Shake
 * @description Handles shake gesture
 * @usage
 * ```typescript
 * import { Shake } from '@awesome-cordova-plugins/shake/ngx';
 *
 * constructor(private shake: Shake) { }
 *
 * ...
 *
 * const watch = this.shake.startWatch(60).subscribe(() => {
 *   // do something
 *   });
 *
 * watch.unsubscribe();
 * ```
 */
export declare class Shake extends AwesomeCordovaNativePlugin {
    /**
     * Watch for shake gesture
     *
     * @param sensitivity {number} Optional sensitivity parameter. Defaults to 40
     * @returns {Observable<any>}
     */
    startWatch(sensitivity?: number): Observable<any>;
}
