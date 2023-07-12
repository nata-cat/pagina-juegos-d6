import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import notFound from '../components/notfound.vue'
import opinionesView from '../views/opinionesView.vue'
import administracion from '../components/administracion.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/opiniones/:nombre',
    name: 'opiniones',
    component: opinionesView,
    props: true,
  },
  {
    path: '/admin/:nombre',
    name: 'admin',
    component: administracion,
    props: true,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  },

  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: notFound,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
