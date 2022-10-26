<template>
        <v-container app fluid>
            <v-row>
                <v-col cols="12">
                    <v-card class="elevation-12">
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
import { useClientStore } from '@/stores/clientStore';
import { mapActions, mapState } from 'pinia';

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
