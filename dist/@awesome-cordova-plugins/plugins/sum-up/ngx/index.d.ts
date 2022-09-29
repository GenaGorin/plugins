import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface SumUpResponse {
    code: number;
    message: string;
}
export interface SumUpLoginStatus {
    code: number;
    isLoggedIn: boolean;
}
export interface SumUpPayment {
    transaction_code: string;
    card_type: string;
    merchant_code: string;
    amount: number;
    tip_amount: number;
    vat_amount: number;
    currency: string;
    status: string;
    payment_type: string;
    entry_mode: string;
    installments: number;
}
/**
 * @hidden
 */
export declare class SumUpKeys {
    accessToken: string;
    affiliateKey: string;
    constructor();
}
/**
 * @name SumUp
 * @description
 * Plugin to communicate with a SumUp payment terminal
 * @usage
 * ```typescript
 * import { SumUp } from '@awesome-cordova-plugins/sum-up';
 *
 *
 * constructor(private sumUp: SumUp) { }
 *
 * const sumUpKeys: SumUpKeys = new SumUpKeys();
 * sumUpKeys.affiliateKey = 'YOUR_API_KEY'; // if not provided in installation
 * sumUpKeys.accessToken = 'YOUR_ACCESS_TOKEN';
 *
 * this.sumUp.login(sumUpKeys)
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.auth('YOUR_ACCESS_TOKEN')
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.getSettings()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.logout()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 *  this.sumUp.isLoggedIn()
 *   .then((res: SumUpLoginStatus) => console.log(res))
 *   .catch((error: SumUpLoginStatus) => console.error(error));
 *
 *  this.sumUp.prepare()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 * this.sumUp.closeConnection()
 *   .then((res: SumUpResponse) => console.log(res))
 *   .catch((error: SumUpResponse) => console.error(error));
 *
 * this.sumUp.pay(10.0, 'Transaction title', 'EUR')
 *   .then((res: SumUpPayment) => console.log(res))
 *   .catch((error: SumUpPayment) => console.error(error));
 *
 * ```
 */
export declare class SumUp extends AwesomeCordovaNativePlugin {
    /**
     * Login a user with an optional access token.
     * If the access token is provided and valid, the user is logged in autmatically.
     * Otherwise the user has to type in the credentials
     *
     * @param sumUpKeys {SumUpKeys}
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    login(sumUpKeys: SumUpKeys): Promise<SumUpResponse>;
    /**
     * Authenticates the account with the given access token. Parameter accessToken is required.
     *
     * @param accessToken {string}
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    auth(accessToken: string): Promise<SumUpResponse>;
    /**
     * Opens a new window with the all account settings of an logged in user.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    getSettings(): Promise<SumUpResponse>;
    /**
     * Logout a user from the account.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    logout(): Promise<SumUpResponse>;
    /**
     * Checks whether the user is logged in or not and returns an object with the field isLoggedIn which is a boolean value.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    isLoggedIn(): Promise<SumUpLoginStatus>;
    /**
     * Prepares the terminal for a payment. Checks whether the CardReader is ready to transmit and
     * if an instance of the CardReaderManager is available.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    prepare(): Promise<SumUpResponse>;
    /**
     * Tries to close the connection to the card terminal.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    closeConnection(): Promise<SumUpResponse>;
    /**
     * Will setup the SumUP SDK.
     * This action is required before using other functions.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    setup(): Promise<SumUpResponse>;
    /**
     * Test the SumUp integration using SDK tests.
     *
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    test(): Promise<SumUpResponse>;
    /**
     * Opens a native SumUp window to proceed a payment. Parameter amount and currencycode are required.
     * If the Payment was successful it returns an SumUpPayment object with information about the payment.
     *
     * @param amount {number}
     * @param title {string}
     * @param currencyCode {string}
     * @returns {Promise<SumUpResponse>} Return a SumUpResponse object
     */
    pay(amount: number, title?: string, currencyCode?: string): Promise<SumUpPayment>;
}
