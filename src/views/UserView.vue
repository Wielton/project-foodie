<template>

  
    <v-container app>
      <v-card>
        <v-btn
        color="success"
        class="mr-4"
        @click="deleteUser">Delete</v-btn>
      </v-card>
    </v-container>
  
</template>
<script>
import { useLoginStore } from '@/stores/clientStore';
import { mapState } from 'pinia';
import cookie from 'vue-cookies'

    export default {
        
        data(){
            return{
            store: undefined,
            
            
}
        },
        
        computed: {
            //Initial 
            
            //Getters
            ...mapState(useLoginStore,['userId']),
            //Actions
            ...mapState(useLoginStore,['logout'])
        },
        
  mounted () {
            const router = this.$router;
            this.store = useLoginStore();
            useLoginStore().$onAction(({name, after})=>{
                if (name == "deleteSuccess"){
                        after(()=>{
                        cookie.remove('sessionToken', this.userId)
                        router.push({path: '/'}); 
                        })
                    } 
                
            })
        },
        }
</script>