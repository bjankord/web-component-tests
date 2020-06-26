System.register(['./index-abf50da2.system.js', './app-globals-420f29da.system.js'], function () {
    'use strict';
    var bootstrapLazy, patchBrowser, globalScripts;
    return {
        setters: [function (module) {
                bootstrapLazy = module.b;
            }, function (module) {
                patchBrowser = module.p;
                globalScripts = module.g;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globalScripts();
                return bootstrapLazy([["button-component.system", [[4, "button-component", { "text": [1] }]]], ["card-component.system", [[0, "card-component", { "name": [1] }]]]], options);
            });
        }
    };
});
