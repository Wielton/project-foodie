<template>
    
        
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
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

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="signUpRequest(email, username,firstName,lastName,password,pictureUrl)"
                >
                Submit
            </v-btn>
            
        </v-form>
    
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
                
                handleUserRegistration() {
                    //Some kind of form validation
                    this.createUser(this.username, this.firstName, this.lastName, this.email, this.password, this.pictureUrl);
                    },
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