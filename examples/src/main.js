import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import BasicYmPicker from './components/sample/BasicYmPicker'

Vue.use(VueRouter)
var router = new VueRouter()

router.map({
  '/Basic': {
    component: BasicYmPicker
  }
})
router.start(App, '#container')

