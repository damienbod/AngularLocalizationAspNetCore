System.register(['angular2/core', 'angular2/http', 'rxjs/Observable', 'rxjs/add/observable/of', 'rxjs/add/operator/share', 'rxjs/add/operator/map', 'rxjs/add/operator/merge', 'rxjs/add/operator/toArray', './translate.parser'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, http_1, Observable_1, translate_parser_1;
    var MissingTranslationHandler, TranslateLoader, TranslateStaticLoader, TranslateService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (_1) {},
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (translate_parser_1_1) {
                translate_parser_1 = translate_parser_1_1;
            }],
        execute: function() {
            MissingTranslationHandler = (function () {
                function MissingTranslationHandler() {
                }
                return MissingTranslationHandler;
            }());
            exports_1("MissingTranslationHandler", MissingTranslationHandler);
            TranslateLoader = (function () {
                function TranslateLoader() {
                }
                return TranslateLoader;
            }());
            exports_1("TranslateLoader", TranslateLoader);
            TranslateStaticLoader = (function () {
                function TranslateStaticLoader(http, prefix, suffix) {
                    if (prefix === void 0) { prefix = 'i18n'; }
                    if (suffix === void 0) { suffix = '.json'; }
                    this.http = http;
                    this.prefix = prefix;
                    this.suffix = suffix;
                }
                TranslateStaticLoader.prototype.getTranslation = function (lang) {
                    return this.http.get(this.prefix + "/" + lang + this.suffix)
                        .map(function (res) { return res.json(); });
                };
                return TranslateStaticLoader;
            }());
            exports_1("TranslateStaticLoader", TranslateStaticLoader);
            TranslateService = (function () {
                function TranslateService(http, currentLoader, missingTranslationHandler) {
                    this.http = http;
                    this.currentLoader = currentLoader;
                    this.missingTranslationHandler = missingTranslationHandler;
                    this.currentLang = this.defaultLang;
                    this.onLangChange = new core_1.EventEmitter();
                    this.translations = {};
                    this.parser = new translate_parser_1.Parser();
                }
                TranslateService.prototype.setDefaultLang = function (lang) {
                    this.defaultLang = lang;
                };
                TranslateService.prototype.use = function (lang) {
                    var _this = this;
                    var pending;
                    if (typeof this.translations[lang] === 'undefined') {
                        pending = this.getTranslation(lang);
                    }
                    if (typeof pending !== 'undefined') {
                        pending.subscribe(function (res) {
                            _this.changeLang(lang);
                        });
                        return pending;
                    }
                    else {
                        this.changeLang(lang);
                        return Observable_1.Observable.of(this.translations[lang]);
                    }
                };
                TranslateService.prototype.getTranslation = function (lang) {
                    var _this = this;
                    this.pending = this.currentLoader.getTranslation(lang).share();
                    this.pending.subscribe(function (res) {
                        _this.translations[lang] = res;
                        _this.updateLangs();
                    }, function (err) {
                        throw err;
                    }, function () {
                        _this.pending = undefined;
                    });
                    return this.pending;
                };
                TranslateService.prototype.setTranslation = function (lang, translations) {
                    this.translations[lang] = translations;
                    this.updateLangs();
                };
                TranslateService.prototype.getLangs = function () {
                    return this.langs;
                };
                TranslateService.prototype.updateLangs = function () {
                    this.langs = Object.keys(this.translations);
                };
                TranslateService.prototype.getParsedResult = function (translations, key, interpolateParams) {
                    var res;
                    if (key instanceof Array) {
                        var result = {}, observables = false;
                        for (var _i = 0, key_1 = key; _i < key_1.length; _i++) {
                            var k = key_1[_i];
                            result[k] = this.getParsedResult(translations, k, interpolateParams);
                            if (typeof result[k].subscribe === 'function') {
                                observables = true;
                            }
                        }
                        if (observables) {
                            var mergedObs;
                            for (var _a = 0, key_2 = key; _a < key_2.length; _a++) {
                                var k = key_2[_a];
                                var obs = typeof result[k].subscribe === 'function' ? result[k] : Observable_1.Observable.of(result[k]);
                                if (typeof mergedObs === 'undefined') {
                                    mergedObs = obs;
                                }
                                else {
                                    mergedObs = mergedObs.merge(obs);
                                }
                            }
                            return mergedObs.toArray().map(function (arr) {
                                var obj = {};
                                arr.forEach(function (value, index) {
                                    obj[key[index]] = value;
                                });
                                return obj;
                            });
                        }
                        return result;
                    }
                    if (translations) {
                        res = this.parser.interpolate(this.parser.getValue(translations, key), interpolateParams);
                    }
                    if (typeof res === 'undefined' && this.defaultLang && this.defaultLang !== this.currentLang) {
                        res = this.parser.interpolate(this.parser.getValue(this.translations[this.defaultLang], key), interpolateParams);
                    }
                    if (!res && this.missingTranslationHandler) {
                        res = this.missingTranslationHandler.handle(key);
                    }
                    return res || key;
                };
                TranslateService.prototype.get = function (key, interpolateParams) {
                    var _this = this;
                    if (!key) {
                        throw new Error('Parameter "key" required');
                    }
                    if (this.pending) {
                        return Observable_1.Observable.create(function (observer) {
                            var onComplete = function (res) {
                                observer.next(res);
                                observer.complete();
                            };
                            _this.pending.subscribe(function (res) {
                                var res = _this.getParsedResult(res, key, interpolateParams);
                                if (typeof res.subscribe === 'function') {
                                    res.subscribe(onComplete);
                                }
                                else {
                                    onComplete(res);
                                }
                            });
                        });
                    }
                    else {
                        var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
                        if (typeof res.subscribe === 'function') {
                            return res;
                        }
                        else {
                            return Observable_1.Observable.of(res);
                        }
                    }
                };
                TranslateService.prototype.instant = function (key, interpolateParams) {
                    if (!key) {
                        throw new Error('Parameter "key" required');
                    }
                    var res = this.getParsedResult(this.translations[this.currentLang], key, interpolateParams);
                    if (typeof res.subscribe !== 'undefined') {
                        if (key instanceof Array) {
                            var obj = {};
                            key.forEach(function (value, index) {
                                obj[key[index]] = key[index];
                            });
                            return obj;
                        }
                        return key;
                    }
                    else {
                        return res;
                    }
                };
                TranslateService.prototype.set = function (key, value, lang) {
                    if (lang === void 0) { lang = this.currentLang; }
                    this.translations[lang][key] = value;
                    this.updateLangs();
                };
                TranslateService.prototype.changeLang = function (lang) {
                    this.currentLang = lang;
                    this.onLangChange.emit({ lang: lang, translations: this.translations[lang] });
                };
                TranslateService.prototype.reloadLang = function (lang) {
                    this.resetLang(lang);
                    return this.getTranslation(lang);
                };
                TranslateService.prototype.resetLang = function (lang) {
                    this.translations[lang] = undefined;
                };
                TranslateService = __decorate([
                    core_1.Injectable(),
                    __param(2, core_1.Optional()), 
                    __metadata('design:paramtypes', [http_1.Http, TranslateLoader, MissingTranslationHandler])
                ], TranslateService);
                return TranslateService;
            }());
            exports_1("TranslateService", TranslateService);
        }
    }
});
//# sourceMappingURL=translate.service.js.map