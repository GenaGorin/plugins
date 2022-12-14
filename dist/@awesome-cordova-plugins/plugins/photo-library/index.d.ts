import { CordovaOptions, AwesomeCordovaNativePlugin } from '@awesome-cordova-plugins/core';
import { Observable } from 'rxjs';
/**
 * @hidden
 */
export interface CordovaFiniteObservableOptions extends CordovaOptions {
    /**
     * Function that gets a result returned from plugin's success callback, and decides whether it is last value and observable should complete.
     */
    resultFinalPredicate?: string;
    /**
     * Function that gets called after resultFinalPredicate, and removes service data that indicates end of stream from the result.
     */
    resultTransform?: string;
}
/**
 * @param opts
 * @hidden
 *
 * Wraps method that returns an observable that can be completed. Provided opts.resultFinalPredicate dictates when the observable completes.
 */
export declare function CordovaFiniteObservable(opts?: CordovaFiniteObservableOptions): (target: Object, methodName: string, descriptor: TypedPropertyDescriptor<any>) => {
    value(...args: any[]): Observable<any>;
    enumerable: boolean;
};
/**
 * @name Photo Library
 * @description
 * The PhotoLibrary plugin allows access to photos from device by url. So you can use plain img tag to display photos and their thumbnails, and different 3rd party libraries as well.
 * Saving photos and videos to the library is also supported.
 * cdvphotolibrary urls should be trusted by Angular. See plugin homepage to learn how.
 * @usage
 * ```typescript
 * import { PhotoLibrary } from '@awesome-cordova-plugins/photo-library/ngx';
 *
 * constructor(private photoLibrary: PhotoLibrary) { }
 *
 * this.photoLibrary.requestAuthorization().then(() => {
 *   this.photoLibrary.getLibrary().subscribe({
 *     next: library => {
 *       library.forEach(function(libraryItem) {
 *         console.log(libraryItem.id);          // ID of the photo
 *         console.log(libraryItem.photoURL);    // Cross-platform access to photo
 *         console.log(libraryItem.thumbnailURL);// Cross-platform access to thumbnail
 *         console.log(libraryItem.fileName);
 *         console.log(libraryItem.width);
 *         console.log(libraryItem.height);
 *         console.log(libraryItem.creationDate);
 *         console.log(libraryItem.latitude);
 *         console.log(libraryItem.longitude);
 *         console.log(libraryItem.albumIds);    // array of ids of appropriate AlbumItem, only of includeAlbumsData was used
 *       });
 *     },
 *     error: err => { console.log('could not get photos'); },
 *     complete: () => { console.log('done getting photos'); }
 *   });
 * })
 * .catch(err => console.log('permissions weren\'t granted'));
 *
 * ```
 */
export declare class PhotoLibraryOriginal extends AwesomeCordovaNativePlugin {
    /**
     * Retrieves library items. Library item contains photo metadata like width and height, as well as photoURL and thumbnailURL.
     *
     * @param success
     * @param error
     * @param options {GetLibraryOptions} Optional, like thumbnail size and chunks settings.
     * @returns {Observable<LibraryItem[]>} Returns library items. If appropriate option was set, will be returned by chunks.
     */
    getLibrary(success?: (res?: any) => void, error?: (err?: any) => void, options?: GetLibraryOptions): Observable<LibraryItem[]>;
    /**
     * Asks user permission to access photo library.
     *
     * @param options {RequestAuthorizationOptions} Optional, like whether only read access needed or read/write.
     * @returns { Promise<void>} Returns a promise that resolves when permissions are granted, and fails when not.
     */
    requestAuthorization(options?: RequestAuthorizationOptions): Promise<void>;
    /**
     * Returns list of photo albums on device.
     *
     * @returns {Promise<AlbumItem[]>} Resolves to list of albums.
     */
    getAlbums(): Promise<AlbumItem[]>;
    /**
     * Provides means to request URL of thumbnail, with specified size or quality.
     *
     * @param photo {string | LibraryItem} Id of photo, or LibraryItem.
     * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
     * @returns {Promise<string>} Resolves to URL of cdvphotolibrary schema.
     */
    getThumbnailURL(photo: string | LibraryItem, options?: GetThumbnailOptions): Promise<string>;
    /**
     * Provides means to request photo URL by id.
     *
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetPhotoOptions} Optional options.
     * @returns {Promise<string>} Resolves to URL of cdvphotolibrary schema.
     */
    getPhotoURL(photo: string | LibraryItem, options?: any): Promise<string>;
    /**
     * Returns thumbnail as Blob.
     *
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetThumbnailOptions} Options, like thumbnail size or quality.
     * @returns {Promise<Blob>} Resolves requested thumbnail as blob.
     */
    getThumbnail(photo: string | LibraryItem, options?: GetThumbnailOptions): Promise<Blob>;
    /**
     * Returns photo as Blob.
     *
     * @param photo {string | LibraryItem} Id or LibraryItem.
     * @param options {GetPhotoOptions} Optional options.
     * @returns {Promise<Blob>} Resolves requested photo as blob.
     */
    getPhoto(photo: string | LibraryItem, options?: any): Promise<Blob>;
    /**
     * Saves image to specified album. Album will be created if not exists.
     * LibraryItem that represents saved image is returned.
     *
     * @param url {string} URL of a file, or DataURL.
     * @param album {AlbumItem | string} Name of an album or AlbumItem object.
     * @param options {GetThumbnailOptions} Options, like thumbnail size for resulting LibraryItem.
     * @returns {Promise<LibraryItem>} Resolves to LibraryItem that represents saved image.
     */
    saveImage(url: string, album: AlbumItem | string, options?: GetThumbnailOptions): Promise<LibraryItem>;
    /**
     * Saves video to specified album. Album will be created if not exists.
     *
     * @param url {string} URL of a file, or DataURL.
     * @param album {AlbumItem | string} Name of an album or AlbumItem object.
     * @returns {Promise<void>} Resolves when save operation completes.
     */
    saveVideo(url: string, album: AlbumItem | string): Promise<void>;
}
/**
 * @hidden
 */
export interface LibraryItem {
    /**
     * Local id of the photo
     */
    id: string;
    /**
     * URL of cdvphotolibrary schema.
     */
    photoURL: string;
    /**
     * URL of cdvphotolibrary schema.
     */
    thumbnailURL: string;
    fileName: string;
    width: number;
    height: number;
    creationDate: Date;
    latitude?: number;
    longitude?: number;
    albumIds?: string[];
}
/**
 * @hidden
 */
export interface AlbumItem {
    /**
     * Local id of the album
     */
    id: string;
    title: string;
}
/**
 * @hidden
 */
export interface GetLibraryOptions {
    thumbnailWidth?: number;
    thumbnailHeight?: number;
    quality?: number;
    itemsInChunk?: number;
    chunkTimeSec?: number;
    useOriginalFileNames?: boolean;
    includeAlbumData?: boolean;
    includeVideos?: boolean;
    maxItems?: number;
}
/**
 * @hidden
 */
export interface RequestAuthorizationOptions {
    read?: boolean;
    write?: boolean;
}
/**
 * @hidden
 */
export interface GetThumbnailOptions {
    thumbnailWidth?: number;
    thumbnailHeight?: number;
    quality?: number;
}

export declare const PhotoLibrary: PhotoLibraryOriginal;