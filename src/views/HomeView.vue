<template>
<v-container app>
  <v-row>
    <v-col>    
      <div align="center"> 
        <v-img 
            src="https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Delivery-Service-vector-illustration-Graphics-3951054-1-1-580x365.jpg"
            max-width="1000px"
            >
            </v-img>
        </div>
    </v-col>
  </v-row>
  <v-row>
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
  </v-row>
  <v-row>
    <v-col>
      <v-img
        :src="require('@/assets/mainpage1.png')"
        ></v-img>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <p>
        A 'Green' approach  
        <br>
        With our fleet of E-vehicles and drones, 
        <br>
        Foodie is revolutionizing the food delivery design. 
      </p>
    </v-col>
  </v-row>        
  </v-container>
</template>

<script>


import { useClientStore } from '@/stores/clientStore';
import { mapState } from 'pinia';
export default {
    name: 'HomeView',
    components: {
        
        
      },
      computed: {
              ...mapState(useClientStore, ['title'])
              },
    data(){
            return{
            
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
