<template>
  <v-app id="inspire">
    <TopNav app/>
      <v-main app>
          <router-view/>
      </v-main>
  </v-app>
</template>

<script>
import { useClientSignupStore } from '@/stores/clientSignupStore';
import {mapActions, mapState} from 'pinia';
import TopNav from '@/components/TopNavComp'
  export default {
    data: ()=>({
      
    }),
  components: { TopNav },
  computed: {
    ...mapState(useClientSignupStore, ['user', 'isAuthorized'])
  },
  methods: {
    ...mapActions(useClientSignupStore, ['accountInfoRequest'])
  },
  mounted(){
    this.accountInfoRequest()
  }
  
}
</script>