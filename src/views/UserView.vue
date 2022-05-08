<template>
<div>
    
    <v-card class="elevation-12">
        <v-spacer></v-spacer>
        <v-card-actions>
            <v-btn
                color="success"
                class="mr-4"
                @click="userDeleteRequest">
                Delete
            </v-btn>
            <v-btn
                color="success"
                class="mr-4"
                @click="accountInfoChangeRequest">
                Change Info
            </v-btn>
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
                    v-model="pictureUrl"
                    type="pictureUrl"
                    :append-icon="'mdi-pencil'"
                    @click:append="accountInfoChangeRequest(pictureUrl)"
                    ></v-text-field>
            </v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import { useClientStore } from '@/stores/clientStore';
import { mapState,mapActions} from 'pinia';


    export default {
        
        name: 'SignupComponent',
        data: ()=>({
            store: undefined,
            
            emailRules: [
                v => !!v || 'E-mail is required...',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
            firstNameRules: [
                v => !!v || 'First name is required...',
                ],
            lastNameRules: [
                v => !!v || 'Last name is required...',
                ],
            usernameRules: [
                v => !!v || 'Username name is required...',
                ],
            passwordRules: [
                v => !!v || 'Password is required...',
                v => (v && v.length <= 10) || 'Password must be less than 10 characters',
                ],
            }),
        computed: {
            //Initial 
            ...mapState(useClientStore,['username','password','email','firstName','lastName','pictureUrl'])
            //Getters
            
            
            
        },
        
        
        methods: {
        //Actions
            ...mapActions(useClientStore,['userDeleteRequest', 'accountInfoChangeRequest', 'logoutRequest','accountInfoRequest']),
        
        validate () {
            this.$refs.form.submit()
            },
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
        },
        beforeMount(){
            this.accountInfoRequest
        },
        updated() {
            const router = this.$router;
            this.store = useClientStore();
            useClientStore().$onAction(({name, after})=>{
                if (name == "accountInfoChangedSuccess"){
                    after(()=>{
                        router.push({path: '/user-account/:clientId/'}); 
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