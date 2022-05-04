<template>
<v-container app>
        <div>
            <TopNavBar/>
        </div>
        <h4>Restaurant Portal</h4>
        <v-spacer></v-spacer>
    <v-container>
        <v-row>
            <v-col>
                <v-btn 
                    elevation="2"
                    @click="showSignUpForm = !showSignUpForm"
                    >Sign Up</v-btn>
                <v-btn 
                    elevation="2"
                    @click="showLoginForm = !showLoginForm"
                    >Login</v-btn>
            </v-col>
        </v-row>
        <v-row>    
            <v-expand-transition>
                <v-card>
                    <RestaurantSignupComponent v-if="showSignUpForm"/>
                    </v-card>
                        <v-spacer></v-spacer>
                        <v-card>
                    <RestaurantLoginComponent v-if="showLoginForm"/>
                </v-card>
            </v-expand-transition>
        </v-row>
        </v-container>
    </v-container>
</template>

<script>
import RestaurantLoginComponent from '@/components/RestaurantLoginComp.vue';
import RestaurantSignupComponent from '@/components/RestaurantSignupComp.vue';
import TopNavBar from '@/components/TopNav.vue';
    export default {
        name: "RestaurantPortalView",
        components: {RestaurantSignupComponent, RestaurantLoginComponent, TopNavBar},
        data() {
            return{
                showLoginForm: false,
                showSignUpForm: false,
            }
        }
        
        
    }
</script>