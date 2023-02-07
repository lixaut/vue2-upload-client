import Vue from 'vue'
import App from './App.vue'

// 引入 element-ui
import { 
  Container,
  Header,
  Aside,
  Main,
  MenuItem,
  Menu
} from 'element-ui'
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(MenuItem)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
