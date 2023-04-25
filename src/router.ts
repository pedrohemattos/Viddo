import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import Admin from './views/Admin.vue';

import Dashboard from './views/admin/Dashboard.vue';
import Tasks from './views/admin/Tasks.vue';
import Videos from './views/admin/Videos.vue';
import Brand from './views/admin/Brand.vue';
import Settings from './views/admin/Settings.vue';

const routes = [
    {
       path: "/",
       component: Home
    },
    {
        path: "/admin",
        redirect: "/admin/dashboard",
        component: Admin,
        children: [
            {
                path: "/admin/dashboard",
                component: Dashboard
            },
            {
                path: "/admin/tasks",
                component: Tasks
            },
            {
                path: "/admin/videos",
                component: Videos
            },
            {
                path: "/admin/brand",
                component: Brand
            },
            {
                path: "/admin/settings",
                component: Settings
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
});

