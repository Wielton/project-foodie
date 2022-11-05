<template>
<v-container app fluid>
    <v-row>
        <v-col>
            <RestaurantSignupComponent />
            <RestaurantLoginComp />
        </v-col>
    </v-row>
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