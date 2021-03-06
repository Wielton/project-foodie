import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import { router } from '@/router'
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";

export const useClientStore = defineStore('client',{
    state : ()=>{
        return {
            title: 'Are you in the moodie for Foodie?',
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
            }).catch((error)=>{
                console.log(error.response.data);
                this.signUpFailed(error.response);
            })
            },
            signUpFailed(error){
                return (error)
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
                    this.userId = response.data.clientId;
                    this.userName = response.data.name;
                    console.log(this.userName + ' with the id: ' + this.userId + ' is now logged in.');
                    console.log(cookies.get('sessionToken'));
                }).catch((error)=>{
                    console.log(error.response.data);
                    this.loginFailed(error.response);
                })
            },
            loginFailed(error){
                return (error)
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
                    this.user = response.data;
                    router.push('/user-account/:clientId');
                }).catch((error)=>{
                    console.log(error);
                })
            },





// -------------------------------------------------------------------------------
            
// User profile field editing

        accountInfoChangeRequest(email, username, firstName, lastName, password, pictureUrl){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "PATCH",
                headers : {
                    'token': cookies.get('sessionToken'),
                    },
                data: {
                    email,
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
                return alert(this.username +"'s info successfully updated." );
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



        },
})
