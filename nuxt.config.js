export default {
  head: {
    title: '万川汇泽综合金融服务平台 - 万川汇泽综合服务与产业孵化平台',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: ['element-ui/lib/theme-chalk/index.css'],// Global CSS: https://go.nuxtjs.dev/config-css
  plugins: ['@/plugins/element-ui'],// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  components: true,// Auto import components: https://go.nuxtjs.dev/config-components
  buildModules: [// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    '@nuxtjs/eslint-module',// https://go.nuxtjs.dev/eslint
  ],
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
    // 合并CSS
    extractCSS: true, optimization: {
      splitChunks: { cacheGroups: { styles: { name: 'styles', test: /\.(css|vue)$/, chunks: 'all', enforce: true } } }
    }
  }
}
