<template>

<v-container fluid>
        
            <v-list
                v-for="restaurant in restaurants"
                :key="restaurant.restaurantId"
                >
            <v-list-item>
            <v-list-item-title>{{name}}</v-list-item-title>
                
                
                        <v-spacer></v-spacer>
                        
                    </v-list-item>
                
            </v-list>
        
    </v-container>
</template>

<script>
import {useClientStore} from '@/stores/clientStore';
import {mapState} from 'pinia';
    export default {
        name: 'RestaurantList',
        computed: {
            ...mapState(useClientStore,['restaurants']),
        },
    }
</script>
