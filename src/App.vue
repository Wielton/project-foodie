<template>
  <v-app app>
    <div>
    <TopNavBar/>
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import TopNavBar from './components/TopNav.vue'
  export default {
  components: { TopNavBar },
    data: () => ({ 
      
      
      }),
  }
</script>