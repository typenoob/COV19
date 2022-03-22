import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
    {
        name: 'notFound',
        path: '/:path(.*)+',
        redirect: {
            name: 'index',
        },
    },
    {
        name: 'classification',
        path: '/classification',
        component: () => import('../views/classification/ClassificationMain'),
        meta: {
            title: '分类',
        },
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('../views/index/IndexMain'),
        meta: {
            title: '首页',
        },
    },
    {
        name: 'profile',
        path: '/profile',
        component: () => import('../views/profile/ProfileMain'),
        meta: {
            title: '账户',
        },
    },
    {
        name: 'star',
        path: '/star',
        component: () => import('../views/star/StarMain'),
        meta: {
            title: '收藏',
        },
    },
];

const router = createRouter({
    routes,
    history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export { router };
