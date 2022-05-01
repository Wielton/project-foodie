<template>
  <v-container app>
      
        <h1>Foodie</h1>
        <h1>Are you in the moodie?</h1>
      
      <v-spacer></v-spacer>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            label="City search..."
          ></v-text-field>
        </v-col>
        <v-col>
            <v-btn
              icon
              color="success"
              @click="searchByCity(cityName)"
            >
              <v-icon>mdi-magnify</v-icon>
            </v-btn>
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
          <v-card>
            <SignupComponent v-if="showSignUpForm"/>
              
          <v-spacer></v-spacer>
          
          <LoginComponent v-if="showLoginForm"/>
          </v-card>
          </v-expand-transition>
      </v-row>
    </v-container>
  </v-form>
  </v-container>
</template>

<script>
import SignupComponent from '@/components/SignupComp'
import LoginComponent from '@/components/LoginComp.vue'

export default {
    name: 'HomeView',
    components: {
        SignupComponent,
        LoginComponent,
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
            computed: {
              
              },
            methods: {
              validCitiesSelection(){

              }
              },
            
          
  }
</script>
