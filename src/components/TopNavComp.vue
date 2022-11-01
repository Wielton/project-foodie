<template>
<div app>
    <v-app-bar color="#fd7132" elevation="0">
        <v-app-bar-title style="color:#79031d" align-center>
            <h1>Foodie</h1>
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
                @click="leftDrawer = true" 
                >
            
            <v-btn
                icon
                elevation="0"
                @click="showRightDrawer = !showRightDrawer" 
                >
                <v-icon>mdi-menu</v-icon>
            </v-btn>
        </v-app-bar-nav-icon>
            <!-- <router-link
            :to="{name: 'user.show', params:{id: user.clientId}}"
            >
            Profile
            </router-link> -->
            <router-link
                v-if="!isAuthorized"
                to="/login"
                text
                elevation="0"
                >
                Login
            </router-link>
            <v-btn 
                v-else-if="isAuthorized"
                @click="logoutRequest">
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
        v-model="leftDrawer"
        height="250"
        absolute
        temporary>
            <v-list
                nav
                dense>
                <v-list-item-group>
                    <router-link v-if="!isAuthorized" :to="({name: 'home'})">Home</router-link>
                    <router-link v-if="isAuthorized" :to="({name: 'user'})">Profile</router-link>
                    <router-link v-if="!isAuthorized" :to="({name: 'login'})">Login</router-link>
                    <router-link :to="({name: 'restaurants'})">Restaurants</router-link>
                    <router-link :to="({name: 'about'})">About</router-link>
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
    setup(){
            const store = useLoginStore()
            return {
                store
            }
        },
        components: {
            
        },
    data () {
        return {
            leftDrawer: false,
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
        // async getAuthentication(){
        //     let cookie = cookies.get('sessionToken')
        //     if (cookie === null ){
        //         this.$router.push('/login')
        //     }else{
        //         console.log('You are logged in')
        //     }
        // }
        },
        mounted(){
            this.accountInfoRequest();
        }
        
}
</script>
<style lang="scss" scoped>
    
</style>
