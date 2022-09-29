var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaPropertyGet, cordovaPropertySet, getPromise } from '@awesome-cordova-plugins/core';
var FileOriginal = /** @class */ (function (_super) {
    __extends(FileOriginal, _super);
    function FileOriginal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cordovaFileError = {
            1: 'NOT_FOUND_ERR',
            2: 'SECURITY_ERR',
            3: 'ABORT_ERR',
            4: 'NOT_READABLE_ERR',
            5: 'ENCODING_ERR',
            6: 'NO_MODIFICATION_ALLOWED_ERR',
            7: 'INVALID_STATE_ERR',
            8: 'SYNTAX_ERR',
            9: 'INVALID_MODIFICATION_ERR',
            10: 'QUOTA_EXCEEDED_ERR',
            11: 'TYPE_MISMATCH_ERR',
            12: 'PATH_EXISTS_ERR',
            13: 'WRONG_ENTRY_TYPE',
            14: 'DIR_READ_ERR',
        };
        return _this;
    }
    FileOriginal.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    FileOriginal.prototype.checkDir = function (path, dir) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dir)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var fullPath = path + dir;
                return _this.resolveDirectoryUrl(fullPath).then(function () {
                    return true;
                });
            }
        })();
    };
    FileOriginal.prototype.createDir = function (path, dirName, replace) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getDirectory(fse, dirName, options);
                });
            }
        })();
    };
    FileOriginal.prototype.removeDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.remove(de);
                });
            }
        })();
    };
    FileOriginal.prototype.moveDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newDirName = newDirName || dirName;
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (destenation) {
                        return _this.move(srcde, destenation, newDirName);
                    });
                });
            }
        })();
    };
    FileOriginal.prototype.copyDir = function (path, dirName, newPath, newDirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(newDirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (srcde) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcde, deste, newDirName);
                    });
                });
            }
        })();
    };
    FileOriginal.prototype.listDir = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, {
                        create: false,
                        exclusive: false,
                    });
                })
                    .then(function (de) {
                    var reader = de.createReader();
                    return _this.readEntries(reader);
                });
            }
        })();
    };
    FileOriginal.prototype.removeRecursively = function (path, dirName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(dirName)) {
                    var err = new FileError(5);
                    err.message = 'directory cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getDirectory(fse, dirName, { create: false });
                })
                    .then(function (de) {
                    return _this.rimraf(de);
                });
            }
        })();
    };
    FileOriginal.prototype.checkFile = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(file)) {
                    var err = new FileError(5);
                    err.message = 'file cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveLocalFilesystemUrl(path + file).then(function (fse) {
                    if (fse.isFile) {
                        return true;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a file';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.createFile = function (path, fileName, replace) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var options = {
                    create: true,
                };
                if (!replace) {
                    options.exclusive = true;
                }
                return _this.resolveDirectoryUrl(path).then(function (fse) {
                    return _this.getFile(fse, fileName, options);
                });
            }
        })();
    };
    FileOriginal.prototype.removeFile = function (path, fileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (fe) {
                    return _this.remove(fe);
                });
            }
        })();
    };
    FileOriginal.prototype.writeFile = function (path, fileName, text, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        return (function () {
            if (checkAvailability(_this) === true) {
                if (/^\//.test(fileName)) {
                    var err = new FileError(5);
                    err.message = 'file-name cannot start with /';
                    return Promise.reject(err);
                }
                var getFileOpts = {
                    create: !options.append,
                    exclusive: !options.replace,
                };
                return _this.resolveDirectoryUrl(path)
                    .then(function (directoryEntry) {
                    return _this.getFile(directoryEntry, fileName, getFileOpts);
                })
                    .then(function (fileEntry) {
                    return _this.writeFileEntry(fileEntry, text, options);
                });
            }
        })();
    };
    /**
     * Write content to FileEntry.
     *
     * @hidden
     * Write to an existing file.
     * @param {FileEntry} fe file entry object
     * @param {string | Blob | ArrayBuffer} text text content or blob to write
     * @param {IWriteOptions} options replace file if set to true. See WriteOptions for more information.
     * @returns {Promise<FileEntry>}  Returns a Promise that resolves to updated file entry or rejects with an error.
     */
    FileOriginal.prototype.writeFileEntry = function (fe, text, options) {
        var _this = this;
        return this.createWriter(fe)
            .then(function (writer) {
            if (options.append) {
                writer.seek(writer.length);
            }
            if (options.truncate) {
                writer.truncate(options.truncate);
            }
            return _this.write(writer, text);
        })
            .then(function () { return fe; });
    };
    FileOriginal.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    FileOriginal.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    FileOriginal.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    FileOriginal.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    FileOriginal.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    FileOriginal.prototype.moveFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.move(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    FileOriginal.prototype.copyFile = function (path, fileName, newPath, newFileName) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                newFileName = newFileName || fileName;
                if (/^\//.test(newFileName)) {
                    var err = new FileError(5);
                    err.message = 'file name cannot start with /';
                    return Promise.reject(err);
                }
                return _this.resolveDirectoryUrl(path)
                    .then(function (fse) {
                    return _this.getFile(fse, fileName, { create: false });
                })
                    .then(function (srcfe) {
                    return _this.resolveDirectoryUrl(newPath).then(function (deste) {
                        return _this.copy(srcfe, deste, newFileName);
                    });
                });
            }
        })();
    };
    /**
     * @param err
     * @hidden
     */
    FileOriginal.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    FileOriginal.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    try {
                        window.resolveLocalFileSystemURL(fileUrl, function (entry) {
                            resolve(entry);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.resolveDirectoryUrl = function (directoryUrl) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.resolveLocalFilesystemUrl(directoryUrl).then(function (de) {
                    if (de.isDirectory) {
                        return de;
                    }
                    else {
                        var err = new FileError(13);
                        err.message = 'input is not a directory';
                        return Promise.reject(err);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getDirectory(directoryName, flags, function (de) {
                            resolve(de);
                        }, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.getFile = function (directoryEntry, fileName, flags) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return new Promise(function (resolve, reject) {
                    try {
                        directoryEntry.getFile(fileName, flags, resolve, function (err) {
                            _this.fillErrorMessage(err);
                            reject(err);
                        });
                    }
                    catch (xc) {
                        _this.fillErrorMessage(xc);
                        reject(xc);
                    }
                });
            }
        })();
    };
    FileOriginal.prototype.readFile = function (path, file, readAs) {
        var _this = this;
        if (/^\//.test(file)) {
            var err = new FileError(5);
            err.message = 'file-name cannot start with /';
            return Promise.reject(err);
        }
        return this.resolveDirectoryUrl(path)
            .then(function (directoryEntry) {
            return _this.getFile(directoryEntry, file, { create: false });
        })
            .then(function (fileEntry) {
            var reader = new FileReader();
            return getPromise(function (resolve, reject) {
                reader.onloadend = function () {
                    if (reader.result !== undefined || reader.result !== null) {
                        resolve(reader.result);
                    }
                    else if (reader.error !== undefined || reader.error !== null) {
                        reject(reader.error);
                    }
                    else {
                        reject({ code: null, message: 'READER_ONLOADEND_ERR' });
                    }
                };
                fileEntry.file(function (file) {
                    reader["readAs" + readAs].call(reader, file);
                }, function (error) {
                    reject(error);
                });
            });
        });
    };
    /**
     * @param fe
     * @hidden
     */
    FileOriginal.prototype.remove = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.remove(function () {
                resolve({ success: true, fileRemoved: fe });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param srce
     * @param destdir
     * @param newName
     * @hidden
     */
    FileOriginal.prototype.move = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.moveTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param srce
     * @param destdir
     * @param newName
     * @hidden
     */
    FileOriginal.prototype.copy = function (srce, destdir, newName) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            srce.copyTo(destdir, newName, function (deste) {
                resolve(deste);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param dr
     * @hidden
     */
    FileOriginal.prototype.readEntries = function (dr) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            dr.readEntries(function (entries) {
                resolve(entries);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param de
     * @hidden
     */
    FileOriginal.prototype.rimraf = function (de) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            de.removeRecursively(function () {
                resolve({ success: true, fileRemoved: de });
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param fe
     * @hidden
     */
    FileOriginal.prototype.createWriter = function (fe) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fe.createWriter(function (writer) {
                resolve(writer);
            }, function (err) {
                _this.fillErrorMessage(err);
                reject(err);
            });
        });
    };
    /**
     * @param writer
     * @param gu
     * @hidden
     */
    FileOriginal.prototype.write = function (writer, gu) {
        if (gu instanceof Blob) {
            return this.writeFileInChunks(writer, gu);
        }
        return new Promise(function (resolve, reject) {
            writer.onwriteend = function (evt) {
                if (writer.error) {
                    reject(writer.error);
                }
                else {
                    resolve(evt);
                }
            };
            writer.write(gu);
        });
    };
    /**
     * @param writer
     * @param file
     * @hidden
     */
    FileOriginal.prototype.writeFileInChunks = function (writer, file) {
        var BLOCK_SIZE = 1024 * 1024;
        var writtenSize = 0;
        /**
         *
         */
        function writeNextChunk() {
            var size = Math.min(BLOCK_SIZE, file.size - writtenSize);
            var chunk = file.slice(writtenSize, writtenSize + size);
            writtenSize += size;
            writer.write(chunk);
        }
        return getPromise(function (resolve, reject) {
            writer.onerror = reject;
            writer.onwrite = function () {
                if (writtenSize < file.size) {
                    writeNextChunk();
                }
                else {
                    resolve();
                }
            };
            writeNextChunk();
        });
    };
    Object.defineProperty(FileOriginal.prototype, "applicationDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "applicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "dataDirectory", {
        get: function () { return cordovaPropertyGet(this, "dataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "cacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "cacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalApplicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalApplicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalCacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalCacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "externalRootDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalRootDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "tempDirectory", {
        get: function () { return cordovaPropertyGet(this, "tempDirectory"); },
        set: function (value) { cordovaPropertySet(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "syncedDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "syncedDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "documentsDirectory", {
        get: function () { return cordovaPropertyGet(this, "documentsDirectory"); },
        set: function (value) { cordovaPropertySet(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FileOriginal.prototype, "sharedDirectory", {
        get: function () { return cordovaPropertyGet(this, "sharedDirectory"); },
        set: function (value) { cordovaPropertySet(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    FileOriginal.pluginName = "File";
    FileOriginal.plugin = "cordova-plugin-file";
    FileOriginal.pluginRef = "cordova.file";
    FileOriginal.repo = "https://github.com/apache/cordova-plugin-file";
    FileOriginal.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    return FileOriginal;
}(AwesomeCordovaNativePlugin));
var File = new FileOriginal();
export { File };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQ0EsT0FBTyx5RkFLTCxVQUFVLEVBQ1gsTUFBTSwrQkFBK0IsQ0FBQzs7SUFzcEJiLHdCQUEwQjs7O1FBOERsRCxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQVFGLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsT0FBTyxH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LHNDQUFvQjs7Ozs7OzBCQUtwQiw2Q0FBMkI7Ozs7OzswQkFLM0IsK0JBQWE7Ozs7OzswQkFNYixnQ0FBYzs7Ozs7OzBCQUtkLHFEQUFtQzs7Ozs7OzBCQUtuQyx1Q0FBcUI7Ozs7OzswQkFLckIsd0NBQXNCOzs7Ozs7MEJBS3RCLHVDQUFxQjs7Ozs7OzBCQUtyQiwrQkFBYTs7Ozs7OzBCQUtiLHFDQUFtQjs7Ozs7OzBCQUtuQixvQ0FBa0I7Ozs7OzswQkFLbEIsaUNBQWU7Ozs7Ozs7Ozs7O2VBenRCcEM7RUE2cEIwQiwwQkFBMEI7U0FBdkMsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtcclxuICBDb3Jkb3ZhQ2hlY2ssXHJcbiAgQ29yZG92YVByb3BlcnR5LFxyXG4gIEF3ZXNvbWVDb3Jkb3ZhTmF0aXZlUGx1Z2luLFxyXG4gIFBsdWdpbixcclxuICBnZXRQcm9taXNlLFxyXG59IGZyb20gJ0Bhd2Vzb21lLWNvcmRvdmEtcGx1Z2lucy9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGUgZXh0ZW5kcyBCbG9iIHtcclxuICAvKipcclxuICAgKiBOYW1lIG9mIHRoZSBmaWxlLCB3aXRob3V0IHBhdGggaW5mb3JtYXRpb25cclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXHJcbiAgICovXHJcbiAgbGFzdE1vZGlmaWVkOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogTGFzdCBtb2RpZmllZCBkYXRlXHJcbiAgICovXHJcbiAgbGFzdE1vZGlmaWVkRGF0ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFNpemUgaW4gYnl0ZXNcclxuICAgKi9cclxuICBzaXplOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogRmlsZSBtaW1lIHR5cGVcclxuICAgKi9cclxuICB0eXBlOiBzdHJpbmc7XHJcbiAgbG9jYWxVUkw6IHN0cmluZztcclxuICBzdGFydDogbnVtYmVyO1xyXG4gIGVuZDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgXCJzbGljZVwiIG9mIHRoZSBmaWxlLiBTaW5jZSBDb3Jkb3ZhIEZpbGVzIGRvbid0IGNvbnRhaW4gdGhlIGFjdHVhbFxyXG4gICAqIGNvbnRlbnQsIHRoaXMgcmVhbGx5IHJldHVybnMgYSBGaWxlIHdpdGggYWRqdXN0ZWQgc3RhcnQgYW5kIGVuZC5cclxuICAgKiBTbGljZXMgb2Ygc2xpY2VzIGFyZSBzdXBwb3J0ZWQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3RhcnQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIHN0YXJ0IHRoZSBzbGljZSAoaW5jbHVzaXZlKS5cclxuICAgKiBAcGFyYW0gZW5kIHtOdW1iZXJ9IFRoZSBpbmRleCBhdCB3aGljaCB0byBlbmQgdGhlIHNsaWNlIChleGNsdXNpdmUpLlxyXG4gICAqL1xyXG4gIHNsaWNlKHN0YXJ0OiBudW1iZXIsIGVuZDogbnVtYmVyKTogQmxvYjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBMb2NhbEZpbGVTeXN0ZW0ge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2Ugd2l0aCBubyBndWFyYW50ZWUgb2YgcGVyc2lzdGVuY2UuXHJcbiAgICovXHJcbiAgVEVNUE9SQVJZOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFVzZWQgZm9yIHN0b3JhZ2UgdGhhdCBzaG91bGQgbm90IGJlIHJlbW92ZWQgYnkgdGhlIHVzZXIgYWdlbnQgd2l0aG91dCBhcHBsaWNhdGlvbiBvciB1c2VyIHBlcm1pc3Npb24uXHJcbiAgICovXHJcbiAgUEVSU0lTVEVOVDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBSZXF1ZXN0cyBhIGZpbGVzeXN0ZW0gaW4gd2hpY2ggdG8gc3RvcmUgYXBwbGljYXRpb24gZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB0eXBlIFdoZXRoZXIgdGhlIGZpbGVzeXN0ZW0gcmVxdWVzdGVkIHNob3VsZCBiZSBwZXJzaXN0ZW50LCBhcyBkZWZpbmVkIGFib3ZlLiBVc2Ugb25lIG9mIFRFTVBPUkFSWSBvclxyXG4gICAqICAgUEVSU0lTVEVOVC5cclxuICAgKiBAcGFyYW0gc2l6ZSBUaGlzIGlzIGFuIGluZGljYXRvciBvZiBob3cgbXVjaCBzdG9yYWdlIHNwYWNlLCBpbiBieXRlcywgdGhlIGFwcGxpY2F0aW9uIGV4cGVjdHMgdG8gbmVlZC5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIFRoZSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSB1c2VyIGFnZW50IHByb3ZpZGVzIGEgZmlsZXN5c3RlbS5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIGZpbGVzeXN0ZW0gaXNcclxuICAgKiAgIGRlbmllZC5cclxuICAgKi9cclxuICByZXF1ZXN0RmlsZVN5c3RlbShcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIHNpemU6IG51bWJlcixcclxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBBbGxvd3MgdGhlIHVzZXIgdG8gbG9vayB1cCB0aGUgRW50cnkgZm9yIGEgZmlsZSBvciBkaXJlY3RvcnkgcmVmZXJyZWQgdG8gYnkgYSBsb2NhbCBVUkwuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gdXJsIEEgVVJMIHJlZmVycmluZyB0byBhIGxvY2FsIGZpbGUgaW4gYSBmaWxlc3lzdGVtIGFjY2Vzc2FibGUgdmlhIHRoaXMgQVBJLlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXBvcnQgdGhlIEZpbGVFbnRyeSB0byB3aGljaCB0aGUgc3VwcGxpZWQgVVJMIHJlZmVycy5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbiwgb3Igd2hlbiB0aGUgcmVxdWVzdCB0byBvYnRhaW4gdGhlIEVudHJ5IGlzXHJcbiAgICogICBkZW5pZWQuXHJcbiAgICovXHJcbiAgcmVzb2x2ZUxvY2FsRmlsZVN5c3RlbVVSTCh1cmw6IHN0cmluZywgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlRW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBzZWUgcmVxdWVzdEZpbGVTeXN0ZW0uXHJcbiAgICovXHJcbiAgd2Via2l0UmVxdWVzdEZpbGVTeXN0ZW0oXHJcbiAgICB0eXBlOiBudW1iZXIsXHJcbiAgICBzaXplOiBudW1iZXIsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVTeXN0ZW1DYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXHJcbiAgKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBNZXRhZGF0YSB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB0aGUgdGltZSBhdCB3aGljaCB0aGUgZmlsZSBvciBkaXJlY3Rvcnkgd2FzIGxhc3QgbW9kaWZpZWQuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBtb2RpZmljYXRpb25UaW1lOiBEYXRlO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgc2l6ZSBvZiB0aGUgZmlsZSwgaW4gYnl0ZXMuIFRoaXMgbXVzdCByZXR1cm4gMCBmb3IgZGlyZWN0b3JpZXMuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBzaXplOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmxhZ3Mge1xyXG4gIC8qKlxyXG4gICAqIFVzZWQgdG8gaW5kaWNhdGUgdGhhdCB0aGUgdXNlciB3YW50cyB0byBjcmVhdGUgYSBmaWxlIG9yIGRpcmVjdG9yeSBpZiBpdCB3YXMgbm90IHByZXZpb3VzbHkgdGhlcmUuXHJcbiAgICovXHJcbiAgY3JlYXRlPzogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogQnkgaXRzZWxmLCBleGNsdXNpdmUgbXVzdCBoYXZlIG5vIGVmZmVjdC4gVXNlZCB3aXRoIGNyZWF0ZSwgaXQgbXVzdCBjYXVzZSBnZXRGaWxlIGFuZCBnZXREaXJlY3RvcnkgdG8gZmFpbCBpZiB0aGVcclxuICAgKiB0YXJnZXQgcGF0aCBhbHJlYWR5IGV4aXN0cy5cclxuICAgKi9cclxuICBleGNsdXNpdmU/OiBib29sZWFuO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBmaWxlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVN5c3RlbSB7XHJcbiAgLyoqXHJcbiAgICogVGhpcyBpcyB0aGUgbmFtZSBvZiB0aGUgZmlsZSBzeXN0ZW0uIFRoZSBzcGVjaWZpY3Mgb2YgbmFtaW5nIGZpbGVzeXN0ZW1zIGlzIHVuc3BlY2lmaWVkLCBidXQgYSBuYW1lIG11c3QgYmUgdW5pcXVlXHJcbiAgICogYWNyb3NzIHRoZSBsaXN0IG9mIGV4cG9zZWQgZmlsZSBzeXN0ZW1zLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBUaGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhlIGZpbGUgc3lzdGVtLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgcm9vdDogRGlyZWN0b3J5RW50cnk7XHJcblxyXG4gIHRvSlNPTigpOiBzdHJpbmc7XHJcblxyXG4gIGVuY29kZVVSSVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVudHJ5IHtcclxuICAvKipcclxuICAgKiBFbnRyeSBpcyBhIGZpbGUuXHJcbiAgICovXHJcbiAgaXNGaWxlOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBFbnRyeSBpcyBhIGRpcmVjdG9yeS5cclxuICAgKi9cclxuICBpc0RpcmVjdG9yeTogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogTG9vayB1cCBtZXRhZGF0YSBhYm91dCB0aGlzIGVudHJ5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIHRpbWUgb2YgdGhlIGxhc3QgbW9kaWZpY2F0aW9uLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZ2V0TWV0YWRhdGEoc3VjY2Vzc0NhbGxiYWNrOiBNZXRhZGF0YUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNldCB0aGUgbWV0YWRhdGEgb2YgdGhlIGVudHJ5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgTWV0YWRhdGEgb2JqZWN0XHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sge0Z1bmN0aW9ufSBpcyBjYWxsZWQgd2l0aCBhIEZpbGVFcnJvclxyXG4gICAqIEBwYXJhbSBtZXRhZGF0YU9iamVjdCB7TWV0YWRhdGF9IGtleXMgYW5kIHZhbHVlcyB0byBzZXRcclxuICAgKi9cclxuICBzZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s6IEVycm9yQ2FsbGJhY2ssIG1ldGFkYXRhT2JqZWN0OiBNZXRhZGF0YSk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBuYW1lIG9mIHRoZSBlbnRyeSwgZXhjbHVkaW5nIHRoZSBwYXRoIGxlYWRpbmcgdG8gaXQuXHJcbiAgICovXHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBmdWxsIGFic29sdXRlIHBhdGggZnJvbSB0aGUgcm9vdCB0byB0aGUgZW50cnkuXHJcbiAgICovXHJcbiAgZnVsbFBhdGg6IHN0cmluZztcclxuICAvKipcclxuICAgKiBUaGUgZmlsZSBzeXN0ZW0gb24gd2hpY2ggdGhlIGVudHJ5IHJlc2lkZXMuXHJcbiAgICovXHJcbiAgZmlsZXN5c3RlbTogRmlsZVN5c3RlbTtcclxuICAvKipcclxuICAgKiBhbiBhbHRlcm5hdGUgVVJMIHdoaWNoIGNhbiBiZSB1c2VkIGJ5IG5hdGl2ZSB3ZWJ2aWV3IGNvbnRyb2xzLCBmb3IgZXhhbXBsZSBtZWRpYSBwbGF5ZXJzLlxyXG4gICAqL1xyXG4gIG5hdGl2ZVVSTDogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxyXG4gICAqXHJcbiAgICogPHVpPlxyXG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IGluc2lkZSBpdHNlbGYgb3IgdG8gYW55IGNoaWxkIGF0IGFueSBkZXB0aDs8L2xpPlxyXG4gICAqIDxsaT5tb3ZlIGFuIGVudHJ5IGludG8gaXRzIHBhcmVudCBpZiBhIG5hbWUgZGlmZmVyZW50IGZyb20gaXRzIGN1cnJlbnQgb25lIGlzbid0IHByb3ZpZGVkOzwvbGk+XHJcbiAgICogPGxpPm1vdmUgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxyXG4gICAqIDxsaT5tb3ZlIGEgZGlyZWN0b3J5IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGZpbGU7PC9saT5cclxuICAgKiA8bGk+bW92ZSBhbnkgZWxlbWVudCB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnkgd2hpY2ggaXMgbm90IGVtcHR5LjwvbGk+XHJcbiAgICogPHVsPlxyXG4gICAqXHJcbiAgICogQSBtb3ZlIG9mIGEgZmlsZSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZmlsZSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZmlsZS5cclxuICAgKiBBIG1vdmUgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXQgZGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIG1vdmVUbyhcclxuICAgIHBhcmVudDogRGlyZWN0b3J5RW50cnksXHJcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ29weSBhbiBlbnRyeSB0byBhIGRpZmZlcmVudCBsb2NhdGlvbiBvbiB0aGUgZmlsZSBzeXN0ZW0uIEl0IGlzIGFuIGVycm9yIHRvIHRyeSB0bzpcclxuICAgKlxyXG4gICAqIDx1bD5cclxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XHJcbiAgICogPGxpPiBjb3B5IGFuIGVudHJ5IGludG8gaXRzIHBhcmVudCBpZiBhIG5hbWUgZGlmZmVyZW50IGZyb20gaXRzIGN1cnJlbnQgb25lIGlzbid0IHByb3ZpZGVkOzwvbGk+XHJcbiAgICogPGxpPiBjb3B5IGEgZmlsZSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnk7PC9saT5cclxuICAgKiA8bGk+IGNvcHkgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxyXG4gICAqIDxsaT4gY29weSBhbnkgZWxlbWVudCB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBkaXJlY3Rvcnkgd2hpY2ggaXMgbm90IGVtcHR5LjwvbGk+XHJcbiAgICogPGxpPiBBIGNvcHkgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLjwvbGk+XHJcbiAgICogPGxpPiBBIGNvcHkgb2YgYSBkaXJlY3Rvcnkgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGVtcHR5IGRpcmVjdG9yeSBtdXN0IGF0dGVtcHQgdG8gZGVsZXRlIGFuZCByZXBsYWNlIHRoYXRcclxuICAgKiBkaXJlY3RvcnkuPC9saT5cclxuICAgKiA8L3VsPlxyXG4gICAqXHJcbiAgICogRGlyZWN0b3J5IGNvcGllcyBhcmUgYWx3YXlzIHJlY3Vyc2l2ZS0tdGhhdCBpcywgdGhleSBjb3B5IGFsbCBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIGNvcHlUbyhcclxuICAgIHBhcmVudDogRGlyZWN0b3J5RW50cnksXHJcbiAgICBuZXdOYW1lPzogc3RyaW5nLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRW50cnlDYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogUmV0dXJucyBhIFVSTCB0aGF0IGNhbiBiZSB1c2VkIHRvIGlkZW50aWZ5IHRoaXMgZW50cnkuIFVubGlrZSB0aGUgVVJOIGRlZmluZWQgaW4gW0ZJTEUtQVBJLUVEXSwgaXQgaGFzIG5vIHNwZWNpZmljXHJcbiAgICogZXhwaXJhdGlvbjsgYXMgaXQgZGVzY3JpYmVzIGEgbG9jYXRpb24gb24gZGlzaywgaXQgc2hvdWxkIGJlIHZhbGlkIGF0IGxlYXN0IGFzIGxvbmcgYXMgdGhhdCBsb2NhdGlvbiBleGlzdHMuXHJcbiAgICovXHJcbiAgdG9VUkwoKTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm4gYSBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFjcm9zcyB0aGUgYnJpZGdlIHRvIGlkZW50aWZ5IHRoaXMgZW50cnkuXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyBzdHJpbmcgVVJMIHRoYXQgY2FuIGJlIHBhc3NlZCBhY3Jvc3MgdGhlIGJyaWRnZSB0byBpZGVudGlmeSB0aGlzIGVudHJ5XHJcbiAgICovXHJcbiAgdG9JbnRlcm5hbFVSTCgpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBmaWxlIG9yIGRpcmVjdG9yeS4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBkZWxldGUgYSBkaXJlY3RvcnkgdGhhdCBpcyBub3QgZW1wdHkuIEl0IGlzIGFuIGVycm9yIHRvXHJcbiAgICogYXR0ZW1wdCB0byBkZWxldGUgdGhlIHJvb3QgZGlyZWN0b3J5IG9mIGEgZmlsZXN5c3RlbS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCBvbiBzdWNjZXNzLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIHJlbW92ZShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBMb29rIHVwIHRoZSBwYXJlbnQgRGlyZWN0b3J5RW50cnkgY29udGFpbmluZyB0aGlzIEVudHJ5LiBJZiB0aGlzIEVudHJ5IGlzIHRoZSByb290IG9mIGl0cyBmaWxlc3lzdGVtLCBpdHMgcGFyZW50XHJcbiAgICogaXMgaXRzZWxmLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgcGFyZW50IEVudHJ5LlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldFBhcmVudChzdWNjZXNzQ2FsbGJhY2s6IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZGlyZWN0b3J5IG9uIGEgZmlsZSBzeXN0ZW0uXHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeUVudHJ5IGV4dGVuZHMgRW50cnkge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgRGlyZWN0b3J5UmVhZGVyIHRvIHJlYWQgRW50cmllcyBmcm9tIHRoaXMgRGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIGNyZWF0ZVJlYWRlcigpOiBEaXJlY3RvcnlSZWFkZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZmlsZSB0byBiZSBsb29rZWQgdXAgb3JcclxuICAgKiAgIGNyZWF0ZWQuIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gY3JlYXRlIGEgZmlsZSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqICAgICA8dWw+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlLCBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgdHJ1ZSwgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgYW5kIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RmlsZSBtdXN0IGNyZWF0ZSBpdCBhcyBhXHJcbiAgICogICB6ZXJvLWxlbmd0aCBmaWxlIGFuZCByZXR1cm4gYSBjb3JyZXNwb25kaW5nIEZpbGVFbnRyeS48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGRpcmVjdG9yeSwgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgcmV0dXJuIGEgRmlsZUVudHJ5IGNvcnJlc3BvbmRpbmcgdG8gcGF0aC48L2xpPlxyXG4gICAqICAgICA8L3VsPlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIEZpbGUgc2VsZWN0ZWQgb3IgY3JlYXRlZC5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBnZXRGaWxlKHBhdGg6IHN0cmluZywgb3B0aW9ucz86IEZsYWdzLCBzdWNjZXNzQ2FsbGJhY2s/OiBGaWxlRW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIG9yIGxvb2tzIHVwIGEgZGlyZWN0b3J5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHBhdGggRWl0aGVyIGFuIGFic29sdXRlIHBhdGggb3IgYSByZWxhdGl2ZSBwYXRoIGZyb20gdGhpcyBEaXJlY3RvcnlFbnRyeSB0byB0aGUgZGlyZWN0b3J5IHRvIGJlIGxvb2tlZCB1cFxyXG4gICAqICAgb3IgY3JlYXRlZC4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBjcmVhdGUgYSBkaXJlY3Rvcnkgd2hvc2UgaW1tZWRpYXRlIHBhcmVudCBkb2VzIG5vdCB5ZXQgZXhpc3QuXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKiAgICAgPHVsPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGFuZCBleGNsdXNpdmUgYXJlIGJvdGggdHJ1ZSBhbmQgdGhlIHBhdGggYWxyZWFkeSBleGlzdHMsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCBjcmVhdGUgYW5kIHJldHVyblxyXG4gICAqICAgYSBjb3JyZXNwb25kaW5nIERpcmVjdG9yeUVudHJ5LjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZXhpc3RzLCBidXQgaXMgYSBmaWxlLCBnZXREaXJlY3RvcnkgbXVzdCBmYWlsLjwvbGk+XHJcbiAgICogICAgIDxsaT5PdGhlcndpc2UsIGlmIG5vIG90aGVyIGVycm9yIG9jY3VycywgZ2V0RGlyZWN0b3J5IG11c3QgcmV0dXJuIGEgRGlyZWN0b3J5RW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XHJcbiAgICogICAgIDwvdWw+XHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayAgIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBEaXJlY3RvcnlFbnRyeSBzZWxlY3RlZCBvciBjcmVhdGVkLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldERpcmVjdG9yeShcclxuICAgIHBhdGg6IHN0cmluZyxcclxuICAgIG9wdGlvbnM/OiBGbGFncyxcclxuICAgIHN1Y2Nlc3NDYWxsYmFjaz86IERpcmVjdG9yeUVudHJ5Q2FsbGJhY2ssXHJcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIERlbGV0ZXMgYSBkaXJlY3RvcnkgYW5kIGFsbCBvZiBpdHMgY29udGVudHMsIGlmIGFueS4gSW4gdGhlIGV2ZW50IG9mIGFuIGVycm9yIFtlLmcuIHRyeWluZyB0byBkZWxldGUgYSBkaXJlY3RvcnlcclxuICAgKiB0aGF0IGNvbnRhaW5zIGEgZmlsZSB0aGF0IGNhbm5vdCBiZSByZW1vdmVkXSwgc29tZSBvZiB0aGUgY29udGVudHMgb2YgdGhlIGRpcmVjdG9yeSBtYXkgYmUgZGVsZXRlZC4gSXQgaXMgYW4gZXJyb3JcclxuICAgKiB0byBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgcmVtb3ZlUmVjdXJzaXZlbHkoc3VjY2Vzc0NhbGxiYWNrOiBWb2lkQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBsZXRzIGEgdXNlciBsaXN0IGZpbGVzIGFuZCBkaXJlY3RvcmllcyBpbiBhIGRpcmVjdG9yeS4gSWYgdGhlcmUgYXJlIG5vIGFkZGl0aW9ucyB0byBvclxyXG4gKiBkZWxldGlvbnMgZnJvbSBhIGRpcmVjdG9yeSBiZXR3ZWVuIHRoZSBmaXJzdCBhbmQgbGFzdCBjYWxsIHRvIHJlYWRFbnRyaWVzLCBhbmQgbm8gZXJyb3JzIG9jY3VyLCB0aGVuOlxyXG4gKiA8dWw+XHJcbiAqIDxsaT4gQSBzZXJpZXMgb2YgY2FsbHMgdG8gcmVhZEVudHJpZXMgbXVzdCByZXR1cm4gZWFjaCBlbnRyeSBpbiB0aGUgZGlyZWN0b3J5IGV4YWN0bHkgb25jZS48L2xpPlxyXG4gKiA8bGk+IE9uY2UgYWxsIGVudHJpZXMgaGF2ZSBiZWVuIHJldHVybmVkLCB0aGUgbmV4dCBjYWxsIHRvIHJlYWRFbnRyaWVzIG11c3QgcHJvZHVjZSBhbiBlbXB0eSBhcnJheS48L2xpPlxyXG4gKiA8bGk+IElmIG5vdCBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBhcnJheSBwcm9kdWNlZCBieSByZWFkRW50cmllcyBtdXN0IG5vdCBiZSBlbXB0eS48L2xpPlxyXG4gKiA8bGk+IFRoZSBlbnRyaWVzIHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGluY2x1ZGUgdGhlIGRpcmVjdG9yeSBpdHNlbGYgW1wiLlwiXSBvciBpdHMgcGFyZW50IFtcIi4uXCJdLjwvbGk+XHJcbiAqIDwvdWw+XHJcbiAqL1xyXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdG9yeVJlYWRlciB7XHJcbiAgbG9jYWxVUkw6IHN0cmluZztcclxuICBoYXNSZWFkRW50cmllczogYm9vbGVhbjtcclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCB0aGUgbmV4dCBibG9jayBvZiBlbnRyaWVzIGZyb20gdGhpcyBkaXJlY3RvcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIENhbGxlZCBvbmNlIHBlciBzdWNjZXNzZnVsIGNhbGwgdG8gcmVhZEVudHJpZXMgdG8gZGVsaXZlciB0aGUgbmV4dCBwcmV2aW91c2x5LXVucmVwb3J0ZWRcclxuICAgKiAgIHNldCBvZiBFbnRyaWVzIGluIHRoZSBhc3NvY2lhdGVkIERpcmVjdG9yeS4gSWYgYWxsIEVudHJpZXMgaGF2ZSBhbHJlYWR5IGJlZW4gcmV0dXJuZWQgZnJvbSBwcmV2aW91cyBpbnZvY2F0aW9uc1xyXG4gICAqICAgb2YgcmVhZEVudHJpZXMsIHN1Y2Nlc3NDYWxsYmFjayBtdXN0IGJlIGNhbGxlZCB3aXRoIGEgemVyby1sZW5ndGggYXJyYXkgYXMgYW4gYXJndW1lbnQuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayBpbmRpY2F0aW5nIHRoYXQgdGhlcmUgd2FzIGFuIGVycm9yIHJlYWRpbmcgZnJvbSB0aGUgRGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIHJlYWRFbnRyaWVzKHN1Y2Nlc3NDYWxsYmFjazogRW50cmllc0NhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgb24gYSBmaWxlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRmlsZUVudHJ5IGV4dGVuZHMgRW50cnkge1xyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgRmlsZVdyaXRlciBhc3NvY2lhdGVkIHdpdGggdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIG5ldyBGaWxlV3JpdGVyLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGNyZWF0ZVdyaXRlcihzdWNjZXNzQ2FsbGJhY2s6IEZpbGVXcml0ZXJDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgRmlsZSB0aGF0IHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIGZpbGUgdGhhdCB0aGlzIEZpbGVFbnRyeSByZXByZXNlbnRzLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdpdGggdGhlIEZpbGUuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZmlsZShzdWNjZXNzQ2FsbGJhY2s6IEZpbGVDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogV2hlbiByZXF1ZXN0RmlsZVN5c3RlbSgpIHN1Y2NlZWRzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlU3lzdGVtQ2FsbGJhY2sgPSAoZmlsZXN5c3RlbTogRmlsZVN5c3RlbSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBFbnRyeSBvYmplY3RzLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRW50cnlDYWxsYmFjayA9IChlbnRyeTogRW50cnkpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRmlsZUVudHJ5IG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlRW50cnlDYWxsYmFjayA9IChlbnRyeTogRmlsZUVudHJ5KSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIERpcmVjdG9yeUVudHJ5IG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBEaXJlY3RvcnlFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBXaGVuIHJlYWRFbnRyaWVzKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEVudHJpZXNDYWxsYmFjayA9IChlbnRyaWVzOiBFbnRyeVtdKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIGZpbGUgYW5kIGRpcmVjdG9yeSBtZXRhZGF0YS5cclxuICovXHJcbmV4cG9ydCB0eXBlIE1ldGFkYXRhQ2FsbGJhY2sgPSAobWV0YWRhdGE6IE1ldGFkYXRhKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBjcmVhdGUgYSBGaWxlV3JpdGVyLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRmlsZVdyaXRlckNhbGxiYWNrID0gKGZpbGVXcml0ZXI6IEZpbGVXcml0ZXIpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIG9idGFpbiBhIEZpbGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlQ2FsbGJhY2sgPSAoZmlsZTogSUZpbGUpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBnZW5lcmljIGNhbGxiYWNrIHVzZWQgdG8gaW5kaWNhdGUgc3VjY2VzcyBvZiBhbiBhc3luY2hyb25vdXMgbWV0aG9kLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgVm9pZENhbGxiYWNrID0gKCkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBXaGVuIGFuIGVycm9yIG9jY3VycywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRXJyb3JDYWxsYmFjayA9IChlcnI6IEZpbGVFcnJvcikgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVtb3ZlUmVzdWx0IHtcclxuICBzdWNjZXNzOiBib29sZWFuO1xyXG4gIGZpbGVSZW1vdmVkOiBFbnRyeTtcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVNhdmVyIGV4dGVuZHMgRXZlbnRUYXJnZXQge1xyXG4gIC8qKlxyXG4gICAqIFdoZW4gdGhlIEZpbGVTYXZlciBjb25zdHJ1Y3RvciBpcyBjYWxsZWQsIHRoZSB1c2VyIGFnZW50IG11c3QgcmV0dXJuIGEgbmV3IEZpbGVTYXZlciBvYmplY3Qgd2l0aCByZWFkeVN0YXRlIHNldCB0b1xyXG4gICAqIElOSVQuIFRoaXMgY29uc3RydWN0b3IgbXVzdCBiZSB2aXNpYmxlIHdoZW4gdGhlIHNjcmlwdCdzIGdsb2JhbCBvYmplY3QgaXMgZWl0aGVyIGEgV2luZG93IG9iamVjdCBvciBhbiBvYmplY3RcclxuICAgKiBpbXBsZW1lbnRpbmcgdGhlIFdvcmtlclV0aWxzIGludGVyZmFjZS5cclxuICAgKi9cclxuICBjb25zdHJ1Y3RvcihkYXRhOiBCbG9iKTtcclxuXHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgYWJvcnQgbWV0aG9kIGlzIGNhbGxlZCwgdXNlciBhZ2VudHMgbXVzdCBydW4gdGhlIHN0ZXBzIGJlbG93OlxyXG4gICAqIDxvbD5cclxuICAgKiA8bGk+IElmIHJlYWR5U3RhdGUgPT0gRE9ORSBvciByZWFkeVN0YXRlID09IElOSVQsIHRlcm1pbmF0ZSB0aGlzIG92ZXJhbGwgc2VyaWVzIG9mIHN0ZXBzIHdpdGhvdXQgZG9pbmcgYW55dGhpbmdcclxuICAgKiBlbHNlLiA8L2xpPlxyXG4gICAqIDxsaT4gU2V0IHJlYWR5U3RhdGUgdG8gRE9ORS4gPC9saT5cclxuICAgKiA8bGk+IElmIHRoZXJlIGFyZSBhbnkgdGFza3MgZnJvbSB0aGUgb2JqZWN0J3MgRmlsZVNhdmVyIHRhc2sgc291cmNlIGluIG9uZSBvZiB0aGUgdGFzayBxdWV1ZXMsIHRoZW4gcmVtb3ZlIHRob3NlXHJcbiAgICogdGFza3MuIDwvbGk+XHJcbiAgICogPGxpPiBUZXJtaW5hdGUgdGhlIHdyaXRlIGFsZ29yaXRobSBiZWluZyBwcm9jZXNzZWQuIDwvbGk+XHJcbiAgICogPGxpPiBTZXQgdGhlIGVycm9yIGF0dHJpYnV0ZSB0byBhIERPTUVycm9yIG9iamVjdCBvZiB0eXBlIFwiQWJvcnRFcnJvclwiLiA8L2xpPlxyXG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCBhYm9ydCA8L2xpPlxyXG4gICAqIDxsaT4gRmlyZSBhIHByb2dyZXNzIGV2ZW50IGNhbGxlZCB3cml0ZSBlbmQgPC9saT5cclxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGlzIGFsZ29yaXRobS4gPC9saT5cclxuICAgKiA8L29sPlxyXG4gICAqL1xyXG4gIGFib3J0KCk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBibG9iIGlzIGJlaW5nIHdyaXR0ZW4uXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBJTklUOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIG9iamVjdCBoYXMgYmVlbiBjb25zdHJ1Y3RlZCwgYnV0IHRoZXJlIGlzIG5vIHBlbmRpbmcgd3JpdGUuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBXUklUSU5HOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIGVudGlyZSBCbG9iIGhhcyBiZWVuIHdyaXR0ZW4gdG8gdGhlIGZpbGUsIGFuIGVycm9yIG9jY3VycmVkIGR1cmluZyB0aGUgd3JpdGUsIG9yIHRoZSB3cml0ZSB3YXMgYWJvcnRlZCB1c2luZ1xyXG4gICAqIGFib3J0KCkuIFRoZSBGaWxlU2F2ZXIgaXMgbm8gbG9uZ2VyIHdyaXRpbmcgdGhlIGJsb2IuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBET05FOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIEZpbGVTYXZlciBvYmplY3QgY2FuIGJlIGluIG9uZSBvZiAzIHN0YXRlcy4gVGhlIHJlYWR5U3RhdGUgYXR0cmlidXRlLCBvbiBnZXR0aW5nLCBtdXN0IHJldHVybiB0aGUgY3VycmVudFxyXG4gICAqIHN0YXRlLCB3aGljaCBtdXN0IGJlIG9uZSBvZiB0aGUgZm9sbG93aW5nIHZhbHVlczpcclxuICAgKiA8dWw+XHJcbiAgICogPGxpPklOSVQ8L2xpPlxyXG4gICAqIDxsaT5XUklUSU5HPC9saT5cclxuICAgKiA8bGk+RE9ORTwvbGk+XHJcbiAgICogPHVsPlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgcmVhZHlTdGF0ZTogbnVtYmVyO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBsYXN0IGVycm9yIHRoYXQgb2NjdXJyZWQgb24gdGhlIEZpbGVTYXZlci5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIGVycm9yOiBFcnJvcjtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciB3cml0ZSBzdGFydCBldmVudHNcclxuICAgKi9cclxuICBvbndyaXRlc3RhcnQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciBwcm9ncmVzcyBldmVudHMuXHJcbiAgICovXHJcbiAgb25wcm9ncmVzczogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIGV2ZW50cy5cclxuICAgKi9cclxuICBvbndyaXRlOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3IgYWJvcnQgZXZlbnRzLlxyXG4gICAqL1xyXG4gIG9uYWJvcnQ6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciBlcnJvciBldmVudHMuXHJcbiAgICovXHJcbiAgb25lcnJvcjogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIGVuZCBldmVudHMuXHJcbiAgICovXHJcbiAgb253cml0ZWVuZDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogQGhpZGRlblxyXG4gKiBUaGlzIGludGVyZmFjZSBleHBhbmRzIG9uIHRoZSBGaWxlU2F2ZXIgaW50ZXJmYWNlIHRvIGFsbG93IGZvciBtdWx0aXBsZSB3cml0ZSBhY3Rpb25zLCByYXRoZXIgdGhhbiBqdXN0IHNhdmluZyBhXHJcbiAqICAgc2luZ2xlIEJsb2IuXHJcbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlV3JpdGVyIGV4dGVuZHMgRmlsZVNhdmVyIHtcclxuICAvKipcclxuICAgKiBUaGUgYnl0ZSBvZmZzZXQgYXQgd2hpY2ggdGhlIG5leHQgd3JpdGUgdG8gdGhlIGZpbGUgd2lsbCBvY2N1ci4gVGhpcyBtdXN0IGJlIG5vIGdyZWF0ZXIgdGhhbiBsZW5ndGguXHJcbiAgICogQSBuZXdseS1jcmVhdGVkIEZpbGVXcml0ZXIgbXVzdCBoYXZlIHBvc2l0aW9uIHNldCB0byAwLlxyXG4gICAqL1xyXG4gIHBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBsZW5ndGggb2YgdGhlIGZpbGUuIElmIHRoZSB1c2VyIGRvZXMgbm90IGhhdmUgcmVhZCBhY2Nlc3MgdG8gdGhlIGZpbGUsIHRoaXMgbXVzdCBiZSB0aGUgaGlnaGVzdCBieXRlIG9mZnNldCBhdFxyXG4gICAqIHdoaWNoIHRoZSB1c2VyIGhhcyB3cml0dGVuLlxyXG4gICAqL1xyXG4gIGxlbmd0aDogbnVtYmVyO1xyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSB0aGUgc3VwcGxpZWQgZGF0YSB0byB0aGUgZmlsZSBhdCBwb3NpdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBkYXRhIFRoZSBibG9iIHRvIHdyaXRlLlxyXG4gICAqL1xyXG4gIHdyaXRlKGRhdGE6IEFycmF5QnVmZmVyIHwgQmxvYiB8IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFNlZWsgc2V0cyB0aGUgZmlsZSBwb3NpdGlvbiBhdCB3aGljaCB0aGUgbmV4dCB3cml0ZSB3aWxsIG9jY3VyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIG9mZnNldCBJZiBub25uZWdhdGl2ZSwgYW4gYWJzb2x1dGUgYnl0ZSBvZmZzZXQgaW50byB0aGUgZmlsZS4gSWYgbmVnYXRpdmUsIGFuIG9mZnNldCBiYWNrIGZyb20gdGhlIGVuZCBvZlxyXG4gICAqICAgdGhlIGZpbGUuXHJcbiAgICovXHJcbiAgc2VlayhvZmZzZXQ6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENoYW5nZXMgdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSB0byB0aGF0IHNwZWNpZmllZC4gSWYgc2hvcnRlbmluZyB0aGUgZmlsZSwgZGF0YSBiZXlvbmQgdGhlIG5ldyBsZW5ndGggbXVzdCBiZVxyXG4gICAqIGRpc2NhcmRlZC4gSWYgZXh0ZW5kaW5nIHRoZSBmaWxlLCB0aGUgZXhpc3RpbmcgZGF0YSBtdXN0IGJlIHplcm8tcGFkZGVkIHVwIHRvIHRoZSBuZXcgbGVuZ3RoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHNpemUgVGhlIHNpemUgdG8gd2hpY2ggdGhlIGxlbmd0aCBvZiB0aGUgZmlsZSBpcyB0byBiZSBhZGp1c3RlZCwgbWVhc3VyZWQgaW4gYnl0ZXMuXHJcbiAgICovXHJcbiAgdHJ1bmNhdGUoc2l6ZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJV3JpdGVPcHRpb25zIHtcclxuICByZXBsYWNlPzogYm9vbGVhbjtcclxuICBhcHBlbmQ/OiBib29sZWFuO1xyXG4gIHRydW5jYXRlPzogbnVtYmVyOyAvLyBpZiBwcmVzZW50LCBudW1iZXIgb2YgYnl0ZXMgdG8gdHJ1bmNhdGUgZmlsZSB0byBiZWZvcmUgd3JpdGluZ1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlRXJyb3Ige1xyXG4gIHN0YXRpYyBOT1RfRk9VTkRfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFNFQ1VSSVRZX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBBQk9SVF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgTk9UX1JFQURBQkxFX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBFTkNPRElOR19FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIElOVkFMSURfU1RBVEVfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFNZTlRBWF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFFVT1RBX0VYQ0VFREVEX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBUWVBFX01JU01BVENIX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBQQVRIX0VYSVNUU19FUlI6IG51bWJlcjtcclxuICAvKiogRXJyb3IgY29kZSAqL1xyXG4gIGNvZGU6IG51bWJlcjtcclxuICBtZXNzYWdlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGNvZGU6IG51bWJlcik7XHJcbn1cclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVSZWFkZXIge1xyXG4gIHN0YXRpYyBFTVBUWTogbnVtYmVyO1xyXG4gIHN0YXRpYyBMT0FESU5HOiBudW1iZXI7XHJcbiAgc3RhdGljIERPTkU6IG51bWJlcjtcclxuICBzdGF0aWMgUkVBRF9DSFVOS19TSVpFOiBudW1iZXI7XHJcblxyXG4gIHJlYWR5U3RhdGU6IG51bWJlcjsgLy8gc2VlIGNvbnN0YW50cyBpbiB2YXIgZGVjbGFyYXRpb24gYmVsb3dcclxuICBlcnJvcjogRXJyb3I7XHJcbiAgcmVzdWx0OiBzdHJpbmcgfCBBcnJheUJ1ZmZlcjsgLy8gdHlwZSBkZXBlbmRzIG9uIHJlYWRBc1hYWCgpIGNhbGwgdHlwZVxyXG5cclxuICBvbmxvYWRzdGFydDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbnByb2dyZXNzOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9ubG9hZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbmVycm9yOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9ubG9hZGVuZDogKGV2dDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICBvbmFib3J0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG5cclxuICBhYm9ydCgpOiB2b2lkO1xyXG5cclxuICByZWFkQXNUZXh0KGZlOiBJRmlsZSwgZW5jb2Rpbmc/OiBzdHJpbmcpOiB2b2lkO1xyXG5cclxuICByZWFkQXNEYXRhVVJMKGZlOiBJRmlsZSk6IHZvaWQ7XHJcblxyXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhmZTogSUZpbGUpOiB2b2lkO1xyXG5cclxuICByZWFkQXNBcnJheUJ1ZmZlcihmZTogSUZpbGUpOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgW2tleTogc3RyaW5nXTogYW55O1xyXG59XHJcblxyXG50eXBlIFdpbmRvdyA9IExvY2FsRmlsZVN5c3RlbTtcclxuXHJcbmRlY2xhcmUgY29uc3Qgd2luZG93OiBXaW5kb3c7XHJcblxyXG4vKipcclxuICogQG5hbWUgRmlsZVxyXG4gKiBAcHJlbWllciBmaWxlc3lzdGVtXHJcbiAqIEBkZXNjcmlwdGlvblxyXG4gKiBUaGlzIHBsdWdpbiBpbXBsZW1lbnRzIGEgRmlsZSBBUEkgYWxsb3dpbmcgcmVhZC93cml0ZSBhY2Nlc3MgdG8gZmlsZXMgcmVzaWRpbmcgb24gdGhlIGRldmljZS5cclxuICpcclxuICogVGhlIEZpbGUgY2xhc3MgaW1wbGVtZW50cyBzdGF0aWMgY29udmVuaWVuY2UgZnVuY3Rpb25zIHRvIGFjY2VzcyBmaWxlcyBhbmQgZGlyZWN0b3JpZXMuXHJcbiAqXHJcbiAqIEV4YW1wbGU6XHJcbiAqIGBgYFxyXG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2ZpbGUvbmd4JztcclxuICpcclxuICogY29uc3RydWN0b3IocHJpdmF0ZSBmaWxlOiBGaWxlKSB7IH1cclxuICpcclxuICogLi4uXHJcbiAqXHJcbiAqIHRoaXMuZmlsZS5jaGVja0Rpcih0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSwgJ215ZGlyJykudGhlbihfID0+IGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZXhpc3RzJykpLmNhdGNoKGVyciA9PlxyXG4gKiAgIGNvbnNvbGUubG9nKCdEaXJlY3RvcnkgZG9lc24ndCBleGlzdCcpKTtcclxuICpcclxuICogYGBgXHJcbiAqXHJcbiAqICBUaGlzIHBsdWdpbiBpcyBiYXNlZCBvbiBzZXZlcmFsIHNwZWNzLCBpbmNsdWRpbmcgOiBUaGUgSFRNTDUgRmlsZSBBUEkgaHR0cDogLy93d3cudzMub3JnL1RSL0ZpbGVBUEkvXHJcbiAqICBUaGUgKG5vdy1kZWZ1bmN0KSBEaXJlY3RvcmllcyBhbmQgU3lzdGVtIGV4dGVuc2lvbnMgTGF0ZXN0OiBodHRwOiAvL3d3dy53My5vcmcvVFIvMjAxMi9XRC1maWxlLXN5c3RlbS1hcGktMjAxMjA0MTcvXHJcbiAqICBBbHRob3VnaCBtb3N0IG9mIHRoZSBwbHVnaW4gY29kZSB3YXMgd3JpdHRlbiB3aGVuIGFuIGVhcmxpZXIgc3BlYyB3YXMgY3VycmVudDogaHR0cDpcclxuICogICAvL3d3dy53My5vcmcvVFIvMjAxMS9XRC1maWxlLXN5c3RlbS1hcGktMjAxMTA0MTkvIEl0IGFsc28gaW1wbGVtZW50cyB0aGUgRmlsZVdyaXRlciBzcGVjIDogaHR0cDpcclxuICogICAvL2Rldi53My5vcmcvMjAwOS9kYXAvZmlsZS1zeXN0ZW0vZmlsZS13cml0ZXIuaHRtbFxyXG4gKiAgQGludGVyZmFjZXNcclxuICogIElGaWxlXHJcbiAqICBFbnRyeVxyXG4gKiAgRGlyZWN0b3J5RW50cnlcclxuICogIERpcmVjdG9yeVJlYWRlclxyXG4gKiAgRmlsZVN5c3RlbVxyXG4gKi9cclxuQFBsdWdpbih7XHJcbiAgcGx1Z2luTmFtZTogJ0ZpbGUnLFxyXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUnLFxyXG4gIHBsdWdpblJlZjogJ2NvcmRvdmEuZmlsZScsXHJcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tZmlsZScsXHJcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnQnJvd3NlcicsICdpT1MnLCAnbWFjT1MnLCAnV2luZG93cyddLFxyXG59KVxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGaWxlIGV4dGVuZHMgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4ge1xyXG4gIC8qKlxyXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqICBSZWFkLW9ubHkgZGlyZWN0b3J5IHdoZXJlIHRoZSBhcHBsaWNhdGlvbiBpcyBpbnN0YWxsZWQuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGFwcGxpY2F0aW9uU3RvcmFnZURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGRhdGFEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGVkIGZpbGVzIHRoYXQgc2hvdWxkIHN1cnZpdmUgYXBwIHJlc3RhcnRzLlxyXG4gICAqIEFwcHMgc2hvdWxkIG5vdCByZWx5IG9uIHRoZSBPUyB0byBkZWxldGUgZmlsZXMgaW4gaGVyZS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgY2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIHNwYWNlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqICBBbmRyb2lkOiBXaGVyZSB0byBwdXQgYXBwLXNwZWNpZmljIGRhdGEgZmlsZXMgb24gZXh0ZXJuYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxEYXRhRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQ6IHRoZSBhcHBsaWNhdGlvbiBjYWNoZSBvbiBleHRlcm5hbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbENhY2hlRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFuZHJvaWQ6IHRoZSBleHRlcm5hbCBzdG9yYWdlIChTRCBjYXJkKSByb290LlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbFJvb3REaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogaU9TOiBUZW1wIGRpcmVjdG9yeSB0aGF0IHRoZSBPUyBjYW4gY2xlYXIgYXQgd2lsbC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgdGVtcERpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpT1M6IEhvbGRzIGFwcC1zcGVjaWZpYyBmaWxlcyB0aGF0IHNob3VsZCBiZSBzeW5jZWQgKGUuZy4gdG8gaUNsb3VkKS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgc3luY2VkRGF0YURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpT1M6IEZpbGVzIHByaXZhdGUgdG8gdGhlIGFwcCwgYnV0IHRoYXQgYXJlIG1lYW5pbmdmdWwgdG8gb3RoZXIgYXBwbGljYXRpb25zIChlLmcuIE9mZmljZSBmaWxlcylcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZG9jdW1lbnRzRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIEJsYWNrQmVycnkxMDogRmlsZXMgZ2xvYmFsbHkgYXZhaWxhYmxlIHRvIGFsbCBhcHBzXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIHNoYXJlZERpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICBjb3Jkb3ZhRmlsZUVycm9yOiBhbnkgPSB7XHJcbiAgICAxOiAnTk9UX0ZPVU5EX0VSUicsXHJcbiAgICAyOiAnU0VDVVJJVFlfRVJSJyxcclxuICAgIDM6ICdBQk9SVF9FUlInLFxyXG4gICAgNDogJ05PVF9SRUFEQUJMRV9FUlInLFxyXG4gICAgNTogJ0VOQ09ESU5HX0VSUicsXHJcbiAgICA2OiAnTk9fTU9ESUZJQ0FUSU9OX0FMTE9XRURfRVJSJyxcclxuICAgIDc6ICdJTlZBTElEX1NUQVRFX0VSUicsXHJcbiAgICA4OiAnU1lOVEFYX0VSUicsXHJcbiAgICA5OiAnSU5WQUxJRF9NT0RJRklDQVRJT05fRVJSJyxcclxuICAgIDEwOiAnUVVPVEFfRVhDRUVERURfRVJSJyxcclxuICAgIDExOiAnVFlQRV9NSVNNQVRDSF9FUlInLFxyXG4gICAgMTI6ICdQQVRIX0VYSVNUU19FUlInLFxyXG4gICAgMTM6ICdXUk9OR19FTlRSWV9UWVBFJyxcclxuICAgIDE0OiAnRElSX1JFQURfRVJSJyxcclxuICB9O1xyXG5cclxuICAvKipcclxuICAgKiBHZXQgZnJlZSBkaXNrIHNwYWNlIGluIEJ5dGVzXHJcbiAgICpcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxudW1iZXI+fSBSZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIHJlbWFpbmluZyBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBnZXRGcmVlRGlza1NwYWNlKCk6IFByb21pc2U8bnVtYmVyPiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgY29yZG92YS5leGVjKHJlc29sdmUgYXMgKGRhdGE6IGFueSkgPT4gYW55LCByZWplY3QgYXMgKGRhdGE6IGFueSkgPT4gYW55LCAnRmlsZScsICdnZXRGcmVlRGlza1NwYWNlJywgW10pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDaGVjayBpZiBhIGRpcmVjdG9yeSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXIgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY2hlY2tcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0cnVlIGlmIHRoZSBkaXJlY3RvcnkgZXhpc3RzIG9yIHJlamVjdHMgd2l0aCBhblxyXG4gICAqICAgZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY2hlY2tEaXIocGF0aDogc3RyaW5nLCBkaXI6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpcikpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aCArIGRpcjtcclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwoZnVsbFBhdGgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBkaXJlY3RvcnkgaW4gdGhlIHNwZWNpZmljIHBhdGguXHJcbiAgICogVGhlIHJlcGxhY2UgYm9vbGVhbiB2YWx1ZSBkZXRlcm1pbmVzIHdoZXRoZXIgdG8gcmVwbGFjZSBhbiBleGlzdGluZyBkaXJlY3Rvcnkgd2l0aCB0aGUgc2FtZSBuYW1lLlxyXG4gICAqIElmIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjcmVhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgRGlyZWN0b3J5RW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNyZWF0ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgcmVwbGFjZTogYm9vbGVhbik6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XHJcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFyZXBsYWNlKSB7XHJcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGEgZGlyZWN0b3J5IGF0IGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBUaGUgZGlyZWN0b3J5IG5hbWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZW1vdmVEaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChmc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlbW92ZShkZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSBhIGRpcmVjdG9yeSB0byBhIGdpdmVuIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgc291cmNlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBzb3VyY2UgZGlyZWN0b3J5IG5hbWVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBUaGUgZGVzdGluYXRpb24gcGF0aCB0byB0aGUgZGlyZWN0b3J5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0Rpck5hbWUgVGhlIGRlc3RpbmF0aW9uIGRpcmVjdG9yeSBuYW1lXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnl8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRGlyZWN0b3J5RW50cnkgb2JqZWN0IG9yXHJcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5IHwgRW50cnk+IHtcclxuICAgIG5ld0Rpck5hbWUgPSBuZXdEaXJOYW1lIHx8IGRpck5hbWU7XHJcblxyXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0Rpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChmc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzcmNkZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbigoZGVzdGVuYXRpb24pID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZGUsIGRlc3RlbmF0aW9uLCBuZXdEaXJOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGEgZGlyZWN0b3J5IGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZGVzdGluYXRpb24gZGlyZWN0b3J5IGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW1zIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIEJhc2UgRmlsZVN5c3RlbSBvZiBuZXcgbG9jYXRpb25cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBOZXcgbmFtZSBvZiBkaXJlY3RvcnkgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9iamVjdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY29weURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdEaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNyY2RlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKChkZXN0ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNkZSwgZGVzdGUsIG5ld0Rpck5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIExpc3QgZmlsZXMgYW5kIGRpcmVjdG9yeSBmcm9tIGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5W10+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIGFycmF5IG9mIEVudHJ5IG9iamVjdHMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGxpc3REaXIocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5W10+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxFbnRyeVtdPihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHtcclxuICAgICAgICAgIGNyZWF0ZTogZmFsc2UsXHJcbiAgICAgICAgICBleGNsdXNpdmU6IGZhbHNlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGUpID0+IHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBkZS5jcmVhdGVSZWFkZXIoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZWFkRW50cmllcyhyZWFkZXIpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlbW92ZXMgYWxsIGZpbGVzIGFuZCB0aGUgZGlyZWN0b3J5IGZyb20gYSBkZXNpcmVkIGxvY2F0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgTmFtZSBvZiBkaXJlY3RvcnlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlbW92ZVJlY3Vyc2l2ZWx5KHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChkaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxSZW1vdmVSZXN1bHQ+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZGUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yaW1yYWYoZGUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgZmlsZSBleGlzdHMgaW4gYSBjZXJ0YWluIHBhdGgsIGRpcmVjdG9yeS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSB0byBjaGVja1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBib29sZWFuIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBjaGVja0ZpbGUocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPGJvb2xlYW4+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwocGF0aCArIGZpbGUpLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICBpZiAoZnNlLmlzRmlsZSkge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xyXG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGZpbGUnO1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxib29sZWFuPihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgYSBuZXcgZmlsZSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cclxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGZpbGUgd2l0aCB0aGUgc2FtZSBuYW1lLlxyXG4gICAqIElmIGFuIGV4aXN0aW5nIGZpbGUgZXhpc3RzIGFuZCB0aGUgcmVwbGFjZSB2YWx1ZSBpcyBmYWxzZSwgdGhlIHByb21pc2Ugd2lsbCBmYWlsIGFuZCByZXR1cm4gYW4gZXJyb3IuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjcmVhdGVcclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHJlcGxhY2UgSWYgdHJ1ZSwgcmVwbGFjZXMgZmlsZSB3aXRoIHNhbWUgbmFtZS4gSWYgZmFsc2UgcmV0dXJucyBlcnJvclxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBGaWxlRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNyZWF0ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxGaWxlRW50cnk+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wdGlvbnM6IEZsYWdzID0ge1xyXG4gICAgICBjcmVhdGU6IHRydWUsXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghcmVwbGFjZSkge1xyXG4gICAgICBvcHRpb25zLmV4Y2x1c2l2ZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKS50aGVuKChmc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCBvcHRpb25zKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhIGZpbGUgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCAgQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byByZW1vdmVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxSZW1vdmVSZXN1bHQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgUmVtb3ZlUmVzdWx0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZW1vdmVGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZmlsZU5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChmc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGZlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGZlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBhIG5ldyBmaWxlIHRvIHRoZSBkZXNpcmVkIGxvY2F0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXJ9IHRleHQgY29udGVudCwgYmxvYiBvciBBcnJheUJ1ZmZlciB0byB3cml0ZVxyXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gd2hldGhlciB0byByZXBsYWNlL2FwcGVuZCB0byBhbiBleGlzdGluZyBmaWxlLiBTZWUgSVdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICB3cml0ZUZpbGUoXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBmaWxlTmFtZTogc3RyaW5nLFxyXG4gICAgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLFxyXG4gICAgb3B0aW9uczogSVdyaXRlT3B0aW9ucyA9IHt9XHJcbiAgKTogUHJvbWlzZTxhbnk+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBnZXRGaWxlT3B0czogRmxhZ3MgPSB7XHJcbiAgICAgIGNyZWF0ZTogIW9wdGlvbnMuYXBwZW5kLFxyXG4gICAgICBleGNsdXNpdmU6ICFvcHRpb25zLnJlcGxhY2UsXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGRpcmVjdG9yeUVudHJ5OiBEaXJlY3RvcnlFbnRyeSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZGlyZWN0b3J5RW50cnksIGZpbGVOYW1lLCBnZXRGaWxlT3B0cyk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUVudHJ5KGZpbGVFbnRyeSwgdGV4dCwgb3B0aW9ucyk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogV3JpdGUgY29udGVudCB0byBGaWxlRW50cnkuXHJcbiAgICpcclxuICAgKiBAaGlkZGVuXHJcbiAgICogV3JpdGUgdG8gYW4gZXhpc3RpbmcgZmlsZS5cclxuICAgKiBAcGFyYW0ge0ZpbGVFbnRyeX0gZmUgZmlsZSBlbnRyeSBvYmplY3RcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxyXG4gICAqIEBwYXJhbSB7SVdyaXRlT3B0aW9uc30gb3B0aW9ucyByZXBsYWNlIGZpbGUgaWYgc2V0IHRvIHRydWUuIFNlZSBXcml0ZU9wdGlvbnMgZm9yIG1vcmUgaW5mb3JtYXRpb24uXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gIFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdXBkYXRlZCBmaWxlIGVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBwcml2YXRlIHdyaXRlRmlsZUVudHJ5KGZlOiBGaWxlRW50cnksIHRleHQ6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlciwgb3B0aW9uczogSVdyaXRlT3B0aW9ucykge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlV3JpdGVyKGZlKVxyXG4gICAgICAudGhlbigod3JpdGVyKSA9PiB7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMuYXBwZW5kKSB7XHJcbiAgICAgICAgICB3cml0ZXIuc2Vlayh3cml0ZXIubGVuZ3RoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLnRydW5jYXRlKSB7XHJcbiAgICAgICAgICB3cml0ZXIudHJ1bmNhdGUob3B0aW9ucy50cnVuY2F0ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy53cml0ZSh3cml0ZXIsIHRleHQpO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoKSA9PiBmZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIHBhdGggcmVsYXRpdmUgdG8gYmFzZSBwYXRoXHJcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBCbG9ifSB0ZXh0IGNvbnRlbnQgb3IgYmxvYiB0byB3cml0ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHZvaWQ+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICB3cml0ZUV4aXN0aW5nRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHRleHQ6IHN0cmluZyB8IEJsb2IpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLndyaXRlRmlsZShwYXRoLCBmaWxlTmFtZSwgdGV4dCwgeyByZXBsYWNlOiB0cnVlIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCB0aGUgY29udGVudHMgb2YgYSBmaWxlIGFzIHRleHQuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgb3IgcmVqZWN0cyB3aXRoXHJcbiAgICogICBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNUZXh0KHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ1RleHQnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiYXNlNjQgZW5jb2RlZCBkYXRhIHVybC5cclxuICAgKiBBIGRhdGEgdXJsIGlzIG9mIHRoZSBmb3JtOlxyXG4gICAqICAgICAgZGF0YTogWzxtZWRpYXR5cGU+XVs7YmFzZTY0XSw8ZGF0YT5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIGRhdGEgVVJMIG9yIHJlamVjdHNcclxuICAgKiAgIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVhZEFzRGF0YVVSTChwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdEYXRhVVJMJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGEgYmluYXJ5IGRhdGEuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8c3RyaW5nPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBzdHJpbmcgcmVqZWN0cyB3aXRoIGFuXHJcbiAgICogICBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNCaW5hcnlTdHJpbmcocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnQmluYXJ5U3RyaW5nJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIGZpbGUgYW5kIHJldHVybiBkYXRhIGFzIGFuIEFycmF5QnVmZmVyLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEFycmF5QnVmZmVyPn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIHRoZSBjb250ZW50cyBvZiB0aGUgZmlsZSBhcyBBcnJheUJ1ZmZlciBvclxyXG4gICAqICAgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlYWRBc0FycmF5QnVmZmVyKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxBcnJheUJ1ZmZlcj4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8QXJyYXlCdWZmZXI+KHBhdGgsIGZpbGUsICdBcnJheUJ1ZmZlcicpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTW92ZSBhIGZpbGUgdG8gYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBtb3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIG1vdmUgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgbW92ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xyXG5cclxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3JjZmUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oKGRlc3RlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5tb3ZlKHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYSBmaWxlIGluIHZhcmlvdXMgbWV0aG9kcy4gSWYgZmlsZSBleGlzdHMsIHdpbGwgZmFpbCB0byBjb3B5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVOYW1lIE5hbWUgb2YgZmlsZSB0byBjb3B5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdGaWxlTmFtZSBOZXcgbmFtZSBvZiBmaWxlIHRvIGNvcHkgdG8gKGxlYXZlIGJsYW5rIHRvIHJlbWFpbiB0aGUgc2FtZSlcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gRW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNvcHlGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgbmV3UGF0aDogc3RyaW5nLCBuZXdGaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgbmV3RmlsZU5hbWUgPSBuZXdGaWxlTmFtZSB8fCBmaWxlTmFtZTtcclxuXHJcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RmlsZU5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChmc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNyY2ZlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKChkZXN0ZSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuY29weShzcmNmZSwgZGVzdGUsIG5ld0ZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gZXJyXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgZmlsbEVycm9yTWVzc2FnZShlcnI6IEZpbGVFcnJvcik6IHZvaWQge1xyXG4gICAgdHJ5IHtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSB0aGlzLmNvcmRvdmFGaWxlRXJyb3JbZXJyLmNvZGVdO1xyXG4gICAgfSBjYXRjaCAoZSkge31cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlc29sdmVzIGEgbG9jYWwgZmlsZSBzeXN0ZW0gVVJMXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZmlsZVVybCB7c3RyaW5nfSBmaWxlIHN5c3RlbSB1cmxcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxFbnRyeT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChmaWxlVXJsOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHdpbmRvdy5yZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKFxyXG4gICAgICAgICAgZmlsZVVybCxcclxuICAgICAgICAgIChlbnRyeTogRW50cnkpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShlbnRyeSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgICAgfSBjYXRjaCAoeGMpIHtcclxuICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoeGMpO1xyXG4gICAgICAgIHJlamVjdCh4Yyk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzb2x2ZXMgYSBsb2NhbCBkaXJlY3RvcnkgdXJsXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0b3J5VXJsIHtzdHJpbmd9IGRpcmVjdG9yeSBzeXN0ZW0gdXJsXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlc29sdmVEaXJlY3RvcnlVcmwoZGlyZWN0b3J5VXJsOiBzdHJpbmcpOiBQcm9taXNlPERpcmVjdG9yeUVudHJ5PiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGRpcmVjdG9yeVVybCkudGhlbigoZGUpID0+IHtcclxuICAgICAgaWYgKGRlLmlzRGlyZWN0b3J5KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlIGFzIERpcmVjdG9yeUVudHJ5O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoMTMpO1xyXG4gICAgICAgIGVyci5tZXNzYWdlID0gJ2lucHV0IGlzIG5vdCBhIGRpcmVjdG9yeSc7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PERpcmVjdG9yeUVudHJ5PihlcnIpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGRpcmVjdG9yeVxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRpcmVjdG9yeUVudHJ5IHtEaXJlY3RvcnlFbnRyeX0gRGlyZWN0b3J5IGVudHJ5LCBvYnRhaW5lZCBieSByZXNvbHZlRGlyZWN0b3J5VXJsIG1ldGhvZFxyXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlOYW1lIHtzdHJpbmd9IERpcmVjdG9yeSBuYW1lXHJcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPERpcmVjdG9yeUVudHJ5Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBnZXREaXJlY3RvcnkoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBkaXJlY3RvcnlOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldERpcmVjdG9yeShcclxuICAgICAgICAgIGRpcmVjdG9yeU5hbWUsXHJcbiAgICAgICAgICBmbGFncyxcclxuICAgICAgICAgIChkZSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGRlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoICh4Yykge1xyXG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XHJcbiAgICAgICAgcmVqZWN0KHhjKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgYSBmaWxlXHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXHJcbiAgICogQHBhcmFtIGZpbGVOYW1lIHtzdHJpbmd9IEZpbGUgbmFtZVxyXG4gICAqIEBwYXJhbSBmbGFncyB7RmxhZ3N9IE9wdGlvbnNcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGdldEZpbGUoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5LCBmaWxlTmFtZTogc3RyaW5nLCBmbGFnczogRmxhZ3MpOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEZpbGVFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGRpcmVjdG9yeUVudHJ5LmdldEZpbGUoZmlsZU5hbWUsIGZsYWdzLCByZXNvbHZlLCAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGNhdGNoICh4Yykge1xyXG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XHJcbiAgICAgICAgcmVqZWN0KHhjKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlYWRGaWxlPFQ+KFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgZmlsZTogc3RyaW5nLFxyXG4gICAgcmVhZEFzOiAnQXJyYXlCdWZmZXInIHwgJ0JpbmFyeVN0cmluZycgfCAnRGF0YVVSTCcgfCAnVGV4dCdcclxuICApOiBQcm9taXNlPFQ+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZmlsZUVudHJ5OiBGaWxlRW50cnkpID0+IHtcclxuICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiBnZXRQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZWFkZXIucmVzdWx0ICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLnJlc3VsdCAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCBhcyBhbnkgYXMgVCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocmVhZGVyLmVycm9yICE9PSB1bmRlZmluZWQgfHwgcmVhZGVyLmVycm9yICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHJlYWRlci5lcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KHsgY29kZTogbnVsbCwgbWVzc2FnZTogJ1JFQURFUl9PTkxPQURFTkRfRVJSJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBmaWxlRW50cnkuZmlsZShcclxuICAgICAgICAgICAgKGZpbGUpID0+IHtcclxuICAgICAgICAgICAgICByZWFkZXJbYHJlYWRBcyR7cmVhZEFzfWBdLmNhbGwocmVhZGVyLCBmaWxlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gZmVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSByZW1vdmUoZmU6IEVudHJ5KTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxSZW1vdmVSZXN1bHQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZmUucmVtb3ZlKFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZmUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHNyY2VcclxuICAgKiBAcGFyYW0gZGVzdGRpclxyXG4gICAqIEBwYXJhbSBuZXdOYW1lXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgbW92ZShzcmNlOiBFbnRyeSwgZGVzdGRpcjogRGlyZWN0b3J5RW50cnksIG5ld05hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBzcmNlLm1vdmVUbyhcclxuICAgICAgICBkZXN0ZGlyLFxyXG4gICAgICAgIG5ld05hbWUsXHJcbiAgICAgICAgKGRlc3RlKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGRlc3RlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gc3JjZVxyXG4gICAqIEBwYXJhbSBkZXN0ZGlyXHJcbiAgICogQHBhcmFtIG5ld05hbWVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjb3B5KHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNyY2UuY29weVRvKFxyXG4gICAgICAgIGRlc3RkaXIsXHJcbiAgICAgICAgbmV3TmFtZSxcclxuICAgICAgICAoZGVzdGUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBkclxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJlYWRFbnRyaWVzKGRyOiBEaXJlY3RvcnlSZWFkZXIpOiBQcm9taXNlPEVudHJ5W10+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxFbnRyeVtdPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGRyLnJlYWRFbnRyaWVzKFxyXG4gICAgICAgIChlbnRyaWVzKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKGVudHJpZXMpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBkZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJpbXJhZihkZTogRGlyZWN0b3J5RW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBkZS5yZW1vdmVSZWN1cnNpdmVseShcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzczogdHJ1ZSwgZmlsZVJlbW92ZWQ6IGRlIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBmZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGNyZWF0ZVdyaXRlcihmZTogRmlsZUVudHJ5KTogUHJvbWlzZTxGaWxlV3JpdGVyPiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZVdyaXRlcj4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZS5jcmVhdGVXcml0ZXIoXHJcbiAgICAgICAgKHdyaXRlcikgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh3cml0ZXIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB3cml0ZXJcclxuICAgKiBAcGFyYW0gZ3VcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB3cml0ZSh3cml0ZXI6IEZpbGVXcml0ZXIsIGd1OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKGd1IGluc3RhbmNlb2YgQmxvYikge1xyXG4gICAgICByZXR1cm4gdGhpcy53cml0ZUZpbGVJbkNodW5rcyh3cml0ZXIsIGd1KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHdyaXRlci5vbndyaXRlZW5kID0gKGV2dCkgPT4ge1xyXG4gICAgICAgIGlmICh3cml0ZXIuZXJyb3IpIHtcclxuICAgICAgICAgIHJlamVjdCh3cml0ZXIuZXJyb3IpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXNvbHZlKGV2dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgICB3cml0ZXIud3JpdGUoZ3UpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gd3JpdGVyXHJcbiAgICogQHBhcmFtIGZpbGVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSB3cml0ZUZpbGVJbkNodW5rcyh3cml0ZXI6IEZpbGVXcml0ZXIsIGZpbGU6IEJsb2IpIHtcclxuICAgIGNvbnN0IEJMT0NLX1NJWkUgPSAxMDI0ICogMTAyNDtcclxuICAgIGxldCB3cml0dGVuU2l6ZSA9IDA7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiB3cml0ZU5leHRDaHVuaygpIHtcclxuICAgICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKEJMT0NLX1NJWkUsIGZpbGUuc2l6ZSAtIHdyaXR0ZW5TaXplKTtcclxuICAgICAgY29uc3QgY2h1bmsgPSBmaWxlLnNsaWNlKHdyaXR0ZW5TaXplLCB3cml0dGVuU2l6ZSArIHNpemUpO1xyXG5cclxuICAgICAgd3JpdHRlblNpemUgKz0gc2l6ZTtcclxuICAgICAgd3JpdGVyLndyaXRlKGNodW5rKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZ2V0UHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3JpdGVyLm9uZXJyb3IgPSByZWplY3QgYXMgKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gICAgICB3cml0ZXIub253cml0ZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAod3JpdHRlblNpemUgPCBmaWxlLnNpemUpIHtcclxuICAgICAgICAgIHdyaXRlTmV4dENodW5rKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHdyaXRlTmV4dENodW5rKCk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIl19