export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Map Poltava',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/icon.ico'},
      //  {
      //    rel: 'stylesheet',
      //    type: 'text/css',
      //    href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
      //  }
    ],
    script: [
      // {
      //   body: true,
      //   src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
      // }
    ]
  },
  ssr: false,
  target: 'static',
  //mode: 'spa',
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/index.scss',
    '~/node_modules/bootstrap-icons/font/bootstrap-icons.css',
    '~/node_modules/bootstrap/dist/css/bootstrap.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {src: '~plugins/leaflet.js', mode: 'client'},
    {src: '~/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js', mode: 'client'},
    {src: '~/plugins/vue-cool-lightbox.js', mode: 'client'},
    {src: '~/plugins/swiper', mode: 'client'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  //components: false,
  //devtools: {enabled: true},
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  // tailwindcss: {
  //   configPath: '~/tailwind.config.js'
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    timing: {
      total: true
    }
  },
  // Modules: https://go.nuxtjs.dev/config-modules
  // buildModules: ['@nuxtjs/tailwindcss'],
  modules: [
    'nuxt-leaflet',
    '@nuxtjs/pwa'
  ],
  leaflet: {
    icon: true,
    scrollWheelZoom: true
  },

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: 'index',
        path: '/',
        component: resolve(__dirname, 'pages/Index.vue')
      })
    }
  },

  pwa: {
    manifest: {
      name: 'Map',
      short_name: 'Map',
      lang: 'en',
      start_url: '/',
      display: 'standalone',
      background_color: '#fff',
      theme_color: '#000',
      screenshots: [
        {
          src: '/screenshots/screenshot-1.png',
          sizes: "540x720",
          type: 'image/png',
          platform: 'web'
        },
        {
          src: '/screenshots/screenshot-2.png',
          sizes: "720x540",
          type: 'image/png',
          platform: 'web'
        }
      ]
    },
    icon: {
      fileName: "v.png",
      sizes: [64, 120, 144, 152, 192, 384, 512]
    },
    meta: {
      title: "Map Poltava"
    },
    workbox: {
      // Configure Workbox as needed
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
