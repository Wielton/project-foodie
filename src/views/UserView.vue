<template>
<div>
    <h3 :key="user.clientId">Hello {{ user.username }}</h3>
    <h3></h3>
            
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="6" md="2">
                <v-form @submit.prevent="handleSubmit">
                    <v-text-field
                        autocomplete
                        :placeholder="user.email"
                        v-model="formData.email"
                        type="email"
                        clearable
                    ></v-text-field>
                    <v-text-field
                        autocomplete
                        :placeholder="user.username"
                        v-model="formData.username"
                        clearable
                    ></v-text-field>
                    <v-text-field
                        autocomplete
                        :placeholder="user.firstName"
                        v-model="formData.firstName"
                        clearable
                    ></v-text-field>
                    <v-text-field
                        autocomplete
                        
                        :placeholder="user.lastName"
                        v-model="formData.lastName"
                        clearable
                    ></v-text-field>
                    <v-btn type="submit">change info</v-btn>
                    <v-btn @click.prevent="userDeleteRequest">delete account</v-btn>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>

import { useClientSignupStore } from '@/stores/clientSignupStore';
import { mapState, mapActions,mapWritableState} from 'pinia';


    export default {
    
        name: 'UserView',
        data: ()=>({
            
            
            }),
        computed: {
            
            ...mapState(useClientSignupStore, ['user', 'isAuthorized']),
            //Initial 
            ...mapWritableState(useClientSignupStore,['formData'])
            //Getters
            
    
    
            
            
        },
        
        
        methods: {
        //Actions
            ...mapActions(useClientSignupStore,['accountInfoRequest','accountInfoChangeRequest','userDeleteRequest']),
            handleSubmit(){
                this.accountInfoChangeRequest(this.formData)
            }
        // validate () {
        //     this.$refs.form.submit()
        //     },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
        },
        mounted(){
            this.clientId
        },
        
        updated() {
            
            const router = this.$router;
            this.store = useClientSignupStore();
            useClientSignupStore().$onAction(({name, after})=>{
                if (name == "accountInfoChangedSuccess"){
                    
                    after(()=>{
                    })
                } 
                else if(name == "userDeleteRequest"){
                    after(()=> {
                        router.push({name: 'home'})
                    })
                    
                }else {
                    this.isAlert = true;
                }
            })
            
        },
        
        }
    
</script>