// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import VueGtag from 'vue-gtag'

if (process.isClient) {
  const WebFont = require('webfontloader')

  WebFont.load({
    google: {
      families: ['Raleway:400,400i,700', 'Open+Sans:400,600,700&display=swap']
    }
  })
}

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(
    VueGtag,
    {
      config: { id: 'UA-163011956-1' },
      params: {
        linker: {
          domains: ['produtividadeantifragil.com.br', 'pay.hotmart.com'],
          accept_incoming: true,
          decorate_forms: true
        }
      }
    },
    router
  )
  head.htmlAttrs = { lang: 'pt-BR' }
  head.script.push({
    src:
      'https://d335luupugsy2.cloudfront.net/js/loader-scripts/8999f600-d92f-4cd1-a4d5-d9ac204a6a18-loader.js',
    body: true
  })
}
