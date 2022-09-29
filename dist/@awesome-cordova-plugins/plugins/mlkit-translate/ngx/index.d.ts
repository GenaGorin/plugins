import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * This is the language object which will be returned by `downloadModel`, `deleteModel`, `getAvailableModels` and `getDownloadedModels` methods.
 */
export interface LanguageModel {
    /**
     * BCP-47 language code of the language. For example: en
     * For full list of languages codes, see https://firebase.google.com/docs/ml-kit/translation-language-support
     */
    code: string;
    /**
     * Display name of the language. For example: English
     */
    displayName: string;
}
/**
 * @name MLKitTranslate
 * @description
 * Plugin that implements MLKit Translation and Language Identification features.
 * @usage
 * ```typescript
 * import { MLKitTranslate } from '@awesome-cordova-plugins/ml-kit-translate';
 *
 *
 * constructor(private mlkitTranslate: MLKitTranslate) { }
 *
 * ...
 *
 * this.mlkitTranslate.translate('Hello', 'en', 'es')
 *   .then((resultText: string) => console.log(res))
 *   .catch((error: string) => console.error(error));
 *
 * @interfaces
 * LanguageModel
 * ```
 */
export declare class MLKitTranslate extends AwesomeCordovaNativePlugin {
    /**
     * Translates text from one language to another. Requires the source and target languages need to be downloaded.
     * If not the languages are downloaded in the background automatically.
     *
     * @param text {string} text to be translated
     * @param targetLanguage {string} BCP-47 language code of the language to translate to
     * @param sourceLanguage {string=} (optional) BCP-47 language code of the language to translate to. If not provided, source language is inferred from text
     * @returns {Promise<string>} Returns a promise that resolves with the translated text
     */
    translate(text: string, targetLanguage: string, sourceLanguage?: string): Promise<string>;
    /**
     * Determines the language of a string of text.
     *
     * @param text {string} text to be translated
     * @returns {Promise<LanguageModel>} Returns a promise that resolves with the identified language
     */
    identifyLanguage(text: string): Promise<LanguageModel>;
    /**
     * List of language models that have been downloaded to the device.
     *
     * @returns {Promise<LanguageModel[]>} Returns a promise that resolves with an array of languages that have been downloaded.
     */
    getDownloadedModels(): Promise<LanguageModel[]>;
    /**
     * List of language models that can be downloaded.
     *
     * @returns {Promise<LanguageModel[]>} Returns a promise that resolves with an array of possible languages that can be downloaded.
     */
    getAvailableModels(): Promise<LanguageModel[]>;
    /**
     * Downloads a specified language model.
     *
     * @param code {string} BCP-47 language code of the language to download
     * @returns {Promise<LanguageModel>} Returns a promise that resolves with the downloaded language.
     */
    downloadModel(code: string): Promise<LanguageModel>;
    /**
     * Deletes a specified language model.
     *
     * @param code {string} BCP-47 language code of the language to delete
     * @returns {Promise<LanguageModel>} Returns a promise that resolves with the deleted language.
     */
    deleteModel(code: string): Promise<LanguageModel>;
}
