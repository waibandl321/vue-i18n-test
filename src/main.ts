import { createApp } from 'vue'
import i18n from './lang'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

createApp(App)
  .use(vuetify)
  .use(i18n)
  .mount('#app')
