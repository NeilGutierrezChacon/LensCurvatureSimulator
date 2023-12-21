import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LensSimulatorView from '../views/LensSimulatorView.vue'
import ListParametersView from '../views/ListParametersView.vue'
import LogInView from '../views/LogInView.vue'
import SignUpView from '../views/SignUpView.vue'
import VerifyView from '../views/VerifyView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/log-in',
            name: 'log_in',
            component: LogInView
        },
        {
            path: '/sign-up',
            name: 'sign_up',
            component: SignUpView
        },
        {
            path: '/verify',
            name: 'verify',
            component: VerifyView
        },
        {
            path: '/simulator',
            name: 'lens_simulator',
            component: LensSimulatorView
        },
        {
            path: '/parameters',
            name: 'parameters',
            component: ListParametersView
        },
        {
            path: '/:catchAll(.*)',
            name: 'not_found',
            component: NotFoundView
        }
    ]
})

export default router
