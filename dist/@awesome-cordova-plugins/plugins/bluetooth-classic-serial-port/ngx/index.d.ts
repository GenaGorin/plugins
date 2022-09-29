import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
export interface BluetoothClassicSerialPortDevice {
    id: string;
    class?: string | number;
    address?: string;
    name?: string;
    protocols?: string[];
    [p: string]: any;
}
/**
 * @name Bluetooth Classic Serial Port
 * @description This plugin is written using the iOS Accessory Framework (MFi) to support Classic Bluetooth on iOS.
 * @usage
 * ```typescript
 * import { BluetoothClassicSerialPort } from '@awesome-cordova-plugins/bluetooth-classic-serial-port/ngx';
 *
 * constructor(private bluetoothClassicSerialPort: BluetoothClassicSerialPort) { }
 *
 *
 * // Write a string
 * this.bluetoothClassicSerialPort.write("00001101-0000-1000-8000-00805F9B34FB", "hello, world", success, failure);
 *
 * // Array of int or bytes
 * this.bluetoothClassicSerialPort.write("00001101-0000-1000-8000-00805F9B34FB", [186, 220, 222], success, failure);
 *
 * // Typed Array
 * var data = new Uint8Array(4);
 * data[0] = 0x41;
 * data[1] = 0x42;
 * data[2] = 0x43;
 * data[3] = 0x44;
 * this.bluetoothClassicSerialPort.write(interfaceId, data, success, failure);
 *
 * // Array Buffer
 * this.bluetoothClassicSerialPort.write(interfaceId, data.buffer, success, failure);
 * ```
 *
 * // iOS select accessory
 *
 * ```typescript
 *  async selectAccessory() {
 *    const deviceDiscovery = this.bluetoothClassicSerialPort.setDeviceDiscoveredListener().subscribe(async (connectionConfig) => {
 *      deviceDiscovery.unsubscribe();
 *    })
 *
 *    await this.bluetoothClassicSerialPort.discoverUnpaired().catch(error => {
 *      deviceDiscovery.unsubscribe();
 *    })
 *
 *  }
 * ```
 */
export declare class BluetoothClassicSerialPort extends AwesomeCordovaNativePlugin {
    /**
     * Connect to a Bluetooth device
     *
     * @param {string} deviceId Identifier of the remote device.
     * @param {string} deviceId this is the MAC address.
     * @param {string|string[]} interfaceId Identifier of the remote device
     * @param {string|string[]} interfaceId This identifies the serial port to connect to.
     * @returns {Observable<any>} Subscribe to connect.
     */
    connect(deviceId: string | number, interfaceId: string | string[]): Observable<any>;
    /**
     * Connect to a Bluetooth device
     *
     * @deprecated
     * @param {string} deviceId Identifier of the remote device.
     * @param {number} deviceId this is the connection ID
     * @param {string|string[]} interfaceArray Identifier of the remote device
     * @param {string|string[]} interfaceArray this is the Protocol String
     * @returns {Promise<any>}
     */
    connectIos(deviceId: string | number, interfaceArray: string | string[]): Promise<any>;
    /**
     * Connect insecurely to a Bluetooth device
     *
     * @param {string} deviceId Identifier of the remote device. For Android this is the MAC address
     * @param {string | string[]} interfaceArray This identifies the serial port to connect to. For Android this is the SPP_UUID.
     * @returns {Promise<any>} Subscribe to connect.
     */
    connectInsecure(deviceId: string, interfaceArray: string | string[]): Promise<any>;
    /**
     * Disconnect from the connected device
     *
     * @param {string} interfaceId The interface to Disconnect
     * @returns {Promise<any>}
     */
    disconnect(interfaceId: string | string[]): Promise<any>;
    /**
     * Disconnect from all the connected device
     *
     * @returns {Promise<any>}
     */
    disconnectAll(): Promise<any>;
    /**
     * Writes data to the serial port
     *
     * @param {string} interfaceId The interface to send the data to
     * @param {ArrayBuffer | string | number[] | Uint8Array} data ArrayBuffer of data
     * @returns {Promise<any>} returns a promise when data has been written
     */
    write(interfaceId: string, data: ArrayBuffer | string | number[] | Uint8Array): Promise<any>;
    /**
     * Gets the number of bytes of data available
     *
     * @param {string} interfaceId The interface to check
     * @returns {Promise<any>} returns a promise that contains the available bytes
     */
    available(interfaceId: string): Promise<any>;
    /**
     * Function read reads the data from the buffer. The data is passed to the success callback as a String. Calling read when no data is available will pass an empty String to the callback.
     *
     * @param {string} interfaceId The interface to read
     * @returns {Promise<any>} returns a promise with data from the buffer
     */
    read(interfaceId: string): Promise<any>;
    /**
     * Reads data from the buffer until it reaches a delimiter
     *
     * @param {string} interfaceId The interface to read
     * @param {string} delimiter string that you want to search until
     * @returns {Observable<any>} returns a promise
     */
    readUntil(interfaceId: string, delimiter: string): Observable<any>;
    /**
     * Subscribe to be notified when data is received
     *
     * @param {string | string[]} interfaceId The interface to subscribe to
     * @param {string} delimiter the string you want to watch for
     * @returns {Observable<any>} returns an observable.
     */
    subscribe(interfaceId: string | string[], delimiter: string): Observable<any>;
    /**
     * Unsubscribe from a subscription
     *
     * @param {string | string[]} interfaceId The interface to unsubscribe from
     * @returns {Promise<any>} returns an promise.
     */
    unsubscribe(interfaceId: string | string[]): Promise<any>;
    /**
     * Subscribe to be notified when data is received
     *
     * @param {string | string[]} interfaceId The interface to subscribe to
     * @returns {Observable<any>} returns an observable
     */
    subscribeRawData(interfaceId: string | string[]): Observable<any>;
    /**
     * Unsubscribe from a subscription
     *
     * @param {string | string[]} interfaceId The interface to unsubscribe from
     * @returns {Promise<any>} returns an promise.
     */
    unsubscribeRawData(interfaceId: string | string[]): Promise<any>;
    /**
     * Clears data in buffer
     *
     * @param {string} interfaceId The interface to clear data
     * @returns {Promise<any>} returns a promise when completed
     */
    clear(interfaceId: string): Promise<[]>;
    /**
     * Lists bonded devices
     *
     * @returns {Promise<BluetoothClassicSerialPortDevice>} returns a promise
     */
    list(): Promise<BluetoothClassicSerialPortDevice[]>;
    /**
     * Reports the connection status
     *
     * @param {string} interfaceId The interface to check
     * @returns {Promise<boolean>} returns a promise
     */
    isConnected(interfaceId: string): Promise<boolean>;
    /**
     * Reports if bluetooth is enabled
     *
     * @returns {Promise<any>} returns a promise
     */
    isEnabled(): Promise<boolean>;
    /**
     * Show the Bluetooth settings on the device
     *
     * @returns {Promise<any>} returns a promise
     */
    showBluetoothSettings(): Promise<any>;
    /**
     * Enable Bluetooth on the device
     *
     * @returns {Promise<any>} returns a promise
     */
    enable(): Promise<any>;
    /**
     * Discover unpaired devices
     *
     * @returns {Promise<any>} returns a promise
     */
    discoverUnpaired(): Promise<BluetoothClassicSerialPortDevice[]>;
    /**
     * Subscribe to be notified on Bluetooth device discovery. Discovery process must be initiated with the `discoverUnpaired` function.
     *
     * @returns {Observable<any>} Returns an observable
     */
    setDeviceDiscoveredListener(): Observable<BluetoothClassicSerialPortDevice>;
    /**
     * Clears notify callback function registered with setDeviceDiscoveredListener.
     */
    clearDeviceDiscoveredListener(): void;
}
