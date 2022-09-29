import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * dceLicense: License of Dynamsoft Camera Enhancer
 * resolution: use EnumResolution
 * rotate: convert frame to bitmap and rotate it
 */
export interface ScanOptions {
    dceLicense?: string;
    resolution?: number;
    rotate?: boolean;
}
export interface FrameResult {
    frameWidth: number;
    frameHeight: number;
    frameRotation: number;
    results: BarcodeResult[];
}
export interface BarcodeResult {
    barcodeText: string;
    barcodeFormat: string;
    barcodeBytesBase64?: string;
    x1: number;
    x2: number;
    x3: number;
    x4: number;
    y1: number;
    y2: number;
    y3: number;
    y4: number;
}
export declare enum EnumResolution {
    RESOLUTION_AUTO = 0,
    RESOLUTION_480P = 1,
    RESOLUTION_720P = 2,
    RESOLUTION_1080P = 3,
    RESOLUTION_2K = 4,
    RESOLUTION_4K = 5
}
/**
 * @name dynamsoft-barcode-scanner
 * @description
 * This plugin scans barcodes using Dynamsoft Barcode Reader
 *
 * @usage
 * ```typescript
 * import { dynamsoft-barcode-scanner } from '@awesome-cordova-plugins/dynamsoft-barcode-scanner';
 *
 *
 * constructor(private dynamsoft-barcode-scanner: dynamsoft-barcode-scanner) { }
 *
 * ...
 *
 *
 * await this.dynamsoft-barcode-scanner.init("license");
 * this.dynamsoft-barcode-scanner.startScanning("license").subscribe(result => {
     console.log(result);
   });
 *
 * ```
 */
export declare class BarcodeScannerOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Initialize Dynamsoft Barcode Reader
     * @param license {string}
     * @return {Promise<any>} Returns a promise that resolves when the initialization is done
     */
    init(license: string): Promise<any>;
    /**
     * Set up runtime settings
     * @param settings {string} runtime settings template in JSON
     * @return {Promise<any>} Returns a promise
     */
    initRuntimeSettingsWithString(settings?: string): Promise<any>;
    /**
     * Output runtime settings to JSON string
     * @return {Promise<String>} Returns a promise
     */
    outputSettingsToString(): Promise<string>;
    /**
     * destroy Dynamsoft Barcode Reader
     * @return {Promise<any>} Returns a promise
     */
    destroy(): Promise<any>;
    /**
     * start the camera to scan barcodes
     * @param options {ScanOptions}
     * @return {Observable<FrameResult>}
     */
    startScanning(options?: ScanOptions): Observable<FrameResult>;
    /**
     * stop scanning
     * @return {Promise<any>} Returns a promise
     */
    stopScanning(): Promise<any>;
    /**
     * resume scanning
     * @return {Promise<any>} Returns a promise
     */
    resumeScanning(): Promise<any>;
    /**
     * pause scanning
     * @return {Promise<any>} Returns a promise
     */
    pauseScanning(): Promise<any>;
    /**
     * get resolution like: 1280x720
     * @return {Promise<string>} Returns a promise
     */
    getResolution(): Promise<string>;
    /**
     * switch torch
     * @param desiredStatus {string} on or off
     * @return {Promise<any>} Returns a promise
     */
    switchTorch(desiredStatus: string): Promise<any>;
    /**
     * set zoom
     * @param factor {number} zoom factor
     * @return {Promise<any>} Returns a promise
     */
    setZoom(factor: number): Promise<any>;
    /**
     * set focus
     * @param point focus point
     * @return {Promise<any>} Returns a promise
     */
    setFocus(point: {
        x: number;
        y: number;
    }): Promise<any>;
}

export declare const BarcodeScanner: BarcodeScannerOriginal;