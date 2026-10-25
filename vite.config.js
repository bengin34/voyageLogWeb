import react from '@vitejs/plugin-react';
import { readdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import matter from 'gray-matter';
import { defineConfig } from 'vite';

// Home page "from the blog" links: a few articles per language, read from content/blog at build time.
const FEATURED_KEYS = ['best-apps', 'how-to-journal', 'offline-private', 'polarsteps-alternative', 'places-vs-moments'];
const FEATURED_COUNT = 3;

function featuredPosts() {
  const byLang = {};
  for (const lang of readdirSync('content/blog')) {
    const posts = readdirSync(join('content/blog', lang))
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const { data } = matter(readFileSync(join('content/blog', lang, file), 'utf8'));
        return { key: data.key, title: data.title, description: data.description, path: `/${lang}/blog/${file.replace(/\.md$/, '')}/` };
      });
    byLang[lang] = FEATURED_KEYS.map((key) => posts.find((post) => post.key === key))
      .filter(Boolean)
      .slice(0, FEATURED_COUNT)
      .map(({ title, description, path }) => ({ title, description, path }));
  }
  return byLang;
}

function blogFeatured() {
  const id = 'virtual:blog-featured';
  return {
    name: 'blog-featured',
    resolveId: (source) => (source === id ? `\0${id}` : null),
    load: (resolved) => (resolved === `\0${id}` ? `export default ${JSON.stringify(featuredPosts())};` : null),
  };
}

export default defineConfig({
  plugins: [react(), blogFeatured()],
});
