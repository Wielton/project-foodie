<template>
<div app>
    <h1 class="mx-auto">{{title}}</h1>
    <v-spacer></v-spacer>
    <v-container>
        <v-row>
            <v-col
                    v-for="item in menu"
                    :key="item.menuId"
                    :item="item.name">
                    <v-card>
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
                    <h1>Cart</h1>
                
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
                        <v-btn  @click="placeOrder(this.restaurantId, this.items)" color="success">
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





export default {
        components: {  },
        name: 'RestaurantList',
        data: () => ({
            showCartDrawer: false,
    }),
        computed:{
            ...mapState(useGetMenuStore,['title']),
            ...mapState(useGetMenuStore,['menu']),
            ...mapState(useOrderStore,['items']),
            ...mapState(useGetRestaurantStore,['restaurants'])
        },
        
        methods:{
            ...mapActions(useOrderStore,['addMenuItem','removeCartItem','placeOrder','cancelOrder'])
            
        // Add item to menu;  This is not an axios call but is imperative for cart/orders initiation
        
        },
        
}
</script>