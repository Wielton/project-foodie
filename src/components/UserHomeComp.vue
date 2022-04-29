<template>
    <v-container
            app>
        <v-btn
            color="success"
            class="mr-4"
            @click="logout"
            >
            Logout
        </v-btn>
            <!-- <v-alert type="error" v-if="isAlert">
                Login failed.  Please try again.
            </v-alert> -->
    </v-container>
</template>

<script>
import { useLoginStore } from '@/stores/clientStore';
import { mapState, } from 'pinia';


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
            
            //Getters
            
            //Actions
            ...mapState(useLoginStore,['logout'])
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
            this.store = useLoginStore();
            useLoginStore().$onAction(({name, after})=>{
                if (name == "loginSuccess"){
                        after(()=>{
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
