import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
    site: 'https://your-username.github.io',
    //base: '/portfolio',
    output: 'static',
    integrations: [
        mdx(),
        sitemap(),
    ],
});