import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import ReserveHome from './views/ReserveHome.vue'
import returnNumber from './components/ReturnNumber.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/reserve',
      name: 'reserve',
      component: ReserveHome
    },
    {
      path: '/:urlnumber(\\d{2,3})',
      name: 'urlnumber',
      // Vue実践入門p322参照
      props: routes => ({
        urlnumber: Number(routes.params.urlnumber)
      }),
      component: returnNumber
    }, 
  ]
})