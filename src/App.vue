<template>
  <v-app app>
    <div>
    <TopNavBar/>
    </div>
    <v-main>
      <router-view></router-view>
    </v-main>
    <div>
      <FooterComponent/>
    </div>
  </v-app>
</template>

<script>
import FooterComponent from './components/FooterComp.vue'
import TopNavBar from './components/TopNav.vue'
  export default {
  components: { TopNavBar, FooterComponent },
    data: () => ({ 
      
      
      }),
  }
</script>