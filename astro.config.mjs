import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
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
              position: 'left',           // left/right
              transition: 'slide'            // zoom/slide
          }
      },
      languages: {
        en: {
          consent_modal: {
            title: "Hello traveller, it's cookie time!",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            showPreferencesBtn: "Manage preferences",
            footer:
              '<a href="/privacy">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>',
          },
          settings_modal: {
            title: "Consent Preferences Center",
            acceptAllBtn: "Accept all",
            acceptNecessaryBtn: "Reject all",
            savePreferencesBtn: "Save preferences",
            closeIconLabel: "Close modal",
            serviceCounterLabel: "Service|Services",
            cookie_table_headers: [
              {col1: 'Name'},
              {col2: 'Domain'},
              {col3: 'Expiration'},
              {col4: 'Description'}
          ],
          blocks: [
            {
                title: 'Cookie usage 📢',
                description: 'I use cookies to ensure the basic functionalities of the website and to enhance your online experience. You can choose for each category to opt-in/out whenever you want. For more details relative to cookies and other sensitive data, please read the full <a href="#" class="cc-link">privacy policy</a>.'
            }, {
                title: 'Strictly necessary cookies',
                description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                toggle: {
                    value: 'necessary',
                    enabled: true,
                    readonly: true          // cookie categories with readonly=true are all treated as "necessary cookies"
                }
            }, {
                title: 'Performance and Analytics cookies',
                description: 'These cookies allow the website to remember the choices you have made in the past',
                toggle: {
                    value: 'analytics',     // your cookie category
                    enabled: false,
                    readonly: false
                },
                cookie_table: [             // list of all expected cookies
                    {
                        col1: '^_ga',       // match all cookies starting with "_ga"
                        col2: 'google.com',
                        col3: '2 years',
                        col4: 'description ...',
                        is_regex: true
                    },
                    {
                        col1: '_gid',
                        col2: 'google.com',
                        col3: '1 day',
                        col4: 'description ...',
                    },
                    {
                        col1: '_fbp',
                        col2: '.ddev.site',
                        col3: '1 day',
                        col4: 'description ...',
                    },
                       {
                        col1: 'ln_or',
                        col2: '.ddev.site',
                        col3: '1 day',
                        col4: 'description ...',
                    },
                       {
                        col1: '_gat',
                        col2: '.ddev.site',
                        col3: '1 day',
                        col4: 'description ...',
                    },
                ]
            }, {
                title: 'Advertisement and Targeting cookies',
                description: 'These cookies collect information about how you use the website, which pages you visited and which links you clicked on. All of the data is anonymized and cannot be used to identify you',
                toggle: {
                    value: 'targeting',
                    enabled: false,
                    readonly: false
                }
            }, {
                title: 'More information',
                description: 'For any queries in relation to our policy on cookies and your choices, please <a class="cc-link" href="#yourcontactpage">contact us</a>.',
            }
        ],
            sections: [
              {
                title: "Cookie Usage",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
              },
              {
                title:
                  'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                linkedCategory: "necessary",
              },
              {
                title: "Analytics Cookies",
                description:
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                linkedCategory: "analytics",
              },
              {
                title: "More information",
                description:
                  'For any query in relation to my policy on cookies and your choices, please <a class="cc__link" href="#yourdomain.com">contact me</a>.',
              },
            ],
          },
        },
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
