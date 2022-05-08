<template>
    <div>
        <h1>Welcome to your home page.</h1>
        <h3>Here you can view active orders, 
            update your restaurant profile, 
            and update the menu.</h3>
            <v-btn
                @click="restaurantLogoutRequest">
                Logout
            </v-btn>
            
            <v-spacer></v-spacer>
            <MenuAddFormComp/>
    </div>
</template>

<script>
import MenuAddFormComp from '@/components/MenuAddFormComp.vue'
import {useRestaurantStore} from '@/stores/restaurantStore';
import {mapActions} from 'pinia';
    export default {
    components: { MenuAddFormComp },
        name: 'RestaurantHome',
        actions: {
            ...mapActions(useRestaurantStore,['restaurantLogoutRequest'])
        }
    }
</script>

