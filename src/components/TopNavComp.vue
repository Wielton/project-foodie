<template>
<div app>
    <v-app-bar color="#fd7132">
        <v-toolbar 
            color="#fd7032"
            rounded>
            <v-app-bar-nav-icon 
                @click="leftDrawer = true" 
                class="d-flex d-sm-none">
            </v-app-bar-nav-icon>
            <v-toolbar-title style="color:#79031d">Foodie</v-toolbar-title>
        
            <v-spacer></v-spacer>
            
            <v-btn
                icon
                elevation="2"
                @click="showRightDrawer = !showRightDrawer" 
                class="d-flex d-sm-none">
                <v-icon>mdi-cog</v-icon>
            </v-btn>
            <v-card
                    v-model="navs"
                    color="#fd7132"
                    class="d-none d-sm-flex">
                    <v-btn @click.stop="showLoginForm = !showLoginForm" color="#fd7132">
                    Login
                    </v-btn>

                    <v-btn @click.stop="showSignupForm = !showSignupForm" color="#fd7132">
                    Signup
                    </v-btn>
                
                    <v-btn @click.stop="logoutRequest" color="#fd7132">
                    Logout
                    </v-btn>
                </v-card>
        </v-toolbar>
        <template v-slot:extension>
            <v-tabs
            v-model="tab"
            align-with-title
            class="d-none d-sm-flex"
            color="#79031d"
            >
            <v-tabs-slider color="#79031d"></v-tabs-slider>

            <v-tab
                v-for="(item, index) in items"
                :key="index"
                :to="item.path"
                >
                {{ item.name }}
            </v-tab>
            </v-tabs>
            <v-spacer></v-spacer>
            <v-tab to="/restaurant-portal/"
                    class="d-none d-sm-flex"
                    style="color:#79031d; font-size: 0.75em">
                    Restaurant Portal
            </v-tab>
        </template>
        
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
                    <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
                    <v-list-item-title @click="tab = index">{{ item.name }}</v-list-item-title>
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
    <v-spacer></v-spacer>
    <v-expand-transition>
            <SignupComponent v-if="showSignupForm"/>
            <LoginComponent v-if="showLoginForm"/>
    </v-expand-transition>
</div>
</template>
<script>
import SignupComponent from '@/components/SignupComp';
import LoginComponent from '@/components/LoginComp';
import {useClientStore} from '@/stores/clientStore';
import {mapActions} from 'pinia';

export default {
    name: "TopNav",
    components: { LoginComponent, SignupComponent },
    data () {
        return {
            leftDrawer: false,
            rightDrawer: false,
            showRightDrawer: false,
            showLoginForm: false,
            showSignupForm: false,
            tab: null,
            navs: null,
            items: [
                
                {name: 'Home', path:'/'},
                {name: 'Restaurants', path:'/restaurants/'},
                {name: 'User Account', path:'/user-account/:clientId?'},
                {name: 'About Us', path:'/about-us/'}, 
                {name: 'Contact', path:'/contact-us/'},
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
