<template>

  <div app>
    <v-btn
        color="success"
        class="mr-4"
        @click="userDeleteRequest">
        Delete
        </v-btn>
        <v-spacer></v-spacer>
        <v-card>
          <v-card-title>Welcome {{username}}</v-card-title>
        </v-card>
  </div>
    
      
        
      
    
  
</template>
<script>
import { useClientStore } from '@/stores/clientStore';
import { mapState } from 'pinia';


    export default {
        
        data(){
            return{
            store: undefined,
            items: [
          { title: 'Dashboard', icon: 'mdi-view-dashboard' },
          { title: 'Photos', icon: 'mdi-image' },
          { title: 'About', icon: 'mdi-help-box' },
        ],
    right: null,
            
}
        },
        
        computed: {
            //Initial 
            
            //Getters
            ...mapState(useClientStore,['username']),
            //Actions
            ...mapState(useClientStore,['userDeleteRequest'])
        },
        
  mounted () {
            const router = this.$router;
            this.store = useClientStore();
            useClientStore().$onAction(({name, after})=>{
                if (name == "deleteSuccess"){
                        after(()=>{
                        this.$cookie.remove('sessionToken')
                        router.push({path: '/'}); 
                        })
                    } 
                
            })
        },
        }
</script>