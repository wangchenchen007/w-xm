import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/index.less'
import {
  NavBar,
  Field,
  Button,
  CellGroup
} from 'vant'

Vue.config.productionTip = false
Vue
  .use(NavBar)
  .use(Field)
  .use(Button)
  .use(CellGroup)

new Vue({
  router,
  store,

  render: h => h(App)
}).$mount('#app')
