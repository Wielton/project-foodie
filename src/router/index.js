import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import CartView from '../views/CartView.vue'
import ThankYouView from  '../views/ThankYouView.vue'
import OrdersPortalView from '../views/OrderPortalView.vue'
import RestaurantPortalView from '../views/RestaurantPortalView.vue'

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
    path: '/thankyou/',
    name: 'thankyou',
    component: ThankYouView
  },
  {
    path: '/restaurants/',
    name: 'restaurants',
    component: OrdersPortalView
  },
  {
    path: '/restaurant-portal/',
    name: 'restaurant-portal',
    component: RestaurantPortalView
  }
]

export const router = new VueRouter({
  routes
})

export default router
