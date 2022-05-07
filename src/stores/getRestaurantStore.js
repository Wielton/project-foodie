import { defineStore } from "pinia";
import axios from 'axios';
// import cookies from 'vue-cookies';
// import { router } from '@/router';
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";

export const useGetRestaurantStore = defineStore('getRestaurant',{
    state : ()=>({
        title: 'Restaurants for you...',
        
    }),
    actions: {
        // Restaurant populating upon login or signUp
        async fetchRestaurants(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "GET",
                headers : {},
            }).then((response)=>{
                console.log(response);
                this.restaurants = response.data;
                console.log(this.restaurants);
            }).catch((error)=>{
                console.log(error);
                })
        }
    },
    
})