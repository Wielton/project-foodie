import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';


export const useLoginStore = defineStore('login',{
    state : ()=>{
        return {
            title: 'In the moodie for Foodie',
            isLoggedIn : false,
            user: []
            
        }
    },
    actions: {
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
                
                    }
            }).then((response)=>{
                this.userId = response.clientId;
                this.userToken = response.token;
                this.signUpSuccess();
            }).catch((error)=>{
                console.log(error);
                
            })
            
            
            },
            loginRequest(){
                axios.request({
                    url: process.env.VUE_APP_API_URL+"client",
                    method: "GET",
                    headers : {
                        token: this.userToken,
                        'x-api-key' : process.env.VUE_APP_API_KEY
                        },
                        data: {
                            username: this.username,
                            password: this.password,
                        }
                }).then((response)=>{
                    console.log(response);
                    this.loginSuccess();
                }).catch((error)=>{
                    console.log(error);
                    
                })
            },
            signUpSuccess(){

            },
            loginSuccess(){

            },
            logout(){
                cookies.remove('sessionToken');
            }
        },

        getters: {
            
}


})
