<template>
<div>
    <v-card class="elevation-12">
        <v-card-actions>
            <v-btn
                color="success"
                class="mr-4"
                @click="userDeleteRequest">
            Delete</v-btn>

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
    </v-card-actions>
    </v-card>
    <v-divider></v-divider>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <v-subheader>Email</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    type="email"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(email)"
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Password</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="password"
                    :counter="10"
                    :rules="passwordRules"
                    type="password"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(password)"
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Username</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(username)"
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>First Name</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="firstName"
                    :rules="firstNameRules"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(firstName)"
                ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Last Name</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="lastName"
                    :rules="lastNameRules"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(lastName)"
                    ></v-text-field>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4">
                <v-subheader>Profile Picture</v-subheader>
            </v-col>
            <v-col cols="8">
                <v-text-field
                    v-model="profileUrl"
                    type="password"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(password)"
                    ></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapActions, mapWritableState } from 'pinia';


    export default {
        
        name: 'SignupComponent',
        data: ()=>({
            store: undefined,
            username: '',
            password: '',
            firstname: '',
            lastname: '',
            email: '',
            profileUrl: '',
            }),
        computed: {
            //Initial 
            ...mapWritableState(useClientStore,['username', 'firstName','lastName','password', 'pictureUrl','email']),
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