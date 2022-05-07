<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="primary">
                            <v-toolbar-title>Sign Up</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form 
                                ref="form"
                                v-model="valid"
                                lazy-validation>
                                    <v-text-field
                                        v-model="email"
                                        :rules="emailRules"
                                        label="E-mail"
                                        type="email"
                                        required
                                    ></v-text-field>
            
                                    <v-text-field
                                        v-model="username"
                                        :rules="usernameRules"
                                        label="Username"
                                        required
                                    ></v-text-field>
            
                                    <v-text-field
                                        v-model="firstName"
                                        :rules="firstNameRules"
                                        label="First Name"
                                        required
                                    ></v-text-field>
    
                                    <v-text-field
                                        v-model="lastName"
                                        :rules="lastNameRules"
                                        label="Last Name"
                                        required
                                    ></v-text-field>
            
                                    <v-text-field
                                        v-model="password"
                                        :counter="10"
                                        :rules="passwordRules"
                                        label="Password"
                                        type="password"
                                        required
                                    ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="signUpRequest(email, username,firstName,lastName,password,pictureUrl)"
                                >Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-content>
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapActions } from 'pinia';

export default {
            name: 'SignupComponent',
            data: ()=>({
                
                    isAlert : false,
                    valid: true,
                    firstName: '',
                    lastName: '',
                    username: '',
                    email: '',
                    password: '',
                    pictureUrl: undefined,
                    emailRules: [
                        v => !!v || 'E-mail is required...',
                        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                        ],
                    firstNameRules: [
                        v => !!v || 'First name is required...',
                        ],
                    lastNameRules: [
                        v => !!v || 'Last name is required...',
                        ],
                    usernameRules: [
                        v => !!v || 'Username name is required...',
                        ],
                    passwordRules: [
                        v => !!v || 'Password is required...',
                        v => (v && v.length <= 10) || 'Password must be less than 10 characters',
                        ],
                    }
                ),
            computed: {
                },
            methods: {
                
                ...mapActions(useClientStore,['signUpRequest']),
                
                
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
                
                useClientStore().$onAction(({name, after})=>{
                if (name == "signUpFailed"){
                    after(()=>{
                        this.isAlert = true;
                    })
                } 
            })
        },
}
    
</script>