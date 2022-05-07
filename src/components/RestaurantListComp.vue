<template>
<div app>
        <h1>{{title}}</h1>
        
        <v-spacer></v-spacer>
        
        <v-container fluid>
            <v-layout>
                <v-flex >
                    <v-card>
                        <v-container fluid grid-list-md>
                            <v-layout row wrap>
                                <v-flex
                                    xs12
                                    md6
                                    lg3
                                    v-for="restaurant in restaurants"
                                    :key="restaurant.restaurantId"
                                    >
                                    <v-card>
                                        <v-img>{{restaurant.bannerUrl}}</v-img>
                                        <v-card-title>{{restaurant.name}}</v-card-title>
                                        <v-card-subtitle>{{restaurant.bio}}</v-card-subtitle>
                                        <v-card-text>
                                            {{restaurant.address}}
                                            {{restaurant.city}}
                                            {{restaurant.profileUrl}}
                                        </v-card-text>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>

import { useGetRestaurantStore } from '@/stores/getRestaurantStore';
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
        beforeMount(){
            this.fetchRestaurants;
        }
}
</script>

