var cc = initCookieConsent();

var logo = '<img src="https://raw.githubusercontent.com/wgdotnet/public/main/img/svg/logo_black.svg" alt="Logo" loading="lazy" style="margin-left: -4px; margin-bottom: -5px; height: 35px">';

// run plugin with config object
cc.run({
    current_lang : 'en',
    autoclear_cookies : true,                     // default: false
    cookie_name: '_wgdotnet_cookie-consent',      // default: 'cc_cookie'
    cookie_expiration : 90,                       // default: 182
    page_scripts: true,                           // default: false
    auto_language: 'document',                    // default: null; could also be 'browser' or 'document'
    force_consent: true,
    remove_cookie_tables: true,                   // default: false

    gui_options: {
        consent_modal: {
            layout: 'box',                        // box,cloud,bar
            //position: 'bottom left',            // bottom,middle,top + left,right,center
            transition: 'slide'                   // zoom,slide
        },
        settings_modal: {
            layout: 'box',                        // box,bar
            // position: 'left',                  // right,left (available only if bar layout selected)
            transition: 'slide'                   // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');
    },

    languages: {
        'en': {
            consent_modal: {
                title: 'We use cookies!',
                description: 'Hi, this website uses essential cookies to ensure its proper operation. <button type="button" data-cc="c-settings" class="cc-link">Settings</button>',
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all'
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Save settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Name'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Cookie usage',
                        description: 'We use cookies to ensure the basic functionalities of the website and to enhance your online experience.'
                    }, {
                        title: 'Strictly necessary cookies',
                        description: 'These cookies are essential for the proper functioning of my website. Without these cookies, the website would not work properly',
                        toggle: {
                            value: 'necessary',
                            enabled: true,
                            readonly: true
                        },
                        cookie_table: [
                          {
                              col1: '^_wgdotnet',
                              col2: 'wgdotnet.pl',
                              col3: '90(s)',
                              col4: 'technical cookies',
                              is_regex: true
                          }
                      ]
                    },
                    {
                        title: 'More information',
                        description: 'For any queries in relation to our policies on cookies, privacy and your choices, please: <br/><ul><li>- Review the <a href="/privacy" class="cc-link">privacy policy</a></li><li>- Review the <a href="/cookies" class="cc-link">cookies policy</a></li><li>- <a class="cc-link" href="mailto:leaders@wgdotnet.pl">Contact us</a></li></ul>',
                    }
                ]
            }
        },
        'pl': {
          consent_modal: {
              title: 'Używamy plików cookie(s)!',
              description: 'Witaj, ta strona używa plików cookie(s), by zapewnić jej poprawne funkcjonowanie. <button type="button" data-cc="c-settings" class="cc-link">Ustawienia</button>',
              primary_btn: {
                  text: 'Zaakceptuj wszystkie',
                  role: 'accept_all'
              },
              secondary_btn: {
                  text: 'Zaakceptuj wymagane',
                  role: 'accept_necessary'
              }
          },
          settings_modal: {
              title: logo,
              save_settings_btn: 'Zapisz ustawienia',
              accept_all_btn: 'Zaakceptuj wszystkie',
              reject_all_btn: 'Zaakceptuj wymagane',
              close_btn_label: 'Zamknij',
              cookie_table_headers: [
                  {col1: 'Nazwa'},
                  {col2: 'Domena'},
                  {col3: 'Wygaśnięcie'},
                  {col4: 'Opis'}
              ],
              blocks: [
                  {
                      title: 'Wykorzystanie plików cookie',
                      description: 'Wykorzystujemy pliki cookie, w celu zapewnienia podstawowych funkcjonalności tej strony, oraz w celu poprawy doświadczeń użytkownika.'
                  }, {
                      title: 'Wymagane pliki cookie',
                      description: 'Te pliki cookie(s) są niezbędne do funkcjonowania strony. Bez tych plików cookies, strona nie będzie działać prawidłowo',
                      toggle: {
                          value: 'necessary',
                          enabled: true,
                          readonly: true
                      },
                      cookie_table: [
                        {
                            col1: '^_wgdotnet',
                            col2: 'wgdotnet.pl',
                            col3: '90 dni',
                            col4: 'cookie(s) "techniczne"',
                            is_regex: true
                        }
                    ]
                  },
                  {
                      title: 'Więcej informacji',
                      description: 'W celu uzyskania odpowiedzi na tematy związane z naszymi politykami ochrony danych osobowych oraz plików cookie, prosimy o: <br/><ul><li>- Zapoznanie się z <a href="/privacy" class="cc-link">polityką ochrony danych osobowych</a></li><li>- Zapoznanie się z <a href="/cookies" class="cc-link">polityką cookies</a></li><li>- <a class="cc-link" href="mailto:leaders@wgdotnet.pl">Kontakt z nami</a></li></ul>',
                  }
              ]
          }
      }
    }

});
