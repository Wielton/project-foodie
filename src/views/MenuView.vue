<template>
    <div app>
        <h1>{{title}}</h1>

        
            <v-container style="width:65%">
                <v-row>
                <v-col
                    v-for="item in menu"
                    :key="item.menuId"
                    :item="item.menuId">
                    <v-card 
                        
                        :item="item.menuId">
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
                                @click="addMenuItem(item.menuId)">Add</v-btn>
                                </v-card-actions>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            
                
                    <div v-for="item in items"
                            :key="item"
                            :cartItem="item">
                    <v-card>
                            
                        <v-card-title>{{item}}</v-card-title>
                        
                    </v-card>
                    </div>
                
            
        </div>
</template>

<script>

import { useGetMenuStore } from '@/stores/getMenuStore';
import {mapActions, mapState} from 'pinia';
import { useOrderStore } from '@/stores/orderStore';





export default {
    components: {  },
        name: 'RestaurantList',
        data: () => ({
            
    }),
        computed:{
            ...mapState(useGetMenuStore,['title']),
            ...mapState(useGetMenuStore,['menu']),
            ...mapState(useOrderStore,['items'])
        },
        
        methods:{
            ...mapActions(useOrderStore,['addMenuItem'])
            
        // Add item to menu;  This is not an axios call but is imperative for cart/orders initiation
        
        },
        
}
</script>