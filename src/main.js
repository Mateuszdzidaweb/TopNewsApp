import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios';
import './assets/css/tailwind.css'

// Global Componets
import Navigation from './components/Navigation';
import News from './components/News';

Vue.component('app-navigation', Navigation);
Vue.component('app-news', News);

Vue.config.productionTip = false

window.axios = axios;



new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
