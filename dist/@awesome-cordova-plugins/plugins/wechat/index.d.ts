import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name Wechat
 * @description
 * A cordova plugin, a JS version of Wechat SDK
 * @usage
 * ```typescript
 * import { Wechat } from '@awesome-cordova-plugins/wechat/ngx';
 *
 *
 * constructor(private wechat: Wechat) { }
 *
 * ...
 *
 *
 * this.wechat.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
export declare class WechatOriginal extends AwesomeCordovaNativePlugin {
    Scene: {
        SESSION: 0;
        TIMELINE: 1;
        FAVORITE: 2;
    };
    Type: {
        APP: 1;
        EMOTION: 2;
        FILE: 3;
        IMAGE: 4;
        MUSIC: 5;
        VIDEO: 6;
        WEBPAGE: 7;
    };
    Mini: {
        RELEASE: 0;
        TEST: 1;
        PREVIEW: 2;
    };
    isInstalled(): Promise<any>;
    /**
     * Share a message to wechat app
     *
     * @param params
     * @example
     * <code>
     * this.wechat.share({
     *     message: {
     *        title: "Message Title",
     *        description: "Message Description(optional)",
     *        mediaTagName: "Media Tag Name(optional)",
     *        thumb: "http://YOUR_THUMBNAIL_IMAGE",
     *        media: {
     *            type: Wechat.Type.WEBPAGE,   // webpage
     *            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
     *        }
     *    },
     *    scene: this.wechat.Scene.TIMELINE   // share to Timeline
     * }.then(() => {
     *       console.log('share success');
     *    })
     *    .catch(error => {
     *       console.log(error);
     *    });
     * </code>
     */
    share(params: any): Promise<any>;
    /**
     * Sending an auth request to Wechat
     *
     * @param scope
     * @param state
     * @example
     * <code>
     * this.wechat.auth.then((res) => { alert(res.code); });
     * </code>
     */
    auth(scope: any, state: any): Promise<any>;
    /**
     * Send a payment request
     *
     * @param params
     * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
     * @example
     * <code>
     * var params = {
     *     mch_id: '10000100', // merchant id
     *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
     *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
     *     timestamp: '1439531364', // timestamp
     *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
     * };
     * this.wechat.sendPaymentRequest(params).then(() => {
     *     console.log("Success");
     * }).catch(error => {
     *     console.log(error);
     * });
     * </code>
     */
    sendPaymentRequest(params: any): Promise<any>;
    /**
     * jumpToBizProfile ????????????????????????????????????2016-11-11 ????????????????????????
     *
     * @param url
     * @link https://segmentfault.com/a/1190000007204624
     * @link https://segmentfault.com/q/1010000003907796
     * @example
     * <code>
     * var params = {
     *     info: 'gh_xxxxxxx', // ??????????????????ID
     *     type:  'Normal' // ?????????
     * }
     * or
     * var params = {
     *     info: 'extMsg', // ???????????????????????????
     *     type:  'Device' // ?????????
     * };
     * this.wechat.jumpToBizProfile(params).then(()=> {
     *     console.log("Success");
     * }).catch(error => {
     *     console.log(error);
     * });
     * </code>
     */
    jumpToWechat(url: string): Promise<any>;
    /**
     * chooseInvoiceFromWX exq:choose invoices from Wechat card list
     *
     * @param params
     * @example
     * <code>
     * params: signType, cardSign, nonceStr, timeStamp  all required
     * this.wechat.chooseInvoiceFromWX(params).then(() => {
     *     console.log("Success");
     * }).catch(error => {
     *     console.log(error);
     * });
     * </code>
     */
    chooseInvoiceFromWX(params: any): Promise<any>;
    /**
     * openMiniProgram exq:app opens wechat mini program
     *
     * @param params
     * @example
     * <code>
     * params: userName, path, miniprogramType  all required
     * Wechat.openMiniProgram(params, function (data) {
     *     alert(data.extMsg);
     * }, function (reason) {
     *     alert("Failed: " + reason);
     * });
     * </code>
     */
    openMiniProgram(params: any): Promise<any>;
}

export declare const Wechat: WechatOriginal;