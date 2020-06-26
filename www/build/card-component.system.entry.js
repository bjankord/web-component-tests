System.register(['./index-abf50da2.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Card = exports('card_component', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                class_1.prototype.render = function () {
                    return (h("p", null, "My name is ", this.name));
                };
                return class_1;
            }()));
        }
    };
});
