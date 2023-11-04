import { createRouter, createWebHistory } from "vue-router";

import { auth } from "../firebase/firebaseconfig.js";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeLandingPage.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: '/service-provider/:id',
      name: 'service-provider',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ServiceProvider.vue'),
      meta:{
        requiresAuth:true
      },
     
      
    },
    // {
    //   path: '/search-result',
    //   name: 'search-result',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/SearchResult.vue'),
    //   meta:{
    //     requiresAuth:true
    //   }
    // },
    
    {
      path: "/loginPage",
      name: "LoginPage", // eslint-disable-next-line
      component: () => import("../views/LoginPage.vue"),
    },
    
   {
      path: '/LandingPage',
      name: 'LandingPage', // eslint-disable-next-line
      component: () => import('../views/LandingPage.vue'),
    },
    {
      path: '/Searchpage',
      name: 'Searchpage',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Searchpage.vue'),
      // meta:{
      //   requiresAuth:true
      // }
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/SPHome',
      name: 'SPHome',
      component: () => import('../views/SPHome.vue')
    },
    {
      path: '/LearningAvenue',
      name: 'LearningAvenue',
      component: () => import('../views/LearningAvenue.vue')
    },
    {
      path: '/Permits&Requirements',
      name: 'Permits&Requirements',
      component: () => import('../views/Permits&Requirements.vue')
<<<<<<< HEAD
    }
=======
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../firebase/test.vue')
    },
>>>>>>> dev
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === "/loginPage" && auth.currentUser) {
    next("/"); //want to redirect to home, return
    return;
  } //from login to home, where next you want to go to

  if (
    to.matched.some((record) => record.meta.requiresAuth) &&
    !auth.currentUser
  ) {
    next("/loginPage"); //need to modify this because we do not want the user to redirect if they are not logged in

    return;
  }

  next();
});

export default router;
