<template>
    <v-container app>
        <h1 v-if="isAuthorized" :key="user.clientId">Welcome, {{user.username}}</h1>
        <RestaurantList />
    </v-container>
</template>

<script>
import RestaurantList from '@/components/RestaurantListComp'
import {useClientSignupStore} from '@/stores/clientSignupStore'
import {mapState, mapActions} from 'pinia'

    export default {
        components: { RestaurantList },
        name: "RestaurantListView",
        methods: {
            ...mapActions(useClientSignupStore,['accountInfoRequest']),
        },
        computed: {
            ...mapState(useClientSignupStore, ['user', 'isAuthorized'])
            
            
        },
        
        mounted(){
            this.accountInfoRequest();
        },
    }
</script>

