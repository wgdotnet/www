import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';
import remarkMermaid from 'astro-diagram/remark-mermaid';

// https://astro.build/config
export default defineConfig({
  integrations: [
    mdx({
      syntaxHighlight: 'shiki',
      shikiConfig: { theme: 'dracula' },
      remarkPlugins: [remarkMermaid],
      remarkRehype: { footnoteLabel: 'Footnotes' },
      //gfm: false,
    }),
    tailwind({
      // disable default injected base.css
      applyBaseStyles: false
    }
    )],
  load: {
    unknown: 'src/pages/404.astro'
  },
  output: 'server',
  adapter: cloudflare(),
  // https://github.com/natemoo-re/astro-icon/issues/35#issuecomment-1578101502
  vite: {
    resolve: {
      alias: {
        "svgo": import.meta.env.PROD ? "svgo/dist/svgo.browser.js" : "svgo"
      }
    }
  }
});
