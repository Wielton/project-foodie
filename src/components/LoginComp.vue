<template>
    <v-main>
        <v-banner>{{title}}</v-banner>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
                v-model="username"
                :rules="usernameRules"
                label="Username"
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
                @click="signUpRequest"
                >
                Submit
            </v-btn>
            
        </v-form>
            <v-alert type="error" v-if="isAlert">
                Login failed.  Please try again.
            </v-alert>
    </v-main>
</template>

<script>
import { useLoginStore } from '@/stores/loginStore';
import { mapState, mapWritableState } from 'pinia';


    export default {
        name: 'LoginComponent',
        data(){
            return{
            store: undefined,
            isAlert : false,
            valid: true,
            usernameRules: [
                v => !!v || 'Username name is required...',
            ],
            passwordRules: [
                v => !!v || 'Password is required...',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
            ],
            
            
}
        },
        
        computed: {
            //Initial 
            ...mapState(useLoginStore,['title',]),
            ...mapWritableState(useLoginStore,['username','password']),
            //Getters
            
            //Actions
            ...mapState(useLoginStore,['loginRequest'])
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

        
        // mounted () {
        //     const router = this.$router;
        //     this.store = useLoginStore();
        //     useLoginStore().$onAction(({name, after})=>{
        //         if (name == "loginSuccess"){
        //             after(()=>{
        //                 router.push({path: '/users?'}); 
        //             })
        //         } 
        //         else {
        //           this.isAlert = true;
        //           }
        //     })
        // },
        }
    
</script>
