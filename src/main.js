import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/css/tailwind.css'
import VueProgressiveImage from 'vue-progressive-image'
import VueLazyload from 'vue-lazyload'



// Global Componets
import Navigation from './components/Navigation-component';
import Article from './components/articles/Article-component';
import MoreNews from './components/MoreNews-component';
import MostPopularArticle from './components/articles/MostPopularArticle-component';

Vue.component('app-navigation', Navigation);
Vue.component('app-article', Article);
Vue.component('app-moreNews', MoreNews);
Vue.component('app-mostPopularArticle', MostPopularArticle);

Vue.use(VueProgressiveImage, {
  blur: 100,
  placeholder: require('@/assets/images/no-image-found.png')
})

Vue.use(VueLazyload)
Vue.config.productionTip = false



// Global Filters
Vue.filter('truncate', function (value, limit) {
  if (value.length > limit) {
    value = value.substring(0, limit - 3) + "...";
  }
  return value;
});
// End Global Filters


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')