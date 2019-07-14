import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Home from './pages/Home';
import About from './pages/About';

Vue.config.productionTip = false;
Vue.use(VueRouter);

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About }
];

const router = new VueRouter({
  routes
});

new Vue({
  el: '#app',
  component: App,
  router,
  render: h => h(App)
});