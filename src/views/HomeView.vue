<template>
<v-container fluid app>
  <v-row class="pa-6">
    <v-col cols="12" align="center" justify="center">
      <h4 class="grey--text display-3 pa-3 ma-0">Are you in the</h4>
      <h1 style="color:#fd7132" class="display-4 pa-3 ma-0">Moody 4 Foody?</h1>
    </v-col>
    <v-col cols="12" align="center" justify="center"> 
      <v-img
          class="mx-4"
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
  
  <v-row class="pa-6 ma-0">
    <v-col cols="12" align="center" justify="center">
      <h1 class="grey--text display-3 pa-3 ma-0">
        A <span class="green--text">'Green'</span> approach
      </h1>  
      <v-divider></v-divider>
      <p class="grey--text display-1 pa-6 ma-0">
        With our fleet of EV's and drones, 
        Foody is revolutionizing the food delivery design. 
      <br>
        More and more people are ordering delivery, which increases motor vehicle traffic
      <br>
        Let's decrease the harsh affects on our climate.
      </p>
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
        
              }},
    methods: {
            
    },
            
          
  }
</script>
<style lang="scss" scoped>

</style>
