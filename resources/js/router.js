//Core libraries
import Vue from "vue"
import VueRouter from "vue-router"
import store from "./store";

//Components
import Home from "./components/Pages/Home"
import OurFirm from "./components/Pages/OurFirm"
import Contact from "./components/Pages/Contact"
import ServicesMain from "./components/Pages/Services/Main"
import ServicesList from "./components/Pages/Services/List"
import Service from "./components/Pages/Services/View"

import ResourcesMain from "./components/Pages/News/Main"
import NewsList from "./components/Pages/News/List"
import News from "./components/Pages/News/Show"

import Dashboard from "./components/dashboard/Dashboard"
import DashboardServicesList from "./components/dashboard/Services/Main"
import DashboardServiceEdit from "./components/dashboard/Services/Edit"
import DashboardNewsList from "./components/dashboard/News/Main"
import DashboardNewEdit from "./components/dashboard/News/Edit"

import UserProfileMain from "./components/dashboard/Profile/Main"
import UsersList from "./components/dashboard/Profile/List"
import UserAdd from "./components/dashboard/Profile/Add"
import EditUser from "./components/dashboard/Profile/Edit"
import User from "./components/dashboard/Profile/User"

import QuotesMain from "./components/dashboard/Quotes/Main"

import Login from "./components/auth/Login"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes: [
        //Routes defination
        {
            path: "/",
            name: "home",
            component: Home
        }, {
            path: "/our-firm",
            component: OurFirm
        }, {
            path: "/practice-areas",
            component: ServicesMain,
            children: [{
                    path: '/',
                    component: ServicesList
                },
                {
                    path: ':id',
                    component: Service
                }
            ]
        },
        {
            path: "/contact",
            component: Contact
        },
        {
            path: "/dashboard",
            name: "dashboard",
            component: Dashboard,
            children: [
                //Sub-menu
                {
                    path: 'services',
                    component: DashboardServicesList
                },
                {
                    path: 'edit/:id',
                    component: DashboardServiceEdit
                },
                {
                    path: 'news',
                    component: DashboardNewsList
                }, {
                    path: 'news/edit/:id',
                    component: DashboardNewEdit
                }, {
                    path: 'quotes',
                    component: QuotesMain
                }
            ],

            beforeEnter: (to, from, next) => {
                if (!store.getters['auth/isAuthenticated']) {
                    return next('/login')
                }

                next()
            },
        },
        {
            path: "/login",
            component: Login,
            meta: {
                requiresAuth: false,
                hideForAuth: true,
            }
        },
        {
            path: "/resources",
            component: ResourcesMain,
            children: [
                //Sub-menus
                {
                    path: '/',
                    component: NewsList
                },
                {
                    path: ':id',
                    component: News
                }
            ]
        },
        {
            path: "/profile",
            component: UserProfileMain,
            children: [
                //Sub-menus
                {
                    path: '/',
                    component: UsersList
                },
                {
                    path: 'new',
                    component: UserAdd
                },
                {
                    path: '/edit/:id',
                    component: EditUser
                },
                {
                    path: 'user',
                    component: User
                }
            ],

            // beforeEnter: (to, from, next) => {
            //     if (!store.dispatch['auth/checkAuth']) {
            //         return next('/login')
            //     }

            //     next()
            // }
        }

    ]
});

router.beforeEach((to, from, next) =>
    Promise.all([store.dispatch("auth/checkAuth")]).then(next)
);

export default router;
