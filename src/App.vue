<template>
  <v-app id="inspire">
    <TopNav/>
      <v-main>
          <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import TopNav from '@/components/TopNavComp'

  export default {
  components: { TopNav },
    
  }
</script>