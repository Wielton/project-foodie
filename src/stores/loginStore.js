import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';


export const useLoginStore = defineStore('login',{
    state : ()=>{
        return {
            title: 'In the moodie for Foodie',
            isLoggedIn : false,
            username: this.username,
            password: this.password
            
        }
    },
    actions: {
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
            
            loginSuccess(){

            },
            logout(){
                cookies.remove('sessionToken');
            }
        },

        getters: {
            
}


})