<template>
    <v-list>
        <v-list-item
            v-for="order in orders" 
            :key="order.orderId"
            :order="order"
            two-line
            >
            <v-list-item-title>Order #: {{order.orderId}}</v-list-item-title>
            <v-list-item-subtitle>Restaurant: {{order.restaurantName}}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="order.isConfirmed === 1">Order is confirmed</v-list-item-subtitle>
            <v-list-item-subtitle v-if="order.isCompleted === 1">Order is completed</v-list-item-subtitle>
            <v-list-item-subtitle v-if="order.isCancelled === 1">Order is cancelled</v-list-item-subtitle>
            <v-list-item-action>
                <v-btn :to="({name: 'order', params: {user: user.username}})">VIEW</v-btn>
            </v-list-item-action>
        </v-list-item>
    </v-list>
</template>

<script>
import { useOrderStore } from '@/stores/orderStore';
import { useClientSignupStore } from '@/stores/clientSignupStore';

import {mapActions, mapState} from 'pinia'
    export default {
        name: 'OrdersComponentView',
        data() {
            return{
                
            }
        },
        computed: {
            ...mapState(useOrderStore,['orders']),
            ...mapState(useClientSignupStore, ['user', 'isAuthorized'])

        },
        methods: {
            ...mapActions(useOrderStore,['getOrders'])
        },
        mounted() {
            this.getOrders();
        }
    }
</script>

<style lang="scss" scoped>

</style>