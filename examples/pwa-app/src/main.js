// JS import
import Vue from 'vue';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';

Vue.use(Vant);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
