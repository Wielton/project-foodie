<template>
    <div 
        app
        style="max-width:70%">
        <h1>{{title}}</h1>
            <v-container>
                <v-row>
                <v-col
                    v-for="menuItem in menu"
                    :key="menuItem.menuId">
                    <v-card 
                        @click.self="addMenuItem()"
                        >
                        <v-img 
                            :src="menuItem.imageUrl"
                            width="200"
                            height="200"
                            ></v-img>
                                <v-card-title>{{menuItem.name}}</v-card-title>
                                <v-card-subtitle>{{menuItem.price}}</v-card-subtitle>
                                <v-card-text>{{menuItem.description}}</v-card-text>
                    </v-card>
                </v-col>
                </v-row>
            </v-container>
            <v-navigation-drawer
                absolute
                permanent
                right
                style="max-width:30%"
                >
                <template v-slot:prepend>
                    <v-list-item two-line>
                        <v-list-item-avatar>
                            <img src="https://randomuser.me/api/portraits/women/81.jpg">
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>Jane Smith</v-list-item-title>
                            <v-list-item-subtitle>Logged In</v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </template>
                                        <v-divider></v-divider>
                <v-list dense>
                    <v-list-item
                        v-for="item in items"
                        :key="item.title"
                        >
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-navigation-drawer>
        
                
            
        
        
                
        
    </div>
</template>

<script>

import { useGetMenuStore } from '@/stores/getMenuStore';
import {mapState,mapActions} from 'pinia';


export default {
    components: {  },
        
        name: 'RestaurantList',
        data: () => ({
            items: [
                { title: 'Home', icon: 'mdi-home-city' },
                { title: 'My Account', icon: 'mdi-account' },
                { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    }),
        computed:{
            ...mapState(useGetMenuStore,['menu', 'title']),
        },
        
        methods:{
            ...mapActions(useGetMenuStore,['addMenuItem']),
        }
        
}
</script>