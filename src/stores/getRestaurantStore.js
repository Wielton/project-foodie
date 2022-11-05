import { defineStore } from "pinia";
import axios from 'axios';


export const useGetRestaurantStore = defineStore('getRestaurant',{
    state : ()=>({
        title: "Restaurants",
        restaurants: []
    }),
    
    actions: {
        // Restaurant populating upon login or signUp
        fetchRestaurants(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "GET",
            }).then((response)=>{
                this.restaurants = response.data;
            }).catch((error)=>{
                console.log(error);
                })
        }
    },
    getters: {
        
        
    }
})