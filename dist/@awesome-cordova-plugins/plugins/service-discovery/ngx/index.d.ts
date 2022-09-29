import { AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
/**
 * @name ServiceDiscovery
 * @description
 * Simple plugin to get any SSDP / UPnP / DLNA service on a local network
 * @usage
 * ```typescript
 * import { ServiceDiscovery } from '@awesome-cordova-plugins/service-discovery';
 *
 *
 * constructor(private serviceDiscovery: ServiceDiscovery) { }
 *
 * ...
 *
 *
 * this.serviceDiscovery.getNetworkServices('ssdp:all')
 *   .then(devices => console.log(devices))
 *   .catch(error => console.error(error));
 *
 * ```
 */
export declare class ServiceDiscovery extends AwesomeCordovaNativePlugin {
    /**
     * Finds and returns metadata about devices discovered on the network via SSDP / UPnP / DLNA
     *
     * @param service {string} The service name to discover
     * @returns {Promise<any>} Returns a promise that resolves when something happens
     */
    getNetworkServices(service: string): Promise<any>;
}
