import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'vue-cookies'
import HomeView from '../views/HomeView.vue'
import {useClientSignupStore} from '../stores/clientSignupStore'
Vue.use(VueRouter)




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
    path: '/user/:clientId/:slug',
    name: 'user', // Add a 'slug' with user.show
    component: ()=>import(/* webpackChunkName: "user" */  '@/views/UserView.vue'),
    beforeEnter: (to, from, next) => {
      // ...
      const store = useClientSignupStore
      const user = store(user)
      const cookie = cookies.get('sessionToken')
      // const user = store
      console.log(cookie, user.isAuthorized)
      if (!user.isAuthorized && !cookie) next({name: 'login'})
      else next()
    }

  },
  {
    path: '/restaurants/',
    name: 'restaurants',
    component: ()=>import(/* webpackChunkName: "restaurants" */'@/views/RestaurantListView.vue'),
  },
  {
    path: 'restaurants/menu/',
    name: 'menu',
    component: ()=>import(/* webpackChunkName: "menu" */ '@/views/MenuView.vue')
  },
  {
    path: '/about/',
    name: 'about',
    component: ()=>import(/* webpackChunkName: "about" */ '@/views/AboutUsView.vue'),
  },
  
  
  {
    path: '/signup',
    name: 'signup',
    component: ()=>import(/* webpackChunkName: "signup" */ '@/views/SignUpView.vue'),
  },
  {
    path: '/orders/',
    name: 'orders',
    component: ()=>import(/* webpackChunkName: "orders" */ '@/views/OrdersView.vue'),
    
  
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
  },
  {
    path: '/restaurant-portal/',
    name: 'restaurant-portal',
    component: ()=>import(/* webpackChunkName: "restaurant portal" */ '@/views/RestaurantPortalView.vue')
  },
  {
    path: '/restaurant-portal/restaurant-home/:restaurantId',
    name: 'restaurant-home',
    component: ()=>import(/* webpackChunkName: "restaurant home" */ '@/views/RestaurantHomeView.vue'),
    // beforeEnter: (to, from, next) => {
    //   // ...
    //   const store = useClientSignupStore
    //   const user = store(user)
    //   const cookie = cookies.get('sessionToken')
    //   // const user = store
    //   console.log(cookie, user.isAuthorized)
    //   if (!user.isAuthorized && !cookie) next({name: 'login'})
    //   else next()
    // }
  },
  {
    path: '/user/:clientId/cart',
    name: 'cart',
    component: ()=>import(/* webpackChunkName: "cart" */ '@/views/CartView.vue'),
  }
  
]

export const router = new VueRouter({
  mode: 'history',
  routes,
})


export default router
