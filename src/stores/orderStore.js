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
            finalOrder: {
                restaurantId: null,
                itemIds: [],
            },
            orders: [],
        }
    },
    actions: {
        
        addMenuItem(item){
            // Also take the restaurantId as an argument to make sure the items are all from the same restaurant
            // Orders can't have more than one restaurant.  
            // Each restaurant needs its own order form.
            console.log(item.restaurantId)
            console.log(this.finalOrder.restaurantId)
            if (this.finalOrder.restaurantId === null){
                this.finalOrder.restaurantId = item.restaurantId
            }else if(this.finalOrder.restaurantId !== item.restaurantId){
                return
            }
            this.itemMenuId = item.menuId
            this.items.push(item)
            this.finalOrder.itemIds.push(this.itemMenuId)
            console.log(this.finalOrder, this.menuItemId, this.finalOrder.restaurantId)
            this.updateCookie();
        },
        removeCartItem(items, item){
            let cartItem = items.indexOf(item);
            if(cartItem > -1){
                items.splice(cartItem, 1)
            }
            console.log(cartItem +"removed");
            this.updateCookie();
            return items;
            
        },
        updateCookie(){
            // Get the current cookie
            // if cookie doesn't exist, return nothing
            let currentItems = this.items
            console.log('current items: ', currentItems)
            let currentCookie = cookies.get('cartSession')
            console.log('current cookie: ', currentCookie)
            if (currentCookie == null){
                cookies.set('cartSession', currentItems)
                console.log('cartSession cookie created with: ', currentItems)
            }else{
                // else get the current items in cart 
                // then remove cart cookie
                // set new cartSession cookie with currentItems in cart
                cookies.remove('cartSession')
                console.log('Cart Cookie removed')
                cookies.set('cartSession',currentItems)
                console.log('New Cart Cookie created with these items: ', currentItems)
            }
        },
        fetchCookie(){
            let currentCookie = cookies.get('cartSession')
            if (currentCookie === null){
                return
            }else{
                console.log('The current cart cookie: ', currentCookie)
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
                console.log(error);
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
                }).then((response)=>{
                    console.log(response);
                    router.push(
                        {name: 'orders'}
                    )
                    console.log('order placed');
                }).catch((error)=>{
                    console.log(error);
                    
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
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                })
            },
        },
})