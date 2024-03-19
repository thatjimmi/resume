import rss from '@astrojs/rss';
import { a as getAllPosts, e as siteConfig } from './404_DSfIcz0S.mjs';
import 'clsx';

const GET = async () => {
  const posts = await getAllPosts();
  return rss({
    title: siteConfig.title,
    description: siteConfig.description,
    site: "https://jimmi.is",
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: `/blog/${post.slug}`
    }))
  });
};

export { GET };
