import Vue from 'vue/dist/vue.esm'
import VueResource from 'vue-resource/dist/vue-resource'
import VueRouter from 'vue-router';
import App from '../components/app.vue'
import { routes } from '../components/routes';
import 'bootstrap/dist/js/bootstrap';
import 'bootstrap/dist/css/bootstrap'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('app'))
  const app = new Vue({
    el: 'app',
    template: '<App/>',
    components: { App },
    router: router
  })

  console.log(app)
})