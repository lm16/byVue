import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import router from './router'

import App from './App'


Vue.config.productionTip = false;
Vue.use(VueAxios, axios);

new Vue({
  router,

  components: { App },
}).$mount('#app');
