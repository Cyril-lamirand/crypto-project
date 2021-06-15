import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from "../views/HomeView";
import EtherumView from "../views/EtherumView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomeView
  },
  {
    path: '/etherum',
    name: 'etherum',
    component: EtherumView
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
