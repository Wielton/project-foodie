<template>
    <v-card app>
        
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            
            <v-text-field
                v-model="email"
                :rules="emailRules"
                label="Email"
                type="email"
                required
            ></v-text-field>
            <v-text-field
                v-model="password"
                label="Password"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="restaurantLoginRequest(email,password)"
                >
                Submit
            </v-btn>
            
        </v-form>
            <!-- <v-alert type="error" v-if="isAlert">
                Login failed.  Please try again.
            </v-alert> -->
 </v-card>   
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
