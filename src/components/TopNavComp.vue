<template>
<div app>
    <v-app-bar color="#fd7132" elevation="0">
        <v-app-bar-title style="color:#79031d" align-center>
            <h1>Foodie</h1>
        </v-app-bar-title>
        
            
            
            <v-spacer></v-spacer>
            <v-tabs
                v-model="tab"
                class="hidden-sm-and-down"
                color="#79031d"
                right
                max-width="600px"
                >
            <v-tabs-slider color="#79031d" max-width="600"></v-tabs-slider>

            <v-tab
                v-for="(link, index) in links"
                :key="index"
                :to="link.path"
                >
                {{ link.name }}
            </v-tab>
            </v-tabs>
            <v-app-bar-nav-icon 
                @click="leftDrawer = true" 
                class="hidden-md-and-up">
            
            <v-btn
                icon
                elevation="0"
                @click="showRightDrawer = !showRightDrawer" 
                class="hidden-md-and-up">
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-app-bar-nav-icon>
            <!-- <v-spacer></v-spacer>
            <v-tab to="/restaurant-portal"
                    class="d-none d-sm-flex"
                    style="color:#79031d; font-size: 0.75em">
                    Restaurant Login
            </v-tab> -->
        
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer
        v-model="leftDrawer"
        height="250"
        absolute
        temporary>
            <v-list
                nav
                dense>
                <v-list-item-group>
                    <v-list-item v-for="(link, index) in links" :key="index" :to="link.path">
                    <v-list-item-title @click="tab = index">{{ link.name }}</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
                                <v-divider></v-divider>
                                <v-spacer></v-spacer>
                    <v-list-item bottom>
                        <v-list-item-title to="/restaurant-portal/">
                            Restaurant Portal
                        </v-list-item-title>
                    </v-list-item>
            </v-list>
    </v-navigation-drawer>

    <v-container>
        <v-layout align-center justify-center>
    <v-card
        
        v-if="showRightDrawer"
        v-model="rightDrawer"
        absolute
        temporary>
        
                    <v-btn 
                        icon
                        elevation="2"
                        @click="showLoginForm = !showLoginForm">
                    <v-icon>mdi-login</v-icon>
                    </v-btn>
                
                    <v-btn 
                        icon
                        elevation="2"
                        @click="showSignupForm = !showSignupForm">
                        <v-icon>mdi-login</v-icon>
                    </v-btn>
                
                    <v-btn 
                        icon
                        elevation="2"
                        @click="logoutRequest">
                        <v-icon>mdi-logout</v-icon>
                    </v-btn>
                </v-card>
        </v-layout>
    </v-container>
</div>
</template>
<script>
import {useClientStore} from '@/stores/clientStore';
import {mapActions} from 'pinia';

export default {
    name: "TopNav",
    data () {
        return {
            leftDrawer: false,
            rightDrawer: false,
            showRightDrawer: false,
            showLoginForm: false,
            showSignupForm: false,
            tab: null,
            links: [
                
                {name: 'Home', path:'/'},
                {name: 'Restaurants', path:'/restaurants'},
                {name: 'User Account', path:'/user-account'},
                {name: 'About Us', path:'/about-us'}, 
                {name: 'Contact', path:'/contact-us'},
                ],
            loginItems: [
                {name: 'Login', path:'/login/'},
                {name: 'Logout', path:'/logout/'}
            ]
        }
    },
    computed: {
        
        },
    methods: {
        ...mapActions(useClientStore,['logoutRequest']),
        
        
        }
}
</script>
