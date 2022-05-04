<template>

    <v-app-bar
    
        color="#fd7132"
        dark
        >
        <v-btn to="/" text>
            Home
        </v-btn>
        <v-btn to="/restaurantsView"
                text>
            Order
        </v-btn>
        <v-btn to="/cart" text>
            Cart
        </v-btn>
        <v-spacer></v-spacer>

        <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn to="/restaurant-portal/" text>
            Restaurant Portal
        </v-btn>
    </v-app-bar>
</template>

<script>

export default {
        name: 'TopNavBar',
        data(){
            return{
                
            }},
            
    }
</script>

