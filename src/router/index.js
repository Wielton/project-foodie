import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import AboutUsView from  '../views/AboutUsView.vue'
import RestaurantListView from '../views/RestaurantListView.vue'
import RestaurantPortalView from '../views/RestaurantPortalView.vue'
import RestaurantHomeView from '../views/RestaurantHomeView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import MenuView from '../views/MenuView.vue'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import OrdersView from '../views/OrdersView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/user-account/',
    name: 'user',
    component: UserView,
  },
  
  
  {
    path: '/about-us/',
    name: 'about',
    component: AboutUsView,
  },
  {
    path: '/restaurants/',
    name: 'restaurants',
    component: RestaurantListView,
  },
  {
    path: '/contact-us/',
    name: 'contact',
    component: ContactUsView,
  },
  {
    path: '/restaurant-home/',
    name: 'restaurant-home',
    component: RestaurantHomeView,
  },
  {
    path: '/menu/',
    name: 'menu',
    component: MenuView
  },
  {
    path: '/restaurant-portal/',
    name: 'restaurant-portal',
    component: RestaurantPortalView,
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpView
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView
  },
]

export const router = new VueRouter({
  routes
})

export default router
