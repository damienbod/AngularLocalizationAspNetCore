System.register("angular2localization/src/services/locale", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var Locale;
  return {
    setters: [],
    execute: function() {
      Locale = (function() {
        function Locale(locale, localization) {
          this.locale = locale;
          this.localization = localization;
        }
        Object.defineProperty(Locale.prototype, "lang", {
          get: function() {
            return this.localization.languageCode;
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Locale.prototype, "defaultLocale", {
          get: function() {
            return this.locale.getDefaultLocale();
          },
          enumerable: true,
          configurable: true
        });
        Object.defineProperty(Locale.prototype, "currency", {
          get: function() {
            return this.locale.getCurrentCurrency();
          },
          enumerable: true,
          configurable: true
        });
        return Locale;
      }());
      exports_1("Locale", Locale);
    }
  };
});

System.register("angular2localization/src/services/localization.service", ["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "./locale.service", "../services/Intl-support"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      http_1,
      Observable_1,
      locale_service_1,
      Intl_support_1;
  var LocalizationService,
      ServiceState,
      LoadingMode;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(http_1_1) {
      http_1 = http_1_1;
    }, function(Observable_1_1) {
      Observable_1 = Observable_1_1;
    }, function(_1) {}, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }, function(Intl_support_1_1) {
      Intl_support_1 = Intl_support_1_1;
    }],
    execute: function() {
      LocalizationService = (function() {
        function LocalizationService(http, locale) {
          this.http = http;
          this.locale = locale;
          this.translationData = {};
          this.prefix = "";
          this.loadingMode = LoadingMode.Unknown;
          this.languageCode = "";
          this.loadingMode = LoadingMode.Direct;
          this.serviceState = ServiceState.isWaiting;
        }
        LocalizationService.prototype.addTranslation = function(language, translation) {
          this.translationData[language] = translation;
        };
        LocalizationService.prototype.translationProvider = function(prefix) {
          this.prefix = prefix;
          this.loadingMode = LoadingMode.Async;
        };
        LocalizationService.prototype.getTranslation = function() {
          var _this = this;
          this.translationData = {};
          this.serviceState = ServiceState.isLoading;
          var url = this.prefix + this.locale.getCurrentLanguage() + '.json';
          this.http.get(url).map(function(res) {
            return res.json();
          }).subscribe(function(res) {
            _this.translationData[_this.locale.getCurrentLanguage()] = res;
          }, function(error) {
            console.error("Localization service:", error);
          }, function() {
            _this.languageCode = _this.locale.getCurrentLanguage();
            _this.serviceState = ServiceState.isReady;
          });
        };
        LocalizationService.prototype.translate = function(key) {
          var value;
          if (this.translationData[this.languageCode] != null) {
            var translation = this.translationData[this.languageCode];
            value = translation[key];
          }
          if (value == null || value == "") {
            value = key;
          }
          return value;
        };
        LocalizationService.prototype.translateAsync = function(key) {
          var _this = this;
          return new Observable_1.Observable(function(observer) {
            var value = _this.translate(key);
            observer.next(value);
            observer.complete();
          });
        };
        LocalizationService.prototype.updateTranslation = function() {
          if (this.locale.getCurrentLanguage() != "" && this.locale.getCurrentLanguage() != this.languageCode) {
            if (this.loadingMode == LoadingMode.Async) {
              this.getTranslation();
            } else {
              this.languageCode = this.locale.getCurrentLanguage();
              this.serviceState = ServiceState.isReady;
            }
          }
        };
        LocalizationService.prototype.compare = function(key1, key2, extension, options) {
          if (Intl_support_1.IntlSupport.Collator(this.languageCode) == false) {
            return 0;
          }
          var value1 = this.translate(key1);
          var value2 = this.translate(key2);
          ;
          var locale = this.addExtension(this.languageCode, extension);
          return new Intl.Collator(locale).compare(value1, value2);
        };
        LocalizationService.prototype.sort = function(list, keyName, order, extension, options) {
          if (list == null || keyName == null || Intl_support_1.IntlSupport.Collator(this.languageCode) == false)
            return list;
          for (var _i = 0,
              list_1 = list; _i < list_1.length; _i++) {
            var item = list_1[_i];
            var value = this.translate(item[keyName]);
            var translated = keyName.concat("Translated");
            item[translated] = value;
          }
          var locale = this.addExtension(this.languageCode, extension);
          var collator = new Intl.Collator(locale, options);
          list.sort(function(a, b) {
            return collator.compare(a[translated], b[translated]);
          });
          var index = list.indexOf(translated, 0);
          if (index > -1) {
            list.splice(index, 1);
          }
          if (order != null && order == 'desc') {
            list.reverse();
          }
          return list;
        };
        LocalizationService.prototype.sortAsync = function(list, keyName, order, extension, options) {
          var _this = this;
          return new Observable_1.Observable(function(observer) {
            observer.next(_this.sort(list, keyName, order, extension, options));
            observer.complete();
          });
        };
        LocalizationService.prototype.search = function(s, list, keyNames, options) {
          var _this = this;
          if (options === void 0) {
            options = {usage: 'search'};
          }
          if (list == null || keyNames == null || s == "" || Intl_support_1.IntlSupport.Collator(this.languageCode) == false)
            return list;
          var translated = new Array();
          var i = 0;
          for (var i = 0; i < keyNames.length; i++) {
            translated.push(keyNames[i].concat("Translated"));
            for (var _i = 0,
                list_2 = list; _i < list_2.length; _i++) {
              var item = list_2[_i];
              var value = this.translate(item[keyNames[i]]);
              item[translated[i]] = value;
            }
          }
          var locale = this.languageCode;
          var collator = new Intl.Collator(locale, options);
          var matches = list.filter(function(v) {
            var found = false;
            for (var i = 0; i < translated.length; i++) {
              if (_this.match(v[translated[i]], s, collator)) {
                found = true;
                break;
              }
            }
            return found;
          });
          for (var i = 0; i < translated.length; i++) {
            var index = matches.indexOf(translated[i], 0);
            if (index > -1) {
              matches.splice(index, 1);
            }
          }
          return matches;
        };
        LocalizationService.prototype.searchAsync = function(s, list, keyNames, options) {
          var _this = this;
          if (options === void 0) {
            options = {usage: 'search'};
          }
          if (list == null)
            return null;
          if (keyNames == null || s == "" || Intl_support_1.IntlSupport.Collator(this.languageCode) == false)
            return new Observable_1.Observable(function(observer) {
              for (var _i = 0,
                  list_3 = list; _i < list_3.length; _i++) {
                var item = list_3[_i];
                observer.next(item);
              }
              observer.complete();
            });
          return new Observable_1.Observable(function(observer) {
            var translated = new Array();
            var i = 0;
            for (var i = 0; i < keyNames.length; i++) {
              translated.push(keyNames[i].concat("Translated"));
              for (var _i = 0,
                  list_4 = list; _i < list_4.length; _i++) {
                var item = list_4[_i];
                var value = _this.translate(item[keyNames[i]]);
                item[translated[i]] = value;
              }
            }
            var locale = _this.languageCode;
            var collator = new Intl.Collator(locale, options);
            for (var _a = 0,
                list_5 = list; _a < list_5.length; _a++) {
              var v = list_5[_a];
              for (var i = 0; i < translated.length; i++) {
                if (_this.match(v[translated[i]], s, collator)) {
                  observer.next(v);
                  break;
                }
              }
            }
            for (var i = 0; i < translated.length; i++) {
              var index = list.indexOf(translated[i], 0);
              if (index > -1) {
                list.splice(index, 1);
              }
            }
            ;
            observer.complete();
          });
        };
        LocalizationService.prototype.addExtension = function(locale, extension) {
          if (extension != null && extension != "") {
            locale = locale + "-" + extension;
          }
          return locale;
        };
        LocalizationService.prototype.match = function(v, s, collator) {
          var vLength = v.length;
          var sLength = s.length;
          if (sLength > vLength)
            return false;
          if (sLength == vLength) {
            return collator.compare(v, s) === 0;
          }
          var found = false;
          for (var i = 0; i < vLength - (sLength - 1); i++) {
            var str = v.substr(i, sLength);
            if (collator.compare(str, s) === 0) {
              found = true;
              break;
            }
          }
          return found;
        };
        LocalizationService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [http_1.Http, locale_service_1.LocaleService])], LocalizationService);
        return LocalizationService;
      }());
      exports_1("LocalizationService", LocalizationService);
      (function(ServiceState) {
        ServiceState[ServiceState["isReady"] = 0] = "isReady";
        ServiceState[ServiceState["isLoading"] = 1] = "isLoading";
        ServiceState[ServiceState["isWaiting"] = 2] = "isWaiting";
      })(ServiceState || (ServiceState = {}));
      exports_1("ServiceState", ServiceState);
      (function(LoadingMode) {
        LoadingMode[LoadingMode["Unknown"] = 0] = "Unknown";
        LoadingMode[LoadingMode["Direct"] = 1] = "Direct";
        LoadingMode[LoadingMode["Async"] = 2] = "Async";
      })(LoadingMode || (LoadingMode = {}));
      exports_1("LoadingMode", LoadingMode);
    }
  };
});

System.register("angular2localization/src/pipes/translate.pipe", ["@angular/core", "../services/localization.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      localization_service_1;
  var TranslatePipe;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(localization_service_1_1) {
      localization_service_1 = localization_service_1_1;
    }],
    execute: function() {
      TranslatePipe = (function() {
        function TranslatePipe(localization) {
          this.localization = localization;
        }
        TranslatePipe.prototype.transform = function(key, lang) {
          if (this.localization.serviceState == localization_service_1.ServiceState.isReady) {
            var formatKey = key.replace(/^\d+\b/, '');
            formatKey = formatKey.trim();
            var value = this.localization.translate(formatKey);
            return key.replace(formatKey, value);
          }
        };
        TranslatePipe = __decorate([core_1.Pipe({
          name: 'translate',
          pure: true
        }), core_1.Injectable(), __metadata('design:paramtypes', [localization_service_1.LocalizationService])], TranslatePipe);
        return TranslatePipe;
      }());
      exports_1("TranslatePipe", TranslatePipe);
    }
  };
});

System.register("angular2localization/src/pipes/locale-date.pipe", ["@angular/core", "@angular/common/src/facade/lang", "@angular/common/src/facade/intl", "@angular/common/src/facade/collection", "@angular/common/src/pipes/invalid_pipe_argument_exception", "../services/locale.service", "../services/Intl-support"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      lang_1,
      intl_1,
      collection_1,
      invalid_pipe_argument_exception_1,
      locale_service_1,
      Intl_support_1;
  var LocaleDatePipe;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(lang_1_1) {
      lang_1 = lang_1_1;
    }, function(intl_1_1) {
      intl_1 = intl_1_1;
    }, function(collection_1_1) {
      collection_1 = collection_1_1;
    }, function(invalid_pipe_argument_exception_1_1) {
      invalid_pipe_argument_exception_1 = invalid_pipe_argument_exception_1_1;
    }, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }, function(Intl_support_1_1) {
      Intl_support_1 = Intl_support_1_1;
    }],
    execute: function() {
      LocaleDatePipe = (function() {
        function LocaleDatePipe(locale) {
          this.locale = locale;
        }
        LocaleDatePipe.prototype.transform = function(value, defaultLocale, pattern) {
          if (pattern === void 0) {
            pattern = 'mediumDate';
          }
          if (lang_1.isBlank(value))
            return null;
          if (!this.supports(value)) {
            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(LocaleDatePipe, value);
          }
          if (lang_1.isNumber(value)) {
            value = lang_1.DateWrapper.fromMillis(value);
          }
          if (Intl_support_1.IntlSupport.DateTimeFormat(defaultLocale) == true) {
            if (collection_1.StringMapWrapper.contains(LocaleDatePipe.ALIASES, pattern)) {
              pattern = collection_1.StringMapWrapper.get(LocaleDatePipe.ALIASES, pattern);
            }
            return intl_1.DateFormatter.format(value, defaultLocale, pattern);
          }
          return value;
        };
        LocaleDatePipe.prototype.supports = function(obj) {
          return lang_1.isDate(obj) || lang_1.isNumber(obj);
        };
        LocaleDatePipe.ALIASES = {
          'medium': 'yMMMdjms',
          'short': 'yMdjm',
          'fullDate': 'yMMMMEEEEd',
          'longDate': 'yMMMMd',
          'mediumDate': 'yMMMd',
          'shortDate': 'yMd',
          'mediumTime': 'jms',
          'shortTime': 'jm'
        };
        LocaleDatePipe = __decorate([core_1.Pipe({
          name: 'localedate',
          pure: true
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocaleDatePipe);
        return LocaleDatePipe;
      }());
      exports_1("LocaleDatePipe", LocaleDatePipe);
    }
  };
});

System.register("angular2localization/src/services/locale.service", ["@angular/core"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1;
  var LocaleService;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }],
    execute: function() {
      LocaleService = (function() {
        function LocaleService() {
          this.languageCodeChanged = new core_1.EventEmitter();
          this.countryCodeChanged = new core_1.EventEmitter();
          this.currencyCodeChanged = new core_1.EventEmitter();
          this.languageCodes = [];
          this.languageCode = "";
          this.countryCode = "";
          this.currencyCode = "";
          this.defaultLocale = "";
        }
        LocaleService.prototype.addLanguage = function(language) {
          this.languageCodes.push(language);
        };
        LocaleService.prototype.definePreferredLanguage = function(defaultLanguage, expiry) {
          this.expiry = expiry;
          var locale = this.getCookie("locale");
          this.languageCode = locale.substring(0, 2);
          if (this.languageCode == "") {
            var browserLanguage = navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage;
            browserLanguage = browserLanguage.substring(0, 2);
            if (this.languageCodes.length > 0 && this.languageCodes.indexOf(browserLanguage) != -1) {
              this.languageCode = browserLanguage;
            } else {
              this.languageCode = defaultLanguage.toLowerCase();
            }
            this.setDefaultLocale();
            if (this.languageCodes.length > 0) {
              this.setCookie("locale", this.defaultLocale, this.expiry);
            }
          } else {
            this.setDefaultLocale();
          }
        };
        LocaleService.prototype.definePreferredLocale = function(defaultLanguage, defaultCountry, expiry) {
          this.expiry = expiry;
          var locale = this.getCookie("locale");
          this.languageCode = locale.substring(0, 2);
          if (this.languageCode == "") {
            this.languageCode = defaultLanguage.toLowerCase();
            this.countryCode = defaultCountry.toUpperCase();
            this.setDefaultLocale();
            if (this.languageCodes.length > 0) {
              this.setCookie("locale", this.defaultLocale, this.expiry);
            }
          } else {
            this.countryCode = locale.substring(3, 5);
            if (this.countryCode == "") {
              this.countryCode = defaultCountry.toUpperCase();
              this.setDefaultLocale();
              if (this.languageCodes.length > 0) {
                this.setCookie("locale", this.defaultLocale, this.expiry);
              }
            } else {
              this.setDefaultLocale();
            }
          }
        };
        LocaleService.prototype.definePreferredCurrency = function(defaultCurrency) {
          this.currencyCode = this.getCookie("currency");
          if (this.currencyCode == "") {
            this.currencyCode = defaultCurrency.toUpperCase();
            if (this.languageCodes.length > 0) {
              this.setCookie("currency", this.currencyCode, this.expiry);
            }
          }
        };
        LocaleService.prototype.getCurrentLanguage = function() {
          return this.languageCode;
        };
        LocaleService.prototype.getCurrentCountry = function() {
          return this.countryCode;
        };
        LocaleService.prototype.getCurrentCurrency = function() {
          return this.currencyCode;
        };
        LocaleService.prototype.setCurrentLanguage = function(language) {
          language = language.toLowerCase();
          if (this.languageCode != language) {
            this.languageCode = language;
            this.setDefaultLocale();
            this.setCookie("locale", this.defaultLocale, this.expiry);
            this.languageCodeChanged.emit(language);
          }
        };
        LocaleService.prototype.setCurrentCountry = function(country) {
          country = country.toUpperCase();
          if (this.countryCode != country) {
            this.countryCode = country;
            this.setDefaultLocale();
            this.setCookie("locale", this.defaultLocale, this.expiry);
            this.countryCodeChanged.emit(country);
          }
        };
        LocaleService.prototype.setCurrentLocale = function(language, country) {
          language = language.toLowerCase();
          country = country.toUpperCase();
          if (this.languageCode != language || this.countryCode != country) {
            this.languageCode = language;
            this.countryCode = country;
            this.setDefaultLocale();
            this.setCookie("locale", this.defaultLocale, this.expiry);
            this.countryCodeChanged.emit(country);
            this.languageCodeChanged.emit(language);
          }
        };
        LocaleService.prototype.setCurrentCurrency = function(currency) {
          currency = currency.toUpperCase();
          if (this.currencyCode != currency) {
            this.currencyCode = currency;
            this.setCookie("currency", this.currencyCode, this.expiry);
            this.currencyCodeChanged.emit(currency);
          }
        };
        LocaleService.prototype.getDefaultLocale = function() {
          return this.defaultLocale;
        };
        LocaleService.prototype.setDefaultLocale = function() {
          this.defaultLocale = this.languageCode;
          if (this.countryCode != "") {
            this.defaultLocale = this.defaultLocale + "-" + this.countryCode;
          }
        };
        LocaleService.prototype.setCookie = function(name, value, days) {
          if (days != null) {
            var expirationDate = new Date();
            expirationDate.setTime(expirationDate.getTime() + (days * 24 * 60 * 60 * 1000));
            var expires = "; expires=" + expirationDate.toUTCString();
          } else {
            var expires = "";
          }
          document.cookie = name + "=" + value + expires + "; path=/";
        };
        LocaleService.prototype.getCookie = function(name) {
          name += "=";
          var ca = document.cookie.split(';');
          for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
            }
          }
          return "";
        };
        __decorate([core_1.Output(), __metadata('design:type', Object)], LocaleService.prototype, "languageCodeChanged", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], LocaleService.prototype, "countryCodeChanged", void 0);
        __decorate([core_1.Output(), __metadata('design:type', Object)], LocaleService.prototype, "currencyCodeChanged", void 0);
        LocaleService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], LocaleService);
        return LocaleService;
      }());
      exports_1("LocaleService", LocaleService);
    }
  };
});

System.register("angular2localization/src/services/locale-number", ["@angular/common/src/facade/lang", "@angular/common/src/facade/exceptions", "@angular/common/src/facade/intl", "@angular/common/src/pipes/invalid_pipe_argument_exception"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var lang_1,
      exceptions_1,
      intl_1,
      invalid_pipe_argument_exception_1;
  var LocaleNumber;
  return {
    setters: [function(lang_1_1) {
      lang_1 = lang_1_1;
    }, function(exceptions_1_1) {
      exceptions_1 = exceptions_1_1;
    }, function(intl_1_1) {
      intl_1 = intl_1_1;
    }, function(invalid_pipe_argument_exception_1_1) {
      invalid_pipe_argument_exception_1 = invalid_pipe_argument_exception_1_1;
    }],
    execute: function() {
      LocaleNumber = (function() {
        function LocaleNumber() {}
        LocaleNumber.format = function(defaultLocale, value, style, digits, currency, currencyAsSymbol) {
          if (currency === void 0) {
            currency = null;
          }
          if (currencyAsSymbol === void 0) {
            currencyAsSymbol = false;
          }
          if (lang_1.isBlank(value))
            return null;
          if (!lang_1.isNumber(value)) {
            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(LocaleNumber, value);
          }
          var minInt = 1,
              minFraction = 0,
              maxFraction = 3;
          var re = lang_1.RegExpWrapper.create('^(\\d+)?\\.((\\d+)(\\-(\\d+))?)?$');
          if (lang_1.isPresent(digits)) {
            var parts = lang_1.RegExpWrapper.firstMatch(re, digits);
            if (lang_1.isBlank(parts)) {
              throw new exceptions_1.BaseException(digits + " is not a valid digit info for number pipes");
            }
            if (lang_1.isPresent(parts[1])) {
              minInt = lang_1.NumberWrapper.parseIntAutoRadix(parts[1]);
            }
            if (lang_1.isPresent(parts[3])) {
              minFraction = lang_1.NumberWrapper.parseIntAutoRadix(parts[3]);
            }
            if (lang_1.isPresent(parts[5])) {
              maxFraction = lang_1.NumberWrapper.parseIntAutoRadix(parts[5]);
            }
          }
          return intl_1.NumberFormatter.format(value, defaultLocale, style, {
            minimumIntegerDigits: minInt,
            minimumFractionDigits: minFraction,
            maximumFractionDigits: maxFraction,
            currency: currency,
            currencyAsSymbol: currencyAsSymbol
          });
        };
        return LocaleNumber;
      }());
      exports_1("LocaleNumber", LocaleNumber);
    }
  };
});

System.register("angular2localization/src/services/Intl-support", [], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var IntlSupport;
  return {
    setters: [],
    execute: function() {
      IntlSupport = (function() {
        function IntlSupport() {}
        IntlSupport.DateTimeFormat = function(defaultLocale) {
          try {
            new Intl.DateTimeFormat(defaultLocale).format(new Date());
          } catch (e) {
            return false;
          }
          return true;
        };
        IntlSupport.NumberFormat = function(defaultLocale) {
          try {
            var n = 0;
            new Intl.NumberFormat(defaultLocale).format(n);
          } catch (e) {
            return false;
          }
          return true;
        };
        IntlSupport.Collator = function(lang) {
          try {
            new Intl.Collator(lang);
          } catch (e) {
            return false;
          }
          return true;
        };
        return IntlSupport;
      }());
      exports_1("IntlSupport", IntlSupport);
    }
  };
});

System.register("angular2localization/src/pipes/locale-number.pipe", ["@angular/core", "@angular/common/src/facade/intl", "../services/locale.service", "../services/locale-number", "../services/Intl-support"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1,
      intl_1,
      locale_service_1,
      locale_number_1,
      Intl_support_1;
  var LocaleDecimalPipe,
      LocalePercentPipe,
      LocaleCurrencyPipe;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(intl_1_1) {
      intl_1 = intl_1_1;
    }, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }, function(locale_number_1_1) {
      locale_number_1 = locale_number_1_1;
    }, function(Intl_support_1_1) {
      Intl_support_1 = Intl_support_1_1;
    }],
    execute: function() {
      LocaleDecimalPipe = (function() {
        function LocaleDecimalPipe(locale) {
          this.locale = locale;
        }
        LocaleDecimalPipe.prototype.transform = function(value, defaultLocale, digits) {
          if (digits === void 0) {
            digits = null;
          }
          if (Intl_support_1.IntlSupport.NumberFormat(defaultLocale) == true) {
            return locale_number_1.LocaleNumber.format(defaultLocale, value, intl_1.NumberFormatStyle.Decimal, digits);
          }
          return value;
        };
        LocaleDecimalPipe = __decorate([core_1.Pipe({
          name: 'localedecimal',
          pure: true
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocaleDecimalPipe);
        return LocaleDecimalPipe;
      }());
      exports_1("LocaleDecimalPipe", LocaleDecimalPipe);
      LocalePercentPipe = (function() {
        function LocalePercentPipe(locale) {
          this.locale = locale;
        }
        LocalePercentPipe.prototype.transform = function(value, defaultLocale, digits) {
          if (digits === void 0) {
            digits = null;
          }
          if (Intl_support_1.IntlSupport.NumberFormat(defaultLocale) == true) {
            return locale_number_1.LocaleNumber.format(defaultLocale, value, intl_1.NumberFormatStyle.Percent, digits);
          }
          return value;
        };
        LocalePercentPipe = __decorate([core_1.Pipe({
          name: 'localepercent',
          pure: true
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocalePercentPipe);
        return LocalePercentPipe;
      }());
      exports_1("LocalePercentPipe", LocalePercentPipe);
      LocaleCurrencyPipe = (function() {
        function LocaleCurrencyPipe(locale) {
          this.locale = locale;
        }
        LocaleCurrencyPipe.prototype.transform = function(value, defaultLocale, currency, symbolDisplay, digits) {
          if (symbolDisplay === void 0) {
            symbolDisplay = false;
          }
          if (digits === void 0) {
            digits = null;
          }
          if (Intl_support_1.IntlSupport.NumberFormat(defaultLocale) == true) {
            return locale_number_1.LocaleNumber.format(defaultLocale, value, intl_1.NumberFormatStyle.Currency, digits, currency, symbolDisplay);
          }
          return value + " " + currency;
        };
        LocaleCurrencyPipe = __decorate([core_1.Pipe({
          name: 'localecurrency',
          pure: true
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocaleCurrencyPipe);
        return LocaleCurrencyPipe;
      }());
      exports_1("LocaleCurrencyPipe", LocaleCurrencyPipe);
    }
  };
});

System.register("angular2localization/angular2localization", ["./src/services/localization.service", "./src/services/locale.service", "./src/services/locale", "./src/services/locale-number", "./src/services/Intl-support", "./src/pipes/translate.pipe", "./src/pipes/locale-date.pipe", "./src/pipes/locale-number.pipe"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  function exportStar_1(m) {
    var exports = {};
    for (var n in m) {
      if (n !== "default")
        exports[n] = m[n];
    }
    exports_1(exports);
  }
  return {
    setters: [function(localization_service_1_1) {
      exportStar_1(localization_service_1_1);
    }, function(locale_service_1_1) {
      exportStar_1(locale_service_1_1);
    }, function(locale_1_1) {
      exportStar_1(locale_1_1);
    }, function(locale_number_1_1) {
      exportStar_1(locale_number_1_1);
    }, function(Intl_support_1_1) {
      exportStar_1(Intl_support_1_1);
    }, function(translate_pipe_1_1) {
      exportStar_1(translate_pipe_1_1);
    }, function(locale_date_pipe_1_1) {
      exportStar_1(locale_date_pipe_1_1);
    }, function(locale_number_pipe_1_1) {
      exportStar_1(locale_number_pipe_1_1);
    }],
    execute: function() {}
  };
});
