System.register(['angular2/core', 'angular2/http', './src/translate.pipe', './src/translate.service', './src/translate.parser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1, http_1, translate_pipe_1, translate_service_1;
    var TRANSLATE_PROVIDERS;
    var exportedNames_1 = {
        'TRANSLATE_PROVIDERS': true
    };
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default"&& !exportedNames_1.hasOwnProperty(n)) exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (translate_pipe_1_1) {
                translate_pipe_1 = translate_pipe_1_1;
                exportStar_1(translate_pipe_1_1);
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
                exportStar_1(translate_service_1_1);
            },
            function (translate_parser_1_1) {
                exportStar_1(translate_parser_1_1);
            }],
        execute: function() {
            exports_1("TRANSLATE_PROVIDERS", TRANSLATE_PROVIDERS = [
                core_1.provide(translate_service_1.TranslateLoader, {
                    useFactory: function (http) { return new translate_service_1.TranslateStaticLoader(http); },
                    deps: [http_1.Http]
                }),
                translate_service_1.TranslateService
            ]);
            exports_1("default",{
                pipes: [translate_pipe_1.TranslatePipe],
                providers: [translate_service_1.TranslateService]
            });
        }
    }
});
//# sourceMappingURL=ng2-translate.js.map