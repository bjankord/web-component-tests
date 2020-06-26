import { b as bootstrapLazy } from './index-f56d61f5.js';
import { p as patchBrowser, g as globalScripts } from './app-globals-89f16005.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["button-component",[[4,"button-component",{"text":[1]}]]],["card-component",[[0,"card-component",{"name":[1]}]]]], options);
});
