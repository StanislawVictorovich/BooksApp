import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        redirect: `/`
    },
    {
        path: '/',
        name: 'Users',
        component: () => import(/* webpackChunkName: "board" */ '../views/Board.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
