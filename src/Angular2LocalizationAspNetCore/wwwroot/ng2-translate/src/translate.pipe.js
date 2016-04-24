System.register(['angular2/core', './translate.service', "angular2/src/facade/lang"], function(exports_1, context_1) {
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
    var core_1, translate_service_1, lang_1;
    var TranslatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (translate_service_1_1) {
                translate_service_1 = translate_service_1_1;
            },
            function (lang_1_1) {
                lang_1 = lang_1_1;
            }],
        execute: function() {
            TranslatePipe = (function () {
                function TranslatePipe(translate, _ref) {
                    this.translate = translate;
                    this._ref = _ref;
                    this.value = '';
                }
                TranslatePipe.prototype.equals = function (o1, o2) {
                    if (o1 === o2)
                        return true;
                    if (o1 === null || o2 === null)
                        return false;
                    if (o1 !== o1 && o2 !== o2)
                        return true;
                    var t1 = typeof o1, t2 = typeof o2, length, key, keySet;
                    if (t1 == t2 && t1 == 'object') {
                        if (lang_1.isArray(o1)) {
                            if (!lang_1.isArray(o2))
                                return false;
                            if ((length = o1.length) == o2.length) {
                                for (key = 0; key < length; key++) {
                                    if (!this.equals(o1[key], o2[key]))
                                        return false;
                                }
                                return true;
                            }
                        }
                        else {
                            if (lang_1.isArray(o2)) {
                                return false;
                            }
                            keySet = Object.create(null);
                            for (key in o1) {
                                if (!this.equals(o1[key], o2[key])) {
                                    return false;
                                }
                                keySet[key] = true;
                            }
                            for (key in o2) {
                                if (!(key in keySet) && typeof o2[key] !== 'undefined') {
                                    return false;
                                }
                            }
                            return true;
                        }
                    }
                    return false;
                };
                TranslatePipe.prototype.updateValue = function (key, interpolateParams) {
                    var _this = this;
                    this.translate.get(key, interpolateParams).subscribe(function (res) {
                        _this.value = res ? res : key;
                        _this._ref.markForCheck();
                    });
                };
                TranslatePipe.prototype.transform = function (query, args) {
                    var _this = this;
                    if (!query || query.length === 0) {
                        return query;
                    }
                    if (this.equals(query, this.lastKey) && this.equals(args, this.lastParams)) {
                        return this.value;
                    }
                    var interpolateParams;
                    if (args.length && args[0] !== null) {
                        if (typeof args[0] === 'string' && args[0].length) {
                            try {
                                interpolateParams = JSON.parse(args[0].replace(/(['"])?([a-zA-Z0-9_]+)(['"])?:/g, '"$2": '));
                            }
                            catch (e) {
                                throw new SyntaxError("Wrong parameter in TranslatePipe. Expected a valid Object, received: " + args[0]);
                            }
                        }
                        else if (typeof args[0] === 'object' && !Array.isArray(args[0])) {
                            interpolateParams = args[0];
                        }
                    }
                    this.lastKey = query;
                    this.lastParams = args;
                    this.updateValue(query, interpolateParams);
                    this._dispose();
                    this.onLangChange = this.translate.onLangChange.subscribe(function (event) {
                        _this.updateValue(query, interpolateParams);
                    });
                    return this.value;
                };
                TranslatePipe.prototype._dispose = function () {
                    if (lang_1.isPresent(this.onLangChange)) {
                        this.onLangChange.unsubscribe();
                        this.onLangChange = undefined;
                    }
                };
                TranslatePipe.prototype.ngOnDestroy = function () {
                    this._dispose();
                };
                TranslatePipe = __decorate([
                    core_1.Injectable(),
                    core_1.Pipe({
                        name: 'translate',
                        pure: false
                    }), 
                    __metadata('design:paramtypes', [translate_service_1.TranslateService, core_1.ChangeDetectorRef])
                ], TranslatePipe);
                return TranslatePipe;
            }());
            exports_1("TranslatePipe", TranslatePipe);
        }
    }
});
//# sourceMappingURL=translate.pipe.js.map