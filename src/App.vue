<template>
  <v-app id="inspire">
    <div>
      <TopNavBar/>
    </div>
    <v-spacer></v-spacer>
    <v-main>
      
          
        <router-view/>
      </v-main>
      <v-spacer></v-spacer>
    <div>
      <FooterComponent/>
    </div>
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComp.vue'
import TopNavBar from '@/components/TopNav.vue';
  export default {
  components: { FooterComponent, TopNavBar },
    data: () => ({ 
        
      }),
  }
</script>