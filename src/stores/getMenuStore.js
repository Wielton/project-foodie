import { defineStore } from "pinia";
import axios from 'axios';
import cookies from 'vue-cookies';
import { router } from '@/router';
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";

export const useGetMenuStore = defineStore('getMenu',{
    state : ()=>({
        title: 'Menu',
        
    }),
    
    actions: {
        // Restaurant populating upon login or signUp
        async fetchMenu(restaurantId){
            axios.request({
                url: process.env.VUE_APP_API_URL+"menu",
                method: "GET",
                headers : {

                },
                params : {
                    restaurantId
                }
            }).then((response)=>{
                console.log(response.data);
                this.menu = response.data;
                console.log(this.menu);
                cookies.set('menuSession');
                router.push('/menu/:restaurantId');
            }).catch((error)=>{
                console.log(error);
                })
        },
        addMenuItem(){

        }
    },
    getters: {
        
        
    }
})