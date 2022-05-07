<template>
    <v-container app>
        
        <RestaurantList />
        
    </v-container>
</template>

<script>
import RestaurantList from '@/components/RestaurantListComp'

    export default {
        components: { RestaurantList },
        name: "RestaurantListView",
        
        computed: {
            
            
        },
        
    }
</script>

