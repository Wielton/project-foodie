<template>
<v-container fluid app>
    <v-row>
        <v-col cols="12" md="6" lg="6">
            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark v-bind="attrs" v-on="on">
                    View
                </v-btn>
                </template>
                <v-list>
                <v-list-item v-for="(item, i) in items" :key="i" :item="item">
                    <v-list-item-title>{{ item.itemName }}</v-list-item-title>
                    <v-card-subtitle>{{ item.itemPrice }}</v-card-subtitle>
                </v-list-item>
                </v-list>
            </v-menu>
        </v-col>
    </v-row>
</v-container>
</template>

<script>
import { mapState } from "pinia";
import { useOrderStore } from "@/stores/orderStore";
export default {
  name: "OrderCard",
  computed: {
    // Fetch restaurantId and menuId to make sure the item belongs to the restaurant.
    // If they don't match, the item isn't added
    // The order card is frontend data array until the "order" button is hit and the "createOrder" function will fire
    ...mapState(useOrderStore, ["title", "items"]),
  },
  actions: {},
  getters: {},
};
</script>

