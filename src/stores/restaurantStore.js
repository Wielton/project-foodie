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
            restaurantId: null,
            errorMessage: null,
            successMessage: null
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
                this.errorMessage = error;
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
                    cookies.set('restaurantSessionToken', response.data.restaurantSessionToken);
                    this.restaurantId = response.data.restaurantId;
                    router.push({name: 'restaurant-home', params: {restaurantId: this.restaurantId}});
                }).catch((error)=>{
                    this.errorMessage = error;
                    
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
                    this.successMessage = response;
                }).catch((error)=>{
                    this.errorMessage = error;
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
                    this.successMessage = response;
                    router.push({name: 'home'});
                }).catch((error)=>{
                    this.errorMessage = error;
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
                    this.successMessage = response;
                    
                }).catch((error)=>{
                    this.errorMessage = error;
                })
            }
        },



})