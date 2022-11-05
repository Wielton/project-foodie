import Vue from 'vue'
import App from './App.vue'
import router from './router'
import {setActivePinia, createPinia, PiniaVuePlugin} from 'pinia'
import vuetify from './plugins/vuetify'






Vue.config.productionTip = false
const pinia = createPinia();
Vue.use(PiniaVuePlugin, setActivePinia);

new Vue({
  pinia,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
