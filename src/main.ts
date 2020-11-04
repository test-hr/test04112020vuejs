import '@/styles/index.scss';
import Vue from 'vue';
import Router from 'vue-router';
import Toasted from 'vue-toasted';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { router } from '@/routing/router';
import store from './store';
import App from './App.vue';

Vue.use(Router);
Vue.use(Toasted, {
  theme: 'toasted-primary',
  position: 'top-right',
  duration: '3000',
});

Vue.use(VueAxios, axios);
Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL;

Vue.router = router;

Vue.config.productionTip = false;
const root = new Vue({
  router,
  store,
  render: (h) => h(App),
});

root.$mount('#app');
