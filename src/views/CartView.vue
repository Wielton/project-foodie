<template>
    <v-col>
            
        <h1 :key="user.clientId">{{ user.username }}'s Cart</h1>
    
            <v-card v-for="item in items"
                    :key="item.menuId"
                    :name="item.name">    
                        <v-card-title>{{item.name}}</v-card-title>
                        <v-card-subtitle>{{item.price}}</v-card-subtitle>
                        <v-spacer></v-spacer>
                        <v-card-actions>
                            <v-btn 
                                icon
                                @click="removeCartItem(items, item)">
                                <v-icon>mdi-delete</v-icon>
                            </v-btn>
                        </v-card-actions>
            </v-card>
    <v-divider></v-divider>
    <v-card>
        <v-card-actions>
            <v-btn  @click="placeOrder(itemIds, restaurantId)" color="success">
                Checkout
            </v-btn>
            <v-btn @click="cancelOrder" color="red">
                Cancel Order
            </v-btn>
        </v-card-actions>
    </v-card>


</v-col>
</template>

<script>
import { useClientSignupStore } from '@/stores/clientSignupStore';
import {mapState,mapActions } from 'pinia';
import { useOrderStore } from '@/stores/orderStore';

    export default {
        name: "UserOrderCart",
        computed: {
            ...mapState(useClientSignupStore, ['user', 'isAuthorized']),
            ...mapState(useOrderStore,['items']),
        },
        methods: {
            ...mapActions(useOrderStore,['placeOrder','cancelOrder', 'itemIds', 'restaurantId'])
        }
    }
</script>

