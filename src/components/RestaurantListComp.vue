<template>
    <v-container app fluid>
        <h1>{{title}}</h1>
        <v-row>
            <v-col
                
                cols="12" sm="6" md="4" lg="4"
                v-for="restaurant in restaurants"
                :key="restaurant.restaurantId"
                :restaurant="restaurant"
                >
                <v-card 
                    max-width="300"
                    @click="fetchMenu(restaurant.restaurantId)"
                    >
                    <v-img :src="restaurant.bannerUrl" />
                    <v-card-title>{{restaurant.name}}</v-card-title>
                    <v-card-subtitle>{{restaurant.bio}}</v-card-subtitle>
                    <v-card-text>
                        {{restaurant.address}}
                        {{restaurant.phoneNum}}
                        {{restaurant.city}}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
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
            ...mapState(useGetRestaurantStore,['title', 'restaurants']),
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

