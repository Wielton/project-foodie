<template>
<div>
    <v-app-bar app color="#fd7132">
        <v-app-bar-nav-icon @click="leftDrawer = true" 
                            class="d-flex d-sm-none">
                            </v-app-bar-nav-icon>
                            <v-toolbar-title color="#79031d">Foodie</v-toolbar-title>
        <v-spacer></v-spacer>

        <v-btn icon color="#79031d">
            <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon color="#79031d" @click="userNavigation = true" 
                                    class="">
            <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>

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
        </template>
    </v-app-bar>
    <!-- Add a navigation bar -->
    <v-navigation-drawer
        v-model="leftDrawer"
        absolute
        temporary
        >
        <v-list
            nav
            dense
        >
        <v-list-item-group
        >
            <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
            <v-list-item-title @click="tab = index">{{ item.name }}</v-list-item-title>
            </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <v-navigation-drawer
        v-model="userNavigation"
        absolute
        temporary>
        <v-list
            nav
            dense>
        <v-list-item-group>
            <v-list-item>
                <v-btn 
                    elevation="2"
                    @click="showLoginForm = !showLoginForm"
                    >Login</v-btn>
            </v-list-item>
            <v-list-item>
                <v-btn 
                    elevation="2"
                    @click="showSignupForm = !showSignupForm"
                    >Sign Up</v-btn>
            </v-list-item>

            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
    <v-expand-transition>
            <SignupComponent v-if="showSignUpForm"/>
            <LoginComponent v-else-if="showLoginForm"/>
    </v-expand-transition>
</div>
</template>
<script>
import SignupComponent from '@/components/SignupComp';
import LoginComponent from '@/components/LoginComp';
export default {
    name: "TopNav",
    components: { LoginComponent, SignupComponent },
    data () {
        return {
            leftDrawer: false,
            userNavigation: false,
            showLoginForm: false,
            showSignUpForm: false,
            tab: null,
            items: [
                
                {name: 'Home', path:'/'}, 
                {name: 'Account', path:'/user-account/'}, 
                {name: 'Restaurants', path:'/restaurants/'}, 
                {name: 'About Us', path:'/about-us/'}, 
                {name: 'Contact', path:'/contact-us/'},
                ],
            loginItems: [
                {name: 'Login', path:'/login/'},
                {name: 'Logout', path:'/logout/'}
            ]
        }
    }
}
</script>
