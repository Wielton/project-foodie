import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import { router} from '@/router'

export const useOrderStore = defineStore('cart',{
    state : ()=>{
        return {
            title: 'Your cart',
            itemMenuId: Number,
            items: [],
            cartItems: 0,
            finalOrder: {
                restaurantId: null,
                itemIds: [],
            },
            orders: [],
            errorMessage: null,
            successMessage: null
        }
    },getters: {
        
    },
    actions: {
        
        addMenuItem(item){
            // Also take the restaurantId as an argument to make sure the items are all from the same restaurant
            // Orders can't have more than one restaurant.  
            // Each restaurant needs its own order form.
            if (this.finalOrder.restaurantId === null){
                this.finalOrder.restaurantId = item.restaurantId
            }else if(this.finalOrder.restaurantId !== item.restaurantId){
                return
            }
            this.itemMenuId = item.menuId
            this.items.push(item)
            this.finalOrder.itemIds.push(this.itemMenuId)
            this.cartItems++
            this.updateCookie();
        },
        removeCartItem(items, item){
            let cartItem = items.indexOf(item);
            if(cartItem > -1){
                items.splice(cartItem, 1)
            }
            // console.log(cartItem +"removed");
            this.cartItems--
            this.updateCookie();
            return items;
            
        },
        updateCookie(){
            // Get the current cookie
            // if cookie doesn't exist, return nothing
            let currentItems = this.items
            // console.log(currentItems)
            let currentCookie = cookies.get('cartSession')
            if (!currentCookie){
                cookies.set('cartSession', currentItems)
                // console.log('cartSession cookie created with: ',currentItems)
            }else{
                // else get the current items in cart 
                // then remove cart cookie
                // set new cartSession cookie with currentItems in cart
                cookies.remove('cartSession')
                // console.log('Cart Cookie removed')
                cookies.set('cartSession', currentItems)
                // console.log('New Cart Cookie created with these items: ', currentItems)
            }
        },
        // Fetch the cart items when the component is loaded/reloaded
        getOrders(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"order",
                method: "GET",
                
                params: {
                    'sessionToken': cookies.get('sessionToken')
                }  
            }).then((response)=>{
                this.orders = response.data;
            }).catch((error)=>{
                this.errorMessage = error
                })
            },
        
            // Place order
        placeOrder(){
                let itemIds = this.finalOrder.itemIds
                let restaurantId = this.finalOrder.restaurantId
                axios.request({
                    url: process.env.VUE_APP_API_URL+"order",
                    method: "POST",
                    params: {
                        sessionToken: cookies.get('sessionToken')
                    },
                    data: {
                        itemIds,
                        restaurantId
                    }
                }).then(()=>{
                    router.push(
                        {name: 'orders'}
                    )
                    console.log('order placed');
                }).catch((error)=>{
                    this.errorMessage = error
                    
                })
            },
            // Order update:  Client can 'cancelOrder';  Restaurant can 'confirmOrder' and 'completeOrder'
            
            updateOrder(orderId,cancelOrder,confirmOrder,completeOrder){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"order",
                    method: "PATCH",
                    params : {
                        sessionToken: cookies.get('sessionToken'),
                        },
                    data: {
                        orderId,
                        cancelOrder,
                        confirmOrder,
                        completeOrder
                    }
                }).then((response)=>{
                    this.successMessage = response
                }).catch((error)=>{
                    this.errorMessage = error
                })
            },
        },
})