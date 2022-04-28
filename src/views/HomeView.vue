<template>
  <v-container 
      app
      hidden>
    <v-card>
        <LoginComp/>
      </v-card>
      <v-card>
        <!-- <SignupComponent/> -->
      </v-card>
      
    
    </v-container>

</template>

<script>
// import SignupComponent from '@/components/SignupComp'
import LoginComp from '@/components/LoginComp.vue'

  

  export default {
    name: 'HomeView',
    items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
    right: null,
    components: {
        // SignupComponent,
        LoginComp,
        
      
    },
  }
</script>
