<template>

<v-container>
    <div>
        <v-btn 
            @click="restaurantPopulateRequest"
        >Click</v-btn>
        </div>
        
        <v-container
            v-if="isClicked"
            >
            <v-row
                no-gutters
                style="height: 150px;"
                >
                <v-col
                    
                    v-for="restaurant in restaurants"
                    :key="restaurant.restaurantId"
                    >
                    <v-card
                        class="pa-2"
                        outlined
                        >
                    <v-card-title>{{restaurant.name}}</v-card-title>
                    <v-card-subtitle>{{restaurant.bio}}</v-card-subtitle>
                    <v-card-text>{{restaurant.address}}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</v-container>
</template>

<script>
import {useClientStore} from '@/stores/clientStore';
import {mapState,mapActions} from 'pinia';
    export default {
        name: 'RestaurantList',
        isClicked: false,
        data: () => ({
            alignments: [
                'start',
                'center',
                'end',
            ],
    }),
        computed:{
            ...mapState(useClientStore,['restaurants']),
            
        },
        methods: {
            ...mapActions(useClientStore,['restaurantPopulateRequest'])
        
        
    }}
</script>
