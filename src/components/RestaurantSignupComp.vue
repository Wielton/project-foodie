<template>
    <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
                v-model="name"
                :rules="nameRules"
                label="Name"
                required
            ></v-text-field>
            
            <v-text-field
                v-model="address"
                :rules="addressRules"
                label="Address"
                required
            ></v-text-field>
            
            <v-text-field
                v-model="bio"
                :rules="bioRules"
                label="Bio"
                required
            ></v-text-field>
    
            <v-text-field
                v-model="cityName"
                :rules="cityNameRules"
                label="City Name"
                required
            ></v-text-field>

            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                required
            ></v-text-field>
    
            <v-text-field
                v-model="phoneNum"
                :rules="phoneNumRules"
                label="Phone Number"
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
            
            <v-text-field
                v-model="passwordConfirm"
                :counter="10"
                :rules="passwordConfirmRules.concat(passwordConfirmationRule)"
                label="Confirm Password"
                required
            ></v-text-field>

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
import { useRestaurantStore } from '@/stores/restaurantStore';
import { mapState, mapWritableState } from 'pinia';



    export default {
        name: 'RestaurantSignupComponent',
        data(){
            return{
            store: undefined,
            isAlert : false,
            valid: true,
            
            emailRules: [
                v => !!v || 'E-mail is required...',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            
            nameRules: [
                v => !!v || 'Name is required...',
            ],
            
            addressRules: [
                v => !!v || 'Address is required...',
            ],
            
            bioRules: [
                v => !!v || 'Bio is required...',
            ],
            phoneNumRules: [
                v => !!v || 'Phone Number is required...',
            ],
            cityNameRules: [
                v => !!v || 'City name is required...',
            ],
            passwordRules: [
                v => !!v || 'Password is required...',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
            ],
            
            passwordConfirmRules: [
                v => !!v || 'Confirm password...',
            ],
            
}
        },
        
        computed: {
            //Initial 
            ...mapState(useRestaurantStore,['title',]),
            ...mapWritableState(useRestaurantStore,['email','username', 'firstName','lastName','password']),
            //Getters
            
            //Actions
            ...mapState(useRestaurantStore,['signUpRequest']),
            passwordConfirmationRule(){
            return()=>(this.password === this.passwordConfirm) || 'Passwords must match'
        },
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
            this.store = useRestaurantStore();
            useRestaurantStore().$onAction(({name, after})=>{
                if (name == "signUpSuccess"){
                    after(()=>{
                        this.userId.push(this.users);
                        this.$cookie.set('sessionToken', this.userToken)
                        router.push({path: '/restaurantUser'}); 
                    })
                } 
                else {
                    this.isAlert = true;
                }
            })
        },
        
        }
    
</script>