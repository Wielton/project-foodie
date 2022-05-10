import { defineStore } from "pinia";
import axios from 'axios';
// import cookies from 'vue-cookies';
// import { router } from '@/router';
axios.defaults.headers.common['x-api-key'] = process.env.VUE_APP_API_KEY;
axios.defaults.headers.common['Content-Type'] = "application/json";

export const useGetRestaurantStore = defineStore('getRestaurant',{
    state : ()=>({
        title: "Restaurants",
    }),
    
    actions: {
        // Restaurant populating upon login or signUp
        fetchRestaurants(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "GET",
                headers : {},
            }).then((response)=>{
                console.log(response.data);
                this.restaurants = response.data;
                for(let i = 0; i < this.restaurants.length; i++){
                    this.restaurantId = response.data[i].restaurantId;
                }
                console.log(this.restaurants);
                console.log(this.restaurantId);
                return this.restaurantId;
            }).catch((error)=>{
                console.log(error);
                })
        }
    },
    getters: {
        
        
    }
})