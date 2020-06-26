System.register(['./index-abf50da2.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var Button = exports('button_component', /** @class */ (function () {
                function class_1(hostRef) {
                    registerInstance(this, hostRef);
                }
                // Slot is similar to children in react
                class_1.prototype.render = function () {
                    return (h("button", null, h("span", null, "1"), h("slot", null), h("span", null, "2"), this.text));
                };
                return class_1;
            }()));
        }
    };
});
