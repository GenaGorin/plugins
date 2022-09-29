import { __extends } from "tslib";
import { Injectable } from '@angular/core';
import { AwesomeCordovaNativePlugin, checkAvailability, cordovaPropertyGet, cordovaPropertySet, getPromise } from '@awesome-cordova-plugins/core';
var File = /** @class */ (function (_super) {
    __extends(File, _super);
    function File() {
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
    File.prototype.getFreeDiskSpace = function () {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return getPromise(function (resolve, reject) {
                    cordova.exec(resolve, reject, 'File', 'getFreeDiskSpace', []);
                });
            }
        })();
    };
    File.prototype.checkDir = function (path, dir) {
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
    File.prototype.createDir = function (path, dirName, replace) {
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
    File.prototype.removeDir = function (path, dirName) {
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
    File.prototype.moveDir = function (path, dirName, newPath, newDirName) {
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
    File.prototype.copyDir = function (path, dirName, newPath, newDirName) {
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
    File.prototype.listDir = function (path, dirName) {
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
    File.prototype.removeRecursively = function (path, dirName) {
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
    File.prototype.checkFile = function (path, file) {
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
    File.prototype.createFile = function (path, fileName, replace) {
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
    File.prototype.removeFile = function (path, fileName) {
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
    File.prototype.writeFile = function (path, fileName, text, options) {
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
    File.prototype.writeFileEntry = function (fe, text, options) {
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
    File.prototype.writeExistingFile = function (path, fileName, text) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.writeFile(path, fileName, text, { replace: true });
            }
        })();
    };
    File.prototype.readAsText = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'Text');
            }
        })();
    };
    File.prototype.readAsDataURL = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'DataURL');
            }
        })();
    };
    File.prototype.readAsBinaryString = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'BinaryString');
            }
        })();
    };
    File.prototype.readAsArrayBuffer = function (path, file) {
        var _this = this;
        return (function () {
            if (checkAvailability(_this) === true) {
                return _this.readFile(path, file, 'ArrayBuffer');
            }
        })();
    };
    File.prototype.moveFile = function (path, fileName, newPath, newFileName) {
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
    File.prototype.copyFile = function (path, fileName, newPath, newFileName) {
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
    File.prototype.fillErrorMessage = function (err) {
        try {
            err.message = this.cordovaFileError[err.code];
        }
        catch (e) { }
    };
    File.prototype.resolveLocalFilesystemUrl = function (fileUrl) {
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
    File.prototype.resolveDirectoryUrl = function (directoryUrl) {
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
    File.prototype.getDirectory = function (directoryEntry, directoryName, flags) {
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
    File.prototype.getFile = function (directoryEntry, fileName, flags) {
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
    File.prototype.readFile = function (path, file, readAs) {
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
    File.prototype.remove = function (fe) {
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
    File.prototype.move = function (srce, destdir, newName) {
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
    File.prototype.copy = function (srce, destdir, newName) {
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
    File.prototype.readEntries = function (dr) {
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
    File.prototype.rimraf = function (de) {
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
    File.prototype.createWriter = function (fe) {
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
    File.prototype.write = function (writer, gu) {
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
    File.prototype.writeFileInChunks = function (writer, file) {
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
    Object.defineProperty(File.prototype, "applicationDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "applicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "applicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "applicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "dataDirectory", {
        get: function () { return cordovaPropertyGet(this, "dataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "dataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "cacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "cacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "cacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalApplicationStorageDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalApplicationStorageDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalApplicationStorageDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalCacheDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalCacheDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalCacheDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "externalRootDirectory", {
        get: function () { return cordovaPropertyGet(this, "externalRootDirectory"); },
        set: function (value) { cordovaPropertySet(this, "externalRootDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "tempDirectory", {
        get: function () { return cordovaPropertyGet(this, "tempDirectory"); },
        set: function (value) { cordovaPropertySet(this, "tempDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "syncedDataDirectory", {
        get: function () { return cordovaPropertyGet(this, "syncedDataDirectory"); },
        set: function (value) { cordovaPropertySet(this, "syncedDataDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "documentsDirectory", {
        get: function () { return cordovaPropertyGet(this, "documentsDirectory"); },
        set: function (value) { cordovaPropertySet(this, "documentsDirectory", value); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(File.prototype, "sharedDirectory", {
        get: function () { return cordovaPropertyGet(this, "sharedDirectory"); },
        set: function (value) { cordovaPropertySet(this, "sharedDirectory", value); },
        enumerable: false,
        configurable: true
    });
    File.pluginName = "File";
    File.plugin = "cordova-plugin-file";
    File.pluginRef = "cordova.file";
    File.repo = "https://github.com/apache/cordova-plugin-file";
    File.platforms = ["Android", "Browser", "iOS", "macOS", "Windows"];
    File.decorators = [
        { type: Injectable }
    ];
    return File;
}(AwesomeCordovaNativePlugin));
export { File };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL3BsdWdpbnMvZmlsZS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyx5RkFLTCxVQUFVLEVBQ1gsTUFBTSwrQkFBK0IsQ0FBQzs7SUFzcEJiLHdCQUEwQjs7O1FBOERsRCxzQkFBZ0IsR0FBUTtZQUN0QixDQUFDLEVBQUUsZUFBZTtZQUNsQixDQUFDLEVBQUUsY0FBYztZQUNqQixDQUFDLEVBQUUsV0FBVztZQUNkLENBQUMsRUFBRSxrQkFBa0I7WUFDckIsQ0FBQyxFQUFFLGNBQWM7WUFDakIsQ0FBQyxFQUFFLDZCQUE2QjtZQUNoQyxDQUFDLEVBQUUsbUJBQW1CO1lBQ3RCLENBQUMsRUFBRSxZQUFZO1lBQ2YsQ0FBQyxFQUFFLDBCQUEwQjtZQUM3QixFQUFFLEVBQUUsb0JBQW9CO1lBQ3hCLEVBQUUsRUFBRSxtQkFBbUI7WUFDdkIsRUFBRSxFQUFFLGlCQUFpQjtZQUNyQixFQUFFLEVBQUUsa0JBQWtCO1lBQ3RCLEVBQUUsRUFBRSxjQUFjO1NBQ25CLENBQUM7OztJQVFGLCtCQUFnQjs7O21EQUFvQjtnQkFDbEMsT0FBTyxVQUFVLENBQU0sVUFBQyxPQUFPLEVBQUUsTUFBTTtvQkFDckMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUE2QixFQUFFLE1BQTRCLEVBQUUsTUFBTSxFQUFFLGtCQUFrQixFQUFFLEVBQUUsQ0FBQyxDQUFDO2dCQUM1RyxDQUFDLENBQUMsQ0FBQzthQUNKOzs7SUFXRCx1QkFBUSxhQUFDLElBQVksRUFBRSxHQUFXOzs7bURBQW9CO2dCQUNwRCxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQU0sR0FBRyxHQUFHLElBQUksU0FBUyxDQUFDLENB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bkIsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzBCQWgyQmtCLHNDQUFvQjs7Ozs7OzBCQUtwQiw2Q0FBMkI7Ozs7OzswQkFLM0IsK0JBQWE7Ozs7OzswQkFNYixnQ0FBYzs7Ozs7OzBCQUtkLHFEQUFtQzs7Ozs7OzBCQUtuQyx1Q0FBcUI7Ozs7OzswQkFLckIsd0NBQXNCOzs7Ozs7MEJBS3RCLHVDQUFxQjs7Ozs7OzBCQUtyQiwrQkFBYTs7Ozs7OzBCQUtiLHFDQUFtQjs7Ozs7OzBCQUtuQixvQ0FBa0I7Ozs7OzswQkFLbEIsaUNBQWU7Ozs7Ozs7Ozs7OztnQkE3RG5DLFVBQVU7O2VBNXBCWDtFQTZwQjBCLDBCQUEwQjtTQUF2QyxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1xyXG4gIENvcmRvdmFDaGVjayxcclxuICBDb3Jkb3ZhUHJvcGVydHksXHJcbiAgQXdlc29tZUNvcmRvdmFOYXRpdmVQbHVnaW4sXHJcbiAgUGx1Z2luLFxyXG4gIGdldFByb21pc2UsXHJcbn0gZnJvbSAnQGF3ZXNvbWUtY29yZG92YS1wbHVnaW5zL2NvcmUnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRmlsZSBleHRlbmRzIEJsb2Ige1xyXG4gIC8qKlxyXG4gICAqIE5hbWUgb2YgdGhlIGZpbGUsIHdpdGhvdXQgcGF0aCBpbmZvcm1hdGlvblxyXG4gICAqL1xyXG4gIG5hbWU6IHN0cmluZztcclxuICAvKipcclxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcclxuICAgKi9cclxuICBsYXN0TW9kaWZpZWQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBMYXN0IG1vZGlmaWVkIGRhdGVcclxuICAgKi9cclxuICBsYXN0TW9kaWZpZWREYXRlOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogU2l6ZSBpbiBieXRlc1xyXG4gICAqL1xyXG4gIHNpemU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBGaWxlIG1pbWUgdHlwZVxyXG4gICAqL1xyXG4gIHR5cGU6IHN0cmluZztcclxuICBsb2NhbFVSTDogc3RyaW5nO1xyXG4gIHN0YXJ0OiBudW1iZXI7XHJcbiAgZW5kOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBcInNsaWNlXCIgb2YgdGhlIGZpbGUuIFNpbmNlIENvcmRvdmEgRmlsZXMgZG9uJ3QgY29udGFpbiB0aGUgYWN0dWFsXHJcbiAgICogY29udGVudCwgdGhpcyByZWFsbHkgcmV0dXJucyBhIEZpbGUgd2l0aCBhZGp1c3RlZCBzdGFydCBhbmQgZW5kLlxyXG4gICAqIFNsaWNlcyBvZiBzbGljZXMgYXJlIHN1cHBvcnRlZC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdGFydCB7TnVtYmVyfSBUaGUgaW5kZXggYXQgd2hpY2ggdG8gc3RhcnQgdGhlIHNsaWNlIChpbmNsdXNpdmUpLlxyXG4gICAqIEBwYXJhbSBlbmQge051bWJlcn0gVGhlIGluZGV4IGF0IHdoaWNoIHRvIGVuZCB0aGUgc2xpY2UgKGV4Y2x1c2l2ZSkuXHJcbiAgICovXHJcbiAgc2xpY2Uoc3RhcnQ6IG51bWJlciwgZW5kOiBudW1iZXIpOiBCbG9iO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIExvY2FsRmlsZVN5c3RlbSB7XHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB3aXRoIG5vIGd1YXJhbnRlZSBvZiBwZXJzaXN0ZW5jZS5cclxuICAgKi9cclxuICBURU1QT1JBUlk6IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVXNlZCBmb3Igc3RvcmFnZSB0aGF0IHNob3VsZCBub3QgYmUgcmVtb3ZlZCBieSB0aGUgdXNlciBhZ2VudCB3aXRob3V0IGFwcGxpY2F0aW9uIG9yIHVzZXIgcGVybWlzc2lvbi5cclxuICAgKi9cclxuICBQRVJTSVNURU5UOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlcXVlc3RzIGEgZmlsZXN5c3RlbSBpbiB3aGljaCB0byBzdG9yZSBhcHBsaWNhdGlvbiBkYXRhLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHR5cGUgV2hldGhlciB0aGUgZmlsZXN5c3RlbSByZXF1ZXN0ZWQgc2hvdWxkIGJlIHBlcnNpc3RlbnQsIGFzIGRlZmluZWQgYWJvdmUuIFVzZSBvbmUgb2YgVEVNUE9SQVJZIG9yXHJcbiAgICogICBQRVJTSVNURU5ULlxyXG4gICAqIEBwYXJhbSBzaXplIFRoaXMgaXMgYW4gaW5kaWNhdG9yIG9mIGhvdyBtdWNoIHN0b3JhZ2Ugc3BhY2UsIGluIGJ5dGVzLCB0aGUgYXBwbGljYXRpb24gZXhwZWN0cyB0byBuZWVkLlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHVzZXIgYWdlbnQgcHJvdmlkZXMgYSBmaWxlc3lzdGVtLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgZmlsZXN5c3RlbSBpc1xyXG4gICAqICAgZGVuaWVkLlxyXG4gICAqL1xyXG4gIHJlcXVlc3RGaWxlU3lzdGVtKFxyXG4gICAgdHlwZTogbnVtYmVyLFxyXG4gICAgc2l6ZTogbnVtYmVyLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrOiBGaWxlU3lzdGVtQ2FsbGJhY2ssXHJcbiAgICBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFja1xyXG4gICk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEFsbG93cyB0aGUgdXNlciB0byBsb29rIHVwIHRoZSBFbnRyeSBmb3IgYSBmaWxlIG9yIGRpcmVjdG9yeSByZWZlcnJlZCB0byBieSBhIGxvY2FsIFVSTC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB1cmwgQSBVUkwgcmVmZXJyaW5nIHRvIGEgbG9jYWwgZmlsZSBpbiBhIGZpbGVzeXN0ZW0gYWNjZXNzYWJsZSB2aWEgdGhpcyBBUEkuXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJlcG9ydCB0aGUgRmlsZUVudHJ5IHRvIHdoaWNoIHRoZSBzdXBwbGllZCBVUkwgcmVmZXJzLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLCBvciB3aGVuIHRoZSByZXF1ZXN0IHRvIG9idGFpbiB0aGUgRW50cnkgaXNcclxuICAgKiAgIGRlbmllZC5cclxuICAgKi9cclxuICByZXNvbHZlTG9jYWxGaWxlU3lzdGVtVVJMKHVybDogc3RyaW5nLCBzdWNjZXNzQ2FsbGJhY2s6IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlZSByZXF1ZXN0RmlsZVN5c3RlbS5cclxuICAgKi9cclxuICB3ZWJraXRSZXF1ZXN0RmlsZVN5c3RlbShcclxuICAgIHR5cGU6IG51bWJlcixcclxuICAgIHNpemU6IG51bWJlcixcclxuICAgIHN1Y2Nlc3NDYWxsYmFjazogRmlsZVN5c3RlbUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE1ldGFkYXRhIHtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSB0aW1lIGF0IHdoaWNoIHRoZSBmaWxlIG9yIGRpcmVjdG9yeSB3YXMgbGFzdCBtb2RpZmllZC5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIG1vZGlmaWNhdGlvblRpbWU6IERhdGU7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSBzaXplIG9mIHRoZSBmaWxlLCBpbiBieXRlcy4gVGhpcyBtdXN0IHJldHVybiAwIGZvciBkaXJlY3Rvcmllcy5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIHNpemU6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBGbGFncyB7XHJcbiAgLyoqXHJcbiAgICogVXNlZCB0byBpbmRpY2F0ZSB0aGF0IHRoZSB1c2VyIHdhbnRzIHRvIGNyZWF0ZSBhIGZpbGUgb3IgZGlyZWN0b3J5IGlmIGl0IHdhcyBub3QgcHJldmlvdXNseSB0aGVyZS5cclxuICAgKi9cclxuICBjcmVhdGU/OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBCeSBpdHNlbGYsIGV4Y2x1c2l2ZSBtdXN0IGhhdmUgbm8gZWZmZWN0LiBVc2VkIHdpdGggY3JlYXRlLCBpdCBtdXN0IGNhdXNlIGdldEZpbGUgYW5kIGdldERpcmVjdG9yeSB0byBmYWlsIGlmIHRoZVxyXG4gICAqIHRhcmdldCBwYXRoIGFscmVhZHkgZXhpc3RzLlxyXG4gICAqL1xyXG4gIGV4Y2x1c2l2ZT86IGJvb2xlYW47XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgcmVwcmVzZW50cyBhIGZpbGUgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlU3lzdGVtIHtcclxuICAvKipcclxuICAgKiBUaGlzIGlzIHRoZSBuYW1lIG9mIHRoZSBmaWxlIHN5c3RlbS4gVGhlIHNwZWNpZmljcyBvZiBuYW1pbmcgZmlsZXN5c3RlbXMgaXMgdW5zcGVjaWZpZWQsIGJ1dCBhIG5hbWUgbXVzdCBiZSB1bmlxdWVcclxuICAgKiBhY3Jvc3MgdGhlIGxpc3Qgb2YgZXhwb3NlZCBmaWxlIHN5c3RlbXMuXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFRoZSByb290IGRpcmVjdG9yeSBvZiB0aGUgZmlsZSBzeXN0ZW0uXHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICByb290OiBEaXJlY3RvcnlFbnRyeTtcclxuXHJcbiAgdG9KU09OKCk6IHN0cmluZztcclxuXHJcbiAgZW5jb2RlVVJJUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRW50cnkge1xyXG4gIC8qKlxyXG4gICAqIEVudHJ5IGlzIGEgZmlsZS5cclxuICAgKi9cclxuICBpc0ZpbGU6IGJvb2xlYW47XHJcblxyXG4gIC8qKlxyXG4gICAqIEVudHJ5IGlzIGEgZGlyZWN0b3J5LlxyXG4gICAqL1xyXG4gIGlzRGlyZWN0b3J5OiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBMb29rIHVwIG1ldGFkYXRhIGFib3V0IHRoaXMgZW50cnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgdGltZSBvZiB0aGUgbGFzdCBtb2RpZmljYXRpb24uXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgRXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBnZXRNZXRhZGF0YShzdWNjZXNzQ2FsbGJhY2s6IE1ldGFkYXRhQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2V0IHRoZSBtZXRhZGF0YSBvZiB0aGUgZW50cnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIHtGdW5jdGlvbn0gaXMgY2FsbGVkIHdpdGggYSBNZXRhZGF0YSBvYmplY3RcclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayB7RnVuY3Rpb259IGlzIGNhbGxlZCB3aXRoIGEgRmlsZUVycm9yXHJcbiAgICogQHBhcmFtIG1ldGFkYXRhT2JqZWN0IHtNZXRhZGF0YX0ga2V5cyBhbmQgdmFsdWVzIHRvIHNldFxyXG4gICAqL1xyXG4gIHNldE1ldGFkYXRhKHN1Y2Nlc3NDYWxsYmFjazogTWV0YWRhdGFDYWxsYmFjaywgZXJyb3JDYWxsYmFjazogRXJyb3JDYWxsYmFjaywgbWV0YWRhdGFPYmplY3Q6IE1ldGFkYXRhKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIG5hbWUgb2YgdGhlIGVudHJ5LCBleGNsdWRpbmcgdGhlIHBhdGggbGVhZGluZyB0byBpdC5cclxuICAgKi9cclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgLyoqXHJcbiAgICogVGhlIGZ1bGwgYWJzb2x1dGUgcGF0aCBmcm9tIHRoZSByb290IHRvIHRoZSBlbnRyeS5cclxuICAgKi9cclxuICBmdWxsUGF0aDogc3RyaW5nO1xyXG4gIC8qKlxyXG4gICAqIFRoZSBmaWxlIHN5c3RlbSBvbiB3aGljaCB0aGUgZW50cnkgcmVzaWRlcy5cclxuICAgKi9cclxuICBmaWxlc3lzdGVtOiBGaWxlU3lzdGVtO1xyXG4gIC8qKlxyXG4gICAqIGFuIGFsdGVybmF0ZSBVUkwgd2hpY2ggY2FuIGJlIHVzZWQgYnkgbmF0aXZlIHdlYnZpZXcgY29udHJvbHMsIGZvciBleGFtcGxlIG1lZGlhIHBsYXllcnMuXHJcbiAgICovXHJcbiAgbmF0aXZlVVJMOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE1vdmUgYW4gZW50cnkgdG8gYSBkaWZmZXJlbnQgbG9jYXRpb24gb24gdGhlIGZpbGUgc3lzdGVtLiBJdCBpcyBhbiBlcnJvciB0byB0cnkgdG86XHJcbiAgICpcclxuICAgKiA8dWk+XHJcbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgaW5zaWRlIGl0c2VsZiBvciB0byBhbnkgY2hpbGQgYXQgYW55IGRlcHRoOzwvbGk+XHJcbiAgICogPGxpPm1vdmUgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cclxuICAgKiA8bGk+bW92ZSBhIGZpbGUgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZGlyZWN0b3J5OzwvbGk+XHJcbiAgICogPGxpPm1vdmUgYSBkaXJlY3RvcnkgdG8gYSBwYXRoIG9jY3VwaWVkIGJ5IGEgZmlsZTs8L2xpPlxyXG4gICAqIDxsaT5tb3ZlIGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cclxuICAgKiA8dWw+XHJcbiAgICpcclxuICAgKiBBIG1vdmUgb2YgYSBmaWxlIG9uIHRvcCBvZiBhbiBleGlzdGluZyBmaWxlIG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBmaWxlLlxyXG4gICAqIEEgbW92ZSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdCBkaXJlY3RvcnkuXHJcbiAgICovXHJcbiAgbW92ZVRvKFxyXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcclxuICAgIG5ld05hbWU/OiBzdHJpbmcsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBDb3B5IGFuIGVudHJ5IHRvIGEgZGlmZmVyZW50IGxvY2F0aW9uIG9uIHRoZSBmaWxlIHN5c3RlbS4gSXQgaXMgYW4gZXJyb3IgdG8gdHJ5IHRvOlxyXG4gICAqXHJcbiAgICogPHVsPlxyXG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSBpbnNpZGUgaXRzZWxmIG9yIHRvIGFueSBjaGlsZCBhdCBhbnkgZGVwdGg7PC9saT5cclxuICAgKiA8bGk+IGNvcHkgYW4gZW50cnkgaW50byBpdHMgcGFyZW50IGlmIGEgbmFtZSBkaWZmZXJlbnQgZnJvbSBpdHMgY3VycmVudCBvbmUgaXNuJ3QgcHJvdmlkZWQ7PC9saT5cclxuICAgKiA8bGk+IGNvcHkgYSBmaWxlIHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeTs8L2xpPlxyXG4gICAqIDxsaT4gY29weSBhIGRpcmVjdG9yeSB0byBhIHBhdGggb2NjdXBpZWQgYnkgYSBmaWxlOzwvbGk+XHJcbiAgICogPGxpPiBjb3B5IGFueSBlbGVtZW50IHRvIGEgcGF0aCBvY2N1cGllZCBieSBhIGRpcmVjdG9yeSB3aGljaCBpcyBub3QgZW1wdHkuPC9saT5cclxuICAgKiA8bGk+IEEgY29weSBvZiBhIGZpbGUgb24gdG9wIG9mIGFuIGV4aXN0aW5nIGZpbGUgbXVzdCBhdHRlbXB0IHRvIGRlbGV0ZSBhbmQgcmVwbGFjZSB0aGF0IGZpbGUuPC9saT5cclxuICAgKiA8bGk+IEEgY29weSBvZiBhIGRpcmVjdG9yeSBvbiB0b3Agb2YgYW4gZXhpc3RpbmcgZW1wdHkgZGlyZWN0b3J5IG11c3QgYXR0ZW1wdCB0byBkZWxldGUgYW5kIHJlcGxhY2UgdGhhdFxyXG4gICAqIGRpcmVjdG9yeS48L2xpPlxyXG4gICAqIDwvdWw+XHJcbiAgICpcclxuICAgKiBEaXJlY3RvcnkgY29waWVzIGFyZSBhbHdheXMgcmVjdXJzaXZlLS10aGF0IGlzLCB0aGV5IGNvcHkgYWxsIGNvbnRlbnRzIG9mIHRoZSBkaXJlY3RvcnkuXHJcbiAgICovXHJcbiAgY29weVRvKFxyXG4gICAgcGFyZW50OiBEaXJlY3RvcnlFbnRyeSxcclxuICAgIG5ld05hbWU/OiBzdHJpbmcsXHJcbiAgICBzdWNjZXNzQ2FsbGJhY2s/OiBFbnRyeUNhbGxiYWNrLFxyXG4gICAgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2tcclxuICApOiB2b2lkO1xyXG5cclxuICAvKipcclxuICAgKiBSZXR1cm5zIGEgVVJMIHRoYXQgY2FuIGJlIHVzZWQgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS4gVW5saWtlIHRoZSBVUk4gZGVmaW5lZCBpbiBbRklMRS1BUEktRURdLCBpdCBoYXMgbm8gc3BlY2lmaWNcclxuICAgKiBleHBpcmF0aW9uOyBhcyBpdCBkZXNjcmliZXMgYSBsb2NhdGlvbiBvbiBkaXNrLCBpdCBzaG91bGQgYmUgdmFsaWQgYXQgbGVhc3QgYXMgbG9uZyBhcyB0aGF0IGxvY2F0aW9uIGV4aXN0cy5cclxuICAgKi9cclxuICB0b1VSTCgpOiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybiBhIFVSTCB0aGF0IGNhbiBiZSBwYXNzZWQgYWNyb3NzIHRoZSBicmlkZ2UgdG8gaWRlbnRpZnkgdGhpcyBlbnRyeS5cclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHN0cmluZyBVUkwgdGhhdCBjYW4gYmUgcGFzc2VkIGFjcm9zcyB0aGUgYnJpZGdlIHRvIGlkZW50aWZ5IHRoaXMgZW50cnlcclxuICAgKi9cclxuICB0b0ludGVybmFsVVJMKCk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGZpbGUgb3IgZGlyZWN0b3J5LiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGRlbGV0ZSBhIGRpcmVjdG9yeSB0aGF0IGlzIG5vdCBlbXB0eS4gSXQgaXMgYW4gZXJyb3IgdG9cclxuICAgKiBhdHRlbXB0IHRvIGRlbGV0ZSB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgYSBmaWxlc3lzdGVtLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIG9uIHN1Y2Nlc3MuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgcmVtb3ZlKHN1Y2Nlc3NDYWxsYmFjazogVm9pZENhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIExvb2sgdXAgdGhlIHBhcmVudCBEaXJlY3RvcnlFbnRyeSBjb250YWluaW5nIHRoaXMgRW50cnkuIElmIHRoaXMgRW50cnkgaXMgdGhlIHJvb3Qgb2YgaXRzIGZpbGVzeXN0ZW0sIGl0cyBwYXJlbnRcclxuICAgKiBpcyBpdHNlbGYuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgdG8gcmV0dXJuIHRoZSBwYXJlbnQgRW50cnkuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZ2V0UGFyZW50KHN1Y2Nlc3NDYWxsYmFjazogRGlyZWN0b3J5RW50cnlDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIHJlcHJlc2VudHMgYSBkaXJlY3Rvcnkgb24gYSBmaWxlIHN5c3RlbS5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5RW50cnkgZXh0ZW5kcyBFbnRyeSB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBEaXJlY3RvcnlSZWFkZXIgdG8gcmVhZCBFbnRyaWVzIGZyb20gdGhpcyBEaXJlY3RvcnkuXHJcbiAgICovXHJcbiAgY3JlYXRlUmVhZGVyKCk6IERpcmVjdG9yeVJlYWRlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBvciBsb29rcyB1cCBhIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBmaWxlIHRvIGJlIGxvb2tlZCB1cCBvclxyXG4gICAqICAgY3JlYXRlZC4gSXQgaXMgYW4gZXJyb3IgdG8gYXR0ZW1wdCB0byBjcmVhdGUgYSBmaWxlIHdob3NlIGltbWVkaWF0ZSBwYXJlbnQgZG9lcyBub3QgeWV0IGV4aXN0LlxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogICAgIDx1bD5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBhbmQgZXhjbHVzaXZlIGFyZSBib3RoIHRydWUsIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RmlsZSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyB0cnVlLCB0aGUgcGF0aCBkb2Vzbid0IGV4aXN0LCBhbmQgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXRGaWxlIG11c3QgY3JlYXRlIGl0IGFzIGFcclxuICAgKiAgIHplcm8tbGVuZ3RoIGZpbGUgYW5kIHJldHVybiBhIGNvcnJlc3BvbmRpbmcgRmlsZUVudHJ5LjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGdldEZpbGUgbXVzdCBmYWlsLjwvbGk+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgaXMgbm90IHRydWUgYW5kIHRoZSBwYXRoIGV4aXN0cywgYnV0IGlzIGEgZGlyZWN0b3J5LCBnZXRGaWxlIG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+T3RoZXJ3aXNlLCBpZiBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldEZpbGUgbXVzdCByZXR1cm4gYSBGaWxlRW50cnkgY29ycmVzcG9uZGluZyB0byBwYXRoLjwvbGk+XHJcbiAgICogICAgIDwvdWw+XHJcbiAgICogQHBhcmFtIHN1Y2Nlc3NDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHRvIHJldHVybiB0aGUgRmlsZSBzZWxlY3RlZCBvciBjcmVhdGVkLlxyXG4gICAqIEBwYXJhbSBlcnJvckNhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2hlbiBlcnJvcnMgaGFwcGVuLlxyXG4gICAqL1xyXG4gIGdldEZpbGUocGF0aDogc3RyaW5nLCBvcHRpb25zPzogRmxhZ3MsIHN1Y2Nlc3NDYWxsYmFjaz86IEZpbGVFbnRyeUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZXMgb3IgbG9va3MgdXAgYSBkaXJlY3RvcnkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gcGF0aCBFaXRoZXIgYW4gYWJzb2x1dGUgcGF0aCBvciBhIHJlbGF0aXZlIHBhdGggZnJvbSB0aGlzIERpcmVjdG9yeUVudHJ5IHRvIHRoZSBkaXJlY3RvcnkgdG8gYmUgbG9va2VkIHVwXHJcbiAgICogICBvciBjcmVhdGVkLiBJdCBpcyBhbiBlcnJvciB0byBhdHRlbXB0IHRvIGNyZWF0ZSBhIGRpcmVjdG9yeSB3aG9zZSBpbW1lZGlhdGUgcGFyZW50IGRvZXMgbm90IHlldCBleGlzdC5cclxuICAgKiBAcGFyYW0gb3B0aW9uc1xyXG4gICAqICAgICA8dWw+XHJcbiAgICogICAgIDxsaT5JZiBjcmVhdGUgYW5kIGV4Y2x1c2l2ZSBhcmUgYm90aCB0cnVlIGFuZCB0aGUgcGF0aCBhbHJlYWR5IGV4aXN0cywgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIHRydWUsIHRoZSBwYXRoIGRvZXNuJ3QgZXhpc3QsIGFuZCBubyBvdGhlciBlcnJvciBvY2N1cnMsIGdldERpcmVjdG9yeSBtdXN0IGNyZWF0ZSBhbmQgcmV0dXJuXHJcbiAgICogICBhIGNvcnJlc3BvbmRpbmcgRGlyZWN0b3J5RW50cnkuPC9saT5cclxuICAgKiAgICAgPGxpPklmIGNyZWF0ZSBpcyBub3QgdHJ1ZSBhbmQgdGhlIHBhdGggZG9lc24ndCBleGlzdCwgZ2V0RGlyZWN0b3J5IG11c3QgZmFpbC48L2xpPlxyXG4gICAqICAgICA8bGk+SWYgY3JlYXRlIGlzIG5vdCB0cnVlIGFuZCB0aGUgcGF0aCBleGlzdHMsIGJ1dCBpcyBhIGZpbGUsIGdldERpcmVjdG9yeSBtdXN0IGZhaWwuPC9saT5cclxuICAgKiAgICAgPGxpPk90aGVyd2lzZSwgaWYgbm8gb3RoZXIgZXJyb3Igb2NjdXJzLCBnZXREaXJlY3RvcnkgbXVzdCByZXR1cm4gYSBEaXJlY3RvcnlFbnRyeSBjb3JyZXNwb25kaW5nIHRvIHBhdGguPC9saT5cclxuICAgKiAgICAgPC91bD5cclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrICAgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB0byByZXR1cm4gdGhlIERpcmVjdG9yeUVudHJ5IHNlbGVjdGVkIG9yIGNyZWF0ZWQuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgZ2V0RGlyZWN0b3J5KFxyXG4gICAgcGF0aDogc3RyaW5nLFxyXG4gICAgb3B0aW9ucz86IEZsYWdzLFxyXG4gICAgc3VjY2Vzc0NhbGxiYWNrPzogRGlyZWN0b3J5RW50cnlDYWxsYmFjayxcclxuICAgIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrXHJcbiAgKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogRGVsZXRlcyBhIGRpcmVjdG9yeSBhbmQgYWxsIG9mIGl0cyBjb250ZW50cywgaWYgYW55LiBJbiB0aGUgZXZlbnQgb2YgYW4gZXJyb3IgW2UuZy4gdHJ5aW5nIHRvIGRlbGV0ZSBhIGRpcmVjdG9yeVxyXG4gICAqIHRoYXQgY29udGFpbnMgYSBmaWxlIHRoYXQgY2Fubm90IGJlIHJlbW92ZWRdLCBzb21lIG9mIHRoZSBjb250ZW50cyBvZiB0aGUgZGlyZWN0b3J5IG1heSBiZSBkZWxldGVkLiBJdCBpcyBhbiBlcnJvclxyXG4gICAqIHRvIGF0dGVtcHQgdG8gZGVsZXRlIHRoZSByb290IGRpcmVjdG9yeSBvZiBhIGZpbGVzeXN0ZW0uXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgb24gc3VjY2Vzcy5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICByZW1vdmVSZWN1cnNpdmVseShzdWNjZXNzQ2FsbGJhY2s6IFZvaWRDYWxsYmFjaywgZXJyb3JDYWxsYmFjaz86IEVycm9yQ2FsbGJhY2spOiB2b2lkO1xyXG59XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGxldHMgYSB1c2VyIGxpc3QgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGluIGEgZGlyZWN0b3J5LiBJZiB0aGVyZSBhcmUgbm8gYWRkaXRpb25zIHRvIG9yXHJcbiAqIGRlbGV0aW9ucyBmcm9tIGEgZGlyZWN0b3J5IGJldHdlZW4gdGhlIGZpcnN0IGFuZCBsYXN0IGNhbGwgdG8gcmVhZEVudHJpZXMsIGFuZCBubyBlcnJvcnMgb2NjdXIsIHRoZW46XHJcbiAqIDx1bD5cclxuICogPGxpPiBBIHNlcmllcyBvZiBjYWxscyB0byByZWFkRW50cmllcyBtdXN0IHJldHVybiBlYWNoIGVudHJ5IGluIHRoZSBkaXJlY3RvcnkgZXhhY3RseSBvbmNlLjwvbGk+XHJcbiAqIDxsaT4gT25jZSBhbGwgZW50cmllcyBoYXZlIGJlZW4gcmV0dXJuZWQsIHRoZSBuZXh0IGNhbGwgdG8gcmVhZEVudHJpZXMgbXVzdCBwcm9kdWNlIGFuIGVtcHR5IGFycmF5LjwvbGk+XHJcbiAqIDxsaT4gSWYgbm90IGFsbCBlbnRyaWVzIGhhdmUgYmVlbiByZXR1cm5lZCwgdGhlIGFycmF5IHByb2R1Y2VkIGJ5IHJlYWRFbnRyaWVzIG11c3Qgbm90IGJlIGVtcHR5LjwvbGk+XHJcbiAqIDxsaT4gVGhlIGVudHJpZXMgcHJvZHVjZWQgYnkgcmVhZEVudHJpZXMgbXVzdCBub3QgaW5jbHVkZSB0aGUgZGlyZWN0b3J5IGl0c2VsZiBbXCIuXCJdIG9yIGl0cyBwYXJlbnQgW1wiLi5cIl0uPC9saT5cclxuICogPC91bD5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGlyZWN0b3J5UmVhZGVyIHtcclxuICBsb2NhbFVSTDogc3RyaW5nO1xyXG4gIGhhc1JlYWRFbnRyaWVzOiBib29sZWFuO1xyXG5cclxuICAvKipcclxuICAgKiBSZWFkIHRoZSBuZXh0IGJsb2NrIG9mIGVudHJpZXMgZnJvbSB0aGlzIGRpcmVjdG9yeS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSBzdWNjZXNzQ2FsbGJhY2sgQ2FsbGVkIG9uY2UgcGVyIHN1Y2Nlc3NmdWwgY2FsbCB0byByZWFkRW50cmllcyB0byBkZWxpdmVyIHRoZSBuZXh0IHByZXZpb3VzbHktdW5yZXBvcnRlZFxyXG4gICAqICAgc2V0IG9mIEVudHJpZXMgaW4gdGhlIGFzc29jaWF0ZWQgRGlyZWN0b3J5LiBJZiBhbGwgRW50cmllcyBoYXZlIGFscmVhZHkgYmVlbiByZXR1cm5lZCBmcm9tIHByZXZpb3VzIGludm9jYXRpb25zXHJcbiAgICogICBvZiByZWFkRW50cmllcywgc3VjY2Vzc0NhbGxiYWNrIG11c3QgYmUgY2FsbGVkIHdpdGggYSB6ZXJvLWxlbmd0aCBhcnJheSBhcyBhbiBhcmd1bWVudC5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIGluZGljYXRpbmcgdGhhdCB0aGVyZSB3YXMgYW4gZXJyb3IgcmVhZGluZyBmcm9tIHRoZSBEaXJlY3RvcnkuXHJcbiAgICovXHJcbiAgcmVhZEVudHJpZXMoc3VjY2Vzc0NhbGxiYWNrOiBFbnRyaWVzQ2FsbGJhY2ssIGVycm9yQ2FsbGJhY2s/OiBFcnJvckNhbGxiYWNrKTogdm9pZDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSByZXByZXNlbnRzIGEgZmlsZSBvbiBhIGZpbGUgc3lzdGVtLlxyXG4gKi9cclxuZXhwb3J0IGludGVyZmFjZSBGaWxlRW50cnkgZXh0ZW5kcyBFbnRyeSB7XHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlV3JpdGVyIGFzc29jaWF0ZWQgd2l0aCB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgbmV3IEZpbGVXcml0ZXIuXHJcbiAgICogQHBhcmFtIGVycm9yQ2FsbGJhY2sgQSBjYWxsYmFjayB0aGF0IGlzIGNhbGxlZCB3aGVuIGVycm9ycyBoYXBwZW4uXHJcbiAgICovXHJcbiAgY3JlYXRlV3JpdGVyKHN1Y2Nlc3NDYWxsYmFjazogRmlsZVdyaXRlckNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIFJldHVybnMgYSBGaWxlIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgZmlsZSB0aGF0IHRoaXMgRmlsZUVudHJ5IHJlcHJlc2VudHMuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc3VjY2Vzc0NhbGxiYWNrIEEgY2FsbGJhY2sgdGhhdCBpcyBjYWxsZWQgd2l0aCB0aGUgRmlsZS5cclxuICAgKiBAcGFyYW0gZXJyb3JDYWxsYmFjayBBIGNhbGxiYWNrIHRoYXQgaXMgY2FsbGVkIHdoZW4gZXJyb3JzIGhhcHBlbi5cclxuICAgKi9cclxuICBmaWxlKHN1Y2Nlc3NDYWxsYmFjazogRmlsZUNhbGxiYWNrLCBlcnJvckNhbGxiYWNrPzogRXJyb3JDYWxsYmFjayk6IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBXaGVuIHJlcXVlc3RGaWxlU3lzdGVtKCkgc3VjY2VlZHMsIHRoZSBmb2xsb3dpbmcgY2FsbGJhY2sgaXMgbWFkZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZpbGVTeXN0ZW1DYWxsYmFjayA9IChmaWxlc3lzdGVtOiBGaWxlU3lzdGVtKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgZXhwb3J0IGludGVyZmFjZSBpcyB0aGUgY2FsbGJhY2sgdXNlZCB0byBsb29rIHVwIEVudHJ5IG9iamVjdHMuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBFbnRyeSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gbG9vayB1cCBGaWxlRW50cnkgb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZpbGVFbnRyeUNhbGxiYWNrID0gKGVudHJ5OiBGaWxlRW50cnkpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgRGlyZWN0b3J5RW50cnkgb2JqZWN0cy5cclxuICovXHJcbmV4cG9ydCB0eXBlIERpcmVjdG9yeUVudHJ5Q2FsbGJhY2sgPSAoZW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gcmVhZEVudHJpZXMoKSBzdWNjZWVkcywgdGhlIGZvbGxvd2luZyBjYWxsYmFjayBpcyBtYWRlLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgRW50cmllc0NhbGxiYWNrID0gKGVudHJpZXM6IEVudHJ5W10pID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGxvb2sgdXAgZmlsZSBhbmQgZGlyZWN0b3J5IG1ldGFkYXRhLlxyXG4gKi9cclxuZXhwb3J0IHR5cGUgTWV0YWRhdGFDYWxsYmFjayA9IChtZXRhZGF0YTogTWV0YWRhdGEpID0+IHZvaWQ7XHJcblxyXG4vKipcclxuICogVGhpcyBleHBvcnQgaW50ZXJmYWNlIGlzIHRoZSBjYWxsYmFjayB1c2VkIHRvIGNyZWF0ZSBhIEZpbGVXcml0ZXIuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBGaWxlV3JpdGVyQ2FsbGJhY2sgPSAoZmlsZVdyaXRlcjogRmlsZVdyaXRlcikgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGNhbGxiYWNrIHVzZWQgdG8gb2J0YWluIGEgRmlsZS5cclxuICovXHJcbmV4cG9ydCB0eXBlIEZpbGVDYWxsYmFjayA9IChmaWxlOiBJRmlsZSkgPT4gdm9pZDtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGV4cG9ydCBpbnRlcmZhY2UgaXMgdGhlIGdlbmVyaWMgY2FsbGJhY2sgdXNlZCB0byBpbmRpY2F0ZSBzdWNjZXNzIG9mIGFuIGFzeW5jaHJvbm91cyBtZXRob2QuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBWb2lkQ2FsbGJhY2sgPSAoKSA9PiB2b2lkO1xyXG5cclxuLyoqXHJcbiAqIFdoZW4gYW4gZXJyb3Igb2NjdXJzLCB0aGUgZm9sbG93aW5nIGNhbGxiYWNrIGlzIG1hZGUuXHJcbiAqL1xyXG5leHBvcnQgdHlwZSBFcnJvckNhbGxiYWNrID0gKGVycjogRmlsZUVycm9yKSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBSZW1vdmVSZXN1bHQge1xyXG4gIHN1Y2Nlc3M6IGJvb2xlYW47XHJcbiAgZmlsZVJlbW92ZWQ6IEVudHJ5O1xyXG59XHJcblxyXG4vKiogQGhpZGRlbiAqL1xyXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBGaWxlU2F2ZXIgZXh0ZW5kcyBFdmVudFRhcmdldCB7XHJcbiAgLyoqXHJcbiAgICogV2hlbiB0aGUgRmlsZVNhdmVyIGNvbnN0cnVjdG9yIGlzIGNhbGxlZCwgdGhlIHVzZXIgYWdlbnQgbXVzdCByZXR1cm4gYSBuZXcgRmlsZVNhdmVyIG9iamVjdCB3aXRoIHJlYWR5U3RhdGUgc2V0IHRvXHJcbiAgICogSU5JVC4gVGhpcyBjb25zdHJ1Y3RvciBtdXN0IGJlIHZpc2libGUgd2hlbiB0aGUgc2NyaXB0J3MgZ2xvYmFsIG9iamVjdCBpcyBlaXRoZXIgYSBXaW5kb3cgb2JqZWN0IG9yIGFuIG9iamVjdFxyXG4gICAqIGltcGxlbWVudGluZyB0aGUgV29ya2VyVXRpbHMgaW50ZXJmYWNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKGRhdGE6IEJsb2IpO1xyXG5cclxuICAvKipcclxuICAgKiBXaGVuIHRoZSBhYm9ydCBtZXRob2QgaXMgY2FsbGVkLCB1c2VyIGFnZW50cyBtdXN0IHJ1biB0aGUgc3RlcHMgYmVsb3c6XHJcbiAgICogPG9sPlxyXG4gICAqIDxsaT4gSWYgcmVhZHlTdGF0ZSA9PSBET05FIG9yIHJlYWR5U3RhdGUgPT0gSU5JVCwgdGVybWluYXRlIHRoaXMgb3ZlcmFsbCBzZXJpZXMgb2Ygc3RlcHMgd2l0aG91dCBkb2luZyBhbnl0aGluZ1xyXG4gICAqIGVsc2UuIDwvbGk+XHJcbiAgICogPGxpPiBTZXQgcmVhZHlTdGF0ZSB0byBET05FLiA8L2xpPlxyXG4gICAqIDxsaT4gSWYgdGhlcmUgYXJlIGFueSB0YXNrcyBmcm9tIHRoZSBvYmplY3QncyBGaWxlU2F2ZXIgdGFzayBzb3VyY2UgaW4gb25lIG9mIHRoZSB0YXNrIHF1ZXVlcywgdGhlbiByZW1vdmUgdGhvc2VcclxuICAgKiB0YXNrcy4gPC9saT5cclxuICAgKiA8bGk+IFRlcm1pbmF0ZSB0aGUgd3JpdGUgYWxnb3JpdGhtIGJlaW5nIHByb2Nlc3NlZC4gPC9saT5cclxuICAgKiA8bGk+IFNldCB0aGUgZXJyb3IgYXR0cmlidXRlIHRvIGEgRE9NRXJyb3Igb2JqZWN0IG9mIHR5cGUgXCJBYm9ydEVycm9yXCIuIDwvbGk+XHJcbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIGFib3J0IDwvbGk+XHJcbiAgICogPGxpPiBGaXJlIGEgcHJvZ3Jlc3MgZXZlbnQgY2FsbGVkIHdyaXRlIGVuZCA8L2xpPlxyXG4gICAqIDxsaT4gVGVybWluYXRlIHRoaXMgYWxnb3JpdGhtLiA8L2xpPlxyXG4gICAqIDwvb2w+XHJcbiAgICovXHJcbiAgYWJvcnQoKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGJsb2IgaXMgYmVpbmcgd3JpdHRlbi5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIElOSVQ6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgb2JqZWN0IGhhcyBiZWVuIGNvbnN0cnVjdGVkLCBidXQgdGhlcmUgaXMgbm8gcGVuZGluZyB3cml0ZS5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIFdSSVRJTkc6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgZW50aXJlIEJsb2IgaGFzIGJlZW4gd3JpdHRlbiB0byB0aGUgZmlsZSwgYW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIHRoZSB3cml0ZSwgb3IgdGhlIHdyaXRlIHdhcyBhYm9ydGVkIHVzaW5nXHJcbiAgICogYWJvcnQoKS4gVGhlIEZpbGVTYXZlciBpcyBubyBsb25nZXIgd3JpdGluZyB0aGUgYmxvYi5cclxuICAgKlxyXG4gICAqIEByZWFkb25seVxyXG4gICAqL1xyXG4gIERPTkU6IG51bWJlcjtcclxuICAvKipcclxuICAgKiBUaGUgRmlsZVNhdmVyIG9iamVjdCBjYW4gYmUgaW4gb25lIG9mIDMgc3RhdGVzLiBUaGUgcmVhZHlTdGF0ZSBhdHRyaWJ1dGUsIG9uIGdldHRpbmcsIG11c3QgcmV0dXJuIHRoZSBjdXJyZW50XHJcbiAgICogc3RhdGUsIHdoaWNoIG11c3QgYmUgb25lIG9mIHRoZSBmb2xsb3dpbmcgdmFsdWVzOlxyXG4gICAqIDx1bD5cclxuICAgKiA8bGk+SU5JVDwvbGk+XHJcbiAgICogPGxpPldSSVRJTkc8L2xpPlxyXG4gICAqIDxsaT5ET05FPC9saT5cclxuICAgKiA8dWw+XHJcbiAgICpcclxuICAgKiBAcmVhZG9ubHlcclxuICAgKi9cclxuICByZWFkeVN0YXRlOiBudW1iZXI7XHJcbiAgLyoqXHJcbiAgICogVGhlIGxhc3QgZXJyb3IgdGhhdCBvY2N1cnJlZCBvbiB0aGUgRmlsZVNhdmVyLlxyXG4gICAqXHJcbiAgICogQHJlYWRvbmx5XHJcbiAgICovXHJcbiAgZXJyb3I6IEVycm9yO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIHdyaXRlIHN0YXJ0IGV2ZW50c1xyXG4gICAqL1xyXG4gIG9ud3JpdGVzdGFydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIHByb2dyZXNzIGV2ZW50cy5cclxuICAgKi9cclxuICBvbnByb2dyZXNzOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZXZlbnRzLlxyXG4gICAqL1xyXG4gIG9ud3JpdGU6IChldmVudDogUHJvZ3Jlc3NFdmVudCkgPT4gdm9pZDtcclxuICAvKipcclxuICAgKiBIYW5kbGVyIGZvciBhYm9ydCBldmVudHMuXHJcbiAgICovXHJcbiAgb25hYm9ydDogKGV2ZW50OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIC8qKlxyXG4gICAqIEhhbmRsZXIgZm9yIGVycm9yIGV2ZW50cy5cclxuICAgKi9cclxuICBvbmVycm9yOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgLyoqXHJcbiAgICogSGFuZGxlciBmb3Igd3JpdGUgZW5kIGV2ZW50cy5cclxuICAgKi9cclxuICBvbndyaXRlZW5kOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAaGlkZGVuXHJcbiAqIFRoaXMgaW50ZXJmYWNlIGV4cGFuZHMgb24gdGhlIEZpbGVTYXZlciBpbnRlcmZhY2UgdG8gYWxsb3cgZm9yIG11bHRpcGxlIHdyaXRlIGFjdGlvbnMsIHJhdGhlciB0aGFuIGp1c3Qgc2F2aW5nIGFcclxuICogICBzaW5nbGUgQmxvYi5cclxuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVXcml0ZXIgZXh0ZW5kcyBGaWxlU2F2ZXIge1xyXG4gIC8qKlxyXG4gICAqIFRoZSBieXRlIG9mZnNldCBhdCB3aGljaCB0aGUgbmV4dCB3cml0ZSB0byB0aGUgZmlsZSB3aWxsIG9jY3VyLiBUaGlzIG11c3QgYmUgbm8gZ3JlYXRlciB0aGFuIGxlbmd0aC5cclxuICAgKiBBIG5ld2x5LWNyZWF0ZWQgRmlsZVdyaXRlciBtdXN0IGhhdmUgcG9zaXRpb24gc2V0IHRvIDAuXHJcbiAgICovXHJcbiAgcG9zaXRpb246IG51bWJlcjtcclxuXHJcbiAgLyoqXHJcbiAgICogVGhlIGxlbmd0aCBvZiB0aGUgZmlsZS4gSWYgdGhlIHVzZXIgZG9lcyBub3QgaGF2ZSByZWFkIGFjY2VzcyB0byB0aGUgZmlsZSwgdGhpcyBtdXN0IGJlIHRoZSBoaWdoZXN0IGJ5dGUgb2Zmc2V0IGF0XHJcbiAgICogd2hpY2ggdGhlIHVzZXIgaGFzIHdyaXR0ZW4uXHJcbiAgICovXHJcbiAgbGVuZ3RoOiBudW1iZXI7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlIHRoZSBzdXBwbGllZCBkYXRhIHRvIHRoZSBmaWxlIGF0IHBvc2l0aW9uLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIGRhdGEgVGhlIGJsb2IgdG8gd3JpdGUuXHJcbiAgICovXHJcbiAgd3JpdGUoZGF0YTogQXJyYXlCdWZmZXIgfCBCbG9iIHwgc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogU2VlayBzZXRzIHRoZSBmaWxlIHBvc2l0aW9uIGF0IHdoaWNoIHRoZSBuZXh0IHdyaXRlIHdpbGwgb2NjdXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gb2Zmc2V0IElmIG5vbm5lZ2F0aXZlLCBhbiBhYnNvbHV0ZSBieXRlIG9mZnNldCBpbnRvIHRoZSBmaWxlLiBJZiBuZWdhdGl2ZSwgYW4gb2Zmc2V0IGJhY2sgZnJvbSB0aGUgZW5kIG9mXHJcbiAgICogICB0aGUgZmlsZS5cclxuICAgKi9cclxuICBzZWVrKG9mZnNldDogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgLyoqXHJcbiAgICogQ2hhbmdlcyB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIHRvIHRoYXQgc3BlY2lmaWVkLiBJZiBzaG9ydGVuaW5nIHRoZSBmaWxlLCBkYXRhIGJleW9uZCB0aGUgbmV3IGxlbmd0aCBtdXN0IGJlXHJcbiAgICogZGlzY2FyZGVkLiBJZiBleHRlbmRpbmcgdGhlIGZpbGUsIHRoZSBleGlzdGluZyBkYXRhIG11c3QgYmUgemVyby1wYWRkZWQgdXAgdG8gdGhlIG5ldyBsZW5ndGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0gc2l6ZSBUaGUgc2l6ZSB0byB3aGljaCB0aGUgbGVuZ3RoIG9mIHRoZSBmaWxlIGlzIHRvIGJlIGFkanVzdGVkLCBtZWFzdXJlZCBpbiBieXRlcy5cclxuICAgKi9cclxuICB0cnVuY2F0ZShzaXplOiBudW1iZXIpOiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElXcml0ZU9wdGlvbnMge1xyXG4gIHJlcGxhY2U/OiBib29sZWFuO1xyXG4gIGFwcGVuZD86IGJvb2xlYW47XHJcbiAgdHJ1bmNhdGU/OiBudW1iZXI7IC8vIGlmIHByZXNlbnQsIG51bWJlciBvZiBieXRlcyB0byB0cnVuY2F0ZSBmaWxlIHRvIGJlZm9yZSB3cml0aW5nXHJcbn1cclxuXHJcbi8qKiBAaGlkZGVuICovXHJcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZpbGVFcnJvciB7XHJcbiAgc3RhdGljIE5PVF9GT1VORF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgU0VDVVJJVFlfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIEFCT1JUX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBOT1RfUkVBREFCTEVfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIEVOQ09ESU5HX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgSU5WQUxJRF9TVEFURV9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgU1lOVEFYX0VSUjogbnVtYmVyO1xyXG4gIHN0YXRpYyBJTlZBTElEX01PRElGSUNBVElPTl9FUlI6IG51bWJlcjtcclxuICBzdGF0aWMgUVVPVEFfRVhDRUVERURfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFRZUEVfTUlTTUFUQ0hfRVJSOiBudW1iZXI7XHJcbiAgc3RhdGljIFBBVEhfRVhJU1RTX0VSUjogbnVtYmVyO1xyXG4gIC8qKiBFcnJvciBjb2RlICovXHJcbiAgY29kZTogbnVtYmVyO1xyXG4gIG1lc3NhZ2U6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoY29kZTogbnVtYmVyKTtcclxufVxyXG5cclxuLyoqIEBoaWRkZW4gKi9cclxuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRmlsZVJlYWRlciB7XHJcbiAgc3RhdGljIEVNUFRZOiBudW1iZXI7XHJcbiAgc3RhdGljIExPQURJTkc6IG51bWJlcjtcclxuICBzdGF0aWMgRE9ORTogbnVtYmVyO1xyXG4gIHN0YXRpYyBSRUFEX0NIVU5LX1NJWkU6IG51bWJlcjtcclxuXHJcbiAgcmVhZHlTdGF0ZTogbnVtYmVyOyAvLyBzZWUgY29uc3RhbnRzIGluIHZhciBkZWNsYXJhdGlvbiBiZWxvd1xyXG4gIGVycm9yOiBFcnJvcjtcclxuICByZXN1bHQ6IHN0cmluZyB8IEFycmF5QnVmZmVyOyAvLyB0eXBlIGRlcGVuZHMgb24gcmVhZEFzWFhYKCkgY2FsbCB0eXBlXHJcblxyXG4gIG9ubG9hZHN0YXJ0OiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9ucHJvZ3Jlc3M6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25sb2FkOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9uZXJyb3I6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgb25sb2FkZW5kOiAoZXZ0OiBQcm9ncmVzc0V2ZW50KSA9PiB2b2lkO1xyXG4gIG9uYWJvcnQ6IChldnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gIGFib3J0KCk6IHZvaWQ7XHJcblxyXG4gIHJlYWRBc1RleHQoZmU6IElGaWxlLCBlbmNvZGluZz86IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gIHJlYWRBc0RhdGFVUkwoZmU6IElGaWxlKTogdm9pZDtcclxuXHJcbiAgcmVhZEFzQmluYXJ5U3RyaW5nKGZlOiBJRmlsZSk6IHZvaWQ7XHJcblxyXG4gIHJlYWRBc0FycmF5QnVmZmVyKGZlOiBJRmlsZSk6IHZvaWQ7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBba2V5OiBzdHJpbmddOiBhbnk7XHJcbn1cclxuXHJcbnR5cGUgV2luZG93ID0gTG9jYWxGaWxlU3lzdGVtO1xyXG5cclxuZGVjbGFyZSBjb25zdCB3aW5kb3c6IFdpbmRvdztcclxuXHJcbi8qKlxyXG4gKiBAbmFtZSBGaWxlXHJcbiAqIEBwcmVtaWVyIGZpbGVzeXN0ZW1cclxuICogQGRlc2NyaXB0aW9uXHJcbiAqIFRoaXMgcGx1Z2luIGltcGxlbWVudHMgYSBGaWxlIEFQSSBhbGxvd2luZyByZWFkL3dyaXRlIGFjY2VzcyB0byBmaWxlcyByZXNpZGluZyBvbiB0aGUgZGV2aWNlLlxyXG4gKlxyXG4gKiBUaGUgRmlsZSBjbGFzcyBpbXBsZW1lbnRzIHN0YXRpYyBjb252ZW5pZW5jZSBmdW5jdGlvbnMgdG8gYWNjZXNzIGZpbGVzIGFuZCBkaXJlY3Rvcmllcy5cclxuICpcclxuICogRXhhbXBsZTpcclxuICogYGBgXHJcbiAqIGltcG9ydCB7IEZpbGUgfSBmcm9tICdAYXdlc29tZS1jb3Jkb3ZhLXBsdWdpbnMvZmlsZS9uZ3gnO1xyXG4gKlxyXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpbGU6IEZpbGUpIHsgfVxyXG4gKlxyXG4gKiAuLi5cclxuICpcclxuICogdGhpcy5maWxlLmNoZWNrRGlyKHRoaXMuZmlsZS5kYXRhRGlyZWN0b3J5LCAnbXlkaXInKS50aGVuKF8gPT4gY29uc29sZS5sb2coJ0RpcmVjdG9yeSBleGlzdHMnKSkuY2F0Y2goZXJyID0+XHJcbiAqICAgY29uc29sZS5sb2coJ0RpcmVjdG9yeSBkb2Vzbid0IGV4aXN0JykpO1xyXG4gKlxyXG4gKiBgYGBcclxuICpcclxuICogIFRoaXMgcGx1Z2luIGlzIGJhc2VkIG9uIHNldmVyYWwgc3BlY3MsIGluY2x1ZGluZyA6IFRoZSBIVE1MNSBGaWxlIEFQSSBodHRwOiAvL3d3dy53My5vcmcvVFIvRmlsZUFQSS9cclxuICogIFRoZSAobm93LWRlZnVuY3QpIERpcmVjdG9yaWVzIGFuZCBTeXN0ZW0gZXh0ZW5zaW9ucyBMYXRlc3Q6IGh0dHA6IC8vd3d3LnczLm9yZy9UUi8yMDEyL1dELWZpbGUtc3lzdGVtLWFwaS0yMDEyMDQxNy9cclxuICogIEFsdGhvdWdoIG1vc3Qgb2YgdGhlIHBsdWdpbiBjb2RlIHdhcyB3cml0dGVuIHdoZW4gYW4gZWFybGllciBzcGVjIHdhcyBjdXJyZW50OiBodHRwOlxyXG4gKiAgIC8vd3d3LnczLm9yZy9UUi8yMDExL1dELWZpbGUtc3lzdGVtLWFwaS0yMDExMDQxOS8gSXQgYWxzbyBpbXBsZW1lbnRzIHRoZSBGaWxlV3JpdGVyIHNwZWMgOiBodHRwOlxyXG4gKiAgIC8vZGV2LnczLm9yZy8yMDA5L2RhcC9maWxlLXN5c3RlbS9maWxlLXdyaXRlci5odG1sXHJcbiAqICBAaW50ZXJmYWNlc1xyXG4gKiAgSUZpbGVcclxuICogIEVudHJ5XHJcbiAqICBEaXJlY3RvcnlFbnRyeVxyXG4gKiAgRGlyZWN0b3J5UmVhZGVyXHJcbiAqICBGaWxlU3lzdGVtXHJcbiAqL1xyXG5AUGx1Z2luKHtcclxuICBwbHVnaW5OYW1lOiAnRmlsZScsXHJcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmlsZScsXHJcbiAgcGx1Z2luUmVmOiAnY29yZG92YS5maWxlJyxcclxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlJyxcclxuICBwbGF0Zm9ybXM6IFsnQW5kcm9pZCcsICdCcm93c2VyJywgJ2lPUycsICdtYWNPUycsICdXaW5kb3dzJ10sXHJcbn0pXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEZpbGUgZXh0ZW5kcyBBd2Vzb21lQ29yZG92YU5hdGl2ZVBsdWdpbiB7XHJcbiAgLyoqXHJcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25EaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIFJlYWQtb25seSBkaXJlY3Rvcnkgd2hlcmUgdGhlIGFwcGxpY2F0aW9uIGlzIGluc3RhbGxlZC5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgYXBwbGljYXRpb25TdG9yYWdlRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcy5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZGF0YURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBDYWNoZWQgZmlsZXMgdGhhdCBzaG91bGQgc3Vydml2ZSBhcHAgcmVzdGFydHMuXHJcbiAgICogQXBwcyBzaG91bGQgbm90IHJlbHkgb24gdGhlIE9TIHRvIGRlbGV0ZSBmaWxlcyBpbiBoZXJlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBjYWNoZURpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBBbmRyb2lkOiB0aGUgYXBwbGljYXRpb24gc3BhY2Ugb24gZXh0ZXJuYWwgc3RvcmFnZS5cclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgZXh0ZXJuYWxBcHBsaWNhdGlvblN0b3JhZ2VEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogIEFuZHJvaWQ6IFdoZXJlIHRvIHB1dCBhcHAtc3BlY2lmaWMgZGF0YSBmaWxlcyBvbiBleHRlcm5hbCBzdG9yYWdlLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBleHRlcm5hbERhdGFEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZDogdGhlIGFwcGxpY2F0aW9uIGNhY2hlIG9uIGV4dGVybmFsIHN0b3JhZ2UuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsQ2FjaGVEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQW5kcm9pZDogdGhlIGV4dGVybmFsIHN0b3JhZ2UgKFNEIGNhcmQpIHJvb3QuXHJcbiAgICovXHJcbiAgQENvcmRvdmFQcm9wZXJ0eSgpIGV4dGVybmFsUm9vdERpcmVjdG9yeTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBpT1M6IFRlbXAgZGlyZWN0b3J5IHRoYXQgdGhlIE9TIGNhbiBjbGVhciBhdCB3aWxsLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSB0ZW1wRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGlPUzogSG9sZHMgYXBwLXNwZWNpZmljIGZpbGVzIHRoYXQgc2hvdWxkIGJlIHN5bmNlZCAoZS5nLiB0byBpQ2xvdWQpLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBzeW5jZWREYXRhRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIC8qKlxyXG4gICAqIGlPUzogRmlsZXMgcHJpdmF0ZSB0byB0aGUgYXBwLCBidXQgdGhhdCBhcmUgbWVhbmluZ2Z1bCB0byBvdGhlciBhcHBsaWNhdGlvbnMgKGUuZy4gT2ZmaWNlIGZpbGVzKVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhUHJvcGVydHkoKSBkb2N1bWVudHNEaXJlY3Rvcnk6IHN0cmluZztcclxuXHJcbiAgLyoqXHJcbiAgICogQmxhY2tCZXJyeTEwOiBGaWxlcyBnbG9iYWxseSBhdmFpbGFibGUgdG8gYWxsIGFwcHNcclxuICAgKi9cclxuICBAQ29yZG92YVByb3BlcnR5KCkgc2hhcmVkRGlyZWN0b3J5OiBzdHJpbmc7XHJcblxyXG4gIGNvcmRvdmFGaWxlRXJyb3I6IGFueSA9IHtcclxuICAgIDE6ICdOT1RfRk9VTkRfRVJSJyxcclxuICAgIDI6ICdTRUNVUklUWV9FUlInLFxyXG4gICAgMzogJ0FCT1JUX0VSUicsXHJcbiAgICA0OiAnTk9UX1JFQURBQkxFX0VSUicsXHJcbiAgICA1OiAnRU5DT0RJTkdfRVJSJyxcclxuICAgIDY6ICdOT19NT0RJRklDQVRJT05fQUxMT1dFRF9FUlInLFxyXG4gICAgNzogJ0lOVkFMSURfU1RBVEVfRVJSJyxcclxuICAgIDg6ICdTWU5UQVhfRVJSJyxcclxuICAgIDk6ICdJTlZBTElEX01PRElGSUNBVElPTl9FUlInLFxyXG4gICAgMTA6ICdRVU9UQV9FWENFRURFRF9FUlInLFxyXG4gICAgMTE6ICdUWVBFX01JU01BVENIX0VSUicsXHJcbiAgICAxMjogJ1BBVEhfRVhJU1RTX0VSUicsXHJcbiAgICAxMzogJ1dST05HX0VOVFJZX1RZUEUnLFxyXG4gICAgMTQ6ICdESVJfUkVBRF9FUlInLFxyXG4gIH07XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBmcmVlIGRpc2sgc3BhY2UgaW4gQnl0ZXNcclxuICAgKlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPG51bWJlcj59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgcmVtYWluaW5nIGZyZWUgZGlzayBzcGFjZSBpbiBCeXRlc1xyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGdldEZyZWVEaXNrU3BhY2UoKTogUHJvbWlzZTxudW1iZXI+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBjb3Jkb3ZhLmV4ZWMocmVzb2x2ZSBhcyAoZGF0YTogYW55KSA9PiBhbnksIHJlamVjdCBhcyAoZGF0YTogYW55KSA9PiBhbnksICdGaWxlJywgJ2dldEZyZWVEaXNrU3BhY2UnLCBbXSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIGEgZGlyZWN0b3J5IGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpciBOYW1lIG9mIGRpcmVjdG9yeSB0byBjaGVja1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGJvb2xlYW4+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRydWUgaWYgdGhlIGRpcmVjdG9yeSBleGlzdHMgb3IgcmVqZWN0cyB3aXRoIGFuXHJcbiAgICogICBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBjaGVja0RpcihwYXRoOiBzdHJpbmcsIGRpcjogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZnVsbFBhdGggPSBwYXRoICsgZGlyO1xyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChmdWxsUGF0aCkudGhlbigoKSA9PiB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGEgbmV3IGRpcmVjdG9yeSBpbiB0aGUgc3BlY2lmaWMgcGF0aC5cclxuICAgKiBUaGUgcmVwbGFjZSBib29sZWFuIHZhbHVlIGRldGVybWluZXMgd2hldGhlciB0byByZXBsYWNlIGFuIGV4aXN0aW5nIGRpcmVjdG9yeSB3aXRoIHRoZSBzYW1lIG5hbWUuXHJcbiAgICogSWYgYW4gZXhpc3RpbmcgZGlyZWN0b3J5IGV4aXN0cyBhbmQgdGhlIHJlcGxhY2UgdmFsdWUgaXMgZmFsc2UsIHRoZSBwcm9taXNlIHdpbGwgZmFpbCBhbmQgcmV0dXJuIGFuIGVycm9yLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5IHRvIGNyZWF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggYSBEaXJlY3RvcnlFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY3JlYXRlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCByZXBsYWNlOiBib29sZWFuKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBvcHRpb25zOiBGbGFncyA9IHtcclxuICAgICAgY3JlYXRlOiB0cnVlLFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoIXJlcGxhY2UpIHtcclxuICAgICAgb3B0aW9ucy5leGNsdXNpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aCkudGhlbigoZnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBkaXJlY3RvcnkgYXQgYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gdGhlIGRpcmVjdG9yeVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIFRoZSBkaXJlY3RvcnkgbmFtZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlbW92ZURpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICBpZiAoL15cXC8vLnRlc3QoZGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGRlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlKGRlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIGEgZGlyZWN0b3J5IHRvIGEgZ2l2ZW4gcGF0aC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBzb3VyY2UgcGF0aCB0byB0aGUgZGlyZWN0b3J5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGRpck5hbWUgVGhlIHNvdXJjZSBkaXJlY3RvcnkgbmFtZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdQYXRoIFRoZSBkZXN0aW5hdGlvbiBwYXRoIHRvIHRoZSBkaXJlY3RvcnlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3RGlyTmFtZSBUaGUgZGVzdGluYXRpb24gZGlyZWN0b3J5IG5hbWVcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeXxFbnRyeT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIG5ldyBEaXJlY3RvcnlFbnRyeSBvYmplY3Qgb3JcclxuICAgKiAgIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBtb3ZlRGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0Rpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnkgfCBFbnRyeT4ge1xyXG4gICAgbmV3RGlyTmFtZSA9IG5ld0Rpck5hbWUgfHwgZGlyTmFtZTtcclxuXHJcbiAgICBpZiAoL15cXC8vLnRlc3QobmV3RGlyTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZGlyZWN0b3J5IGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldERpcmVjdG9yeShmc2UsIGRpck5hbWUsIHsgY3JlYXRlOiBmYWxzZSB9KTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKHNyY2RlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChuZXdQYXRoKS50aGVuKChkZXN0ZW5hdGlvbikgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMubW92ZShzcmNkZSwgZGVzdGVuYXRpb24sIG5ld0Rpck5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENvcHkgYSBkaXJlY3RvcnkgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBkZXN0aW5hdGlvbiBkaXJlY3RvcnkgZXhpc3RzLCB3aWxsIGZhaWwgdG8gY29weS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbXMgYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5XHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld1BhdGggQmFzZSBGaWxlU3lzdGVtIG9mIG5ldyBsb2NhdGlvblxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuZXdEaXJOYW1lIE5ldyBuYW1lIG9mIGRpcmVjdG9yeSB0byBjb3B5IHRvIChsZWF2ZSBibGFuayB0byByZW1haW4gdGhlIHNhbWUpXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIHRoZSBuZXcgRW50cnkgb2JqZWN0IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBjb3B5RGlyKHBhdGg6IHN0cmluZywgZGlyTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0Rpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChuZXdEaXJOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdkaXJlY3RvcnkgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3JjZGUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oKGRlc3RlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2RlLCBkZXN0ZSwgbmV3RGlyTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTGlzdCBmaWxlcyBhbmQgZGlyZWN0b3J5IGZyb20gYSBnaXZlbiBwYXRoLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtcyBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBkaXJOYW1lIE5hbWUgb2YgZGlyZWN0b3J5XHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RW50cnlbXT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYW4gYXJyYXkgb2YgRW50cnkgb2JqZWN0cyBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgbGlzdERpcihwYXRoOiBzdHJpbmcsIGRpck5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnlbXT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PEVudHJ5W10+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGlyZWN0b3J5KGZzZSwgZGlyTmFtZSwge1xyXG4gICAgICAgICAgY3JlYXRlOiBmYWxzZSxcclxuICAgICAgICAgIGV4Y2x1c2l2ZTogZmFsc2UsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IGRlLmNyZWF0ZVJlYWRlcigpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlYWRFbnRyaWVzKHJlYWRlcik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlcyBhbGwgZmlsZXMgYW5kIHRoZSBkaXJlY3RvcnkgZnJvbSBhIGRlc2lyZWQgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZGlyTmFtZSBOYW1lIG9mIGRpcmVjdG9yeVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIFJlbW92ZVJlc3VsdCBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVtb3ZlUmVjdXJzaXZlbHkocGF0aDogc3RyaW5nLCBkaXJOYW1lOiBzdHJpbmcpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGRpck5hbWUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2RpcmVjdG9yeSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PFJlbW92ZVJlc3VsdD4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChmc2UpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXREaXJlY3RvcnkoZnNlLCBkaXJOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChkZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJpbXJhZihkZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2hlY2sgaWYgYSBmaWxlIGV4aXN0cyBpbiBhIGNlcnRhaW4gcGF0aCwgZGlyZWN0b3J5LlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlIHRvIGNoZWNrXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8Ym9vbGVhbj59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCBhIGJvb2xlYW4gb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGNoZWNrRmlsZShwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZUxvY2FsRmlsZXN5c3RlbVVybChwYXRoICsgZmlsZSkudGhlbigoZnNlKSA9PiB7XHJcbiAgICAgIGlmIChmc2UuaXNGaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XHJcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZmlsZSc7XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGJvb2xlYW4+KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhIG5ldyBmaWxlIGluIHRoZSBzcGVjaWZpYyBwYXRoLlxyXG4gICAqIFRoZSByZXBsYWNlIGJvb2xlYW4gdmFsdWUgZGV0ZXJtaW5lcyB3aGV0aGVyIHRvIHJlcGxhY2UgYW4gZXhpc3RpbmcgZmlsZSB3aXRoIHRoZSBzYW1lIG5hbWUuXHJcbiAgICogSWYgYW4gZXhpc3RpbmcgZmlsZSBleGlzdHMgYW5kIHRoZSByZXBsYWNlIHZhbHVlIGlzIGZhbHNlLCB0aGUgcHJvbWlzZSB3aWxsIGZhaWwgYW5kIHJldHVybiBhbiBlcnJvci5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNyZWF0ZVxyXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gcmVwbGFjZSBJZiB0cnVlLCByZXBsYWNlcyBmaWxlIHdpdGggc2FtZSBuYW1lLiBJZiBmYWxzZSByZXR1cm5zIGVycm9yXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RmlsZUVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY3JlYXRlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIHJlcGxhY2U6IGJvb2xlYW4pOiBQcm9taXNlPEZpbGVFbnRyeT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3Qgb3B0aW9uczogRmxhZ3MgPSB7XHJcbiAgICAgIGNyZWF0ZTogdHJ1ZSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCFyZXBsYWNlKSB7XHJcbiAgICAgIG9wdGlvbnMuZXhjbHVzaXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGZzZSwgZmlsZU5hbWUsIG9wdGlvbnMpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmVzIGEgZmlsZSBmcm9tIGEgZGVzaXJlZCBsb2NhdGlvbi5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoICBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIHJlbW92ZVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPFJlbW92ZVJlc3VsdD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdG8gYSBSZW1vdmVSZXN1bHQgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlbW92ZUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZW1vdmVSZXN1bHQ+IHtcclxuICAgIGlmICgvXlxcLy8udGVzdChmaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZS1uYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoZmUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdmUoZmUpO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlIGEgbmV3IGZpbGUgdG8gdGhlIGRlc2lyZWQgbG9jYXRpb24uXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcn0gdGV4dCBjb250ZW50LCBibG9iIG9yIEFycmF5QnVmZmVyIHRvIHdyaXRlXHJcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSB3aGV0aGVyIHRvIHJlcGxhY2UvYXBwZW5kIHRvIGFuIGV4aXN0aW5nIGZpbGUuIFNlZSBJV3JpdGVPcHRpb25zIGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAqIEBwYXJhbSBvcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHdyaXRlRmlsZShcclxuICAgIHBhdGg6IHN0cmluZyxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICB0ZXh0OiBzdHJpbmcgfCBCbG9iIHwgQXJyYXlCdWZmZXIsXHJcbiAgICBvcHRpb25zOiBJV3JpdGVPcHRpb25zID0ge31cclxuICApOiBQcm9taXNlPGFueT4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlLW5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGdldEZpbGVPcHRzOiBGbGFncyA9IHtcclxuICAgICAgY3JlYXRlOiAhb3B0aW9ucy5hcHBlbmQsXHJcbiAgICAgIGV4Y2x1c2l2ZTogIW9wdGlvbnMucmVwbGFjZSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZGlyZWN0b3J5RW50cnk6IERpcmVjdG9yeUVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShkaXJlY3RvcnlFbnRyeSwgZmlsZU5hbWUsIGdldEZpbGVPcHRzKTtcclxuICAgICAgfSlcclxuICAgICAgLnRoZW4oKGZpbGVFbnRyeTogRmlsZUVudHJ5KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlRW50cnkoZmlsZUVudHJ5LCB0ZXh0LCBvcHRpb25zKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBXcml0ZSBjb250ZW50IHRvIEZpbGVFbnRyeS5cclxuICAgKlxyXG4gICAqIEBoaWRkZW5cclxuICAgKiBXcml0ZSB0byBhbiBleGlzdGluZyBmaWxlLlxyXG4gICAqIEBwYXJhbSB7RmlsZUVudHJ5fSBmZSBmaWxlIGVudHJ5IG9iamVjdFxyXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyfSB0ZXh0IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXHJcbiAgICogQHBhcmFtIHtJV3JpdGVPcHRpb25zfSBvcHRpb25zIHJlcGxhY2UgZmlsZSBpZiBzZXQgdG8gdHJ1ZS4gU2VlIFdyaXRlT3B0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlRW50cnk+fSAgUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB1cGRhdGVkIGZpbGUgZW50cnkgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIHByaXZhdGUgd3JpdGVGaWxlRW50cnkoZmU6IEZpbGVFbnRyeSwgdGV4dDogc3RyaW5nIHwgQmxvYiB8IEFycmF5QnVmZmVyLCBvcHRpb25zOiBJV3JpdGVPcHRpb25zKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVXcml0ZXIoZmUpXHJcbiAgICAgIC50aGVuKCh3cml0ZXIpID0+IHtcclxuICAgICAgICBpZiAob3B0aW9ucy5hcHBlbmQpIHtcclxuICAgICAgICAgIHdyaXRlci5zZWVrKHdyaXRlci5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMudHJ1bmNhdGUpIHtcclxuICAgICAgICAgIHdyaXRlci50cnVuY2F0ZShvcHRpb25zLnRydW5jYXRlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLndyaXRlKHdyaXRlciwgdGV4dCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGZlKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFdyaXRlIHRvIGFuIGV4aXN0aW5nIGZpbGUuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgcGF0aCByZWxhdGl2ZSB0byBiYXNlIHBhdGhcclxuICAgKiBAcGFyYW0ge3N0cmluZyB8IEJsb2J9IHRleHQgY29udGVudCBvciBibG9iIHRvIHdyaXRlXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8dm9pZD59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgb3IgcmVqZWN0cyB3aXRoIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHdyaXRlRXhpc3RpbmdGaWxlKHBhdGg6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgdGV4dDogc3RyaW5nIHwgQmxvYik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgcmV0dXJuIHRoaXMud3JpdGVGaWxlKHBhdGgsIGZpbGVOYW1lLCB0ZXh0LCB7IHJlcGxhY2U6IHRydWUgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZWFkIHRoZSBjb250ZW50cyBvZiBhIGZpbGUgYXMgdGV4dC5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyBvciByZWplY3RzIHdpdGhcclxuICAgKiAgIGFuIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlYWRBc1RleHQocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgcmV0dXJuIHRoaXMucmVhZEZpbGU8c3RyaW5nPihwYXRoLCBmaWxlLCAnVGV4dCcpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVhZCBmaWxlIGFuZCByZXR1cm4gZGF0YSBhcyBhIGJhc2U2NCBlbmNvZGVkIGRhdGEgdXJsLlxyXG4gICAqIEEgZGF0YSB1cmwgaXMgb2YgdGhlIGZvcm06XHJcbiAgICogICAgICBkYXRhOiBbPG1lZGlhdHlwZT5dWztiYXNlNjRdLDxkYXRhPlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggQmFzZSBGaWxlU3lzdGVtLiBQbGVhc2UgcmVmZXIgdG8gdGhlIGlPUyBhbmQgQW5kcm9pZCBmaWxlc3lzdGVtIGFib3ZlXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGUgTmFtZSBvZiBmaWxlLCByZWxhdGl2ZSB0byBwYXRoLlxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgY29udGVudHMgb2YgdGhlIGZpbGUgYXMgZGF0YSBVUkwgb3IgcmVqZWN0c1xyXG4gICAqICAgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZWFkQXNEYXRhVVJMKHBhdGg6IHN0cmluZywgZmlsZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcclxuICAgIHJldHVybiB0aGlzLnJlYWRGaWxlPHN0cmluZz4ocGF0aCwgZmlsZSwgJ0RhdGFVUkwnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYSBiaW5hcnkgZGF0YS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIEJhc2UgRmlsZVN5c3RlbS4gUGxlYXNlIHJlZmVyIHRvIHRoZSBpT1MgYW5kIEFuZHJvaWQgZmlsZXN5c3RlbSBhYm92ZVxyXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlIE5hbWUgb2YgZmlsZSwgcmVsYXRpdmUgdG8gcGF0aC5cclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxzdHJpbmc+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIHN0cmluZyByZWplY3RzIHdpdGggYW5cclxuICAgKiAgIGVycm9yLlxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIHJlYWRBc0JpbmFyeVN0cmluZyhwYXRoOiBzdHJpbmcsIGZpbGU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxzdHJpbmc+KHBhdGgsIGZpbGUsICdCaW5hcnlTdHJpbmcnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFJlYWQgZmlsZSBhbmQgcmV0dXJuIGRhdGEgYXMgYW4gQXJyYXlCdWZmZXIuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZSBOYW1lIG9mIGZpbGUsIHJlbGF0aXZlIHRvIHBhdGguXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8QXJyYXlCdWZmZXI+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHdpdGggdGhlIGNvbnRlbnRzIG9mIHRoZSBmaWxlIGFzIEFycmF5QnVmZmVyIG9yXHJcbiAgICogICByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVhZEFzQXJyYXlCdWZmZXIocGF0aDogc3RyaW5nLCBmaWxlOiBzdHJpbmcpOiBQcm9taXNlPEFycmF5QnVmZmVyPiB7XHJcbiAgICByZXR1cm4gdGhpcy5yZWFkRmlsZTxBcnJheUJ1ZmZlcj4ocGF0aCwgZmlsZSwgJ0FycmF5QnVmZmVyJyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBNb3ZlIGEgZmlsZSB0byBhIGdpdmVuIHBhdGguXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIG1vdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gbW92ZSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byB0aGUgbmV3IEVudHJ5IG9yIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICBtb3ZlRmlsZShwYXRoOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIG5ld1BhdGg6IHN0cmluZywgbmV3RmlsZU5hbWU6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIG5ld0ZpbGVOYW1lID0gbmV3RmlsZU5hbWUgfHwgZmlsZU5hbWU7XHJcblxyXG4gICAgaWYgKC9eXFwvLy50ZXN0KG5ld0ZpbGVOYW1lKSkge1xyXG4gICAgICBjb25zdCBlcnIgPSBuZXcgRmlsZUVycm9yKDUpO1xyXG4gICAgICBlcnIubWVzc2FnZSA9ICdmaWxlIG5hbWUgY2Fubm90IHN0YXJ0IHdpdGggLyc7XHJcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdDxhbnk+KGVycik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucmVzb2x2ZURpcmVjdG9yeVVybChwYXRoKVxyXG4gICAgICAudGhlbigoZnNlKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RmlsZShmc2UsIGZpbGVOYW1lLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChzcmNmZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwobmV3UGF0aCkudGhlbigoZGVzdGUpID0+IHtcclxuICAgICAgICAgIHJldHVybiB0aGlzLm1vdmUoc3JjZmUsIGRlc3RlLCBuZXdGaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ29weSBhIGZpbGUgaW4gdmFyaW91cyBtZXRob2RzLiBJZiBmaWxlIGV4aXN0cywgd2lsbCBmYWlsIHRvIGNvcHkuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBCYXNlIEZpbGVTeXN0ZW0uIFBsZWFzZSByZWZlciB0byB0aGUgaU9TIGFuZCBBbmRyb2lkIGZpbGVzeXN0ZW0gYWJvdmVcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gZmlsZU5hbWUgTmFtZSBvZiBmaWxlIHRvIGNvcHlcclxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmV3UGF0aCBCYXNlIEZpbGVTeXN0ZW0gb2YgbmV3IGxvY2F0aW9uXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IG5ld0ZpbGVOYW1lIE5ldyBuYW1lIG9mIGZpbGUgdG8gY29weSB0byAobGVhdmUgYmxhbmsgdG8gcmVtYWluIHRoZSBzYW1lKVxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiBFbnRyeSBvciByZWplY3RzIHdpdGggYW4gZXJyb3IuXHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgY29weUZpbGUocGF0aDogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCBuZXdQYXRoOiBzdHJpbmcsIG5ld0ZpbGVOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICBuZXdGaWxlTmFtZSA9IG5ld0ZpbGVOYW1lIHx8IGZpbGVOYW1lO1xyXG5cclxuICAgIGlmICgvXlxcLy8udGVzdChuZXdGaWxlTmFtZSkpIHtcclxuICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcig1KTtcclxuICAgICAgZXJyLm1lc3NhZ2UgPSAnZmlsZSBuYW1lIGNhbm5vdCBzdGFydCB3aXRoIC8nO1xyXG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8YW55PihlcnIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVEaXJlY3RvcnlVcmwocGF0aClcclxuICAgICAgLnRoZW4oKGZzZSkgPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldEZpbGUoZnNlLCBmaWxlTmFtZSwgeyBjcmVhdGU6IGZhbHNlIH0pO1xyXG4gICAgICB9KVxyXG4gICAgICAudGhlbigoc3JjZmUpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKG5ld1BhdGgpLnRoZW4oKGRlc3RlKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gdGhpcy5jb3B5KHNyY2ZlLCBkZXN0ZSwgbmV3RmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBlcnJcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBmaWxsRXJyb3JNZXNzYWdlKGVycjogRmlsZUVycm9yKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICBlcnIubWVzc2FnZSA9IHRoaXMuY29yZG92YUZpbGVFcnJvcltlcnIuY29kZV07XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVzb2x2ZXMgYSBsb2NhbCBmaWxlIHN5c3RlbSBVUkxcclxuICAgKlxyXG4gICAqIEBwYXJhbSBmaWxlVXJsIHtzdHJpbmd9IGZpbGUgc3lzdGVtIHVybFxyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEVudHJ5Pn1cclxuICAgKi9cclxuICBAQ29yZG92YUNoZWNrKClcclxuICByZXNvbHZlTG9jYWxGaWxlc3lzdGVtVXJsKGZpbGVVcmw6IHN0cmluZyk6IFByb21pc2U8RW50cnk+IHtcclxuICAgIHJldHVybiBnZXRQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgd2luZG93LnJlc29sdmVMb2NhbEZpbGVTeXN0ZW1VUkwoXHJcbiAgICAgICAgICBmaWxlVXJsLFxyXG4gICAgICAgICAgKGVudHJ5OiBFbnRyeSkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKGVudHJ5KTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9IGNhdGNoICh4Yykge1xyXG4gICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZSh4Yyk7XHJcbiAgICAgICAgcmVqZWN0KHhjKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZXNvbHZlcyBhIGxvY2FsIGRpcmVjdG9yeSB1cmxcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlVcmwge3N0cmluZ30gZGlyZWN0b3J5IHN5c3RlbSB1cmxcclxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxEaXJlY3RvcnlFbnRyeT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgcmVzb2x2ZURpcmVjdG9yeVVybChkaXJlY3RvcnlVcmw6IHN0cmluZyk6IFByb21pc2U8RGlyZWN0b3J5RW50cnk+IHtcclxuICAgIHJldHVybiB0aGlzLnJlc29sdmVMb2NhbEZpbGVzeXN0ZW1VcmwoZGlyZWN0b3J5VXJsKS50aGVuKChkZSkgPT4ge1xyXG4gICAgICBpZiAoZGUuaXNEaXJlY3RvcnkpIHtcclxuICAgICAgICByZXR1cm4gZGUgYXMgRGlyZWN0b3J5RW50cnk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZXJyID0gbmV3IEZpbGVFcnJvcigxMyk7XHJcbiAgICAgICAgZXJyLm1lc3NhZ2UgPSAnaW5wdXQgaXMgbm90IGEgZGlyZWN0b3J5JztcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3Q8RGlyZWN0b3J5RW50cnk+KGVycik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogR2V0IGEgZGlyZWN0b3J5XHJcbiAgICpcclxuICAgKiBAcGFyYW0gZGlyZWN0b3J5RW50cnkge0RpcmVjdG9yeUVudHJ5fSBEaXJlY3RvcnkgZW50cnksIG9idGFpbmVkIGJ5IHJlc29sdmVEaXJlY3RvcnlVcmwgbWV0aG9kXHJcbiAgICogQHBhcmFtIGRpcmVjdG9yeU5hbWUge3N0cmluZ30gRGlyZWN0b3J5IG5hbWVcclxuICAgKiBAcGFyYW0gZmxhZ3Mge0ZsYWdzfSBPcHRpb25zXHJcbiAgICogQHJldHVybnMge1Byb21pc2U8RGlyZWN0b3J5RW50cnk+fVxyXG4gICAqL1xyXG4gIEBDb3Jkb3ZhQ2hlY2soKVxyXG4gIGdldERpcmVjdG9yeShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGRpcmVjdG9yeU5hbWU6IHN0cmluZywgZmxhZ3M6IEZsYWdzKTogUHJvbWlzZTxEaXJlY3RvcnlFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPERpcmVjdG9yeUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RGlyZWN0b3J5KFxyXG4gICAgICAgICAgZGlyZWN0b3J5TmFtZSxcclxuICAgICAgICAgIGZsYWdzLFxyXG4gICAgICAgICAgKGRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoZGUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcclxuICAgICAgICByZWplY3QoeGMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCBhIGZpbGVcclxuICAgKlxyXG4gICAqIEBwYXJhbSBkaXJlY3RvcnlFbnRyeSB7RGlyZWN0b3J5RW50cnl9IERpcmVjdG9yeSBlbnRyeSwgb2J0YWluZWQgYnkgcmVzb2x2ZURpcmVjdG9yeVVybCBtZXRob2RcclxuICAgKiBAcGFyYW0gZmlsZU5hbWUge3N0cmluZ30gRmlsZSBuYW1lXHJcbiAgICogQHBhcmFtIGZsYWdzIHtGbGFnc30gT3B0aW9uc1xyXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGVFbnRyeT59XHJcbiAgICovXHJcbiAgQENvcmRvdmFDaGVjaygpXHJcbiAgZ2V0RmlsZShkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnksIGZpbGVOYW1lOiBzdHJpbmcsIGZsYWdzOiBGbGFncyk6IFByb21pc2U8RmlsZUVudHJ5PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RmlsZUVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgZGlyZWN0b3J5RW50cnkuZ2V0RmlsZShmaWxlTmFtZSwgZmxhZ3MsIHJlc29sdmUsIChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gY2F0Y2ggKHhjKSB7XHJcbiAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKHhjKTtcclxuICAgICAgICByZWplY3QoeGMpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVhZEZpbGU8VD4oXHJcbiAgICBwYXRoOiBzdHJpbmcsXHJcbiAgICBmaWxlOiBzdHJpbmcsXHJcbiAgICByZWFkQXM6ICdBcnJheUJ1ZmZlcicgfCAnQmluYXJ5U3RyaW5nJyB8ICdEYXRhVVJMJyB8ICdUZXh0J1xyXG4gICk6IFByb21pc2U8VD4ge1xyXG4gICAgaWYgKC9eXFwvLy50ZXN0KGZpbGUpKSB7XHJcbiAgICAgIGNvbnN0IGVyciA9IG5ldyBGaWxlRXJyb3IoNSk7XHJcbiAgICAgIGVyci5tZXNzYWdlID0gJ2ZpbGUtbmFtZSBjYW5ub3Qgc3RhcnQgd2l0aCAvJztcclxuICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0PGFueT4oZXJyKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5yZXNvbHZlRGlyZWN0b3J5VXJsKHBhdGgpXHJcbiAgICAgIC50aGVuKChkaXJlY3RvcnlFbnRyeTogRGlyZWN0b3J5RW50cnkpID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRGaWxlKGRpcmVjdG9yeUVudHJ5LCBmaWxlLCB7IGNyZWF0ZTogZmFsc2UgfSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC50aGVuKChmaWxlRW50cnk6IEZpbGVFbnRyeSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgcmV0dXJuIGdldFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgcmVhZGVyLm9ubG9hZGVuZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlYWRlci5yZXN1bHQgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIucmVzdWx0ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0IGFzIGFueSBhcyBUKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChyZWFkZXIuZXJyb3IgIT09IHVuZGVmaW5lZCB8fCByZWFkZXIuZXJyb3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICByZWplY3QocmVhZGVyLmVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZWplY3QoeyBjb2RlOiBudWxsLCBtZXNzYWdlOiAnUkVBREVSX09OTE9BREVORF9FUlInIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGZpbGVFbnRyeS5maWxlKFxyXG4gICAgICAgICAgICAoZmlsZSkgPT4ge1xyXG4gICAgICAgICAgICAgIHJlYWRlcltgcmVhZEFzJHtyZWFkQXN9YF0uY2FsbChyZWFkZXIsIGZpbGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBmZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHJlbW92ZShmZTogRW50cnkpOiBQcm9taXNlPFJlbW92ZVJlc3VsdD4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPFJlbW92ZVJlc3VsdD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICBmZS5yZW1vdmUoXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZSh7IHN1Y2Nlc3M6IHRydWUsIGZpbGVSZW1vdmVkOiBmZSB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgIHRoaXMuZmlsbEVycm9yTWVzc2FnZShlcnIpO1xyXG4gICAgICAgICAgcmVqZWN0KGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAcGFyYW0gc3JjZVxyXG4gICAqIEBwYXJhbSBkZXN0ZGlyXHJcbiAgICogQHBhcmFtIG5ld05hbWVcclxuICAgKiBAaGlkZGVuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBtb3ZlKHNyY2U6IEVudHJ5LCBkZXN0ZGlyOiBEaXJlY3RvcnlFbnRyeSwgbmV3TmFtZTogc3RyaW5nKTogUHJvbWlzZTxFbnRyeT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIHNyY2UubW92ZVRvKFxyXG4gICAgICAgIGRlc3RkaXIsXHJcbiAgICAgICAgbmV3TmFtZSxcclxuICAgICAgICAoZGVzdGUpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZGVzdGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKGVycikgPT4ge1xyXG4gICAgICAgICAgdGhpcy5maWxsRXJyb3JNZXNzYWdlKGVycik7XHJcbiAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSBzcmNlXHJcbiAgICogQHBhcmFtIGRlc3RkaXJcclxuICAgKiBAcGFyYW0gbmV3TmFtZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIGNvcHkoc3JjZTogRW50cnksIGRlc3RkaXI6IERpcmVjdG9yeUVudHJ5LCBuZXdOYW1lOiBzdHJpbmcpOiBQcm9taXNlPEVudHJ5PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8RW50cnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgc3JjZS5jb3B5VG8oXHJcbiAgICAgICAgZGVzdGRpcixcclxuICAgICAgICBuZXdOYW1lLFxyXG4gICAgICAgIChkZXN0ZSkgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShkZXN0ZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGRyXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmVhZEVudHJpZXMoZHI6IERpcmVjdG9yeVJlYWRlcik6IFByb21pc2U8RW50cnlbXT4ge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEVudHJ5W10+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgZHIucmVhZEVudHJpZXMoXHJcbiAgICAgICAgKGVudHJpZXMpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoZW50cmllcyk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGRlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgcmltcmFmKGRlOiBEaXJlY3RvcnlFbnRyeSk6IFByb21pc2U8UmVtb3ZlUmVzdWx0PiB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8UmVtb3ZlUmVzdWx0PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGRlLnJlbW92ZVJlY3Vyc2l2ZWx5KFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzOiB0cnVlLCBmaWxlUmVtb3ZlZDogZGUgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIGZlXHJcbiAgICogQGhpZGRlblxyXG4gICAqL1xyXG4gIHByaXZhdGUgY3JlYXRlV3JpdGVyKGZlOiBGaWxlRW50cnkpOiBQcm9taXNlPEZpbGVXcml0ZXI+IHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxGaWxlV3JpdGVyPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIGZlLmNyZWF0ZVdyaXRlcihcclxuICAgICAgICAod3JpdGVyKSA9PiB7XHJcbiAgICAgICAgICByZXNvbHZlKHdyaXRlcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoZXJyKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmZpbGxFcnJvck1lc3NhZ2UoZXJyKTtcclxuICAgICAgICAgIHJlamVjdChlcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHdyaXRlclxyXG4gICAqIEBwYXJhbSBndVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHdyaXRlKHdyaXRlcjogRmlsZVdyaXRlciwgZ3U6IHN0cmluZyB8IEJsb2IgfCBBcnJheUJ1ZmZlcik6IFByb21pc2U8YW55PiB7XHJcbiAgICBpZiAoZ3UgaW5zdGFuY2VvZiBCbG9iKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLndyaXRlRmlsZUluQ2h1bmtzKHdyaXRlciwgZ3UpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgd3JpdGVyLm9ud3JpdGVlbmQgPSAoZXZ0KSA9PiB7XHJcbiAgICAgICAgaWYgKHdyaXRlci5lcnJvcikge1xyXG4gICAgICAgICAgcmVqZWN0KHdyaXRlci5lcnJvcik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJlc29sdmUoZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICAgIHdyaXRlci53cml0ZShndSk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBwYXJhbSB3cml0ZXJcclxuICAgKiBAcGFyYW0gZmlsZVxyXG4gICAqIEBoaWRkZW5cclxuICAgKi9cclxuICBwcml2YXRlIHdyaXRlRmlsZUluQ2h1bmtzKHdyaXRlcjogRmlsZVdyaXRlciwgZmlsZTogQmxvYikge1xyXG4gICAgY29uc3QgQkxPQ0tfU0laRSA9IDEwMjQgKiAxMDI0O1xyXG4gICAgbGV0IHdyaXR0ZW5TaXplID0gMDtcclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHdyaXRlTmV4dENodW5rKCkge1xyXG4gICAgICBjb25zdCBzaXplID0gTWF0aC5taW4oQkxPQ0tfU0laRSwgZmlsZS5zaXplIC0gd3JpdHRlblNpemUpO1xyXG4gICAgICBjb25zdCBjaHVuayA9IGZpbGUuc2xpY2Uod3JpdHRlblNpemUsIHdyaXR0ZW5TaXplICsgc2l6ZSk7XHJcblxyXG4gICAgICB3cml0dGVuU2l6ZSArPSBzaXplO1xyXG4gICAgICB3cml0ZXIud3JpdGUoY2h1bmspO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBnZXRQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICB3cml0ZXIub25lcnJvciA9IHJlamVjdCBhcyAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IHZvaWQ7XHJcbiAgICAgIHdyaXRlci5vbndyaXRlID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh3cml0dGVuU2l6ZSA8IGZpbGUuc2l6ZSkge1xyXG4gICAgICAgICAgd3JpdGVOZXh0Q2h1bmsoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgICAgd3JpdGVOZXh0Q2h1bmsoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=