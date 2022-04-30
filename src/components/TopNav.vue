<template>

    <v-app-bar app>
        <v-app-bar-title>Foodie</v-app-bar-title>
        <v-spacer></v-spacer>

        
        <v-app-bar-items class="hidden-xs-only">
            <v-btn to="/" text>
            Home
            </v-btn>
            <v-btn to="/login"
                text>
            Login
            </v-btn>
            <v-btn to="user" text>
            Cart
            </v-btn>

        </v-app-bar-items>
    </v-app-bar>
    
        
    
        

</template>

<script>


    export default {
        name: 'TopNavBar',
        data(){
            return{
                drawer: false,
                loginForm: false,
                items: [
                    {title: 'Home', link: '/', icon: 'home'},
                    {title: 'Cart', link: 'cart', icon: 'shopping-cart'},
                ]
            }},
            
    }
</script>

