import { defineStore } from "pinia"
import axios from 'axios';
import cookies from 'vue-cookies';
import { router } from '@/router'


// Use Options API as this is Server-side rendered
export const useLoginStore = defineStore('login',{
    state : ()=>({
        successMessage: null,
        errorMessage: null
    }),
    getters: {
        // getIsAuthorized(state){
        //     return state.isAuthorized;
        // },
        // getUser(state){
        //     return state.user;
        // }
    },
    actions: {
        // setUser(user){
        //     this.user = user;
        // },
        // setAuthorized(boolean){
        //     this.isAuthorized = boolean;
        // },
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
                    router.push({name: 'restaurants'});

                }).catch((error)=>{
                    // console.log(error.response.data);
                    // console.log('Something is going wrong')
                    this.loginFailed(error.response);
                })
            },
            loginFailed(error){
                return (error)
            },
            


        // User logout 
        
        logoutRequest(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client-login",
                method: "DELETE",
                params: {
                    sessionToken : cookies.get('sessionToken'),
                    }
                }).then(()=>{
                    
                    cookies.remove('sessionToken');
                    router.push({name: 'home'})
                }).catch((error)=>{
                    this.errorMessage = error
                })
            },
            
        },
})
