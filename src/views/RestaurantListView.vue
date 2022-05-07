<template>
    <v-container app>
        <SideBarLeft />
        <RestaurantList />
        <SideBarRight />
    </v-container>
</template>

<script>
import RestaurantList from '@/components/RestaurantListComp'
import SideBarLeft from '@/components/SideBarLeftComp'
import SideBarRight from '@/components/SideBarRightComp'
    export default {
        components: { RestaurantList, SideBarLeft, SideBarRight },
        name: "RestaurantListView",
        
        computed: {
            
            
        },
        
    }
</script>

