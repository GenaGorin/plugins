import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
export interface GlobalizationOptions {
    formatLength: string;
    selector: string;
}
/**
 * @name Globalization
 * @premier globalization
 * @description
 * This plugin obtains information and performs operations specific to the user's locale, language, and timezone.
 * @deprecated
 * With the [ECMA Internationalization API](https://www.ecma-international.org/ecma-402/1.0/) now supported on iOS, Android and Windows devices, this plugin is not required any more.
 * Migrating from this plugin to the [ECMA Internationalization API](https://www.ecma-international.org/ecma-402/1.0/) is explained in this [Cordova blog post](https://cordova.apache.org/news/2017/11/20/migrate-from-cordova-globalization-plugin.html).
 * @usage
 * ```typescript
 * import { Globalization } from '@awesome-cordova-plugins/globalization/ngx';
 *
 * constructor(private globalization: Globalization) { }
 *
 *
 * ...
 *
 *
 * this.globalization.getPreferredLanguage()
 *   .then(res => console.log(res))
 *   .catch(e => console.log(e));
 *
 *
 * ```
 * @interfaces
 * GlobalizationOptions
 */
export declare class GlobalizationOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Returns the BCP-47 compliant language identifier tag to the successCallback with a properties object as a parameter. That object should have a value property with a String value.
     *
     * @returns {Promise<{value: string}>}
     */
    getPreferredLanguage(): Promise<{
        value: string;
    }>;
    /**
     * Returns the BCP 47 compliant locale identifier string to the successCallback with a properties object as a parameter.
     *
     * @returns {Promise<{value: string}>}
     */
    getLocaleName(): Promise<{
        value: string;
    }>;
    /**
     * Converts date to string
     *
     * @param {Date} date Date you wish to convert
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{value: string}>} Returns a promise when the date has been converted.
     */
    dateToString(date: Date, options: GlobalizationOptions): Promise<{
        value: string;
    }>;
    /**
     * Parses a date formatted as a string, according to the client's user preferences and calendar using the time zone of the client, and returns the corresponding date object.
     *
     * @param {string} dateString Date as a string to be converted
     * @param options Options for the converted date. Length, selector.
     * @returns {Promise<{ year: number, month: number, day: number, hour: number, minute: number, second: number, millisecond: number }>} Returns a promise when the date has been converted.
     */
    stringToDate(dateString: string, options: GlobalizationOptions): Promise<{
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
        millisecond: number;
    }>;
    /**
     * Returns a pattern string to format and parse dates according to the client's user preferences.
     *
     * @param options Object with the format length and selector
     * @returns {Promise<{ pattern: string, timezone: string, utc_offset: number, dst_offset: number }>} Returns a promise.
     */
    getDatePattern(options: GlobalizationOptions): Promise<{
        pattern: string;
        timezone: string;
        iana_timezone: string;
        utc_offset: number;
        dst_offset: number;
    }>;
    /**
     * Returns an array of the names of the months or days of the week, depending on the client's user preferences and calendar.
     *
     * @param options Object with type (narrow or wide) and item (month or days).
     * @param options.type
     * @param options.item
     * @returns {Promise<{value: string[]}>} Returns a promise.
     */
    getDateNames(options: {
        type: string;
        item: string;
    }): Promise<{
        value: string[];
    }>;
    /**
     * Indicates whether daylight savings time is in effect for a given date using the client's time zone and calendar.
     *
     * @param {data} date Date to process
     * @returns {Promise<{dst: string}>} reutrns a promise with the value
     */
    isDayLightSavingsTime(date: Date): Promise<{
        dst: string;
    }>;
    /**
     * Returns the first day of the week according to the client's user preferences and calendar.
     *
     * @returns {Promise<{value: string}>} returns a promise with the value
     */
    getFirstDayOfWeek(): Promise<{
        value: string;
    }>;
    /**
     * Returns a number formatted as a string according to the client's user preferences.
     *
     * @param numberToConvert {Number} The number to convert
     * @param options {Object} Object with property `type` that can be set to: decimal, percent, or currency.
     * @param options.type
     */
    numberToString(numberToConvert: number, options: {
        type: string;
    }): Promise<{
        value: string;
    }>;
    /**
     *
     * @param {string} stringToConvert String you want to conver to a number
     * @param options  The type of number you want to return. Can be decimal, percent, or currency.
     * @param options.type
     * @returns {Promise<{ value: number | string }>} Returns a promise with the value.
     */
    stringToNumber(stringToConvert: string, options: {
        type: string;
    }): Promise<{
        value: number | string;
    }>;
    /**
     * Returns a pattern string to format and parse numbers according to the client's user preferences.
     *
     * @param options Can be decimal, percent, or currency.
     * @param options.type
     * @returns {Promise<{ pattern: string, symbol: string, fraction: number, rounding: number, positive: string, negative: string, decimal: string, grouping: string }>}
     */
    getNumberPattern(options: {
        type: string;
    }): Promise<{
        pattern: string;
        symbol: string;
        fraction: number;
        rounding: number;
        positive: string;
        negative: string;
        decimal: string;
        grouping: string;
    }>;
    /**
     * Returns a pattern string to format and parse currency values according to the client's user preferences and ISO 4217 currency code.
     *
     * @param {string} currencyCode Currency Code.A
     * @returns {Promise<{ pattern: string, code: string, fraction: number, rounding: number, decimal: number, grouping: string }>}
     */
    getCurrencyPattern(currencyCode: string): Promise<{
        pattern: string;
        code: string;
        fraction: number;
        rounding: number;
        decimal: number;
        grouping: string;
    }>;
}

export declare const Globalization: GlobalizationOriginal;