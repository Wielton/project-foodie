<template>
    <div app>
        <!-- <h1>{{title}}</h1> -->
        <v-btn @click="fetchRestaurants">restaurants</v-btn>
            <v-container>
                <v-row>
                <v-col
                    v-for="restaurant in restaurants"
                    :key="restaurant.id"
                    :restaurant="restaurant">
                        <v-card max-width="300"
                            @click="fetchMenu(restaurant.id)"
                            >
                                <v-img>{{restaurant.bannerUrl}}</v-img>
                                <v-card-title>{{restaurant.name}}</v-card-title>
                                <v-card-subtitle>{{restaurant.bio}}</v-card-subtitle>
                                    <v-card-text>
                                        {{restaurant.address}}
                                        {{restaurant.phoneNum}}
                                        {{restaurant.city}}                                    </v-card-text>
                                </v-card>
                    </v-col>
                </v-row>
            </v-container>
    </div>

</template>

<script>
import axios from 'axios'
// import { useGetRestaurantStore } from '@/stores/getRestaurantStore';
// // import { useGetMenuStore } from '@/stores/getMenuStore';
// import {mapState,mapActions} from 'pinia';

    export default {
        
        name: 'RestaurantList',
        data: () => ({
            restaurants: []
    }),
        computed:{
            // ...mapState(useGetRestaurantStore,['title']),
            // ...mapActions(useGetRestaurantStore,['fetchRestaurants']),
            
        },
        // mounted(){
        //     this.fetchRestaurants;
        // },
        methods:{
            // ...mapActions(useGetMenuStore,['fetchMenu']),
            fetchRestaurants(){
            axios.request({
                url: process.env.VUE_APP_API_URL+"restaurant",
                method: "GET",
            }).then((response)=>{
                console.log(response.data);
                this.restaurants = response.data;
                for(let i = 0; i < this.restaurants.length; i++){
                    this.restaurantId = response.data[i].restaurantId;
                }
                console.log(this.restaurants);
                console.log(this.restaurantId);
                return this.restaurants;
            }).catch((error)=>{
                console.log(error);
                })
        }
        }
        
}
</script>

