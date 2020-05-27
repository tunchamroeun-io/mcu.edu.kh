import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    scrollBehavior() {
        return {x: 0, y: 0}
    },
    routes: [

        {
            // =============================================================================
            // MAIN LAYOUT ROUTES
            // =============================================================================
            path: '',
            component: () => import('./layouts/main/Main.vue'),
            children: [
                // =============================================================================
                // Theme Routes
                // =============================================================================
                {
                    path: '/',
                    name: 'home',
                    component: () => import('./views/Home.vue')
                },
                {
                    path: '/about-us',
                    name: 'about-us',
                    component: () => import('./views/about/About'),
                    meta: {
                        pageTitle: 'About Us',
                        rule: 'editor'
                    }
                },
                {
                    path: '/academic',
                    name: 'academic',
                    component: () => import('./views/academic/Academic'),
                    meta: {
                        pageTitle: 'Academic',
                        rule: 'editor'
                    }
                },
                {
                    path: '/office-center',
                    name: 'office-center',
                    component: () => import('./views/office/Office'),
                    meta: {
                        pageTitle: 'Office/Center',
                        rule: 'editor'
                    }
                },
                {
                    path: '/news',
                    name: 'news',
                    component: () => import('./views/news/News'),
                    meta: {
                        pageTitle: 'News',
                        rule: 'editor'
                    }
                },
                {
                    path: '/news/:id/:title',
                    name: 'single-news',
                    component: () => import('./views/news/NewsIndex'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/'},
                            {title: 'News', url: '/news'},
                            {title: 'Title', active: true},
                        ],
                        pageTitle: 'Title',
                        rule: 'editor'
                    }
                },
                {
                    path: '/gallery',
                    name: 'gallery',
                    component: () => import('./views/gallery/Gallery'),
                    meta: {
                        pageTitle: 'Gallery',
                        rule: 'editor'
                    }
                },
                {
                    path: '/project',
                    name: 'project',
                    component: () => import('./views/international-affair/Project'),
                    meta: {
                        pageTitle: 'Projects',
                        rule: 'editor'
                    }
                },
                {
                    path: '/collaboration',
                    name: 'collaboration',
                    component: () => import('./views/international-affair/Collaboration'),
                    meta: {
                        pageTitle: 'Collaboration Agreements',
                        rule: 'editor'
                    }
                },
                {
                    path: '/library',
                    name: 'library',
                    component: () => import('./views/library/Library'),
                    meta: {
                        pageTitle: 'Library',
                        rule: 'editor'
                    }
                },
                {
                    path: '/gallery/:id/:title',
                    name: 'single-gallery',
                    component: () => import('./views/gallery/GalleryIndex'),
                    meta: {
                        breadcrumb: [
                            {title: 'Home', url: '/'},
                            {title: 'Gallery', url: '/gallery'},
                            {title: 'Title', active: true},
                        ],
                        pageTitle: 'Title',
                        rule: 'editor'
                    }
                },
                {
                    path: '/video',
                    name: 'video',
                    component: () => import('./views/video/Video'),
                    meta: {
                        pageTitle: 'Video',
                        rule: 'editor'
                    }
                },
                {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('./views/contact/Contact'),
                    meta: {
                        pageTitle: 'Contact',
                        rule: 'editor'
                    }
                },
                {
                    path: '/page2',
                    name: 'page-2',
                    component: () => import('./views/Page2.vue'),
                    meta: {
                        breadcrumb: [
                            {title: 'ទំព័រដើម', url: '/'},
                            {title: 'អ្នកប្រើប្រាស់', active: true},
                        ],
                        pageTitle: 'អ្នកប្រើប្រាស់',
                        rule: 'editor'
                    }
                },

            ],
        },
        // =============================================================================
        // FULL PAGE LAYOUTS
        // =============================================================================
        {
            path: '',
            component: () => import('./layouts/full-page/FullPage.vue'),
            children: [
                // =============================================================================
                // PAGES
                // =============================================================================
                {
                    path: '/pages/login',
                    name: 'page-login',
                    component: () => import('./views/pages/Login.vue')
                },
                {
                    path: '/pages/error-404',
                    name: 'page-error-404',
                    component: () => import('@/views/pages/Error404.vue')
                },
            ]
        },
        // Redirect to 404 page, if no match found
        {
            path: '*',
            redirect: '/pages/error-404'
        }
    ],
});

router.afterEach(() => {
    // Remove initial loading
    const appLoading = document.getElementById('loading-bg')
    if (appLoading) {
        appLoading.style.display = "none";
    }
});

export default router
