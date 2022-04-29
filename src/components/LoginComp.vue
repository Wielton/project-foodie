<template>
    
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
                :counter="10"
                :rules="passwordRules"
                label="Password"
                required
            ></v-text-field>
            <v-btn
                :disabled="!valid"
                color="success"
                class="mr-4"
                @click="loginRequest"
                >
                Submit
            </v-btn>
            
        </v-form>
            <!-- <v-alert type="error" v-if="isAlert">
                Login failed.  Please try again.
            </v-alert> -->
    
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapState, mapWritableState } from 'pinia';


    export default {
        name: 'LoginComponent',
        data(){
            return{
            store: undefined,
            isAlert : false,
            valid: true,
            emailRules: [
                v => !!v || 'E-mail is required...',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passwordRules: [
                v => !!v || 'Password is required...',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
            ],
            
            
}
        },
        
        computed: {
            //Initial 
            ...mapState(useClientStore,['title',]),
            ...mapWritableState(useClientStore,['email','password']),
            //Getters
            ...mapState(useClientStore,['userId', 'userToken']),
            //Actions
            ...mapState(useClientStore,['loginRequest'])
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
                if (name == "loginSuccess"){
                        after(()=>{
                        this.$cookies.set('sessionToken')
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
