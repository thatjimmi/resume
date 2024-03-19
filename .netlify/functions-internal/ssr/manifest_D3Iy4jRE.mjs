import 'cookie';
import 'kleur/colors';
import './chunks/astro_BIQwAA1w.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.dy9ns.js","pattern":"^\\/_astro\\/ec\\.dy9ns\\.js$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.dy9ns.js","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/scripts.ts","pathname":"/_astro/ec.dy9ns.js","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_astro/ec.v6sg1.css","pattern":"^\\/_astro\\/ec\\.v6sg1\\.css$","segments":[[{"content":"_astro","dynamic":false,"spread":false}],[{"content":"ec.v6sg1.css","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro-expressive-code/routes/styles.ts","pathname":"/_astro/ec.v6sg1.css","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BEtm0SMb.css"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BEtm0SMb.css"}],"routeData":{"route":"/tags","isIndex":true,"type":"page","pattern":"^\\/tags\\/?$","segments":[[{"content":"tags","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/tags/index.astro","pathname":"/tags","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.BkSZLX8a.js"},{"type":"external","value":"/_astro/page.55INgWwS.js"}],"styles":[{"type":"external","src":"/_astro/_slug_.BEtm0SMb.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://jimmi.is","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/Jimmi/resume/src/pages/blog/[slug].astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jimmi/resume/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jimmi/resume/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jimmi/resume/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jimmi/resume/src/pages/tags/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/Users/Jimmi/resume/src/pages/tags/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/utils/post.ts",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/utils/index.ts",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/Button.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/SkillLayout.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/layouts/BlogPost.astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/tags/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/Card.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/FormattedDate.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/blog/Hero.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/blog/PostPreview.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/Label.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/ProjectCard.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/Section.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/components/blog/TOC.astro",{"propagation":"in-tree","containsHead":false}],["/Users/Jimmi/resume/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_B2aAitmC.mjs","/node_modules/astro-expressive-code/routes/scripts.ts":"chunks/pages/scripts_BGlXRuA5.mjs","/node_modules/astro-expressive-code/routes/styles.ts":"chunks/pages/styles_BTWgnlvY.mjs","\u0000@astrojs-manifest":"manifest_D3Iy4jRE.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/scripts@_@ts":"chunks/scripts_CF4VFUXN.mjs","\u0000@astro-page:node_modules/astro-expressive-code/routes/styles@_@ts":"chunks/styles_OiEViPi2.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_CWjPyoFF.mjs","\u0000@astro-page:src/pages/404@_@astro":"chunks/404_D2aPgAn7.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"chunks/_slug__BVQCKSvd.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._pzNd1p_p.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_BbjA4aMK.mjs","\u0000@astro-page:src/pages/tags/[tag]/[...page]@_@astro":"chunks/_.._Cg4CMCgS.mjs","\u0000@astro-page:src/pages/tags/index@_@astro":"chunks/index_C1rCXYhn.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D8KGWlD8.mjs","/Users/Jimmi/resume/src/content/post/cover-image/index.md?astroContentCollectionEntry=true":"chunks/index_CuIddRYN.mjs","/Users/Jimmi/resume/src/content/post/draft-post.md?astroContentCollectionEntry=true":"chunks/draft-post_BdDg2yeY.mjs","/Users/Jimmi/resume/src/content/post/long-title.md?astroContentCollectionEntry=true":"chunks/long-title_CyE2Chfb.mjs","/Users/Jimmi/resume/src/content/post/markdown-elements/index.md?astroContentCollectionEntry=true":"chunks/index_Dwao5ZyS.mjs","/Users/Jimmi/resume/src/content/post/missing-content.md?astroContentCollectionEntry=true":"chunks/missing-content_BSZi0V7X.mjs","/Users/Jimmi/resume/src/content/post/social-image.md?astroContentCollectionEntry=true":"chunks/social-image_Bz4QsW26.mjs","/Users/Jimmi/resume/src/content/post/unique-tags.md?astroContentCollectionEntry=true":"chunks/unique-tags_BMRepm-L.mjs","/Users/Jimmi/resume/src/content/post/cover-image/index.md?astroPropagatedAssets":"chunks/index_DH156HoK.mjs","/Users/Jimmi/resume/src/content/post/draft-post.md?astroPropagatedAssets":"chunks/draft-post_Uez9lArg.mjs","/Users/Jimmi/resume/src/content/post/long-title.md?astroPropagatedAssets":"chunks/long-title_DT2xwOIr.mjs","/Users/Jimmi/resume/src/content/post/markdown-elements/index.md?astroPropagatedAssets":"chunks/index_CG2rEwMJ.mjs","/Users/Jimmi/resume/src/content/post/missing-content.md?astroPropagatedAssets":"chunks/missing-content_Dbk1GGW-.mjs","/Users/Jimmi/resume/src/content/post/social-image.md?astroPropagatedAssets":"chunks/social-image_CaWOYxER.mjs","/Users/Jimmi/resume/src/content/post/unique-tags.md?astroPropagatedAssets":"chunks/unique-tags_Dz18obMW.mjs","/Users/Jimmi/resume/src/assets/coming-soon.png":"chunks/coming-soon_C9q2g2C0.mjs","/Users/Jimmi/resume/src/content/post/cover-image/index.md":"chunks/index_CPIIZor2.mjs","/Users/Jimmi/resume/src/content/post/draft-post.md":"chunks/draft-post_DyWouqez.mjs","/Users/Jimmi/resume/src/content/post/long-title.md":"chunks/long-title_BuBQqGad.mjs","/Users/Jimmi/resume/src/content/post/markdown-elements/index.md":"chunks/index_IyZJFFp5.mjs","/Users/Jimmi/resume/src/content/post/missing-content.md":"chunks/missing-content_-CrzO9fy.mjs","/Users/Jimmi/resume/src/content/post/social-image.md":"chunks/social-image_Bp9wTAC7.mjs","/Users/Jimmi/resume/src/content/post/unique-tags.md":"chunks/unique-tags_CogVS2W0.mjs","/astro/hoisted.js?q=1":"_astro/hoisted.BkSZLX8a.js","/astro/hoisted.js?q=0":"_astro/hoisted.Cle9tR6y.js","astro:scripts/page.js":"_astro/page.55INgWwS.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about-astro.0znnbM0P.png","/_astro/coming-soon.C8u-V5zm.png","/_astro/cover.C1CigIB6.png","/_astro/logo.DMXfm6vf.png","/_astro/_slug_.BEtm0SMb.css","/social-card.png","/_astro/hoisted.BkSZLX8a.js","/_astro/hoisted.Cle9tR6y.js","/_astro/page.55INgWwS.js","/favicon/android-chrome-192x192.png","/favicon/android-chrome-512x512.png","/favicon/apple-touch-icon.png","/favicon/favicon-16x16.png","/favicon/favicon-32x32.png","/favicon/favicon.ico","/favicon/site.webmanifest","/images/image.png","/fonts/ClashDisplay-Variable.ttf","/fonts/Satoshi-Variable.ttf","/fonts/Satoshi-VariableItalic.ttf","/_astro/page.55INgWwS.js"],"buildFormat":"directory"});

export { manifest };
