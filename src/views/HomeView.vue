<template>
<v-container app fluid>
  <v-row class="pa-6" align="center" justify="center">
    <v-col cols="12" md="4" lg="8">
      <h4>Welcome to 
        <br />
        <span><h1>Moody4Foody</h1></span>
      </h4>
    </v-col>
    <v-col cols="12" md="4" lg="8">
      <h3>This is my own production of Skip The Dishes.  The frontend was a 2-week final project for the 1st semester.
      I used Vue2, Vuetify, Pinia, Vue-cookies, and Composition API for state management, while Axios communicates with the backend.
      During the frontend implementation, we used the professors' database and followed their API documentation, for both the learning curve and to provide consistency for grading.
      <br />
      The final backend product 

      <br />
        Feel free to browse the restaurants and their respective menus.  
        <br />
        Register to get authentication and then have access to place an order!
        But please be respectful, it is for demo purposes only. 
        <br />
        The site is far from finished though!

      </h3>
    </v-col>
  </v-row>
  <v-row>
    <v-col> 
        <v-img 
            src="https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Delivery-Service-vector-illustration-Graphics-3951054-1-1-580x365.jpg"
            max-width="1000px"
            >
            </v-img>
        
    </v-col>
  </v-row>
  <!-- <v-row>
    <v-col>
        <v-card
            class="mx-auto my-12"
            max-width="500px"
            style="background-color:#fec112"
            outlined
            >
            <v-text-field
              label="City search..."
              append-icon="mdi-magnify"
            ></v-text-field>
        </v-card>
    </v-col>
  </v-row> -->
  
  <v-row class="pa-6">
    <v-col cols="12" md="6" lg="6">
      <h2 class="display-1 font-weight-bold grey--text">
        A 'Green' approach  
        <br>
        With our fleet of E-vehicles and drones, 
        <br>
        Foodie is revolutionizing the food delivery design. 
      </h2>
    </v-col>
    <v-col cols="12" md="6" lg="6">
      <h2 class="display-1 font-weight-bold grey--text">
        
        <br>
        
        <br>
        
      </h2>
    </v-col>
  </v-row>        
  </v-container>
</template>

<script>



export default {
    name: 'HomeView',
    components: {},
    computed: {
        username(){
          return this.$route.params.username
        }
    },
    data(){
      return{
        title: 'Are You In The Moodie For Foodie?',
        items: [
                  { title: 'Dashboard', icon: 'mdi-view-dashboard' },
                  { title: 'Photos', icon: 'mdi-image' },
                  { title: 'About', icon: 'mdi-help-box' },
              ],
        right: null,
        show: false,
        marker: true,
              }},
    methods: {
            
    },
            
          
  }
</script>
