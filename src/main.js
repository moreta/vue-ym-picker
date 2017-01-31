// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Basic from './components/sample/BasicYmPicker'

Vue.config.devtools = true
Vue.use(VueRouter)

const routes = [
  { path: '/Basic', component: Basic }
]
const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
