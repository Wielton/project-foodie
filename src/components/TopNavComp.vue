<template>
<div app>
    <v-app-bar color="#fd7132" elevation="0">
        
            <v-toolbar-title align-center>
                <router-link style="color:#79031d" :to="({name: 'home'})">
                    Moody4Foody
                </router-link>
            </v-toolbar-title>
        
            <v-spacer></v-spacer>
            
            <v-app-bar-nav-icon
                @click="rightDrawer = !rightDrawer" 
                >
                <v-icon>mdi-menu</v-icon>
            </v-app-bar-nav-icon>
            
    </v-app-bar>
    <v-navigation-drawer
            v-model="rightDrawer"
            fixed
            right>
                <v-list
                    nav
                    dense>
                    <router-link :to="({name: 'home'})"><v-list-item>Home</v-list-item></router-link>
                    <router-link :to="({name: 'user', params:{clientId: user.clientId}})" v-if="isAuthorized"><v-list-item>Profile</v-list-item></router-link>
                    <router-link :to="({name: 'login'})" v-if="!isAuthorized"><v-list-item>Login</v-list-item></router-link>
                    <router-link :to="({name: 'restaurants'})"><v-list-item>Restaurants</v-list-item></router-link>
                    <router-link :to="({name: 'about'})"><v-list-item>About</v-list-item></router-link>
                    <v-list-item v-if="isAuthorized"><v-btn @click="logoutRequest">Logout</v-btn></v-list-item>
                </v-list>
        </v-navigation-drawer>
    </div>
</template>
<script>
import {useLoginStore} from '@/stores/clientStore';
import { useClientSignupStore } from '@/stores/clientSignupStore';
import { useOrderStore } from '@/stores/orderStore'
import {mapActions, mapState} from 'pinia';
// import cookies from 'vue-cookies'
export default {
    name: "TopNav",
    
        components: {
            
        },
    data () {
        return {
            rightDrawer: false,
            showRightDrawer: false,
            showLoginForm: false,
            showSignupForm: false,
            tab: null,
            
            
                
                
            
        }
    },
    computed: {
        ...mapState(useClientSignupStore, ['user', 'isAuthorized']),
        ...mapState(useOrderStore, ['cartItems'])
    },
    methods: {
        ...mapActions(useLoginStore,['logoutRequest']),
        ...mapActions(useClientSignupStore, ['accountInfoRequest'])
    },
    
    
    
}
</script>
<style lang="scss" scoped>
    *a {
        text-decoration: none;
    }
</style>
