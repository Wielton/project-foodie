<template>
    <v-container app fluid>
        <v-row>
            <v-col>
                <LoginComp />
            </v-col>
        </v-row>
    </v-container>
    
</template>

<script>
import LoginComp from '@/components/LoginComp.vue'
    export default {
        components: { LoginComp },
        
    }
</script>

<style lang="scss" scoped>

</style>