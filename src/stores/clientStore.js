import { defineStore } from "pinia";
import axios from 'axios';



export const useClientStore = defineStore('client',{
    state : ()=>{
        return {
            title: 'In the moodie for Foodie',
            isLoggedIn : false,
            
            
        }
    },
    actions: {
        // User sign up
        signUpRequest() {
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "POST",
                headers : {
                    'x-api-key' : process.env.VUE_APP_API_KEY
                    },
                data : {
                    email: this.email,
                    username: this.username,
                    firstName: this.firstName,
                    lastName: this.lastName,
                    password: this.password,
                    pictureUrl : this.pictureUrl
                }
            }).then((response)=>{
                this.userToken = response.token;
                this.signUpSuccess();
            }).catch((error)=>{
                console.log(error);
                })
            },
            // User login
            loginRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client-login",
                    method: "POST",
                    headers : {
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                        data: {
                            email: this.email,
                            password: this.password,
                        }
                }).then((response)=>{
                    this.userToken = response.token;
                    this.loginSuccess();
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            // user profile/account info
            accountInfoRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client",
                    method: "GET",
                    headers : {
                        token: this.$cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                        
                }).then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            accountInfoChangeRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client",
                    method: "PATCH",
                    headers : {
                        token: this.$cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                    data: {
                        email : this.email,
                        username : this.username,
                        firstName : this.firstname,
                        lastName : this.lastname,
                        password : this.password,
                        pictureUrl : this.pictureUrl
                    }
                }).then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },

            signUpSuccess(){

            },
            loginSuccess(){

            },
            logoutRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client-login",
                    method: "DELETE",
                    headers: {
                        'x-api-key' : process.env.VUE_APP_API_KEY,
                        token: this.$cookies.get('sessionToken'),
                    }
                }).then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                })
                
            },
            userDeleteRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client",
                    method: "DELETE",
                    headers: {
                        token: this.$cookies.get('sessionToken'),
                        'x-api-key' : process.env.VUE_APP_API_KEY
                    }
                }).then((response)=>{
                    console.log(response);
                }).catch((error)=>{
                    console.log(error);
                })
            }
        },

        getters: {
            
}


})
