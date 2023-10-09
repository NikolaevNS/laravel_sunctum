import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    routes: [
        {
            path: '/get' , component: () => import('./components/Get.vue'),
            name: 'get.index',
        },
        {
            path: '/user/login' , component: () => import('./components/Login.vue'),
            name: 'user.login',
        },
        {
            path: '/user/registration' , component: () => import('./components/Registration.vue'),
            name: 'user.registration',
        },
        {
            path: '/user/personal' , component: () => import('./components/Personal.vue'),
            name: 'user.personal',
        },
    ],
    history: createWebHistory()
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('x_xsrf_token');

    if (!token) {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next();
        }
        else {
            return next({
                name: 'user.login'
            })
        }
    }
    else {
        if (to.name === 'user.login' || to.name === 'user.registration') {
            return next({
                name: 'user.personal'
            })
        }
        else{
            return next()
        }
    }
})

export default router
