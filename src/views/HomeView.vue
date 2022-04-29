<template>
  <v-container app>
        
          <v-btn 
            elevation="2"
            @click="showSignUpForm = !showSignUpForm"
            >Sign Up</v-btn>
          <div class="grey--text text-darken-1 mb-2">
                      Already a member?
                    </div>
          <v-btn 
            elevation="2"
            @click="showLoginForm = !showLoginForm"
            >Login</v-btn>
            <v-expand-transition>
              <v-card>
              <SignupComponent v-if="showSignUpForm"/>
              
          <v-spacer></v-spacer>
          
          <LoginComponent v-if="showLoginForm"/>
          </v-card>
          </v-expand-transition>
    </v-container>
</template>

<script>
import SignupComponent from '@/components/SignupComp'
import LoginComponent from '@/components/LoginComp.vue'

  

  export default {
    name: 'HomeView',
    data(){
            return{
            store: undefined,
            showLoginForm: false,
            showSignUpForm: false,
            items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
    right: null,
}
        },
    
    
    components: {
        SignupComponent,
        LoginComponent,
        
      
    },
  }
</script>
