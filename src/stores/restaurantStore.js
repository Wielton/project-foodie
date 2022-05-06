import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import {router} from '@/router';
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";
export const useRestaurantStore = defineStore('restaurant',{
    state : ()=>{
        return {
            title: 'Restaurants',
            restaurantHomeTitle: 'Welcome',
            isLoggedIn : false
        }
    },
    actions: {
        // User sign up
        restaurantSignUpRequest(name,address,bio,city,phoneNum,bannerUrl,profileUrl,email,password){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "POST",
                headers : {
                    
                    },
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

                cookies.set('sessionToken', response.data.token);
                router.push('/restaurant-home/');
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
            // Restaurant account/profile info
            
            restaurantInfoChangeRequest(name,address,bio,city,phoneNum,bannerUrl,profileUrl,email,password){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"restaurant",
                    method: "PATCH",
                    headers : {
                        token: cookies.get('sessionToken'),
                        
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
                    headers: {
                        
                        token: cookies.get('sessionToken')
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
                        token: cookies.get('sessionToken')
                        
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