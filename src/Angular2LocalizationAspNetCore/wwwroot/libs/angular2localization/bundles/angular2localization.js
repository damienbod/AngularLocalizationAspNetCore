System.register("angular2localization/src/pipes/translate.pipe", ["@angular/core", "../services/locale.service", "../services/localization.service"], function(exports_1, context_1) {
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
      locale_service_1,
      localization_service_1;
  var TranslatePipe;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }, function(localization_service_1_1) {
      localization_service_1 = localization_service_1_1;
    }],
    execute: function() {
      TranslatePipe = (function() {
        function TranslatePipe(locale, localization) {
          this.locale = locale;
          this.localization = localization;
        }
        TranslatePipe.prototype.transform = function(key) {
          var _this = this;
          if (this.locale.getCurrentLanguage() != "" && this.locale.getCurrentLanguage() != this.localization.languageCode) {
            this.localization.updateTranslation();
          }
          if (this.localization.serviceState == localization_service_1.ServiceState.isReady) {
            if (this.key != key || this.value == "" || this.languageCode != this.localization.languageCode) {
              var formatKey = key.replace(/^\d+\b/, '');
              formatKey = formatKey.trim();
              this.localization.translate(formatKey).forEach(function(value) {
                _this.value = key.replace(formatKey, value);
              }).then(function() {
                _this.languageCode = _this.localization.languageCode;
                _this.key = key;
                return _this.value;
              });
            } else {
              return this.value;
            }
          } else {
            return this.value;
          }
        };
        TranslatePipe = __decorate([core_1.Pipe({
          name: 'translate',
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService, localization_service_1.LocalizationService])], TranslatePipe);
        return TranslatePipe;
      }());
      exports_1("TranslatePipe", TranslatePipe);
    }
  };
});

System.register("angular2localization/src/pipes/locale-date.pipe", ["@angular/core", "@angular/common/src/facade/lang", "@angular/common/src/facade/intl", "@angular/common/src/facade/collection", "@angular/common/src/pipes/invalid_pipe_argument_exception", "../services/locale.service"], function(exports_1, context_1) {
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
      locale_service_1;
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
    }],
    execute: function() {
      LocaleDatePipe = (function() {
        function LocaleDatePipe(locale) {
          this.locale = locale;
        }
        LocaleDatePipe.prototype.transform = function(value, pattern) {
          if (pattern === void 0) {
            pattern = 'mediumDate';
          }
          if (lang_1.isBlank(value))
            return null;
          if (!this.supports(value)) {
            throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(LocaleDatePipe, value);
          }
          if (this.value != value || this.localeDate == "" || this.defaultLocale != this.locale.getDefaultLocale()) {
            this.defaultLocale = this.locale.getDefaultLocale();
            this.value = value;
            if (lang_1.isNumber(value)) {
              value = lang_1.DateWrapper.fromMillis(value);
            }
            if (collection_1.StringMapWrapper.contains(LocaleDatePipe.ALIASES, pattern)) {
              pattern = collection_1.StringMapWrapper.get(LocaleDatePipe.ALIASES, pattern);
            }
            this.localeDate = intl_1.DateFormatter.format(value, this.defaultLocale, pattern);
          }
          return this.localeDate;
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
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocaleDatePipe);
        return LocaleDatePipe;
      }());
      exports_1("LocaleDatePipe", LocaleDatePipe);
    }
  };
});

System.register("angular2localization/src/pipes/locale-number.pipe", ["@angular/core", "@angular/common/src/facade/intl", "../services/locale-number", "../services/locale.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
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
      locale_number_1,
      locale_service_1;
  var LocaleDecimalPipe,
      LocalePercentPipe,
      LocaleCurrencyPipe;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(intl_1_1) {
      intl_1 = intl_1_1;
    }, function(locale_number_1_1) {
      locale_number_1 = locale_number_1_1;
    }, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }],
    execute: function() {
      LocaleDecimalPipe = (function(_super) {
        __extends(LocaleDecimalPipe, _super);
        function LocaleDecimalPipe(locale) {
          _super.call(this);
          this.locale = locale;
        }
        LocaleDecimalPipe.prototype.transform = function(value, digits) {
          if (digits === void 0) {
            digits = null;
          }
          if (this.value != value || this.localeDecimal == "" || this.defaultLocale != this.locale.getDefaultLocale()) {
            this.defaultLocale = this.locale.getDefaultLocale();
            this.value = value;
            this.localeDecimal = locale_number_1.LocaleNumber.format(this.defaultLocale, value, intl_1.NumberFormatStyle.Decimal, digits);
          }
          return this.localeDecimal;
        };
        LocaleDecimalPipe = __decorate([core_1.Pipe({
          name: 'localedecimal',
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocaleDecimalPipe);
        return LocaleDecimalPipe;
      }(locale_number_1.LocaleNumber));
      exports_1("LocaleDecimalPipe", LocaleDecimalPipe);
      LocalePercentPipe = (function(_super) {
        __extends(LocalePercentPipe, _super);
        function LocalePercentPipe(locale) {
          _super.call(this);
          this.locale = locale;
        }
        LocalePercentPipe.prototype.transform = function(value, digits) {
          if (digits === void 0) {
            digits = null;
          }
          if (this.value != value || this.localePercent == "" || this.defaultLocale != this.locale.getDefaultLocale()) {
            this.defaultLocale = this.locale.getDefaultLocale();
            this.value = value;
            this.localePercent = locale_number_1.LocaleNumber.format(this.defaultLocale, value, intl_1.NumberFormatStyle.Percent, digits);
          }
          return this.localePercent;
        };
        LocalePercentPipe = __decorate([core_1.Pipe({
          name: 'localepercent',
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocalePercentPipe);
        return LocalePercentPipe;
      }(locale_number_1.LocaleNumber));
      exports_1("LocalePercentPipe", LocalePercentPipe);
      LocaleCurrencyPipe = (function(_super) {
        __extends(LocaleCurrencyPipe, _super);
        function LocaleCurrencyPipe(locale) {
          _super.call(this);
          this.locale = locale;
        }
        LocaleCurrencyPipe.prototype.transform = function(value, symbolDisplay, digits) {
          if (symbolDisplay === void 0) {
            symbolDisplay = false;
          }
          if (digits === void 0) {
            digits = null;
          }
          if (this.value != value || this.localeCurrency == "" || this.currencyCode != this.locale.getCurrentCurrency() || this.defaultLocale != this.locale.getDefaultLocale()) {
            this.currencyCode = this.locale.getCurrentCurrency();
            this.defaultLocale = this.locale.getDefaultLocale();
            this.value = value;
            this.localeCurrency = locale_number_1.LocaleNumber.format(this.defaultLocale, value, intl_1.NumberFormatStyle.Currency, digits, this.currencyCode, symbolDisplay);
          }
          return this.localeCurrency;
        };
        LocaleCurrencyPipe = __decorate([core_1.Pipe({
          name: 'localecurrency',
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService])], LocaleCurrencyPipe);
        return LocaleCurrencyPipe;
      }(locale_number_1.LocaleNumber));
      exports_1("LocaleCurrencyPipe", LocaleCurrencyPipe);
    }
  };
});

System.register("angular2localization/src/services/locale-number", ["@angular/core", "@angular/common/src/facade/lang", "@angular/common/src/facade/exceptions", "@angular/common/src/facade/intl", "@angular/common/src/pipes/invalid_pipe_argument_exception"], function(exports_1, context_1) {
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
      exceptions_1,
      intl_1,
      invalid_pipe_argument_exception_1;
  var LocaleNumber;
  return {
    setters: [function(core_1_1) {
      core_1 = core_1_1;
    }, function(lang_1_1) {
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
        LocaleNumber = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], LocaleNumber);
        return LocaleNumber;
      }());
      exports_1("LocaleNumber", LocaleNumber);
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
        LocaleService.prototype.definePreferredCountry = function(defaultCountry) {
          var locale = this.getCookie("locale");
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
        LocaleService.prototype.setCurrentcurrency = function(currency) {
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

System.register("angular2localization/src/services/localization.service", ["@angular/core", "@angular/http", "rxjs/Observable", "rxjs/add/operator/map", "./locale.service"], function(exports_1, context_1) {
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
      locale_service_1;
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
          this.serviceState = ServiceState.isWaiting;
        }
        LocalizationService.prototype.addTranslation = function(language, translation) {
          this.translationData[language] = translation;
          this.serviceState = ServiceState.isReady;
          this.loadingMode = LoadingMode.Direct;
        };
        LocalizationService.prototype.translationProvider = function(prefix) {
          this.prefix = prefix;
          this.loadingMode = LoadingMode.Async;
        };
        LocalizationService.prototype.getTranslation = function() {
          var _this = this;
          this.translationData = {};
          this.serviceState = ServiceState.isLoading;
          var url = this.prefix + this.languageCode + '.json';
          this.http.get(url).map(function(res) {
            return res.json();
          }).subscribe(function(res) {
            _this.translationData[_this.languageCode] = res;
          }, function(error) {
            console.error("Localization service:", error);
          }, function() {
            _this.serviceState = ServiceState.isReady;
            console.log("Localization service:", "Http get method completed.");
          });
        };
        LocalizationService.prototype.getValue = function(key) {
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
        LocalizationService.prototype.translate = function(key) {
          var _this = this;
          return new Observable_1.Observable(function(observer) {
            var value = _this.getValue(key);
            observer.next(value);
            observer.complete();
          });
        };
        LocalizationService.prototype.updateTranslation = function() {
          this.languageCode = this.locale.getCurrentLanguage();
          if (this.loadingMode == LoadingMode.Async) {
            this.getTranslation();
          }
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

System.register("angular2localization/src/pipes/translate-array.pipe", ["@angular/core", "@angular/common/src/facade/lang", "@angular/common/src/facade/intl", "@angular/common/src/facade/collection", "@angular/common/src/pipes/invalid_pipe_argument_exception", "../services/locale-number", "../services/locale.service", "../services/localization.service"], function(exports_1, context_1) {
  "use strict";
  var __moduleName = context_1 && context_1.id;
  var __extends = (this && this.__extends) || function(d, b) {
    for (var p in b)
      if (b.hasOwnProperty(p))
        d[p] = b[p];
    function __() {
      this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  };
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
      locale_number_1,
      locale_service_1,
      localization_service_1;
  var TranslateArrayPipe;
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
    }, function(locale_number_1_1) {
      locale_number_1 = locale_number_1_1;
    }, function(locale_service_1_1) {
      locale_service_1 = locale_service_1_1;
    }, function(localization_service_1_1) {
      localization_service_1 = localization_service_1_1;
    }],
    execute: function() {
      TranslateArrayPipe = (function(_super) {
        __extends(TranslateArrayPipe, _super);
        function TranslateArrayPipe(locale, localization) {
          _super.call(this);
          this.locale = locale;
          this.localization = localization;
        }
        TranslateArrayPipe.prototype.transform = function(list, args, keyName, order, search) {
          if (list == null || args == null)
            return null;
          if (this.locale.getCurrentLanguage() != "" && this.locale.getCurrentLanguage() != this.localization.languageCode) {
            this.localization.updateTranslation();
          }
          if (this.localization.serviceState == localization_service_1.ServiceState.isReady) {
            var equals = this.compare(this.storedList, list);
            if ((equals == false || this.translatedList == null || this.languageCode != this.localization.languageCode || this.currencyCode != this.locale.getCurrentCurrency() || this.defaultLocale != this.locale.getDefaultLocale())) {
              this.storedList = new Array();
              this.storedList = list;
              this.languageCode = this.localization.languageCode;
              this.currencyCode = this.locale.getCurrentCurrency();
              this.defaultLocale = this.locale.getDefaultLocale();
              var workList = new Array();
              workList = this.deepCopy(list);
              var keys = Object.keys(list[0]);
              var i = 0;
              for (var _i = 0,
                  keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                switch (args[key]['pipe']) {
                  case 'translate':
                    workList = this.tranlate(workList, key);
                    break;
                  case 'localedate':
                    workList = this.toLocaleDate(workList, key, args[key]['format']);
                    break;
                  case 'localedecimal':
                    workList = this.toLocaleDecimal(workList, key, args[key]['digitInfo']);
                    break;
                  case 'localepercent':
                    workList = this.toLocalePercent(workList, key, args[key]['digitInfo']);
                    break;
                  case 'localecurrency':
                    workList = this.toLocaleCurrency(workList, key, args[key]['symbolDisplay'], args[key]['digitInfo']);
                    break;
                }
                i++;
              }
              this.translatedList = new Array();
              this.translatedList = workList;
            }
            return this.translatedList;
          } else {
            return this.translatedList;
          }
        };
        TranslateArrayPipe.prototype.supports = function(obj) {
          return lang_1.isDate(obj) || lang_1.isNumber(obj);
        };
        TranslateArrayPipe.prototype.tranlate = function(workList, key) {
          for (var _i = 0,
              workList_1 = workList; _i < workList_1.length; _i++) {
            var item = workList_1[_i];
            var value = this.localization.getValue(item[key]);
            item[key] = value;
          }
          return workList;
        };
        TranslateArrayPipe.prototype.toLocaleDate = function(workList, key, pattern) {
          if (pattern === void 0) {
            pattern = 'mediumDate';
          }
          for (var _i = 0,
              workList_2 = workList; _i < workList_2.length; _i++) {
            var item = workList_2[_i];
            if (lang_1.isBlank(item[key]))
              return null;
            if (!this.supports(item[key])) {
              throw new invalid_pipe_argument_exception_1.InvalidPipeArgumentException(TranslateArrayPipe, item[key]);
            }
            if (lang_1.isNumber(item[key])) {
              item[key] = lang_1.DateWrapper.fromMillis(item[key]);
            }
            if (collection_1.StringMapWrapper.contains(TranslateArrayPipe.ALIASES, pattern)) {
              pattern = collection_1.StringMapWrapper.get(TranslateArrayPipe.ALIASES, pattern);
            }
            var value = intl_1.DateFormatter.format(item[key], this.defaultLocale, pattern);
            item[key] = value;
          }
          return workList;
        };
        TranslateArrayPipe.prototype.toLocaleDecimal = function(workList, key, digits) {
          if (digits === void 0) {
            digits = null;
          }
          for (var _i = 0,
              workList_3 = workList; _i < workList_3.length; _i++) {
            var item = workList_3[_i];
            var value = locale_number_1.LocaleNumber.format(this.defaultLocale, item[key], intl_1.NumberFormatStyle.Decimal, digits);
            item[key] = value;
          }
          return workList;
        };
        TranslateArrayPipe.prototype.toLocalePercent = function(workList, key, digits) {
          if (digits === void 0) {
            digits = null;
          }
          for (var _i = 0,
              workList_4 = workList; _i < workList_4.length; _i++) {
            var item = workList_4[_i];
            var value = locale_number_1.LocaleNumber.format(this.defaultLocale, item[key], intl_1.NumberFormatStyle.Percent, digits);
            item[key] = value;
          }
          return workList;
        };
        TranslateArrayPipe.prototype.toLocaleCurrency = function(workList, key, symbolDisplay, digits) {
          if (symbolDisplay === void 0) {
            symbolDisplay = false;
          }
          if (digits === void 0) {
            digits = null;
          }
          for (var _i = 0,
              workList_5 = workList; _i < workList_5.length; _i++) {
            var item = workList_5[_i];
            var value = locale_number_1.LocaleNumber.format(this.defaultLocale, item[key], intl_1.NumberFormatStyle.Currency, digits, this.currencyCode, symbolDisplay);
            item[key] = value;
          }
          return workList;
        };
        TranslateArrayPipe.prototype.compare = function(x, y) {
          if (x == null || y == null)
            return false;
          if (x.length != y.length)
            return false;
          var xKeys = Object.keys(x[0]);
          var yKeys = Object.keys(y[0]);
          if (xKeys != yKeys)
            return false;
          for (var i; i < x.length; i++) {
            for (var j; j < xKeys.length; i++) {
              if (x[i][j] != y[i][j]) {
                return false;
              }
            }
          }
          return true;
        };
        TranslateArrayPipe.prototype.deepCopy = function(x) {
          var y = new Array();
          var keys = Object.keys(x[0]);
          for (var _i = 0,
              x_1 = x; _i < x_1.length; _i++) {
            var item = x_1[_i];
            var copyOfItem = {};
            for (var _a = 0,
                keys_2 = keys; _a < keys_2.length; _a++) {
              var key = keys_2[_a];
              copyOfItem[key] = item[key];
            }
            y.push(copyOfItem);
          }
          return y;
        };
        TranslateArrayPipe.ALIASES = {
          'medium': 'yMMMdjms',
          'short': 'yMdjm',
          'fullDate': 'yMMMMEEEEd',
          'longDate': 'yMMMMd',
          'mediumDate': 'yMMMd',
          'shortDate': 'yMd',
          'mediumTime': 'jms',
          'shortTime': 'jm'
        };
        TranslateArrayPipe = __decorate([core_1.Pipe({
          name: 'translatearray',
          pure: false
        }), core_1.Injectable(), __metadata('design:paramtypes', [locale_service_1.LocaleService, localization_service_1.LocalizationService])], TranslateArrayPipe);
        return TranslateArrayPipe;
      }(locale_number_1.LocaleNumber));
      exports_1("TranslateArrayPipe", TranslateArrayPipe);
    }
  };
});

System.register("angular2localization/angular2localization", ["./src/services/localization.service", "./src/services/locale.service", "./src/services/locale-number", "./src/pipes/translate.pipe", "./src/pipes/locale-date.pipe", "./src/pipes/locale-number.pipe", "./src/pipes/translate-array.pipe"], function(exports_1, context_1) {
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
    }, function(locale_number_1_1) {
      exportStar_1(locale_number_1_1);
    }, function(translate_pipe_1_1) {
      exportStar_1(translate_pipe_1_1);
    }, function(locale_date_pipe_1_1) {
      exportStar_1(locale_date_pipe_1_1);
    }, function(locale_number_pipe_1_1) {
      exportStar_1(locale_number_pipe_1_1);
    }, function(translate_array_pipe_1_1) {
      exportStar_1(translate_array_pipe_1_1);
    }],
    execute: function() {}
  };
});
