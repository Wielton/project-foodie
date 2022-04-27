import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';

//   This is the syntax for creating your store || name the store something


// export const useCounterStore = defineStore('counter', {
//     state : () => {
//         return{

//         }
//     },
//     actions: {

//     },
//     getters: {

//     }
// })
    // getters: {
    //     firstInitial: state => {
    //         return state.username.charAt(0);
    //     },
    //     // create two getters for the response
    //     quoteHttpCode : state =>{
    //         if (state.kanyeResponse){
    //             return state.kanyeResponse.status;
    //         }
    //         return undefined;
    //     },
    //     quoteText : state =>{
    //         if (state.kanyeResponse){
    //             return state.kanyeResponse.data.quote;
    //         }
    //         return undefined;
            
    //     }
    // }
export const useLoginStore = defineStore('login',{
    state : ()=>{
        return {
            title: 'In the moodie for Foodie',
            isLoggedIn : false,
            userToken: undefined
            
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
                this.userToken = response;
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