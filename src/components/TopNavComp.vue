<template>
<div app>
    <v-app-bar color="#fd7132" elevation="0">
        <v-app-bar-title style="color:#79031d" align-center>
            <h1>Moody4Foody</h1>
        </v-app-bar-title>
            <v-spacer></v-spacer>
            <!-- <v-tabs
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
            </v-tabs> -->
            <v-app-bar-nav-icon
                
                @click="rightDrawer = !rightDrawer" 
                >
                <v-icon>mdi-menu</v-icon>
        </v-app-bar-nav-icon>
            <!-- <router-link
            :to="{name: 'user.show', params:{id: user.clientId}}"
            >
            Profile
            </router-link> -->
            <router-link
                v-if="!isAuthorized"
                :to="({name: 'login'})"
                text
                elevation="0"
                >
                <v-btn>
                    Login
                </v-btn>
            </router-link>
            <v-btn
                v-else
                @click="logoutRequest"
                >
                Logout
            </v-btn>
        
            <!-- <v-spacer></v-spacer>
            <v-tab to="/restaurant-portal"
                    class="d-none d-sm-flex"
                    style="color:#79031d; font-size: 0.75em">
                    Restaurant Login
            </v-tab> -->
        
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer
        v-model="rightDrawer"
        height="250"
        absolute
        temporary
        right>
            <v-list
                nav
                dense>
                <v-list-item-group>
                    <router-link :to="({name: 'home'})"><v-list-item>Home</v-list-item></router-link>
                    <router-link :to="({name: 'user.show', params:{clientId: user.username, slug: user.slug}})" v-if="isAuthorized"><v-list-item>Profile</v-list-item></router-link>
                    <router-link :to="({name: 'login'})" v-if="!isAuthorized"><v-list-item>Login</v-list-item></router-link>
                    <router-link :to="({name: 'restaurants'})"><v-list-item>Restaurants</v-list-item></router-link>
                    <router-link :to="({name: 'about'})"><v-list-item>About</v-list-item></router-link>
                </v-list-item-group>
            </v-list>
    </v-navigation-drawer>
</div>
</template>
<script>
import {useLoginStore} from '@/stores/clientStore';
import { useClientSignupStore } from '@/stores/clientSignupStore';
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
        ...mapState(useClientSignupStore, ['user', 'isAuthorized'])
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
