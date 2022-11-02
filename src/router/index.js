import Vue from 'vue'
import VueRouter from 'vue-router'
import cookies from 'vue-cookies'
import HomeView from '../views/HomeView.vue'
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
    path: '/menu/',
    name: 'menu',
    component: ()=>import(/* webpackChunkName: "menu" */ '@/views/MenuView.vue')
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
  //   path: '/restaurant-portal/',
  //   component: RestaurantPortalView,
  // },
  // {
  //   path: '/restaurant-home/:restaurantId',
  //   component: RestaurantHomeView,
  //   params: true,
  // },
  
  // {
  //   path: '/signup',
  //   component: SignUpView
  // },
  {
    path: '/orders/:clientId',
    name: 'orders',
    component: ()=>import(/* webpackChunkName: "orders" */ '@/views/OrdersView.vue'),
    params: true,
  
  },
  {
    path: '/login',
    name: 'login',
    component: ()=>import(/* webpackChunkName: "login" */ '@/views/LoginView.vue'),
  },
]

export const router = new VueRouter({
  mode: 'history',
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
