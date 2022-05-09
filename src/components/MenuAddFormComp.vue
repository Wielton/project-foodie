<template>
<v-container>
    <v-card>
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            >
            <v-text-field
                v-model="name"
                label="Name"
                required
            ></v-text-field>
            
            <v-text-field
                v-model="description"
                label="Description"
                required
            ></v-text-field>
            
            <v-text-field
                v-model="price"
                label="Price"
                required
            ></v-text-field>
    
            <v-text-field
                v-model="imageUrl"
                label="Image URL"
            ></v-text-field>
        </v-form>
            <v-btn
                @click="addMenuItem(name,description,price,imageUrl)"
                >
                Add
            </v-btn>
    </v-card>
</v-container>
</template>

<script>
import { useRestaurantStore } from '@/stores/restaurantStore';
import { mapActions } from 'pinia';

export default {
        name: 'AddMenuItemComponent',
        data(){
            return{
            isAlert : false,
            valid: true,
            name: '',
            description: '',
            price: '',
            imageUrl: '',
        }
        },
        methods: {
        ...mapActions(useRestaurantStore,['addMenuItem']),
        
        
            // reset () {
            // this.$refs.form.reset()
            // },
            // resetValidation () {
            // this.$refs.form.resetValidation()
        },
}
</script>