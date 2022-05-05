import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import { router } from '@/router'
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";

export const useClientStore = defineStore('client',{
    state : ()=>{
        return {
            title: 'In the moodie for Foodie',
            isLoggedIn : false,
            
        }
    },
    actions: {


// User sign up
        
        signUpRequest(email, username, firstName, lastName, password, pictureUrl) {
            axios.request({ 
                url: process.env.VUE_APP_API_URL+"client",
                method: "POST",
                headers : {
                    },
                data : {
                    email,
                    username,
                    firstName,
                    lastName,
                    password,
                    pictureUrl
                }
            }).then((response)=>{
                console.log(response.data.token)
                console.log(response.data.clientId);
                cookies.set('sessionToken', response.data.token);
                router.push('/restaurants');
            }).catch((error)=>{
                console.log(error);
                this.signUpFailed();
            })
            },



// -------------------------------------------------------------------------------
            
// User login
            
        loginRequest(email, password){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client-login",
                method: "POST",
                headers : {
                    },
                data: {
                    email,
                    password,
                    }
                }).then((response)=>{
                    cookies.set('sessionToken', response.data.token);
                    router.push('/restaurants');
                    
                }).catch((error)=>{
                    console.log(error);
                    this.loginFailed();
                })
            },
            loginFailed(){
                
            },


// -------------------------------------------------------------------------------
            
// user profile/account info
            
        accountInfoRequest(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "GET",
                headers : {
                    'token': cookies.get('sessionToken'),
                    },
                }).then((response)=>{
                    console.log(response.data);
                    router.push('/user-account/');
                }).catch((error)=>{
                    console.log(error);
                })
            },





// -------------------------------------------------------------------------------
            
// User profile field editing

        accountInfoChangeRequest(username, firstName, lastName, password, pictureUrl){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "PATCH",
                headers : {
                    'token': cookies.get('sessionToken'),
                    },
                data: {
                    username,
                    firstName,
                    lastName,
                    password,
                    pictureUrl
                    }
                }).then((response)=>{
                    console.log(response);
                    this.accountInfoChangedSuccess();
                }).catch((error)=>{
                    console.log(error);
                })
            },
            accountInfoChangedSuccess(){

            },



// -------------------------------------------------------------------------------
            
// User logout 
        
        logoutRequest(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client-login",
                method: "DELETE",
                headers: {
                    'token': cookies.get('sessionToken'),
                    }
                }).then((response)=>{
                    console.log(response);
                    console.log('User was logged out');
                    cookies.remove('sessionToken');
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            },

// -------------------------------------------------------------------------------

//  User delete
            
        userDeleteRequest(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "DELETE",
                headers: {
                    token: cookies.get('session'),
                    },
                }).then((response)=>{
                    console.log(response);
                    console.log('User has been deleted');
                    cookies.remove('sessionToken');
                    router.push('/');
                }).catch((error)=>{
                    console.log(error);
                })
            },


// Restaurant populating upon login or signUp
restaurantPopulateRequest(){
    axios.request({
        url: process.env.VUE_APP_API_URL+"restaurant",
        method: "GET",
        headers : {
            'x-api-key' : process.env.VUE_APP_API_KEY
            },
    }).then((response)=>{
        console.log(response);
        this.restaurants = response.data;
        console.log(this.restaurants);
    }).catch((error)=>{
        console.log(error);
        
    })
},
        },
})
