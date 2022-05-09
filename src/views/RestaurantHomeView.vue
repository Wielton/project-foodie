<template>
    <div>
        <h1>Welcome to your home page.</h1>
        <p>Here you can view active orders, 
            update your restaurant profile, 
            and update the menu.</p>
            
            
            <v-spacer></v-spacer>
            <MenuAddFormComp/>
    </div>
</template>

<script>
import MenuAddFormComp from '@/components/MenuAddFormComp.vue'

    export default {
    components: { MenuAddFormComp },
        name: 'RestaurantHome',
        actions: {
            
        }
    }
</script>

