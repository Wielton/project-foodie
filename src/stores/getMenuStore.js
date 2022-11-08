import { defineStore } from "pinia";
import axios from 'axios';
// import cookies from 'vue-cookies';
import { router } from '@/router';


export const useGetMenuStore = defineStore('getMenu',{
    state : ()=>({
        title: 'Menu',
        menuItems: [],
        errorResponse: null,
    }),
    
    actions: {
        // Restaurant populating upon login or signUp
        fetchMenu(restaurantId){
            axios.request({
                url: process.env.VUE_APP_API_URL+"menu",
                method: "GET",
                params : {
                    restaurantId
                }
            }).then((response)=>{
                this.menuItems = response.data;
                router.push({name: 'menu'});
            }).catch((error)=>{
                this.errorResponse = error;
                })
        },
        
    },
    
})