<template>
<div app>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex >
                <v-card
                    color="#79031d">
                    <h1 style="color:#fd7132">Restaurant Portal</h1>
                <v-spacer></v-spacer>
                        <v-card-actions>
                            <v-btn
                                color="#fd7132"
                                elevation="2"
                                @click="showRestaurantLogin = !showRestaurantLogin">
                                Login
                            </v-btn>
                            <v-btn
                                color="#fd7132"
                                elevation="2"
                                @click="showRestaurantSignup = !showRestaurantSignup">
                                Signup
                            </v-btn>
                        </v-card-actions>
                    </v-card>
            </v-flex>
        </v-layout>

        </v-container>
        <v-divider></v-divider>
        <v-expand-transition>
            
            <RestaurantSignupComponent v-if="showRestaurantSignup"/>
            
            
            <RestaurantLoginComp v-if="showRestaurantLogin"/>
            
        </v-expand-transition>
    </div>
</template>

<script>

import RestaurantSignupComponent from '@/components/RestaurantSignupComp.vue';
import RestaurantLoginComp from '@/components/RestaurantLoginComp.vue';
    export default {
        name: "RestaurantPortalView",
        components: {RestaurantSignupComponent,RestaurantLoginComp},
        data() {
            return{
                showRestaurantSignup: false,
                showRestaurantLogin: false
            }
        },
        
    }
</script>