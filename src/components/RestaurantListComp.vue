<template>
    <div app>
        <h1>{{title}}</h1>
            <v-container>
                <v-row>
                <v-col
                    v-for="restaurant in restaurants"
                    :key="restaurant.restaurantId"
                    :restaurant="restaurant.restaurantId">
                        <v-card max-width="300"
                            @click="fetchMenu(restaurant.restaurantId)"
                            >
                                <v-img>{{restaurant.bannerUrl}}</v-img>
                                <v-card-title>{{restaurant.name}}</v-card-title>
                                <v-card-subtitle>{{restaurant.bio}}</v-card-subtitle>
                                    <v-card-text>
                                        {{restaurant.address}}
                                        {{restaurant.city}}
                                        {{restaurant.profileUrl}}
                                    </v-card-text>
                                </v-card>
                </v-col>
                </v-row>
            </v-container>
    </div>

</template>

<script>

import { useGetRestaurantStore } from '@/stores/getRestaurantStore';
import { useGetMenuStore } from '@/stores/getMenuStore';
import {mapState,mapActions} from 'pinia';

    export default {
        
        name: 'RestaurantList',
        data: () => ({
            
    }),
        computed:{
            ...mapState(useGetRestaurantStore,['title']),
            ...mapState(useGetRestaurantStore,['restaurants']),
            
            ...mapActions(useGetRestaurantStore,['fetchRestaurants']),
            
        },
        mounted(){
            this.fetchRestaurants;
        },
        methods:{
            ...mapActions(useGetMenuStore,['fetchMenu']),
            
        }
        
}
</script>

