import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import {router} from '@/router';

export const useRestaurantStore = defineStore('restaurant',{
    state : ()=>{
        return {
            title: 'Restaurants',
            restaurantHomeTitle: 'Welcome',
            isAuthorized: false,
            restaurantUser: {},
            restaurantId: null
        }
    },
    actions: {
        // User sign up
        restaurantSignUpRequest(name,address,bio,city,phoneNum,bannerUrl,profileUrl,email,password){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "POST",
                data : {
                    name,
                    address,
                    bio,
                    city,
                    phoneNum,
                    bannerUrl,
                    profileUrl,
                    email,
                    password
                }  
            }).then((response)=>{
                cookies.set('restaurantSessionToken', response.data.restaurantSessionToken);
                this.isAuthorized = true
                this.restaurantId = response.data.restaurantId
                router.push({name: 'restaurant-home', params: {restaurantId: this.restaurantId}});
            }).catch((error)=>{
                console.log(error);
                })
            },
        // Restaurant login
        restaurantLoginRequest(email,password){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant-login",
                    method: "POST",
                    data: {
                        email,
                        password
                    }
                }).then((response)=>{
                    console.log(response)
                    cookies.set('restaurantSessionToken', response.data.restaurantSessionToken);
                    this.restaurantId = response.data.restaurantId;
                    console.log(this.restaurantId);
                    console.log('Logged in as restaurant');
                    router.push('/restaurant-home/:restaurantId');
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            // Restaurant account/profile info
            
            restaurantInfoChangeRequest(name,address,bio,city,phoneNum,bannerUrl,profileUrl,email,password){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant",
                    method: "PATCH",
                    params : {
                        restaurantSessionToken: cookies.get('restaurantSessionToken'),
                    },
                    data: {
                        name,
                        address,
                        bio,
                        city,
                        email,
                        password,
                        phoneNum,
                        bannerUrl,
                        profileUrl
                    }
                }).then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                })
            },
            restaurantLogoutRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant-login",
                    method: "DELETE",
                    params: {
                        restaurantSessionToken: cookies.get('restaurantSessionToken')
                    }
                }).then((response)=>{
                    console.log(response);
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
                
            },
            
            addMenuItem(name,description,price,imageUrl){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"menu",
                    method: "POST",
                    params: {
                        restaurantSessionToken: cookies.get('restaurantSessionToken')
                    },
                    data: {
                        name,
                        description,
                        price,
                        imageUrl
                    }
                }).then((response)=>{
                    console.log(response);
                    
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },



})