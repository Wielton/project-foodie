<template>
    <v-container app>
        
        <h1>Foodie</h1>
        <h1>Are you in the moodie?</h1>

        <v-spacer></v-spacer>
        <v-container>
            <v-row>
                <v-col>
                    <v-btn 
                        elevation="2"
                        @click="showSignUpForm = !showSignUpForm"
                        >Sign Up</v-btn>
                    <div class="grey--text text-darken-1 mb-2">
                        Already a member?
                    </div>
                </v-col>
                <v-col>
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
                    <v-spacer></v-spacer>
                        <RestaurantLoginComponent v-if="showLoginForm"/>
                    </v-card>
                </v-expand-transition>
            </v-row>
        </v-container>
    </v-container>
</template>

<script>
    export default {
        
    }
</script>