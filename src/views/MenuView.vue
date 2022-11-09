<template>
<v-container fluid>
        <v-row>
            <v-col cols="12">
                <h1 class="ma-1">{{title}}</h1>
                <v-btn
                    text
                    :to="({name: 'cart', params: {clientId: user.username}})"
                    >
                    <v-badge
                    :if="cartItems"
                    
                    :content="cartItems"
                    :value="cartItems"
                    color="green"
                    overlap
                >
                <v-icon>mdi-cart</v-icon>
                </v-badge>
                </v-btn>
                
            </v-col>
        </v-row>
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
            </v-row>
</v-container>

</template>

<script>
import { useGetMenuStore } from '@/stores/getMenuStore';
import {mapActions, mapState } from 'pinia';
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
            ...mapState(useOrderStore,['items', 'cartItems']),
            ...mapState(useGetRestaurantStore,['restaurants']),
            ...mapState(useClientSignupStore, ['user', 'isAuthorized'])
        },
        
        methods:{
            ...mapActions(useClientSignupStore,['accountInfoRequest']),
            ...mapActions(useOrderStore,['addMenuItem','removeCartItem']),
        
        // Add item to menu;  This is not an axios call but is imperative for cart/orders initiation
        
        },
        mounted(){
            
            this.accountInfoRequest();
        },
        
}
</script>