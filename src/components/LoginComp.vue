<template>
    <div app>
        <v-container fluid>
            <v-layout align-center justify-center>
                <v-flex xs12 sm8 md4>
                    <v-card class="elevation-12">
                        <v-toolbar dark color="#fd7132">
                            <v-toolbar-title>{{title}}</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            <v-form ref="form"
                                    v-model="valid"
                                    lazy-validation>
                                    <v-text-field
                                        v-model="username"
                                        label="Username"
                                        type="text"
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
                                @click="loginRequest(username,password)"
                                >Submit</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>   
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapActions, mapState } from 'pinia';

    export default {
        name: 'LoginComponent',
        data: ()=>({
            isAlert : false,
            valid: true,
            username: '',
            password: '',
            // emailRules: [
            //     v => !!v || 'E-mail is required...',
            //     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            //     ],
            }),
            computed: {
                ...mapState(useClientStore,['title']),
            },
        methods: {
            ...mapActions(useClientStore,['loginRequest']),
            validate () {
            this.$refs.form.submit()
            },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
            },
        mounted() {
            useClientStore().$onAction(({name, after})=>{
                if (name == "loginFailed"){
                        after(()=>{
                            this.isAlert = true;
                        })
                    } 
                })
            },
}
    
</script>
