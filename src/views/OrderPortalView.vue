<template>
    <v-container app>
        <RestaurantList/>
    </v-container>
</template>

<script>
import RestaurantList from '@/components/RestaurantListComp.vue'
    export default {
  components: { RestaurantList },
        name: "OrdersPortalView",
        data: () => ({
        loading: false,
        selection: 1,
    }),

        methods: {
        reserve () {
            this.loading = true
            setTimeout(() => (this.loading = false), 2000)
        },
    },
    }
</script>

