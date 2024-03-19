import { clsx } from 'clsx';
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, F as Fragment, m as maybeRenderHead, g as renderHead, h as renderSlot, A as AstroError, i as UnknownContentCollectionError, j as renderUniqueStylesheet, k as renderScriptElement, l as createHeadAndContent, u as unescapeHTML } from '../astro_BIQwAA1w.mjs';
import 'kleur/colors';
/* empty css                           */
import { twMerge } from 'tailwind-merge';
import { p as prependForwardSlash } from '../astro/assets-service_Cf3cDHhU.mjs';

const siteConfig = {
  // Used as both a meta property (src/components/BaseHead.astro L:31 + L:49) & the generated satori png (src/pages/og-image/[slug].png.ts)
  author: "Jimmi Mortensen",
  // Meta property used to construct the meta title property, found in src/components/BaseHead.astro L:11
  title: "Jimmi Mortensen",
  // Meta property used as the default description meta property
  description: "The official website of Lorem Ipsum",
  // HTML lang property, found in src/layouts/Base.astro L:18
  lang: "en-GB",
  // Meta property, found in src/components/BaseHead.astro L:42
  ogLocale: "en_GB",
  // Date.prototype.toLocaleDateString() parameters, found in src/utils/date.ts.
  date: {
    locale: "en-GB",
    options: {
      day: "numeric",
      month: "short",
      year: "numeric"
    }
  }
};

const $$Astro$6 = createAstro("https://jimmi.is");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { articleDate, description, ogImage, title } = Astro2.props;
  const titleSeparator = "\u2022";
  const siteTitle = `${title} ${titleSeparator} ${siteConfig.title}`;
  const canonicalURL = new URL(Astro2.url.pathname, Astro2.site);
  const socialImageURL = new URL(ogImage ? ogImage : "/social-card.png", Astro2.url).href;
  return renderTemplate`<meta charset="utf-8"><meta content="width=device-width, initial-scale=1.0, shrink-to-fit=no" name="viewport"><meta content="IE=edge" http-equiv="X-UA-Compatible"><title>${siteTitle}</title><!-- <link href="favicon/favicon.ico" rel="icon" sizes="any" />
<link href="favicon/icon.svg" rel="icon" type="image/svg+xml" />
<link href="/apple-touch-icon.png" rel="apple-touch-icon" />
<link href="/manifest.webmanifest" rel="manifest" /> --><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><!-- <link rel='preload' href='/fonts/Satoshi-Variable.ttf' as='font' type='font/ttf' crossorigin />
<link
	rel='preload'
	href='/fonts/Satoshi-VariableItalic.ttf'
	as='font'
	type='font/ttf'
	crossorigin
/>
<link rel='preload' href='/fonts/ClashDisplay-Variable.ttf' as='font' type='font/ttf' crossorigin /> --><link rel="canonical"${addAttribute(canonicalURL, "href")}><meta${addAttribute(siteTitle, "content")} name="title"><meta${addAttribute(description, "content")} name="description"><meta${addAttribute(siteConfig.author, "content")} name="author"><meta content="" name="theme-color"><meta${addAttribute(articleDate ? "article" : "website", "content")} property="og:type"><meta${addAttribute(title, "content")} property="og:title"><meta${addAttribute(description, "content")} property="og:description"><meta${addAttribute(canonicalURL, "content")} property="og:url"><meta${addAttribute(siteConfig.title, "content")} property="og:site_name"><meta${addAttribute(siteConfig.ogLocale, "content")} property="og:locale"><meta${addAttribute(socialImageURL, "content")} property="og:image"><meta content="1200" property="og:image:width"><meta content="630" property="og:image:height">${articleDate && renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`<meta${addAttribute(siteConfig.author, "content")} property="article:author"><meta${addAttribute(articleDate, "content")} property="article:published_time">` })}`}<meta content="summary_large_image" property="twitter:card"><meta${addAttribute(canonicalURL, "content")} property="twitter:url"><meta${addAttribute(title, "content")} property="twitter:title"><meta${addAttribute(description, "content")} property="twitter:description"><meta${addAttribute(socialImageURL, "content")} property="twitter:image"><link href="/sitemap-index.xml" rel="sitemap"><link href="/rss.xml" rel="alternate"${addAttribute(siteConfig.title, "title")} type="application/rss+xml"><meta${addAttribute(Astro2.generator, "content")} name="generator">`;
}, "/Users/Jimmi/resume/src/components/BaseHead.astro", void 0);

const $$Astro$5 = createAstro("https://jimmi.is");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mx-auto mt-24 w-full"> <div class="border-t border-border pt-5"> <div class="flex flex-col items-center gap-y-3 sm:flex sm:flex-row sm:items-center sm:justify-between sm:gap-y-0"> <div class="flex gap-x-4 text-sm"> <!-- <a
          class='inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='/terms'>Terms</a
        >

        <a
          class='inline-flex text-gray-600 gap-x-2 hover:text-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
          href='/privacy'>Privacy</a
        > --> <p class="">© 2024 lorem. All rights reserved.</p> </div> <div class="flex items-center justify-between"> <!-- Social Brands --> <div class="flex items-center gap-x-4"> <!-- Linkedin --> <a class="inline-block text-muted-foreground transition-all hover:text-muted-foreground/75" href="https://www.linkedin.com/in/jimmigmortensen/"> <svg class="h-4 w-4 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16"><path fill="currentColor" d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248c-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586c.173-.431.568-.878 1.232-.878c.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252c-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"></path></svg> </a> </div> <!-- End Social Brands --> </div> </div> </div> </footer>`;
}, "/Users/Jimmi/resume/src/components/layout/Footer.astro", void 0);

const $$Astro$4 = createAstro("https://jimmi.is");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header class="mb-12 flex w-full flex-wrap pb-3 text-sm sm:flex-nowrap sm:justify-start"> <nav class="relative mx-auto flex w-full items-center justify-between sm:flex sm:items-center" aria-label="global"> <a class="flex-none text-xl font-semibold" href="/" aria-label="Brand">Jimmi</a> <div class="flex flex-row items-center justify-center gap-x-7"> <!-- <a
				href='/blog'
				class='flex-none text-[1.05rem] font-medium hover:text-foreground/75'
				aria-label='Nav Menu'>Blog</a
			> --> <button id="toggleDarkMode" class="relative rounded-md border border-border p-1.5 transition-all hover:bg-border"> <span class="sr-only">Dark Theme</span> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:hidden dark:-rotate-90 dark:scale-0"><path fill="currentColor" d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15m0 1q-1.671 0-2.836-1.164T8 12q0-1.671 1.164-2.836T12 8q1.671 0 2.836 1.164T16 12q0 1.671-1.164 2.836T12 16m-7-3.5H1.5v-1H5zm17.5 0H19v-1h3.5zM11.5 5V1.5h1V5zm0 17.5V19h1v3.5zM6.746 7.404l-2.16-2.098l.695-.744l2.111 2.134zM18.72 19.438l-2.117-2.14l.652-.702l2.16 2.098zM16.596 6.746l2.098-2.16l.744.695l-2.134 2.111zM4.562 18.72l2.14-2.117l.663.652l-2.078 2.179zM12 12"></path></svg> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" class="hidden h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:block dark:rotate-0 dark:scale-100"><path fill="currentColor" d="M12.058 20q-3.334 0-5.667-2.333Q4.058 15.333 4.058 12q0-3.038 1.98-5.27Q8.02 4.5 10.942 4.097q.081 0 .159.006t.153.017q-.506.706-.801 1.57q-.295.865-.295 1.811q0 2.667 1.866 4.533q1.867 1.867 4.534 1.867q.952 0 1.813-.295q.862-.295 1.548-.801q.012.075.018.153q.005.078.005.158q-.384 2.923-2.615 4.904T12.057 20"></path></svg> </button> </div> </nav> </header> `;
}, "/Users/Jimmi/resume/src/components/layout/Header.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro("https://jimmi.is");
const $$ThemeProvider = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ThemeProvider;
  return renderTemplate(_a || (_a = __template(["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)')\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark')\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(`Invalid theme value '${newTheme}' received. Expected 'light' or 'dark'.`)\n		}\n\n		localStorage.setItem('theme', newTheme)\n\n		const root = document.documentElement\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return\n		}\n\n		root.classList.toggle('dark')\n	}\n\n	// Initial Setup\n	setTheme(getUserPref())\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()))\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme)\n	})\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'))\n<\/script>"], ["<script>\n	const lightModePref = window.matchMedia('(prefers-color-scheme: light)')\n\n	// Get user preference from local storage or from browser preference\n	function getUserPref() {\n		const storedTheme = localStorage.getItem('theme') ?? undefined\n		return storedTheme || (lightModePref.matches ? 'light' : 'dark')\n	}\n\n	function setTheme(newTheme) {\n		if (newTheme !== 'light' && newTheme !== 'dark') {\n			return console.log(\\`Invalid theme value '\\${newTheme}' received. Expected 'light' or 'dark'.\\`)\n		}\n\n		localStorage.setItem('theme', newTheme)\n\n		const root = document.documentElement\n\n		// if current dark theme and new theme is dark, return\n		if (newTheme === 'dark' && root.classList.contains('dark')) {\n			return\n		} else if (newTheme === 'light' && !root.classList.contains('dark')) {\n			return\n		}\n\n		root.classList.toggle('dark')\n	}\n\n	// Initial Setup\n	setTheme(getUserPref())\n\n	// View Transitions hook to restore theme\n	document.addEventListener('astro:after-swap', () => setTheme(getUserPref()))\n\n	// Listen for theme-change custom event\n	document.addEventListener('theme-change', (e) => {\n		setTheme(e.detail.theme)\n	})\n\n	// Listen for prefers-color-scheme change\n	lightModePref.addEventListener('change', (e) => setTheme(e.matches ? 'light' : 'dark'))\n<\/script>"])));
}, "/Users/Jimmi/resume/src/components/ThemeProvider.astro", void 0);

const $$Astro$2 = createAstro("https://jimmi.is");
const $$BaseLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    meta: { articleDate, description = siteConfig.description, ogImage, title }
  } = Astro2.props;
  return renderTemplate`<html${addAttribute(siteConfig.lang, "lang")} class=""> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "articleDate": articleDate, "description": description, "ogImage": ogImage, "title": title })}${renderHead()}</head> <body class="flex justify-center bg-background"> ${renderComponent($$result, "ThemeProvider", $$ThemeProvider, {})} <main class="flex min-h-screen w-screen max-w-[60rem] flex-col items-center px-6 pb-10 pt-7 font-satoshi text-[0.92rem] leading-relaxed sm:px-10 lg:px-10"> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </main> </body></html>`;
}, "/Users/Jimmi/resume/src/layouts/BaseLayout.astro", void 0);

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1)
      continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}
const cacheEntriesByCollection = /* @__PURE__ */ new Map();
function createGetCollection({
  contentCollectionToEntryMap,
  dataCollectionToEntryMap,
  getRenderEntryImport
}) {
  return async function getCollection(collection, filter) {
    let type;
    if (collection in contentCollectionToEntryMap) {
      type = "content";
    } else if (collection in dataCollectionToEntryMap) {
      type = "data";
    } else {
      console.warn(
        `The collection ${JSON.stringify(
          collection
        )} does not exist or is empty. Ensure a collection directory with this name exists.`
      );
      return [];
    }
    const lazyImports = Object.values(
      type === "content" ? contentCollectionToEntryMap[collection] : dataCollectionToEntryMap[collection]
    );
    let entries = [];
    if (!Object.assign({"BASE_URL": "/", "MODE": "production", "DEV": false, "PROD": true, "SSR": true, "SITE": "https://jimmi.is", "ASSETS_PREFIX": undefined}, { _: process.env._ })?.DEV && cacheEntriesByCollection.has(collection)) {
      entries = [...cacheEntriesByCollection.get(collection)];
    } else {
      entries = await Promise.all(
        lazyImports.map(async (lazyImport) => {
          const entry = await lazyImport();
          return type === "content" ? {
            id: entry.id,
            slug: entry.slug,
            body: entry.body,
            collection: entry.collection,
            data: entry.data,
            async render() {
              return render({
                collection: entry.collection,
                id: entry.id,
                renderEntryImport: await getRenderEntryImport(collection, entry.slug)
              });
            }
          } : {
            id: entry.id,
            collection: entry.collection,
            data: entry.data
          };
        })
      );
      cacheEntriesByCollection.set(collection, entries);
    }
    if (typeof filter === "function") {
      return entries.filter(filter);
    } else {
      return entries;
    }
  };
}
async function render({
  collection,
  id,
  renderEntryImport
}) {
  const UnexpectedRenderError = new AstroError({
    ...UnknownContentCollectionError,
    message: `Unexpected error while rendering ${String(collection)} → ${String(id)}.`
  });
  if (typeof renderEntryImport !== "function")
    throw UnexpectedRenderError;
  const baseMod = await renderEntryImport();
  if (baseMod == null || typeof baseMod !== "object")
    throw UnexpectedRenderError;
  const { default: defaultMod } = baseMod;
  if (isPropagatedAssetsModule(defaultMod)) {
    const { collectedStyles, collectedLinks, collectedScripts, getMod } = defaultMod;
    if (typeof getMod !== "function")
      throw UnexpectedRenderError;
    const propagationMod = await getMod();
    if (propagationMod == null || typeof propagationMod !== "object")
      throw UnexpectedRenderError;
    const Content = createComponent({
      factory(result, baseProps, slots) {
        let styles = "", links = "", scripts = "";
        if (Array.isArray(collectedStyles)) {
          styles = collectedStyles.map((style) => {
            return renderUniqueStylesheet(result, {
              type: "inline",
              content: style
            });
          }).join("");
        }
        if (Array.isArray(collectedLinks)) {
          links = collectedLinks.map((link) => {
            return renderUniqueStylesheet(result, {
              type: "external",
              src: prependForwardSlash(link)
            });
          }).join("");
        }
        if (Array.isArray(collectedScripts)) {
          scripts = collectedScripts.map((script) => renderScriptElement(script)).join("");
        }
        let props = baseProps;
        if (id.endsWith("mdx")) {
          props = {
            components: propagationMod.components ?? {},
            ...baseProps
          };
        }
        return createHeadAndContent(
          unescapeHTML(styles + links + scripts),
          renderTemplate`${renderComponent(
            result,
            "Content",
            propagationMod.Content,
            props,
            slots
          )}`
        );
      },
      propagation: "self"
    });
    return {
      Content,
      headings: propagationMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: propagationMod.frontmatter ?? {}
    };
  } else if (baseMod.Content && typeof baseMod.Content === "function") {
    return {
      Content: baseMod.Content,
      headings: baseMod.getHeadings?.() ?? [],
      remarkPluginFrontmatter: baseMod.frontmatter ?? {}
    };
  } else {
    throw UnexpectedRenderError;
  }
}
function isPropagatedAssetsModule(module) {
  return typeof module === "object" && module != null && "__astroPropagation" in module;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/cover-image/index.md": () => import('../index_CuIddRYN.mjs'),"/src/content/post/draft-post.md": () => import('../draft-post_BdDg2yeY.mjs'),"/src/content/post/long-title.md": () => import('../long-title_CyE2Chfb.mjs'),"/src/content/post/markdown-elements/index.md": () => import('../index_Dwao5ZyS.mjs'),"/src/content/post/missing-content.md": () => import('../missing-content_BSZi0V7X.mjs'),"/src/content/post/social-image.md": () => import('../social-image_Bz4QsW26.mjs'),"/src/content/post/unique-tags.md": () => import('../unique-tags_BMRepm-L.mjs')});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"post":{"type":"content","entries":{"draft-post":"/src/content/post/draft-post.md","missing-content":"/src/content/post/missing-content.md","long-title":"/src/content/post/long-title.md","social-image":"/src/content/post/social-image.md","cover-image":"/src/content/post/cover-image/index.md","unique-tags":"/src/content/post/unique-tags.md","markdown-elements":"/src/content/post/markdown-elements/index.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/post/cover-image/index.md": () => import('../index_DH156HoK.mjs'),"/src/content/post/draft-post.md": () => import('../draft-post_Uez9lArg.mjs'),"/src/content/post/long-title.md": () => import('../long-title_DT2xwOIr.mjs'),"/src/content/post/markdown-elements/index.md": () => import('../index_CG2rEwMJ.mjs'),"/src/content/post/missing-content.md": () => import('../missing-content_Dbk1GGW-.mjs'),"/src/content/post/social-image.md": () => import('../social-image_CaWOYxER.mjs'),"/src/content/post/unique-tags.md": () => import('../unique-tags_Dz18obMW.mjs')});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

async function getAllPosts() {
  return await getCollection("post", ({ data }) => {
    return data.draft !== true ;
  });
}
function sortMDByDate(posts) {
  return posts.sort((a, b) => {
    const aDate = new Date(a.data.updatedDate ?? a.data.publishDate).valueOf();
    const bDate = new Date(b.data.updatedDate ?? b.data.publishDate).valueOf();
    return bDate - aDate;
  });
}
function getAllTags(posts) {
  return posts.flatMap((post) => [...post.data.tags]);
}
function getUniqueTags(posts) {
  return [...new Set(getAllTags(posts))];
}
function getUniqueTagsWithCount(posts) {
  return [
    ...getAllTags(posts).reduce(
      (acc, t) => acc.set(t, (acc.get(t) || 0) + 1),
      /* @__PURE__ */ new Map()
    )
  ].sort((a, b) => b[1] - a[1]);
}

const dateFormat = new Intl.DateTimeFormat(siteConfig.date.locale, siteConfig.date.options);
function getFormattedDate(date, options) {
  if (typeof options !== "undefined") {
    return new Date(date).toLocaleDateString(siteConfig.date.locale, {
      ...siteConfig.date.options,
      ...options
    });
  }
  return dateFormat.format(new Date(date));
}

function diveChildren(item, depth) {
  if (depth === 1 || !item.subheadings.length) {
    return item.subheadings;
  } else {
    return diveChildren(item.subheadings[item.subheadings.length - 1], depth - 1);
  }
}
function generateToc(headings) {
  const bodyHeadings = [...headings.filter(({ depth }) => depth > 1)];
  const toc = [];
  bodyHeadings.forEach((h) => {
    const heading = { ...h, subheadings: [] };
    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      const lastItemInToc = toc[toc.length - 1];
      if (heading.depth < lastItemInToc.depth) {
        throw new Error(`Orphan heading found: ${heading.text}.`);
      }
      const gap = heading.depth - lastItemInToc.depth;
      const target = diveChildren(lastItemInToc, gap);
      target.push(heading);
    }
  });
  return toc;
}

const $$Astro$1 = createAstro("https://jimmi.is");
const $$Button = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Button;
  const { as: Tag = "a", class: className, title, href, style = "button" } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Tag", Tag, { "class": cn(
    className,
    "inline-flex items-center gap-x-1 rounded-lg bg-primary-foreground border border-border px-2 py-1 text-sm transition-all hover:bg-input",
    !href && "cursor-default",
    style === "pill" && "rounded-xl"
  ), "href": href, "data-astro-prefetch": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["icon-before"])} ${maybeRenderHead()}<p>${title}</p> ${renderSlot($$result2, $$slots["icon-after"])} ` })}`;
}, "/Users/Jimmi/resume/src/components/Button.astro", void 0);

const $$Astro = createAstro("https://jimmi.is");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  const meta = {
    description: "Not found",
    title: "404"
  };
  return renderTemplate`${renderComponent($$result, "PageLayout", $$BaseLayout, { "meta": meta }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a href="https://github.com/srleom/astro-theme-resume.git" class="flex flex-row items-center gap-x-3 rounded-3xl border border-input px-4 py-2 text-sm shadow-sm transition-all hover:shadow-md"> <span class="relative flex items-center justify-center"> <span class="absolute inline-flex h-2 w-2 animate-ping rounded-full border border-green-400 bg-green-400 opacity-75"></span> <span class="relative inline-flex h-2 w-2 rounded-full bg-green-400"></span> </span> <p class="font-medium">Get template</p> </a> <div class="px-4 py-10 text-center sm:px-6 lg:px-8"> <h1 class="block text-7xl font-bold sm:text-9xl">404</h1> <p class="mt-3 text-muted-foreground">Oops, something went wrong.</p> <p class="">Sorry, we couldn't find your page.</p> ${renderComponent($$result2, "Button", $$Button, { "title": "Back to home", "href": "/", "style": "button", "class": "mt-5" }, { "icon-after": ($$result3) => renderTemplate`<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" class="-scale-x-100"> <path fill="currentColor" d="m6.921 12.5l5.792 5.792L12 19l-7-7l7-7l.713.708L6.921 11.5H19v1z"></path> </svg>` })} </div> ` })}`;
}, "/Users/Jimmi/resume/src/pages/404.astro", void 0);

const $$file = "/Users/Jimmi/resume/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Button as $, _404 as _, getAllPosts as a, getUniqueTagsWithCount as b, $$BaseLayout as c, cn as d, siteConfig as e, generateToc as f, getFormattedDate as g, getUniqueTags as h, sortMDByDate as s };
