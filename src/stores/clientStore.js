import { defineStore } from "pinia"
import axios from 'axios';
import cookies from 'vue-cookies';
import { router } from '@/router'


// Use Options API as this is Server-side rendered
export const useLoginStore = defineStore('login',{
    state : ()=>({
        title: 'Login'
    }),
    actions: {

        // User login
            
        loginRequest(email, password){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client-login",
                method: "POST",
                data: {
                    email,
                    password,
                    }
                }).then((response)=>{
                    cookies.set('sessionToken', response.data.sessionToken);
                    router.push('/restaurants');
                }).catch((error)=>{
                    console.log(error.response.data);
                    console.log('Something is going wrong')
                    this.loginFailed(error.response);
                })
            },
            loginFailed(error){
                return (error)
            },
            // setLoggedIn(){
            //     const cookie = cookies.get('sessionToken');
            //     if (cookie){
            //         this.isLoggedIn = true;
            //         console.log('User is logged in', this.isLoggedIn)
            //     }else{
            //         this.isLoggedIn = false;
            //         console.log('Reroute to login', this.isLoggedIn)
            //     }
            // },


        // User logout 
        
        logoutRequest(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client-login",
                method: "DELETE",
                params: {
                    sessionToken : cookies.get('sessionToken'),
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
        },
})
