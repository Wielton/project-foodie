<template>
    <v-card app>
        <v-container>
            <v-row>
                <v-col
                    v-for="item in items"
                    :key="item.menuId">
                    <v-card>
                        <v-card-title>{{item.name}}</v-card-title>
                        <v-card-subtitle>{{item.price}}</v-card-subtitle>
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
            ...mapState(useOrderStore,['title','items'])
        },
        actions: {
            
        },
        getters: {

        }
    }
</script>

