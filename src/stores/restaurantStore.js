import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import {router} from '@/router';

export const useRestaurantStore = defineStore('restaurant',{
    state : ()=>{
        return {
            title: 'Restaurants',
            isLoggedIn : false
        }
    },
    actions: {
        // User sign up
        restaurantSignUpRequest(name,address,bio,cityName,phoneNum,bannerUrl,profileUrl,email,password){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "POST",
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY
                    },
                data : {
                    name,
                    address,
                    bio,
                    cityName,
                    email,
                    password,
                    phoneNum,
                    bannerUrl,
                    profileUrl
                }
            }).then((response)=>{
                cookies.set('sessionToken', response.token);
                router.push('/restaurant-portal');
            }).catch((error)=>{
                console.log(error);
                })
            },
            // User login
            restaurantLoginRequest(email,password){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant-login",
                    method: "POST",
                    headers : {
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                        data: {
                            email,
                            password
                        }
                }).then((response)=>{
                    cookies.set('sessionToken', response.token);
                    router.push('/restaurant-portal');
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            // user profile/account info
            restaurantPopulateRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant",
                    method: "GET",
                    headers : {
                        token: cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                }).then((response)=>{
                    console.log(response);
                    router.push('/restaurants');
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            restaurantInfoChangeRequest(name,address,bio,cityName,phoneNum,bannerUrl,profileUrl,email,password){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant",
                    method: "PATCH",
                    headers : {
                        token: cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                    data: {
                        name,
                        address,
                        bio,
                        cityName,
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
                    headers: {
                        'x-api-key' : process.env.VUE_APP_API_KEY,
                        token: cookies.get('sessionToken'),
                    }
                }).then((response)=>{
                    console.log(response);
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
                
            },
            restaurantDeleteRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant",
                    method: "DELETE",
                    headers: {
                        token: cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY
                    }
                }).then((response)=>{
                    console.log(response);
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },



})