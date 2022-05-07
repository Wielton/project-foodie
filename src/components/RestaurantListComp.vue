<template>
<div app>
    <h1>{{title}}</h1>
    <v-btn @click="fetchRestaurants">Click</v-btn>
        <ul>
            <li v-for="restaurant in restaurants"
                :key="restaurant.restaurantId"
                >
                <v-card>
                    <v-card-title>{{restaurant.name}}</v-card-title>
                    <v-card-subtitle>{{restaurant.bio}}</v-card-subtitle>
                </v-card>
            </li>
        </ul>
</div>
</template>

<script>
import { useGetRestaurantStore } from '@/stores/getRestaurantStore';
import { mapState, mapActions } from 'pinia';

    export default {
        name: 'RestaurantList',
        data: () => ({
        
    }),
        computed:{
            ...mapState(useGetRestaurantStore,['title']),
            ...mapState(useGetRestaurantStore,['restaurants']),
            
            
            
        },
        methods: {
            ...mapActions(useGetRestaurantStore,['fetchRestaurants'])
        },
        
    }
</script>

