import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import { router } from '@/router'


export const useClientSignupStore = defineStore('clientSignup',{
    state : ()=>{
        return {
            isAuthorized: false,
            user: null,
            formData: {
                email: null,
                username: null,
                firstName: null,
                lastName: null
            }
            }
    },
    actions: {

// sessionToken GET userInfo for global use



// User sign up
        
        signUpRequest(email, username, firstName, lastName, password) {
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
                    password
                }
            }).then((response)=>{
                // get the sessionToken and userInfo from response
                console.log(response)
            }).catch((error)=>{
                console.log(error.response.data);
            })
            },
            


// user profile/account info
            
        accountInfoRequest(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "GET",
                params : {
                    'sessionToken': cookies.get('sessionToken'),
                    },
                }).then((response)=>{
                    console.log(response.data[0]);
                    this.user = response.data[0];
                    this.isAuthorized = true;
                }).catch((error)=>{
                    console.log(error);
                })
            },

// User profile field editing

        accountInfoChangeRequest(formData){
            this.accountInfoRequest();
            console.log(this.user)
            console.log(formData)
            if(formData.email !== null){
                formData.email
            }else{
                formData.email = this.user.email
            }
            if(formData.username !== null){
                formData.username
            }else{
                formData.username = this.user.username
            }
            if(formData.firstName !== null){
                formData.firstName
            }else{
                formData.firstName = this.user.firstName
            }
            if(formData.lastName !== null){
                formData.lastName
            }else{
                formData.lastName = this.user.lastName
            }
            axios.request({
                url: process.env.VUE_APP_API_URL+"client",
                method: "PATCH",
                params : {
                    'sessionToken': cookies.get('sessionToken'),
                    },
                data: {
                    formData
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
