'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var SqliteDbCopy = /** @class */ (function (_super) {
    tslib.__extends(SqliteDbCopy, _super);
    function SqliteDbCopy() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SqliteDbCopy.prototype.copy = function (dbname, location) { return core.cordova(this, "copy", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.checkDbOnStorage = function (dbname, source) { return core.cordova(this, "checkDbOnStorage", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.prototype.copyDbFromStorage = function (dbname, location, source, deleteolddb) { return core.cordova(this, "copyDbFromStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.copyDbToStorage = function (dbname, location, destination, overwrite) { return core.cordova(this, "copyDbToStorage", { "successIndex": 4, "errorIndex": 5 }, arguments); };
    SqliteDbCopy.prototype.remove = function (dbname, location) { return core.cordova(this, "remove", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    SqliteDbCopy.pluginName = "cordova-plugin-dbcopy";
    SqliteDbCopy.plugin = "cordova-plugin-dbcopy";
    SqliteDbCopy.pluginRef = "window.plugins.sqlDB";
    SqliteDbCopy.repo = "https://github.com/an-rahulpandey/cordova-plugin-dbcopy";
    SqliteDbCopy.platforms = ["Android", "iOS"];
    SqliteDbCopy.decorators = [
        { type: core$1.Injectable }
    ];
    return SqliteDbCopy;
}(core.AwesomeCordovaNativePlugin));

exports.SqliteDbCopy = SqliteDbCopy;
