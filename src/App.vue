<template>
  <v-app app>
    
    <TopNav/>
    
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNav from './components/TopNav.vue'
  export default {
  components: { TopNav },
    data: () => ({ 
      
      
      }),
  }
</script>