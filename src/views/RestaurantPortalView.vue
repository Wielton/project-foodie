<template>
<v-container app>
    <h1>Restaurant Portal</h1>
        <v-spacer></v-spacer>

        <RestaurantSignupComponent/>
        
        
        <RestaurantLoginComp/>
        
    </v-container>
</template>

<script>

import RestaurantSignupComponent from '@/components/RestaurantSignupComp.vue';
import RestaurantLoginComp from '@/components/RestaurantLoginComp.vue';
    export default {
        name: "RestaurantPortalView",
        components: {RestaurantSignupComponent,RestaurantLoginComp},
        data() {
            return{
            }
        },
        
    }
</script>