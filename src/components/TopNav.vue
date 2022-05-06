<template>

    <v-app-bar
        color="#fd7132"
        dark
        >
        <v-btn to="/" text>
            Home
        </v-btn>
        <v-btn to="/restaurants"
                text
                >
            Restaurants 
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn to="/cart" text>
            Orders
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
                
            
            }
            },
            methods: {
                    
                }
            }
            

</script>

