<template>
<div>
    <h3 :key="user.clientId">Hello {{ user.username }}</h3>
    
            
    <v-container fluid>
        <v-row>
            <v-col cols="12" sm="6" md="2">
                <v-subheader>Email</v-subheader>
                
            </v-col>
            <v-col cols="12" sm="6" md="6">
                <v-text-field
                    :placeholder="user.email"
                    v-model="formData.email"
                    type="email"
                    :append-icon="'mdi-pencil'"
                    clearable
                    ></v-text-field>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col cols="4">
                <v-subheader>Password</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field

                    v-model="formData.password"
                    :counter="20"
                    :rules="passwordRules"
                    type="password"
                    :append-icon="'mdi-pencil'"
                    clearable
                    ></v-text-field>
            </v-col>
        </v-row> -->
        <v-row>
            <v-col cols="4">
                <v-subheader>Username</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    :placeholder="user.username"
                    v-model="formData.username"
                    :append-icon="'mdi-pencil'"
                    clearable
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>First Name</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    :placeholder="user.firstName"
                    v-model="formData.firstName"
                    :append-icon="'mdi-pencil'"
                    clearable
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Last Name</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    :placeholder="user.lastName"
                    v-model="formData.lastName"
                    :append-icon="'mdi-pencil'"
                    ></v-text-field>
            </v-col>
        </v-row>
        <!-- <v-row>
            <v-col cols="4">
                <v-subheader>Profile Picture</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="pictureUrl"
                    type="pictureUrl"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(pictureUrl)"
                    ></v-text-field>
            </v-col>
        </v-row> -->
        <v-row>
            <v-col>
                <v-btn
                    color="success"
                    class="mr-4"
                    @click="accountInfoChangeRequest(formData)">
                    Change Info
                </v-btn>
                <v-btn
                    color="success"
                    class="mr-4"
                    @click="userDeleteRequest">
                    Delete Account
                </v-btn>
                
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
            this.accountInfoRequest();
        },
        updated() {
            const router = this.$router;
            this.store = useClientSignupStore();
            useClientSignupStore().$onAction(({name, after})=>{
                if (name == "accountInfoChangedSuccess"){
                    after(()=>{
                        
                        router.back
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