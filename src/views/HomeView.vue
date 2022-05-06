<template>
<v-container app>
      <div>
        <!-- <v-img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Delivery-Service-vector-illustration-Graphics-3951054-1-1-580x365.jpg">
        </v-img> -->
        <h1>{{title}}</h1>
        
        </div>
        <v-spacer></v-spacer>
        <v-toolbar
        
        max-width="500px">
          <v-text-field
            label="City search..."
          ></v-text-field>
          <v-btn
              icon
              color="success"
              
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
          </v-toolbar>
  
      
        
      
      <v-spacer></v-spacer>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          
        </v-col>
        
      </v-row>
    </v-container>
  </v-form>
  <v-spacer></v-spacer>
  <v-form>
    <v-container>
      <v-row>
        <v-col>
          <v-btn 
            elevation="2"
            @click="showSignUpForm = !showSignUpForm"
            >Sign Up</v-btn>
          <div class="grey--text text-darken-1 mb-2">
                      Already a member?
                    </div>
        </v-col>
        <v-col>
          <v-btn 
            elevation="2"
            @click="showLoginForm = !showLoginForm"
            >Login</v-btn>
        </v-col>
      </v-row>
      <v-row>    
            <v-expand-transition>
          <div>
            <SignupComponent v-if="showSignUpForm"/>
              
          <v-spacer></v-spacer>
          
          <LoginComponent v-if="showLoginForm"/>
          </div>
          </v-expand-transition>
      </v-row>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
import SignupComponent from '@/components/SignupComp.vue';
import LoginComponent from '@/components/LoginComp.vue';
import { useClientStore } from '@/stores/clientStore';
import { mapState } from 'pinia';
export default {
    name: 'HomeView',
    components: {
        SignupComponent,
        LoginComponent,
  
      },
      computed: {
              ...mapState(useClientStore, ['title'])
              },
    data(){
            return{
            showLoginForm: false,
            showSignUpForm: false,
            items: [
                  { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                  { title: 'Photos', icon: 'mdi-image' },
                  { title: 'About', icon: 'mdi-help-box' },
                ],
            right: null,
            show: false,
            marker: true,
            cityIndex: 0,
            validCities: [
                "Calgary", 'Edmonton', 'Vancouver', 'Surrey', 'Winnipeg', 'Brandon', 'Moncton', 'Fredericton', "St. John's", "Mount Pearl",
                "Yellowknife", "Inuvik", "Halifax", "Sydney", "Iqaluit", "Arviat", "Toronto", "Ottawa", "Charlottetown", "Summerside", "Montreal",
                "Quebec City", "Saskatoon", "Regina", "Whitehorse", "Dawson City"
                ],
            select: 'Select a city to search from...',
              }},
            
            methods: {
              
              },
            
          
  }
</script>
