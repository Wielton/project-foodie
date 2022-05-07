import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import CartView from '../views/CartView.vue'
import AboutUsView from  '../views/AboutUsView.vue'
import RestaurantListView from '../views/RestaurantListView.vue'
import RestaurantPortalView from '../views/RestaurantPortalView.vue'
import RestaurantHomeView from '../views/RestaurantHomeView.vue'
import ContactUsView from '../views/ContactUsView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/user-account/',
    name: 'user',
    component: UserView
  },
  {
    path: '/cart/',
    name: 'cart',
    component: CartView
  },
  {
    path: '/about-us/',
    name: 'about',
    component: AboutUsView
  },
  {
    path: '/restaurants/',
    name: 'restaurants',
    component: RestaurantListView
  },
  {
    path: '/contact-us/',
    name: 'contact',
    component: ContactUsView
  },
  {
    path: '/restaurant-portal/',
    name: 'restaurant-portal',
    component: RestaurantPortalView
  },
  {
    path: '/restaurant-home/',
    name: 'restaurant-home',
    component: RestaurantHomeView
  },
]

export const router = new VueRouter({
  routes
})

export default router
