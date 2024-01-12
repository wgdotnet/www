import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import remarkToc from 'remark-toc';
import remarkMermaid from 'astro-diagram/remark-mermaid';
import cookieconsent from "@jop-software/astro-cookieconsent";

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
      applyBaseStyles: false,
      configFile: './tailwind.config.cjs'
    }),
    cookieconsent({
      gui_options: {
          consent_modal: {
              layout: 'cloud',               // box/cloud/bar
              position: 'bottom center',     // bottom/middle/top + left/right/center
              transition: 'slide',           // zoom/slide
              swap_buttons: false            // enable to invert buttons
          },
          settings_modal: {
              layout: 'box',                 // box/bar
              // position: 'left',           // left/right
              transition: 'slide'            // zoom/slide
          }
      }
  })
  ],
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
