import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import Router from 'vue-router'
import axios from 'axios'

axios.defaults.withCredentials = true

import router from './router'

Vue.prototype.$axios = axios;

Vue.use(Router)
Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')