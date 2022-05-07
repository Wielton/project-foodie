<template>
<v-container app>
      
      <div align="center"> 
        <v-img src="https://www.creativefabrica.com/wp-content/uploads/2020/04/25/Delivery-Service-vector-illustration-Graphics-3951054-1-1-580x365.jpg">
        </v-img>
        </div>
        <v-spacer></v-spacer>
        <v-card
            class="mx-auto my-12"
            max-width="500px"
            >
            <v-text-field
              label="City search..."
              append-icon="mdi-magnify"
            ></v-text-field>
        </v-card>
        <v-spacer></v-spacer>
        
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
