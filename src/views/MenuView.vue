<template>
<div app>
    <h1 class="mx-auto">{{title}}</h1>
    <v-spacer></v-spacer>
    <v-container fluid>
        <v-row class="pa-6">
            <v-col
            v-for="item in menuItems"
            :key="item.menuId"
            :item="item"
                >
                    <v-card
                        >
                        <v-img 
                            :src="item.imageUrl"
                            width="200"
                            height="200"
                            ></v-img>
                                <v-card-title>{{item.name}}</v-card-title>
                                <v-card-subtitle>{{item.price}}</v-card-subtitle>
                                <v-card-text>{{item.description}}</v-card-text>
                                <v-card-actions>
                                    <v-btn
                                        @click="addMenuItem(item)">Add</v-btn>
                                </v-card-actions>
                    </v-card>
                </v-col>
            <v-col>
            <v-navigation-drawer
                permanent
                right
                >
                    <h1 :key="user.clientId">{{ user.username }}'s Cart</h1>
                
                        <v-card v-for="(item, index) in items"
                                :key="index"
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
            
        </v-navigation-drawer>
            </v-col>
                
                </v-row>
            </v-container>
            
    </div>
</template>

<script>

import { useGetMenuStore } from '@/stores/getMenuStore';
import {mapActions, mapState} from 'pinia';
import { useOrderStore } from '@/stores/orderStore';
import { useGetRestaurantStore } from '@/stores/getRestaurantStore';
import { useClientSignupStore } from '@/stores/clientSignupStore';




export default {
        components: {  },
        name: 'RestaurantList',
        data: () => ({
            showCartDrawer: false,
    }),
        computed:{
            ...mapState(useGetMenuStore,['title']),
            ...mapState(useGetMenuStore,['menuItems']),
            ...mapState(useOrderStore,['items', 'itemIds', 'restaurantId']),
            ...mapState(useGetRestaurantStore,['restaurants']),
            ...mapState(useClientSignupStore, ['user', 'isAuthorized'])
        },
        
        methods:{
            ...mapActions(useClientSignupStore,['accountInfoRequest']),
            ...mapActions(useOrderStore,['addMenuItem','removeCartItem','placeOrder','cancelOrder'])
            
        // Add item to menu;  This is not an axios call but is imperative for cart/orders initiation
        
        },
        mounted(){
            this.accountInfoRequest();
        },
}
</script>