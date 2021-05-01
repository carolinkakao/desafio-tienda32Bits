import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    component: () => import('../views/Inicio.vue')
  },
  {
    path: '/busquedas',
    name: 'Busquedas',
    component: () => import('../views/Busquedas.vue')
  },
  {
    path: '/venta',
    name: 'Venta',
    component: () => import('../views/Venta.vue')
  },
  {
    path: '/Total',
    name: 'Total',
    component: () => import('../views/Total.vue')
  },
  {
    path: '/*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router