<template>
    <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar  color="#fd7132">
                            <v-toolbar-title>Login</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form
                                ref="form"
                                v-model="valid"
                                lazy-validation>
                                <v-text-field
                                    v-model="email"
                                    :rules="emailRules"
                                    label="Email"
                                    type="email"
                                    required>
                                </v-text-field>
                                <v-text-field
                                    v-model="password"
                                    label="Password"
                                    required>
                                </v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                                <v-btn
                                    :disabled="!valid"
                                    color="success"
                                    class="mr-4"
                                    @click="restaurantLoginRequest(email,password)"
                                    >
                                    Submit
                                </v-btn>
                        </v-card-actions>
                    </v-card>
            </v-flex>
        </v-layout>
    </v-container>  
        <!-- <v-alert type="error" v-if="isAlert">
                Login failed.  Please try again.
            </v-alert> --> 
</template>

<script>
import { useRestaurantStore } from '@/stores/restaurantStore';
import { mapActions} from 'pinia';

    export default {
        name: 'LoginComponent',
        data: ()=>({
            isAlert : false,
            valid: true,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required...',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            }),
            
        methods: {
            ...mapActions(useRestaurantStore,['restaurantLoginRequest']),
            validate () {
            this.$refs.form.submit()
            },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
            },
        mounted () {
            useRestaurantStore().$onAction(({name, after})=>{
                if (name == "loginFailed"){
                        after(()=>{
                            this.isAlert = true;
                        })
                    } 
                })
            },
}
    
</script>
