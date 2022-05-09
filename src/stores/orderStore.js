import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";

export const useOrderStore = defineStore('cart',{
    state : ()=>{
        return {
            title: 'Your cart',
            items: []
        }
    },
    actions: {
        
        addMenuItem(item){
            this.items.push(item);
            console.log(item + 'added to cart');
            console.log(this.items);
            return this.items;
            
        },
        removeCartItem(items, item){
            let cartItem = items.indexOf(item);
            if(cartItem > -1){
                items.splice(cartItem, 1)
            }
            console.log(cartItem +"removed");
            return items;
            
        },
        // Cart fetch
        getCartItems(orderId){
            axios.request({
                url: process.env.VUE_APP_API_URL+"order",
                method: "GET",
                headers : {
                    token: cookies.get('sessionToken')
                    },
                data : {
                    orderId
                }  
            }).then((response)=>{
                console.log(response);
            }).catch((error)=>{
                console.log(error);
                })
            },
        
            // Place order
        placeOrder(restaurantId, items){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"order",
                    method: "POST",
                    headers : {
                        token: cookies.get('sessionToken')
                        },
                        data: {
                            restaurantId,
                            items
                        }
                }).then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            // Order update:  Client can 'cancelOrder';  Restaurant can 'confirmOrder' and 'completeOrder'
            
            updateOrder(orderId,cancelOrder,confirmOrder,completeOrder){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"order",
                    method: "PATCH",
                    headers : {
                        token: cookies.get('sessionToken'),
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