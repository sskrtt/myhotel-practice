import Vue from 'vue'
import App from './App.vue'
import lodash from 'lodash'
import router from './router'
import store from './store'
import {mapState} from 'vuex'
import {vueAccordion} from 'vue-accordion'
import smoothScroll from 'vue-smoothscroll'

Vue.use(smoothScroll)
Vue.use(mapState)

Vue.component('vue-accordion', vueAccordion)
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
