import { defineStore } from "pinia";
import axios from 'axios';
// import cookies from 'vue-cookies';
import { router } from '@/router';


export const useGetMenuStore = defineStore('getMenu',{
    state : ()=>({
        title: 'Menu',
        menuItems: []
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
                console.log(response);
                this.menuItems = response.data;
                
                router.push('/menu');
            }).catch((error)=>{
                console.log(error);
                })
        },
        
    },
    
})