<template>

    <div>
        <h1>Restaurants</h1>
        <RestaurantList/>
    </div>
</template>

<script>
import RestaurantList from '@/components/RestaurantListComp.vue';

    export default {
        components: { RestaurantList },
        name: "OrdersPortalView",
        
        computed: {
            
            
        },
    }
</script>

