import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'vue-cookies'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)



// router.beforeEach(async (to, from, next) => {
//   const user = useUser();
//   await user.get();

//   console.log(user) // user is defined

//   if (to.meta.requiresAuth && !user.isLoggedIn) next({ name: "home" }); // this will work
// code split and use lazy-loading of components
// There are Webpack Magic Comments within the component import statement
// Home page will always render
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user/:clientId',
    name: 'user',
    component: ()=>import(/* webpackChunkName: "user" */  '@/views/UserView.vue'),
    params: true,
    
  },
  {
    path: '/restaurants/',
    name: 'restaurants',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/RestaurantListView.vue'),
  },
  {
    path: '/about/',
    name: 'about',
    component: ()=>import(/* webpackChunkName: "about" */'@/views/AboutUsView.vue'),
  },
  // {
  //   path: '/contact/',
  //   component: ContactUsView,
  // },
  
  
  // {
  //   path: '/restaurant-home/:restaurantId',
  //   component: RestaurantHomeView,
  //   params: true,
  //   beforeEnter: (to, from, next) => {
  //     let access_token = cookies.get('restaurantSessionToken')
  //     if (access_token == null) {
  //         // user doesn't have access token, redirect to login
  //         next({ name: 'login' })
  //     }
  //     else {
  //         // user has access token, user can open the page
  //         next()
  //     }
  //   },
  // },
  {
    path: '/menu/',
    component: ()=>import(/* webpackChunkName: "menu" */ '@/views/MenuView.vue')
  },
  // {
  //   path: '/restaurant-portal/',
  //   component: RestaurantPortalView,
  // },
  {
    path: '/login',
    name: 'login',
    component: ()=>import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
  },
  // {
  //   path: '/signup',
  //   component: SignUpView
  // },
  {
    path: '/orders/:clientId',
    component: ()=>import(/* webpackChunkName: "orders" */ '@/views/OrdersView.vue'),
    params: true,
    // beforeEnter: (to, from, next) => {
    //   store.checkAuthorization();
    //   if (!store.isAuthorized ) {
    //       // user doesn't have access token, redirect to login
    //       next({ name: 'login' })
    //   }
    //   else {
    //       // user has access token, user can open the page
    //       next()
    //   }
    // },
  },
]

export const router = new VueRouter({
  routes,
})

router.beforeEach((to,from,next) => {
  let cookie = cookies.get('sessionToken')
  console.log(cookie)
  if (to.name === 'home' || to.name === 'contact' || to.name === 'about' || to.name === 'restaurants' && cookie === null) next()
  else if (to.name === 'user' && cookie === null) next({name: 'login'})
  else next()
})

export default router
