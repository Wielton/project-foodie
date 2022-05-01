<template>
    <v-card app>
            
        <v-card-title>Account</v-card-title>
        
        <v-spacer></v-spacer>
    <v-card>    
        <v-btn
            color="success"
            class="mr-4"
            @click="userDeleteRequest">
            Delete
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn
            color="success"
            class="mr-4"
            @click="accountInfoChangeRequest">
            Change Info
        </v-btn>
            <v-spacer></v-spacer>
        <v-btn
            color="success"
            class="mr-4"
            @click="logoutRequest">
            Logout
        </v-btn>
        </v-card>
    </v-card>
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapActions, mapWritableState } from 'pinia';


    export default {
        
        name: 'SignupComponent',
        data: ()=>({
            store: undefined,
            }),
        computed: {
            //Initial 
            ...mapWritableState(useClientStore,['username', 'firstName','lastName','password', 'pictureUrl']),
            //Getters
            
            
            
        },
        
        
        methods: {
        //Actions
            ...mapActions(useClientStore,['userDeleteRequest', 'accountInfoChangeRequest', 'logoutRequest']),
        
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
                        router.push({path: '/user'}); 
                    })
                } 
                else if(name == "userDeleteRequest"){
                    after(()=> {
                        router.push({path: '/'})
                    })
                    
                }else {
                    this.isAlert = true;
                }
            })
            
        },
        
        }
    
</script>