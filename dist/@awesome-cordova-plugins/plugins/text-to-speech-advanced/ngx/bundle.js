'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@awesome-cordova-plugins/core');

var TextToSpeechAdvanced = /** @class */ (function (_super) {
    tslib.__extends(TextToSpeechAdvanced, _super);
    function TextToSpeechAdvanced() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TextToSpeechAdvanced.prototype.speak = function (textOrOptions) { return core.cordova(this, "speak", { "successIndex": 1, "errorIndex": 2 }, arguments); };
    TextToSpeechAdvanced.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    TextToSpeechAdvanced.prototype.getVoices = function () { return core.cordova(this, "getVoices", {}, arguments); };
    TextToSpeechAdvanced.pluginName = "Text To Speech Advanced";
    TextToSpeechAdvanced.plugin = "cordova-plugin-tts-advanced";
    TextToSpeechAdvanced.pluginRef = "TTS";
    TextToSpeechAdvanced.repo = "https://github.com/spasma/cordova-plugin-tts-advanced";
    TextToSpeechAdvanced.platforms = ["Android", "iOS"];
    TextToSpeechAdvanced.decorators = [
        { type: core$1.Injectable }
    ];
    return TextToSpeechAdvanced;
}(core.AwesomeCordovaNativePlugin));

exports.TextToSpeechAdvanced = TextToSpeechAdvanced;
