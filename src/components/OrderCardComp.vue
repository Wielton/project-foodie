<template>
    <v-card app>
        <v-container>
            <v-row>
                <v-col
                    v-for="item, i in items"
                    :key="i"
                    :item="item">
                    <v-card>
                        <v-card-title>{{item.itemName}}</v-card-title>
                        <v-card-subtitle>{{item.itemPrice}}</v-card-subtitle>
                    </v-card>
                    
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import { mapState } from 'pinia'
import { useOrderStore } from '@/stores/orderStore'
    export default {
        name: 'OrderCard',
        computed: {
            // Fetch restaurantId and menuId to make sure the item belongs to the restaurant.
            // If they don't match, the item isn't added
            // The order card is frontend data array until the "order" button is hit and the "createOrder" function will fire
            ...mapState(useOrderStore,['title','items'])
        },
        actions: {
        },
        getters: {

        },
        
    }
</script>

