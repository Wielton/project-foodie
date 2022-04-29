<template>
<div app>
    <v-app-bar>
        <v-toolbar-title>Foodie</v-toolbar-title>
        <v-spacer></v-spacer>

        <span class="hidden-sm-and-up">
            <v-btn @click.stop="drawer = !drawer">Menu</v-btn>
        </span>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn to="/" text>
            Home
            </v-btn>
            <v-btn
                
                text
                @click.stop="loginForm = !loginForm">
            Login
            </v-btn>
            <v-btn to="user" text>
            Cart
            </v-btn>

        </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer
        v-model="drawer"
        absolute
        temporary
        right>
        </v-navigation-drawer>
        
    
        
</div>
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

