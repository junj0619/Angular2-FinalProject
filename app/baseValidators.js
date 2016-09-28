System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BaseValidators;
    return {
        setters:[],
        execute: function() {
            BaseValidators = (function () {
                function BaseValidators() {
                }
                BaseValidators.email = function (control) {
                    var regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                    var valid = regEx.test(control.value);
                    return valid ? null : { email: true };
                };
                return BaseValidators;
            }());
            exports_1("BaseValidators", BaseValidators);
        }
    }
});
//# sourceMappingURL=baseValidators.js.map