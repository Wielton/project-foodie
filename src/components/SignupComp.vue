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
            
            <!-- <v-text-field
                v-model="passwordConfirm"
                :counter="10"
                :rules="passwordConfirmRules"
                label="Confirm Password"
                required
            ></v-text-field> -->

            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="signUpRequest"
                >
                Submit
            </v-btn>
            
        </v-form>
    
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapState, mapWritableState } from 'pinia';
import cookies from 'vue-cookies';

    export default {
        
            name: 'SignupComponent',
        data(){
            return{
            store: undefined,
            isAlert : false,
            valid: true,
            
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
            // passwordConfirm: '',
            // passwordConfirmRules: [
            //     v => !!v || 'Confirm password...',
            //     v => (v && this.password === this.passwordConfirm) || 'Passwords must match'
            // ],
            
}
        },

    
        
        computed: {
            //Initial 
            ...mapState(useClientStore,['title',]),
            ...mapWritableState(useClientStore,['email','username', 'firstName','lastName','password']),
            //Getters
            
            //Actions
            ...mapState(useClientStore,['signUpRequest']),
            
        },
        
        
        methods: {
        
        
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
            const router = this.$router;
            this.store = useClientStore();
            useClientStore().$onAction(({name, after})=>{
                if (name == "signUpSuccess"){
                    after(()=>{
                        cookies.set('sessionToken', this.userToken);
                        router.push({path: '/user'}); 
                    })
                } 
                else {
                    this.isAlert = true;
                }
            })
        },
        
        }
    
</script>