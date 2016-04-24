System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Parser;
    return {
        setters:[],
        execute: function() {
            Parser = (function () {
                function Parser() {
                    this.templateMatcher = /{{\s?([^{}\s]*)\s?}}/g;
                }
                Parser.prototype.interpolate = function (expr, params) {
                    var _this = this;
                    if (typeof expr !== 'string' || !params) {
                        return expr;
                    }
                    return expr.replace(this.templateMatcher, function (substring, b) {
                        var r = _this.getValue(params, b);
                        return typeof r !== 'undefined' ? r : substring;
                    });
                };
                Parser.prototype.getValue = function (target, key) {
                    var keys = key.split('.');
                    key = '';
                    do {
                        key += keys.shift();
                        if (target[key] && (typeof target[key] === 'object' || !keys.length)) {
                            target = target[key];
                            key = '';
                        }
                        else if (!keys.length) {
                            target = undefined;
                        }
                        else {
                            key += '.';
                        }
                    } while (keys.length);
                    return target;
                };
                return Parser;
            }());
            exports_1("Parser", Parser);
        }
    }
});
//# sourceMappingURL=translate.parser.js.map