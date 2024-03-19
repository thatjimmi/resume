import { renderers } from './renderers.mjs';
import { manifest } from './manifest_D3Iy4jRE.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/scripts_CF4VFUXN.mjs');
const _page1 = () => import('./chunks/styles_OiEViPi2.mjs');
const _page2 = () => import('./chunks/generic_CWjPyoFF.mjs');
const _page3 = () => import('./chunks/404_D2aPgAn7.mjs');
const _page4 = () => import('./chunks/_slug__BVQCKSvd.mjs');
const _page5 = () => import('./chunks/_.._pzNd1p_p.mjs');
const _page6 = () => import('./chunks/rss_BbjA4aMK.mjs');
const _page7 = () => import('./chunks/_.._Cg4CMCgS.mjs');
const _page8 = () => import('./chunks/index_C1rCXYhn.mjs');
const _page9 = () => import('./chunks/index_D8KGWlD8.mjs');
const pageMap = new Map([
    ["node_modules/astro-expressive-code/routes/scripts.ts", _page0],
    ["node_modules/astro-expressive-code/routes/styles.ts", _page1],
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page2],
    ["src/pages/404.astro", _page3],
    ["src/pages/blog/[slug].astro", _page4],
    ["src/pages/blog/[...page].astro", _page5],
    ["src/pages/rss.xml.js", _page6],
    ["src/pages/tags/[tag]/[...page].astro", _page7],
    ["src/pages/tags/index.astro", _page8],
    ["src/pages/index.astro", _page9]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "6bc08c96-00c9-4f4b-9593-61473da9b6a6"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
