<template>
        <v-container app fluid>
            <v-row justify="center">
                <v-col cols="12" md="6" lg="6">
                    <v-card class="elevation-0">
                        <v-card-title>{{title}}</v-card-title>
                        <v-card-text>
                            <v-form ref="form"
                                    v-model="valid"
                                    lazy-validation>
                                    <v-text-field
                                        v-model="email"
                                        label="Email"
                                        type="email"
                                        :rules="emailRules"
                                        required
                                    ></v-text-field>
                                    <v-text-field
                                        v-model="password"
                                        label="Password"
                                        required
                                    ></v-text-field>
                            </v-form>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                :disabled="!valid"
                                color="success"
                                class="mr-4"
                                @click="loginRequest(email,password)"
                                >Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-container> 
</template>

<script>
import { useLoginStore } from '@/stores/clientStore';
import { mapActions } from 'pinia';

    export default {
        name: 'LoginComponent',
        setup(){
            const store = useLoginStore()
            return {
                store
            }
        },
        data: ()=>({
            // isAlert : false,
            title: 'Login',
            valid: true,
            email: '',
            password: '',
            emailRules: [
                v => !!v || 'E-mail is required...',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            }),
            computed: {
                
            },
        methods: {
            ...mapActions(useLoginStore,['loginRequest']),
            // validate () {
            // this.$refs.form.submit()
            // },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
            },
            // mounted(){
            //     this.setLoggedIn();
            // }
        // updated() {
        //     const router = this.$router;
        //     this.store = useClientStore();
        //     useClientStore().$onAction(({name, after})=>{
        //         if (name == "loginSuccess"){
        //             after(()=>{
        //                 router.push({path: '/user-account/:clientId/'}); 
        //             })
        //         } 
        //         else if(name == "userDeleteRequest"){
        //             after(()=> {
        //                 router.push({path: '/'})
        //             })
                    
        //         }else {
        //             this.isAlert = true;
        //         }
        //     })
            
        // },
}
    
</script>
